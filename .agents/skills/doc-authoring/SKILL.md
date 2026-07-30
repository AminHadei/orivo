---
name: doc-authoring
description: Use when writing docs/ for orivo, adding ADRs, or codifying conventions. Single source of truth, terse current-reality docs.
---

# Doc authoring — orivo

## Principles

1. **One source of truth** — normative rules in one file; skills/commands pointer-link, don't duplicate.
2. **Current reality only** — no backstory.
3. **Terse** — tables and bullets over prose.
4. **Audience split** — site content (Persian) vs developer handbook (English unless the team chooses otherwise).

## Structure (when `docs/` exists)

```
docs/
  index.md
  getting-started.md    # install, dev, build:pages, deploy
  architecture.md       # static Nuxt, data model, routing
  conventions.md        # or pointer to skills
  decisions/            # ADRs
```

## ADRs

`docs/decisions/NNNN-short-title.md` — Context, Decision, Consequences.

## After adding a doc

- Add a row to the doc table in `AGENTS.md` if applicable.
- Create/update a skill pointer if agents must follow it at task time.

## Don't

- Document noirium/library patterns (web components, ApiService, feature barrels).
- Duplicate rules already in `AGENTS.md` or `nuxt-app` / `design-system` / `static-deploy` skills.
