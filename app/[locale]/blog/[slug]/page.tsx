import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "../../../src/content/blog";
import { buildPageMetadata } from "../../../src/constants/metadata";
import {
  absoluteUrl,
  isLocale,
  LOCALES,
  localizedPath,
  SITE_NAME,
} from "../../../src/constants/seo";
import { styles } from "../../../src/styles";

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getBlogSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }
  const copy = post.locales[localeParam];
  return buildPageMetadata({
    locale: localeParam,
    path: `/blog/${slug}`,
    title: `${copy.title} | ${SITE_NAME}`,
    description: copy.description,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Readonly<BlogPostPageProps>) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const locale = localeParam;
  const copy = post.locales[locale];
  const backLabel = locale === "pt" ? "Voltar ao blog" : "Back to blog";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: copy.title,
    description: copy.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    url: absoluteUrl(locale, `/blog/${slug}`),
    inLanguage: locale === "pt" ? "pt-BR" : "en-US",
  };

  return (
    <main className="min-h-screen bg-primary px-6 pb-20 pt-28 text-white sm:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-3xl">
        <Link
          href={localizedPath(locale, "/blog")}
          className="text-sm text-secondary transition-colors hover:text-white"
        >
          ← {backLabel}
        </Link>
        <time
          dateTime={post.date}
          className="mt-6 block text-xs uppercase tracking-wide text-secondary"
        >
          {post.date}
        </time>
        <h1 className={`${styles.sectionHeadText} mt-2`}>{copy.title}</h1>
        <p className="mt-4 text-base text-secondary">{copy.description}</p>
        <div className="mt-8 space-y-10 text-base leading-7 text-white-100">
          {copy.sections.map((section) => (
            <section
              key={section.heading ?? section.paragraphs[0]?.slice(0, 32)}
              className="space-y-4"
            >
              {section.heading ? (
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-secondary">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
