import type { Locale } from "./seo";
import pt from "../assets/locales/translations/pt";
import en from "../assets/locales/translations/en";

const dictionaries = {
  pt,
  en,
} as const;

export type TranslationKey = keyof typeof pt;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function translate(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key];
}
