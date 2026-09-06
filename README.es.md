# Lejito Web

Bienvenidos al repositorio de mi portafolio personal.
Este proyecto muestra mi trabajo en ingeniería de software creado como parte de mi portafolio profesional.

## 🌐 Idiomas

- [Inglés](README.md)
- [Español](README.es.md)

## 📖 Acerca de

Este repositorio contiene código, documentación y ejemplos que reflejan mi trayectoria técnica y crecimiento profesional.
Está destinado a demostrar mis habilidades en desarrollo web, tecnologías en la nube e ingeniería de software.

## 🛠️ Stack tecnológico

- **[Astro 7](https://astro.build/)** — generador de sitios estáticos con View Transitions
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilos utility-first via `@tailwindcss/vite`
- **TypeScript** — tipado estricto en todo el proyecto
- **Fuente variable self-hosted** — Rubik via `@fontsource-variable/rubik`
- **Manifiesto PWA** + generación de **sitemap** via `@astrojs/sitemap`

## 🏗️ Arquitectura

Los componentes siguen la metodología **Atomic Design**:

| Nivel      | Ruta                        | Propósito                              |
| ---------- | --------------------------- | -------------------------------------- |
| Átomos     | `src/components/atoms/`     | Unidades indivisibles: íconos, enlaces |
| Moléculas  | `src/components/molecules/` | Átomos compuestos: Logo, ThemeSwitch   |
| Organismos | `src/components/organisms/` | Secciones completas: Header, Footer    |
| Plantillas | `src/layouts/`              | Esqueletos de página                   |
| Páginas    | `src/pages/`                | Rutas Astro con contenido real         |

La configuración global (nombre del autor, redes sociales, enlaces de navegación) vive en `src/config/site.ts` — fuente única de verdad.

## ⚙️ Comandos

```bash
pnpm dev      # Inicia servidor de desarrollo
pnpm build    # Verificación de tipos + construcción
pnpm preview  # Sirve el build de producción
pnpm lint     # Verificación ESLint + Prettier
pnpm format   # Formateo con Prettier
```

## ⚖️ Licencia

Este proyecto está licenciado bajo la **Licencia Pública General GNU v3.0 (GPLv3)**.
Eres libre de usar, estudiar y modificar el código, pero cualquier redistribución o trabajo derivado también debe ser liberado bajo GPLv3, con la debida atribución al autor original.
Para más detalles, consulta el archivo [LICENSE.md](LICENSE.md) incluido en este repositorio.

## ✨ Autor

Creado y mantenido por **Alejandro Córdoba Ríos**.
Siéntete libre de explorar, aprender y contribuir responsablemente.
