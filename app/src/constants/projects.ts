import {
  iloa,
  internet,
  pokedata,
  portfolio3d,
  talenthub,
  videowall,
} from "../assets";
import type { TranslationKey } from "./i18n-server";

export type ProjectRecord = {
  slug: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: { name: string; color: string }[];
  image: string;
  webImg: string;
  source_code_link?: string;
  demo_link?: string;
  isCaseStudy?: boolean;
};

export const projects: ProjectRecord[] = [
  {
    slug: "iloa",
    nameKey: "project_iloa_name",
    descriptionKey: "project_iloa_description",
    tags: [
      { name: "Vue", color: "green-text-gradient" },
      { name: "Java/Spring", color: "blue-text-gradient" },
      { name: "Azure", color: "pink-text-gradient" },
      { name: "Enterprise", color: "orange-text-gradient" },
    ],
    image: iloa,
    webImg: internet,
    isCaseStudy: true,
  },
  {
    slug: "videowall",
    nameKey: "project_videowall_name",
    descriptionKey: "project_videowall_description",
    tags: [
      { name: "Vue", color: "green-text-gradient" },
      { name: "Java/Spring", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Azure", color: "orange-text-gradient" },
    ],
    image: videowall,
    webImg: internet,
    isCaseStudy: true,
  },
  {
    slug: "talenthub",
    nameKey: "project_talenthub_name",
    descriptionKey: "project_talenthub_description",
    tags: [
      { name: "SaaS", color: "blue-text-gradient" },
      { name: "Multi-tenant", color: "green-text-gradient" },
      { name: "Web", color: "pink-text-gradient" },
    ],
    image: talenthub,
    webImg: internet,
    isCaseStudy: true,
  },
  {
    slug: "pokedata",
    nameKey: "project_4_name",
    descriptionKey: "project_4_description",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Dart", color: "blue-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
      { name: "Riverpod", color: "green-text-gradient" },
    ],
    image: pokedata,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/new_pokedex_app",
    demo_link: "https://pokedata.kaique.site",
  },
  {
    slug: "portfolio-3d",
    nameKey: "project_1_name",
    descriptionKey: "project_1_description",
    tags: [
      { name: "Next", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: portfolio3d,
    webImg: internet,
    source_code_link: "https://github.com/kaiquesimao/portfolio_3d",
    demo_link: "https://portfolio.kaique.site",
  },
];

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
