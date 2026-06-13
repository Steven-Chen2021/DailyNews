// data-index.js — lightweight index: categories + edition metadata only.
// Stories live in per-month files: data-YYYY-MM.js
// Add new editions at the TOP of the editions array.
// Never remove old entries — the archive depends on them.

window.DAILY_NEWS = {
  categories: [
    { id: "top-stories",             en: "Top Stories",             zh: "焦點新聞" },
    { id: "international",           en: "International",           zh: "國際新聞" },
    { id: "technology",              en: "Technology",              zh: "科技" },
    { id: "sports",                  en: "Sports",                  zh: "體育" },
    { id: "shipping",                en: "Shipping",                zh: "航運" },
    { id: "supply-chain",            en: "Supply Chain",            zh: "供應鏈" },
    { id: "economy-markets",         en: "Economy & Markets",       zh: "經濟與市場" },
    { id: "energy-climate",          en: "Energy & Climate",        zh: "能源與氣候" },
    { id: "policy-regulation",       en: "Policy & Regulation",     zh: "政策與法規" },
    { id: "cybersecurity",           en: "Cybersecurity",           zh: "網路安全" },
    { id: "logistics-infrastructure",en: "Logistics & Infrastructure", zh: "物流與基礎建設" }
  ],

  // Metadata only — no stories array here.
  // Stories are fetched on-demand from data-YYYY-MM.js files.
  editions: [
    { date: "2026-06-13", color: "rust",
      theme:   { en: "Trade Routes in Motion",        zh: "變動中的全球貿易航線" },
      summary: { en: "Ports, technology and the new geography of global commerce.", zh: "從港口、科技到全球商業版圖的重新配置。" } },
    { date: "2026-06-12", color: "navy",
      theme:   { en: "The Connected Port",            zh: "智慧港口新時代" },
      summary: { en: "A daily briefing on automation, labor and maritime infrastructure.", zh: "聚焦自動化、勞動力與海運基礎建設的每日專題。" } },
    { date: "2026-06-11", color: "olive",
      theme:   { en: "Resilience by Design",          zh: "以設計打造韌性" },
      summary: { en: "How global networks prepare for the next disruption.", zh: "全球網絡如何為下一次中斷做好準備。" } },
    { date: "2026-06-10", color: "gold",
      theme:   { en: "Networks That Endure",          zh: "持續運作的全球網絡" },
      summary: { en: "People, infrastructure and the systems connecting world trade.", zh: "連結全球貿易的人才、基礎建設與系統。" } }
  ]
};
