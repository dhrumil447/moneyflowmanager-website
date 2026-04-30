import { Logo } from "../Logo";
import { ExternalLink, Camera, Globe, Link, Mail } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Screens", href: "#screenshots" },
      { label: "Analytics", href: "#analytics" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#" },
      { label: "Support", href: "#" },
      { label: "Press kit", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { Icon: ExternalLink, href: "#", label: "Twitter" },
  {
    Icon: Camera,
    href: "https://www.instagram.com/moneyflowmanager.app?igsh=enh3eGRpZTE2cDA0",
    label: "Instagram",
  },
  { Icon: Globe, href: "#", label: "Facebook" },
  { Icon: Link, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "#", label: "Email" },
];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h4 className="text-sm font-bold text-background mb-4 uppercase tracking-wider">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-background/70 hover:text-primary transition-colors no-underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="mt-6 flex items-center gap-3">
    {socialLinks.map(({ Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="h-9 w-9 rounded-full bg-background/10 hover:bg-primary text-background flex items-center justify-center transition-colors"
        aria-label={label}
      >
        <Icon className="h-4 w-4" />
      </a>
    ))}
  </div>
);

export const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="[&_span]:text-background [&_.text-primary]:text-primary">
              <Logo size="lg" />
            </div>
            <p className="mt-5 text-background/70 max-w-sm">
              The smart way to track income, expenses, and savings goals —
              beautifully simple, privacy-first, made for everyday people.
            </p>
            <SocialLinks />
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {cols.map((col) => (
              <FooterColumn
                key={col.title}
                title={col.title}
                links={col.links}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} MoneyFlow Manager. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Made with <span className="text-primary">♥</span> for people who
            care about their money.
          </p>
        </div>
      </div>
    </footer>
  );
};
