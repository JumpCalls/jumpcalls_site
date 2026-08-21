import { testimonials } from "@/lib/testimonials";
import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone,
  MonitorSmartphone,
  PhoneIncoming,
  Workflow,
  BarChart3,
  MapPin,
  Check,
  ArrowRight,
  Slack,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { HowPeopleFind } from "@/components/HowPeopleFind";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ThreeStep } from "@/components/ThreeStep";
import { Solutions } from "@/components/Solutions";
import { CallFaq, faqs } from "@/components/CallFaq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get More Qualified Calls From The Customers You Want | JumpCalls" },
      {
        name: "description",
        content:
          "Get targeted, qualified calls from the customers, service areas, and job types you want with local search, paid ads, conversion pages, and AI receptionists.",
      },
      {
        property: "og:title",
        content: "Get More Qualified Calls From The Customers You Want | JumpCalls",
      },
      {
        property: "og:description",
        content:
          "Get targeted, qualified calls from the customers, service areas, and job types you want with local search, paid ads, conversion pages, and AI receptionists.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.jumpcalls.com/" },
      { property: "og:image", content: "https://www.jumpcalls.com/og-image.png" },
      { name: "twitter:title", content: "Get More Qualified Calls From The Customers You Want | JumpCalls" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "Get targeted, qualified calls from the customers, service areas, and job types you want." },
      { name: "twitter:image", content: "https://www.jumpcalls.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.jumpcalls.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "JumpCalls",
          url: "https://www.jumpcalls.com/",
          image: "https://www.jumpcalls.com/og-image.png",
          description:
            "Targeted call generation for local businesses: attract qualified callers from the right service areas, job types, and customer profiles through search, paid media, conversion pages, tracking, and AI receptionists.",
          areaServed: { "@type": "Country", name: "United States" },
          serviceType: [
            "Local SEO",
            "Pay-Per-Call Marketing",
            "AI Phone Automation",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Qualified call generation services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Local SEO & Google Maps Optimization",
                  description:
                    "Google Maps optimization for local phone calls and AI SEO for local search, built to win the local Map Pack.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Pay-Per-Call Local Marketing",
                  description:
                    "Google and Meta campaigns targeted to produce qualified calls from the customers, services, and locations the business wants.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Call Tracking & Analytics",
                  description:
                    "Tracking numbers, recordings, and reporting that link every phone call to the campaign and keyword that produced it.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Phone Automation",
                  description:
                    "24/7 AI Phone Receptionist for local contractors that answers calls, qualifies leads, and schedules appointments.",
                },
              },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const included = [
  {
    icon: Megaphone,
    title: "Ad campaigns that attract the right callers",
    body: "Google and Meta campaigns targeted around the services, locations, and customer profiles you want more of.",
  },
  {
    icon: MonitorSmartphone,
    title: "High-converting landing pages",
    body: "Fast, mobile-first pages built to turn the right clicks into qualified calls — designed, written, and hosted for you.",
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
    body: "Budget focused on the service areas, customers, and profitable job types you actually want calling.",
  },
];

