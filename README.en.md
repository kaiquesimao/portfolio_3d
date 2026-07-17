# 3D Portfolio — Kaique Simão

Personal **Software Engineer** portfolio with an interactive 3D experience, bilingual content (PT/EN), and a contact form.

**Live:** [portfolio.kaique.site](https://portfolio.kaique.site) · **Portuguese:** [README.md](./README.md)

---

## Stack

| Layer | Technology |
|-------|------------|
| App | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS 4, Framer Motion |
| 3D | Three.js, React Three Fiber, drei |
| i18n | i18next / react-i18next (`pt`, `en`) |
| Contact | `@emailjs/nodejs` via `POST /api/contact` |
| Deploy | OpenNext + Cloudflare Workers (`wrangler`) |

Package manager: **pnpm** (`packageManager` in `package.json`).

---

## Sections

The landing page in `app/src/App.tsx` is composed in this order:

1. **Hero** — title, tagline, and 3D desktop model (`ComputerCanvas`)
2. **About** — overview and stacks (Frontend, Backend, Mobile, Cloud)
3. **Experience** — professional timeline
4. **Tech** — technology icons as 3D spheres
5. **Projects** — case studies and public projects
6. **Contact** — form with country detection (`ipapi.co`) for phone defaults

Starfield background (`StarsCanvas`) on desktop only, loaded lazily / on idle.

### Featured projects

| Project | Type |
|---------|------|
| **iLoA** | Case study (enterprise) |
| **Videowall** | Case study (industrial / ops) |
| **TalentHub** | Case study (multi-tenant SaaS) |
| **PokeData** | Public app (source + demo) |
| **3D Portfolio** | This repository (source + demo) |

---

## Structure

```text
.
├── app/
│   ├── layout.tsx / page.tsx / globals.css
│   ├── api/contact/route.ts      # EmailJS (server-side)
│   └── src/
│       ├── App.tsx               # section composition
│       ├── i18n.ts
│       ├── constants/index.ts    # nav, experiences, technologies, projects
│       ├── assets/locales/       # pt.ts / en.ts
│       ├── components/           # sections + canvas/
│       ├── contexts/             # MobileContext
│       └── hoc/                  # SectionWrapper
├── public/                       # GLTFs (desktop_pc, planet) and static assets
├── scripts/setup-secrets.ps1     # sync EmailJS → Worker + .dev.vars
├── wrangler.jsonc
└── package.json
```

### Note for contributors (Tech / 3D)

Technology spheres use a **single `Canvas`** with **drei `View`** (`Ball.tsx`): each icon is a tracked viewport instead of one canvas per ball. That keeps WebGL cost down; when changing slot layout or size, re-check `View` framing.

---

## Local setup

**Prerequisites:** Node.js 20+ (CI uses 24), pnpm.

```bash
pnpm install
```

Create `.env.local` at the repo root (required for the contact form):

```env
NEXT_EMAILJS_SERVICEID=
NEXT_EMAILJS_TEMPLATEID=
NEXT_EMAILJS_OPTIONS=
NEXT_EMAILJS_PRIVATEKEY=
```

For Workers runtime preview, use `.dev.vars` (see [`.dev.vars.example`](.dev.vars.example)) or the script below.

```bash
pnpm dev          # http://localhost:3000
pnpm lint
pnpm type-check
```

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Next.js development server |
| `pnpm build` / `pnpm start` | Next.js build and serve |
| `pnpm preview` | OpenNext build + local Workers preview |
| `pnpm deploy` | OpenNext build + Cloudflare deploy |
| `pnpm cf-typegen` | Generate Cloudflare types (`wrangler types`) |

Windows — publish EmailJS secrets to the Worker and generate `.dev.vars` from `.env.local`:

```powershell
.\scripts\setup-secrets.ps1
```

(Auth: `wrangler login` or `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` in `.cloudflare.local`.)

---

## Content and i18n

| What | Where |
|------|-------|
| PT/EN copy | `app/src/assets/locales/translations/pt.ts`, `en.ts` |
| Experiences, techs, projects, nav | `app/src/constants/index.ts` |
| Section order | `app/src/App.tsx` |
| Theme / CSS utilities | `app/globals.css`, `app/src/styles.ts` |
| 3D models | `public/desktop_pc/`, `public/planet/` (tweak in `Computers.tsx` / `Earth.tsx`) |

Languages: `pt` (fallback) and `en`, configured in `app/src/i18n.ts`.

---

## Deployment

Production: **Cloudflare Workers** via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare). Domain: `portfolio.kaique.site` ([`wrangler.jsonc`](wrangler.jsonc)).

### Worker secrets

```bash
wrangler secret put NEXT_EMAILJS_SERVICEID
wrangler secret put NEXT_EMAILJS_TEMPLATEID
wrangler secret put NEXT_EMAILJS_OPTIONS
wrangler secret put NEXT_EMAILJS_PRIVATEKEY
```

### GitHub Actions

Secrets under **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- `NEXT_EMAILJS_SERVICEID`, `NEXT_EMAILJS_TEMPLATEID`, `NEXT_EMAILJS_OPTIONS`, `NEXT_EMAILJS_PRIVATEKEY`

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

- **Push to `master`:** lint, type-check, OpenNext build, production deploy
- **Pull request:** lint, type-check, OpenNext build, `wrangler versions upload` (preview on `*.workers.dev`, does not affect production)

```bash
pnpm preview
pnpm deploy
```

---

## Quality

- ESLint (`eslint-config-next`) + strict TypeScript
- Lint and type-check in CI before deploy
