import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownLeft, Coffee, ShoppingBag, Wallet } from "lucide-react";

interface PhoneMockupProps {
  className?: string;
  variant?: "home" | "analytics" | "calendar" | "goals";
}

/** Pure-CSS premium phone mockup — perfectly crisp at any size. */
export const PhoneMockup = ({ className, variant = "home" }: PhoneMockupProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] sm:w-[300px] aspect-[9/19] rounded-[2.8rem] bg-foreground p-[10px] shadow-phone",
        className
      )}
    >
      {/* Inner screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-background">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground" />

        <div className="h-full w-full pt-10 pb-6 px-4 flex flex-col">
          {variant === "home" && <HomeScreen />}
          {variant === "analytics" && <AnalyticsScreen />}
          {variant === "calendar" && <CalendarScreen />}
          {variant === "goals" && <GoalsScreen />}
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => (
  <>
    <div className="text-center mb-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Total Balance</p>
      <p className="text-2xl font-bold text-foreground mt-0.5">₹1,24,580</p>
    </div>
    <div className="grid grid-cols-2 gap-2 mb-3">
      <div className="rounded-2xl bg-income/10 p-2.5">
        <div className="flex items-center gap-1.5 text-income">
          <ArrowDownLeft className="h-3 w-3" />
          <span className="text-[10px] font-semibold">Income</span>
        </div>
        <p className="text-sm font-bold text-foreground mt-1">₹45,000</p>
      </div>
      <div className="rounded-2xl bg-expense/10 p-2.5">
        <div className="flex items-center gap-1.5 text-expense">
          <ArrowUpRight className="h-3 w-3" />
          <span className="text-[10px] font-semibold">Expense</span>
        </div>
        <p className="text-sm font-bold text-foreground mt-1">₹18,420</p>
      </div>
    </div>
    <p className="text-[11px] font-semibold text-foreground mb-2">Recent Transactions</p>
    <div className="space-y-2 flex-1">
      <TxRow icon={<Coffee className="h-3.5 w-3.5" />} label="Coffee" sub="Today, 9:24 AM" amount="-₹180" type="expense" />
      <TxRow icon={<Wallet className="h-3.5 w-3.5" />} label="Salary" sub="Yesterday" amount="+₹45,000" type="income" />
      <TxRow icon={<ShoppingBag className="h-3.5 w-3.5" />} label="Shopping" sub="2 days ago" amount="-₹2,450" type="expense" />
    </div>
  </>
);

const TxRow = ({
  icon, label, sub, amount, type,
}: { icon: React.ReactNode; label: string; sub: string; amount: string; type: "income" | "expense" }) => (
  <div className="flex items-center gap-2 rounded-xl bg-card border border-border p-2">
    <div className={cn(
      "h-7 w-7 rounded-full flex items-center justify-center",
      type === "income" ? "bg-income/15 text-income" : "bg-expense/15 text-expense"
    )}>{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-[11px] font-semibold text-foreground truncate">{label}</p>
      <p className="text-[9px] text-muted-foreground">{sub}</p>
    </div>
    <p className={cn("text-[11px] font-bold", type === "income" ? "text-income" : "text-expense")}>{amount}</p>
  </div>
);

const AnalyticsScreen = () => (
  <>
    <p className="text-sm font-bold text-foreground text-center mb-3">Analytics</p>
    <div className="rounded-2xl bg-card border border-border p-3 mb-3 flex flex-col items-center">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full" style={{
          background: "conic-gradient(hsl(var(--primary)) 0 45%, hsl(var(--income)) 45% 70%, hsl(var(--expense)) 70% 88%, hsl(var(--muted)) 88% 100%)"
        }} />
        <div className="absolute inset-3 rounded-full bg-background flex flex-col items-center justify-center">
          <p className="text-[9px] text-muted-foreground">Spent</p>
          <p className="text-xs font-bold">₹18.4K</p>
        </div>
      </div>
    </div>
    <div className="rounded-2xl bg-card border border-border p-3">
      <p className="text-[10px] font-semibold mb-2">Monthly Spending</p>
      <div className="flex items-end gap-1.5 h-16">
        {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-gradient-primary" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </>
);

const CalendarScreen = () => (
  <>
    <p className="text-sm font-bold text-foreground text-center mb-3">November 2025</p>
    <div className="grid grid-cols-7 gap-1 text-center">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <p key={i} className="text-[9px] font-semibold text-muted-foreground py-1">{d}</p>
      ))}
      {Array.from({ length: 30 }).map((_, i) => {
        const hasIncome = [1, 8, 15, 22, 29].includes(i);
        const hasExpense = [2, 5, 9, 12, 18, 24, 27].includes(i);
        return (
          <div key={i} className="aspect-square rounded-md bg-secondary/50 flex flex-col items-center justify-center relative">
            <span className="text-[9px] font-semibold text-foreground">{i + 1}</span>
            <div className="absolute bottom-0.5 flex gap-0.5">
              {hasIncome && <div className="h-1 w-1 rounded-full bg-income" />}
              {hasExpense && <div className="h-1 w-1 rounded-full bg-expense" />}
            </div>
          </div>
        );
      })}
    </div>
  </>
);

const GoalsScreen = () => (
  <>
    <p className="text-sm font-bold text-foreground text-center mb-3">My Goals</p>
    <div className="space-y-2.5">
      {[
        { name: "Emergency Fund", pct: 75, amt: "₹75,000 / ₹1,00,000" },
        { name: "New Laptop", pct: 40, amt: "₹40,000 / ₹1,00,000" },
        { name: "Vacation", pct: 60, amt: "₹30,000 / ₹50,000" },
      ].map((g) => (
        <div key={g.name} className="rounded-2xl bg-card border border-border p-3">
          <div className="flex justify-between items-center mb-1.5">
            <p className="text-[11px] font-semibold text-foreground">{g.name}</p>
            <p className="text-[10px] font-bold text-primary">{g.pct}%</p>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${g.pct}%` }} />
          </div>
          <p className="text-[9px] text-muted-foreground mt-1.5">{g.amt}</p>
        </div>
      ))}
    </div>
  </>
);
