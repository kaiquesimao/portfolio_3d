import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { styles } from "../styles.ts";
import { projects } from "../constants";
import ReactParallaxTilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ReactParallaxTilt
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        options={{ max: 45, scale: 1, speed: 450 }}
        className={"w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"}
      >
        <div className={"relative h-56 w-full"}>
          <img
            src={image}
            alt={name}
            className={"h-full w-full rounded-2xl object-cover"}
          />
          <div
            /* eslint-disable-next-line tailwindcss/no-custom-classname */
            className={"card-img_hover absolute inset-0 m-3 flex justify-end"}
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={
                "black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              }
            >
              <img
                src={github}
                alt={"github"}
                className={"h-1/2 w-1/2 object-contain"}
              />
            </div>
          </div>
        </div>
        <div className={"mt-5 "}>
          <h3 className={"text-2xl font-bold text-white"}>{name}</h3>
          <p className={"mt-2 text-sm text-secondary"}>{description}</p>
        </div>
        <div className={"mt-4 flex flex-wrap gap-2"}>
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
