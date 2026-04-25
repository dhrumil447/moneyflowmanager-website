import { Lock, CloudUpload, RefreshCw, Smartphone } from "lucide-react";

const items = [
  { icon: Lock, title: "Passcode Lock", text: "PIN + biometric protection on every launch." },
  { icon: CloudUpload, title: "Secure Backup", text: "Encrypted backups you fully control." },
  { icon: RefreshCw, title: "Restore System", text: "One-tap restore on any new device." },
  { icon: Smartphone, title: "Private Storage", text: "Data stays on your device by default." },
];

export const Security = () => {
  return (
    <section id="security" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative rounded-[2rem] overflow-hidden bg-foreground text-background p-8 sm:p-12 lg:p-16 shadow-lg-soft">
          <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold mb-4">
              <Lock className="h-3 w-3" />
              Security
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-background">
              Your data. <span className="text-primary">Fully protected.</span>
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Privacy isn't a feature — it's the foundation. MoneyFlow Manager keeps your
              financial life private, encrypted, and entirely in your hands.
            </p>
          </div>

          <div className="relative mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl bg-background/5 border border-background/10 backdrop-blur p-5 hover:bg-background/10 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-background">{it.title}</h3>
                <p className="text-sm text-background/70 mt-1">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
