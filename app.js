(function () {
  const news = window.DAILY_NEWS;
  const root = document.documentElement;
  const sizes = [0.92, 1, 1.12, 1.25, 1.4];
  let sizeIndex = Number(localStorage.getItem("dailyNewsFontSize") || 1);

  const copy = {
    en: { skip: "Skip to content", tagline: "Global insight. Every day.", text: "Text", morning: "Morning Edition", sections: "Sections", latest: "Latest Edition", breaking: "Ports, technology and the new geography of global commerce", openEdition: "Open edition", todayStories: "Today's Essential Stories", readToday: "Read today's edition", newsDesks: "Ten News Desks", dailyCoverage: "Daily coverage", completePaper: "The complete paper", todayEdition: "Today's Edition", editionDescription: "Ten focused sections. One permanent edition for every day.", openToday: "Open today's edition", archive: "All Daily Editions", archiveForever: "Permanent news archive", archiveIntro: "Every published day remains available here. Select a date to revisit its complete news edition.", openArchive: "Open edition", footerAbout: "Bilingual daily reporting on the forces moving our world.", more: "More", contact: "Contact", allEditions: "← All editions", completeEdition: "Complete daily edition", previous: "← Previous", next: "Next →", quote: "“A reliable archive turns daily reporting into a record of our time.”", editorsDesk: "From the editor's desk", navigate: "Navigate", frontPage: "Front page", editorialDesk: "Editorial desk", leadStory: "Lead Story", by: "By", minRead: "min read", readFull: "Read full story", publishingSoon: "Full article publishing soon", noStories: "No stories have been filed in this section yet." },
    zh: { skip: "跳至主要內容", tagline: "洞察全球．每日更新", text: "字級", morning: "晨間版", sections: "新聞分類", latest: "最新一期", breaking: "港口、科技與全球商業版圖的重新配置", openEdition: "開啟本期", todayStories: "今日焦點新聞", readToday: "閱讀今日新聞", newsDesks: "十大新聞分類", dailyCoverage: "每日完整報導", completePaper: "完整每日新聞", todayEdition: "今日新聞", editionDescription: "十大專業分類，每一天都永久保存。", openToday: "開啟今日新聞", archive: "歷史每日新聞", archiveForever: "永久新聞資料庫", archiveIntro: "網站永久保存每一天發布的新聞。請選擇日期，重新閱讀當日完整內容。", openArchive: "閱讀本期", footerAbout: "以繁體中文與英文報導推動世界變化的重要力量。", more: "更多", contact: "聯絡我們", allEditions: "← 所有歷史新聞", completeEdition: "當日完整新聞", previous: "← 前一日", next: "後一日 →", quote: "「可靠的歷史資料庫，讓每日新聞成為這個時代的紀錄。」", editorsDesk: "編輯室", navigate: "網站導覽", frontPage: "首頁", editorialDesk: "編輯部", leadStory: "焦點報導", by: "記者", minRead: "分鐘閱讀", readFull: "閱讀全文", publishingSoon: "完整文章即將發布", noStories: "此分類尚無新聞。" }
  };

  window.DN = {
    lang: localStorage.getItem("dailyNewsLanguage") || "en",
    t(key) { return copy[this.lang][key] || key; },
    value(item) { return item && typeof item === "object" ? item[this.lang] : item; },
    date(date, short) { return new Intl.DateTimeFormat(this.lang === "zh" ? "zh-TW" : "en", short ? { year: "numeric", month: "short", day: "numeric" } : { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(new Date(`${date}T12:00:00`)); },
    setLanguage(lang) { this.lang = lang; localStorage.setItem("dailyNewsLanguage", lang); applyLanguage(); document.dispatchEvent(new CustomEvent("languagechange")); }
  };

  function applyFontSize() {
    sizeIndex = Math.max(0, Math.min(sizes.length - 1, sizeIndex));
    root.style.setProperty("--font-scale", sizes[sizeIndex]);
    localStorage.setItem("dailyNewsFontSize", sizeIndex);
    document.querySelectorAll("[data-font-action='decrease']").forEach((button) => { button.disabled = sizeIndex === 0; });
    document.querySelectorAll("[data-font-action='increase']").forEach((button) => { button.disabled = sizeIndex === sizes.length - 1; });
  }

  function editionUrl(date, category) { return `edition.html?date=${date}${category ? `&category=${category}` : ""}`; }

  function applyLanguage() {
    const lang = window.DN.lang;
    root.lang = lang === "zh" ? "zh-Hant" : "en";
    document.body.classList.toggle("lang-zh", lang === "zh");
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = window.DN.t(element.dataset.i18n); });
    document.querySelectorAll("[data-lang]").forEach((button) => { button.classList.toggle("active", button.dataset.lang === lang); });
    renderShared();
    renderHome();
  }

  function renderShared() {
    const latest = news.editions[0];
    const nav = document.getElementById("nav-links");
    if (nav) nav.innerHTML = `<a class="active" href="index.html">${window.DN.lang === "zh" ? "首頁" : "Front Page"}</a>` + news.categories.slice(1).map((category) => `<a href="${editionUrl(latest.date, category.id)}">${category[window.DN.lang]}</a>`).join("");
    const footer = document.getElementById("footer-sections");
    if (footer) footer.innerHTML = news.categories.slice(1).map((category) => `<a href="${editionUrl(latest.date, category.id)}">${category[window.DN.lang]}</a>`).join("");
    const todayLabel = document.getElementById("today-label");
    if (todayLabel) todayLabel.textContent = new Intl.DateTimeFormat(window.DN.lang === "zh" ? "zh-TW" : "en", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(new Date());
  }

  function storyMarkup(story, compact) {
    const url = editionUrl(news.editions[0].date, story.category);
    if (compact) return `<article class="compact-story"><p class="story-category">${news.categories.find((item) => item.id === story.category)[window.DN.lang]}</p><h3><a href="${url}">${window.DN.value(story.title)}</a></h3><p>${window.DN.value(story.dek)}</p><div class="story-meta"><span>${story.read} ${window.DN.t("minRead")}</span></div></article>`;
    return `<a class="story-image image-${story.image}" href="${url}"><span class="image-credit">Daily News / Staff</span></a><div class="lead-copy"><p class="story-category">${news.categories.find((item) => item.id === story.category)[window.DN.lang]} / ${window.DN.t("leadStory")}</p><h2><a href="${url}">${window.DN.value(story.title)}</a></h2><p class="dek">${window.DN.value(story.dek)}</p><div class="story-meta"><span>${window.DN.t("by")} ${story.author}</span><span>${story.read} ${window.DN.t("minRead")}</span></div></div>`;
  }

  function renderHome() {
    const latest = news.editions[0];
    const lead = document.getElementById("home-lead");
    if (!lead) return;
    const featured = latest.stories.filter((story) => story.lead);
    document.getElementById("current-date").textContent = window.DN.date(latest.date);
    ["today-link", "banner-link", "breaking-link"].forEach((id) => { document.getElementById(id).href = editionUrl(latest.date); });
    lead.innerHTML = storyMarkup(featured[0], false);
    document.getElementById("home-side").innerHTML = featured.slice(1, 4).map((story) => storyMarkup(story, true)).join("");
    document.getElementById("desk-grid").innerHTML = news.categories.slice(1).map((category) => { const story = latest.stories.find((item) => item.category === category.id); return `<a class="desk-card" href="${editionUrl(latest.date, category.id)}"><span>${category[window.DN.lang]}</span><strong>${window.DN.value(story.title)}</strong><p>${window.DN.value(story.dek)}</p><b>→</b></a>`; }).join("");
    document.getElementById("archive-grid").innerHTML = news.editions.map((edition, index) => `<a class="archive-card archive-${edition.color}" href="${editionUrl(edition.date)}"><span class="archive-number">${String(index + 1).padStart(2, "0")}</span><span class="archive-date">${window.DN.date(edition.date, true)}</span><strong>${window.DN.value(edition.theme)}</strong><p>${window.DN.value(edition.summary)}</p><span class="archive-link">${window.DN.t("openArchive")} →</span></a>`).join("");
  }

  document.querySelectorAll("[data-font-action]").forEach((button) => button.addEventListener("click", () => { sizeIndex += button.dataset.fontAction === "increase" ? 1 : -1; applyFontSize(); }));
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => window.DN.setLanguage(button.dataset.lang)));
  const menuButton = document.querySelector(".menu-toggle");
  if (menuButton) menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); document.getElementById("nav-links").classList.toggle("open", !open); });
  applyFontSize();
  applyLanguage();
})();
