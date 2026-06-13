(function () {
  const root = document.documentElement;
  const sizes = [0.92, 1, 1.12, 1.25, 1.4];
  let sizeIndex = Number(localStorage.getItem("ledgerFontSize") || 1);

  function applyFontSize() {
    sizeIndex = Math.max(0, Math.min(sizes.length - 1, sizeIndex));
    root.style.setProperty("--font-scale", sizes[sizeIndex]);
    localStorage.setItem("ledgerFontSize", sizeIndex);
    document.querySelectorAll("[data-font-action='decrease']").forEach((button) => { button.disabled = sizeIndex === 0; });
    document.querySelectorAll("[data-font-action='increase']").forEach((button) => { button.disabled = sizeIndex === sizes.length - 1; });
  }

  document.querySelectorAll("[data-font-action]").forEach((button) => {
    button.addEventListener("click", () => {
      sizeIndex += button.dataset.fontAction === "increase" ? 1 : -1;
      applyFontSize();
    });
  });
  applyFontSize();

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      navLinks.classList.toggle("open", !open);
    });
  }

  const dateLabel = document.getElementById("today-label");
  if (dateLabel) {
    dateLabel.textContent = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date());
  }

  const archive = document.getElementById("archive-grid");
  if (archive && window.DAILY_NEWS) {
    archive.innerHTML = window.DAILY_NEWS.editions.map((edition, index) => `
      <a class="archive-card archive-${edition.color}" href="edition.html?date=${edition.date}">
        <span class="archive-number">0${index + 1}</span>
        <span class="archive-date">${edition.label}</span>
        <strong>${edition.theme}</strong>
        <p>${edition.summary}</p>
        <span class="archive-link">Open edition →</span>
      </a>`).join("");
  }

  const form = document.getElementById("newsletter-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      document.getElementById("form-message").textContent = "You’re on the list. Watch your inbox.";
      form.reset();
    });
  }
})();
