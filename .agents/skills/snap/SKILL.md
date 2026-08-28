---
name: snap
description: Only trigger this on the explicit slash command "/snap". Never infer it from tone, frustration, or urgency in normal prose — it must be typed as a command. Overrides the incremental step-by-step workflow in AGENTS.md for the current task.
---

# /snap

## What it does

`/snap` means: stop asking, just finish it.

When the user types `/snap <task>`, suspend the normal workflow rules for that task:

- **No step-by-step splitting.** Don't break the task into 5-10% chunks. Do the whole thing in this turn.
- **No pausing for approval between changes.** Make every change needed, end to end, without checking in mid-way.
- **No waterfall/agile mode-switching ceremony.** Just build.
- Ask **at most one** blocking clarifying question, and only if the task is truly ambiguous (e.g. which of two unrelated features). Otherwise make the reasonable call yourself and note the assumption at the end — don't ask to confirm it first.

This is a scoped, one-time override for the current task only. Once it's done, the normal incremental/approval workflow resumes for whatever comes next — `/snap` doesn't change the standing rules in `AGENTS.md`, it just skips them for this one shot.

## What does NOT get suspended

Snapping past process, not standards. Everything else in the repo's skills still applies at full strength:

- Code quality, security practices, file-size guidance, folder structure — unchanged.
- No shortcuts on auth, validation, or anything in the `backend` security section.
- Still no AI-slop code or filler comments — speed isn't an excuse for sloppy output.

## After a snap

- Give one tight summary of everything that changed (not a step-by-step play-by-play — this isn't a commit log, it's a "here's what's different now").
- Flag anything you weren't fully sure about instead of burying it.

## Example

```
/snap add rate limiting to the login and signup endpoints
```
→ AI implements it fully (middleware/dependency, config, tests if the project has a test setup) in one pass, then reports back what was added — no "step 1/4, shall I continue?".