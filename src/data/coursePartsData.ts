export interface CourseChapter {
  slug: string;
  title: string;
  summary: string;
  readMin: number;
}

export const courseChapters: CourseChapter[] = [
  { slug: "choose-your-niche", title: "Choosing your niche", summary: "A simple framework for picking a niche with demand, intent and monetization potential.", readMin: 12 },
  { slug: "audience-and-positioning", title: "Audience & positioning", summary: "Who you're for, what you stand for, and why people should listen to you.", readMin: 10 },
  { slug: "pick-your-platform", title: "Pick your platform", summary: "Blog, YouTube, newsletter or social — pros, cons and how to choose.", readMin: 11 },
  { slug: "set-up-your-site", title: "Set up your site", summary: "Domain, hosting, theme — the minimum viable setup, no overthinking.", readMin: 14 },
  { slug: "join-affiliate-programs", title: "Join your first programs", summary: "Networks vs. direct programs, what to apply for, what to skip.", readMin: 9 },
  { slug: "first-content-and-links", title: "First content & live links", summary: "Publish your first 3 pieces and get your first affiliate links earning.", readMin: 13 },
  { slug: "organic-traffic", title: "Organic traffic strategies", summary: "SEO basics, content clusters and the long game of compounding traffic.", readMin: 15 },
  { slug: "paid-traffic", title: "Paid traffic essentials", summary: "When paid makes sense, where to start, and how to not lose money.", readMin: 12 },
  { slug: "email-and-retention", title: "Email & retention", summary: "Turn one-time visitors into a list that earns on autopilot.", readMin: 11 },
  { slug: "tracking-and-attribution", title: "Tracking & attribution", summary: "Know what's actually making money — and double down on it.", readMin: 10 },
  { slug: "conversion-optimization", title: "Conversion optimization", summary: "Small tweaks to copy, layout and CTAs that lift affiliate revenue.", readMin: 12 },
  { slug: "systems-and-scale", title: "Systems, tools & scale", summary: "Outsource, automate and build the stack that lets you scale.", readMin: 14 },
  { slug: "common-mistakes", title: "Common mistakes to avoid", summary: "The traps that stall most affiliate businesses — and how to dodge them.", readMin: 8 },
];

export const courseOutcomes: string[] = [
  "Pick a niche you can actually win in",
  "Set up your platform and join affiliate programs",
  "Publish content with your first live affiliate links",
  "Drive targeted traffic — organic and paid",
  "Track, optimize and scale what's working",
  "Avoid the common mistakes that stall growth",
];
