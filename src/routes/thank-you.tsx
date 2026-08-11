import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Your JumpCalls Plan Is Confirmed" },
      {
        name: "description",
        content:
          "Your JumpCalls purchase is confirmed. Our team will reach out shortly to kick off your website, ads, and follow-up systems.",
      },
      { property: "og:title", content: "Thank You — Your JumpCalls Plan Is Confirmed" },
      {
        property: "og:description",
        content: "Your JumpCalls purchase is confirmed. We'll be in touch to start your build.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function ThankYouPage() {
  useEffect(() => {
    window.gtag?.("event", "conversion", {
      send_to: "AW-18375443357/_vPaCNeRtN0cEJ2HjLpE",
      value: 1.0,
      currency: "USD",
      transaction_id: "",
    });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-20">
      <div className="w-full max-w-xl rounded-2xl border border-primary/30 bg-card p-10 text-center shadow-sm">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Payment confirmed
        </span>
        <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          You're in. Let's get the phone jumpin'.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Thanks for joining JumpCalls. Our team will reach out within one business day to kick off
          your build — website, ad creatives, and follow-up systems.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://calendly.com/jumpcalls/60min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book your kickoff call
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
