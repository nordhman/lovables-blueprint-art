import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { CheckCircle } from "lucide-react";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12">
    {/* Hero */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Om oss</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Om Affiliate Tour</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Affiliate Tour hjälper dig navigera världen av affiliate marketing med ärliga recensioner, utbildning och beprövade strategier.
        </p>
        <div className="mt-6">
          <WireframeCTA label="Kontakta oss" to="/contact" />
        </div>
      </div>
      <PlaceholderImage label="About hero image" className="w-full" />
    </div>

    {/* About the blog */}
    <section className="mt-16">
      <WireframeCard className="p-8">
        <h2 className="text-xl font-bold">Om bloggen</h2>
        <p className="text-muted-foreground mt-3">
          Affiliate Tour startades för att fylla ett gap i den svenska affiliate-marknaden. Vi erbjuder:
        </p>
        <div className="mt-4 space-y-3">
          {[
            "Ärliga och opartiska verktygsrecensioner",
            "Kurser för både nybörjare och erfarna",
            "Uppdaterade guider om affiliate-nätverk",
            "SEO- och innehållsstrategier som fungerar",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </WireframeCard>
    </section>

    {/* Creator */}
    <section className="mt-12">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
        <PlaceholderImage label="Profilbild" aspectRatio="square" />
        <div>
          <h2 className="text-xl font-bold">Om skaparen</h2>
          <h3 className="text-lg font-semibold mt-2">Daniel</h3>
          <p className="text-muted-foreground mt-2">
            Daniel har arbetat med affiliate marketing sedan 2015. Med erfarenhet från både svenska och internationella marknader delar han med sig av sina bästa strategier och lärdomar.
          </p>
          <div className="mt-4 space-y-2">
            {[
              "10+ års erfarenhet av affiliate marketing",
              "Byggt flertalet lönsamma nischsajter",
              "Testat 50+ verktyg och plattformar",
              "Utbildat hundratals affiliates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">—</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <WireframeCTA label="Kontakta mig →" to="/contact" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
