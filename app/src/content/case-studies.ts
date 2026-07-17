import type { Locale } from "../constants/seo";

export type CaseStudyCopy = {
  summary: string;
  context: string;
  outcomes: string[];
  engineering: string[];
  note: string;
};

const caseStudies: Record<string, Record<Locale, CaseStudyCopy>> = {
  iloa: {
    pt: {
      summary:
        "Case empresarial (Innomotics): plataforma Limit of Authority que transforma aprovações e governança de projetos industriais em um fluxo digital único — no lugar de planilhas e processos espalhados entre áreas.",
      context:
        "Em projetos de grande porte, limites de autoridade e aprovações atravessam times técnicos, jurídicos, financeiros e de suporte. O desafio é dar visibilidade e rastreabilidade sem perder a rigidez que o negócio exige.",
      outcomes: [
        "Centraliza revisões, compliance e questionários em um único ambiente web corporativo",
        "Conecta áreas de suporte (como procurement e riscos) ao ciclo de decisão do projeto",
        "Reduz fragmentação operacional: menos handoff informal, mais histórico e clareza de status",
        "Autenticação empresarial (SSO) alinhada ao ecossistema Microsoft/Azure da companhia",
      ],
      engineering: [
        "Full-stack em monorepo: Vue 3 + TypeScript no frontend e Java/Spring Boot no backend",
        "Persistência com PostgreSQL e versionamento de schema; cloud Azure para execução e identidade",
        "Experiência pensada para uso intenso em escritório: formulários complexos, colaboração e geração de documentos",
        "Produto mission-critical de governança — estabilidade e clareza de fluxo pesam tanto quanto UI",
      ],
      note:
        "Case study interno: sem demo pública nem exposição de regras de negócio, dados de cliente ou detalhes de infraestrutura.",
    },
    en: {
      summary:
        "Enterprise case study (Innomotics): a Limit of Authority platform that turns industrial project approvals and governance into one digital flow — instead of spreadsheets and scattered handoffs across teams.",
      context:
        "On large projects, authority limits and approvals span technical, legal, finance, and support teams. The challenge is visibility and traceability without losing the rigor the business requires.",
      outcomes: [
        "Centralizes reviews, compliance, and questionnaires in a single corporate web environment",
        "Brings support areas (such as procurement and risk) into the project decision cycle",
        "Cuts operational fragmentation: fewer informal handoffs, clearer status and history",
        "Enterprise SSO aligned with the company’s Microsoft/Azure identity stack",
      ],
      engineering: [
        "Full-stack monorepo: Vue 3 + TypeScript on the front end and Java/Spring Boot on the back end",
        "PostgreSQL persistence with schema versioning; Azure for runtime and identity",
        "Built for heavy office use: complex forms, collaboration, and document generation",
        "Mission-critical governance product — stability and clear workflows matter as much as UI",
      ],
      note:
        "Internal case study: no public demo and no disclosure of business rules, customer data, or infrastructure details.",
    },
  },
  videowall: {
    pt: {
      summary:
        "Case empresarial (Innomotics): torre de controle (videowall) para operação industrial — painéis que mostram o que está saudável, o que pede atenção e o que exige resposta agora.",
      context:
        "Gestores e operadores precisam acompanhar plantas e logística em um só lugar. Informação atrasada ou espalhada vira reação tarde demais; o produto existe para encurtar o caminho entre sinal e ação.",
      outcomes: [
        "Dashboards operacionais de unidades industriais e visão de centro de distribuição / logística",
        "Indicadores com faixas de severidade (ex.: ideal, atenção, crítico) para leitura rápida em videowall",
        "Alertas parametrizáveis e notificações corporativas para acelerar o acionamento das equipes",
        "Gestão de ocorrências em Kanban: abrir, atender, resolver — com status visível para o time",
      ],
      engineering: [
        "Frontend Vue 3 + TypeScript com UX orientada a monitoramento contínuo",
        "Backend Java/Spring Boot, PostgreSQL e autenticação empresarial Microsoft (Entra ID / Azure AD)",
        "Arquitetura pensada para atualização periódica de indicadores e consumo por múltiplos usuários",
        "Integrações com fontes operacionais via conectores — sem expor contratos ou sistemas internos",
      ],
      note:
        "Case study interno: sem demo pública; nomes de unidades, regras de alerta e métricas de negócio permanecem confidenciais.",
    },
    en: {
      summary:
        "Enterprise case study (Innomotics): a control-tower videowall for industrial operations — dashboards that show what is healthy, what needs attention, and what needs action now.",
      context:
        "Managers and operators need plants and logistics in one place. Late or scattered information means late response; the product shortens the path from signal to action.",
      outcomes: [
        "Operational dashboards for industrial sites plus distribution / logistics visibility",
        "Severity bands (e.g. healthy, attention, critical) for fast reading on a videowall",
        "Configurable alerts and corporate notifications to speed up team response",
        "Kanban-style incident handling: open, own, resolve — with status visible to the team",
      ],
      engineering: [
        "Vue 3 + TypeScript front end tuned for continuous monitoring UX",
        "Java/Spring Boot back end, PostgreSQL, and Microsoft enterprise SSO (Entra ID / Azure AD)",
        "Designed for periodic KPI refresh and concurrent operational users",
        "Operational data via connectors — without exposing internal contracts or systems",
      ],
      note:
        "Internal case study: no public demo; site names, alert rules, and business metrics remain confidential.",
    },
  },
  talenthub: {
    pt: {
      summary:
        "Case empresarial: SaaS multi-tenant para processos internos de talentos e RH — um produto onde isolamento por cliente, escalabilidade e UX web moderna são requisitos de primeira classe.",
      context:
        "Plataformas de talentos precisam servir várias organizações no mesmo produto, com dados e fluxos separados, sem parecer um sistema legado de RH.",
      outcomes: [
        "Modelo multi-tenant pensado para operação interna e experiência consistente entre clientes",
        "Fluxos de talentos e operações de RH reunidos numa interface web contemporânea",
        "Ênfase em escalabilidade e manutenibilidade de um produto SaaS de longo prazo",
        "Case apresentado em alto nível: o valor está no tipo de problema, não em features confidenciais",
      ],
      engineering: [
        "Arquitetura SaaS multi-tenant (isolamento e governança de acesso como premissas)",
        "Entrega full-stack com foco em produto web escalável",
        "Prioridade em experiência de uso e base técnica sustentável — não em demos públicas",
      ],
      note:
        "Detalhes de produto, demos e stack específica do cliente não são públicos neste case.",
    },
    en: {
      summary:
        "Enterprise case study: multi-tenant SaaS for internal talent and HR workflows — a product where tenant isolation, scalability, and modern web UX are first-class requirements.",
      context:
        "Talent platforms must serve multiple organizations in one product, with separated data and flows, without feeling like legacy HR software.",
      outcomes: [
        "Multi-tenant model built for internal operations and a consistent experience across customers",
        "Talent and HR workflows brought together in a contemporary web UI",
        "Emphasis on scalability and long-term maintainability of a SaaS product",
        "Presented at a high level: the value is the problem type, not confidential feature lists",
      ],
      engineering: [
        "Multi-tenant SaaS architecture (isolation and access governance as defaults)",
        "Full-stack delivery focused on a scalable web product",
        "UX and a sustainable technical base over public demos",
      ],
      note:
        "Product details, demos, and client-specific stack are not public in this case study.",
    },
  },
  pokedata: {
    pt: {
      summary:
        "App Flutter (Android + Web) que transforma a Pokédex em produto real: explorar Pokémon e regiões, favoritar com conta, entrar como convidado — publicado na Play Store e em pokedata.kaique.site.",
      context:
        "Muitos demos Flutter param no protótipo. O desafio foi entregar um app mobile-first com backend Firebase, auth, dados persistidos e pipeline de produção até loja e web Wasm — sem tratar web como afterthought.",
      outcomes: [
        "Pokédex completa com regiões, favoritos e navegação pensada para mobile",
        "Autenticação Firebase (e-mail/senha; Google Sign-In no Android) e favoritos no Cloud Firestore",
        "Modo convidado (“Explorar sem conta”) para reduzir fricção na primeira visita",
        "Distribuição real: Android (Play Store) + web em domínio próprio com CI/CD",
      ],
      engineering: [
        "Flutter + Dart com Riverpod; um codebase para Android e Web",
        "Firebase Auth + Firestore; secrets e defines fora do git (dart_defines / CI secrets)",
        "Build web com Wasm multi-thread, headers COOP/COEP e SPA redirects no Cloudflare Pages",
        "GitHub Actions: analyze, testes, deploy de produção e previews por PR",
      ],
      note:
        "Projeto público: código em GitHub, demo em pokedata.kaique.site e app na Play Store.",
    },
    en: {
      summary:
        "Flutter app (Android + Web) that turns a Pokédex into a real product: explore Pokémon and regions, favorite with an account, or browse as a guest — shipped to the Play Store and pokedata.kaique.site.",
      context:
        "Many Flutter demos stop at prototypes. The challenge was shipping a mobile-first app with Firebase backend, auth, persisted data, and a production pipeline to store + Wasm web — without treating web as an afterthought.",
      outcomes: [
        "Full Pokédex with regions, favorites, and mobile-first navigation",
        "Firebase Auth (email/password; Google Sign-In on Android) and favorites in Cloud Firestore",
        "Guest mode (“Explore without an account”) to lower first-visit friction",
        "Real distribution: Android (Play Store) + web on a custom domain with CI/CD",
      ],
      engineering: [
        "Flutter + Dart with Riverpod; one codebase for Android and Web",
        "Firebase Auth + Firestore; secrets and defines kept out of git (dart_defines / CI secrets)",
        "Web build with multi-thread Wasm, COOP/COEP headers, and SPA redirects on Cloudflare Pages",
        "GitHub Actions: analyze, tests, production deploy, and per-PR previews",
      ],
      note:
        "Public project: source on GitHub, live demo at pokedata.kaique.site, and Play Store release.",
    },
  },
  "portfolio-3d": {
    pt: {
      summary:
        "Este portfólio: landing 3D em Next.js com cena interativa, conteúdo bilíngue, cases detalhados e SEO de verdade — deploy em Cloudflare Workers via OpenNext.",
      context:
        "Portfólios 3D costumam ser só efeito visual. Aqui o objetivo foi equilibrar presença (Three.js) com conteúdo indexável, performance em mobile e narrativa de engenharia que um recrutador consiga explorar.",
      outcomes: [
        "Hero 3D + seções de about, experiência, stack, projetos e contato num único fluxo",
        "i18n PT/EN com rotas `/pt` e `/en`, hreflang e metadados por locale",
        "Páginas de projeto e blog com meta própria, Open Graph e JSON-LD",
        "Formulário de contato server-side (EmailJS) e deploy edge em portfolio.kaique.site",
      ],
      engineering: [
        "Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion",
        "Three.js / React Three Fiber com lazy load, stars só em idle/desktop e um Canvas compartilhado nas esferas de tech",
        "SEO: metadataBase, OG image, robots, sitemap, manifest e structured data",
        "OpenNext + Cloudflare Workers; CI com lint, type-check e preview/prod",
      ],
      note:
        "Projeto público: você está nele. Código no GitHub e live em portfolio.kaique.site.",
    },
    en: {
      summary:
        "This portfolio: a 3D Next.js landing with an interactive scene, bilingual content, detailed case pages, and real SEO — deployed to Cloudflare Workers via OpenNext.",
      context:
        "3D portfolios often stop at visual flair. The goal here was to balance presence (Three.js) with indexable content, mobile performance, and an engineering narrative recruiters can actually explore.",
      outcomes: [
        "3D hero plus about, experience, stack, projects, and contact in one flow",
        "PT/EN i18n with `/pt` and `/en` routes, hreflang, and per-locale metadata",
        "Project and blog pages with their own meta, Open Graph, and JSON-LD",
        "Server-side contact form (EmailJS) and edge deploy at portfolio.kaique.site",
      ],
      engineering: [
        "Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion",
        "Three.js / React Three Fiber with lazy load, stars only on idle/desktop, and one shared Canvas for tech spheres",
        "SEO: metadataBase, OG image, robots, sitemap, manifest, and structured data",
        "OpenNext + Cloudflare Workers; CI with lint, type-check, and preview/prod",
      ],
      note:
        "Public project: you are on it. Source on GitHub and live at portfolio.kaique.site.",
    },
  },
};

export function getCaseStudy(
  slug: string,
  locale: Locale,
): CaseStudyCopy | undefined {
  return caseStudies[slug]?.[locale];
}
