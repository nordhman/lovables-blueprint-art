import { useParams, Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
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
} from "lucide-react";

// Wireframe-only review meta. Real data would come from a CMS / review form.
const reviewMeta: Record<
  string,
  {
    rating: number;
    reviews: number;
    verdict: string;
    bestFor: string;
    notFor: string;
    pros: string[];
    cons: string[];
    scores: { label: string; score: number }[];
    faqs: { q: string; a: string }[];
    refundDays: number;
    lastUpdated: string;
  }
> = {
  "authority-hacker-pro": {
    rating: 4.9,
    reviews: 1280,
    verdict:
      "The most complete authority-site system on the market. Worth the price if you're serious about building a long-term affiliate business.",
    bestFor: "Serious affiliates building long-term sites",
    notFor: "Total beginners on a tight budget",
    pros: [
      "Step-by-step blueprint, nothing left to guess",
      "Active private community with real operators",
      "Lifetime updates included",
      "Proven case studies and templates",
    ],
    cons: [
      "Premium price point",
      "Requires real time investment (10+ hrs/week)",
      "Some content overlaps with their free material",
    ],
    scores: [
      { label: "Content quality", score: 5 },
      { label: "Value for money", score: 4 },
      { label: "Community", score: 5 },
      { label: "Beginner friendly", score: 3 },
      { label: "Support", score: 5 },
    ],
    faqs: [
      { q: "Is there a refund policy?", a: "Yes — 30-day money-back guarantee, no questions asked." },
      { q: "Do I get lifetime access?", a: "Yes, including all future updates." },
      { q: "Is it beginner friendly?", a: "Structured, but assumes commitment. Not ideal for total hobbyists." },
    ],
    refundDays: 30,
    lastUpdated: "March 2026",
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

const ScoreBar = ({ score }: { score: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 h-2 border border-dashed border-border rounded overflow-hidden bg-muted">
      <div className="h-full bg-foreground" style={{ width: `${(score / 5) * 100}%` }} />
    </div>
    <span className="font-mono text-xs text-muted-foreground w-8 text-right">{score}/5</span>
  </div>
);

// Tiny tag that shows where each block's data comes from (wireframe annotation only)
const DataSource = ({ label }: { label: string }) => (
  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-dashed border-border rounded px-1.5 py-0.5">
    data: {label}
  </span>
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
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/courses/list?type=affiliate" className="hover:text-foreground">Reviews</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{course.title}</span>
      </nav>

      <Link
        to="/courses/list?type=affiliate"
        className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-3 w-3" /> Back to all reviews
      </Link>

      {/* Trust strip */}
      <div className="border-2 border-dashed border-border rounded p-3 mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Independently reviewed</span>
        <span>Last updated: {m.lastUpdated}</span>
        <span>Affiliate disclosure</span>
      </div>

      {/* HERO */}
      <section className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Review</span>
            <DataSource label="course (CMS)" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            {course.title} Review ({new Date().getFullYear()})
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Is {course.title} worth it? An honest, hands-on review broken down by content, value and results.
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <Stars rating={m.rating} size="lg" />
            <span className="text-2xl font-bold">{m.rating.toFixed(1)}</span>
            <span className="font-mono text-xs text-muted-foreground">
              ({m.reviews.toLocaleString()} verified reviews)
            </span>
            <DataSource label="reviews aggregate" />
          </div>
        </div>

        {/* Sticky verdict / conversion card */}
        <WireframeCard className="md:sticky md:top-6 p-6">
          <PlaceholderImage label="Course image" aspectRatio="video" />
          <div className="mt-4 text-center">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Our verdict</span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-3xl font-bold">{m.rating.toFixed(1)}</span>
              <span className="font-mono text-xs text-muted-foreground">/ 5</span>
            </div>
            <Stars rating={m.rating} />
          </div>

          <div className="mt-5 border-2 border-dashed border-border rounded p-3 text-center">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">Price</span>
            <span className="text-2xl font-bold">{course.price}</span>
            <span className="font-mono text-[10px] text-muted-foreground block mt-1">
              {m.refundDays}-day money-back guarantee
            </span>
          </div>

          <a
            href={affiliateHref}
            target="_blank"
            rel="noopener sponsored"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
          >
            Visit {course.title} <ExternalLink className="h-4 w-4" />
          </a>
          <div className="mt-3 text-center">
            <DataSource label="affiliate link (network)" />
          </div>
        </WireframeCard>
      </section>

      {/* TL;DR */}
      <section className="mt-12">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">TL;DR</h2>
          <DataSource label="manual verdict" />
        </div>
        <WireframeCard className="p-6">
          <p className="text-lg">{m.verdict}</p>
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="font-mono text-xs border-dashed">Best for: {m.bestFor}</Badge>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Skip if: {m.notFor}</Badge>
          </div>
        </WireframeCard>
      </section>

      {/* Pros & cons */}
      <section id="pros-cons" className="mt-12 scroll-mt-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Pros & Cons</h2>
          <DataSource label="manual review" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <WireframeCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Check className="h-5 w-5" />
              <h3 className="font-bold">What we loved</h3>
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

      {/* Scorecard */}
      <section id="scorecard" className="mt-12 scroll-mt-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Scorecard</h2>
          <DataSource label="manual scores (1–5)" />
        </div>
        <p className="text-muted-foreground mt-1">How {course.title} performs across the criteria that matter.</p>
        <WireframeCard className="p-6 mt-6">
          <div className="space-y-4">
            {m.scores.map((s) => (
              <div key={s.label} className="grid grid-cols-[180px_1fr] gap-4 items-center">
                <span className="text-sm font-medium">{s.label}</span>
                <ScoreBar score={s.score} />
              </div>
            ))}
            <div className="pt-4 border-t border-dashed border-border grid grid-cols-[180px_1fr] gap-4 items-center">
              <span className="text-sm font-bold">Overall</span>
              <ScoreBar score={m.rating} />
            </div>
          </div>
        </WireframeCard>
      </section>

      {/* Pricing + primary CTA */}
      <section id="pricing" className="mt-12 scroll-mt-6">
        <WireframeCard className="p-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Pricing</span>
            <DataSource label="affiliate API / manual" />
          </div>
          <div className="mt-2 text-5xl font-bold">{course.price}</div>
          <p className="text-muted-foreground mt-2">One-time payment · {m.refundDays}-day money-back guarantee</p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a
              href={affiliateHref}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
            >
              Get {course.title} <ExternalLink className="h-4 w-4" />
            </a>
            <WireframeCTA label="Compare alternatives →" to="/courses/list?type=affiliate" variant="secondary" />
          </div>
        </WireframeCard>
      </section>

      {/* Alternatives */}
      <section id="alternatives" className="mt-12 scroll-mt-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">How it compares</h2>
          <DataSource label="related courses (CMS)" />
        </div>
        <p className="text-muted-foreground mt-1">Other premium courses worth considering.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {courses
            .filter((c) => c.type === "affiliate" && c.slug !== course.slug)
            .slice(0, 3)
            .map((c) => (
              <Link key={c.slug} to={`/courses/${c.slug}/review`}>
                <WireframeCard className="p-4 h-full hover:border-foreground">
                  <PlaceholderImage label="Course image" aspectRatio="video" />
                  <h3 className="font-semibold mt-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{c.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-xs">{c.price}</span>
                    <span className="font-mono text-xs text-muted-foreground">Read review →</span>
                  </div>
                </WireframeCard>
              </Link>
            ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-12 scroll-mt-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <DataSource label="manual FAQ" />
        </div>
        <div className="mt-6 space-y-3">
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
