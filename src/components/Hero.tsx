import { motion } from "framer-motion";
import { styles } from "../styles.ts";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={"relative mx-auto h-screen w-full"}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className={"mt-5 flex flex-col items-center justify-center"}>
          <div className={"h-5 w-5 rounded-full bg-[#915EFF]"} />
          <div className={"violet-gradient h-40 w-1 sm:h-80"} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Olá, eu sou o <br className={"hidden sm:block"} />
            <span className={"text-[#915EFF]"}>Kaique Simão</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Desenvolvedor de Software especializado em{" "}
            <span className={"text-[#61DBFB]"}>React</span>,{" "}
            <span className={"text-[#C3002F]"}>Angular</span> e{" "}
            <span className={"text-[#42b883]"}>Vue</span> para o front-end, e
            Java com Spring para o back-end
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className={
          "absolute bottom-32 flex w-full items-center justify-center xs:bottom-10"
        }
      >
        <a href={"#about"}>
          <div
            className={
              "flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2"
            }
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={"mb-1 h-3 w-3 rounded-full bg-secondary"}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
