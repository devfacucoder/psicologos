# AGENTS.md

## Project

Single-page React landing site for a psychology practice ("Lana Rhoades"), in Spanish. Not a monorepo: one Vite app, plain JS/JSX (no TypeScript), no tests, no CI.

- Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx` (all UI structure lives in this one component).
- **All editable content (name, section titles, testimonials, FAQ, contact email) and image paths live in `src/datos.json`** — imported into `App.jsx`. To reskin the site for another client, edit that file only. Static images are served from `public/` and referenced with root-absolute paths in the JSON (`/img-portada2.jpg`).
- `document.title` is set at runtime from `datos.json` (`psicologa.nombre`), so `index.html`'s `<title>` is unused at runtime.

## Commands

- Install: `pnpm install` (pnpm lockfile; do not use npm/yarn)
- Dev server: `pnpm dev`
- Lint: `pnpm lint` (ESLint flat config, `eslint .`) — passes clean; keep it clean
- Build: `pnpm build`; check output with `pnpm preview`

No typecheck or test scripts exist. Do not invent them.

## Non-obvious gotchas

- `@import "tailwindcss"` (Tailwind v4) lives in `src/App.css`, not `src/index.css`. `src/index.css` is intentionally empty. Moving/removing that import silently kills all styling.
- `vite.config.js` enables the React Compiler via `babel({ presets: [reactCompilerPreset()] })` plus `@vitejs/plugin-react`. Components must be pure during render: no mutations or impure reads (e.g. `Math.random()`, `.now()`) in the render body — compute in effects or event handlers instead. Compiler also slows dev/build slightly; that's expected.
- ESLint includes `eslint-plugin-react-refresh` (Vite preset): only export React components from files that define components.
- Custom classes like `.bg-img` are plain CSS in `src/App.css` alongside the Tailwind import; the `heroZoom` animation it references is not defined anywhere (background doesn't actually animate).

## Conventions

- Tailwind utility classes inline in JSX; no component library, no CSS modules.
- Copy, section ids, and UI text are Spanish — keep new content in Spanish.
- `src/datos.json` is the single source of truth for all copy, nav links, reviews, FAQ, contact email, and image paths (root-absolute paths into `public/`). Add new sections there before touching JSX.
- `src/index.css` is intentionally empty.
