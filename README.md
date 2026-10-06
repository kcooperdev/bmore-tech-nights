<p align="center">
  <img src="public/icon-192.png" alt="A green house outline with a striped yellow-to-red sun inside." width="96" />
</p>

<h1 align="center">Bmore Tech Nights</h1>

<p align="center">
  A site for Baltimore builders, career changers, founders, creatives, and tech-curious people who want a room after work and a place between events.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Next.js_16-000000?logo=nextdotjs&logoColor=white" alt="Next.js 16" />
</p>

<p align="center">
  <img src="docs/home.png" alt="Black home screen. Large white type says Tech that moves people. A gold button says Join the experience. Five rounded icons are labeled AI, Cybersecurity, UX, Health Tech, and Cloud." />
</p>

## Why it exists

The gathering is after work. The calendar lives on [Luma](https://luma.com/techfolx). Between those nights, this site is the room.

Bmore Tech Nights is the house for that gap. The home page names the night. Tech Hause and `/enter` are where a person shows up. The Sprint is a build with a date. `/offer` is one specific night, with a ticket and a place.

The site named in the project is [soulhause.com](https://soulhause.com).

## What it does

| Route | What is on the page |
| --- | --- |
| `/` | Headline “Tech that moves people.” The gold button opens the Luma calendar. Five fields sit under it: AI, Cybersecurity, UX, Health Tech, and Cloud. Scrolling reveals the about lines. A control plays the room sound. |
| `/about` | A short statement, then mail to hello@soulhause.com. |
| `/tech-hause` | Free at $0, or Paid at $25 a month. Paid is marked coming soon 2027. Free continues to `/enter`. |
| `/enter` | Join with a name, city, LinkedIn, role, and photo. Filter the roster by field and open a person. The profile stays in the browser. |
| `/the-sprint` | A two-week build for Baltimore. $25 to enter, the room votes on demo night, first drop January 2027. |
| `/offer` | A short film, then a choice: Experience at $20, or Spectator for free. Both are November 4 at Nola Seafood. |
| `/volunteer` | Three jobs: check-in, set up, and break down. The sign-up control says opening soon. |

`/contact`, `/pricing`, `/work`, and `/tech-after-dark` redirect to `/`.

## How it is built

The home page is `TechAfterDarkPage`. After load it pulls in `public/folx-reveal.js`, which scrubs the about copy with GSAP ScrollTrigger and Lenis. The headline, the Luma link, and the five fields live in `lib/folx.ts`.

`/enter` is a client app. `JoinFlow` saves the profile through `lib/prefs.ts`. `HouseRoster` lists that profile next to the people in `lib/members.ts`, and filters them by field.

The profile at `/enter` stays in the browser. Supabase keys are listed in `.env.example` for `lib/rooms.ts`. That rooms screen is not linked from a route, so the site runs without them.

## Stack

- TypeScript
- Next.js 16.3.4 and React 19
- Tailwind CSS 4
- GSAP and Lenis for the home scroll

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run lint` checks the project. `npm run build` then `npm run start` runs the production build.

Built by [Khalif Cooper](https://www.khalifcooper.dev).
