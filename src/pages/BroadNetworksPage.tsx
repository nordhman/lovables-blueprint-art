import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { NetworkComparisonTable } from "@/components/wireframe/NetworkComparisonTable";
import { FAQSection } from "@/components/wireframe/FAQSection";
import { getNetworksByVertical } from "@/data/networkVerticals";
import type { BestFor, Network } from "@/data/networkVerticals";

const TOP_PICKS: { key: BestFor; label: string }[] = [
  { key: "overall", label: "Best overall" },
  { key: "beginners", label: "Best for beginners" },
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
  {
    q: "How are these rankings made?",
    a: "Rankings are based on payout reliability, offer quality, manager support, dashboard UX and community feedback. This is a prototype, so data here is illustrative.",
  },
];

const BroadNetworksPage = () => {
  const networks = getNetworksByVertical("broad");

  const used = new Set<string>();
  const sortedByScore = [...networks].sort((a, b) => b.score - a.score);
  const topPicks = TOP_PICKS.map((tp) => {
    let network: Network | undefined = networks.find(
      (n) => n.bestFor === tp.key && !used.has(n.slug)
    );
    if (!network) network = sortedByScore.find((n) => !used.has(n.slug));
    if (network) used.add(network.slug);
    return { ...tp, network };
  }).filter((tp) => tp.network);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: "Broad / General" },
        ]}
      />

      <WireframeHero size="sm">
        <Eyebrow>Broad / General</Eyebrow>
        <H1 className="mt-3">Best Broad &amp; General Affiliate Networks</H1>
        <Lead className="mt-2 max-w-3xl">
          Large multi-vertical networks like TradeDoubler, Awin, MaxBounty, CJ and Rakuten —
          thousands of brands across retail, finance, travel and more.
        </Lead>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Top picks */}
          {topPicks.length > 0 && (
            <section>
              <H2 className="mb-5">Editor's 3 Picks</H2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {topPicks.map((tp, i) => (
                  <div key={tp.key} className="flex flex-col">
                    <article className="relative flex flex-1 flex-col border-2 border-dashed border-border bg-card overflow-visible mt-4">
                      <div className="absolute -top-[18px] left-5 z-10 inline-flex items-center gap-2.5 bg-foreground text-background px-4 py-2 rounded border-2 border-dashed border-foreground">
                        <span className="font-mono text-[12px] font-bold leading-none">
                          #{i + 1}
                        </span>
                        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] leading-none">
                          {tp.label}
                        </span>
                      </div>

                      <PlaceholderImage
                        label={`${tp.network!.name} image`}
                        aspectRatio="wide"
                        className="rounded-none border-0 border-b-2 border-dashed border-border aspect-[3/1]"
                      />

                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <H4 className="text-foreground">{tp.network!.name}</H4>
                          <span className="inline-flex items-baseline gap-1 font-mono shrink-0">
                            <MetaLabel className="text-muted-foreground">Score</MetaLabel>
                            <span className="font-bold text-foreground text-[15px]">{tp.network!.score.toFixed(1)}</span>
                            <span className="text-muted-foreground text-[12px]">/10</span>
                          </span>
                        </div>

                        <p className="mb-4 flex-1 text-[15px] leading-relaxed text-foreground">
                          {tp.network!.shortDescription}{" "}
                          <Link
                            to={`/networks/broad/${tp.network!.slug}`}
                            className="text-foreground hover:opacity-70"
                          >
                            Read full review →
                          </Link>
                        </p>

                        <a
                          href={tp.network!.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className="w-full inline-flex items-center justify-center gap-2 border-2 border-dashed border-foreground bg-foreground text-background px-5 py-3.5 font-mono text-[13px] font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
                        >
                          Visit site <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Comparison table */}
          <section className="space-y-4">
            <div className="flex items-end justify-between">
              <H2>Compare Broad Networks</H2>
              <Meta>{networks.length} networks</Meta>
            </div>
            <NetworkComparisonTable networks={networks} />
          </section>

          {/* FAQ */}
          <section>
            <H2 className="mb-6">Frequently Asked Questions</H2>
            <FAQSection items={faq} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BroadNetworksPage;
