import { motion } from "framer-motion";
import { styles } from "../styles.ts";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

export const Hero = () => {
  return (
    <section className={"relative mx-auto w-full"}>
      <div
        className={`${styles.paddingX} relative inset-0 top-28 mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className={"flex flex-col items-center justify-center"}>
          <div className={"h-5 w-5 rounded-full bg-[#915EFF]"} />
          <div className={"violet-gradient h-40 w-1 sm:h-60"} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Olá, eu sou o <br className={"hidden sm:block"} />
            <span className={"text-[#915EFF]"}>Kaique Simão</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desenvolvedor de aplicações web
          </p>
        </div>
      </div>
      <div className={"h-96 w-full"}>
        <ComputersCanvas />
      </div>
      <div
        className={
          "absolute bottom-0 flex w-full items-center justify-center xs:-bottom-16"
        }
      >
        <a href={"#about"}>
          <div
            className={
              "flex h-16 w-9 items-start justify-center rounded-3xl border-4 border-secondary p-2"
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

export default SectionWrapper(Hero, "/");
