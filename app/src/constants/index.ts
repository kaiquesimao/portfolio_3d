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
  internet,
  java,
  javascript,
  kotlin,
  mobile,
  pokedata,
  portfolio3d,
  postgre,
  reactjs,
  siemens,
  spring,
  tailwind,
  iloa,
  talenthub,
  threejs,
  typescript,
  videowall,
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

const projects = [
  {
    name: "project_iloa_name",
    description: "project_iloa_description",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "Java/Spring",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "pink-text-gradient",
      },
      {
        name: "Enterprise",
        color: "orange-text-gradient",
      },
    ],
    image: iloa,
    webImg: internet,
    isCaseStudy: true,
  },
  {
    name: "project_videowall_name",
    description: "project_videowall_description",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "Java/Spring",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "orange-text-gradient",
      },
    ],
    image: videowall,
    webImg: internet,
    isCaseStudy: true,
  },
  {
    name: "project_talenthub_name",
    description: "project_talenthub_description",
    tags: [
      {
        name: "SaaS",
        color: "blue-text-gradient",
      },
      {
        name: "Multi-tenant",
        color: "green-text-gradient",
      },
      {
        name: "Web",
        color: "pink-text-gradient",
      },
    ],
    image: talenthub,
    webImg: internet,
    isCaseStudy: true,
  },
  {
    name: "project_4_name",
    description: "project_4_description",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Riverpod",
        color: "green-text-gradient",
      },
    ],
    image: pokedata,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/new_pokedex_app",
    demo_link: "https://pokedata.kaique.site",
  },
  {
    name: "project_1_name",
    description: "project_1_description",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
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
    demo_link: "https://portfolio.kaique.site",
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
  projects,
  navLinks,
  languages,
};
