import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const TechSection = () => {
  return (
    <div className={"flex flex-row flex-wrap justify-center gap-10"}>
      {technologies.map((tech) => (
        <div className={"size-28"} key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};
const Tech = SectionWrapper(TechSection, "tech");
export default Tech;
