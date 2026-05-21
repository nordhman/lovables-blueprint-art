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
      <section className="container mx-auto px-4 py-14 md:py-16">
        {/* Section header — left aligned */}
        <div className="mb-10 max-w-3xl">
          <MetaLabel className="inline-block border border-border px-2 py-1 mb-4">
            [ Choose your starting point ]
          </MetaLabel>
          <H2 className="mb-4">How to Get Started with Affiliate Marketing — Two Proven Paths</H2>
          <Lead>
            Learn affiliate marketing for free or fast-track your growth with expert-led courses. Choose the path that best suits your goals and learning style.
          </Lead>
        </div>

        {/* Main Layout: Dominant + Sidekick (8/4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* OPTION 01 — Premium (Dominant) */}
          <div className="lg:col-span-8 relative">
            <div className="absolute -top-[18px] left-8 z-10 inline-flex items-center justify-center gap-2.5 bg-foreground text-background px-5 py-2 rounded border-2 border-dashed border-foreground">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold leading-none">
                Recommended · Expert-Led
              </span>
              <Star className="h-4 w-4 fill-current" />
            </div>

            <div className="border-2 border-foreground p-8 md:p-10 flex flex-col md:flex-row-reverse gap-10 bg-card h-full">
              <div className="flex-1">
                <MetaLabel className="block mb-2">Option 01 — Premium Path</MetaLabel>
                <H3 className="text-2xl mb-4">Top-Rated: Online &amp; Premium Affiliate Marketing Courses</H3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Looking for an expert-led approach? Check out my handpicked selection of the three best courses available online — with proven strategies, actionable insights, and dedicated support to help you succeed.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "Expert-led, proven strategies from industry veterans",
                    "Skip the guesswork — save months of trial and error",
                    "Built for real income, with dedicated community support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-muted-foreground font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-6">
                  <WireframeCTA
                    label="See Best Online Courses →"
                    to="/courses/list?type=affiliate"
                    className="text-sm px-8 py-4"
                  />
                  <div className="inline-flex items-center gap-2 border-2 border-dashed border-foreground px-3 py-2 rounded">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="font-mono text-xs uppercase tracking-[0.15em] font-semibold leading-none">
                      Handpicked Top 3 Courses
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-80 shrink-0 flex">
                <PlaceholderImage label="Premium courses preview" aspectRatio="square" className="w-full" />
              </div>
            </div>
          </div>


          {/* OPTION 02 — Free (Sidekick) */}
          <div className="lg:col-span-4">
            <div className="border-2 border-dashed border-border p-8 h-full flex flex-col justify-between bg-muted/20">
              <div>
                <MetaLabel className="block mb-2">Option 02 — Free Path</MetaLabel>
                <H3 className="text-xl mb-4">My Free Affiliate Marketing Guide, Step-by-Step</H3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Access my carefully structured, beginner-friendly resource at no cost. Learn the fundamentals at your own pace.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "100% free — no signup required",
                    "Beginner-friendly roadmap",
                    "Learn at your own pace",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <WireframeCTA
                  label="Access the Free Guide →"
                  to="/courses/list?type=own"
                  variant="secondary"
                  className="w-full"
                />
                <Meta className="text-center uppercase">Cost: $0.00 / No signup</Meta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Disclosure */}
      <section className="container mx-auto px-4 pb-14 md:pb-16">
        <div className="p-5 border border-dashed border-border bg-muted/40 flex gap-4 items-start max-w-4xl">
          <span className="font-mono text-sm font-bold text-muted-foreground shrink-0">!</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Full Disclosure:</span> Our premium recommendations are external partners. We earn an affiliate commission when you sign up through our links. This allows us to keep the site free and our reviews independent. We only list platforms we trust.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
