import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "../../../src/constants/metadata";
import { translate } from "../../../src/constants/i18n-server";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "../../../src/constants/projects";
import { getCaseStudy } from "../../../src/content/case-studies";
import {
  absoluteUrl,
  isLocale,
  LOCALES,
  localizedPath,
  SITE_NAME,
  SITE_URL,
} from "../../../src/constants/seo";
import { styles } from "../../../src/styles";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }

  const caseStudyCopy = getCaseStudy(slug, localeParam);
  const title = `${translate(localeParam, project.nameKey)} | ${SITE_NAME}`;
  const description =
    caseStudyCopy?.summary ?? translate(localeParam, project.descriptionKey);

  return buildPageMetadata({
    locale: localeParam,
    path: `/projects/${slug}`,
    title,
    description,
  });
}

export default async function ProjectPage({
  params,
}: Readonly<ProjectPageProps>) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const locale = localeParam;
  const name = translate(locale, project.nameKey);
  const description = translate(locale, project.descriptionKey);
  const caseStudyCopy = getCaseStudy(slug, locale);
  const backLabel = locale === "pt" ? "Voltar ao portfólio" : "Back to portfolio";
  const viewDemo = locale === "pt" ? "Ver demo" : "View demo";
  const viewSource = locale === "pt" ? "Código-fonte" : "Source code";
  const caseStudyLabel =
    locale === "pt" ? "Case study empresarial" : "Enterprise case study";
  const contextLabel = locale === "pt" ? "Contexto" : "Context";
  const outcomesLabel =
    locale === "pt" ? "O que o produto entrega" : "What the product delivers";
  const engineeringLabel =
    locale === "pt" ? "Sinais de engenharia" : "Engineering signals";

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description: caseStudyCopy?.summary ?? description,
    url: absoluteUrl(locale, `/projects/${slug}`),
    image: `${SITE_URL}${project.image}`,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    keywords: project.tags.map((tag) => tag.name).join(", "),
  };

  return (
    <main className="min-h-screen bg-primary px-6 pb-20 pt-28 text-white sm:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />
      <div className="mx-auto max-w-4xl">
        <Link
          href={localizedPath(locale)}
          className="text-sm text-secondary transition-colors hover:text-white"
        >
          ← {backLabel}
        </Link>

        <div className="relative mt-8 aspect-16/10 w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={name}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {project.isCaseStudy ? (
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#915EFF]">
            {caseStudyLabel}
          </p>
        ) : null}

        <h1 className={`${styles.sectionHeadText} mt-2`}>{name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-secondary sm:text-lg">
          {caseStudyCopy?.summary ?? description}
        </p>

        {caseStudyCopy ? (
          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-lg font-semibold text-white">{contextLabel}</h2>
              <p className="mt-3 text-base leading-7 text-secondary">
                {caseStudyCopy.context}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                {outcomesLabel}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-secondary">
                {caseStudyCopy.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                {engineeringLabel}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-secondary">
                {caseStudyCopy.engineering.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <p className="rounded-xl border border-white/10 bg-tertiary/50 px-4 py-3 text-sm leading-6 text-secondary">
              {caseStudyCopy.note}
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.demo_link ? (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#915EFF] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {viewDemo}
            </a>
          ) : null}
          {project.source_code_link ? (
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
            >
              {viewSource}
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}
