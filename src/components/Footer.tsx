import { Link } from "@tanstack/react-router";

function FooterWordmark({ className = "h-9" }: { className?: string }) {
  return (
    <Link to="/" className="surface-ink inline-flex items-center rounded-xl px-3 py-2">
      <img
        src="/assets/jumpcalls-logo.png"
        alt="JumpCalls logo"
        className={`${className} w-auto`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback) (fallback as HTMLElement).style.display = "flex";
        }}
      />
      <div className="hidden items-center gap-2">
        <svg
          className="h-5 w-auto text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
        <span className="font-display text-lg font-extrabold tracking-tight text-white">
          Jump<span className="text-emerald-400">Calls</span>
        </span>
      </div>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2">
            <FooterWordmark />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Call generation for home service businesses: website, ads, call tracking, and follow up automation. Done for you for one flat monthly price.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#included" className="transition-colors hover:text-foreground">
                  What's Included
                </a>
              </li>
              <li>
                <a href="/#how" className="transition-colors hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#why" className="transition-colors hover:text-foreground">
                  Why Us
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="transition-colors hover:text-foreground">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#pricing" className="transition-colors hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Pages */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Company &amp; SEO
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/team" className="transition-colors hover:text-foreground">
                  Our Team
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/jumpcalls/60min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Book Demo
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="transition-colors hover:text-foreground">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="/#pricing" className="transition-colors hover:text-foreground">
                  Ad Campaigns
                </a>
              </li>
              <li>
                <a href="/#pricing" className="transition-colors hover:text-foreground">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="/#pricing" className="transition-colors hover:text-foreground">
                  Call Tracking
                </a>
              </li>
              <li>
                <a href="/#pricing" className="transition-colors hover:text-foreground">
                  CRM &amp; Automation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} JumpCalls. All rights reserved.</p>
          <p>Flat monthly pricing. Every call tracked.</p>
        </div>
      </div>
    </footer>
  );
}
