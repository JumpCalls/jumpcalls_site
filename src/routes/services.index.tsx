import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Qualified Call Generation Services | JumpCalls" },
    { name: "description", content: "Attract targeted, qualified calls from the customers, service areas, and job types you want most." },
  ]}),
  component: ServicesPage,
});

function ServicesPage() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main>
    <section className="surface-ink grid-glow"><div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28"><span className="text-xs font-bold uppercase tracking-widest text-primary">The complete JumpCalls system</span><h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold text-ink-foreground md:text-6xl">Everything you need to get the right customers calling.</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">One team connects precise targeting, conversion pages, AI qualification, follow-up, and tracking into one qualified call generation engine.</p></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28"><div className="grid gap-6 md:grid-cols-2">{services.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary"><div className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary"><service.icon className="size-6" /></div><h2 className="mt-6 text-2xl font-bold">{service.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{service.body}</p><ul className="mt-5 space-y-2">{service.points.map((point) => <li key={point} className="flex gap-2 text-sm"><Check className="size-4 text-primary" />{point}</li>)}</ul><span className="mt-7 inline-flex items-center gap-2 font-bold text-primary">See how it works <ArrowRight className="size-4 group-hover:translate-x-1" /></span></Link>)}</div></section>
    <section className="mx-auto max-w-6xl px-5 pb-20"><div className="surface-ink rounded-3xl p-10 text-center md:p-16"><h2 className="text-3xl font-extrabold text-white">Not sure how to reach your ideal callers?</h2><p className="mx-auto mt-4 max-w-xl text-ink-muted">Start with a free SEO audit. We’ll identify where your best-fit customers search, what makes them call, and where qualified opportunities are being lost.</p><Button variant="hero" size="xl" className="mt-8" asChild><Link to="/free-seo-audit">Claim your free audit</Link></Button></div></section>
  </main><Footer /></div>;
}
