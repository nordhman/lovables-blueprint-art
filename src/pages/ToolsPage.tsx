import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { tools } from "@/data/mockData";
import { Star } from "lucide-react";

const ToolsPage = () => {
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <div className="container mx-auto px-4 py-12">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Resurser</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">Verktyg & Resurser</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Handplockade verktyg som hjälper dig bygga och växa din affiliate-verksamhet.</p>

      {categories.map((cat) => (
        <section key={cat} className="mt-12">
          <h2 className="text-xl font-bold mb-4">{cat}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.filter((t) => t.category === cat).map((tool) => (
              <WireframeCard key={tool.slug}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-dashed border-border rounded flex items-center justify-center font-mono text-xs text-muted-foreground">
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{tool.name}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{tool.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < tool.rating ? "text-foreground fill-foreground" : "text-muted-foreground"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{tool.description}</p>
                <div className="mt-4">
                  <WireframeCTA label="Prova verktyget →" to="#" variant="secondary" className="text-xs py-2 px-4" />
                </div>
              </WireframeCard>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 text-center">
        <WireframeCTA label="Se bästa verktygen 2026 →" to="/best-affiliate-tools" variant="secondary" />
      </div>
    </div>
  );
};

export default ToolsPage;
