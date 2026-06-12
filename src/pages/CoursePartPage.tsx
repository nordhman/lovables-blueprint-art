import { Link, useParams } from "react-router-dom";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { Eyebrow, H1, H2, H4, Lead, BodySmall, Meta, MetaLabel } from "@/components/wireframe/Typography";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, ArrowRight } from "lucide-react";
import { getCoursePart, courseParts } from "@/data/coursePartsData";

const CoursePartPage = () => {
  const { partSlug } = useParams();
  const part = getCoursePart(partSlug ?? "");

  if (!part) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Part not found.</p>
        <WireframeCTA label="← Back to Free Courses" to="/courses/list?type=own" className="mt-4" />
      </div>
    );
  }

  const other = courseParts.find((p) => p.slug !== part.slug);
  const totalMin = part.modules.reduce((sum, m) => sum + m.readMin, 0);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: "Free Courses", to: "/courses/list?type=own" },
          { label: `Part ${part.number}` },
        ]}
      />

      <WireframeHero size="lg">
        <Eyebrow>{part.eyebrow}</Eyebrow>
        <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start mt-3">
          <div>
            <H1>{part.title}</H1>
            <Lead className="mt-4">{part.description}</Lead>
            <BodySmall className="mt-3">{part.audience}</BodySmall>

            <div className="mt-6 flex items-center gap-x-6 gap-y-2 flex-wrap">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-sm font-semibold">{part.modules.length} modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold">~{totalMin} min total</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-sm font-semibold">Free · No signup</span>
              </div>
            </div>
          </div>
          <PlaceholderImage label={`Part ${part.number} cover`} aspectRatio="video" className="w-full" />
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12">
        {/* Outcomes */}
        <section className="mb-12 max-w-4xl">
          <MetaLabel className="block mb-3">What you'll learn</MetaLabel>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {part.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2">
                <Check className="h-4 w-4 shrink-0 mt-0.5" />
                <span className="text-sm leading-snug">{o}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Modules grid — no forced order */}
        <section>
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <div>
              <H2>Modules</H2>
              <BodySmall className="mt-1">Jump into any module — read in any order.</BodySmall>
            </div>
            <Badge variant="outline" className="font-mono text-xs border-dashed">
              Self-paced
            </Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {part.modules.map((m) => (
              <Link
                key={m.slug}
                to={`/courses/${m.slug}`}
                className="block group"
              >
                <WireframeCard className="h-full group-hover:border-foreground flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <MetaLabel>Module</MetaLabel>
                    <Meta className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> ~{m.readMin} min
                    </Meta>
                  </div>
                  <H4 className="!text-lg">{m.title}</H4>
                  <BodySmall className="mt-2 flex-1">{m.summary}</BodySmall>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-semibold border-b-2 border-dashed border-foreground pb-1 self-start group-hover:border-solid">
                    Open module <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </WireframeCard>
              </Link>
            ))}
          </div>
        </section>

        {/* Next part CTA */}
        {other && (
          <WireframeCard className="mt-16 max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
              <div>
                <MetaLabel>
                  {part.number === 1 ? "Next up · Part 2" : "Start at the beginning · Part 1"}
                </MetaLabel>
                <p className="text-base font-bold mt-1.5">{other.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{other.tagline}</p>
              </div>
              <WireframeCTA
                label={part.number === 1 ? "Continue to Part 2 →" : "Back to Part 1 →"}
                to={`/courses/list/${other.slug}`}
                variant="secondary"
              />
            </div>
          </WireframeCard>
        )}
      </div>
    </div>
  );
};

export default CoursePartPage;
