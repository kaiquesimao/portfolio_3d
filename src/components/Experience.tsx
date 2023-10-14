import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className={"mt-20 flex flex-col"}>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
const Experience = SectionWrapper(ExperienceSection, "work");
export default Experience;
