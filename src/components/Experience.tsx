import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("experience_sub_text")}</p>
        <h2 className={styles.sectionHeadText}>
          {t("professional_experience")}
        </h2>
      </motion.div>
      <div className={"mt-20 flex flex-col"}>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.company_name}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

ExperienceSection.displayName = "ExperienceSection";

const Experience = SectionWrapper(ExperienceSection, "work");
export default Experience;
