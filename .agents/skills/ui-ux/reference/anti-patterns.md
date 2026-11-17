# Anti-patterns

Each entry is a generated-looking default, the tell that gives it away, and what to build instead. Run this list twice: before markup and before shipping.

## The default quartet

Centered headline → gradient blob or terminal mock → three equal feature cards → pill CTA row.
Replace: pick a skeleton from `layout-skeletons.md`. If the hero must be centered, the media must be real and the cards must become a ledger, a diptych, or a table.

## The card tells

Three icons over three titles over three identical paragraphs — or the same card anatomy for every section, differing only in copy.
Replace: a numbered ledger, a two-column comparison, one feature shown at three sizes of evidence. Vary the anatomy by skeleton, never by adding an icon.

## The browser chrome mockup

A rounded window with three dots containing a blurred screenshot.
Replace: the actual UI in the page, or a cropped detail with a real value visible.

## Terminal as decoration

A dark box of fake commands with no relationship to the product's real output.
Replace: the real command and its real output, or delete it. If the product is not a CLI, it does not get a terminal.

## Card inside a card

A bordered or filled panel nested in another one for no structural reason.
Replace: one containment layer. Nesting is depth the page has to justify with a real boundary.

## The thin section

A head and a paragraph below the hero: no visual, no set of three, no table, no statement at section size.
Replace: give it mass — widen the body, add a real visual, set the sentence at section size, or merge it with its neighbour.

## The eyebrow

Short inert type above a heading that announces it: a kicker, an ordinal, a category tag over a card, `TRUSTED BY` above a logo row.
Replace: open the section another way — the head alone, a hairline, a fact set first. A caption, a table head, a form label, and a real status are not eyebrows.

## Tracked-caps label

Any text at 15px or under set uppercase, in small caps, or letter-spaced past 0.03em — labels, captions, table heads, nav links, tags.
Replace: the body face, a step smaller, sentence case, untracked.

## The accent word

One word in a heading set apart by colour, weight, a highlight, or an underline — or one italic word inside a roman head.
Replace: set the whole head one way, or break the line and change the size on the second.

## Pill everything

Fully rounded buttons, rounded inputs, rounded cards, rounded avatars — all at the same radius.
Replace: a radius decision per direction. Brutalist and editorial use 0; soft-product uses one radius, consistently.

## Gradient atmosphere

Purple-to-blue wash, radial glow behind the hero, conic border on cards.
Replace: one flat accent, a paper texture, a halftone, or nothing. If the direction cannot survive without a glow, the direction is weak.

## Middle-dot meta strings

`A · B · C`, `Design · Code · Motion`. Also an arrow glued to link text (`Learn more →`), a decorative status dot, `WORD - fragment` labels.
Replace: line breaks, columns, hairlines, a verb as the label. One dot in a byline or a live state is fine.

## Copy that says nothing

"Elevate your workflow." "Built for modern teams." "Revolutionize how you ship."
Replace: a concrete noun, a number, or a verb the product actually performs.

## Fake social proof

"Trusted by" plus invented logos, five-star rows, avatars from a placeholder service.
Replace: real names if they exist; otherwise remove the section. An empty proof section is better than a false one.

## The stock close

An email sign-up as the last section or in the footer of a page whose job is not subscribe, join, attend, or listen.
Replace: end on what the visitor came to do, in the form that job takes — the booking, the buy box, the download, the next date and the address. Or end on the strongest section.

## The fake send

A form or control that prints success ("Sent", "Reserved", "You're on the list") with no request behind it, or confirms something never offered.
Replace: no success state until the endpoint exists, and the handoff names the endpoint.

## The empty picture

A gradient block, a `data-slot`, or a grey rectangle 300×200 or larger standing where an image belongs.
Replace: the real image, a library or user photograph, or the product built. Never a wash hoping to be filled later.

## The photo wall

Below the hero, photographs covering more than about a third of the page, in even rows.
Replace: keep the strongest two or three, set big; carry the rest in type, figures, or a table.

## The counting device

Twenty-odd identical ticks, dots, or squares standing for a quantity, one per bottle, day, or identity.
Replace: set the number in type. Repetition is not evidence.

## Mystery navigation

Icon-only nav, unlabeled arrows, a hamburger on desktop.
Replace: text labels. Icons may support a label, never replace it.

## Dark mode as a filter

`#000` background with the same saturated accent, no contrast re-check.
Replace: a token remap with re-tuned neutrals and a verified contrast pass.

## Motion on everything

Every element fades up on scroll, the nav shrinks, counters tick.
Replace: one entrance, reveals on section heads only. Motion is punctuation, not decoration.

## Scroll intrusion

Pinned sections that trap the wheel, horizontal scroll that ignores the trackpad, hidden scrollbars on long pages, custom cursor followers.
Replace: normal scrolling with a sticky column that releases, a visible scrollbar, no cursor replacement. Never stop the user from leaving.

## The same theme twice

The last page was `editorial`, so this one is `editorial` with a different accent.
Replace: run the rotation and mirror test in `themes.md`. Reuse is a decision with a reason, not a habit.
