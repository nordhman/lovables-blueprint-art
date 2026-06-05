import type { RiskLevel } from "@/data/networkVerticals";

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

const labels: Record<RiskLevel, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  "very-high": "Very High",
};

// grayscale fill intensity instead of color
const fills: Record<RiskLevel, string> = {
  low: "bg-muted/30",
  medium: "bg-muted/60",
  high: "bg-foreground/10",
  "very-high": "bg-foreground/20",
};

export const RiskBadge = ({ level, className = "" }: RiskBadgeProps) => (
  <span
    className={`inline-flex items-center gap-1.5 border-2 border-dashed border-border rounded px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-foreground ${fills[level]} ${className}`}
  >
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/70" />
    Risk: {labels[level]}
  </span>
);
