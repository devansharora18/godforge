# Audit

Run at 1440, 768, and 360. Full-page screenshots, both themes when both exist. Judge the screenshot, not the code.

## How a gate binds

Every check below carries a tier. The tier says whether you may disagree with it.

- **F — Floor.** Never ships, never waivable: contrast, focus, keyboard access, honesty about facts, horizontal overflow, token discipline. A Floor finding is a blocker even when nothing else is wrong.
- **R — Reflex.** A default a model falls into, not a law. Fix it, or waive it on the record with a real reason. The reason is about this page and could not be pasted into another audit unchanged.
- **Finish.** Craft detail, invisible at arm's length. Answer it, it never blocks a ship.

A waiver is one line, three fields, in the output:

```
waived G2 · adjacent sections share a rhythm · one paper band holds three comparisons and must keep its rhythm
      gate   evidence that the rule genuinely does not hold here   why this page needs it
```

A waiver with no evidence is a dismissal and the gate stays open. A waiver naming a Floor check is rejected. Three waivers on one screen means the direction is wrong, not the rules — change the direction instead of writing a fourth.

## Gate 1 — Direction (F/R)

- F — The contract's direction matches what was actually built, or the change is named in the output.
- R — Stranger test: ask for three words. "Clean, modern, minimal" — or any synonym — is a fail.
- R — The default quartet is absent: no centered hero, no gradient blob, no three equal cards, no pill row.
- R — Not the direction used on the previous screen in this project, unless the contract explains why.

## Gate 2 — Layout (F/R)

- R — Four or more sections use at least three different skeletons.
- R — Adjacent sections do not share a rhythm.
- F — No horizontal overflow at 360 (`scrollWidth === clientWidth`).
- F — Visual order matches DOM order; headings descend without skips.
- F — Anchored sections clear the sticky header (`scroll-padding-top`).
- F — Touch targets ≥ 44×44px with spacing.

## Gate 3 — Type (R)

- R — Five or six sizes; no 13px body; no 10px paragraph.
- R — Measure 45–75ch; headings tracked tight; line height within range.
- R — One family per role, no accidental third.
- R — Numerals align where they sit in columns.

## Gate 4 — Color (F/R)

- F — Only tokens; no stray hex in components.
- F — Every text pair measured, not eyeballed.
- R — One accent doing state, not decoration.
- R — Dark mode remapped and re-checked, not inverted.

## Gate 5 — States (R)

- R — Interactive: default, hover, focus, active, disabled.
- R — Data: loading, empty, error.
- R — Empty and error are designed, not the browser default.

## Gate 6 — Accessibility (F)

- F — Keyboard reaches everything in a logical order; focus is visible everywhere and appears instantly.
- F — Every input has a real `<label>`; images have meaningful alt or `alt=""`.
- F — `prefers-reduced-motion` removes motion, including smooth scroll.
- F — No keyboard trap, no `outline: none` without replacement.

## Gate 7 — Copy (F/R)

- F — No invented number, testimonial, logo, or case-study count. Absent proof beats false proof.
- F — No lorem, no placeholder names, no dead links to unbuilt pages.
- R — CTAs are verb + object.
- R — Numbers are specific; no "10x" without a subject.
- R — Errors say what happened and what to do.

## Gate 8 — Craft (F/R)

- F — Console clean; no 404s; no broken images.
- F — Images sized; no layout shift.
- F — One icon set; zero emoji.
- R — Transitions 150–250ms, easing not linear, no motion on everything.

## Output

```
Verdict: ship | fix first          (fix first if any Floor check is open)

Floor    0 open
Reflex   2 open · 1 waived
         waived G2 · adjacent sections share a rhythm · one paper band holds
         three comparisons and must keep its rhythm
Finish   1 answered
         answered G3 · the display head is one word and cannot wrap

Blocker
- [checkout @360] total row overflows 24px — grid-cols-3 with min-content.
  Fix: grid-cols-[1fr_auto].

High
- Direction: reads as "clean SaaS"; three equal cards in section 3.
  Fix: replace with ledger skeleton, keep the palette.

Keep
- The palette and type pairing carry the direction; do not change them during fixes.
```

Fix every Floor finding. Fix or waive every Reflex one. Answer every Finish one. A verdict that claims a clean pass without the counts is itself the failure this file exists to catch.
