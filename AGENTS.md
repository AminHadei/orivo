# AGENTS.md — orivo

Orientation for AI agents on **orivo** — a Persian (RTL) single-page site plus blog for enterprise-intelligence consulting («هوشمندسازی سازمان»). Static Nuxt 4 site on GitHub Pages.

Claude Code: `CLAUDE.md` → `@AGENTS.md`. Cursor / Codex / others: read this file directly.

## Project snapshot

| Item          | Value                                                           |
| ------------- | --------------------------------------------------------------- |
| Stack         | Nuxt 4, Vue 3, Vite, TypeScript, Tailwind CSS v4                |
| Deploy        | GitHub Pages — **static only** (`pnpm run build:pages`)         |
| `baseURL`     | `/orivo/`                                                       |
| Language      | Persian, `dir="rtl"`, `lang="fa"` (Vazirmatn + Inter for Latin) |
| App dir       | `app/` (pages, components, composables, layouts, data)          |
| Static assets | `public/` (favicons, images)                                    |
| Dev           | `pnpm run dev` — uses `TMPDIR=/tmp` (macOS Nuxt socket fix)     |

**Hard constraint:** GitHub Pages has no Node runtime. Keep content in `app/data/*.json` or `public/`. Prerender pages at build time; do not rely on `server/api/*` in production.

## Design system

The visual language is a direct port of [designsystems.com](https://www.designsystems.com/), mirrored for RTL:

- White background, pure-black text, **no border radius**, 1px black hairlines as the only separator.
- Full-bleed grids (`HairlineGrid`) with 2/3/4 columns and 50px cell padding on desktop.
- Page gutter: 24px → 32px → 50px (`.gutter`).
- Section rhythm: 100px above / 250px below on desktop (`.section-block`).
- Hard-edged gradient discs (`BackdropShape`) bleeding from the inline-start edge — a mesh of
  radial gradients over a flat base, never blurred, plus a solid companion disc and a soft glow.
- The header floats above the page: fixed height (`--header-h`), always-large wordmark, and a
  background that fades from transparent to solid white over the first 160px of scroll. Page heroes
  reserve its band with `.hero-block`, which is what lets a disc bleed up behind it.
- Type scale lives in `app/assets/css/tailwind.css` as `.type-*` utilities. Persian needs neutral
  letter-spacing and looser leading than the Latin reference — do not copy negative tracking.

**Do not** combine `.gutter` with `ps-*`/`pe-*` on the same element: `.gutter` sets the
`padding-inline` shorthand and wins the cascade. Use explicit `px-*` + `ps-*`/`pe-*` instead.

## Skills (load on demand)

Canonical: [`.agents/skills/`](./.agents/skills/). Cursor: [`.cursor/rules/`](./.cursor/rules/). Claude: [`.claude/skills/`](./.claude/skills/).

| Skill              | When                                       |
| ------------------ | ------------------------------------------ |
| `nuxt-app`         | Editing `app/**`, `nuxt.config.ts`, Vue/TS |
| `design-system`    | Layout, typography, RTL, components        |
| `static-deploy`    | Deploy, `baseURL`, CI, static data         |
| `content-fa`       | Writing Persian copy and blog posts        |
| `code-conventions` | Cross-cutting Vue/TS conventions           |
| `git-conventions`  | Commits, branch naming, hooks              |
| `pre-commit`       | Verification before declaring work done    |
| `code-review`      | PR / diff review via `REVIEW.md`           |
| `doc-authoring`    | Handbook docs and ADRs                     |

## Agent rules

1. **Never `--no-verify`.** Fix hook failures at the root cause.
2. **Never commit without user confirmation.**
3. **Reversible local work** — proceed. **Destructive/remote** — confirm first.
4. **Simplicity & surgical scope.** Minimum diff; match existing style.
5. **Verify deploy work:** `pnpm run build:pages` must pass.

## Canonical examples

- `app/pages/index.vue` — homepage section order
- `app/components/base/HairlineGrid.vue` — the core layout primitive
- `app/components/blog/PostShell.vue` — blog post chrome and Persian prose styles
- `nuxt.config.ts`, `.github/workflows/deploy.yml`
