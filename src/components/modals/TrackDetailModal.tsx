import { useState, useEffect } from 'react';
import type { Track, ModuleItem } from '../../types';
import { 
  X, 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  Video,
  Play,
  FileSpreadsheet,
  ExternalLink,
  Code2,
  Copy,
  Check,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { fetchTrackModulesAndLessons } from '../../lib/supabaseClient';
import { HTML_COURSE_DETAILED_MODULES } from '../../data/htmlCourseData';
import { getZeroToHeroCourse, type DetailedLesson } from '../../data/zeroToHeroCoursesData';
import { getPhpPrice } from '../../lib/philippinePayment';

interface TrackDetailModalProps {
  track: Track | null;
  onClose: () => void;
  onEnroll: (track: Track) => void;
}

export const TrackDetailModal = ({
  track,
  onClose,
  onEnroll,
}: TrackDetailModalProps) => {
  const [modules, setModules] = useState<ModuleItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeLessonPlan, setActiveLessonPlan] = useState<DetailedLesson | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (!track) {
      setModules([]);
      setActiveLessonPlan(null);
      return;
    }

    const zeroCourse = getZeroToHeroCourse(track.id);
    if (zeroCourse && zeroCourse.detailedModules.length > 0) {
      const mapped = zeroCourse.detailedModules.map((m, mIdx) => ({
        id: `mod-${track.id}-${mIdx + 1}`,
        track_id: track.id,
        title: m.title,
        duration: m.duration,
        lessons: m.lessons.length,
        topics: m.lessons.map(l => l.title),
        lessonItems: m.lessons.map((l, lIdx) => ({
          id: `les-${track.id}-${mIdx + 1}-${lIdx + 1}`,
          module_id: `mod-${track.id}-${mIdx + 1}`,
          title: l.title,
          duration: l.duration,
          video_url: l.videoUrl,
          content: JSON.stringify(l),
          order_index: lIdx + 1,
        })),
      }));
      setModules(mapped);
      if (zeroCourse.detailedModules[0]?.lessons[0]) {
        setActiveLessonPlan(zeroCourse.detailedModules[0].lessons[0]);
      }
      return;
    }

    if (track.modules && track.modules.length > 0) {
      setModules(track.modules);
      return;
    }

    const loadModules = async () => {
      setIsLoading(true);
      const dbModules = await fetchTrackModulesAndLessons(track.id);
      setModules(dbModules);
      setIsLoading(false);
    };

    loadModules();
  }, [track]);

  if (!track) return null;

  const handleSelectLesson = (lessonTitle: string) => {
    // 1. Search in Zero to Hero course curriculum
    const zeroCourse = getZeroToHeroCourse(track.id);
    if (zeroCourse) {
      for (const mod of zeroCourse.detailedModules) {
        for (const les of mod.lessons) {
          if (les.title.toLowerCase() === lessonTitle.toLowerCase() || les.title.includes(lessonTitle) || lessonTitle.includes(les.title)) {
            setActiveLessonPlan(les);
            return;
          }
        }
      }
    }

    // 2. Search detailed lesson in HTML curriculum
    for (const mod of HTML_COURSE_DETAILED_MODULES) {
      for (const les of mod.lessons) {
        if (les.title.toLowerCase() === lessonTitle.toLowerCase() || les.title.includes(lessonTitle)) {
          setActiveLessonPlan(les);
          return;
        }
      }
    }

    // 3. Default fallback if custom course
    setActiveLessonPlan({
      title: lessonTitle,
      duration: '25 mins',
      videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
      videoTitle: 'Classroom Video Lecture',
      objective: 'Master the core concepts of this lesson through active coding and classroom exercises.',
      theoryContent: 'Follow along with the video instruction and complete the hands-on coding challenge below.',
      codeSnippet: `<!-- Sample Lesson Code -->\n<div>\n  <h3>${lessonTitle}</h3>\n  <p>Write your code implementation here...</p>\n</div>`,
      handsOnActivity: {
        title: 'Classroom Practice Challenge',
        instructions: [
          'Watch the lecture video completely.',
          'Open your code editor and replicate the sample code.',
          'Complete the Google Sheets classroom rubric assignment.'
        ],
        starterCode: `<!-- Starter code -->`,
        expectedOutcome: 'Working code verified against unit tests and standards.'
      },
      googleSheetsAssignment: {
        title: 'Google Sheets Classroom Activity Lab',
        sheetName: 'Classroom_Assignment',
        description: 'Complete the Google Sheets assignment worksheet and rubric.',
        templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
        deliverables: ['Fill out all question prompts', 'Verify syntax checklist', 'Submit sheet link'],
        rubric: [
          { criteria: 'Correct Syntax & Structure', points: 50 },
          { criteria: 'Activity Deliverable Completed', points: 50 }
        ]
      }
    });
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Convert watch URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Banner */}
        <div className={`p-6 bg-gradient-to-r ${track.colorTheme || 'from-orange-600 via-amber-600 to-yellow-600'} text-white relative shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/20 text-white hover:bg-black/40 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {track.levelIndex && (
              <span className="text-xs font-black uppercase tracking-wider bg-black/40 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                Level {track.levelIndex} of 9
              </span>
            )}
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
              {track.categoryLabel}
            </span>
            <span className="text-xs font-semibold bg-white/10 px-2 py-0.5 rounded-full">
              {track.level}
            </span>
            {track.careerMilestone && (
              <span className="text-xs font-bold bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {track.careerMilestone}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-black leading-tight">
            {track.title}
          </h3>

          <p className="text-xs sm:text-sm text-amber-100 mt-2 line-clamp-2">
            {track.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" /> {track.lessonsCount || 8} Complete Lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {track.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {track.activeLearners.toLocaleString()} Enrolled Students
            </span>
            <span className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" /> Google Sheets Assignments Included
            </span>
          </div>
        </div>

        {/* Modal Body: Active Lesson Plan Workspace OR Curriculum Syllabus */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {activeLessonPlan ? (
            /* ACTIVE LESSON CLASSROOM WORKSPACE */
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Back to Syllabus Button */}
              <button
                onClick={() => setActiveLessonPlan(null)}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-blue-50 px-3 py-1.5 rounded-lg"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Full Course Syllabus</span>
              </button>

              {/* Lesson Title Header */}
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                  <span>Classroom Lesson Plan</span>
                  <span>•</span>
                  <span>{activeLessonPlan.duration}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {activeLessonPlan.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  <strong>Learning Objective:</strong> {activeLessonPlan.objective}
                </p>
              </div>

              {/* Supporting Video Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-red-600" />
                    <span>Supporting Lecture Video: {activeLessonPlan.videoTitle}</span>
                  </span>
                  <a 
                    href={activeLessonPlan.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Open on YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-black shadow-md">
                  <iframe
                    src={getEmbedUrl(activeLessonPlan.videoUrl)}
                    title={activeLessonPlan.videoTitle}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Theory Content & Explanation */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Core Theory & Step-by-Step Concepts</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-sans">
                  {activeLessonPlan.theoryContent}
                </p>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-blue-600" />
                    <span>Sample HTML5 Code Snippet</span>
                  </span>
                  <button
                    onClick={() => handleCopyCode(activeLessonPlan.codeSnippet)}
                    className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                <pre className="bg-slate-900 text-slate-100 p-4 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{activeLessonPlan.codeSnippet}</code>
                </pre>
              </div>

              {/* Hands-on Activity Challenge */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-5 border border-amber-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-sm text-amber-950">
                    {activeLessonPlan.handsOnActivity.title}
                  </h4>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-amber-900">Step-by-Step Instructions:</span>
                  <ol className="list-decimal pl-5 text-xs text-amber-900/90 space-y-1">
                    {activeLessonPlan.handsOnActivity.instructions.map((ins, iIdx) => (
                      <li key={iIdx}>{ins}</li>
                    ))}
                  </ol>
                </div>

                <div className="pt-2 border-t border-amber-200/60 text-xs text-amber-900">
                  <strong>Expected Outcome:</strong> {activeLessonPlan.handsOnActivity.expectedOutcome}
                </div>
              </div>

              {/* Google Sheets Classroom Assignment */}
              <div className="bg-emerald-50/70 rounded-2xl p-5 sm:p-6 border-2 border-emerald-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-emerald-950">
                        {activeLessonPlan.googleSheetsAssignment.title}
                      </h4>
                      <p className="text-xs text-emerald-800">
                        {activeLessonPlan.googleSheetsAssignment.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={activeLessonPlan.googleSheetsAssignment.templateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Open Google Sheets Template</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Assignment Deliverables */}
                <div className="space-y-1.5 text-xs text-emerald-950">
                  <span className="font-bold">Worksheet Deliverables:</span>
                  <ul className="list-disc pl-5 space-y-0.5 text-emerald-900/90">
                    {activeLessonPlan.googleSheetsAssignment.deliverables.map((del, dIdx) => (
                      <li key={dIdx}>{del}</li>
                    ))}
                  </ul>
                </div>

                {/* Grading Rubric Table */}
                <div className="pt-2 border-t border-emerald-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-2">
                    100-Point Grading Rubric:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeLessonPlan.googleSheetsAssignment.rubric.map((item, rIdx) => (
                      <div key={rIdx} className="p-2.5 rounded-xl bg-white border border-emerald-200/80 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800 truncate mr-2">{item.criteria}</span>
                        <span className="font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                          {item.points} pts
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* COURSE SYLLABUS & CURRICULUM OVERVIEW */
            <>
              {/* Instructor Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-4">
                <img
                  src={track.instructor.avatar}
                  alt={track.instructor.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-slate-900">{track.instructor.name}</h4>
                    {track.instructor.verified && (
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{track.instructor.role}</p>
                  <p className="text-[11px] text-slate-400">{track.instructor.credentials}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-amber-500 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" />
                    <span>{track.rating}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">({track.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Curriculum Modules from Supabase */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                    Full Curriculum Syllabus (Click any lesson to start)
                  </h4>
                  <span className="text-xs text-blue-600 font-semibold">
                    {modules.length} Modules • {track.lessonsCount || 8} Interactive Lessons
                  </span>
                </div>

                {isLoading ? (
                  <div className="p-8 text-center text-xs text-slate-500">
                    Loading curriculum modules from Supabase...
                  </div>
                ) : modules.length > 0 ? (
                  <div className="space-y-4">
                    {modules.map((mod, idx) => (
                      <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-900">
                            <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400 shrink-0">
                            {mod.duration || '1 Week'}
                          </span>
                        </div>

                        {/* Interactive Lessons List */}
                        {mod.lessonItems && mod.lessonItems.length > 0 ? (
                          <div className="pl-8 space-y-2">
                            {mod.lessonItems.map((les, lIdx) => (
                              <button
                                key={lIdx}
                                onClick={() => handleSelectLesson(les.title)}
                                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-orange-50/60 hover:border-orange-300 border border-slate-200/70 transition-all flex items-center justify-between cursor-pointer group"
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-orange-600 group-hover:text-white text-slate-600 flex items-center justify-center text-xs transition-colors shadow-xs">
                                    <Play className="w-3.5 h-3.5 fill-current" />
                                  </div>
                                  <div>
                                    <p className="font-bold text-xs text-slate-900 group-hover:text-orange-950">
                                      {les.title}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                                        <FileSpreadsheet className="w-3 h-3" /> Sheets Assignment
                                      </span>
                                      <span>•</span>
                                      <span>{les.duration}</span>
                                    </div>
                                  </div>
                                </div>

                                <span className="text-xs font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                  <span>Start Lesson</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </button>
                            ))}
                          </div>
                        ) : mod.topics && mod.topics.length > 0 ? (
                          <div className="pl-8 space-y-2">
                            {mod.topics.map((topic, tIdx) => (
                              <button
                                key={tIdx}
                                onClick={() => handleSelectLesson(topic)}
                                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200/70 flex items-center justify-between text-xs cursor-pointer group"
                              >
                                <span className="font-medium text-slate-800 group-hover:text-orange-600">
                                  • {topic}
                                </span>
                                <span className="text-[11px] font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                  View Lesson Plan →
                                </span>
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                    Syllabus lessons are being scheduled by the instructor.
                  </div>
                )}
              </div>

              {/* Credentials guarantee */}
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/80 flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-amber-900">Official EPIC HTML5 Developer Certificate Included</p>
                  <p className="text-[11px] text-amber-800/80">
                    Complete all 8 classroom lesson activities and submit your Google Sheets rubrics to receive accredited certification.
                  </p>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-500 block">Course Tuition (PHP)</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-slate-900">₱{getPhpPrice(track.price || 49).toLocaleString()}</span>
              {track.originalPrice && (
                <span className="text-xs text-slate-400 line-through">₱{getPhpPrice(track.originalPrice).toLocaleString()}</span>
              )}
              <span className="text-xs font-bold text-emerald-600 ml-1">Lifetime Access</span>
            </div>
            <span className="text-[10px] text-blue-600 font-semibold block mt-0.5">
              🇵🇭 GCash • GoTyme • Maya • QRPh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(track);
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Enroll • ₱{getPhpPrice(track.price || 49).toLocaleString()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
