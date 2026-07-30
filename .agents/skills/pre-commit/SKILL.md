---
name: pre-commit
description: Use when finishing an orivo task or before declaring work complete. Runs typecheck, lint, format check, and build:pages; reports pass/fail.
allowed-tools: Bash(pnpm *), Read
---

# Pre-commit verification — orivo

Run before declaring a task complete (especially deploy-related work).

## Pipeline

```bash
pnpm run check
pnpm run build:pages
```

`check` = `typecheck` + `lint` + `format` (Prettier `--check`) + `spellcheck` (cspell).  
`build:pages` uses the `github_pages` preset — same as CI. Output: `.output/public/`.

### Auto-fix first (optional)

If `$ARGUMENTS` contains `--fix`, or lint/format fail with auto-fixable issues:

```bash
pnpm run check:fix
pnpm run build:pages
```

## Report

List each step: ✅ pass or ❌ fail with the error snippet. Don't commit unless the user asks.

## Don't

- Don't use `vp` or noirium task-runner commands — orivo uses plain `pnpm` scripts.
- Don't skip `build:pages` for changes touching `app/`, `nuxt.config.ts`, `public/`, or `.github/workflows/`.
- Don't use `--no-verify` on commits.
