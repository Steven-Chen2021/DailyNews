# Daily News | 每日新聞

A bilingual, responsive newspaper website designed for GitHub Pages and published at [www.jsva.uk](https://www.jsva.uk).

## Features

- English and Traditional Chinese interface with a remembered language preference
- Editorial portal page with featured stories and a permanent daily archive
- Daily editions selected with `?date=YYYY-MM-DD`
- Each edition owns its historical stories, so old news remains unchanged
- Category tabs for International, Technology, Sports, Shipping, and Supply Chain
- Mobile navigation and responsive layouts
- Five-step font size control remembered in the browser
- Accessible landmarks, skip links, reduced-motion support, and keyboard-friendly controls

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, then choose the `main` branch and `/ (root)` folder.

## Add a daily edition

Edit `data.js`:

1. Add a new object at the beginning of `editions`.
2. Include bilingual `theme` and `summary` values using `en` and `zh`.
3. Add that day's stories inside the edition's `stories` array.
4. Use one of these category IDs: `international`, `technology`, `sports`, `shipping`, or `supply-chain`.
5. Add both English and Traditional Chinese `title` and `dek` values to every story.
6. Mark the main story in each section with `lead: true`.

Old edition objects should not be removed or overwritten. This keeps every historical daily edition available at its original date URL.

The current articles are demonstration copy and should be replaced with verified reporting before publication.
