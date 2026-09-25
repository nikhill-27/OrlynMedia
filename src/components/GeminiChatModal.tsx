import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Zap, 
  RotateCcw, 
  ArrowUpRight, 
  Film, 
  Code2, 
  Check, 
  Copy,
  ChevronDown,
  MessageSquare
} from 'lucide-react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  modelUsed?: string;
}

interface GeminiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTransferToInquiry?: (notes: string) => void;
}

const STARTER_PROMPTS = [
  {
    icon: Code2,
    label: 'Web Design Scope',
    prompt: 'What deliverables are included in a 3-week Web Design & 3D Interactive sprint?',
  },
  {
    icon: Film,
    label: 'Video Editing Pipeline',
    prompt: 'How does your video editing pipeline work, from RAW 4K ingest to DaVinci HDR color grading?',
  },
  {
    icon: Zap,
    label: 'Integrated Bundle Estimate',
    prompt: 'Can you estimate the timeline and budget for an e-commerce redesign paired with 3 commercial video ads?',
  },
  {
    icon: Sparkles,
    label: 'Tech Stack & Conversion',
    prompt: 'What tech stack do you recommend for sub-second page loads and high D2C conversion rates?',
  },
];

export const GeminiChatModal: React.FC<GeminiChatModalProps> = ({
  isOpen,
  onClose,
  onTransferToInquiry,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `### Welcome to Orlyn Media's AI Creative Studio

I am your **Creative Director & Technical Architect** powered by Gemini. We specialize in two core disciplines:

1. **Web Designing & Engineering**: Bespoke UX/UI, 3D WebGL / Three.js shaders, Headless Shopify Plus, and sub-second React architectures.
2. **Video Editing & Post-Production**: Cinematic 4K/8K commercial edits, kinetic motion design, DaVinci Resolve Studio HDR color grading, and high-retention 9:16 vertical reels.

How can I assist you with your upcoming digital or video project today? Ask for scope estimates, turnaround timelines, or technical recommendations!`,
      timestamp: 'Just now',
      modelUsed: 'gemini-3.5-flash',
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview'>('gemini-3.5-flash');
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const prompt = (textToSend || inputPrompt).trim();
    if (!prompt || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputPrompt('');
    setIsLoading(true);

    try {
      // Determine task complexity flag
      const taskComplexity = selectedModel === 'gemini-3.1-flash-lite' 
        ? 'fast' 
        : selectedModel === 'gemini-3.1-pro-preview' 
        ? 'complex' 
        : 'general';

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          model: selectedModel,
          taskComplexity,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with HTTP ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: data.text || 'Thank you for reaching out. Please let us know more about your web design or video editing vision.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.model || selectedModel,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `**Orlyn Consultation Note:** I encountered an issue connecting with the Gemini server (${err.message || 'Network error'}). However, our producers are actively on standby for custom **Web Designing** and **Video Editing** inquiries. You can send your project details directly via the **Book Discovery Sprint** button below!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Conversation reset. I am ready to help scope your **Video Editing** or **Web Designing** project. What questions can I answer for you?`,
        timestamp: 'Just now',
        modelUsed: selectedModel,
      },
    ]);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Render markdown-like simple syntax (headings, bold, lists, code)
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-2 text-sm leading-relaxed">
        {lines.map((line, idx) => {
          if (line.startsWith('### ')) {
            return (
              <h4 key={idx} className="text-base font-bold text-white font-display mt-3 mb-1">
                {line.replace('### ', '')}
              </h4>
            );
          }
          if (line.startsWith('## ')) {
            return (
              <h3 key={idx} className="text-lg font-bold text-white font-display mt-4 mb-1.5">
                {line.replace('## ', '')}
              </h3>
            );
          }
          if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-2">
                <span className="font-mono text-purple-400 font-semibold">{line.slice(0, 3)}</span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line.slice(3)) }} />
              </div>
            );
          }
          if (line.startsWith('- ') || line.startsWith('* ')) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line.slice(2)) }} />
              </div>
            );
          }
          if (!line.trim()) {
            return <div key={idx} className="h-1.5" />;
          }
          return (
            <p
              key={idx}
              dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }}
            />
          );
        })}
      </div>
    );
  };

  const formatInlineMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-purple-200">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs text-purple-300">$1</code>');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl h-[88vh] max-h-[780px] rounded-3xl bg-[#0d0c18] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative gemini-chat-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation Bar */}
        <div className="px-5 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white font-display">Orlyn AI Creative Director</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Gemini Live
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">
                Specialized in Video Editing &amp; Web Designing Services
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Model Selector Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="Select Gemini Model"
              >
                <span>
                  {selectedModel === 'gemini-3.5-flash' ? 'gemini-3.5-flash' : selectedModel === 'gemini-3.1-flash-lite' ? 'gemini-3.1-flash-lite' : 'gemini-3.1-pro-preview'}
                </span>
                <ChevronDown className="w-3 h-3 text-zinc-400" />
              </button>

              {modelDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-[#141224] border border-white/15 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2.5 py-1.5 font-mono text-[10px] uppercase text-zinc-500">Select Engine</div>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedModel('gemini-3.5-flash');
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex flex-col transition-colors ${
                      selectedModel === 'gemini-3.5-flash' ? 'bg-purple-600/30 text-white font-medium border border-purple-500/40' : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">gemini-3.5-flash</span>
                      <span className="text-[10px] font-mono text-purple-300">Standard (Recommended)</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-0.5">Optimized for general creative scoping &amp; deep design recommendations</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedModel('gemini-3.1-flash-lite');
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex flex-col transition-colors mt-1 ${
                      selectedModel === 'gemini-3.1-flash-lite' ? 'bg-purple-600/30 text-white font-medium border border-purple-500/40' : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">gemini-3.1-flash-lite</span>
                      <span className="text-[10px] font-mono text-emerald-400">⚡ Fast</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-0.5">Instantaneous responses for quick pricing &amp; turnaround lookups</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedModel('gemini-3.1-pro-preview');
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex flex-col transition-colors mt-1 ${
                      selectedModel === 'gemini-3.1-pro-preview' ? 'bg-purple-600/30 text-white font-medium border border-purple-500/40' : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">gemini-3.1-pro-preview</span>
                      <span className="text-[10px] font-mono text-amber-400">Deep Reasoning</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-0.5">Complex multi-page technical architecture &amp; commercial storyboard specs</span>
                  </button>
                </div>
              )}
            </div>

            {/* Reset chat button */}
            <button
              type="button"
              onClick={handleClearHistory}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              title="Reset Conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Close modal */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Thread Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {messages.map((msg) => {
            const isAssistant = msg.role === 'assistant';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}
              >
                {isAssistant && (
                  <div className="w-8 h-8 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[78%] flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}>
                  <div
                    className={`rounded-2xl p-4 sm:p-5 transition-all ${
                      isAssistant
                        ? 'bg-white/[0.03] border border-white/[0.08] text-zinc-300 shadow-md'
                        : 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                    }`}
                  >
                    {isAssistant ? (
                      renderFormattedContent(msg.content)
                    ) : (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    )}
                  </div>

                  {/* Metadata and Quick Actions footer */}
                  <div className="flex items-center gap-2 mt-1.5 px-1 text-[11px] font-mono text-zinc-500">
                    <span>{msg.timestamp}</span>
                    {msg.modelUsed && (
                      <>
                        <span>&bull;</span>
                        <span className="text-purple-400/80">{msg.modelUsed}</span>
                      </>
                    )}

                    {isAssistant && (
                      <>
                        <span>&bull;</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(msg.content, msg.id)}
                          className="hover:text-zinc-300 transition-colors flex items-center gap-1"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>

                        {onTransferToInquiry && msg.id !== 'welcome-1' && (
                          <>
                            <span>&bull;</span>
                            <button
                              type="button"
                              onClick={() => {
                                onTransferToInquiry(msg.content);
                                onClose();
                              }}
                              className="text-purple-300 hover:text-white transition-colors flex items-center gap-1 font-medium"
                            >
                              <span>Use as Project Scope</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {!isAssistant && (
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/[0.08] flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-xs font-mono text-zinc-400 ml-2">
                  Gemini is architecting your creative solution...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Starter Chips */}
        {messages.length <= 2 && (
          <div className="px-4 sm:px-6 py-2 border-t border-white/[0.06] bg-white/[0.01]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
              Suggested Consultations:
            </div>
            <div className="flex flex-wrap gap-2">
              {STARTER_PROMPTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(item.prompt)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer text-left"
                  >
                    <Icon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#090812]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask about Web Designing (3D, React, UI/UX) or Video Editing (4K, DaVinci, Motion)..."
                disabled={isLoading}
                className="w-full pl-4 pr-12 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.06] transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputPrompt.trim() || isLoading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-30 transition-all cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-2.5 px-1">
            <span>Powered by Google Gemini 3.5 &bull; Multi-turn Creative Architect</span>
            {onTransferToInquiry && (
              <button
                type="button"
                onClick={() => {
                  const summary = messages
                    .filter((m) => m.role === 'user')
                    .map((m) => m.content)
                    .join(' | ');
                  onTransferToInquiry(`Consultation Scope: ${summary}`);
                  onClose();
                }}
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Open Project Commission Form</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