const tiers = [
  {
    name: "Starter",
    badge: "Presence",
    price: "$297",
    features: [
      "Review Management",
      "Google Business Profile (GBP) Optimization",
      "Instant Lead Follow-Up",
      "Missed-Call Text-Back",
      "CRM Database Management",
    ],
    note: "Everything you need to fix your local base and catch missed calls",
    spend: "",
    addOn: "",
    cta: "Start with Starter",
    href: "https://buy.stripe.com/5kQbJ13Bf9of4YVdwmcwg02",
    popular: false,
  },
  {
    name: "Discovery",
    badge: "Popular",
    price: "$497",
    features: [
      "Everything in Starter",
      "Local SEO & Keyword Optimization",
      "Google Business Profile Posting Automation",
      "Automated Review Generation",
      "AI Visibility (AI SEO, GEO, AEO Optimization)",
    ],
    note: "Get found by local customers already searching for your services",
    spend: "",
    addOn: "",
    cta: "Get Discovery",
    href: "https://buy.stripe.com/7sY7sLgo12ZRgHD77Ycwg05",
    popular: true,
  },
  {
    name: "Pro",
    badge: "AI/Tech Flagship",
    price: "$897",
    features: [
      "Everything in Discovery",
      "Call Tracking",
      "Single Ad Platform Management (Google or Meta Ads)",
      "Automated Follow-Up Sequence (3-touch)",
      "Full Email & SMS Nurture Automation",
      "Advanced SEO",
      "AI Employees",
      "AI Webchat Feature",
    ],
    note: "Advanced AI visibility and employees that capture, qualify, and nurture leads 24/7",
    spend: "+ ad spend, billed direct",
    addOn: "",
    cta: "Get Pro",
    href: "https://buy.stripe.com/7sYaEX6Nrbwnajf2RIcwg00",
    popular: false,
  },
];

const alaCarte = [
  { item: "New Website", price: "TBD" },
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
  { value: "38%", label: "More qualified calls in month one" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="surface-ink grid-glow relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold leading-[1.05] text-ink-foreground sm:text-5xl md:text-6xl">
              Get The People You Want <span className="text-primary">Calling You</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-bold text-ink-foreground md:text-xl">
              Targeted, qualified calls from the customers, service areas, and job types you want most.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#pricing">
                  Get more qualified calls <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="onInk" size="xl" asChild>
                <a href="/free-seo-audit">Claim Your Free SEO Audit</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Flat monthly pricing. Cancel anytime. Every qualified call tracked to its source.
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

      <ServicesGrid />

      <Solutions />

      <ThreeStep />

      {/* What's included */}
      <section id="included" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What's included
          </span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            A complete system built to make the right customers call
          </h2>
          <p className="mt-4 text-muted-foreground">
            Advertising, landing pages, call tracking, and automated follow-up—all working together
            to attract qualified callers who match the customers and jobs you want.
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

      <HowPeopleFind />

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
              Qualified calls from the customers, service areas, and job types you choose—driven directly to your phone. At JumpCalls we
              deliver in-depth market research reports to better understand your audience,
              customers, and growth.
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
              Real clients, real results—the right callers, better opportunities, more business.
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
              Affordable Pricing Designed To Help{" "}
              <span className="text-primary">Small Business</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Flat monthly plans. No hidden fees, no setup fees, no long-term contract to start.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  t.popular
                    ? "shadow-green relative flex h-full flex-col rounded-3xl border-2 border-primary bg-card p-8"
                    : "shadow-card relative flex h-full flex-col rounded-3xl border border-border bg-card p-8"
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
                <div className="flex-none">
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
                  {t.spend ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.spend}</p>
                  ) : null}
                </div>
                <ul className="mt-7 flex-1 space-y-3">
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
                  <p className="mt-6 overflow-hidden whitespace-nowrap rounded-xl border border-primary/30 bg-primary/5 px-3 py-2 text-center text-xs font-semibold text-primary sm:text-sm">
                    {t.addOn}
                  </p>
                ) : null}
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
            JumpCalls attracts qualified callers who fit your ideal customer profile, then builds
            the systems that turn those conversations into real paying business.
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

      <CallFaq />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="surface-ink grid-glow rounded-3xl px-6 py-14 text-center md:px-16">
          <h2 className="text-3xl font-extrabold text-ink-foreground md:text-4xl">
            Ready to get more of the right people calling?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Tell us the customers, locations, and jobs you want. We’ll build the website, ads, AI answering,
            and follow-up that attract and convert those qualified callers—or audit your current system and
            show you where the best opportunities are being lost.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#pricing">
                Get more qualified calls <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="onInk" size="xl" asChild>
              <a href="/free-seo-audit">Claim Your Free SEO Audit</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
