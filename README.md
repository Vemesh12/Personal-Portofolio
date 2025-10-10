# Personal Portfolio (React + TypeScript + Tailwind)

Modern, minimal personal portfolio using a strict palette:
- Black `#000000`, Gray `#808080` / Section Gray `#1f1f1f`, White `#ffffff`.

## Scripts
- `npm run dev` — local development
- `npm run build` — typecheck and build
- `npm run preview` — preview production build

## Tech
- React 19 + TypeScript
- Tailwind CSS v4
- React Icons
- Vite

## Content Editing
- Update profile details in `src/App.tsx`:
  - Header name and links
  - Hero text, About copy
  - Skills list
  - Projects array (title, description, tech, links)
  - Experience items (role, company, period, summary)
  - Contact email and LinkedIn
- Add your `public/resume.pdf` and update the resume link if needed.

## Design System
- Inter font loaded via Google Fonts in `index.html`
- Base dark theme with semantic helpers in `src/index.css`:
  - `.bg-section`, `.text-muted`, `.border-muted`, `.animate-fade-up`
- Spacing uses Tailwind utilities; sections are wrapped with a responsive container.

## Deploy to Vercel
1. Push to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Vite (auto-detected)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Set `installCommand` to `npm ci` (optional). `vercel.json` is included.

## Notes
- Palette is enforced across components; avoid adding new colors.
- Keep copy concise; focus on impact and outcomes.
