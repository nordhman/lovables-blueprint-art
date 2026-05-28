import { useParams, Link } from "react-router-dom";
import { H1 } from "@/components/wireframe/Typography";
import { useState } from "react";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { SourceBadge } from "@/components/wireframe/SourceBadge";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { courses } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Bot,
  PenLine,
  Eye,
} from "lucide-react";

type Step = "input" | "scraping" | "form";

const FieldRow = ({
  label,
  source,
  children,
  hint,
}: {
  label: string;
  source: { type: "auto" | "manual"; label: string };
  children: React.ReactNode;
  hint?: string;
}) => (
  <div className="border-2 border-dashed border-border rounded p-4">
    <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
      <label className="font-semibold text-sm">{label}</label>
      <SourceBadge type={source.type} label={source.label} />
    </div>
    {hint && <p className="font-mono text-xs text-muted-foreground mb-2">{hint}</p>}
    {children}
  </div>
);

const CourseReviewEditPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [step, setStep] = useState<Step>("input");
  const [officialUrl, setOfficialUrl] = useState("");
  const [trustpilotUrl, setTrustpilotUrl] = useState("");

  const startScrape = () => {
    setStep("scraping");
    setTimeout(() => setStep("form"), 1400);
  };

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Course not found.</p>
      </div>
    );
  }

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.title, to: `/courses/${course.slug}/review` },
          { label: "Edit review (admin)" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">


      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <Link
          to={`/courses/${course.slug}/review`}
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Back to review
        </Link>
        <Link
          to={`/courses/${course.slug}/review`}
          className="inline-flex items-center gap-1 font-mono text-xs border-2 border-dashed border-border rounded px-2 py-1 hover:border-foreground"
        >
          <Eye className="h-3 w-3" /> Preview
        </Link>
      </div>

      <H1>Edit review: {course.title}</H1>
      <p className="text-muted-foreground mt-2">
        Step 1: paste source URLs · Step 2: auto-fill via scraper · Step 3: write your own take
      </p>

      {/* Step indicator */}
      <div className="mt-8 flex items-center gap-2 font-mono text-xs">
        <span className={`px-2 py-1 border-2 border-dashed rounded ${step === "input" ? "border-foreground" : "border-border text-muted-foreground"}`}>1. Sources</span>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <span className={`px-2 py-1 border-2 border-dashed rounded ${step === "scraping" ? "border-foreground" : "border-border text-muted-foreground"}`}>2. Auto-fetch</span>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <span className={`px-2 py-1 border-2 border-dashed rounded ${step === "form" ? "border-foreground" : "border-border text-muted-foreground"}`}>3. Edit & publish</span>
      </div>

      {/* STEP 1: Input URLs */}
      {step === "input" && (
        <WireframeCard className="p-6 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="h-5 w-5" />
            <h2 className="text-xl font-bold">Paste source URLs</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            We'll scrape these and pre-fill the factual fields (price, curriculum, instructor, ratings, quotes).
          </p>

          <div className="space-y-4">
            <div>
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Official course URL
              </label>
              <Input
                value={officialUrl}
                onChange={(e) => setOfficialUrl(e.target.value)}
                placeholder="https://authorityhacker.com/pro"
                className="border-dashed"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Trustpilot URL (optional)
              </label>
              <Input
                value={trustpilotUrl}
                onChange={(e) => setTrustpilotUrl(e.target.value)}
                placeholder="https://trustpilot.com/review/authorityhacker.com"
                className="border-dashed"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Reddit search query (optional)
              </label>
              <Input
                placeholder="authority hacker pro review"
                className="border-dashed"
              />
            </div>
          </div>

          <Button onClick={startScrape} className="mt-6 gap-2">
            <Sparkles className="h-4 w-4" /> Auto-fetch data
          </Button>
        </WireframeCard>
      )}

      {/* STEP 2: Scraping */}
      {step === "scraping" && (
        <WireframeCard className="p-10 mt-8 text-center">
          <Bot className="h-10 w-10 mx-auto animate-pulse" />
          <h2 className="text-xl font-bold mt-4">Fetching data…</h2>
          <div className="mt-6 max-w-sm mx-auto space-y-2 text-left font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3" /> Scraping official site</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3" /> Extracting curriculum & price</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3" /> Pulling Trustpilot rating</div>
            <div className="flex items-center gap-2 opacity-50">→ Aggregating top quotes</div>
          </div>
        </WireframeCard>
      )}

      {/* STEP 3: Form */}
      {step === "form" && (
        <div className="mt-8 space-y-8">
          {/* Auto fields */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Bot className="h-4 w-4" />
              <h2 className="text-lg font-bold">Auto-filled (review & adjust if needed)</h2>
            </div>
            <div className="space-y-4">
              <FieldRow label="Price" source={{ type: "auto", label: "official site" }}>
                <Input defaultValue="$997" className="border-dashed" />
              </FieldRow>

              <FieldRow label="Curriculum" source={{ type: "auto", label: "official site" }} hint="One module per line">
                <Textarea
                  defaultValue={"Module 1 — Niche & keyword research\nModule 2 — Site setup & technical SEO\nModule 3 — Content production system\nModule 4 — Link building at scale\nModule 5 — Monetization & scaling"}
                  rows={6}
                  className="border-dashed font-mono text-xs"
                />
              </FieldRow>

              <FieldRow label="Instructor bio" source={{ type: "auto", label: "official + LinkedIn" }}>
                <Textarea
                  defaultValue="Gael Breton & Mark Webster — co-founders of Authority Hacker. Building authority sites since 2014."
                  rows={3}
                  className="border-dashed"
                />
              </FieldRow>

              <FieldRow label="Trustpilot rating" source={{ type: "auto", label: "Trustpilot" }}>
                <div className="grid grid-cols-2 gap-3">
                  <Input defaultValue="4.9" className="border-dashed" />
                  <Input defaultValue="1280 reviews" className="border-dashed" />
                </div>
              </FieldRow>

              <FieldRow label="Top student quotes" source={{ type: "auto", label: "Trustpilot + Reddit" }} hint="One per line · format: quote — source">
                <Textarea
                  defaultValue={"Worth every penny. The community alone is worth the price. — Trustpilot\nMost structured course I've taken in 10 years of SEO. — r/juststart\nHeavy on theory in the first modules — push through. — YouTube review"}
                  rows={5}
                  className="border-dashed text-sm"
                />
              </FieldRow>

              <FieldRow label="Official FAQ" source={{ type: "auto", label: "official site" }}>
                <Textarea
                  rows={4}
                  defaultValue={"Q: Refund policy? A: 30-day money-back guarantee.\nQ: Lifetime access? A: Yes, all updates included."}
                  className="border-dashed text-sm"
                />
              </FieldRow>
            </div>
          </section>

          {/* Manual fields */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <PenLine className="h-4 w-4" />
              <h2 className="text-lg font-bold">Your take (this is what makes it rank)</h2>
            </div>
            <div className="space-y-4">
              <FieldRow label="Intro / context" source={{ type: "manual", label: "you write" }} hint="200–300 words. Unique angle. Critical for SEO.">
                <Textarea rows={5} placeholder="Authority Hacker Pro has been around since…" className="border-dashed" />
              </FieldRow>

              <FieldRow label="Verdict (TL;DR)" source={{ type: "manual", label: "you write" }} hint="3–4 sentences">
                <Textarea rows={3} placeholder="Worth the price if you're serious about…" className="border-dashed" />
              </FieldRow>

              <div className="grid md:grid-cols-2 gap-4">
                <FieldRow label="Best for" source={{ type: "manual", label: "you write" }}>
                  <Input placeholder="Serious affiliates building long-term sites" className="border-dashed" />
                </FieldRow>
                <FieldRow label="Skip if" source={{ type: "manual", label: "you write" }}>
                  <Input placeholder="Total beginners on a tight budget" className="border-dashed" />
                </FieldRow>
              </div>

              <FieldRow label="Pros (your take)" source={{ type: "manual", label: "you write" }} hint="One per line">
                <Textarea rows={4} className="border-dashed" />
              </FieldRow>

              <FieldRow label="Cons (your take)" source={{ type: "manual", label: "you write" }} hint="One per line">
                <Textarea rows={4} className="border-dashed" />
              </FieldRow>

              <FieldRow label="Alternatives" source={{ type: "manual", label: "you write" }} hint="Format: name | price | note">
                <Textarea
                  rows={3}
                  placeholder={"The Affiliate Lab | $997 | More technical SEO focus\nFat Stacks Bundle | $299 | Cheaper, ad-revenue focus"}
                  className="border-dashed text-sm"
                />
              </FieldRow>
            </div>
          </section>

          {/* Publish */}
          <WireframeCard className="p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold">Ready to publish?</p>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                Auto-data will refresh weekly · You can edit any field anytime
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-dashed">Save draft</Button>
              <Button>Publish review</Button>
            </div>
          </WireframeCard>
        </div>
      )}
      </div>
    </div>
  );
};

export default CourseReviewEditPage;
