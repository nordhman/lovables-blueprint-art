import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";

const ContactPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-2xl">
    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Kontakt</span>
    <h1 className="text-3xl md:text-4xl font-bold mt-2">Hör av dig</h1>
    <p className="text-muted-foreground mt-2">Har du frågor, förslag eller vill samarbeta? Fyll i formuläret nedan.</p>

    <WireframeCard className="mt-8 p-6">
      <div className="space-y-6">
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Namn</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground">
            Ditt namn...
          </div>
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">E-post</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground">
            din@email.se
          </div>
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Ämne</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground">
            Välj ämne...
          </div>
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Meddelande</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 h-32 font-mono text-xs text-muted-foreground">
            Skriv ditt meddelande...
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-dashed border-border rounded" />
          <span className="text-sm text-muted-foreground">Jag godkänner integritetspolicyn</span>
        </div>
        <WireframeCTA label="Skicka meddelande" to="#" />
      </div>
    </WireframeCard>
  </div>
);

export default ContactPage;
