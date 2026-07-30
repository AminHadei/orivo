# orivo

سایت معرفی خدمات **اوریوو** — مشاوره هوشمندسازی سازمان — به همراه بلاگ. یک سایت تک‌صفحه‌ای فارسی و راست‌به‌چپ که به‌صورت ایستا روی GitHub Pages منتشر می‌شود.

Persian (RTL) single-page consulting site plus blog, built with Nuxt 4 and Tailwind CSS v4 and deployed as a fully static site to GitHub Pages.

## Stack

| Item      | Value                                               |
| --------- | --------------------------------------------------- |
| Framework | Nuxt 4 (Vue 3, Vite, TypeScript)                    |
| Styling   | Tailwind CSS v4 via `@tailwindcss/vite`, shadcn-vue |
| Icons     | `@lucide/vue`                                       |
| Fonts     | Vazirmatn (Persian, self-hosted), Inter (Latin)     |
| Deploy    | GitHub Pages, static only, `baseURL: /orivo/`       |

## Commands

```bash
pnpm install          # install dependencies
pnpm run dev          # dev server (http://localhost:3000/orivo/)
pnpm run build        # standard Nuxt build
pnpm run build:pages  # static build for GitHub Pages → .output/public
pnpm run generate     # prerender all routes
pnpm run preview      # preview a production build
```

`pnpm run dev` sets `TMPDIR=/tmp` to work around a Nuxt dev-socket issue on macOS.

## Structure

```
app/
  app.vue                  # root shell
  layouts/default.vue      # header + main + footer
  pages/
    index.vue              # homepage (all landing sections)
    blog/index.vue         # blog index
    blog/<slug>.vue        # one file per post
  components/
    SiteHeader.vue         # fixed header + full-screen menu
    SiteFooter.vue
    base/                  # layout primitives (HairlineGrid, BackdropShape, cards…)
    landing/               # homepage sections
    blog/                  # PostCard, PostShell
  composables/useBlog.ts   # post lookup and formatting
  data/posts.json          # post metadata (title, summary, date, category…)
  assets/css/tailwind.css  # design tokens and type scale
public/                    # favicons and static files
```

## Design

The layout is a Persian, RTL adaptation of [designsystems.com](https://www.designsystems.com/):
white canvas, pure-black type, no rounded corners, 1px hairline grids, generous whitespace, and
hard-edged gradient discs behind the headings. The header floats above the page at a fixed height and
fades from transparent to white as you scroll. See `AGENTS.md` for the token and spacing rules.

## Adding a blog post

1. Add an entry to `app/data/posts.json` (`slug` must match the page filename).
2. Create `app/pages/blog/<slug>.vue` wrapping the content in `<BlogPostShell slug="<slug>">`.
3. Write the body with plain `h2`/`h3`/`p`/`ul`/`table` — `PostShell` styles them.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `pnpm run build:pages` with
`NUXT_APP_BASE_URL=/orivo/` and publishes `.output/public` to GitHub Pages.
