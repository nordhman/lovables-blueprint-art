import { Link } from "react-router-dom";

interface WireframeCTAProps {
  label: string;
  to?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export const WireframeCTA = ({ label, to = "#", variant = "primary", className = "" }: WireframeCTAProps) => {
  const base = "inline-block px-6 py-3 border-2 border-dashed rounded font-medium text-sm transition-colors text-center";
  const styles = variant === "primary"
    ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
    : "border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {label}
    </Link>
  );
};
