import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import type { Network } from "@/data/networkVerticals";
import { RatingBadge } from "./RatingBadge";
import { Meta, MetaLabel } from "./Typography";

const VisitButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer nofollow sponsored"
    className="inline-flex items-center justify-center gap-1 border-2 border-dashed border-foreground bg-foreground text-background rounded px-3 py-2 font-mono text-[12px] uppercase tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap w-full max-w-[116px]"
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

const TrustpilotBadge = ({ score }: { score: number }) => (
  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground whitespace-nowrap">
    <Star className="h-3 w-3 fill-foreground text-foreground" />
    <span className="text-foreground font-semibold">{score.toFixed(1)}</span>
    <span className="text-[10px]">/ 5</span>
  </span>
);

const Th = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <th className={`text-left px-4 py-3 font-mono text-[11px] text-muted-foreground uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

export const NetworkComparisonTable = ({ networks }: { networks: Network[] }) => (
  <div className="border-2 border-dashed border-border rounded bg-card">
    {/* Desktop: full table */}
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full text-sm table-fixed">
        <colgroup>
          <col className="w-[17%]" />
          <col className="w-[34%]" />
          <col className="w-[10%]" />
          <col className="w-[10%]" />
          <col className="w-[9%]" />
          <col className="w-[10%]" />
          <col className="w-[10%]" />
        </colgroup>
        <thead>
          <tr className="border-b-2 border-dashed border-border bg-muted/30">
            <Th>Network</Th>
            <Th>Description</Th>
            <Th>Our score</Th>
            <Th>Trustpilot</Th>
            <Th>Offers</Th>
            <Th>Min&nbsp;payout</Th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {networks.map((n) => (
            <tr
              key={`${n.vertical}-${n.slug}`}
              className="border-b border-dashed border-border last:border-0 align-middle"
            >
              <td className="px-4 py-3.5 font-semibold">{n.name}</td>
              <td className="px-4 py-3.5">
                <p className="text-[13px] text-muted-foreground leading-snug line-clamp-2">
                  {n.shortDescription}
                </p>
                <Link
                  to={`/networks/${n.vertical}/${n.slug}`}
                  className="mt-2 inline-flex items-center font-mono text-[12px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
                >
                  Read review →
                </Link>
              </td>
              <td className="px-4 py-3.5">
                <RatingBadge score={n.score} size="sm" />
              </td>
              <td className="px-4 py-3.5">
                <TrustpilotBadge score={n.trustpilotScore} />
              </td>
              <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                {n.offerCount}
              </td>
              <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                {n.minPayout}
              </td>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <div className="flex justify-center">
                  <VisitButton href={n.externalUrl} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Tablet: compact table without description column */}
    <div className="hidden sm:block lg:hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-dashed border-border bg-muted/30">
            <Th>Network</Th>
            <Th>Our&nbsp;score</Th>
            <Th>Trustpilot</Th>
            <Th>Offers</Th>
            <Th>Min&nbsp;payout</Th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {networks.map((n) => (
            <tr
              key={`${n.vertical}-${n.slug}`}
              className="border-b border-dashed border-border last:border-0 align-middle"
            >
              <td className="px-4 py-3.5">
                <div className="font-semibold">{n.name}</div>
                <p className="mt-1 text-[12.5px] text-muted-foreground leading-snug line-clamp-2">
                  {n.shortDescription}
                </p>
                <Link
                  to={`/networks/${n.vertical}/${n.slug}`}
                  className="mt-2 inline-flex items-center font-mono text-[12px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
                >
                  Read review →
                </Link>
              </td>
              <td className="px-4 py-3.5">
                <RatingBadge score={n.score} size="sm" />
              </td>
              <td className="px-4 py-3.5">
                <TrustpilotBadge score={n.trustpilotScore} />
              </td>
              <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                {n.offerCount}
              </td>
              <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                {n.minPayout}
              </td>
              <td className="px-4 py-3.5 whitespace-nowrap text-right">
                <VisitButton href={n.externalUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile: stacked rows */}
    <div className="sm:hidden divide-y-2 divide-dashed divide-border">
      {networks.map((n) => (
        <div key={`${n.vertical}-${n.slug}`} className="p-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <span className="font-semibold text-[15px]">{n.name}</span>
            <RatingBadge score={n.score} size="sm" />
          </div>
          <p className="text-[13px] text-muted-foreground leading-snug">
            {n.shortDescription}
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <MetaLabel className="block text-[10px]">Trustpilot</MetaLabel>
              <TrustpilotBadge score={n.trustpilotScore} />
            </div>
            <div>
              <MetaLabel className="block text-[10px]">Offers</MetaLabel>
              <Meta>{n.offerCount}</Meta>
            </div>
            <div>
              <MetaLabel className="block text-[10px]">Min payout</MetaLabel>
              <Meta>{n.minPayout}</Meta>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <VisitButton href={n.externalUrl} />
            <div className="text-center">
              <ReviewLink to={`/networks/${n.vertical}/${n.slug}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
