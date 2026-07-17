import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../src/content/blog";
import { buildPageMetadata } from "../../src/constants/metadata";
import {
  isLocale,
  LOCALES,
  localizedPath,
} from "../../src/constants/seo";
import { styles } from "../../src/styles";

type BlogIndexProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: BlogIndexProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const title = "Blog | Kaique Simão";
  const description =
    localeParam === "pt"
      ? "Ensaios sobre sistemas críticos, SaaS, Flutter em produção e o equilíbrio entre 3D, SEO e performance — escritos a partir da trajetória full-stack."
      : "Essays on mission-critical systems, SaaS, production Flutter, and balancing 3D, SEO, and performance — drawn from a full-stack career path.";

  return buildPageMetadata({
    locale: localeParam,
    path: "/blog",
    title,
    description,
  });
}

export default async function BlogIndexPage({ params }: Readonly<BlogIndexProps>) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const heading = "Blog";
  const intro =
    locale === "pt"
      ? "Textos mais longos sobre a pressão de sistemas industriais, SaaS multi-tenant, Flutter em produção e as decisões por trás deste portfólio 3D."
      : "Longer pieces on industrial-system pressure, multi-tenant SaaS, production Flutter, and the decisions behind this 3D portfolio.";
  const backLabel = locale === "pt" ? "Voltar ao portfólio" : "Back to portfolio";

  return (
    <main className="min-h-screen bg-primary px-6 pb-20 pt-28 text-white sm:px-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={localizedPath(locale)}
          className="text-sm text-secondary transition-colors hover:text-white"
        >
          ← {backLabel}
        </Link>
        <h1 className={`${styles.sectionHeadText} mt-6`}>{heading}</h1>
        <p className="mt-3 text-secondary">{intro}</p>
        <ul className="mt-10 space-y-6">
          {blogPosts.map((post) => {
            const copy = post.locales[locale];
            return (
              <li key={post.slug}>
                <Link
                  href={localizedPath(locale, `/blog/${post.slug}`)}
                  className="block rounded-xl border border-white/10 p-5 transition-colors hover:border-[#915EFF]/50"
                >
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-wide text-secondary"
                  >
                    {post.date}
                  </time>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {copy.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    {copy.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
