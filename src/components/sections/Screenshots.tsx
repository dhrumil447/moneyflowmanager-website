import { PhoneMockup } from "../PhoneMockup";

const screens = [
  { variant: "home" as const, label: "Home" },
  { variant: "calendar" as const, label: "Calendar" },
  { variant: "analytics" as const, label: "Analytics" },
  { variant: "goals" as const, label: "Goals" },
];

export const Screenshots = () => {
  return (
    <section id="screenshots" className="py-20 md:py-28 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold mb-4">
            Screens
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Designed to feel <span className="text-gradient">effortless</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every screen crafted for clarity, speed, and delight.
          </p>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {screens.map((s, i) => (
              <div
                key={s.variant}
                className="flex flex-col items-center"
                style={{ transform: `translateY(${i % 2 === 1 ? "1.5rem" : "0"})` }}
              >
                <PhoneMockup variant={s.variant} className="!w-[200px] sm:!w-[230px]" />
                <p className="mt-4 text-sm font-semibold text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
