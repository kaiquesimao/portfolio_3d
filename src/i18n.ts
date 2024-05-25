import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languages } from "./constants";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import en from "./assets/locales/translations/en.ts";
import pt from "./assets/locales/translations/pt.ts";

const translationResources = {
  en: { translation: en },
  pt: { translation: pt },
};

void i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: { ...translationResources },
    supportedLngs: Object.values(languages).map((lang) => lang.code),
    fallbackLng: languages.portuguese.code,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then(() => {
    document.documentElement.lang = i18n.resolvedLanguage!;
  })
  .catch((error) => {
    console.error(error);
  });

export default i18n;
