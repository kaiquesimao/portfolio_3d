# Portfólio 3D — Kaique Simão

Portfólio pessoal de **Software Engineer** com cena 3D interativa, conteúdo bilíngue (PT/EN), páginas de projeto, blog, SEO e formulário de contato.

**Live:** [portfolio.kaique.site](https://portfolio.kaique.site) · **English:** [README.en.md](./README.en.md)

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| App | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS 4, Framer Motion |
| 3D | Three.js, React Three Fiber, drei |
| i18n | i18next / react-i18next + rotas `/pt` e `/en` |
| SEO | Metadata API, OG image, robots, sitemap, JSON-LD, `llms.txt` |
| Contato | `@emailjs/nodejs` via `POST /api/contact` |
| Deploy | OpenNext + Cloudflare Workers (`wrangler`) |

Gerenciador de pacotes: **pnpm** (`packageManager` no `package.json`).

---

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Redireciona para `/pt` ou `/en` (Accept-Language) via `middleware.ts` |
| `/pt`, `/en` | Landing (hero, about, experience, tech, projects, contact) |
| `/[locale]/projects/[slug]` | Página de projeto / case study |
| `/[locale]/blog` | Índice do blog |
| `/[locale]/blog/[slug]` | Post do blog |
| `/robots.txt`, `/sitemap.xml` | SEO |
| `/opengraph-image` | Preview social (OG/Twitter) |
| `/llms.txt` | Mapa do site para crawlers de IA |
| `/manifest.webmanifest` | PWA manifest |
| `/api/contact` | API de contato (não indexável) |

**Slugs de projeto:** `iloa`, `videowall`, `talenthub`, `pokedata`, `portfolio-3d`.

> **Cloudflare / OpenNext:** use `middleware.ts` (Edge), não `proxy.ts`. O adapter ainda não suporta o runtime Node do `proxy.ts` no build.

---

## Seções da home

A landing em `app/src/App.tsx` compõe, nesta ordem:

1. **Hero** — título, tagline e modelo 3D do desktop (`ComputerCanvas`; no mobile o WebGL é adiado para favorecer LCP)
2. **About** — overview e stacks (Frontend, Backend, Mobile, Cloud)
3. **Experience** — timeline profissional
4. **Tech** — esferas 3D no desktop; ícones estáticos no mobile
5. **Projects** — cards clicáveis → páginas de case / projeto
6. **Contact** — formulário com detecção de país (`ipapi.co`) para o telefone

Background estrelado (`StarsCanvas`) apenas em desktop, carregado de forma lazy/idle.

### Projetos em destaque

| Projeto | Tipo | Página |
|---------|------|--------|
| **iLoA** | Case study (enterprise) | `/pt/projects/iloa` |
| **Videowall** | Case study (industrial / ops) | `/pt/projects/videowall` |
| **TalentHub** | Case study (SaaS multi-tenant) | `/pt/projects/talenthub` |
| **PokeData** | App público (código + demo) | `/pt/projects/pokedata` |
| **Portfólio 3D** | Este repositório (código + demo) | `/pt/projects/portfolio-3d` |

Cases empresariais descrevem domínio e engenharia **sem** demos públicas nem detalhes confidenciais.

### Blog

Posts em `app/src/content/blog.ts` (PT/EN), por exemplo:

- Sistemas críticos / SaaS na prática
- 3D, SEO e performance neste portfólio
- Flutter em produção (PokeData)

---

## SEO

| Recurso | Onde |
|---------|------|
| `metadataBase`, canonical, hreflang, OG/Twitter | `app/src/constants/seo.ts`, `metadata.ts`, `app/[locale]/layout.tsx` |
| Imagem OG | `app/opengraph-image.tsx` |
| JSON-LD (Person, WebSite, ItemList) | `app/src/components/JsonLd.tsx` |
| JSON-LD por projeto / post | páginas em `app/[locale]/projects/`, `blog/` |
| robots / sitemap | `app/robots.ts`, `app/sitemap.ts` |
| Manifest / apple icon | `app/manifest.ts`, `icons` em `app/layout.tsx` |
| llms.txt | `public/llms.txt` |

Opcional no build (Search Console):

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

---

## Estrutura

```text
.
├── app/
│   ├── layout.tsx                 # root: font, icons, verification
│   ├── [locale]/
│   │   ├── layout.tsx             # i18n sync, Navbar, JsonLd, metadata
│   │   ├── page.tsx               # home
│   │   ├── projects/[slug]/       # cases / projetos
│   │   └── blog/                  # índice + [slug]
│   ├── api/contact/route.ts
│   ├── opengraph-image.tsx
│   ├── robots.ts / sitemap.ts / manifest.ts
│   └── src/
│       ├── App.tsx
│       ├── i18n.ts
│       ├── constants/             # seo, projects, metadata, index
│       ├── content/               # blog.ts, case-studies.ts
│       ├── components/
│       ├── contexts/
│       └── hoc/
├── middleware.ts                  # locale redirect (Edge — OpenNext/CF)
├── public/                        # GLTFs, assets, llms.txt, favicon/logo
├── scripts/setup-secrets.ps1
├── wrangler.jsonc
└── package.json
```

### Nota para contribuidores (Tech / 3D)

- Desktop: esferas com **um único `Canvas`** + **`View` do drei** (`Ball.tsx`).
- Mobile: ícones estáticos (sem WebGL) para CWV; PC 3D do hero só após idle.

---

## Setup local

**Pré-requisitos:** Node.js 20+ (CI usa 24), pnpm.

```bash
pnpm install
```

Crie `.env.local` na raiz (necessário para o formulário de contato):

```env
NEXT_EMAILJS_SERVICEID=
NEXT_EMAILJS_TEMPLATEID=
NEXT_EMAILJS_OPTIONS=
NEXT_EMAILJS_PRIVATEKEY=
# opcional:
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

Para preview no runtime Workers, use `.dev.vars` (veja [`.dev.vars.example`](.dev.vars.example)) ou o script abaixo.

```bash
pnpm dev          # http://localhost:3000 → redireciona para /pt ou /en
pnpm lint
pnpm type-check
```

### Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Desenvolvimento Next.js |
| `pnpm build` / `pnpm start` | Build e serve Next.js |
| `pnpm preview` | Build OpenNext + preview local (Workers; preferir WSL no Windows) |
| `pnpm deploy` | Build OpenNext + deploy Cloudflare |
| `pnpm cf-typegen` | Gera tipos Cloudflare (`wrangler types`) |

Windows — publicar secrets do EmailJS no Worker e gerar `.dev.vars` a partir de `.env.local`:

```powershell
.\scripts\setup-secrets.ps1
```

(Auth: `wrangler login` ou `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` em `.cloudflare.local`.)

---

## Conteúdo e i18n

| O quê | Onde |
|-------|------|
| Textos UI PT/EN | `app/src/assets/locales/translations/pt.ts`, `en.ts` |
| Nav, experiences, techs | `app/src/constants/index.ts` |
| Catálogo de projetos (slugs) | `app/src/constants/projects.ts` |
| Copy longa dos cases | `app/src/content/case-studies.ts` |
| Posts do blog | `app/src/content/blog.ts` |
| Constantes SEO | `app/src/constants/seo.ts` |
| Ordem das seções | `app/src/App.tsx` |
| Modelos 3D | `public/desktop_pc/`, `public/planet/` |

Idiomas: `pt` (padrão) e `en`. Toggle na Navbar troca a URL (`/pt/...` ↔ `/en/...`).

---

## Deploy

Produção: **Cloudflare Workers** via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare). Domínio: `portfolio.kaique.site` ([`wrangler.jsonc`](wrangler.jsonc)).

### Cloudflare (zona) — recomendações

- **Rocket Loader:** Off  
- **Email Obfuscation:** Off  
- Evitar Page Rule “Cache Everything” em HTML  
- SSL **Full (strict)**; bots verificados liberados se Bot Fight estiver ativo  

### Secrets do Worker

```bash
wrangler secret put NEXT_EMAILJS_SERVICEID
wrangler secret put NEXT_EMAILJS_TEMPLATEID
wrangler secret put NEXT_EMAILJS_OPTIONS
wrangler secret put NEXT_EMAILJS_PRIVATEKEY
```

### GitHub Actions

Secrets em **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- `NEXT_EMAILJS_SERVICEID`, `NEXT_EMAILJS_TEMPLATEID`, `NEXT_EMAILJS_OPTIONS`, `NEXT_EMAILJS_PRIVATEKEY`
- Opcional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (precisa estar disponível no **build**)

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

- **Push em `master`:** lint, type-check, build OpenNext, deploy produção
- **Pull request:** lint, type-check, build OpenNext, `wrangler versions upload` (preview `*.workers.dev`)

Após o deploy, confira `/robots.txt`, `/sitemap.xml`, `/llms.txt` e envie o sitemap no Search Console.

```bash
pnpm preview
pnpm deploy
```

---

## Qualidade

- ESLint (`eslint-config-next`) + TypeScript estrito
- Lint e type-check no CI antes do deploy
