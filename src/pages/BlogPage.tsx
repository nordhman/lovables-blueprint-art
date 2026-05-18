import { Link } from "react-router-dom";
import { useState } from "react";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { Eyebrow, H1, H4, Lead, BodySmall, Meta } from "@/components/wireframe/Typography";
import { blogPosts, categories } from "@/data/mockData";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <Eyebrow>Insights</Eyebrow>
      <H1 className="mt-2">Blog</H1>
      <Lead className="mt-2 max-w-2xl">Tips, strategies, and guides for affiliate marketing.</Lead>

      <div className="flex flex-wrap gap-2 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 border-2 border-dashed rounded font-mono text-xs transition-colors ${activeCategory === cat ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:border-foreground"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <WireframeCard className="hover:border-foreground h-full">
              <PlaceholderImage label="Featured image" aspectRatio="video" />
              <div className="mt-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">{post.category}</span>
                  <span className="font-mono text-xs text-muted-foreground">· {post.date}</span>
                </div>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
            </WireframeCard>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 border-2 border-dashed border-border rounded font-mono text-sm text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
          Show More Posts
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
