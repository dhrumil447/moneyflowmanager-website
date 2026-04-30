import { PhoneFrame } from "../PhoneFrame";
import { TrendingUp, PieChart, BarChart3, Calendar } from "lucide-react";
import appMonthly from "@/assets/app-monthly.jpg";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const insights = [
  {
    icon: PieChart,
    title: "Visual breakdowns",
    text: "See where your money really goes.",
  },
  {
    icon: BarChart3,
    title: "Monthly trends",
    text: "Compare months at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Spending analysis",
    text: "Catch leaks before they grow.",
  },
  {
    icon: Calendar,
    title: "Daily breakdown",
    text: "Every day, fully transparent.",
  },
];

const InsightCard = ({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof PieChart;
  title: string;
  text: string;
}) => (
  <div className="rounded-2xl bg-card border border-border p-5 shadow-sm-soft">
    <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
      <Icon className="h-5 w-5 text-primary-foreground" />
    </div>
    <h3 className="text-base font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground mt-1">{text}</p>
  </div>
);

export const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center relative">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-primary opacity-15 blur-3xl rounded-full"
            />
            <PhoneFrame
              src={appMonthly}
              alt="MoneyFlow Manager monthly report screen"
              className="animate-float relative"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Insights"
              title={
                <>
                  Understand your{" "}
                  <span className="text-gradient">money better</span>
                </>
              }
              description={
                <>
                  Daily, calendar, monthly and total views turn numbers into
                  stories. Spot patterns, fix bad habits, and celebrate
                  progress.
                </>
              }
              align="left"
              descriptionClassName="mt-5"
            />

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {insights.map((insight) => (
                <InsightCard key={insight.title} {...insight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
