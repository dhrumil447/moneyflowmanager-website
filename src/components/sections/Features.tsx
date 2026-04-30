import {
  Receipt,
  CalendarDays,
  FileBarChart,
  PieChart,
  CloudUpload,
  Lock,
  Target,
  Wallet,
  Tags,
  LayoutDashboard,
} from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const features = [
  {
    icon: Receipt,
    title: "Daily Transactions",
    text: "Quick add for every income and expense.",
  },
  {
    icon: CalendarDays,
    title: "Calendar View",
    text: "See spending patterns day by day.",
  },
  {
    icon: FileBarChart,
    title: "Monthly Reports",
    text: "Auto-generated summaries every month.",
  },
  {
    icon: PieChart,
    title: "Smart Analytics",
    text: "Beautiful charts that reveal trends.",
  },
  {
    icon: CloudUpload,
    title: "Backup & Restore",
    text: "Never lose a single transaction.",
  },
  {
    icon: Lock,
    title: "Passcode Lock",
    text: "Biometric + passcode protection.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    text: "Plan and achieve savings milestones.",
  },
  {
    icon: Wallet,
    title: "Multiple Accounts",
    text: "Cash, bank, cards — all in one.",
  },
  {
    icon: Tags,
    title: "Category Management",
    text: "Custom categories and icons.",
  },
  {
    icon: LayoutDashboard,
    title: "Financial Overview",
    text: "Your money story at a glance.",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Receipt;
  title: string;
  text: string;
}) => (
  <div className="group relative rounded-2xl bg-card border border-border p-6 shadow-sm-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
    <div className="h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-md-soft">
      <Icon className="h-6 w-6 text-primary-foreground" />
    </div>
    <h3 className="text-base font-bold text-foreground mb-1.5">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Features"
          title={
            <>
              Everything you need to{" "}
              <span className="text-gradient">master your money</span>
            </>
          }
          description="Powerful tools wrapped in a calm, friendly interface."
          className="max-w-2xl mx-auto mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
