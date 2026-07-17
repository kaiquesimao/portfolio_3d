import {
  absoluteUrl,
  Locale,
  LOCALE_SCHEMA,
  PAGE_TITLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  seoByLocale,
} from "../constants/seo";
import { translate } from "../constants/i18n-server";
import { projects } from "../constants/projects";

type JsonLdProps = {
  locale: Locale;
};

export default function JsonLd({ locale }: Readonly<JsonLdProps>) {
  const description = seoByLocale[locale].description;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Software Engineer",
    url: absoluteUrl(locale),
    sameAs: [...SOCIAL_PROFILES],
    description,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PAGE_TITLE,
    url: SITE_URL,
    description,
    inLanguage: LOCALE_SCHEMA[locale],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "pt"
        ? "Projetos de Kaique Simão"
        : "Kaique Simão projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(locale, `/projects/${project.slug}`),
      name: translate(locale, project.nameKey),
      description: translate(locale, project.descriptionKey),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
