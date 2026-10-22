# Yasser Latrech — Portfolio d’Ingénierie Logicielle / Software Engineering Portfolio (FR / EN)

**Ingénieur Logiciel Full-Stack TypeScript** (`Next.js`, `NestJS`, `Node.js`, `PostgreSQL`, `Redis` & `Playwright`)
**Full-Stack TypeScript Software Engineer**

- **Production Live** : [https://man9a.net](https://man9a.net)
- **GitHub** : [https://github.com/YasserLatrech](https://github.com/YasserLatrech)
- **LinkedIn** : [https://www.linkedin.com/in/yasser-latrech-373968333](https://www.linkedin.com/in/yasser-latrech-373968333)
- **CV (Français — PDF)** : [`public/cv/CV_Yasser_Latrech_FR.pdf`](./public/cv/CV_Yasser_Latrech_FR.pdf)
- **CV (English — PDF)** : [`public/cv/CV_Yasser_Latrech_EN.pdf`](./public/cv/CV_Yasser_Latrech_EN.pdf)
- **Email** : `yasser.lat2002@hotmail.com`
- **Téléphone / Phone** : `+212 640-102787`

---

## Présentation (FR)

Ce dépôt contient le portfolio d’ingénierie exécutif bilingue (`FR` / `EN`) de **Yasser Latrech**, conçu selon les principes du design éditorial suisse (*Warm Editorial Paper* `#F6F5F0` et *Matte Carbon* `#131312`).

### Études de Cas d’Architecture en Production

1. **Hospidar — Écosystème National de Santé & Régulation d’Ambulances Temps Réel**
   - `Turborepo Monorepo`, `apps/api` (`NestJS` — 30 modules isolés), `apps/web-patient`, `apps/web-pro`, `Socket.IO` + `Redis IoAdapter`, `PostgreSQL 16` (transactions atomiques ACID), `JWT + RBAC Guards`.
2. **Avids V2 — Plateforme Bilingue (FR/AR) de Recrutement & Pipeline Documentaire Sécurisé**
   - `Next.js App Router` (`LTR` / `RTL`), `Node.js`, `Prisma ORM`, `PostgreSQL`, stockage objet privé `MinIO S3`, inspection antivirus en flux continu `ClamAV`, sécurité `HttpOnly Cookies + CSRF + MFA`, matrice de tests `Playwright E2E`.
3. **Man9a.net — Plateforme de Diffusion Haute Volumétrie & Lecteur Virtualisé 60fps**
   - `+48 000 chapitres` diffusés, `+61 000 pages` indexées sur Google Search, `Next.js SSR/ISR`, proxy de streaming et transcodage `Sharp WebP` à la volée, fenêtrage DOM `@tanstack/react-virtual` réduisant l’empreinte RAM mobile de `75%`.
4. **Systèmes d’Automatisation B2B WhatsApp & Orchestration de Navigateurs Headless**
   - `Baileys WhatsApp WebSocket API`, `Playwright Headless Chromium`, `TypeScript Strict`, files de travailleurs asynchrones `Node.js` avec limiteurs de débit et reconnexion déterministe.

---

## Overview (EN)

This repository hosts the standalone bilingual (`FR` / `EN`) executive software engineering portfolio of **Yasser Latrech**, crafted with a Swiss Editorial aesthetic (*Warm Editorial Paper* `#F6F5F0` and *Matte Carbon* `#131312`).

### Production Engineering Case Studies

1. **Hospidar — National Healthcare Ecosystem & Real-Time Ambulance Dispatch**
   - `Turborepo Monorepo`, `apps/api` (`NestJS` — 30 domain modules), `apps/web-patient`, `apps/web-pro`, `Socket.IO` + `Redis IoAdapter`, `PostgreSQL 16` ACID atomic dispatch locking, `JWT + RBAC Guards`.
2. **Avids V2 — Bilingual (FR/AR) Recruitment Platform & Zero-Trust Document Pipeline**
   - `Next.js App Router` (`LTR` / `RTL`), `Node.js`, `Prisma ORM`, `PostgreSQL`, `MinIO S3` object storage, streaming `ClamAV` antivirus inspection, `HttpOnly Cookies + CSRF + MFA`, `Playwright E2E` verification suite.
3. **Man9a.net — High-Volume Media Streaming Platform & 60fps Virtualized Reader**
   - `48,000+ chapters` served, `61,000+ Google-indexed pages`, `Next.js SSR/ISR`, on-the-fly `Sharp WebP` stream transcoding proxy, `@tanstack/react-virtual` DOM windowing reducing mobile RAM usage by `75%`.
4. **B2B WhatsApp Automation Systems & Headless Browser Orchestration**
   - `Baileys WhatsApp WebSocket API`, `Playwright`, `Strict TypeScript`, `Node.js` worker queues with token-bucket rate limiting and exponential backoff.

---

## Exécution Locale / Local Execution

```bash
# Installation des dépendances / Install dependencies
npm install

# Vérification du typage TypeScript strict / Strict TypeScript verification
npm run build

# Démarrage du serveur sur le port 4300 / Start server on port 4300
npm start
```

Serveur accessible sur `http://localhost:4300` (`GET /api/health`, `GET /api/profile`).
