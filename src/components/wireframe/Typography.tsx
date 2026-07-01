import { cn } from "@/lib/utils";

/**
 * Typography scale for Affiliate Tour wireframe.
 * Use these constants/components everywhere instead of ad-hoc text- classes,
 * so all pages share the same hierarchy.
 */

export const typo = {
  // Headings
  h1: "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
  h2: "text-2xl md:text-3xl font-bold leading-tight",
  h3: "text-xl md:text-2xl font-bold leading-snug",
  h4: "text-lg font-semibold",
  h5: "text-base font-semibold",

  // Body
  lead: "text-xl text-muted-foreground leading-relaxed",
  body: "text-base leading-relaxed",
  bodySmall: "text-[15px] text-muted-foreground leading-relaxed",

  // Stats / big numbers (prices, scores, ranks)
  stat: "text-2xl md:text-3xl font-bold",
  statSm: "text-xl font-bold leading-none",
  statLg: "text-4xl font-bold leading-none",

  // Meta / wireframe annotations (always mono)
  meta: "font-mono text-[13px] text-muted-foreground",
  metaLabel: "font-mono text-[13px] text-muted-foreground uppercase tracking-wider",
  link: "font-mono text-[13px] text-muted-foreground hover:text-foreground transition-colors",
} as const;

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export const H1 = ({ className, ...p }: HeadingProps) => (
  <h1 className={cn(typo.h1, className)} {...p} />
);
export const H2 = ({ className, ...p }: HeadingProps) => (
  <h2 className={cn(typo.h2, className)} {...p} />
);
export const H3 = ({ className, ...p }: HeadingProps) => (
  <h3 className={cn(typo.h3, className)} {...p} />
);
export const H4 = ({ className, ...p }: HeadingProps) => (
  <h4 className={cn(typo.h4, className)} {...p} />
);
export const H5 = ({ className, ...p }: HeadingProps) => (
  <h5 className={cn(typo.h5, className)} {...p} />
);

export const Lead = ({ className, ...p }: ParagraphProps) => (
  <p className={cn(typo.lead, className)} {...p} />
);
export const BodySmall = ({ className, ...p }: ParagraphProps) => (
  <p className={cn(typo.bodySmall, className)} {...p} />
);
export const Meta = ({ className, ...p }: SpanProps) => (
  <span className={cn(typo.meta, className)} {...p} />
);
export const MetaLabel = ({ className, ...p }: SpanProps) => (
  <span className={cn(typo.metaLabel, className)} {...p} />
);

/**
 * Eyebrow — small dashed-bordered kicker placed above h1/h2.
 * Wireframe-styled and consistent across every page.
 */
export const Eyebrow = ({ className, ...p }: DivProps) => (
  <span
    className={cn(
      "inline-block font-mono text-[13px] text-muted-foreground uppercase tracking-wider border-2 border-dashed border-border rounded px-2.5 py-1",
      className,
    )}
    {...p}
  />
);
