import { ReactNode } from "react";
import { Check, X, Star, Trophy, ArrowRight, ImageIcon, Bot, PenLine } from "lucide-react";
import {
  Eyebrow,
  H1,
  H2,
  H3,
  H4,
  H5,
  Lead,
  BodySmall,
  MetaLabel,
  typo,
} from "@/components/wireframe/Typography";
import { networks } from "@/data/networkVerticals";

const demoNetwork = networks[0];

/**
 * Styleguide 2 — AffiliateTour brand colors.
 * Parallel colored version of /styleguide; the wireframe guide stays untouched.
 * All colors come from the brand-* tokens in tailwind.config.ts / index.css.
 */

const brandColors = [
  { name: "brand-green", hex: "#17A589", className: "bg-brand-green", usage: "Primary — CTAs, links, accents" },
  { name: "brand-green-dark", hex: "#0E8074", className: "bg-brand-green-dark", usage: "Gradients, hover states" },
  { name: "brand-charcoal", hex: "#2A3B47", className: "bg-brand-charcoal", usage: "Headings, body text, footer" },
  { name: "brand-blue", hex: "#1B3A5C", className: "bg-brand-blue", usage: "Secondary CTAs" },
  { name: "gray-bg", hex: "#F5F6F7", className: "bg-gray-bg", usage: "Section backgrounds" },
];

const spacingRules = [
  { rule: "py-12", usage: "Standard section padding (vertical)" },
  { rule: "py-16", usage: "Extra-large sections (homepage only)" },
  { rule: "gap-6", usage: "All card grids" },
  { rule: "gap-2 / gap-3", usage: "Inline badges, chips and small clusters" },
  { rule: "p-4", usage: "Inner padding of every card/box" },
];

const Section = ({ title, note, children }: { title: string; note?: string; children: ReactNode }) => (
  <section className="container mx-auto px-4 py-12 border-t border-brand-charcoal/10">
    <H2 className="text-brand-charcoal">{title}</H2>
    {note && <p className={`${typo.bodySmall} mt-1`}>{note}</p>}
    <div className="mt-6">{children}</div>
  </section>
);

/* ---------- Colored building blocks (demo variants) ---------- */

type BrandCTAVariant = "primary" | "secondary" | "outline" | "ghost";

