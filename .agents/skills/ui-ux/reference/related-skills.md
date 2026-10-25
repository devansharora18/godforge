# Related skills

These are optional, not dependencies. The local library must work with none of them installed. When one is present, use it for the job it is best at — do not let two skills re-decide the same thing.

## `impeccable` — craft execution

Upstream: pbakaus/impeccable (Apache-2.0). 23 commands plus a deterministic detector.

**Use it for:** mechanical polish after the direction is set — `typeset`, `colorize`, `layout`, `critique`, `polish`, `bolder` / `quieter`, `distill`, `harden`, `animate`, `clarify`, `adapt`, `optimize`, `extract`, `document`.

**Run its detector as an extra gate:** `npx impeccable detect` on the built page. Treat its findings as mechanical facts (spacing, contrast, type mechanics), not as a direction change.

**Do not use it to choose a direction.** It optimizes execution; it does not know this brand's argument. A page can pass every rule and still be the same page as last time.

**If absent:** `reference/audit.md` covers the same terrain at lower resolution.

## Apple HIG / design-taste skills — platform feel

May arrive as `apple-design`, `apple-uiux-taste`, `design-taste`, or a vendored HIG bundle.

**Use it for:** interaction and motion on anything meant to feel native — direct manipulation, interruptible springs, materials, 44px hit areas, chrome that recedes.

**Apply these regardless of whether the skill is installed:**

- Content first; the chrome is quiet and recedes while you read or scroll.
- One primary action per view; destructive actions are separated and confirmed.
- Motion continues the gesture and can be interrupted. Springs with velocity, never linear, never decorative.
- Hierarchy through size and weight, not through color. Tint marks interaction.
- Translucency only when real content scrolls underneath. Otherwise it is costume.
- 44×44pt targets, safe-area insets, and system text scaling respected.

**Not for:** expressive marketing pages. HIG is a platform language, not a brand direction. If the brief is "native / quiet / premium calm", use `direction-apple.md`; otherwise keep the chosen direction and borrow only the motion quality.

## Precedence when they conflict

1. Accessibility and the platform's conventions.
2. The direction contract — layout, palette, type pairing.
3. `impeccable` — mechanical polish within that direction.
4. Apple/HIG — interaction and motion when the brief is native.

State the sources in the contract: `polish: impeccable`, `motion: HIG`. If two rules contradict and neither outranks the other, the direction contract decides.

## What not to do

- Do not load three design skills and average them. That produces the same page with more rules.
- Do not cite a skill you did not open.
- Do not copy their reference files into the project; link the skill.
- Do not let a detector's score stand in for the stranger test. Both must pass.

## Attribution

- `impeccable` — Paul Bakaus, Apache-2.0.
- Apple Human Interface Guidelines — Apple Inc.; principles referenced, no assets copied.
- Taste-style anti-slop framing — Leonxlnx/taste-skill and similar; concepts referenced, not reproduced.
