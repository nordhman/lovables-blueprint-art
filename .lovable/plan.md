

# Wireframe-prototyp: Affiliate Tour

Klickbar gråskale-wireframe i React med fokus på UX och konverteringsflöden. IBM Plex Sans/Mono, streckade ramar, inga funktioner — bara layout och navigation.

## Informationsarkitektur

Baserat på dina svar bygger vi en struktur med dedikerade landningssidor som konverteringshubbar, separata kurssektioner, och segmenterad navigation för bred målgrupp.

```text
HOME
├── Hero (tydlig värdeerbjudande + 2 CTAs: "Kom igång" / "Se kurser")
├── Nyckelsektioner-grid (Kurser, Verktyg, Nätverk, Blog)
├── Featured kurser (egna)
├── Senaste blogginlägg
└── Newsletter CTA

KURSER
├── /courses — Översikt med 2 sektioner:
│   ├── "Mina kurser" (egna, med badge)
│   └── "Rekommenderade kurser" (affiliate, med partner-badge)
└── /courses/:slug — Kurs-landningssida (hero, outline, CTA)

VERKTYG & RESURSER
└── /tools — Kategoriserad lista (Hosting, Email, Tracking, etc.)
    └── Varje verktyg: kort med betyg, pris, affiliate-CTA

NÄTVERK
└── /networks — Guide till affiliate-nätverk (Adtraction, Awin, etc.)
    └── Kort med beskrivning, provision, "Gå med"-CTA

BLOG
├── /blog — Post-grid med kategorier/filter
└── /blog/:slug — Artikelsida med:
    └── "Relaterad landningssida"-banner (leder till /courses, /tools, etc.)

LANDNINGSSIDOR (dedikerade konverteringssidor)
├── /best-affiliate-tools — SEO-landningssida: "Bästa verktygen 2026"
├── /best-affiliate-courses — "Bästa kurserna för affiliate marketing"
└── /best-affiliate-networks — "Bästa affiliate-nätverken"
    └── Dessa sidor: Hero + jämförelsetabell + CTA-knappar

OM OSS → /about
KONTAKT → /contact
```

## Konverteringsflöde (Blog → Landningssida)

```text
Google-sök → Blogginlägg → Banner "Se alla verktyg" → /best-affiliate-tools → Affiliate-klick
                          → Banner "Lär dig mer"     → /courses/:slug        → Kursköp/affiliate
```

## Navigation

**Desktop:** Logo | Kurser (dropdown: Mina kurser, Rekommenderade) | Verktyg | Nätverk | Blog | Om | Kontakt | Sök-ikon

**Mobil:** Logo | Hamburger → fullscreen-meny med samma struktur

Segmentering för bred målgrupp: Landningssidorna har "Nybörjare? Börja här"-sektion + "Avancerat"-sektion.

## Sidor att bygga (12 st)

| # | Route | Innehåll |
|---|-------|----------|
| 1 | `/` | Hero, feature-grid, featured courses, senaste inlägg, newsletter |
| 2 | `/courses` | Två sektioner: egna + rekommenderade kurser |
| 3 | `/courses/:slug` | Kurs-landningssida med outline och CTA |
| 4 | `/tools` | Verktyg i kategorier med affiliate-CTAs |
| 5 | `/networks` | Nätverks-guide med kort |
| 6 | `/blog` | Post-grid med kategorier |
| 7 | `/blog/:slug` | Artikel + landningssida-banner |
| 8 | `/best-affiliate-tools` | Jämförelsesida/landningssida |
| 9 | `/best-affiliate-courses` | Jämförelsesida/landningssida |
| 10 | `/best-affiliate-networks` | Jämförelsesida/landningssida |
| 11 | `/about` | Om-sida med bio |
| 12 | `/contact` | Kontaktformulär (wireframe) |

## Teknisk implementation

- **Design system:** Uppdatera `index.css` med gråskale HSL-variabler, importera IBM Plex Sans/Mono via Google Fonts
- **Layout-komponent:** `WireframeLayout` med Header (responsiv nav med dropdown) + Footer
- **Wireframe-komponenter:** `PlaceholderImage`, `WireframeCard`, `WireframeCTA` — alla med `border-dashed` och gråskala
- **Routing:** React Router med alla 12 routes, parametriserade `/courses/:slug` och `/blog/:slug`
- **Mock-data:** Statisk JSON för kurser, verktyg, nätverk, blogginlägg — ej kopplat till backend
- **Alla länkar klickbara** — man ska kunna navigera hela prototypen

