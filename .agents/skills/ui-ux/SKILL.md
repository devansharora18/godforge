---
name: ui-ux
description: Use when building or refining any UI: screens, components, layouts, landing pages, or polish passes. Chooses a named direction from reference/directions.md before designing — the Vercel look only when minimal is explicitly asked — names the page's job and the action it ends on, and audits the result against tiered Floor/Reflex checks. Not for critiquing an existing screenshot or live URL (use design-critique) or extracting tokens (use design-system).
---

# UI/UX

The failure this skill exists to prevent: every landing page comes out as a centered hero, a gradient blob, three feature cards, and a pill CTA row. That is not a style, it is a default. Choose a direction on purpose.

## 1. Router

| File | Open when |
|---|---|
| `reference/directions.md` | **Always**, before designing. Selector, how to choose, rotation and mirror test. |
| `reference/layout-skeletons.md` | **Always**. Name one skeleton per section. |
| `reference/direction-<name>.md` | After choosing. Open exactly one. |
| `reference/typography.md` | Choosing fonts or building the scale. |
| `reference/color.md` | Building tokens, dark mode, contrast. |
| `reference/anti-patterns.md` | Before writing markup, and again before shipping. |
| `reference/related-skills.md` | When `impeccable`, an Apple HIG skill, or a taste skill is installed — or the brief says "native", "quiet", or "premium". |
| `reference/audit.md` | Before calling it done. |

Read only what the task needs. Do not load every file.

## 2. Mode

**Minimal mode** — only on an explicit request: "minimal", "Vercel style", "clean", "keep it simple", "no research". Skip research and directions. Still name the job, the action it ends on, a skeleton, a type pairing, and a signature element: minimal is a discipline, not an absence of decisions.

**Directional mode** — everything else, including silence. Pick a direction from the library, then research only to sharpen that direction (3–5 references, patterns not pixels). If a source is blocked, say so and ask for screenshots instead of guessing.

## 3. Direction contract — write it before code

```
Direction:   <name from directions.md>
Because:     <content or audience signal, never "it looks premium">
Job:         <what the visitor comes to do: book, buy, subscribe, hire, join>
Ends on:     <that action, in the form the job takes>
Skeleton:    <hero skeleton> + <section skeletons>, one per section
Type:        <display> / <body> / <mono>
Palette:     <dominant> + <one accent> + <neutral logic>
Signature:   <the one memorable element>
Not doing:   <the clichés this direction forbids>
```

Rules:

- `Job` is a verb the visitor performs, not what the page is about. Name the section where that action lives, and end the page on it. A page whose job is not subscribe, join, attend, or listen does not close with an email sign-up.
- One direction. Two only if combined and named ("editorial × console").
- Do not reuse the direction used earlier in this project or session. If you must, say why it is the right answer twice, not the easy one.
- "Because" cannot be taste. It is the content: a document, a spec sheet, a price, a demo, a place.
- If the shortlist names two, pick one and write the other under "not doing".

## 3b. Critique the plan before markup

Score the planned page 1–5 on six axes. Anything under 3 is revised before the first line of markup.

| Axis | 3 | 5 |
|---|---|---|
| Philosophy | has a tone | has an argument a reader could disagree with |
| Hierarchy | needs a second look | survives the squint test |
| Execution | two or three loose details | would pass the audit first time |
| Specificity | fits the category | could belong to no other product |
| Restraint | keeps one decoration too many | lost something you liked |
| Variety | differs from the last screen on three axes | shares no structure with the last three |

Write the line, name the weakest axis, and state the fix you took. Never invent a weakness to fill the field.

```
Critique: P5 H4 E5 S3 R5 V4 · weakest S — the hero could be any dev tool;
led with the real deploy log instead of a stock dashboard.
```

## 4. Build

- Hero first. Write the nav and the hero, look at it at 1280×800, and fix it before anything below it exists. A weak hero is not repaired by what comes under it.
- The hero is the first screen and only the first screen: a headline of seven words or fewer, one sentence of twelve words or fewer, one or two actions, all visible at 1280×800 without scrolling.
- About 80 words to a screen at 1440. Fullness comes from scale, real content, and images, never from more copy.
- One skeleton per section; adjacent sections must not share a rhythm.
- Real copy and realistic numbers. No lorem, no "revolutionize", no fake logos. A number, quote, or logo nobody supplied is absent, not invented.
- Default, loading, empty, and error states exist before the screen is called done.
- Contrast checked (4.5:1 body, 3:1 large and UI), keyboard reachable, visible focus, semantic HTML.
- Motion per the `motion` skill: one entrance, reveals on heads only, `prefers-reduced-motion` disables it.
- One accent colour, one icon set, zero emoji.
- If `impeccable` or an Apple HIG / taste skill is available, use it for polish and native motion under the precedence in `reference/related-skills.md`. It never re-decides the direction.

## 5. Audit

Run `reference/audit.md`. Screenshot 360 / 768 / 1440. Every Floor finding blocks the ship; fix or waive every Reflex one on the record; answer every Finish one. Reject your own output if a stranger cannot name the direction in two seconds, or if any line of `reference/anti-patterns.md` still applies.

## Non-negotiables

- Never Inter, Roboto, Arial, or a bare system stack as the design choice.
- No emoji anywhere in the UI, including status and illustration.
- No `outline: none` without a visible replacement.
- No animation on layout properties; no motion that blocks reading.
- No fake data presented as real, and no dead links to unbuilt pages.
