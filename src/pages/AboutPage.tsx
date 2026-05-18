import { PlaceholderImage } from "@/components/wireframe/PlaceholderImage";
import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";
import { Eyebrow, H1, H2, H4, Lead } from "@/components/wireframe/Typography";
import { CheckCircle } from "lucide-react";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Eyebrow>About</Eyebrow>
        <H1 className="mt-2">About Affiliate Tour</H1>
        <Lead className="mt-4">
          Affiliate Tour helps you navigate the world of affiliate marketing with honest reviews, education, and proven strategies.
        </Lead>
        <div className="mt-6">
          <WireframeCTA label="Contact Us" to="/contact" />
        </div>
      </div>
      <PlaceholderImage label="About hero image" className="w-full" />
    </div>

    <section className="mt-16">
      <WireframeCard className="p-8">
        <H2>About the Blog</H2>
        <p className="text-muted-foreground mt-3">
          Affiliate Tour was created to fill a gap in the affiliate marketing space. We offer:
        </p>
        <div className="mt-4 space-y-3">
          {[
            "Honest and unbiased tool reviews",
            "Courses for both beginners and experienced marketers",
            "Up-to-date guides on affiliate networks",
            "SEO and content strategies that actually work",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </WireframeCard>
    </section>

    <section className="mt-12">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
        <PlaceholderImage label="Profile photo" aspectRatio="square" />
        <div>
          <h2 className="text-xl font-bold">About the Creator</h2>
          <h3 className="text-lg font-semibold mt-2">Daniel</h3>
          <p className="text-muted-foreground mt-2">
            Daniel has been working with affiliate marketing since 2015. With experience from both Nordic and international markets, he shares his best strategies and lessons learned.
          </p>
          <div className="mt-4 space-y-2">
            {[
              "10+ years of affiliate marketing experience",
              "Built multiple profitable niche sites",
              "Tested 50+ tools and platforms",
              "Trained hundreds of affiliates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">—</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <WireframeCTA label="Contact Me →" to="/contact" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
