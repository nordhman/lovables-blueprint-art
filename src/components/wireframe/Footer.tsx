import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t-2 border-dashed border-border bg-card mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-mono text-sm font-bold">[ Affiliate Tour ]</span>
          <p className="text-sm text-muted-foreground mt-2">
            Din guide till affiliate marketing – kurser, verktyg och strategier.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Sidor</h4>
          <div className="space-y-2">
            <Link to="/courses" className="block text-sm hover:text-foreground text-muted-foreground">Kurser</Link>
            <Link to="/tools" className="block text-sm hover:text-foreground text-muted-foreground">Verktyg</Link>
            <Link to="/networks" className="block text-sm hover:text-foreground text-muted-foreground">Nätverk</Link>
            <Link to="/blog" className="block text-sm hover:text-foreground text-muted-foreground">Blog</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Resurser</h4>
          <div className="space-y-2">
            <Link to="/best-affiliate-tools" className="block text-sm hover:text-foreground text-muted-foreground">Bästa verktygen</Link>
            <Link to="/best-affiliate-courses" className="block text-sm hover:text-foreground text-muted-foreground">Bästa kurserna</Link>
            <Link to="/best-affiliate-networks" className="block text-sm hover:text-foreground text-muted-foreground">Bästa nätverken</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Info</h4>
          <div className="space-y-2">
            <Link to="/about" className="block text-sm hover:text-foreground text-muted-foreground">Om oss</Link>
            <Link to="/contact" className="block text-sm hover:text-foreground text-muted-foreground">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground">© 2026 Affiliate Tour. Alla rättigheter reserverade.</span>
        <div className="flex gap-4">
          {["Twitter", "YouTube", "Instagram"].map((s) => (
            <span key={s} className="border border-dashed border-border rounded px-2 py-1 font-mono text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
