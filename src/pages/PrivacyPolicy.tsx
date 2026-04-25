import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Database, Cloud, Eye, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: Database,
    title: "1. What data we collect",
    body: (
      <>
        <p>
          MoneyFlow Manager is designed to be <strong>privacy-first</strong>. The app collects only the
          financial data that <em>you</em> manually enter, including:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li>Income transactions (amount, source, category, date, notes)</li>
          <li>Expense transactions (amount, category, account, date, notes)</li>
          <li>Account balances (cash, bank, wallet, UPI, etc.)</li>
          <li>Savings goals and progress</li>
          <li>Custom categories, sub-categories and preferences</li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> collect your name, email, phone number, contacts, location, photos,
          or any data outside the app — unless you explicitly opt in to cloud backup.
        </p>
      </>
    ),
  },
  {
    icon: Lock,
    title: "2. How your data is stored",
    body: (
      <>
        <p>
          By default, all your income and expense data is stored <strong>locally on your device</strong>{" "}
          inside the app's private encrypted storage. This means:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li>No transaction ever leaves your phone unless you choose to back it up</li>
          <li>Other apps on your device cannot read MoneyFlow Manager's data</li>
          <li>The app works fully offline — no internet connection is required</li>
          <li>Your database is protected by your device's secure storage layer</li>
        </ul>
      </>
    ),
  },
  {
    icon: Shield,
    title: "3. Passcode & biometric security",
    body: (
      <>
        <p>
          You can lock the app with a <strong>4–6 digit passcode</strong> and optional{" "}
          <strong>biometric authentication</strong> (fingerprint or face unlock). When enabled:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li>The app requires authentication on every launch and after backgrounding</li>
          <li>Passcodes are hashed locally — never stored in plain text</li>
          <li>Biometric data never leaves your device's secure enclave</li>
          <li>Even if your phone is unlocked, MoneyFlow data stays protected</li>
        </ul>
      </>
    ),
  },
  {
    icon: Cloud,
    title: "4. Backup & restore",
    body: (
      <>
        <p>
          You can optionally back up your data so you don't lose it when switching phones. Backups are{" "}
          <strong>encrypted</strong> and stored only in a location you choose:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li>Your personal Google Drive (Android) or iCloud Drive (iOS) account</li>
          <li>Local file export to your device storage</li>
          <li>Manual share via your preferred method</li>
        </ul>
        <p className="mt-3">
          MoneyFlow Manager <strong>never uploads your data to our servers</strong>. We do not have
          access to your backups, and we cannot read them. Restore is one-tap on any new device.
        </p>
      </>
    ),
  },
  {
    icon: Eye,
    title: "5. Analytics & tracking",
    body: (
      <>
        <p>
          We do not sell, rent, or share your financial data with anyone — ever. The app contains:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li><strong>No third-party advertising trackers</strong></li>
          <li><strong>No social media SDKs</strong></li>
          <li><strong>No transaction-level analytics</strong> sent off device</li>
        </ul>
        <p className="mt-3">
          We may collect anonymous, aggregated crash reports and basic usage events (e.g. "app opened")
          to fix bugs and improve performance. These reports contain no financial information and cannot
          be linked back to you.
        </p>
      </>
    ),
  },
  {
    icon: Shield,
    title: "6. Your rights & control",
    body: (
      <>
        <p>You are always in full control of your data. At any time you can:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1.5">
          <li>Export all your transactions as a backup file</li>
          <li>Delete individual transactions, accounts, or goals</li>
          <li>Reset the entire app from Settings → Reset (this is permanent)</li>
          <li>Uninstall the app to remove all local data</li>
        </ul>
      </>
    ),
  },
  {
    icon: Mail,
    title: "7. Contact us",
    body: (
      <p>
        Questions, concerns, or requests about your privacy? We respond within 48 hours. Reach us at{" "}
        <a href="mailto:privacy@moneyflowmanager.app" className="text-primary font-semibold hover:underline">
          privacy@moneyflowmanager.app
        </a>
        .
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-gradient-hero">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-income/10 blur-3xl" />

        <div className="container-px mx-auto max-w-4xl relative">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
            <Link to="/">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border shadow-sm-soft px-3.5 py-1.5 mb-5">
            <Shield className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-foreground">Privacy-first by design</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            How MoneyFlow Manager stores, protects, and never shares your income and expense data.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Summary card */}
      <section className="container-px mx-auto max-w-4xl -mt-4 relative z-10">
        <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-6 sm:p-8 shadow-glow">
          <h2 className="text-xl font-bold mb-3">The short version</h2>
          <ul className="space-y-2 text-primary-foreground/95 text-base">
            <li>✓ Your transactions stay on your device — encrypted and private.</li>
            <li>✓ We never see, store, or sell your financial data.</li>
            <li>✓ Backups go to your own cloud account, not ours.</li>
            <li>✓ Passcode + biometric lock protects everything.</li>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                  <div className="text-base text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold">
                    {s.body}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
