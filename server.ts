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
    fr: 'Développeur Full-Stack TypeScript (Next.js, React, NestJS, Node.js, PostgreSQL & Redis)',
    en: 'Full-Stack TypeScript Developer (Next.js, React, NestJS, Node.js, PostgreSQL & Redis)',
  },
  location: {
    fr: 'Casablanca / Rabat, Maroc — Disponible en Présentiel, Hybride & Télétravail International',
    en: 'Casablanca / Rabat, Morocco — Available On-Site, Hybrid & International Remote',
  },
  availability: {
    fr: 'Ouvert aux opportunités de Développement Web & Mobile Full-Stack (CDI / Télétravail / Relocation)',
    en: 'Open to Full-Stack Web & Mobile Development Opportunities (Full-Time / Remote / Relocation)',
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
        fr: 'Avids — Plateforme Bilingue (FR/AR) de Recrutement & Gestion de Candidatures',
        en: 'Avids — Bilingual (FR/AR) Recruitment & Job Board Platform',
      },
      subtitle: {
        fr: 'Plateforme de recrutement bilingue intégrant l’analyse antivirus ClamAV, le stockage objet MinIO S3 et l’authentification MFA.',
        en: 'Bilingual recruitment platform integrating ClamAV antivirus scanning, MinIO S3 object storage, and MFA authentication.',
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
        fr: 'Sécuriser l’upload de dossiers candidats (CV, diplômes, pièces justificatives) tout en offrant une expérience bilingue Français / Arabe (RTL natif) fluide.',
        en: 'Securing candidate document uploads (CVs, diplomas, legal documents) while delivering a responsive French / Arabic (native RTL) user experience.',
      },
      architecture: [
        {
          fr: 'Pipeline d’inspection de fichiers en flux (`Node.js Streams` vers démon `ClamAV`) analysant chaque fichier avant écriture dans le stockage objet privé `MinIO S3`.',
          en: 'Streaming file inspection pipeline (`Node.js Streams` piped to `ClamAV` daemon) scanning uploaded documents prior to `MinIO S3` private bucket storage.',
        },
        {
          fr: 'Sécurité applicative : sessions par cookies `HttpOnly / SameSite=Strict`, protection `CSRF`, authentification multi-facteurs (`MFA / TOTP`) et journalisation d’audit.',
          en: 'Application security: `HttpOnly / SameSite=Strict` cookie sessions, `CSRF` protection, multi-factor authentication (`MFA / TOTP`), and audit logging.',
        },
        {
          fr: 'Tests automatisés de bout en bout (`Playwright E2E`) validant les parcours candidats et recruteurs en Français (`LTR`) et en Arabe (`RTL`).',
          en: 'Automated End-to-End (`Playwright E2E`) tests validating candidate and recruiter workflows across both French (`LTR`) and Arabic (`RTL`) viewports.',
        },
      ],
      metrics: [
        {
          value: 'ClamAV + S3',
          label: { fr: 'Stockage CV sécurisé', en: 'Secure Resume Storage' },
        },
        {
          value: 'FR / AR',
          label: { fr: 'Moteur bilingue LTR/RTL', en: 'Native LTR/RTL Bilingual UI' },
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
        fr: 'Plateforme en production desservant +48 000 chapitres et +61 000 pages indexées sur Google avec proxy de compression WebP Sharp à la volée.',
        en: 'Live production platform serving 48,000+ chapters and 61,000+ Google-indexed pages with an on-the-fly Sharp WebP streaming proxy.',
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
        fr: 'Rendre fluide sur appareils mobiles l’affichage de chapitres composés de plus de 120 planches haute résolution tout en maintenant une empreinte mémoire serveur minimale.',
        en: 'Delivering 60fps mobile rendering for chapters containing 120+ high-resolution vertical strips while maintaining a minimal server memory footprint.',
      },
      architecture: [
        {
          fr: 'Fenêtrage DOM dynamique via `@tanstack/react-virtual` ne maintenant que les planches visibles en mémoire, réduisant la consommation RAM mobile.',
          en: 'Dynamic DOM windowing via `@tanstack/react-virtual` mounting only viewport-adjacent panels, reducing mobile RAM usage.',
        },
        {
          fr: 'Proxy de streaming média (`Sharp` + `Node.js Streams`) convertissant et découpant les planches en `WebP` à la volée avec mise en cache Redis.',
          en: 'Media streaming proxy (`Sharp` + `Node.js Streams`) converting and slicing tall strips into `WebP` on-the-fly with Redis caching.',
        },
        {
          fr: 'Architecture SEO avec sitemaps XML dynamiques et rendu `SSR / ISR` sous Next.js App Router, hébergé sur VPS Linux (Nginx, PM2, Cloudflare).',
          en: 'SEO architecture with dynamic XML sitemaps and `SSR / ISR` caching in Next.js App Router, hosted on a Linux VPS (Nginx, PM2, Cloudflare).',
        },
      ],
      metrics: [
        {
          value: '+48 000',
          label: { fr: 'Chapitres disponibles', en: 'Chapters Available' },
        },
        {
          value: '+61 000',
          label: { fr: 'Pages indexées Google', en: 'Google-Indexed Pages' },
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
        fr: 'Front-End & Développement Mobile',
        en: 'Front-End & Mobile Development',
      },
      items: [
        'TypeScript 5.x (Strict / Zero-Any)',
        'Next.js (App Router, SSR, ISR, RSC)',
        'React 18 / 19 & React Native',
        '@tanstack/react-virtual (DOM Windowing)',
        'Tailwind CSS & Responsive UI',
        'Architecture Bilingue FR / EN / AR (RTL)',
        'Optimisation Core Web Vitals (LCP, CLS, INP)',
      ],
      principle: {
        fr: 'Interfaces fluides à 60fps, rendu serveur hybride SSR/ISR et zéro décalage de mise en page (CLS = 0).',
        en: 'Smooth 60fps interfaces, hybrid SSR/ISR rendering, and zero layout shift (CLS = 0).',
      },
    },
    {
      id: 'backend',
      category: {
        fr: 'Back-End, API & Temps Réel',
        en: 'Back-End, APIs & Real-Time Systems',
      },
      items: [
        'Node.js & Express.js',
        'NestJS (Architecture Modulaire, Guards, Interceptors)',
        'Socket.IO & Redis IoAdapter (WebSockets)',
        'RESTful APIs & Validation Zod',
        'Sharp (Compression Média WebP en Flux)',
        'Files d’attente BullMQ',
        'Turborepo Monorepo',
      ],
      principle: {
        fr: 'Séparation claire en couches (Controllers, Services, Repositories) et validation stricte des entrées.',
        en: 'Clean layer separation (Controllers, Services, Repositories) and strict input validation.',
      },
    },
    {
      id: 'data',
      category: {
        fr: 'Bases de Données, Cache & Stockage',
        en: 'Databases, Caching & Storage',
      },
      items: [
        'PostgreSQL 16 (Transactions ACID, Indexation SQL)',
        'Prisma ORM & Modélisation Relationnelle',
        'Redis (Cache L2, Pub/Sub, Rate Limiting)',
        'MongoDB & Mongoose (Agrégations, Index Composés)',
        'MinIO / AWS S3 (Stockage Objet & URLs Pré-signées)',
        'MySQL & Requêtes SQL',
      ],
      principle: {
        fr: 'Intégrité transactionnelle ACID, élimination des requêtes N+1 et cache multi-niveaux (L1 RAM + L2 Redis).',
        en: 'ACID transactional integrity, N+1 query elimination, and multi-tier caching (L1 RAM + L2 Redis).',
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
        'ClamAV (Analyse Antivirus de Fichiers)',
        'Docker, Linux VPS, Nginx & PM2',
        'Git / GitHub Workflows & SEO Technique',
      ],
      principle: {
        fr: 'Couverture des parcours critiques par tests E2E Playwright, sécurité des sessions et déploiements reproductibles.',
        en: 'Automated Playwright E2E coverage on critical paths, session security, and reproducible deployments.',
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
