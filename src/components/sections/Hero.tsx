import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { PhoneFrame } from "../PhoneFrame";
import { StarRating } from "@/components/StarRating";
import logo from "@/assets/logo.png";
import appDaily from "@/assets/app-daily.jpg";

const HeroBadge = () => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3.5 py-1.5 shadow-sm-soft mb-6">
    <Sparkles className="h-3.5 w-3.5 text-primary" />
    <span className="text-xs font-semibold text-foreground">
      New · Smart spending insights
    </span>
  </div>
);

const HeroActions = () => (
  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
    <Button
      asChild
      size="lg"
      className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95 h-12 px-7 text-base"
    >
      <a href="#download">
        <Download className="mr-2 h-5 w-5" />
        Download App
      </a>
    </Button>
    <Button
      asChild
      size="lg"
      variant="outline"
      className="h-12 px-7 text-base border-2 hover:bg-accent"
    >
      <a href="#features">Explore Features</a>
    </Button>
  </div>
);

const SocialProof = () => (
  <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center lg:justify-start">
    <div className="flex items-center gap-2">
      <StarRating className="gap-0" />
      <span className="text-sm font-semibold text-foreground">
        4.9 · 10K+ reviews
      </span>
    </div>
    <div className="flex items-center gap-2.5">
      <img src={logo} alt="" className="h-8 w-8" width={32} height={32} />
      <span className="text-sm text-muted-foreground">
        Trusted by 50,000+ users
      </span>
    </div>
  </div>
);

const FloatingStat = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "income";
}) => (
  <div className="rounded-2xl bg-card border border-border shadow-lg-soft p-3 w-44">
    <div className="flex items-center gap-2">
      <div
        className={`h-8 w-8 rounded-full ${tone === "income" ? "bg-income/15" : "bg-secondary"} flex items-center justify-center`}
      >
        <span
          className={`text-base font-bold ${tone === "income" ? "text-income" : "text-foreground"}`}
        >
          {tone === "income" ? "+" : ""}
        </span>
      </div>
      <div>
        <p className="text-[10px] text-muted-foreground">{label}</p>
        <p
          className={`text-sm font-bold ${tone === "income" ? "text-income" : "text-foreground"}`}
        >
          {value}
        </p>
      </div>
    </div>
  </div>
);

export const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-hero"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-income/10 blur-3xl"
      />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <HeroBadge />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Take Control of <br className="hidden sm:block" />
              <span className="text-gradient">Your Money</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Track income, expenses, savings goals and financial growth — all
              in one beautifully simple app.
            </p>

            <HeroActions />
            <SocialProof />
          </div>

          <div className="relative flex items-center justify-center animate-fade-up anim-delay-150">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"
            />
            <div className="relative">
              <PhoneFrame
                src={appDaily}
                alt="MoneyFlow Manager daily transactions screen"
                loading="eager"
                className="animate-float"
              />
              <div className="absolute -left-4 sm:-left-12 top-16 hidden sm:block animate-float anim-delay-1000">
                <FloatingStat label="Salary" value="₹25,000" tone="income" />
              </div>
              <div className="absolute -right-4 sm:-right-10 bottom-20 hidden sm:block animate-float anim-delay-2000">
                <div className="rounded-2xl bg-card border border-border shadow-lg-soft p-3 w-40">
                  <p className="text-[10px] text-muted-foreground">
                    Total Balance
                  </p>
                  <p className="text-base font-bold text-foreground">₹66,550</p>
                  <div className="mt-1.5 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
