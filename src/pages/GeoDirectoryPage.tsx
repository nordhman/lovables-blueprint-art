import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { DirectoryListRow } from "@/components/wireframe/DirectoryListRow";
import { Link } from "react-router-dom";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { geoRegions, countNetworksByRegion } from "@/data/networkGeo";
import { ArrowRight } from "lucide-react";

const GeoDirectoryPage = () => (
  <div>
    <WireframeBreadcrumbs
      items={[
        { label: "Home", to: "/" },
        { label: "Networks", to: "/networks" },
        { label: "Geographic" },
      ]}
    />

    <WireframeHero size="lg">
      <div className="max-w-3xl">
        <Eyebrow>Directory 02 · Geographic</Eyebrow>
        <H1 className="mt-3">Affiliate Networks by Region</H1>
        <Lead className="mt-3">
          Find networks that operate in your target geography — from pan-European platforms to
          Nordic, DACH and APAC specialists.
        </Lead>
      </div>
    </WireframeHero>

    <section className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <MetaLabel>Regions</MetaLabel>
        <H2 className="mt-1">Browse by Region</H2>
      </div>

      {/* Mobile: compact list */}
      <div className="md:hidden flex flex-col gap-2">
        {geoRegions.map((r) => (
          <DirectoryListRow
            key={r.slug}
            title={r.title}
            meta={`${countNetworksByRegion(r.slug)} networks`}
            description={r.shortDescription}
            to={`/networks/geographic/${r.slug}`}
          />
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {geoRegions.map((r) => (
          <WireframeCard key={r.slug} className="flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2">
              <H4>{r.title}</H4>
              <Meta>{countNetworksByRegion(r.slug)} networks</Meta>
            </div>
            <BodySmall className="flex-1">{r.shortDescription}</BodySmall>
            <div className="mt-4">
              <Link
                to={`/networks/geographic/${r.slug}`}
                className="inline-flex items-center gap-1 font-mono text-[13px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
              >
                View networks <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </WireframeCard>
        ))}
      </div>
    </section>
  </div>
);

export default GeoDirectoryPage;
