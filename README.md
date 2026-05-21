# Lejito Web

Welcome to my personal portfolio repository.
This project showcases my work in software engineering created as part of my professional portfolio.

## 🌐 Languages

- [English](README.md)
- [Spanish](README.es.md)

## 📖 About

This repository contains code, documentation and examples that reflect my technical journey and professional growth.
It is intended to demonstrate my skills in web development, cloud technologies, and software engineering.

## 🛠️ Tech Stack

- **[Astro 5](https://astro.build/)** — static site generator with View Transitions
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first styling via `@tailwindcss/vite`
- **TypeScript** — strict typing throughout
- **Self-hosted variable font** — Rubik via `@fontsource-variable/rubik`
- **PWA manifest** + **sitemap** generation via `@astrojs/sitemap`

## 🏗️ Architecture

Components follow **Atomic Design** methodology:

| Level     | Path                        | Purpose                           |
| --------- | --------------------------- | --------------------------------- |
| Atoms     | `src/components/atoms/`     | Indivisible units: icons, links   |
| Molecules | `src/components/molecules/` | Composed atoms: Logo, ThemeSwitch |
| Organisms | `src/components/organisms/` | Full sections: Header, Footer     |
| Templates | `src/layouts/`              | Page skeletons                    |
| Pages     | `src/pages/`                | Astro routes with real content    |

Site-wide config (owner name, social links, nav links) lives in `src/config/site.ts` — single source of truth.

## ⚙️ Commands

```bash
pnpm dev      # Start dev server
pnpm build    # Type-check + build
pnpm preview  # Serve production build
pnpm lint     # ESLint + Prettier check
pnpm format   # Prettier write
```

## ⚖️ License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**.
You are free to use, study, and modify the code, but any redistribution or derivative work must also be released under GPLv3, with proper attribution to the original author.
For full details, please see the [LICENSE.md](LICENSE.md) file included in this repository.

## ✨ Author

Created and maintained by **Alejandro Córdoba Ríos**.
Feel free to explore, learn, and contribute responsibly.
