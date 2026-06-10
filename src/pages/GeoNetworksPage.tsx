import { useParams } from "react-router-dom";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, Lead, Meta } from "@/components/wireframe/Typography";
import { NetworkComparisonTable } from "@/components/wireframe/NetworkComparisonTable";
import { getRegion, getNetworksByRegion } from "@/data/networkGeo";
import NotFound from "./NotFound";

const GeoNetworksPage = () => {
  const { region: slug } = useParams<{ region: string }>();
  const region = slug ? getRegion(slug) : undefined;
  if (!region) return <NotFound />;

  const networks = getNetworksByRegion(region.slug);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Networks", to: "/networks" },
          { label: "Geographic", to: "/networks/geographic" },
          { label: region.title },
        ]}
      />

      <WireframeHero size="sm">
        <Eyebrow>{region.title}</Eyebrow>
        <H1 className="mt-3">Best Affiliate Networks in {region.title}</H1>
        <Lead className="mt-2 max-w-3xl">{region.shortDescription}</Lead>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-14">
          <section className="space-y-4">
            <div className="flex items-end justify-between">
              <H2>Compare networks in {region.title}</H2>
              <Meta>{networks.length} networks</Meta>
            </div>
            <NetworkComparisonTable networks={networks} />
          </section>
        </div>
      </div>

    </div>
  );
};

export default GeoNetworksPage;
