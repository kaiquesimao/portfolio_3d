import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { devStacks } from "../constants";
import { SectionWrapper } from "../hoc";
import DevCard from "./DevCard.tsx";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <span className="flex flex-col gap-4">
      <span>{t("intro_1")}</span>
      <span>{t("intro_2")}</span>
      <span>{t("intro_education")}</span>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-secondary">
        <li>{t("expertise_frontend")}</li>
        <li>{t("expertise_backend")}</li>
        <li>{t("expertise_mobile")}</li>
        <li>{t("expertise_cloud")}</li>
      </ul>
    </span>
  );
};

AboutMe.displayName = "AboutMe";

const Description = () => {
  return (
    <motion.div
      variants={fadeIn("", 0.1, 1, "tween")}
      className={"mt-6 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8"}
    >
      <AboutMe />
    </motion.div>
  );
};

Description.displayName = "Description";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>{t("introduction")}</p>
        <h2 className={styles.sectionHeadText}>{t("overview")}</h2>
      </motion.div>
      <Description />
      <div className={"mt-16 flex flex-wrap gap-8"}>
        {devStacks.map((stack, index) => (
          <DevCard key={stack.title} index={index} {...stack} />
        ))}
      </div>
    </>
  );
};

AboutSection.displayName = "AboutSection";

const About = SectionWrapper(AboutSection, "about");
export default About;
