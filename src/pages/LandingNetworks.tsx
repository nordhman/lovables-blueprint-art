import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { networks } from "@/data/mockData";
import { Globe, CheckCircle } from "lucide-react";

const LandingNetworks = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-2xl mx-auto">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Jämförelse 2026</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">Bästa affiliate-nätverken</h1>
      <p className="text-muted-foreground mt-4">Vilka nätverk ska du använda? Vi jämför de viktigaste baserat på provision, utbud och användarvänlighet.</p>
    </div>

    {/* Beginner */}
    <section className="mt-16">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Nybörjare? Börja här</span>
        <h2 className="text-xl font-bold mt-2">Starta med dessa nätverk</h2>
        <p className="text-sm text-muted-foreground mt-2">Enkla att komma igång med och bra för nybörjare.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {networks.slice(0, 2).map((n) => (
            <WireframeCard key={n.slug}>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm">{n.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{n.description}</p>
              <WireframeCTA label="Gå med →" to="#" variant="secondary" className="text-xs py-1 px-3 mt-3" />
            </WireframeCard>
          ))}
        </div>
      </WireframeCard>
    </section>

    {/* Comparison table */}
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-6">Fullständig jämförelse</h2>
      <div className="border-2 border-dashed border-border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dashed border-border">
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Nätverk</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Provision</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Beskrivning</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {networks.map((n) => (
              <tr key={n.slug} className="border-b border-dashed border-border last:border-0">
                <td className="p-3 font-semibold">{n.name}</td>
                <td className="p-3 font-mono text-xs">{n.commission}</td>
                <td className="p-3 text-muted-foreground text-xs">{n.description}</td>
                <td className="p-3"><WireframeCTA label="Gå med →" to="#" variant="secondary" className="text-xs py-1 px-3" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Advanced */}
    <section className="mt-12">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Avancerat</span>
        <h2 className="text-xl font-bold mt-2">Strategier för flera nätverk</h2>
        <div className="mt-4 space-y-2">
          {["Diversifiera intäkter med flera nätverk", "Jämför provisioner per nisch", "Förhandla högre provisioner med volym"].map((item) => (
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
