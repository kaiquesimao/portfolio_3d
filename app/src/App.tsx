"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";
import Hero from "./components/Hero";
import MobileContext from "./contexts/MobileContext.tsx";
import i18n from "./i18n";

const StarsCanvas = dynamic(() => import("./components/canvas/Stars"), {
  ssr: false,
});
const About = dynamic(() => import("./components/About"));
const Experience = dynamic(() => import("./components/Experience"));
const Tech = dynamic(() => import("./components/Tech"));
const Projects = dynamic(() => import("./components/Projects"));
const Contact = dynamic(() => import("./components/Contact"));

const MOBILE_MEDIA_QUERY = "(max-width: 500px)";

const subscribeToMobileMedia = (onStoreChange: () => void) => {
  const mediaQuery = globalThis.window.matchMedia(MOBILE_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
};

const getMobileMediaSnapshot = () =>
  globalThis.window.matchMedia(MOBILE_MEDIA_QUERY).matches;

// SSR and first client paint stay false so markup matches across hydration.
const getMobileMediaServerSnapshot = () => false;

const App = () => {
  const isMobile = useSyncExternalStore(
    subscribeToMobileMedia,
    getMobileMediaSnapshot,
    getMobileMediaServerSnapshot,
  );
  const [showStars, setShowStars] = useState(false);
  const shouldShowStars = !isMobile && showStars;

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
        <main>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Projects />
          <Contact />
        </main>
      </div>
    </MobileContext.Provider>
  );
};

App.displayName = "App";

export default App;
