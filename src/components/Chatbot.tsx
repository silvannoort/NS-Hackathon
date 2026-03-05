"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Message = { role: "user" | "assistant"; content: string };

export default function Chatbot() {
  const { t, lang } = useLanguage();
  const c = t.chatbot;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);

  async function send(text?: string) {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;
    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, lang }),
      });
      if (!res.ok || !res.body) throw new Error();
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages((prev) => { const u = [...prev]; u[u.length - 1] = { role: "assistant", content: text }; return u; });
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: c.errorMsg }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-duo-navy dark:bg-duo-blue text-white px-4 py-3 rounded-full shadow-lg hover:bg-duo-blue dark:hover:bg-duo-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
        aria-label={open ? c.closeLabel : c.openLabel}
        aria-expanded={open}
        aria-controls="chatbot-panel"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
        <span className="text-sm font-semibold">{open ? c.close : c.open}</span>
      </button>

      {open && (
        <div id="chatbot-panel" role="dialog" aria-label={c.dialogLabel} aria-modal="false"
          className="fixed bottom-20 right-6 z-50 w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col border border-duo-gray-border dark:border-slate-600 overflow-hidden"
          style={{ height: "min(520px, 80vh)" }}>
          <div className="bg-duo-navy dark:bg-slate-900 text-white px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-duo-yellow flex items-center justify-center shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#003082" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <div>
              <p className="font-bold text-sm leading-none">{c.title}</p>
              <p className="text-xs text-blue-200 mt-0.5">{c.subtitle}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-slate-50 dark:bg-slate-900" role="log" aria-live="polite" aria-label={c.logLabel}>
            {messages.length === 0 && (
              <div className="flex flex-col gap-3">
                <div className="bg-duo-navy dark:bg-slate-700 text-white text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  {c.greeting}
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  {c.suggestions.map((s) => (
                    <button key={s} onClick={() => send(s)}
                      className="text-left text-xs bg-white dark:bg-slate-800 border border-duo-blue dark:border-slate-500 text-duo-blue dark:text-slate-200 px-3 py-2 rounded-lg hover:bg-duo-blue-light dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`text-sm px-4 py-3 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-duo-blue text-white rounded-br-sm"
                    : "bg-white dark:bg-slate-700 border border-duo-gray-border dark:border-slate-600 text-duo-text dark:text-slate-100 rounded-bl-sm shadow-sm"
                }`}>
                  {msg.content || (
                    <span className="flex gap-1 items-center" aria-label={c.typingLabel}>
                      <span className="w-1.5 h-1.5 bg-duo-gray dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-duo-gray dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-duo-gray dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="px-3 py-3 border-t border-duo-gray-border dark:border-slate-600 bg-white dark:bg-slate-800 flex gap-2 items-end">
            <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
              placeholder={c.placeholder} rows={1} disabled={loading} aria-label={c.inputLabel}
              className="flex-1 resize-none text-sm border border-duo-gray-border dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-duo-text dark:text-slate-100 placeholder:text-duo-gray dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-duo-blue disabled:opacity-50 leading-relaxed"
              style={{ maxHeight: "96px", overflowY: "auto" }} />
            <button onClick={() => send()} disabled={!input.trim() || loading} aria-label={c.sendLabel}
              className="shrink-0 bg-duo-navy dark:bg-duo-blue text-white p-2.5 rounded-lg hover:bg-duo-blue dark:hover:bg-duo-navy disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
