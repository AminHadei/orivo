---
name: nuxt-app
description: Use when editing app/pages, app/components, app/composables, app/layouts, or nuxt.config.ts in orivo. Covers Nuxt 4 + Vue 3 conventions — directory layout, TypeScript, components, composables, and baseURL-safe asset paths.
---

# Nuxt app conventions — orivo

## Layout

```
app/
  app.vue          # root shell — keep minimal
  pages/           # file-based routes
  components/      # auto-imported (PascalCase filenames)
    base/          # layout primitives (grid, backdrop shapes, cards, links)
    landing/       # homepage sections
    blog/          # blog card + post chrome
  composables/     # auto-imported (use* prefix)
  data/            # static JSON content (posts)
  layouts/         # default layout: header + main + footer
  types/           # shared types
nuxt.config.ts
public/            # static assets (served at baseURL root)
```

## Vue / TypeScript

- `<script setup lang="ts">` for all SFCs.
- Typed props: `defineProps<{ ... }>()` or `withDefaults(defineProps<...>(), {})`.
- Prefer `const` + inference; explicit return types on exported composables.
- No `any`. Use `unknown` at boundaries, then narrow.
- Named exports in composables/utils.

## Components

- One component per file; filename matches component name.
- Import `base/*` primitives explicitly (`import HairlineGrid from "@/components/base/HairlineGrid.vue"`)
  so the grouping stays readable; `landing/*` and `blog/*` rely on Nuxt auto-imports
  (`LandingHeroSection`, `BlogPostCard`, …).
- **Dynamic `<component :is>` with `NuxtLink` must use the imported component**, not the string
  `"NuxtLink"` — the string does not resolve and silently renders an unknown `<nuxtlink>` element:

```ts
import { NuxtLink } from "#components"; // then :is="to ? NuxtLink : 'div'"
```

- Use `useRuntimeConfig().app.baseURL` when building paths to `public/` assets.
- Scoped CSS by default. Use logical properties (`padding-inline`, `border-inline-end`,
  `margin-inline`) — the site is RTL and physical directions will break the mirror.

## Pages

- `app/pages/index.vue` → `/` (with baseURL `/orivo/`).
- One file per blog post: `app/pages/blog/<slug>.vue`, wrapped in `<BlogPostShell slug="…">`.
- Every page sets `useSeoMeta()`; global defaults live in `nuxt.config.ts`.

## Config

- `app.baseURL`: `/orivo/` locally and in CI (`NUXT_APP_BASE_URL` in the deploy workflow).
- `htmlAttrs`: `dir="rtl"`, `lang="fa"` — do not remove.
- Keep `compatibilityDate` current when upgrading Nuxt.

## Don't

- Don't add `server/` routes for data that can live in `app/data/*.json`.
- Don't hardcode root `/` asset paths — always account for `baseURL`.
- Don't introduce a UI library for something the `base/` primitives already cover.
