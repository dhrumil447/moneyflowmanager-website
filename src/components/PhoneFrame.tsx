import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  /** Optional fixed width override; otherwise responsive default */
  widthClass?: string;
  loading?: "eager" | "lazy";
}

/**
 * Premium phone frame that wraps a real app screenshot.
 * Uses the device's foreground color for the bezel to match the dark text palette of the app.
 */
export const PhoneFrame = ({
  src,
  alt,
  className,
  widthClass = "w-[260px] sm:w-[280px] md:w-[300px]",
  loading = "lazy",
}: PhoneFrameProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] rounded-[2.6rem] bg-foreground p-[8px] shadow-phone",
        widthClass,
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-background">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
};
