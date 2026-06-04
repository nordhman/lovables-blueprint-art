import { Link, useParams } from "react-router-dom";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { Eyebrow, H1, H2, H3, Lead, Meta, MetaLabel, BodySmall } from "@/components/wireframe/Typography";
import { getCategory } from "@/data/toolCategories";
import { Star, Check, ExternalLink } from "lucide-react";

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.round(rating) ? "fill-foreground text-foreground" : "text-muted-foreground"}`}
      />
    ))}
    <Meta className="ml-1">{rating.toFixed(1)}</Meta>
  </div>
);

const ToolReviewPage = () => {
  const { category: categorySlug, slug } = useParams();
  const category = getCategory(categorySlug);
  const tool = category?.tools.find((t) => t.slug === slug);

  if (!category || !tool) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <H1>Tool not found</H1>
        <Lead className="mt-4">
          <Link to="/tools" className="underline">Back to all tools →</Link>
        </Lead>
      </div>
    );
  }

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Tools", to: "/tools" },
          { label: category.shortTitle, to: `/best-affiliate-tools?category=${category.slug}` },
          { label: tool.name },
        ]}
      />

      <WireframeHero size="sm">
        <Eyebrow>Review · 2026</Eyebrow>
        <H1 className="mt-3">{tool.name} Review</H1>
        <Lead className="mt-4 max-w-3xl">{tool.tagline}</Lead>
        <div className="mt-6 flex items-center gap-6 flex-wrap">
          <Stars rating={tool.trustpilot} />
          <Meta>{tool.reviews.toLocaleString()} Trustpilot reviews</Meta>
          <Meta>· Price: {tool.price}</Meta>
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-[1fr_320px] gap-10">
        {/* Review body */}
        <article className="space-y-10">
          <WireframeCard className="p-6">
            <MetaLabel>Snapshot</MetaLabel>
            <H2 className="mt-2">Bottom line</H2>
            <p className="mt-3 text-base leading-relaxed">
              <span className="font-semibold">Best for:</span> {tool.bestFor}.
            </p>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">{tool.bottomLine}</p>
          </WireframeCard>

          <section>
            <H2>What we liked</H2>
            <ul className="mt-5 space-y-3">
              {tool.pros.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check className="h-4 w-4 mt-1 shrink-0" />
                  <span className="text-base">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <H2>Full review</H2>
            <BodySmall className="mt-4">
              [Placeholder] In-depth review copy goes here. This page is a wireframe; the layout mirrors our course-review template so writers can drop content into the same structure for every tool.
            </BodySmall>
            <PlaceholderImage label={`${tool.name} screenshot`} aspectRatio="wide" className="mt-6 w-full" />
            <H3 className="mt-10">Features & pricing</H3>
            <BodySmall className="mt-3">[Placeholder] Feature breakdown, plan comparison, screenshots.</BodySmall>
            <H3 className="mt-10">Who it's for</H3>
            <BodySmall className="mt-3">[Placeholder] Use cases and who should skip it.</BodySmall>
          </section>
        </article>

        {/* Conversion sidebar */}
        <aside className="lg:sticky lg:top-24 self-start">
          <WireframeCard className="p-6 flex flex-col items-center gap-4">
            <PlaceholderImage label={`${tool.name} logo`} aspectRatio="video" className="w-full" />
            <div className="text-center">
              <MetaLabel className="block">Our score</MetaLabel>
              <div className="mt-1">
                <span className="text-4xl font-bold">{(tool.ourScore / 2).toFixed(1)}</span>
                <span className="font-mono text-xs text-muted-foreground">/5</span>
              </div>
            </div>
            <hr className="w-full border-t border-dashed border-border" />
            <div className="text-center">
              <MetaLabel className="block">Price</MetaLabel>
              <div className="mt-1.5 text-xl font-bold leading-none">{tool.price}</div>
            </div>
            <a
              href={tool.externalUrl}
              target="_blank"
              rel="noopener sponsored"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-4 bg-foreground text-background hover:opacity-90 transition-opacity rounded font-semibold text-base"
            >
              Visit {tool.name} <ExternalLink className="h-4 w-4" />
            </a>
            <span className="font-mono text-[10px] italic text-muted-foreground text-center leading-snug">
              Affiliate link · We may earn a commission
            </span>
          </WireframeCard>
        </aside>
      </div>
    </div>
  );
};

export default ToolReviewPage;
