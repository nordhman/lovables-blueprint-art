import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { H1, H2, H3, Lead, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { Star } from "lucide-react";

const CoursesPage = () => {
  return (
    <div>
      {/* Hero */}
      <WireframeHero size="lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <H1>Ready to Learn Affiliate Marketing?</H1>
            <Lead className="mt-4">
              We'll take you from beginner to pro, covering all the essential tools and strategies you need.
            </Lead>
          </div>
          <PlaceholderImage label="Hero illustration" aspectRatio="video" />
        </div>
      </WireframeHero>

      {/* Two Paths */}
      <section className="container mx-auto px-4 py-14 md:py-16 max-w-5xl">
        {/* Section header */}
        <div className="mb-10">
          <MetaLabel className="inline-block border border-border px-2 py-1 mb-4">
            [ Choose your starting point ]
          </MetaLabel>
          <H2 className="mb-3">Two proven paths. One built for speed, one built for free.</H2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Most beginners waste months piecing together tutorials. Here is the shortcut — and the free fallback if you are not ready yet.
          </p>
        </div>

        {/* Transparency Disclosure */}
        <div className="mb-8 border-l-2 border-dashed border-border pl-6 py-2">
          <div className="flex items-start gap-4">
            <div className="bg-muted px-2.5 py-1 font-mono text-sm shrink-0">!</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Full Disclosure:</span> Our premium recommendations are external partners. We earn an affiliate commission when you sign up through our links. This allows us to keep the site free and our reviews independent. We only list platforms we trust.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* OPTION 01 — Premium (Primary Focus) */}
          <div className="relative border-2 border-foreground p-8 md:p-10 bg-card">
            <div className="absolute -top-3 left-8 bg-foreground text-background px-3 py-1 font-mono text-[10px] font-bold tracking-tighter uppercase flex items-center gap-2">
              <Star className="h-3 w-3 fill-current" />
              <span>Recommended · Best for Results</span>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="mb-6">
                  <MetaLabel className="block mb-1">Option 01 — Premium Path</MetaLabel>
                  <H3 className="text-2xl">Top-Rated Premium Courses</H3>
                  <p className="mt-3 text-muted-foreground">
                    The exact platforms I would choose if I were starting today. Proven curriculum, active communities, and a clear path to generating income.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Structured step-by-step curriculum",
                    "Live community support & networking",
                    "Direct access to expert instructors",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="text-muted-foreground">✓</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-6">
                  <WireframeCTA
                    label="View Recommended Courses →"
                    to="/courses/list?type=affiliate"
                    className="text-sm px-8 py-4"
                  />
                  <Meta className="leading-tight uppercase">
                    Starting at various
                    <br />
                    price points
                  </Meta>
                </div>
              </div>

              <div className="w-full md:w-64 shrink-0">
                <PlaceholderImage label="Premium courses preview" aspectRatio="square" className="w-full" />
              </div>
            </div>
          </div>

          {/* OPTION 02 — Free (Secondary but viable) */}
          <div className="border-2 border-dashed border-border p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <MetaLabel className="block mb-1">Option 02 — Free Path</MetaLabel>
              <H3>The Complete Step-by-Step Guide</H3>
              <p className="text-sm text-muted-foreground mt-2">
                Just exploring? Read our beginner-friendly intro to affiliate marketing. Covers the basics so you can decide if it's worth investing in.
              </p>
            </div>

            <div className="flex items-center gap-8 whitespace-nowrap shrink-0">
              <Meta className="uppercase leading-tight">
                Cost: $0.00
                <br />
                No signup
              </Meta>
              <WireframeCTA label="Read Free Guide" to="/courses/list?type=own" variant="secondary" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <MetaLabel>
            Already know the basics?{" "}
            <a href="/courses/list?type=affiliate" className="text-foreground underline underline-offset-4 decoration-dashed">
              Skip ahead to premium picks ↓
            </a>
          </MetaLabel>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
