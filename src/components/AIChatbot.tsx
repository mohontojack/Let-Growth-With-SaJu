/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, User, Bot, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "model";
  parts: [{ text: string }];
}

export default function AIChatbot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    const newMessages: Message[] = [
      ...messages,
      { role: "user", parts: [{ text: userMessage }] }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: messages }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages([...newMessages, { role: "model", parts: [{ text: data.text }] }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: i18n.language === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: i18n.language === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 bottom-0 ${i18n.language === "ar" ? "left-0" : "right-0"} w-full max-w-lg bg-luxury-dark border-l border-white/10 shadow-2xl z-[70] flex flex-col`}
          >
            <div className="p-8 border-b border-white/10 flex justify-between items-center bg-black/40 backdrop-blur-md">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 rounded bg-luxury-green shadow-[0_0_15px_#50c878] flex items-center justify-center rotate-45">
                  <Bot className="text-luxury-dark -rotate-45" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-sm">Advisor Intelligence</h3>
                  <span className="text-[10px] text-luxury-gold flex items-center uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-green mr-2 rtl:ml-2 glow-sm"></span>
                    Neural Link Active
                  </span>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent)]">
              {messages.length === 0 && (
                <div className="text-center py-20 space-y-6">
                  <div className="w-16 h-16 border border-luxury-gold/30 rounded rotate-45 flex items-center justify-center mx-auto mb-10">
                    <Bot className="text-luxury-gold -rotate-45" size={32} />
                  </div>
                  <p className="text-slate-500 text-[11px] uppercase tracking-[0.2em] max-w-xs mx-auto leading-loose">
                    Initiating secure session with LetGrowthWithSaJu intelligence node. How shall we drive your vision forward?
                  </p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-5 text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-luxury-gold text-luxury-dark font-bold rounded shadow-gold" 
                      : "bg-white/5 text-slate-300 border border-white/10 rounded"
                  }`}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-5 rounded border border-white/10">
                    <Loader2 className="animate-spin text-luxury-green" size={20} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 bg-black/40 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Inquire..."
                  className="w-full bg-white/5 border border-white/10 rounded py-5 pl-7 pr-16 focus:outline-none focus:border-luxury-gold/50 text-white transition-all uppercase text-[10px] tracking-widest"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-4 rtl:left-4 top-1/2 -translate-y-1/2 p-2.5 bg-luxury-gold text-luxury-dark rounded hover:scale-105 transition-transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
