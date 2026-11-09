# Spoke

The build of Spoke, a bike repair booking app. You design in Figma, Codex builds from your frames, and you check the result.

## Start the app

Open this folder in a terminal (in GitHub Desktop: Repository, Open in Terminal) and run:

```
npm install
npm run dev
```

The app runs at http://localhost:5173. Stop it with Ctrl+C.

## What is in this repo

| File | What it is for |
|---|---|
| `AGENTS.md` | The rules Codex and Claude read before every task. |
| `LOG.md` | Your process log for the assignment. Fill it in while you work. |
| `REFLECTION.md` | Your reflection for the assignment. |
| `src/` | The app. Tokens go in `src/styles/tokens.css`, components in `src/components/`. |

## Keep this repo public and clean

Anyone can read this repo. Never commit passwords, API keys or `.env` files.

## Design system

The /design-system page previews the transferred Figma foundations and all eight starter-kit components, plus the clean Booking card. See src/styles/README.md for token mappings and src/components/README.md for props and source node IDs. Run npm install and npm run dev to view it.

## Preview routes

- / and /choose-service : Choose a service booking screen
- /pick-slot : Pick a drop-off time, connected from service selection
- /design-system : design tokens and component examples
- /components : all eight components from the Figma overview
- /booking-card : standalone booking card

The slot screen uses the sample day labels and availability from Figma. Continue saves the chosen day and time for the confirmation step; it does not create a booking or reserve a live slot.
