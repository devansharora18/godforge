# Anti-patterns

Each entry is a generated-looking default, why it reads that way, and what to build instead. Run this list twice: before markup and before shipping.

## The default quartet

Centered headline → gradient blob or terminal mock → three equal feature cards → pill CTA row.

Why: it is the lowest-risk arrangement for a model, so it appears regardless of content. It has no point of view.
Replace: pick a skeleton from `layout-skeletons.md`. If the hero must be centered, the media must be real and the cards must become a ledger, a diptych, or a table.

## Three feature cards

Three icons over three titles over three identical paragraphs.
Replace: a numbered ledger, a two-column comparison, or one feature shown at three sizes of evidence.

## The browser chrome mockup

A rounded window with three dots containing a blurred screenshot.
Replace: the actual UI in the page, or a cropped detail with a real value visible.

## Terminal as decoration

A dark box of fake commands with no relationship to the product's real output.
Replace: the real command and its real output, or delete it. If the product is not a CLI, it does not get a terminal.

## Gradient atmosphere

Purple-to-blue wash, radial glow behind the hero, conic border on cards.
Replace: one flat accent, a paper texture, a halftone, or nothing. If the direction cannot survive without a glow, the direction is weak.

## Pill everything

Fully rounded buttons, rounded inputs, rounded cards, rounded avatars — all at the same radius.
Replace: a radius decision per direction. Brutalist and editorial use 0; soft-product uses one radius, consistently.

## Fake social proof

"Trusted by" plus invented logos, five-star rows, avatars from a placeholder service.
Replace: real names if they exist; otherwise remove the section. An empty proof section is better than a false one.

## Icon + title + paragraph, repeated

The same card anatomy for every section, differing only in copy.
Replace: vary the anatomy by skeleton, not by adding an icon.

## Motion on everything

Every element fades up on scroll, the nav shrinks, counters tick.
Replace: one entrance, reveals on section heads only. Motion is punctuation, not decoration.

## Scroll hijacking

Pinned sections that trap the wheel, horizontal scroll that ignores the trackpad.
Replace: normal scrolling with a sticky column that releases. Never prevent the user from leaving.

## Dark mode as a filter

`#000` background with the same saturated accent, no contrast re-check.
Replace: a token remap with re-tuned neutrals and a verified contrast pass.

## The same direction twice

The last page was editorial, so this one is editorial with a different accent.
Replace: run the rotation rule in `directions.md`. Reuse is a decision with a reason, not a habit.

## Copy that says nothing

"Elevate your workflow." "Built for modern teams." "Revolutionize how you ship."
Replace: a concrete noun, a number, or a verb the product actually performs.

## Mystery navigation

Icon-only nav, unlabeled arrows, a hamburger on desktop.
Replace: text labels. Icons may support a label, never replace it.

## Decorative scrollbar and cursor

Custom cursor followers, hidden scrollbars on long pages.
Replace: styled scrollbar that remains visible; no cursor replacement.
