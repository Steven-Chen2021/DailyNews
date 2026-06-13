(function () {
  const news = window.DAILY_NEWS;
  const ui = window.DN;
  const params = new URLSearchParams(window.location.search);
  const requestedDate = params.get("date") || news.editions[0].date;
  const editionIndex = Math.max(0, news.editions.findIndex((item) => item.date === requestedDate));
  const edition = news.editions[editionIndex];
  let selectedCategory = params.get("category") || "top-stories";

  function render() {
    document.getElementById("edition-date").innerHTML = ui.dateDual(edition.date);
    document.getElementById("edition-theme").innerHTML = ui.dual(edition.theme);
    document.title = `${edition.theme.zh} | Daily News 每日新聞`;
    const tabs = document.getElementById("category-tabs");
    tabs.innerHTML = news.categories.map((category) => `<button type="button" class="${selectedCategory === category.id ? "active" : ""}" data-category="${category.id}">${ui.inlineDual(category.zh, category.en)}</button>`).join("");
    const stories = selectedCategory === "top-stories" ? edition.stories.filter((story) => story.lead) : edition.stories.filter((story) => story.category === selectedCategory);
    const leadStory = stories[0];
    if (!leadStory) { document.getElementById("edition-lead").innerHTML = ui.dual(ui.t("noStories")); document.getElementById("edition-list").innerHTML = ""; return; }
    const category = news.categories.find((item) => item.id === leadStory.category);
    document.getElementById("edition-lead").innerHTML = `<article class="edition-lead-story"><div class="edition-lead-image image-${leadStory.image}"><span class="image-credit">Daily News / Staff</span></div><div><p class="story-category">${ui.inlineDual(category.zh, category.en)} · ${ui.inlineDual("焦點報導", "Lead Story")}</p><h2>${ui.dual(leadStory.title)}</h2><div class="dek">${ui.dual(leadStory.dek)}</div><div class="story-meta"><span>${ui.inlineDual(`記者 ${leadStory.author}`, `By ${leadStory.author}`)}</span><span>${ui.inlineDual(`${leadStory.read} 分鐘閱讀`, `${leadStory.read} min read`)}</span></div><button class="read-button" type="button" data-read-story>${ui.inlineDual("閱讀全文", "Read full story")} <span>→</span></button></div></article>`;
    document.getElementById("edition-list").innerHTML = stories.slice(1).map((story, index) => { const storyCategory = news.categories.find((item) => item.id === story.category); return `<article class="edition-row"><span class="edition-row-number">${String(index + 2).padStart(2, "0")}</span><div><p class="story-category">${ui.inlineDual(storyCategory.zh, storyCategory.en)}</p><h3>${ui.dual(story.title)}</h3><div class="story-summary">${ui.dual(story.dek)}</div><div class="story-meta"><span>${ui.inlineDual(`記者 ${story.author}`, `By ${story.author}`)}</span><span>${ui.inlineDual(`${story.read} 分鐘閱讀`, `${story.read} min read`)}</span></div></div><div class="row-image image-${story.image}"></div></article>`; }).join("");
    tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { selectedCategory = button.dataset.category; const url = new URL(window.location); url.searchParams.set("category", selectedCategory); history.replaceState({}, "", url); render(); document.querySelector(".edition-content").scrollIntoView({ behavior: "smooth" }); }));
    const readButton = document.querySelector("[data-read-story]");
    if (readButton) readButton.addEventListener("click", () => { readButton.innerHTML = ui.dual(ui.t("publishingSoon")); });
  }

  const previous = document.getElementById("previous-edition");
  const next = document.getElementById("next-edition");
  previous.disabled = editionIndex >= news.editions.length - 1;
  next.disabled = editionIndex <= 0;
  previous.addEventListener("click", () => { location.href = `edition.html?date=${news.editions[editionIndex + 1].date}`; });
  next.addEventListener("click", () => { location.href = `edition.html?date=${news.editions[editionIndex - 1].date}`; });
  render();
})();
