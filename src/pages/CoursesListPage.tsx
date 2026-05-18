import { Link, useSearchParams } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Eyebrow, H1, H2, H3, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ExternalLink } from "lucide-react";

// Wireframe-only enrichment for affiliate (premium) courses
const affiliateMeta: Record<string, { ourScore: number; trustpilot: number; reviews: number; bestFor: string; tagline: string; pros: string[]; bottomLine: string }> = {
  "authority-hacker-pro": {
    ourScore: 9.8,
    trustpilot: 4.9,
    reviews: 1280,
    bestFor: "Building authority sites",
    tagline: "The most complete system for building authority sites that scale.",
    pros: ["Step-by-step system", "Active community", "Lifetime updates"],
    bottomLine: "If you're serious about a long-term content business, this is the safest bet.",
  },
  "affiliate-lab": {
    ourScore: 9.4,
    trustpilot: 4.7,
    reviews: 940,
    bestFor: "SEO-driven affiliate sites",
    tagline: "SEO-first playbook for ranking and flipping niche sites.",
    pros: ["SEO-first approach", "Site flipping playbook", "Ranking templates"],
    bottomLine: "Best pick if your strategy hinges on organic search traffic.",
  },
  "fat-stacks-bundle": {
    ourScore: 8.9,
    trustpilot: 4.5,
    reviews: 610,
    bestFor: "Display-ad niche sites",
    tagline: "Niche-site fundamentals built around display-ad revenue.",
    pros: ["Niche selection guide", "Content production system", "Beginner friendly"],
    bottomLine: "Great starting point for ad-revenue sites on a smaller budget.",
  },
};

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.round(rating) ? "fill-foreground text-foreground" : "text-muted-foreground"}`}
      />
    ))}
    <Meta className="ml-1">{rating.toFixed(1)}</Meta>
  </div>
);

const CoursesListPage = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const ownCourses = courses.filter((c) => c.type === "own");
  const affiliateCourses = courses
    .filter((c) => c.type === "affiliate")
    .map((c) => ({ ...c, meta: affiliateMeta[c.slug] }))
    .sort((a, b) => (b.meta?.ourScore ?? 0) - (a.meta?.ourScore ?? 0));

  const isAffiliate = typeFilter === "affiliate";
  const isOwn = typeFilter === "own";

  const title = isOwn
    ? "My Courses"
    : isAffiliate
    ? "Top-Rated Online Affiliate Marketing Courses"
    : "All Courses";

  const intro = isOwn
    ? "Our own courses – from fundamentals to advanced strategies."
    : isAffiliate
    ? "Hand-picked premium affiliate marketing courses, ranked by rating. Each one is a paid course from an external provider — read my full review or go straight to the course."
    : "Curated courses for affiliate marketing – our own and recommended.";

  return (
    <div>
      {/* Hero */}
      <section className="border-b-2 border-dashed border-border bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <Eyebrow>Comparison · 2026</Eyebrow>
          <H1 className="mt-3">{title}</H1>
          <Lead className="mt-3 max-w-2xl">{intro}</Lead>
          {isAffiliate && (
            <div className="mt-5 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <Meta>{affiliateCourses.length} courses tested</Meta>
              </div>
              <Meta>·</Meta>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <Meta>Independent reviews</Meta>
              </div>
              <Meta>·</Meta>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <Meta>Updated 2026</Meta>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

      {(!typeFilter || isOwn) && (
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <H2>My Courses</H2>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Own</Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ownCourses.map((course) => (
              <Link key={course.slug} to={`/courses/${course.slug}`}>
                <WireframeCard className="hover:border-foreground h-full">
                  <PlaceholderImage label="Course image" aspectRatio="video" />
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <Meta>{course.level}</Meta>
                      <Meta>· {course.modules} modules</Meta>
                    </div>
                    <H4 className="mt-1">{course.title}</H4>
                    <BodySmall className="mt-1">{course.description}</BodySmall>
                    <span className="inline-block mt-3 font-mono text-xs border border-dashed border-border rounded px-2 py-1">{course.price}</span>
                  </div>
                </WireframeCard>
              </Link>
            ))}
          </div>
        </section>
      )}

      {(!typeFilter || isAffiliate) && (
        <section className="mt-12">
          <H2 className="mb-6">Ranked Premium Courses</H2>

          <div className="space-y-6">
            {affiliateCourses.map((course, idx) => {
              const allBenefits = course.meta
                ? [...course.meta.pros, "30-day money-back", "Lifetime access"]
                : [];
              return (
                <WireframeCard
                  key={course.slug}
                  className={`relative p-6 ${idx === 0 ? "border-foreground" : ""}`}
                >
                  {idx === 0 && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-background font-mono text-[10px] uppercase tracking-wider border-2 border-dashed border-foreground rounded px-2 py-1">
                      <Star className="h-3 w-3 fill-current" />
                      Editor's Choice
                    </span>
                  )}
                  <div className="grid md:grid-cols-[64px_220px_1fr_180px] gap-6 items-start">
                    {/* Rank */}
                    <div className="flex md:flex-col items-center md:items-start gap-2">
                      <MetaLabel>Rank</MetaLabel>
                      <span className="text-4xl font-bold leading-none">#{idx + 1}</span>
                    </div>

                    {/* Image */}
                    <PlaceholderImage label="Course image" aspectRatio="video" className="w-full" />

                    {/* Content */}
                    <div className="min-w-0">
                      <H3>{course.title}</H3>
                      {course.meta && (
                        <p className="mt-1 text-sm italic text-muted-foreground">
                          {course.meta.tagline}{" "}
                          <Link
                            to={`/courses/${course.slug}/review`}
                            className="not-italic underline underline-offset-4 hover:no-underline text-foreground whitespace-nowrap"
                          >
                            Read the review →
                          </Link>
                        </p>
                      )}



                      <div className="mt-2 flex items-center gap-x-3 gap-y-1 flex-wrap">
                        <Meta>{course.modules} modules</Meta>
                        {course.partner && <Meta>· via {course.partner}</Meta>}
                        {course.meta && <Meta>· Best for: {course.meta.bestFor}</Meta>}
                      </div>

                      {allBenefits.length > 0 && (
                        <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {allBenefits.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                              <span className="text-sm">{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      {course.meta && (
                        <div className="border-2 border-dashed border-border rounded p-3 text-center">
                          <MetaLabel className="block">Our score</MetaLabel>
                          <div className="mt-1">
                            <span className="text-2xl font-bold">{(course.meta.ourScore / 2).toFixed(1)}</span>
                            <span className="font-mono text-xs text-muted-foreground">/5</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-baseline justify-between gap-2">
                        <MetaLabel>Price</MetaLabel>
                        <span className="text-base font-bold">{course.price}</span>
                      </div>

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener sponsored"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background hover:opacity-90 transition-opacity rounded font-semibold text-sm"
                      >
                        Visit Course <ExternalLink className="h-4 w-4" />
                      </a>

                      <span className="font-mono text-[10px] text-muted-foreground text-center">
                        Affiliate link · We may earn a commission
                      </span>
                    </div>
                  </div>
                </WireframeCard>
              );
            })}
          </div>
        </section>
      )}

      {!isAffiliate && (
        <div className="mt-12 text-center">
          <WireframeCTA label="See Best Courses 2026 →" to="/best-affiliate-courses" variant="secondary" />
        </div>
      )}
      </div>
    </div>
  );
};

export default CoursesListPage;
