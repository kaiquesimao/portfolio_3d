import type { Locale } from "../constants/seo";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  date: string;
  locales: Record<
    Locale,
    {
      title: string;
      description: string;
      sections: BlogSection[];
    }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mission-critical-saas",
    date: "2026-07-01",
    locales: {
      pt: {
        title: "Do ticket ao ownership: sistemas críticos e SaaS no chão de fábrica digital",
        description:
          "Lições de anos construindo software industrial 24/7 e produtos multi-tenant — onde estabilidade, SSO corporativo e domínio de negócio pesam mais que a feature da sprint.",
        sections: [
          {
            paragraphs: [
              "Minha trajetória como Software Engineer não começou em um CRUD confortável. Foi em produtos usados por times industriais e corporativos, onde uma regressão não é só um bug no Jira: é operação parada, aprovação travada ou painel cego no meio do turno.",
              "Passei de estagiário a pleno atuando full-stack (Java/Spring, Vue, Angular, React, PostgreSQL, Azure) em contextos mission-critical. Esse texto resume o que essa pressão me ensinou — sem expor regras internas, clientes finais ou detalhes confidenciais dos produtos.",
            ],
          },
          {
            heading: "Dois tipos de “crítico” que aprendi a distinguir",
            paragraphs: [
              "No dia a dia eu convivi com famílias diferentes de sistema. De um lado, ferramentas de governança de projeto: limites de autoridade, aprovações, compliance, questionários e colaboração entre áreas. O risco aqui é processuais — decisão errada, falta de rastreio, fluxo quebrado entre jurídico, financeiro e engenharia.",
              "Do outro, torres de controle operacionais: painéis, severidade visual, alertas e gestão de ocorrências. O risco é tempo real (ou quase): sinal atrasado vira resposta atrasada. São produtos distintos, mas compartilham a mesma exigência — confiança. Ninguém “espera o hotfix de segunda” quando o negócio roda contínuo.",
            ],
          },
          {
            heading: "O que muda quando o ambiente é 24/7",
            paragraphs: [
              "Feature delivery continua importando, mas deixa de ser o único score. Você passa a pensar em falha controlada, contratos claros entre camadas, autenticação empresarial (SSO / Azure AD) como premissa — não como item de backlog — e em mudanças que não derrubam quem já está logado no meio do processo.",
              "Na prática, isso significa respeitar o domínio antes da moda da stack. Modelagem relacional que acompanha o negócio, i18n de verdade em produto multilíngue, e frontend que aguenta formulários densos e dashboards de monitoramento sem parecer demo de portfólio.",
              "Também significa trabalhar com design, produto, negócio e QA no mesmo ciclo. Ownership técnico de pleno não é “fazer sozinho”: é conseguir carregar uma fatia do sistema, antecipar impacto e comunicar risco sem drama nem omissão.",
            ],
          },
          {
            heading: "SaaS multi-tenant: isolamento não é detalhe de infra",
            paragraphs: [
              "Em produtos SaaS multi-tenant, o erro clássico é tratar isolamento de dados e governança de acesso como “fase 2”. Quando o tenant B enxerga cheiro do tenant A — ou quando a UX parece um legado de RH com pele nova — você já perdeu a conversa de arquitetura.",
              "O que eu levo desse tipo de desafio: multi-tenancy e escalabilidade precisam nascer no desenho. Escalabilidade aqui não é só throughput; é manter o produto evolutivo enquanto várias organizações compartilham o mesmo codebase, com experiência consistente e limites claros.",
            ],
          },
          {
            heading: "O que um recrutador pode extrair daqui",
            paragraphs: [
              "Não estou vendendo buzzwords. Estou descrevendo o tipo de pressão sob a qual eu cresci: full-stack em Java/Spring e frontends modernos, cloud Microsoft/Azure no ecossistema corporativo, produtos onde UX ruim ou API frágil doem de verdade.",
              "Se você busca alguém que já viu sistemas críticos de perto — e que sabe o que não pode ir para um case público — esse é o perfil. Os detalhes confidenciais ficam no NDA; o julgamento de engenharia, não.",
            ],
          },
        ],
      },
      en: {
        title: "From tickets to ownership: mission-critical systems and SaaS in the digital plant floor",
        description:
          "Lessons from years building 24/7 industrial software and multi-tenant products — where stability, enterprise SSO, and domain modeling beat the sprint’s shiny feature.",
        sections: [
          {
            paragraphs: [
              "My path as a Software Engineer did not start with a cozy CRUD app. It started with products used by industrial and corporate teams, where a regression is not just a Jira bug: it is stalled operations, a blocked approval, or a blind dashboard mid-shift.",
              "I grew from intern to mid-level working full-stack (Java/Spring, Vue, Angular, React, PostgreSQL, Azure) in mission-critical contexts. This piece captures what that pressure taught me — without exposing internal rules, end customers, or confidential product details.",
            ],
          },
          {
            heading: "Two kinds of “critical” I learned to separate",
            paragraphs: [
              "Day to day I lived with different system families. On one side, project-governance tools: authority limits, approvals, compliance, questionnaires, and cross-team collaboration. The risk is procedural — wrong decisions, missing audit trails, broken handoffs across legal, finance, and engineering.",
              "On the other, operational control towers: dashboards, visual severity, alerts, and incident handling. The risk is near real time: a late signal becomes a late response. Different products, same requirement — trust. Nobody “waits for Monday’s hotfix” when the business runs continuously.",
            ],
          },
          {
            heading: "What changes in a 24/7 environment",
            paragraphs: [
              "Feature delivery still matters, but it stops being the only scoreboard. You start thinking about controlled failure, clear contracts between layers, enterprise auth (SSO / Azure AD) as a premise — not a backlog item — and changes that do not knock over someone mid-process.",
              "In practice that means respecting domain before stack fashion. Relational modeling that tracks the business, real i18n in multilingual products, and front ends that survive dense forms and monitoring dashboards without looking like a portfolio demo.",
              "It also means working with design, product, business, and QA in the same loop. Mid-level technical ownership is not “doing it alone”: it is carrying a slice of the system, anticipating impact, and communicating risk without drama or omission.",
            ],
          },
          {
            heading: "Multi-tenant SaaS: isolation is not an infra footnote",
            paragraphs: [
              "In multi-tenant SaaS, the classic mistake is treating data isolation and access governance as “phase two”. When tenant B can smell tenant A — or the UX still feels like legacy HR with a new skin — you already lost the architecture conversation.",
              "What I take from that class of problem: multi-tenancy and scalability must be born in the design. Scalability here is not only throughput; it is keeping the product evolvable while many organizations share one codebase, with a consistent experience and clear boundaries.",
            ],
          },
          {
            heading: "What a recruiter can take from this",
            paragraphs: [
              "I am not selling buzzwords. I am describing the pressure I grew under: full-stack Java/Spring and modern front ends, Microsoft/Azure in a corporate ecosystem, products where bad UX or a fragile API actually hurt.",
              "If you want someone who has seen mission-critical systems up close — and who knows what must stay out of a public case study — that is the profile. Confidential details stay under NDA; engineering judgment does not.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "portfolio-web-3d-performance",
    date: "2026-07-10",
    locales: {
      pt: {
        title: "3D que contrata: como equilibrei Three.js, SEO e performance neste portfólio",
        description:
          "O desafio de um portfólio com WebGL de verdade: impressionar sem matar LCP no mobile, sem sumir do Google e sem virar só um canvas bonito.",
        sections: [
          {
            paragraphs: [
              "Eu poderia ter feito um portfólio estático elegante. Em vez disso, quis um artefato que mostrasse o mesmo tipo de decisão que eu tomo em produto: presença visual versus orçamento de performance, conteúdo versus efeito, ego de engenharia versus o que um recrutador (e um crawler) realmente precisam.",
              "Este site — Next.js, React Three Fiber, i18n PT/EN, cases detalhados e deploy em Cloudflare Workers — é o laboratório público dessas trocas.",
            ],
          },
          {
            heading: "O problema não é “colocar 3D”. É não mentir no primeiro paint",
            paragraphs: [
              "Three.js chama atenção. Também é fácil destruir INP/LCP em telefone médio se cada seção abrir um WebGL próprio, se as estrelas do fundo competirem com o LCP, ou se o HTML útil só existir depois do JavaScript.",
              "A regra que eu usei: o primeiro viewport precisa contar quem eu sou em HTML de verdade. O 3D é reforço, não a única fonte de significado. Crawler e humano com rede ruim ainda merecem a história.",
            ],
          },
          {
            heading: "Decisões concretas que eu defendia em code review",
            paragraphs: [
              "Canvas pesado entra com dynamic import e SSR desligado onde faz sentido. Background de estrelas só em desktop e só depois de idle (requestIdleCallback) — mobile não paga o custo de um céu decorativo.",
              "Nas esferas de tecnologia, um único Canvas com View do drei em vez de N contextos WebGL. Menos GPU, menos drama de bateria, framing mais previsível.",
              "SEO não é um plugin no final: metadata por locale, rotas `/pt` e `/en`, hreflang, Open Graph, sitemap, JSON-LD e páginas de projeto com narrativa de case — porque LinkedIn share e Googlebot não executam sua cena GLTF.",
            ],
          },
          {
            heading: "Conteúdo como parte da performance de carreira",
            paragraphs: [
              "Performance web sem substância é benchmark. O outro eixo deste projeto foi transformar experiência industrial (governança, torre de controle, SaaS) e projetos públicos (Flutter, este monorepo) em páginas que um recrutador consegue ler em três minutos — com o que pode ser público e o que fica de fora por respeito a NDA.",
              "Ou seja: o 3D abre a porta; o texto e a arquitetura de informação fazem a entrevista.",
            ],
          },
          {
            heading: "Stack e entrega",
            paragraphs: [
              "Next.js 16 (App Router), React 19, TypeScript, Tailwind, Framer Motion, Three.js/R3F, i18next, OpenNext + Cloudflare Workers. Formulário de contato no server. CI com lint e type-check.",
              "O ponto não é a lista de libs. É mostrar que eu consigo cruzar frontend avançado, preocupação com Core Web Vitals e disciplina de produto/SEO no mesmo entregável — o tipo de equilíbrio que também aparece quando o “cliente” é uma operação industrial, só que aqui o deploy é público.",
            ],
          },
        ],
      },
      en: {
        title: "3D that gets you hired: balancing Three.js, SEO, and performance in this portfolio",
        description:
          "The challenge of a real WebGL portfolio: impress without killing LCP on mobile, without disappearing from Google, and without becoming just a pretty canvas.",
        sections: [
          {
            paragraphs: [
              "I could have shipped an elegant static portfolio. Instead I wanted an artifact that shows the same kind of decisions I make in product work: visual presence versus performance budget, content versus effect, engineering ego versus what a recruiter (and a crawler) actually need.",
              "This site — Next.js, React Three Fiber, PT/EN i18n, detailed case pages, and Cloudflare Workers deploy — is the public lab for those tradeoffs.",
            ],
          },
          {
            heading: "The problem is not “adding 3D”. It is not lying on first paint",
            paragraphs: [
              "Three.js gets attention. It is also easy to destroy INP/LCP on a mid-range phone if every section opens its own WebGL context, if background stars compete with LCP, or if useful HTML only appears after JavaScript.",
              "The rule I used: the first viewport must explain who I am in real HTML. 3D is reinforcement, not the only source of meaning. Crawlers and humans on bad networks still deserve the story.",
            ],
          },
          {
            heading: "Concrete decisions I would defend in code review",
            paragraphs: [
              "Heavy canvases load via dynamic import with SSR off where it matters. Starfield background only on desktop and only after idle (requestIdleCallback) — mobile should not pay for decorative sky.",
              "For tech spheres, one shared Canvas with drei Views instead of N WebGL contexts. Less GPU, less battery drama, more predictable framing.",
              "SEO is not a plugin at the end: per-locale metadata, `/pt` and `/en` routes, hreflang, Open Graph, sitemap, JSON-LD, and project pages with case narrative — because LinkedIn shares and Googlebot will not run your GLTF scene.",
            ],
          },
          {
            heading: "Content as career performance",
            paragraphs: [
              "Web performance without substance is a benchmark. The other axis of this project was turning industrial experience (governance, control tower, SaaS) and public work (Flutter, this monorepo) into pages a recruiter can read in three minutes — with what can be public and what stays out of respect for NDAs.",
              "In other words: 3D opens the door; writing and information architecture get you the interview.",
            ],
          },
          {
            heading: "Stack and delivery",
            paragraphs: [
              "Next.js 16 (App Router), React 19, TypeScript, Tailwind, Framer Motion, Three.js/R3F, i18next, OpenNext + Cloudflare Workers. Server-side contact form. CI with lint and type-check.",
              "The point is not the library list. It is showing I can cross advanced front-end work, Core Web Vitals care, and product/SEO discipline in one deliverable — the same balance that shows up when the “customer” is an industrial operation, except here the deploy is public.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "flutter-production-pokedata",
    date: "2026-07-15",
    locales: {
      pt: {
        title: "Levar Flutter a sério: da ideia à Play Store e à web Wasm",
        description:
          "O que aprendi publicando o PokeData de verdade — Android, Firebase, Cloudflare Pages, CI/CD e os trade-offs feios que tutorial não mostra.",
        sections: [
          {
            paragraphs: [
              "Projeto pessoal também revela engenharia. O PokeData nasceu como Pokédex, mas o desafio que me interessava não era “consumir uma API de Pokémon”: era fechar o ciclo de um produto mobile-first com backend, auth, persistência, loja e web em produção.",
              "Código aberto, demo em pokedata.kaique.site, app na Play Store. Abaixo, o que doeu de verdade — e o que eu repetiria.",
            ],
          },
          {
            heading: "Um codebase, duas superfícies hostis",
            paragraphs: [
              "Flutter brilha no discurso de multiplataforma. Na prática, Android e Web discordam em auth, headers de segurança, deep links e no custo de Wasm. Eu quis um app que funcionasse bem com o polegar e ainda assim sobrevivesse no browser sem ser um afterthought.",
              "Riverpod para estado, Firebase Auth + Firestore para identidade e favoritos, modo convidado para reduzir fricção. Google Sign-In no mobile; na web, e-mail/senha — porque Wasm multi-thread com COOP/COEP não combina com o helper de Google Auth do Firebase. Isso não é desculpa: é trade-off documentado e consciente.",
            ],
          },
          {
            heading: "Produção não é flutter run",
            paragraphs: [
              "Secrets fora do git (dart_defines, CI secrets). App Bundle com signing de release. Domínio custom no Cloudflare Pages com redirects de SPA e headers pensados para SharedArrayBuffer. Pipeline que roda analyze e testes em todo push, deploy de produção no master e preview por PR.",
              "Cada um desses itens é chato. Juntos, são a diferença entre “tenho um projeto Flutter no GitHub” e “eu opero um app”.",
            ],
          },
          {
            heading: "Por que isso importa na minha narrativa profissional",
            paragraphs: [
              "No trabalho eu vivo Java/Spring, Vue e Azure em sistemas industriais. No PokeData eu provei o outro braço: mobile híbrido, Firebase/GCP, Cloudflare e disciplina de release sem time de plataforma me segurando a mão.",
              "Recrutador que lê só o cargo vê “full-stack industrial”. Quem abre o PokeData vê alguém que também entrega ponta a ponta quando o produto é meu — inclusive as partes sem glamour.",
            ],
          },
        ],
      },
      en: {
        title: "Taking Flutter seriously: from idea to Play Store and Wasm web",
        description:
          "What I learned shipping PokeData for real — Android, Firebase, Cloudflare Pages, CI/CD, and the ugly tradeoffs tutorials skip.",
        sections: [
          {
            paragraphs: [
              "Side projects reveal engineering too. PokeData started as a Pokédex, but the challenge I cared about was not “call a Pokémon API”: it was closing the loop on a mobile-first product with backend, auth, persistence, store, and production web.",
              "Open source, live at pokedata.kaique.site, on the Play Store. Below is what actually hurt — and what I would repeat.",
            ],
          },
          {
            heading: "One codebase, two hostile surfaces",
            paragraphs: [
              "Flutter shines in multiplatform slides. In practice Android and Web disagree on auth, security headers, deep links, and Wasm cost. I wanted an app that felt right under a thumb and still survived in the browser without being an afterthought.",
              "Riverpod for state, Firebase Auth + Firestore for identity and favorites, guest mode to cut friction. Google Sign-In on mobile; email/password on web — because multi-thread Wasm with COOP/COEP does not play nice with Firebase’s Google Auth helpers. That is not an excuse: it is a documented, conscious tradeoff.",
            ],
          },
          {
            heading: "Production is not flutter run",
            paragraphs: [
              "Secrets out of git (dart_defines, CI secrets). Release-signed App Bundle. Custom domain on Cloudflare Pages with SPA redirects and headers aimed at SharedArrayBuffer. A pipeline that runs analyze and tests on every push, production deploy on master, and per-PR previews.",
              "Each item is boring. Together they are the difference between “I have a Flutter repo on GitHub” and “I operate an app”.",
            ],
          },
          {
            heading: "Why this belongs in my professional story",
            paragraphs: [
              "At work I live in Java/Spring, Vue, and Azure on industrial systems. With PokeData I proved the other arm: hybrid mobile, Firebase/GCP, Cloudflare, and release discipline without a platform team holding my hand.",
              "A recruiter who only reads the job title sees “industrial full-stack”. Someone who opens PokeData sees a person who also ships end-to-end when the product is mine — including the unglamorous parts.",
            ],
          },
        ],
      },
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
