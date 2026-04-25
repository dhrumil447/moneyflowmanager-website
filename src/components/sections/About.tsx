import logo from "@/assets/logo.png";
import { Wallet, TrendingUp, Target, BarChart3, ShieldCheck, Cloud, CreditCard } from "lucide-react";

const items = [
  { icon: Wallet, title: "Expense Tracking", text: "Log spends in seconds with smart categories." },
  { icon: TrendingUp, title: "Income Management", text: "Keep every rupee of income organized." },
  { icon: Target, title: "Goal Planning", text: "Set savings goals and watch them grow." },
  { icon: BarChart3, title: "Smart Analytics", text: "Visual reports that reveal real habits." },
  { icon: CreditCard, title: "Account Balance", text: "Multiple accounts unified in one place." },
  { icon: Cloud, title: "Backup & Restore", text: "Cloud backups keep data safe forever." },
  { icon: ShieldCheck, title: "Passcode Security", text: "Bank-grade lock keeps prying eyes out." },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold mb-4">
              About
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Why Choose <span className="text-gradient">MoneyFlow Manager?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              MoneyFlow Manager is built for everyday people who want to feel in control of their finances —
              without the spreadsheets, jargon, or stress.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-gradient-card border border-border shadow-md-soft p-5">
              <img src={logo} alt="MoneyFlow Manager" className="h-14 w-14" width={56} height={56} loading="lazy" />
              <div>
                <p className="text-sm font-bold text-foreground">Designed in India, loved worldwide</p>
                <p className="text-xs text-muted-foreground">Privacy-first · Offline-ready · No ads</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div
                key={it.title}
                className="group rounded-2xl bg-card border border-border p-5 shadow-sm-soft hover:shadow-md-soft hover:-translate-y-1 transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
                  <it.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-base font-bold text-foreground">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
