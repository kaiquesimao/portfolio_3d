import type { MetadataRoute } from "next";
import { blogPosts } from "./src/content/blog";
import { getProjectSlugs } from "./src/constants/projects";
import { LOCALES, SITE_URL, absoluteUrl } from "./src/constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: absoluteUrl(locale),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          pt: absoluteUrl("pt"),
          en: absoluteUrl("en"),
        },
      },
    }, {
      url: absoluteUrl(locale, "/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const slug of getProjectSlugs()) {
      entries.push({
        url: absoluteUrl(locale, `/projects/${slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: absoluteUrl(locale, `/blog/${post.slug}`),
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  entries.unshift({
    url: SITE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  });

  return entries;
}
