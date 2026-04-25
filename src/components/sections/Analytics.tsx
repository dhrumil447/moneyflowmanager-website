import { PhoneFrame } from "../PhoneFrame";
import { TrendingUp, PieChart, BarChart3, Calendar } from "lucide-react";
import appMonthly from "@/assets/app-monthly.jpg";

const insights = [
  { icon: PieChart, title: "Visual breakdowns", text: "See where your money really goes." },
  { icon: BarChart3, title: "Monthly trends", text: "Compare months at a glance." },
  { icon: TrendingUp, title: "Spending analysis", text: "Catch leaks before they grow." },
  { icon: Calendar, title: "Daily breakdown", text: "Every day, fully transparent." },
];

export const Analytics = () => {
  return (
    <section id="analytics" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center relative">
            <div aria-hidden className="absolute inset-0 bg-gradient-primary opacity-15 blur-3xl rounded-full" />
            <PhoneFrame
              src={appMonthly}
              alt="MoneyFlow Manager monthly report screen"
              className="animate-float relative"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold mb-4">
              Insights
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Understand your <span className="text-gradient">money better</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Daily, calendar, monthly and total views turn numbers into stories.
              Spot patterns, fix bad habits, and celebrate progress.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {insights.map((i) => (
                <div key={i.title} className="rounded-2xl bg-card border border-border p-5 shadow-sm-soft">
                  <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                    <i.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{i.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
