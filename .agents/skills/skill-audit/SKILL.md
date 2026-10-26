---
name: skill-audit
description: Use to review a set of SKILL.md files for overlapping triggers, conflicting instructions, bloat, and weak descriptions an agent will never match. Keeps the library sharp as it grows. Not for writing new skills.
---

# Skill audit

A skill library fails two ways: the agent never finds the skill, or it finds two that disagree.

## 1. Inventory

Build a table: name, description verbatim, line count, and the concrete artifact it produces. Read every description the way the agent does — descriptions are the only routing signal.

## 2. Trigger collisions

Two skills collide if the same prompt plausibly matches both. For each pair decide:

- **Merge** — same job, different vocabulary.
- **Disambiguate** — add a negative clause to both: "Not for X (use Y)."
- **Keep separate** — genuinely different artifacts, such as a plan versus a diff.

Every description needs the trigger ("Use when…"), the output, and the nearest neighbour it is not.

## 3. Instruction conflicts

Look for rules that can both fire and disagree: commit versus autopilot, review versus verify, ui-ux versus design-critique. Resolve by making one skill defer explicitly: "Follow the `ui-ux` skill for X; this skill covers Y."

## 4. Bloat

- Over ~150 lines: cut examples, keep rules.
- Code samples that restate the rule: delete.
- Process the model already follows by default: delete.
- Anything project-specific that belongs in AGENTS.md, not a portable skill.

## 5. Reference folders

A skill may ship `reference/*.md`. The SKILL.md must stay the router.

- Every reference file is named in SKILL.md (or in another reference) with the condition for opening it. Orphans get linked or deleted.
- Frontmatter lives only in SKILL.md. References are plain Markdown.
- Budget: SKILL.md ≤ 150 lines, each reference 40–120, total per skill ≈ 1,200.
- One rule has one owner. If SKILL.md and a reference both state it, delete the copy.
- An external skill (impeccable, Apple HIG, a taste skill) is cited as optional, with a local fallback. The skill must work with none of them installed.
- References describe technique, not project specifics. No secrets, no client names, no dates that rot.

## 6. Routing coverage

The routing table in `AGENTS.md` is the discovery layer. Check it against the folders:

- Every skill except `snap` and `autopilot` has exactly one row.
- Every row names a folder that exists and is not a mode.
- Triggers are concrete task language, not categories ("a bug with an unknown cause", not "debugging").
- `snap` and `autopilot` are trigger-only: the description names the literal prefix, and neither appears as an automatic route.
- Adding a skill means adding a row in the same commit.

## 5. Description quality

Bad: "Helps with testing."

Good: "Use when an app needs to be exercised end to end — run it, click the main flows, log bugs, fix them, add regression tests. Not a code review (use review)."

## 7. Output

```
Verdict per skill: keep | trim | merge into <x> | rewrite description | delete

Collisions
- review vs qa — both claim "check the feature". Fix: review = diff, qa = running app.

Trim
- <skill>: lines 40-88 duplicate <other>; remove.

References
- <skill>: reference/orphan.md is linked from nowhere.
- <skill>: SKILL.md is 240 lines; move sections 3-5 to reference/.

Missing
- No skill covers <gap>; prompts about it currently hit <wrong skill>.
```

Keep the library portable: no repo-specific paths, no secrets, no versions that rot in a month.
