---
name: static-deploy
description: Use when changing GitHub Pages deployment, baseURL, nitro preset, the GitHub Actions workflow, static JSON data, or prerender/generate settings. orivo is static-only — no Node runtime in production.
---

# Static deploy — orivo

## Production target

GitHub Pages project site: `https://aminhadei.github.io/orivo/`

## Build

```bash
pnpm run build:pages   # nuxt build --preset github_pages
# output: .output/public/
```

CI (`.github/workflows/deploy.yml`) runs this on push to `main` and uploads `.output/public`.

## baseURL

| Context                | Value                                   |
| ---------------------- | --------------------------------------- |
| Local dev              | `/orivo/` (default in `nuxt.config.ts`) |
| CI build               | `NUXT_APP_BASE_URL=/orivo/`             |
| Custom domain (future) | `/` — update config + workflow together |

Every `public/` file is served at `{baseURL}{filename}`. Head `link` hrefs are **not** auto-prefixed
by Nuxt, so favicons in `nuxt.config.ts` interpolate `baseURL` manually.

## Content pattern

Blog metadata lives in `app/data/posts.json` and is imported at build time, so it is inlined into
the prerendered output — no runtime fetch, no server. Post bodies are Vue pages under
`app/pages/blog/`. Routes are discovered by the prerender crawler (`nitro.prerender.crawlLinks`),
so every post must be reachable by a link from `/blog`.

## Previewing the static build

`nuxt preview` serves from the baseURL, but a plain static server needs the path to match:

```bash
mkdir -p .preview && ln -s ../.output/public .preview/orivo
cd .preview && python3 -m http.server 4173   # → http://localhost:4173/orivo/
```

## Dev server (macOS)

The `dev` script sets `TMPDIR=/tmp` for a Nuxt dev-socket issue on macOS. Don't remove it. If the
dev server restart-loops with `EMFILE: too many open files`, the file watcher is being blocked —
verify against `pnpm run build:pages` instead of fighting the watcher.

## Don't

- Don't deploy `nuxt build` (node-server preset) to GitHub Pages.
- Don't rely on `server/api/*` in production.
- Don't commit `.output/`, `.nuxt/`, or `.preview/`.
