import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useContext } from "react";
import MobileContext from "../contexts/MobileContext.tsx";
import { getBrowser } from "../utils/utils.ts";

const TechSection = () => {
  const isMobile = useContext(MobileContext);

  // Chrome based broswers has a bug with canvas rendering on mobile
  if (isMobile && getBrowser() === "Firefox") {
    return (
      <div className={"flex flex-row flex-wrap justify-center gap-10"}>
        {technologies.map((tech) => (
          <div className={"size-28 cursor-pointer"} key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    );
  } else if (!isMobile) {
    return (
      <div className={"flex flex-row flex-wrap justify-center gap-10"}>
        {technologies.map((tech) => (
          <div className={"size-28 cursor-pointer"} key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    );
  }
};
const Tech = SectionWrapper(TechSection, "tech");
export default Tech;
