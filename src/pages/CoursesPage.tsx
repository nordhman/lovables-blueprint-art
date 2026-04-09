import { Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Award } from "lucide-react";

const CoursesPage = () => {
  const ownCourses = courses.filter((c) => c.type === "own");
  const affiliateCourses = courses.filter((c) => c.type === "affiliate");

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
      </section>

      {/* Personal Story */}
      <section className="border-y-2 border-dashed border-border bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-40 h-40 border-2 border-dashed border-border rounded-full flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground">Profile photo</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Get to Know Me</span>
              <h2 className="text-xl font-bold mt-2">The Story Behind My Affiliate Marketing Journey</h2>
              <p className="text-sm text-muted-foreground mt-3">I've spent years building affiliate sites and testing strategies. Now I share what works – through my own courses and by recommending the best resources from industry experts.</p>
              <div className="mt-4">
                <WireframeCTA label="Read My Story →" to="/about" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-xl font-bold mb-2">Featured Courses</h2>
        <p className="text-muted-foreground text-sm mb-8">A selection of our most popular courses – both free and premium.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[...ownCourses.slice(0, 1), ...affiliateCourses.slice(0, 2)].map((course) => (
            <Link key={course.slug} to={`/courses/${course.slug}`}>
              <WireframeCard className="hover:border-foreground h-full">
                <PlaceholderImage label="Course image" aspectRatio="video" />
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-xs border-dashed">{course.type === "own" ? "Own" : "Partner"}</Badge>
                    <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
                  </div>
                  <h3 className="font-semibold mt-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                  <span className="inline-block mt-3 font-mono text-xs border border-dashed border-border rounded px-2 py-1">{course.price}</span>
                </div>
              </WireframeCard>
            </Link>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="container mx-auto px-4 pb-16">
        <WireframeCard className="p-6">
          <h2 className="text-xl font-bold">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            {[
              "Finding profitable niches",
              "Building authority websites",
              "SEO and content strategy",
              "Choosing the right affiliate programs",
              "Tracking and optimizing conversions",
              "Scaling to passive income",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </WireframeCard>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16 text-center">
        <WireframeCTA label="See Best Courses 2026 →" to="/best-affiliate-courses" variant="secondary" />
      </section>
    </div>
  );
};

export default CoursesPage;
