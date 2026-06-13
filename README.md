# The Daily Ledger

A responsive, dependency-free newspaper website designed for GitHub Pages.

## Features

- Editorial portal page with featured stories and recent-edition archive
- Reusable daily edition page selected with `?date=YYYY-MM-DD`
- Category tabs for World, Business, Technology, Culture, and Life
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

## Add an edition

Edit `data.js`:

1. Add an item to `editions`.
2. Add or update stories in `stories`.
3. Link to it with `edition.html?date=YYYY-MM-DD`.

The current content is demonstration copy and should be replaced with your reporting before publication.
