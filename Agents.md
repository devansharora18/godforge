# AGENTS.md

## Process

- Default to **agile**: short iterate-and-adjust loops, for ~90% of work (85% is also fine — err toward this whenever requirements might shift).
- Use **waterfall** (requirements → design → implementation → test → review, in order, no skipping ahead) only for the ~10–15% of work that is well-defined upfront and benefits from locking scope before touching code — e.g. schema/migration changes, public API contracts, security-sensitive flows. State explicitly when switching modes and why.
- **No big-bang changes.** Every task is broken into the smallest reasonable steps (roughly 5–10% of the total work per step).
- After finishing one step, **stop**. Summarize what changed, then ask for approval before starting the next step. Do not chain multiple steps into one response.
- Treat each step like a single commit: one logical change, one clear message, easy to review or revert on its own. Suggested format:
  ```
  step 3/12: add auth middleware
  - validates JWT on protected routes
  - returns 401 on missing/expired token
  ```
- If a step turns out to be bigger than expected, split it further and say so instead of pushing through.

## Code

- Write the least code needed to solve the problem. No speculative abstractions, no unused config, no "just in case" flexibility.
- Comment only where the *why* isn't obvious from the code itself. No comments that restate what the line already says.
- No filler, no boilerplate scaffolding "for completeness," no AI-generated-feeling padding (no restating the obvious, no over-explaining, no unnecessary try/catch or defensive code for cases that can't happen here).
- Prefer editing existing files/functions over adding new ones unless a new file is genuinely warranted.
- Match the existing style of the codebase (naming, formatting, patterns) rather than introducing a new convention per step.

## Skills

- Skill directories under `skills/` (architecture, frontend, backend, ui-ux, testing, devops, docs) hold the detailed how-to for each domain.
- Use this file for workflow/process rules; use the relevant `SKILL.md` for domain-specific technique.