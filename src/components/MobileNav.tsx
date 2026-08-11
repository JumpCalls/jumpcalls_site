import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href?: string; to?: string };

const items: NavItem[] = [
  { label: "What's included", href: "/#included" },
  { label: "How it works", href: "/#how" },
  { label: "Why us", href: "/#why" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", to: "/team" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 border-b border-border bg-background shadow-lg">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {items.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-semibold text-foreground last:border-0"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-semibold text-foreground last:border-0"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
