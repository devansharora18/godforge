# Decisions

## 2025-11 — the ui-ux direction library became a theme library

**Decision.** The 11 `reference/direction-*.md` files are retired. `reference/themes/` holds 50 themes and `reference/themes.md` is the selector.

**Why.** Two failures in the old library. Seven of the eleven files prescribed what the skill now bans on sight — `direction-editorial.md` opened with `eyebrow · mono` and asked for `mono, 10–11px, uppercase, 0.18em tracking`, which is the eyebrow rule, the tracked-caps rule and the mono-as-costume rule in one line. And the skeleton layer was owned twice: each direction file shipped an ASCII skeleton while `layout-skeletons.md` already owned twelve named ones.

**Consequences.** `layout-skeletons.md` is the only owner of structure. A theme is material only — paper, ink, faces, accent, surfaces, texture, motion, voice — so the router opens exactly one file per build. `motion` re-keyed its signature table from direction names to six motion registers (`reference/motion-signatures.md`).

## 2025-11 — theme tokens are starting points, not verified pairs

**Decision.** Each theme states paper, ink and accent as OKLCH starting values, plus radius, depth and rule weights. It does not ship a full validated token set.

**Why.** The source catalog validates its tokens with its own lint tooling, which this repo does not have. Inventing twelve verified values per theme without a checker would have produced 50 sets of unverified contrast pairs.

**Consequence.** `reference/color.md` owns derivation and the contrast pass. A theme's numbers are the material's intent; the build measures every text pair before shipping (audit Gate 4, Floor).

## 2025-11 — a catalog may exceed the reference budget

**Decision.** `ui-ux` totals ~3,300 lines across references, far past the ~1,200 guidance in `skill-audit`.

**Why.** The budget exists so an agent does not read the whole skill. That still holds: the router sends a build to one theme file, and `themes.md` indexes all 50.

**Consequence.** The exception is recorded in `skill-audit` § 5, and it requires two things of a catalog: SKILL.md routes to exactly one item per build, and the index lists every item. `ui-ux` does both; a check comparing the selector against the folder reports 50 for 50.
