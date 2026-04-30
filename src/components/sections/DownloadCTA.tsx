import { Button } from "@/components/ui/button";
import { Download, Apple, Play } from "lucide-react";
import logo from "@/assets/logo.png";

const StoreButton = ({
  href,
  ariaLabel,
  icon: Icon,
  className,
  iconClassName,
  subLabel,
  label,
}: {
  href: string;
  ariaLabel: string;
  icon: typeof Apple;
  className: string;
  iconClassName?: string;
  subLabel: string;
  label: string;
}) => (
  <Button asChild size="lg" className={className}>
    <a href={href} aria-label={ariaLabel}>
      <Icon className={iconClassName ?? "mr-2 h-5 w-5"} />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium opacity-80">
          {subLabel}
        </span>
        <span className="block text-base font-bold">{label}</span>
      </span>
    </a>
  </Button>
);

export const DownloadCTASection = () => {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 sm:p-14 lg:p-20 text-center shadow-glow">
          <div
            aria-hidden
            className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"
          />

          <div className="relative">
            <img
              src={logo}
              alt="MoneyFlow Manager"
              className="h-20 w-20 mx-auto mb-6 drop-shadow-2xl animate-float"
              width={80}
              height={80}
              loading="lazy"
            />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground tracking-tight">
              Start managing your <br className="hidden sm:block" />
              money today
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
              Join 50,000+ people building healthier financial habits with
              MoneyFlow Manager.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <StoreButton
                href="#"
                ariaLabel="Download on the App Store"
                icon={Apple}
                className="bg-foreground text-background hover:bg-foreground/90 h-14 px-7 text-base"
                subLabel="Download on the"
                label="App Store"
              />
              <StoreButton
                href="#"
                ariaLabel="Get it on Google Play"
                icon={Play}
                iconClassName="mr-2 h-5 w-5 fill-foreground"
                className="bg-background text-foreground hover:bg-background/90 h-14 px-7 text-base"
                subLabel="Get it on"
                label="Google Play"
              />
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/80">
              <Download className="h-4 w-4" />
              Free download · No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
