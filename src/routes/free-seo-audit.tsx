import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/free-seo-audit")({
  head: () => ({ meta: [
    { title: "Free SEO Audit | JumpCalls" },
    { name: "description", content: "Request a free SEO audit and discover how to attract more qualified callers from Google and AI search." },
    { name: "robots", content: "index,follow" },
  ]}),
  component: FreeSeoAuditPage,
});

const inputClass = "mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

function FreeSeoAuditPage() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main>
    <section className="surface-ink grid-glow"><div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[.9fr_1.1fr] md:items-start md:py-24">
      <div className="md:sticky md:top-24"><span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary"><Search className="size-3.5" /> Free SEO Audit</span><h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink-foreground md:text-5xl">Find out how to get more of the right customers calling.</h1><p className="mt-5 text-lg leading-relaxed text-ink-muted">We’ll review how your business appears across Google, Maps, and AI search, then identify the biggest opportunities to attract qualified callers from the services and locations you want.</p><ul className="mt-8 space-y-4 text-ink-muted">{["Google Business Profile and local visibility review", "Website and high-intent keyword opportunities", "AI search visibility and competitor gaps", "Clear next steps—no jargon or pressure"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span>{item}</span></li>)}</ul><div className="mt-8 flex items-center gap-2 text-sm text-ink-muted"><ShieldCheck className="size-4 text-primary" />Your information stays private. No spam or shared leads.</div></div>
      <div className="rounded-3xl border border-ink-border bg-background p-6 shadow-2xl md:p-9"><p className="text-xs font-bold uppercase tracking-widest text-primary">Request your free audit</p><h2 className="mt-2 text-2xl font-extrabold text-foreground">Tell us about your business.</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We’ll review your online visibility and contact you with the findings.</p>
        <form action="https://formsubmit.co/jumpcalls@gmail.com" method="POST" className="mt-7 space-y-5">
          <input type="hidden" name="_subject" value="New JumpCalls Free SEO Audit Request" /><input type="hidden" name="_next" value="https://www.jumpcalls.com/seo-audit-thanks" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_autoresponse" value="Thanks for requesting a free SEO audit from JumpCalls. We received your information and will be in touch within one business day." /><input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">First name *<input className={inputClass} type="text" name="first_name" placeholder="James" autoComplete="given-name" required /></label><label className="text-sm font-semibold">Last name *<input className={inputClass} type="text" name="last_name" placeholder="Morrison" autoComplete="family-name" required /></label></div>
          <label className="block text-sm font-semibold">Business name *<input className={inputClass} type="text" name="business_name" placeholder="Premier Home Services" autoComplete="organization" required /></label>
          <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Email *<input className={inputClass} type="email" name="email" placeholder="you@business.com" autoComplete="email" required /></label><label className="text-sm font-semibold">Phone *<input className={inputClass} type="tel" name="phone" placeholder="(555) 555-5555" autoComplete="tel" required /></label></div>
          <label className="block text-sm font-semibold">Website *<input className={inputClass} type="url" name="website" placeholder="https://yourbusiness.com" autoComplete="url" required /></label>
          <label className="block text-sm font-semibold">What services or locations do you want more business from?<textarea className="mt-2 min-h-28 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20" name="target_services_and_locations" placeholder="For example: emergency HVAC replacements within 25 miles of Atlanta" /></label>
          <button type="submit" className="surface-green flex h-13 w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-bold shadow-green transition hover:-translate-y-0.5">Send My Free SEO Audit Request <ArrowRight className="size-4" /></button>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">By submitting, you agree that JumpCalls may contact you about your audit. No credit card required.</p>
        </form>
      </div>
    </div></section>
    <section className="mx-auto max-w-3xl px-5 py-16 text-center"><h2 className="text-2xl font-extrabold">Prefer to talk first?</h2><p className="mt-3 text-muted-foreground">Book a free strategy call and we’ll walk through your goals together.</p><a href="https://calendly.com/jumpcalls/60min" target="_blank" rel="noreferrer" className="mt-6 inline-flex font-bold text-primary hover:underline">Book a call instead →</a></section>
  </main><Footer /></div>;
}
