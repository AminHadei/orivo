---
name: code-conventions
description: Use when editing TypeScript or Vue under app/, or nuxt.config.ts in orivo. Loads orivo code conventions via nuxt-app, design-system, and static-deploy skills.
---

# Code conventions — orivo

orivo is a **Nuxt 4 static site**, not a component library. Conventions live in topic skills — read the relevant ones before coding:

1. **[`nuxt-app`](../nuxt-app/SKILL.md)** — `app/` layout, Vue/TS, components, composables, `baseURL`-safe paths.
2. **[`design-system`](../design-system/SKILL.md)** — RTL layout, tokens, hairlines, type scale.
3. **[`static-deploy`](../static-deploy/SKILL.md)** — GitHub Pages constraints, static JSON, no runtime server.
4. **[`content-fa`](../content-fa/SKILL.md)** — Persian copy and blog posts.

## Tooling

- Format with Prettier (`pnpm format:fix`); Tailwind class order via `prettier-plugin-tailwindcss`.
- Lint with ESLint flat config (`pnpm lint` / `pnpm lint:fix`).
- Typecheck with `pnpm typecheck` (`nuxt typecheck`).
