import { Rocket, Bot, TrendingUp } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Rocket,
    title: "Optimize & Launch",
    body: "We set up Google Maps optimization, AI SEO for local search, pay-per-call ads, and high-converting call landing pages so high-intent searchers can find and dial you.",
  },
  {
    n: "02",
    icon: Bot,
    title: "Automate & Capture",
    body: "Your AI Phone Receptionist and CRM handle calls, missed calls, and inquiries instantly — qualifying leads and booking appointments around the clock.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "Scale Your Revenue",
    body: "Track call volume, monitor recordings, and see cost per call by campaign — then put more budget behind whatever is producing booked jobs.",
  },
];

export function ThreeStep() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          The 3-step process
        </span>
        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
          How JumpCalls gets the right customers calling
        </h2>
        <p className="mt-4 text-muted-foreground">
          A simple path from precise targeting to qualified, answered, revenue-producing phone calls.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="shadow-card group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-green"
          >
            <span className="font-display absolute right-5 top-4 text-5xl font-extrabold text-primary/10">
              {s.n}
            </span>
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
