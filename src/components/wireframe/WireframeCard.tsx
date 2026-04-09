import { ReactNode } from "react";

interface WireframeCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const WireframeCard = ({ children, className = "", onClick }: WireframeCardProps) => (
  <div
    className={`border-2 border-dashed border-border bg-card rounded p-4 ${onClick ? "cursor-pointer hover:border-foreground transition-colors" : ""} ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);
