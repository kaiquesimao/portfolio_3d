import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { memo, useEffect, useRef, useState } from "react";

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
    <div ref={containerRef}>
      {shouldRenderCanvas ? (
        <BallCanvas technologies={technologies} />
      ) : (
        <div className={"flex flex-row flex-wrap justify-center gap-10"}>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              aria-hidden={true}
              className={"size-28 animate-pulse rounded-full bg-tertiary/60"}
            />
          ))}
        </div>
      )}
    </div>
  );
});

TechSection.displayName = "TechSection";

// @ts-expect-error - HOC
const Tech = SectionWrapper(TechSection, "tech");

export default Tech;
