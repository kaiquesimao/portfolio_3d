import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className={"flex flex-row flex-wrap justify-center gap-10"}>
      {technologies.map((tech) => (
        <div className={"h-28 w-28"} key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
