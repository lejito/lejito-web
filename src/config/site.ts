export const SITE = {
  owner: "Alejandro Cordoba Rios",
  handle: "@lejito",
  birthDate: new Date("2003-05-27"),
  url: "https://lejito.dev",
  locale: "es_ES",
  defaultKeywords:
    "alejandro cordoba rios, lejito, portafolio, desarrollo web, ingeniero de sistemas, nodejs, react, nextjs, angular, astro, medellin, colombia",
} as const;

export const SOCIAL_LINKS = [
  { href: "https://linkedin.com/in/alejocrrs", label: "LinkedIn", icon: "linkedin" },
  { href: "https://github.com/lejito", label: "GitHub", icon: "github" },
  { href: "https://instagram.com/alejocrrs", label: "Instagram", icon: "instagram" },
  { href: "https://x.com/alejocrrs", label: "X (Twitter)", icon: "twitter" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
] as const;
