# godforge

Opinionated workflow + skills for AI-assisted development. `AGENTS.md` + 7 domain skills (`architecture`, `backend`, `frontend`, `ui-ux`, `docs`, `pdf`, `snap`) in `.agents/skills/`.

## Install — one line

From any repo root:

```bash
curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh | bash
```

This copies `AGENTS.md` and `.agents/skills/` (7 skills) into the current directory. Skills are discovered via the `skill` tool — agents see `name`/`description` and load `SKILL.md` on demand.

**Requires the repo to be public** for `curl` to fetch. If it's private, use the git-based one-liner (works with your stored GitHub credentials):

```bash
tmp=$(mktemp -d) && git clone --depth 1 https://github.com/devansharora18/godforge.git $tmp && cp $tmp/AGENTS.md ./AGENTS.md && cp $tmp/AGENTS.md ./Agents.md && mkdir -p ./.agents/skills && cp -r $tmp/.agents/skills/. ./.agents/skills/ && rm -rf $tmp && echo "✓ godforge installed"
```

Install to a specific path:

```bash
curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh | bash -s -- ./path/to/repo
```

Update (re-run the same command — it overwrites with the latest version).

## How skills are used

- Placed in `.agents/skills/<name>/SKILL.md` (also discoverable at `.opencode/skills/` and `.claude/skills/` — `.agents/` is the agent-compat path OpenCode walks up the git worktree to find).
- Each `SKILL.md` has frontmatter `name` (must match folder) + `description` (1–1024 chars). OpenCode lists them in the `skill` tool; the agent calls `skill({ name })` when the task matches.
- `AGENTS.md` holds the process/code rules; skills hold domain technique — see `AGENTS.md: Skills` table for when to use each.
