import {
  MapPin,
  Search,
  Megaphone,
  MonitorSmartphone,
  Bot,
  BarChart3,
  Check,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    body: "Local Map Pack dominance for nearby searchers — Google Maps optimization for local phone calls, so the people closest to you dial you first.",
    points: ["Google Business Profile optimization", "Local Map Pack ranking", "Review & photo strategy"],
  },
  {
    icon: Search,
    title: "AI SEO & Google SEO",
    body: "AI SEO for local search plus traditional Google SEO — ranking your service pages for the high-intent queries that end in a phone call.",
    points: ["Service & city page builds", "AI answer-engine visibility", "High-intent keyword targeting"],
  },
  {
    icon: Megaphone,
    title: "Targeted Meta & Google Ads",
    body: "Campaigns structured for pay-per-call local marketing and direct inbound calls — not vanity clicks.",
    points: ["Call-only & call-extension ads", "Meta lead & call campaigns", "Creative built to drive calls"],
  },
  {
    icon: MonitorSmartphone,
    title: "Web & Landing Page Development",
    body: "High-converting call landing pages: mobile-first, fast, and tap-to-call optimized from the first scroll.",
    points: ["Tap-to-call mobile layout", "Conversion-first copy", "Hosting & ongoing updates"],
  },
  {
    icon: Bot,
    title: "AI Automation Suite",
    body: "A 24/7 AI Phone Receptionist for local contractors that answers calls, qualifies leads, and schedules appointments — backed by chat and CRM automation.",
    points: [
      "24/7 AI Phone Receptionist",
      "AI web chatbot & instant text-back",
      "Email & CRM automation with nurturing",
    ],
  },
  {
    icon: BarChart3,
    title: "Call Tracking & Analytics",
    body: "Clear reporting that links every call to the specific ad, keyword, or page that produced it.",
    points: ["Tracking numbers per campaign", "Call recordings & outcomes", "Cost-per-call reporting"],
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Our services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Get More Calls With Less
          </h2>

          <p className="mt-4 text-muted-foreground">
            Inbound call generation for local businesses, end to end — local search visibility, paid
            traffic, conversion pages, AI answering, and the tracking that proves it all works.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="shadow-card group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-green"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