const BrandCTA = ({ label, variant = "primary", className = "" }: { label: string; variant?: BrandCTAVariant; className?: string }) => {
  const styles: Record<BrandCTAVariant, string> = {
    primary: "bg-brand-green text-white hover:bg-brand-green-dark",
    secondary: "bg-brand-blue text-white hover:bg-brand-blue/85",
    outline: "border-2 border-brand-green text-brand-green-dark hover:bg-brand-green hover:text-white",
    ghost: "text-brand-green-dark hover:bg-brand-green/10",
  };
  return (
    <button
      type="button"
      className={`inline-block px-6 py-3 rounded font-medium text-sm transition-colors ${styles[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

const BrandCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`bg-white border border-brand-charcoal/15 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-brand-green/60 transition-all ${className}`}>
    {children}
  </div>
);

const BrandRatingBadge = ({ score, size = "md" }: { score: number; size?: "sm" | "md" | "lg" }) => {
  const sizes = { sm: "text-xs px-2 py-0.5", md: "text-sm px-2.5 py-1", lg: "text-lg px-3 py-1.5 font-bold" };
  return (
    <span className={`inline-flex items-baseline gap-1 rounded bg-brand-green/10 border border-brand-green/30 font-mono ${sizes[size]}`}>
      <span className="font-semibold text-brand-green-dark">{score.toFixed(1)}</span>
      <span className="text-brand-green-dark/60 text-[0.85em]">/ 10</span>
    </span>
  );
};

const riskStyles = [
  { label: "Low", className: "bg-brand-green/10 text-brand-green-dark border-brand-green/30" },
  { label: "Medium", className: "bg-amber-100 text-amber-800 border-amber-300" },
  { label: "High", className: "bg-orange-100 text-orange-800 border-orange-300" },
  { label: "Very High", className: "bg-red-100 text-red-800 border-red-300" },
];

const BrandRiskBadge = ({ label, className }: { label: string; className: string }) => (
  <span className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider ${className}`}>
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70" />
    Risk: {label}
  </span>
);

const BrandTag = ({ children }: { children: ReactNode }) => (
  <span className="inline-block rounded border border-brand-blue/25 bg-brand-blue/5 text-brand-blue px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wider">
    {children}
  </span>
);

const BrandSourceBadge = ({ type, label }: { type: "auto" | "manual"; label: string }) => {
  const isAuto = type === "auto";
  const Icon = isAuto ? Bot : PenLine;
  return (
    <span
      className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider rounded px-1.5 py-0.5 border ${
        isAuto ? "border-brand-charcoal/20 text-brand-charcoal/60 bg-gray-bg" : "border-brand-green/40 text-brand-green-dark bg-brand-green/5"
      }`}
    >
      <Icon className="h-3 w-3" />
      {isAuto ? "auto" : "manual"}: {label}
    </span>
  );
};

const BrandImage = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`rounded-lg bg-gradient-to-br from-brand-green/15 to-brand-blue/15 flex flex-col items-center justify-center gap-2 ${className}`}>
    <ImageIcon className="h-8 w-8 text-brand-green-dark/50" />
    <span className="font-mono text-xs text-brand-charcoal/50">{label}</span>
  </div>
);

const Stars = ({ className = "h-4 w-4" }: { className?: string }) => (
  <span className="inline-flex gap-0.5 text-brand-green">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`${className} ${i < 4 ? "fill-current" : "opacity-30"}`} />
    ))}
  </span>
);

/* ---------- Page ---------- */

const StyleGuide2Page = () => (
  <div className="text-brand-charcoal">
    {/* Page hero — gradient */}
    <section className="bg-gradient-to-r from-brand-green to-brand-green-dark py-8 md:py-10">
      <div className="container mx-auto px-4">
        <span className="inline-block rounded bg-white/15 text-white font-mono text-[13px] uppercase tracking-wider px-2.5 py-1">
          Internal
        </span>
        <H1 className="mt-3 text-white">Style Guide 2 — Brand Colors</H1>
        <Lead className="mt-3 max-w-2xl text-white/85">
          The AffiliateTour palette applied to every element from the wireframe style guide,
          plus colored heroes, CTAs and callouts.
        </Lead>
      </div>
    </section>

    <Section title="Colors" note="Defined as brand-* tokens (CSS variables). Hex values are estimates — refine in index.css.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {brandColors.map((c) => (
          <div key={c.name} className="border border-brand-charcoal/15 rounded-lg overflow-hidden bg-white">
            <div className={`h-16 ${c.className} ${c.name === "gray-bg" ? "border-b border-brand-charcoal/10" : ""}`} />
            <div className="p-3">
              <span className="block font-mono text-[13px] text-brand-charcoal">{c.name}</span>
              <span className="block font-mono text-[13px] text-brand-charcoal/50">{c.hex}</span>
              <BodySmall className="mt-1">{c.usage}</BodySmall>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Typography" note="Same scale as the wireframe guide — headings and body in brand-charcoal, links in green.">
      <div className="space-y-5">
        <div><MetaLabel>H1 — page title</MetaLabel><H1 className="text-brand-charcoal">Your Guide to Affiliate Marketing</H1></div>
        <div><MetaLabel>H2 — section title</MetaLabel><H2 className="text-brand-charcoal">Affiliate Marketing Essentials</H2></div>
        <div><MetaLabel>H3 — sub-section</MetaLabel><H3 className="text-brand-charcoal">How networks are scored</H3></div>
        <div><MetaLabel>H4 — card title</MetaLabel><H4 className="text-brand-charcoal">MaxBounty</H4></div>
        <div><MetaLabel>H5 — small heading</MetaLabel><H5 className="text-brand-charcoal">Pros</H5></div>
        <div>
          <MetaLabel>Lead — intro paragraph</MetaLabel>
          <Lead className="text-brand-charcoal/70">Courses, tools, and strategies to build profitable affiliate sites.</Lead>
        </div>
        <div>
          <MetaLabel>Body + link</MetaLabel>
          <p className={`${typo.body} text-brand-charcoal`}>
            Regular paragraph text with an{" "}
            <a href="#" className="text-brand-green-dark font-medium underline underline-offset-2 hover:text-brand-green">inline link</a>{" "}
            in brand green.
          </p>
        </div>
        <div>
          <MetaLabel>Stat / StatSm / StatLg — colorized</MetaLabel>
          <div className="flex flex-wrap items-baseline gap-6 mt-1">
            <span className={`${typo.statLg} text-brand-green-dark`}>#1</span>
            <span className={`${typo.stat} text-brand-charcoal`}>$149</span>
            <span className={`${typo.statSm} text-brand-green-dark`}>9.2</span>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Spacing" note="Identical to the wireframe guide — color changes nothing about rhythm.">
      <div className="grid md:grid-cols-2 gap-6">
        <BrandCard>
          <H5 className="mb-3 text-brand-charcoal">Rules</H5>
          <ul className="space-y-2">
            {spacingRules.map((r) => (
              <li key={r.rule} className="flex items-baseline gap-3">
                <span className="font-mono text-[13px] text-brand-green-dark shrink-0 w-24">{r.rule}</span>
                <BodySmall>{r.usage}</BodySmall>
              </li>
            ))}
          </ul>
        </BrandCard>
        <BrandCard>
          <H5 className="mb-3 text-brand-charcoal">Hero sizes</H5>
          <ul className="space-y-2">
            <li className="flex items-baseline gap-3"><span className="font-mono text-[13px] text-brand-green-dark shrink-0 w-24">xl</span><BodySmall>Homepage only</BodySmall></li>
            <li className="flex items-baseline gap-3"><span className="font-mono text-[13px] text-brand-green-dark shrink-0 w-24">lg</span><BodySmall>Pillar & landing pages (default)</BodySmall></li>
            <li className="flex items-baseline gap-3"><span className="font-mono text-[13px] text-brand-green-dark shrink-0 w-24">sm</span><BodySmall>List & utility pages</BodySmall></li>
          </ul>
        </BrandCard>
      </div>
    </Section>

    <Section title="Buttons & CTAs" note="Primary green with dark hover, secondary blue, plus outline and ghost variants.">
      <div className="flex flex-wrap items-center gap-4">
        <BrandCTA label="Primary CTA" />
        <BrandCTA label="Secondary CTA" variant="secondary" />
        <BrandCTA label="Outline CTA" variant="outline" />
        <BrandCTA label="Ghost CTA" variant="ghost" />
      </div>
      <div className="mt-6 rounded-lg bg-gray-bg p-6">
        <MetaLabel className="block mb-3">On gray background</MetaLabel>
        <div className="flex flex-wrap items-center gap-4">
          <BrandCTA label="Get Started Free" />
          <BrandCTA label="Compare Networks" variant="outline" />
        </div>
      </div>
    </Section>

    <Section title="Badges & tags" note="Green for scores, a traffic-light scale for risk, blue tags for commission models.">
      <div className="space-y-5">
        <div>
          <MetaLabel className="block mb-2">RatingBadge (sm / md / lg)</MetaLabel>
          <div className="flex flex-wrap items-center gap-3">
            <BrandRatingBadge score={8.7} size="sm" />
            <BrandRatingBadge score={8.7} size="md" />
            <BrandRatingBadge score={8.7} size="lg" />
          </div>
        </div>
        <div>
          <MetaLabel className="block mb-2">RiskBadge</MetaLabel>
          <div className="flex flex-wrap items-center gap-3">
            {riskStyles.map((r) => (
              <BrandRiskBadge key={r.label} label={r.label} className={r.className} />
            ))}
          </div>
        </div>
        <div>
          <MetaLabel className="block mb-2">Commission model tags</MetaLabel>
          <div className="flex flex-wrap gap-1.5">
            {["CPA", "CPL", "RevShare", "Hybrid"].map((m) => (
              <BrandTag key={m}>{m}</BrandTag>
            ))}
          </div>
        </div>
        <div>
          <MetaLabel className="block mb-2">SourceBadge</MetaLabel>
          <div className="flex flex-wrap items-center gap-3">
            <BrandSourceBadge type="auto" label="Trustpilot" />
            <BrandSourceBadge type="manual" label="Our review" />
          </div>
        </div>
      </div>
    </Section>

    <Section title="Cards & media" note="White cards with soft shadows and green hover accents; gradient tints replace gray placeholders.">
      <div className="grid md:grid-cols-3 gap-6">
        <BrandCard>
          <H4 className="text-brand-charcoal">BrandCard</H4>
          <BodySmall className="mt-2">Solid light border, rounded-lg, soft shadow. Hover lifts the shadow and tints the border green.</BodySmall>
        </BrandCard>
        <div className="space-y-3">
          <BrandImage label="video (16:9)" className="aspect-video" />
          <BrandImage label="square" className="aspect-square w-24" />
        </div>
        <BrandCard className="flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <BrandImage label="logo" className="w-16 h-16 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <H4 className="truncate text-brand-charcoal">{demoNetwork.name}</H4>
                <BrandRatingBadge score={demoNetwork.score} size="sm" />
              </div>
              <span className="block mt-0.5 font-mono text-[13px] text-brand-charcoal/50">Known for: {demoNetwork.knownFor}</span>
            </div>
          </div>
          <BodySmall>{demoNetwork.shortDescription}</BodySmall>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <BrandRiskBadge label="Medium" className={riskStyles[1].className} />
            {demoNetwork.commissionModels.slice(0, 3).map((m) => (
              <BrandTag key={m}>{m}</BrandTag>
            ))}
          </div>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-green-dark hover:text-brand-green">
            Read review <ArrowRight className="h-4 w-4" />
          </a>
        </BrandCard>
      </div>
    </Section>

    <Section title="Content blocks" note="Pros/cons get semantic green/red icons; the FAQ stays charcoal with green affordances.">
      <div className="space-y-8">
        <div>
          <MetaLabel className="block mb-2">ProsConsBox</MetaLabel>
          <div className="grid md:grid-cols-2 gap-6">
            <BrandCard>
              <H5 className="mb-3 text-brand-green-dark">Pros</H5>
              <ul className="space-y-2">
                {["Weekly payments", "Great support", "Huge offer selection"].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-green" />
                    <BodySmall className="text-brand-charcoal">{p}</BodySmall>
                  </li>
                ))}
              </ul>
            </BrandCard>
            <BrandCard>
              <H5 className="mb-3 text-red-700">Cons</H5>
              <ul className="space-y-2">
                {["Strict approval", "High minimum payout"].map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 shrink-0 text-red-500" />
                    <BodySmall>{c}</BodySmall>
                  </li>
                ))}
              </ul>
            </BrandCard>
          </div>
        </div>
        <div>
          <MetaLabel className="block mb-2">FAQ row</MetaLabel>
          <div className="bg-white border border-brand-charcoal/15 rounded-lg divide-y divide-brand-charcoal/10 max-w-2xl">
            <div className="flex items-center justify-between gap-3 p-4">
              <H5 className="text-brand-charcoal">What is this page?</H5>
              <span className="text-brand-green font-bold">−</span>
            </div>
            <div className="px-4 pb-4 pt-3">
              <BodySmall>The colored twin of the wireframe style guide, using the AffiliateTour brand palette.</BodySmall>
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <H5 className="text-brand-charcoal/70">When should I check it?</H5>
              <span className="text-brand-green font-bold">+</span>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Hero variations" note="Three ways to use the green gradient at the top of a page.">
      <div className="space-y-8">
        {/* 1. Full gradient hero */}
        <div>
          <MetaLabel className="block mb-2">1. Full gradient</MetaLabel>
          <div className="rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark px-8 py-12 text-white">
            <H1>Your Guide to Successful Affiliate Marketing</H1>
            <Lead className="mt-3 max-w-xl text-white/85">Courses, tools, and strategies to build profitable affiliate sites.</Lead>
            <div className="flex flex-wrap gap-4 mt-6">
              <button type="button" className="px-6 py-3 rounded font-medium text-sm bg-white text-brand-green-dark hover:bg-white/90 transition-colors">Free Starter Guide</button>
              <button type="button" className="px-6 py-3 rounded font-medium text-sm border-2 border-white/70 text-white hover:bg-white/10 transition-colors">Browse Networks</button>
            </div>
          </div>
        </div>

        {/* 2. Light hero with green accents */}
        <div>
          <MetaLabel className="block mb-2">2. Light with green accents</MetaLabel>
          <div className="rounded-lg bg-gray-bg px-8 py-12">
            <span className="inline-block rounded bg-brand-green/10 text-brand-green-dark font-mono text-[13px] uppercase tracking-wider px-2.5 py-1">Networks · 2026</span>
            <H1 className="mt-3 text-brand-charcoal">
              Find the <span className="text-brand-green-dark">right network</span> for your niche
            </H1>
            <Lead className="mt-3 max-w-xl text-brand-charcoal/70">Compare payouts, risk levels and commission models before you join.</Lead>
            <div className="flex flex-wrap gap-4 mt-6">
              <BrandCTA label="Browse Networks" />
              <BrandCTA label="How We Review" variant="ghost" />
            </div>
          </div>
        </div>

        {/* 3. Split hero with gradient panel */}
        <div>
          <MetaLabel className="block mb-2">3. Split with gradient panel</MetaLabel>
          <div className="rounded-lg border border-brand-charcoal/15 overflow-hidden grid md:grid-cols-2 bg-white">
            <div className="px-8 py-12">
              <H2 className="text-brand-charcoal">Learn affiliate marketing for free</H2>
              <Lead className="mt-3 text-brand-charcoal/70">A complete beginner course — no signup required.</Lead>
              <div className="mt-6"><BrandCTA label="Start the Course" /></div>
            </div>
            <div className="bg-gradient-to-br from-brand-green to-brand-blue p-8 flex items-center justify-center">
              <div className="bg-white/95 rounded-lg p-5 shadow-lg text-center">
                <span className={`${typo.statLg} text-brand-green-dark block`}>120+</span>
                <BodySmall className="mt-1">Reviews published</BodySmall>
                <Stars className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Top pick callout" note="Green highlight box for the #1 recommendation on list pages.">
      <div className="max-w-3xl rounded-lg border-2 border-brand-green bg-brand-green/5 p-6 relative">
        <span className="absolute -top-3.5 left-5 inline-flex items-center gap-1.5 rounded bg-brand-green text-white font-mono text-[11px] uppercase tracking-wider px-2.5 py-1">
          <Trophy className="h-3.5 w-3.5" /> Our #1 Top Pick
        </span>
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center mt-2">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <H3 className="text-brand-charcoal">{demoNetwork.name}</H3>
              <BrandRatingBadge score={demoNetwork.score} />
              <Stars />
            </div>
            <BodySmall className="mt-2 text-brand-charcoal/80">{demoNetwork.shortDescription}</BodySmall>
            <ul className="mt-3 space-y-1">
              {demoNetwork.pros.slice(0, 2).map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-green" />
                  <BodySmall className="text-brand-charcoal">{p}</BodySmall>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:flex-col gap-3">
            <BrandCTA label="Visit Site →" />
            <BrandCTA label="Read Review" variant="outline" />
          </div>
        </div>
      </div>
    </Section>

    <Section title="Composed example" note="The colored pieces woven together into a typical page section.">
      <div className="rounded-lg bg-gray-bg p-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded bg-brand-green/10 text-brand-green-dark font-mono text-[13px] uppercase tracking-wider px-2.5 py-1">Networks</span>
            <H2 className="mt-3 text-brand-charcoal">Find the right network</H2>
            <Lead className="mt-3 text-brand-charcoal/70">Compare payouts, risk levels and commission models before you join.</Lead>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <BrandRatingBadge score={9.1} />
              <BrandRiskBadge label="Medium" className={riskStyles[1].className} />
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <BrandCTA label="Browse networks" />
              <BrandCTA label="How we review" variant="secondary" />
            </div>
          </div>
          <BrandImage label="Section image" className="w-full aspect-video" />
        </div>
      </div>
    </Section>
  </div>
);

export default StyleGuide2Page;
