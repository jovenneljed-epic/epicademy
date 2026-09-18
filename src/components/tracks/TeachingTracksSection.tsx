import { useState, useMemo, useEffect, useCallback } from 'react';
import type { Track, CategoryType } from '../../types';
import { TrackCard } from './TrackCard';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Users, 
  HeartPulse, 
  Code2, 
  Plus, 
  Database,
  RefreshCw,
  Map,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';
import { fetchTracksFromDB, deleteTrackFromDB } from '../../lib/supabaseClient';
import { getPhpPrice } from '../../lib/philippinePayment';
import { TESDA_CSS_TRACK } from '../../data/tesdaCssNc2CourseData';
import { PINOY_DRUM_TRACK } from '../../data/pinoyDrumCourseData';
import { PINOY_PIANO_TRACK } from '../../data/pinoyPianoCourseData';
import { PINOY_GUITAR_TRACK } from '../../data/pinoyGuitarCourseData';
import { PINOY_LEAD_GUITAR_TRACK } from '../../data/pinoyLeadGuitarCourseData';

interface TeachingTracksSectionProps {
  onSelectTrack: (track: Track) => void;
  onEnroll: (track: Track) => void;
  onOpenAuth: (mode: 'signup' | 'signin') => void;
  onOpenCourseBuilder: () => void;
  refreshTrigger?: number;
}

const CATEGORIES: { id: CategoryType; name: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'all', name: 'All Disciplines', icon: Layers },
  { id: 'stem', name: 'STEM & AI', icon: Code2 },
  { id: 'business', name: 'Business & SaaS', icon: Sparkles },
  { id: 'creative', name: 'Design & Spatial Arts', icon: BookOpen },
  { id: 'humanities', name: 'Languages & Humanities', icon: Users },
  { id: 'wellness', name: 'Health & Neuroscience', icon: HeartPulse },
];

