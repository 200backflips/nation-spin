# Nation Spin

A browser-based party game for teams. Spin up a random country, give one-word clues, and race to guess it before time runs out.

## How to play

Nation Spin is a team-based, word association game. Each turn, one player sees a country (name + flag) and gives a **single-word** clue. The other members of their team tries to guess the country. You score based on how many clues it takes:

| Clue | Points |
| ---- | ------ |
| 1st  | 3      |
| 2nd  | 2      |
| 3rd  | 1      |

- Use **Manage game** to add/remove teams and tweak the turn timer (30s, 60s, 60s or 120s).
- Tap **Spin** to show a new randomized country. Use the clock button to start, pause, or resume the timer.
- Adjust scores on each team card with **+** / **−**.

_(Full rules are also availabe via the **?** icon in the header.)_

## Getting started

**Requirements:** Node.js 20+ (ish) and npm.

```bash
git clone <your-repo-url>
cd nation-spin
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). No backend or API keys — country data comes from [REST Countries](https://restcountries.com).

**Other scripts:**

- `npm run build` — production build
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint

Teams are saved in your browser’s `localStorage`, so they stick around between sessions on the same device.

## Tech stack

Built with **React 19**, **TypeScript**, and **Vite**. Routing is **TanStack Router** (Despite there only being one route currently.); server state (countries) uses **TanStack Query**. Local game state (teams, timer) lives in **Zustand**. UI is **Tailwind CSS 4** + **shadcn/ui** (Radix primitives). Forms use **React Hook Form** + **Zod**. Animations are **Motion**. Icons from **Lucide**.
