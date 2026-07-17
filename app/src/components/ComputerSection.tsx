"use client";

import dynamic from "next/dynamic";
import { memo, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileContext from "../contexts/MobileContext";

const ComputerCanvas = dynamic(
  () => import("./canvas").then((mod) => mod.ComputerCanvas),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden={true}
        className="h-64 w-full animate-pulse rounded-2xl bg-tertiary/40 sm:h-96"
      />
    ),
  },
);

const ComputerSection = memo(() => {
  const isMobile = useContext(MobileContext);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setShowCanvas(true);
      return;
    }

    // Defer WebGL on mobile so the hero text can win LCP.
    if (typeof globalThis.window.requestIdleCallback === "function") {
      const idleId = globalThis.window.requestIdleCallback(
        () => setShowCanvas(true),
        { timeout: 2500 },
      );
      return () => globalThis.window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.window.setTimeout(() => {
      setShowCanvas(true);
    }, 1200);

    return () => globalThis.window.clearTimeout(timeoutId);
  }, [isMobile]);

  return (
    <section>
      {showCanvas ? (
        <ComputerCanvas />
      ) : (
        <div
          aria-hidden={true}
          className="h-64 w-full animate-pulse rounded-2xl bg-tertiary/40 sm:h-96"
        />
      )}
      <div
        className={
          "absolute bottom-0 flex w-full items-center justify-center xs:-bottom-16"
        }
      >
        <a href={"#about"}>
          <div
            className={
              "flex h-16 w-9 items-start justify-center rounded-3xl border-4 border-secondary p-2"
            }
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={"mb-1 size-3 rounded-full bg-secondary"}
            />
          </div>
        </a>
      </div>
    </section>
  );
});

ComputerSection.displayName = "ComputerSection";
export default ComputerSection;
