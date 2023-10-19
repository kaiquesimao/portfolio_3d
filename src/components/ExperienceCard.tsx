import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface ExperienceType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}
const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={"flex h-full w-full items-center justify-center"}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={"h-[60%] w-[60%] object-contain"}
          />
        </div>
      }
    >
      <div>
        <h3 className={"text-2xl font-bold text-white"}>{experience.title}</h3>
        <p
          className={"text text-base font-semibold text-secondary"}
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
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
