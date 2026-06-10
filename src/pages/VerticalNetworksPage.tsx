import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { NetworkComparisonTable } from "@/components/wireframe/NetworkComparisonTable";
import { FAQSection } from "@/components/wireframe/FAQSection";
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {topPicks.map((tp, i) => {
                const rankLabel = i === 0 ? "Our #1 pick" : i === 1 ? "Our #2 option" : "Our #3 option";
                
                return (
                  <article
                    key={tp.key}
                    className="flex flex-col border-2 border-dashed border-border bg-card"
                  >
                    {/* Header strip — wireframe style */}
                    <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-border px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center border-2 border-dashed border-border font-mono text-sm font-bold text-foreground">
                          {i + 1}
                        </div>
                        <MetaLabel>{rankLabel}</MetaLabel>
                      </div>
                      <div className="text-right leading-tight">
                        <MetaLabel className="block text-[10px]">Our score</MetaLabel>
                        <div className="font-mono text-base font-bold text-foreground">
                          {tp.network!.score.toFixed(1)}
                          <span className="text-xs font-normal text-muted-foreground">/10</span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <H4 className="mb-1 text-foreground">{tp.network!.name}</H4>
                      <Meta className="mb-4 block">{tp.label}</Meta>
                      <p className="mb-5 flex-1 text-[15px] leading-relaxed text-foreground">
                        {tp.network!.shortDescription}{" "}
                        <Link
                          to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                          className="font-mono text-[13px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70 whitespace-nowrap"
                        >
                          Read review →
                        </Link>
                      </p>

                      <a
                        href={tp.network!.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className="self-start inline-flex items-center justify-center gap-1.5 border-2 border-dashed border-foreground px-5 py-2.5 font-mono text-[12px] uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors"
                      >
                        Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
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
