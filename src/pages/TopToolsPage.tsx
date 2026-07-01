import { Link, useSearchParams } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H3, Lead, Meta, MetaLabel, typo } from "@/components/wireframe/Typography";
import { toolCategories, getCategory } from "@/data/toolCategories";
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

const TopToolsPage = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category");
  const category = getCategory(categorySlug);

  // Fallback: if no/unknown category, show the directory of categories
  if (!category) {
    return (
      <div>
        <WireframeBreadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Tools", to: "/tools" },
            { label: "Best Tools" },
          ]}
        />
        <WireframeHero size="sm">
          <Eyebrow>Comparison · 2026</Eyebrow>
          <H1 className="mt-3">Best Tools for Affiliate Marketing</H1>
          <Lead className="mt-4 max-w-3xl">Pick a category to see our ranked top picks.</Lead>
        </WireframeHero>
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((c) => (
            <WireframeCard key={c.slug} className="p-6">
              <H3>{c.title}</H3>
              <p className="text-sm text-muted-foreground mt-2">{c.description}</p>
              <WireframeCTA
                label={c.cta}
                to={`/best-affiliate-tools?category=${c.slug}`}
                variant="secondary"
                className="mt-5"
              />
            </WireframeCard>
          ))}
        </div>
      </div>
    );
  }

  const tools = [...category.tools].sort((a, b) => b.ourScore - a.ourScore);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Tools", to: "/tools" },
          { label: category.shortTitle },
        ]}
      />

      <WireframeHero size="sm">
        <Eyebrow>Comparison · 2026</Eyebrow>
        <H1 className="mt-3">{category.title}</H1>
        <Lead className="mt-4 max-w-4xl">{category.intro}</Lead>
        <div className="mt-8 flex items-center gap-x-8 gap-y-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" strokeWidth={2.5} />
            <span className="font-semibold text-sm">{tools.length} tools tested</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" strokeWidth={2.5} />
            <span className="font-semibold text-sm">Independent reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" strokeWidth={2.5} />
            <span className="font-semibold text-sm">Updated 2026</span>
          </div>
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12">
        <H2 className="mb-6">Ranked Top Picks</H2>

        <div className="space-y-6">
          {tools.map((tool, idx) => {
            const trustItems = ["Free trial available", "Cancel anytime", "Independently tested"];
            return (
              <div key={tool.slug}>
                {idx === 0 && (
                  <div className="flex justify-center mb-[-18px]">
                    <div className="relative z-10 inline-flex items-center justify-center gap-2.5 bg-foreground text-background px-5 py-2 rounded border-2 border-dashed border-foreground">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold leading-none">
                        Our Top Pick
                      </span>
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                )}
                <WireframeCard className={`relative overflow-hidden p-0 ${idx === 0 ? "border-foreground" : ""}`}>
                  <div className="grid md:grid-cols-[56px_200px_1fr_260px] gap-6 items-stretch px-6 py-5">
                    {/* Rank */}
                    <div className="flex md:flex-col items-center md:items-start gap-2">
                      <MetaLabel className="leading-none">Rank</MetaLabel>
                      <span className={typo.statLg}>#{idx + 1}</span>
                    </div>

                    {/* Logo + Our score */}
                    <div className="flex flex-col gap-5">
                      <PlaceholderImage label={`${tool.name} logo`} aspectRatio="video" className="w-full" />
                      <div className="border-2 border-dashed border-foreground rounded p-3 text-center">
                        <MetaLabel className="block">Our score</MetaLabel>
                        <div className="mt-1">
                          <span className={typo.stat}>{(tool.ourScore / 2).toFixed(1)}</span>
                          <span className="font-mono text-xs text-muted-foreground">/5</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <H3 className="!mb-0 leading-none">{tool.name}</H3>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {tool.tagline}
                        <br />
                        <Link
                          to={`/best-affiliate-tools/${category.slug}/${tool.slug}/review`}
                          className="underline underline-offset-4 hover:no-underline text-foreground"
                        >
                          Read full review →
                        </Link>
                      </p>

                      <div className="mt-5 flex items-center gap-2 flex-wrap">
                        <Stars rating={tool.trustpilot} />
                        <Meta>{tool.reviews.toLocaleString()} Trustpilot reviews</Meta>
                      </div>

                      <ul className="mt-5 grid sm:grid-cols-3 gap-x-4 gap-y-2.5">
                        {tool.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                            <span className="text-sm leading-snug">{p}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 border-l-2 border-dashed border-border pl-4 py-1">
                        <MetaLabel className="block">Best for</MetaLabel>
                        <p className="mt-1.5 text-sm leading-relaxed">
                          <span>{tool.bestFor}.</span>{" "}
                          <span className="text-muted-foreground">{tool.bottomLine}</span>
                        </p>
                      </div>
                    </div>

                    {/* Conversion column */}
                    <div className="flex flex-col items-center gap-4 border-l border-dashed border-border pl-5">
                      <div className="text-center">
                        <MetaLabel className="block">Price</MetaLabel>
                        <div className={`mt-1.5 ${typo.statSm}`}>{tool.price}</div>
                      </div>

                      <hr className="w-full border-t border-dashed border-border" />

                      <ul className="space-y-2 inline-block">
                        {trustItems.map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                            <span className="text-xs leading-snug">{t}</span>
                          </li>
                        ))}
                      </ul>

                      <hr className="w-full border-t border-dashed border-border" />

                      <a
                        href={tool.externalUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-4 bg-foreground text-background hover:opacity-90 transition-opacity rounded font-semibold text-base"
                      >
                        Visit Site <ExternalLink className="h-4 w-4" />
                      </a>

                      <Link
                        to={`/best-affiliate-tools/${category.slug}/${tool.slug}/review`}
                        className="text-xs font-mono underline underline-offset-4 hover:no-underline"
                      >
                        Read review →
                      </Link>

                      <span className="mt-auto font-mono text-[10px] italic text-muted-foreground text-center leading-snug">
                        Affiliate link · We may earn a commission
                      </span>
                    </div>
                  </div>
                </WireframeCard>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-5 border border-dashed border-border bg-muted/40 flex gap-4 items-start max-w-4xl">
          <span className="font-mono text-sm font-bold text-muted-foreground shrink-0">!</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Full Disclosure:</span> The tools above are external partners. We earn an affiliate commission when you sign up through our links. This allows us to keep the site free and our reviews independent. We only list tools we trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopToolsPage;
