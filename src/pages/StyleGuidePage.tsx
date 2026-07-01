import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { RatingBadge } from "@/components/wireframe/RatingBadge";
import { RiskBadge } from "@/components/wireframe/RiskBadge";
import { SourceBadge } from "@/components/wireframe/SourceBadge";
import { CommissionModelList } from "@/components/wireframe/CommissionModelBadge";
import { ProsConsBox } from "@/components/wireframe/ProsConsBox";
import { FAQSection } from "@/components/wireframe/FAQSection";
import { FilterBar } from "@/components/wireframe/FilterBar";
import { NetworkCard } from "@/components/wireframe/NetworkCard";
import { DirectoryListRow } from "@/components/wireframe/DirectoryListRow";
import {
  Eyebrow,
  H1,
  H2,
  H3,
  H4,
  H5,
  Lead,
  BodySmall,
  Meta,
  MetaLabel,
  typo,
} from "@/components/wireframe/Typography";
import { networks, riskLevels } from "@/data/networkVerticals";

const demoNetwork = networks[0];

const colorTokens = [
  { name: "background", className: "bg-background", usage: "Page background" },
  { name: "foreground", className: "bg-foreground", usage: "Primary text" },
  { name: "card", className: "bg-card", usage: "Card surfaces" },
  { name: "muted", className: "bg-muted", usage: "Subtle fills, placeholders" },
  { name: "muted-foreground", className: "bg-muted-foreground", usage: "Secondary text" },
  { name: "border", className: "bg-border", usage: "Dashed borders everywhere" },
];

const spacingRules = [
  { rule: "py-12", usage: "Standard section padding (vertical)" },
  { rule: "py-16", usage: "Extra-large sections (homepage only)" },
  { rule: "gap-6", usage: "Card grids (tools, blog, courses)" },
  { rule: "gap-5", usage: "Network card grids" },
  { rule: "gap-2 / gap-3", usage: "Inline badges, chips and small clusters" },
  { rule: "p-4", usage: "Inner padding of every card/box" },
];

const demoFaq = [
  { q: "What is this page?", a: "A living style guide: every reusable element of the site in one place, so new pages stay visually consistent." },
  { q: "When should I check it?", a: "Before building a new page or component — reuse what exists here instead of inventing new styles." },
];

