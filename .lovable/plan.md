# Plan: Affiliate Network Directory (verticals)

Bygg om hela `/networks`-flödet till ett vertikalbaserat directory, samma mönster som vi använt för Tools/Courses, helt i den befintliga wireframe-stilen (streckade ramar, grayscale, IBM Plex, befintliga `WireframeHero`, `WireframeCard`, `Typography`, `WireframeBreadcrumbs`, `WireframeCTA`).

## Routing

```
/networks                                  → NetworksPage (directory landing, lista verticals)
/networks/:vertical                        → VerticalNetworksPage (top picks + filter + tabell + nätverkskort)
/networks/:vertical/:slug                  → NetworkReviewPage (review-mall)
/best-affiliate-networks                   → behålls (befintlig generisk landing)
```

`App.tsx` uppdateras med två nya routes och `Header.tsx` lämnas (bara länk, ingen dropdown).

## Data

Ny fil `src/data/networkVerticals.ts` med statisk dummy-data:

```ts
verticals: [
  { slug, title, shortDescription, commissionModels[], networkCount, ... }
]
networks: [
  {
    slug, name, vertical, shortDescription, knownFor,
    bestFor: "overall"|"beginners"|"smartlinks"|"high-payouts"|null,
    commissionModels[], geoFocus[], trafficTypes[],
    riskLevel: "low"|"medium"|"high"|"very-high",
    beginnerFriendly: bool,
    paymentMethods[], score, pros[], cons[],
    whoShouldJoin, whoShouldAvoid, alternatives[], finalVerdict,
    externalUrl
  }
]
```

Verticals: Nutra, Dating, iGaming, Crypto/Forex, Finance, Sweepstakes, Mobile, SaaS/AI, Digital Products, Pay-Per-Call. Nätverk enligt din lista (dr.cash, CrakRevenue, Alpha Affiliates, Moonstar, financeAds, Zeydoo, etc.).

Befintlig `networks`-array i `src/data/mockData.ts` lämnas orörd (används av `LandingNetworks`).

## Sidor

### 1. `NetworksPage` (skrivs om)
- `WireframeBreadcrumbs` (Home / Networks)
- `WireframeHero size="lg"`: Eyebrow "Directory 2026", H1 "Find the Best Affiliate Networks by Vertical", Lead-text, dummy-sökfält (visuell input, ingen logik)
- Grid med 10 vertical-cards (`WireframeCard`): namn, kort beskrivning, commission-model-badges, "X networks", CTA "View networks →" till `/networks/:vertical`
- Sekundär sektion: "Why choose by vertical?" + länk till `/best-affiliate-networks` för generell topplista

### 2. `VerticalNetworksPage` (ny)
- Breadcrumbs (Home / Networks / {Vertical})
- `WireframeHero size="sm"`: Eyebrow vertical-namn, H1 "Best {Vertical} Affiliate Networks", Lead
- **Top Picks**: 4 `WireframeCard` (Best overall / beginners / smartlinks / high payouts)
- **FilterBar**: streckade chip-grupper (Commission, Traffic, Risk, Beginner-friendly) — rent visuella, ingen state-logik (eller enkel `useState` för känsla, men ingen riktig filtrering krävs)
- **ComparisonTable**: Network | Best for | Commission | GEO | Risk | Score | CTA — samma streckade tabell-stil som `LandingNetworks`
- **NetworkCard-grid**: logo-placeholder, namn, beskrivning, known for, pros/cons (kort), score-badge, CTA "Read review →"
- FAQ-sektion (3–4 dummy-frågor)

### 3. `NetworkReviewPage` (ny)
- Breadcrumbs (Home / Networks / {Vertical} / {Network})
- `WireframeHero size="sm"` med namn + score-badge
- **Summary box** (sticky sidebar på desktop): score, best for, verticals, commission models, GEO, traffic types, payment methods, CTA "Apply now →" (extern), disclaimer-text
- Huvudkolumn: intro, Pros/Cons (two-col), "Who should join", "Who should avoid", "Alternatives" (länkar till andra network-reviews), "Final verdict"

## Komponenter (nya, under `src/components/wireframe/`)

- `VerticalCard.tsx` — kort på directory-landing
- `NetworkCard.tsx` — nätverkskort på vertical-sida
- `ComparisonTable.tsx` — återanvändbar tabell (driven av en `networks[]`-prop)
- `FilterBar.tsx` — streckade filter-chips
- `RatingBadge.tsx` — score-badge (t.ex. "8.7 / 10" i streckad ram)
- `RiskBadge.tsx` — Low/Medium/High/Very High (grayscale, streckad, varierande fyllning)
- `CommissionModelBadge.tsx` — CPA/CPL/CPS/RevShare/Hybrid/CPI/COD
- `ProsConsBox.tsx` — two-column pros/cons
- `FAQSection.tsx` — accordion-liknande list (eller enkla expand items)

CTA återanvänder befintlig `WireframeCTA`. Header/Footer/Breadcrumbs återanvänds. All typografi via `Typography.tsx`-komponenter, alla hero via `WireframeHero`.

## Stil-noteringar

- Grayscale + streckade ramar genomgående. Inga färgade badges.
- Risk-nivåer visas med fyllnadsgrad/text, inte färg.
- Score visas som siffra + streckad ram.
- Logo = `PlaceholderImage`.

## User flow

`/networks` → klick på vertical-card → `/networks/dating` (top picks, filter, tabell, kort) → klick på network → `/networks/dating/crakrevenue` (review + apply).

## Out of scope

- Riktig filterlogik/sök (visuellt bara, eller minimal `useState`)
- Backend, databas, formulär
- Förändringar av Tools/Courses/Blog
- Ändringar i huvudmenyn utöver att `Networks` fortsatt är en enkel länk
