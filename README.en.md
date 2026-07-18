# 3D Portfolio — Kaique Simão

Personal **Software Engineer** portfolio with an interactive 3D scene, bilingual content (PT/EN), project pages, blog, SEO, and a contact form.

**Live:** [portfolio.kaique.site](https://portfolio.kaique.site) · **Portuguese:** [README.md](./README.md)

---

## Stack

| Layer | Technology |
|-------|------------|
| App | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS 4, Framer Motion |
| 3D | Three.js, React Three Fiber, drei |
| i18n | i18next / react-i18next + `/pt` and `/en` routes |
| SEO | Metadata API, OG image, robots, sitemap, JSON-LD, `llms.txt` |
| Contact | `@emailjs/nodejs` via `POST /api/contact` |
| Deploy | OpenNext + Cloudflare Workers (`wrangler`) |

Package manager: **pnpm** (`packageManager` in `package.json`).

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/pt` or `/en` (Accept-Language) via `middleware.ts` |
| `/pt`, `/en` | Landing (hero, about, experience, tech, projects, contact) |
| `/[locale]/projects/[slug]` | Project / case-study page |
| `/[locale]/blog` | Blog index |
| `/[locale]/blog/[slug]` | Blog post |
| `/robots.txt`, `/sitemap.xml` | SEO |
| `/opengraph-image` | Social preview (OG/Twitter) |
| `/llms.txt` | Site map for AI crawlers |
| `/manifest.webmanifest` | PWA manifest |
| `/api/contact` | Contact API (not indexed as a page) |

**Project slugs:** `iloa`, `videowall`, `talenthub`, `pokedata`, `portfolio-3d`.

> **Cloudflare / OpenNext:** keep `middleware.ts` (Edge), not `proxy.ts`. The adapter does not yet support Next 16’s Node `proxy.ts` at build time.

---

## Home sections

The landing page in `app/src/App.tsx` is composed in this order:

1. **Hero** — title, tagline, and 3D desktop model (`ComputerCanvas`; on mobile WebGL is deferred for better LCP)
2. **About** — overview and stacks (Frontend, Backend, Mobile, Cloud)
3. **Experience** — professional timeline
4. **Tech** — 3D spheres on desktop; static icons on mobile
5. **Projects** — clickable cards → case / project pages
6. **Contact** — form with country detection (`ipapi.co`) for phone defaults

Starfield background (`StarsCanvas`) on desktop only, loaded lazily / on idle.

### Featured projects

| Project | Type | Page |
|---------|------|------|
| **iLoA** | Case study (enterprise) | `/en/projects/iloa` |
| **Videowall** | Case study (industrial / ops) | `/en/projects/videowall` |
| **TalentHub** | Case study (multi-tenant SaaS) | `/en/projects/talenthub` |
| **PokeData** | Public app (source + demo) | `/en/projects/pokedata` |
| **3D Portfolio** | This repository (source + demo) | `/en/projects/portfolio-3d` |

Enterprise cases describe domain and engineering **without** public demos or confidential details.

### Blog

Posts live in `app/src/content/blog.ts` (PT/EN), for example:

- Mission-critical systems / SaaS in practice
- 3D, SEO, and performance in this portfolio
- Shipping Flutter to production (PokeData)

---

## SEO

| Feature | Where |
|---------|--------|
| `metadataBase`, canonical, hreflang, OG/Twitter | `app/src/constants/seo.ts`, `metadata.ts`, `app/[locale]/layout.tsx` |
| OG image | `app/opengraph-image.tsx` |
| JSON-LD (Person, WebSite, ItemList) | `app/src/components/JsonLd.tsx` |
| Per-project / post JSON-LD | pages under `app/[locale]/projects/`, `blog/` |
| robots / sitemap | `app/robots.ts`, `app/sitemap.ts` |
| Manifest / apple icon | `app/manifest.ts`, `icons` in `app/layout.tsx` |
| llms.txt | `public/llms.txt` |

Optional at build time (Search Console):

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

---

## Structure

```text
.
├── app/
│   ├── layout.tsx                 # root: font, icons, verification
│   ├── [locale]/
│   │   ├── layout.tsx             # i18n sync, Navbar, JsonLd, metadata
│   │   ├── page.tsx               # home
│   │   ├── projects/[slug]/       # cases / projects
│   │   └── blog/                  # index + [slug]
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

### Note for contributors (Tech / 3D)

- Desktop: technology spheres use a **single `Canvas`** with **drei `View`** (`Ball.tsx`).
- Mobile: static icons (no WebGL) for CWV; hero PC canvas mounts after idle.

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
# optional:
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

For Workers runtime preview, use `.dev.vars` (see [`.dev.vars.example`](.dev.vars.example)) or the script below.

```bash
pnpm dev          # http://localhost:3000 → redirects to /pt or /en
pnpm lint
pnpm type-check
```

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Next.js development server |
| `pnpm build` / `pnpm start` | Next.js build and serve |
| `pnpm preview` | OpenNext build + local Workers preview (prefer WSL on Windows) |
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
| UI copy PT/EN | `app/src/assets/locales/translations/pt.ts`, `en.ts` |
| Nav, experiences, techs | `app/src/constants/index.ts` |
| Project catalog (slugs) | `app/src/constants/projects.ts` |
| Long-form case copy | `app/src/content/case-studies.ts` |
| Blog posts | `app/src/content/blog.ts` |
| SEO constants | `app/src/constants/seo.ts` |
| Section order | `app/src/App.tsx` |
| 3D models | `public/desktop_pc/`, `public/planet/` |

Languages: `pt` (default) and `en`. The Navbar toggle switches the URL (`/pt/...` ↔ `/en/...`).

---

## Deployment

Production: **Cloudflare Workers** via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare). Domain: `portfolio.kaique.site` ([`wrangler.jsonc`](wrangler.jsonc)).

### Cloudflare (zone) — recommendations

- **Rocket Loader:** Off  
- **Email Obfuscation:** Off  
- Avoid “Cache Everything” page rules on HTML  
- SSL **Full (strict)**; allow verified bots if Bot Fight is enabled  

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
- Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (must be available at **build** time)

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

- **Push to `master`:** lint, type-check, OpenNext build, production deploy
- **Pull request:** lint, type-check, OpenNext build, `wrangler versions upload` (preview on `*.workers.dev`)

After deploy, check `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and submit the sitemap in Search Console.

```bash
pnpm preview
pnpm deploy
```

---

## Quality

- ESLint (`eslint-config-next`) + strict TypeScript
- Lint and type-check in CI before deploy
