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

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources: { ...translationResources }, //default namespace is 'translation'
    supportedLngs: Object.values(languages).map((lang) => lang.code),
    fallbackLng: languages.portuguese.code,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .catch((error) => {
    console.error(error);
  });

export default i18n;
