import * as React from "react";

const BARS = [
  { label: "Google Search", value: 59, width: 88, color: "#0F2220" },
  { label: "AI Tools (ChatGPT, Gemini, etc.)", value: 47, width: 70, color: "#13B049" },
  { label: "Social Media", value: 40, width: 60, color: "#6fbf9a" },
];

const CARDS = [
  {
    stat: "71%",
    numeric: 71,
    body: "of AI local-searchers say they're using it more than they were a year ago — this is still accelerating, not leveling off.",
  },
  {
    stat: "Only 5%",
    numeric: null,
    body: "go straight from an AI answer to a purchase. The rest verify — on Google, on your website, and on your reviews — before they call.",
  },
  {
    stat: "30× harder",
    numeric: null,
    body: "to earn an AI recommendation than to rank in Google's local results. Most businesses aren't optimizing for it yet — which is the opportunity.",
  },
];

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useInViewOnce<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);
  return { ref, inView };
}

function useCountUp(
  target: number,
  active: boolean,
  duration: number,
  delay: number,
  skip: boolean,
) {
  const [value, setValue] = React.useState(skip ? target : 0);
  React.useEffect(() => {
    if (!active) return;
    if (skip) {
      setValue(target);
      return;
    }
    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!start) start = now;
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, target, duration, delay, skip]);
  return value;
}

function reveal(
  inView: boolean,
  delay: number,
  skip: boolean,
): React.CSSProperties {
  return {
    opacity: inView || skip ? 1 : 0,
    transform: inView || skip ? "translateY(0)" : "translateY(12px)",
    transition: skip
      ? undefined
      : `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
  };
}

function Bar({
  bar,
  index,
  inView,
  skip,
}: {
  bar: (typeof BARS)[number];
  index: number;
  inView: boolean;
  skip: boolean;
}) {
  // Track fades in first, then bars fill with a staggered wave.
  const trackDelay = 0 + index * 80;
  const barDelay = 300 + index * 150;
  const count = useCountUp(bar.value, inView, 1200, barDelay, skip);
  const shown = inView || skip;

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
      <div
        className="w-full text-sm font-semibold md:w-[290px] md:shrink-0"
        style={{ color: "#0F2220", ...reveal(inView, trackDelay, skip) }}
      >
        {bar.label}
      </div>
      <div
        className="w-full overflow-hidden rounded-[6px]"
        style={{
          background: "#eef4f1",
          height: 46,
          ...reveal(inView, trackDelay, skip),
        }}
      >
        <div
          className="flex h-full items-center justify-end rounded-[6px] pr-4"
          style={{
            width: shown ? `${bar.width}%` : "0%",
            background: bar.color,
            transition: skip
              ? undefined
              : `width 1200ms cubic-bezier(0.22, 1, 0.36, 1) ${barDelay}ms`,
          }}
        >
          <span className="text-sm font-bold tabular-nums text-white">
            {count}%
          </span>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  card,
  index,
  inView,
  skip,
}: {
  card: (typeof CARDS)[number];
  index: number;
  inView: boolean;
  skip: boolean;
}) {
  // Cards animate after the chart finishes (~1.6s in), staggered 150ms apart.
  const delay = 1600 + index * 150;
  const count = useCountUp(card.numeric ?? 0, inView, 900, delay, skip);
  const shown = inView || skip;

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "#f4f8f6",
        border: "1px solid #d9e8e0",
        borderLeft: "4px solid #13B049",
        ...reveal(inView, delay, skip),
      }}
    >
      <div
        className="text-[28px] font-extrabold leading-none tabular-nums"
        style={{
          color: "#0F2220",
          opacity: shown ? 1 : 0,
          transform: shown ? "scale(1)" : "scale(0.9)",
          transition: skip
            ? undefined
            : `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
        }}
      >
        {card.numeric !== null ? `${count}%` : card.stat}
      </div>
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: "#4b5f58" }}
      >
        {card.body}
      </p>
    </div>
  );
}

export function HowPeopleFind() {
  const { ref, inView } = useInViewOnce<HTMLElement>();
  const skip = useReducedMotion();

  // CTA band fades up last, ~150-200ms after the final stat card.
  const ctaDelay = 2200;

  return (
    <section ref={ref} id="how-people-find" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "#13B049", ...reveal(inView, 0, skip) }}
        >
          Where customers actually start looking
        </span>
        <h2
          className="mt-3 text-3xl font-extrabold md:text-4xl"
          style={{ color: "#0F2220", ...reveal(inView, 90, skip) }}
        >
          Become The Answer That Drives Calls
        </h2>
        <p
          className="mt-4 max-w-[700px] text-base leading-relaxed"
          style={{ color: "#6b7c76", ...reveal(inView, 180, skip) }}
        >
          Nearly half of local searches now start with AI. At JumpCalls, we work to guarantee you a spot atop of not only Google Search, but AI and Social Engines as well.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {BARS.map((bar, i) => (
            <Bar key={bar.label} bar={bar} index={i} inView={inView} skip={skip} />
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <StatCard key={card.stat} card={card} index={i} inView={inView} skip={skip} />
          ))}
        </div>

        <div
          className="mt-10 rounded-lg px-6 py-6 text-center md:px-10 md:py-7"
          style={{ background: "#0F2220", ...reveal(inView, ctaDelay, skip) }}
        >
          <p className="text-lg font-bold leading-snug text-white md:text-xl">
            JumpCalls provides the tools and strategies to get more qualified calls from{" "}
            <span style={{ color: "#13B049" }}>AI Search</span>.
          </p>
        </div>

        <p
          className="mt-8 border-t pt-5 text-[11px] leading-relaxed"
          style={{ borderColor: "#d9e8e0", color: "#8a9a94" }}
        >
          Sources: Yext 2026 Consumer Search Behaviors Report (1,120 US adults, March 2026) ·
          BrightLocal 2026 Local Consumer Review Survey · SOCi 2026 Local Visibility Index
        </p>
      </div>
    </section>
  );
}
