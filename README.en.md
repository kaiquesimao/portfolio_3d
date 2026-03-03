# 3D Portfolio | Kaique Simão

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img alt="Three.js" src="https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss" />
  <img alt="i18n" src="https://img.shields.io/badge/i18n-PT%20%7C%20EN-4B5563" />
</p>

A professional portfolio web app designed to showcase technical depth, career journey, and project outcomes through an immersive 3D experience.

- 🇧🇷 **Primary Portuguese version:** [README.md](./README.md)
- 🚀 **Live demo:** https://portfolio-3d-pi.vercel.app

---

## Table of Contents

1. [Project overview](#project-overview)
2. [Executive summary (HR and leadership)](#executive-summary-hr-and-leadership)
3. [Features](#features)
4. [Tech stack](#tech-stack)
5. [Architecture and structure](#architecture-and-structure)
6. [Application flow](#application-flow)
7. [Content and i18n model](#content-and-i18n-model)
8. [External services and environment](#external-services-and-environment)
9. [Run locally](#run-locally)
10. [Available scripts](#available-scripts)
11. [Customization guide](#customization-guide)
12. [Deployment](#deployment)
13. [Code quality and maintenance](#code-quality-and-maintenance)

---

## Project overview

This project was built to represent a **Full Stack professional profile** in a way that combines engineering quality and communication value.

Core goals:

- deliver a modern, interactive visual experience using WebGL/3D;
- present professional experience and technical strengths clearly;
- provide hands-on project evidence (source code + live demos);
- support multilingual communication (Portuguese and English);
- enable direct contact through a working message channel.

Instead of a static resume, the portfolio acts as a navigable and technical storytelling experience.

---

## Executive summary (HR and leadership)

### What this portfolio demonstrates

1. **End-to-end delivery mindset**: from visual frontend implementation to production-ready integrations.
2. **Technical range with focus**: React/Next.js, TypeScript, 3D rendering, i18n, responsive behavior, and third-party APIs.
3. **Communication and structure**: organized sections for career timeline, projects, testimonials, and contact.

### Skills evidenced in the implementation

- Frontend engineering with React + TypeScript.
- Interactive UI design with animation and 3D assets.
- Data-driven content organization for maintainability.
- Developer experience practices (linting, type checking, modular architecture).

---

## Features

- **3D Hero section** powered by `ComputerCanvas`.
- **Animated starfield 3D background** (`StarsCanvas`).
- **About section** presenting profile and technical domains.
- **Professional experience timeline**.
- **Technology section** with 3D icon spheres.
- **Project cards** with code repository and live demo links.
- **Testimonials** for social proof.
- **Contact form** integrated with EmailJS.
- **Country auto-detection** for better phone input defaults.
- **Dynamic bilingual support** (`pt` / `en`).
- **Responsive behavior** with mobile-aware rendering decisions.

---

## Tech stack

### Core

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3**

### Visual and motion

- **three**
- **@react-three/fiber**
- **@react-three/drei**
- **framer-motion**
- **maath**
- **react-parallax-tilt**

### Content and integration

- **react-i18next + i18next + language detector**
- **@emailjs/browser**
- **react-phone-number-input**
- **react-vertical-timeline-component**

---

## Architecture and structure

```text
.
├── app/
│   ├── layout.tsx                 # global metadata, global css imports, base language
│   ├── page.tsx                   # client entry with Suspense and app bootstrap
│   ├── globals.css                # global theme, gradients, utility visual classes
│   └── src/
│       ├── App.tsx                # main page composition (all sections)
│       ├── i18n.ts                # i18n initialization and language config
│       ├── styles.ts              # reusable style class tokens
│       ├── assets/                # icons, images, locale dictionaries
│       ├── components/
│       │   ├── canvas/            # 3D components (Three.js + React Three Fiber)
│       │   └── *.tsx              # section-level UI components
│       ├── constants/index.ts     # structured content (projects, work history, etc.)
│       ├── contexts/              # responsive context (mobile state)
│       ├── hoc/                   # SectionWrapper abstraction
│       └── utils/                 # motion helpers, types, generic utilities
├── public/
│   ├── desktop_pc/                # computer GLTF model
│   ├── planet/                    # earth GLTF model
│   └── assets/                    # static images and icons
└── package.json
```

---

## Application flow

1. `app/page.tsx` bootstraps the app as a client component with `Suspense` fallback.
2. `app/src/App.tsx` renders and orders all major sections.
3. `MobileContext` centralizes mobile-state behavior.
4. `SectionWrapper` standardizes animation, spacing, and hash anchor support.
5. `Contact.tsx` sends the form directly using `@emailjs/browser`.
6. `components/canvas/*` render the 3D scenes and decorative effects.

---

## Content and i18n model

The portfolio is intentionally **content-driven**, so updates can happen with minimal UI rewrites.

### Main content source

- `app/src/constants/index.ts`
  - navigation links
  - experiences
  - technologies
  - testimonials
  - projects

### Translation dictionaries

- `app/src/assets/locales/translations/pt.ts`
- `app/src/assets/locales/translations/en.ts`

### i18n setup

- `app/src/i18n.ts`
  - supported languages: `pt`, `en`
  - fallback language: Portuguese

### Where to edit what

| Goal                        | Primary file                               |
| --------------------------- | ------------------------------------------ |
| Update PT/EN texts          | `app/src/assets/locales/translations/*.ts` |
| Add/remove work experiences | `app/src/constants/index.ts`               |
| Update projects and links   | `app/src/constants/index.ts`               |
| Reorder page sections       | `app/src/App.tsx`                          |
| Adjust visual system        | `app/globals.css` and `app/src/styles.ts`  |

---

## External services and environment

### Environment variables (required for contact form)

Create `.env.local` at the project root:

```env
NEXT_EMAILJS_SERVICEID=
NEXT_EMAILJS_TEMPLATEID=
NEXT_EMAILJS_OPTIONS=
```

> Note: in the current state of the project, email is sent on the client with `@emailjs/browser`.

### Runtime external dependencies

| Service                     | Purpose                                                              |
| --------------------------- | -------------------------------------------------------------------- |
| EmailJS                     | Sends contact form submissions on the client with `@emailjs/browser` |
| `https://ipapi.co/json/`    | Detects country for phone input default                              |
| `https://randomuser.me/...` | Testimonial avatars                                                  |

---

## Run locally

### Prerequisites

- Node.js **20+** recommended
- pnpm (recommended), npm, yarn, or bun

### Steps

```bash
# 1) Install dependencies
pnpm install

# 2) Configure environment variables
# create .env.local (see section above)

# 3) Start development server
pnpm dev
```

Open `http://localhost:3000` in your browser.

---

## Available scripts

| Script      | Command           | Description                         |
| ----------- | ----------------- | ----------------------------------- |
| Development | `pnpm dev`        | Run local dev server                |
| Build       | `pnpm build`      | Generate production build           |
| Start       | `pnpm start`      | Run app in production mode          |
| Lint        | `pnpm lint`       | Run ESLint checks                   |
| Type-check  | `pnpm type-check` | Validate TypeScript types (no emit) |

---

## Customization guide

### 1) Update professional content

Edit arrays in `app/src/constants/index.ts`:

- `experiences`
- `projects`
- `technologies`
- `testimonials`

### 2) Update multilingual text

Edit translation files:

- `app/src/assets/locales/translations/pt.ts`
- `app/src/assets/locales/translations/en.ts`

### 3) Replace 3D models

- computer model: `public/desktop_pc/scene.gltf`
- earth model: `public/planet/scene.gltf`

You may need to adjust scale and position in:

- `app/src/components/canvas/Computers.tsx`
- `app/src/components/canvas/Earth.tsx`

---

## Deployment

Recommended target: **Vercel** (native support for Next.js App Router projects).

Minimum deployment checklist:

1. Configure environment variables in your hosting platform.
2. Run `pnpm build` locally to validate production output.
3. Deploy your main branch.

---

## Code quality and maintenance

- ESLint configured with `eslint-config-next` (`core-web-vitals` + TypeScript).
- Strict TypeScript settings enabled.
- Modular architecture by concern (components, constants, utils, i18n, context).

### Suggested next improvements

- add automated tests (unit + integration);
- add error monitoring (e.g., Sentry);
- add section-level analytics for conversion insights;
- improve progressive loading strategy for heavier 3D assets.

---

If this project inspired you or helped you, feel free to open an issue, suggest improvements, or connect with me.
