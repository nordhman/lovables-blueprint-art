import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { H1, H2, H3, Lead, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { Check, Star, ShieldCheck, Clock, TrendingUp, ArrowRight } from "lucide-react";

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

      {/* Two Paths — conversion-focused */}
      <section className="container mx-auto px-4 py-14 md:py-16">
        {/* Section header */}
        <div className="max-w-3xl">
          <MetaLabel className="block mb-3">[ Choose your starting point ]</MetaLabel>
          <H2>Two proven paths. One built for speed, one built for free.</H2>
          <p className="text-muted-foreground mt-3">
            Most beginners waste 6–12 months piecing together free tutorials. Here's the shortcut — and the free fallback if you're not ready yet.
          </p>
        </div>

        {/* OPTION 01 — Premium (dominant) */}
        <div className="mt-10 relative">
          {/* Floating recommended badge */}
          <div className="absolute -top-[18px] left-6 z-10 inline-flex items-center gap-2.5 bg-foreground text-background px-5 py-2 rounded border-2 border-dashed border-foreground">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold leading-none">
              Recommended · Best for results
            </span>
          </div>

          <WireframeCard className="p-5 md:p-8 border-foreground">
            {/* Top strip: trust signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-4 mb-5 border-b border-dashed border-border">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
                <span className="font-mono text-xs ml-1">4.9 / 5</span>
                <Meta>(2,140+ reviews)</Meta>
              </div>
              <Meta>· 18,000+ affiliates trained</Meta>
              <Meta>· Personally vetted in 2026</Meta>
            </div>

            <div className="grid md:grid-cols-[320px_1fr] gap-6 md:gap-8 items-start">
              <div className="space-y-3">
                <PlaceholderImage label="Premium courses preview" aspectRatio="portrait" className="w-full" />
                <div className="border-2 border-dashed border-border rounded p-3 text-center">
                  <Meta className="block">Starting at</Meta>
                  <div className="font-bold text-2xl leading-tight mt-0.5">$49<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                  <Meta className="block mt-1">or $399 one-time</Meta>
                </div>
              </div>

              <div>
                <div className="inline-flex items-baseline gap-2 border-b-2 border-dashed border-foreground pb-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Option</span>
                  <span className="text-3xl font-bold leading-none">01</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground ml-2">· Premium path</span>
                </div>

                <H3 className="mt-3 text-xl md:text-2xl">
                  Top-Rated Premium Courses — Built to Get You to Your First Commission Fast
                </H3>

                <p className="text-muted-foreground mt-2 text-sm">
                  Skip the trial-and-error. These are the exact platforms I'd choose if I were starting today — proven curriculum, active community, and a clear path to real income.
                </p>

                {/* Outcome-driven bullets */}
                <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  <li className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>First commission in 30–60 days</strong> with a step-by-step plan</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <TrendingUp className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Scalable to $5k+/mo</strong> using the same playbook top affiliates run</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Live community + weekly Q&A</strong> — never get stuck alone</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>30-day money-back guarantee</strong> — zero risk to try</span>
                  </li>
                </ul>

                {/* Personal endorsement */}
                <div className="mt-5 border-l-2 border-dashed border-foreground pl-4">
                  <MetaLabel>Why I personally recommend this</MetaLabel>
                  <p className="text-sm mt-1 italic">
                    "I've reviewed 40+ courses. These 3 are the only ones I'd actually pay for again — and the only ones I send my own readers to."
                  </p>
                </div>

                {/* CTA stack with risk reversal */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <WireframeCTA
                    label="See the 3 Recommended Courses →"
                    to="/courses/list?type=affiliate"
                    className="text-base px-7 py-3.5"
                  />
                  <div className="flex flex-col">
                    <Meta>✓ 30-day money-back · No subscription lock-in</Meta>
                    <Meta>✓ Independently reviewed · Updated 2026</Meta>
                  </div>
                </div>
              </div>
            </div>
          </WireframeCard>
        </div>

        {/* OR divider */}
        <div className="flex items-center gap-4 my-10 max-w-2xl mx-auto">
          <div className="flex-1 border-t-2 border-dashed border-border" />
          <MetaLabel>or, not ready yet?</MetaLabel>
          <div className="flex-1 border-t-2 border-dashed border-border" />
        </div>

        {/* OPTION 02 — Free (de-emphasized, low-friction) */}
        <WireframeCard className="p-5 md:p-6 bg-muted/30">
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex items-center gap-4 md:w-[280px] shrink-0">
              <div className="inline-flex items-baseline gap-2 border-b-2 border-dashed border-muted-foreground pb-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Option</span>
                <span className="text-2xl font-bold leading-none text-muted-foreground">02</span>
              </div>
              <MetaLabel>Free path</MetaLabel>
            </div>

            <div className="flex-1">
              <H3 className="text-base md:text-lg">
                Just exploring? Read my free step-by-step guide.
              </H3>
              <p className="text-sm text-muted-foreground mt-1">
                A beginner-friendly intro to affiliate marketing — covers the basics so you can decide if it's worth investing in. No signup. Takes ~20 min to read.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Meta>Free · No credit card</Meta>
              <WireframeCTA label="Read Free Guide →" to="/courses/list?type=own" variant="secondary" />
            </div>
          </div>
        </WireframeCard>

        {/* Closing nudge back to Option 1 */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          <span className="inline-flex items-center gap-2">
            Already know affiliate marketing is for you?
            <a href="/courses/list?type=affiliate" className="font-semibold text-foreground underline underline-offset-4 decoration-dashed inline-flex items-center gap-1">
              Skip ahead to the premium picks <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default CoursesPage;
