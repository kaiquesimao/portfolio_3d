import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const SectionWrapper = (
  Component: () => JSX.Element | undefined,
  idName: string,
) =>
  function HOC() {
    if (!Component) return null;
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span className={"hash-span"} id={idName} />
        <Component />
      </motion.section>
    );
  };

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
