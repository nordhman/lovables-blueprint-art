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
  Clock,
  Users,
  Award,
  ChevronRight,
  Quote,
} from "lucide-react";

// Wireframe-only review meta. Real data would come from CMS.
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
    modulesPreview: string[];
    testimonials: { quote: string; name: string; role: string }[];
    faqs: { q: string; a: string }[];
    refundDays: number;
    students: string;
    lastUpdated: string;
    timeToComplete: string;
  }
> = {
  "authority-hacker-pro": {
    rating: 4.9,
    reviews: 1280,
    verdict:
      "The most complete authority-site system on the market. Worth the price if you're serious about building a long-term affiliate business.",
    bestFor: "Serious affiliates building 6-figure authority sites",
    notFor: "Total beginners on a tight budget",
    pros: [
      "Step-by-step blueprint, nothing left to guess",
      "Active private community with real operators",
      "Lifetime updates included",
      "Proven case studies and templates",
      "World-class production quality",
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
    modulesPreview: [
      "Niche selection framework",
      "Keyword research that actually converts",
      "Content production system",
      "On-page SEO blueprint",
      "Link building playbook",
      "Monetization & scaling",
    ],
    testimonials: [
      {
        quote: "Took my site from $0 to $4,200/mo in 11 months following the blueprint.",
        name: "Sarah K.",
        role: "Member since 2024",
      },
      {
        quote: "The community alone is worth the price. Finally surrounded by real operators.",
        name: "Marcus L.",
        role: "Member since 2023",
      },
    ],
    faqs: [
      { q: "Is there a refund policy?", a: "Yes — 30-day money-back guarantee, no questions asked." },
      { q: "Do I get lifetime access?", a: "Yes, including all future updates." },
      { q: "Is it beginner friendly?", a: "It's structured, but assumes you're committed. Not ideal for total hobbyists." },
    ],
    refundDays: 30,
    students: "12,000+",
    lastUpdated: "March 2026",
    timeToComplete: "8–12 weeks",
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

const CourseReviewPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const meta = slug ? reviewMeta[slug] : undefined;

  // Fallback for courses without explicit meta — use the first available as template
  const m = meta ?? reviewMeta["authority-hacker-pro"];

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Course not found.</p>
        <WireframeCTA label="← Back" to="/courses/list?type=affiliate" className="mt-4" />
      </div>
    );
  }

  const affiliateHref = "#"; // outbound affiliate link placeholder

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/courses" className="hover:text-foreground">Courses</Link>
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
      <div className="border-2 border-dashed border-border rounded p-3 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Independently reviewed</span>
        <span>Last updated: {m.lastUpdated}</span>
        <span>Disclosure: contains affiliate links</span>
      </div>

      {/* HERO: review header */}
      <section className="grid md:grid-cols-[1fr_360px] gap-8 items-start">
        <div>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">In-depth review</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            {course.title} Review ({new Date().getFullYear()})
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Is {course.title} worth it? An honest, hands-on review based on full course access — broken down by content,
            community, value and results.
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <Stars rating={m.rating} size="lg" />
            <span className="text-2xl font-bold">{m.rating.toFixed(1)}</span>
            <span className="font-mono text-xs text-muted-foreground">
              ({m.reviews.toLocaleString()} verified reviews)
            </span>
          </div>

          <div className="mt-6 flex items-center gap-6 flex-wrap font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {m.students} students</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {m.timeToComplete}</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4" /> {course.modules} modules</span>
            {course.partner && <span>By {course.partner}</span>}
          </div>
        </div>

        {/* Sticky-style verdict / conversion card */}
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
          <a
            href="#pros-cons"
            className="mt-2 block text-center font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            Jump to pros & cons ↓
          </a>

          <div className="mt-5 pt-5 border-t border-dashed border-border space-y-2 font-mono text-xs text-muted-foreground">
            <div className="flex justify-between"><span>Best for</span><span className="text-foreground text-right">{m.bestFor}</span></div>
            <div className="flex justify-between"><span>Skip if</span><span className="text-foreground text-right">{m.notFor}</span></div>
          </div>
        </WireframeCard>
      </section>

      {/* TL;DR verdict */}
      <section className="mt-12">
        <WireframeCard className="p-6">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">TL;DR</span>
          <p className="text-lg mt-2">{m.verdict}</p>
        </WireframeCard>
      </section>

      {/* Table of contents */}
      <section className="mt-10">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">On this page</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            ["Pros & Cons", "pros-cons"],
            ["Scorecard", "scorecard"],
            ["What's inside", "inside"],
            ["Who it's for", "who-for"],
            ["Student results", "results"],
            ["Pricing", "pricing"],
            ["Alternatives", "alternatives"],
            ["FAQ", "faq"],
            ["Final verdict", "verdict"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-xs border-2 border-dashed border-border rounded px-3 py-1.5 hover:border-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Pros & cons */}
      <section id="pros-cons" className="mt-12 scroll-mt-6">
        <h2 className="text-2xl font-bold">Pros & Cons</h2>
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
        <h2 className="text-2xl font-bold">Scorecard</h2>
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

      {/* What's inside */}
      <section id="inside" className="mt-12 scroll-mt-6">
        <h2 className="text-2xl font-bold">What's inside the course</h2>
        <p className="text-muted-foreground mt-1">A look at the {course.modules} modules you'll get access to.</p>
        <div className="grid md:grid-cols-2 gap-3 mt-6">
          {m.modulesPreview.map((mod, i) => (
            <WireframeCard key={mod} className="flex items-center gap-3 p-4">
              <span className="font-mono text-xs text-muted-foreground w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm">{mod}</span>
            </WireframeCard>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section id="who-for" className="mt-12 scroll-mt-6">
        <h2 className="text-2xl font-bold">Who is this course for?</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <WireframeCard className="p-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Perfect if you…</span>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" />Are ready to commit 10+ hrs/week</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" />Want a long-term, sustainable income</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" />Prefer systems over shortcuts</li>
            </ul>
          </WireframeCard>
          <WireframeCard className="p-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Skip it if you…</span>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" />Want passive income with zero effort</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" />Are not ready to invest in tools</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" />Need 1:1 coaching included</li>
            </ul>
          </WireframeCard>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="mt-12 scroll-mt-6">
        <h2 className="text-2xl font-bold">Real student results</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {m.testimonials.map((t) => (
            <WireframeCard key={t.name} className="p-6">
              <Quote className="h-6 w-6 text-muted-foreground" />
              <p className="text-base mt-3">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-dashed border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border-2 border-dashed border-border" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </WireframeCard>
          ))}
        </div>
      </section>

      {/* Pricing + primary CTA */}
      <section id="pricing" className="mt-12 scroll-mt-6">
        <WireframeCard className="p-8 text-center">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Pricing</span>
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
          <div className="mt-6 flex items-center justify-center gap-6 flex-wrap font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Secure checkout</span>
            <span>Lifetime access</span>
            <span>Free updates</span>
          </div>
        </WireframeCard>
      </section>

      {/* Alternatives */}
      <section id="alternatives" className="mt-12 scroll-mt-6">
        <h2 className="text-2xl font-bold">How it compares</h2>
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
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {m.faqs.map((f) => (
            <WireframeCard key={f.q} className="p-5">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </WireframeCard>
          ))}
        </div>
      </section>

      {/* Final verdict + sticky CTA */}
      <section id="verdict" className="mt-12 scroll-mt-6">
        <WireframeCard className="p-8">
          <div className="grid md:grid-cols-[1fr_280px] gap-8 items-center">
            <div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Final verdict</span>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-4xl font-bold">{m.rating.toFixed(1)}</span>
                <Stars rating={m.rating} size="lg" />
              </div>
              <p className="text-lg mt-4">{m.verdict}</p>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <Badge variant="outline" className="font-mono text-xs border-dashed">Best for: {m.bestFor}</Badge>
                <Badge variant="outline" className="font-mono text-xs border-dashed">Skip if: {m.notFor}</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={affiliateHref}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
              >
                Get {course.title} <ExternalLink className="h-4 w-4" />
              </a>
              <span className="font-mono text-[10px] text-muted-foreground text-center">
                Affiliate link · {m.refundDays}-day refund
              </span>
            </div>
          </div>
        </WireframeCard>
      </section>

      {/* Author / E-E-A-T */}
      <section className="mt-12">
        <WireframeCard className="p-6 flex items-start gap-4">
          <div className="h-14 w-14 rounded-full border-2 border-dashed border-border shrink-0" />
          <div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Reviewed by</span>
            <h3 className="font-bold mt-1">[Author name placeholder]</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Affiliate marketer since 2018. Reviewed 40+ premium courses. This review is based on full hands-on access
              to {course.title} — not a summary of marketing material.
            </p>
          </div>
        </WireframeCard>
      </section>
    </div>
  );
};

export default CourseReviewPage;
