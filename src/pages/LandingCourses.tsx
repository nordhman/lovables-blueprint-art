import { Link } from "react-router-dom";
import { Eyebrow, H1, H2 } from "@/components/wireframe/Typography";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const LandingCourses = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-2xl mx-auto">
      <Eyebrow>Comparison 2026</Eyebrow>
      <H1 className="mt-2">Best Courses for Affiliate Marketing</H1>
      <p className="text-muted-foreground mt-4">We've reviewed the most popular courses and selected the best for every level.</p>
    </div>

    <section className="mt-16">
      <WireframeCard className="p-6">
        <Eyebrow>New to this? Start here</Eyebrow>
        <H2 className="mt-2">Start with the Basics</H2>
        <p className="text-sm text-muted-foreground mt-2">These courses take you from zero to your first affiliate income.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {courses.filter(c => c.level === "beginner").map((course) => (
            <Link key={course.slug} to={`/courses/${course.slug}`}>
              <WireframeCard className="hover:border-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-sm">{course.title}</h3>
                  <Badge variant="outline" className="font-mono text-xs border-dashed">{course.type === "own" ? "Own" : "Partner"}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{course.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-mono text-xs">{course.price}</span>
                  <span className="font-mono text-xs text-muted-foreground">{course.modules} modules</span>
                </div>
              </WireframeCard>
            </Link>
          ))}
        </div>
      </WireframeCard>
    </section>

    <section className="mt-12">
      <H2 className="mb-6">All Courses Compared</H2>
      <div className="border-2 border-dashed border-border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dashed border-border">
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Course</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Type</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Level</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground">Price</th>
              <th className="text-left p-3 font-mono text-xs text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.slug} className="border-b border-dashed border-border last:border-0">
                <td className="p-3 font-semibold">{course.title}</td>
                <td className="p-3"><Badge variant="outline" className="font-mono text-xs border-dashed">{course.type === "own" ? "Own" : "Partner"}</Badge></td>
                <td className="p-3 text-muted-foreground capitalize">{course.level}</td>
                <td className="p-3 font-mono text-xs">{course.price}</td>
                <td className="p-3"><WireframeCTA label="Read More →" to={`/courses/${course.slug}`} variant="secondary" className="text-xs py-1 px-3" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="mt-12">
      <WireframeCard className="p-6">
        <Eyebrow>Advanced</Eyebrow>
        <H2 className="mt-2">For Experienced Affiliates</H2>
        <div className="mt-4 space-y-2">
          {["Advanced SEO and link building", "Scalable content production", "Monetization strategies for high traffic"].map((item) => (
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
