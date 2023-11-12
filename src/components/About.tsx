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
      <br /> No Frontend, trabalho com{" "}
      <span style={{ color: "yellow" }}>JavaScript</span>{" "}
      <i className={"devicon-javascript-plain colored"} />,{" "}
      <span style={{ color: "DodgerBlue" }}>TypeScript</span>{" "}
      <i className={"devicon-typescript-plain colored"} />,{" "}
      <span style={{ color: "red" }}>Angular</span>{" "}
      <i className="devicon-angularjs-plain colored" />,{" "}
      <span style={{ color: "DeepSkyBlue" }}>React</span>{" "}
      <i className="devicon-react-plain colored" /> e{" "}
      <span style={{ color: "MediumAquaMarine" }}>Vue</span>{" "}
      <i className="devicon-vuejs-plain colored" />.<br />
      No Backend, me viro muito bem com Java{" "}
      <i className={"devicon-java-plain colored"} /> usando o Spring Framework{" "}
      <i className={"devicon-spring-plain colored"} />.<br />
      Quando o assunto é desenvolvimento Mobile 📱 sou fã número um de Kotlin{" "}
      <i className={"devicon-kotlin-plain colored"} /> para android{" "}
      <i className={"devicon-android-plain colored"} />.<br />
      Tenho conhecimentos em bancos de dados relacionais como SQL Server e
      Postgre <i className={"devicon-postgresql-plain colored"} />.<br />E por
      fim, também me viro tranquilamente nos sistemas operacionais, seja no
      Windows <i className={"devicon-windows8-original colored"} /> (com o WSL)
      ou no Linux <i className={"devicon-linux-plain"} /> com a distro Ubuntu{" "}
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
