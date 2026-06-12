export interface PartModule {
  slug: string;
  title: string;
  summary: string;
  readMin: number;
}

export interface CoursePart {
  slug: string;
  number: 1 | 2;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  outcomes: string[];
  modules: PartModule[];
}

export const courseParts: CoursePart[] = [
  {
    slug: "part-1",
    number: 1,
    eyebrow: "Part 1 of 2 · Foundations",
    title: "How to Start Affiliate Marketing",
    tagline: "Launch your affiliate business — from niche to first live links.",
    description:
      "Everything you need to launch your affiliate business — from choosing the right niche to setting up your platform and getting your first links live.",
    audience: "Best for: complete beginners with no site or affiliate accounts yet.",
    outcomes: [
      "Pick a niche you can actually win in",
      "Set up the right platform for your goals",
      "Join your first affiliate programs",
      "Publish content with your first live affiliate links",
    ],
    modules: [
      { slug: "choose-your-niche", title: "Choosing your niche", summary: "A simple framework for picking a niche with demand, intent and monetization potential.", readMin: 12 },
      { slug: "audience-and-positioning", title: "Audience & positioning", summary: "Who you're for, what you stand for, and why people should listen to you.", readMin: 10 },
      { slug: "pick-your-platform", title: "Pick your platform", summary: "Blog, YouTube, newsletter or social — pros, cons and how to choose.", readMin: 11 },
      { slug: "set-up-your-site", title: "Set up your site", summary: "Domain, hosting, theme — the minimum viable setup, no overthinking.", readMin: 14 },
      { slug: "join-affiliate-programs", title: "Join your first programs", summary: "Networks vs. direct programs, what to apply for, what to skip.", readMin: 9 },
      { slug: "first-content-and-links", title: "First content & live links", summary: "Publish your first 3 pieces and get your first affiliate links earning.", readMin: 13 },
    ],
  },
  {
    slug: "part-2",
    number: 2,
    eyebrow: "Part 2 of 2 · Growth & Scale",
    title: "Grow & Scale Your Affiliate Income",
    tagline: "Move from small wins to consistent, scalable affiliate income.",
    description:
      "Your niche is defined, your platform is live, and you've joined your first affiliate programs. Now go beyond the basics with the strategies that drive consistent, scalable income.",
    audience: "Best for: you have a live site and your first links — now you want traffic and revenue.",
    outcomes: [
      "Drive targeted traffic through organic and paid strategies",
      "Track and optimize what's working",
      "Scale your business with systems, tools and support",
      "Avoid common mistakes that stall growth",
    ],
    modules: [
      { slug: "organic-traffic", title: "Organic traffic strategies", summary: "SEO basics, content clusters and the long game of compounding traffic.", readMin: 15 },
      { slug: "paid-traffic", title: "Paid traffic essentials", summary: "When paid makes sense, where to start, and how to not lose money.", readMin: 12 },
      { slug: "email-and-retention", title: "Email & retention", summary: "Turn one-time visitors into a list that earns on autopilot.", readMin: 11 },
      { slug: "tracking-and-attribution", title: "Tracking & attribution", summary: "Know what's actually making money — and double down on it.", readMin: 10 },
      { slug: "conversion-optimization", title: "Conversion optimization", summary: "Small tweaks to copy, layout and CTAs that lift affiliate revenue.", readMin: 12 },
      { slug: "systems-and-scale", title: "Systems, tools & scale", summary: "Outsource, automate and build the stack that lets you scale.", readMin: 14 },
      { slug: "common-mistakes", title: "Common mistakes to avoid", summary: "The traps that stall most affiliate businesses — and how to dodge them.", readMin: 8 },
    ],
  },
];

export const getCoursePart = (slug: string) => courseParts.find((p) => p.slug === slug);
