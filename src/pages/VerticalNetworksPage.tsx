import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
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
                const choiceLabel = i === 0 ? "first choice" : i === 1 ? "second choice" : "third choice";
                return (
                  <article
                    key={tp.key}
                    className="flex flex-col overflow-hidden border-2 border-dashed border-border bg-card"
                  >
                    {/* Dark header */}
                    <div className="flex items-center justify-between gap-3 bg-foreground px-5 py-4 text-background">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center border-2 border-dashed border-background/60 font-mono text-base font-bold">
                          {i + 1}
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-wider opacity-80">{rankLabel}</span>
                      </div>
                      <div className="text-right leading-tight">
                        <div className="font-mono text-[9px] uppercase tracking-wider opacity-70">Our score</div>
                        <div className="font-mono text-lg font-bold">
                          {tp.network!.score.toFixed(1)}
                          <span className="text-xs font-normal opacity-70">/10</span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <MetaLabel className="mb-1">{choiceLabel} · {tp.label}</MetaLabel>
                      <H4 className="mb-2">{tp.network!.name}</H4>
                      <BodySmall className="mb-5 flex-1">
                        {tp.network!.shortDescription}{" "}
                        <Link
                          to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                          className="font-mono text-[13px] text-foreground underline decoration-dashed underline-offset-4 hover:opacity-70"
                        >
                          Read review →
                        </Link>
                      </BodySmall>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                          className="flex-1 rounded-full border-2 border-dashed border-foreground bg-background px-4 py-2 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                        >
                          Details
                        </Link>
                        <a
                          href={tp.network!.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-dashed border-foreground bg-foreground px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-background hover:opacity-80"
                        >
                          Visit <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
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
