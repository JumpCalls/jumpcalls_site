import { defineConfig, loadEnv, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const SYSTEM_PROMPT = `You are Jumper, the elite AI Sales & Growth Specialist for JumpCalls (jumpcalls.com), the premier inbound call generation agency and technology platform for local contractors and home service businesses (plumbers, HVAC, electricians, roofers, landscapers, painters, etc.).

Your Persona & Mission:
- Your name is Jumper.
- You are a consultative, enthusiastic, highly persuasive sales specialist who deeply understands the contractor and local service trade industry.
- Your mission is twofold:
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
4. Call-to-Action (CTA): Invite them to lock in a Free 60-Minute Local Call Audit at https://calendly.com/jumpcalls/60min to see how many calls they are leaving on the table.
5. Keep Responses Concise & Punchy: 2 to 4 sentences maximum. High energy, professional, friendly, and persuasive.
6. Strictly refuse questions completely unrelated to JumpCalls, local marketing, contractor business growth, or sales calls.`;

function chatDevApiPlugin(): Plugin {
  return {
    name: "chat-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === "/api/chat" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => (body += chunk));
          req.on("end", async () => {
            try {
              const { messages } = JSON.parse(body || "{}");
              const env = loadEnv("development", process.cwd(), "");
              const apiKey = env["VITE_OPENAI_API_KEY"] || env["OPENAI_API_KEY"] || process.env["VITE_OPENAI_API_KEY"] || process.env["OPENAI_API_KEY"];

              if (!apiKey) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Missing OPENAI_API_KEY in .env" }));
                return;
              }

              const conversation = (messages || [])
                .filter((m: any) => m.role === "user" || m.role === "assistant")
                .slice(-8)
                .map((m: any) => ({
                  role: m.role,
                  content: String(m.content).slice(0, 1000),
                }));

              const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
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

              if (!openAiRes.ok) {
                const errText = await openAiRes.text();
                console.error("[Vite Dev Chat API] OpenAI error:", errText);
                res.statusCode = openAiRes.status;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: errText }));
                return;
              }

              const data = await openAiRes.json();
              const reply = data.choices?.[0]?.message?.content?.trim() || "";

              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ reply, isMock: false }));
            } catch (err: any) {
              console.error("[Vite Dev Chat API] Internal error:", err);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    chatDevApiPlugin(),
  ],
});
