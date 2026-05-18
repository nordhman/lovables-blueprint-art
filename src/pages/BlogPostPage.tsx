import { useParams, Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { H1, H3, H5, Lead, BodySmall, Meta, MetaLabel, typo } from "@/components/wireframe/Typography";
import { blogPosts } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Post not found.</p>
        <WireframeCTA label="← Back" to="/blog" className="mt-4" />
      </div>
    );
  }

  const landingLabel: Record<string, string> = {
    "/best-affiliate-tools": "See Best Tools 2026 →",
    "/best-affiliate-courses": "See Best Courses 2026 →",
    "/best-affiliate-networks": "See Best Networks 2026 →",
    "/courses": "Explore Courses →",
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/blog" className={`inline-flex items-center gap-1 mb-8 ${typo.link}`}>
        <ArrowLeft className="h-3 w-3" /> Back to blog
      </Link>

      <div className="flex items-center gap-2 mb-3">
        <Meta>{post.category}</Meta>
        <Meta>· {post.date}</Meta>
      </div>

      <H1>{post.title}</H1>
      <Lead className="mt-4">{post.excerpt}</Lead>

      <PlaceholderImage label="Featured image" className="w-full mt-8" />

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

      {post.relatedLanding && (
        <WireframeCard className="mt-12 text-center py-8 bg-muted">
          <MetaLabel>Related Resource</MetaLabel>
          <H3 className="mt-2">Want to learn more?</H3>
          <BodySmall className="mt-1">Check out our dedicated comparison page.</BodySmall>
          <div className="mt-4">
            <WireframeCTA label={landingLabel[post.relatedLanding] || "Read More →"} to={post.relatedLanding} />
          </div>
        </WireframeCard>
      )}

      <section className="mt-12">
        <H3 className="mb-4">Related Posts</H3>
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts.filter((p) => p.slug !== slug).slice(0, 2).map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}>
              <WireframeCard className="hover:border-foreground">
                <Meta>{p.category}</Meta>
                <H5 className="mt-1">{p.title}</H5>
              </WireframeCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
