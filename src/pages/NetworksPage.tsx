import { useState, useMemo } from "react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, Lead, BodySmall, MetaLabel, Meta } from "@/components/wireframe/Typography";
import { VerticalCard } from "@/components/wireframe/VerticalCard";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { verticals } from "@/data/networkVerticals";
import { Search } from "lucide-react";

const NetworksPage = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (slug: string) =>
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  const visible = useMemo(
    () => (selected.length === 0 ? verticals : verticals.filter((v) => selected.includes(v.slug))),
    [selected]
  );

  return (
    <div>
      <WireframeBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Networks" }]} />

      <WireframeHero size="lg">
        <div className="max-w-3xl">
          <Eyebrow>Directory 2026</Eyebrow>
          <H1 className="mt-3">Find the Best Affiliate Networks by Vertical</H1>
          <Lead className="mt-3">
            Browse niche affiliate networks for nutra, pharmacy, dating, iGaming, crypto, sweepstakes, digital products,
            SaaS — plus large general networks like TradeDoubler, Awin and MaxBounty.
          </Lead>

          <div className="mt-6 flex items-center gap-2 border-2 border-dashed border-border rounded bg-card px-3 py-2 max-w-xl">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search networks or verticals…"
              className="flex-1 bg-transparent outline-none font-mono text-sm placeholder:text-muted-foreground"
            />
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Prototype</span>
          </div>
        </div>
      </WireframeHero>

      <section className="container mx-auto px-4 py-12">
        {/* Tag filter */}
        <div className="mb-8 border-2 border-dashed border-border rounded p-4 bg-card">
          <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
            <MetaLabel>Filter by vertical</MetaLabel>
            <div className="flex items-center gap-3">
              <Meta>
                {selected.length === 0 ? "Showing all" : `${visible.length} of ${verticals.length} shown`}
              </Meta>
              {selected.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelected([])}
                  className="font-mono text-[12px] text-muted-foreground hover:text-foreground border-b-2 border-dashed border-border hover:border-foreground"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {verticals.map((v) => {
              const active = selected.includes(v.slug);
              return (
                <button
                  key={v.slug}
                  type="button"
                  onClick={() => toggle(v.slug)}
                  className={`border-2 border-dashed rounded px-2.5 py-1 font-mono text-[12px] uppercase tracking-wider transition-colors ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {v.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-end justify-between mb-6">
          <div>
            <MetaLabel>Verticals</MetaLabel>
            <H2 className="mt-1">Browse by Vertical</H2>
          </div>
          <BodySmall className="hidden md:block">
            Each vertical is curated with the top niche networks, payout models and risk profile.
          </BodySmall>
        </div>

        {visible.length === 0 ? (
          <WireframeCard className="p-8 text-center">
            <BodySmall>No verticals match your filter. Clear the filter to see all.</BodySmall>
          </WireframeCard>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((v) => (
              <VerticalCard key={v.slug} vertical={v} />
            ))}
          </div>
        )}

        <section className="mt-16">
          <WireframeCard className="p-6 md:p-8">
            <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
              <div>
                <Eyebrow>Not sure where to start?</Eyebrow>
                <H2 className="mt-3">See our overall Top Networks 2026</H2>
                <BodySmall className="mt-2 max-w-2xl">
                  A generic, cross-vertical ranking of the most trusted affiliate networks — useful when you don't yet
                  know which niche to focus on.
                </BodySmall>
              </div>
              <WireframeCTA label="See Top Networks 2026 →" to="/best-affiliate-networks" />
            </div>
          </WireframeCard>
        </section>
      </section>
    </div>
  );
};

export default NetworksPage;
