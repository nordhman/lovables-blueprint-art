import { useParams, Link } from "react-router-dom";
import { Eyebrow, H1, H2 } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { SourceBadge } from "@/components/wireframe/SourceBadge";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Star,
  Check,
  X,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Quote,
  Pencil,
} from "lucide-react";

const reviewMeta: Record<
  string,
  {
    ourScore: number;
    rating: number | null;
    reviews: number | null;
    verdict: string;
    intro: string;
    bestFor: string;
    notFor: string;
    pros: string[];
    cons: string[];
    curriculum: string[];
    instructor: { name: string; bio: string };
    studentQuotes: { text: string; source: string }[];
    alternatives: { name: string; price: string; rating: number; reviews: number; href: string }[];
    faqs: { q: string; a: string }[];
    refundDays: number;
    lastUpdated: string;
    lastScraped: string;
  }
> = {
  "authority-hacker-pro": {
    ourScore: 9.8,

    rating: 4.9,
    reviews: 1280,
    verdict:
      "The most complete authority-site system on the market. Worth the price if you're serious about building a long-term affiliate business.",
    intro:
      "Authority Hacker Pro has been around since 2017 and is widely considered the gold standard for building content-driven affiliate sites. In this guide we break down what's actually inside, what real students say, and who should (and shouldn't) buy it.",
    bestFor: "Serious affiliates building long-term sites",
    notFor: "Total beginners on a tight budget",
    pros: [
      "Step-by-step blueprint, nothing left to guess",
      "Active private community with real operators",
      "Lifetime updates included",
    ],
    cons: [
      "Premium price point",
      "Requires real time investment (10+ hrs/week)",
      "Some content overlaps with their free material",
    ],
    curriculum: [
      "Module 1 — Niche & keyword research",
      "Module 2 — Site setup & technical SEO",
      "Module 3 — Content production system",
      "Module 4 — Link building at scale",
      "Module 5 — Monetization & scaling",
    ],
    instructor: {
      name: "Gael Breton & Mark Webster",
      bio: "Co-founders of Authority Hacker. Building and selling authority sites since 2014. Featured speakers at Chiang Mai SEO, BrightonSEO and Ahrefs Evolve.",
    },
    studentQuotes: [
      { text: "Worth every penny. The community alone is worth the price.", source: "Trustpilot" },
      { text: "Most structured course I've taken in 10 years of SEO.", source: "r/juststart" },
      { text: "Heavy on theory in the first modules — push through, the gold is later.", source: "YouTube review" },
    ],
    alternatives: [
      { name: "The Affiliate Lab", price: "$997", rating: 4.7, reviews: 540, href: "#" },
      { name: "Fat Stacks Bundle", price: "$299", rating: 4.5, reviews: 320, href: "#" },
    ],
    faqs: [
      { q: "Is there a refund policy?", a: "Yes — 30-day money-back guarantee, no questions asked." },
      { q: "Do I get lifetime access?", a: "Yes, including all future updates." },
      { q: "Is it beginner friendly?", a: "Structured, but assumes commitment. Not ideal for total hobbyists." },
    ],
    refundDays: 30,
    lastUpdated: "March 2026",
    lastScraped: "2 days ago",
  },
};

