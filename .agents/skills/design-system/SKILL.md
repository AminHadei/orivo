---
name: design-system
description: Use when changing layout, spacing, typography, colour, or any component appearance in orivo. Defines the RTL port of the designsystems.com visual language and the tokens that encode it.
---

# Design system — orivo

The visual language is a deliberate port of [designsystems.com](https://www.designsystems.com/),
mirrored for Persian RTL. Tokens live in `app/assets/css/tailwind.css`.

## Non-negotiables

| Rule           | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Canvas         | `#fff` background, `#000` text                                |
| Radius         | `0` everywhere (`--radius: 0`)                                |
| Separators     | 1px solid black hairlines — no shadows, no grey borders       |
| Grids          | Full-bleed, edge-to-edge; cells padded `50px` on desktop      |
| Page gutter    | 24px → 32px → 50px via `.gutter`                              |
| Section rhythm | `100px` above / `250px` below on desktop via `.section-block` |
| Body copy      | Pure black; only fine print uses `.type-meta` grey            |

## Type scale

Use the `.type-*` utilities instead of ad-hoc font sizes:

| Class                 | Role                                   |
| --------------------- | -------------------------------------- |
| `.type-display`       | Page headline (72px at desktop)        |
| `.type-section-title` | Section header (36px at desktop)       |
| `.type-card-title`    | Card heading (28px at desktop)         |
| `.type-body`          | Body copy                              |
| `.type-eyebrow`       | Small label above a card title         |
| `.type-meta`          | Dates, reading time, footer fine print |

**Persian typography differs from the Latin reference:** never copy the reference's negative
letter-spacing, and keep leading looser (`1.9` body, `1.35` display). Vazirmatn carries Persian;
Inter (`.font-latin`) carries Latin words, product names and the `orivo` wordmark.

## Layout primitives

- `base/HairlineGrid.vue` — the core grid. `cols` of 2, 3 or 4; hairlines use
  `border-inline-end` + `nth-child` so the mirror is automatic. Never rebuild this by hand.
- `base/SectionHeader.vue` — gutter-aligned title + subtitle above a grid.
- `base/ArticleCard.vue` — eyebrow / title / description / meta. Pass `to` only when the card
  should navigate; without it the card renders as a static `div`.
- `base/StackedLayersGraphic.vue` — the single illustration for the four-step section.
- `base/BackdropShape.vue` — hard-edged disc bleeding from the inline-start edge (the right side
  in RTL, i.e. into the hero's asymmetric indent). Three layers: a mesh of radial gradients over a
  flat base, a solid companion disc further out, and a wide blurred glow. **Never blur the disc
  itself** — the reference keeps a crisp circle. Size it to live inside the hero's indent so it does
  not sit under the headline.
- `base/ArrowLink.vue` — arrow points left (`ArrowLeft`) because reading direction is RTL.

## Header band

The header is `fixed`, so it never scrolls away and never changes size: its height comes from
`--header-h` (80 → 96 → 112px) and the wordmark stays at its large size. Only the background moves,
fading from transparent to solid white across the first 160px of scroll. Because the band overlays
the page, every first-on-page section must carry `.hero-block` to reserve that space.

## Hero pattern

The hero and both blog headers use the reference's asymmetric indent: `.hero-block` on top, `50px`
on the inline end, and `410px` on the inline start at `lg`.

**Do not use `.gutter` on these elements.** `.gutter` sets the `padding-inline` shorthand and, being
declared later in the utilities layer, silently overrides `ps-*`/`pe-*`. Use
`px-6 sm:px-8 lg:ps-[410px] lg:pe-[50px]` instead.

Heroes also need `overflow-hidden`: the backdrop disc is sized to bleed past the section's edges and
would otherwise spill into the grid below.

## Interaction

Links, buttons, `[role="button"]`, `summary` and labels all get `cursor: pointer` from the base layer
— Tailwind's preflight resets buttons to `default`, so do not remove that rule.

## Accent palette

Backdrop shapes and graphics draw from `--accent-green`, `--accent-blue`, `--accent-yellow`,
`--accent-red`, `--accent-purple`. Do not add fills outside this palette, and never use colour to
carry meaning — the layout does that work.
