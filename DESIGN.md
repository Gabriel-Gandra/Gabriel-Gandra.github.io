# DESIGN.md · Gabriel Gandra

Direction: **asset label and patch panel, in signal yellow.** The site borrows from Gabriel's own work: Zebra thermal labels, asset lifecycle and network cabling. Yellow is the colour of patch cables and rack signage; graphite is the rack. Labels are physical objects (always paper white with black ink, in both themes).

Not based on reference sites (UXKIN was not connected); grounded in the subject's vernacular.

## Color

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#F2F2EF` | `#111114` | Page background |
| `--surface` | `#FFFFFF` | `#1A1A1F` | Panels, form |
| `--ink` | `#17171B` | `#EDEDE8` | Text |
| `--muted` | `#5A5A63` | `#A4A4AC` | Secondary text |
| `--line` | `#DADAD4` | `#2C2C34` | Borders, rules |
| `--brand` | `#FFD200` | `#FFD200` | Signal yellow: hero (light), name (dark), ticker, highlights |
| `--hero-bg` / `--hero-name` | yellow / ink | graphite `#18181C` / yellow | Hero field and name |
| `--action` / `--on-action` | ink / yellow | yellow / ink | Primary buttons, links |
| `--paper` / `--print` | `#FAFAF7` / `#0A0A0A` | same | Label stock and ink (never change) |
| `--rack` | `#1E1E22` | `#0A0A0C` | Printer body, patch panel |
| `--cable-*` | blue `#3D7BFF`, yellow, green `#2EB67D`, red `#E5484D` | same | Patch cables, LEDs, error |

## Typography

- **Big Shoulders Display** (700–900): the name, section titles, label headers, ticker. Uppercase.
- **Schibsted Grotesk** (400–700): everything else.

Scale (px / line-height): 13/1.4 · 15/1.5 · 17/1.6 (body) · 21/1.45 · 30 ticker · clamp(26–44)/1.2 summary · clamp(56–108)/0.86 titles · clamp(92–212)/0.8 name.

## Spacing and shape

- 8-based scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Sections: 128 desktop, 88 mobile. Content width 1180.
- Radius: 3px labels and stickers, 4px buttons, 6px inputs, 10px panels, 999px only the language switch and avatar.
- Depth: one soft shadow for physical labels; hard 4px offset shadows for interactive hover (buttons, stickers, focused inputs).

## Motion

Plays even with "reduce motion" on (short, one-off sequences); ambient motion (ticker speed, tilt, rumble) is reduced.

1. Load: the name is printed left to right by a moving print head; the printer rumbles and feeds the label in 22 steps; the label settles.
2. Ticker tape of skills under the hero (pauses on hover).
3. Summary words light up as you scroll; key terms get a yellow marker.
4. Section titles print in when they enter the viewport; content rises in.
5. Patch panel boots (LEDs blink), then the cable draws to the selected role.
6. Skill stickers pop on; meters fill in steps; the contact label bumps as you type and gets an "Enviado" stamp on send.
7. Label tilts in 3D following the mouse and can be dragged.
