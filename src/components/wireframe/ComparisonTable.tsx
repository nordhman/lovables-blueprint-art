import { Link } from "react-router-dom";
import type { Network, BestFor } from "@/data/networkVerticals";
import { RatingBadge } from "./RatingBadge";
import { RiskBadge } from "./RiskBadge";
import { CommissionModelList } from "./CommissionModelBadge";

const bestForLabels: Record<BestFor, string> = {
  overall: "Best overall",
  beginners: "Best for beginners",
  smartlinks: "Best smartlink",
  "high-payouts": "Best for high payouts",
};

export const ComparisonTable = ({ networks }: { networks: Network[] }) => (
  <div className="border-2 border-dashed border-border rounded overflow-x-auto bg-card">
    <table className="w-full text-sm min-w-[820px]">
      <thead>
        <tr className="border-b-2 border-dashed border-border bg-muted/30">
          <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Network</th>
          <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Best for</th>
          <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Commission</th>
          <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">GEO focus</th>
          <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Risk</th>
          <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Score</th>
          <th className="p-3"></th>
        </tr>
      </thead>
      <tbody>
        {networks.map((n) => (
          <tr key={n.slug} className="border-b border-dashed border-border last:border-0 align-top">
            <td className="p-3 font-semibold">{n.name}</td>
            <td className="p-3 text-muted-foreground text-xs">{n.bestFor ? bestForLabels[n.bestFor] : "—"}</td>
            <td className="p-3"><CommissionModelList models={n.commissionModels} /></td>
            <td className="p-3 font-mono text-xs text-muted-foreground">{n.geoFocus.join(", ")}</td>
            <td className="p-3"><RiskBadge level={n.riskLevel} /></td>
            <td className="p-3"><RatingBadge score={n.score} size="sm" /></td>
            <td className="p-3 whitespace-nowrap">
              <Link
                to={`/networks/${n.vertical}/${n.slug}`}
                className="font-mono text-[12px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
              >
                Review →
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
