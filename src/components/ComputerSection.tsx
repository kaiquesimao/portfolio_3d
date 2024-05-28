import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import React from "react";

const ComputerSection = React.memo(() => {
  return (
    <section>
      <ComputersCanvas />
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

export default ComputerSection;
