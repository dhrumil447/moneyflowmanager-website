import { PhoneFrame } from "../PhoneFrame";
import appDaily from "@/assets/app-daily.jpg";
import appCalendar from "@/assets/app-calendar.jpg";
import appMonthly from "@/assets/app-monthly.jpg";
import appAccounts from "@/assets/app-accounts.jpg";
import appSettings from "@/assets/app-settings.jpg";
import appConfig from "@/assets/app-config.jpg";
import appGoals from "@/assets/app-goals.jpg";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { cn } from "@/lib/utils";

const screens = [
  { src: appDaily, label: "Daily Transactions" },
  { src: appCalendar, label: "Calendar View" },
  { src: appMonthly, label: "Monthly Report" },
  { src: appAccounts, label: "Accounts" },
  { src: appGoals, label: "Goals" },
  { src: appSettings, label: "Settings" },
  { src: appConfig, label: "Configuration" },
];

const ScreenshotItem = ({
  src,
  label,
  staggered,
}: {
  src: string;
  label: string;
  staggered?: boolean;
}) => (
  <div
    className={cn(
      "snap-center shrink-0 flex flex-col items-center",
      staggered && "translate-y-5",
    )}
  >
    <PhoneFrame
      src={src}
      alt={`MoneyFlow Manager ${label} screen`}
      widthClass="w-[200px] md:w-full md:max-w-[200px]"
    />
    <p className="mt-4 text-sm font-semibold text-foreground text-center">
      {label}
    </p>
  </div>
);

export const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-20 md:py-28 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="App Screens"
          title={
            <>
              Designed to feel <span className="text-gradient">effortless</span>
            </>
          }
          description="Every screen crafted for clarity, speed, and delight."
          className="max-w-2xl mx-auto mb-14"
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"
          />

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="relative -mx-6 md:mx-0">
            <div className="flex md:grid md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-4 md:pb-0 scrollbar-hide">
              {screens.map((screen, index) => (
                <ScreenshotItem
                  key={screen.label}
                  src={screen.src}
                  label={screen.label}
                  staggered={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
