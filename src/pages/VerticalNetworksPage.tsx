import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, Meta } from "@/components/wireframe/Typography";
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
              {topPicks.map((tp, i) => (
                  <div key={tp.key} className="flex flex-col">
                    {/* Tag line above card */}
                    <div className="flex items-center gap-2 pb-2 pl-1">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-foreground font-mono text-[11px] font-bold text-foreground">
                        #{i + 1}
                      </span>
                      <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-foreground">
                        {tp.label}
                      </span>
                    </div>

                    <article className="flex flex-1 flex-col border-2 border-dashed border-border bg-card overflow-hidden">
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
                          <span className="inline-flex items-baseline gap-1 border-2 border-dashed border-border rounded px-2.5 py-1 font-mono bg-card shrink-0">
                            <span className="font-bold text-foreground text-lg">{tp.network!.score.toFixed(1)}</span>
                            <span className="text-muted-foreground text-[0.85em]">/ 10</span>
                          </span>
                        </div>

                        <p className="mb-4 flex-1 text-[15px] leading-relaxed text-foreground">
                          {tp.network!.shortDescription}{" "}
                          <Link
                            to={`/networks/${vertical.slug}/${tp.network!.slug}`}
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
