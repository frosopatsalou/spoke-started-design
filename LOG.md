# Process log

Add a row every time you prompt the agent for something that matters. Write it while you work, not afterwards.

| Date | What I asked (prompt or summary) | What the AI produced | What I fixed or changed, and why | Pull request |
|---|---|---|---|---|
| | | | | |

## Hint level in Challenge 1

Which hint did you need to connect Codex to Figma? (none, 1, 2 or 3)

-
| 2026-11-09 | Transfer my design system from Figma into code | 17 CSS variables, seven typography styles, eight starter-kit React components, clean BookingCard, local Inter fonts and original back-arrow SVG, interactive preview | Agent verified build, lint, focus/selection/disabled controls and mobile layout; student review pending | Not created |
| 2026-11-09 | Code Figma component 4:6 | Reused BookingCard with existing tokens, Tag and Button; added /booking-card preview | Visual and interaction verification by agent; student review pending | Not created |
| 2026-11-09 | Define all components from Figma overview 3:25 and push everything | Verified eight reusable component definitions, added dedicated interactive /components overview, documented APIs and routes | Build, lint, mobile layout, original SVG and keyboard/selection/focus checks passed | Direct push to main requested |
| 2026-11-09 | Build Figma screen 7:114 | ChooseService screen using TopBar, ServiceCard and ActionBar; single selection, Continue callback, session selection and responsive layout | Build, lint, Figma visual comparison, mobile overflow, keyboard, selection and local SVG checks passed | |
| 2026-11-09 | Build Figma screen 7:121 | PickSlot screen, day/time selection, disabled slots, service subtitle, navigation and session persistence | Build, lint, visual comparison, keyboard selection, refresh/back persistence, mobile overflow and original SVG checks passed | Direct push to main |
| 2026-11-09 | Build Figma screen 7:128 | Confirmation summary, contact form, native validation, optional async booking callback and connected three-step flow | Build, lint, visual comparison, invalid/valid input, keyboard submission, back navigation, mobile overflow and original SVG checks passed | Direct push to main |
| 2026-11-09 | Add form validation Error state in code and Figma, with small Error text underneath | Input Error variant, bound warm red tokens, editable error text, accessible inline messages, Unicode name checks and numbering-plan phone validation | Figma visual/property/token checks, four regression tests covering 22 values, build, lint, keyboard/error clearing and 320px layout passed | Direct push to main |
| 2026-11-09 | Add floating hover to unselected service cards, mirror in Figma and push | 4px lift, neutral shadow and 160ms ease-out; Figma Hover variant and prototype interactions; Selected stays grounded | Build/lint and browser hover/selection/reduced-motion checks passed; Figma surface, interaction, shadow and existing-instance content/bounds verified | Direct push to main |
