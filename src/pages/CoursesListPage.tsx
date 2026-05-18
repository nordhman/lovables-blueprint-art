import { Link, useSearchParams } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Eyebrow, H1, H2, H3, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ExternalLink } from "lucide-react";

// Wireframe-only enrichment for affiliate (premium) courses
const affiliateMeta: Record<string, { rating: number; reviews: number; bestFor: string; pros: string[] }> = {
  "authority-hacker-pro": {
    rating: 4.9,
    reviews: 1280,
    bestFor: "Building authority sites",
    pros: ["Step-by-step system", "Active community", "Lifetime updates", "Proven case studies"],
  },
  "affiliate-lab": {
    rating: 4.8,
    reviews: 940,
    bestFor: "SEO-driven affiliate sites",
    pros: ["SEO-first approach", "Site flipping playbook", "Private community", "Ranking templates"],
  },
  "fat-stacks-bundle": {
    rating: 4.6,
    reviews: 610,
    bestFor: "Display-ad niche sites",
    pros: ["Niche selection guide", "Content production system", "Ad optimization", "Beginner friendly"],
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
    .sort((a, b) => (b.meta?.rating ?? 0) - (a.meta?.rating ?? 0));

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
    <div className="container mx-auto px-4 py-12">
      <H1>{title}</H1>
      <Lead className="mt-4 max-w-2xl">{intro}</Lead>

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
          <div className="flex items-end justify-between flex-wrap gap-3 mb-2">
            <H2>Ranked Premium Courses</H2>
            <div className="flex items-center gap-3">
              <Meta>{affiliateCourses.length} courses tested</Meta>
              <Meta>· Updated 2026</Meta>
            </div>
          </div>
          <BodySmall className="mb-8 max-w-2xl">
            Each course below is personally vetted. Rankings are based on curriculum quality, community, results from real students, and value for money.
          </BodySmall>

          <div className="space-y-8">
            {affiliateCourses.map((course, idx) => {
              const isTop = idx === 0;
              const ribbon = idx === 0 ? "Editor's Choice" : idx === 1 ? "Best Value" : null;
              return (
                <WireframeCard
                  key={course.slug}
                  className={`p-0 overflow-hidden ${isTop ? "border-foreground" : ""}`}
                >
                  {ribbon && (
                    <div className="bg-foreground text-background px-6 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
                        <Star className="h-3 w-3 fill-current" />
                        {ribbon}
                      </div>
                      {course.meta && (
                        <span className="font-mono text-xs uppercase tracking-wider opacity-80">
                          Best for: {course.meta.bestFor}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6 grid md:grid-cols-[60px_1fr_260px] gap-6 items-start">
                    {/* Rank */}
                    <div className="flex md:flex-col items-center md:items-start gap-1">
                      <MetaLabel>Rank</MetaLabel>
                      <span className="text-4xl font-bold leading-none">#{idx + 1}</span>
                    </div>

                    {/* Main content */}
                    <div>
                      <div className="grid sm:grid-cols-[200px_1fr] gap-5">
                        <PlaceholderImage label="Course image" aspectRatio="video" className="w-full" />
                        <div>
                          <H3>{course.title}</H3>
                          {course.meta && (
                            <div className="mt-2 flex items-center gap-3 flex-wrap">
                              <Stars rating={course.meta.rating} />
                              <Meta>({course.meta.reviews.toLocaleString()} reviews)</Meta>
                            </div>
                          )}
                          <div className="mt-2 flex items-center gap-2 flex-wrap">
                            <Meta>{course.modules} modules</Meta>
                            {course.partner && <Meta>· via {course.partner}</Meta>}
                            {!ribbon && course.meta && (
                              <Badge variant="outline" className="font-mono text-xs border-dashed">
                                Best for: {course.meta.bestFor}
                              </Badge>
                            )}
                          </div>
                          <BodySmall className="mt-3">{course.description}</BodySmall>
                        </div>
                      </div>

                      {course.meta && (
                        <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {course.meta.pros.slice(0, 4).map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                              <span className="text-sm">{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Conversion column */}
                    <div className="flex flex-col gap-3 bg-muted/40 border-2 border-dashed border-border rounded p-4">
                      <div className="text-center">
                        <MetaLabel className="block">Price</MetaLabel>
                        <div className="text-2xl font-bold mt-1 leading-none">{course.price}</div>
                        <Meta className="block mt-1">One-time payment</Meta>
                      </div>

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener sponsored"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background hover:opacity-90 transition-opacity rounded font-semibold text-sm"
                      >
                        Visit Course <ExternalLink className="h-4 w-4" />
                      </a>

                      <Link
                        to={`/courses/${course.slug}/review`}
                        className="text-center text-sm underline underline-offset-4 hover:no-underline"
                      >
                        Read full review
                      </Link>

                      <div className="border-t border-dashed border-border pt-3 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <Meta>30-day money-back</Meta>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <Meta>Lifetime access</Meta>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] text-muted-foreground text-center">
                        Affiliate link · We may earn a commission
                      </span>
                    </div>
                  </div>
                </WireframeCard>
              );
            })}
          </div>

          {/* Final conversion nudge */}
          <WireframeCard className="mt-10 p-6 text-center">
            <H3>Still not sure which course to pick?</H3>
            <BodySmall className="mt-2 max-w-xl mx-auto">
              Our #1 pick is the safest bet for most beginners — proven curriculum, active community, and a 30-day money-back guarantee.
            </BodySmall>
            <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="#"
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background hover:opacity-90 transition-opacity rounded font-semibold text-sm"
              >
                Visit #1 Course <ExternalLink className="h-4 w-4" />
              </a>
              {affiliateCourses[0] && (
                <WireframeCTA
                  label="Read the Review →"
                  to={`/courses/${affiliateCourses[0].slug}/review`}
                  variant="secondary"
                />
              )}
            </div>
          </WireframeCard>
        </section>
      )}

      {!isAffiliate && (
        <div className="mt-12 text-center">
          <WireframeCTA label="See Best Courses 2026 →" to="/best-affiliate-courses" variant="secondary" />
        </div>
      )}
    </div>
  );
};

export default CoursesListPage;
