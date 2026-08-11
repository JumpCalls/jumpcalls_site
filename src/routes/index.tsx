import { testimonials } from "@/lib/testimonials";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Megaphone,
  MonitorSmartphone,
  PhoneIncoming,
  Workflow,
  BarChart3,
  MapPin,
  Check,
  ArrowRight,
  Zap,
  BadgeCheck,

  Bot,
  Slack,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JumpCalls — We Get You More Calls" },
      {
        name: "description",
        content:
          "Call generation for home service businesses: website, ads, call tracking, and follow-up automation — done for you for one flat monthly price.",
      },
      { property: "og:title", content: "JumpCalls — We Get You More Calls" },
      {
        property: "og:description",
        content:
          "Websites, ad campaigns, call tracking, and CRM automation that drive more inbound calls to your home service business.",
      },
      { property: "og:image", content: "https://jumpcalls.com/og-image.png" },
      { name: "twitter:image", content: "https://jumpcalls.com/og-image.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "JumpCalls",
          "url": "https://jumpcalls.com",
          "logo": "https://jumpcalls.com/favicon.png",
          "description":
            "Call generation for home service businesses: website, ads, call tracking, and follow-up automation.",
          "priceRange": "$297 - $879/mo",
          "areaServed": "United States",
          "serviceOffered": [
            {
              "@type": "Service",
              "name": "Home Service Ad Campaigns & Call Generation",
              "description":
                "Google & Meta ad management built to drive inbound calls for home contractors.",
            },
            {
              "@type": "Service",
              "name": "Call Tracking & CRM Automation",
              "description":
                "Automated SMS/Email follow-up and missed call text-back.",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Wordmark({ className = "h-9" }: { className?: string }) {
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

const included = [
  {
    icon: Megaphone,
    title: "Ad campaigns that drive calls",
    body: "Google and Meta campaigns built, launched, and optimized around one goal: more qualified phone calls.",
  },
  {
    icon: MonitorSmartphone,
    title: "High-converting landing pages",
    body: "Fast, mobile-first pages built to turn clicks into calls — designed, written, and hosted for you.",
  },
  {
    icon: PhoneIncoming,
    title: "Call tracking, fully integrated",
    body: "Tracking numbers on every campaign, so you know which ads and keywords produced each call.",
  },
  {
    icon: Workflow,
    title: "Nurturing and automation",
    body: "Text and email follow-up sequences that revive cold leads and turn old inquiries into new calls.",
  },
  {
    icon: BarChart3,
    title: "Real-time call reporting",
    body: "One dashboard showing call volume, cost per call, and which channels are producing growth.",
  },
  {
    icon: MapPin,
    title: "Local market targeting",
    body: "Budget focused on the service areas and job types you actually want more calls from.",
  },
];

const steps = [
  {
    n: "01",
    title: "Market Research & Development",
    body: "Create research-driven ads for your business, built around what your local customers actually search and click.",
  },
  {
    n: "02",
    title: "Growth powered systems",
    body: "Website, landing pages, and campaign infrastructure built for one job: turning attention into phone calls.",
  },
  {
    n: "03",
    title: "Calls start coming in",
    body: "Qualified inbound calls hit your phone from the campaigns and pages we launched for you.",
  },
  {
    n: "04",
    title: "Follow up with leads",
    body: "Automated text and email sequences keep every lead warm so no inquiry goes cold.",
  },
  {
    n: "05",
    title: "Call and data tracking",
    body: "Every call tracked to its source, with clear reporting on volume, channels, and cost per call.",
  },
  {
    n: "06",
    title: "AI tools and automations",
    body: "AI webchat, missed-call text-back, and appointment scheduling working around the clock.",
  },
];


const whyUs = [
  {
    icon: BadgeCheck,
    title: "Reach More Customers Online",
    body: "We put your business in front of the people already searching for what you do — across Google, Meta, and local search — so more of your market finds you first.",
  },
  {
    icon: BarChart3,
    title: "Data and Call Tracking",
    body: "Every call, form, and click is tracked back to the campaign that created it, so you see exactly what's working and where your money goes.",
  },

  {
    icon: Bot,
    title: "AI-powered systems",
    body: "Automation and optimization that work around the clock to keep your call volume climbing.",
  },
];

const tiers = [
  {
    name: "Starter",
    badge: "Presence",
    price: "$297",
    features: [
      "New Landing Page",
      "Instant Lead Follow-Up",
      "Missed-Call Text-Back",
      "CRM Database Management",
      "Call Tracking",
      "Web Hosting",
    ],
    note: "Everything you need to start catching calls",
    spend: "",
    addOn: "",
    cta: "Start with Starter",
    href: "https://buy.stripe.com/5kQbJ13Bf9of4YVdwmcwg02",
    popular: false,
  },
  {
    name: "Discovery",
    badge: "Get Found",
    price: "$497",
    features: [
      "Everything in Starter",
      "Google Business Profile (GMB) Optimization",
      "Google SEO",
    ],
    note: "Get found by customers already searching for you",
    spend: "",
    addOn: "+$100 for Google Ads",
    cta: "Get Discovery",
    href: "https://buy.stripe.com/7sY7sLgo12ZRgHD77Ycwg05",
    popular: false,
  },
  {
    name: "Growth",
    badge: "Popular",
    price: "$647",
    features: [
      "Everything in Discovery",
      "Single Ad Platform Management (Google, Meta, or CTV)",
      "Automated Follow-Up Sequence (3-touch)",
    ],
    note: "No lead goes cold, no call goes missed",
    spend: "+ ad spend, billed direct",
    footnote: "Additional ad platform: +$50/mo",
    addOn: "",
    cta: "Get Growth",
    href: "https://buy.stripe.com/cNicN59ZD0RJ3UR8c2cwg01",
    popular: true,
  },
  {
    name: "Pro",
    badge: "AI/Tech Flagship",
    price: "$879",
    features: [
      "Everything in Growth",
      "Full Email & SMS Nurture Automation",
      "AI Webchat Bot",
      "AI Appointment Setter",
    ],
    note: "Captures and books every lead, day or night",
    spend: "+ ad spend, billed direct",
    addOn: "",
    cta: "Get Pro",
    href: "https://buy.stripe.com/7sYaEX6Nrbwnajf2RIcwg00",
    popular: false,
  },
];


const alaCarte = [
  { item: "New Website", price: "$297 one-time + $47/mo" },
  { item: "Landing Page", price: "$197 one-time" },
  { item: "Database Setup", price: "$147 one-time" },
  { item: "Single Ad Platform Management", price: "$297/mo + ad spend" },
  { item: "CRM Database Management", price: "$297/mo" },
  { item: "Email & SMS Automation", price: "$197/mo" },
  { item: "Missed-Call Text-Back", price: "$97/mo" },
  {
    item: "Google Business Profile (GMB) Optimization",
    price: "$147/mo",
    detail:
      "Ongoing optimization of your Google Business Profile — posts, photos, Q&A, and review monitoring — to boost local visibility and search ranking.",
  },
  { item: "AI Ad Targeting", price: "$247/mo" },
  { item: "AI Webchat Bot", price: "$247/mo" },
  { item: "AI Appointment Setter", price: "$397/mo" },
  { item: "AI Video Organic Pack (4 videos/mo)", price: "$197/mo" },
  { item: "Professional Video Shoot (in-person videographer)", price: "$497/shoot, quarterly recommended" },
  {
    item: "Video Sales Letter",
    price: "$349 one-time",
    detail:
      "A custom video pitch made for your business, built to convert leads who aren't ready to book yet.",
  },
];


const stats = [
  { value: "One price", label: "Flat monthly, no hidden fees" },
  { value: "100%", label: "Of calls tracked to their source" },
  { value: "38%", label: "More inbound calls in month one" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Wordmark />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#included" className="transition-colors hover:text-foreground">
              What's included
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#why" className="transition-colors hover:text-foreground">
              Why us
            </a>
            <a href="#testimonials" className="transition-colors hover:text-foreground">
              Testimonials
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
            <Link to="/team" className="transition-colors hover:text-foreground">
              Team
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <MobileNav />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <a
                href="https://calendly.com/jumpcalls/60min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
            </Button>
            <Button variant="hero" size="sm" className="sm:hidden" asChild>
              <a
                href="https://calendly.com/jumpcalls/60min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
            <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="#pricing">Get started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="surface-ink grid-glow relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Zap className="size-3.5" />
              Call generation for home services
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink-foreground sm:text-5xl md:text-6xl">
              More Calls, More Leads, <span className="text-primary">More Business</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Website, ads, and follow-up — done for you, for one flat monthly price. No long-term
              contract required to start.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#pricing">
                  Get more calls <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="onInk" size="xl" asChild>
                <a href="#how">See how it works</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Flat monthly pricing. Cancel anytime. Every call tracked.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink-border bg-ink-foreground/5 p-6 text-center"
              >
                <div className="font-display text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-sm text-ink-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What's included
          </span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            A complete system built to make your phone ring
          </h2>
          <p className="mt-4 text-muted-foreground">
            Advertising, landing pages, call tracking, and automated follow-up — all working together
            to drive more inbound calls to your business.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((f) => (
            <div
              key={f.title}
              className="shadow-card rounded-2xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="surface-ink border-y border-ink-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <h2 className="text-3xl font-extrabold md:text-4xl">How it works</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            A fast path to new calls and more business landing on your phone.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-ink-border bg-white/5 p-7 backdrop-blur-sm"
              >
                <span className="font-display text-sm font-extrabold tracking-widest text-primary">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>


              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why us */}
      <section id="why" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Why us</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Growth you can actually measure
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="shadow-card rounded-2xl border border-border bg-card p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <w.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get It Jumpin' */}
      <section id="get-it-jumpin" className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="surface-ink grid-glow rounded-3xl px-6 py-14 md:px-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Why JumpCalls?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink-foreground md:text-4xl">
              Get The Phone <span className="text-primary">Jumpin'</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Qualified calls, leads and business driven directly to your phone. At JumpCalls we
              deliver in-depth market research reports to better understand your audience, customers,
              and growth.
            </p>
            <a
              href="https://calendly.com/jumpcalls/60min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a Demo
            </a>

          </div>
        </div>
      </section>




      {/* Testimonials */}
      <section id="testimonials" className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Hear it from the <span className="text-primary">business owners</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Real clients, real results — more calls, more leads, more business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="shadow-card overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="size-full"
                    src={`https://www.youtube.com/embed/${t.id}`}
                    title={t.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="border-t border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Pricing</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              One booked job pays for the month
            </h2>
            <p className="mt-4 text-muted-foreground">
              Flat monthly plans. No hidden fees, no setup fees, no long-term contract to start.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  t.popular
                    ? "shadow-green relative rounded-3xl border-2 border-primary bg-card p-8"
                    : "shadow-card relative rounded-3xl border border-border bg-card p-8"
                }
              >
                <span
                  className={
                    t.popular
                      ? "surface-green absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                      : "absolute -top-3 left-8 rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  }
                >
                  {t.badge}
                </span>
                <h3 className="text-lg font-bold">{t.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span
                    className={
                      t.popular
                        ? "font-display text-4xl font-extrabold text-primary"
                        : "font-display text-4xl font-extrabold"
                    }
                  >
                    {t.price}
                  </span>
                  <span className="pb-1 text-sm text-muted-foreground">/mo</span>
                </div>
                {t.note ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.spend}</p>
                <Button
                  variant={t.popular ? "hero" : "outline"}
                  size="xl"
                  className="mt-7 w-full"
                  asChild
                >
                  <a href={t.href} target="_blank" rel="noopener noreferrer">
                    {t.cta}
                  </a>
                </Button>
                <ul className="mt-7 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={
                          t.popular
                            ? "mt-0.5 size-4 shrink-0 text-primary"
                            : "mt-0.5 size-4 shrink-0 text-muted-foreground"
                        }
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {t.addOn ? (
                  <p className="mt-6 whitespace-nowrap overflow-hidden rounded-xl border border-primary/30 bg-primary/5 px-3 py-2 text-center text-xs font-semibold text-primary sm:text-sm">
                    {t.addOn}
                  </p>
                ) : null}
                {"footnote" in t && t.footnote ? (
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.footnote}</p>
                ) : null}


              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-center text-sm font-semibold text-primary sm:text-base">
              <Slack className="size-4 shrink-0" />
              All plans include a Slack invite for instant communication with the team.
            </span>
          </div>


          {/* À La Carte */}
          <div className="mt-16">
            <h3 className="text-2xl font-extrabold md:text-3xl">À La Carte</h3>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Prefer to build your own stack? Add any individual service on its own.
            </p>
            <div className="shadow-card mt-8 overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="px-5 py-3 font-bold">Service</th>
                    <th className="px-5 py-3 text-right font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {alaCarte.map((a) => (
                    <tr key={a.item} className="border-t border-border">
                      <td className="px-5 py-4 font-medium">
                        {a.item}
                        {"detail" in a && a.detail ? (
                          <span className="mt-1 block text-xs font-normal leading-relaxed text-muted-foreground">
                            {a.detail}
                          </span>
                        ) : null}
                      </td>
                      <td className="px-5 py-4 text-right text-muted-foreground">{a.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Video */}
      <section id="video" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            The Call Is Only <span className="text-primary">The Beginning</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            At JumpCalls, we're not only the best at generating more calls for your business, but
            creating the systems that turn calls into real paying business.
          </p>
        </div>
        <div className="shadow-card mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card">
          <div className="aspect-video w-full">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/3BfqOUxvFZA"
              title="JumpCalls — The Call Is Only The Beginning"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="surface-ink grid-glow rounded-3xl px-6 py-14 text-center md:px-16">
          <h2 className="text-3xl font-extrabold text-ink-foreground md:text-4xl">
            Ready for a busier phone?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Pick a package and we'll build the website, ads, and follow-up that bring in more calls.
          </p>
          <Button variant="hero" size="xl" className="mt-8" asChild>
            <a href="#pricing">
              Get more calls <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
