import ReactParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface devStacksType {
  title: string;
  icon: string;
  index: number;
}
const DevCard = ({ title, index, icon }: devStacksType) => {
  return (
    <ReactParallaxTilt className={"w-full xs:w-64"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={"green-pink-gradient w-full rounded-3xl p-px shadow-card"}
      >
        <div
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={
            "flex min-h-[17.5em] flex-col items-center justify-evenly rounded-3xl bg-tertiary px-12 py-5"
          }
        >
          <img src={icon} alt={title} className={"h-16 w-16 object-contain"} />
          <h3 className={"text-center text-xl font-bold text-white"}>
            {title}
          </h3>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

export default DevCard;
