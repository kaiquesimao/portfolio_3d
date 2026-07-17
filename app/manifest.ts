import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "./src/constants/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Kaique",
    description:
      "Software Engineer full-stack — sistemas críticos, SaaS, cloud e web moderna.",
    start_url: "/pt",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    lang: "pt-BR",
    id: SITE_URL,
  };
}
