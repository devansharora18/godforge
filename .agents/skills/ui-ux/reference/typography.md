# Typography

The convergence tell is one family plus the same six sizes on every project. Type is the cheapest way to be recognisable and the easiest way to look generated.

## Pairing by direction

| Direction | Display | Body | Labels |
|---|---|---|---|
| editorial | high-contrast serif (Instrument Serif, Fraunces, Newsreader) | grotesk | mono |
| swiss | one neo-grotesk (Archivo, Söhne, Aeonik) | same | same |
| brutalist | heavy grotesk or mono (Archivo Black, Space Mono) | grotesk | mono |
| luxury | refined serif 300 (Cormorant, Canela, Ogg) | same serif or quiet sans | wide caps |
| technical | grotesk or mono | grotesk | mono |
| retro-print | condensed display (Anton, Bebas) | workhorse serif | condensed caps |
| collage | three families, each with a job | serif | mono |
| soft-product | geometric or humanist sans (Bricolage, DM Sans) | same | sentence case |
| cinematic | wide-tracked caps or large serif | small neutral sans | caps |
| playful | chunky display (Clash, Fraunces 900) | rounded sans | same |
| apple | system-native or neutral grotesk | same | same |

Google Fonts unless the project already licenses a face. One family per role.

## Scale

- Five or six sizes, reused everywhere. Display is allowed to break the scale; body is not.
- Fluid: `clamp(2.5rem, 6vw, 5.5rem)` for display, fixed 14/16/20 for UI.
- Ratio: ≥1.25 between display steps, 1.125–1.2 between UI steps.
- Line height: body 1.5–1.65, headings 0.92–1.15, labels 1.
- Measure: 45–75 characters. 62 is the target. Never 90+.
- Tracking: −0.02 to −0.04em on large display, 0 on body, +0.12 to +0.24em on caps labels.
- Tabular numerals anywhere numbers align in a column.

## Loading

- One variable file beats four static weights. Subset to latin when possible.
- `preconnect` to the font host, `font-display: swap`, and a fallback stack with similar metrics so the swap does not reflow the hero.
- Never load a weight or italic you do not render.

## Overused in 2026

Inter, Roboto, Arial, Poppins, Montserrat, Space Grotesk, and Instrument Serif (the last GodForge page used it). None is banned — but choosing one must be argued in the contract, not defaulted.

## Checks

- Can you name the pairing from the screenshot without inspecting it?
- Does the headline survive at 360px without shrinking below 32px?
- Is body text at least 16px on mobile?
- Do numbers align in tables and statistics?
- Does the page read with the web font blocked?
