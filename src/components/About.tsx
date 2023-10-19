/* eslint-disable tailwindcss/no-custom-classname */

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { devStacks } from "../constants";
import { SectionWrapper } from "../hoc";
import DevCard from "./DevCard.tsx";
import "devicon";
const Description = () => {
  return (
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className={"mt-4 max-w-4xl text-base leading-8 text-secondary"}
    >
      E aí, pessoal! Sou o Kaique, um desenvolvedor de software Full Stack!👨‍💻
      <br />
      Me formei em ADS e mergulhei de cabeça em várias áreas da programação,
      incluindo Frontend, Backend e Mobile.
      <br /> No Frontend, trabalho com&nbsp;
      <span style={{ color: "yellow" }}>JavaScript</span>&nbsp;
      <i className={"devicon-javascript-plain colored"} />
      ,&nbsp;
      <span style={{ color: "DodgerBlue" }}>TypeScript</span>&nbsp;
      <i className={"devicon-typescript-plain colored"} />
      ,&nbsp;
      <span style={{ color: "red" }}>Angular</span>&nbsp;
      <i className="devicon-angularjs-plain colored" />
      ,&nbsp;
      <span style={{ color: "DeepSkyBlue" }}>React</span>&nbsp;
      <i className="devicon-react-plain colored" />
      &nbsp;e&nbsp;
      <span style={{ color: "MediumAquaMarine" }}>Vue</span>&nbsp;
      <i className="devicon-vuejs-plain colored" />.<br />
      No Backend, me viro muito bem com Java&nbsp;
      <i className={"devicon-java-plain colored"} />
      &nbsp;usando o Spring Framework&nbsp;
      <i className={"devicon-spring-plain colored"} />.<br />
      Quando o assunto é desenvolvimento Mobile 📱 sou fã número um de
      Kotlin&nbsp;
      <i className={"devicon-kotlin-plain colored"} />
      &nbsp;para android&nbsp;
      <i className={"devicon-android-plain colored"} />.<br />
      Tenho conhecimentos em bancos de dados relacionais como SQL Server e
      Postgre&nbsp;
      <i className={"devicon-postgresql-plain colored"} />.<br />E por fim,
      também me viro tranquilamente nos sistemas operacionais, seja no
      Windows&nbsp;
      <i className={"devicon-windows8-original colored"} />
      &nbsp;(com o WSL) ou no Linux&nbsp;
      <i className={"devicon-linux-plain"} />
      &nbsp;com a distro Ubuntu&nbsp;
      <i className={"devicon-ubuntu-plain colored"} />.
    </motion.p>
  );
};
const AboutSection = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral</h2>
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
