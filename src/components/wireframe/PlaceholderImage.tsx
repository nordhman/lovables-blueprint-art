import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "portrait" | "4-3";
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[2/1]",
  portrait: "aspect-[3/4]",
  "4-3": "aspect-[4/3]",
};

export const PlaceholderImage = ({ label = "Image placeholder", className = "", aspectRatio = "video" }: PlaceholderImageProps) => (
  <div className={`border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center gap-2 rounded ${aspectMap[aspectRatio]} ${className}`}>
    <ImageIcon className="h-8 w-8 text-muted-foreground" />
    <span className="font-mono text-xs text-muted-foreground">{label}</span>
  </div>
);
