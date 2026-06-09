import { Link } from "react-router-dom";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Eyebrow, H1, H2, H3, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { verticals, networks } from "@/data/networkVerticals";
import { geoRegions } from "@/data/networkGeo";
import { ArrowRight } from "lucide-react";

const broadCount = networks.filter((n) => n.vertical === "broad").length;
const verticalCount = verticals.filter((v) => v.slug !== "broad").length;

const directories = [
  {
    slug: "verticals",
    eyebrow: "Directory 01",
    title: "Niche / Vertical Networks",
    description:
      "Browse specialist networks by vertical — nutra, pharmacy, dating, iGaming, crypto, sweepstakes, digital products and SaaS.",
    meta: `${verticalCount} verticals`,
    to: "/networks/verticals",
  },
  {
    slug: "geographic",
    eyebrow: "Directory 02",
    title: "Geographic Networks",
    description:
      "Find networks by region. Europe, North America, LATAM, Asia, MENA, Nordics, DACH and the UK.",
    meta: `${geoRegions.length} regions`,
    to: "/networks/geographic",
  },
  {
    slug: "broad",
    eyebrow: "Directory 03",
    title: "Broad / General Networks",
    description:
      "Large multi-vertical networks like TradeDoubler, Awin, MaxBounty, CJ and Rakuten covering thousands of brands.",
    meta: `${broadCount} networks`,
    to: "/networks/broad",
  },
];

const NetworksPage = () => (
  <div>
    <WireframeBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Networks" }]} />

    <WireframeHero size="lg">
      <div className="max-w-3xl">
        <Eyebrow>Directory 2026</Eyebrow>
        <H1 className="mt-3">Find the Best Affiliate Networks</H1>
        <Lead className="mt-3">
          Three directories to help you find the right network — by vertical, by geography or
          across the large multi-vertical networks.
        </Lead>
      </div>
    </WireframeHero>

    <section className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <MetaLabel>Choose a directory</MetaLabel>
        <H2 className="mt-1">Three ways to explore</H2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {directories.map((d) => (
          <WireframeCard key={d.slug} className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <Eyebrow>{d.eyebrow}</Eyebrow>
              <Meta>{d.meta}</Meta>
            </div>
            <H3 className="mt-3">{d.title}</H3>
            <BodySmall className="mt-2 flex-1">{d.description}</BodySmall>
            <div className="mt-4">
              <Link
                to={d.to}
                className="inline-flex items-center gap-1 font-mono text-[13px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
              >
                Open directory <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </WireframeCard>
        ))}
      </div>

      <section className="mt-16">
        <WireframeCard className="p-6 md:p-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
            <div>
              <Eyebrow>Not sure where to start?</Eyebrow>
              <H2 className="mt-3">See our overall Top Networks 2026</H2>
              <BodySmall className="mt-2 max-w-2xl">
                A generic, cross-vertical ranking of the most trusted affiliate networks — useful
                when you don't yet know which niche to focus on.
              </BodySmall>
            </div>
            <WireframeCTA label="See Top Networks 2026 →" to="/best-affiliate-networks" />
          </div>
        </WireframeCard>
      </section>
    </section>
  </div>
);

export default NetworksPage;
