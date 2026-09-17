import { useState } from 'react';
import { 
  X, 
  Briefcase, 
  ExternalLink, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Printer, 
  ShieldCheck,
  Terminal
} from 'lucide-react';

interface StudentDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
  studentEmail?: string;
}

export const StudentDossierModal = ({
  isOpen,
  onClose,
  studentName = '',
  studentEmail = '',
}: StudentDossierModalProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hireMessageSent, setHireMessageSent] = useState(false);

  if (!isOpen) return null;

  const resolvedName = studentName || (studentEmail ? studentEmail.split('@')[0].toUpperCase() : 'ALEXANDER DELA CRUZ');
  const resolvedEmail = studentEmail || 'alex.delacruz@kezjed.edu.ph';

  const verifiedBadges = [
    'HTML5 Semantic Architecture',
    'Modern CSS3 & Container Queries',
    'JavaScript ES6+ Closures & DOM',
    'Async Event Loop & Web APIs',
    'React 18 & TypeScript Systems',
    'Node.js & Express REST APIs',
    'PostgreSQL & Supabase RLS',
    'Docker & CI/CD Pipelines',
    'Autonomous AI Agents & RAG',
    'TESDA CSS NC II Certified'
  ];

  const capstoneProjects = [
    {
      title: 'Enterprise AI Multi-Tenant SaaS Platform',
      level: 'Level 9 Hero Capstone',
      description: 'Autonomous LLM agent system with pgvector cosine similarity search, Stripe subscriptions, and Docker multi-stage cloud orchestration.',
      tech: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'pgvector', 'Docker'],
      demoUrl: 'https://epicademy.vercel.app',
      status: 'Verified Production Deployment'
    },
    {
      title: 'Active Directory Domain Controller & Network Infrastructure',
      level: 'TESDA CSS NC II Practical Capstone',
      description: 'Full Windows Server 2022 setup with DNS forward lookup zones, DHCP scope reservations, GPO folder redirection, and Cat6 T568B structured cabling.',
      tech: ['Windows Server', 'Active Directory', 'DNS', 'DHCP', 'Cat6 Cabling'],
      demoUrl: '#',
      status: 'Institutional Competency Passed (100%)'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resolvedEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col text-slate-100 font-sans">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                Talent Directory &amp; Career Placement
              </span>
              <h2 className="text-sm sm:text-base font-black text-white">
                Student Academic Dossier &amp; Verified Portfolio
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print Dossier
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dossier Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Profile Card */}
          <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg border-2 border-amber-400">
                  {resolvedName.slice(0, 2)}
                </div>
                <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full text-[10px] font-black shadow" title="Verified Graduate">
                  ✓
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-black text-white">{resolvedName}</h3>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                    Ready for Hire
                  </span>
                </div>
                <p className="text-xs text-blue-300 font-medium">
                  Full-Stack Software Engineer • Certified by KEZJED SOLUTIONS
                </p>
                <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 justify-center sm:justify-start">
                  <Mail className="w-3.5 h-3.5 text-slate-500" /> {resolvedEmail}
                </p>
              </div>
            </div>

            {/* Academic Honor Stats */}
            <div className="flex items-center gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
              <div className="px-3 border-r border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Cumulative GPA</span>
                <span className="text-lg font-black text-emerald-400 font-mono">3.98</span>
              </div>
              <div className="px-3 border-r border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Contact Hours</span>
                <span className="text-lg font-black text-blue-400 font-mono">180h</span>
              </div>
              <div className="px-3">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Distinction</span>
                <span className="text-xs font-black text-amber-400">Summa Cum Laude</span>
              </div>
            </div>
          </div>

          {/* Verified Technical Badges & Competencies */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Competencies &amp; Technical Micro-Credentials
            </h4>
            <div className="flex flex-wrap gap-2">
              {verifiedBadges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Capstone Projects */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-blue-400" /> Verified Capstone Software Deliverables
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capstoneProjects.map((proj, i) => (
                <div key={i} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {proj.level}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {proj.status}
                      </span>
                    </div>
                    <h5 className="text-sm font-black text-white">{proj.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Inspect Live Production Build
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter Hiring Callout */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-black uppercase text-emerald-400 flex items-center justify-center sm:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Corporate Recruiting &amp; Placement Guarantee
              </span>
              <h4 className="text-base font-black text-white">Interested in hiring {resolvedName}?</h4>
              <p className="text-xs text-slate-400">
                All candidates from Epicademy have verified code repositories and signed graduation transcripts.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> {copiedEmail ? 'Email Copied!' : 'Copy Candidate Email'}
              </button>
              <button
                onClick={() => setHireMessageSent(true)}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg transition cursor-pointer flex items-center gap-1.5"
              >
                <Briefcase className="w-3.5 h-3.5" /> {hireMessageSent ? 'Inquiry Sent ✓' : 'Schedule Interview'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
