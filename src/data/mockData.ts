export interface Course {
  slug: string;
  title: string;
  description: string;
  type: "own" | "affiliate";
  level: "beginner" | "intermediate" | "advanced";
  modules: number;
  price: string;
  partner?: string;
}

export interface Tool {
  name: string;
  category: string;
  description: string;
  rating: number;
  price: string;
  slug: string;
}

export interface Network {
  name: string;
  description: string;
  commission: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  relatedLanding?: string;
}

export const courses: Course[] = [
  { slug: "affiliate-grundkurs", title: "Affiliate Marketing Grundkurs", description: "Lär dig grunderna i affiliate marketing från scratch. Perfekt för nybörjare.", type: "own", level: "beginner", modules: 8, price: "Gratis" },
  { slug: "seo-for-affiliates", title: "SEO för Affiliate-sajter", description: "Avancerad SEO-strategi specifikt för affiliate-sajter och innehållssidor.", type: "own", level: "intermediate", modules: 12, price: "499 kr" },
  { slug: "content-marketing-mastery", title: "Content Marketing Mastery", description: "Skapa innehåll som konverterar. Från research till publicering.", type: "own", level: "advanced", modules: 15, price: "799 kr" },
  { slug: "authority-hacker-pro", title: "Authority Hacker Pro", description: "Komplett system för att bygga auktoritetsajter som genererar passiv inkomst.", type: "affiliate", level: "advanced", modules: 20, price: "$997", partner: "Authority Hacker" },
  { slug: "affiliate-lab", title: "Affiliate Lab", description: "Matt Diggitys beprövade metod för att ranka affiliate-sajter på Google.", type: "affiliate", level: "intermediate", modules: 16, price: "$997", partner: "Matt Diggity" },
  { slug: "fat-stacks-bundle", title: "Fat Stacks Bundle", description: "Nischsajter och display ads-strategi för passiv inkomst.", type: "affiliate", level: "beginner", modules: 10, price: "$299", partner: "Jon Dykstra" },
];

export const tools: Tool[] = [
  { name: "Ahrefs", category: "SEO", description: "Kraftfullt SEO-verktyg för keyword research, backlink-analys och site audits.", rating: 5, price: "$99/mån", slug: "ahrefs" },
  { name: "SiteGround", category: "Hosting", description: "Snabb och pålitlig hosting optimerad för WordPress.", rating: 4, price: "€3.99/mån", slug: "siteground" },
  { name: "ConvertKit", category: "Email", description: "E-postmarknadsföring byggd för creators och bloggare.", rating: 4, price: "$29/mån", slug: "convertkit" },
  { name: "Thrive Themes", category: "WordPress", description: "Konverteringsoptimerade WordPress-teman och plugins.", rating: 4, price: "$299/år", slug: "thrive-themes" },
  { name: "Voluum", category: "Tracking", description: "Avancerad affiliate-tracking och kampanjoptimering.", rating: 5, price: "$199/mån", slug: "voluum" },
  { name: "Canva Pro", category: "Design", description: "Skapa professionell grafik utan designkunskaper.", rating: 4, price: "$12.99/mån", slug: "canva-pro" },
];

export const networks: Network[] = [
  { name: "Adtraction", description: "Nordens ledande affiliate-nätverk med fokus på skandinaviska annonsörer.", commission: "Varierar per program", slug: "adtraction" },
  { name: "Awin", description: "Globalt affiliate-nätverk med tusentals annonsörer.", commission: "Varierar per program", slug: "awin" },
  { name: "Amazon Associates", description: "Världens största e-handelsplattforms affiliate-program.", commission: "1-10% per kategori", slug: "amazon-associates" },
  { name: "ShareASale", description: "Stort nätverk med fokus på nischade produkter och tjänster.", commission: "Varierar per program", slug: "shareasale" },
  { name: "Tradedoubler", description: "Europeiskt nätverk med starka skandinaviska annonsörer.", commission: "Varierar per program", slug: "tradedoubler" },
];

export const blogPosts: BlogPost[] = [
  { slug: "hur-borjar-man-med-affiliate-marketing", title: "Hur börjar man med affiliate marketing 2026?", excerpt: "En komplett guide för dig som vill starta med affiliate marketing. Vi går igenom allt från att välja nisch till att få din första provision.", category: "Guider", date: "2026-03-15", relatedLanding: "/best-affiliate-courses" },
  { slug: "basta-seo-verktygen", title: "De 7 bästa SEO-verktygen för affiliate-sajter", excerpt: "Vi jämför de mest populära SEO-verktygen och hjälper dig välja rätt för din affiliate-verksamhet.", category: "Verktyg", date: "2026-03-10", relatedLanding: "/best-affiliate-tools" },
  { slug: "valja-ratt-affiliate-natverk", title: "Så väljer du rätt affiliate-nätverk", excerpt: "Guide till de största affiliate-nätverken och vilka som passar bäst för olika typer av sajter.", category: "Nätverk", date: "2026-03-05", relatedLanding: "/best-affiliate-networks" },
  { slug: "content-strategi-affiliate", title: "Content-strategi för affiliate-sajter", excerpt: "Lär dig skapa innehåll som rankar på Google och konverterar besökare till köpare.", category: "Strategi", date: "2026-02-28", relatedLanding: "/best-affiliate-courses" },
  { slug: "passiv-inkomst-affiliate", title: "Passiv inkomst genom affiliate marketing", excerpt: "Är affiliate marketing verkligen passiv inkomst? Vi reder ut myterna och visar hur du bygger hållbara intäktsströmmar.", category: "Guider", date: "2026-02-20", relatedLanding: "/courses" },
  { slug: "tracking-och-optimering", title: "Tracking och optimering av affiliate-länkar", excerpt: "Lär dig spåra och optimera dina affiliate-länkar för maximal konvertering.", category: "Verktyg", date: "2026-02-15", relatedLanding: "/best-affiliate-tools" },
];

export const categories = ["Alla", "Guider", "Verktyg", "Nätverk", "Strategi"];
