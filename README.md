# OryzaFlow – System Walkthrough

An internal website to explain the OryzaFlow system to the team (instead of slides or documents).

## Pages
| Route | What it shows |
| --- | --- |
| `/` | Full system overview, section by section (what it is, trip flow, 4 faces + IoT, observations, open questions, project at a glance, download) |
| `/mill-dashboard` | PC dashboard for the mill owner |
| `/dealer-app` | Mobile app for sending dealers (muthalies) |
| `/driver-app` | Mobile app for transport drivers |
| `/receiver-app` | Mobile app for receiving mill workers |
| `/iot` | IoT measurement layer |

The document **OryzaFlow – System Understanding** is downloadable from `public/docs/`.

## Run it
Needs Node.js 20.9 or newer (check with `node -v`).

```bash
npm install
npm run dev      # http://localhost:3000
```

Production: `npm run build` then `npm run start`.

## Edit content
All names, facts, prices, phases and questions live in `lib/content.ts`.
Colours and styling are in `app/globals.css` (tokens at the top).
