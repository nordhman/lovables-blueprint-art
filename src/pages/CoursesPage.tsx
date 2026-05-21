import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { H1, H2, H3, Lead, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { Check, Star } from "lucide-react";

const CoursesPage = () => {
  return (
    <div>
      {/* Hero */}
      <WireframeHero size="lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <H1>Ready to Learn Affiliate Marketing?</H1>
            <Lead className="mt-4">We'll take you from beginner to pro, covering all the essential tools and strategies you need.</Lead>
          </div>
          <PlaceholderImage label="Hero illustration" aspectRatio="video" />
        </div>
      </WireframeHero>

      {/* How to Get Started */}
      <section className="container mx-auto px-4 py-16">
        <H2 className="mb-2">Two Proven Paths to Get Started with Affiliate Marketing</H2>
        <p className="text-muted-foreground mb-8">Start free with my own guide, or fast-track your growth with the premium courses I personally recommend.</p>

        {/* Option 1 — Free, exploratory */}
        <div className="mt-10">
          <WireframeCard className="p-5 md:p-6">
            <div className="grid md:grid-cols-[280px_1fr] gap-5 md:gap-6 items-start">
              <PlaceholderImage label="Free guide image" aspectRatio="square" className="w-full" />

              <div>
                <div className="inline-flex items-baseline gap-2 border-b-2 border-dashed border-foreground pb-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Option</span>
                  <span className="text-3xl font-bold leading-none">01</span>
                </div>
                <MetaLabel className="block mt-2">Just exploring? Start here free</MetaLabel>

                <H3 className="mt-1">
                  My Free Affiliate Marketing Guide, Step-by-Step
                </H3>

                <p className="text-muted-foreground mt-2 text-sm">
                  A beginner-friendly, carefully structured resource at no cost. Build a solid foundation for a successful affiliate business — even if you're starting from scratch.
                </p>

                <ul className="mt-4 space-y-1.5">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>100% free</strong> — no signup required to read</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Beginner-friendly</strong> — clear steps from zero to first commission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Learn at your own pace</strong> — perfect for testing the waters</span>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <WireframeCTA label="Access My Free Guide →" to="/courses/list?type=own" variant="secondary" />
                  <Meta>Free · No credit card</Meta>
                </div>
              </div>
            </div>
          </WireframeCard>
        </div>

        {/* Option 2 — Recommended */}
        <div className="mt-12 relative">
          <div className="absolute -top-[18px] left-6 z-10 inline-flex items-center gap-2.5 bg-foreground text-background px-5 py-2 rounded border-2 border-dashed border-foreground">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold leading-none">
              Recommended
            </span>
          </div>

          <WireframeCard className="p-5 md:p-6 border-foreground">
            <div className="grid md:grid-cols-[280px_1fr] gap-5 md:gap-6 items-start">
              <PlaceholderImage label="Premium courses image" aspectRatio="square" className="w-full" />

              <div>
                <div className="inline-flex items-baseline gap-2 border-b-2 border-dashed border-foreground pb-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Option</span>
                  <span className="text-3xl font-bold leading-none">02</span>
                </div>
                <MetaLabel className="block mt-2">Premium Path</MetaLabel>

                <H3 className="mt-1">
                  Top-Rated Premium Courses for Serious Beginners
                </H3>

                <p className="text-muted-foreground mt-2 text-sm">
                  My top choice for those ready to invest time in building a business with the help of a professional learning platform. Perfect for those seeking tangible results while laying a strong foundation.
                </p>

                <ul className="mt-4 space-y-1.5">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Professional learning platform</strong> — proven curriculum used by thousands of affiliates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Save time, skip guesswork</strong> — clear, actionable steps instead of months of trial and error</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Built for real income</strong> — strategies designed to support sustainable growth, not just traffic</span>
                  </li>
                </ul>

                <div className="mt-4 border-l-2 border-dashed border-border pl-4">
                  <MetaLabel>Why I recommend this</MetaLabel>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    "Learning on your own can be overwhelming. These are the courses I personally vetted — the ones I'd take if I started today."
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <WireframeCTA label="See Recommended Courses →" to="/courses/list?type=affiliate" />
                  <Meta>Trusted picks · Updated 2026</Meta>
                </div>
              </div>
            </div>
          </WireframeCard>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
