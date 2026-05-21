import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { Eyebrow, H1, H4, Lead, BodySmall, Meta } from "@/components/wireframe/Typography";
import { networks } from "@/data/mockData";
import { Globe } from "lucide-react";

const NetworksPage = () => (
  <div>
    <WireframeHero size="lg">
      <Eyebrow>Platforms</Eyebrow>
      <H1 className="mt-3">Affiliate Networks</H1>
      <Lead className="mt-2 max-w-2xl">Overview of the most important affiliate networks. Find the right network for your niche and audience.</Lead>
    </WireframeHero>

    <div className="container mx-auto px-4 py-12">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {networks.map((network) => (
        <WireframeCard key={network.slug}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 border-2 border-dashed border-border rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-muted-foreground" />
            </div>
            <H4>{network.name}</H4>
          </div>
          <BodySmall>{network.description}</BodySmall>
          <div className="flex items-center justify-between mt-4">
            <Meta>Commission: {network.commission}</Meta>
            <WireframeCTA label="Join →" to="#" variant="secondary" className="text-xs py-2 px-4" />
          </div>
        </WireframeCard>
      ))}
    </div>

    <div className="mt-12 text-center">
      <WireframeCTA label="See Best Networks 2026 →" to="/best-affiliate-networks" variant="secondary" />
    </div>
    </div>
  </div>
);

export default NetworksPage;
