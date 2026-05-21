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
          <H2 className="mb-3">How to Get Started with Affiliate Marketing — Two Proven Paths</H2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Learn affiliate marketing for free or fast-track your growth with expert-led courses. Choose the path that best suits your goals and learning style.
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
              <span>Recommended · Expert-Led</span>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="mb-6">
                  <MetaLabel className="block mb-1">Option 01 — Premium Path</MetaLabel>
                  <H3 className="text-2xl">Top-Rated: Online &amp; Premium Affiliate Marketing Courses</H3>
                  <p className="mt-3 text-muted-foreground">
                    Looking for an expert-led approach? Check out my handpicked selection of the three best courses available online — with proven strategies, actionable insights, and dedicated support to help you succeed.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Expert-led, proven strategies",
                    "Skip the guesswork — save months of trial and error",
                    "Built for real income, with dedicated support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="text-muted-foreground">✓</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-6">
                  <WireframeCTA
                    label="See Best Online Courses →"
                    to="/courses/list?type=affiliate"
                    className="text-sm px-8 py-4"
                  />
                  <Meta className="leading-tight uppercase">
                    Handpicked
                    <br />
                    top 3 courses
                  </Meta>
                </div>
              </div>

              <div className="w-full md:w-64 shrink-0">
                <PlaceholderImage label="Premium courses preview" aspectRatio="square" className="w-full" />
              </div>
            </div>
          </div>

          {/* OPTION 02 — Free */}
          <div className="border-2 border-dashed border-border p-8 md:p-10 bg-muted/20">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="mb-6">
                  <MetaLabel className="block mb-1">Option 02 — Free Path</MetaLabel>
                  <H3 className="text-2xl">My Free Affiliate Marketing Guide, Step-by-Step</H3>
                  <p className="mt-3 text-muted-foreground">
                    Access my carefully structured, beginner-friendly resource at no cost. Learn the fundamentals at your own pace and build a solid foundation for a successful affiliate business — even if you're starting from scratch.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "100% free — no signup required",
                    "Beginner-friendly, structured from the ground up",
                    "Learn at your own pace",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="text-muted-foreground">✓</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-6">
                  <WireframeCTA
                    label="Access the Free Guide →"
                    to="/courses/list?type=own"
                    variant="secondary"
                    className="text-sm px-8 py-4"
                  />
                  <Meta className="leading-tight uppercase">
                    Cost: $0.00
                    <br />
                    No signup
                  </Meta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
