import { Link, useSearchParams } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { Eyebrow, H1, H2, H3, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { courses } from "@/data/mockData";
import { courseParts } from "@/data/coursePartsData";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ExternalLink, ArrowRight, Clock } from "lucide-react";

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
    ? "Free Affiliate Marketing Courses"
    : isAffiliate
    ? "Top-Rated Online Affiliate Marketing Courses"
    : "All Courses";

  const intro = isOwn
    ? "A complete, beginner-friendly learning path — from your first niche pick to scaling a real affiliate business. 100% free, no signup required."
    : isAffiliate
    ? "Hand-picked premium affiliate marketing courses, ranked by rating. Each one is a paid course from an external provider — read my full review or go straight to the course."
    : "Curated courses for affiliate marketing – our own and recommended.";

  const totalChapters = courseParts.reduce((sum, p) => sum + p.chapters.length, 0);
  const partsCount = courseParts.length;

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: isAffiliate ? "Premium Courses" : isOwn ? "Free Courses" : "All courses" },
        ]}
      />
      {/* Hero */}
      <WireframeHero size="sm">
        <Eyebrow>{isOwn ? "Free learning path · Choose where to start" : "Comparison · 2026"}</Eyebrow>
        <H1 className="mt-3">{isOwn ? "Two parts. Pick the one that fits where you are." : title}</H1>
        <Lead className="mt-4 max-w-4xl">
          {isOwn ? (
            <><strong>Foundations</strong> takes you from zero to your first live affiliate links. <strong>Growth & Scale</strong> picks up after that and shows you how to grow real, scalable income.</>
          ) : intro}
        </Lead>
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
        {isOwn && (
          <div className="mt-8 flex items-center gap-x-8 gap-y-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" strokeWidth={2.5} />
              <span className="font-semibold text-sm">{partsCount} parts · {totalChapters} chapters</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" strokeWidth={2.5} />
              <span className="font-semibold text-sm">~2.5 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" strokeWidth={2.5} />
              <span className="font-semibold text-sm">100% free · No signup</span>
            </div>
          </div>
        )}
      </WireframeHero>


      <div className="container mx-auto px-4 py-12">

      {(!typeFilter || isOwn) && (
        <section>
          {!typeFilter && (
            <div className="flex items-center gap-3 mb-8">
              <H2>My Free Courses</H2>
              <Badge variant="outline" className="font-mono text-xs border-dashed">Free</Badge>
            </div>
          )}

          {isOwn && null}


          <div className={isOwn ? "grid lg:grid-cols-[1fr_320px] gap-8 items-start" : ""}>
            <div className="grid gap-4">
              {courseParts.map((part) => {
                const totalMin = part.chapters.reduce((sum, m) => sum + m.readMin, 0);
                return (
                  <Link
                    key={part.slug}
                    to={`/courses/list/${part.slug}`}
                    className="block group"
                  >
                    <WireframeCard className="group-hover:border-foreground p-0 overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-64 shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-border">
                          <PlaceholderImage
                            label={`${part.eyebrow} cover`}
                            aspectRatio="none"
                            className="w-full h-full min-h-[180px] rounded-none border-0"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <MetaLabel>{part.eyebrow}</MetaLabel>
                            <span className="font-mono text-xs text-muted-foreground">
                              {part.chapters.length} chapters · ~{totalMin} min
                            </span>
                          </div>
                          <H3 className="!text-xl">{part.title}</H3>
                          <BodySmall className="mt-2 line-clamp-2">{part.description}</BodySmall>

                          <div className="mt-auto pt-4 flex items-center justify-between">
                            <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold border-b-2 border-dashed border-foreground pb-1 group-hover:border-solid">
                              Open {part.eyebrow} <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </WireframeCard>
                  </Link>
                );
              })}
              {isOwn && (
                <div className="p-6 border border-dashed border-border bg-muted/40 flex flex-col md:flex-row gap-4 md:items-center md:justify-between opacity-50 hover:opacity-100 hover:border-foreground hover:bg-muted/60 transition-all duration-300">
                  <div>
                    <MetaLabel>Want a faster path?</MetaLabel>
                    <p className="text-sm mt-1.5 text-muted-foreground leading-relaxed">
                      My free guide covers the fundamentals. If you want a proven, expert-led system, compare the top premium courses I recommend.
                    </p>
                  </div>
                  <WireframeCTA
                    label="Compare Premium Courses →"
                    to="/courses/list?type=affiliate"
                    variant="secondary"
                  />
                </div>
              )}
            </div>

            {isOwn && (
              <aside className="lg:sticky lg:top-24">
                <WireframeCard className="p-6">
                  {/* About the author */}
                  <MetaLabel className="block mb-4">About the author</MetaLabel>
                  <div className="flex flex-col items-center text-center gap-3">
                    <PlaceholderImage
                      label="Avatar"
                      aspectRatio="square"
                      className="w-24 h-24 shrink-0 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm leading-tight">[ Author name ]</p>
                      <Meta className="mt-1 block">Affiliate marketer · 8+ yrs</Meta>
                    </div>
                  </div>
                  <BodySmall className="leading-relaxed mt-5">
                    I've built and sold niche sites, run paid traffic, and tested most of the tools out there. This is the playbook I wish I had when I started.
                  </BodySmall>
                  <Link
                    to="/about"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold border-b-2 border-dashed border-foreground pb-0.5 hover:border-solid"
                  >
                    More about me <ArrowRight className="h-3 w-3" />
                  </Link>

                  {/* Divider */}
                  <div className="my-6 border-t border-dashed border-border" />

                  {/* About this guide */}
                  <MetaLabel className="block mb-3">About this guide</MetaLabel>
                  <BodySmall className="leading-relaxed">
                    A no-fluff, beginner-to-intermediate path through affiliate marketing — the same playbook I use across my own sites.
                  </BodySmall>
                  <ul className="mt-4 space-y-2">
                    {[
                      "13 chapters across 2 parts",
                      "~2.5 hours of reading total",
                      "Updated for 2026",
                      "100% free · No signup",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug">{t}</span>
                      </li>
                    ))}
                  </ul>
                </WireframeCard>
              </aside>

            )}
          </div>

        </section>
      )}

      {(!typeFilter || isAffiliate) && (
        <section className={!typeFilter ? "mt-16" : ""}>
          <H2 className="mb-6">Ranked Premium Courses</H2>

          <div className="space-y-6">
            {affiliateCourses.map((course, idx) => {
              const contentBenefits = course.meta?.pros ?? [];
              const trustItems = ["30-day money-back", "Lifetime access", `${course.modules} learning modules`];
              return (
                <div key={course.slug}>
                  {idx === 0 && (
                    <div className="flex justify-center mb-[-18px]">
                      <div className="relative z-10 inline-flex items-center justify-center gap-2.5 bg-foreground text-background px-5 py-2 rounded border-2 border-dashed border-foreground">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold leading-none">
                          Our Top Pick
                        </span>
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  )}
                  <WireframeCard
                    className={`relative overflow-hidden p-0 ${idx === 0 ? "border-foreground" : ""}`}
                  >
                    <div className="grid md:grid-cols-[56px_200px_1fr_260px] gap-6 items-stretch px-6 py-5">
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
                </div>
              );
            })}
          </div>
        </section>
      )}


      {isAffiliate && (
        <div className="mt-16 p-5 border border-dashed border-border bg-muted/40 flex gap-4 items-start max-w-4xl">
          <span className="font-mono text-sm font-bold text-muted-foreground shrink-0">!</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Full Disclosure:</span> Our premium recommendations are external partners. We earn an affiliate commission when you sign up through our links. This allows us to keep the site free and our reviews independent. We only list platforms we trust.
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default CoursesListPage;
