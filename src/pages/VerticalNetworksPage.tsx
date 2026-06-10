import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { NetworkComparisonTable } from "@/components/wireframe/NetworkComparisonTable";
import { FAQSection } from "@/components/wireframe/FAQSection";
import { RatingBadge } from "@/components/wireframe/RatingBadge";
import { getVertical, getNetworksByVertical } from "@/data/networkVerticals";
import type { BestFor } from "@/data/networkVerticals";
import NotFound from "./NotFound";

const TOP_PICKS: { key: BestFor; label: string }[] = [
  { key: "overall", label: "Best overall" },
  { key: "beginners", label: "Best for beginners" },
  { key: "high-payouts", label: "Best for high payouts" },
];

const VerticalNetworksPage = () => {
  const { vertical: slug } = useParams<{ vertical: string }>();
  const vertical = slug ? getVertical(slug) : undefined;
  if (!vertical) return <NotFound />;

  const networks = getNetworksByVertical(vertical.slug);
  const topPicks = TOP_PICKS.map((tp) => ({
    ...tp,
    network: networks.find((n) => n.bestFor === tp.key),
  })).filter((tp) => tp.network);

  const faq = [
    {
      q: `What is a ${vertical.title} affiliate network?`,
      a: `A ${vertical.title} affiliate network connects publishers with advertisers in the ${vertical.title.toLowerCase()} space, handling tracking, offers and payouts.`,
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
      q: "Are these networks beginner-friendly?",
      a: "Some are, some are not. Look for the 'Best for beginners' badge and the beginner-friendly filter to narrow down.",
    },
  ];

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: vertical.title },
        ]}
      />

      <WireframeHero size="sm">
        <Eyebrow>{vertical.title}</Eyebrow>
        <H1 className="mt-3">Best {vertical.title} Affiliate Networks</H1>
        <Lead className="mt-2 max-w-3xl">{vertical.shortDescription}</Lead>
      </WireframeHero>

      <div className="container mx-auto px-4 py-10">
        <div className="space-y-12">
          {/* Top picks — conversion-optimized */}
          <section>
            <H2 className="mb-5">Editor's 3 Picks</H2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {topPicks.map((tp, i) => {
                const rankLabel = i === 0 ? "Editor's choice" : i === 1 ? "Runner up" : "Also great";
                const isFirst = i === 0;
                return (
                  <div
                    key={tp.key}
                    className="flex flex-col border-2 border-dashed border-border bg-card hover:border-foreground transition-colors overflow-hidden"
                  >
                    {/* Header strip: rank box + label + score */}
                    <div className="flex border-b-2 border-dashed border-border">
                      <div className="w-14 shrink-0 border-r-2 border-dashed border-border bg-muted/40 flex items-center justify-center py-3">
                        <span className="font-mono text-xl font-bold text-foreground leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-1 px-4 py-3 bg-muted/40 flex items-center justify-between gap-3">
                        <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${isFirst ? "text-foreground" : "text-muted-foreground"}`}>
                          {rankLabel}
                        </span>
                        <div className="text-right leading-none">
                          <div className="font-mono text-[9px] uppercase font-bold text-muted-foreground mb-1 tracking-wider">Our score</div>
                          <div className="font-mono text-lg font-bold text-foreground leading-none">
                            {tp.network!.score.toFixed(1)}
                            <span className="text-xs font-normal text-muted-foreground">/10</span>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* Body */}
                    <div className="flex flex-1 flex-col p-4">
                      <div className="w-full aspect-video border border-dashed border-border bg-muted/40 mb-4 flex items-center justify-center">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {tp.network!.name} logo
                        </span>
                      </div>
                      <H4 className="mb-1.5">{tp.network!.name}</H4>
                      <BodySmall>
                        {tp.network!.shortDescription}{" "}
                        <Link
                          to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                          className="font-medium text-foreground underline decoration-dashed underline-offset-4 hover:decoration-foreground whitespace-nowrap"
                        >
                          Read review →
                        </Link>
                      </BodySmall>
                    </div>

                    {/* CTA */}
                    <div className="p-3 border-t-2 border-dashed border-border">
                      <a
                        href={tp.network!.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest font-bold transition-opacity hover:opacity-80 ${
                          isFirst
                            ? "bg-foreground text-background border-2 border-foreground"
                            : "bg-background text-foreground border-2 border-foreground"
                        }`}
                      >
                        Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}


            </div>

          </section>

          {/* Comparison table */}
          <section className="space-y-4">
            <div className="flex items-end justify-between">
              <H2>Compare {vertical.title} Networks</H2>
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

export default VerticalNetworksPage;
