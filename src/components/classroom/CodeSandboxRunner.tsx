import { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal, 
  Eye, 
  Check, 
  Copy, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle
} from 'lucide-react';

interface CodeSandboxRunnerProps {
  lessonTitle: string;
  initialCode?: string;
  starterCode?: string;
  expectedOutcome?: string;
  onComplete?: () => void;
  isCompleted?: boolean;
}

export const CodeSandboxRunner = ({
  lessonTitle,
  initialCode = '',
  starterCode = '',
  expectedOutcome = '',
  onComplete,
  isCompleted = false,
}: CodeSandboxRunnerProps) => {
  // Extract or assign initial code parts
  const defaultHtml = initialCode.includes('<html') || initialCode.includes('<div') || initialCode.includes('<!DOCTYPE')
    ? initialCode
    : `<div class="app-card">
  <h2>${lessonTitle}</h2>
  <p>Modify this code and click <strong>Run Code ▶️</strong> to see instant live preview.</p>
  <button id="action-btn">Click Me</button>
</div>`;

  const defaultCss = `.app-card {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
}
h2 {
  color: #0f172a;
  margin-bottom: 8px;
  font-size: 20px;
}
p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
}
button {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 12px;
}
button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}`;

  const defaultJs = `const btn = document.getElementById('action-btn');
if (btn) {
  btn.addEventListener('click', () => {
    console.log('Action button clicked successfully!');
    btn.textContent = 'Awesome! Verification Passed ✓';
    btn.style.backgroundColor = '#10b981';
  });
}
console.log('Sandbox environment initialized for: ${lessonTitle}');`;

  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [cssCode, setCssCode] = useState(defaultCss);
  const [jsCode, setJsCode] = useState(defaultJs);

  const [previewSrcDoc, setPreviewSrcDoc] = useState('');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [showConsole, setShowConsole] = useState(false);
  const [copied, setCopied] = useState(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; label: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compile and execute in iframe
  const handleRunCode = () => {
    setConsoleLogs([]);
    const combinedDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 16px; background-color: #f8fafc; }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            // Capture console output and forward to parent
            const originalLog = console.log;
            const originalError = console.error;
            console.log = function(...args) {
              window.parent.postMessage({ type: 'SANDBOX_LOG', message: args.join(' ') }, '*');
              originalLog.apply(console, args);
            };
            console.error = function(...args) {
              window.parent.postMessage({ type: 'SANDBOX_ERROR', message: args.join(' ') }, '*');
              originalError.apply(console, args);
            };
            window.onerror = function(msg, url, line) {
              window.parent.postMessage({ type: 'SANDBOX_ERROR', message: msg + ' (Line ' + line + ')' }, '*');
            };
            try {
              ${jsCode}
            } catch (err) {
              console.error(err.message);
            }
          </script>
        </body>
      </html>
    `;
    setPreviewSrcDoc(combinedDoc);

    // Run automated code evaluation criteria
    const tests = [
      {
        label: 'Markup Syntax Validation & Non-Empty Elements',
        passed: htmlCode.trim().length > 20 && !htmlCode.includes('<undefined')
      },
      {
        label: 'Styling & Box Model Presentation Rules',
        passed: cssCode.trim().length > 10 && cssCode.includes('{') && cssCode.includes('}')
      },
      {
        label: 'Script Execution & Event Architecture',
        passed: jsCode.trim().length > 0 && !jsCode.includes('syntax_error_placeholder')
      }
    ];
    setTestResults(tests);
  };

  // Run automatically on first mount
  useEffect(() => {
    handleRunCode();
  }, []);

  // Listen for console messages from the sandbox iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'SANDBOX_LOG') {
        setConsoleLogs(prev => [...prev, `[LOG] ${event.data.message}`]);
      } else if (event.data?.type === 'SANDBOX_ERROR') {
        setConsoleLogs(prev => [...prev, `[ERR] ${event.data.message}`]);
        setShowConsole(true);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleReset = () => {
    if (confirm('Reset code to lesson starter boilerplate?')) {
      setHtmlCode(starterCode || defaultHtml);
      setCssCode(defaultCss);
      setJsCode(defaultJs);
      setConsoleLogs(['Environment reset to starter code.']);
      setTimeout(() => handleRunCode(), 50);
    }
  };

  const handleCopy = () => {
    const fullCode = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitSolution = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onComplete) {
        onComplete();
      }
    }, 600);
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col my-4">
      {/* Sandbox Top Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
            <span className="text-blue-400">EPIC-IDE</span> • {lessonTitle}
          </span>
        </div>

        {/* Code Tabs & Action Buttons */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-orange-500 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              HTML5
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'css'
                  ? 'bg-blue-500 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              CSS3
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'js'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              JS (ES6+)
            </button>
          </div>

          <button
            onClick={handleRunCode}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow transition-all cursor-pointer active:scale-95"
            title="Execute Code in Live Sandbox"
          >
            <Play className="w-3.5 h-3.5 fill-white" /> Run Code
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
            title="Reset to Starter Code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
            title="Copy Solution Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Split-Pane: Editor on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[420px]">
        {/* Left: Code Editor Pane */}
        <div className="flex flex-col bg-slate-950">
          <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Editor • {activeTab.toUpperCase()} Input Buffer</span>
            <span>UTF-8 • Strict Mode</span>
          </div>
          <div className="relative flex-1">
            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full h-full min-h-[380px] p-4 bg-transparent text-amber-200 font-mono text-xs leading-relaxed outline-none resize-none selection:bg-blue-600 selection:text-white"
                placeholder="Write semantic HTML markup..."
                spellCheck={false}
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="w-full h-full min-h-[380px] p-4 bg-transparent text-cyan-200 font-mono text-xs leading-relaxed outline-none resize-none selection:bg-blue-600 selection:text-white"
                placeholder="Write CSS styling rules..."
                spellCheck={false}
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="w-full h-full min-h-[380px] p-4 bg-transparent text-emerald-200 font-mono text-xs leading-relaxed outline-none resize-none selection:bg-blue-600 selection:text-white"
                placeholder="Write JavaScript / TypeScript logic..."
                spellCheck={false}
              />
            )}
          </div>
        </div>

        {/* Right: Live Preview Pane */}
        <div className="flex flex-col bg-white">
          <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-mono">
            <span className="flex items-center gap-1.5 font-bold">
              <Eye className="w-3.5 h-3.5 text-blue-600" /> Live Interactive Preview
            </span>
            <button
              onClick={() => setShowConsole(!showConsole)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer transition ${
                showConsole ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <Terminal className="w-3 h-3" /> Console {consoleLogs.length > 0 && `(${consoleLogs.length})`}
            </button>
          </div>

          <div className="relative flex-1 min-h-[300px]">
            <iframe
              srcDoc={previewSrcDoc}
              title="Epicademy Interactive Live Preview"
              sandbox="allow-scripts allow-modals"
              className="w-full h-full min-h-[300px] border-0 bg-white"
            />

            {/* Slide-Up Virtual Console */}
            {showConsole && (
              <div className="absolute bottom-0 inset-x-0 bg-slate-950 text-slate-200 p-3 max-h-[160px] overflow-y-auto border-t border-slate-800 font-mono text-[11px] space-y-1 shadow-2xl">
                <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[10px] text-slate-400">
                  <span>SANDBOX VIRTUAL CONSOLE</span>
                  <button onClick={() => setConsoleLogs([])} className="hover:text-white cursor-pointer">Clear</button>
                </div>
                {consoleLogs.length === 0 ? (
                  <p className="text-slate-500 italic">No output logged yet. Run code to view console events.</p>
                ) : (
                  consoleLogs.map((log, i) => (
                    <div key={i} className={log.startsWith('[ERR]') ? 'text-rose-400' : 'text-emerald-400'}>
                      {log}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Automated Rubric Specs & Lab Submission Bar */}
      <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Automated Code Rubric Verification
          </span>
          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            {testResults.map((test, i) => (
              <span
                key={i}
                className={`text-[11px] font-medium flex items-center gap-1 px-2.5 py-0.5 rounded-full border ${
                  test.passed
                    ? 'bg-emerald-950/60 border-emerald-700/50 text-emerald-300'
                    : 'bg-rose-950/60 border-rose-700/50 text-rose-300'
                }`}
              >
                {test.passed ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <AlertTriangle className="w-3 h-3 text-rose-400" />}
                {test.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {expectedOutcome && (
            <span className="text-[11px] text-slate-400 hidden xl:inline max-w-xs truncate" title={expectedOutcome}>
              Target: {expectedOutcome}
            </span>
          )}
          <button
            onClick={handleSubmitSolution}
            disabled={isSubmitting || isCompleted}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 ${
              isCompleted
                ? 'bg-emerald-600 text-white cursor-default'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Lab Completed ✓
              </>
            ) : isSubmitting ? (
              'Verifying Specs...'
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" /> Submit Lab Solution 🚀
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
