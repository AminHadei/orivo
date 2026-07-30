---
name: git-conventions
description: Use when composing a commit message or advising on git workflow for orivo. Conventional Commits, orivo scopes, no AI attribution.
---

# Git conventions — orivo

## Commit format

```
<type>(<scope>): <subject>
```

- **Subject:** imperative, lowercase, no period, ≤72 chars, English.
- **No body** unless user explicitly asks.
- **No trailers:** no `Co-Authored-By`, no `Generated with …`.

## Types

| Type       | Use                                   |
| ---------- | ------------------------------------- |
| `feat`     | New page, component, content, feature |
| `fix`      | Bug fix                               |
| `docs`     | Documentation, agent skills           |
| `style`    | Formatting only                       |
| `refactor` | Restructure, no behaviour change      |
| `chore`    | Deps, CI, tooling                     |
| `build`    | Build/deploy config                   |

## Scopes (examples)

`app`, `config`, `deploy`, `blog`, `agents`, `public`, `docs`

## Branches

`feat/<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`

## Hooks

Husky runs `lint-staged` on commit and `commitlint` on the message. Never `--no-verify`.

## Rules

- Never commit unless user asks.
- Never `--force` or amend pushed commits without explicit approval.
