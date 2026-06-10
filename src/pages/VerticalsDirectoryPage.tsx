import { useState, useMemo } from "react";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, Lead, BodySmall, MetaLabel, Meta } from "@/components/wireframe/Typography";
import { VerticalCard } from "@/components/wireframe/VerticalCard";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { DirectoryListRow } from "@/components/wireframe/DirectoryListRow";
import { verticals } from "@/data/networkVerticals";

const VerticalsDirectoryPage = () => {
  // hide "broad" — broad networks live in their own directory now
  const items = useMemo(() => verticals.filter((v) => v.slug !== "broad"), []);
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);


  const toggle = (slug: string) =>
    setSelected((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));

  const visible = useMemo(
    () => (selected.length === 0 ? items : items.filter((v) => selected.includes(v.slug))),
    [selected, items]
  );

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: "Verticals" },
        ]}
      />

      <WireframeHero size="lg">
        <div className="max-w-3xl">
          <Eyebrow>Directory 01 · Verticals</Eyebrow>
          <H1 className="mt-3">Niche Affiliate Networks by Vertical</H1>
          <Lead className="mt-3">
            Browse niche affiliate networks for nutra, pharmacy, dating, iGaming, crypto,
            sweepstakes, digital products and SaaS.
          </Lead>
        </div>
      </WireframeHero>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 border-2 border-dashed border-border rounded p-4 bg-card">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-3">
              <MetaLabel>Filter by vertical</MetaLabel>
              {/* Mobile-only toggle */}
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="md:hidden font-mono text-[12px] uppercase tracking-wider border-2 border-dashed border-border rounded px-2 py-0.5 text-foreground hover:border-foreground"
              >
                {open ? "Hide ▴" : `Show ▾${selected.length ? ` (${selected.length})` : ""}`}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Meta>
                {selected.length === 0 ? "Showing all" : `${visible.length} of ${items.length} shown`}
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
          <div className={`${open ? "flex" : "hidden"} md:flex flex-wrap gap-1.5 mt-3`}>
            {items.map((v) => {
              const active = selected.includes(v.slug);
              return (
                <button
                  key={v.slug}
                  type="button"
                  onClick={() => toggle(v.slug)}
                  className={`shrink-0 border-2 border-dashed rounded px-2.5 py-1 font-mono text-[12px] uppercase tracking-wider transition-colors ${
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
            Each vertical is curated with top niche networks, payout models and risk profile.
          </BodySmall>
        </div>

        {visible.length === 0 ? (
          <WireframeCard className="p-8 text-center">
            <BodySmall>No verticals match your filter. Clear the filter to see all.</BodySmall>
          </WireframeCard>
        ) : (
          <>
            {/* Mobile: compact list */}
            <div className="md:hidden flex flex-col gap-2">
              {visible.map((v) => (
                <DirectoryListRow
                  key={v.slug}
                  title={v.title}
                  meta={`${v.networkCount} networks`}
                  description={v.shortDescription}
                  to={`/networks/${v.slug}`}
                />
              ))}
            </div>
            {/* Desktop: grid */}
            <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map((v) => (
                <VerticalCard key={v.slug} vertical={v} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default VerticalsDirectoryPage;
