import { useParams, Link } from "react-router-dom";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { RatingBadge } from "@/components/wireframe/RatingBadge";
import { RiskBadge } from "@/components/wireframe/RiskBadge";
import { CommissionModelList } from "@/components/wireframe/CommissionModelBadge";
import { ProsConsBox } from "@/components/wireframe/ProsConsBox";
import { getNetwork, getVertical, networks as allNetworks } from "@/data/networkVerticals";
import NotFound from "./NotFound";

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-start justify-between gap-3 py-2 border-b border-dashed border-border last:border-0">
    <MetaLabel className="shrink-0">{label}</MetaLabel>
    <div className="text-right text-sm">{value}</div>
  </div>
);

const NetworkReviewPage = () => {
  const { vertical: verticalSlug, slug } = useParams<{ vertical: string; slug: string }>();
  const vertical = verticalSlug ? getVertical(verticalSlug) : undefined;
  const network = verticalSlug && slug ? getNetwork(verticalSlug, slug) : undefined;
  if (!vertical || !network) return <NotFound />;

  const alternatives = network.alternatives
    .map((s) => allNetworks.find((n) => n.slug === s && n.vertical === vertical.slug))
    .filter(Boolean);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: vertical.title, to: `/networks/${vertical.slug}` },
          { label: network.name },
        ]}
      />

      <WireframeHero size="sm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <Eyebrow>{vertical.title} review</Eyebrow>
            <H1 className="mt-3">{network.name} Review</H1>
            <Lead className="mt-2 max-w-2xl">{network.shortDescription}</Lead>
          </div>
          <RatingBadge score={network.score} size="lg" />
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main */}
        <article className="space-y-10 min-w-0">
          <section>
            <H2 className="mb-3">Overview</H2>
            <BodySmall>
              {network.name} is known for {network.knownFor.toLowerCase()}. It operates primarily across{" "}
              {network.geoFocus.join(", ")} and accepts {network.trafficTypes.join(", ").toLowerCase()} traffic.
            </BodySmall>
          </section>

          <section>
            <H2 className="mb-4">Pros & Cons</H2>
            <ProsConsBox pros={network.pros} cons={network.cons} />
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            <WireframeCard>
              <H4 className="mb-2">Who should join</H4>
              <BodySmall>{network.whoShouldJoin}</BodySmall>
            </WireframeCard>
            <WireframeCard>
              <H4 className="mb-2">Who should avoid</H4>
              <BodySmall>{network.whoShouldAvoid}</BodySmall>
            </WireframeCard>
          </section>

          <section>
            <H2 className="mb-3">Final verdict</H2>
            <BodySmall>{network.finalVerdict}</BodySmall>
            <div className="mt-4">
              <WireframeCTA label={`Apply to ${network.name} →`} to={network.externalUrl} />
            </div>
            <p className="mt-4 font-mono text-[12px] text-muted-foreground italic">
              Affiliate terms, payouts and availability may change. Always verify details directly with the network.
            </p>
          </section>

          {alternatives.length > 0 && (
            <section>
              <H2 className="mb-4">Alternatives in {vertical.title}</H2>
              <div className="grid sm:grid-cols-3 gap-3">
                {alternatives.map((alt) => (
                  <Link
                    key={alt!.slug}
                    to={`/networks/${vertical.slug}/${alt!.slug}`}
                    className="block border-2 border-dashed border-border rounded p-3 bg-card hover:border-foreground transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <H4>{alt!.name}</H4>
                      <RatingBadge score={alt!.score} size="sm" />
                    </div>
                    <Meta>{alt!.knownFor}</Meta>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:self-start space-y-4">
          <WireframeCard>
            <PlaceholderImage label={`${network.name} logo`} aspectRatio="wide" className="mb-3" />
            <div className="flex items-center justify-between mb-3">
              <H4>{network.name}</H4>
              <RatingBadge score={network.score} />
            </div>
            <div className="space-y-1">
              <Row
                label="Best for"
                value={
                  <span className="text-muted-foreground">
                    {network.bestFor ? network.bestFor.replace("-", " ") : "—"}
                  </span>
                }
              />
              <Row
                label="Vertical"
                value={<Link to={`/networks/${vertical.slug}`} className="underline">{vertical.title}</Link>}
              />
              <Row label="Commission" value={<CommissionModelList models={network.commissionModels} className="justify-end" />} />
              <Row label="GEO focus" value={<span className="font-mono text-xs text-muted-foreground">{network.geoFocus.join(", ")}</span>} />
              <Row label="Traffic" value={<span className="font-mono text-xs text-muted-foreground">{network.trafficTypes.join(", ")}</span>} />
              <Row label="Payments" value={<span className="font-mono text-xs text-muted-foreground">{network.paymentMethods.join(", ")}</span>} />
              <Row label="Risk" value={<RiskBadge level={network.riskLevel} />} />
              <Row label="Beginner-friendly" value={<span className="font-mono text-xs">{network.beginnerFriendly ? "Yes" : "No"}</span>} />
            </div>
            <WireframeCTA label="Apply now →" to={network.externalUrl} className="w-full mt-4" />
          </WireframeCard>
        </aside>
      </div>
    </div>
  );
};

export default NetworkReviewPage;
