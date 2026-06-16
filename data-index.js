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
    { date: "2026-06-17", color: "navy",
      theme:   { en: "Repricing Routes and Resilience", zh: "重估路徑與韌性" },
      summary: { en: "From Korean diplomacy and AI build-outs to Hormuz shipping risk, market repricing and post-conflict investment plans, today's edition follows how governments and companies are rebuilding confidence across stressed global networks.", zh: "從韓半島外交、AI 擴張，到荷莫茲航運風險、市場重新定價與衝突後投資規劃，今日版面聚焦政府與企業如何在承壓的全球網絡中重建信心。" } },
    { date: "2026-06-16", color: "navy",
      theme:   { en: "Corridors, Controls and Capital", zh: "走廊、管制與資本" },
      summary: { en: "From ceasefire diplomacy and AI restrictions to supply-chain reordering and strategic infrastructure, today's edition tracks how governments and markets are repricing risk across the global system.", zh: "從停火外交、AI 限制到供應鏈重組與戰略基礎設施，今日版面追蹤政府與市場如何在全球體系中重新定價風險。" } },
    { date: "2026-06-15", color: "navy",
      theme:   { en: "Controls, Corridors and Risk", zh: "管制、通道與風險" },
      summary: { en: "From Iran diplomacy and AI access controls to shipping chokepoints and cross-border infrastructure, today's edition follows how regulation and conflict are reshaping global flows.", zh: "從伊朗外交與 AI 存取限制，到航運瓶頸與跨境基礎建設，今日版面聚焦監管與衝突如何重塑全球流動。" } },
    { date: "2026-06-14", color: "navy",
      theme:   { en: "Conflict, Controls and Chokepoints", zh: "衝突、管制與瓶頸" },
      summary: { en: "From Hormuz and AI controls to trade rules and transport corridors, today's edition tracks how conflict and regulation are tightening the world's critical systems.", zh: "從荷莫茲海峽與 AI 管制，到貿易規則與運輸走廊，今日版面聚焦衝突與監管如何收緊全球關鍵系統。" } },
    { date: "2026-06-13", color: "rust",
      theme:   { en: "Fragile Corridors, Fast Machines", zh: "脆弱航道與高速機器" },
      summary: { en: "From Taiwan's AI hubs to Hormuz shipping lanes, today's edition tracks how geopolitics, infrastructure and regulation are reshaping global flows.", zh: "從台灣的 AI 樞紐到荷莫茲海峽航道，今日版面追蹤地緣政治、基礎建設與監管如何重塑全球流動。" } },
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
