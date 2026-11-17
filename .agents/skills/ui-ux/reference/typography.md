# Typography

The convergence tell is one family plus the same six sizes on every project. Type is the cheapest way to be recognisable and the easiest way to look generated.

## Pairing by material

Each theme names its own faces: `themes/<name>.md` is the authority. This table is the cross-check — the display class, the faces the library draws on, and the themes that use it.

| Display class | Faces in the library | Body | Themes |
|---|---|---|---|
| high-contrast serif | Sentient, Yeseva One, Bodoni Moda, Prata, Instrument Serif | grotesk at 16–17px | atelier, solstice, specimen, lumen |
| book serif | Vollkorn, Libre Caslon Display, Hedvig Letters Serif, Young Serif | grotesk, or the same serif | garden, loom, studio, spore |
| slab | Zilla Slab | Spectral | newsprint |
| condensed | Six Caps, Oswald, Anton, League Gothic, Barlow Condensed, Saira Condensed, Sofia Sans Extra Condensed, Big Shoulders | a workhorse grotesk | broadside, formwork, manifesto, paste-up, piste, sport, darkroom, carnival, editorial |
| grotesk | Hanken Grotesk, Radio Canada Big, General Sans, Wix Madefor, Familjen Grotesk, Mona Sans, Epilogue, Host Grotesk, Cabinet Grotesk, Switzer | the same family | almanac, grid, coral, dusk, cobalt, midnight, ink, console, riso, rim, hedgerow |
| heavy display | Libre Franklin 900, Ultra, Bowlby One SC, Bungee | a narrow or slab body | brutal, halftone, sticker, arcade |
| geometric or rounded | Chillax, Gabarito, Outfit, Jost, Syne, Ranade, Chakra Petch | the same family | hum, squeeze, ultraviolet, werkstatt, terrazzo, bloom, blueprint |
| mono, as the material | Martian Mono, Chivo Mono | the same face | terminal, wayfind |

Google Fonts unless the project already licenses a face. One family per role.

**Labels are never a separate face.** A label is the body face a step smaller, sentence case, untracked. The exception is a theme whose material *is* mono (`terminal`, `wayfind`), where one face carries everything.

## Scale

- Five or six sizes, reused everywhere. Display is allowed to break the scale; body is not.
- Fluid: `clamp(2.5rem, 6vw, 5.5rem)` for display, fixed 14/16/20 for UI.
- Ratio: ≥1.25 between display steps, 1.125–1.2 between UI steps.
- Line height: body 1.5–1.65, headings 0.92–1.15, labels 1.
- Measure: 45–75 characters. 62 is the target. Never 90+.
- Tracking: −0.02 to −0.04em on large display, 0 on body. Never letterspace a label.
- Tabular numerals anywhere numbers align in a column.

## Loading

- One variable file beats four static weights. Subset to latin when possible.
- `preconnect` to the font host, `font-display: swap`, and a fallback stack with similar metrics so the swap does not reflow the hero.
- Never load a weight or italic you do not render.

## Overused in 2026

Inter, Roboto, Arial, Poppins, Montserrat, Space Grotesk, and Instrument Serif. None is banned — but choosing one must be argued in the theme contract, not defaulted.

## Checks

- Can you name the pairing from the screenshot without inspecting it?
- Does the headline survive at 360px without shrinking below 32px?
- Is body text at least 16px on mobile?
- Do numbers align in tables and statistics?
- Does the page read with the web font blocked?
