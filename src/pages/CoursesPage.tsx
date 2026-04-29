import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Sparkles } from "lucide-react";

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

      {/* Two Paths */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center">How to Get Started – Two Proven Paths</h2>
        <p className="text-muted-foreground text-center mt-2 max-w-2xl mx-auto">Learn affiliate marketing for free or fast-track your growth with expert-led courses – choose the path that best suits your goals.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Option 1 — My Courses */}
          <WireframeCard className="p-6 flex flex-col">
            <Badge variant="outline" className="font-mono text-xs border-dashed w-fit">Option 1</Badge>
            <div className="flex gap-4 mt-4">
              <div className="shrink-0">
                <div className="w-12 h-12 border-2 border-dashed border-border rounded flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">My Free Affiliate Marketing Guide, Step-by-Step</h3>
                <p className="text-sm text-muted-foreground mt-2">Access my carefully structured, beginner-friendly resource at no cost. Build a solid foundation for a successful affiliate business – even if you're starting from scratch.</p>
              </div>
            </div>
            <div className="mt-auto pt-6">
              <WireframeCTA label="Access My Courses →" to="/courses/list?type=own" />
            </div>
          </WireframeCard>

          {/* Option 2 — Premium / Recommended */}
          <WireframeCard className="p-6 flex flex-col">
            <Badge variant="outline" className="font-mono text-xs border-dashed w-fit">Option 2</Badge>
            <div className="flex gap-4 mt-4">
              <div className="shrink-0">
                <div className="w-12 h-12 border-2 border-dashed border-border rounded flex items-center justify-center">
                  <Award className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Top-Rated: Online & Premium Affiliate Marketing Courses</h3>
                <p className="text-sm text-muted-foreground mt-2">Looking for an expert-led approach? Check out my handpicked selection of the best courses available online with proven strategies and dedicated support.</p>
              </div>
            </div>
            <div className="mt-auto pt-6">
              <WireframeCTA label="Best Online Courses →" to="/courses/list?type=affiliate" />
            </div>
          </WireframeCard>
        </div>

        {/* Recommendation box under both options */}
        <div className="mt-8">
          <WireframeCard className="p-6 bg-muted/30">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 border-2 border-dashed border-border rounded flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Hard to choose?</span>
                <h3 className="text-lg font-bold mt-1">Option 2 is Our Advice if You Want More Personal Guidance</h3>
                <p className="text-sm text-muted-foreground mt-3">
                  Option 2 is our top choice for those ready to invest time in building a business from scratch with the help of a professional learning platform. It's perfect for those seeking tangible results while laying a strong foundation.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Learning on your own can be overwhelming, but our top course selections save you time and provide clear, actionable guidance to support your growth and income. Explore our list and take your next step today!
                </p>
                <div className="mt-5">
                  <WireframeCTA label="See Recommended Courses →" to="/courses/list?type=affiliate" />
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
