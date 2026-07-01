import { useParams, Link } from "react-router-dom";
import { Eyebrow, H1, H2, H3, H4, Lead, BodySmall, Meta, MetaLabel, typo } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, BookOpen } from "lucide-react";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Course not found.</p>
        <WireframeCTA label="← Back" to="/courses" className="mt-4" />
      </div>
    );
  }

  const modules = Array.from({ length: course.modules }, (_, i) => ({
    number: i + 1,
    title: `Module ${i + 1}: [Module name placeholder]`,
    summary:
      "[Short module summary placeholder — what this module covers and why it matters for your affiliate journey.]",
    bullets: [
      "[Key learning point one placeholder]",
      "[Key learning point two placeholder]",
      "[Key learning point three placeholder]",
    ],
    readTime: 15,
  }));

  const isOwn = course.type === "own";
  const totalMinutes = course.modules * 15;

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          {
            label: isOwn ? "Free Courses" : "Premium Courses",
            to: `/courses/list?type=${isOwn ? "own" : "affiliate"}`,
          },
          { label: course.title },
        ]}
      />

      {/* Hero */}
      <WireframeHero size="sm">
        <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <Badge variant="outline" className="font-mono text-xs border-dashed">
                {isOwn ? "Free course" : "Partner"}
              </Badge>
              <MetaLabel>{course.level}</MetaLabel>
            </div>
            <H1>{course.title}</H1>
            <Lead className="mt-4">{course.description}</Lead>
            {course.partner && <Meta className="block mt-2">Via {course.partner}</Meta>}

            <div className="mt-6 flex items-center gap-x-6 gap-y-2 flex-wrap">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-semibold">{course.modules} modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold">~{totalMinutes} min total</span>
              </div>
              {isOwn ? (
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  <span className="text-sm font-semibold">100% free · No signup</span>
                </div>
              ) : (
                <span className="text-base font-bold">{course.price}</span>
              )}
            </div>

            {!isOwn && (
              <div className="mt-6">
                <WireframeCTA label="Go to Course →" to="#" />
              </div>
            )}
          </div>
          <PlaceholderImage label="Course image / Video" className="w-full" aspectRatio="video" />
        </div>
      </WireframeHero>

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-[220px_1fr] gap-10">
        {/* Sticky module index */}
        <aside className="hidden md:block">
          <div className="sticky top-6">
            <MetaLabel className="block mb-3">In this course</MetaLabel>
            <ol className="space-y-2">
              {modules.map((m) => (
                <li key={m.number}>
                  <a
                    href={`#module-${m.number}`}
                    className="block text-sm text-muted-foreground hover:text-foreground leading-snug"
                  >
                    <span className="font-mono text-xs mr-2">{String(m.number).padStart(2, "0")}</span>
                    {m.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Stacked modules */}
        <section className="min-w-0">
          <H2 className="mb-2">Course Content</H2>
          <BodySmall className="mb-8">
            Read through the modules in order, or jump to whichever section you need.
          </BodySmall>

          <div className="space-y-6">
            {modules.map((m) => (
              <div key={m.number} id={`module-${m.number}`} className="scroll-mt-6">
                <WireframeCard>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 text-center">
                    <MetaLabel className="block leading-none">Module</MetaLabel>
                    <span className={`${typo.stat} leading-none block mt-1`}>
                      {String(m.number).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <H3 className="!text-xl">{m.title}</H3>
                      <Meta className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> ~{m.readTime} min
                      </Meta>
                    </div>
                    <BodySmall className="mt-2">{m.summary}</BodySmall>

                    <MetaLabel className="block mt-5 mb-2">What you'll learn</MetaLabel>
                    <ul className="space-y-1.5">
                      {m.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 shrink-0 mt-1" />
                          <span className="text-sm leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </WireframeCard>
              </div>
            ))}
          </div>

          {/* Related CTA */}
          <WireframeCard className="text-center py-8 mt-12">
            <Eyebrow>Next step</Eyebrow>
            <H4 className="mt-3">Ready to go beyond the basics?</H4>
            <p className="text-sm text-muted-foreground mt-1">
              Compare the top expert-led premium courses I recommend.
            </p>
            <div className="mt-4">
              <WireframeCTA
                label="Compare Premium Courses →"
                to="/courses/list?type=affiliate"
                variant="secondary"
              />
            </div>
          </WireframeCard>
        </section>
      </div>
    </div>
  );
};

export default CourseDetailPage;
