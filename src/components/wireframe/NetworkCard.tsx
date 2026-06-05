import { Link } from "react-router-dom";
import { WireframeCard } from "./WireframeCard";
import { PlaceholderImage } from "./PlaceholderImage";
import { H4, BodySmall, Meta, MetaLabel } from "./Typography";
import { CommissionModelList } from "./CommissionModelBadge";
import { RatingBadge } from "./RatingBadge";
import { RiskBadge } from "./RiskBadge";
import { Check, X, ArrowRight } from "lucide-react";
import type { Network } from "@/data/networkVerticals";

export const NetworkCard = ({ network }: { network: Network }) => (
  <WireframeCard className="flex flex-col">
    <div className="flex items-start gap-3 mb-3">
      <PlaceholderImage label="logo" aspectRatio="square" className="w-16 h-16 shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <H4 className="truncate">{network.name}</H4>
          <RatingBadge score={network.score} size="sm" />
        </div>
        <Meta className="block mt-0.5">Known for: {network.knownFor}</Meta>
      </div>
    </div>

    <BodySmall>{network.shortDescription}</BodySmall>

    <div className="mt-3 flex flex-wrap items-center gap-2">
      <RiskBadge level={network.riskLevel} />
      <CommissionModelList models={network.commissionModels} />
    </div>

    <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
      <div>
        <MetaLabel className="block mb-1">Pros</MetaLabel>
        <ul className="space-y-0.5">
          {network.pros.slice(0, 2).map((p) => (
            <li key={p} className="flex items-start gap-1">
              <Check className="h-3 w-3 mt-0.5 shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <MetaLabel className="block mb-1">Cons</MetaLabel>
        <ul className="space-y-0.5">
          {network.cons.slice(0, 2).map((c) => (
            <li key={c} className="flex items-start gap-1 text-muted-foreground">
              <X className="h-3 w-3 mt-0.5 shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-4 pt-3 border-t-2 border-dashed border-border flex items-center justify-between">
      <Link
        to={`/networks/${network.vertical}/${network.slug}`}
        className="inline-flex items-center gap-1 font-mono text-[13px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
      >
        Read review <ArrowRight className="h-3 w-3" />
      </Link>
      <a
        href={network.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[12px] text-muted-foreground hover:text-foreground"
      >
        Visit site ↗
      </a>
    </div>
  </WireframeCard>
);
