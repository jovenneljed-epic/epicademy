import { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Bot, 
  Send, 
  Sparkles, 
  Code2, 
  HelpCircle, 
  Copy, 
  Check, 
  RefreshCw,
  Lightbulb,
  Bug,
  BookOpen
} from 'lucide-react';

export interface KezjedAiMentorProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle?: string;
  currentCode?: {
    html?: string;
    css?: string;
    js?: string;
  };
  currentObjective?: string;
  onApplyCodeSnippet?: (lang: 'html' | 'css' | 'js', code: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  codeSnippet?: {
    lang: 'html' | 'css' | 'js';
    code: string;
  };
  timestamp: string;
  suggestions?: string[];
}

export const KezjedAiMentor = ({
  isOpen,
  onClose,
  lessonTitle = 'Modern Web Engineering',
  currentCode = { html: '', css: '', js: '' },
  currentObjective = '',
  onApplyCodeSnippet,
}: KezjedAiMentorProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: `Greetings! I am **Kezjed AI Mentor**, your dedicated pair-programming companion at Epicademy. I am here to guide you through **${lessonTitle}** using the Socratic method.\n\nWhether you need code diagnostics, conceptual analogies, or debugging clues, feel free to ask me anything!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        '🔍 Review my code structure',
        '💡 Give me a hint for this lab',
        '🐛 How do I center a div with CSS?',
        '🧠 Quiz me on this lesson',
      ],
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generateAiResponse = (userPrompt: string): ChatMessage => {
    const lower = userPrompt.toLowerCase();
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const html = currentCode.html || '';
    const css = currentCode.css || '';
    const js = currentCode.js || '';

    // 1. Code Review Request
    if (lower.includes('review') || lower.includes('check') || lower.includes('inspect')) {
      const issues: string[] = [];
      if (!html.includes('<') || html.trim().length === 0) {
        issues.push('⚠️ Your HTML editor currently has empty or minimal markup.');
      }
      if (html.includes('<div') && !html.includes('</div>')) {
        issues.push('⚠️ You have an unclosed `<div>` tag in your HTML.');
      }
      if (css.includes('display: flex') && !css.includes('justify-content')) {
        issues.push('💡 In CSS: You defined `display: flex;`. Consider adding `justify-content: center;` and `align-items: center;` for full two-axis alignment.');
      }
      if (js.includes('addEventListener') && !js.includes('document.querySelector') && !js.includes('document.getElementById')) {
        issues.push('💡 In JavaScript: Ensure your DOM target element is properly selected before attaching listeners.');
      }

      const reviewBody = issues.length > 0
        ? `Here is my architectural evaluation of your current sandbox code:\n\n` + issues.map(i => `- ${i}`).join('\n') + `\n\nWould you like a step-by-step hint on how to refine this?`
        : `Your sandbox code structure looks solid and adheres to clean coding practices! All tags are balanced, and your styling rules follow modern standards.\n\nNext step: Try testing your implementation against the automated test runner in the Live Sandbox tab!`;

      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reviewBody,
        timestamp: timeNow,
        suggestions: ['💡 Give me a hint for this lab', '🧠 Quiz me on this lesson'],
      };
    }

    // 2. Hint Request
    if (lower.includes('hint') || lower.includes('stuck') || lower.includes('help') || lower.includes('how to start')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Here is a Socratic clue for **${lessonTitle}**:\n\n1. **Identify the Container**: Start by creating a semantic \`<section>\` or \`<div class="card">\`.\n2. **Apply Layout Rules**: In your CSS, treat the container as a flexible box (\`display: flex; flex-direction: column; gap: 1rem;\`).\n3. **Wire Interactivity**: Select your button with \`const btn = document.querySelector('button');\` and listen for the \`'click'\` event.\n\nNotice how separating layout from behavior prevents unexpected bugs!`,
        codeSnippet: {
          lang: 'css',
          code: `.card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  border-radius: 12px;\n}`,
        },
        timestamp: timeNow,
        suggestions: ['🔍 Review my code structure', '🧠 Quiz me on this lesson'],
      };
    }

    // 3. Quiz / Knowledge Check Request
    if (lower.includes('quiz') || lower.includes('test') || lower.includes('question')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Let's test your mental model! 🧠\n\n**Question**: In CSS layout architecture, what is the key difference between **Flexbox** and **CSS Grid**?\n\n*A)* Flexbox is strictly for text; Grid is for images.\n*B)* Flexbox is 1-dimensional (row OR column), whereas Grid is 2-dimensional (rows AND columns simultaneously).\n*C)* Grid does not support responsive design media queries.\n\nReply with your answer!`,
        timestamp: timeNow,
        suggestions: ['Answer: B (Flexbox is 1D, Grid is 2D)', 'Explain CSS Grid in plain English'],
      };
    }

    // 4. Centering / CSS layout
    if (lower.includes('center') || lower.includes('flexbox') || lower.includes('grid')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `The most reliable, modern enterprise pattern to center any element both horizontally and vertically is **Modern CSS Grid** or **Flexbox**:\n\nCSS Grid approach:\n\`place-items: center;\` inside a grid container.\n\nOr using Flexbox:\n\`justify-content: center;\` and \`align-items: center;\`.`,
        codeSnippet: {
          lang: 'css',
          code: `.center-wrapper {\n  display: grid;\n  place-items: center;\n  min-height: 250px;\n}`,
        },
        timestamp: timeNow,
        suggestions: ['🔍 Review my code structure', '💡 Give me a hint for this lab'],
      };
    }

    // 5. Default Fallback
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `That is an insightful question regarding **${lessonTitle}**!\n\nIn enterprise software engineering under **KEZJED SOLUTIONS**, we always prioritize readability, modularity, and automated testability. Here is the conceptual approach:\n\n- Break the requirement into individual unit operations.\n- Verify each DOM query returns a valid node before mutating properties.\n- Keep your styles scoped and maintainable.\n\nWould you like me to inspect your current code or generate a starter snippet?`,
      timestamp: timeNow,
      suggestions: ['🔍 Review my code structure', '💡 Give me a hint for this lab', '🧠 Quiz me on this lesson'],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const prompt = (textToSend || inputValue).trim();
    if (!prompt) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAiResponse(prompt);
      setIsTyping(false);
      setMessages(prev => [...prev, aiReply]);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-end p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border-l sm:border border-slate-800 w-full sm:max-w-md h-full sm:h-[92vh] sm:rounded-3xl shadow-2xl flex flex-col text-slate-100 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-white">Kezjed AI Mentor</h3>
                <span className="text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Socratic Pair Programmer • KEZJED SOLUTIONS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'msg-welcome-reset',
                    sender: 'ai',
                    text: `Chat refreshed. Ready to assist with **${lessonTitle}**!`,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    suggestions: ['🔍 Review my code structure', '💡 Give me a hint for this lab'],
                  },
                ]);
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              title="Reset Conversation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Current Context Subheader */}
        <div className="bg-slate-950/60 px-5 py-2 border-b border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 truncate max-w-[240px]">
              <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate font-medium text-slate-300">{lessonTitle}</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
              <Code2 className="w-3 h-3" /> Sandbox Connected
            </span>
          </div>
          {currentObjective && (
            <p className="text-[10px] text-slate-400 truncate">
              🎯 <span className="text-slate-300">{currentObjective}</span>
            </p>
          )}
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex flex-col space-y-1.5 ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-1 text-[10px] text-slate-500 px-1">
                  <span>{isUser ? 'You' : 'Kezjed AI'}</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </div>

                <div
                  className={`p-3.5 rounded-2xl max-w-[90%] leading-relaxed ${
                    isUser
                      ? 'bg-blue-600 text-white rounded-tr-xs'
                      : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-xs'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">{m.text}</div>

                  {m.codeSnippet && (
                    <div className="mt-3 bg-slate-950 border border-slate-700/80 rounded-xl overflow-hidden">
                      <div className="bg-slate-900 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[10px]">
                        <span className="font-mono text-slate-400 uppercase font-bold">
                          {m.codeSnippet.lang} snippet
                        </span>
                        <div className="flex items-center gap-2">
                          {onApplyCodeSnippet && (
                            <button
                              onClick={() => onApplyCodeSnippet(m.codeSnippet!.lang, m.codeSnippet!.code)}
                              className="text-blue-400 hover:text-blue-300 font-bold transition flex items-center gap-1 cursor-pointer"
                            >
                              <Sparkles className="w-3 h-3" /> Apply to Sandbox
                            </button>
                          )}
                          <button
                            onClick={() => handleCopy(m.id, m.codeSnippet!.code)}
                            className="text-slate-400 hover:text-white transition flex items-center gap-1 cursor-pointer"
                          >
                            {copiedId === m.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>{copiedId === m.id ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      </div>
                      <pre className="p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                        <code>{m.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>

                {/* Suggestions Pills if available */}
                {m.suggestions && m.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1.5 max-w-[90%]">
                    {m.suggestions.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(s)}
                        className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 text-[10px] px-2.5 py-1 rounded-full font-medium transition cursor-pointer flex items-center gap-1"
                      >
                        <span>{s}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs p-2">
              <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Bot className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <span className="italic text-[11px]">Kezjed AI is analyzing your code...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Help Action Bar */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/40 flex items-center gap-1.5 overflow-x-auto text-[10px]">
          <button
            onClick={() => handleSendMessage('🔍 Review and diagnose my current sandbox code')}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold shrink-0 transition flex items-center gap-1 cursor-pointer"
          >
            <Bug className="w-3 h-3 text-amber-400" /> Diagnose Code
          </button>
          <button
            onClick={() => handleSendMessage('💡 Give me a Socratic hint for this activity')}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold shrink-0 transition flex items-center gap-1 cursor-pointer"
          >
            <Lightbulb className="w-3 h-3 text-amber-300" /> Hint
          </button>
          <button
            onClick={() => handleSendMessage('🧠 Give me a quick comprehension quiz on this lesson')}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold shrink-0 transition flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle className="w-3 h-3 text-blue-400" /> Quiz Me
          </button>
        </div>

        {/* Chat Input Field */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Kezjed AI a question or request a code check..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white disabled:text-slate-500 rounded-xl transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
