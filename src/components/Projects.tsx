import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { styles } from "../styles.ts";
import { projects } from "../constants";
import ReactParallaxTilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

interface IProjectCard {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  demo_link: string;
  webImg: string;
}
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
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ReactParallaxTilt
        // @ts-expect-error options is a valid property
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[22.5rem]"
      >
        <div className="relative h-56 w-full">
          <img
            src={image}
            alt={name}
            className="size-full rounded-2xl object-cover"
          />
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-1">
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
                  alt={name}
                  className="size-full cursor-pointer object-contain"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-secondary">{description}</p>
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>O QUE EU FIZ ATÉ AGORA</p>
        <h2 className={styles.sectionHeadText}>Projetos</h2>
      </motion.div>
      <div className={"flex w-full"}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={"mt-3 max-w-3xl text-base leading-7 text-secondary"}
        >
          Os seguintes projetos exemplificam minha habilidade em resolver
          problemas complexos, trabalhar com diferentes tecnologias e gerenciar
          projetos de forma eficaz. Cada projeto é brevemente descrito, com
          links para repositórios de código e demonstrações ao vivo.
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
