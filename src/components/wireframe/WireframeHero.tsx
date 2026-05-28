import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroSize = "xl" | "lg" | "sm";

const SIZE_CLASSES: Record<HeroSize, string> = {
  xl: "py-14 md:py-20",
  lg: "py-12 md:py-14",
  sm: "py-8 md:py-10",
};

interface WireframeHeroProps {
  /**
   * xl  – Startsida / största entrén
   * lg  – Pelarsidor och landningssidor
   * sm  – List- och utility-sidor
   */
  size?: HeroSize;
  /** Streckad bottenkant + bg-muted band. Default: true. */
  bordered?: boolean;
  className?: string;
  /** Klasser för inre container-wrappern. */
  innerClassName?: string;
  children: ReactNode;
}

/**
 * Standardiserat hero-band så att alla sidor delar samma vertikala rytm.
 * Använd alltid denna istället för ad-hoc `<section className="py-...">`.
 */
export const WireframeHero = ({
  size = "lg",
  bordered = true,
  className,
  innerClassName,
  children,
}: WireframeHeroProps) => (
  <section
    className={cn(
      bordered && "border-b-2 border-dashed border-border bg-muted/30",
      SIZE_CLASSES[size],
      className,
    )}
  >
    <div className={cn("container mx-auto px-4", innerClassName)}>{children}</div>
  </section>
);
