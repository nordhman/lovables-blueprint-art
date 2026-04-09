import { useParams, Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Kursen hittades inte.</p>
        <WireframeCTA label="← Tillbaka" to="/courses" className="mt-4" />
      </div>
    );
  }

  const outlineItems = Array.from({ length: course.modules }, (_, i) => `Modul ${i + 1}: [Modulnamn placeholder]`);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/courses" className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-3 w-3" /> Tillbaka till kurser
      </Link>

      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="font-mono text-xs border-dashed">
              {course.type === "own" ? "Egen kurs" : "Partner"}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">{course.level}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground mt-4 text-lg">{course.description}</p>
          {course.partner && (
            <p className="font-mono text-xs text-muted-foreground mt-2">Via {course.partner}</p>
          )}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xl font-bold">{course.price}</span>
            <WireframeCTA label={course.type === "own" ? "Starta kurs" : "Gå till kurs →"} to="#" />
          </div>
        </div>
        <PlaceholderImage label="Kursbild / Video" className="w-full" />
      </div>

      {/* Course outline */}
      <section className="mt-16">
        <h2 className="text-xl font-bold mb-6">Kursinnehåll</h2>
        <div className="space-y-2">
          {outlineItems.map((item, i) => (
            <WireframeCard key={i} className="flex items-center gap-3 py-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </WireframeCard>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mt-16">
        <WireframeCard className="text-center py-8">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Relaterat</span>
          <h3 className="text-lg font-bold mt-2">Vill du jämföra kurser?</h3>
          <p className="text-sm text-muted-foreground mt-1">Se vår jämförelse av de bästa kurserna för affiliate marketing.</p>
          <div className="mt-4">
            <WireframeCTA label="Bästa kurserna 2026 →" to="/best-affiliate-courses" variant="secondary" />
          </div>
        </WireframeCard>
      </section>
    </div>
  );
};

export default CourseDetailPage;
