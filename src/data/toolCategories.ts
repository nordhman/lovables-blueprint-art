export interface CategoryTool {
  slug: string;
  name: string;
  tagline: string;
  ourScore: number; // 0-10
  trustpilot: number; // 0-5
  reviews: number;
  price: string;
  bestFor: string;
  pros: string[];
  bottomLine: string;
  externalUrl: string;
}

export interface ToolCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  cta: string;
  intro: string;
  tools: CategoryTool[];
}

const baseTrust = (i: number) => ({
  trustpilot: [4.9, 4.7, 4.5, 4.3, 4.2][i] ?? 4.0,
  reviews: [2140, 1320, 870, 540, 310][i] ?? 200,
});

export const toolCategories: ToolCategory[] = [
  {
    slug: "tracking",
    shortTitle: "Tracking",
    title: "Best Tracking Softwares for Affiliates",
    description:
      "Discover the top tools for tracking your affiliate activities, helping you gain insights into your performance and maximize your revenue.",
    cta: "Explore Tracking Tools →",
    intro:
      "We've tested the leading affiliate tracking platforms on accuracy, integrations and price. Here are our top picks for 2026.",
    tools: [
      { slug: "voluum", name: "Voluum", tagline: "The industry-standard tracker for paid-traffic affiliates.", ourScore: 9.6, price: "$199/mo", bestFor: "Paid media affiliates", pros: ["Real-time reporting", "AI traffic distribution", "200+ integrations"], bottomLine: "If you run paid traffic at scale, this is the safest pick.", externalUrl: "https://voluum.com", ...baseTrust(0) },
      { slug: "redtrack", name: "RedTrack", tagline: "Affordable, modern tracker with strong attribution.", ourScore: 9.1, price: "$149/mo", bestFor: "Performance marketers", pros: ["Cookieless tracking", "Generous limits", "Great support"], bottomLine: "Best value for serious affiliates who don't need Voluum's depth.", externalUrl: "https://redtrack.io", ...baseTrust(1) },
      { slug: "binom", name: "Binom", tagline: "Self-hosted tracker built for speed.", ourScore: 8.8, price: "$99/mo", bestFor: "High-volume campaigns", pros: ["Sub-5ms redirects", "Flat pricing", "Unlimited events"], bottomLine: "Pick this when speed and unlimited volume matter most.", externalUrl: "https://binom.org", ...baseTrust(2) },
      { slug: "bemob", name: "BeMob", tagline: "Free tier tracker that scales as you grow.", ourScore: 8.2, price: "Free – $399/mo", bestFor: "Beginners", pros: ["Free starter plan", "Cloud-hosted", "Simple UI"], bottomLine: "The easiest way to start tracking without spending a cent.", externalUrl: "https://bemob.com", ...baseTrust(3) },
    ],
  },
  {
    slug: "cms",
    shortTitle: "CMS",
    title: "Best CMS Tools for Successful Affiliates",
    description: "The content management systems that make publishing, organizing and scaling your affiliate site effortless.",
    cta: "Explore CMS Tools →",
    intro: "From the open-source workhorse to fully managed platforms — these CMS picks are built for affiliate content sites.",
    tools: [
      { slug: "wordpress", name: "WordPress", tagline: "The world's most flexible publishing platform.", ourScore: 9.7, price: "Free", bestFor: "Content-heavy affiliate sites", pros: ["Massive plugin library", "Full SEO control", "Owns your data"], bottomLine: "Still the default choice for serious affiliate publishers.", externalUrl: "https://wordpress.org", ...baseTrust(0) },
      { slug: "webflow", name: "Webflow", tagline: "Visual CMS with clean, fast output.", ourScore: 9.0, price: "$23/mo", bestFor: "Design-focused sites", pros: ["No-code visual builder", "Fast hosting included", "Clean code output"], bottomLine: "Best when design polish matters more than plugin depth.", externalUrl: "https://webflow.com", ...baseTrust(1) },
      { slug: "ghost", name: "Ghost", tagline: "Lean publishing platform built for creators.", ourScore: 8.7, price: "$9/mo", bestFor: "Newsletter + blog hybrids", pros: ["Built-in newsletter", "Fast by default", "Membership-ready"], bottomLine: "Ideal if your affiliate strategy is content + email.", externalUrl: "https://ghost.org", ...baseTrust(2) },
      { slug: "framer", name: "Framer", tagline: "Modern site builder with CMS collections.", ourScore: 8.3, price: "$15/mo", bestFor: "Landing pages", pros: ["Beautiful templates", "Quick to launch", "Decent SEO"], bottomLine: "Great for niche affiliate microsites and landers.", externalUrl: "https://framer.com", ...baseTrust(3) },
    ],
  },
  {
    slug: "link-cloaking",
    shortTitle: "Link Cloaking",
    title: "Best Link Cloaking Tools",
    description: "Hide, manage and track your affiliate links with the most reliable cloaking solutions on the market.",
    cta: "Explore Link Cloakers →",
    intro: "Cloak, manage and rotate affiliate links from one dashboard. Here are the tools we recommend in 2026.",
    tools: [
      { slug: "pretty-links", name: "Pretty Links Pro", tagline: "The most popular WordPress link manager.", ourScore: 9.4, price: "$99/yr", bestFor: "WordPress sites", pros: ["Auto-link keywords", "Detailed click reports", "Easy redirects"], bottomLine: "If you're on WordPress, this is the default pick.", externalUrl: "https://prettylinks.com", ...baseTrust(0) },
      { slug: "thirstyaffiliates", name: "ThirstyAffiliates", tagline: "Purpose-built cloaker for affiliate marketers.", ourScore: 9.1, price: "$79/yr", bestFor: "Affiliate-heavy blogs", pros: ["Geolocation redirects", "Amazon API integration", "Link health checks"], bottomLine: "Slightly more affiliate-focused than Pretty Links.", externalUrl: "https://thirstyaffiliates.com", ...baseTrust(1) },
      { slug: "clickmagick", name: "ClickMagick", tagline: "Hosted tracker + cloaker combo.", ourScore: 8.8, price: "$69/mo", bestFor: "Multi-platform tracking", pros: ["Works on any site", "Bot filtering", "Conversion attribution"], bottomLine: "Great when you publish outside WordPress too.", externalUrl: "https://clickmagick.com", ...baseTrust(2) },
      { slug: "geniuslink", name: "Geniuslink", tagline: "Smart link routing for global audiences.", ourScore: 8.4, price: "$5/mo+", bestFor: "Amazon affiliates", pros: ["Geo-aware Amazon links", "Affordable entry", "Detailed analytics"], bottomLine: "A must-have if your audience spans multiple countries.", externalUrl: "https://geniuslink.com", ...baseTrust(3) },
    ],
  },
  {
    slug: "sales-funnel",
    shortTitle: "Sales Funnel",
    title: "Best Sales Funnel Software",
    description: "Build high-converting funnels that turn affiliate traffic into paying customers without writing code.",
    cta: "Explore Funnel Tools →",
    intro: "Build, test and scale conversion funnels for your affiliate offers — without touching a line of code.",
    tools: [
      { slug: "clickfunnels", name: "ClickFunnels 2.0", tagline: "The original funnel builder, now fully rebuilt.", ourScore: 9.3, price: "$147/mo", bestFor: "Info-product affiliates", pros: ["Drag-and-drop builder", "Email + CRM built in", "Huge template library"], bottomLine: "Still the most complete funnel ecosystem.", externalUrl: "https://clickfunnels.com", ...baseTrust(0) },
      { slug: "systeme-io", name: "Systeme.io", tagline: "All-in-one platform with a generous free plan.", ourScore: 9.1, price: "Free – $97/mo", bestFor: "Bootstrapped affiliates", pros: ["Free forever plan", "Email + funnels + courses", "European hosting"], bottomLine: "Best price-to-power ratio on the market right now.", externalUrl: "https://systeme.io", ...baseTrust(1) },
      { slug: "kartra", name: "Kartra", tagline: "Polished all-in-one marketing suite.", ourScore: 8.9, price: "$119/mo", bestFor: "Established affiliates", pros: ["Behavior-based automation", "Built-in affiliate program", "Membership sites"], bottomLine: "Pick when you want everything under one roof.", externalUrl: "https://kartra.com", ...baseTrust(2) },
      { slug: "leadpages", name: "Leadpages", tagline: "Fast, conversion-focused landing pages.", ourScore: 8.4, price: "$49/mo", bestFor: "Lead generation", pros: ["Conversion-tested templates", "A/B testing", "Fast load times"], bottomLine: "Lightweight option when you only need landers.", externalUrl: "https://leadpages.com", ...baseTrust(3) },
    ],
  },
  {
    slug: "content-creation",
    shortTitle: "Content Creation",
    title: "Best Content Creation Tools for Affiliates",
    description: "AI writers, editors and design tools that help you produce quality content at scale.",
    cta: "Explore Content Tools →",
    intro: "From AI drafting to editorial polish — the content stack we use to publish faster without sacrificing quality.",
    tools: [
      { slug: "surfer-seo", name: "Surfer SEO", tagline: "AI-assisted writing optimized for search.", ourScore: 9.4, price: "$89/mo", bestFor: "SEO-driven content", pros: ["SERP-based briefs", "AI outline + draft", "On-page audit"], bottomLine: "Best end-to-end tool for ranking content.", externalUrl: "https://surferseo.com", ...baseTrust(0) },
      { slug: "jasper", name: "Jasper", tagline: "Brand-aware AI writer for teams.", ourScore: 9.0, price: "$49/mo", bestFor: "Brand-voice consistency", pros: ["Custom brand voice", "Team collaboration", "Templates library"], bottomLine: "Strong pick when multiple writers share a voice.", externalUrl: "https://jasper.ai", ...baseTrust(1) },
      { slug: "grammarly", name: "Grammarly Business", tagline: "The editing layer every publisher needs.", ourScore: 8.8, price: "$15/mo", bestFor: "Editorial polish", pros: ["Tone detection", "Plagiarism checks", "Works everywhere"], bottomLine: "Cheap insurance against sloppy copy.", externalUrl: "https://grammarly.com", ...baseTrust(2) },
      { slug: "canva-pro", name: "Canva Pro", tagline: "Design system in a browser.", ourScore: 8.6, price: "$13/mo", bestFor: "Visuals & social", pros: ["Massive template library", "Brand kit", "Quick exports"], bottomLine: "All the design firepower most affiliates will ever need.", externalUrl: "https://canva.com", ...baseTrust(3) },
    ],
  },
  {
    slug: "email",
    shortTitle: "Email Lists",
    title: "Best Tools for Building Email Lists",
    description: "Capture, nurture and convert subscribers with the email marketing platforms affiliates trust.",
    cta: "Explore Email Tools →",
    intro: "Your list is your most valuable asset. These are the email platforms we recommend for affiliate marketers.",
    tools: [
      { slug: "convertkit", name: "Kit (ConvertKit)", tagline: "Built specifically for creators.", ourScore: 9.5, price: "Free – $79/mo", bestFor: "Content creators", pros: ["Visual automations", "Creator-friendly pricing", "Built-in landing pages"], bottomLine: "The default pick for content-led affiliates.", externalUrl: "https://kit.com", ...baseTrust(0) },
      { slug: "activecampaign", name: "ActiveCampaign", tagline: "Advanced automation for serious marketers.", ourScore: 9.2, price: "$49/mo", bestFor: "Behavior-based funnels", pros: ["Best-in-class automations", "CRM included", "Deep segmentation"], bottomLine: "Pick when your funnel needs real branching logic.", externalUrl: "https://activecampaign.com", ...baseTrust(1) },
      { slug: "mailerlite", name: "MailerLite", tagline: "Simple, generous and affordable.", ourScore: 8.9, price: "Free – $39/mo", bestFor: "Beginners on a budget", pros: ["Generous free plan", "Clean editor", "Solid deliverability"], bottomLine: "Hard to beat at this price point.", externalUrl: "https://mailerlite.com", ...baseTrust(2) },
      { slug: "beehiiv", name: "beehiiv", tagline: "Newsletter platform with built-in monetization.", ourScore: 8.7, price: "Free – $99/mo", bestFor: "Newsletter affiliates", pros: ["Ad network built in", "Referral program", "Fast growth tools"], bottomLine: "Best choice if your affiliate play is a newsletter.", externalUrl: "https://beehiiv.com", ...baseTrust(3) },
    ],
  },
];

export const getCategory = (slug?: string | null) =>
  toolCategories.find((c) => c.slug === slug);
