export interface Course {
  slug: string;
  title: string;
  description: string;
  type: "own" | "affiliate";
  level: "beginner" | "intermediate" | "advanced";
  modules: number;
  price: string;
  partner?: string;
}

export interface Tool {
  name: string;
  category: string;
  description: string;
  rating: number;
  price: string;
  slug: string;
}

export interface Network {
  name: string;
  description: string;
  commission: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  relatedLanding?: string;
}

export const courses: Course[] = [
  { slug: "affiliate-fundamentals", title: "Affiliate Marketing Fundamentals", description: "Learn the basics of affiliate marketing from scratch. Perfect for beginners.", type: "own", level: "beginner", modules: 8, price: "Free" },
  { slug: "seo-for-affiliates", title: "SEO for Affiliate Sites", description: "Advanced SEO strategies specifically for affiliate sites and content pages.", type: "own", level: "intermediate", modules: 12, price: "$49" },
  { slug: "content-marketing-mastery", title: "Content Marketing Mastery", description: "Create content that converts. From research to publishing.", type: "own", level: "advanced", modules: 15, price: "$79" },
  { slug: "authority-hacker-pro", title: "Authority Hacker Pro", description: "Complete system for building authority sites that generate passive income.", type: "affiliate", level: "advanced", modules: 20, price: "$997", partner: "Authority Hacker" },
  { slug: "affiliate-lab", title: "Affiliate Lab", description: "Matt Diggity's proven method for ranking affiliate sites on Google.", type: "affiliate", level: "intermediate", modules: 16, price: "$997", partner: "Matt Diggity" },
  { slug: "fat-stacks-bundle", title: "Fat Stacks Bundle", description: "Niche sites and display ads strategy for passive income.", type: "affiliate", level: "beginner", modules: 10, price: "$299", partner: "Jon Dykstra" },
];

export const tools: Tool[] = [
  { name: "Ahrefs", category: "SEO", description: "Powerful SEO tool for keyword research, backlink analysis, and site audits.", rating: 5, price: "$99/mo", slug: "ahrefs" },
  { name: "SiteGround", category: "Hosting", description: "Fast and reliable hosting optimized for WordPress.", rating: 4, price: "€3.99/mo", slug: "siteground" },
  { name: "ConvertKit", category: "Email", description: "Email marketing built for creators and bloggers.", rating: 4, price: "$29/mo", slug: "convertkit" },
  { name: "Thrive Themes", category: "WordPress", description: "Conversion-optimized WordPress themes and plugins.", rating: 4, price: "$299/yr", slug: "thrive-themes" },
  { name: "Voluum", category: "Tracking", description: "Advanced affiliate tracking and campaign optimization.", rating: 5, price: "$199/mo", slug: "voluum" },
  { name: "Canva Pro", category: "Design", description: "Create professional graphics without design skills.", rating: 4, price: "$12.99/mo", slug: "canva-pro" },
];

export const networks: Network[] = [
  { name: "Adtraction", description: "Leading Nordic affiliate network focused on Scandinavian advertisers.", commission: "Varies by program", slug: "adtraction" },
  { name: "Awin", description: "Global affiliate network with thousands of advertisers.", commission: "Varies by program", slug: "awin" },
  { name: "Amazon Associates", description: "The world's largest e-commerce platform's affiliate program.", commission: "1-10% per category", slug: "amazon-associates" },
  { name: "ShareASale", description: "Large network focused on niche products and services.", commission: "Varies by program", slug: "shareasale" },
  { name: "Tradedoubler", description: "European network with strong Scandinavian advertisers.", commission: "Varies by program", slug: "tradedoubler" },
];

export const blogPosts: BlogPost[] = [
  { slug: "how-to-start-affiliate-marketing", title: "How to Start Affiliate Marketing in 2026", excerpt: "A complete guide for getting started with affiliate marketing. We cover everything from choosing a niche to earning your first commission.", category: "Guides", date: "2026-03-15", relatedLanding: "/best-affiliate-courses" },
  { slug: "best-seo-tools", title: "The 7 Best SEO Tools for Affiliate Sites", excerpt: "We compare the most popular SEO tools and help you choose the right one for your affiliate business.", category: "Tools", date: "2026-03-10", relatedLanding: "/best-affiliate-tools" },
  { slug: "choosing-affiliate-network", title: "How to Choose the Right Affiliate Network", excerpt: "A guide to the biggest affiliate networks and which ones are best for different types of sites.", category: "Networks", date: "2026-03-05", relatedLanding: "/best-affiliate-networks" },
  { slug: "content-strategy-affiliates", title: "Content Strategy for Affiliate Sites", excerpt: "Learn how to create content that ranks on Google and converts visitors into buyers.", category: "Strategy", date: "2026-02-28", relatedLanding: "/best-affiliate-courses" },
  { slug: "passive-income-affiliate", title: "Passive Income Through Affiliate Marketing", excerpt: "Is affiliate marketing really passive income? We bust the myths and show how to build sustainable revenue streams.", category: "Guides", date: "2026-02-20", relatedLanding: "/courses" },
  { slug: "tracking-and-optimization", title: "Tracking and Optimizing Affiliate Links", excerpt: "Learn how to track and optimize your affiliate links for maximum conversion.", category: "Tools", date: "2026-02-15", relatedLanding: "/best-affiliate-tools" },
];

export const categories = ["All", "Guides", "Tools", "Networks", "Strategy"];
