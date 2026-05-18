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
    <span className="font-mono text-xs text-muted-foreground ml-1">{rating.toFixed(1)}</span>
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
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Learning</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">{title}</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">{intro}</p>

      {(!typeFilter || isOwn) && (
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold">My Courses</h2>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Own</Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ownCourses.map((course) => (
              <Link key={course.slug} to={`/courses/${course.slug}`}>
                <WireframeCard className="hover:border-foreground h-full">
                  <PlaceholderImage label="Course image" aspectRatio="video" />
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
                      <span className="font-mono text-xs text-muted-foreground">· {course.modules} modules</span>
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
      )}

      {(!typeFilter || isAffiliate) && (
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold">Ranked Premium Courses</h2>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Affiliate</Badge>
            <span className="font-mono text-xs text-muted-foreground">Updated 2026</span>
          </div>

          <div className="space-y-6">
            {affiliateCourses.map((course, idx) => (
              <WireframeCard key={course.slug} className="p-6">
                <div className="grid md:grid-cols-[80px_260px_1fr_220px] gap-6 items-start">
                  {/* Rank */}
                  <div className="flex md:flex-col items-center md:items-start gap-2">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Rank</span>
                    <span className="text-4xl font-bold leading-none">#{idx + 1}</span>
                  </div>

                  {/* Image */}
                  <PlaceholderImage label="Course image" aspectRatio="video" className="w-full" />

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
                      <span className="font-mono text-xs text-muted-foreground">· {course.modules} modules</span>
                      {course.partner && (
                        <span className="font-mono text-xs text-muted-foreground">· via {course.partner}</span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mt-1">{course.title}</h3>
                    {course.meta && (
                      <div className="mt-2 flex items-center gap-3 flex-wrap">
                        <Stars rating={course.meta.rating} />
                        <span className="font-mono text-xs text-muted-foreground">
                          ({course.meta.reviews.toLocaleString()} reviews)
                        </span>
                        <Badge variant="outline" className="font-mono text-xs border-dashed">
                          Best for: {course.meta.bestFor}
                        </Badge>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-3">{course.description}</p>

                    {course.meta && (
                      <div className="mt-4">
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                          Key benefits
                        </span>
                        <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {course.meta.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                              <span className="text-sm">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 md:items-stretch">
                    <div className="border-2 border-dashed border-border rounded p-3 text-center">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">
                        Price
                      </span>
                      <span className="text-xl font-bold">{course.price}</span>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
                    >
                      Visit Course <ExternalLink className="h-4 w-4" />
                    </a>
                    <WireframeCTA
                      label="Read Review →"
                      to={`/courses/${course.slug}/review`}
                      variant="secondary"
                      className="w-full"
                    />
                    <span className="font-mono text-[10px] text-muted-foreground text-center">
                      Affiliate link · We may earn a commission
                    </span>
                  </div>
                </div>
              </WireframeCard>
            ))}
          </div>
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
