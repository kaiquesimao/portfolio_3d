import { styles } from "../styles.ts";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";

interface IFeedbackCard {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: IFeedbackCard) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={"w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"}
  >
    <p className={"text-5xl font-black text-white"}>&quot;</p>
    <div className={"mt-1"}>
      <p className={"text-lg tracking-wider text-white "}>{testimonial}</p>
      <div className={"mt-7 flex items-center justify-between gap-1"}>
        <div className={"flex flex-1 flex-col"}>
          <p className={"text-base font-medium text-white"}>
            <span className={"blue-text-gradient"}>@</span> {name}
          </p>
          <p className={"mt-1 text-xs text-secondary"}>
            {designation} na empresa {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className={"h-10 w-10 rounded-full object-cover"}
        />
      </div>
    </div>
  </motion.div>
);
const Feedbacks = () => {
  return (
    <div className={"mt-12 rounded-3xl bg-black-100"}>
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>O QUE DIZEM SOBRE MIM</p>
          <h2 className={styles.sectionHeadText}>DEPOIMENTOS</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const FeedbacksSection = SectionWrapper(Feedbacks, "feedbacks");
export default FeedbacksSection;
