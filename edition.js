(function () {
  const news = window.DAILY_NEWS;
  const ui = window.DN;
  const params = new URLSearchParams(window.location.search);
  const requestedDate = params.get("date") || news.editions[0].date;
  const editionIndex = Math.max(0, news.editions.findIndex((item) => item.date === requestedDate));
  const edition = news.editions[editionIndex];
  let selectedCategory = params.get("category") || "top-stories";

  function render() {
    document.getElementById("edition-date").textContent = ui.date(edition.date);
    document.getElementById("edition-theme").textContent = ui.value(edition.theme);
    document.title = `${ui.date(edition.date, true)} | Daily News 每日新聞`;
    const tabs = document.getElementById("category-tabs");
    tabs.innerHTML = news.categories.map((category) => `<button type="button" class="${selectedCategory === category.id ? "active" : ""}" data-category="${category.id}">${category[ui.lang]}</button>`).join("");
    const stories = selectedCategory === "top-stories" ? edition.stories.filter((story) => story.lead) : edition.stories.filter((story) => story.category === selectedCategory);
    const leadStory = stories[0];
    if (!leadStory) { document.getElementById("edition-lead").innerHTML = `<p>${ui.t("noStories")}</p>`; document.getElementById("edition-list").innerHTML = ""; return; }
    const category = news.categories.find((item) => item.id === leadStory.category);
    document.getElementById("edition-lead").innerHTML = `<article class="edition-lead-story"><div class="edition-lead-image image-${leadStory.image}"><span class="image-credit">Daily News / Staff</span></div><div><p class="story-category">${category[ui.lang]} / ${ui.t("leadStory")}</p><h2>${ui.value(leadStory.title)}</h2><p class="dek">${ui.value(leadStory.dek)}</p><div class="story-meta"><span>${ui.t("by")} ${leadStory.author}</span><span>${leadStory.read} ${ui.t("minRead")}</span></div><button class="read-button" type="button" data-read-story>${ui.t("readFull")} <span>→</span></button></div></article>`;
    document.getElementById("edition-list").innerHTML = stories.slice(1).map((story, index) => { const storyCategory = news.categories.find((item) => item.id === story.category); return `<article class="edition-row"><span class="edition-row-number">${String(index + 2).padStart(2, "0")}</span><div><p class="story-category">${storyCategory[ui.lang]}</p><h3>${ui.value(story.title)}</h3><p>${ui.value(story.dek)}</p><div class="story-meta"><span>${ui.t("by")} ${story.author}</span><span>${story.read} ${ui.t("minRead")}</span></div></div><div class="row-image image-${story.image}"></div></article>`; }).join("");
    tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { selectedCategory = button.dataset.category; const url = new URL(window.location); url.searchParams.set("category", selectedCategory); history.replaceState({}, "", url); render(); document.querySelector(".edition-content").scrollIntoView({ behavior: "smooth" }); }));
    const readButton = document.querySelector("[data-read-story]");
    if (readButton) readButton.addEventListener("click", () => { readButton.textContent = ui.t("publishingSoon"); });
  }

  const previous = document.getElementById("previous-edition");
  const next = document.getElementById("next-edition");
  previous.disabled = editionIndex >= news.editions.length - 1;
  next.disabled = editionIndex <= 0;
  previous.addEventListener("click", () => { location.href = `edition.html?date=${news.editions[editionIndex + 1].date}`; });
  next.addEventListener("click", () => { location.href = `edition.html?date=${news.editions[editionIndex - 1].date}`; });
  document.addEventListener("languagechange", render);
  render();
})();
