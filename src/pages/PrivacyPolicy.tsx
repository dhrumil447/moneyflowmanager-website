import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Shield,
  Lock,
  Database,
  Cloud,
  Eye,
  Mail,
  Info,
  Key,
  Users,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

const EFFECTIVE_DATE = "April 30, 2026";

const sections = [
  {
    icon: Info,
    title: "1. Introduction",
    body: (
      <p>
        MoneyFlow Manager is a personal finance application designed to help
        users track income, expenses, and financial activity directly on their
        device. This Privacy Policy explains how user information is handled.
      </p>
    ),
  },
  {
    icon: Database,
    title: "2. Information We Collect",
    body: (
      <>
        <p>
          MoneyFlow Manager does <strong>not</strong> collect, store, or
          transmit any personal data to external servers.
        </p>
        <p className="mt-3">
          All information entered by the user remains on the user's device.
        </p>
      </>
    ),
  },
  {
    icon: Eye,
    title: "3. How Data Is Used",
    body: (
      <>
        <p>
          All data such as transactions, categories, accounts, and settings are
          used only to provide app functionality including tracking, analytics,
          and financial insights.
        </p>
        <p className="mt-3">No data is processed outside the user's device.</p>
      </>
    ),
  },
  {
    icon: Lock,
    title: "4. Data Storage and Security",
    body: (
      <>
        <p>
          All data is stored locally on the user's device using secure local
          storage.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li>
            The app provides an optional passcode lock for additional
            protection.
          </li>
          <li>
            Backup and restore functionality operates entirely on-device and
            does not upload data to any server.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Key,
    title: "5. Permissions",
    body: (
      <>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong>Storage Permission:</strong> Used only for creating and
            restoring local backup files
          </li>
          <li>
            <strong>SMS Permission:</strong> Not used by the app
          </li>
          <li>
            <strong>Location:</strong> Not used
          </li>
        </ul>
        <p className="mt-3">
          No unnecessary or sensitive permissions are required.
        </p>
      </>
    ),
  },
  {
    icon: Shield,
    title: "6. Data Sharing",
    body: (
      <>
        <p>
          MoneyFlow Manager does <strong>not</strong> share, sell, or transfer
          any user data to third parties.
        </p>
        <p className="mt-3">
          The app does not use advertising services or tracking technologies.
        </p>
      </>
    ),
  },
  {
    icon: Users,
    title: "7. Children's Privacy",
    body: (
      <>
        <p>This app is not directed to children under the age of 13.</p>
        <p className="mt-3">
          Since no personal data is collected, no data from children is
          processed.
        </p>
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: "8. Changes to This Privacy Policy",
    body: (
      <>
        <p>This Privacy Policy may be updated from time to time.</p>
        <p className="mt-3">
          Any changes will be reflected by updating the effective date.
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    title: "9. Contact",
    body: (
      <p>
        If you have any questions or concerns about this Privacy Policy, you can
        contact us at{" "}
        <a
          href="mailto:moneyflowmanager.support@gmail.com"
          className="text-primary font-semibold hover:underline"
        >
          moneyflowmanager.support@gmail.com
        </a>
        .
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}

      {/* Header */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-gradient-hero">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-income/10 blur-3xl"
        />

        <div className="container-px mx-auto max-w-4xl relative">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
            <Link to="/">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border shadow-sm-soft px-3.5 py-1.5 mb-5">
            <Shield className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-foreground">
              Privacy-first by design
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            How MoneyFlow Manager handles your information — built to keep your
            financial data entirely on your device.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective Date:{" "}
            <span className="text-foreground font-medium">
              {EFFECTIVE_DATE}
            </span>
          </p>
        </div>
      </section>

      {/* Summary card */}
      <section className="container-px mx-auto max-w-4xl -mt-4 relative z-10">
        <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-6 sm:p-8 shadow-glow">
          <h2 className="text-xl font-bold mb-3">The short version</h2>
          <ul className="space-y-2 text-primary-foreground/95 text-base">
            <li>
              ✓ No personal data is collected, stored, or transmitted to any
              server.
            </li>
            <li>
              ✓ Your transactions stay on your device using secure local
              storage.
            </li>
            <li>
              ✓ Backup &amp; restore work entirely on-device — nothing is
              uploaded.
            </li>
            <li>✓ No advertising, no tracking, no selling of data — ever.</li>
          </ul>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-4xl space-y-6">
          {sections.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-sm-soft hover:shadow-md-soft transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-11 w-11 rounded-xl bg-accent flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {s.title}
                  </h2>
                  <div className="text-base text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold">
                    {s.body}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <FooterSection /> */}
    </main>
  );
};

export default PrivacyPolicy;
