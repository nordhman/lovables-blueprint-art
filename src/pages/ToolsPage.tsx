import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { Eyebrow, H1, H4, Lead, BodySmall } from "@/components/wireframe/Typography";
import { toolCategories } from "@/data/toolCategories";
import { Check } from "lucide-react";

const ToolsPage = () => (
  <div>
    <WireframeBreadcrumbs
      items={[
        { label: "Home", to: "/" },
        { label: "Tools" },
      ]}
    />
    <WireframeHero size="sm">
      <Eyebrow>Resources · 2026</Eyebrow>
      <H1 className="mt-3">Tools & Resources</H1>
      <Lead className="mt-4 max-w-3xl">
        Browse curated comparisons of the best tools for every part of your affiliate business. Pick a category to see our top picks.
      </Lead>
      <div className="mt-8 flex items-center gap-x-8 gap-y-3 flex-wrap">
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5" strokeWidth={2.5} />
          <span className="font-semibold text-sm">{toolCategories.length} categories</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5" strokeWidth={2.5} />
          <span className="font-semibold text-sm">Independently tested</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5" strokeWidth={2.5} />
          <span className="font-semibold text-sm">Updated 2026</span>
        </div>
      </div>
    </WireframeHero>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((cat) => (
          <WireframeCard key={cat.slug} className="flex flex-col p-6">
            <PlaceholderImage label={`${cat.slug} illustration`} aspectRatio="video" />
            <H4 className="mt-5 text-center">{cat.title}</H4>
            <BodySmall className="mt-3 text-center">{cat.description}</BodySmall>
            <div className="mt-6 pt-6 mt-auto">
              <WireframeCTA
                label={cat.cta}
                to={`/best-affiliate-tools?category=${cat.slug}`}
                variant="primary"
                className="w-full"
              />
            </div>
          </WireframeCard>
        ))}
      </div>
    </div>
  </div>
);

export default ToolsPage;
