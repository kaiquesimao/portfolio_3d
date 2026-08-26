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
        "Pokédex moderna feita por fãs (Flutter, Android + Web): explorar Pokémon e regiões, buscar e filtrar, abrir perfis com stats, fraquezas, evolução e gritos — favoritar com conta ou explorar como convidado. Publicada na Play Store e em pokedata.kaique.site.",
      context:
        "Muitos demos Flutter param no protótipo de API. O desafio foi fechar o ciclo de um produto mobile-first: PokéAPI com cache local, auth Firebase, favoritos sincronizados, i18n PT/EN, compliance de loja e pipeline até Play Store + web Wasm — sem tratar web como afterthought.",
      outcomes: [
        "Lista completa estilo National Dex com busca rápida e filtros (tipo, geração, formas)",
        "Regiões por jogo e perfis detalhados: altura/peso, habilidades, stats, fraquezas, evolução, texto de jogo e gritos",
        "Favoritos no Cloud Firestore (conta) e modo convidado (“Explorar sem conta”) para consultas rápidas",
        "Cache Drift offline-friendly e UI bilíngue PT/EN alinhada ao texto da PokéAPI",
        "Distribuição real: Android na Play Store (com.kaiquesimao.pokedex) + web Wasm em domínio próprio",
      ],
      engineering: [
        "Flutter + Riverpod 3, go_router e arquitetura por features (data / domain / presentation)",
        "Dio → PokéAPI; Drift + connectivity_plus para cache local; JSON manual (sem codegen de serialização)",
        "Firebase Auth (e-mail/senha; Google Sign-In no Android) + Firestore; dart_defines e secrets fora do git",
        "Web Wasm multi-thread com COOP/COEP no Cloudflare Pages; Google Auth só no mobile por trade-off consciente",
        "GitHub Actions: analyze/testes, deploy web com preview por PR e release AAB para tracks da Play Store",
      ],
      note:
        "Projeto público e não oficial (PokéAPI). Código no GitHub, demo em pokedata.kaique.site e app em https://play.google.com/store/apps/details?id=com.kaiquesimao.pokedex.",
    },
    en: {
      summary:
        "Modern fan-made Pokédex (Flutter, Android + Web): browse Pokémon and regions, search and filter, open rich profiles with stats, weaknesses, evolution, and cries — favorite with an account or explore as a guest. Shipped to the Play Store and pokedata.kaique.site.",
      context:
        "Many Flutter demos stop at an API prototype. The challenge was closing the loop on a mobile-first product: PokéAPI with local cache, Firebase auth, synced favorites, PT/EN i18n, store compliance, and a pipeline to Play Store + Wasm web — without treating web as an afterthought.",
      outcomes: [
        "Full National Dex–style list with fast search and filters (type, generation, forms)",
        "Regional Pokédexes and detailed profiles: height/weight, abilities, stats, weaknesses, evolution, flavor text, and cries",
        "Favorites in Cloud Firestore (account) and guest mode (“Explore without an account”) for quick lookups",
        "Offline-friendly Drift cache and bilingual PT/EN UI aligned with PokéAPI game text",
        "Real distribution: Android on the Play Store (com.kaiquesimao.pokedex) + Wasm web on a custom domain",
      ],
      engineering: [
        "Flutter + Riverpod 3, go_router, and feature-based architecture (data / domain / presentation)",
        "Dio → PokéAPI; Drift + connectivity_plus for local cache; manual JSON (no serialization codegen)",
        "Firebase Auth (email/password; Google Sign-In on Android) + Firestore; dart_defines and secrets kept out of git",
        "Multi-thread Wasm web with COOP/COEP on Cloudflare Pages; Google Auth mobile-only by conscious tradeoff",
        "GitHub Actions: analyze/tests, web deploy with per-PR previews, and signed AAB uploads to Play tracks",
      ],
      note:
        "Public, unofficial fan project (PokéAPI). Source on GitHub, live at pokedata.kaique.site, and on Google Play: https://play.google.com/store/apps/details?id=com.kaiquesimao.pokedex.",
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
