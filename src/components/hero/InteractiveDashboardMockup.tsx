import { useState } from 'react';
import type { FormEvent } from 'react';
import { 
  Play, 
  Users, 
  Video, 
  TrendingUp, 
  CheckCircle, 
  Award, 
  Sparkles, 
  FileText, 
  Send, 
  Mic, 
  Share2, 
  ChevronRight,
  BarChart3,
  DollarSign
} from 'lucide-react';

interface MockupProps {
  perspective: 'educator' | 'student';
}

export const InteractiveDashboardMockup = ({ perspective: _perspective }: MockupProps) => {
  const [activeTab, setActiveTab] = useState<'lms' | 'community' | 'live' | 'analytics'>('lms');
  const [demoComment, setDemoComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { name: 'Alex Rivera', text: 'Loved the breakdown on Attention Heads! Code snippet worked instantly.', time: '10m ago' },
    { name: 'Sophia Chen', text: 'Will there be a live Q&A session this Thursday?', time: '32m ago' }
  ]);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [activeLesson, setActiveLesson] = useState(2);

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    if (!demoComment.trim()) return;
    setCommentsList([{ name: 'You (Preview)', text: demoComment, time: 'Just now' }, ...commentsList]);
    setDemoComment('');
  };

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-2 sm:p-4 shadow-2xl border border-slate-800 relative overflow-hidden text-slate-100">
      
      {/* Window Controls & Tab Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 border-b border-slate-800 bg-slate-950/60 rounded-2xl mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
            https://app.epicademy.io/workspace/dashboard
          </span>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('lms')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'lms' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Course Studio</span>
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'community' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Community Circles</span>
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'live' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span className="flex items-center gap-1">
              Live Stage
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Analytics & Funnels</span>
            <span className="sm:hidden">Growth</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="bg-slate-950/40 rounded-2xl p-3 sm:p-5 min-h-[380px]">
        
        {/* TAB 1: LMS / Course Studio */}
        {activeTab === 'lms' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            
            {/* Left: Video Player Mockup */}
            <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center group">
                {/* Visual Video Content */}
                <div className="absolute inset-0 bg-radial from-blue-500/10 to-transparent"></div>
                <div className="text-center p-4 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                    Module 2: Agent Architecture
                  </span>
                  <h4 className="font-bold text-base sm:text-lg text-white mt-2">
                    Deep Dive: Building Autonomous Evaluator Pipelines
                  </h4>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between text-xs text-slate-300 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-mono font-medium">14:20</span>
                    <span>/</span>
                    <span className="text-slate-500 font-mono">28:45</span>
                  </div>
                  <div className="h-1.5 flex-1 mx-4 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> 1080p 60fps
                  </span>
                </div>
              </div>

              {/* Lesson Footer */}
              <div className="p-3 sm:p-4 flex items-center justify-between border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">
                    Instructor: <strong className="text-white">Dr. Marcus Vance</strong>
                  </span>
                  <span className="hidden sm:inline-block text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    Track: STEM & AI
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Resources (.zip)
                  </button>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-1">
                    Next Lesson <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Modules & Curriculum Checklist */}
            <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-3 sm:p-4 space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Syllabus</span>
                <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800/40">
                  4/12 Completed
                </span>
              </div>

              {[
                { id: 1, title: '1. Attention Mechanism Mathematics', dur: '18m', done: true },
                { id: 2, title: '2. Autonomous Evaluator Pipelines', dur: '28m', active: true },
                { id: 3, title: '3. Vector Database Indexing at Scale', dur: '35m' },
                { id: 4, title: '4. Fine-Tuning with Low-Rank Adapters', dur: '42m' },
                { id: 5, title: '5. Capstone Project Brief & Rubric', dur: '15m' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveLesson(item.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between border cursor-pointer ${
                    activeLesson === item.id
                      ? 'bg-blue-600/20 border-blue-500/50 text-blue-200'
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {item.done ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[9px] ${
                        activeLesson === item.id ? 'border-blue-400 text-blue-400' : 'border-slate-600 text-slate-400'
                      }`}>
                        {item.id}
                      </div>
                    )}
                    <span className="truncate font-medium">{item.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono shrink-0 ml-2">{item.dur}</span>
                </button>
              ))}

              <div className="pt-2">
                <div className="p-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-800/30 rounded-xl text-center">
                  <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-slate-200">EPIC Verified Credential</p>
                  <p className="text-[10px] text-slate-400">Issued automatically upon track completion</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Community Circles */}
        {activeTab === 'community' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Left Channels column */}
            <div className="lg:col-span-4 bg-slate-900 rounded-2xl border border-slate-800 p-3 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 py-1 flex items-center justify-between">
                <span>Community Channels</span>
                <span className="text-emerald-400 text-[10px] font-mono">● 482 Online</span>
              </div>
              <div className="space-y-1">
                {['#announcements', '#general-lounge', '#ai-engineering', '#venture-incubator', '#code-reviews'].map((ch, idx) => (
                  <div 
                    key={ch} 
                    className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between cursor-pointer ${
                      idx === 2 ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <span>{ch}</span>
                    {idx === 2 && <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] font-bold">New</span>}
                  </div>
                ))}
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 mt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Peer Leaderboard
                </div>
                <p className="text-[11px] text-slate-400">Earn Karma points by answering peer questions in the tracks.</p>
              </div>
            </div>

            {/* Right Live Stream / Thread */}
            <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between">
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">#ai-engineering</span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">STEM Cohort 4</span>
                  </div>
                  <span className="text-xs text-slate-400">Pinned by Instructor</span>
                </div>

                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {commentsList.map((c, i) => (
                    <div key={i} className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-800/60 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {c.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-200">{c.name}</span>
                          <span className="text-[10px] text-slate-500">{c.time}</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add comment input */}
              <form onSubmit={handleAddComment} className="flex gap-2">
                <input
                  type="text"
                  value={demoComment}
                  onChange={(e) => setDemoComment(e.target.value)}
                  placeholder="Ask a question or share a thought in this channel..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post</span>
                </button>
              </form>
            </div>

          </div>
        )}

        {/* TAB 3: Live Stage / Webinar */}
        {activeTab === 'live' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-4 relative overflow-hidden">
              <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center relative p-4 text-center">
                <div className="w-20 h-20 rounded-full border-2 border-red-500 p-1 mb-3 animate-pulse">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Host"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span> Live Broadcast
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">
                  Weekly Architecture AMA & Live Code Lab
                </h4>
                <p className="text-xs text-slate-400 mt-1">Host: Dr. Marcus Vance • 142 Students Attending</p>

                <div className="absolute bottom-3 flex items-center gap-2">
                  <button 
                    onClick={() => setIsMicMuted(!isMicMuted)}
                    className={`p-2 rounded-xl text-xs flex items-center gap-1 font-medium transition-colors ${
                      isMicMuted ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-200'
                    }`}
                  >
                    <Mic className="w-3.5 h-3.5" />
                    <span>{isMicMuted ? 'Muted' : 'Speaking'}</span>
                  </button>
                  <button className="p-2 rounded-xl bg-slate-800 text-slate-200 text-xs flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5" /> Screen Share
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                Live Classroom Tools
              </div>
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Breakout Study Pods</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">6 Pods Active</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Interactive Polling</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-mono">Poll Ready</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Whiteboard Canvas</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-mono">Collaborative</span>
                </div>
              </div>
              <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/40 text-center">
                <p className="text-[11px] text-blue-300 font-medium">Replaces Zoom + WebinarJam</p>
                <p className="text-[10px] text-slate-400">Zero extra software for students to download.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Analytics & Funnels */}
        {activeTab === 'analytics' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Revenue</span>
                <p className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-1 flex items-center">
                  <DollarSign className="w-4 h-4" /> 48,250
                </p>
                <span className="text-[10px] text-emerald-500 font-semibold">+34% vs last month</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Active Students</span>
                <p className="text-lg sm:text-xl font-extrabold text-white mt-1">2,840</p>
                <span className="text-[10px] text-blue-400 font-semibold">Across 5 tracks</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Course Completion</span>
                <p className="text-lg sm:text-xl font-extrabold text-blue-400 mt-1">82.4%</p>
                <span className="text-[10px] text-slate-400">4x industry norm</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Platform Fees</span>
                <p className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-1">$0.00</p>
                <span className="text-[10px] text-slate-400">0% transaction fees</span>
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Automated Enrollment & Marketing Funnel</h5>
                  <p className="text-[11px] text-slate-400">Opt-in page → Free Syllabus Preview → 1-Click Stripe Checkout → Welcome Email Sequence</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  12.4% Conversion Rate
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
