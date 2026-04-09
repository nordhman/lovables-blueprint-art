import { Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { courses, blogPosts } from "@/data/mockData";
import { BookOpen, Wrench, Globe, FileText, Mail } from "lucide-react";

const features = [
  { icon: BookOpen, label: "Courses", desc: "Learn affiliate marketing", to: "/courses" },
  { icon: Wrench, label: "Tools", desc: "The best tools reviewed", to: "/tools" },
  { icon: Globe, label: "Networks", desc: "Find the right network", to: "/networks" },
  { icon: FileText, label: "Blog", desc: "Tips & strategies", to: "/blog" },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— Affiliate Marketing Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">Your Guide to Successful Affiliate Marketing</h1>
          <p className="text-muted-foreground mt-4 text-lg">Courses, tools, and strategies to build profitable affiliate sites. Whether you're a beginner or experienced.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <WireframeCTA label="Get Started" to="/courses" />
            <WireframeCTA label="Browse Courses →" to="/courses" variant="secondary" />
          </div>
        </div>
        <PlaceholderImage label="Hero image" className="w-full" />
      </div>
    </section>

    {/* Features grid */}
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-wider text-center mb-8">Explore</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((f) => (
          <Link key={f.label} to={f.to}>
            <WireframeCard className="text-center hover:border-foreground">
              <f.icon className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
              <h3 className="font-semibold text-sm">{f.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </WireframeCard>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured courses */}
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Courses</h2>
        <Link to="/courses" className="font-mono text-xs text-muted-foreground hover:text-foreground">All courses →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.filter(c => c.type === "own").map((course) => (
          <Link key={course.slug} to={`/courses/${course.slug}`}>
            <WireframeCard className="hover:border-foreground">
              <PlaceholderImage label="Course image" aspectRatio="video" />
              <div className="mt-3">
                <span className="font-mono text-xs text-muted-foreground">{course.level} · {course.modules} modules</span>
                <h3 className="font-semibold mt-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
                <span className="inline-block mt-2 font-mono text-xs border border-dashed border-border rounded px-2 py-1">{course.price}</span>
              </div>
            </WireframeCard>
          </Link>
        ))}
      </div>
    </section>

    {/* Latest blog posts */}
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-foreground">All posts →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <WireframeCard className="hover:border-foreground">
              <PlaceholderImage label="Featured image" aspectRatio="video" />
              <div className="mt-3">
                <span className="font-mono text-xs text-muted-foreground">{post.category} · {post.date}</span>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
            </WireframeCard>
          </Link>
        ))}
      </div>
    </section>

    {/* Newsletter CTA */}
    <section className="container mx-auto px-4 py-12">
      <WireframeCard className="text-center py-12">
        <Mail className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold">Get Tips Straight to Your Inbox</h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">Subscribe to the newsletter and get the latest affiliate marketing tips delivered weekly.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 max-w-md mx-auto">
          <div className="flex-1 border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground text-left">your@email.com</div>
          <WireframeCTA label="Subscribe" to="#" />
        </div>
      </WireframeCard>
    </section>
  </div>
);

export default HomePage;
