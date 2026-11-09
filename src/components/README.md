# Spoke components

All components are named after their Figma counterparts and exported from `./index`. Native button/input attributes and events are supported where applicable.

| Figma node | Component | API |
| --- | --- | --- |
| 3:33 | Button | variant: Primary / Secondary; label; onClick; disabled |
| 3:27 | Tag | label |
| 6:14 | TimeSlot | state: Default / Selected / Disabled; label; onClick |
| 6:23 | Input | label; placeholder; native input props; real focus state |
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

The home page is an interactive component preview. Preview action buttons announce a message; they do not submit a real booking. The three booking screens and backend integration are outside this design-system transfer.

BookingCard also implements the visually identical frame 4:6. Open /booking-card for its standalone preview. Pass onBook to connect the native button to your booking flow.

Open /components for the dedicated overview of all eight starter-kit components. Selection examples are controlled by React state; focus uses the browser focus state. Both button variants and every time-slot state are included.
