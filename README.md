# Personal Portfolio — Vemesh Bypureddi

Animated single-page portfolio built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Scripts
- `npm run dev` — local development
- `npm run build` — typecheck and build
- `npm run preview` — preview the production build
- `npm run lint` — lint

## Editing content
All text lives in [`src/data.ts`](src/data.ts): profile, about, skills, experience, projects, education, certifications, and nav links.
Replace `public/VemeshBypureddi.pdf` to update the downloadable resume.

## Structure
```
src/
  data.ts              content
  App.tsx              page composition
  sections/            Hero, About, Skills, Experience, Projects, Education, Contact/Footer
  components/
    Scene3D.tsx        three.js scenes (hero particles, About orb) — lazy-loaded
    SkillSphere.tsx    draggable 3D skill globe (CSS transforms)
    TiltCard.tsx       3D tilt + glare cards
    Magnetic.tsx       magnetic buttons
    Effects.tsx        smooth scroll (Lenis), scroll progress, cursor, intro loader
    Header.tsx         sticky nav with active-section underline + mobile menu
    Reveal.tsx         scroll-reveal / stagger helpers
```

## Design
- Strict palette: black, grays, white (tokens in `src/index.css`).
- Inter + JetBrains Mono via Google Fonts.
- All motion respects `prefers-reduced-motion`; 3D scenes pause when off-screen.

## Deploy
Vercel (Vite preset). `vercel.json` is included. After deploying, set the absolute site URL on the `og:image` tags in `index.html` so link previews work everywhere.
