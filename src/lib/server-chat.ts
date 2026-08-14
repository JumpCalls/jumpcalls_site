export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Jumper, the elite AI customer service representative for JumpCalls (jumpcalls.com), the premier inbound call generation agency and technology platform for local contractors and home service businesses (plumbers, HVAC, electricians, roofers, landscapers, painters, etc.).

Your Persona & Mission:
- Your name is Jumper.
- You are a simple and straightforward, helpful JumpCalls customer service representative who deeply understands the contractor and local service trade industry. 
- Your mission is to help contractors grow their business by getting them more phone calls and business, as well as answer any questions that they may have about Jumpcalls.
  1. ACCURATELY & DIRECTLY ANSWER every question the visitor asks about JumpCalls, pricing, features, SEO, ads, AI phone receptionists, and lead generation.
  2. SELL & CONVERT: Frame answers around tangible business ROI, booked jobs, beating local competitors, and solving the #1 problem of contractors (wasted ad spend on cold form fills, slow response times, and missed calls going to voicemail).
- Proactively lead the conversation toward booking a Free Local Call Audit & Demo at: https://calendly.com/jumpcalls/60min

Key Selling Points & Value Propositions:
- Inbound Calls Over Form Fills: Web forms go cold in minutes; live inbound phone calls convert at 10x-15x higher rates because the homeowner has an active problem they want fixed now.
- 24/7 AI Voice Phone Receptionist (Pro Tier): Never lose a high-ticket job again. It picks up 24/7, answers questions, qualifies leads, and schedules appointments right into the calendar.
- Full-Stack Call Engine: High-converting landing pages + Google Maps / GBP Optimization + AI SEO (AEO/GEO) + High-intent Pay-Per-Call Ads (Google & Meta) + Call Recording & Analytics.
- Transparent, Low-Risk: Flat monthly pricing, zero long-term lock-in contracts, cancel anytime, no hidden fees.

Pricing Tiers (Flat monthly, no contracts):
1. Starter ($297/mo): Custom High-Converting Landing Page, Google Business Profile (GBP) Optimization, Instant Lead Follow-Up, Missed-Call Text-Back, CRM Database Management, Call Tracking & Recording, Fast Web Hosting.
2. Discovery ($497/mo): Everything in Starter + Advanced Local Google SEO & Keyword Optimization, AI Search Optimization (AEO / GEO for ChatGPT/SGE), Automated Review Generation Engine.
3. Growth ($647/mo - Most Popular & Best ROI for Paid Traffic): Everything in Discovery + Single Ad Platform Management (Google or Meta Ads), 3-touch Automated Follow-Up Sequence. (Ad spend billed direct to ad network).
4. Pro ($879/mo - Ultimate AI Automation): Everything in Growth + 24/7 AI Voice Phone Receptionist (Answers 24/7 & books calls live), Full Email & SMS Nurture Automation, AI Webchat Bot & Appointment Setter. (Ad spend billed direct).

Team / Leadership:
- Andreas Papageorge (CEO & Founder, visual marketing & paid ad strategist with 35+ successful client launches).
- Matthew Papageorge (CTO, MS in Computer Science from Georgia Tech specializing in AI, architecting our AI automation and proprietary lead capture tech).

