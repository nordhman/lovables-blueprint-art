import { Link, useSearchParams } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const CoursesListPage = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const ownCourses = courses.filter((c) => c.type === "own");
  const affiliateCourses = courses.filter((c) => c.type === "affiliate");

  const title = typeFilter === "own" ? "My Courses" : typeFilter === "affiliate" ? "Recommended Courses" : "All Courses";

  return (
    <div className="container mx-auto px-4 py-12">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Learning</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">{title}</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        {typeFilter === "own"
          ? "Our own courses – from fundamentals to advanced strategies."
          : typeFilter === "affiliate"
          ? "Handpicked premium courses from the best in the industry."
          : "Curated courses for affiliate marketing – our own and recommended."}
      </p>

      {(!typeFilter || typeFilter === "own") && (
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold">My Courses</h2>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Own</Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ownCourses.map((course) => (
              <Link key={course.slug} to={`/courses/${course.slug}`}>
                <WireframeCard className="hover:border-foreground h-full">
                  <PlaceholderImage label="Course image" aspectRatio="video" />
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
                      <span className="font-mono text-xs text-muted-foreground">· {course.modules} modules</span>
                    </div>
                    <h3 className="font-semibold mt-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                    <span className="inline-block mt-3 font-mono text-xs border border-dashed border-border rounded px-2 py-1">{course.price}</span>
                  </div>
                </WireframeCard>
              </Link>
            ))}
          </div>
        </section>
      )}

      {(!typeFilter || typeFilter === "affiliate") && (
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold">Recommended Courses</h2>
            <Badge variant="outline" className="font-mono text-xs border-dashed">Partner</Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {affiliateCourses.map((course) => (
              <Link key={course.slug} to={`/courses/${course.slug}`}>
                <WireframeCard className="hover:border-foreground h-full">
                  <PlaceholderImage label="Course image" aspectRatio="video" />
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
                      <span className="font-mono text-xs text-muted-foreground">· {course.modules} modules</span>
                    </div>
                    <h3 className="font-semibold mt-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-mono text-xs border border-dashed border-border rounded px-2 py-1">{course.price}</span>
                      <span className="font-mono text-xs text-muted-foreground">via {course.partner}</span>
                    </div>
                  </div>
                </WireframeCard>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 text-center">
        <WireframeCTA label="See Best Courses 2026 →" to="/best-affiliate-courses" variant="secondary" />
      </div>
    </div>
  );
};

export default CoursesListPage;
