import { Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Eyebrow, H1, H2, H3, H4, H5, Lead, BodySmall, Meta, MetaLabel, typo } from "@/components/wireframe/Typography";
import { blogPosts, courses, tools, networks } from "@/data/mockData";
import { BookOpen, Wrench, Globe, Mail } from "lucide-react";

const ownCoursesCount = courses.filter((c) => c.type === "own").length;
const reviewsCount = tools.length + networks.length + courses.filter((c) => c.type === "affiliate").length;

const stats = [
  { value: `${reviewsCount}+`, label: "Total Reviews" },
  { value: `${ownCoursesCount}`, label: "Own Courses" },
  { value: `${blogPosts.length}`, label: "Blog Posts" },
  { value: "10+", label: "Years Online Business Experience" },
];

const features = [
  { icon: BookOpen, label: "Courses", desc: "Learn affiliate marketing", to: "/courses" },
  { icon: Wrench, label: "Tools", desc: "Find & Explore Reviews of the Best Affiliate Tools", to: "/tools" },
  { icon: Globe, label: "Networks", desc: "Find & Explore Reviews of Top Affiliate Networks", to: "/networks" },
];

const SectionDivider = () => (
  <div className="container mx-auto px-4">
    <hr className="border-t-2 border-dashed border-border" />
  </div>
);

const HomePage = () => (
  <div>
    {/* Hero */}
    <WireframeHero size="xl" bordered={false}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <H1>Your Guide to Successful Affiliate Marketing</H1>
          <Lead className="mt-4">Courses, tools, and strategies to build profitable affiliate sites. Whether you're a beginner or experienced.</Lead>
          <div className="flex flex-wrap gap-4 mt-8">
            <WireframeCTA label="Free Starter Guide" to="/courses" />
          </div>
        </div>
        <PlaceholderImage label="Hero image" className="w-full" />
      </div>
    </WireframeHero>

    <SectionDivider />

    {/* Features grid */}
    <section className="container mx-auto px-4 py-16">
      <Eyebrow>Our Services</Eyebrow>
      <H2 className="mt-3 mb-2">Affiliate Marketing Essentials</H2>
      <p className="text-muted-foreground mb-8">Everything you need to get started — handpicked courses, reviewed tools, and trusted networks in one place.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f) => (
          <Link key={f.label} to={f.to}>
            <WireframeCard className="text-center hover:border-foreground">
              <f.icon className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
              <H5>{f.label}</H5>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </WireframeCard>
          </Link>
        ))}
      </div>
    </section>

    <SectionDivider />

    {/* By the numbers */}
    <section className="container mx-auto px-4 py-16">
      <Eyebrow>Stats</Eyebrow>
      <H2 className="mt-3 mb-2">Built on Affiliate Marketing Experience</H2>
      <p className="text-muted-foreground mb-8">A growing library of reviews, courses and insights — built from over a decade of hands-on work.</p>
      <WireframeCard className="py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold">{s.value}</div>
              <MetaLabel className="mt-1 block">{s.label}</MetaLabel>
            </div>
          ))}
        </div>
      </WireframeCard>
    </section>

    <SectionDivider />

    {/* Latest blog posts */}
    <section className="container mx-auto px-4 py-16">
      <Eyebrow>Latest Blog Posts</Eyebrow>
      <H2 className="mt-3 mb-2">Latest Insights on Affiliate Marketing</H2>
      <p className="text-muted-foreground mb-8">Fresh guides, strategies and tips to help you build and grow your affiliate business.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <WireframeCard className="hover:border-foreground">
              <PlaceholderImage label="Featured image" aspectRatio="video" />
              <div className="mt-3">
                <Meta>{post.category} · {post.date}</Meta>
                <H4 className="mt-1">{post.title}</H4>
                <BodySmall className="mt-1 line-clamp-2">{post.excerpt}</BodySmall>
              </div>
            </WireframeCard>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/blog" className={typo.link}>All posts →</Link>
      </div>
    </section>

    <SectionDivider />

    {/* About Daniel */}
    <section className="container mx-auto px-4 py-16">
      <H2 className="mb-8">Hi, I'm Daniel</H2>
      <WireframeCard className="p-8">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
          <PlaceholderImage label="Profile photo" aspectRatio="square" />
          <div>
            <p className="text-muted-foreground">
              I've been working with affiliate marketing since 2015. On Affiliate Tour I share the strategies, tools and courses that have actually worked for me — across both Nordic and international markets.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              <li>— 10+ years of affiliate marketing experience</li>
              <li>— Built multiple profitable niche sites</li>
              <li>— Tested 50+ tools and platforms</li>
            </ul>
            <div className="mt-6">
              <WireframeCTA label="More about me →" to="/about" variant="secondary" />
            </div>
          </div>
        </div>
      </WireframeCard>
    </section>

    <SectionDivider />

    {/* Newsletter CTA */}
    <section className="container mx-auto px-4 py-16">
      <H2 className="mb-8">Get Tips Straight to Your Inbox</H2>
      <WireframeCard className="text-center py-12">
        <Mail className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground max-w-md mx-auto">Subscribe to the newsletter and get the latest affiliate marketing tips delivered weekly.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 max-w-md mx-auto">
          <div className="flex-1 border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground text-left">your@email.com</div>
          <WireframeCTA label="Subscribe" to="#" />
        </div>
      </WireframeCard>
    </section>
  </div>
);

export default HomePage;
