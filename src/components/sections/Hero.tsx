import { Button } from "@/components/ui/button";
import { Download, Sparkles, Star } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-hero">
      {/* Decorative blurs */}
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-income/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3.5 py-1.5 shadow-sm-soft mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-foreground">New · Smart spending insights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Take Control of <br className="hidden sm:block" />
              <span className="text-gradient">Your Money</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Track income, expenses, savings goals and financial growth — all in one beautifully simple app.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95 h-12 px-7 text-base">
                <a href="#download">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base border-2 hover:bg-accent">
                <a href="#features">Explore Features</a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">4.9 · 10K+ reviews</span>
              </div>
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="" className="h-8 w-8" width={32} height={32} />
                <span className="text-sm text-muted-foreground">Trusted by 50,000+ users</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div aria-hidden className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative">
              <PhoneMockup variant="home" className="animate-float" />
              {/* Floating cards */}
              <div className="absolute -left-4 sm:-left-12 top-16 hidden sm:block animate-float" style={{ animationDelay: "1s" }}>
                <div className="rounded-2xl bg-card border border-border shadow-lg-soft p-3 w-44">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-income/15 flex items-center justify-center">
                      <span className="text-income text-base font-bold">+</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Salary</p>
                      <p className="text-sm font-bold text-income">₹45,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 sm:-right-10 bottom-20 hidden sm:block animate-float" style={{ animationDelay: "2s" }}>
                <div className="rounded-2xl bg-card border border-border shadow-lg-soft p-3 w-40">
                  <p className="text-[10px] text-muted-foreground">Saved this month</p>
                  <p className="text-base font-bold text-foreground">₹26,580</p>
                  <div className="mt-1.5 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-primary rounded-full" />
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
