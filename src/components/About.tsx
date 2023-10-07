import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import ReactParallaxTilt from "react-parallax-tilt";

interface Service {
  title: string;
  icon: string;
  index: number;
}
const ServiceCard = ({ title, index, icon }: Service) => {
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
export const About = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>visão geral</h2>
      </motion.div>
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
        <span style={{ color: "MediumAquaMarine" }}>Vue</span>. <br /> No
        Backend, me viro muito bem com Java ☕ usando o Spring Framework e
        Kotlin. Quando o assunto é desenvolvimento mobile 📱, sou fã número um
        de Kotlin. Além disso, tenho conhecimentos em bancos de dados
        relacionais como SQL Server e Postgre SQL. E não para por aí! Também me
        viro tranquilamente nos sistemas operacionais, seja no Windows (com o
        WSL) ou no Linux/Ubuntu. 🖥️
      </motion.p>
      <div className={"mt-20 flex flex-wrap gap-10"}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
