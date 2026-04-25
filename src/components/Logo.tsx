import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { img: "h-8 w-8", text: "text-base" },
  md: { img: "h-10 w-10", text: "text-lg" },
  lg: { img: "h-14 w-14", text: "text-2xl" },
};

export const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const s = sizeMap[size];
  return (
    <a href="#top" className={cn("flex items-center gap-2.5 group", className)}>
      <img
        src={logo}
        alt="MoneyFlow Manager logo"
        className={cn(s.img, "object-contain transition-transform group-hover:scale-105")}
        width={56}
        height={56}
      />
      {showText && (
        <span className={cn(s.text, "font-bold tracking-tight text-foreground")}>
          MoneyFlow <span className="text-primary">Manager</span>
        </span>
      )}
    </a>
  );
};
