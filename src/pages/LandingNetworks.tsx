import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { networks } from "@/data/mockData";
import { Globe, CheckCircle } from "lucide-react";

const LandingNetworks = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-2xl mx-auto">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Comparison 2026</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">Best Affiliate Networks</h1>
      <p className="text-muted-foreground mt-4">Which networks should you use? We compare the top options based on commission, selection, and ease of use.</p>
    </div>

    <section className="mt-16">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">New to this? Start here</span>
        <h2 className="text-xl font-bold mt-2">Start with These Networks</h2>
        <p className="text-sm text-muted-foreground mt-2">Easy to get started with and great for beginners.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {networks.slice(0, 2).map((n) => (
            <WireframeCard key={n.slug}>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm">{n.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{n.description}</p>
              <WireframeCTA label="Join →" to="#" variant="secondary" className="text-xs py-1 px-3 mt-3" />
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
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Network</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Commission</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Description</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {networks.map((n) => (
              <tr key={n.slug} className="border-b border-dashed border-border last:border-0">
                <td className="p-3 font-semibold">{n.name}</td>
                <td className="p-3 font-mono text-xs">{n.commission}</td>
                <td className="p-3 text-muted-foreground text-xs">{n.description}</td>
                <td className="p-3"><WireframeCTA label="Join →" to="#" variant="secondary" className="text-xs py-1 px-3" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="mt-12">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Advanced</span>
        <h2 className="text-xl font-bold mt-2">Multi-Network Strategies</h2>
        <div className="mt-4 space-y-2">
          {["Diversify revenue with multiple networks", "Compare commissions by niche", "Negotiate higher rates with volume"].map((item) => (
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

export default LandingNetworks;
