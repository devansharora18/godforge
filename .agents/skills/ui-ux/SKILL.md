---
name: ui-ux
description: Use when designing or reviewing any UI: screens, components, layouts, landing pages, or polish passes. Always choose a named direction from reference/directions.md before designing — the Vercel look applies only when the user explicitly asks for minimal. Ships a reference library for directions, layout skeletons, typography, color, and anti-patterns, so landing pages stop converging on the same centered-hero pattern.
---

# UI/UX

The failure this skill exists to prevent: every landing page comes out as a centered hero, a gradient blob, three feature cards, and a pill CTA row. That is not a style, it is a default. Choose a direction on purpose.

## 1. Router

| File | Open when |
|---|---|
| `reference/directions.md` | **Always**, before designing. Selector, contract, rotation rule. |
| `reference/layout-skeletons.md` | **Always**. Name one skeleton per section. |
| `reference/direction-<name>.md` | After choosing. Open exactly one. |
| `reference/typography.md` | Choosing fonts or building the scale. |
| `reference/color.md` | Building tokens, dark mode, contrast. |
| `reference/anti-patterns.md` | Before writing markup, and again before shipping. |
| `reference/related-skills.md` | When `impeccable`, an Apple HIG skill, or a taste skill is installed — or the brief says "native", "quiet", or "premium". |
| `reference/audit.md` | Before calling it done. |

Read only what the task needs. Do not load every file.

## 2. Mode

**Minimal mode** — only on an explicit request: "minimal", "Vercel style", "clean", "keep it simple", "no research". Skip research and directions. Still name a skeleton, a type pairing, and a signature element: minimal is a discipline, not an absence of decisions.

**Directional mode** — everything else, including silence. Pick a direction from the library, then research only to sharpen that direction (3–5 references, patterns not pixels). If a source is blocked, say so and ask for screenshots instead of guessing.

## 3. Direction contract — write it before code

```
Direction:   <name from directions.md>
Because:     <content or audience signal, never "it looks premium">
Skeleton:    <hero skeleton> + <section skeletons>, one per section
Type:        <display> / <body> / <mono>
Palette:     <dominant> + <one accent> + <neutral logic>
Signature:   <the one memorable element>
Not doing:   <the clichés this direction forbids>
```

Rules:

- One direction. Two only if combined and named ("editorial × console").
- Do not reuse the direction used earlier in this project or session. If you must, say why it is the right answer twice, not the easy one.
- "Because" cannot be taste. It is the content: a document, a spec sheet, a price, a demo, a place.
- If the shortlist names two, pick one and write the other under "not doing".

## 4. Build

- One skeleton per section; adjacent sections must not share a rhythm.
- Real copy and realistic numbers. No lorem, no "revolutionize", no fake logos.
- Default, loading, empty, and error states exist before the screen is called done.
- Contrast checked (4.5:1 body, 3:1 large and UI), keyboard reachable, visible focus, semantic HTML.
- Motion per the `motion` skill: one entrance, reveals on heads only, `prefers-reduced-motion` disables it.
- One accent colour, one icon set, zero emoji.
- If `impeccable` or an Apple HIG / taste skill is available, use it for polish and native motion under the precedence in `reference/related-skills.md`. It never re-decides the direction.

## 5. Audit

Run `reference/audit.md`. Screenshot 360 / 768 / 1440. Reject your own output if a stranger cannot name the direction in two seconds, or if any line of `reference/anti-patterns.md` still applies.

## Non-negotiables

- Never Inter, Roboto, Arial, or a bare system stack as the design choice.
- No emoji anywhere in the UI, including status and illustration.
- No `outline: none` without a visible replacement.
- No animation on layout properties; no motion that blocks reading.
- No fake data presented as real, and no dead links to unbuilt pages.
