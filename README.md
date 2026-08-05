# Portfolio Template (inspired by torn-paper / marquee-type portfolios)

A Next.js 15 + TypeScript + Tailwind starter with:
- Fixed nav with a "mix-blend-difference" trick so it stays legible over the hero image
- Hero section: two counter-scrolling marquee rows of oversized display type (one solid, one outlined) with a torn-paper-masked photo placeholder centered on top
- Work list: rows that reveal a torn-paper thumbnail on hover
- About/contact section with placeholder bio + socials

All copy, project names, and the bio are placeholders — swap them for your own.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

- `app/data/projects.ts` — your project list
- `app/components/Hero.tsx` — your name / marquee words / portrait
- `app/components/About.tsx` — your bio, email, social links
- `app/globals.css` — color tokens (`--cream`, `--ink`, `--moss`, `--clay`) and the `.torn-mask` clip-path if you want a different tear shape
- Replace the gradient placeholders (`bg-gradient-to-br from-... to-...`) with real `<Image>` components once you have your own photos

## Notes

- Fonts use system serif/sans stacks so it works with zero network calls. If you want a specific font, add it via `next/font/google` (needs network access) or drop font files in `public/fonts` and use `next/font/local`.
- Motion is CSS-only (marquee) plus simple hover states — respects `prefers-reduced-motion`.
