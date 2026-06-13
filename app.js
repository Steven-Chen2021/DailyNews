(function () {
  const news = window.DAILY_NEWS;
  const root = document.documentElement;
  const sizes = [0.92, 1, 1.12, 1.25, 1.4];
  let sizeIndex = Number(localStorage.getItem("dailyNewsFontSize") || 1);

  const copy = {
    skip: ["跳至主要內容", "Skip to content"], tagline: ["洞察全球．每日更新", "Global insight. Every day."], text: ["字級", "Text"], morning: ["晨間版", "Morning Edition"], sections: ["新聞分類", "Sections"], latest: ["最新一期", "Latest Edition"], breaking: ["港口、科技與全球商業版圖的重新配置", "Ports, technology and the new geography of global commerce"], openEdition: ["開啟本期", "Open edition"], todayStories: ["今日焦點新聞", "Today's Essential Stories"], readToday: ["閱讀今日新聞", "Read today's edition"], newsDesks: ["十大新聞分類", "Ten News Desks"], dailyCoverage: ["每日完整報導", "Daily coverage"], completePaper: ["完整每日新聞", "The complete paper"], todayEdition: ["今日新聞", "Today's Edition"], editionDescription: ["十大專業分類，每一天都永久保存。", "Ten focused sections. One permanent edition for every day."], openToday: ["開啟今日新聞", "Open today's edition"], archive: ["歷史每日新聞", "All Daily Editions"], archiveForever: ["永久新聞資料庫", "Permanent news archive"], archiveIntro: ["網站永久保存每一天發布的新聞。請選擇日期，重新閱讀當日完整內容。", "Every published day remains available here. Select a date to revisit its complete news edition."], openArchive: ["閱讀本期", "Open edition"], footerAbout: ["以繁體中文為主、英文為輔，報導推動世界變化的重要力量。", "Bilingual daily reporting on the forces moving our world."], more: ["更多", "More"], contact: ["聯絡我們", "Contact"], allEditions: ["← 所有歷史新聞", "← All editions"], completeEdition: ["當日完整新聞", "Complete daily edition"], previous: ["← 前一日", "← Previous"], next: ["後一日 →", "Next →"], quote: ["「可靠的歷史資料庫，讓每日新聞成為這個時代的紀錄。」", "“A reliable archive turns daily reporting into a record of our time.”"], editorsDesk: ["編輯室", "From the editor's desk"], navigate: ["網站導覽", "Navigate"], frontPage: ["首頁", "Front page"], editorialDesk: ["編輯部", "Editorial desk"], leadStory: ["焦點報導", "Lead Story"], by: ["記者", "By"], minRead: ["分鐘閱讀", "min read"], readFull: ["閱讀全文", "Read full story"], publishingSoon: ["完整文章即將發布", "Full article publishing soon"], noStories: ["此分類尚無新聞。", "No stories have been filed in this section yet."]
  };

  function dual(value, className = "") {
    if (!value) return "";
    const zh = Array.isArray(value) ? value[0] : value.zh;
    const en = Array.isArray(value) ? value[1] : value.en;
    return `<span class="bilingual ${className}"><span class="zh-text">${zh}</span><span class="en-text" lang="en">${en}</span></span>`;
  }

  function inlineDual(zh, en) { return `<span class="zh-inline">${zh}</span><span class="bilingual-separator"> / </span><span class="en-inline" lang="en">${en}</span>`; }
  function dateDual(date, short = false) {
    const value = new Date(`${date}T12:00:00`);
    const zh = new Intl.DateTimeFormat("zh-TW", short ? { year: "numeric", month: "short", day: "numeric" } : { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(value);
    const en = new Intl.DateTimeFormat("en", short ? { year: "numeric", month: "short", day: "numeric" } : { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(value);
    return dual([zh, en], "date-pair");
  }

  window.DN = { copy, dual, inlineDual, dateDual, t(key) { return copy[key]; } };

  function applyFontSize() {
    sizeIndex = Math.max(0, Math.min(sizes.length - 1, sizeIndex));
    root.style.setProperty("--font-scale", sizes[sizeIndex]);
    localStorage.setItem("dailyNewsFontSize", sizeIndex);
    document.querySelectorAll("[data-font-action='decrease']").forEach((button) => { button.disabled = sizeIndex === 0; });
    document.querySelectorAll("[data-font-action='increase']").forEach((button) => { button.disabled = sizeIndex === sizes.length - 1; });
  }

  function editionUrl(date, category) { return `edition.html?date=${date}${category ? `&category=${category}` : ""}`; }

  function renderShared() {
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.innerHTML = dual(copy[element.dataset.i18n]); });
    const latest = news.editions[0];
    const nav = document.getElementById("nav-links");
    if (nav) nav.innerHTML = `<a class="active" href="index.html">${inlineDual("首頁", "Front Page")}</a>` + news.categories.slice(1).map((category) => `<a href="${editionUrl(latest.date, category.id)}">${inlineDual(category.zh, category.en)}</a>`).join("");
    const footer = document.getElementById("footer-sections");
    if (footer) footer.innerHTML = news.categories.slice(1).map((category) => `<a href="${editionUrl(latest.date, category.id)}">${inlineDual(category.zh, category.en)}</a>`).join("");
    const todayLabel = document.getElementById("today-label");
    if (todayLabel) todayLabel.innerHTML = dateDual(new Date().toISOString().slice(0, 10), true);
  }

  function storyMarkup(story, compact) {
    const category = news.categories.find((item) => item.id === story.category);
    const url = editionUrl(news.editions[0].date, story.category);
    const meta = `${inlineDual(`${story.read} 分鐘閱讀`, `${story.read} min read`)}`;
    if (compact) return `<article class="compact-story"><p class="story-category">${inlineDual(category.zh, category.en)}</p><h3><a href="${url}">${dual(story.title)}</a></h3><div class="story-summary">${dual(story.dek)}</div><div class="story-meta"><span>${meta}</span></div></article>`;
    return `<a class="story-image image-${story.image}" href="${url}"><span class="image-credit">Daily News / Staff</span></a><div class="lead-copy"><p class="story-category">${inlineDual(category.zh, category.en)} · ${inlineDual("焦點報導", "Lead Story")}</p><h2><a href="${url}">${dual(story.title)}</a></h2><div class="dek">${dual(story.dek)}</div><div class="story-meta"><span>${inlineDual(`記者 ${story.author}`, `By ${story.author}`)}</span><span>${meta}</span></div></div>`;
  }

  function renderHome() {
    const latest = news.editions[0];
    const lead = document.getElementById("home-lead");
    if (!lead) return;
    const featured = latest.stories.filter((story) => story.lead);
    document.getElementById("current-date").innerHTML = dateDual(latest.date);
    ["today-link", "banner-link", "breaking-link"].forEach((id) => { document.getElementById(id).href = editionUrl(latest.date); });
    lead.innerHTML = storyMarkup(featured[0], false);
    document.getElementById("home-side").innerHTML = featured.slice(1, 4).map((story) => storyMarkup(story, true)).join("");
    document.getElementById("desk-grid").innerHTML = news.categories.slice(1).map((category) => { const story = latest.stories.find((item) => item.category === category.id); return `<a class="desk-card" href="${editionUrl(latest.date, category.id)}"><span>${inlineDual(category.zh, category.en)}</span><strong>${dual(story.title)}</strong><div class="desk-summary">${dual(story.dek)}</div><b>→</b></a>`; }).join("");
    document.getElementById("archive-grid").innerHTML = news.editions.map((edition, index) => `<a class="archive-card archive-${edition.color}" href="${editionUrl(edition.date)}"><span class="archive-number">${String(index + 1).padStart(2, "0")}</span><span class="archive-date">${dateDual(edition.date, true)}</span><strong>${dual(edition.theme)}</strong><div class="archive-summary">${dual(edition.summary)}</div><span class="archive-link">${inlineDual("閱讀本期", "Open edition")} →</span></a>`).join("");
  }

  document.querySelectorAll("[data-font-action]").forEach((button) => button.addEventListener("click", () => { sizeIndex += button.dataset.fontAction === "increase" ? 1 : -1; applyFontSize(); }));
  const menuButton = document.querySelector(".menu-toggle");
  if (menuButton) menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); document.getElementById("nav-links").classList.toggle("open", !open); });
  applyFontSize(); renderShared(); renderHome();
})();
