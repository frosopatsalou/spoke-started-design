# Spoke components

All components are named after their Figma counterparts and exported from `./index`. Native button/input attributes and events are supported where applicable.

| Figma node | Component | API |
| --- | --- | --- |
| 3:33 | Button | variant: Primary / Secondary; label; onClick; disabled |
| 3:27 | Tag | label |
| 6:14 | TimeSlot | state: Default / Selected / Disabled; label; onClick |
| 6:23 | Input | label; placeholder; error; native input props; real focus state |
| 6:24 | TopBar | title; step; onBack |
| 11:33 | ServiceCard | state: Default / Selected; title; description; price; duration; onClick |
| 11:34 | SummaryRow | label; value |
| 11:37 | ActionBar | Button props; className styles the bar |
| 3:34 | BookingCard | title; description; price; duration; bikeType; nextSlot; buttonLabel; onBook |

Example:

```tsx
import { Button, Input, ServiceCard } from './components'

<Button variant="Secondary" label="Back" onClick={goBack} />
<Input label="Your name" name="name" autoComplete="name" required />
<ServiceCard state={selected ? 'Selected' : 'Default'} onClick={selectService} />
```

Selection is controlled by the parent. TimeSlot and ServiceCard expose `aria-pressed`; disabled time slots use the native disabled attribute. Input labels are connected using stable generated IDs. The back-arrow SVG is the original Figma asset, saved locally at its native 24 × 24 size.

The home page is an interactive component preview. Preview action buttons announce a message; they do not submit a real booking. The three booking screens are implemented in src/pages and reuse these components. Backend integration is not connected.

BookingCard also implements the visually identical frame 4:6. Open /booking-card for its standalone preview. Pass onBook to connect the native button to your booking flow.

Open /components for the dedicated overview of all eight starter-kit components. Selection examples are controlled by React state; focus uses the browser focus state. Both button variants and every time-slot state are included.

## Input errors

Pass an error message to Input to render a red border and small Error: text underneath. The message is connected through aria-describedby and the field exposes aria-invalid. While focused, fields hide placeholders, use the brand focus border, and hide error text. Invalid fields restore the error border and message on blur. Validation remains active while editing. The confirmation page validates on blur and submit, clears errors as values are corrected, and focuses the first invalid field.

Figma Input now includes State=Error (node 2017:78), with editable Error message, Label and Placeholder properties. The review instances are in Input error states (2017:83). The red #B42318 has 6.57:1 contrast on white. Shared semantic tokens are color/error/text and color/error/border, both aliases of palette/red/700.

Names accept Unicode letters, spaces, apostrophes, hyphens and initials; digits and symbols are rejected. Phone validation uses libphonenumber-js/max numbering plans, Belgium as the local default, and international country codes. Format validation cannot establish whether a name is real or a number is reachable.

## Service card hover

Unselected, enabled cards lift 4px with a 160ms ease-out transition and a soft neutral shadow (0 8px 24px, primary text colour at 12%). Selected cards stay grounded and shadow-free, including immediately after clicking a hovered card. Hover applies to fine pointers; reduced-motion settings remove the lift and transition.

In Figma, Service card has State=Default, State=Hover (2024:85) and State=Selected. Default uses While hovering to change to Hover with Smart Animate, 160ms ease-out. Click selects the card; Selected has no hover interaction or shadow. The shared effect style is Service card/Hover. Review instances are in Service card hover states (2024:97). In React, Hover is a CSS interaction; the controlled state prop remains Default or Selected.
