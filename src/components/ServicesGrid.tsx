import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section id="services" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our services</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">One team. One goal: get the right people calling.</h2>
          <p className="mt-4 text-muted-foreground">Six services working together to target your ideal customers, attract qualified callers, and turn their intent into booked business.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="shadow-card group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-green">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><service.icon className="size-5" /></div>
              <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">{service.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore this service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
