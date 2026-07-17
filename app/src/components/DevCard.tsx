import ReactParallaxTilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { DevStacksType } from "../utils/types.ts";

const DevCard = ({ title, index, icon }: DevStacksType) => {
  return (
    <ReactParallaxTilt
      className={"w-full xs:w-60"}
      scale={1}
      transitionSpeed={450}
      tiltMaxAngleX={18}
      tiltMaxAngleY={18}
    >
      <motion.div
        variants={fadeIn("right", 0.5 * index, 0.75, "spring")}
        className={"w-full rounded-2xl border border-[#915EFF]/25 bg-tertiary p-px shadow-card"}
      >
        <div
          className={
            "flex min-h-60 flex-col items-center justify-center gap-5 rounded-2xl bg-tertiary px-10 py-8"
          }
        >
          <Image
            src={icon}
            alt={title}
            width={56}
            height={56}
            className={"object-contain"}
          />
          <h3 className={"text-center text-lg font-semibold tracking-wide text-white"}>
            {title}
          </h3>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

DevCard.displayName = "DevCard";
export default DevCard;
