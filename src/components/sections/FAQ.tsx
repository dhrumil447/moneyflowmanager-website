import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const faqs = [
  {
    q: "Is my data secure?",
    a: "Yes. MoneyFlow Manager stores your data privately on your device with optional encrypted cloud backup. You control everything with passcode and biometric lock.",
  },
  {
    q: "Can I restore my backup on a new phone?",
    a: "Absolutely. Sign in on a new device, tap Restore, and your accounts, transactions, and goals come back exactly as you left them.",
  },
  {
    q: "Is the app free?",
    a: "Yes — MoneyFlow Manager is free to download and use, with no ads on core features. Optional premium upgrades unlock advanced reports.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. The app is fully functional offline. Backups sync automatically when you're back online.",
  },
  {
    q: "Which currencies are supported?",
    a: "MoneyFlow supports 150+ currencies including INR, USD, EUR, GBP, AED, and more. You can switch any time.",
  },
  {
    q: "Can I track multiple accounts?",
    a: "Yes — cash, bank, credit cards, wallets, and even loans. Everything in one unified dashboard.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="text-gradient">questions</span>
            </>
          }
          className="mb-12"
        />

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="rounded-2xl bg-card border border-border px-6 shadow-sm-soft data-[state=open]:shadow-md-soft transition-shadow"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
