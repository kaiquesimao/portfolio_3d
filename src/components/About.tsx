/* eslint-disable tailwindcss/no-custom-classname */

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { devStacks } from "../constants";
import { SectionWrapper } from "../hoc";
import DevCard from "./DevCard.tsx";
import "devicon";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <span>
      {t("intro_1")}👨‍💻
      <br />
      {t("intro_2")}
      <br /> {t("front_work_with")}{" "}
      <span style={{ color: "yellow" }}>JavaScript</span>{" "}
      <i className={"devicon-javascript-plain colored"} />,{" "}
      <span style={{ color: "DodgerBlue" }}>TypeScript</span>{" "}
      <i className={"devicon-typescript-plain colored"} />,{" "}
      <span style={{ color: "red" }}>Angular</span>{" "}
      <i className="devicon-angularjs-plain colored" />,{" "}
      <span style={{ color: "DeepSkyBlue" }}>React</span>{" "}
      <i className="devicon-react-plain colored" /> {t("and")}{" "}
      <span style={{ color: "MediumAquaMarine" }}>Vue</span>{" "}
      <i className="devicon-vuejs-plain colored" />.<br />
      {t("back_work_with")} <i className={"devicon-java-plain colored"} />{" "}
      {t("back_work_spring")} <i className={"devicon-spring-plain colored"} />
      .<br />
      {t("mobile_work_with")} 📱 {t("mobile_work_with2")}{" "}
      <i className={"devicon-kotlin-plain colored"} /> {t("to_android")}{" "}
      <i className={"devicon-android-plain colored"} />.<br />
      {t("intro_db")} <i className={"devicon-postgresql-plain colored"} />.
      <br />
      {t("intro_so")} <i className={"devicon-windows8-original colored"} />{" "}
      {t("intro_so2")} <i className={"devicon-linux-plain"} /> {t("intro_so3")}{" "}
      <i className={"devicon-ubuntu-plain colored"} />.
    </span>
  );
};

const Description = () => {
  return (
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className={"mt-4 max-w-4xl text-base leading-8 text-secondary"}
    >
      <AboutMe />
    </motion.p>
  );
};
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
      <div className={"mt-20 flex flex-wrap gap-10"}>
        {devStacks.map((stack, index) => (
          <DevCard key={stack.title} index={index} {...stack} />
        ))}
      </div>
    </>
  );
};

const About = SectionWrapper(AboutSection, "about");
export default About;
