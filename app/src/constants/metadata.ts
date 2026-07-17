import type { Metadata } from "next";
import {
  absoluteUrl,
  languageAlternates,
  Locale,
  LOCALE_OG,
  seoByLocale,
  SITE_NAME,
  SITE_URL,
} from "./seo";

type BuildMetadataOptions = {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
  ogType?: "website" | "article";
};

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  ogType = "website",
}: BuildMetadataOptions): Metadata {
  const copy = seoByLocale[locale];
  const pageTitle = title ?? copy.title;
  const pageDescription = description ?? copy.description;
  const canonicalPath = localizedCanonical(locale, path);
  const url = absoluteUrl(locale, path);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: copy.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: ogType,
      locale: LOCALE_OG[locale],
      alternateLocale: Object.values(LOCALE_OG).filter(
        (value) => value !== LOCALE_OG[locale],
      ),
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function localizedCanonical(locale: Locale, path: string): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
