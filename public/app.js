(function () {
  'use strict';

  var UI_COPY = {
    fr: {
      pageTitle: 'Yasser Latrech — Développeur Full-Stack TypeScript | Portfolio Technique',
      headerBadge: 'PORTFOLIO FULL-STACK',
      navCases: 'Études de Cas (03)',
      navSkills: 'Matrice Technique',
      navContact: 'Contact & CV',
      heroEyebrow: 'DÉVELOPPEMENT WEB & MOBILE FULL-STACK',
      heroRole: 'Développeur Full-Stack TypeScript (Next.js, React, NestJS, Node.js, PostgreSQL & Redis)',
      heroSummary:
        'Développement et mise en production d’applications web et mobiles : plateforme de santé et régulation d’ambulances temps réel (Hospidar — Next.js / NestJS / PostgreSQL / Redis), plateforme de recrutement bilingue (Avids — MinIO S3 / ClamAV / Playwright) et plateforme de lecture numérique haute volumétrie (+48 000 chapitres sur man9a.net).',
      btnCvFr: 'Télécharger CV (FR) — PDF',
      btnCvEn: 'Download CV (EN) — PDF',
      labelPhone: 'TÉLÉPHONE / WHATSAPP',
      labelProd: 'SYSTÈME EN PRODUCTION',
      casesIndex: 'SECTION 01 // PROJETS & RÉALISATIONS TECHNIQUES',
      casesTitle: 'Études de Cas Techniques & Projets Développés',
      casesDesc:
        'Présentation détaillée de trois plateformes conçues et développées : architecture technique, fonctionnalités clés et technologies utilisées.',
      challengeLabel: 'PROBLÉMATIQUE TECHNIQUE',
      archLabel: 'IMPLÉMENTATION & ARCHITECTURE',
      diagramLabel: 'TOPOLOGIE & FLUX DE DONNÉES',
      kpiLabel: 'POINTS TECHNIQUES CLÉS',
      liveLinkText: 'Accéder à la Production',
      matrixIndex: 'SECTION 02 // COMPÉTENCES TECHNIQUES',
      matrixTitle: 'Compétences Techniques & Stack Utilisée',
      matrixDesc:
        'Technologies utilisées au quotidien pour le développement Front-End & Mobile, Back-End & APIs, bases de données & cache, et déploiement Linux / tests E2E.',
      principlePrefix: 'Focus : ',
      footerCopy: 'Yasser Latrech — Développeur Full-Stack TypeScript.',
    },
    en: {
      pageTitle: 'Yasser Latrech — Full-Stack TypeScript Developer | Technical Portfolio',
      headerBadge: 'FULL-STACK PORTFOLIO',
      navCases: 'Case Studies (03)',
      navSkills: 'Technical Stack',
      navContact: 'Contact & CV',
      heroEyebrow: 'FULL-STACK WEB & MOBILE DEVELOPMENT',
      heroRole: 'Full-Stack TypeScript Developer (Next.js, React, NestJS, Node.js, PostgreSQL & Redis)',
      heroSummary:
        'Building and deploying full-stack web and mobile applications: healthcare & real-time ambulance dispatch platform (Hospidar — Next.js / NestJS / PostgreSQL / Redis), bilingual recruitment platform (Avids — MinIO S3 / ClamAV / Playwright), and high-traffic digital reading platform (48,000+ chapters on man9a.net).',
      btnCvFr: 'Télécharger CV (FR) — PDF',
      btnCvEn: 'Download CV (EN) — PDF',
      labelPhone: 'PHONE / WHATSAPP',
      labelProd: 'LIVE PRODUCTION SYSTEM',
      casesIndex: 'SECTION 01 // PROJECTS & CASE STUDIES',
      casesTitle: 'Technical Case Studies & Projects Built',
      casesDesc:
        'Detailed overview of three full-stack platforms: architecture, core features implemented, and technical stack.',
      challengeLabel: 'TECHNICAL CHALLENGE',
      archLabel: 'ARCHITECTURE & IMPLEMENTATION',
      diagramLabel: 'SYSTEM TOPOLOGY & DATA FLOW',
      kpiLabel: 'KEY TECHNICAL HIGHLIGHTS',
      liveLinkText: 'Visit Live Production',
      matrixIndex: 'SECTION 02 // TECHNICAL STACK',
      matrixTitle: 'Technical Skills & Stack',
      matrixDesc:
        'Technologies used across frontend & mobile development, backend APIs & real-time services, databases & caching, and E2E testing / Linux VPS deployment.',
      principlePrefix: 'Focus: ',
      footerCopy: 'Yasser Latrech — Full-Stack TypeScript Developer.',
    },
  };

  var DEFAULT_PORTFOLIO_DATA = {
    caseStudies: [
      {
        id: 'hospidar',
        number: '01',
        title: {
          fr: 'Hospidar — Plateforme de Santé & Régulation d’Ambulances en Temps Réel',
          en: 'Hospidar — Healthcare & Real-Time Ambulance Dispatch Platform',
        },
        subtitle: {
          fr: 'Portails web (Patient, Médecin, Admin) en Next.js/React, API NestJS/PostgreSQL/Prisma, application mobile React Native et suivi GPS par WebSockets Redis.',
          en: 'Web portals (Patient, Doctor, Admin) in Next.js/React, NestJS/PostgreSQL/Prisma API, React Native mobile app, and Redis WebSocket GPS tracking.',
        },
        status: {
          fr: 'Customer Obsession (Fév. 2026 – Présent)',
          en: 'Customer Obsession (Feb. 2026 – Present)',
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
        id: 'avids-v2',
        number: '02',
        title: {
          fr: 'Avids — Plateforme Bilingue (FR/AR) de Recrutement & Gestion de Candidatures',
          en: 'Avids — Bilingual (FR/AR) Recruitment & Job Board Platform',
        },
        subtitle: {
          fr: 'Plateforme de recrutement bilingue intégrant le stockage privé de CV sous MinIO (S3), l’analyse antivirus ClamAV et l’authentification MFA.',
          en: 'Bilingual recruitment platform integrating MinIO (S3) private resume storage, ClamAV antivirus scanning, and MFA authentication.',
        },
        status: {
          fr: 'Customer Obsession (Fév. 2026 – Présent)',
          en: 'Customer Obsession (Feb. 2026 – Present)',
        },
        stack: [
          'Next.js App Router (FR/AR RTL)',
          'Node.js & TypeScript',
          'Prisma ORM & PostgreSQL',
          'MinIO S3 Object Storage',
          'ClamAV Antivirus',
          'HttpOnly Cookies + CSRF + MFA',
          'Playwright E2E Tests',
        ],
        diagram: [
          '[Candidat FR/AR] ──(Upload Stream)──► [ClamAV TCP Daemon Scan]',
          '                                              │ (Clean Binary)',
          '                                              ▼',
          '[PostgreSQL + Prisma] ◄──(Metadata)── [MinIO S3 Private Bucket (Presigned URLs)]',
        ].join('\n'),
        challenge: {
          fr: 'Sécuriser l’upload de dossiers candidats (CV, diplômes, pièces justificatives) tout en offrant une interface bilingue Français / Arabe (RTL) rapide et accessible.',
          en: 'Securing candidate document uploads (CVs, diplomas) while delivering a responsive French / Arabic (RTL) user interface.',
        },
        architecture: [
          {
            fr: 'Inspection des fichiers par flux (Node.js Streams vers démon ClamAV) avant écriture dans le stockage privé MinIO S3.',
            en: 'Stream-based file inspection (Node.js Streams piped to ClamAV daemon) prior to MinIO S3 private bucket storage.',
          },
          {
            fr: 'Authentification sécurisée : sessions par cookies HttpOnly / SameSite=Strict, protection CSRF, authentification multi-facteurs (MFA / TOTP) et journalisation.',
            en: 'Hardened authentication: HttpOnly / SameSite=Strict cookie sessions, CSRF protection, multi-factor authentication (MFA / TOTP), and audit logs.',
          },
          {
            fr: 'Tests automatisés de bout en bout (Playwright E2E) validant les parcours candidats et recruteurs en Français (LTR) et en Arabe (RTL).',
            en: 'Automated End-to-End (Playwright E2E) tests validating candidate and recruiter workflows in French (LTR) and Arabic (RTL).',
          },
        ],
        metrics: [
          {
            value: 'ClamAV + S3',
            label: { fr: 'Stockage CV sécurisé', en: 'Secure Resume Storage' },
          },
          {
            value: 'FR / AR',
            label: { fr: 'Interface bilingue LTR/RTL', en: 'Bilingual LTR/RTL UI' },
          },
          {
            value: 'Playwright',
            label: { fr: 'Tests E2E automatisés', en: 'Automated E2E Suite' },
          },
        ],
      },
      {
        id: 'man9a',
        number: '03',
        title: {
          fr: 'Man9a.net — Plateforme Web de Lecture Numérique',
          en: 'Man9a.net — Digital Reading Web Platform',
        },
        subtitle: {
          fr: 'Plateforme en production desservant +48 000 chapitres avec compression d’images WebP Sharp à la volée et lecteur virtualisé.',
          en: 'Production platform serving 48,000+ chapters with on-the-fly Sharp WebP image compression and virtualized scrolling.',
        },
        status: {
          fr: 'En Production (man9a.net)',
          en: 'Live in Production (man9a.net)',
        },
        liveUrl: 'https://man9a.net',
        stack: [
          'Next.js App Router (SSR / ISR)',
          '@tanstack/react-virtual',
          'Sharp Image Proxy',
          'Node.js, Express & TypeScript',
          'MongoDB & Redis Cache',
          'BullMQ Workers',
          'Linux VPS (Nginx, PM2, Cloudflare)',
        ],
        diagram: [
          '[Lecteur Mobile] ◄──(@tanstack/react-virtual DOM Windowing: 5-7 noeuds)──┐',
          '                                                                         │',
          '[Upstream CDN] ──(Stream)──► [API /stream/image + Sharp WebP] ──(Cache)──┘',
        ].join('\n'),
        challenge: {
          fr: 'Afficher de manière fluide sur mobile des chapitres de plus de 120 planches haute résolution tout en limitant la consommation mémoire du navigateur et du serveur.',
          en: 'Smoothly rendering chapters with 120+ high-resolution vertical images on mobile browsers while keeping client and server memory usage low.',
        },
        architecture: [
          {
            fr: 'Virtualisation du DOM via @tanstack/react-virtual ne gardant que les images visibles à l’écran, réduisant la consommation RAM sur mobile.',
            en: 'DOM virtualization via @tanstack/react-virtual keeping only viewport-visible images mounted in the DOM.',
          },
          {
            fr: 'Proxy de streaming d’images (Sharp + Node.js Streams) convertissant les images en WebP à la volée avec mise en cache Redis.',
            en: 'Image streaming proxy (Sharp + Node.js Streams) converting images to WebP on-the-fly with Redis caching.',
          },
          {
            fr: 'Rendu SSR / ISR et sitemaps XML dynamiques sous Next.js App Router, hébergé sur VPS Linux avec Nginx, PM2 et Cloudflare.',
            en: 'SSR / ISR rendering and dynamic XML sitemaps in Next.js App Router, hosted on a Linux VPS with Nginx, PM2, and Cloudflare.',
          },
        ],
        metrics: [
          {
            value: '+48 000',
            label: { fr: 'Chapitres disponibles', en: 'Chapters Available' },
          },
          {
            value: 'SSR / ISR',
            label: { fr: 'Architecture Next.js', en: 'Next.js Architecture' },
          },
          {
            value: 'Sharp WebP',
            label: { fr: 'Optimisation d’images', en: 'Image Optimization' },
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
