# /add-doc

Source of truth for `/add-doc`. Shims: `.cursor/commands/add-doc.md`, `.claude/commands/add-doc.md`.

Add documentation to **orivo** following the `doc-authoring` skill.

1. Read [`.agents/skills/doc-authoring/SKILL.md`](../skills/doc-authoring/SKILL.md).
2. Ask which topic if unclear.
3. Write under `docs/` — one file per topic, terse, orivo-specific (Nuxt static site, Persian RTL, GitHub Pages).
4. Add row to doc table in `AGENTS.md` if applicable.
5. Add skill pointer if agents need it at task time — don't duplicate prose.

Don't commit unless user asks.