const Stars = ({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) => {
  const cls = size === "lg" ? "h-6 w-6" : size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < Math.round(rating) ? "fill-foreground text-foreground" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
};

const SectionHeader = ({
  title,
  source,
}: {
  title: string;
  source: { type: "auto" | "manual"; label: string };
}) => (
  <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
    <H2>{title}</H2>
    <SourceBadge type={source.type} label={source.label} />
  </div>
);

const CourseReviewPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const m = (slug && reviewMeta[slug]) || reviewMeta["authority-hacker-pro"];

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Course not found.</p>
        <WireframeCTA label="← Back" to="/courses/list?type=affiliate" className="mt-4" />
      </div>
    );
  }

  const affiliateHref = "#";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/courses/list?type=affiliate" className="hover:text-foreground">Reviews</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{course.title}</span>
      </nav>

      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <Link
          to="/courses/list?type=affiliate"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Back to all reviews
        </Link>
        <Link
          to={`/courses/${course.slug}/review/edit`}
          className="inline-flex items-center gap-1 font-mono text-xs border-2 border-dashed border-border rounded px-2 py-1 hover:border-foreground"
        >
          <Pencil className="h-3 w-3" /> Edit review (admin)
        </Link>
      </div>

      {/* Trust strip */}
      <div className="border-2 border-dashed border-border rounded p-3 mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Independently reviewed · <Link to="/about" className="underline">How we evaluate</Link></span>
        <span>Last updated: {m.lastUpdated}</span>
        <span>Auto-data refreshed: {m.lastScraped}</span>
      </div>

      {/* HERO */}
      <section className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
        <div>
          <Eyebrow>Buyer's guide</Eyebrow>
          <H1 className="mt-3">
            {course.title} Review ({new Date().getFullYear()})
          </H1>
          <p className="text-lg text-muted-foreground mt-4">{m.intro}</p>
          <div className="mt-3">
            <SourceBadge type="manual" label="your intro" />
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {/* Our score */}
            <div className="border-2 border-dashed border-foreground rounded p-4 max-w-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Our score</span>
                <SourceBadge type="manual" label="editorial" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{(m.ourScore / 2).toFixed(1)}</span>
                <span className="font-mono text-xs text-muted-foreground">/5</span>
                <span className="font-mono text-xs text-muted-foreground ml-2">({m.ourScore.toFixed(1)}/10)</span>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground mt-2">
                Based on our independent review
              </p>
            </div>

            {/* Trustpilot */}
            <div className="border-2 border-dashed border-border rounded p-4 max-w-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Trustpilot</span>
                <SourceBadge type="auto" label="scraped" />
              </div>
              {m.rating !== null && m.reviews !== null ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">{m.rating.toFixed(1)}</span>
                    <Stars rating={m.rating} size="sm" />
                  </div>
                  <p className="font-mono text-[11px] text-muted-foreground mt-2">
                    {m.reviews.toLocaleString()} reviews on Trustpilot
                  </p>
                </>
              ) : (
                <p className="font-mono text-xs text-muted-foreground">
                  No Trustpilot rating available for this course yet.
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Sticky conversion card */}
        <WireframeCard className="md:sticky md:top-6 p-6">
          <PlaceholderImage label="Course image (auto)" aspectRatio="video" />
          <div className="mt-4 border-2 border-dashed border-border rounded p-3 text-center">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">Price</span>
            <span className="text-2xl font-bold">{course.price}</span>
            <span className="font-mono text-[10px] text-muted-foreground block mt-1">
              {m.refundDays}-day money-back guarantee
            </span>
            <div className="mt-2 flex justify-center">
              <SourceBadge type="auto" label="official site" />
            </div>
          </div>

          <a
            href={affiliateHref}
            target="_blank"
            rel="noopener sponsored"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
          >
            Visit {course.title} <ExternalLink className="h-4 w-4" />
          </a>
        </WireframeCard>
      </section>

      {/* Verdict */}
      <section className="mt-12 max-w-4xl">
        <SectionHeader title="Our verdict" source={{ type: "manual", label: "you write this" }} />
        <WireframeCard className="p-6">
          <p className="text-lg">{m.verdict}</p>
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="font-mono text-xs border-dashed">Best for: {m.bestFor}</Badge>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Skip if: {m.notFor}</Badge>
          </div>
        </WireframeCard>
      </section>

      {/* Pros & cons */}
      <section className="mt-12">
        <SectionHeader title="Pros & Cons" source={{ type: "manual", label: "your take" }} />
        <div className="grid md:grid-cols-2 gap-6">
          <WireframeCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Check className="h-5 w-5" />
              <h3 className="font-bold">What works</h3>
            </div>
            <ul className="space-y-3">
              {m.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </WireframeCard>
          <WireframeCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <X className="h-5 w-5" />
              <h3 className="font-bold">What could be better</h3>
            </div>
            <ul className="space-y-3">
              {m.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm">
                  <X className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </WireframeCard>
        </div>
      </section>

      {/* What students say */}
      <section className="mt-12">
        <SectionHeader
          title="What students say"
          source={{ type: "auto", label: "Trustpilot, Reddit, YouTube" }}
        />
        <div className="grid md:grid-cols-3 gap-4">
          {m.studentQuotes.map((q) => (
            <WireframeCard key={q.text} className="p-5">
              <Quote className="h-5 w-5 text-muted-foreground mb-2" />
              <p className="text-sm">"{q.text}"</p>
              <p className="font-mono text-xs text-muted-foreground mt-3">— {q.source}</p>
            </WireframeCard>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="mt-12">
        <SectionHeader
          title="Who teaches it"
          source={{ type: "auto", label: "official site + LinkedIn" }}
        />
        <WireframeCard className="p-6 flex gap-4 items-start">
          <div className="w-20 shrink-0">
            <PlaceholderImage label="Photo" aspectRatio="square" />
          </div>
          <div>
            <h3 className="font-bold">{m.instructor.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{m.instructor.bio}</p>
          </div>
        </WireframeCard>
      </section>

      {/* Alternatives */}
      <section className="mt-12">
        <SectionHeader
          title="Alternatives to consider"
          source={{ type: "auto", label: "Trustpilot ratings" }}
        />
        <div className="border-2 border-dashed border-border rounded overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dashed border-border">
                <th className="text-left p-3 font-mono text-xs text-muted-foreground">Course</th>
                <th className="text-left p-3 font-mono text-xs text-muted-foreground">Price</th>
                <th className="text-left p-3 font-mono text-xs text-muted-foreground">Trustpilot</th>
                <th className="text-left p-3 font-mono text-xs text-muted-foreground">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dashed border-border bg-muted/40">
                <td className="p-3 font-semibold">{course.title} (this review)</td>
                <td className="p-3 font-mono text-xs">{course.price}</td>
                <td className="p-3">
                  {m.rating !== null && m.reviews !== null ? (
                    <div className="flex items-center gap-2">
                      <Stars rating={m.rating} size="sm" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {m.rating.toFixed(1)} ({m.reviews.toLocaleString()})
                      </span>
                    </div>
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground">No rating</span>
                  )}
                </td>
                <td className="p-3 font-mono text-xs text-muted-foreground">— current —</td>
              </tr>
              {m.alternatives.map((a) => (
                <tr key={a.name} className="border-b border-dashed border-border last:border-0">
                  <td className="p-3 font-semibold">{a.name}</td>
                  <td className="p-3 font-mono text-xs">{a.price}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Stars rating={a.rating} size="sm" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {a.rating.toFixed(1)} ({a.reviews.toLocaleString()})
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex items-center gap-1 font-mono text-xs underline hover:text-foreground"
                    >
                      Visit <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="mt-12">
        <WireframeCard className="p-8 text-center">
          <Eyebrow>Ready to start?</Eyebrow>
          <div className="mt-2 text-5xl font-bold">{course.price}</div>
          <p className="text-muted-foreground mt-2">One-time payment · {m.refundDays}-day money-back guarantee</p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href={affiliateHref}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
            >
              Get {course.title} <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </WireframeCard>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <SectionHeader title="Frequently asked questions" source={{ type: "auto", label: "official FAQ + Reddit" }} />
        <div className="space-y-3">
          {m.faqs.map((f) => (
            <WireframeCard key={f.q} className="p-5">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </WireframeCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseReviewPage;
