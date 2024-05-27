import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useContext } from "react";
import MobileContext from "../contexts/MobileContext.tsx";
import { getBrowser } from "../utils/utils.ts";

const TechSection = () => {
  return (
    <div className={"flex flex-row flex-wrap justify-center gap-10"}>
      {technologies.map((tech) => (
        <div className={"size-28 cursor-pointer"} key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

const Tech = () => {
  const isMobile = useContext(MobileContext);
  const isFirefoxOnMobile = isMobile && getBrowser() === "Firefox";
  const isNotMobile = !isMobile;

  const shouldRenderTech = isFirefoxOnMobile || isNotMobile;

  if (!shouldRenderTech) return null;

  const WrappedTechSection = SectionWrapper(TechSection, "tech");

  return <WrappedTechSection />;
};

export default Tech;
