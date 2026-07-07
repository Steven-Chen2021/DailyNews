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
    {"date": "2026-07-08", "color": "navy", "theme": {"en": "Systems Under Strain, Capital on the Move", "zh": "系統承壓、資本轉向"}, "summary": {"en": "From constitutional maneuvering and AI access controls to World Cup governance, Hormuz shipping risk, supply-chain cooling, market nerves, power demand, tighter oversight, cyber defence and damaged infrastructure, today's edition tracks how institutions are adapting while core systems remain under strain.", "zh": "從憲政操作與 AI 存取管制，到世界盃治理、荷莫茲航運風險、供應鏈降溫、市場緊張、用電需求、監督收緊、資安防禦與基礎設施受損，今日版面聚焦各方如何在核心系統仍然承壓之際調整應對。"}},
    {"date": "2026-07-07", "color": "navy", "theme": {"en": "Signals, Bottlenecks and the Price of Keeping Systems in Motion", "zh": "訊號、瓶頸與維持系統運轉的代價"}, "summary": {"en": "From Iran regional signaling and AI-capital moves to World Cup governance, Suez shipping, supply-chain repricing, market rotation, heat stress, regulatory intervention and infrastructure strain, today's edition follows how institutions are paying more to keep critical systems moving.", "zh": "從伊朗區域訊號與 AI 資本動向，到世界盃治理、蘇伊士航運、供應鏈重估、市場輪動、高溫壓力、監管介入與基礎設施承壓，今日版面聚焦各方如何付出更高代價，維持關鍵系統持續運轉。"}},
    {"date": "2026-07-06", "color": "navy", "theme": {"en": "Routes, Rules and the Cost of Keeping Systems Credible", "zh": "路徑、規則與維持系統可信度的成本"}, "summary": {"en": "From diplomacy over Taiwan and Britain to Foxconn demand, World Cup politics, resumed Gulf shipping, supply-chain rewiring, market repricing, heat stress, regulatory clashes and cyber risk, today's edition follows how institutions are spending more to keep connected systems credible and operational.", "zh": "從台灣與英國的外交訊號、鴻海需求、世界盃政治、波灣航運重啟，到供應鏈重組、市場重估、高溫壓力、監管衝突與資安風險，今日版面聚焦各方如何付出更高成本，維持彼此連動系統的可信度與運作能力。"}},
    {"date": "2026-07-05", "color": "navy", "theme": {"en": "Chokepoints, Chips and the Cost of Keeping Systems Aligned", "zh": "瓶頸、晶片與維持系統協調的成本"}, "summary": {"en": "From Hormuz diplomacy and chip-driven market swings to World Cup pressure, energy strain, cyber risk and damage to transport assets, today's edition follows how governments and companies are paying more to keep interconnected systems functioning.", "zh": "從荷莫茲外交、晶片牽動的市場波動，到世界盃壓力、能源緊張、資安風險與運輸資產受損，今日版面聚焦政府與企業如何付出更高代價，維持彼此連動的系統持續運作。"}},
    {"date": "2026-07-04", "color": "navy", "theme": {"en": "Heat, Security and the Cost of Keeping Systems Moving", "zh": "高溫、安全與維持系統運轉的代價"}, "summary": {"en": "From Ukraine and Taiwan security signals to AI scrutiny, World Cup pressure, shipping disruption, supply-chain reshuffling, market repricing, climate strain and cyber intrusions, today's edition tracks how governments and companies are paying more to keep connected systems functioning.", "zh": "從烏克蘭與台灣安全訊號，到 AI 監管、世界盃壓力、航運干擾、供應鏈重組、市場重估、氣候壓力與網路入侵，今日版面聚焦政府與企業如何付出更高代價，維持彼此連動的系統持續運作。"}},
    {"date": "2026-07-03", "color": "navy", "theme": {"en": "Routes, Rules and the Rising Cost of Coordination", "zh": "航道、規則與協調成本攀升"}, "summary": {"en": "From Hormuz diplomacy and AI standards to World Cup pressure, shipping risk, supply-chain deals, climate strain and cyber scrutiny, today's edition follows how institutions are paying more to keep connected global systems working.", "zh": "從荷莫茲外交與 AI 標準，到世界盃壓力、航運風險、供應鏈交易、氣候負荷與資安審視，今日版面聚焦各方如何付出更高代價，維持彼此連動的全球系統持續運作。"}},
    {"date": "2026-07-02", "color": "navy", "theme": {"en": "Straits, Systems and the New Cost of Coordination", "zh": "海峽、系統與協調成本的新現實"}, "summary": {"en": "From Doha diplomacy and currency intervention to AI trades, World Cup commerce, Hormuz shipping risk, trade pact uncertainty and cyber exposure, today's edition tracks how governments and companies are paying more to keep global systems aligned.", "zh": "從杜哈外交、匯市干預到 AI 交易、世界盃商機、荷莫茲航運風險、貿易協議不確定性與資安曝險，今日版面聚焦政府與企業如何付出更高代價，維持全球系統的協調運作。"}},
    {"date": "2026-07-01", "color": "navy", "theme": {"en": "Heat, Friction and the Cost of Moving First", "zh": "熱浪、摩擦與率先行動的代價"}, "summary": {"en": "From Doha diplomacy and Korean chip plans to World Cup momentum, Hormuz disruption, inflation repricing and airport expansion, today's edition tracks how governments and companies are paying more to secure resilience across connected global systems.", "zh": "從杜哈外交與南韓晶片計畫，到世界盃動能、荷莫茲干擾、通膨重估與機場擴建，今日版面聚焦政府與企業如何付出更高成本，在彼此連動的全球系統中爭取韌性。"}},
    {"date": "2026-06-30", "color": "navy", "theme": {"en": "Conflict Signals, AI Capacity and the Price of Resilience", "zh": "衝突訊號、AI 產能與韌性的代價"}, "summary": {"en": "From diplomatic friction and AI hardware moves to World Cup pressure, maritime risk, climate policy and corridor investment, today's edition tracks how institutions are paying more to preserve resilience across connected global systems.", "zh": "從外交摩擦與 AI 硬體動向，到世界盃壓力、海運風險、氣候政策與走廊投資，今日版面聚焦各方如何付出更高成本，在彼此連動的全球系統中維持韌性。"}},
    { date: "2026-06-29", color: "navy",
      theme:   { en: "Fragile Routes, Harder Rules and the Systems Behind Confidence", zh: "脆弱航路、更嚴規則與信心背後的系統" },
      summary: { en: "From diplomacy and AI capacity to World Cup pressure, shipping risk, market repricing and infrastructure bottlenecks, today's edition tracks how institutions are rebuilding confidence across tightly connected global systems.", zh: "從外交與 AI 產能，到世界盃壓力、航運風險、市場重定價與基礎設施瓶頸，今日版面聚焦各方如何在緊密連動的全球系統中重建信心。" } },
    { date: "2026-06-28", color: "navy",
      theme:   { en: "Heat, Risk, Routes and New Points of Pressure", zh: "熱浪、風險、航路與新的壓力點" },
      summary: { en: "From diplomatic strain and chip uncertainty to World Cup momentum, Hormuz shipping danger, compliance pressure and heat-stressed infrastructure, today's edition tracks how connected systems are being tested from several directions at once.", zh: "從外交緊張與晶片不確定性，到世界盃動能、荷莫茲航運風險、法遵壓力與高溫下的基礎設施，今日版面聚焦彼此連動的系統如何同時承受多重壓力。" } },
    { date: "2026-06-27", color: "navy",
      theme:   { en: "Heat, Chips, Shipping Lanes and Harder Rules", zh: "熱浪、晶片、航道與更嚴規則" },
      summary: { en: "Using Reuters-led candidate coverage across diplomacy, semiconductors, World Cup momentum, Hormuz shipping risk, climate stress and tougher regulation, today's edition follows how governments, markets and operators are repricing resilience across connected systems.", zh: "以路透主導的候選新聞為基礎，從外交、半導體、世界盃動能、荷莫茲航運風險、氣候壓力到更嚴監管，今日版面聚焦政府、市場與營運者如何在彼此連動的系統中重新衡量韌性。" } },
    { date: "2026-06-26", color: "navy",
      theme:   { en: "Ports, Technology and the New Geography of Global Commerce", zh: "港口、科技與全球商業版圖的重新配置" },
      summary: { en: "From reopened shipping corridors and AI expansion to market risk, climate pressure and infrastructure strain, today's edition follows how governments and companies are redrawing the operating map of global commerce.", zh: "從重新開放的航運通道、AI 擴張，到市場風險、氣候壓力與基礎設施承壓，今日版面聚焦政府與企業如何重新劃定全球商業運作的版圖。" } },
    { date: "2026-06-25", color: "navy",
      theme:   { en: "Reopened Straits, Racing Chips, Harder Rules", zh: "海峽重開、晶片競速與更嚴的規則" },
      summary: { en: "From Hormuz shipping and rail outages to AI capacity, climate stress, cyber warnings and tighter rules, today's edition follows how markets and governments are rebuilding confidence while repricing risk across global systems.", zh: "從荷莫茲航運與鐵路停擺，到 AI 產能、氣候壓力、資安警訊與更嚴監管，今日版面聚焦政府與市場如何在全球系統中一邊重建信心、一邊重新定價風險。" } },
    { date: "2026-06-24", color: "navy",
      theme:   { en: "Chokepoints, Chips and Strategic Repricing", zh: "瓶頸、晶片與策略重估" },
      summary: { en: "From Hormuz navigation and rail tariffs to AI capital, rare-earth controls and cyber risk, today's edition tracks how governments and markets are repricing resilience across trade, technology and infrastructure.", zh: "從荷莫茲通航、鐵路費率，到 AI 資本、稀土管制與網路風險，今日版面聚焦政府與市場如何在貿易、科技與基礎設施之間重新衡量韌性。" } },
    { date: "2026-06-23", color: "navy",
      theme:   { en: "Risk Corridors and Strategic Resets", zh: "風險通道與策略重整" },
      summary: { en: "From Iran diplomacy and AI capital flows to Hormuz shipping, cyber breaches and rail pricing, today's edition tracks how governments and markets are resetting strategy around fragile global systems.", zh: "從伊朗外交、AI 資本流向到荷莫茲航運、網路攻擊與鐵路定價，今日版面聚焦政府與市場如何圍繞脆弱的全球系統重新調整策略。" } },
    { date: "2026-06-20", color: "navy",
      theme:   { en: "Signals, Systems and Strategic Repricing", zh: "訊號、系統和策略重新定價" },
      summary: { en: "From diplomacy, AI and shipping to cyber defence, regulation and infrastructure, today's edition tracks how fresh headlines are forcing governments and markets to reprice resilience across global systems.", zh: "從外交、人工智慧和航運到網路防禦、監管和基礎設施，今天的版本追蹤了新的頭條新聞如何迫使政府和市場重新定價全球系統的彈性。" } },
    { date: "2026-06-19", color: "navy",
      theme:   { en: "Routes Reopen, Risks Reprice", zh: "航道重開、風險重估" },
      summary: { en: "From Hormuz tanker traffic and critical-minerals diplomacy to AI financing, cyber defence and revived transport corridors, today's edition tracks how governments and markets are recalibrating the systems that move energy, capital and goods.", zh: "從荷莫茲油輪通行、關鍵礦物外交，到 AI 融資、網路防禦與重啟的運輸走廊，今日版面聚焦政府與市場如何重新校準推動能源、資本與貨物流動的關鍵系統。" } },
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


