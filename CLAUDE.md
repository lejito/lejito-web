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

**Stack**: Astro 6 + Tailwind CSS 4 (via `@tailwindcss/vite`) + TypeScript. No framework (React/Vue/Svelte) — all components are `.astro` files.

**Path aliases** (configured in `tsconfig.json`):

| Alias           | Resolves to                        |
| --------------- | ---------------------------------- |
| `@atoms/*`      | `src/components/atoms/*`           |
| `@molecules/*`  | `src/components/molecules/*`       |
| `@organisms/*`  | `src/components/organisms/*`       |
| `@components/*` | `src/components/*` (root fallback) |
| `@layouts/*`    | `src/layouts/*`                    |
| `@pages/*`      | `src/pages/*`                      |
| `@styles/*`     | `src/styles/*`                     |
| `@images/*`     | `src/images/*`                     |
| `@config/*`     | `src/config/*`                     |

## Atomic Design

Components follow Brad Frost's Atomic Design methodology. The five levels map to this project:

| Level         | Directory                   | Description                                            | Examples              |
| ------------- | --------------------------- | ------------------------------------------------------ | --------------------- |
| **Atoms**     | `src/components/atoms/`     | Smallest indivisible units — no component dependencies | Icons, `SocialLink`   |
| **Molecules** | `src/components/molecules/` | Groups of atoms with a single purpose                  | `Logo`, `ThemeSwitch` |
| **Organisms** | `src/components/organisms/` | Complex sections composed of molecules and atoms       | `Header`, `Footer`    |
| **Templates** | `src/layouts/`              | Page-level skeletons; wire up organisms into structure | `Layout`              |
| **Pages**     | `src/pages/`                | Astro routes; instances of templates with real content | `index`, `404`        |

**Rules:**

- Atoms import nothing from `@atoms`, `@molecules`, or `@organisms`.
- Molecules import only from `@atoms/*` (never from `@molecules` or higher).
- Organisms import from `@atoms/*` and `@molecules/*` (never from `@organisms`).
- Templates import from `@organisms/*` and below.
- Always use the most specific alias (`@atoms/`, `@molecules/`, `@organisms/`) — not `@components/`.
- New icons go in `src/components/atoms/icons/` as `.astro` files with `size` and `class` props.
- New reusable UI primitives (buttons, badges, links) go in `src/components/atoms/`.
- New compound widgets go in `src/components/molecules/`.
- New full page sections go in `src/components/organisms/`.

**Site config** (`src/config/site.ts`): Single source of truth for `SITE` (owner, handle, birthDate, url, locale, defaultKeywords), `SOCIAL_LINKS`, and `NAV_LINKS`. Import from here — do not hard-code names, URLs, or nav entries in components.

**Component pattern**: All `.astro` files use the frontmatter block (`---`) for TypeScript logic and typed props, then the HTML template below. Props are declared as `interface Props {}` and destructured from `Astro.props`.

**Layout** (`src/layouts/Layout.astro`): The single master template. Accepts optional `title`, `description`, `image`, and `keywords` props. Imports from `@config/site`. Dynamically computes the author's age from `SITE.birthDate`, includes full `<head>` metadata, PWA manifest, `<ClientRouter />` (View Transitions), and renders `<Header />` + `<Footer />` around the default slot. Dark mode state is read from `localStorage` and set as a class on `<html>` via an inline script.

**Design tokens** (`src/styles/global.css`): Defines CSS custom properties for the full color palette (primary `#145b94`, primary-dark `#1e7fc7`, plus success/warning/danger/info/violet/pink/dark/light/gray), the Rubik font (self-hosted via `@fontsource-variable/rubik`), and dark/light gradient backgrounds. All theming goes through these tokens — do not hard-code hex values.

**Theme toggle**: `molecules/ThemeSwitch.astro` persists the user's preference to `localStorage` and toggles the `dark` class on `<html>`. `Header.astro` integrates it on both desktop and mobile layouts.

**Logo** (`src/components/molecules/Logo.astro`): Renders the site logo image and owner name/handle from `SITE` config. Used by `Header.astro`.

**Header** (`src/components/organisms/Header.astro`): Composes `Logo`, `SocialLink`, icon atoms, and `ThemeSwitch`. Iterates `NAV_LINKS` and `SOCIAL_LINKS` from `@config/site` — no duplicate desktop/mobile entries. Sets `aria-current="page"` on the active nav link. Mobile menu button uses `aria-expanded` kept in sync via `setMenuOpen()`.

**Icons**: Each icon is its own Astro component in `src/components/atoms/icons/` (e.g., `GithubIcon.astro`). All icons accept `size?: number | string` and `class?: string` props. Do not inline raw SVGs — add a new component file instead. Import via `@atoms/icons/IconName.astro`.

**Content Collections** (`src/content.config.ts`): Defines a `projects` collection (type `data`, JSON files in `src/content/projects/`). Schema: `title`, `description`, `tags`, `url?`, `repo?`, `image?`, `featured`, `date`. Add project entries as `src/content/projects/<slug>.json`.

**Sitemap**: `@astrojs/sitemap` integration generates `sitemap-index.xml` on every build using `site` from `astro.config.mjs`.

**Planned pages** (nav links exist, pages are stubs): `Sobre mí`, `Contacto`. The home page (`src/pages/index.astro`) currently shows a "Próximamente" placeholder. `Proyectos` (`src/pages/proyectos.astro`) is implemented and renders project cards from the `projects` content collection.

## Conventions

- Component filenames: PascalCase, `.astro` extension.
- Tailwind utility-first; no inline `style` attributes. Use dark-mode variants (`dark:`) as needed.
- TypeScript: explicit types, no `any`.
- Social links open in new tabs with `rel="noopener noreferrer"`.
- Mobile hamburger menu is toggled via vanilla JS event listeners inside `Header.astro`.
- `public/og-image.jpg` is referenced as OG fallback — file must exist or social previews will error.
- This project is licensed GPL-3.0; ensure any added dependencies are compatible.
