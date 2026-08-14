import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, ArrowRight, Bot, User } from "lucide-react";
import { sendChatMessage, ChatMessage } from "@/lib/server-chat";

const TEMPLATE_QUESTIONS = [
  "What does JumpCalls do?",
  "How do I get started?",
  "How can JumpCalls help my business grow?",
];

const MAX_MESSAGES = 6;
const STORAGE_KEY = "jumpcalls_chat_history_v2";
const COUNT_KEY = "jumpcalls_chat_count_v2";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load chat session from localStorage
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);
      const savedCount = localStorage.getItem(COUNT_KEY);

      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else {
        setMessages([
          {
            role: "assistant",
            content:
              "Hi there! 👋 I'm Jumper, the JumpCalls AI growth specialist. Looking to get more exclusive inbound calls and high-paying booked jobs for your local business? Ask me anything about our plans, pricing, or 24/7 AI phone receptionists!",
          },
        ]);
      }

      if (savedCount) {
        setUserMessageCount(parseInt(savedCount, 10) || 0);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (messages.length > 1) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        localStorage.setItem(COUNT_KEY, userMessageCount.toString());
      } catch {
        // Ignore storage errors
      }
    }
  }, [messages, userMessageCount]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && userMessageCount < MAX_MESSAGES) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, userMessageCount]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading || userMessageCount >= MAX_MESSAGES) return;

    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);
    setInputValue("");

    const updatedMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const result = await sendChatMessage({
        data: {
          messages: updatedMessages,
          messageCount: newCount,
        },
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: result.reply,
        },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I had trouble sending that message. You can speak directly with our team or schedule a free call audit at https://calendly.com/jumpcalls/60min.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to render message text and automatically convert URLs into clickable links
  const renderMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);

    return parts.map((part, i) => {
      if (part.startsWith("http://") || part.startsWith("https://")) {
        // Strip trailing punctuation (e.g. '.', '!', '?', ')') from href
        const match = part.match(/^(https?:\/\/[^\s.,!?)]+)(.*)$/);
        const cleanUrl = match ? match[1] : part;
        const trailingPunctuation = match ? match[2] : "";

        return (
          <React.Fragment key={i}>
            <a
              href={cleanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2 hover:opacity-80 break-all"
            >
              {cleanUrl.includes("calendly.com") ? "Book Call Audit / Demo" : cleanUrl}
            </a>
            {trailingPunctuation}
          </React.Fragment>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI chat assistant"
            className="group relative flex items-center gap-2.5 rounded-full border border-primary/40 bg-card p-3.5 text-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-primary/20 md:px-5 md:py-3.5"
          >
            <div className="relative flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-inner">
              <MessageSquare className="size-5 transition-transform duration-200 group-hover:scale-110" />
              <span className="absolute -top-0.5 -right-0.5 flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500 border-2 border-card" />
              </span>
            </div>
            <div className="hidden text-left md:block">
              <div className="text-xs font-extrabold tracking-wide uppercase text-primary flex items-center gap-1">
                <Sparkles className="size-3" /> Jumper AI
              </div>
              <div className="text-xs font-semibold text-muted-foreground">Ask a question</div>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex h-[580px] max-h-[85vh] w-[390px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50 transition-all animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-muted/70 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Bot className="size-4" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-card bg-emerald-500" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-sm leading-tight text-foreground">
                  Jumper
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    AI
                  </span>
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {userMessageCount >= MAX_MESSAGES ? (
                    <span className="text-amber-500 font-medium">Session limit reached</span>
                  ) : (
                    <span>
                      {MAX_MESSAGES - userMessageCount} message
                      {MAX_MESSAGES - userMessageCount === 1 ? "" : "s"} left
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 space-y-3.5 overflow-y-auto p-4 text-sm scroll-smooth">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                    <Bot className="size-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed text-sm shadow-sm ${m.role === "user"
                      ? "rounded-tr-xs bg-primary font-medium text-primary-foreground"
                      : "rounded-tl-xs border border-border/80 bg-background/90 text-foreground"
                    }`}
                >
                  {renderMessageContent(m.content)}
                </div>
                {m.role === "user" && (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground border border-border">
                    <User className="size-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Bot className="size-3.5" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-xs border border-border bg-background px-4 py-3 text-muted-foreground">
                  <span className="size-2 animate-bounce rounded-full bg-primary/60" />
                  <span className="size-2 animate-bounce rounded-full bg-primary/60 [animation-delay:0.2s]" />
                  <span className="size-2 animate-bounce rounded-full bg-primary/60 [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {/* Session Limit Banner */}
            {userMessageCount >= MAX_MESSAGES && !isLoading && (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-3.5 text-center mt-2">
                <div className="text-xs font-bold text-foreground">
                  You've used your {MAX_MESSAGES} chat questions!
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Ready to see how many calls JumpCalls can bring your business?
                </p>
                <a
                  href="https://calendly.com/jumpcalls/60min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Claim Free Local Call Audit <ArrowRight className="size-3" />
                </a>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Questions Chips (shown if user has sent <= 2 messages) */}
          {userMessageCount < MAX_MESSAGES && (
            <div className="border-t border-border/50 bg-muted/20 px-3 py-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Suggested questions:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TEMPLATE_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    disabled={isLoading || userMessageCount >= MAX_MESSAGES}
                    onClick={() => handleSendMessage(q)}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-left text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-foreground disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Footer */}
          <div className="border-t border-border bg-card p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading || userMessageCount >= MAX_MESSAGES}
                placeholder={
                  userMessageCount >= MAX_MESSAGES
                    ? "Session limit reached. Book a demo above!"
                    : "Ask about pricing, services..."
                }
                className="flex-1 rounded-xl border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading || userMessageCount >= MAX_MESSAGES}
                aria-label="Send message"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
