# Direction — Technical

**Content fit:** API, CLI, infrastructure, observability, a protocol, a spec, a data product.
**Not when:** the audience needs reassurance rather than evidence.

## Skeleton

```
┌────────────────────────────────────────────┐
│ product          docs   changelog   github │
├──────────────────────┬─────────────────────┤
│ short claim          │ ┌ real output ────┐ │
│ body 40ch            │ │ $ command       │ │
│ [install]            │ │ → result        │ │
│                      │ └─────────────────┘ │
├──────────────────────┴─────────────────────┤
│ endpoint      method   auth   rate         │
│ endpoint      method   auth   rate         │
└────────────────────────────────────────────┘
```

Sections: split hero with real output → table of capabilities → code example → limits/notes → colophon.

## Type

- Mono for data, labels, paths, commands, and status: JetBrains Mono, IBM Plex Mono, Berkeley Mono.
- Body: a neutral grotesk (General Sans, Archivo) at 15px. No display serif.
- Headlines in the grotesk at 40–64px, or mono at 32–48px when the product is a CLI.

## Color

- Near-black field (`#0C0B09`, `#0F1115`) or paper. One terminal accent — amber, green, cyan — only for state and output markers.
- Never a gradient mesh. A grid or scanline at ≤4% opacity is allowed.

## Texture

Real command output, real HTTP responses, tabular alignment, ASCII separators, dotted rules, version numbers and dates.

## Motion

Functional. Reveal the output line by line once, 40ms apart, or nothing at all. No parallax, no floating particles.

## Signature

A real command producing real output, or a table that behaves like the product's own interface. If the terminal is decorative, it is a costume.

## Avoid

Stock photography, hero illustrations, fake terminals, emoji, rounded cards everywhere, gradient buttons, marketing adjectives.