const Section = ({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) => (
  <section className="container mx-auto px-4 py-12 border-t-2 border-dashed border-border">
    <H2>{title}</H2>
    {note && <p className={`${typo.bodySmall} mt-1`}>{note}</p>}
    <div className="mt-6">{children}</div>
  </section>
);

const Swatch = ({ name, className, usage }: { name: string; className: string; usage: string }) => (
  <div className="border-2 border-dashed border-border rounded overflow-hidden">
    <div className={`h-16 ${className}`} />
    <div className="p-3 bg-card">
      <Meta className="block text-foreground">{name}</Meta>
      <Meta className="block mt-0.5">{usage}</Meta>
    </div>
  </div>
);

const StyleGuidePage = () => (
  <div>
    <WireframeHero size="sm">
      <Eyebrow>Internal</Eyebrow>
      <H1 className="mt-3">Style Guide</H1>
      <Lead className="mt-3 max-w-2xl">
        Every reusable design element on the site — typography, colors, spacing, badges,
        cards and content blocks. Build new pages from these pieces only.
      </Lead>
    </WireframeHero>

    <Section title="Colors" note="Grayscale wireframe palette. All colors come from theme tokens — never hard-coded values.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {colorTokens.map((t) => (
          <Swatch key={t.name} {...t} />
        ))}
      </div>
    </Section>

    <Section title="Typography" note="Always use the Typography components (H1–H5, Lead, BodySmall, Meta…) — never ad-hoc text classes.">
      <div className="space-y-5">
        <div><MetaLabel>H1 — page title</MetaLabel><H1>Your Guide to Affiliate Marketing</H1></div>
        <div><MetaLabel>H2 — section title</MetaLabel><H2>Affiliate Marketing Essentials</H2></div>
        <div><MetaLabel>H3 — sub-section</MetaLabel><H3>How networks are scored</H3></div>
        <div><MetaLabel>H4 — card title</MetaLabel><H4>MaxBounty</H4></div>
        <div><MetaLabel>H5 — small heading</MetaLabel><H5>Pros</H5></div>
        <div>
          <MetaLabel>Lead — intro paragraph</MetaLabel>
          <Lead>Courses, tools, and strategies to build profitable affiliate sites.</Lead>
        </div>
        <div>
          <MetaLabel>Body — default text</MetaLabel>
          <p className={typo.body}>Regular paragraph text used for article content and longer descriptions.</p>
        </div>
        <div>
          <MetaLabel>BodySmall — card text</MetaLabel>
          <BodySmall>Slightly smaller muted text used inside cards and lists.</BodySmall>
        </div>
        <div>
          <MetaLabel>Meta / MetaLabel — annotations (mono)</MetaLabel>
          <div className="flex flex-wrap items-center gap-4 mt-1">
            <Meta>Known for: high payouts</Meta>
            <MetaLabel>Filter by model</MetaLabel>
          </div>
        </div>
        <div>
          <MetaLabel>Eyebrow — kicker above titles</MetaLabel>
          <div className="mt-1"><Eyebrow>Our Services</Eyebrow></div>
        </div>
      </div>
    </Section>

    <Section title="Spacing" note="Shared rhythm so every page feels the same.">
      <div className="grid md:grid-cols-2 gap-6">
        <WireframeCard>
          <H5 className="mb-3">Rules</H5>
          <ul className="space-y-2">
            {spacingRules.map((r) => (
              <li key={r.rule} className="flex items-baseline gap-3">
                <Meta className="text-foreground shrink-0 w-24">{r.rule}</Meta>
                <BodySmall>{r.usage}</BodySmall>
              </li>
            ))}
          </ul>
        </WireframeCard>
        <WireframeCard>
          <H5 className="mb-3">Hero sizes</H5>
          <ul className="space-y-2">
            <li className="flex items-baseline gap-3"><Meta className="text-foreground shrink-0 w-24">xl</Meta><BodySmall>Homepage only</BodySmall></li>
            <li className="flex items-baseline gap-3"><Meta className="text-foreground shrink-0 w-24">lg</Meta><BodySmall>Pillar & landing pages (default)</BodySmall></li>
            <li className="flex items-baseline gap-3"><Meta className="text-foreground shrink-0 w-24">sm</Meta><BodySmall>List & utility pages</BodySmall></li>
          </ul>
        </WireframeCard>
      </div>
    </Section>

    <Section title="Buttons & CTAs">
      <div className="flex flex-wrap items-center gap-4">
        <WireframeCTA label="Primary CTA" />
        <WireframeCTA label="Secondary CTA" variant="secondary" />
      </div>
    </Section>

    <Section title="Badges" note="Mono uppercase, dashed borders, grayscale fills — no color coding.">
      <div className="space-y-5">
        <div>
          <MetaLabel className="block mb-2">RatingBadge (sm / md / lg)</MetaLabel>
          <div className="flex flex-wrap items-center gap-3">
            <RatingBadge score={8.7} size="sm" />
            <RatingBadge score={8.7} size="md" />
            <RatingBadge score={8.7} size="lg" />
          </div>
        </div>
        <div>
          <MetaLabel className="block mb-2">RiskBadge</MetaLabel>
          <div className="flex flex-wrap items-center gap-3">
            {riskLevels.map((r) => (
              <RiskBadge key={r.value} level={r.value} />
            ))}
          </div>
        </div>
        <div>
          <MetaLabel className="block mb-2">CommissionModelBadge</MetaLabel>
          <CommissionModelList models={["CPA", "CPL", "RevShare", "Hybrid"]} />
        </div>
        <div>
          <MetaLabel className="block mb-2">SourceBadge</MetaLabel>
          <div className="flex flex-wrap items-center gap-3">
            <SourceBadge type="auto" label="Trustpilot" />
            <SourceBadge type="manual" label="Our review" />
          </div>
        </div>
      </div>
    </Section>

    <Section title="Cards & media" note="WireframeCard is the base surface; PlaceholderImage stands in for real media.">
      <div className="grid md:grid-cols-3 gap-6">
        <WireframeCard>
          <H4>WireframeCard</H4>
          <BodySmall className="mt-2">Dashed border, rounded corners, p-4 padding. The base of every box on the site.</BodySmall>
        </WireframeCard>
        <div className="space-y-3">
          <PlaceholderImage label="video (16:9)" />
          <PlaceholderImage label="square" aspectRatio="square" className="w-24" />
        </div>
        <div>
          <NetworkCard network={demoNetwork} />
        </div>
      </div>
      <div className="mt-6 max-w-xl">
        <MetaLabel className="block mb-2">DirectoryListRow (mobile lists)</MetaLabel>
        <DirectoryListRow title="Nutra" meta="12 networks" description="Health & beauty offers" to="/styleguide" />
      </div>
    </Section>

    <Section title="Content blocks" note="Larger composed pieces used on review and directory pages.">
      <div className="space-y-8">
        <div>
          <MetaLabel className="block mb-2">ProsConsBox</MetaLabel>
          <ProsConsBox
            pros={["Weekly payments", "Great support", "Huge offer selection"]}
            cons={["Strict approval", "High minimum payout"]}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <MetaLabel className="block mb-2">FAQSection</MetaLabel>
            <FAQSection items={demoFaq} />
          </div>
          <div>
            <MetaLabel className="block mb-2">FilterBar</MetaLabel>
            <FilterBar />
          </div>
        </div>
      </div>
    </Section>

    <Section title="Composed example" note="How the pieces weave together into a typical page section.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>Networks</Eyebrow>
          <H2 className="mt-3">Find the right network</H2>
          <Lead className="mt-3">Compare payouts, risk levels and commission models before you join.</Lead>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <RatingBadge score={9.1} />
            <RiskBadge level="medium" />
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <WireframeCTA label="Browse networks" />
            <WireframeCTA label="How we review" variant="secondary" />
          </div>
        </div>
        <PlaceholderImage label="Section image" className="w-full" />
      </div>
    </Section>
  </div>
);

export default StyleGuidePage;
