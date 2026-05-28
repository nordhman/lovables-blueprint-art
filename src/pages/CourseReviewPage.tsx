import { useParams, Link } from "react-router-dom";
import { Eyebrow, H1, H2, H3, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { SourceBadge } from "@/components/wireframe/SourceBadge";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { courses } from "@/data/mockData";
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
  BookOpen,
  Clock,
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
  id,
  eyebrow,
  title,
  source,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  source?: { type: "auto" | "manual"; label: string };
}) => (
  <div id={id} className="scroll-mt-24 mb-6">
    <div className="flex items-end justify-between gap-3 flex-wrap">
      <div>
        {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
        <H2>{title}</H2>
      </div>
      {source && <SourceBadge type={source.type} label={source.label} />}
    </div>
  </div>
);

const TOC_SECTIONS = [
  { id: "verdict", label: "Verdict" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "curriculum", label: "What's inside" },
  { id: "students", label: "Student reviews" },
  { id: "instructor", label: "Instructor" },
  { id: "alternatives", label: "Alternatives" },
  { id: "faq", label: "FAQ" },
];

const CourseReviewPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const m = (slug && reviewMeta[slug]) || reviewMeta["authority-hacker-pro"];

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <BodySmall>Course not found.</BodySmall>
        <WireframeCTA label="← Back" to="/courses/list?type=affiliate" className="mt-4" />
      </div>
    );
  }

  const affiliateHref = "#";
  const ourScoreOf5 = m.ourScore / 2;

  return (
    <div>
      {/* Utility row — breadcrumbs + admin */}
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: "Reviews", to: "/courses/list?type=affiliate" },
          { label: course.title },
        ]}
        right={
          <Link
            to={`/courses/${course.slug}/review/edit`}
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <Pencil className="h-3 w-3" /> Edit review (admin)
          </Link>
        }
      />

      {/* HERO */}
      <WireframeHero size="sm">
        <>
          {/* Elevated trust meta strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" /> Independently reviewed
            </span>
            <Link to="/about" className="underline underline-offset-4 decoration-border hover:text-foreground">
              How we evaluate
            </Link>
            <span className="inline-flex items-center gap-2">
              <span className="text-border">/</span>
              <Clock className="h-3.5 w-3.5" /> Updated {m.lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-border">/</span>
              <span className="bg-muted px-1.5 py-0.5 text-foreground">Auto-data refreshed {m.lastScraped}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <Eyebrow>Buyer's guide</Eyebrow>
              <H1 className="mt-3">
                {course.title} Review ({new Date().getFullYear()})
              </H1>
              <Lead className="mt-4 max-w-2xl">{m.intro}</Lead>
              <div className="mt-3">
                <SourceBadge type="manual" label="your intro" />
              </div>

              {/* Snabbfakta-strip */}
              <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border-2 border-dashed border-border rounded overflow-hidden">
                <div className="bg-background p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Our score</dt>
                  <dd className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{ourScoreOf5.toFixed(1)}</span>
                    <Meta>/5</Meta>
                  </dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Trustpilot</dt>
                  <dd className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{m.rating?.toFixed(1) ?? "—"}</span>
                    {m.reviews && <Meta>({m.reviews.toLocaleString()})</Meta>}
                  </dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Price</dt>
                  <dd className="mt-1 text-2xl font-bold">{course.price}</dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Refund</dt>
                  <dd className="mt-1 text-2xl font-bold">{m.refundDays} days</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-4">
            <WireframeCard className="lg:sticky lg:top-6 p-4">
              <PlaceholderImage label="Course image (auto)" aspectRatio="video" />
              <div className="mt-4 text-center">
                <MetaLabel>Price</MetaLabel>
                <div className="text-3xl font-bold mt-0.5">{course.price}</div>
                <Meta className="block mt-1">{m.refundDays}-day money-back guarantee</Meta>
              </div>
              <a
                href={affiliateHref}
                target="_blank"
                rel="noopener sponsored"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
              >
                Visit {course.title} <ExternalLink className="h-4 w-4" />
              </a>
              <div className="mt-4 pt-4 border-t border-dashed border-border space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground">Our score</span>
                  <span className="flex items-center gap-1.5">
                    <span className="font-bold text-foreground text-sm">{ourScoreOf5.toFixed(1)}/5</span>
                    <Stars rating={ourScoreOf5} size="sm" />
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground">Trustpilot</span>
                  <span className="flex items-center gap-1.5">
                    <span className="font-bold text-foreground text-sm">{m.rating?.toFixed(1)}/5</span>
                    <Stars rating={m.rating ?? 0} size="sm" />
                  </span>
                </div>
              </div>
            </WireframeCard>
          </div>
          </div>
        </>
      </WireframeHero>

      {/* TOC sub-nav */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b-2 border-dashed border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl">
          <nav className="flex items-center gap-1 overflow-x-auto py-2" aria-label="Section navigation">
            {TOC_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-xs text-muted-foreground hover:text-foreground px-3 py-1.5 rounded whitespace-nowrap border-2 border-dashed border-transparent hover:border-border"
              >
                {s.label}
              </a>
            ))}
          </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl py-14 md:py-16 space-y-16">
        {/* VERDICT — TL;DR */}
        <section>
          <SectionHeader id="verdict" eyebrow="TL;DR" title="Our verdict" source={{ type: "manual", label: "you write this" }} />
          <WireframeCard className="p-8">
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
              <p className="text-xl leading-relaxed">{m.verdict}</p>
              <div className="border-2 border-dashed border-foreground rounded p-4 text-center min-w-[140px]">
                <MetaLabel>Our score</MetaLabel>
                <div className="text-4xl font-bold mt-1">{ourScoreOf5.toFixed(1)}</div>
                <Meta>out of 5</Meta>
                <div className="mt-2 flex justify-center">
                  <Stars rating={ourScoreOf5} size="sm" />
                </div>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <div className="border-2 border-dashed border-border rounded p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="h-4 w-4" />
                  <MetaLabel>Best for</MetaLabel>
                </div>
                <p className="text-sm font-medium">{m.bestFor}</p>
              </div>
              <div className="border-2 border-dashed border-border rounded p-4">
                <div className="flex items-center gap-2 mb-1">
                  <X className="h-4 w-4" />
                  <MetaLabel>Skip if</MetaLabel>
                </div>
                <p className="text-sm font-medium">{m.notFor}</p>
              </div>
            </div>
          </WireframeCard>
        </section>

        {/* PROS & CONS */}
        <section>
          <SectionHeader id="pros-cons" title="Pros & Cons" source={{ type: "manual", label: "your take" }} />
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeCard className="p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-dashed border-border">
                <Check className="h-5 w-5" />
                <H4>What works</H4>
              </div>
              <ul className="space-y-4">
                {m.pros.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </WireframeCard>
            <WireframeCard className="p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-dashed border-border">
                <X className="h-5 w-5" />
                <H4>What could be better</H4>
              </div>
              <ul className="space-y-4">
                {m.cons.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <X className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </WireframeCard>
          </div>
        </section>

        {/* CURRICULUM */}
        <section>
          <SectionHeader
            id="curriculum"
            title="What's inside"
            source={{ type: "manual", label: "from course site" }}
          />
          <WireframeCard className="p-6">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-dashed border-border">
              <BookOpen className="h-5 w-5" />
              <H4>{m.curriculum.length} modules</H4>
            </div>
            <ol className="space-y-3">
              {m.curriculum.map((mod, i) => (
                <li key={mod} className="flex items-start gap-4 p-3 border-2 border-dashed border-border rounded">
                  <span className="font-mono text-xs text-muted-foreground shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{mod}</span>
                </li>
              ))}
            </ol>
          </WireframeCard>
        </section>

        {/* STUDENT QUOTES */}
        <section>
          <SectionHeader
            id="students"
            title="What students say"
            source={{ type: "auto", label: "Trustpilot, Reddit, YouTube" }}
          />
          <div className="grid md:grid-cols-3 gap-4">
            {m.studentQuotes.map((q) => (
              <WireframeCard key={q.text} className="p-6">
                <Quote className="h-5 w-5 text-muted-foreground mb-3" />
                <p className="text-sm leading-relaxed">"{q.text}"</p>
                <Meta className="block mt-4 pt-4 border-t border-dashed border-border">— {q.source}</Meta>
              </WireframeCard>
            ))}
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section>
          <SectionHeader
            id="instructor"
            title="Who teaches it"
            source={{ type: "auto", label: "official site + LinkedIn" }}
          />
          <WireframeCard className="p-8">
            <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
              <div className="w-40">
                <PlaceholderImage label="Photo" aspectRatio="square" />
              </div>
              <div>
                <H3>{m.instructor.name}</H3>
                <p className="text-base text-muted-foreground mt-2 leading-relaxed">{m.instructor.bio}</p>
              </div>
            </div>
          </WireframeCard>
        </section>

        {/* ALTERNATIVES */}
        <section>
          <SectionHeader
            id="alternatives"
            title="Alternatives to consider"
            source={{ type: "auto", label: "Trustpilot ratings" }}
          />
          <div className="border-2 border-dashed border-border rounded overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-dashed border-border bg-muted/30">
                  <th className="text-left p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Course</th>
                  <th className="text-left p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Price</th>
                  <th className="text-left p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Trustpilot</th>
                  <th className="text-left p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dashed border-border bg-muted/40">
                  <td className="p-4 font-semibold">
                    {course.title}
                    <Meta className="block mt-1">— current review —</Meta>
                  </td>
                  <td className="p-4 font-mono text-sm">{course.price}</td>
                  <td className="p-4">
                    {m.rating !== null && m.reviews !== null ? (
                      <div className="flex items-center gap-2">
                        <Stars rating={m.rating} size="sm" />
                        <Meta>{m.rating.toFixed(1)} ({m.reviews.toLocaleString()})</Meta>
                      </div>
                    ) : (
                      <Meta>No rating</Meta>
                    )}
                  </td>
                  <td className="p-4">
                    <Meta>— viewing —</Meta>
                  </td>
                </tr>
                {m.alternatives.map((a) => (
                  <tr key={a.name} className="border-b border-dashed border-border last:border-0">
                    <td className="p-4 font-semibold">{a.name}</td>
                    <td className="p-4 font-mono text-sm">{a.price}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Stars rating={a.rating} size="sm" />
                        <Meta>{a.rating.toFixed(1)} ({a.reviews.toLocaleString()})</Meta>
                      </div>
                    </td>
                    <td className="p-4">
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

        {/* FAQ */}
        <section>
          <SectionHeader id="faq" title="Frequently asked questions" source={{ type: "auto", label: "official FAQ + Reddit" }} />
          <div className="grid md:grid-cols-2 gap-4">
            {m.faqs.map((f) => (
              <WireframeCard key={f.q} className="p-6">
                <H4 className="mb-3">{f.q}</H4>
                <BodySmall>{f.a}</BodySmall>
              </WireframeCard>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section>
          <WireframeCard className="p-10 text-center bg-muted/30">
            <Eyebrow>Ready to start?</Eyebrow>
            <H2 className="mt-4">Get {course.title}</H2>
            <div className="mt-4 text-5xl font-bold">{course.price}</div>
            <BodySmall className="mt-2">One-time payment · {m.refundDays}-day money-back guarantee</BodySmall>
            <div className="mt-6 flex items-center justify-center">
              <a
                href={affiliateHref}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-dashed border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium text-sm"
              >
                Visit {course.title} <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6 gap-y-2 flex-wrap font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Independently reviewed</span>
              <span>Our score: {ourScoreOf5.toFixed(1)}/5</span>
              <span>Trustpilot: {m.rating?.toFixed(1)}/5 ({m.reviews?.toLocaleString()})</span>
            </div>
          </WireframeCard>
        </section>

        {/* Back link */}
        <div className="text-center pt-4">
          <Link
            to="/courses/list?type=affiliate"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> Back to all reviews
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CourseReviewPage;
