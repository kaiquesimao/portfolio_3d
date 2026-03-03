# Portfólio 3D | Kaique Simão

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img alt="Three.js" src="https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss" />
  <img alt="i18n" src="https://img.shields.io/badge/i18n-PT%20%7C%20EN-4B5563" />
</p>

Aplicação de portfólio profissional com experiência visual 3D, narrativa de trajetória técnica e canal direto de contato para oportunidades.

- 🌍 **Versão em inglês:** [README.en.md](./README.en.md)
- 🚀 **Demo:** https://portfolio-3d-pi.vercel.app

---

## Sumário

1. [Visão do projeto](#visão-do-projeto)
2. [Resumo executivo (RH e liderança)](#resumo-executivo-rh-e-liderança)
3. [Funcionalidades](#funcionalidades)
4. [Stack tecnológica](#stack-tecnológica)
5. [Arquitetura e estrutura](#arquitetura-e-estrutura)
6. [Fluxo da aplicação](#fluxo-da-aplicação)
7. [Dados, conteúdo e i18n](#dados-conteúdo-e-i18n)
8. [Serviços externos e ambiente](#serviços-externos-e-ambiente)
9. [Como rodar localmente](#como-rodar-localmente)
10. [Scripts disponíveis](#scripts-disponíveis)
11. [Guia de customização](#guia-de-customização)
12. [Deploy](#deploy)
13. [Qualidade e manutenção](#qualidade-e-manutenção)

---

## Visão do projeto

Este projeto foi desenvolvido para representar, de forma técnica e estratégica, um perfil **Full Stack** com:

- apresentação visual moderna (WebGL/3D);
- comunicação clara de experiência profissional;
- projetos com links para código e demonstração;
- suporte bilíngue (português e inglês);
- contato direto via formulário integrado ao EmailJS.

Em vez de um currículo estático, a proposta é uma experiência navegável que combina storytelling de carreira e execução técnica.

---

## Resumo executivo (RH e liderança)

### O que este portfólio demonstra

1. **Capacidade de entrega ponta a ponta**: frontend interativo, integração com serviços externos e atenção à experiência do usuário.
2. **Amplitude técnica real**: frontend (React/Next), visual 3D (Three.js), internacionalização, responsividade e integração de contato.
3. **Comunicação de valor**: histórico profissional, tecnologias, projetos e recomendações em uma narrativa única.

### Competências evidenciadas

- Engenharia de frontend com React + TypeScript.
- Criação de interfaces interativas com animações e elementos 3D.
- Organização de conteúdo orientada a dados (constants + traduções).
- Boas práticas de DX: lint, type-check, estrutura modular e separação por domínio.

---

## Funcionalidades

- **Hero com cena 3D** de computador (`ComputerCanvas`).
- **Background estrelado 3D** em toda a aplicação (`StarsCanvas`).
- **Seção Sobre** com foco em stack e perfil técnico.
- **Timeline de experiência profissional**.
- **Seção de tecnologias** com ícones em esfera 3D.
- **Grid de projetos** com links para código fonte e demo.
- **Depoimentos** para reforço de credibilidade.
- **Formulário de contato** com envio via EmailJS.
- **Detecção de país** (IP) para facilitar preenchimento do telefone.
- **Internacionalização** PT/EN com troca dinâmica de idioma.
- **Layout responsivo** com comportamento específico para mobile.

---

## Stack tecnológica

### Core

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3**

### Experiência visual e animações

- **three**
- **@react-three/fiber**
- **@react-three/drei**
- **framer-motion**
- **maath**
- **react-parallax-tilt**

### Conteúdo e integração

- **react-i18next + i18next + language detector**
- **@emailjs/browser**
- **react-phone-number-input**
- **react-vertical-timeline-component**

---

## Arquitetura e estrutura

```text
.
├── app/
│   ├── layout.tsx                 # metadata global, css global, idioma base
│   ├── page.tsx                   # entry client-side com Suspense
│   ├── globals.css                # tema global, utilitários visuais e loaders
│   └── src/
│       ├── App.tsx                # composição das seções da página
│       ├── i18n.ts                # configuração de internacionalização
│       ├── styles.ts              # tokens utilitários de classes
│       ├── assets/                # imagens, ícones e traduções
│       ├── components/
│       │   ├── canvas/            # componentes 3D (Three.js)
│       │   └── *.tsx              # seções principais da landing
│       ├── constants/index.ts     # dados estruturados (links, experiências, projetos)
│       ├── contexts/              # contexto de responsividade (mobile)
│       ├── hoc/                   # SectionWrapper com animação e âncoras
│       └── utils/                 # animações, tipos e utilidades
├── public/
│   ├── desktop_pc/                # modelo 3D do computador
│   ├── planet/                    # modelo 3D do planeta
│   └── assets/                    # ícones e imagens usadas no conteúdo
└── package.json
```

---

## Fluxo da aplicação

1. `app/page.tsx` inicia o app em modo client-side com `Suspense`.
2. `app/src/App.tsx` compõe as seções principais (Navbar, Hero, About, Work, Projects, etc.).
3. `MobileContext` define comportamento para mobile e controla renderizações específicas.
4. `SectionWrapper` aplica padrão de animação, espaçamento e âncoras navegáveis.
5. `Contact.tsx` envia o formulário diretamente com `@emailjs/browser`.
6. Componentes em `components/canvas` renderizam os elementos 3D.

---

## Dados, conteúdo e i18n

O projeto foi desenhado para ser **orientado a conteúdo**, reduzindo acoplamento entre UI e texto.

- **Dados estruturados**: `app/src/constants/index.ts`
  - navegação
  - experiências
  - tecnologias
  - depoimentos
  - projetos

- **Traduções**:
  - `app/src/assets/locales/translations/pt.ts`
  - `app/src/assets/locales/translations/en.ts`

- **Configuração i18n**: `app/src/i18n.ts`
  - idiomas suportados: `pt`, `en`
  - fallback: português

### Onde editar cada tipo de conteúdo

| Objetivo | Arquivo principal |
|---|---|
| Alterar textos PT/EN | `app/src/assets/locales/translations/*.ts` |
| Adicionar/remover experiências | `app/src/constants/index.ts` |
| Atualizar projetos e links | `app/src/constants/index.ts` |
| Ajustar seções da página | `app/src/App.tsx` |
| Ajustar visual global | `app/globals.css` e `app/src/styles.ts` |

---

## Serviços externos e ambiente

### Variáveis de ambiente (obrigatórias para o contato)

Criar um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_EMAILJS_SERVICEID=
NEXT_EMAILJS_TEMPLATEID=
NEXT_EMAILJS_OPTIONS=
```

> Observação: no estado atual do projeto, o envio é feito no cliente com `@emailjs/browser`.

### Dependências externas em runtime

| Serviço | Finalidade |
|---|---|
| EmailJS | Envio de mensagens do formulário no cliente com `@emailjs/browser` |
| `https://ipapi.co/json/` | Detectar país para telefone no formulário |
| `https://randomuser.me/...` | Avatares dos depoimentos |

---

## Como rodar localmente

### Pré-requisitos

- Node.js **20+** recomendado
- pnpm (recomendado), npm, yarn ou bun

### Passos

```bash
# 1) Instalar dependências
pnpm install

# 2) Configurar variáveis de ambiente
# criar .env.local (veja seção acima)

# 3) Rodar ambiente de desenvolvimento
pnpm dev
```

Abra `http://localhost:3000` no navegador.

---

## Scripts disponíveis

| Script | Comando | Descrição |
|---|---|---|
| Desenvolvimento | `pnpm dev` | Sobe a aplicação em modo local |
| Build | `pnpm build` | Gera build de produção |
| Start | `pnpm start` | Executa build em modo produção |
| Lint | `pnpm lint` | Verifica padrões de código com ESLint |
| Type-check | `pnpm type-check` | Valida tipos TypeScript sem emitir arquivos |

---

## Guia de customização

### 1) Atualizar informações profissionais

Edite os arrays em `app/src/constants/index.ts`:

- `experiences`
- `projects`
- `technologies`
- `testimonials`

### 2) Alterar textos e idioma

Edite as traduções em:

- `app/src/assets/locales/translations/pt.ts`
- `app/src/assets/locales/translations/en.ts`

### 3) Trocar modelos 3D

- computador: `public/desktop_pc/scene.gltf`
- planeta: `public/planet/scene.gltf`

Se necessário, ajuste escala/posição em:

- `app/src/components/canvas/Computers.tsx`
- `app/src/components/canvas/Earth.tsx`

---

## Deploy

O deploy recomendado é na **Vercel** (compatível nativamente com Next.js).

Fluxo mínimo:

1. Configurar variáveis de ambiente no provedor.
2. Executar `pnpm build` localmente para validação.
3. Publicar branch principal no ambiente de deploy.

---

## Qualidade e manutenção

- ESLint configurado com `eslint-config-next` (`core-web-vitals` + TypeScript).
- Tipagem estrita ativada via `tsconfig.json`.
- Organização modular por contexto (componentes, constantes, utilitários, i18n).

### Melhorias futuras sugeridas

- adicionar testes automatizados (unitários e integração);
- adicionar monitoramento de erros (ex.: Sentry);
- adicionar analytics de navegação por seção;
- otimizar carregamento progressivo de assets 3D mais pesados.

---

Se este projeto te ajudou ou inspirou, fique à vontade para abrir uma issue, sugerir melhorias ou entrar em contato.
