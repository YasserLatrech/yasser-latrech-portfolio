# Yasser Latrech — Portfolio Développeur Full-Stack / Full-Stack Developer Portfolio (FR / EN)

**Développeur Full-Stack TypeScript** (`Next.js`, `React`, `NestJS`, `Node.js`, `PostgreSQL`, `Redis` & `Playwright`)
**Full-Stack TypeScript Developer**

- **Production Live** : [https://man9a.net](https://man9a.net)
- **GitHub** : [https://github.com/YasserLatrech](https://github.com/YasserLatrech)
- **LinkedIn** : [https://www.linkedin.com/in/yasser-latrech-373968333](https://www.linkedin.com/in/yasser-latrech-373968333)
- **CV (Français — PDF)** : [`public/cv/CV_Yasser_Latrech_FR.pdf`](./public/cv/CV_Yasser_Latrech_FR.pdf)
- **CV (English — PDF)** : [`public/cv/CV_Yasser_Latrech_EN.pdf`](./public/cv/CV_Yasser_Latrech_EN.pdf)
- **Email** : `yasser.lat2002@hotmail.com`
- **Téléphone / Phone** : `+212 640-102787`

---

## Présentation (FR)

Ce dépôt contient le portfolio technique bilingue (`FR` / `EN`) de **Yasser Latrech**, Développeur Full-Stack titulaire d’un **DUT en Génie Logiciel** (`EST Salé`).

### Projets & Réalisations Techniques

1. **Hospidar — Plateforme de Santé & Régulation d’Ambulances en Temps Réel (`Customer Obsession`)**
   - `Turborepo Monorepo`, `apps/api` (`NestJS`), `apps/web-patient`, `apps/web-pro`, application mobile `React Native`, `Socket.IO` + `Redis`, `PostgreSQL 16` (`Prisma ORM`), `JWT + RBAC Guards`.
2. **Avids — Plateforme Bilingue (FR/AR) de Recrutement & Gestion de Candidatures (`Customer Obsession`)**
   - `Next.js App Router` (`LTR` / `RTL`), `Node.js`, `Prisma ORM`, `PostgreSQL`, stockage privé de CV `MinIO S3`, analyse antivirus `ClamAV`, sécurité `HttpOnly Cookies + CSRF + MFA`, tests `Playwright E2E`.
3. **Man9a.net — Plateforme Web de Lecture Numérique**
   - `+48 000 chapitres` disponibles, `Next.js SSR/ISR`, proxy de streaming et compression d’images `Sharp WebP` à la volée, lecteur mobile virtualisé `@tanstack/react-virtual`.

---

## Overview (EN)

This repository hosts the bilingual (`FR` / `EN`) technical portfolio of **Yasser Latrech**, Full-Stack Web & Mobile Developer holding a **DUT in Software Engineering (`Génie Logiciel` — EST Salé)**.

### Technical Projects & Case Studies

1. **Hospidar — Healthcare & Real-Time Ambulance Dispatch Platform (`Customer Obsession`)**
   - `Turborepo Monorepo`, `apps/api` (`NestJS`), `apps/web-patient`, `apps/web-pro`, `React Native` mobile app, `Socket.IO` + `Redis`, `PostgreSQL 16` (`Prisma ORM`), `JWT + RBAC Guards`.
2. **Avids — Bilingual (FR/AR) Recruitment & Job Board Platform (`Customer Obsession`)**
   - `Next.js App Router` (`LTR` / `RTL`), `Node.js`, `Prisma ORM`, `PostgreSQL`, `MinIO S3` private resume storage, `ClamAV` antivirus scanning, `HttpOnly Cookies + CSRF + MFA`, `Playwright E2E` tests.
3. **Man9a.net — Digital Reading Web Platform**
   - `48,000+ chapters` served, `Next.js SSR/ISR`, on-the-fly `Sharp WebP` image streaming proxy, `@tanstack/react-virtual` mobile reader virtualization.

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
