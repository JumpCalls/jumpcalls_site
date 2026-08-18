import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <Link to="/" className="surface-ink inline-flex items-center rounded-xl px-3 py-2"><img src="/assets/jumpcalls-logo.png" alt="JumpCalls" className="h-9 w-auto" /></Link>
      <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
        <div className="group relative"><button className="inline-flex items-center gap-1 py-5 text-muted-foreground transition hover:text-foreground">Services <ChevronDown className="size-4" /></button><div className="invisible absolute left-1/2 top-full w-[620px] -translate-x-1/2 rounded-2xl border border-border bg-background p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100"><div className="grid grid-cols-2 gap-1">{services.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group/item flex gap-3 rounded-xl p-3 hover:bg-primary-soft"><div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover/item:bg-primary group-hover/item:text-white"><service.icon className="size-4" /></div><span><strong className="block text-sm text-foreground">{service.title}</strong><small className="mt-1 block leading-snug text-muted-foreground">{service.navDescription}</small></span></Link>)}</div><Link to="/services" className="mt-2 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-bold text-ink-foreground">View all services →</Link></div></div>
        <a href="/#how" className="text-muted-foreground hover:text-foreground">How it works</a><a href="/#testimonials" className="text-muted-foreground hover:text-foreground">Results</a><a href="/#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a><Link to="/team" className="text-muted-foreground hover:text-foreground">Team</Link>
      </nav>
      <div className="flex items-center gap-2"><Button variant="ghost" className="hidden sm:inline-flex" asChild><Link to="/free-seo-audit">Free SEO Audit</Link></Button><Button variant="hero" asChild><a href="/#pricing">Get started</a></Button><button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="ml-1 rounded-lg border border-border p-2 lg:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button></div>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden"><div className="mx-auto max-w-6xl"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Services</p>{services.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} onClick={() => setOpen(false)} className="block border-b border-border/60 py-2.5 font-semibold">{service.title}</Link>)}<div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold"><a href="/#how">How it works</a><a href="/#testimonials">Results</a><a href="/#pricing">Pricing</a><Link to="/team">Team</Link></div></div></nav>}
  </header>;
}
