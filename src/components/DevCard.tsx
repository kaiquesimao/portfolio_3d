import ReactParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface DevStacksType {
  title: string;
  icon: string;
  index: number;
}
const DevCard = ({ title, index, icon }: DevStacksType) => {
  return (
    <ReactParallaxTilt className={"w-full xs:w-64"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={"green-pink-gradient w-full rounded-3xl p-px shadow-card"}
      >
        <div
          // @ts-expect-error options is a valid property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={
            "flex min-h-72 flex-col items-center justify-evenly rounded-3xl bg-tertiary px-12 py-5"
          }
        >
          <img src={icon} alt={title} className={"size-16 object-contain"} />
          <h3 className={"text-center text-xl font-bold text-white"}>
            {title}
          </h3>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

export default DevCard;
