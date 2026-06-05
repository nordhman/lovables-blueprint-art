import type { CommissionModel } from "@/data/networkVerticals";

interface CommissionModelBadgeProps {
  model: CommissionModel;
  className?: string;
}

export const CommissionModelBadge = ({ model, className = "" }: CommissionModelBadgeProps) => (
  <span
    className={`inline-block border-2 border-dashed border-border rounded px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-foreground bg-card ${className}`}
  >
    {model}
  </span>
);

export const CommissionModelList = ({ models, className = "" }: { models: CommissionModel[]; className?: string }) => (
  <div className={`flex flex-wrap gap-1 ${className}`}>
    {models.map((m) => (
      <CommissionModelBadge key={m} model={m} />
    ))}
  </div>
);
