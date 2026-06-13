(function () {
  const news = window.DAILY_NEWS;
  if (!news) return;

  const params = new URLSearchParams(window.location.search);
  const requestedDate = params.get("date") || news.editions[0].date;
  const requestedCategory = params.get("category") || "top-stories";
  const requestedStory = params.get("story");
  const editionIndex = Math.max(0, news.editions.findIndex((edition) => edition.date === requestedDate));
  const edition = news.editions[editionIndex] || news.editions[0];

  const parsedDate = new Date(`${edition.date}T12:00:00`);
  const formattedDate = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(parsedDate);
  document.getElementById("edition-date").textContent = formattedDate;
  document.title = `${edition.label} Edition | The Daily Ledger`;

  const tabs = document.getElementById("category-tabs");
  const lead = document.getElementById("edition-lead");
  const list = document.getElementById("edition-list");

  function slug(value) { return value.toLowerCase().replaceAll(" ", "-"); }

  function render(categorySlug) {
    const selected = categorySlug || "top-stories";
    const filtered = selected === "top-stories"
      ? news.stories.filter((story) => story.lead)
      : news.stories.filter((story) => slug(story.category) === selected);
    const ordered = requestedStory
      ? [...filtered].sort((a, b) => (a.id === requestedStory ? -1 : b.id === requestedStory ? 1 : 0))
      : filtered;

    tabs.innerHTML = news.categories.map((category) => {
      const categorySlugValue = slug(category);
      return `<button type="button" class="${selected === categorySlugValue ? "active" : ""}" data-category="${categorySlugValue}">${category}</button>`;
    }).join("");

    const leadStory = ordered[0];
    if (!leadStory) {
      lead.innerHTML = "<p>No stories have been filed in this section yet.</p>";
      list.innerHTML = "";
      return;
    }

    lead.innerHTML = `
      <article class="edition-lead-story">
        <div class="edition-lead-image image-${leadStory.image}"><span class="image-credit">The Daily Ledger / Staff</span></div>
        <div>
          <p class="story-category">${leadStory.category} / Lead Story</p>
          <h2>${leadStory.title}</h2>
          <p class="dek">${leadStory.dek}</p>
          <div class="story-meta"><span>By ${leadStory.author}</span><span>${leadStory.read} read</span></div>
          <button class="read-button" type="button" data-read-story>Read full story <span>→</span></button>
        </div>
      </article>`;

    list.innerHTML = ordered.slice(1).map((story, index) => `
      <article class="edition-row">
        <span class="edition-row-number">0${index + 2}</span>
        <div>
          <p class="story-category">${story.category}</p>
          <h3>${story.title}</h3>
          <p>${story.dek}</p>
          <div class="story-meta"><span>By ${story.author}</span><span>${story.read} read</span></div>
        </div>
        <div class="row-image image-${story.image}"></div>
      </article>`).join("");

    tabs.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const nextCategory = button.dataset.category;
        const url = new URL(window.location);
        url.searchParams.set("category", nextCategory);
        url.searchParams.delete("story");
        window.history.replaceState({}, "", url);
        render(nextCategory);
        document.querySelector(".edition-content").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const readButton = document.querySelector("[data-read-story]");
    if (readButton) readButton.addEventListener("click", () => readButton.textContent = "Full article publishing soon");
  }

  render(requestedCategory);

  const previous = document.getElementById("previous-edition");
  const next = document.getElementById("next-edition");
  previous.disabled = editionIndex >= news.editions.length - 1;
  next.disabled = editionIndex <= 0;
  previous.addEventListener("click", () => { window.location.href = `edition.html?date=${news.editions[editionIndex + 1].date}`; });
  next.addEventListener("click", () => { window.location.href = `edition.html?date=${news.editions[editionIndex - 1].date}`; });
})();
