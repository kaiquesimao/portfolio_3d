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
    testimonial:
      "Eu não achei que seria possível fazer um site 3D tão bonito, mas o Kaique provou que eu estava errada.",
    name: "Sara Lee",
    designation: "Gerente de projetos",
    company: "Siemens",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca vi um desenvolvedor que se preocupa tanto com qualidade como o Kaique.",
    name: "Chris Brown",
    designation: "Analista de requisitos",
    company: "Innomotics",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Kaique é um cara que sempre está disposto a ajudar os outros.",
    name: "Lisa Wang",
    designation: "Desenvolvedora Full Stack",
    company: "Innomotics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio 3D",
    description:
      "Aplicação web em 3D de portfólio que apresenta meus projetos, trajetória profissional e habilidades técnicas de forma interativa e envolvente.",
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
    name: "App Lanterna",
    description:
      "Aplicativo Android desenvolvido em Kotlin, com função de ligar e desligar a lanterna/flash do smartphone. O intuito deste projeto foi entender a comunicação com o hardware do dispositivo.",
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
    name: "interface DIO",
    description:
      "Aplicação Web criada como desafio do bootcamp de React do banco Inter. Recriação das páginas Home, Login e Feed da plataforma Digital Innovation One.",
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
    name: "Pokedéx",
    description:
      "Aplicação Web criada como desafio do bootcamp do banco Inter. É uma Pokedex criada puramente com o trio HTML, CSS e Javascript.",
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
    name: "Barbearia Alura",
    description:
      "Aplicação Web criada como desafio da trilha de desenvolvimento web da Alura. Uma barbearia com as páginas Home, Serviços e Contato.",
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
    name: "FreeWay Game",
    description:
      "Aplicação/jogo Web criado como desafio da trilha de desenvolvimento web da Alura. O jogo consiste em tentar atravessar a vaquinha na rodovia.",
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
