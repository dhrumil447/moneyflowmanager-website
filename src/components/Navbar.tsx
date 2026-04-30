import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screens" },
  { href: "#analytics", label: "Analytics" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

const NavLinks = ({
  onSelect,
  className,
  linkClassName,
}: {
  onSelect?: () => void;
  className?: string;
  linkClassName?: string;
}) => (
  <div className={className}>
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={onSelect}
        className={cn(
          "font-medium transition-colors",
          linkClassName ??
            "text-sm text-muted-foreground hover:text-foreground",
        )}
      >
        {link.label}
      </a>
    ))}
  </div>
);

const DesktopActions = () => (
  <div className="hidden md:flex items-center gap-3">
    <Button asChild variant="ghost" size="sm">
      <a href="#download">Sign in</a>
    </Button>
    <Button
      asChild
      size="sm"
      className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95"
    >
      <a href="#download">
        <Download className="mr-1.5 h-4 w-4" />
        Get the app
      </a>
    </Button>
  </div>
);

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
      <div className="container-px py-6 flex flex-col gap-4">
        <NavLinks
          onSelect={onClose}
          className="flex flex-col gap-4"
          linkClassName="text-base text-foreground py-1"
        />
        <Button
          asChild
          className="bg-gradient-primary text-primary-foreground mt-2"
        >
          <a href="#download" onClick={onClose}>
            <Download className="mr-1.5 h-4 w-4" />
            Download App
          </a>
        </Button>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm-soft"
          : "bg-transparent",
      )}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Logo />

        <NavLinks className="hidden md:flex items-center gap-8" />
        <DesktopActions />

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};
