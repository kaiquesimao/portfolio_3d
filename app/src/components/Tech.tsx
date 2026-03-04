import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { memo, useContext, useEffect, useRef, useState } from "react";
import MobileContext from "../contexts/MobileContext.tsx";
import { getBrowser } from "../utils/utils.ts";

const TechSection = memo(() => {
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRenderCanvas) {
      return;
    }

    const container = containerRef.current;

    if (!container || typeof IntersectionObserver === "undefined") {
      const frameId = requestAnimationFrame(() => {
        setShouldRenderCanvas(true);
      });

      return () => {
        cancelAnimationFrame(frameId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderCanvas(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px 0px" },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [shouldRenderCanvas]);

  return (
    <div
      ref={containerRef}
      className={"flex flex-row flex-wrap justify-center gap-10"}
    >
      {technologies.map((tech) => (
        <div className={"size-28 cursor-pointer"} key={tech.name}>
          {shouldRenderCanvas ? (
            <BallCanvas icon={tech.icon} />
          ) : (
            <div
              aria-hidden={true}
              className={"size-full animate-pulse rounded-full bg-tertiary/60"}
            />
          )}
        </div>
      ))}
    </div>
  );
});

TechSection.displayName = "TechSection";

// @ts-expect-error - HOC
const WrappedTechSection = SectionWrapper(TechSection, "tech");

const Tech = memo(() => {
  const isMobile = useContext(MobileContext);
  const isFirefoxOnMobile = isMobile && getBrowser() === "Firefox";
  const isNotMobile = !isMobile;

  const shouldRenderTech = isFirefoxOnMobile || isNotMobile;

  if (!shouldRenderTech) return null;

  return <WrappedTechSection />;
});

Tech.displayName = "Tech";
export default Tech;
