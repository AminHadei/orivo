---
name: code-review
description: Use when reviewing an orivo PR, branch, or diff. Loads REVIEW.md for severity calibration.
---

# Code review — orivo

Read [`REVIEW.md`](../../../REVIEW.md) in full — it overrides default review behaviour.

## Procedure

1. Read `AGENTS.md` for project context.
2. Read `REVIEW.md` for severity rules.
3. `git diff main...HEAD` — review every changed file.
4. Cite `file:line` + quote offending code.
5. Report: tally → intent summary → findings.

## orivo focus areas

- `baseURL` / GitHub Pages paths
- Static-only constraints (no runtime `server/api`)
- Persian/RTL head config and logical CSS when UI changes
- Design-system non-negotiables (no radius, hairlines, `.type-*`)
- `pnpm run build:pages` would still pass

## Don't

- Auto-fix, commit, push unless asked.
- Flag noirium/library patterns (web components, ApiService, dual-build).
- Report `.output/`, `.nuxt/`, `node_modules/`.
