import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Network } from "@/data/networkVerticals";
import { RatingBadge } from "./RatingBadge";
import { Meta, MetaLabel } from "./Typography";

const VisitButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer nofollow sponsored"
    className="inline-flex items-center justify-center gap-1 border-2 border-dashed border-foreground bg-foreground text-background rounded px-3 py-1.5 font-mono text-[12px] uppercase tracking-wider hover:opacity-80 transition-opacity"
  >
    Visit site <ArrowUpRight className="h-3 w-3" />
  </a>
);

const ReviewLink = ({ to }: { to: string }) => (
  <Link
    to={to}
    className="inline-flex items-center font-mono text-[12px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70 whitespace-nowrap"
  >
    Read review →
  </Link>
);

export const NetworkComparisonTable = ({ networks }: { networks: Network[] }) => (
  <div className="border-2 border-dashed border-border rounded bg-card">
    {/* Desktop / tablet: table */}
    <div className="hidden sm:block overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-dashed border-border bg-muted/30">
            <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider w-[44%]">Network</th>
            <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Score</th>
            <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Offers</th>
            <th className="text-left p-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Min payout</th>
            <th className="p-3"></th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {networks.map((n) => (
            <tr key={`${n.vertical}-${n.slug}`} className="border-b border-dashed border-border last:border-0 align-middle">
              <td className="p-3">
                <div className="font-semibold">{n.name}</div>
                <p className="mt-0.5 text-[12.5px] text-muted-foreground leading-snug line-clamp-2 max-w-prose">
                  {n.shortDescription}
                </p>
              </td>
              <td className="p-3"><RatingBadge score={n.score} size="sm" /></td>
              <td className="p-3 font-mono text-xs text-muted-foreground whitespace-nowrap">{n.offerCount}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground whitespace-nowrap">{n.minPayout}</td>
              <td className="p-3 whitespace-nowrap"><VisitButton href={n.externalUrl} /></td>
              <td className="p-3 whitespace-nowrap text-right">
                <ReviewLink to={`/networks/${n.vertical}/${n.slug}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile: stacked rows */}
    <div className="sm:hidden divide-y-2 divide-dashed divide-border">
      {networks.map((n) => (
        <div key={`${n.vertical}-${n.slug}`} className="p-3 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <span className="font-semibold text-[15px]">{n.name}</span>
            <RatingBadge score={n.score} size="sm" />
          </div>
          <p className="text-[13px] text-muted-foreground leading-snug">
            {n.shortDescription}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <MetaLabel className="block">Offers</MetaLabel>
              <Meta>{n.offerCount}</Meta>
            </div>
            <div>
              <MetaLabel className="block">Min payout</MetaLabel>
              <Meta>{n.minPayout}</Meta>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 pt-1">
            <VisitButton href={n.externalUrl} />
            <ReviewLink to={`/networks/${n.vertical}/${n.slug}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
);
