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
                const isFirst = i === 0;
                return (
                  <article
                    key={tp.key}
                    className="flex flex-col border-2 border-dashed border-border bg-card transition-colors hover:bg-muted/30"
                  >
                    {/* Header strip */}
                    <div className="flex items-stretch border-b-2 border-dashed border-border">
                      <div className={`flex w-16 shrink-0 items-center justify-center border-r-2 border-dashed border-border font-mono text-2xl font-bold ${isFirst ? "bg-foreground text-background" : "bg-background text-foreground"}`}>
                        {i + 1}
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-3 px-4 py-3">
                        <MetaLabel className={isFirst ? "text-foreground" : undefined}>{rankLabel}</MetaLabel>
                        <div className="text-right">
                          <MetaLabel className="block leading-none">Our score</MetaLabel>
                          <div className="font-mono text-xl font-bold leading-tight text-foreground">
                            {tp.network!.score.toFixed(1)}
                            <span className="text-xs font-normal text-muted-foreground">/10</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-4">
                      <MetaLabel className="mb-1">{choiceLabel} · {tp.label}</MetaLabel>
                      <H4 className="mb-2">{tp.network!.name}</H4>
                      <BodySmall className="mb-4 flex-1">{tp.network!.shortDescription}</BodySmall>

                      <div className="flex flex-col gap-2">
                        <a
                          href={tp.network!.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-2 px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider transition-opacity hover:opacity-80 ${
                            isFirst
                              ? "bg-foreground text-background border-foreground"
                              : "bg-background text-foreground border-foreground"
                          }`}
                        >
                          Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <Link
                          to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                          className="text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground underline decoration-dashed underline-offset-4 hover:text-foreground"
                        >
                          Read review →
                        </Link>
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
