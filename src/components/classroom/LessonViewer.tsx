import { useState } from 'react';
import { 
  Video, 
  Code2, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  HelpCircle, 
  Copy, 
  Check, 
  Layers, 
  Table, 
  Award, 
  RotateCcw,
  Bot
} from 'lucide-react';
import type { ActivityItem, ExamItem, WorksheetItem } from '../../types';
import { CodeSandboxRunner } from './CodeSandboxRunner';
import { KezjedAiMentor } from '../ai/KezjedAiMentor';

export interface LessonViewerProps {
  lessonTitle: string;
  duration?: string;
  objective?: string;
  videoUrl?: string;
  theoryContent?: string;
  codeSnippet?: string;
  activity?: ActivityItem;
  exam?: ExamItem;
  worksheet?: WorksheetItem;
  classroomLink?: string;
  onSaveClassroomLink?: (link: string) => void;
  isCompleted: boolean;
  onCompleteLesson: () => void;
}

export const LessonViewer = ({
  lessonTitle,
  duration,
  objective,
  videoUrl,
  theoryContent,
  codeSnippet,
  activity,
  exam,
  worksheet,
  classroomLink,
  onSaveClassroomLink,
  isCompleted,
  onCompleteLesson,
}: LessonViewerProps) => {
  // Navigation sub-tab inside the lesson
  const [activeTab, setActiveTab] = useState<'lecture' | 'sandbox' | 'activity' | 'exam' | 'worksheet'>('lecture');
  const [isAiMentorOpen, setIsAiMentorOpen] = useState(false);

  // Copy code helper
  const [copied, setCopied] = useState(false);
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Activity checklist state
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const toggleStep = (idx: number) => {
    setCompletedSteps(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Exam / Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState<number | null>(null);
  const [examPassed, setExamPassed] = useState<boolean | null>(null);

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (examSubmitted) return; // Locked once submitted
    setUserAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitExam = () => {
    if (!exam || !exam.questions || exam.questions.length === 0) return;
    let correctCount = 0;
    exam.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / exam.questions.length) * 100);
    const passed = scorePercentage >= (exam.passingScore || 80);
    setExamScore(scorePercentage);
    setExamPassed(passed);
    setExamSubmitted(true);

    if (passed && !isCompleted) {
      onCompleteLesson();
    }
  };

  const handleRetakeExam = () => {
    setUserAnswers({});
    setExamSubmitted(false);
    setExamScore(null);
    setExamPassed(null);
  };

  // Worksheet checklist and response state
  const [completedDeliverables, setCompletedDeliverables] = useState<Record<number, boolean>>({});
  const [worksheetNotes, setWorksheetNotes] = useState('');
  const toggleDeliverable = (idx: number) => {
    setCompletedDeliverables(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Classroom link input
  const [classroomInput, setClassroomInput] = useState(classroomLink || '');
  const [linkSaved, setLinkSaved] = useState(false);
  const handleSaveLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSaveClassroomLink) {
      onSaveClassroomLink(classroomInput);
      setLinkSaved(true);
      setTimeout(() => setLinkSaved(false), 2000);
    }
  };

  // Convert watch URL to embed URL if needed
  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/embed/')) return url;
    if (url.includes('youtube.com/watch?v=')) {
      const vid = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${vid}`;
    }
    if (url.includes('youtu.be/')) {
      const vid = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${vid}`;
    }
    return url;
  };

  const embedSrc = getEmbedUrl(videoUrl);

  return (
    <div className="space-y-6 max-w-5xl mx-auto text-slate-100 pb-12">
      
      {/* Lesson Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">
            Interactive Lesson Hub • {duration || '30 mins'}
          </span>
          {isCompleted && (
            <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Completed</span>
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{lessonTitle}</h2>

        {objective && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <strong className="text-emerald-400">🎯 Learning Objective:</strong> {objective}
          </p>
        )}

        {/* Lesson Sub-Tabs (Lecture, Activity, Exam, Worksheet) */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveTab('lecture')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'lecture'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Video className="w-4 h-4 text-red-400" />
            <span>1. Lecture &amp; Theory</span>
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'sandbox'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>2. Live Sandbox</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-mono font-bold">IDE</span>
          </button>

          {activity && (
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'activity'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>2. Hands-on Activity</span>
              {Object.values(completedSteps).filter(Boolean).length > 0 && (
                <span className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded-full font-mono">
                  {Object.values(completedSteps).filter(Boolean).length}/{(activity.instructions || []).length}
                </span>
              )}
            </button>
          )}

          {exam && (
            <button
              onClick={() => setActiveTab('exam')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>3. Exam / Quiz</span>
              {examSubmitted && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${examPassed ? 'bg-emerald-500 text-slate-950' : 'bg-red-500 text-white'}`}>
                  {examScore}%
                </span>
              )}
            </button>
          )}

          {worksheet && (
            <button
              onClick={() => setActiveTab('worksheet')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'worksheet'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Table className="w-4 h-4 text-emerald-400" />
              <span>4. Worksheet</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsAiMentorOpen(true)}
            className="ml-auto px-3.5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/20 flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
          >
            <Bot className="w-4 h-4 text-blue-200" />
            <span>Kezjed AI Mentor</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: LECTURE & THEORY */}
      {activeTab === 'lecture' && (
        <div className="space-y-6">
          {/* Video Player */}
          {embedSrc ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
                <span className="flex items-center gap-2 text-red-400">
                  <Video className="w-4 h-4" />
                  <span>Masterclass Video Lecture</span>
                </span>
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
                <iframe
                  src={embedSrc}
                  title={lessonTitle}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-2xl p-6 text-center text-xs text-slate-500">
              No video attached for this lesson. Proceed with theoretical notes and activities below.
            </div>
          )}

          {/* Theory Content */}
          {theoryContent && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
              <h4 className="font-bold text-sm text-blue-400 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Theory &amp; Core Principles</span>
              </h4>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                {theoryContent}
              </div>
            </div>
          )}

          {/* Code / Command Snippet */}
          {codeSnippet && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Commands / Configuration Snippet</span>
                </span>
                <button
                  onClick={() => handleCopyCode(codeSnippet)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Snippet'}</span>
                </button>
              </div>
              <pre className="bg-slate-950 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB: LIVE CODE SANDBOX */}
      {activeTab === 'sandbox' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 inline-block mb-1">
                💻 Embedded In-Browser IDE &amp; Live Runtime
              </span>
              <h3 className="text-lg font-black text-white">Interactive Code Playground &amp; Test Suite</h3>
              <p className="text-xs text-slate-400">Write, test, and debug code with instant live rendering and automated verification.</p>
            </div>
            {activity && (
              <button
                onClick={() => setActiveTab('activity')}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Activity Guide</span> →
              </button>
            )}
          </div>

          <CodeSandboxRunner
            lessonTitle={lessonTitle}
            initialCode={codeSnippet}
            starterCode={activity?.starterCode}
            expectedOutcome={activity?.expectedOutcome}
            isCompleted={isCompleted}
            onComplete={onCompleteLesson}
          />
        </div>
      )}

      {/* SUB-TAB 2: HANDS-ON ACTIVITY */}
      {activeTab === 'activity' && activity && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                🛠️ Hands-on Practical Task Sheet
              </span>
              <span className="text-xs text-amber-300 font-bold">
                {Object.values(completedSteps).filter(Boolean).length} of {(activity.instructions || []).length} steps completed
              </span>
            </div>

            <h3 className="text-xl font-black text-white">{activity.title}</h3>

            {/* Interactive Checklist */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-300 block">Step-by-Step Task Checklist:</span>
              <div className="space-y-2">
                {(activity.instructions || []).map((inst, idx) => (
                  <div 
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      completedSteps[idx]
                        ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={Boolean(completedSteps[idx])}
                      onChange={() => toggleStep(idx)}
                      className="mt-0.5 rounded cursor-pointer text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className={`text-xs leading-relaxed ${completedSteps[idx] ? 'line-through opacity-80' : ''}`}>
                      {inst}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Starter Code / Checklist Template */}
            {activity.starterCode && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Starter Template / Verification Checklist:</span>
                  <button
                    onClick={() => handleCopyCode(activity.starterCode || '')}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Template</span>
                  </button>
                </div>
                <pre className="bg-slate-950 text-slate-300 p-4 rounded-xl text-xs font-mono border border-slate-800 overflow-x-auto leading-relaxed">
                  <code>{activity.starterCode}</code>
                </pre>
              </div>
            )}

            {/* Expected Practical Outcome */}
            {activity.expectedOutcome && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-emerald-400">Expected Practical Outcome:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{activity.expectedOutcome}</p>
              </div>
            )}

            {/* Grading Rubric */}
            {activity.rubric && activity.rubric.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-300 block">Demonstration Evaluation Rubric:</span>
                <div className="border border-slate-800 rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-2.5">Competency Criteria</th>
                        <th className="p-2.5 text-right w-24">Max Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-900/60">
                      {activity.rubric.map((r, rIdx) => (
                        <tr key={rIdx}>
                          <td className="p-2.5 text-slate-200">{r.criteria}</td>
                          <td className="p-2.5 text-right font-mono font-bold text-amber-400">{r.points} pts</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: EXAM / QUIZ ENGINE (systeme.io style interactive test) */}
      {activeTab === 'exam' && exam && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-purple-300 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">
                📝 Interactive Exam &amp; Quiz Engine
              </span>
              <span className="text-xs text-purple-300 font-bold">
                Passing Grade: <strong className="text-white">{exam.passingScore}%</strong>
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">{exam.title}</h3>
              <p className="text-xs text-slate-400 mt-1">
                Answer all multiple-choice questions below. Once submitted, your score will be computed instantly.
              </p>
            </div>

            {/* Questions Form */}
            <div className="space-y-6">
              {(exam.questions || []).map((q, qIdx) => {
                const selectedOpt = userAnswers[qIdx];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                return (
                  <div key={q.id} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-white leading-relaxed">
                        <span className="text-purple-400 mr-2">Q{qIdx + 1}.</span>
                        {q.question}
                      </h4>
                      {examSubmitted && (
                        <span className={`text-xs font-black px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                          {isCorrect ? '✓ Correct' : '✕ Incorrect'}
                        </span>
                      )}
                    </div>

                    {/* Choices Cards */}
                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedOpt === optIdx;
                        const isActualCorrect = q.correctIndex === optIdx;

                        let styleClasses = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-purple-500/50';
                        if (examSubmitted) {
                          if (isActualCorrect) {
                            styleClasses = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                          } else if (isSelected && !isActualCorrect) {
                            styleClasses = 'bg-red-950/40 border-red-500 text-red-300';
                          } else {
                            styleClasses = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                          }
                        } else if (isSelected) {
                          styleClasses = 'bg-purple-950/60 border-purple-500 text-purple-200 font-bold shadow-sm';
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => handleSelectOption(qIdx, optIdx)}
                            className={`p-3 rounded-xl border text-xs flex items-center gap-3 cursor-pointer transition-all ${styleClasses}`}
                          >
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-bold text-[10px] flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1">{opt}</span>
                            {examSubmitted && isActualCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {examSubmitted && q.explanation && (
                      <div className="p-3 bg-purple-950/30 border border-purple-500/20 rounded-xl text-xs text-purple-200">
                        <strong className="text-purple-400">Teacher Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submission / Results Footer */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
              {!examSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitExam}
                  disabled={Object.keys(userAnswers).length < (exam.questions || []).length}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-black transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Award className="w-4 h-4" />
                  <span>Submit Exam for Instant Grading ({Object.keys(userAnswers).length}/{(exam.questions || []).length} Answered)</span>
                </button>
              ) : (
                <div className="flex items-center justify-between w-full flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl border ${examPassed ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300' : 'bg-red-950/60 border-red-500/50 text-red-300'}`}>
                      <span className="font-black text-sm">
                        {examPassed ? '🎉 Assessment Passed!' : '⚠️ Assessment Not Passed'}
                      </span>
                      <p className="text-xs mt-0.5">
                        Your Score: <strong>{examScore}%</strong> (Passing requirement: {exam.passingScore}%)
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRetakeExam}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Exam</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: WORKSHEETS & GOOGLE SHEETS */}
      {activeTab === 'worksheet' && worksheet && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                📊 Worksheet &amp; Spreadsheet Assignment
              </span>
              {worksheet.sheetName && (
                <span className="text-xs text-slate-400 font-mono">
                  Sheet Tab: <strong className="text-emerald-300">{worksheet.sheetName}</strong>
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-black text-white">{worksheet.title}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{worksheet.description}</p>
            </div>

            {/* Direct Google Sheets Open Link */}
            {worksheet.templateUrl && (
              <div className="bg-slate-950/80 border border-emerald-500/30 p-4 rounded-2xl flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h5 className="font-bold text-xs text-white">Interactive Spreadsheet Template</h5>
                  <p className="text-[11px] text-slate-400">Click below to create an instant editable copy of this worksheet in your Google Drive.</p>
                </div>
                <a
                  href={worksheet.templateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Google Sheets Template</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Deliverables Checklist */}
            {worksheet.deliverables && worksheet.deliverables.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-300 block">Required Worksheet Deliverables:</span>
                <div className="space-y-2">
                  {worksheet.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleDeliverable(idx)}
                      className={`p-3 rounded-xl border text-xs flex items-center gap-3 cursor-pointer transition-all ${
                        completedDeliverables[idx]
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={Boolean(completedDeliverables[idx])}
                        onChange={() => toggleDeliverable(idx)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span className={completedDeliverables[idx] ? 'line-through opacity-80' : ''}>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Student Worksheet Reflection / Notes */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-300 block">Student Reflection &amp; Submission Notes:</label>
              <textarea
                value={worksheetNotes}
                onChange={(e) => setWorksheetNotes(e.target.value)}
                rows={4}
                placeholder="Draft your analysis, key findings, or paste your completed Google Sheets submission URL here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {/* Google Classroom Attachment Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
            <span>🔗 Google Classroom / External Submission Link</span>
          </span>
          {linkSaved && (
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              ✓ Saved!
            </span>
          )}
        </div>
        <form onSubmit={handleSaveLink} className="flex gap-2">
          <input
            type="url"
            placeholder="https://classroom.google.com/c/..."
            value={classroomInput}
            onChange={(e) => setClassroomInput(e.target.value)}
            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer shrink-0"
          >
            Save Link
          </button>
        </form>
      </div>

      {/* Completion Action Footer */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap shadow-xl">
        <div>
          <h4 className="font-bold text-sm text-white">Finished reviewing this lesson?</h4>
          <p className="text-xs text-slate-400">Marking complete updates your overall course progress and unlocks subsequent units.</p>
        </div>
        <button
          onClick={onCompleteLesson}
          className={`px-6 py-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
            isCompleted
              ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? 'Lesson Completed ✓' : 'Mark Lesson Complete'}</span>
        </button>
      </div>

      <KezjedAiMentor
        isOpen={isAiMentorOpen}
        onClose={() => setIsAiMentorOpen(false)}
        lessonTitle={lessonTitle}
        currentCode={{ html: codeSnippet || '', css: '', js: '' }}
        currentObjective={objective}
      />
    </div>
  );
};
