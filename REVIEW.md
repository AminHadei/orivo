# REVIEW.md — orivo

Severity calibration for code review on this repository. Used by the `code-review` flow.

## Blocker

- Build breaks: `pnpm run build:pages` fails, or a route stops prerendering.
- Asset or link paths that ignore `baseURL` (`/orivo/`) and 404 on GitHub Pages.
- Runtime dependency on a Node server (`server/api/*`, SSR-only data fetching).
- RTL regressions: physical `left`/`right` where logical properties are required.
- Persian copy replaced with machine-translated or garbled text.

## Major

- Design drift from the reference system: rounded corners, non-hairline borders, shadows,
  colour fills outside the accent palette, or ad-hoc type sizes instead of `.type-*`.
- `.gutter` combined with `ps-*`/`pe-*` on one element (silently drops the indent).
- Duplicated layout logic instead of reusing `HairlineGrid` / `SectionHeader` / card primitives.
- New dependency added for something the current stack already covers.

## Minor

- Inconsistent spacing scale (values outside the section/gutter rhythm).
- Missing `useSeoMeta()` on a new page.
- Component placed outside the established `base/` · `landing/` · `blog/` grouping.

## Nit

- Import ordering, naming, or comment wording.
- Copy polish that does not change meaning.
