import { Link } from "react-router-dom";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const LandingCourses = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-2xl mx-auto">
      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Jämförelse 2026</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">Bästa kurserna för affiliate marketing</h1>
      <p className="text-muted-foreground mt-4">Vi har gått igenom de mest populära kurserna och valt ut de bästa för varje nivå.</p>
    </div>

    {/* Beginner */}
    <section className="mt-16">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Nybörjare? Börja här</span>
        <h2 className="text-xl font-bold mt-2">Börja med grunderna</h2>
        <p className="text-sm text-muted-foreground mt-2">Dessa kurser tar dig från noll till din första affiliate-inkomst.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {courses.filter(c => c.level === "beginner").map((course) => (
            <Link key={course.slug} to={`/courses/${course.slug}`}>
              <WireframeCard className="hover:border-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-sm">{course.title}</h3>
                  <Badge variant="outline" className="font-mono text-xs border-dashed">{course.type === "own" ? "Egen" : "Partner"}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{course.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-mono text-xs">{course.price}</span>
                  <span className="font-mono text-xs text-muted-foreground">{course.modules} moduler</span>
                </div>
              </WireframeCard>
            </Link>
          ))}
        </div>
      </WireframeCard>
    </section>

    {/* Comparison table */}
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-6">Alla kurser i jämförelse</h2>
      <div className="border-2 border-dashed border-border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dashed border-border">
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Kurs</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Typ</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Nivå</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Pris</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.slug} className="border-b border-dashed border-border last:border-0">
                <td className="p-3 font-semibold">{course.title}</td>
                <td className="p-3"><Badge variant="outline" className="font-mono text-xs border-dashed">{course.type === "own" ? "Egen" : "Partner"}</Badge></td>
                <td className="p-3 text-muted-foreground capitalize">{course.level}</td>
                <td className="p-3 font-mono text-xs">{course.price}</td>
                <td className="p-3"><WireframeCTA label="Läs mer →" to={`/courses/${course.slug}`} variant="secondary" className="text-xs py-1 px-3" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Advanced */}
    <section className="mt-12">
      <WireframeCard className="p-6">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Avancerat</span>
        <h2 className="text-xl font-bold mt-2">För erfarna affiliates</h2>
        <div className="mt-4 space-y-2">
          {["Avancerad SEO och länkbyggnad", "Skalbar innehållsproduktion", "Monetiseringsstrategier för hög trafik"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </WireframeCard>
    </section>
  </div>
);

export default LandingCourses;
