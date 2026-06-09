import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { NetworkCard } from "@/components/wireframe/NetworkCard";
import { ComparisonTable } from "@/components/wireframe/ComparisonTable";
import { FilterBar } from "@/components/wireframe/FilterBar";
import { FAQSection } from "@/components/wireframe/FAQSection";
import { RatingBadge } from "@/components/wireframe/RatingBadge";
import { Link } from "react-router-dom";
import { getNetworksByVertical } from "@/data/networkVerticals";
import type { BestFor } from "@/data/networkVerticals";

const TOP_PICKS: { key: BestFor; label: string }[] = [
  { key: "overall", label: "Best overall" },
  { key: "beginners", label: "Best for beginners" },
  { key: "smartlinks", label: "Best smartlink" },
  { key: "high-payouts", label: "Best for high payouts" },
];

const faq = [
  {
    q: "What is a broad / general affiliate network?",
    a: "A broad network spans many verticals — retail, finance, travel, SaaS, telco — and gives publishers access to thousands of brands from one dashboard.",
  },
  {
    q: "When should I use a broad network instead of a niche one?",
    a: "When your audience is diverse, when you want trusted brand-name advertisers, or when you don't yet know which vertical converts best for your traffic.",
  },
  {
    q: "Are payouts lower on broad networks?",
    a: "Per-action payouts are often lower than niche CPA networks, but the trade-off is brand safety, volume and approval reliability.",
  },
];

const BroadNetworksPage = () => {
  const networks = getNetworksByVertical("broad");
  const topPicks = TOP_PICKS.map((tp) => ({
    ...tp,
    network: networks.find((n) => n.bestFor === tp.key),
  })).filter((tp) => tp.network);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: "Broad / General" },
        ]}
      />

      <WireframeHero size="lg">
        <div className="max-w-3xl">
          <Eyebrow>Directory 03 · Broad / General</Eyebrow>
          <H1 className="mt-3">Best Broad &amp; General Affiliate Networks</H1>
          <Lead className="mt-3">
            Large multi-vertical networks like TradeDoubler, Awin, MaxBounty, CJ and Rakuten —
            thousands of brands across retail, finance, travel and more.
          </Lead>
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12 space-y-14">
        <section>
          <MetaLabel>Top picks</MetaLabel>
          <H2 className="mt-1 mb-6">Editor's Top Picks</H2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topPicks.map((tp) => (
              <WireframeCard key={tp.key} className="flex flex-col">
                <Meta className="uppercase tracking-wider">{tp.label}</Meta>
                <H4 className="mt-2">{tp.network!.name}</H4>
                <BodySmall className="mt-1 flex-1">{tp.network!.shortDescription}</BodySmall>
                <div className="mt-3 flex items-center justify-between">
                  <RatingBadge score={tp.network!.score} size="sm" />
                  <Link
                    to={`/networks/broad/${tp.network!.slug}`}
                    className="font-mono text-[12px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
                  >
                    Review →
                  </Link>
                </div>
              </WireframeCard>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[280px_1fr] gap-6">
          <aside className="lg:sticky lg:top-20 lg:self-start space-y-3">
            <MetaLabel>Filter</MetaLabel>
            <FilterBar />
            <Meta className="block">Prototype — filters are visual only.</Meta>
          </aside>
          <div className="space-y-4 min-w-0">
            <div className="flex items-end justify-between">
              <H2>Compare Broad Networks</H2>
              <Meta>{networks.length} networks</Meta>
            </div>
            <ComparisonTable networks={networks} />
          </div>
        </section>

        <section>
          <H2 className="mb-6">All Broad Networks</H2>
          <div className="grid md:grid-cols-2 gap-4">
            {networks.map((n) => (
              <NetworkCard key={n.slug} network={n} />
            ))}
          </div>
        </section>

        <section>
          <H2 className="mb-6">Frequently Asked Questions</H2>
          <FAQSection items={faq} />
        </section>
      </div>
    </div>
  );
};

export default BroadNetworksPage;
