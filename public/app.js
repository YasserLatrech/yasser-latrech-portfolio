(function () {
  'use strict';

  var UI_COPY = {
    fr: {
      pageTitle: 'Yasser Latrech — Développeur Full-Stack TypeScript | Portfolio Technique',
      headerBadge: 'PORTFOLIO FULL-STACK',
      navCases: 'Études de Cas (06)',
      navSkills: 'Matrice Technique',
      navContact: 'Contact & CV',
      heroEyebrow: 'ARCHITECTURE SYSTÈMES & DÉVELOPPEMENT FULL-STACK EN PRODUCTION',
      heroRole: 'Développeur Full-Stack TypeScript (Next.js, NestJS, Node.js, PostgreSQL, Redis & Playwright)',
      heroSummary:
        'Conception, développement et déploiement d’applications web et mobiles à haute disponibilité : monorepos multi-applications Turborepo/NestJS (Hospidar, Certify), plateformes de recrutement sécurisées (Avids V2 — ClamAV / MinIO S3), moteurs de diffusion média haute volumétrie (+48 000 chapitres / +61 000 pages indexées sur man9a.net), applications mobiles PWA Offline-First (Club Al Oussoud) et systèmes e-commerce/automatisation WhatsApp Business (NovaStore, Baileys, Playwright).',
      btnCvFr: 'Télécharger CV (FR) — PDF',
      btnCvEn: 'Download CV (EN) — PDF',
      labelPhone: 'TÉLÉPHONE / WHATSAPP',
      labelProd: 'SYSTÈME EN PRODUCTION',
      casesIndex: 'SECTION 01 // ARCHITECTURES & PROJETS EN PRODUCTION',
      casesTitle: 'Études de Cas Techniques & Systèmes Développés',
      casesDesc:
        'Analyse détaillée de six plateformes conçues et développées de bout en bout : topologie des modules, résolution des défis techniques et indicateurs de performance mesurables.',
      challengeLabel: 'DÉFI TECHNIQUE CRITIQUE',
      archLabel: 'DÉCISIONS D’ARCHITECTURE & IMPLÉMENTATION',
      diagramLabel: 'TOPOLOGIE & FLUX DE DONNÉES',
      kpiLabel: 'INDICATEURS DE PERFORMANCE MESURÉS (KPI)',
      liveLinkText: 'Accéder à la Production',
      matrixIndex: 'SECTION 02 // COMPÉTENCES & PRINCIPES',
      matrixTitle: 'Matrice des Compétences Techniques & Principes d’Architecture',
      matrixDesc:
        'Socle technologique complet structuré autour de quatre piliers : développement Front-End & Mobile PWA, architecture Back-End & Temps Réel, bases de données transactionnelles & cache, et sécurité / tests E2E / DevOps.',
      principlePrefix: 'Principe directeur : ',
      footerCopy: 'Yasser Latrech — Développeur Full-Stack TypeScript. Tous droits réservés.',
    },
    en: {
      pageTitle: 'Yasser Latrech — Full-Stack TypeScript Developer | Technical Portfolio',
      headerBadge: 'FULL-STACK PORTFOLIO',
      navCases: 'Case Studies (06)',
      navSkills: 'Technical Matrix',
      navContact: 'Contact & CV',
      heroEyebrow: 'PRODUCTION SYSTEMS ARCHITECTURE & FULL-STACK DEVELOPMENT',
      heroRole: 'Full-Stack TypeScript Developer (Next.js, NestJS, Node.js, PostgreSQL, Redis & Playwright)',
      heroSummary:
        'Designing, building, and operating high-availability web and mobile applications: multi-app Turborepo/NestJS monorepos (Hospidar, Certify), zero-trust recruitment platforms (Avids V2 — ClamAV / MinIO S3), high-traffic media streaming engines (48,000+ chapters / 61,000+ Google-indexed pages on man9a.net), offline-first mobile PWAs (Club Al Oussoud), and WhatsApp Business e-commerce/automation systems (NovaStore, Baileys, Playwright).',
      btnCvFr: 'Télécharger CV (FR) — PDF',
      btnCvEn: 'Download CV (EN) — PDF',
      labelPhone: 'PHONE / WHATSAPP',
      labelProd: 'LIVE PRODUCTION SYSTEM',
      casesIndex: 'SECTION 01 // PRODUCTION ARCHITECTURES & PROJECTS',
      casesTitle: 'Technical Case Studies & Production Systems',
      casesDesc:
        'In-depth breakdown of six end-to-end production platforms: module topology, technical bottlenecks resolved, and measurable performance indicators.',
      challengeLabel: 'CORE TECHNICAL CHALLENGE',
      archLabel: 'ARCHITECTURAL DECISIONS & IMPLEMENTATION',
      diagramLabel: 'SYSTEM TOPOLOGY & DATA FLOW',
      kpiLabel: 'MEASURED PERFORMANCE INDICATORS (KPIS)',
      liveLinkText: 'Visit Live Production',
      matrixIndex: 'SECTION 02 // CAPABILITIES & PRINCIPLES',
      matrixTitle: 'Technical Stack Matrix & Architectural Principles',
      matrixDesc:
        'Comprehensive technical stack structured across four pillars: frontend & mobile PWA development, real-time backend architecture, transactional databases & caching, and end-to-end security / QA / DevOps.',
      principlePrefix: 'Architectural Principle: ',
      footerCopy: 'Yasser Latrech — Full-Stack TypeScript Developer. All rights reserved.',
    },
  };

  var DEFAULT_PORTFOLIO_DATA = {
    caseStudies: [
      {
        id: 'hospidar',
        number: '01',
        title: {
          fr: 'Hospidar — Écosystème National de Santé & Régulation d’Ambulances Temps Réel',
          en: 'Hospidar — National Healthcare Ecosystem & Real-Time Ambulance Dispatch',
        },
        subtitle: {
          fr: 'Monorepo Turborepo multi-applications avec coordination d’urgences médicales par WebSockets distribués, application mobile React Native et transactions ACID PostgreSQL 16.',
          en: 'Multi-application Turborepo monorepo featuring distributed WebSocket medical emergency coordination, React Native mobile app, and PostgreSQL 16 ACID atomic dispatch.',
        },
        status: {
          fr: 'Architecture Production — 30+ Modules NestJS',
          en: 'Production Architecture — 30+ NestJS Modules',
        },
        stack: [
          'Turborepo Monorepo',
          'NestJS (apps/api — 30+ modules)',
          'Next.js (Patient, Doctor CNOM/CNOI, Admin)',
          'React Native (Android APK)',
          'Socket.IO + Redis IoAdapter',
          'PostgreSQL 16 (ACID)',
          'Prisma ORM & BullMQ',
          'JWT + RBAC Guards + Wallet/CMI',
        ],
        diagram: [
          '[apps/web-patient & Android APK] ──(HTTPS / WSS)──► [NestJS API Gateway (30+ Modules)]',
          '[apps/web-pro (CNOM/CNOI)]       ──(RBAC Guards)──►        │                     │',
          '                                              [Redis IoAdapter Pub/Sub]  [PostgreSQL 16 ACID]',
          '                                              (Real-Time GPS Telemetry)  (Atomic Dispatch Lock)',
        ].join('\n'),
        challenge: {
          fr: 'Prévenir la double-assignation d’ambulances lors de pics d’urgences simultanées tout en diffusant la télémétrie GPS en temps réel vers les interfaces patients et régulateurs hospitaliers sans perte de connexion.',
          en: 'Preventing double-assignment of ambulances during concurrent emergency spikes while streaming real-time GPS telemetry to both patient interfaces and hospital dispatchers with zero dropped state.',
        },
        architecture: [
          {
            fr: 'Orchestration Monorepo Turborepo isolant strictement apps/api (30+ modules métiers NestJS), apps/web-patient, apps/web-pro (praticiens CNOM/CNOI & régulateurs), l’application mobile React Native et les contrats TypeScript partagés.',
            en: 'Turborepo monorepo orchestration strictly isolating apps/api (30+ domain NestJS modules), apps/web-patient, apps/web-pro (CNOM/CNOI practitioners & dispatchers), React Native mobile app, and shared TypeScript contracts.',
          },
          {
            fr: 'Transactions atomiques PostgreSQL 16 garantissant qu’une mission d’urgence ne puisse être verrouillée que par un seul équipage ambulancier à la milliseconde près, couplées aux files BullMQ et au paiement Wallet / CMI.',
            en: 'PostgreSQL 16 atomic transactions guaranteeing that an emergency dispatch mission can only be claimed by a single ambulance crew under high concurrency, paired with BullMQ workers and Wallet / CMI payments.',
          },
          {
            fr: 'Passerelle temps réel Socket.IO propulsée par Redis IoAdapter pour synchroniser les états de mission et la géolocalisation entre plusieurs instances Node.js avec contrôle d’accès granulaire JWT + RBAC Guards.',
            en: 'Real-time Socket.IO gateway powered by Redis IoAdapter to synchronize mission state machines and geolocation across multiple Node.js instances with granular JWT + RBAC Guards access control.',
          },
        ],
        metrics: [
          {
            value: '30+',
            label: { fr: 'Modules NestJS isolés', en: 'Isolated NestJS Modules' },
          },
          {
            value: '0',
            label: { fr: 'Conflit de dispatch (ACID)', en: 'Dispatch Race Conditions (ACID)' },
          },
          {
            value: '< 50ms',
            label: { fr: 'Latence WebSocket Redis', en: 'Redis WebSocket Latency' },
          },
        ],
      },
      {
        id: 'certify',
        number: '02',
        title: {
          fr: 'Certify (certify.ma) — Plateforme de Certification Académique, Vérification & Portefeuille Étudiant',
          en: 'Certify (certify.ma) — Academic Credential Issuance, Verification & Student Wallet Platform',
        },
        subtitle: {
          fr: 'Monorepo Turborepo à 5 applications (Vérification Publique, Student Wallet, Admin Établissement, Console Support, API) sous Next.js 16, React 19, PostgreSQL et Prisma 7.',
          en: '5-application Turborepo monorepo (Public Verification, Student Wallet, Institution Admin, Support Console, API) built with Next.js 16, React 19, PostgreSQL, and Prisma 7.',
        },
        status: {
          fr: 'Monorepo 5 Apps + Tests Playwright & k6',
          en: '5-App Monorepo + Playwright & k6 Testing',
        },
        stack: [
          'Next.js 16 & React 19',
          'Turborepo (5 Apps + packages/lib & ui)',
          'PostgreSQL & Prisma 7',
          'Redis Session Store',
          'Playwright E2E & Vitest',
          'k6 Load Testing',
          'Docker Compose & GitLab CI',
          'Expo (Mobile) & Tauri (Desktop)',
        ],
        diagram: [
          '[apps/web (3000) | apps/dashboard (3001) | apps/admin (3002) | apps/support (3003)]',
          '                                       │ (Shared AUTH_COOKIE_DOMAIN & RBAC)',
          '                                       ▼',
          '                      [apps/api (3004) + packages/lib] ──► [PostgreSQL + Prisma 7 + Redis]',
        ].join('\n'),
        challenge: {
          fr: 'Orchestrer 5 applications web interconnectées avec partage sécurisé de session multi-sous-domaines, isolation stricte des données par établissement (RBAC multi-tenant) et vérification de sécurité des migrations de base de données sans perte de données.',
          en: 'Orchestrating 5 interconnected web applications with cross-subdomain session sharing, strict institutional multi-tenant RBAC isolation, and automated database migration safety verification.',
        },
        architecture: [
          {
            fr: 'Architecture Monorepo divisée en 5 applications spécialisées (apps/web, apps/dashboard, apps/admin, apps/support, apps/api) et bibliothèques partagées (packages/lib, packages/ui) avec authentification unifiée et jetons Bearer chiffrés pour mobile.',
            en: 'Monorepo architecture divided into 5 specialized apps (apps/web, apps/dashboard, apps/admin, apps/support, apps/api) and shared libraries (packages/lib, packages/ui) with unified cookie auth and encrypted mobile Bearer tokens.',
          },
          {
            fr: 'Enregistrement des sessions navigateur et mobile en base de données permettant la révocation immédiate des accès, et cloisonnement strict entre SUPER_ADMIN et administrateurs d’établissements.',
            en: 'Database-registered browser and mobile sessions enabling immediate access revocation, combined with strict boundary isolation between SUPER_ADMIN and school administrators.',
          },
          {
            fr: 'Pipeline de qualité industrielle : vérification automatisée des migrations Prisma sur schéma temporaire, tests unitaires Vitest, tests E2E Playwright multi-ports (3200–3204) et tests de charge k6 sous GitLab CI.',
            en: 'Industrial QA pipeline: automated Prisma migration safety checks on temporary schemas, Vitest unit suites, isolated multi-port Playwright E2E tests (3200–3204), and k6 load testing in GitLab CI.',
          },
        ],
        metrics: [
          {
            value: '5 Apps',
            label: { fr: 'Écosystème Monorepo unifié', en: 'Unified Monorepo Ecosystem' },
          },
          {
            value: 'Prisma 7',
            label: { fr: 'Migrations vérifiées sans perte', en: 'Verified Safe Migrations' },
          },
          {
            value: 'E2E + k6',
            label: { fr: 'Validation charge & sécurité', en: 'Load & Security Verification' },
          },
        ],
      },
      {
        id: 'avids-v2',
        number: '03',
        title: {
          fr: 'Avids V2 — Plateforme Bilingue (FR/AR) de Recrutement & Pipeline Documentaire Sécurisé',
          en: 'Avids V2 — Bilingual (FR/AR) Recruitment Platform & Zero-Trust Document Pipeline',
        },
        subtitle: {
          fr: 'Architecture de recrutement critique intégrant l’analyse antivirus en flux continu ClamAV, le stockage objet MinIO S3 et l’authentification durcie MFA.',
          en: 'Mission-critical recruitment architecture integrating streaming ClamAV antivirus inspection, MinIO S3 object storage, and hardened MFA authentication.',
        },
        status: {
          fr: 'Sécurité Durcie & Tests E2E Playwright',
          en: 'Hardened Security & Playwright E2E Suite',
        },
        stack: [
          'Next.js App Router (FR/AR RTL)',
          'Node.js & TypeScript',
          'Prisma ORM & PostgreSQL',
          'MinIO S3 Object Storage',
          'ClamAV Stream Antivirus',
          'HttpOnly Cookies + CSRF + MFA',
          'Playwright E2E Matrix',
        ],
        diagram: [
          '[Candidat FR/AR] ──(Upload Stream)──► [ClamAV TCP Daemon Scan]',
          '                                              │ (Clean Binary)',
          '                                              ▼',
          '[PostgreSQL + Prisma] ◄──(Metadata)── [MinIO S3 Private Bucket (Presigned URLs)]',
        ].join('\n'),
        challenge: {
          fr: 'Sécuriser l’ingestion massive de dossiers candidats (CV, diplômes, pièces justificatives) contre les charges utiles malveillantes tout en offrant une expérience bilingue Français / Arabe (RTL natif) fluide et conforme aux exigences d’audit.',
          en: 'Securing high-volume ingestion of candidate dossiers (CVs, diplomas, legal documents) against malicious payloads while delivering a seamless French / Arabic (native RTL) user experience compliant with strict security audits.',
        },
        architecture: [
          {
            fr: 'Pipeline d’inspection binaire en flux (Node.js Streams vers démon ClamAV) analysant chaque fichier en mémoire avant toute écriture dans le stockage objet privé MinIO S3, rejetant instantanément les fichiers compromis.',
            en: 'Streaming binary inspection pipeline (Node.js Streams piped to ClamAV daemon) scanning every uploaded document prior to MinIO S3 private bucket persistence, immediately rejecting compromised payloads.',
          },
          {
            fr: 'Sécurité applicative de bout en bout : sessions par cookies HttpOnly / SameSite=Strict, protection CSRF par double soumission de jeton, authentification multi-facteurs (MFA / TOTP) et journalisation d’audit.',
            en: 'End-to-end application security: HttpOnly / SameSite=Strict cookie sessions, double-submit token CSRF protection, multi-factor authentication (MFA / TOTP), and immutable audit logging.',
          },
          {
            fr: 'Matrice de tests automatisés de bout en bout (Playwright E2E) validant les parcours candidats et recruteurs en Français (LTR) et en Arabe (RTL).',
            en: 'Automated End-to-End (Playwright E2E) test matrix validating candidate and recruiter workflows across both French (LTR) and Arabic (RTL) viewports.',
          },
        ],
        metrics: [
          {
            value: '100%',
            label: { fr: 'Flux inspectés par ClamAV', en: 'Uploads Inspected via ClamAV' },
          },
          {
            value: 'FR / AR',
            label: { fr: 'Moteur bilingue LTR/RTL', en: 'Native LTR/RTL Bilingual Engine' },
          },
          {
            value: 'Zero-Trust',
            label: { fr: 'Isolation S3 + MFA + CSRF', en: 'S3 Isolation + MFA + CSRF' },
          },
        ],
      },
      {
        id: 'man9a',
        number: '04',
        title: {
          fr: 'Man9a.net — Plateforme de Diffusion Haute Volumétrie & Lecteur Virtualisé 60fps',
          en: 'Man9a.net — High-Volume Media Streaming Platform & 60fps Virtualized Reader',
        },
        subtitle: {
          fr: 'Système en production desservant +48 000 chapitres et +61 000 pages indexées sur Google avec proxy de transcodage WebP Sharp à la volée.',
          en: 'Live production system serving 48,000+ chapters and 61,000+ Google-indexed pages with an on-the-fly Sharp WebP streaming proxy.',
        },
        status: {
          fr: 'En Production Active (man9a.net)',
          en: 'Live in Production (man9a.net)',
        },
        liveUrl: 'https://man9a.net',
        stack: [
          'Next.js 16 App Router (SSR / ISR)',
          '@tanstack/react-virtual',
          'Sharp Image Stream Proxy',
          'Node.js, Express & TypeScript',
          'MongoDB & Redis L1/L2 Cache',
          'BullMQ Workers',
          'Schema.org JSON-LD & Sitemaps',
        ],
        diagram: [
          '[Lecteur Mobile 60fps] ◄──(@tanstack/react-virtual DOM Windowing: 5-7 noeuds)──┐',
          '                                                                               │',
          '[Upstream CDN] ──(Stream)──► [API /stream/image + Sharp WebP] ──(Cache L1/L2)──┘',
        ].join('\n'),
        challenge: {
          fr: 'Rendre fluide sur appareils mobiles l’affichage de chapitres composés de plus de 120 planches haute résolution (dépassant la limite matérielle GPU WebKit de 16 383px) tout en maintenant une empreinte mémoire serveur minimale.',
          en: 'Delivering 60fps mobile rendering for chapters containing 120+ high-resolution vertical strips (exceeding WebKit’s 16,383px hardware GPU texture limit) while maintaining a minimal server memory footprint.',
        },
        architecture: [
          {
            fr: 'Fenêtrage DOM dynamique via @tanstack/react-virtual ne maintenant que les planches visibles en mémoire et décodant les images en arrière-plan (img.decode()), réduisant la consommation RAM mobile de 75%.',
            en: 'Dynamic DOM windowing via @tanstack/react-virtual mounting only viewport-adjacent panels and pre-decoding images off the main thread (img.decode()), reducing mobile RAM usage by 75%.',
          },
          {
            fr: 'Proxy de streaming média sans tampon complet (Sharp + Node.js Streams) convertissant et découpant les planches en WebP à la volée avec rafraîchissement transparent des jetons CDN expirés.',
            en: 'Zero-full-buffer media streaming proxy (Sharp + Node.js Streams) transcoding and slicing tall strips into WebP on-the-fly with transparent upstream CDN token refresh.',
          },
          {
            fr: 'Architecture SEO programmatique avec sitemaps partitionnés et rendu hybride SSR / ISR, propulsant plus de 61 000 pages indexées sur Google Search.',
            en: 'Programmatic SEO architecture with sharded XML sitemaps and hybrid SSR / ISR caching, powering 61,000+ indexed pages on Google Search.',
          },
        ],
        metrics: [
          {
            value: '+48 000',
            label: { fr: 'Chapitres diffusés', en: 'Chapters Served' },
          },
          {
            value: '+61 000',
            label: { fr: 'Pages indexées Google', en: 'Google-Indexed Pages' },
          },
          {
            value: '-75%',
            label: { fr: 'Empreinte RAM mobile', en: 'Mobile RAM Footprint' },
          },
        ],
      },
      {
        id: 'club-al-oussoud',
        number: '05',
        title: {
          fr: 'Club Al Oussoud — Application Mobile PWA Offline-First & Synchronisation Wi-Fi Locale',
          en: 'Club Al Oussoud — Offline-First Gym Management Mobile PWA & Local Wi-Fi Sync',
        },
        subtitle: {
          fr: 'Application mobile-first (React 19, TypeScript, Capacitor, IndexedDB Dexie.js) remplaçant les registres papier avec synchronisation directe inter-appareils sur réseau Wi-Fi local.',
          en: 'Mobile-first PWA & Capacitor application (React 19, TypeScript, IndexedDB Dexie.js) replacing paper ledgers with 1-click device-to-device local Wi-Fi synchronization.',
        },
        status: {
          fr: 'PWA Mobile Offline-First & Capacitor',
          en: 'Offline-First Mobile PWA & Capacitor',
        },
        stack: [
          'React 19 & TypeScript',
          'Capacitor (Android / iOS)',
          'IndexedDB (Dexie.js)',
          'Tailwind CSS v4 & Radix UI',
          'Wi-Fi Peer Sync & BroadcastChannel',
          'Recharts Financial Analytics',
          'Trilingue AR (RTL) / FR / EN',
        ],
        diagram: [
          '[Smartphone A (IndexedDB Dexie.js + Photos WebP)] ◄──(Sync Wi-Fi Local / BroadcastChannel)──► [Smartphone B]',
          '                         │',
          '                         ├──► [Tableau de Bord Financier Recharts + Export Excel/CSV/PDF]',
          '                         └──► [Relances Automatisées WhatsApp (wa.me) & SMS Hors-Ligne]',
        ].join('\n'),
        challenge: {
          fr: 'Permettre aux gérants de salles de sport de gérer les abonnements, les dettes, le pointage et les photos des adhérents 100% hors-ligne (sans dépendre d’une connexion internet) tout en synchronisant plusieurs téléphones sur le même routeur Wi-Fi.',
          en: 'Enabling gym managers to track memberships, debts, attendance, and member photos 100% offline while seamlessly synchronizing multiple smartphones over a local Wi-Fi router.',
        },
        architecture: [
          {
            fr: 'Persistance locale intégrale via IndexedDB (Dexie.js) et Service Worker PWA avec compression WebP à la volée des photos prises par la caméra et zoom tactile multi-doigts (pinch-to-zoom).',
            en: 'Complete local persistence via IndexedDB (Dexie.js) and PWA Service Worker with on-the-fly WebP camera photo compression and multi-touch pinch-to-zoom inspection.',
          },
          {
            fr: 'Protocole de synchronisation locale émetteur/récepteur sur le même réseau Wi-Fi (et synchronisation multi-onglets via BroadcastChannel) transférant les enregistrements Dexie et les miniatures WebP.',
            en: 'Sender/receiver local Wi-Fi synchronization protocol (plus multi-tab BroadcastChannel sync) transferring Dexie database records alongside compressed WebP member photos.',
          },
          {
            fr: 'Module financier complet avec graphiques Recharts, suivi des impayés, export comptable en 1 clic (Excel/CSV/PDF), calendrier d’échéances et générateur de relances WhatsApp trilingue (AR/FR/EN).',
            en: 'Complete financial module featuring Recharts revenue analytics, debt tracking, 1-click Excel/CSV/PDF accounting exports, expiration calendar, and trilingual (AR/FR/EN) WhatsApp payment reminders.',
          },
        ],
        metrics: [
          {
            value: '100%',
            label: { fr: 'Autonomie Offline-First', en: 'Offline-First Autonomy' },
          },
          {
            value: 'Wi-Fi Sync',
            label: { fr: 'Synchronisation inter-appareils', en: 'Device-to-Device Local Sync' },
          },
          {
            value: 'AR/FR/EN',
            label: { fr: 'Interface RTL/LTR native', en: 'Native RTL/LTR Interface' },
          },
        ],
      },
      {
        id: 'novastore-automation',
        number: '06',
        title: {
          fr: 'NovaStore & SocialPoster — E-Commerce COD & Automatisation WhatsApp Business / Playwright',
          en: 'NovaStore & SocialPoster — COD E-Commerce & WhatsApp Business / Playwright Automation',
        },
        subtitle: {
          fr: 'Plateformes e-commerce haute conversion (Next.js 16) couplées au protocole WebSocket WhatsApp (Baileys), administration sécurisée HttpOnly et génération vidéo automatisée.',
          en: 'High-conversion e-commerce platforms (Next.js 16) paired with the WhatsApp WebSocket protocol (Baileys), encrypted HttpOnly admin dashboards, and automated video synthesis.',
        },
        status: {
          fr: 'E-Commerce & Automatisation Multi-Plateformes',
          en: 'E-Commerce & Multi-Platform Automation',
        },
        stack: [
          'Next.js 16 (Turbopack) & TypeScript',
          'Baileys WhatsApp WebSocket API',
          'Playwright Browser Automation',
          'HTML5 Canvas + Web Audio Video Engine',
          'HttpOnly Session Admin Dashboard',
          'UTF-8 BOM CSV & RTL Unicode Engine',
        ],
        diagram: [
          '[NovaStore Storefront (Next.js 16)] ──(E.164 + RTL Unicode)──► [WhatsApp Business / Baileys API]',
          '                                                                        │',
          '[SocialPoster Engine (Playwright + Canvas/WebAudio MP4)] ───────────────┴──► [FB / IG / X / TikTok / Discord]',
        ].join('\n'),
        challenge: {
          fr: 'Maximiser le taux de conversion mobile pour le paiement à la livraison (COD) avec formatage bidirectionnel Arabe/Anglais sans cassure dans WhatsApp, tout en automatisant la création et la diffusion de contenus vidéo sur 5 réseaux sociaux.',
          en: 'Maximizing mobile Cash-on-Delivery (COD) conversion with unbroken Arabic/English RTL formatting inside WhatsApp while automating vertical video synthesis and publishing across 5 social platforms.',
        },
        architecture: [
          {
            fr: 'Moteur de commande WhatsApp universel intégrant la normalisation internationale des numéros (E.164), l’injection de marqueurs Unicode RTL (\\u200F) et un back-office administrateur sur route secrète protégée par cookies HttpOnly.',
            en: 'Universal WhatsApp order engine featuring international E.164 phone sanitization, RTL Unicode directional markers (\\u200F), and a secret-route admin dashboard protected by HttpOnly session cookies.',
          },
          {
            fr: 'Connexion directe au protocole multi-appareils WhatsApp via Baileys WebSocket API avec persistance chiffrée des sessions et reconnexion automatique.',
            en: 'Direct integration with the WhatsApp multi-device protocol via Baileys WebSocket API featuring encrypted session persistence and exponential backoff reconnection.',
          },
          {
            fr: 'Studio d’automatisation Playwright & HTML5 Canvas/WebAudio générant des vidéos verticales 1080x1920 (avec mouvement caméra et bande-son synthétisée) et publiant sur Facebook, Instagram, X, TikTok et Discord.',
            en: 'Playwright & HTML5 Canvas/WebAudio automation studio synthesizing 1080x1920 vertical videos (with camera pan/zoom and procedural audio) and publishing across Facebook, Instagram, X, TikTok, and Discord.',
          },
        ],
        metrics: [
          {
            value: '5 Réseaux',
            label: { fr: 'Diffusion multi-plateformes', en: 'Multi-Platform Publishing' },
          },
          {
            value: '1080x1920',
            label: { fr: 'Synthèse vidéo Canvas/Audio', en: 'Canvas/Audio Video Synthesis' },
          },
          {
            value: '100% RTL',
            label: { fr: 'Moteur E.164 & Admin HttpOnly', en: 'E.164 Engine & HttpOnly Admin' },
          },
        ],
      },
    ],
    skillMatrix: [
      {
        id: 'frontend',
        category: {
          fr: '01 // Front-End & Ingénierie d’Interface',
          en: '01 // Front-End & UI Engineering',
        },
        items: [
          'TypeScript 5.x (Strict / Zero-Any)',
          'Next.js (App Router, SSR, ISR, RSC)',
          'React 18 / 19',
          '@tanstack/react-virtual (DOM Windowing)',
          'Tailwind CSS & Swiss Editorial CSS',
          'Architecture Bilingue FR / EN / AR (RTL)',
          'Optimisation Core Web Vitals (LCP, CLS, INP)',
        ],
        principle: {
          fr: 'Interfaces déterministes à 60fps, retour tactile immédiat (< 10ms), rendu serveur hybride et zéro décalage de mise en page (CLS = 0).',
          en: 'Deterministic 60fps interfaces, sub-10ms tactile feedback, hybrid server rendering, and zero layout shift (CLS = 0).',
        },
      },
      {
        id: 'backend',
        category: {
          fr: '02 // Back-End, API & Temps Réel',
          en: '02 // Back-End, APIs & Real-Time Systems',
        },
        items: [
          'Node.js (Streams, Worker Threads, Event Loop)',
          'NestJS (Architecture Modulaire, Guards, Interceptors)',
          'Socket.IO & Redis IoAdapter (WebSockets)',
          'RESTful APIs & Validation Zod',
          'Sharp (Transcodage Média en Flux)',
          'Baileys WebSocket API',
          'Turborepo Monorepo Architecture',
        ],
        principle: {
          fr: 'Séparation stricte en couches (Clean Architecture), validation des schémas aux frontières et traitement par flux sans saturation mémoire.',
          en: 'Strict Clean Architecture layer separation, boundary schema validation, and backpressure-aware stream processing.',
        },
      },
      {
        id: 'data',
        category: {
          fr: '03 // Bases de Données, Cache & Stockage',
          en: '03 // Databases, Caching & Storage',
        },
        items: [
          'PostgreSQL 16 (Transactions ACID, Verrous, Indexation)',
          'Prisma ORM & Optimisation de Requêtes',
          'Redis (Cache L2, Pub/Sub, Rate Limiting)',
          'MongoDB & Mongoose (Agrégations, Index Composés)',
          'MinIO / AWS S3 (Stockage Objet & URLs Pré-signées)',
          'Pagination par Curseur Haute Volumétrie',
        ],
        principle: {
          fr: 'Intégrité transactionnelle ACID, élimination systématique des requêtes N+1 et stratégie de cache multi-niveaux (L1 RAM + L2 Redis).',
          en: 'ACID transactional integrity, systematic N+1 query elimination, and multi-tier caching (L1 RAM + L2 Redis).',
        },
      },
      {
        id: 'security-devops',
        category: {
          fr: '04 // Sécurité, Tests E2E & DevOps',
          en: '04 // Security, E2E Testing & DevOps',
        },
        items: [
          'Playwright (Tests E2E & Automatisation Headless)',
          'JWT, Cookies HttpOnly, Protection CSRF & MFA',
          'Contrôle d’Accès Basé sur les Rôles (RBAC)',
          'ClamAV (Inspection Antivirus de Flux Binaires)',
          'Docker, Linux, Nginx & Déploiement Continu',
          'Git / GitHub Workflows & Ingénierie SEO Technique',
        ],
        principle: {
          fr: 'Sécurité par conception (Zero-Trust), couverture des parcours critiques par tests E2E Playwright et déploiements reproductibles.',
          en: 'Security by design (Zero-Trust), automated Playwright E2E coverage on critical paths, and reproducible deployments.',
        },
      },
    ],
  };

  var state = {
    lang: localStorage.getItem('yasser_portfolio_lang') === 'en' ? 'en' : 'fr',
    theme: localStorage.getItem('yasser_portfolio_theme') === 'dark' ? 'dark' : 'light',
    portfolio: DEFAULT_PORTFOLIO_DATA,
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = value;
    }
  }

  function renderCaseStudies() {
    var container = document.getElementById('case-studies-container');
    if (!container) return;

    var lang = state.lang;
    var copy = UI_COPY[lang];
    var studies = state.portfolio.caseStudies || [];

    var html = studies
      .map(function (study) {
        var archItems = (study.architecture || [])
          .map(function (item) {
            return '<li>' + escapeHtml(item[lang]) + '</li>';
          })
          .join('');

        var kpis = (study.metrics || [])
          .map(function (metric) {
            return (
              '<div class="kpi-card">' +
              '<div class="kpi-value">' +
              escapeHtml(metric.value) +
              '</div>' +
              '<div class="kpi-label">' +
              escapeHtml(metric.label[lang]) +
              '</div>' +
              '</div>'
            );
          })
          .join('');

        var stackTags = (study.stack || [])
          .map(function (tech) {
            return '<span class="stack-tag">' + escapeHtml(tech) + '</span>';
          })
          .join('');

        var liveLinkHtml = study.liveUrl
          ? '<a href="' +
            escapeHtml(study.liveUrl) +
            '" target="_blank" rel="noopener noreferrer" class="case-live-link">' +
            escapeHtml(copy.liveLinkText) +
            ' (' +
            escapeHtml(study.liveUrl.replace(/^https?:\/\//, '')) +
            ')</a>'
          : '';

        return (
          '<article class="case-card" id="case-' +
          escapeHtml(study.id) +
          '">' +
          '<div class="case-header">' +
          '<div>' +
          '<div class="case-meta-top">' +
          '<span class="case-number">CASE ' +
          escapeHtml(study.number) +
          '</span>' +
          '<span class="case-status">' +
          escapeHtml(study.status[lang]) +
          '</span>' +
          '</div>' +
          '<h3 class="case-title">' +
          escapeHtml(study.title[lang]) +
          '</h3>' +
          '<p class="case-subtitle">' +
          escapeHtml(study.subtitle[lang]) +
          '</p>' +
          '</div>' +
          liveLinkHtml +
          '</div>' +
          '<div class="case-body-grid">' +
          '<div>' +
          '<div class="case-block-title">' +
          escapeHtml(copy.challengeLabel) +
          '</div>' +
          '<p class="case-challenge-text">' +
          escapeHtml(study.challenge[lang]) +
          '</p>' +
          '<div class="case-block-title">' +
          escapeHtml(copy.archLabel) +
          '</div>' +
          '<ul class="case-arch-list">' +
          archItems +
          '</ul>' +
          '</div>' +
          '<div>' +
          '<div class="case-block-title">' +
          escapeHtml(copy.diagramLabel) +
          '</div>' +
          '<div class="diagram-box">' +
          '<pre class="diagram-pre">' +
          escapeHtml(study.diagram) +
          '</pre>' +
          '</div>' +
          '<div class="case-block-title">' +
          escapeHtml(copy.kpiLabel) +
          '</div>' +
          '<div class="kpi-grid">' +
          kpis +
          '</div>' +
          '</div>' +
          '</div>' +
          '<div class="stack-row">' +
          stackTags +
          '</div>' +
          '</article>'
        );
      })
      .join('');

    container.innerHTML = html;
  }

  function renderSkillMatrix() {
    var container = document.getElementById('matrix-container');
    if (!container) return;

    var lang = state.lang;
    var copy = UI_COPY[lang];
    var pillars = state.portfolio.skillMatrix || [];

    var html = pillars
      .map(function (pillar) {
        var listItems = (pillar.items || [])
          .map(function (item) {
            return '<li>' + escapeHtml(item) + '</li>';
          })
          .join('');

        return (
          '<div class="matrix-card">' +
          '<div>' +
          '<h3 class="matrix-title">' +
          escapeHtml(pillar.category[lang]) +
          '</h3>' +
          '<ul class="matrix-items">' +
          listItems +
          '</ul>' +
          '</div>' +
          '<div class="matrix-principle">' +
          '<strong>' +
          escapeHtml(copy.principlePrefix) +
          '</strong>' +
          escapeHtml(pillar.principle[lang]) +
          '</div>' +
          '</div>'
        );
      })
      .join('');

    container.innerHTML = html;
  }

  function applyTheme(theme) {
    state.theme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('yasser_portfolio_theme', state.theme);

    var lightBtn = document.getElementById('theme-light');
    var darkBtn = document.getElementById('theme-dark');
    if (lightBtn && darkBtn) {
      lightBtn.classList.toggle('active', state.theme === 'light');
      darkBtn.classList.toggle('active', state.theme === 'dark');
    }
  }

  function applyLanguage(lang) {
    state.lang = lang === 'en' ? 'en' : 'fr';
    document.documentElement.setAttribute('lang', state.lang);
    localStorage.setItem('yasser_portfolio_lang', state.lang);

    var copy = UI_COPY[state.lang];
    document.title = copy.pageTitle;

    setText('header-badge', copy.headerBadge);
    setText('nav-cases', copy.navCases);
    setText('nav-skills', copy.navSkills);
    setText('nav-contact', copy.navContact);
    setText('hero-eyebrow-text', copy.heroEyebrow);
    setText('hero-role', copy.heroRole);
    setText('hero-summary', copy.heroSummary);
    setText('btn-cv-fr', copy.btnCvFr);
    setText('btn-cv-en', copy.btnCvEn);
    setText('label-phone', copy.labelPhone);
    setText('label-prod', copy.labelProd);
    setText('cases-index', copy.casesIndex);
    setText('cases-title', copy.casesTitle);
    setText('cases-desc', copy.casesDesc);
    setText('matrix-index', copy.matrixIndex);
    setText('matrix-title', copy.matrixTitle);
    setText('matrix-desc', copy.matrixDesc);
    setText('footer-copy', copy.footerCopy);

    var frBtn = document.getElementById('lang-fr');
    var enBtn = document.getElementById('lang-en');
    if (frBtn && enBtn) {
      frBtn.classList.toggle('active', state.lang === 'fr');
      enBtn.classList.toggle('active', state.lang === 'en');
    }

    renderCaseStudies();
    renderSkillMatrix();
  }

  function bindEvents() {
    var frBtn = document.getElementById('lang-fr');
    var enBtn = document.getElementById('lang-en');
    if (frBtn) {
      frBtn.addEventListener('click', function () {
        applyLanguage('fr');
      });
    }
    if (enBtn) {
      enBtn.addEventListener('click', function () {
        applyLanguage('en');
      });
    }

    var lightBtn = document.getElementById('theme-light');
    var darkBtn = document.getElementById('theme-dark');
    if (lightBtn) {
      lightBtn.addEventListener('click', function () {
        applyTheme('light');
      });
    }
    if (darkBtn) {
      darkBtn.addEventListener('click', function () {
        applyTheme('dark');
      });
    }
  }

  function hydrateFromApi() {
    if (window.location.protocol === 'file:') return;
    fetch('/api/profile')
      .then(function (res) {
        if (!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then(function (payload) {
        if (payload && payload.success && payload.data && payload.data.caseStudies && payload.data.caseStudies.length >= 6) {
          state.portfolio = payload.data;
          renderCaseStudies();
          renderSkillMatrix();
        }
      })
      .catch(function () {
        // Fallback already rendered synchronously
      });
  }

  applyTheme(state.theme);
  applyLanguage(state.lang);
  bindEvents();
  hydrateFromApi();
})();
