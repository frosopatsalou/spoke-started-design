# Spoke foundations

Source: [Spoke starter kit](https://www.figma.com/design/ahxS09iKkUzQEZMzD97Uup/?node-id=6-5), transferred on 9 November 2026.

`tokens.css` contains all 17 local Figma variables and all seven text styles. Figma names map directly: `color/text/primary` becomes `--color-text-primary`, `space/16` becomes `--space-16`, and `Card/Title` becomes `--font-card-title`.

Inter regular, medium, and semibold are bundled locally through `@fontsource/inter`; no external font request is required. `components.css` uses these tokens exclusively for colours, spacing, and radii.

Implementation constants are labelled separately at the bottom of tokens.css: border widths, disabled opacity, and the original reference widths. Component widths shrink to fit their parent. Focus is a real browser state; inputs do not fake focus through a prop.

Update the tokens when the Figma foundations change, then run `npm run build` and `npm run lint`. This is a point-in-time transfer, not automatic synchronisation.
