(function () {
  const news = window.DAILY_NEWS;   // index only — stories come from monthly file
  const ui   = window.DN;
  const params = new URLSearchParams(window.location.search);
  const requestedDate  = params.get("date") || news.editions[0].date;
  const editionIndex   = Math.max(0, news.editions.findIndex((e) => e.date === requestedDate));
  const editionMeta    = news.editions[editionIndex];
  let selectedCategory = params.get("category") || "top-stories";

  // ── Prev / next buttons — use index metadata only ────────────────────────────
  const previous = document.getElementById("previous-edition");
  const next     = document.getElementById("next-edition");
  previous.disabled = editionIndex >= news.editions.length - 1;
  next.disabled     = editionIndex <= 0;
  previous.addEventListener("click", () => { location.href = `edition.html?date=${news.editions[editionIndex + 1].date}`; });
  next.addEventListener("click",     () => { location.href = `edition.html?date=${news.editions[editionIndex - 1].date}`; });

  function toParagraphs(value) {
    if (!value) return [];
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  }

  function storyBodyMarkup(story) {
    const zhParagraphs = toParagraphs(story.body && story.body.zh);
    const enParagraphs = toParagraphs(story.body && story.body.en);
    const total = Math.max(zhParagraphs.length, enParagraphs.length);

    if (!total) {
      return `<div class="story-body-empty">${ui.dual(ui.t("publishingSoon"))}</div>`;
    }

    const paragraphs = Array.from({ length: total }, (_, index) => {
      const zh = zhParagraphs[index] || "";
      const en = enParagraphs[index] || "";
      return `<div class="story-body-paragraph">${ui.dual({ zh, en })}</div>`;
    }).join("");

    return `<div class="story-body-copy">${paragraphs}</div>`;
  }

  function readButtonLabel(expanded) {
    return expanded
      ? `${ui.inlineDual("收起全文", "Hide full story")} <span>↑</span>`
      : `${ui.inlineDual("閱讀全文", "Read full story")} <span>→</span>`;
  }

  function renderStoryPanel(story) {
    return `<div class="story-body-panel" id="story-panel-${story.id}" hidden>${storyBodyMarkup(story)}</div>`;
  }

  // ── Render edition — requires stories ────────────────────────────────────────
  function render() {
    const stories = ((window.DAILY_NEWS_STORIES || {})[editionMeta.date]) || [];

    document.getElementById("edition-date").innerHTML  = ui.dateDual(editionMeta.date);
    document.getElementById("edition-theme").innerHTML = ui.dual(editionMeta.theme);
    document.title = `${editionMeta.theme.zh} | Daily News 每日新聞`;

    const tabs = document.getElementById("category-tabs");
    tabs.innerHTML = news.categories.map((cat) =>
      `<button type="button" class="${selectedCategory === cat.id ? "active" : ""}" data-category="${cat.id}">` +
      `${ui.inlineDual(cat.zh, cat.en)}</button>`
    ).join("");

    const filtered = selectedCategory === "top-stories"
      ? stories.filter((s) => s.lead)
      : stories.filter((s) => s.category === selectedCategory);
    const leadStory = filtered[0];

    if (!leadStory) {
      document.getElementById("edition-lead").innerHTML = ui.dual(ui.t("noStories"));
      document.getElementById("edition-list").innerHTML = "";
    } else {
      const cat = news.categories.find((c) => c.id === leadStory.category);
      document.getElementById("edition-lead").innerHTML =
        `<article class="edition-lead-story" data-story-article>` +
        `<div class="edition-lead-image image-${leadStory.image}"><span class="image-credit">Daily News / Staff</span></div>` +
        `<div><p class="story-category">${ui.inlineDual(cat.zh, cat.en)} · ${ui.inlineDual("焦點報導", "Lead Story")}</p>` +
        `<h2>${ui.dual(leadStory.title)}</h2>` +
        `<div class="dek">${ui.dual(leadStory.dek)}</div>` +
        `<div class="story-meta">` +
        `<span>${ui.inlineDual(`記者 ${leadStory.author}`, `By ${leadStory.author}`)}</span>` +
        `<span>${ui.inlineDual(`${leadStory.read} 分鐘閱讀`, `${leadStory.read} min read`)}</span>` +
        `</div>` +
        `<button class="read-button" type="button" data-read-story aria-expanded="false" aria-controls="story-panel-${leadStory.id}">${readButtonLabel(false)}</button>` +
        `${renderStoryPanel(leadStory)}` +
        `</div></article>`;

      document.getElementById("edition-list").innerHTML = filtered.slice(1).map((story, i) => {
        const sc = news.categories.find((c) => c.id === story.category);
        return `<article class="edition-row" data-story-article>` +
               `<span class="edition-row-number">${String(i + 2).padStart(2, "0")}</span>` +
               `<div><p class="story-category">${ui.inlineDual(sc.zh, sc.en)}</p>` +
               `<h3>${ui.dual(story.title)}</h3>` +
               `<div class="story-summary">${ui.dual(story.dek)}</div>` +
               `<div class="story-meta">` +
               `<span>${ui.inlineDual(`記者 ${story.author}`, `By ${story.author}`)}</span>` +
               `<span>${ui.inlineDual(`${story.read} 分鐘閱讀`, `${story.read} min read`)}</span>` +
               `</div>` +
               `<button class="read-button read-button-inline" type="button" data-read-story aria-expanded="false" aria-controls="story-panel-${story.id}">${readButtonLabel(false)}</button>` +
               `${renderStoryPanel(story)}` +
               `</div>` +
               `<div class="row-image image-${story.image}"></div>` +
               `</article>`;
      }).join("");
    }

    // Re-attach tab listeners after each render
    tabs.querySelectorAll("button").forEach((btn) => btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      const url = new URL(window.location);
      url.searchParams.set("category", selectedCategory);
      history.replaceState({}, "", url);
      render();
      document.querySelector(".edition-content").scrollIntoView({ behavior: "smooth" });
    }));

    document.querySelectorAll("[data-read-story]").forEach((button) => {
      button.addEventListener("click", () => {
        const panel = document.getElementById(button.getAttribute("aria-controls"));
        const expanded = button.getAttribute("aria-expanded") === "true";
        panel.hidden = expanded;
        button.setAttribute("aria-expanded", String(!expanded));
        button.innerHTML = readButtonLabel(!expanded);
      });
    });
  }

  // ── Loading placeholder while monthly file fetches ───────────────────────────
  function showLoading() {
    document.getElementById("edition-date").innerHTML  = ui.dateDual(editionMeta.date);
    document.getElementById("edition-theme").innerHTML = ui.dual(editionMeta.theme);
    document.title = `${editionMeta.theme.zh} | Daily News 每日新聞`;
    document.getElementById("edition-lead").innerHTML  = `<p class="loading-msg">${ui.dual(ui.t("loading"))}</p>`;
    document.getElementById("edition-list").innerHTML  = "";
  }

  // ── Lazy-load the correct monthly stories file ───────────────────────────────
  function monthKey(date) { return date.slice(0, 7); }  // "2026-06-13" → "2026-06"

  function loadMonthScript(yyyyMM, onReady) {
    const src = `data-${yyyyMM}.js`;

    // If the monthly file was already injected (e.g. app.js loaded this month)
    const alreadyLoaded = document.querySelector(`script[src="${src}"]`);
    if (alreadyLoaded) {
      const stories = (window.DAILY_NEWS_STORIES || {})[editionMeta.date];
      if (stories) { onReady(); return; }
    }

    document.addEventListener("dn:stories-loaded", onReady, { once: true });

    const tag = document.createElement("script");
    tag.src = src;
    tag.onerror = () => {
      console.error(`[DailyNews] Could not load ${src}`);
      document.getElementById("edition-lead").innerHTML =
        `<p class="loading-msg">${ui.dual(["無法載入本期內容", "Could not load this edition."])}</p>`;
    };
    document.head.appendChild(tag);
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  showLoading();
  loadMonthScript(monthKey(editionMeta.date), render);
})();
