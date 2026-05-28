import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  to?: string; // if omitted → current page
};

interface WireframeBreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Optional right-aligned slot (e.g. admin action) */
  right?: ReactNode;
  /** Extra classes on inner container, e.g. "max-w-6xl" to match a page's content width. */
  innerClassName?: string;
}

/**
 * Consistent breadcrumbs bar for all /courses/* pages.
 * Always placed directly under the header, above the hero.
 * Wireframe style: dashed bottom border, mono uppercase tone.
 */
export const WireframeBreadcrumbs = ({ items, right, innerClassName }: WireframeBreadcrumbsProps) => {
  if (!items?.length) return null;

  // Mobile: just show "‹ {previous}"
  const previous = items.length >= 2 ? items[items.length - 2] : items[0];

  return (
    <div className="border-b-2 border-dashed border-border bg-muted/20">
      <div className={cn("container mx-auto px-4 py-3 flex items-center justify-between gap-3", innerClassName)}>

        {/* Mobile: single back link */}
        <nav className="flex sm:hidden items-center font-mono text-xs text-muted-foreground" aria-label="Breadcrumb">
          {previous?.to ? (
            <Link to={previous.to} className="inline-flex items-center gap-1 hover:text-foreground">
              <ChevronLeft className="h-3 w-3" />
              {previous.label}
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1">
              <ChevronLeft className="h-3 w-3" />
              {previous?.label}
            </span>
          )}
        </nav>

        {/* Desktop: full trail */}
        <nav
          className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground min-w-0"
          aria-label="Breadcrumb"
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <div key={`${item.label}-${i}`} className="flex items-center gap-2 min-w-0">
                {item.to && !isLast ? (
                  <Link to={item.to} className="hover:text-foreground whitespace-nowrap">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`truncate ${isLast ? "text-foreground font-semibold" : ""}`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="h-3 w-3 shrink-0" />}
              </div>
            );
          })}
        </nav>

        {right && <div className="shrink-0">{right}</div>}
      </div>
    </div>
  );
};

export default WireframeBreadcrumbs;
