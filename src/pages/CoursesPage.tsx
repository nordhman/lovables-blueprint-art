import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block font-mono text-xs text-muted-foreground uppercase tracking-wider border-2 border-dashed border-border rounded px-2 py-1">
    {children}
  </span>
);

const CoursesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="border-b-2 border-dashed border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Eyebrow>Learn Affiliate Marketing</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">Ready to Learn Affiliate Marketing?</h1>
              <p className="text-muted-foreground mt-4 text-lg">We'll take you from beginner to pro, covering all the essential tools and strategies you need.</p>
            </div>
            <PlaceholderImage label="Hero illustration" aspectRatio="video" />
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="container mx-auto px-4 py-16">
        <Eyebrow>Get Started</Eyebrow>
        <h2 className="text-2xl font-bold mt-2 mb-2">How to Get Started with Affiliate Marketing — Two Proven Paths</h2>
        <p className="text-muted-foreground mb-8">Start free with my own guide, or fast-track your growth with the premium courses I personally recommend.</p>

        {/* Option 1 — Free, exploratory */}
        <div className="mt-10">
          <WireframeCard className="p-6 md:p-8">
            <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-start">
              <PlaceholderImage label="Free guide image" aspectRatio="video" className="w-full" />

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="outline" className="font-mono text-xs border-dashed">Option 1</Badge>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Just exploring? Start here free</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mt-3 leading-tight">
                  My Free Affiliate Marketing Guide, Step-by-Step
                </h3>

                <p className="text-muted-foreground mt-3">
                  A beginner-friendly, carefully structured resource at no cost. Build a solid foundation for a successful affiliate business — even if you're starting from scratch.
                </p>

                <ul className="mt-5 space-y-2.5">
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

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <WireframeCTA label="Access My Free Guide →" to="/courses/list?type=own" variant="secondary" />
                  <span className="font-mono text-xs text-muted-foreground">Free · No credit card</span>
                </div>
              </div>
            </div>
          </WireframeCard>
        </div>

        {/* Option 2 — Recommended */}
        <div className="mt-6 relative">
          <div className="absolute -top-3 left-6 z-10">
            <div className="inline-flex items-center gap-1.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded">
              <Star className="h-3 w-3 fill-current" />
              Recommended
            </div>
          </div>

          <WireframeCard className="p-6 md:p-8">
            <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-start">
              <PlaceholderImage label="Premium courses image" aspectRatio="video" className="w-full" />

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="outline" className="font-mono text-xs border-dashed">Option 2</Badge>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Premium Path</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mt-3 leading-tight">
                  Top-Rated Premium Courses for Serious Beginners
                </h3>

                <p className="text-muted-foreground mt-3">
                  My top choice for those ready to invest time in building a business with the help of a professional learning platform. Perfect for those seeking tangible results while laying a strong foundation.
                </p>

                <ul className="mt-5 space-y-2.5">
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

                <div className="mt-6 border-l-2 border-dashed border-border pl-4">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Why I recommend this</span>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    "Learning on your own can be overwhelming. These are the courses I personally vetted — the ones I'd take if I started today."
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <WireframeCTA label="See Recommended Courses →" to="/courses/list?type=affiliate" />
                  <span className="font-mono text-xs text-muted-foreground">Trusted picks · Updated 2026</span>
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
