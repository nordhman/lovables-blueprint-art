import { Bot, PenLine } from "lucide-react";

interface SourceBadgeProps {
  type: "auto" | "manual";
  label: string;
}

export const SourceBadge = ({ type, label }: SourceBadgeProps) => {
  const isAuto = type === "auto";
  const Icon = isAuto ? Bot : PenLine;
  return (
    <span
      className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider border border-dashed rounded px-1.5 py-0.5 ${
        isAuto
          ? "border-border text-muted-foreground bg-muted"
          : "border-foreground text-foreground"
      }`}
    >
      <Icon className="h-3 w-3" />
      {isAuto ? "auto" : "manual"}: {label}
    </span>
  );
};
