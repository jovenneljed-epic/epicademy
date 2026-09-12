import { useState } from 'react';
import { Video, Code2, FileText, CheckCircle2, ExternalLink, HelpCircle, Copy, Check } from 'lucide-react';

export interface LessonBlock {
  id: string;
  block_type: 'video' | 'text' | 'code' | 'quiz' | 'resource' | 'classroom';
  title?: string;
  content: string;
}

interface LessonViewerProps {
  lessonTitle: string;
  objective: string;
  blocks: LessonBlock[];
  onCompleteLesson: () => void;
  isCompleted: boolean;
}

export const LessonViewer = ({
  lessonTitle,
  objective,
  blocks,
  onCompleteLesson,
  isCompleted,
}: LessonViewerProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto text-slate-100">
      {/* Lesson Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
          Modular Lesson Viewer
        </span>
        <h2 className="text-2xl font-black text-white">{lessonTitle}</h2>
        <p className="text-xs sm:text-sm text-slate-300">
          <strong className="text-emerald-400">Objective:</strong> {objective}
        </p>
      </div>

      {/* Dynamic Content Blocks */}
      <div className="space-y-6">
        {blocks.map((block) => {
          switch (block.block_type) {
            case 'video':
              return (
                <div key={block.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                    <Video className="w-4 h-4" />
                    <span>{block.title || 'Video Masterclass'}</span>
                  </div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800">
                    <iframe
                      src={block.content}
                      title={block.title || 'Lesson Video'}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              );

            case 'text':
              return (
                <div key={block.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <h4 className="font-bold text-sm text-blue-400 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>{block.title || 'Core Theory Concept'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                    {block.content}
                  </p>
                </div>
              );

            case 'code':
              return (
                <div key={block.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-emerald-400" />
                      <span>{block.title || 'Code / Script Snippet'}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(block.content, block.id)}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedId === block.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === block.id ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="bg-slate-950 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                    <code>{block.content}</code>
                  </pre>
                </div>
              );

            case 'quiz':
              return (
                <div key={block.id} className="bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/30 rounded-2xl p-6 space-y-3">
                  <h4 className="font-bold text-sm text-purple-300 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>{block.title || 'Knowledge Check / Quiz'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200">{block.content}</p>
                </div>
              );

            case 'classroom':
              return (
                <div key={block.id} className="bg-blue-950/30 border border-blue-500/30 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-[11px] text-blue-400 font-bold uppercase tracking-wider block">🔗 Google Classroom Assignment:</span>
                    <span className="text-xs font-bold text-white">{block.title || 'Assigned Task Link'}</span>
                  </div>
                  <a
                    href={block.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow"
                  >
                    <span>Open Classroom Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Completion Action Footer */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h4 className="font-bold text-sm text-white">Finished reviewing this lesson?</h4>
          <p className="text-xs text-slate-400">Marking complete updates your overall course progress and unlocks subsequent modules.</p>
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
    </div>
  );
};