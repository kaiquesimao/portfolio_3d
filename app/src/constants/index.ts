import {
  android,
  angular,
  aws,
  azure,
  backend,
  cloud,
  cloudflare,
  docker,
  flutter,
  gcp,
  innomotics,
  java,
  javascript,
  kotlin,
  mobile,
  postgre,
  reactjs,
  siemens,
  spring,
  tailwind,
  threejs,
  typescript,
  vue,
  web,
} from "../assets";


const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "work",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const devStacks = [
  {
    title: "Frontend",
    icon: web,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Mobile",
    icon: mobile,
  },
  {
    title: "Cloud",
    icon: cloud,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Framework",
    icon: spring,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "Cloudflare",
    icon: cloudflare,
  },
];

const experiences = [
  {
    title: "experience_1",
    company_name: "Innomotics",
    icon: innomotics,
    iconBg: "#E1F000",
    date: "experience_1_date",
    points: [
      "experience_1_desc_1",
      "experience_1_desc_2",
      "experience_1_desc_3",
      "experience_1_desc_4",
    ],
  },
  {
    title: "experience_2",
    company_name: "Siemens",
    icon: siemens,
    iconBg: "#009999",
    date: "experience_2_date",
    points: [
      "experience_2_desc_1",
      "experience_2_desc_2",
      "experience_2_desc_3",
      "experience_2_desc_4",
    ],
  },
];

const languages = {
  english: {
    nativeName: "English",
    code: "en",
  },
  portuguese: {
    nativeName: "Português",
    code: "pt",
  },
};

export {
  devStacks,
  technologies,
  experiences,
  navLinks,
  languages,
};

export {projects} from "./projects";