import { styles } from "../styles.ts";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.ts";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";
import { IFeedbackCard } from "../utils/types.ts";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: IFeedbackCard) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={"w-full rounded-3xl bg-black-200 p-10 xs:w-80"}
    >
      <p className={"text-5xl font-black text-white"}>&quot;</p>
      <div className={"mt-1"}>
        <p className={"text-lg tracking-wider text-white "}>{t(testimonial)}</p>
        <div className={"mt-7 flex items-center justify-between gap-1"}>
          <div className={"flex flex-1 flex-col"}>
            <p className={"text-base font-medium text-white"}>
              <span className={"blue-text-gradient"}>@</span> {name}
            </p>
            <p className={"mt-1 text-xs text-secondary"}>
              {t(designation)} {t("on_company")} {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className={"size-10 rounded-full object-cover"}
          />
        </div>
      </div>
    </motion.div>
  );
};

FeedbackCard.displayName = "FeedbackCard";

const Feedbacks = () => {
  const { t } = useTranslation();
  return (
    <div className={"mt-12 rounded-3xl bg-black-100"}>
      <div className={`${styles.padding} min-h-80 rounded-2xl bg-tertiary`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("testimonials_sub_text")}</p>
          <h2 className={styles.sectionHeadText}>{t("testimonials")}</h2>
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

Feedbacks.displayName = "Feedbacks";

const FeedbacksSection = SectionWrapper(Feedbacks, "feedbacks");
export default FeedbacksSection;
