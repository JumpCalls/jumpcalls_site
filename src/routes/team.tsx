import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — JumpCalls" },
      {
        name: "description",
        content:
          "Meet the JumpCalls team behind the targeting, ads, landing pages, and automation that attract qualified callers for home service businesses.",
      },
      { property: "og:title", content: "Our Team — JumpCalls" },
      {
        property: "og:description",
        content: "The people building targeted, qualified call generation systems for home service businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Andreas Papageorge",
    role: "CEO & Founder",
    photo: "/assets/andreas.png",
    initials: "A",
    imgClass: "object-cover object-center",
    bio: [
      "Andreas is the CEO and Founder of JumpCalls, a marketing agency dedicated to helping home service businesses attract qualified calls from the customers, locations, and job types they want through smarter targeting and automation.",
      "He holds a Bachelor of Science in Business Management from Palm Beach Atlantic University.",
      "He specializes in marketing, branding, and visual storytelling, and has worked directly with 35+ clients on their marketing plans and advertising strategy. His work spans everything from paid ad management and creative direction to building the systems that turn ad spend into a steady stream of qualified leads.",
      "At JumpCalls, he combines hands-on marketing expertise with a deep understanding of what actually drives results for local service businesses. He works closely with each client to build a marketing strategy tailored to their business, not a one-size-fits-all template, so every dollar spent on ads is working as hard as possible.",
    ],
  },
  {
    name: "Matthew Papageorge",
    role: "Chief Technology Officer",
    photo: "/assets/matthew.jpg",
    initials: "M",
    imgClass: "object-cover object-[70%_10%]",
    bio: [
      "Matthew is the Chief Technology Officer of JumpCalls, where he leads the technology behind the platform — building the AI-powered tools and automation systems that help home service businesses capture, nurture, and convert every lead that comes their way.",
      "He holds a Master of Science in Computer Science from the Georgia Institute of Technology, specializing in Artificial Intelligence. His graduate work was heavily centered on machine learning algorithms, software engineering, natural language processing, and computer vision architectures.",
      "At JumpCalls, he combines academic engineering principles with direct application building. He architects the platform's core web and automation systems, develops the AI models behind features like the webchat bot and phone appointment scheduler, connects large language models to client data and business workflows, and continuously optimizes the systems that make sure no lead ever falls through the cracks.",
    ],
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="surface-ink inline-flex items-center rounded-xl px-3 py-2">
            <img
              src="/assets/jumpcalls-logo.png"
              alt="JumpCalls logo"
              className="h-9 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) (fallback as HTMLElement).style.display = "flex";
              }}
            />
            <div className="hidden items-center gap-2">
              <svg
                className="h-5 w-auto text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                Jump<span className="text-emerald-400">Calls</span>
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="/#included" className="transition-colors hover:text-foreground">
              What's included
            </a>
            <a href="/#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="/#why" className="transition-colors hover:text-foreground">
              Why us
            </a>
            <a href="/#testimonials" className="transition-colors hover:text-foreground">
              Testimonials
            </a>
            <a href="/#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
            <Link to="/team" className="text-foreground transition-colors">
              Team
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <MobileNav />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <a
                href="https://calendly.com/jumpcalls/60min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
            </Button>
            <Button variant="hero" size="sm" className="sm:hidden" asChild>
              <a
                href="https://calendly.com/jumpcalls/60min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
            <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="/#pricing">Get started</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Team</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          The people behind your calls
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A small, focused team building the research, ads, and automation that keep your phone
          ringing.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <div
              key={m.role}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-primary/50"
            >
              <img
                src={m.photo}
                alt={`${m.name}, ${m.role} at JumpCalls`}
                className={`h-96 w-full bg-muted ${m.imgClass}`}
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground">{m.name}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                <div className="mt-4 space-y-3">
                  {m.bio.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Want to talk to us directly?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Book a 60-minute call and we'll walk through your market, your competition, and the
            fastest path to more qualified calls from the customers they actually want.
          </p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <a
              href="https://calendly.com/jumpcalls/60min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
