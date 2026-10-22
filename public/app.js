(function () {
  'use strict';

  var UI_COPY = {
    fr: {
      pageTitle: 'Yasser Latrech — Ingénieur Logiciel Full-Stack TypeScript | Portfolio d’Ingénierie',
      headerBadge: 'PORTFOLIO D’INGÉNIERIE',
      navCases: 'Études de Cas (04)',
      navSkills: 'Matrice Technique',
      navContact: 'Contact & CV',
      heroEyebrow: 'ARCHITECTURE SYSTÈMES & INGÉNIERIE FULL-STACK EN PRODUCTION',
      heroRole: 'Ingénieur Logiciel Full-Stack TypeScript (Next.js, NestJS, Node.js, PostgreSQL, Redis & Playwright)',
      heroSummary:
        'Conception et déploiement d’architectures logicielles distribuées à haute disponibilité : monorepos multi-applications Turborepo/NestJS, moteurs de diffusion média haute volumétrie (+48 000 chapitres / +61 000 pages indexées), pipelines documentaires sécurisés (ClamAV / MinIO S3) et systèmes temps réel (WebSockets Redis / PostgreSQL ACID).',
      btnCvFr: 'Télécharger CV (FR) — PDF',
      btnCvEn: 'Download CV (EN) — PDF',
      labelPhone: 'TÉLÉPHONE / WHATSAPP',
      labelProd: 'SYSTÈME EN PRODUCTION',
      casesIndex: 'SECTION 01 // ARCHITECTURES EN PRODUCTION',
      casesTitle: 'Études de Cas d’Ingénierie & Systèmes Distribués',
      casesDesc:
        'Analyse détaillée de quatre architectures conçues et développées de bout en bout : topologie des modules, résolution des goulots d’étranglement techniques et indicateurs de performance mesurables.',
      challengeLabel: 'DÉFI D’INGÉNIERIE CRITIQUE',
      archLabel: 'DÉCISIONS D’ARCHITECTURE & IMPLÉMENTATION',
      diagramLabel: 'TOPOLOGIE & FLUX DE DONNÉES',
      kpiLabel: 'INDICATEURS DE PERFORMANCE MESURÉS (KPI)',
      liveLinkText: 'Accéder à la Production',
      matrixIndex: 'SECTION 02 // COMPÉTENCES & PRINCIPES',
      matrixTitle: 'Matrice des Compétences Techniques & Principes d’Ingénierie',
      matrixDesc:
        'Socle technologique structuré autour de quatre piliers complémentaires : ingénierie d’interface, architecture back-end temps réel, persistance transactionnelle et sécurité de bout en bout.',
      principlePrefix: 'Principe directeur : ',
      footerCopy: 'Yasser Latrech — Ingénieur Logiciel Full-Stack TypeScript. Tous droits réservés.',
    },
    en: {
      pageTitle: 'Yasser Latrech — Full-Stack TypeScript Software Engineer | Engineering Portfolio',
      headerBadge: 'ENGINEERING PORTFOLIO',
      navCases: 'Case Studies (04)',
      navSkills: 'Technical Matrix',
      navContact: 'Contact & CV',
      heroEyebrow: 'PRODUCTION SYSTEMS ARCHITECTURE & FULL-STACK ENGINEERING',
      heroRole: 'Full-Stack TypeScript Software Engineer (Next.js, NestJS, Node.js, PostgreSQL, Redis & Playwright)',
      heroSummary:
        'Designing and operating high-availability distributed software architectures: multi-application Turborepo/NestJS monorepos, high-volume media streaming engines (48,000+ chapters / 61,000+ Google-indexed pages), zero-trust document pipelines (ClamAV / MinIO S3), and real-time systems (Redis WebSockets / PostgreSQL ACID).',
      btnCvFr: 'Télécharger CV (FR) — PDF',
      btnCvEn: 'Download CV (EN) — PDF',
      labelPhone: 'PHONE / WHATSAPP',
      labelProd: 'LIVE PRODUCTION SYSTEM',
      casesIndex: 'SECTION 01 // PRODUCTION ARCHITECTURES',
      casesTitle: 'Engineering Case Studies & Distributed Systems',
      casesDesc:
        'In-depth breakdown of four end-to-end production architectures: module topology, technical bottlenecks resolved, and measurable performance indicators.',
      challengeLabel: 'CORE ENGINEERING CHALLENGE',
      archLabel: 'ARCHITECTURAL DECISIONS & IMPLEMENTATION',
      diagramLabel: 'SYSTEM TOPOLOGY & DATA FLOW',
      kpiLabel: 'MEASURED PERFORMANCE INDICATORS (KPIS)',
      liveLinkText: 'Visit Live Production',
      matrixIndex: 'SECTION 02 // CAPABILITIES & PRINCIPLES',
      matrixTitle: 'Technical Stack Matrix & Engineering Principles',
      matrixDesc:
        'Core technical stack structured across four complementary engineering pillars: frontend UI engineering, real-time backend architecture, transactional data persistence, and end-to-end security.',
      principlePrefix: 'Engineering Principle: ',
      footerCopy: 'Yasser Latrech — Full-Stack TypeScript Software Engineer. All rights reserved.',
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
          fr: 'Monorepo Turborepo multi-applications avec coordination d’urgences médicales par WebSockets distribués et transactions ACID PostgreSQL 16.',
          en: 'Multi-application Turborepo monorepo featuring distributed WebSocket medical emergency coordination and PostgreSQL 16 ACID atomic dispatch.',
        },
        status: {
          fr: 'Architecture Production — 30 Modules NestJS',
          en: 'Production Architecture — 30 NestJS Modules',
        },
        stack: [
          'Turborepo Monorepo',
          'NestJS (apps/api — 30 modules)',
          'Next.js (apps/web-patient & apps/web-pro)',
          'Socket.IO + Redis IoAdapter',
          'PostgreSQL 16 (ACID)',
          'Prisma ORM',
          'JWT + RBAC Guards',
        ],
        diagram: [
          '[apps/web-patient] ──(HTTPS / WSS)──► [NestJS API Gateway (30 Modules)]',
          '[apps/web-pro]     ──(RBAC Guards)──►        │                     │',
          '                                   [Redis IoAdapter Pub/Sub]  [PostgreSQL 16 ACID]',
          '                                   (Real-Time GPS Telemetry)  (Atomic Dispatch Lock)',
        ].join('\n'),
        challenge: {
          fr: 'Prévenir la double-assignation d’ambulances lors de pics d’urgences simultanées tout en diffusant la télémétrie GPS en temps réel vers les interfaces patients et régulateurs hospitaliers sans perte de connexion.',
          en: 'Preventing double-assignment of ambulances during concurrent emergency spikes while streaming real-time GPS telemetry to both patient interfaces and hospital dispatchers with zero dropped state.',
        },
        architecture: [
          {
            fr: 'Orchestration Monorepo Turborepo isolant strictement apps/api (30 modules métiers NestJS), apps/web-patient (portail patient), apps/web-pro (tableau de bord praticiens/régulateurs) et les contrats TypeScript partagés.',
            en: 'Turborepo monorepo orchestration strictly isolating apps/api (30 domain NestJS modules), apps/web-patient (patient portal), apps/web-pro (practitioner/dispatcher dashboard), and shared TypeScript contracts.',
          },
          {
            fr: 'Transactions atomiques PostgreSQL 16 avec verrouillage pessimiste/optimiste garantissant qu’une mission d’urgence ne puisse être verrouillée que par un seul équipage ambulancier à la milliseconde près.',
            en: 'PostgreSQL 16 atomic transactions with row-level locking guaranteeing that an emergency dispatch mission can only be claimed by a single ambulance crew under high concurrency.',
          },
          {
            fr: 'Passerelle temps réel Socket.IO propulsée par Redis IoAdapter pour synchroniser les états de mission et la géolocalisation entre plusieurs instances Node.js avec contrôle d’accès granulaire JWT + RBAC Guards.',
            en: 'Real-time Socket.IO gateway powered by Redis IoAdapter to synchronize mission state machines and geolocation across multiple Node.js instances with granular JWT + RBAC Guards access control.',
          },
        ],
        metrics: [
          {
            value: '30',
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
        id: 'avids-v2',
        number: '02',
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
        number: '03',
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
          'Next.js App Router (SSR / ISR)',
          '@tanstack/react-virtual',
          'Sharp Image Stream Proxy',
          'Node.js & TypeScript',
          'Redis L2 + L1 RAM Cache',
          'Dynamic Sitemap Sharding',
          'Schema.org JSON-LD',
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
        id: 'b2b-automation',
        number: '04',
        title: {
          fr: 'Systèmes d’Automatisation B2B WhatsApp & Orchestration de Navigateurs Headless',
          en: 'B2B WhatsApp Automation Systems & Headless Browser Orchestration',
        },
        subtitle: {
          fr: 'Moteurs d’intégration temps réel basés sur le protocole WebSocket WhatsApp (Baileys), files de travailleurs Node.js et automatisation Playwright résiliente.',
          en: 'Real-time integration engines built on the WhatsApp WebSocket protocol (Baileys), Node.js worker queues, and resilient Playwright automation.',
        },
        status: {
          fr: 'Systèmes Distribués & Workflows B2B',
          en: 'Distributed Systems & B2B Workflows',
        },
        stack: [
          'TypeScript Strict',
          'Baileys WhatsApp WebSocket API',
          'Playwright Headless Chromium',
          'Node.js Worker Queues',
          'Exponential Backoff & Circuit Breakers',
          'Structured Telemetry',
        ],
        diagram: [
          '[Événements Métier B2B] ──► [File d’Attente Node.js (Rate Limiter & Backoff)]',
          '                                   ├──► [Baileys WebSocket] ──► Notification WhatsApp',
          '                                   └──► [Playwright Pool]   ──► Extraction / Synchronisation',
        ].join('\n'),
        challenge: {
          fr: 'Automatiser les communications transactionnelles B2B et l’extraction de données structurées sur des portails externes dépourvus d’API publique, avec reconnexion automatique et tolérance aux pannes réseau.',
          en: 'Automating transactional B2B messaging and structured data synchronization across external portals lacking public APIs, with deterministic auto-reconnection and network fault tolerance.',
        },
        architecture: [
          {
            fr: 'Connexion directe au protocole multi-appareils WhatsApp via Baileys WebSocket API avec persistance chiffrée des clés de session, reconnexion exponentielle et gestion déterministe des accusés de réception.',
            en: 'Direct integration with the WhatsApp multi-device protocol via Baileys WebSocket API featuring persistent session state, exponential backoff reconnection, and deterministic delivery tracking.',
          },
          {
            fr: 'Pool de navigateurs Playwright isolés par contextes légers (BrowserContext) avec blocage des ressources superflues, rotation d’empreintes et reprise automatique sur erreur.',
            en: 'Pooled Playwright browser automation using isolated lightweight contexts (BrowserContext), unnecessary asset interception, and automated retry state machines.',
          },
          {
            fr: 'Ordonnanceur de tâches Node.js régulant le débit d’envoi (Token Bucket Rate Limiting) pour garantir la stabilité des sessions longue durée.',
            en: 'Asynchronous Node.js job scheduler enforcing token-bucket rate limiting to guarantee long-lived session stability without throttling.',
          },
        ],
        metrics: [
          {
            value: '99.9%',
            label: { fr: 'Disponibilité de session WebSocket', en: 'WebSocket Session Uptime' },
          },
          {
            value: '< 200ms',
            label: { fr: 'Traitement événementiel Node.js', en: 'Node.js Event Dispatch' },
          },
          {
            value: '100%',
            label: { fr: 'Typage TypeScript Strict', en: 'Strict TypeScript Coverage' },
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
        if (payload && payload.success && payload.data) {
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
