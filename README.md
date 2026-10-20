# GodForge

Opinionated workflow + skills for AI-assisted development. Drop it into a repo and your coding agent stops improvising — it inherits a process (agile-first, incremental, security-conscious) and forty domain skills it summons on demand, instead of guessing at conventions from vibes.

One file writes the commandments. Forty skills carry out the will.

## The pantheon

- **`AGENTS.md`** — the law. Agile by default (waterfall only for well-defined, lock-scope-first work), incremental changes only, approval requested after each step, minimal code, no filler comments.
- **`.agents/skills/`** — forty lesser gods, grouped by the work they cover, each summoned only when the task calls for their domain:

  | Group | Skills |
  |---|---|
  | Core | `architecture` `frontend` `backend` `ui-ux` `docs` `pdf` |
  | Review and verification | `review` `investigate` `qa` `verify` `second-opinion` |
  | Planning | `plan-review` `scope-cut` `prd` `spec` `competitor-teardown` `adr` |
  | Workflow and safety | `guard` `commit` `pr-describe` `release-notes` `rollback` `handoff` `memory-notes` `scratch` |
  | Hygiene | `refactor` `dead-code` `skill-audit` |
  | Frontend and design | `design-system` `design-critique` `motion` `seo-meta` `responsive-audit` |
  | Backend and data | `db-design` `api-review` `cost` `observability` |
  | Teaching | `explain` |
  | Modes | `snap` (`/snap`) · `autopilot` (`/autopilot`) |

## The rite of installation

One line, from any repo root:

```bash
curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh | bash
```

This copies `AGENTS.md` and `.agents/skills/` (all 40 skills) into the current directory.

**Install to a specific path:**

```bash
curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh | bash -s -- ./path/to/repo
```

**Update:** re-run the same command — it overwrites with the latest version.

## How the gods are summoned

Skills live at `.agents/skills/<name>/SKILL.md` — also mirrored at `.opencode/skills/` and `.claude/skills/` for tool-specific discovery. `.agents/` is the agent-compat path OpenCode walks up the git worktree to find.

Each `SKILL.md` has frontmatter:

```yaml
---
name: backend        # must match the folder name
description: ...     # 1–1024 chars — this is what the agent matches against
---
```

The agent lists available skills via the `skill` tool, matches the task against each `description`, and calls `skill({ name })` to load the full `SKILL.md` on demand — so the skill's detail doesn't bloat context until it's actually relevant.

`AGENTS.md` holds the process/code rules and a table of which skill to use when — see the **Skills** section in `AGENTS.md` for the full directory, grouped by domain. Skills are meant to be combined: a feature that touches architecture, frontend, and backend should pull from all three.

## Commandments

- **Agile over waterfall**, most of the time — lock scope upfront only when it actually pays off (schema changes, public APIs, security-sensitive flows).
- **Incremental, reviewable change** — one logical step at a time, approval before the next, commit-sized.
- **As little code as possible** — no speculative abstractions, no comments that restate the obvious, nothing that reads like it was summoned to fill space.
- **Security is not optional** — baked into `backend` by default, not bolted on after the fact.
- **`/snap` is a last resort, not a habit** — when you know exactly what you want and the ceremony is just friction, one word skips the process without skipping the standards. Use it sparingly; half of all process is not a good average.

## Join the forge

Skills are just Markdown — no framework, no build step. Fork it, edit or add a `SKILL.md`, open a PR. Keep descriptions specific; that's the only thing standing between your skill and an agent that never calls it.