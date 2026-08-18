import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "How does Google Maps Optimization get my business more phone calls?",
    a: "Most local searches show the Map Pack before anything else, and those listings have a tap-to-call button right on them. Google Maps optimization for local phone calls means fixing and expanding your Google Business Profile — categories, services, service areas, photos, posts, and reviews — so you rank for nearby high-intent searches. When you show up in the top three, you get the calls that used to go to your competitors.",
  },
  {
    q: "What is an AI Phone Receptionist and how does it answer incoming calls?",
    a: "An AI Phone Receptionist for local contractors is a voice assistant that picks up your phone 24/7 — nights, weekends, and while you're on a job. It greets the caller, answers common questions, qualifies the job, and schedules the appointment straight into your calendar, then logs everything in your CRM with a transcript. If it can't handle something, it routes the call or texts you immediately so nothing goes cold.",
  },
  {
    q: "What makes a call qualified?",
    a: "A qualified call comes from someone in your chosen service area who needs a service you want to sell and fits the customer profile you want more of. We build targeting, messaging, landing pages, and qualification around those criteria so your team spends time on real opportunities—not irrelevant inquiries.",
  },
  {
    q: "Can I track which marketing campaign brought in each phone call?",
    a: "Yes. We assign tracking numbers by campaign and use dynamic number insertion on your high-converting call landing pages, so every call is attributed to the exact ad, keyword, or channel that produced it. You get call volume, recordings, call length, and cost per call in one dashboard — so budget decisions are based on booked jobs, not guesses.",
  },
  {
    q: "How does AI Search (Google AI Overviews, ChatGPT) impact my business?",
    a: "AI Search engines and Google AI Overviews synthesize results directly at the top of search pages before users even scroll down. Customers are now asking natural, conversational questions like 'Who is the most reliable emergency plumber near me?' AI platforms select recommended businesses based on local trust signals, verified review sentiment, and structured schema data. If your business isn't optimized for AI Search (Generative Engine Optimization), you risk becoming invisible to modern local buyers. JumpCalls optimizes your business so search engines recommend you first—and provides the AI phone tools to turn those searchers directly into booked calls.",
  },
];

export function CallFaq() {
  return (
    <section id="faq" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Questions local businesses ask us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Straight answers on local search, AI phone automation, and call tracking.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="shadow-card rounded-2xl border border-border bg-card px-6 transition-colors last:border-b hover:border-primary/40"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">
                <h3 className="text-base font-bold">{f.q}</h3>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
