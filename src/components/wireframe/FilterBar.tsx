import { useState } from "react";
import { MetaLabel } from "./Typography";
import { commissionModels, trafficTypes, riskLevels } from "@/data/networkVerticals";

/**
 * Visual-only filter bar. Selection state is local; no actual list filtering.
 * Used to communicate the intended UX in the wireframe prototype.
 */
export const FilterBar = () => {
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const toggle = (group: string, value: string) => {
    setSelected((prev) => {
      const cur = prev[group] || [];
      return {
        ...prev,
        [group]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
      };
    });
  };

  const Chip = ({ group, value, label }: { group: string; value: string; label: string }) => {
    const active = (selected[group] || []).includes(value);
    return (
      <button
        type="button"
        onClick={() => toggle(group, value)}
        className={`border-2 border-dashed rounded px-2.5 py-1 font-mono text-[12px] uppercase tracking-wider transition-colors ${
          active
            ? "border-foreground bg-foreground text-background"
            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="border-2 border-dashed border-border rounded p-4 bg-card space-y-4">
      <div>
        <MetaLabel className="block mb-2">Commission</MetaLabel>
        <div className="flex flex-wrap gap-1.5">
          {commissionModels.map((m) => (
            <Chip key={m} group="commission" value={m} label={m} />
          ))}
        </div>
      </div>
      <div>
        <MetaLabel className="block mb-2">Traffic type</MetaLabel>
        <div className="flex flex-wrap gap-1.5">
          {trafficTypes.map((t) => (
            <Chip key={t} group="traffic" value={t} label={t} />
          ))}
        </div>
      </div>
      <div>
        <MetaLabel className="block mb-2">Risk level</MetaLabel>
        <div className="flex flex-wrap gap-1.5">
          {riskLevels.map((r) => (
            <Chip key={r.value} group="risk" value={r.value} label={r.label} />
          ))}
        </div>
      </div>
      <div>
        <MetaLabel className="block mb-2">Beginner-friendly</MetaLabel>
        <div className="flex flex-wrap gap-1.5">
          <Chip group="beginner" value="yes" label="Yes" />
          <Chip group="beginner" value="no" label="No" />
        </div>
      </div>
    </div>
  );
};
