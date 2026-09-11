import { useState } from 'react';
import { 
  Layers, 
  Video, 
  Award, 
  CheckCircle2, 
  Users, 
  Share2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface FeatureDeepDivesProps {
  onOpenAuth: (mode: 'signup' | 'signin') => void;
}

export const FeatureDeepDives: React.FC<FeatureDeepDivesProps> = ({ onOpenAuth }) => {
  const [activeDripDay, setActiveDripDay] = useState(7);
  const [certStudentName, setCertStudentName] = useState('Alex Rivera');

  return (
    <div className="py-16 sm:py-24 bg-slate-50 space-y-20 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* DEEP DIVE 1: Drag & Drop Course Studio (Text Left, UI Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> Intuitive Course Studio
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Build Structured, Engaging Curriculums in Minutes
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Organize your knowledge across modules, video lectures, coding sandboxes, quizzes, and downloadable homework. Enable drip scheduling to release content weekly or allow self-paced sprint learning.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Zero bandwidth or video hosting caps (upload in 4K with auto-encoding)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Flexible drip schedules by days after enrollment or specific cohort dates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Built-in quizzes with automated grading and minimum passing thresholds</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>Explore Course Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive UI Mockup */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="font-bold text-sm text-slate-900">Module Editor: Agentic Frameworks</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md font-semibold">
                Published & Live
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Foundational Principles of Transformers</p>
                    <p className="text-[11px] text-slate-500">Video Lesson • 22 mins • 2 Attachments</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">Available Day 0</span>
              </div>

              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Building Autonomous Reasoning Loops</p>
                    <p className="text-[11px] text-blue-600">Video Lesson + Interactive Sandbox</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-slate-500 font-medium">Drip:</span>
                  <select 
                    value={activeDripDay}
                    onChange={(e) => setActiveDripDay(Number(e.target.value))}
                    className="text-xs bg-white border border-slate-300 rounded px-1.5 py-0.5 font-mono cursor-pointer"
                  >
                    <option value={3}>Day 3</option>
                    <option value={7}>Day 7</option>
                    <option value={14}>Day 14</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Mid-Cohort Capstone Quiz & Code Submission</p>
                    <p className="text-[11px] text-slate-500">Graded Assessment • 80% passing score</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">Locked</span>
              </div>
            </div>

            <div className="p-3 bg-slate-100 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <span>Drag to reorder lessons anytime</span>
              <span className="font-bold text-blue-600 cursor-pointer hover:underline">+ Add New Lesson</span>
            </div>
          </div>

        </div>

        {/* DEEP DIVE 2: Live Stages & Breakout Pods (UI Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive UI Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1 bg-slate-900 rounded-3xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="font-bold text-sm">Live Salon #12: Dialectical Reasoning</span>
              </div>
              <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-md font-mono">
                REC • 01:14:22
              </span>
            </div>

            <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-800 relative overflow-hidden flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Users className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold text-white">Prof. Amara Diallo is presenting</p>
                <p className="text-[10px] text-slate-400 mt-0.5">86 Students listening • 4 in Breakout Pods</p>
              </div>

              <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-[10px] font-mono text-emerald-400">
                1080p Ultra-Low Latency
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">Active Pods</span>
                <span className="font-bold text-white">4 Pods (16 Peers)</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">Chat Questions</span>
                <span className="font-bold text-white">24 Answered</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">Replay Status</span>
                <span className="font-bold text-emerald-400">Auto-Archiving</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" /> Zero-Download Live Stages
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Host Masterclasses & Live Breakouts Without Zoom
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Never ask your students to install external apps or deal with broken meeting links. Epicademy live webinars run straight inside the browser with one click, and automatically save to the course library when you end the session.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Breakout pods for hands-on student team collaboration and debate</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Interactive live polling and stage hand-raising</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Instant automated cloud replays posted straight into your course modules</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>See Live Classrooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* DEEP DIVE 3: Gamification & Verifiable Credentials (Text Left, UI Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> High-Retention Gamification
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Keep Student Completion at 80%+ with Automated Badges
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Standard online courses suffer an 85% drop-out rate. Epicademy turns learning into an engaging journey with streak counts, cohort challenges, milestone badges, and verifiable certificates that students proudly display on LinkedIn.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Verifiable cryptographic certificate IDs with custom branding</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Direct 1-click export to LinkedIn Licenses & Certifications</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Karma points awarded for high-quality forum responses & peer help</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>Test Credential Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Certificate Preview UI */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-50 to-blue-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-xl space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-amber-200/60 shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Official Certificate of Mastery
              </span>
              <h4 className="text-xl font-extrabold text-slate-900">
                EPIC ACADEMY CERTIFICATE
              </h4>
              <p className="text-xs text-slate-500">This certifies that</p>
              <div className="py-1">
                <input
                  type="text"
                  value={certStudentName}
                  onChange={(e) => setCertStudentName(e.target.value)}
                  className="font-serif text-xl sm:text-2xl font-bold text-blue-900 text-center border-b border-dashed border-blue-300 focus:outline-none bg-transparent"
                  title="Click to change student name"
                />
              </div>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                has successfully fulfilled all curriculum benchmarks and peer reviews in the <strong className="text-slate-800">STEM & AI Engineering Track</strong>.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                <span>Verification ID: #EPC-2026-984</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Cryptographically Verified
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-2">
              <span className="text-slate-500">Preview how certificates look to students</span>
              <span className="text-blue-600 font-bold flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" /> LinkedIn Ready
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
