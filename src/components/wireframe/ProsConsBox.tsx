import { Check, X } from "lucide-react";
import { H5, BodySmall } from "./Typography";

interface ProsConsBoxProps {
  pros: string[];
  cons: string[];
  className?: string;
}

export const ProsConsBox = ({ pros, cons, className = "" }: ProsConsBoxProps) => (
  <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
    <div className="border-2 border-dashed border-border rounded p-4 bg-card">
      <H5 className="mb-3">Pros</H5>
      <ul className="space-y-2">
        {pros.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <Check className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
            <BodySmall className="text-foreground">{p}</BodySmall>
          </li>
        ))}
      </ul>
    </div>
    <div className="border-2 border-dashed border-border rounded p-4 bg-card">
      <H5 className="mb-3">Cons</H5>
      <ul className="space-y-2">
        {cons.map((c) => (
          <li key={c} className="flex items-start gap-2">
            <X className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
            <BodySmall>{c}</BodySmall>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
