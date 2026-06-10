import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Meta } from "./Typography";

interface DirectoryListRowProps {
  title: string;
  meta?: string;
  description?: string;
  to: string;
}

/**
 * Compact list row used on mobile for directory listings
 * (verticals, regions). Dashed-border wireframe style.
 */
export const DirectoryListRow = ({ title, meta, description, to }: DirectoryListRowProps) => (
  <Link
    to={to}
    className="group flex items-center gap-3 border-2 border-dashed border-border bg-card rounded p-3 hover:border-foreground transition-colors"
  >
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-[15px] truncate">{title}</span>
        {meta && <Meta className="shrink-0">{meta}</Meta>}
      </div>
      {description && (
        <p className="mt-0.5 text-[12px] text-muted-foreground line-clamp-1">{description}</p>
      )}
    </div>
    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
  </Link>
);
