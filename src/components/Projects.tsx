import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { styles } from "../styles.ts";
import { projects } from "../constants";
import ReactParallaxTilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { useTranslation } from "react-i18next";
import { IProjectCard } from "../utils/types.ts";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  webImg,
  source_code_link,
  demo_link,
}: IProjectCard) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ReactParallaxTilt
        transitionSpeed={450}
        scale={1}
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[22.5rem]"
      >
        <div className="relative h-56 w-full">
          <img
            src={image}
            alt={t(name)}
            className="size-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 m-3 flex justify-end gap-1">
            <div className="black-gradient flex size-10 items-center justify-center rounded-full">
              <a href={source_code_link} target="_blank" rel="noreferrer">
                <img
                  src={github}
                  alt="github"
                  className="size-full cursor-pointer object-contain"
                />
              </a>
            </div>
            <div className="flex size-10 items-center justify-center rounded-full">
              <a href={demo_link} target="_blank" rel="noreferrer">
                <img
                  src={webImg}
                  alt={t(name)}
                  className="size-full cursor-pointer object-contain"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{t(name)}</h3>
          <p className="mt-2 text-sm text-secondary">{t(description)}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};
const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("experience_sub_text")}</p>
        <h2 className={styles.sectionHeadText}>{t("projects")}</h2>
      </motion.div>
      <div className={"flex w-full"}>
        <motion.p
          variants={textVariant()}
          className={"mt-3 max-w-3xl text-base leading-7 text-secondary"}
        >
          {t("projects_description")}
        </motion.p>
      </div>
      <div className={"mt-20 flex flex-wrap gap-7"}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

const Projects = SectionWrapper(ProjectsSection, "projects");
export default Projects;
