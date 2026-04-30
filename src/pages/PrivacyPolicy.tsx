import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Shield,
  Lock,
  Database,
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
            <strong>Storage:</strong> Used only for creating and restoring local
            backup files
          </li>
          <li>
            <strong>SMS:</strong> Not used
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
        <p>
          This application is not intended for children under the age of 13.
        </p>
        <p className="mt-3">
          We do not knowingly collect any personal information from children.
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
      {/* Header */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-gradient-hero">
        <div className="container-px mx-auto max-w-4xl relative">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
            <Link to="/">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container-px mx-auto max-w-4xl space-y-6">
          {sections.map((s) => (
            <article key={s.title} className="rounded-2xl bg-card border p-6">
              <div className="flex gap-4">
                <s.icon className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="text-xl font-bold mb-3">{s.title}</h2>
                  <div className="text-base">{s.body}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
