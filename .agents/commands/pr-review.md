# /pr-review

Source of truth for `/pr-review`. Shims: `.cursor/commands/pr-review.md`.

Review current branch against `main` for **orivo**.

1. Read [`AGENTS.md`](../../AGENTS.md).
2. Read [`REVIEW.md`](../../REVIEW.md) — follow exactly.
3. `git diff main...HEAD` — every file.
4. Findings: `file:line` + quoted code.
5. Check deploy impact: would `pnpm run build:pages` still pass?
6. Output shape per REVIEW.md.

Don't auto-fix, commit, push, or run CI unless asked.
