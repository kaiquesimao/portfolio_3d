import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ExperienceType } from "../utils/types.ts";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={t(experience.date)}
      iconStyle={{
        background: experience.iconBg,
        borderRadius: "50%",
        overflow: "hidden",
      }}
      icon={
        <div
          className={
            "flex size-full items-center justify-center overflow-hidden rounded-full"
          }
        >
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={24}
            height={24}
            className={"size-3/5 object-contain"}
          />
        </div>
      }
    >
      <div>
        <h3 className={"text-2xl font-bold text-white"}>
          {t(experience.title)}
        </h3>
        <p
          className={"text-base font-semibold text-secondary"}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className={"ml-5 mt-5 list-disc space-y-2"}>
        {experience.points.map((point) => (
          <li
            key={point}
            className={"pl-1 text-sm tracking-wider text-white-100"}
          >
            {t(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

ExperienceCard.displayName = "ExperienceCard";
export default ExperienceCard;
