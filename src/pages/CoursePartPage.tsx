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
  const totalMin = part.chapters.reduce((sum, m) => sum + m.readMin, 0);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: "Free Courses", to: "/courses/list?type=own" },
          { label: part.eyebrow },
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
                <span className="text-sm font-semibold">{part.chapters.length} chapters</span>
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
          <PlaceholderImage label={`${part.eyebrow} cover`} aspectRatio="video" className="w-full" />
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12">
        <section>
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <H2>Chapters</H2>
              <BodySmall className="mt-1">Jump into any chapter — read in any order.</BodySmall>
            </div>
            <Badge variant="outline" className="font-mono text-xs border-dashed">
              Self-paced
            </Badge>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div className="grid gap-4">
              {part.chapters.map((m, idx) => (
                <Link key={m.slug} to={`/courses/${m.slug}`} className="block group">
                  <WireframeCard className="group-hover:border-foreground p-0 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-[40%] shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-border">
                        <PlaceholderImage
                          label={`${m.title} cover`}
                          aspectRatio="video"
                          className="w-full h-full rounded-none border-0"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <MetaLabel>Chapter {idx + 1}</MetaLabel>
                          <Meta className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> ~{m.readMin} min
                          </Meta>
                        </div>
                        <H4 className="!text-xl">{m.title}</H4>
                        <BodySmall className="mt-2 line-clamp-2">{m.summary}</BodySmall>
                        <div className="mt-auto pt-4">
                          <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold border-b-2 border-dashed border-foreground pb-1 group-hover:border-solid">
                            Open chapter <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </WireframeCard>
                </Link>
              ))}

              {other && (
                <div className="p-6 border border-dashed border-border bg-muted/40 flex flex-col md:flex-row gap-4 md:items-center md:justify-between opacity-50 hover:opacity-100 hover:border-foreground hover:bg-muted/60 transition-all duration-300">
                  <div>
                    <MetaLabel>Next up · {other.eyebrow}</MetaLabel>
                    <p className="text-sm mt-1.5 text-muted-foreground leading-relaxed">
                      {other.tagline}
                    </p>
                  </div>
                  <WireframeCTA
                    label={`Continue to ${other.eyebrow} →`}
                    to={`/courses/list/${other.slug}`}
                    variant="secondary"
                  />
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-24">
              <WireframeCard className="p-6">
                <MetaLabel className="block mb-3">What you'll learn</MetaLabel>
                <ul className="space-y-2.5">
                  {part.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 mt-0.5" />
                      <span className="text-sm leading-snug">{o}</span>
                    </li>
                  ))}
                </ul>

                <div className="my-6 border-t border-dashed border-border" />

                <MetaLabel className="block mb-3">About this part</MetaLabel>
                <BodySmall className="leading-relaxed">{part.audience}</BodySmall>
                <ul className="mt-4 space-y-2">
                  {[
                    `${part.chapters.length} chapters`,
                    `~${totalMin} min total`,
                    "Free · No signup",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                      <span className="text-sm leading-snug">{t}</span>
                    </li>
                  ))}
                </ul>
              </WireframeCard>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePartPage;
