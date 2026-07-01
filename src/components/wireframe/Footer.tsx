import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t-2 border-dashed border-border bg-card mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-mono text-sm font-bold">[ Affiliate Tour ]</span>
          <p className="text-sm text-muted-foreground mt-2">Your guide to affiliate marketing – courses, tools, and strategies.</p>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Pages</h4>
          <div className="space-y-2">
            <Link to="/courses" className="block text-sm hover:text-foreground text-muted-foreground">Courses</Link>
            <Link to="/tools" className="block text-sm hover:text-foreground text-muted-foreground">Tools</Link>
            <Link to="/networks" className="block text-sm hover:text-foreground text-muted-foreground">Networks</Link>
            <Link to="/blog" className="block text-sm hover:text-foreground text-muted-foreground">Blog</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Resources</h4>
          <div className="space-y-2">
            <Link to="/best-affiliate-tools" className="block text-sm hover:text-foreground text-muted-foreground">Best Tools</Link>
            <Link to="/courses/list?type=affiliate" className="block text-sm hover:text-foreground text-muted-foreground">Best Courses</Link>
            <Link to="/best-affiliate-networks" className="block text-sm hover:text-foreground text-muted-foreground">Best Networks</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Info</h4>
          <div className="space-y-2">
            <Link to="/about" className="block text-sm hover:text-foreground text-muted-foreground">About</Link>
            <Link to="/contact" className="block text-sm hover:text-foreground text-muted-foreground">Contact</Link>
            <Link to="/styleguide" className="block text-sm hover:text-foreground text-muted-foreground">Style Guide</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground">© 2026 Affiliate Tour. All rights reserved.</span>
        <div className="flex gap-4">
          {["Twitter", "YouTube", "Instagram"].map((s) => (
            <span key={s} className="border border-dashed border-border rounded px-2 py-1 font-mono text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
