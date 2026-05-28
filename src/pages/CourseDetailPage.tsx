import { useParams, Link } from "react-router-dom";
import { Eyebrow, H1, H2 } from "@/components/wireframe/Typography";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeBreadcrumbs } from "@/components/wireframe/WireframeBreadcrumbs";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";

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

  const outlineItems = Array.from({ length: course.modules }, (_, i) => `Module ${i + 1}: [Module name placeholder]`);

  return (
    <div>
      <WireframeBreadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.type === "own" ? "My Courses" : "Premium Courses", to: `/courses/list?type=${course.type === "own" ? "own" : "affiliate"}` },
          { label: course.title },
        ]}
      />
      <div className="container mx-auto px-4 py-12">


      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="font-mono text-xs border-dashed">
              {course.type === "own" ? "Own course" : "Partner"}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
          </div>
          <H1>{course.title}</H1>
          <p className="text-muted-foreground mt-4 text-lg">{course.description}</p>
          {course.partner && <p className="font-mono text-xs text-muted-foreground mt-2">Via {course.partner}</p>}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xl font-bold">{course.price}</span>
            <WireframeCTA label={course.type === "own" ? "Start Course" : "Go to Course →"} to="#" />
          </div>
        </div>
        <PlaceholderImage label="Course image / Video" className="w-full" />
      </div>

      <section className="mt-16">
        <H2 className="mb-6">Course Content</H2>
        <div className="space-y-2">
          {outlineItems.map((item, i) => (
            <WireframeCard key={i} className="flex items-center gap-3 py-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </WireframeCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <WireframeCard className="text-center py-8">
          <Eyebrow>Related</Eyebrow>
          <h3 className="text-lg font-bold mt-2">Want to compare courses?</h3>
          <p className="text-sm text-muted-foreground mt-1">Check out our comparison of the best affiliate marketing courses.</p>
          <div className="mt-4">
            <WireframeCTA label="Best Courses 2026 →" to="/best-affiliate-courses" variant="secondary" />
          </div>
        </WireframeCard>
      </section>
      </div>
    </div>
  );
};

export default CourseDetailPage;
