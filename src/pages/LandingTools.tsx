import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { tools } from "@/data/mockData";
import { Star, CheckCircle } from "lucide-react";

const LandingTools = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-2xl mx-auto">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Comparison 2026</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">Best Tools for Affiliate Marketing</h1>
      <p className="text-muted-foreground mt-4">We've tested and compared the most popular tools. Here are our recommendations.</p>
    </div>

    <section className="mt-16">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">New to this? Start here</span>
        <h2 className="text-xl font-bold mt-2">Starter Pack – Get Going Fast</h2>
        <p className="text-sm text-muted-foreground mt-2">The three tools you need to launch your first affiliate site.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {tools.slice(0, 3).map((tool) => (
            <WireframeCard key={tool.slug}>
              <h3 className="font-semibold text-sm">{tool.name}</h3>
              <span className="font-mono text-xs text-muted-foreground">{tool.price}</span>
              <p className="text-xs text-muted-foreground mt-2">{tool.description}</p>
              <WireframeCTA label="Try →" to="#" variant="secondary" className="text-xs py-1 px-3 mt-3" />
            </WireframeCard>
          ))}
        </div>
      </WireframeCard>
    </section>

    <section className="mt-12">
      <h2 className="text-xl font-bold mb-6">Full Comparison</h2>
      <div className="border-2 border-dashed border-border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dashed border-border">
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Tool</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Category</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Price</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Rating</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.slug} className="border-b border-dashed border-border last:border-0">
                <td className="p-3 font-semibold">{tool.name}</td>
                <td className="p-3 text-muted-foreground">{tool.category}</td>
                <td className="p-3 font-mono text-xs">{tool.price}</td>
                <td className="p-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < tool.rating ? "text-foreground fill-foreground" : "text-muted"}`} />
                    ))}
                  </div>
                </td>
                <td className="p-3"><WireframeCTA label="Try →" to="#" variant="secondary" className="text-xs py-1 px-3" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="mt-12">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Advanced</span>
        <h2 className="text-xl font-bold mt-2">Pro Tools for Experienced Affiliates</h2>
        <div className="mt-4 space-y-2">
          {["Advanced keyword analysis with Ahrefs", "Campaign tracking with Voluum", "A/B testing with Thrive Themes"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </WireframeCard>
    </section>
  </div>
);

export default LandingTools;
