# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server with hot reload
pnpm build    # Type-check (astro check) then build — always runs both
pnpm preview  # Serve production build locally
pnpm lint     # ESLint + Prettier check
pnpm format   # Prettier write
```

There are no tests.

## Architecture

**Stack**: Astro 5 + Tailwind CSS 4 (via `@tailwindcss/vite`) + TypeScript. No framework (React/Vue/Svelte) — all components are `.astro` files.

**Path aliases** (configured in `tsconfig.json`):

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@pages/*` | `src/pages/*` |
| `@styles/*` | `src/styles/*` |
| `@images/*` | `src/images/*` |
| `@config/*` | `src/config/*` |

**Site config** (`src/config/site.ts`): Single source of truth for `SITE` (owner, handle, birthDate, url, locale, defaultKeywords), `SOCIAL_LINKS`, and `NAV_LINKS`. Import from here — do not hard-code names, URLs, or nav entries in components.

**Component pattern**: All `.astro` files use the frontmatter block (`---`) for TypeScript logic and typed props, then the HTML template below. Props are declared as `interface Props {}` and destructured from `Astro.props`.

**Layout** (`src/layouts/Layout.astro`): The single master template. Accepts optional `title`, `description`, `image`, and `keywords` props. Imports from `@config/site`. Dynamically computes the author's age from `SITE.birthDate`, includes full `<head>` metadata, PWA manifest, `<ViewTransitions />`, and renders `<Header />` + `<Footer />` around the default slot. Dark mode state is read from `localStorage` and set as a class on `<html>` via an inline script.

**Design tokens** (`src/styles/global.css`): Defines CSS custom properties for the full color palette (primary `#145b94`, primary-dark `#1e7fc7`, plus success/warning/danger/info/violet/pink/dark/light/gray), the Rubik font (self-hosted via `@fontsource-variable/rubik`), and dark/light gradient backgrounds. All theming goes through these tokens — do not hard-code hex values.

**Theme toggle**: `ThemeSwitch.astro` persists the user's preference to `localStorage` and toggles the `dark` class on `<html>`. `Header.astro` integrates it on both desktop and mobile layouts.

**Header** (`src/components/Header.astro`): Iterates `NAV_LINKS` and `SOCIAL_LINKS` from `@config/site` — no duplicate desktop/mobile entries. Sets `aria-current="page"` on the active nav link. Mobile menu button uses `aria-expanded` kept in sync via `setMenuOpen()`. Logo has `fetchpriority="high" loading="eager"`.

**Icons**: Each icon is its own Astro component in `src/components/icons/` (e.g., `GithubIcon.astro`). All icons accept `size?: number | string` and `class?: string` props. Do not inline raw SVGs — add a new component file instead.

**Content Collections** (`src/content/config.ts`): Defines a `projects` collection (type `data`, JSON files in `src/content/projects/`). Schema: `title`, `description`, `tags`, `url?`, `repo?`, `image?`, `featured`, `date`. Add project entries as `src/content/projects/<slug>.json`.

**Sitemap**: `@astrojs/sitemap` integration generates `sitemap-index.xml` on every build using `site` from `astro.config.mjs`.

**Planned pages** (nav links exist, pages are stubs): `Sobre mí`, `Proyectos`, `Contacto`. The home page (`src/pages/index.astro`) currently shows a "Próximamente" placeholder.

## Conventions

- Component filenames: PascalCase, `.astro` extension.
- Tailwind utility-first; no inline `style` attributes. Use dark-mode variants (`dark:`) as needed.
- TypeScript: explicit types, no `any`.
- Social links open in new tabs with `rel="noopener noreferrer"`.
- Mobile hamburger menu is toggled via vanilla JS event listeners inside `Header.astro`.
- `public/og-image.jpg` is referenced as OG fallback — file must exist or social previews will error.
- This project is licensed GPL-3.0; ensure any added dependencies are compatible.
