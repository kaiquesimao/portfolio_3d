"use client";

import Image from "next/image";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { memo, useContext, useEffect, useRef, useState } from "react";
import MobileContext from "../contexts/MobileContext";

const TechSection = memo(() => {
  const isMobile = useContext(MobileContext);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMobile || shouldRenderCanvas) {
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
  }, [isMobile, shouldRenderCanvas]);

  const staticIcons = (
    <div className={"flex flex-row flex-wrap justify-center gap-10"}>
      {technologies.map((tech) => {
        const iconSrc = tech.icon.split("?")[0];

        return (
          <div
            key={tech.name}
            className={
              "flex size-28 items-center justify-center overflow-hidden rounded-full bg-white/95 p-3"
            }
          >
            <Image
              src={iconSrc}
              alt={tech.name}
              width={72}
              height={72}
              className="object-contain"
              style={{ width: 72, height: 72 }}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );

  let content = staticIcons;

  if (!isMobile) {
    content = shouldRenderCanvas ? (
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
    );
  }

  return <div ref={containerRef}>{content}</div>;
});

TechSection.displayName = "TechSection";

// @ts-expect-error - HOC
const Tech = SectionWrapper(TechSection, "tech");

export default Tech;
