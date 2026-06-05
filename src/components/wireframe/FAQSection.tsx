import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { H5, BodySmall } from "./Typography";

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQSection = ({ items }: { items: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-2 border-dashed border-border rounded bg-card divide-y-2 divide-dashed divide-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-muted/30 transition-colors"
            >
              <H5>{it.q}</H5>
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="px-4 pb-4">
                <BodySmall>{it.a}</BodySmall>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
