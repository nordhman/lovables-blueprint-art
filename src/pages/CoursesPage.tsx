import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { H1, H2, H3, Lead, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { Star } from "lucide-react";

const CoursesPage = () => {
  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses" },
        ]}
      />
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
      <section className="container mx-auto px-4 py-12">
        {/* Section header — left aligned */}
        <div className="mb-10">
          <MetaLabel className="inline-block border border-border px-2 py-1 mb-4">
            [ Choose your starting point ]
          </MetaLabel>
          <H2 className="mb-4">How to Get Started with Affiliate Marketing — Two Proven Paths</H2>
          <Lead>
            Learn affiliate marketing for free or fast-track your growth with expert-led courses. Choose the path that best suits your goals and learning style.
          </Lead>
        </div>

        {/* Stacked options */}
        <div className="flex flex-col gap-10">
          {/* OPTION 01 — Premium */}
          <div className="relative">
            <div className="absolute -top-[18px] left-8 z-10 inline-flex items-center justify-center gap-2.5 bg-foreground text-background px-5 py-2 rounded border-2 border-dashed border-foreground">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold leading-none">
                Recommended · Expert-Led
              </span>
              <Star className="h-4 w-4 fill-current" />
            </div>

            <div className="border-2 border-foreground p-8 md:p-10 flex flex-col md:flex-row-reverse gap-10 bg-card">
              <div className="flex-1">
                <div className="inline-block mb-3 font-mono text-sm uppercase tracking-[0.18em] font-bold text-foreground bg-foreground/10 border border-foreground px-3 py-1.5">Option 01 — Premium Path</div>
                <H3 className="text-2xl mb-4">Skip the Trial and Error — Learn From Those Who've Already Won</H3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The 3 best affiliate marketing courses online, handpicked and battle-tested. Proven playbooks from creators earning six and seven figures — so you can shortcut years of guesswork.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Proven systems from creators with real revenue",
                    "Save months of trial, error, and wasted spend",
                    "Step-by-step roadmaps with community support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-muted-foreground font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                  <span className="h-px flex-1 bg-border" />
                  <span>Handpicked · Top 3 Courses</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <WireframeCTA
                  label="Compare the Top 3 Courses →"
                  to="/courses/list?type=affiliate"
                  className="w-full text-base py-5"
                />

              </div>

              <div className="w-full md:w-[420px] shrink-0 flex">
                <PlaceholderImage label="Premium courses preview" aspectRatio="wide" className="w-full" />
              </div>
            </div>
          </div>

          {/* OPTION 02 — Free */}
          <div>
            <div className="border-2 border-dashed border-foreground/50 p-8 md:p-10 flex flex-col md:flex-row gap-10 bg-muted/60">
              <div className="flex-1">
                <div className="inline-block mb-3 font-mono text-sm uppercase tracking-[0.18em] font-bold text-foreground border border-dashed border-foreground px-3 py-1.5">Option 02 — Free Path</div>
                <H3 className="text-2xl mb-4">My Free Affiliate Marketing Guide, Step-by-Step</H3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Access my carefully structured, beginner-friendly resource at no cost. Learn the fundamentals at your own pace, building a solid foundation before you invest in anything.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "100% free — no signup required",
                    "Beginner-friendly roadmap",
                    "Learn at your own pace",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-muted-foreground font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                  <span className="h-px flex-1 bg-border" />
                  <span>Cost: $0.00 · No Signup</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <WireframeCTA
                  label="Access the Free Guide →"
                  to="/courses/list?type=own"
                  variant="secondary"
                  className="w-full text-base py-5"
                />
              </div>

              <div className="w-full md:w-[420px] shrink-0 flex">
                <PlaceholderImage label="Free guide preview" aspectRatio="wide" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;

