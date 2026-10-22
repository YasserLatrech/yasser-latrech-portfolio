import http, { IncomingMessage, ServerResponse } from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = Number(process.env.PORT) || 4300;

export interface BilingualText {
  readonly fr: string;
  readonly en: string;
}

export interface CaseStudyMetric {
  readonly value: string;
  readonly label: BilingualText;
}

export interface CaseStudy {
  readonly id: string;
  readonly number: string;
  readonly title: BilingualText;
  readonly subtitle: BilingualText;
  readonly status: BilingualText;
  readonly liveUrl?: string;
  readonly stack: readonly string[];
  readonly diagram: string;
  readonly challenge: BilingualText;
  readonly architecture: readonly BilingualText[];
  readonly metrics: readonly CaseStudyMetric[];
}

export interface SkillPillar {
  readonly id: string;
  readonly category: BilingualText;
  readonly items: readonly string[];
  readonly principle: BilingualText;
}

export interface PortfolioProfile {
  readonly fullName: string;
  readonly role: BilingualText;
  readonly location: BilingualText;
  readonly availability: BilingualText;
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly github: string;
    readonly linkedin: string;
    readonly productionUrl: string;
    readonly cvFrUrl: string;
    readonly cvEnUrl: string;
  };
  readonly caseStudies: readonly CaseStudy[];
  readonly skillMatrix: readonly SkillPillar[];
}

export type ApiResponse<T> =
  | { readonly success: true; readonly data: T; readonly timestamp: string }
  | { readonly success: false; readonly error: { readonly code: string; readonly message: string } };

