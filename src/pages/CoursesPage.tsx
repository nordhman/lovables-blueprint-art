import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="border-b-2 border-dashed border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Learn Affiliate Marketing</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2">Ready to Learn Affiliate Marketing?</h1>
              <p className="text-muted-foreground mt-4 text-lg">We'll take you from beginner to pro, covering all the essential tools and strategies you need.</p>
            </div>
            <PlaceholderImage label="Hero illustration" aspectRatio="video" />
          </div>
        </div>
      </section>

      {/* How to Get Started — Asymmetric Hero pattern */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">How to Get Started</h2>
          <p className="text-muted-foreground mt-3">There are two ways forward. Here's the one I actually recommend — and a free path if you're just exploring.</p>
        </div>

        {/* Option 2 — Primary, recommended */}
        <div className="mt-10 relative">
          {/* Recommended ribbon */}
          <div className="absolute -top-3 left-6 z-10">
            <div className="inline-flex items-center gap-1.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded">
              <Star className="h-3 w-3 fill-current" />
              Recommended
            </div>
          </div>

          <WireframeCard className="p-8 md:p-10 border-foreground border-2">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono text-xs border-dashed">Option 2</Badge>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Premium Path</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Top-Rated Premium Courses for Serious Beginners
                </h3>

                <p className="text-muted-foreground mt-4">
                  My top choice for those ready to invest time in building a business with the help of a professional learning platform. Perfect for those seeking tangible results while laying a strong foundation.
                </p>

                {/* Benefit bullets */}
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm">
                      <strong>Professional learning platform</strong> — proven curriculum used by thousands of affiliates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm">
                      <strong>Save time, skip guesswork</strong> — clear, actionable steps instead of months of trial and error
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm">
                      <strong>Built for real income</strong> — strategies designed to support sustainable growth, not just traffic
                    </span>
                  </li>
                </ul>

                {/* Personal note / trust */}
                <div className="mt-6 border-l-2 border-dashed border-border pl-4">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Why I recommend this</span>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    "Learning on your own can be overwhelming. These are the courses I personally vetted — the ones I'd take if I started today."
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <WireframeCTA label="See Recommended Courses →" to="/courses/list?type=affiliate" />
                  <span className="font-mono text-xs text-muted-foreground">Trusted picks · Updated 2026</span>
                </div>
              </div>

              {/* Visual side */}
              <div className="hidden md:flex flex-col items-center gap-4 w-48">
                <div className="w-24 h-24 border-2 border-dashed border-border rounded-full flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">My Pick</div>
                  <div className="text-sm font-semibold mt-1">Best for serious learners</div>
                </div>
              </div>
            </div>
          </WireframeCard>
        </div>

        {/* Option 1 — Secondary, low-friction */}
        <div className="mt-6">
          <Link to="/courses/list?type=own" className="block group">
            <WireframeCard className="p-6 bg-muted/20 hover:border-foreground transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 border-2 border-dashed border-border rounded flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono text-xs border-dashed">Option 1</Badge>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Just exploring? Start here free</span>
                  </div>
                  <h3 className="text-lg font-bold mt-2">My Free Affiliate Marketing Guide</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    A beginner-friendly, step-by-step resource at no cost. Build a solid foundation before deciding if you want to go further.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">Browse free guide →</span>
                </div>
              </div>
            </WireframeCard>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
