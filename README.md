# Anaconda XB 360 — Website

Official website for **Anaconda XB 360** — a custom homebrew store for
modded Xbox 360 consoles.

Install guides, catalog browser, and the repo URL for the on-console
store client.

---

## Live site

Once GitHub Pages is enabled:

```
https://h3x-anaconda-team.github.io/anaconda-xb-360-website/
```

---

## What's in here

| Path | Purpose |
|---|---|
| `index.html` | Landing page — repo URL, star CTA, feature summary |
| `pages/about.html` | What Anaconda XB 360 is |
| `pages/install.html` | How to install on a console (when public) |
| `pages/categories.html` | Browse the catalog categories |
| `pages/faq.html` | Common questions |
| `style.css` | Single stylesheet for the whole site |
| `script.js` | Copy-to-clipboard and small interactions |
| `assets/` | Favicon and screenshots |

---

## Local preview

No build step. Just open `index.html` in a browser, or run a tiny
local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Deploying

GitHub Pages serves this repo from the `main` branch, root folder.

**Settings → Pages → Deploy from branch → main → / (root) → Save**

That's it. No build step, no CI required.

---

## Status

The store itself is **not public yet**. The site exists to collect
stars and provide a place for the repo URL once a build is ready.

---

## License

[MIT](LICENSE) © 2026 H3X Anaconda Team

Not affiliated with Microsoft.
