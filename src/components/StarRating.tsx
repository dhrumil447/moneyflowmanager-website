import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  count?: number;
  className?: string;
  iconClassName?: string;
}

export const StarRating = ({
  count = 5,
  className,
  iconClassName,
}: StarRatingProps) => {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          // Index is safe here; the order never changes.
          key={i}
          className={cn("h-4 w-4 fill-primary text-primary", iconClassName)}
        />
      ))}
    </div>
  );
};
