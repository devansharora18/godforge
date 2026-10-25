# Text motion

Text is the most common motion target and the easiest to get wrong. Per-character animation on a paragraph is a performance and accessibility problem, not a style.

## Masked line rise (the safe default)

```css
.line { display: block; overflow: hidden; }
.line > span { display: block; transform: translateY(100%); }
```

```ts
gsap.to('.line > span', { yPercent: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' })
```

Split into **lines**, not characters. Three or four lines of display type is the useful case.

## Splitting without a plugin

```ts
const lines = el.textContent!.split('\n')
el.setAttribute('aria-label', el.textContent!)
el.setAttribute('aria-hidden', 'false')
el.innerHTML = lines.map((l) => `<span class="line"><span>${l}</span></span>`).join('')
```

Keep the accessible name on the original element. If you clone text for a visual effect, the clone is `aria-hidden="true"`.

## Counters

```ts
const state = { v: 0 }
gsap.to(state, {
  v: target, duration: 1, ease: 'power1.out',
  onUpdate: () => { node.textContent = Math.round(state.v).toLocaleString() },
})
```

- Set the final value in the DOM first, so no-JS and reduced-motion show the real number.
- `font-variant-numeric: tabular-nums` or the layout shifts while counting.
- Counters only when the number is the point. A counter for "3 features" is decoration.

## Terminal output

Reveal lines, not characters:

```ts
gsap.from('.term-line', { opacity: 0, duration: 0.18, stagger: 0.04, ease: 'none' })
```

Typewriter effects hide the text from search engines and screen readers and slow the page. If the product is a terminal, the real output appearing line by line is both more honest and more interesting.

## Underline and highlight

```ts
gsap.fromTo('.draw', { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 0.5 })
```

Use a pseudo-element or an inner span; never animate `width`.

## Rules

- Display type may move; body copy stays still.
- Never animate more than ~40 glyphs individually.
- Leave the final state in the DOM for reduced motion and no-JS.
- Text must remain selectable and readable mid-animation.
