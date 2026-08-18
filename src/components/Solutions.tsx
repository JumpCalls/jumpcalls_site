import { Target, Bot, PhoneCall } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Drive high-intent local traffic",
    body: "Google Maps, AI SEO, and paid campaigns target the exact services, locations, and customer profiles you want more business from.",
  },
  {
    icon: Bot,
    title: "Answer instantly, every time",
    body: "An AI Phone Receptionist for local contractors picks up 24/7, qualifies the caller, and books the appointment while intent is still hot.",
  },
  {
    icon: PhoneCall,
    title: "Never lose a caller again",
    body: "Missed-call text-back, instant lead follow-up, and CRM nurturing catch anyone who slips through — so every high-intent caller gets handled.",
  },
];

export function Solutions() {
  return (
    <section id="solution" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            AI Solutions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            The JumpCalls AI Engine
          </h2>

          <p className="mt-4 text-muted-foreground">
            We combine local traffic drivers with instantaneous AI receptionists, so every
            qualified caller gets answered immediately — and every call gets tracked back to the
            campaign that created it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
