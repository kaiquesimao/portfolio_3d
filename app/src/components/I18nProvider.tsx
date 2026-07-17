"use client";

import { useEffect } from "react";
import i18n from "../i18n";
import type { Locale } from "../constants/seo";

type I18nProviderProps = {
  locale: Locale;
};

export default function I18nProvider({ locale }: I18nProviderProps) {
  useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
