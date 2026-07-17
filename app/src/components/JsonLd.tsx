import {
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "../constants/seo";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Software Engineer",
  url: SITE_URL,
  sameAs: [...SOCIAL_PROFILES],
  description: PAGE_DESCRIPTION,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: PAGE_TITLE,
  url: SITE_URL,
  description: PAGE_DESCRIPTION,
  inLanguage: "pt-BR",
};

export default function JsonLd() {
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
    </>
  );
}
