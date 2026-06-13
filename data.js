window.DAILY_NEWS = {
  categories: [
    { id: "top-stories", en: "Top Stories", zh: "焦點新聞" },
    { id: "international", en: "International", zh: "國際新聞" },
    { id: "technology", en: "Technology", zh: "科技" },
    { id: "sports", en: "Sports", zh: "體育" },
    { id: "shipping", en: "Shipping", zh: "航運" },
    { id: "supply-chain", en: "Supply Chain", zh: "供應鏈" }
  ],
  editions: [
    {
      date: "2026-06-13", color: "rust",
      theme: { en: "Trade Routes in Motion", zh: "變動中的全球貿易航線" },
      summary: { en: "Ports, technology and the new geography of global commerce.", zh: "從港口、科技到全球商業版圖的重新配置。" },
      stories: [
        { id: "strait-dialogue", category: "international", image: "meeting", lead: true, author: "Maya Chen", read: 6, title: { en: "Regional leaders reopen a practical channel for dialogue", zh: "區域領袖重啟務實對話管道" }, dek: { en: "A smaller diplomatic forum is creating room for progress on trade, security and climate resilience.", zh: "小型外交論壇為貿易、安全與氣候韌性議題創造新的進展空間。" } },
        { id: "efficient-ai", category: "technology", image: "technology", lead: true, author: "Iris Park", read: 7, title: { en: "The quiet race to make artificial intelligence use less energy", zh: "降低人工智慧耗能的無聲競賽" }, dek: { en: "Researchers are finding that smaller, specialized systems can deliver more useful results with less computing power.", zh: "研究人員發現，更小型且專門化的系統能以較少算力產出更實用的成果。" } },
        { id: "stadium-data", category: "sports", image: "stadium", lead: true, author: "Leo Huang", read: 5, title: { en: "How live data is changing decisions on the field", zh: "即時數據如何改變賽場決策" }, dek: { en: "Coaches are balancing real-time analytics with the experience and intuition of athletes.", zh: "教練開始在即時分析、運動員經驗與直覺之間尋找平衡。" } },
        { id: "green-corridor", category: "shipping", image: "shipping", lead: true, author: "Daniel Ko", read: 8, title: { en: "Asia’s first green shipping corridors move from plan to practice", zh: "亞洲綠色航運走廊從規劃邁向實踐" }, dek: { en: "Ports and carriers are coordinating fuel, infrastructure and schedules to cut emissions on major routes.", zh: "港口與航商正協調燃料、基礎建設與船期，以降低主要航線的碳排放。" } },
        { id: "inventory-reset", category: "supply-chain", image: "warehouse", lead: true, author: "Nina Shah", read: 6, title: { en: "Companies rethink inventory after years of disruption", zh: "企業在多年動盪後重新思考庫存策略" }, dek: { en: "The new model favors visibility and flexible regional networks over simply holding more stock.", zh: "新模式不再只是增加庫存，而是強調可視性與彈性的區域網絡。" } },
        { id: "port-ai", category: "technology", image: "data", author: "Mina Sato", read: 4, title: { en: "Ports turn to AI to predict the next bottleneck", zh: "港口利用人工智慧預測下一個壅塞點" }, dek: { en: "New forecasting tools combine vessel, weather and terminal data to improve daily planning.", zh: "新預測工具整合船舶、天候與碼頭資料，改善每日營運規劃。" } },
        { id: "container-rates", category: "shipping", image: "containers", author: "Owen Bell", read: 5, title: { en: "Container rates stabilize as capacity returns", zh: "運力回升，貨櫃運價逐步穩定" }, dek: { en: "Shippers remain cautious, but recent capacity additions are easing pressure on key lanes.", zh: "貨主仍保持謹慎，但新增運力正緩解主要航線的壓力。" } },
        { id: "resilient-suppliers", category: "supply-chain", image: "factory", author: "Priya Raman", read: 5, title: { en: "Supplier diversity becomes a board-level priority", zh: "供應商多元化成為董事會層級議題" }, dek: { en: "Procurement teams are measuring resilience alongside cost, quality and delivery.", zh: "採購團隊開始將韌性與成本、品質、交付能力一併衡量。" } }
      ]
    },
    {
      date: "2026-06-12", color: "navy",
      theme: { en: "The Connected Port", zh: "智慧港口新時代" },
      summary: { en: "A daily briefing on automation, labor and maritime infrastructure.", zh: "聚焦自動化、勞動力與海運基礎建設的每日專題。" },
      stories: [
        { id: "port-twins", category: "technology", image: "data", lead: true, author: "Iris Park", read: 7, title: { en: "Digital twins give ports a clearer view of tomorrow", zh: "數位分身讓港口更清楚看見明日營運" }, dek: { en: "Virtual models are helping terminal operators test changes before applying them in the physical world.", zh: "虛擬模型協助碼頭營運商在實際執行前測試各項變更。" } },
        { id: "canal-recovery", category: "shipping", image: "shipping", lead: true, author: "Daniel Ko", read: 5, title: { en: "Canal traffic recovers, but route planners stay cautious", zh: "運河通行量回升，航線規劃仍保持謹慎" }, dek: { en: "Improved conditions are restoring capacity while carriers retain alternative plans.", zh: "情況改善使運能逐步恢復，但航商仍保留替代方案。" } },
        { id: "women-football", category: "sports", image: "stadium", lead: true, author: "Leo Huang", read: 4, title: { en: "A new football league builds momentum beyond major cities", zh: "新足球聯賽在都會區之外累積動能" }, dek: { en: "Community clubs are turning local support into a sustainable national competition.", zh: "社區俱樂部正將地方支持轉化為可持續的全國賽事。" } },
        { id: "regional-trade", category: "international", image: "meeting", lead: true, author: "Maya Chen", read: 6, title: { en: "Regional trade talks focus on practical standards", zh: "區域貿易談判聚焦務實標準" }, dek: { en: "Negotiators are prioritizing customs data and product rules over broad declarations.", zh: "談判代表優先處理海關資料與產品規範，而非廣泛宣言。" } },
        { id: "cold-chain", category: "supply-chain", image: "warehouse", lead: true, author: "Nina Shah", read: 5, title: { en: "Cold-chain investment expands beyond food and medicine", zh: "冷鏈投資從食品與醫藥延伸至更多產業" }, dek: { en: "Precision manufacturing is creating new demand for temperature-controlled logistics.", zh: "精密製造業正為溫控物流創造新的需求。" } }
      ]
    },
    {
      date: "2026-06-11", color: "olive",
      theme: { en: "Resilience by Design", zh: "以設計打造韌性" },
      summary: { en: "How global networks prepare for the next disruption.", zh: "全球網絡如何為下一次中斷做好準備。" },
      stories: [
        { id: "customs-window", category: "international", image: "meeting", lead: true, author: "Maya Chen", read: 5, title: { en: "Neighbors agree on a single window for customs data", zh: "鄰近國家同意建立海關資料單一窗口" }, dek: { en: "The agreement aims to reduce delays without weakening border controls.", zh: "這項協議旨在不削弱邊境管制的前提下減少延誤。" } },
        { id: "secure-sensors", category: "technology", image: "technology", lead: true, author: "Iris Park", read: 6, title: { en: "Low-cost sensors bring better visibility to small exporters", zh: "低成本感測器提升中小出口商的貨況可視性" }, dek: { en: "Affordable tracking tools are narrowing the information gap across supply networks.", zh: "平價追蹤工具正縮小供應網絡中的資訊落差。" } },
        { id: "cycling-finals", category: "sports", image: "stadium", lead: true, author: "Leo Huang", read: 3, title: { en: "Cycling finals deliver a surprise finish", zh: "自由車決賽出現意外結果" }, dek: { en: "A late tactical move reshaped the podium in the season’s closest race.", zh: "比賽後段的戰術變化，改寫本季最接近的一場賽事頒獎台。" } },
        { id: "fleet-orders", category: "shipping", image: "containers", lead: true, author: "Daniel Ko", read: 5, title: { en: "Fleet orders shift toward flexible, fuel-ready vessels", zh: "船隊訂單轉向彈性且支援新燃料的船舶" }, dek: { en: "Owners are paying for adaptability as fuel choices remain uncertain.", zh: "面對燃料選擇仍不確定，船東更願意為適應能力投資。" } },
        { id: "nearshoring", category: "supply-chain", image: "factory", lead: true, author: "Nina Shah", read: 7, title: { en: "Nearshoring matures from slogan into operating model", zh: "近岸外包從口號走向實際營運模式" }, dek: { en: "Companies are learning where regional production improves service and where it adds cost.", zh: "企業逐漸掌握區域生產在哪些環節改善服務，又在哪些環節增加成本。" } }
      ]
    },
    {
      date: "2026-06-10", color: "gold",
      theme: { en: "Networks That Endure", zh: "持續運作的全球網絡" },
      summary: { en: "People, infrastructure and the systems connecting world trade.", zh: "連結全球貿易的人才、基礎建設與系統。" },
      stories: [
        { id: "city-partnership", category: "international", image: "city", lead: true, author: "Maya Chen", read: 5, title: { en: "Port cities form a climate adaptation partnership", zh: "港口城市成立氣候調適合作夥伴關係" }, dek: { en: "Municipal leaders will share data and financing models for resilient waterfronts.", zh: "城市領袖將共享資料與融資模式，打造更具韌性的濱水區。" } },
        { id: "open-logistics", category: "technology", image: "data", lead: true, author: "Iris Park", read: 4, title: { en: "Open logistics standards gain industry support", zh: "開放物流標準獲得產業支持" }, dek: { en: "Common formats promise easier data exchange between carriers, ports and customers.", zh: "共通格式有望簡化航商、港口與客戶之間的資料交換。" } },
        { id: "marathon-heat", category: "sports", image: "stadium", lead: true, author: "Leo Huang", read: 4, title: { en: "Marathon organizers redesign races for a warmer climate", zh: "馬拉松主辦單位因應暖化重新設計賽事" }, dek: { en: "Earlier starts, shaded routes and new medical protocols are becoming standard.", zh: "提早起跑、遮蔭路線與新醫療程序正逐漸成為標準。" } },
        { id: "seafarer-training", category: "shipping", image: "shipping", lead: true, author: "Daniel Ko", read: 6, title: { en: "Seafarer training catches up with the low-carbon fleet", zh: "船員訓練加速跟上低碳船隊需求" }, dek: { en: "New fuels require updated safety skills throughout maritime operations.", zh: "新燃料要求海運作業全面更新安全技能。" } },
        { id: "supplier-finance", category: "supply-chain", image: "warehouse", lead: true, author: "Nina Shah", read: 5, title: { en: "Faster supplier finance strengthens smaller partners", zh: "加速供應商融資，強化中小型合作夥伴" }, dek: { en: "Digital approval systems are shortening payment cycles across complex networks.", zh: "數位審核系統正縮短複雜供應網絡中的付款週期。" } }
      ]
    }
  ]
};
