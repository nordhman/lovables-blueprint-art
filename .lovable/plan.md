## Goal
Filter-attribut (commission model, traffic type, risk, beginner-friendly, GEO) hör hemma på program-/offer-nivå, inte nätverksnivå. Vi förenklar vertikal- och geo-sidorna till bara det som faktiskt är meningsfullt på nätverksnivå.

## Sidor som påverkas
- `src/pages/VerticalNetworksPage.tsx` (t.ex. `/networks/nutra`)
- `src/pages/GeoNetworksPage.tsx` (samma upplägg, samma fix för konsekvens)

## Vad som tas bort
- Hela vänsterspalten med `FilterBar` + sticky aside
- Sektionen "All X Networks" med `NetworkCard`-grid (kort under tabellen)
- Kolumnerna **Best for**, **Commission**, **GEO focus**, **Risk** i tabellen

## Vad som behålls
- Hero + breadcrumbs
- "Editor's Top Picks" (3–4 kort högst upp) — oförändrad
- **En** jämförelse­tabell, full bredd
- FAQ (på vertikalsidan)

## Ny tabell-struktur
Kolumner, i ordning:

| # | Kolumn | Källa |
|---|---|---|
| 1 | Network (namn) | `network.name` |
| 2 | Score | `network.score` via `RatingBadge` |
| 3 | Offers / Programs | nytt fält `offerCount` (mock) |
| 4 | Min payout | nytt fält `minPayout` (mock, t.ex. "$50") |
| 5 | Visit site (CTA-knapp → `externalUrl`, nytt fönster, `rel="nofollow sponsored"`) |
| 6 | Read review (länk → `/networks/{vertical}/{slug}`) |

Wireframe-stil bibehålls (dashed border, mono caps headers).

## Responsivt
En lösning som fungerar på desktop, tablet och mobil utan att duplicera markup:

- **Desktop/tablet (≥640px)**: traditionell `<table>` i `WireframeCard`-wrapper med `overflow-x-auto` som fallback. Kolumner får rimliga widths så ingenting trunkeras vid 768px+.
- **Mobil (<640px)**: tabellen döljs (`hidden sm:table`) och ersätts med en stack av **NetworkRow-kort** — ett kort per nätverk med:
  - rad 1: namn + score-badge
  - rad 2: meta-grid 2 kolumner: "Offers: 240" · "Min payout: $50"
  - rad 3: två knappar sida vid sida: "Visit site ↗" (primary) + "Read review →" (secondary)

Detta är samma DX-mönster som verticals/geo-directory-sidorna redan använder (`md:hidden` list / `md:grid` cards).

## Nya/ändrade komponenter
- **Ny:** `src/components/wireframe/NetworkComparisonTable.tsx`
  Innehåller både desktop-tabell och mobil-kortlista. Tar `networks: Network[]` som prop. Ersätter användningen av `ComparisonTable` på dessa två sidor (gamla `ComparisonTable.tsx` behålls tills vidare ifall den används någon annanstans — vi tar bort den i ett senare städ).
- **Data:** lägg till två fält på `Network`-typen i `src/data/networkVerticals.ts`:
  - `offerCount: number`
  - `minPayout: string` (t.ex. `"$50"`, `"$100"`)
  Sätt mock-värden på alla befintliga nätverk via en liten helper (default `offerCount: 150`, `minPayout: "$50"`) så vi slipper skriva ut på varje rad — sedan finjustera några för variation.

## Filer som ändras
- `src/data/networkVerticals.ts` — utöka typ + defaults i `mk()`
- `src/components/wireframe/NetworkComparisonTable.tsx` — ny
- `src/pages/VerticalNetworksPage.tsx` — ta bort FilterBar-aside, ta bort "All X Networks" sektion, byt `ComparisonTable` → `NetworkComparisonTable`
- `src/pages/GeoNetworksPage.tsx` — samma sak

## Inte i scope
- Vi ändrar inte `/networks` landningssidan eller directory-sidorna (verticals/geographic).
- Vi tar inte bort `FilterBar.tsx` eller `NetworkCard.tsx` från kodbasen ännu (kan användas senare på program-nivå).
