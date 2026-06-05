interface RatingBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const RatingBadge = ({ score, size = "md", className = "" }: RatingBadgeProps) => {
  const sizes = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-lg px-3 py-1.5 font-bold",
  };
  return (
    <span
      className={`inline-flex items-baseline gap-1 border-2 border-dashed border-border rounded font-mono bg-card ${sizes[size]} ${className}`}
    >
      <span className="font-semibold text-foreground">{score.toFixed(1)}</span>
      <span className="text-muted-foreground text-[0.7em]">/ 10</span>
    </span>
  );
};
