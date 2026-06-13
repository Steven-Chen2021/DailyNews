#!/usr/bin/env python3
import argparse
import datetime as dt
import json
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Dict, List

DEFAULT_TZ = dt.timezone(dt.timedelta(hours=8), name="Asia/Taipei")
USER_AGENT = "Mozilla/5.0 (DailyNews collector)"
GOOGLE_RSS = "https://news.google.com/rss/search?q={query}&hl=en-US&gl=US&ceid=US:en"

CATEGORY_QUERIES: Dict[str, List[str]] = {
    "international": [
        'Taiwan international affairs when:2d',
        'Asia diplomacy Reuters when:2d',
        'global diplomacy Reuters when:2d',
    ],
    "technology": [
        'Taiwan technology AI Reuters when:2d',
        'AI infrastructure Reuters when:2d',
        'semiconductor Reuters when:2d',
    ],
    "sports": [
        'Taiwan sports when:2d',
        'world sports Reuters when:2d',
        'sports AP when:2d',
    ],
    "shipping": [
        'shipping Reuters when:2d',
        'maritime shipping when:2d',
        'container shipping Reuters when:2d',
    ],
    "supply-chain": [
        'supply chain Reuters when:2d',
        'manufacturing supply chain Asia when:2d',
        'tariffs supply chain Reuters when:2d',
    ],
    "economy-markets": [
        'markets Reuters when:2d',
        'economy Reuters when:2d',
        'Taiwan economy Reuters when:2d',
    ],
    "energy-climate": [
        'energy Reuters when:2d',
        'climate Reuters when:2d',
        'Taiwan energy climate when:2d',
    ],
    "policy-regulation": [
        'regulation Reuters when:2d',
        'antitrust Reuters when:2d',
        'Taiwan policy regulation when:2d',
    ],
    "cybersecurity": [
        'cybersecurity Reuters when:2d',
        'cyber attack Reuters when:2d',
        'Taiwan cybersecurity when:2d',
    ],
    "logistics-infrastructure": [
        'logistics infrastructure Reuters when:2d',
        'port infrastructure when:2d',
        'rail freight infrastructure Reuters when:2d',
    ],
}

SOURCE_SCORES = {
    'Reuters': 100,
    'Associated Press': 92,
    'AP News': 92,
    'BBC': 90,
    'BBC News': 90,
    'Focus Taiwan': 85,
    'Taipei Times': 82,
    'Taiwan News': 78,
    'Nikkei Asia': 76,
    'Financial Times': 75,
    'Bloomberg': 75,
    'CNBC': 72,
    'The Maritime Executive': 72,
    'gCaptain': 70,
    'Lloyd\'s List': 70,
    'S&P Global': 68,
    'Axios': 62,
}

SOURCE_PENALTIES = {
    'MSN': -30,
    'TradingView': -30,
    'World Economic Forum': -25,
    'Coupang, Inc.': -40,
    'thinkingtaiwan.net': -20,
    'Lowy Institute': -20,
    'CGTN': -40,
    'news.cgtn.com': -40,
}


def now_taipei() -> dt.datetime:
    return dt.datetime.now(DEFAULT_TZ)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Collect bounded DailyNews story candidates from Google News RSS.")
    parser.add_argument("--date", help="Edition date YYYY-MM-DD. Defaults to today in Asia/Taipei.")
    parser.add_argument("--limit-per-category", type=int, default=8)
    parser.add_argument("--timeout", type=int, default=20)
    parser.add_argument("--output-dir", default="automation/candidates")
    return parser.parse_args()


def normalize_title(title: str) -> str:
    title = title.strip().lower()
    title = re.sub(r"\s+", " ", title)
    return title


def split_title_and_source(raw: str) -> tuple[str, str]:
    parts = [p.strip() for p in raw.rsplit(" - ", 1)]
    if len(parts) == 2 and parts[0] and parts[1]:
        return parts[0], parts[1]
    return raw.strip(), ""


def fetch_xml(url: str, timeout: int) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def collect_query(query: str, timeout: int) -> List[dict]:
    encoded = urllib.parse.quote(query, safe='')
    url = GOOGLE_RSS.format(query=encoded)
    xml_data = fetch_xml(url, timeout)
    root = ET.fromstring(xml_data)
    channel = root.find("channel")
    if channel is None:
        raise ValueError(f"RSS feed missing channel element for query: {query}")
    items = channel.findall("item")
    out = []
    for rank, item in enumerate(items, start=1):
        raw_title = item.findtext("title") or ""
        title, source = split_title_and_source(raw_title)
        link = item.findtext("link") or ""
        pub_date = item.findtext("pubDate") or ""
        guid = item.findtext("guid") or ""
        description = item.findtext("description") or ""
        out.append({
            "title": title,
            "source": source,
            "google_news_url": link,
            "published": pub_date,
            "guid": guid,
            "description": description,
            "query": query,
            "rank_within_query": rank,
        })
    return out


def article_score(item: dict) -> int:
    source = (item.get("source") or "").strip()
    title = (item.get("title") or "").strip()
    query = item.get("query") or ""
    score = 0

    score += SOURCE_SCORES.get(source, 0)
    score += SOURCE_PENALTIES.get(source, 0)

    if 'Reuters' in query:
        score += 8
    if 'Taiwan' in query or 'Asia' in query:
        score += 4

    title_l = title.lower()
    if any(token in title_l for token in ['exclusive', 'analysis', 'breakingviews']):
        score -= 4
    if any(token in title_l for token in ['opinion', 'commentary']):
        score -= 10
    if any(token in source.lower() for token in ['inc.', 'press release']):
        score -= 25

    return score


def collect_all(limit_per_category: int, timeout: int) -> dict:
    report = {
        "collected_at": now_taipei().isoformat(),
        "categories": {},
        "errors": [],
    }
    for category, queries in CATEGORY_QUERIES.items():
        seen = set()
        pool = []
        for query in queries:
            try:
                items = collect_query(query, timeout)
            except Exception as exc:  # noqa: BLE001
                report["errors"].append({
                    "category": category,
                    "query": query,
                    "error": f"{type(exc).__name__}: {exc}",
                })
                continue
            for item in items:
                key = normalize_title(item["title"])
                if not key or key in seen:
                    continue
                seen.add(key)
                item["category"] = category
                item["fingerprint"] = key
                item["score"] = article_score(item)
                pool.append(item)

        pool.sort(key=lambda item: (-item["score"], item["rank_within_query"], item["title"]))
        report["categories"][category] = pool[:limit_per_category]
    return report


def main() -> int:
    args = parse_args()
    today = now_taipei().date().isoformat()
    target_date = args.date or today
    try:
        dt.date.fromisoformat(target_date)
    except ValueError:
        print(f"Invalid --date: {target_date}", file=sys.stderr)
        return 2

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / f"dailynews-candidates-{target_date}.json"

    report = collect_all(limit_per_category=args.limit_per_category, timeout=args.timeout)
    report["edition_date"] = target_date
    report["limits"] = {"limit_per_category": args.limit_per_category, "timeout_seconds": args.timeout}
    report["query_map"] = CATEGORY_QUERIES

    output_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    counts = {category: len(items) for category, items in report["categories"].items()}
    summary = {
        "edition_date": target_date,
        "output_path": str(output_path.resolve()),
        "counts": counts,
        "error_count": len(report["errors"]),
        "categories_below_five": [k for k, v in counts.items() if v < 5],
    }
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
