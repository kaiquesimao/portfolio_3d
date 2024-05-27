import {
  alura,
  android,
  angular,
  backend,
  dio,
  docker,
  freeway,
  innomotics,
  internet,
  java,
  javascript,
  kotlin,
  lanternaApp,
  mobile,
  pokedex,
  portfolio3d,
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
    name: "Postgre",
    icon: postgre,
  },
  {
    name: "Docker",
    icon: docker,
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
      "experience_2_desc_5",
    ],
  },
];

const testimonials = [
  {
    testimonial: "testimonial_1",
    name: "Sara Lee",
    designation: "testimony_designation_1",
    company: "Siemens",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "testimonial_2",
    name: "John Doe",
    designation: "testimony_designation_2",
    company: "Innomotics",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "testimonial_3",
    name: "Lisa Wang",
    designation: "testimony_designation_3",
    company: "Innomotics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "project_1_name",
    description: "project_1_description",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3d,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/portfolio_3d",
    demo_link: "https://portfolio-3d-pi.vercel.app",
  },
  {
    name: "project_2_name",
    description: "project_2_description",
    tags: [
      {
        name: "Kotlin",
        color: "blue_yellow-text-gradient",
      },
      {
        name: "AndroidStudio",
        color: "green-text-gradient",
      },
      {
        name: "Gradle",
        color: "pink-text-gradient",
      },
    ],
    image: lanternaApp,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/projetoLanterna",
    demo_link:
      "https://github.com/kaiquesimao/projetoLanterna/releases/download/v2.0/app-release-2.0.apk",
  },
  {
    name: "project_3_name",
    description: "project_3_description",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: dio,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/DioProjectReact",
    demo_link: "https://dio-project-react.vercel.app/",
  },
  {
    name: "project_4_name",
    description: "project_4_description",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: pokedex,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/InterPokedexProject",
    demo_link: "https://kaiquesimao.github.io/InterPokedexProject/",
  },
  {
    name: "project_5_name",
    description: "project_5_description",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: alura,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/Alura-Project",
    demo_link: "https://kaiquesimao.github.io/Alura-Project",
  },
  {
    name: "project_6_name",
    description: "project_6_description",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "P5Js",
        color: "blue_yellow-text-gradient",
      },
    ],
    image: freeway,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/FreeWay_Classic-Game",
    demo_link: "https://kaiquesimao.github.io/FreeWay_Classic-Game",
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
  testimonials,
  projects,
  navLinks,
  languages,
};
