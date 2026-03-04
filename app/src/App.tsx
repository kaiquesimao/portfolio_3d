"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MobileContext from "./contexts/MobileContext.tsx";
import i18n from "./i18n";

const StarsCanvas = dynamic(() => import("./components/canvas/Stars"), {
  ssr: false,
});
const About = dynamic(() => import("./components/About"));
const Experience = dynamic(() => import("./components/Experience"));
const Tech = dynamic(() => import("./components/Tech"));
const Projects = dynamic(() => import("./components/Projects"));
const Feedbacks = dynamic(() => import("./components/Feedbacks"));
const Contact = dynamic(() => import("./components/Contact"));

const App = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (globalThis.window === undefined) {
      return false;
    }

    return globalThis.window.matchMedia("(max-width: 500px)").matches;
  });
  const [showStars, setShowStars] = useState(false);
  const shouldShowStars = !isMobile && showStars;

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
    const syncDocumentMetadata = (lang?: string) => {
      document.documentElement.lang = lang ?? i18n.language;
      document.title = i18n.t("page_title");
    };

    syncDocumentMetadata();

    i18n.on("languageChanged", syncDocumentMetadata);

    return () => {
      i18n.off("languageChanged", syncDocumentMetadata);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    if (typeof globalThis.window.requestIdleCallback === "function") {
      const idleId = globalThis.window.requestIdleCallback(() => {
        setShowStars(true);
      });

      return () => {
        globalThis.window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = globalThis.window.setTimeout(() => {
      setShowStars(true);
    }, 200);

    return () => {
      globalThis.window.clearTimeout(timeoutId);
    };
  }, [isMobile]);

  return (
    <MobileContext.Provider value={isMobile}>
      <div className={"relative z-0 overflow-x-hidden bg-primary"}>
        {shouldShowStars ? <StarsCanvas /> : null}
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