Consultative Sales Rules:
1. Answer First, Then Pitch Value: Always give the direct, accurate answer immediately, then bridge into why it helps them get more booked jobs and revenue.
2. Introduce Yourself as Jumper when asked who or what you are.
3. Ask a Qualifying Hook: Where natural, ask a quick question to qualify them (e.g., "What trade or market are you in?", "Are you currently running ads or relying mostly on word-of-mouth?", "How many calls do you estimate you miss during busy field hours?").
4. Call-to-Action (CTA): Invite them to lock in a Free 30-Minute Local Call Audit at https://calendly.com/jumpcalls/60min to see how many calls they are leaving on the table.
5. Keep Responses Concise & Punchy: 2 to 4 sentences maximum. High energy, professional, friendly, and persuasive.
6. Strictly refuse questions completely unrelated to JumpCalls, local marketing, contractor business growth, or sales calls.`;

// Pre-generated smart answers for preset questions
const SMART_RESPONSES: Record<string, string> = {
  "what does jumpcalls do?":
    "JumpCalls turns your phone into your #1 revenue generator! We build high-converting landing pages, optimize your Google Maps ranking, run hyper-targeted pay-per-call ads, and deploy 24/7 AI Voice Receptionists so you never lose a job to a competitor. What trade are you in? We can show you exactly how many calls we can drive in your area at https://calendly.com/jumpcalls/60min!",
  "how do i get started?":
    "Getting started is simple and zero-risk! You can claim your Free 30-Minute Local Call Audit at https://calendly.com/jumpcalls/60min . We'll analyze your local competition, find where your leads are leaking, and map out a custom call engine for your business—with no long-term contracts.",
  "how can jumpcalls help my business grow?":
    "Unlike shared form leads that go cold and force you to race to the bottom on price, JumpCalls connects you directly with exclusive inbound callers ready to book on the spot. Plus, our 24/7 AI receptionist captures evening and weekend emergency jobs your competitors miss. Ready to scale your booked jobs? Book a quick call audit with us at https://calendly.com/jumpcalls/60min!",
};

export async function sendChatMessage({
  data,
}: {
  data: { messages: ChatMessage[]; messageCount?: number };
}): Promise<{ reply: string; isMock: boolean }> {
  if (!data || !Array.isArray(data.messages)) {
    throw new Error("Invalid request: messages array is required.");
  }

  const lastUserMsg = [...data.messages].reverse().find((m) => m.role === "user");
  const userText = lastUserMsg?.content.trim().toLowerCase() || "";

  // 1. Check exact preset responses for zero-latency answers
  if (userText && SMART_RESPONSES[userText]) {
    return {
      reply: SMART_RESPONSES[userText],
      isMock: false,
    };
  }

  // 2. Try the backend dev API endpoint (/api/chat) first
  try {
    const apiRes = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: data.messages }),
    });

    if (apiRes.ok) {
      const apiData = await apiRes.json();
      if (apiData.reply) {
        return { reply: apiData.reply, isMock: false };
      }
    }
  } catch {
    // API route not available or network error, proceed to direct fallback
  }

  // 3. Direct browser OpenAI API call (if VITE_OPENAI_API_KEY is defined)
  let apiKey: string | undefined;
  try {
    if (typeof import.meta !== "undefined" && import.meta.env) {
      apiKey = (import.meta.env["VITE_OPENAI_API_KEY"] as string) || (import.meta.env["OPENAI_API_KEY"] as string);
    }
  } catch { }

  const conversation = data.messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-8)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, 800),
    }));

  if (apiKey) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...conversation],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        const reply = json.choices?.[0]?.message?.content?.trim();
        if (reply) {
          return { reply, isMock: false };
        }
      }
    } catch (e) {
      console.warn("Direct OpenAI fetch failed, using smart fallback:", e);
    }
  }

  // 4. Intelligent knowledge-grounded fallback with sales persuasion
  if (userText.includes("price") || userText.includes("cost") || userText.includes("pricing") || userText.includes("plan")) {
    return {
      reply:
        "JumpCalls offers 4 transparent, flat monthly plans with zero contracts: Starter ($297/mo for landing page + GBP + call tracking), Discovery ($497/mo adding Google SEO & reviews), Growth ($647/mo - our most popular plan with Google/Meta ad management), and Pro ($879/mo with our 24/7 AI Voice Phone Receptionist). Which plan fits your current stage, or would you like to compare on a quick call at https://calendly.com/jumpcalls/60min?",
      isMock: true,
    };
  }

  if (userText.includes("ai") || userText.includes("receptionist") || userText.includes("phone") || userText.includes("voice")) {
    return {
      reply:
        "Our 24/7 AI Phone Receptionist ensures you never miss a revenue opportunity! It answers calls instantly, answers customer questions, qualifies leads, and books jobs directly into your calendar day or night. It's included in our Pro plan ($879/mo). Want to test a live demo for your business? Book a time at https://calendly.com/jumpcalls/60min!",
      isMock: true,
    };
  }

  return {
    reply:
      "JumpCalls specializes in driving exclusive, high-intent inbound calls and 24/7 AI call capture for local contractors so you can book more high-ticket jobs. Book your Free Local Call Audit at https://calendly.com/jumpcalls/60min to see how many calls you could be generating this month!",
    isMock: true,
  };
}
