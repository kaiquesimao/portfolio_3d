# Portfólio 3D — Kaique Simão

Portfólio pessoal de **Software Engineer** com cena 3D interativa, conteúdo bilíngue (PT/EN) e formulário de contato.

**Live:** [portfolio.kaique.site](https://portfolio.kaique.site) · **English:** [README.en.md](./README.en.md)

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| App | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS 4, Framer Motion |
| 3D | Three.js, React Three Fiber, drei |
| i18n | i18next / react-i18next (`pt`, `en`) |
| Contato | `@emailjs/nodejs` via `POST /api/contact` |
| Deploy | OpenNext + Cloudflare Workers (`wrangler`) |

Gerenciador de pacotes: **pnpm** (`packageManager` no `package.json`).

---

## Seções

A landing em `app/src/App.tsx` compõe, nesta ordem:

1. **Hero** — título, tagline e modelo 3D do desktop (`ComputerCanvas`)
2. **About** — overview e stacks (Frontend, Backend, Mobile, Cloud)
3. **Experience** — timeline profissional
4. **Tech** — ícones em esferas 3D
5. **Projects** — cases e projetos públicos
6. **Contact** — formulário com detecção de país (`ipapi.co`) para o telefone

Background estrelado (`StarsCanvas`) apenas em desktop, carregado de forma lazy/idle.

### Projetos em destaque

| Projeto | Tipo |
|---------|------|
| **iLoA** | Case study (enterprise) |
| **Videowall** | Case study (industrial / ops) |
| **TalentHub** | Case study (SaaS multi-tenant) |
| **PokeData** | App público (código + demo) |
| **Portfólio 3D** | Este repositório (código + demo) |

---

## Estrutura

```text
.
├── app/
│   ├── layout.tsx / page.tsx / globals.css
│   ├── api/contact/route.ts      # EmailJS (server-side)
│   └── src/
│       ├── App.tsx               # composição das seções
│       ├── i18n.ts
│       ├── constants/index.ts    # nav, experiences, technologies, projects
│       ├── assets/locales/       # pt.ts / en.ts
│       ├── components/           # seções + canvas/
│       ├── contexts/             # MobileContext
│       └── hoc/                  # SectionWrapper
├── public/                       # GLTFs (desktop_pc, planet) e assets estáticos
├── scripts/setup-secrets.ps1     # sync EmailJS → Worker + .dev.vars
├── wrangler.jsonc
└── package.json
```

### Nota para contribuidores (Tech / 3D)

As esferas de tecnologia usam **um único `Canvas`** com **`View` do drei** (`Ball.tsx`): cada ícone é um viewport rastreado, em vez de um canvas por bola. Isso reduz custo de WebGL; ao alterar layout ou tamanho dos slots, valide o framing das `View`s.

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
```

Para preview no runtime Workers, use `.dev.vars` (veja [`.dev.vars.example`](.dev.vars.example)) ou o script abaixo.

```bash
pnpm dev          # http://localhost:3000
pnpm lint
pnpm type-check
```

### Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Desenvolvimento Next.js |
| `pnpm build` / `pnpm start` | Build e serve Next.js |
| `pnpm preview` | Build OpenNext + preview local (Workers) |
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
| Textos PT/EN | `app/src/assets/locales/translations/pt.ts`, `en.ts` |
| Experiências, techs, projetos, nav | `app/src/constants/index.ts` |
| Ordem das seções | `app/src/App.tsx` |
| Tema / utilitários CSS | `app/globals.css`, `app/src/styles.ts` |
| Modelos 3D | `public/desktop_pc/`, `public/planet/` (ajuste em `Computers.tsx` / `Earth.tsx`) |

Idiomas: `pt` (fallback) e `en`, configurados em `app/src/i18n.ts`.

---

## Deploy

Produção: **Cloudflare Workers** via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare). Domínio: `portfolio.kaique.site` ([`wrangler.jsonc`](wrangler.jsonc)).

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

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

- **Push em `master`:** lint, type-check, build OpenNext, deploy produção
- **Pull request:** lint, type-check, build OpenNext, `wrangler versions upload` (preview `*.workers.dev`, sem afetar produção)

```bash
pnpm preview
pnpm deploy
```

---

## Qualidade

- ESLint (`eslint-config-next`) + TypeScript estrito
- Lint e type-check no CI antes do deploy
