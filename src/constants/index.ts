import {
  backend,
  carrent,
  css,
  docker,
  figma,
  git,
  html,
  innomotics,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  siemens,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Desenvolvedor Web Frontend",
    icon: web,
  },
  {
    title: "Desenvolvedor Web Backend",
    icon: backend,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack",
    company_name: "Siemens",
    icon: siemens,
    iconBg: "#009999",
    date: "Mai 2022 - Fev 2023",
    points: [
      "Desenvolver e manter aplicações Web utilizando React, Angular e Java com Spring Framework.",
      "Implementar tradução em sistemas utilizando tecnologias como i18n",
      "Implementar comunicação com banco de dados, bem como novas colunas e/ou tabelas",
      "Colaborar com equipes multifuncionais, incluindo designers, gestores de produtos, analistas de negócio, testadores e outros programadores para criar softwares de alta qualidade.",
      "Participar em revisões de código e fornecer feedback construtivo a outros programadores.",
    ],
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack",
    company_name: "Innomotics",
    icon: innomotics,
    iconBg: "#E1F000",
    date: "Fev 2023 - Present",
    points: [
      "Desenvolver e manter aplicações Web utilizando React com Styled Components, Angular com Material-UI, Vue, Java 11 e 17 com Spring Framework.",
      "Implementar tradução em sistemas utilizando tecnologias como i18n",
      "Implementar comunicação com banco de dados, bem como novas colunas e/ou tabelas",
      "Colaborar com equipes multifuncionais, incluindo designers, gestores de produtos, analistas de negócio, testadores e outros programadores para criar softwares de alta qualidade.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
