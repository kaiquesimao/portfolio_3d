import type { Metadata } from "next";
import { notFound } from "next/navigation";
import I18nProvider from "../src/components/I18nProvider";
import JsonLd from "../src/components/JsonLd";
import Navbar from "../src/components/Navbar";
import { buildPageMetadata } from "../src/constants/metadata";
import { isLocale, LOCALES, Locale } from "../src/constants/seo";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  return buildPageMetadata({ locale: localeParam });
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <>
      <JsonLd locale={locale} />
      <I18nProvider locale={locale} />
      <Navbar />
      {children}
    </>
  );
}
