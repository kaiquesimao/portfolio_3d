import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ComputerSection from "./ComputerSection";

const HeroSection = () => {
  return (
    <section className={"relative mx-auto mt-12 w-full"}>
      <div
        className={`${styles.paddingX} inset-0 top-28 mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className={"flex flex-col items-center justify-center"}>
          <div className={"size-5 rounded-full bg-[#915EFF]"} />
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
      <ComputerSection />
    </section>
  );
};

const Hero = SectionWrapper(HeroSection, "/");
export default Hero;
