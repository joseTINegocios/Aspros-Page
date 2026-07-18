---
title: Aspros-Page Architecture v1
status: Draft
stack: Astro 5 + Vue 3 + Bootstrap 5 + TypeScript
deployment: Static (Netlify / Vercel / Cloudflare Pages)
data: Hardcoded TypeScript
last-updated: 2026-07-18
---

# Aspros-Page Architecture v1

## Domain Exploration

Before any code, grounded in the subject:

| Layer | Finding |
|---|---|
| **World** | Agricultura mexicana, maíz, campo, productores, semillas, híbridos, cosecha, región |
| **Palette source** | Maíz seco (dorado #C9D300), follaje vivo (#1f422c), cielo, tierra, mazorca |
| **Signature** | Mapa de zonas agrícolas como navegación principal — elegir tu región primero, luego ver híbridos |
| **Defaults rejected** | "Dashboard genérico de productos" → lugar de cultivo primero; "Card grid plano" → tarjetas con textura orgánica; "Formulario frío" → cálido, rural, cercano |

## Stack

```
Frontend:    Astro 5 + Vue 3 (7 islands) + Bootstrap 5 + TypeScript
Animations:  AOS (scroll reveal) + Swiper.js (carousels) + CSS transitions
Data:        Hardcoded TypeScript (src/data/*.ts)
Build:       Static HTML via Astro SSG
Deploy:      Any static host (Netlify, Vercel, Cloudflare Pages, S3)
```

### Why Astro over Vue SPA

| Factor | Astro + Vue | Vue SPA |
|---|---|---|
| SEO | HTML nativo por ruta | Requiere SSR/Prerender |
| JS payload | 0 JS en contenido, solo islands | Todo el bundle se descarga |
| Build output | Archivos estáticos | Necesita servidor Node |
| Simplicidad | Markdown + HTML directo | Boilerplate Vue Router |
| Performance | 95+ Lighthouse baseline | Depende de bundle |

### Why hardcoded data (no backend)

- v1 es iterativa — el contenido cambia poco (13 híbridos, 6 zonas, 19 testimonios)
- Astro genera HTML en build time desde datos TS → cero llamadas API
- Migrar a CMS (Strapi, WordPress headless) en v2 solo cambia el origen de datos

## Structure

```
aspros-page/
├── public/
│   ├── favicon.ico
│   └── images/                 ← WebP images (hybrids, zones, testimonials, slides, logos)
├── src/
│   ├── pages/
│   │   ├── index.astro         ← Homepage (Hero → Stats → About → Zones → Products → Innovation → Testimonials → Contact)
│   │   ├── hibridos/
│   │   │   ├── index.astro     ← Catalog with filters
│   │   │   └── [slug].astro    ← Detail page via getStaticPaths()
│   │   ├── zonas/
│   │   │   └── index.astro     ← Zones page with accordion
│   │   ├── innovacion.astro    ← Innovation page
│   │   └── 404.astro
│   ├── layouts/
│   │   └── BaseLayout.astro    ← HTML shell, meta, fonts, bootstrap
│   ├── components/
│   │   ├── ui/                 ← BaseButton, BaseCard, BaseSection, BaseImage
│   │   ├── home/               ← HeroSlider.vue*, StatsSection, AboutSection, ZoneSelector, FeaturedHybrids.vue*
│   │   │                         InnovationPreview, Testimonials.vue*, ContactForm.vue*
│   │   ├── hybrid/             ← HybridCard, HybridGrid, HybridFilters.vue*, HybridGallery.vue*
│   │   │                         HybridTabs.vue*, HybridRelated
│   │   ├── contact/            ← ContactForm.vue*, ContactInfo
│   │   └── layout/             ← Navbar, Footer, Breadcrumbs, ScrollToTop
│   ├── data/                   ← All hardcoded content
│   │   ├── hybrids.ts
│   │   ├── zones.ts
│   │   ├── testimonials.ts
│   │   ├── innovations.ts
│   │   ├── config.ts
│   │   └── navigation.ts
│   ├── styles/
│   │   ├── global.scss         ← Variables CSS, reset
│   │   ├── _bootstrap.scss     ← Bootstrap overrides
│   │   └── _animations.scss
│   └── utils/
│       ├── formatters.ts
│       ├── slugs.ts
│       └── images.ts
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

*Vue islands (7 total): only interactive components load JS*

## Design System

### Palette

Extracted from the current site and its domain:

```
--green-dark:    #1f422c    ← Primary brand (text, headers, backgrounds)
--green-light:   #2a5a3a    ← Hover states, secondary surfaces
--accent-gold:   #C9D300    ← Highlights, CTAs, badges
--accent-bright: #FFEC00    ← Bullet points, emphasis
--white:         #ffffff    ← Text on dark, cards
--dark:          #1a1a1a    ← Footer, overlays
--cream:         #f5f2ed    ← Section backgrounds (agricultural paper feel)
```

### Typography

```
Display:  Inter 700 / 800 (headings, hero titles)
Body:     Inter 400 / 500 (paragraphs, labels)
Monospace: JetBrains Mono (data, technical specs)
Scale:    1.25 (major third) — 14px body
```

### Elevation

Subtle shadows, no mixed depth. Three layers:

```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06)
--shadow-md: 0 4px 12px rgba(0,0,0,0.08)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.1)
```

### Border radius

```
--radius-sm: 6px   (buttons, inputs)
--radius-md: 12px  (cards)
--radius-lg: 20px  (modals, hero)
```

### Spacing

Base unit 8px, multiples: 8, 16, 24, 32, 48, 64, 96.

## Routes

| Route | Page | Content |
|---|---|---|
| `/` | Homepage | Hero slider (5 slides) → Stats → Nosotros → Productos → Zonas → Innovación → Testimonios → Contacto |
| `/hibridos` | Catalog | Grid + filters by zone |
| `/hibridos/[slug]` | Detail | Gallery, video, tabs (planta/mazorca/grano), ficha técnica, relacionados |
| `/zonas` | Zones | 6 zones with accordion + hybrid lists |
| `/innovacion` | Innovation | Agro Optimus, Doble Haploides, Marcadores Moleculares |
| `/404` | Not Found | Custom 404 |

## Components (Interactive = Vue Islands)

### Astro components (0 JS, static HTML)

| Component | Role |
|---|---|
| `Navbar.astro` | Responsive nav with sticky behavior, 2 logo states |
| `Footer.astro` | Logo, navigation, social links, copyright |
| `Breadcrumbs.astro` | SEO breadcrumb trail |
| `HeroSlide.astro` | Individual slide layout (image, logo, bullets, CTA) |
| `StatsSection.astro` | Static counter display with CSS animation |
| `AboutSection.astro` | 2x2 grid: Historia, Valores, Misión, Visión |
| `ZoneSelector.astro` | Grid of 6 zones with hover effects |
| `HybridCard.astro` | Product card: image, name, cycle, tag |
| `HybridGrid.astro` | Responsive grid container |
| `HybridRelated.astro` | Related products grid |
| `InnovationPreview.astro` | Innovation section excerpt |
| `InnovationCard.astro` | Innovation article card |
| `ContactInfo.astro` | Phone, email, address, social links |
| `BaseSection.astro` | Reusable section wrapper with title |
| `BaseButton.astro` | Button with variants |
| `BaseCard.astro` | Generic card container |
| `BaseImage.astro` | WebP image with lazy loading |

### Vue islands (client JS)

| Component | Role | Client directive |
|---|---|---|
| `HeroSlider.vue` | Swiper carousel, 5 slides, autoplay | `client:load` |
| `FeaturedHybrids.vue` | Swiper carousel of featured hybrids | `client:visible` |
| `Testimonials.vue` | Swiper carousel, 19 testimonials | `client:visible` |
| `HybridFilters.vue` | Filter by zone (client-side filtering) | `client:visible` |
| `HybridGallery.vue` | Lightbox image gallery | `client:idle` |
| `HybridTabs.vue` | Tab switching (planta/mazorca/grano) | `client:idle` |
| `ContactForm.vue` | Form validation + submit handler | `client:load` |

## Data Architecture

All content lives in `src/data/*.ts` as typed exports:

- `hybrids.ts` → `Hybrid[]` (13 hybrids with full specs)
- `zones.ts` → `Zone[]` (6 zones with hybrid relations)
- `testimonials.ts` → `Testimonial[]` (19 testimonials)
- `innovations.ts` → `Innovation[]`
- `config.ts` → site config, stats, hero slides, social links
- `navigation.ts` → nav menu items

Astro imports these in pages and generates HTML at build time.

## Homepage flow (in order)

```
1. HeroSlider        ← 5 slides (Cromo, Predator, Sargento, Comanche, Espartaco)
2. StatsSection      ← "Más de 40 años", 13 híbridos, 6 zonas
3. AboutSection      ← Historia, Valores, Misión, Visión (from current site)
4. ZoneSelector      ← 6 zones as cards → links to /zonas
5. FeaturedHybrids   ← Carousel of destacado hybrids
6. InnovationPreview ← Excerpt with CTA → /innovacion
7. Testimonials      ← Carousel of farmer testimonials
8. ContactForm       ← Form (name, email, city, state, phone, subject, message)
   ContactInfo       ← Phone, email, social links
9. Footer            ← Logo, nav, social, copyright
```

## Hybrids (from current site)

| Hybrid | Zone | Tech | Destacado |
|---|---|---|---|
| Cromo | Bajío, Occidente, Norte | Agro Optimus | Sí |
| Predator | Pacífico | Agro Optimus | Sí |
| Sargento | Pacífico | — | Sí |
| Espartaco | Bajío, Occidente, Norte | — | Sí |
| Comanche | Centro (Valles Altos) | — | Sí |
| Cherokee | Centro | — | No |
| Aníbal | Bajío, Occidente | — | No |
| Supremo | Bajío, Occidente, Norte | — | No |
| Samurái | Bajío, Occidente, Norte | — | No |
| Patriota | Bajío, Occidente | — | No |
| General | Pacífico, Sur | — | No |
| Magnum | Pacífico | — | No |
| XT-3402 | Sur | — | No |

## Zones (from current site)

| Zone | Hybrids |
|---|---|
| Bajío | Cromo, Espartaco, Patriota, Supremo, Samurái, Aníbal |
| Occidente | Cromo, Espartaco, Patriota, Supremo, Samurái, Aníbal |
| Pacífico | Predator, Magnum, Sargento, General |
| Centro (Valles Altos) | Comanche, Cherokee |
| Norte | Samurái, Supremo, Espartaco, Cromo |
| Sur | XT-3402, General |

## Responsive Strategy

| Breakpoint | Grid | Nav | Hero |
|---|---|---|---|
| ≥1200px | 4 cols | Horizontal | Full slider |
| 992–1199px | 3 cols | Horizontal | Slider |
| 768–991px | 2 cols | Hamburger | Static image |
| <768px | 1 col | Hamburger | Static image, larger text |

## Animation Strategy

| Effect | Method | Scope |
|---|---|---|
| Scroll reveal | AOS library | Section headings, cards |
| Carousels | Swiper.js (Vue islands) | Hero, products, testimonials |
| Hover cards | CSS transform + shadow | HybridCard, ZoneCard |
| Counters | CSS animation (IntersectionObserver) | Stats |
| Page transitions | Astro View Transitions | All routes |
| Reduced motion | `@media (prefers-reduced-motion)` | Disables AOS, Swiper autoplay |

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥95 |
| First Contentful Paint | <1.0s |
| Total JS | <50KB (7 Vue islands) |
| Images | 100% WebP |
| Lazy loading | Native `loading=lazy` on all images |

## Deployment

Static output to `dist/`. One command deploy:

```
npm run build    # → dist/
```

Compatible with: Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, GitHub Pages.

## Phases

| Phase | Duration | Deliverable |
|---|---|---|
| 1. Setup | 2 days | Astro + Bootstrap + SCSS + folder structure |
| 2. Data | 1 day | All 6 data files with complete content |
| 3. Layout | 2 days | BaseLayout, Navbar, Footer, Breadcrumbs |
| 4. Homepage | 3 days | All 9 sections (static + Vue islands) |
| 5. Hybrid pages | 3 days | Catalog + 13 detail pages |
| 6. Secondary pages | 2 days | Zonas, Innovacion, 404 |
| 7. Polish | 2 days | Animations, responsive QA, SEO meta |
| **Total** | **~15 days** | |

## Design Decisions Log

| Decision | Rationale |
|---|---|
| Astro over Vue SPA | SEO nativo, 0 JS overhead, deploy estático, simpler |
| Bootstrap over Tailwind | User preference, rapid prototyping, good a11y base |
| 7 Vue islands maximum | Only interactive components get JS; content is pure HTML |
| Hardcoded data | v1 scope small (13 hybrids), no backend needed, faster iteration |
| Green/gold palette | Extraída del sitio actual y del mundo agrícola (maíz, follaje) |
| Zone-first navigation | Domain insight: agricultores eligen por región, no por producto |
| Static deploy | Sin servidor, sin BD, sin API — HTML files only |
