import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";
const Description = () => {
  return (
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className={"mt-4 max-w-3xl text-base leading-8 text-secondary"}
    >
      E aí, pessoal! Sou o Kaique, um desenvolvedor de software Full Stack!👨‍💻
      <br />
      Me formei em ADS e mergulhei de cabeça em várias áreas da programação,
      incluindo Frontend, Backend e Mobile. No Frontend, trabalho com&nbsp;
      <span style={{ color: "yellow" }}>JavaScript</span>,&nbsp;
      <span style={{ color: "DodgerBlue" }}>TypeScript</span>,&nbsp;
      <span style={{ color: "red" }}>Angular</span>,&nbsp;
      <span style={{ color: "DeepSkyBlue" }}>React</span> e&nbsp;
      <span style={{ color: "MediumAquaMarine" }}>Vue</span>.<br />
      No Backend, me viro muito bem com Java ☕ & Kotlin usando o Spring
      Framework. Quando o assunto é desenvolvimento mobile 📱 sou fã número um
      de Kotlin. Além disso, tenho conhecimentos em bancos de dados relacionais
      como SQL Server e Postgre. E não para por aí! Também me viro
      tranquilamente nos sistemas operacionais, seja no Windows (com o WSL) ou
      no Linux/Ubuntu. 🖥️
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
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const About = SectionWrapper(AboutSection, "about");
export default About;
