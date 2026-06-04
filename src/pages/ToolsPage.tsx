import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { WireframeHero } from "@/components/wireframe/WireframeHero";
import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { Eyebrow, H1, H4, Lead, BodySmall } from "@/components/wireframe/Typography";

interface ToolCategory {
  slug: string;
  title: string;
  description: string;
  cta: string;
}

const toolCategories: ToolCategory[] = [
  {
    slug: "tracking",
    title: "Best Tracking Softwares for Affiliates",
    description: "Discover the top tools for tracking your affiliate activities, helping you gain insights into your performance and maximize your revenue.",
    cta: "Explore Tracking Tools →",
  },
  {
    slug: "cms",
    title: "Best CMS Tools for Successful Affiliates",
    description: "The content management systems that make publishing, organizing and scaling your affiliate site effortless.",
    cta: "Explore CMS Tools →",
  },
  {
    slug: "link-cloaking",
    title: "Best Link Cloaking Tools",
    description: "Hide, manage and track your affiliate links with the most reliable cloaking solutions on the market.",
    cta: "Explore Link Cloakers →",
  },
  {
    slug: "sales-funnel",
    title: "Best Sales Funnel Software",
    description: "Build high-converting funnels that turn affiliate traffic into paying customers without writing code.",
    cta: "Explore Funnel Tools →",
  },
  {
    slug: "content-creation",
    title: "Best Content Creation Tools for Affiliates",
    description: "AI writers, editors and design tools that help you produce quality content at scale.",
    cta: "Explore Content Tools →",
  },
  {
    slug: "email",
    title: "Best Tools for Building Email Lists",
    description: "Capture, nurture and convert subscribers with the email marketing platforms affiliates trust.",
    cta: "Explore Email Tools →",
  },
];

const ToolsPage = () => (
  <div>
    <WireframeHero size="lg">
      <Eyebrow>Resources</Eyebrow>
      <H1 className="mt-3">Tools & Resources</H1>
      <Lead className="mt-2 max-w-2xl">
        Browse curated comparisons of the best tools for every part of your affiliate business. Pick a category to see our top picks.
      </Lead>
    </WireframeHero>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((cat) => (
          <WireframeCard key={cat.slug} className="flex flex-col p-6">
            <PlaceholderImage label={`${cat.slug} illustration`} aspectRatio="video" />
            <H4 className="mt-5 text-center">{cat.title}</H4>
            <BodySmall className="mt-3 text-center">{cat.description}</BodySmall>
            <div className="mt-6 mt-auto pt-6">
              <WireframeCTA
                label={cat.cta}
                to={`/best-affiliate-tools?category=${cat.slug}`}
                variant="primary"
                className="w-full"
              />
            </div>
          </WireframeCard>
        ))}
      </div>
    </div>
  </div>
);

export default ToolsPage;
