# Evidence

A critique without a citation is an opinion.

## Capture

```bash
npx playwright screenshot --viewport-size=1440,1000 --full-page http://localhost:3000 1440.png
npx playwright screenshot --viewport-size=768,1024  --full-page http://localhost:3000 768.png
npx playwright screenshot --viewport-size=360,800   --full-page http://localhost:3000 360.png
```

For interactive states, script it rather than describing it:

```ts
await page.getByRole('button', { name: 'Save' }).focus()
await page.screenshot({ path: 'focus-save.png' })
```

Use the real app with real data. A static mock hides overflow, long strings, and empty states.

## What to include

- The fold at 1440 and 360 — the two decisions most often wrong.
- The section that carries the finding, cropped, with the defect visible.
- Hover/focus/disabled for the primary control.
- Dark mode if it exists, not as an afterthought.
- Empty and error states, even if they require seeding.

## Cite

- Element and viewport: `[Pricing @360]`.
- Measured values: `12px label gap, 40px to the next group`; `#6B7280 on #F9FAFB = 3.9:1`.
- What the user experiences: "the total scrolls out of view while editing quantity".
- One finding per line, ordered by severity.

Do not cite "feels cluttered". Cite three competing 24px headings.

## Before / after

When fixing, capture the same element, viewport, and state. A before/after with different crops proves nothing.

## Accessibility checks you can run

- Tab through the page and record where focus goes; screenshot the ring.
- Playwright: `page.emulateMedia({ reducedMotion: 'reduce' })`, then assert visible content.
- Contrast: sample the actual computed colors from the DOM, not from the design file.
- Text zoom to 200% and check for clipping.

## Limits

- A screenshot cannot prove keyboard order, screen-reader output, or performance. Say so and test it.
- If you cannot reproduce a state, report it as unverified rather than guessing.
