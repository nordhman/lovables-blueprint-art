import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { NetworkComparisonTable } from "@/components/wireframe/NetworkComparisonTable";
import { FAQSection } from "@/components/wireframe/FAQSection";
import { getRegion, getNetworksByRegion } from "@/data/networkGeo";
import type { BestFor, Network } from "@/data/networkVerticals";
import NotFound from "./NotFound";

const TOP_PICKS: { key: BestFor; label: string }[] = [
  { key: "overall", label: "Best overall" },
  { key: "beginners", label: "Best for beginners" },
  { key: "high-payouts", label: "Best for high payouts" },
];

const GeoNetworksPage = () => {
  const { region: slug } = useParams<{ region: string }>();
  const region = slug ? getRegion(slug) : undefined;
  if (!region) return <NotFound />;

  const networks = getNetworksByRegion(region.slug);

  // Build top picks: prefer networks tagged with bestFor; fallback to top by score
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

  const faq = [
    {
      q: `What makes an affiliate network strong in ${region.title}?`,
      a: `Local advertiser relationships, payout currencies that match ${region.title} publishers, compliant tracking, and managers who understand the regional market.`,
    },
    {
      q: "Which commission model should I pick?",
      a: "It depends on traffic quality. CPA pays a fixed amount per action, RevShare pays a percentage of revenue forever, Hybrid combines both.",
    },
    {
      q: "How are these rankings made?",
      a: "Rankings are based on payout reliability, offer quality, manager support, dashboard UX and community feedback. This is a prototype, so data here is illustrative.",
    },
    {
      q: `Are global networks listed under ${region.title}?`,
      a: `Yes — networks with global reach are included alongside ${region.title}-focused ones, since they typically serve publishers in this region too.`,
    },
  ];

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: "Geographic", to: "/networks/geographic" },
          { label: region.title },
        ]}
      />

      <WireframeHero size="sm">
        <Eyebrow>{region.title}</Eyebrow>
        <H1 className="mt-3">Best Affiliate Networks in {region.title}</H1>
        <Lead className="mt-2 max-w-3xl">{region.shortDescription}</Lead>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Top picks — conversion-optimized */}
          {topPicks.length > 0 && (
            <section>
              <H2 className="mb-5">Editor's 3 Picks</H2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {topPicks.map((tp, i) => (
                  <div key={tp.key} className="flex flex-col">
                    <article className="relative flex flex-1 flex-col border-2 border-dashed border-border bg-card overflow-visible mt-4">
                      {/* Tag sitting on top border */}
                      <div className="absolute -top-[18px] left-5 z-10 inline-flex items-center gap-2.5 bg-foreground text-background px-4 py-2 rounded border-2 border-dashed border-foreground">
                        <span className="font-mono text-[12px] font-bold leading-none">
                          #{i + 1}
                        </span>
                        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] leading-none">
                          {tp.label}
                        </span>
                      </div>

                      {/* Image — 3:1 (shorter) */}
                      <PlaceholderImage
                        label={`${tp.network!.name} image`}
                        aspectRatio="wide"
                        className="rounded-none border-0 border-b-2 border-dashed border-border aspect-[3/1]"
                      />

                      {/* Body */}
                      <div className="flex flex-1 flex-col p-5">
                        {/* Title + Score row */}
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
                            to={`/networks/${tp.network!.vertical}/${tp.network!.slug}`}
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
              <H2>Compare networks in {region.title}</H2>
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

export default GeoNetworksPage;
