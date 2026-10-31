# Chunghye — A Worldbuilding Website

A creative worldbuilding project that uses a website to establish the atmosphere of a fictional setting and introduce its characters.

[Visit the site](https://chunghye.vercel.app)

## Why I built it

I wanted the setting to be felt before it was explained. The opening screen presents a quiet theater: red curtains, a dark stage, a focused beam of light, and rows of seats.

From there, the character profile page brings the world into a more intimate format, arranging personalities, appearances, illustrations, and color palettes side by side.

## Current experience

### A theatrical entrance

The home page builds the scene with layered HTML and CSS: gradients, shadows, a clipped spotlight, curtains, and repeated seat shapes. Minimal navigation keeps the stage at the center of the composition.

### A paired character profile

The `/profile` page presents two fictional characters through:

- Personality tags, background details, and relationship notes.
- Distinct color palettes with hover feedback.
- Full-body and small-format character illustrations.
- Appearance details arranged in a mirrored, two-column composition.
- Light and dark color schemes based on the viewer's system preference.

The profile data is grouped into typed-page constants and rendered with React. Character artwork is displayed with Next.js Image.

## Built with

**Next.js App Router · React · TypeScript · Tailwind CSS · CSS gradients and layering**

The current site is a frontend presentation with local character data and image assets. Its emphasis is visual direction, information layout, and translating fictional material into a browsable space.

## Run locally

With a Node.js version supported by Next.js 16 installed:

```sh
npm ci
npm run dev
```

Open http://localhost:3000, then visit `/profile` to view the character sheet.

Available project commands:

```sh
npm run lint
npm run build
npm start
```

## Project structure

```text
app/page.tsx          Theater-inspired landing page
app/profile/page.tsx  Paired character profiles and palette interaction
app/layout.tsx        Shared layout, fonts, and metadata
app/globals.css       Global styles and Tailwind configuration
public/images/        Character illustrations used by the profile page
```

## In progress

The implemented routes are `/` and `/profile`. The home page also contains **BAG** and **TIMETABLE** links pointing to `/bag` and `/login`; those routes are not yet implemented in this repository.

## What this project explores

How can visual design carry a story? Chunghye treats the interface as part of the worldbuilding: the entrance creates an atmosphere, and the profile layout gives the characters a consistent visual language.
