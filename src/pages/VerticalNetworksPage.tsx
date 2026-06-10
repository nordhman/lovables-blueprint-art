import { useParams, Link } from "react-router-dom";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { NetworkComparisonTable } from "@/components/wireframe/NetworkComparisonTable";
import { FAQSection } from "@/components/wireframe/FAQSection";
import { RatingBadge } from "@/components/wireframe/RatingBadge";
import { getVertical, getNetworksByVertical } from "@/data/networkVerticals";
import type { BestFor } from "@/data/networkVerticals";
import NotFound from "./NotFound";

const TOP_PICKS: { key: BestFor; label: string }[] = [
  { key: "overall", label: "Best overall" },
  { key: "beginners", label: "Best for beginners" },
  { key: "smartlinks", label: "Best smartlink" },
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

      <div className="container mx-auto px-4 py-12 space-y-14">
        {/* Top picks */}
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
                    to={`/networks/${vertical.slug}/${tp.network!.slug}`}
                    className="font-mono text-[12px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
                  >
                    Review →
                  </Link>
                </div>
              </WireframeCard>
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
  );
};

export default VerticalNetworksPage;
