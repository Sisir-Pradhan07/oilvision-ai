import { useEffect, useRef, useState } from "react";

import {
  MessageCircle,
  Send,
  X,
  Bot,
  User,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import api from "../../services/api";


function OilVisionChat() {
  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const inputRef = useRef(null);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
  if (!loading && !isTyping && isOpen) {
    inputRef.current?.focus();
  }
}, [loading, isTyping, isOpen]);


  function getTypingDelay(character) {
    if (character === "." || character === "!" || character === "?") {
      return 180;
    }

    if (character === "," || character === ":") {
      return 70;
    }

    if (character === " ") {
      return 12;
    }

    return 18;
  }


  async function typeAssistantMessage(fullMessage) {
    const messageId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      {
        id: messageId,
        role: "assistant",
        content: "",
      },
    ]);

    setIsTyping(true);

    let currentText = "";

    for (const character of fullMessage) {
      currentText += character;

      setMessages((prev) =>
        prev.map((chat) =>
          chat.id === messageId
            ? { ...chat, content: currentText }
            : chat
        )
      );

      await new Promise((resolve) =>
        setTimeout(resolve, getTypingDelay(character))
      );
    }

    setIsTyping(false);
  }


  async function handleSubmit(e) {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setLoading(true);

    try {
      const response = await api.post("/chat", {
        message: trimmedMessage,
      });

      setLoading(false);

      await typeAssistantMessage(response.data.response);

    } catch (error) {
      console.error("Chat error:", error);

      setLoading(false);

      await typeAssistantMessage(
        "I'm temporarily having trouble processing that message. You can try sending it again."
      );
    }
  }


  return (
    <>
      {/* Floating Chat Button */}

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-cyan-400 shadow-lg shadow-cyan-500/20"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>


      {/* Chat Window */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[380px] flex-col overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950 shadow-2xl shadow-black/40"
          >
            {/* Header */}

            <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <Bot size={20} className="text-cyan-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  OilVision AI
                </h3>

                <p className="text-xs text-slate-400">
                  Project assistant
                </p>
              </div>

              <div className="ml-auto flex items-center gap-2 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online
              </div>
            </div>


            {/* Messages */}

            <div
  className="flex-1 space-y-4 overflow-y-auto overscroll-contain p-4"
  onWheel={(e) => e.stopPropagation()}
>
              {messages.length === 0 && (
                <div className="flex h-full items-center justify-center px-4 text-center">
                  <div>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                      <Bot size={28} className="text-blue-400" />
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                      How can I help?
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Ask me anything about OilVision AI, its features,
                      prediction workflow, dashboard, or how the platform works.
                    </p>
                  </div>
                </div>
              )}


              {messages.map((chat) => (
                <motion.div
                  key={chat.id}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`flex gap-2 ${
                    chat.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {chat.role === "assistant" && (
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                      <Bot size={15} className="text-blue-400" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      chat.role === "user"
                        ? "rounded-tr-sm bg-blue-500 text-white"
                        : "rounded-tl-sm border border-slate-800 bg-slate-900 text-slate-300"
                    }`}
                  >
                    {chat.content}

                    {chat.role === "assistant" &&
                      isTyping &&
                      chat.id === messages[messages.length - 1]?.id && (
                        <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-cyan-400 align-middle" />
                      )}
                  </div>

                  {chat.role === "user" && (
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800">
                      <User size={15} className="text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}


              {/* Thinking Indicator */}

              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10">
                    <Bot size={15} className="text-blue-400" />
                  </div>

                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-slate-800 bg-slate-900 px-4 py-4">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-2 w-2 rounded-full bg-cyan-400"
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: dot * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>


            {/* Input */}

            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-800 p-4"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2 focus-within:border-blue-500/60">
                <input
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    loading || isTyping
                      ? "OilVision AI is responding..."
                      : "Ask OilVision AI..."
                  }
                  disabled={loading || isTyping}
                  className="flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500 disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={
                    !message.trim() ||
                    loading ||
                    isTyping
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={17} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


export default OilVisionChat;