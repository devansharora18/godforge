# Skill expansion — plan

## Goal

Grow the library from 8 to 40 skills, organized by the work they cover, with no overlapping triggers and no repo-specific content.

## Conventions

- `.agents/skills/<name>/SKILL.md`; frontmatter `name` equals the folder.
- Every description states the trigger ("Use when…"), the artifact it returns, and the nearest skill it is **not**.
- Body: numbered process, concrete commands, output format, rules. 35–70 lines.
- Portable Markdown only — no secrets, no hardcoded project paths, no framework versions that rot.

## Inventory (32 new)

| Group | Skills |
|---|---|
| Review & verification | review, investigate, qa, verify, second-opinion |
| Planning | plan-review, scope-cut, prd, spec, competitor-teardown, adr |
| Workflow & safety | guard, commit, pr-describe, release-notes, rollback, handoff, scratch, memory-notes |
| Hygiene | refactor, dead-code, skill-audit |
| Frontend & design | design-system, design-critique, motion, seo-meta, responsive-audit |
| Backend & data | db-design, api-review, cost, observability |
| Teaching | explain |

## Assumptions

- The library stays plain Markdown; no new tooling or build step.
- `install.sh` copies the whole skills directory, so it needs no change.
- The three indexes to keep in sync are `AGENTS.md`, `README.md`, and the landing page's data file.
- The landing page derives its count from data instead of repeating a number in prose.

## Done when

All 40 folders have a valid `SKILL.md`, both markdown indexes list them, the site builds and shows the real count, and history reads as one commit per group.
