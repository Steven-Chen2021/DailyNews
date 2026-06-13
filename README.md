# Daily News | 每日新聞

A bilingual, responsive newspaper website designed for GitHub Pages and published at [www.jsva.uk](https://www.jsva.uk).

## Features

- Traditional Chinese-first bilingual layout, with English shown directly after each Chinese heading and summary
- Editorial portal page with featured stories and a permanent daily archive
- Daily editions selected with `?date=YYYY-MM-DD`
- Each edition owns its historical stories, so old news remains unchanged
- Ten categories covering International, Technology, Sports, Shipping, Supply Chain, Economy & Markets, Energy & Climate, Policy & Regulation, Cybersecurity, and Logistics & Infrastructure
- Mobile navigation and responsive layouts
- Five-step font size control remembered in the browser
- Accessible landmarks, skip links, reduced-motion support, and keyboard-friendly controls

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, then choose the `main` branch and `/ (root)` folder.

## Add a daily edition

Edit `data-index.js` and the relevant monthly file `data-YYYY-MM.js`:

1. Add a new object at the beginning of the `editions` array in `data-index.js`.
2. Include bilingual `theme` and `summary` values using `en` and `zh`.
3. Add that day's stories to `window.DAILY_NEWS_STORIES["YYYY-MM-DD"]` inside the relevant `data-YYYY-MM.js` file.
4. Use a category ID defined in the top-level `categories` array.
5. Add both English and Traditional Chinese `title` and `dek` values to every story.
6. Mark the main story in each section with `lead: true`.

Old edition objects should not be removed or overwritten. This keeps every historical daily edition available at its original date URL.

## Automation collector

A bounded candidate collector lives at `scripts/dailynews_collect_candidates.py`.

Example:

```bash
python3 scripts/dailynews_collect_candidates.py --date 2026-06-13
```

It writes a dated JSON candidate pack to `automation/candidates/` for the publishing workflow to consume. These generated candidate files are build artifacts and should not be committed.

The current articles are demonstration copy and should be replaced with verified reporting before publication.
