---
name: design-critique
description: Use to review a screenshot or live URL and return a prioritized fix list — hierarchy, typography, spacing, color, states, accessibility. Critique only, not implementation. Ships per-surface checklists and an evidence protocol. Not for choosing the visual direction (use ui-ux), extracting tokens (use design-system), or viewport breakage (use responsive-audit).
---

# Design critique

Judge the screen against its job, not against taste.

## 1. Name the job

Before looking: what is the one action this screen drives, and for whom? Write it in one line. Without it, "better" means "different".

## 2. Gather evidence

- 360, 768, 1440 — full page and the fold.
- Both themes if both exist.
- Default, loading, empty, error.
- Hover, focus, and disabled where you can capture them.

Capture protocol and citation format: `reference/evidence.md`.

## 3. Review in order

| File | Open when |
|---|---|
| `reference/evidence.md` | Before the first screenshot. |
| `reference/surfaces.md` | **Always**. The checklist for this type of screen. |
| `reference/hierarchy.md` | The screen feels flat, busy, or "fine but forgettable". |
| `reference/interaction.md` | Forms, checkout, destructive actions, async work. |

## 4. Severity

| Level | Meaning | Action |
|---|---|---|
| Blocker | the primary action is unreachable, invisible, or ambiguous | fix before ship |
| High | wrong hierarchy, missing state, failing contrast | fix now |
| Medium | spacing, inconsistency, weak affordance | fix or ticket |
| Keep | what works and must survive the fix | state it explicitly |

## 5. Output

```
Verdict: ship | fix first

Blocker
1. [Checkout] Primary CTA has the same weight as "Cancel" — no hierarchy.
   Fix: one filled button; the other becomes a text link.

High
2. [Hero @1440] Body runs 92ch — cap at 65ch.

Keep
- The monochrome palette and single accent work; do not add a third color.
```

## Rules

- No redesign proposals. Point at the defect and the smallest fix.
- Cite values, not adjectives: "16px label gap, 40px to the next group", not "spacing feels off".
- Do not critique copy tone unless asked; flag factual or UX copy problems only.
- If the screenshot is too small to judge, ask for a crop instead of inventing findings.
- One finding per line. Five real findings beat twenty observations.