export const TeachingTracksSection = ({
  onSelectTrack,
  onEnroll,
  onOpenAuth: _onOpenAuth,
  onOpenCourseBuilder,
  refreshTrigger,
}: TeachingTracksSectionProps) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'roadmap' | 'grid'>('roadmap');
  const [activeBundleTab, setActiveBundleTab] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  const loadTracks = useCallback(async () => {
    setIsLoading(true);
    try {
      const { tracks: dbTracks } = await fetchTracksFromDB();
      setTracks(dbTracks && dbTracks.length > 0 ? dbTracks : []);
    } catch {
      setTracks([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTracks();
  }, [loadTracks, refreshTrigger]);

  const filteredTracks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return tracks.filter((track) => {
      const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory;
      const matchesQuery = 
        !query ||
        track.title.toLowerCase().includes(query) ||
        track.description.toLowerCase().includes(query) ||
        (track.skills && track.skills.some(s => s.toLowerCase().includes(query))) ||
        (track.instructor && track.instructor.name.toLowerCase().includes(query));
      const matchesLevel = selectedLevel === 'all' || track.level === selectedLevel;
      return matchesCategory && matchesQuery && matchesLevel;
    });
  }, [tracks, selectedCategory, searchQuery, selectedLevel]);

  const handleDeleteTrack = async (trackId: string) => {
    if (window.confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
      await deleteTrackFromDB(trackId);
      loadTracks();
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedLevel('all');
  };

  return (
    <section id="tracks" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
              Academy & Zero-to-Hero Roadmap
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <Database className="w-3 h-3 text-emerald-600" />
              Supabase Live Connected
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Pathways & 9-Level Career Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Step-by-step progression from your first line of HTML to becoming a Full-Stack AI Software Architect guided by experienced industry mentors.
          </p>
        </div>

        {/* Filter Bar & Course Creation CTA */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 mb-8 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={loadTracks}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Refresh from Database"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-600' : ''}`} />
              </button>

              <button
                type="button"
                onClick={onOpenCourseBuilder}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                <span>+ Create New Course</span>
              </button>
            </div>
          </div>

          {/* Search, Level Filters & View Mode */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, modules, skills, or instructors..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                >
                  <option value="all">All Difficulty Levels</option>
                  <option value="Beginner">Beginner (Levels 1-3)</option>
                  <option value="Intermediate">Intermediate (Levels 4-6)</option>
                  <option value="Advanced">Advanced & Hero (Levels 7-9)</option>
                </select>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode('roadmap')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'roadmap'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Map className="w-3.5 h-3.5 text-blue-600" />
                  <span>Roadmap (Levels 1 → 9)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Catalog Grid</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Tracks Display / Clean State */}
        {isLoading ? (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-xs sm:text-sm font-semibold text-slate-500">
              Loading courses from Supabase database...
            </p>
          </div>
        ) : filteredTracks.length > 0 ? (
          viewMode === 'roadmap' ? (
            /* ZERO TO HERO ROADMAP VIEW */
            <div className="space-y-8">
              {/* Flagship Course Bundles Switcher */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-700">Official Flagship Bundles:</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl flex-wrap">
                    <button
                      type="button"
                      onClick={() => setActiveBundleTab(1)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeBundleTab === 1 
                          ? 'bg-blue-600 text-white shadow-sm' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>Bundle #1: Full-Stack Web Dev (9 Levels)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBundleTab(2)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeBundleTab === 2 
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm' 
                          : 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>★ Bundle #2: TESDA CSS NC II (4 COCs)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBundleTab(3)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeBundleTab === 3 
                          ? 'bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-white shadow-sm' 
                          : 'text-orange-700 bg-orange-50 hover:bg-orange-100'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>★ Bundle #3: Pinoy Drum Masterclass (6 Modules)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBundleTab(4)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeBundleTab === 4 
                          ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 text-white shadow-sm' 
                          : 'text-purple-700 bg-purple-50 hover:bg-purple-100'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>★ Bundle #4: Pinoy Piano & Church Keyboard (6 Modules)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBundleTab(5)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeBundleTab === 5 
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white shadow-sm' 
                          : 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>★ Bundle #5: Pinoy Rhythm Guitar (6 Modules)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBundleTab(6)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeBundleTab === 6 
                          ? 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-500 text-white shadow-sm' 
                          : 'text-rose-700 bg-rose-50 hover:bg-rose-100'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>★ Bundle #6: Pinoy Lead Guitar (6 Modules)</span>
                    </button>
                  </div>
                </div>

                {activeBundleTab === 1 ? (
                  /* BUNDLE #1 BANNER (Full-Stack Web Dev) */
                  <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white border border-indigo-800/50 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                            <Flame className="w-3.5 h-3.5 text-amber-400" /> Complete Career Fast-Track
                          </span>
                          <span className="text-xs font-bold text-blue-300 bg-blue-900/60 px-2.5 py-0.5 rounded-full">
                            73% OFF Lifetime Bundle
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                          The Complete Zero-to-Hero Developer Bundle (All 9 Courses)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                          Instant lifetime access to all 9 progressive courses: HTML5, CSS3, JavaScript ES6+, Async APIs, React 19 & TypeScript, Node.js, PostgreSQL/Supabase, Security/DevOps, and the Full-Stack AI SaaS Hero Capstone. Includes all 70+ video lectures and Google Sheets classroom rubrics.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-300">
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>All 9 Comprehensive Tracks</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-amber-400" />
                            <span>Verified Certificates Included</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                            <span>30-Day Money-Back Guarantee</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center shrink-0 w-full sm:w-auto">
                        <span className="text-xs text-slate-300 uppercase tracking-wide block">Bundle #1 Tuition (PHP)</span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                          <span className="text-4xl font-black text-white">₱17,490</span>
                          <span className="text-base text-slate-400 line-through">₱64,000</span>
                        </div>
                        <p className="text-[11px] text-emerald-400 font-bold mt-0.5">Save ₱46,510 Today (73% OFF)</p>
                        <div className="text-[10px] text-blue-200 mt-1">
                          GCash • GoTyme • Maya • QRPh
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const lastCourse = filteredTracks.find(t => !t.isBundle && t.levelIndex === 9) || filteredTracks[0];
                            if (lastCourse) onEnroll(lastCourse);
                          }}
                          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Unlock All 9 Courses</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : activeBundleTab === 2 ? (
                  /* BUNDLE #2 BANNER (TESDA CSS NC II) - FIXED TO FREE */
                  <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-500/70 shadow-2xl relative overflow-hidden ring-4 ring-amber-400/20">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                          <span className="text-xs font-black uppercase tracking-widest text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-slate-950" /> ★ 2ND OFFICIAL COURSE BUNDLE
                          </span>
                          <span className="text-xs font-bold text-amber-300 bg-amber-900/60 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                            TESDA Training Regulations (TR) Compliant
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          Computer Systems Servicing (CSS) NC II Masterclass & Certification Suite
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                          Official 2nd Course Bundle designed for TESDA National Certificate II. Covers all 4 Core Competencies (ICCS, SUCN, SUCS, MRCSN), 24 video lessons, job order inspection sheets, and mock institutional assessment rubrics guided by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">COC 1</span>
                            <span className="text-[11px] text-slate-300">PC Assembly & OHS</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">COC 2</span>
                            <span className="text-[11px] text-slate-300">Networking & Cabling</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">COC 3</span>
                            <span className="text-[11px] text-slate-300">Windows Servers & AD DS</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">COC 4</span>
                            <span className="text-[11px] text-slate-300">Diagnostics & Repair</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-amber-400/40 text-center shrink-0 w-full sm:w-auto ring-2 ring-amber-400/20">
                        <span className="text-xs text-amber-300 uppercase tracking-wide block font-black">Bundle #2 Tuition</span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                          <span className="text-4xl font-black text-emerald-400">FREE</span>
                        </div>
                        <p className="text-[11px] text-emerald-300 font-bold mt-0.5">100% Free Access</p>
                        <button
                          type="button"
                          onClick={() => {
                            const tesdaTrack = filteredTracks.find(t => t.id === 'track-tesda-css-nc2' || t.isBundle) || TESDA_CSS_TRACK;
                            onEnroll(tesdaTrack);
                          }}
                          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                        >
                          <span>Enroll in Bundle #2 • FREE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : activeBundleTab === 3 ? (
                  /* BUNDLE #3 BANNER (PINOY DRUM MASTERCLASS - ZERO TO HERO) - 100% FREE */
                  <div className="bg-gradient-to-r from-slate-950 via-zinc-900 to-amber-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-500/70 shadow-2xl relative overflow-hidden ring-4 ring-amber-500/20">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                          <span className="text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-red-600 to-amber-500 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> ★ 3RD OFFICIAL COURSE BUNDLE
                          </span>
                          <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                            Tagalog Instructor • Zero to Hero Drummers
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          Pinoy Drum Masterclass: Zero to Hero Professional Drumming Course
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                          Comprehensive Tagalog-instructed drum curriculum turning complete zero beginners into stage-ready heroes. Street-smart Tagalog explanations (&quot;palo&quot;, &quot;padyak&quot;, &quot;sipra&quot;), 24 verified video lessons, ASCII drum tabs, and Google Sheets practice log rubrics accredited by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">Tier 1: Beginner</span>
                            <span className="text-[11px] text-slate-300">Drum Setup, 11 Beats & Fills</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">Tier 2: Advance</span>
                            <span className="text-[11px] text-slate-300">Sipra, OPM & Worship Fills</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-amber-400 block">Tier 3: Pro Hero</span>
                            <span className="text-[11px] text-slate-300">Foot Speed, Solos & Clinics</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-amber-400/40 text-center shrink-0 w-full sm:w-auto ring-2 ring-amber-400/20">
                        <span className="text-xs text-amber-300 uppercase tracking-wide block font-black">Bundle #3 Tuition</span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                          <span className="text-4xl font-black text-emerald-400">FREE</span>
                        </div>
                        <p className="text-[11px] text-emerald-300 font-bold mt-0.5">100% Free Lifetime Access</p>
                        <button
                          type="button"
                          onClick={() => {
                            const drumTrack = filteredTracks.find(t => t.id === 'track-pinoy-drum-zero-to-hero' || t.bundleNumber === 3) || PINOY_DRUM_TRACK;
                            onEnroll(drumTrack);
                          }}
                          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                        >
                          <span>Enroll in Bundle #3 • FREE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : activeBundleTab === 4 ? (
                  /* BUNDLE #4 BANNER (PINOY PIANO & CHURCH KEYBOARD MASTERCLASS - ZERO TO HERO) - 100% FREE */
                  <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-purple-500/70 shadow-2xl relative overflow-hidden ring-4 ring-purple-500/20">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                          <span className="text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> ★ 4TH OFFICIAL COURSE BUNDLE
                          </span>
                          <span className="text-xs font-bold text-purple-300 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-400/40">
                            Tagalog Church Keyboard Instruction • Zero to Hero
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          Pinoy Piano & Church Keyboard Masterclass: Zero to Hero Worship Keyboardist
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                          Comprehensive Tagalog piano curriculum tailored for church musicians and worship keyboardists. Street-smart Tagalog explanations (&quot;sipra sa tenga&quot;, Nashville Number System, slash chords, worship pads, 2-5-1 passing chords, and transposition), 24 verified video lessons, ASCII chord diagrams, and Google Sheets practice log rubrics accredited by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-purple-400 block">Tier 1: Beginner</span>
                            <span className="text-[11px] text-slate-300">White/Black Keys, Major/Minor, Inversions</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-purple-400 block">Tier 2: Church Flow</span>
                            <span className="text-[11px] text-slate-300">Nashville Numbers 1-7, Slash Chords, Sipra</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-purple-400 block">Tier 3: Pro Hero</span>
                            <span className="text-[11px] text-slate-300">Worship Pads, Talk Music, Passing Chords</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-purple-400/40 text-center shrink-0 w-full sm:w-auto ring-2 ring-purple-400/20">
                        <span className="text-xs text-purple-300 uppercase tracking-wide block font-black">Bundle #4 Tuition</span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                          <span className="text-4xl font-black text-emerald-400">FREE</span>
                        </div>
                        <p className="text-[11px] text-emerald-300 font-bold mt-0.5">100% Free Lifetime Access</p>
                        <button
                          type="button"
                          onClick={() => {
                            const pianoTrack = filteredTracks.find(t => t.id === 'track-pinoy-piano-zero-to-hero' || t.bundleNumber === 4) || PINOY_PIANO_TRACK;
                            onEnroll(pianoTrack);
                          }}
                          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                        >
                          <span>Enroll in Bundle #4 • FREE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : activeBundleTab === 5 ? (
                  /* BUNDLE #5 BANNER (PINOY RHYTHM GUITAR MASTERCLASS - ZERO TO HERO) - 100% FREE */
                  <div className="bg-gradient-to-r from-slate-950 via-emerald-950 to-teal-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-emerald-500/70 shadow-2xl relative overflow-hidden ring-4 ring-emerald-500/20">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                          <span className="text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> ★ 5TH OFFICIAL COURSE BUNDLE
                          </span>
                          <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                            Tagalog Rhythm Guitar Instruction • Zero to Hero
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          Pinoy Rhythm Guitar Masterclass: Zero to Hero Rhythm Guitarist
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                          Pure acoustic &amp; electric rhythm guitar mastery tailored for Pinoy guitarists, acoustic performers, and church worship team players. Street-smart Tagalog instruction (&quot;bagsak&quot;, &quot;raspa&quot;, &quot;sipra sa tenga&quot;, palm muting, bossa nova comping, reggae skanks, and funk scratches), 24 verified video lessons, ASCII chord and strumming pattern grids, and Google Sheets practice log rubrics accredited by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-emerald-400 block">Tier 1: Beginner</span>
                            <span className="text-[11px] text-slate-300">Open Chords, Universal Strum (D-D-U-U-D-U), Tuning</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-emerald-400 block">Tier 2: Groove Mastery</span>
                            <span className="text-[11px] text-slate-300">Barre Chords, Palm Muting, Reggae, Bossa &amp; Blues</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-emerald-400 block">Tier 3: Pro Hero</span>
                            <span className="text-[11px] text-slate-300">Worship Voicings, Capo Math, Funk Scratch &amp; Numbers</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-emerald-400/40 text-center shrink-0 w-full sm:w-auto ring-2 ring-emerald-400/20">
                        <span className="text-xs text-emerald-300 uppercase tracking-wide block font-black">Bundle #5 Tuition</span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                          <span className="text-4xl font-black text-emerald-400">FREE</span>
                        </div>
                        <p className="text-[11px] text-emerald-300 font-bold mt-0.5">100% Free Lifetime Access</p>
                        <button
                          type="button"
                          onClick={() => {
                            const guitarTrack = filteredTracks.find(t => t.id === 'track-pinoy-guitar-zero-to-hero' || t.bundleNumber === 5) || PINOY_GUITAR_TRACK;
                            onEnroll(guitarTrack);
                          }}
                          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                        >
                          <span>Enroll in Bundle #5 • FREE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* BUNDLE #6 BANNER (PINOY LEAD GUITAR MASTERCLASS - ZERO TO HERO) - 100% FREE */
                  <div className="bg-gradient-to-r from-slate-950 via-rose-950 to-amber-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-rose-500/70 shadow-2xl relative overflow-hidden ring-4 ring-rose-500/20">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                          <span className="text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-rose-600 via-red-600 to-amber-500 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> ★ 6TH OFFICIAL COURSE BUNDLE
                          </span>
                          <span className="text-xs font-bold text-rose-300 bg-rose-950/80 px-2.5 py-0.5 rounded-full border border-rose-400/40">
                            Tagalog Lead Guitar Instruction • Zero to Hero
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          Pinoy Lead Guitar Masterclass: Zero to Hero Lead Guitarist
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                          Pure Lead Guitar soloing, articulations, and melodic improvisation tailored for Pinoy guitarists, rock shredders, and church worship team soloists. Street-smart Tagalog instruction (alternate picking, pitch bending, vocal vibrato, pentatonic boxes 1-5, speed drills, tapping, pinch harmonics, sweeps, CAGED soloing, modes, ambient worship volume swells, dotted 8th delay, ear training &quot;sipra sa tenga&quot;, and classic Pinoy rock solos including Rivermaya &quot;214&quot; capstone), 24 verified video lessons, ASCII tab charts, and Google Sheets solo practice log rubrics accredited by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-rose-400 block">Tier 1: Foundation</span>
                            <span className="text-[11px] text-slate-300">Alternate Picking, Bends, Vibrato, Pentatonic Box 1</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-rose-400 block">Tier 2: Shred &amp; Modes</span>
                            <span className="text-[11px] text-slate-300">Speed Drills, Tapping, Sweeps, CAGED &amp; Modes</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10">
                            <span className="font-bold text-rose-400 block">Tier 3: Pro Hero</span>
                            <span className="text-[11px] text-slate-300">Worship Swells, Dotted 8th Delay, Phrasing, Sipra &amp; 214 Solo</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-rose-400/40 text-center shrink-0 w-full sm:w-auto ring-2 ring-rose-400/20">
                        <span className="text-xs text-rose-300 uppercase tracking-wide block font-black">Bundle #6 Tuition</span>
                        <div className="flex items-baseline justify-center gap-2 mt-1">
                          <span className="text-4xl font-black text-emerald-400">FREE</span>
                        </div>
                        <p className="text-[11px] text-emerald-300 font-bold mt-0.5">100% Free Lifetime Access</p>
                        <button
                          type="button"
                          onClick={() => {
                            const leadGuitarTrack = filteredTracks.find(t => t.id === 'track-pinoy-lead-guitar-zero-to-hero' || t.bundleNumber === 6) || PINOY_LEAD_GUITAR_TRACK;
                            onEnroll(leadGuitarTrack);
                          }}
                          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                        >
                          <span>Enroll in Bundle #6 • FREE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Step by Step Progression Ladder */}
              <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-emerald-500">
                {filteredTracks.map((track, idx) => {
                  const isBundle6 = Boolean(track.id === 'track-pinoy-lead-guitar-zero-to-hero' || track.bundleNumber === 6);
                  const isBundle5 = Boolean(track.id === 'track-pinoy-guitar-zero-to-hero' || track.bundleNumber === 5);
                  const isBundle4 = Boolean(track.id === 'track-pinoy-piano-zero-to-hero' || track.bundleNumber === 4);
                  const isBundle3 = Boolean(track.id === 'track-pinoy-drum-zero-to-hero' || track.bundleNumber === 3);
                  const isBundle2 = Boolean(track.id === 'track-tesda-css-nc2' || track.bundleNumber === 2);
                  const isAnyBundle = isBundle2 || isBundle3 || isBundle4 || isBundle5 || isBundle6 || Boolean(track.isBundle);
                  const levelNum = track.levelIndex || (idx + 1);
                  const isHighest = levelNum === 9 && !isAnyBundle;
                  
                  // Check if course is free
                  const isFree = (track.price ?? 49) === 0 || isBundle2 || isBundle3 || isBundle4 || isBundle5 || isBundle6;
                  const pricePhp = getPhpPrice(track.price || 49);
                  const origPhp = track.originalPrice ? getPhpPrice(track.originalPrice) : null;

                  return (
                    <div key={track.id} className="relative group">
                      {/* Connected Timeline Node */}
                      <div className={`absolute -left-6 sm:-left-10 top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-md transition-transform group-hover:scale-110 ${
                        isBundle6
                          ? 'bg-gradient-to-tr from-rose-600 via-red-600 to-amber-400 text-white ring-4 ring-rose-400/80 shadow-lg shadow-rose-500/30 animate-pulse'
                          : isBundle5
                          ? 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-400 text-white ring-4 ring-emerald-400/80 shadow-lg shadow-emerald-500/30 animate-pulse'
                          : isBundle4
                          ? 'bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 text-white ring-4 ring-purple-400/80 shadow-lg shadow-purple-500/30 animate-pulse'
                          : isBundle3
                          ? 'bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 text-white ring-4 ring-amber-400/80 shadow-lg shadow-orange-500/30 animate-pulse'
                          : isBundle2
                          ? 'bg-gradient-to-tr from-amber-400 via-orange-400 to-yellow-300 text-slate-950 ring-4 ring-amber-300/80 shadow-lg shadow-amber-500/30 animate-pulse'
                          : isHighest
                          ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-300/40 animate-pulse'
                          : 'bg-blue-600 text-white ring-4 ring-blue-100'
                      }`}>
                        {isBundle6 ? '#6' : isBundle5 ? '#5' : isBundle4 ? '#4' : isBundle3 ? '#3' : isBundle2 ? '#2' : levelNum}
                      </div>

                      {/* Course Row Card */}
                      <div className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative overflow-hidden ${
                        isBundle6
                          ? 'bg-gradient-to-r from-rose-50/90 via-white to-amber-50/30 border-2 border-rose-500 shadow-xl shadow-rose-500/10 hover:shadow-2xl ring-4 ring-rose-300/30'
                          : isBundle5
                          ? 'bg-gradient-to-r from-emerald-50/90 via-white to-teal-50/30 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 hover:shadow-2xl ring-4 ring-emerald-300/30'
                          : isBundle4
                          ? 'bg-gradient-to-r from-purple-50/90 via-white to-indigo-50/30 border-2 border-purple-500 shadow-xl shadow-purple-500/10 hover:shadow-2xl ring-4 ring-purple-300/30'
                          : isBundle3
                          ? 'bg-gradient-to-r from-orange-50/90 via-white to-amber-50/30 border-2 border-amber-500 shadow-xl shadow-orange-500/10 hover:shadow-2xl ring-4 ring-orange-300/30'
                          : isBundle2
                          ? 'bg-gradient-to-r from-amber-50/90 via-white to-amber-50/30 border-2 border-amber-400 shadow-xl shadow-amber-500/10 hover:shadow-2xl ring-4 ring-amber-300/30'
                          : isHighest 
                          ? 'border-amber-300 bg-gradient-to-r from-white via-amber-50/20 to-emerald-50/20 shadow-sm hover:shadow-xl' 
                          : 'bg-white border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl'
                      }`}>
                        {isBundle6 ? (
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-red-600 to-amber-400" />
                        ) : isBundle5 ? (
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-400" />
                        ) : isBundle4 ? (
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-400" />
                        ) : isBundle3 ? (
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400" />
                        ) : isBundle2 ? (
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-300" />
                        ) : null}

                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            {isBundle6 ? (
                              <>
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-amber-500 text-white shadow-sm flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                                  ★ 6TH OFFICIAL COURSE BUNDLE
                                </span>
                                <span className="text-xs font-bold text-rose-950 bg-rose-100 border border-rose-300 px-2.5 py-0.5 rounded-full">
                                  PINOY LEAD GUITAR • ZERO TO HERO
                                </span>
                                <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full">
                                  Tagalog Lead Guitar • 24 Video Lessons
                                </span>
                              </>
                            ) : isBundle5 ? (
                              <>
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white shadow-sm flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                                  ★ 5TH OFFICIAL COURSE BUNDLE
                                </span>
                                <span className="text-xs font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                                  PINOY RHYTHM GUITAR • ZERO TO HERO
                                </span>
                                <span className="text-xs font-bold text-teal-900 bg-teal-100 border border-teal-300 px-2.5 py-0.5 rounded-full">
                                  Tagalog Rhythm Guitar • 24 Video Lessons
                                </span>
                              </>
                            ) : isBundle4 ? (
                              <>
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 text-white shadow-sm flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                                  ★ 4TH OFFICIAL COURSE BUNDLE
                                </span>
                                <span className="text-xs font-bold text-purple-950 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded-full">
                                  PINOY PIANO & CHURCH KEYBOARD • ZERO TO HERO
                                </span>
                                <span className="text-xs font-bold text-indigo-900 bg-indigo-100 border border-indigo-300 px-2.5 py-0.5 rounded-full">
                                  Tagalog Church Keyboard • 24 Video Lessons
                                </span>
                              </>
                            ) : isBundle3 ? (
                              <>
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-sm flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                                  ★ 3RD OFFICIAL COURSE BUNDLE
                                </span>
                                <span className="text-xs font-bold text-orange-950 bg-orange-100 border border-orange-300 px-2.5 py-0.5 rounded-full">
                                  PINOY DRUM MASTERCLASS • ZERO TO HERO
                                </span>
                                <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full">
                                  Tagalog Instructor • 24 Video Lessons
                                </span>
                              </>
                            ) : isBundle2 ? (
                              <>
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                                  ★ 2ND OFFICIAL COURSE BUNDLE
                                </span>
                                <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full">
                                  TESDA CSS NC II VOCATIONAL MASTERCLASS
                                </span>
                                <span className="text-xs font-bold text-blue-800 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded-full">
                                  4 Core Competencies • 280 Nominal Hours
                                </span>
                              </>
                            ) : (
                              <>
                                <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                                  isHighest
                                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                    : 'bg-slate-900 text-white'
                                }`}>
                                  Level {levelNum} of 9
                                </span>
                                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                                  {track.badge}
                                </span>
                              </>
                            )}

                            {track.careerMilestone && (
                              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                🎯 Milestone: {track.careerMilestone}
                              </span>
                            )}
                          </div>

                          <h3 
                            onClick={() => onSelectTrack(track)}
                            className={`text-lg sm:text-xl font-bold transition-colors cursor-pointer flex items-center gap-2 flex-wrap ${
                              isBundle6
                                ? 'text-slate-900 hover:text-rose-600 font-black'
                                : isBundle5
                                ? 'text-slate-900 hover:text-emerald-600 font-black'
                                : isBundle4
                                ? 'text-slate-900 hover:text-purple-600 font-black'
                                : isBundle3
                                ? 'text-slate-900 hover:text-orange-600 font-black'
                                : isBundle2 
                                ? 'text-slate-900 hover:text-amber-700 font-black' 
                                : 'text-slate-900 hover:text-blue-600'
                            }`}
                          >
                            <span>{track.title}</span>
                            {isBundle6 ? (
                              <span className="text-[11px] font-black uppercase bg-gradient-to-r from-rose-600 via-red-600 to-amber-500 text-white px-2 py-0.5 rounded-md shadow-xs">
                                OFFICIAL BUNDLE #6
                              </span>
                            ) : isBundle5 ? (
                              <span className="text-[11px] font-black uppercase bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white px-2 py-0.5 rounded-md shadow-xs">
                                OFFICIAL BUNDLE #5
                              </span>
                            ) : isBundle4 ? (
                              <span className="text-[11px] font-black uppercase bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 text-white px-2 py-0.5 rounded-md shadow-xs">
                                OFFICIAL BUNDLE #4
                              </span>
                            ) : isBundle3 ? (
                              <span className="text-[11px] font-black uppercase bg-gradient-to-r from-red-600 to-amber-500 text-white px-2 py-0.5 rounded-md shadow-xs">
                                OFFICIAL BUNDLE #3
                              </span>
                            ) : isBundle2 ? (
                              <span className="text-[11px] font-black uppercase bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md shadow-xs">
                                OFFICIAL BUNDLE #2
                              </span>
                            ) : null}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                            {track.description}
                          </p>

                          {/* 3 Tiers Mini Grid if Bundle 6 */}
                          {isBundle6 && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 pb-1">
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-rose-200">
                                <span className="font-extrabold text-rose-900 shrink-0">Tier 1:</span>
                                <span className="text-slate-800 truncate font-medium">Foundation (Picking, Bends, Vibrato, Pentatonic Box 1)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-rose-200">
                                <span className="font-extrabold text-rose-900 shrink-0">Tier 2:</span>
                                <span className="text-slate-800 truncate font-medium">Shred &amp; Modes (Speed Drills, Tapping, Sweeps, CAGED &amp; Modes)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-rose-200">
                                <span className="font-extrabold text-rose-900 shrink-0">Tier 3:</span>
                                <span className="text-slate-800 truncate font-medium">Pro Hero (Worship Swells, Dotted 8th Delay, Phrasing, 214 Solo)</span>
                              </div>
                            </div>
                          )}

                          {/* 3 Tiers Mini Grid if Bundle 5 */}
                          {isBundle5 && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 pb-1">
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-emerald-200">
                                <span className="font-extrabold text-emerald-900 shrink-0">Tier 1:</span>
                                <span className="text-slate-800 truncate font-medium">Beginner (Open Chords, Universal Strum, Tuning)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-emerald-200">
                                <span className="font-extrabold text-emerald-900 shrink-0">Tier 2:</span>
                                <span className="text-slate-800 truncate font-medium">Groove Mastery (Barre, Muting, Reggae, Bossa, Blues)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-emerald-200">
                                <span className="font-extrabold text-emerald-900 shrink-0">Tier 3:</span>
                                <span className="text-slate-800 truncate font-medium">Pro Hero (Worship Voicings, Capo, Funk, Numbers)</span>
                              </div>
                            </div>
                          )}

                          {/* 3 Tiers Mini Grid if Bundle 4 */}
                          {isBundle4 && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 pb-1">
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-purple-200">
                                <span className="font-extrabold text-purple-900 shrink-0">Tier 1:</span>
                                <span className="text-slate-800 truncate font-medium">Beginner (Keys, Major/Minor, Inversions)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-purple-200">
                                <span className="font-extrabold text-purple-900 shrink-0">Tier 2:</span>
                                <span className="text-slate-800 truncate font-medium">Church Flow (Numbers 1-7, Slash, Sipra)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-purple-200">
                                <span className="font-extrabold text-purple-900 shrink-0">Tier 3:</span>
                                <span className="text-slate-800 truncate font-medium">Pro Hero (Pads, Talk Music, Passing Chords)</span>
                              </div>
                            </div>
                          )}

                          {/* 3 Tiers Mini Grid if Bundle 3 */}
                          {isBundle3 && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 pb-1">
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-orange-200">
                                <span className="font-extrabold text-orange-900 shrink-0">Tier 1:</span>
                                <span className="text-slate-800 truncate font-medium">Beginner (Setup, 11 Beats, Fills)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-orange-200">
                                <span className="font-extrabold text-orange-900 shrink-0">Tier 2:</span>
                                <span className="text-slate-800 truncate font-medium">Advance (Sipra, OPM & Worship)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-orange-200">
                                <span className="font-extrabold text-orange-900 shrink-0">Tier 3:</span>
                                <span className="text-slate-800 truncate font-medium">Pro Hero (Chops, Solos & Clinics)</span>
                              </div>
                            </div>
                          )}

                          {/* 4 COCs Mini Grid if Bundle 2 */}
                          {isBundle2 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pb-1">
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-amber-200">
                                <span className="font-extrabold text-amber-900 shrink-0">COC 1:</span>
                                <span className="text-slate-800 truncate font-medium">Install & Configure Computer Systems (ICCS)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-amber-200">
                                <span className="font-extrabold text-amber-900 shrink-0">COC 2:</span>
                                <span className="text-slate-800 truncate font-medium">Set-up Computer Networks (SUCN)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-amber-200">
                                <span className="font-extrabold text-amber-900 shrink-0">COC 3:</span>
                                <span className="text-slate-800 truncate font-medium">Set-up Computer Servers (SUCS)</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs bg-white/90 p-2 rounded-lg border border-amber-200">
                                <span className="font-extrabold text-amber-900 shrink-0">COC 4:</span>
                                <span className="text-slate-800 truncate font-medium">Maintain & Repair Systems & Networks (MRCSN)</span>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center gap-3 text-xs text-slate-500 pt-1 flex-wrap">
                            <span className="font-semibold text-slate-700">⏱️ {track.duration}</span>
                            <span>•</span>
                            <span className="font-semibold text-slate-700">📚 {track.lessonsCount || 8} Lessons</span>
                            <span>•</span>
                            <span>Instructor: {track.instructor.name}</span>
                            <span>•</span>
                            <span className="text-amber-500 font-bold">★ {track.rating} ({track.reviewCount} reviews)</span>
                          </div>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto shrink-0 gap-4 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                          <div className="text-left lg:text-right">
                            <div className="flex items-baseline gap-1.5">
                              {isFree ? (
                                <span className="text-2xl font-black text-emerald-600">FREE</span>
                              ) : (
                                <>
                                  <span className="text-2xl font-black text-slate-900">₱{pricePhp.toLocaleString()}</span>
                                  {origPhp && (
                                    <span className="text-xs text-slate-400 line-through">₱{origPhp.toLocaleString()}</span>
                                  )}
                                </>
                              )}
                            </div>
                            {!isFree && (
                              <span className="text-[11px] text-blue-600 font-bold block">
                                GCash • GoTyme • Maya
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => onSelectTrack(track)}
                              className={`px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                                isBundle6
                                  ? 'text-rose-950 bg-rose-100 hover:bg-rose-200 border border-rose-300'
                                  : isBundle5
                                  ? 'text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300'
                                  : isBundle4
                                  ? 'text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-300'
                                  : isBundle3
                                  ? 'text-orange-950 bg-orange-100 hover:bg-orange-200 border border-orange-300'
                                  : isBundle2
                                  ? 'text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300'
                                  : 'text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80'
                              }`}
                            >
                              {isBundle6 ? 'View Lead Guitar Syllabus' : isBundle5 ? 'View Guitar Syllabus' : isBundle4 ? 'View Piano Syllabus' : isBundle3 ? 'View Drum Syllabus' : isBundle2 ? 'View TESDA Syllabus' : 'View Syllabus'}
                            </button>
                            <button
                              type="button"
                              onClick={() => onEnroll(track)}
                              className={`px-4 py-2 text-xs font-black active:scale-95 rounded-xl shadow-md flex items-center gap-1.5 transition-all cursor-pointer ${
                                isBundle6
                                  ? 'text-white bg-gradient-to-r from-rose-600 via-red-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-rose-500/25'
                                  : isBundle5
                                  ? 'text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 shadow-emerald-500/25'
                                  : isBundle4
                                  ? 'text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 shadow-purple-500/25'
                                  : isBundle3
                                  ? 'text-white bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 shadow-orange-500/25'
                                  : isBundle2
                                  ? 'text-slate-950 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 shadow-amber-500/25'
                                  : isFree
                                  ? 'text-white bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25'
                                  : 'text-white bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                              }`}
                            >
                              <span>
                                {isFree 
                                  ? isBundle6
                                    ? 'Enroll in Bundle #6 • FREE'
                                    : isBundle5
                                    ? 'Enroll in Bundle #5 • FREE'
                                    : isBundle4
                                    ? 'Enroll in Bundle #4 • FREE'
                                    : isBundle3 
                                    ? 'Enroll in Bundle #3 • FREE' 
                                    : isBundle2 
                                    ? 'Enroll in Bundle #2 • FREE' 
                                    : 'Enroll • FREE'
                                  : `Enroll • ₱${pricePhp.toLocaleString()}`}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* STANDARD GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTracks.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  onSelectTrack={onSelectTrack}
                  onEnroll={onEnroll}
                  onDeleteTrack={handleDeleteTrack}
                />
              ))}
            </div>
          )
        ) : (
          /* Clean State */
          <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
              <BookOpen className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {tracks.length === 0 ? 'Your Course Catalog is Clean & Ready' : 'No matching courses found'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                {tracks.length === 0
                  ? 'Your database is completely fresh with zero placeholder data. Click below to launch the Course Studio and build your very first course track!'
                  : 'Try resetting your filter or search keywords.'}
              </p>
            </div>

            {tracks.length === 0 ? (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCourseBuilder}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Build My First Course Now</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>
        )}

        {/* Educator Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-800/60 px-3 py-1 rounded-full border border-blue-700">
              Educator Course Studio
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to Expand Your Academy?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-xl">
              Add new tracks, organize video lessons, set drip schedules, and issue completion certificates with zero transaction fees.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCourseBuilder}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm rounded-xl shadow-lg transition-all shrink-0 hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Launch Course Studio</span>
          </button>
        </div>

      </div>
    </section>
  );
};