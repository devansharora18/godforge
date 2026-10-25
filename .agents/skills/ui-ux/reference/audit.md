# Audit

Run at 1440, 768, and 360. Full-page screenshots, both themes when both exist. Judge the screenshot, not the code.

## Gate 1 — Direction

- The contract's direction matches what was actually built.
- Stranger test: ask for three words. "Clean, modern, minimal" — or any synonym — is a fail.
- The default quartet is absent: no centered hero, no gradient blob, no three equal cards, no pill row.
- Not the direction used on the previous screen in this project, unless the contract explains why.

## Gate 2 — Layout

- Four or more sections use at least three different skeletons.
- Adjacent sections do not share a rhythm.
- No horizontal overflow at 360 (`scrollWidth === clientWidth`).
- Visual order matches DOM order; headings descend without skips.
- Anchored sections clear the sticky header (`scroll-padding-top`).
- Touch targets ≥ 44×44px with spacing.

## Gate 3 — Type

- Five or six sizes; no 13px body; no 10px paragraph.
- Measure 45–75ch; headings tracked tight; line height within range.
- One family per role, no accidental third.
- Numerals align where they sit in columns.

## Gate 4 — Color

- Only tokens; no stray hex in components.
- Every text pair measured, not eyeballed.
- One accent doing state, not decoration.
- Dark mode remapped and re-checked, not inverted.

## Gate 5 — States

- Interactive: default, hover, focus, active, disabled.
- Data: loading, empty, error.
- Empty and error are designed, not the browser default.

## Gate 6 — Accessibility

- Keyboard reaches everything in a logical order; focus is visible everywhere.
- Every input has a real `<label>`; images have meaningful alt or `alt=""`.
- `prefers-reduced-motion` removes motion, including smooth scroll.
- No keyboard trap, no `outline: none` without replacement.

## Gate 7 — Copy

- CTAs are verb + object.
- Numbers are specific; no "10x" without a subject.
- Errors say what happened and what to do.
- No lorem, no invented logos, no testimonials without a name.

## Gate 8 — Craft

- Console clean; no 404s; no broken images.
- Transitions 150–250ms, easing not linear, no motion on everything.
- Images sized; no layout shift.
- One icon set; zero emoji.

## Output

```
Verdict: ship | fix first

Blocker
- [checkout @360] total row overflows 24px — grid-cols-3 with min-content.
  Fix: grid-cols-[1fr_auto].

High
- Direction: reads as "clean SaaS"; three equal cards in section 3.
  Fix: replace with ledger skeleton, keep the palette.

Keep
- The palette and type pairing carry the direction; do not change them during fixes.
```
