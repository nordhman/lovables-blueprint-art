import { Link } from "react-router-dom";
import { WireframeCard } from "./WireframeCard";
import { H4, BodySmall, Meta } from "./Typography";
import type { Vertical } from "@/data/networkVerticals";
import { ArrowRight } from "lucide-react";

export const VerticalCard = ({ vertical }: { vertical: Vertical }) => (
  <WireframeCard className="flex flex-col">
    <div className="flex items-start justify-between gap-2 mb-2">
      <H4>{vertical.title}</H4>
      <Meta>{vertical.networkCount} networks</Meta>
    </div>
    <BodySmall className="flex-1">{vertical.shortDescription}</BodySmall>
    <div className="mt-4">
      <Link
        to={`/networks/${vertical.slug}`}
        className="inline-flex items-center gap-1 font-mono text-[13px] text-foreground border-b-2 border-dashed border-foreground hover:opacity-70"
      >
        View networks <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  </WireframeCard>
);
