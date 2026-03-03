import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Projects,
  StarsCanvas,
  Tech,
} from "./components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileContext from "./contexts/MobileContext.tsx";

const App = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(() => {
    if (globalThis.window === undefined) {
      return false;
    }

    return globalThis.window.matchMedia("(max-width: 500px)").matches;
  });

  useEffect(() => {
    const mediaQuery = globalThis.window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    document.title = t("page_title");
    document.documentElement.lang = i18n.language;

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
    <MobileContext.Provider value={isMobile}>
      <div className={"relative z-0 overflow-x-hidden bg-primary"}>
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
        <Contact />
      </div>
    </MobileContext.Provider>
  );
};

App.displayName = "App";

export default App;