const PORTFOLIO_DATA: PortfolioProfile = {
  fullName: 'Yasser Latrech',
  role: {
    fr: 'Ingénieur Logiciel Full-Stack TypeScript (Next.js, NestJS, Node.js, PostgreSQL, Redis & Playwright)',
    en: 'Full-Stack TypeScript Software Engineer (Next.js, NestJS, Node.js, PostgreSQL, Redis & Playwright)',
  },
  location: {
    fr: 'Casablanca / Rabat, Maroc — Disponible en Présentiel, Hybride & Télétravail International',
    en: 'Casablanca / Rabat, Morocco — Available On-Site, Hybrid & International Remote',
  },
  availability: {
    fr: 'Ouvert aux opportunités d’Ingénierie Logicielle Full-Stack & Architecture Systèmes',
    en: 'Open to Full-Stack Software Engineering & Systems Architecture Opportunities',
  },
  contact: {
    email: 'yasser.lat2002@hotmail.com',
    phone: '+212 640-102787',
    github: 'https://github.com/YasserLatrech',
    linkedin: 'https://www.linkedin.com/in/yasser-latrech-373968333',
    productionUrl: 'https://man9a.net',
    cvFrUrl: '/cv/CV_Yasser_Latrech_FR.pdf',
    cvEnUrl: '/cv/CV_Yasser_Latrech_EN.pdf',
  },
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
          fr: 'Orchestration Monorepo Turborepo isolant strictement `apps/api` (30 modules métiers NestJS), `apps/web-patient` (portail patient), `apps/web-pro` (tableau de bord praticiens/régulateurs) et les contrats TypeScript partagés.',
          en: 'Turborepo monorepo orchestration strictly isolating `apps/api` (30 domain NestJS modules), `apps/web-patient` (patient portal), `apps/web-pro` (practitioner/dispatcher dashboard), and shared TypeScript contracts.',
        },
        {
          fr: 'Transactions atomiques PostgreSQL 16 avec verrouillage pessimiste/optimiste garantissant qu’une mission d’urgence ne puisse être verrouillée que par un seul équipage ambulancier à la milliseconde près.',
          en: 'PostgreSQL 16 atomic transactions with row-level locking guaranteeing that an emergency dispatch mission can only be claimed by a single ambulance crew under high concurrency.',
        },
        {
          fr: 'Passerelle temps réel Socket.IO propulsée par `Redis IoAdapter` pour synchroniser les états de mission et la géolocalisation entre plusieurs instances Node.js avec contrôle d’accès granulaire `JWT + RBAC Guards`.',
          en: 'Real-time Socket.IO gateway powered by `Redis IoAdapter` to synchronize mission state machines and geolocation across multiple Node.js instances with granular `JWT + RBAC Guards` access control.',
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
          fr: 'Pipeline d’inspection binaire en flux (`Node.js Streams` vers démon `ClamAV`) analysant chaque fichier en mémoire avant toute écriture dans le stockage objet privé `MinIO S3`, rejetant instantanément les fichiers compromis.',
          en: 'Streaming binary inspection pipeline (`Node.js Streams` piped to `ClamAV` daemon) scanning every uploaded document prior to `MinIO S3` private bucket persistence, immediately rejecting compromised payloads.',
        },
        {
          fr: 'Sécurité applicative de bout en bout : sessions par cookies `HttpOnly / SameSite=Strict`, protection `CSRF` par double soumission de jeton, authentification multi-facteurs (`MFA / TOTP`) et journalisation d’audit.',
          en: 'End-to-end application security: `HttpOnly / SameSite=Strict` cookie sessions, double-submit token `CSRF` protection, multi-factor authentication (`MFA / TOTP`), and immutable audit logging.',
        },
        {
          fr: 'Matrice de tests automatisés de bout en bout (`Playwright E2E`) validant les parcours candidats et recruteurs en Français (`LTR`) et en Arabe (`RTL`).',
          en: 'Automated End-to-End (`Playwright E2E`) test matrix validating candidate and recruiter workflows across both French (`LTR`) and Arabic (`RTL`) viewports.',
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
          fr: 'Fenêtrage DOM dynamique via `@tanstack/react-virtual` ne maintenant que les planches visibles en mémoire et décodant les images en arrière-plan (`img.decode()`), réduisant la consommation RAM mobile de 75%.',
          en: 'Dynamic DOM windowing via `@tanstack/react-virtual` mounting only viewport-adjacent panels and pre-decoding images off the main thread (`img.decode()`), reducing mobile RAM usage by 75%.',
        },
        {
          fr: 'Proxy de streaming média sans tampon complet (`Sharp` + `Node.js Streams`) convertissant et découpant les planches en `WebP` à la volée avec rafraîchissement transparent des jetons CDN expirés.',
          en: 'Zero-full-buffer media streaming proxy (`Sharp` + `Node.js Streams`) transcoding and slicing tall strips into `WebP` on-the-fly with transparent upstream CDN token refresh.',
        },
        {
          fr: 'Architecture SEO programmatique avec sitemaps partitionnés et rendu hybride `SSR / ISR`, propulsant plus de 61 000 pages indexées sur Google Search.',
          en: 'Programmatic SEO architecture with sharded XML sitemaps and hybrid `SSR / ISR` caching, powering 61,000+ indexed pages on Google Search.',
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
          fr: 'Connexion directe au protocole multi-appareils WhatsApp via `Baileys WebSocket API` avec persistance chiffrée des clés de session, reconnexion exponentielle et gestion déterministe des accusés de réception.',
          en: 'Direct integration with the WhatsApp multi-device protocol via `Baileys WebSocket API` featuring persistent session state, exponential backoff reconnection, and deterministic delivery tracking.',
        },
        {
          fr: 'Pool de navigateurs `Playwright` isolés par contextes légers (`BrowserContext`) avec blocage des ressources superflues, rotation d’empreintes et reprise automatique sur erreur.',
          en: 'Pooled `Playwright` browser automation using isolated lightweight contexts (`BrowserContext`), unnecessary asset interception, and automated retry state machines.',
        },
        {
          fr: 'Ordonnanceur de tâches `Node.js` régulant le débit d’envoi (`Token Bucket Rate Limiting`) pour garantir la stabilité des sessions longue durée.',
          en: 'Asynchronous `Node.js` job scheduler enforcing token-bucket rate limiting to guarantee long-lived session stability without throttling.',
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
        fr: 'Front-End & Ingénierie d’Interface',
        en: 'Front-End & UI Engineering',
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
        fr: 'Back-End, API & Temps Réel',
        en: 'Back-End, APIs & Real-Time Systems',
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
        fr: 'Bases de Données, Cache & Stockage',
        en: 'Databases, Caching & Storage',
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
        fr: 'Sécurité, Tests E2E & DevOps',
        en: 'Security, E2E Testing & DevOps',
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

const MIME_TYPES: Readonly<Record<string, string>> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

function sendJson<T>(res: ServerResponse, statusCode: number, payload: ApiResponse<T>): void {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, max-age=60',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(body);
}

async function handleRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const method = req.method ?? 'GET';
  const rawUrl = req.url ?? '/';
  const parsedUrl = new URL(rawUrl, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  if (method !== 'GET' && method !== 'HEAD') {
    sendJson(res, 405, {
      success: false,
      error: { code: 'METHOD_NOT_ALLOWED', message: 'Only GET and HEAD requests are supported.' },
    });
    return;
  }

  if (pathname === '/api/health') {
    sendJson(res, 200, {
      success: true,
      data: {
        status: 'ok',
        service: 'yasser-latrech-portfolio',
        port: PORT,
      },
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (pathname === '/api/profile') {
    sendJson(res, 200, {
      success: true,
      data: PORTFOLIO_DATA,
      timestamp: new Date().toISOString(),
    });
    return;
  }

  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const resolvedPath = path.resolve(PUBLIC_DIR, relativePath);

  if (!resolvedPath.startsWith(PUBLIC_DIR)) {
    sendJson(res, 403, {
      success: false,
      error: { code: 'FORBIDDEN', message: 'Access denied.' },
    });
    return;
  }

  try {
    const stat = await fs.stat(resolvedPath);
    if (!stat.isFile()) {
      throw new Error('Not a file');
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] ?? 'application/octet-stream';
    const content = await fs.readFile(resolvedPath);

    const headers: Record<string, string> = {
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
    };

    if (ext === '.pdf') {
      const fileName = path.basename(resolvedPath);
      headers['Content-Disposition'] = `inline; filename="${fileName}"`;
    }

    res.writeHead(200, headers);
    res.end(method === 'HEAD' ? undefined : content);
  } catch {
    if (pathname !== '/' && !path.extname(pathname)) {
      try {
        const indexHtml = await fs.readFile(path.join(PUBLIC_DIR, 'index.html'));
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Content-Type-Options': 'nosniff',
        });
        res.end(method === 'HEAD' ? undefined : indexHtml);
        return;
      } catch {
        // Fall through to 404
      }
    }

    sendJson(res, 404, {
      success: false,
      error: { code: 'NOT_FOUND', message: `Resource ${pathname} not found.` },
    });
  }
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  void handleRequest(req, res).catch((err: unknown) => {
    const message = err instanceof Error ? err.message : 'Internal server error';
    sendJson(res, 500, {
      success: false,
      error: { code: 'INTERNAL_ERROR', message },
    });
  });
});

server.listen(PORT, () => {
  process.stdout.write(
    `[yasser-latrech-portfolio] Public Engineering Portfolio listening on http://localhost:${PORT}\n`
  );
});
