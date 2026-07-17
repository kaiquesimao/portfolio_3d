export const SITE_URL = "https://portfolio.kaique.site";

export const SITE_NAME = "Kaique Simão";

export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_OG: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

export const LOCALE_HTML: Record<Locale, string> = {
  pt: "pt",
  en: "en",
};

export const LOCALE_SCHEMA: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
};

export const PAGE_TITLE = "Kaique Simão | Software Engineer";

export const seoByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  pt: {
    title: PAGE_TITLE,
    description:
      "Software Engineer full-stack — sistemas críticos, SaaS multi-tenant, cloud e experiências web modernas.",
    keywords: [
      "Software Engineer",
      "Full-stack",
      "SaaS",
      "Cloud",
      "React",
      "Next.js",
      "Kaique Simão",
    ],
  },
  en: {
    title: PAGE_TITLE,
    description:
      "Full-stack Software Engineer — mission-critical systems, multi-tenant SaaS, cloud, and modern web experiences.",
    keywords: [
      "Software Engineer",
      "Full-stack",
      "SaaS",
      "Cloud",
      "React",
      "Next.js",
      "Kaique Simão",
    ],
  },
};

/** @deprecated Prefer seoByLocale[locale].description */
export const PAGE_DESCRIPTION = seoByLocale.pt.description;

/** @deprecated Prefer seoByLocale[locale].keywords */
export const SEO_KEYWORDS = seoByLocale.pt.keywords;

export const SOCIAL_PROFILES = [
  "https://github.com/kaiquesimao",
  "https://www.linkedin.com/in/kaique-simao",
] as const;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function absoluteUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = ""): Record<string, string> {
  return {
    pt: absoluteUrl("pt", path),
    en: absoluteUrl("en", path),
    "x-default": absoluteUrl(DEFAULT_LOCALE, path),
  };
}
