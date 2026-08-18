import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getService, services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => loaderData ? ({ meta: [
    { title: `${loaderData.title} | JumpCalls` },
    { name: "description", content: loaderData.body },
    { property: "og:title", content: `${loaderData.title} | JumpCalls` },
    { property: "og:description", content: loaderData.body },
    { name: "twitter:title", content: `${loaderData.title} | JumpCalls` },
    { name: "twitter:description", content: loaderData.body },
  ]}) : ({ meta: [] }),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const Icon = service.icon;
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="surface-ink grid-glow overflow-hidden"><div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-28">
        <div><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">{service.eyebrow}</span><h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink-foreground md:text-6xl">{service.headline}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{service.body}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="xl" asChild><a href="/#pricing">View plans <ArrowRight className="size-4" /></a></Button><Button variant="onInk" size="xl" asChild><Link to="/free-seo-audit">Claim your free SEO audit</Link></Button></div></div>
        <div className="rounded-3xl border border-ink-border bg-ink-foreground/5 p-8"><div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Icon className="size-7" /></div><h2 className="mt-6 text-2xl font-bold text-ink-foreground">What’s included</h2><ul className="mt-6 space-y-4">{service.points.map((point) => <li key={point} className="flex gap-3 text-ink-muted"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{point}</li>)}</ul></div>
      </div></section>
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-widest text-primary">Built for outcomes</span><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Marketing that ends with a real conversation.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{service.outcomes.map((outcome, index) => <div key={outcome} className="rounded-2xl border border-border bg-card p-6 shadow-card"><span className="text-sm font-extrabold text-primary">0{index + 1}</span><h3 className="mt-4 text-lg font-bold">{outcome}</h3></div>)}</div></section>
      <section className="border-y border-border bg-muted/50"><div className="mx-auto max-w-6xl px-5 py-20 md:py-28"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-widest text-primary">How it works</span><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Simple, managed, and focused on calls.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{service.process.map((step, index) => <div key={step} className="rounded-2xl bg-background p-7 shadow-card"><div className="flex size-10 items-center justify-center rounded-full bg-primary-soft font-bold text-primary">{index + 1}</div><p className="mt-5 font-semibold leading-relaxed">{step}</p></div>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-5 py-20"><div className="surface-ink grid-glow rounded-3xl px-6 py-14 text-center md:px-16"><PhoneCall className="mx-auto size-9 text-primary" /><h2 className="mt-5 text-3xl font-extrabold text-ink-foreground md:text-4xl">Ready to get the right people calling?</h2><p className="mx-auto mt-4 max-w-xl text-ink-muted">Choose the JumpCalls plan that fits your next stage, or book a free audit and we’ll identify how to attract more callers who match the customers and jobs you want.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button variant="hero" size="xl" asChild><a href="/#pricing">See pricing</a></Button><Button variant="onInk" size="xl" asChild><a href="https://calendly.com/jumpcalls/60min" target="_blank" rel="noreferrer">Book a Demo</a></Button></div></div></section>
      <section className="border-t border-border bg-muted/40"><div className="mx-auto max-w-6xl px-5 py-16"><h2 className="text-2xl font-extrabold">Explore every JumpCalls service</h2><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.filter((item) => item.slug !== service.slug).map((item) => <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="rounded-xl border border-border bg-background p-4 font-semibold transition hover:border-primary hover:text-primary">{item.title} <ArrowRight className="ml-1 inline size-4" /></Link>)}</div></div></section>
    </main><Footer />
  </div>;
}
