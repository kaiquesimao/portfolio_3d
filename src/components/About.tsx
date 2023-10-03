import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { styles } from "../styles";
import { services } from "../constants";
import Tilt from "react-parallax-tilt";

interface Service {
  title: string;
  icon: string;
  index: number;
}
const ServiceCard = ({ title, index, icon }: Service) => {
  return (
    <Tilt className={"w-full xs:w-64"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={"green-pink-gradient w-full rounded-3xl p-px shadow-card"}
      >
        <div
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
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 max-w-3xl text-base leading-8 text-[] text-secondary"}
      >
        I&apos;m a software engineer with a passion for building web
        applications. I&apos;m currently working on a project called &quot;The
        Cake Shop&quot; that aims to provide a platform for cake enthusiasts to
        share and discover new recipes. I&apos;m also a member of the Cake Shop
        Discord server and am actively seeking new opportunities to grow my
        skills and knowledge.
      </motion.p>
      <div className={"mt-20 flex flex-wrap gap-10"}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
