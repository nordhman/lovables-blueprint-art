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
      <section className="border-b-2 border-dashed border-border bg-muted/30 py-10 md:py-12">
        <div className="container mx-auto px-4">
          <Eyebrow>Comparison · 2026</Eyebrow>
          <H1 className="mt-3">{title}</H1>
          <Lead className="mt-4 max-w-4xl">{intro}</Lead>
          {isAffiliate && (
            <div className="mt-8 flex items-center gap-x-8 gap-y-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" strokeWidth={2.5} />
                <span className="font-semibold text-sm">{affiliateCourses.length} courses tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" strokeWidth={2.5} />
                <span className="font-semibold text-sm">Independent reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" strokeWidth={2.5} />
                <span className="font-semibold text-sm">Updated 2026</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

      {(!typeFilter || isOwn) && (
        <section>
          <div className="flex items-center gap-3 mb-8">
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
        <section className={!typeFilter ? "mt-16" : ""}>
          <H2 className="mb-8">Ranked Premium Courses</H2>

          <div className="space-y-6">
            {affiliateCourses.map((course, idx) => {
              const contentBenefits = course.meta?.pros ?? [];
              const trustItems = ["30-day money-back", "Lifetime access", `${course.modules} learning modules`];
              return (
                <WireframeCard
                  key={course.slug}
                  className={`relative overflow-hidden p-0 ${idx === 0 ? "border-foreground" : ""}`}
                >
                  {idx === 0 && (
                    <div className="flex items-center justify-center gap-2.5 bg-foreground text-background px-6 py-2.5 border-b-2 border-dashed border-foreground">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold leading-none">
                        Our Top Pick
                      </span>
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  )}
                  <div className="grid md:grid-cols-[56px_200px_1fr_260px] gap-6 items-stretch p-6">
                    {/* Rank */}
                    <div className="flex md:flex-col items-center md:items-start gap-2">
                      <MetaLabel className="leading-none">Rank</MetaLabel>
                      <span className="text-4xl font-bold leading-none">#{idx + 1}</span>
                    </div>

                    {/* Image + Our score */}
                    <div className="flex flex-col gap-5">
                      <PlaceholderImage label="Course image" aspectRatio="video" className="w-full" />
                      {course.meta && (
                        <div className="border-2 border-dashed border-foreground rounded p-3 text-center">
                          <MetaLabel className="block">Our score</MetaLabel>
                          <div className="mt-1">
                            <span className="text-3xl font-bold">{(course.meta.ourScore / 2).toFixed(1)}</span>
                            <span className="font-mono text-xs text-muted-foreground">/5</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <H3 className="!mb-0 leading-none">{course.title}</H3>

                      {course.meta && (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {course.meta.tagline}
                          <br />
                          <Link
                            to={`/courses/${course.slug}/review`}
                            className="underline underline-offset-4 hover:no-underline text-foreground"
                          >
                            Read full review →
                          </Link>
                        </p>
                      )}

                      {course.meta && (
                        <div className="mt-5 flex items-center gap-2 flex-wrap">
                          <Stars rating={course.meta.trustpilot} />
                          <Meta>{course.meta.reviews.toLocaleString()} Trustpilot reviews</Meta>
                        </div>
                      )}

                      {contentBenefits.length > 0 && (
                        <ul className="mt-5 grid sm:grid-cols-3 gap-x-4 gap-y-2.5">
                          {contentBenefits.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                              <span className="text-sm leading-snug">{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {course.meta && (
                        <div className="mt-6 border-l-2 border-dashed border-border pl-4 py-1">
                          <MetaLabel className="block">Best for</MetaLabel>
                          <p className="mt-1.5 text-sm leading-relaxed">
                            <span>{course.meta.bestFor}.</span>{" "}
                            <span className="text-muted-foreground">{course.meta.bottomLine}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Conversion column */}
                    <div className="flex flex-col items-center gap-4 border-l border-dashed border-border pl-5">
                      <div className="text-center">
                        <MetaLabel className="block">Price</MetaLabel>
                        <div className="mt-1.5 text-xl font-bold leading-none">{course.price}</div>
                      </div>

                      <hr className="w-full border-t border-dashed border-border" />

                      <ul className="space-y-2 inline-block">
                        {trustItems.map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                            <span className="text-xs leading-snug">{t}</span>
                          </li>
                        ))}
                      </ul>

                      <hr className="w-full border-t border-dashed border-border" />

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener sponsored"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-4 bg-foreground text-background hover:opacity-90 transition-opacity rounded font-semibold text-base"
                      >
                        Visit Course <ExternalLink className="h-4 w-4" />
                      </a>

                      <span className="mt-auto font-mono text-[10px] italic text-muted-foreground text-center leading-snug">
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
