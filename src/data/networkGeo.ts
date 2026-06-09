import { networks, type Network } from "./networkVerticals";

export interface GeoRegion {
  slug: string;
  title: string;
  shortDescription: string;
  /** geoFocus tokens (from network data) that count as this region */
  match: string[];
}

export const geoRegions: GeoRegion[] = [
  {
    slug: "europe",
    title: "Europe",
    shortDescription: "Networks with strong EU advertiser base and pan-European reach.",
    match: ["EU"],
  },
  {
    slug: "north-america",
    title: "North America",
    shortDescription: "US and Canada-focused networks across all major verticals.",
    match: ["US", "CA"],
  },
  {
    slug: "latam",
    title: "LATAM",
    shortDescription: "Latin America-focused networks for nutra, dating, sweeps and more.",
    match: ["LATAM"],
  },
  {
    slug: "asia",
    title: "Asia",
    shortDescription: "Networks covering APAC markets including Tier-2/3 GEOs.",
    match: ["Asia"],
  },
  {
    slug: "mena",
    title: "MENA",
    shortDescription: "Middle East and North Africa networks for finance, trading and nutra.",
    match: ["MENA"],
  },
  {
    slug: "nordics",
    title: "Nordics",
    shortDescription: "Networks with strong presence in Sweden, Norway, Denmark and Finland.",
    match: ["Nordics"],
  },
  {
    slug: "dach",
    title: "DACH",
    shortDescription: "German-speaking markets: Germany, Austria, Switzerland.",
    match: ["DACH"],
  },
  {
    slug: "uk",
    title: "UK",
    shortDescription: "United Kingdom-focused networks with local advertiser portfolios.",
    match: ["UK"],
  },
];

export const getRegion = (slug: string) => geoRegions.find((r) => r.slug === slug);

export const getNetworksByRegion = (slug: string): Network[] => {
  const region = getRegion(slug);
  if (!region) return [];
  return networks.filter((n) =>
    n.geoFocus.some((g) => region.match.includes(g) || g === "Global")
  );
};

export const countNetworksByRegion = (slug: string) => getNetworksByRegion(slug).length;
