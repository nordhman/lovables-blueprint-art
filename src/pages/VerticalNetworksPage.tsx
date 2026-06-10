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
              {topPicks.map((tp, i) => (
                <div
                  key={tp.key}
                  className="flex flex-col border-2 border-dashed border-border bg-card rounded hover:border-foreground transition-colors overflow-hidden"
                >
                  {/* Wide image with big rank number */}
                  <div className="relative h-28 border-b-2 border-dashed border-border bg-muted flex items-center justify-center">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Image · {tp.network!.name}
                    </span>
                    <div className="absolute top-2 left-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-foreground bg-background font-mono text-[32px] font-bold leading-none text-foreground">
                      {i + 1}
                    </div>
                  </div>

                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 p-4 pb-2">
                    <div className="min-w-0 flex-1">
                      <H4 className="truncate">{tp.network!.name}</H4>
                    </div>
                    <RatingBadge score={tp.network!.score} size="md" />
                  </div>

                  {/* Description with inline Read review */}
                  <div className="flex flex-1 flex-col px-4 pb-4">
                    <BodySmall className="line-clamp-3">
                      {tp.network!.shortDescription}{" "}
                      <Link
                        to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                        className="text-foreground underline decoration-border hover:decoration-foreground transition-colors whitespace-nowrap"
                      >
                        Read review →
                      </Link>
                    </BodySmall>

                    <a
                      href={tp.network!.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="mt-auto pt-4 inline-flex items-center justify-center gap-1.5"
                    >
                      <span className="w-full inline-flex items-center justify-center gap-1.5 border-2 border-dashed border-foreground bg-foreground text-background rounded px-4 py-2.5 font-mono text-[12px] uppercase tracking-wider hover:opacity-80 transition-opacity">
                        Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
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
