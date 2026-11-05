# DESIGN.md · Gabriel Gandra

Direction: **asset label and patch panel.** The site borrows from Gabriel's own work: Zebra thermal labels, asset lifecycle and network cabling. Labels are physical objects (always paper white with black ink, in both themes). Everything around them stays quiet so the three motion moments land: the label printing, the cable plugging in, and the live contact label.

Not based on reference sites (UXKIN was not connected); grounded in the subject's vernacular.

## Color

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#F3F4F6` | `#0C1020` | Page background |
| `--surface` | `#FFFFFF` | `#141A2E` | Panels, form |
| `--ink` | `#0A0F1F` | `#E8ECF6` | Text |
| `--muted` | `#4F5872` | `#A0A9C2` | Secondary text |
| `--line` | `#D6DAE3` | `#263052` | Borders, rules |
| `--cobalt` | `#2438E8` | `#3448F0` | Hero field, primary actions, links |
| `--on-cobalt` | `#FFFFFF` | `#FFFFFF` | Text on cobalt |
| `--paper` | `#FAFAF7` | `#FAFAF7` | Label stock (never changes) |
| `--print` | `#0A0A0A` | `#0A0A0A` | Label ink (never changes) |
| `--rack` | `#171A22` | `#070912` | Printer body, patch panel |
| `--cable-blue / yellow / green / red` | `#3D7BFF / #F5C518 / #2EB67D / #E5484D` | same | Patch cables and port LEDs only |

Cable colors are never used for text or buttons.

## Typography

- **Big Shoulders Display** (700–900): the name, section titles, label headers. Uppercase only for the hero name and on labels, where real labels use it.
- **Schibsted Grotesk** (400–700): everything else.

Scale (px / line-height): 13/1.4 · 15/1.5 · 17/1.6 (body) · 21/1.45 · 32/1.05 · 56/0.95 · clamp(88–200)/0.82 (name).

## Spacing and shape

- 8-based scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Sections: 128 desktop, 88 mobile. Content width 1180.
- Radius: 3px on labels and stickers (die-cut paper), 10px on panels and inputs, 999px only on the language switch. Buttons are square-cornered (4px).
- Depth: one shadow for physical objects (labels): `0 1px 0 rgba(0,0,0,.08), 0 22px 40px -18px rgba(5,10,40,.45)`. Panels are flat with a border.

## Components

- **Button** primary: cobalt fill, white text. Secondary: 1.5px ink outline. On the cobalt hero: paper fill with ink text, and white outline. Focus: 3px outline in `--cable-yellow` on the hero, cobalt elsewhere.
- **Label**: paper, print ink, 3px radius, perforation edge at the top, barcode at the bottom.
- **Port**: RJ45 opening drawn with clip-path, link LED (green) and activity LED (amber).
- **Skill sticker**: small paper label; pressed = cobalt fill.
- **Inputs**: surface fill, 1.5px line border, cobalt border on focus.

## Imagery

- Gabriel's photo appears dithered (Atkinson, 1-bit) as it would print on a thermal printer.
- Barcodes are real CODE128 (JsBarcode, vendored).
- No icon set beyond two inline SVGs (theme toggle).

## Motion

One page-load sequence (label printing in steps, like a thermal feed). Everything else answers the visitor: dragging the label, plugging a port, typing in the contact form. `prefers-reduced-motion` shows final states with no movement.
