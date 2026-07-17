import { motion } from "framer-motion";
import Image from "next/image";
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
  isCaseStudy,
}: IProjectCard) => {
  const { t } = useTranslation();
  const hasSource = Boolean(source_code_link);
  const hasDemo = Boolean(demo_link);
  const hasLinks = hasSource || hasDemo;

  return (
    <motion.div
      variants={fadeIn("up", index * 0.5, 0.75, "spring")}
      className="flex h-full sm:w-90"
    >
      <ReactParallaxTilt
        transitionSpeed={450}
        scale={1}
        tiltMaxAngleX={isCaseStudy ? 12 : 28}
        tiltMaxAngleY={isCaseStudy ? 12 : 28}
        className={`flex h-full w-full flex-col rounded-2xl p-5 ${
          isCaseStudy
            ? "border border-[#915EFF]/30 bg-tertiary/90"
            : "bg-tertiary"
        }`}
      >
        <div className="relative h-56 w-full shrink-0">
          <Image
            src={image}
            alt={t(name)}
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            className="rounded-2xl object-cover"
          />
          {isCaseStudy ? (
            <div className="absolute left-3 top-3 rounded-md bg-[#915EFF]/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {t("case_study_badge")}
            </div>
          ) : null}
          {hasLinks ? (
            <div className="absolute inset-0 m-3 flex justify-end gap-1">
              {hasSource ? (
                <div className="black-gradient flex size-10 items-center justify-center rounded-full">
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t(name)} source code`}
                  >
                    <Image
                      src={github}
                      alt=""
                      width={40}
                      height={40}
                      className="cursor-pointer object-contain"
                    />
                  </a>
                </div>
              ) : null}
              {hasDemo ? (
                <div className="flex size-10 items-center justify-center rounded-full">
                  <a
                    href={demo_link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t(name)} live demo`}
                  >
                    <Image
                      src={webImg}
                      alt=""
                      width={40}
                      height={40}
                      className="cursor-pointer object-contain"
                    />
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="mt-5 flex min-h-0 flex-1 flex-col">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {t(name)}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
            {t(description)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-sm ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};

ProjectCard.displayName = "ProjectCard";

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
      <div className={"mt-16 flex flex-wrap items-stretch gap-7"}>
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

ProjectsSection.displayName = "ProjectsSection";

const Projects = SectionWrapper(ProjectsSection, "projects");
export default Projects;
