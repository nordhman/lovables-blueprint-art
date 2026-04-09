import { useParams, Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { blogPosts } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Inlägget hittades inte.</p>
        <WireframeCTA label="← Tillbaka" to="/blog" className="mt-4" />
      </div>
    );
  }

  const landingLabel: Record<string, string> = {
    "/best-affiliate-tools": "Se bästa verktygen 2026 →",
    "/best-affiliate-courses": "Se bästa kurserna 2026 →",
    "/best-affiliate-networks": "Se bästa nätverken 2026 →",
    "/courses": "Utforska kurser →",
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-3 w-3" /> Tillbaka till bloggen
      </Link>

      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-muted-foreground">{post.category}</span>
        <span className="font-mono text-xs text-muted-foreground">· {post.date}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
      <p className="text-lg text-muted-foreground mt-4">{post.excerpt}</p>

      <PlaceholderImage label="Featured image" className="w-full mt-8" />

      {/* Article body placeholder */}
      <div className="mt-8 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            {i % 3 === 0 && <div className="h-6 w-48 bg-muted rounded border border-dashed border-border" />}
            <div className="h-4 w-full bg-muted rounded border border-dashed border-border" />
            <div className="h-4 w-full bg-muted rounded border border-dashed border-border" />
            <div className="h-4 w-3/4 bg-muted rounded border border-dashed border-border" />
          </div>
        ))}
      </div>

      {/* Landing page CTA banner */}
      {post.relatedLanding && (
        <WireframeCard className="mt-12 text-center py-8 bg-muted">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Relaterad resurs</span>
          <h3 className="text-lg font-bold mt-2">Vill du veta mer?</h3>
          <p className="text-sm text-muted-foreground mt-1">Kolla in vår dedikerade jämförelsesida.</p>
          <div className="mt-4">
            <WireframeCTA label={landingLabel[post.relatedLanding] || "Läs mer →"} to={post.relatedLanding} />
          </div>
        </WireframeCard>
      )}

      {/* Related posts */}
      <section className="mt-12">
        <h3 className="text-lg font-bold mb-4">Relaterade inlägg</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts.filter((p) => p.slug !== slug).slice(0, 2).map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}>
              <WireframeCard className="hover:border-foreground">
                <span className="font-mono text-xs text-muted-foreground">{p.category}</span>
                <h4 className="font-semibold text-sm mt-1">{p.title}</h4>
              </WireframeCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
