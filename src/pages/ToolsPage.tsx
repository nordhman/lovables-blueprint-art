import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Eyebrow, H1, H2, H5, Lead, Meta, BodySmall } from "@/components/wireframe/Typography";
import { tools } from "@/data/mockData";
import { Star } from "lucide-react";

const ToolsPage = () => {
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <div className="container mx-auto px-4 py-12">
      <Eyebrow>Resources</Eyebrow>
      <H1 className="mt-2">Tools & Resources</H1>
      <Lead className="mt-2 max-w-2xl">Handpicked tools to help you build and grow your affiliate business.</Lead>

      {categories.map((cat) => (
        <section key={cat} className="mt-12">
          <H2 className="mb-4">{cat}</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.filter((t) => t.category === cat).map((tool) => (
              <WireframeCard key={tool.slug}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-dashed border-border rounded flex items-center justify-center font-mono text-xs text-muted-foreground">
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <H5>{tool.name}</H5>
                      <Meta>{tool.price}</Meta>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < tool.rating ? "text-foreground fill-foreground" : "text-muted-foreground"}`} />
                    ))}
                  </div>
                </div>
                <BodySmall className="mt-3">{tool.description}</BodySmall>
                <div className="mt-4">
                  <WireframeCTA label="Try Tool →" to="#" variant="secondary" className="text-xs py-2 px-4" />
                </div>
              </WireframeCard>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 text-center">
        <WireframeCTA label="See Best Tools 2026 →" to="/best-affiliate-tools" variant="secondary" />
      </div>
    </div>
  );
};

export default ToolsPage;
