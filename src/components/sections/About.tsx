import logo from "@/assets/logo.png";
import {
  Wallet,
  TrendingUp,
  Target,
  BarChart3,
  ShieldCheck,
  Cloud,
  CreditCard,
} from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const items = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    text: "Log spends in seconds with smart categories.",
  },
  {
    icon: TrendingUp,
    title: "Income Management",
    text: "Keep every rupee of income organized.",
  },
  {
    icon: Target,
    title: "Goal Planning",
    text: "Set savings goals and watch them grow.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    text: "Visual reports that reveal real habits.",
  },
  {
    icon: CreditCard,
    title: "Account Balance",
    text: "Multiple accounts unified in one place.",
  },
  {
    icon: Cloud,
    title: "Backup & Restore",
    text: "Cloud backups keep data safe forever.",
  },
  {
    icon: ShieldCheck,
    title: "Passcode Security",
    text: "Bank-grade lock keeps prying eyes out.",
  },
];

const AboutFeature = ({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Wallet;
  title: string;
  text: string;
}) => (
  <div className="group rounded-2xl bg-card border border-border p-5 shadow-sm-soft hover:shadow-md-soft hover:-translate-y-1 transition-all">
    <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
    </div>
    <h3 className="text-base font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground mt-1">{text}</p>
  </div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="About"
              title={
                <>
                  Why Choose{" "}
                  <span className="text-gradient">MoneyFlow Manager?</span>
                </>
              }
              description={
                <>
                  MoneyFlow Manager is built for everyday people who want to
                  feel in control of their finances — without the spreadsheets,
                  jargon, or stress.
                </>
              }
              align="left"
              descriptionClassName="mt-5"
            />

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-gradient-card border border-border shadow-md-soft p-5">
              <img
                src={logo}
                alt="MoneyFlow Manager"
                className="h-14 w-14"
                width={56}
                height={56}
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold text-foreground">
                  Designed in India, loved worldwide
                </p>
                <p className="text-xs text-muted-foreground">
                  Privacy-first · Offline-ready · No ads
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <AboutFeature key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
