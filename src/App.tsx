import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Projects,
} from "./components";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("page_title");

    const changeLanguage = (lang: string) => {
      document.documentElement.lang = lang;
      document.title = t("page_title");
    };

    i18n.on("languageChanged", changeLanguage);

    return () => {
      i18n.off("languageChanged", changeLanguage);
    };
  }, [t, i18n]);

  return (
    <BrowserRouter>
      <div className={"relative z-0 bg-primary"}>
        <div className={"bg-hero-pattern bg-cover bg-center bg-no-repeat"}>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />

        <div className={"relative z-0"}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
