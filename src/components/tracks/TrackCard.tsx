import type { Track } from '../../types';
import { Star, Clock, BookOpen, Users, CheckCircle, ArrowRight, Sparkles, Trash2, Shield, Lock } from 'lucide-react';
import { getPhpPrice } from '../../lib/philippinePayment';
import { getCourseAccessPermission } from '../../lib/supabaseClient';

interface TrackCardProps {
  track: Track;
  onSelectTrack: (track: Track) => void;
  onEnroll: (track: Track) => void;
  onDeleteTrack?: (trackId: string) => void;
  currentUser?: { email?: string; role?: string } | null;
}

export const TrackCard = ({ track, onSelectTrack, onEnroll, onDeleteTrack, currentUser }: TrackCardProps) => {
  const pricePhp = getPhpPrice(track.price || 49);
  const origPhp = track.originalPrice ? getPhpPrice(track.originalPrice) : null;

  const isBundle6 = Boolean(track.bundleNumber === 6 || track.id === 'track-pinoy-lead-guitar-zero-to-hero');
  const isBundle5 = Boolean(track.bundleNumber === 5 || track.id === 'track-pinoy-guitar-zero-to-hero');
  const isBundle4 = Boolean(track.bundleNumber === 4 || track.id === 'track-pinoy-piano-zero-to-hero');
  const isBundle3 = Boolean(track.bundleNumber === 3 || track.id === 'track-pinoy-drum-zero-to-hero');
  const isBundle2 = Boolean(track.bundleNumber === 2 || track.id === 'track-tesda-css-nc2');
  const isBundle = isBundle2 || isBundle3 || isBundle4 || isBundle5 || isBundle6 || Boolean(track.isBundle);

  const permission = getCourseAccessPermission(track, currentUser?.role, currentUser?.email);
  const isFree = permission.isFree;

  return (
    <div className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group relative ${
      isBundle6
        ? 'bg-gradient-to-b from-rose-50/40 via-white to-white border-2 border-rose-500 shadow-md hover:shadow-2xl ring-2 ring-rose-300/30'
        : isBundle5
        ? 'bg-gradient-to-b from-emerald-50/40 via-white to-white border-2 border-emerald-500 shadow-md hover:shadow-2xl ring-2 ring-emerald-300/30'
        : isBundle4
        ? 'bg-gradient-to-b from-purple-50/40 via-white to-white border-2 border-purple-500 shadow-md hover:shadow-2xl ring-2 ring-purple-300/30'
        : isBundle3
        ? 'bg-gradient-to-b from-orange-50/40 via-white to-white border-2 border-amber-500 shadow-md hover:shadow-2xl ring-2 ring-orange-300/30'
        : isBundle2
        ? 'bg-gradient-to-b from-amber-50/40 via-white to-white border-2 border-amber-400 shadow-md hover:shadow-2xl ring-2 ring-amber-300/30'
        : 'bg-white border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300'
    }`}>
      
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${
        isBundle6
          ? 'from-rose-600 via-red-600 to-amber-400'
          : isBundle5
          ? 'from-emerald-600 via-teal-600 to-amber-400'
          : isBundle4
          ? 'from-purple-600 via-indigo-600 to-amber-400'
          : isBundle3
          ? 'from-red-600 via-amber-500 to-yellow-400'
          : isBundle2 
          ? 'from-amber-500 via-orange-500 to-amber-300' 
          : (track.colorTheme || 'from-blue-600 to-indigo-700')
      }`} />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        
        {/* Category & Badge Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {isBundle6 ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-red-600 px-3 py-0.5 rounded-full shadow-xs border border-rose-400">
                ★ 6TH COURSE BUNDLE
              </span>
            ) : isBundle5 ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-0.5 rounded-full shadow-xs border border-emerald-400">
                ★ 5TH COURSE BUNDLE
              </span>
            ) : isBundle4 ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-0.5 rounded-full shadow-xs border border-purple-400">
                ★ 4TH COURSE BUNDLE
              </span>
            ) : isBundle3 ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-amber-500 px-3 py-0.5 rounded-full shadow-xs border border-amber-400">
                ★ 3RD COURSE BUNDLE
              </span>
            ) : isBundle2 ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 px-3 py-0.5 rounded-full shadow-xs border border-amber-300">
                ★ 2ND COURSE BUNDLE
              </span>
            ) : track.levelIndex ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-white bg-slate-900 px-2.5 py-0.5 rounded-full shadow-xs">
                Level {track.levelIndex} of 9
              </span>
            ) : (
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/80">
                {track.categoryLabel}
              </span>
            )}
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
              isBundle6
                ? 'bg-rose-50 text-rose-900 border-rose-200 font-bold'
                : isBundle5
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200 font-bold'
                : isBundle4
                ? 'bg-purple-50 text-purple-900 border-purple-200 font-bold'
                : isBundle3
                ? 'bg-orange-50 text-orange-900 border-orange-200 font-bold'
                : isBundle2 
                ? 'bg-blue-50 text-blue-800 border-blue-200 font-bold' 
                : 'text-blue-700 bg-blue-50 border-blue-100'
            }`}>
              {track.badge}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {track.popular && (
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Popular
              </span>
            )}
            {onDeleteTrack && (
              <button
                onClick={() => onDeleteTrack(track.id)}
                className="p-1 text-slate-300 hover:text-red-500 rounded transition-colors"
                title="Delete Course"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Milestone Pill */}
        {track.careerMilestone && (
          <div className="mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
              🎯 Milestone: {track.careerMilestone}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 
          onClick={() => onSelectTrack(track)}
          className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
        >
          {track.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {track.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {isBundle6 ? (
            <div className="w-full bg-rose-100/70 border border-rose-200 rounded-lg p-2 text-xs text-rose-950 font-semibold mb-1">
              <span className="font-black text-slate-950 block text-[10px] uppercase tracking-wider mb-1">3 Progressive Lead Tiers:</span>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <span className="bg-white px-2 py-0.5 rounded border border-rose-300 font-bold">Foundation: Picking, Bends & Pentatonic</span>
                <span className="bg-white px-2 py-0.5 rounded border border-rose-300 font-bold">Shred: Speed, Tapping, Sweeps & Modes</span>
                <span className="bg-white px-2 py-0.5 rounded border border-rose-300 font-bold">Hero: Worship Swells, Delay & 214 Solo</span>
              </div>
            </div>
          ) : isBundle5 ? (
            <div className="w-full bg-emerald-100/70 border border-emerald-200 rounded-lg p-2 text-xs text-emerald-950 font-semibold mb-1">
              <span className="font-black text-slate-950 block text-[10px] uppercase tracking-wider mb-1">3 Progressive Rhythm Tiers:</span>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300 font-bold">Beginner: Open Chords & Strum</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300 font-bold">Groove: Barre, Muting & Bossa</span>
                <span className="bg-white px-2 py-0.5 rounded border border-emerald-300 font-bold">Pro: Worship, Funk & Numbers</span>
              </div>
            </div>
          ) : isBundle4 ? (
            <div className="w-full bg-purple-100/70 border border-purple-200 rounded-lg p-2 text-xs text-purple-950 font-semibold mb-1">
              <span className="font-black text-slate-950 block text-[10px] uppercase tracking-wider mb-1">3 Progressive Keyboard Tiers:</span>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <span className="bg-white px-2 py-0.5 rounded border border-purple-300 font-bold">Beginner: Keys & Major/Minor</span>
                <span className="bg-white px-2 py-0.5 rounded border border-purple-300 font-bold">Worship: Numbers & Sipra</span>
                <span className="bg-white px-2 py-0.5 rounded border border-purple-300 font-bold">Pro: Pads, Fills & Solos</span>
              </div>
            </div>
          ) : isBundle3 ? (
            <div className="w-full bg-orange-100/70 border border-orange-200 rounded-lg p-2 text-xs text-orange-950 font-semibold mb-1">
              <span className="font-black text-slate-950 block text-[10px] uppercase tracking-wider mb-1">3 Progressive Drum Tiers:</span>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <span className="bg-white px-2 py-0.5 rounded border border-orange-300 font-bold">Beginner: Setup & 11 Beats</span>
                <span className="bg-white px-2 py-0.5 rounded border border-orange-300 font-bold">Advance: Sipra & OPM</span>
                <span className="bg-white px-2 py-0.5 rounded border border-orange-300 font-bold">Pro: Chops & Masterclass</span>
              </div>
            </div>
          ) : isBundle ? (
            <div className="w-full bg-amber-100/60 border border-amber-200 rounded-lg p-2 text-xs text-amber-900 font-semibold mb-1">
              <span className="font-black text-slate-950 block text-[10px] uppercase tracking-wider mb-1">4 TESDA Core Competencies (COCs):</span>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300 font-bold">COC 1: ICCS</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300 font-bold">COC 2: SUCN</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300 font-bold">COC 3: SUCS</span>
                <span className="bg-white px-2 py-0.5 rounded border border-amber-300 font-bold">COC 4: MRCSN</span>
              </div>
            </div>
          ) : (
            <>
              {(track.skills || []).slice(0, 3).map((skill, idx) => (
                <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                  {skill}
                </span>
              ))}
              {(track.skills || []).length > 3 && (
                <span className="text-[11px] text-slate-400 font-medium px-1.5 py-0.5">
                  +{track.skills.length - 3} more
                </span>
              )}
            </>
          )}
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 py-3 mt-4 border-y border-slate-100 text-center text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Lessons</span>
            <span className="font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" /> {track.lessonsCount || 1}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
            <span className="font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" /> {track.duration || '4 Weeks'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Students</span>
            <span className="font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
              <Users className="w-3.5 h-3.5 text-blue-500" /> {track.activeLearners || 1}
            </span>
          </div>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={track.instructor.avatar}
            alt={track.instructor.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate flex items-center gap-1">
              {track.instructor.name}
              {track.instructor.verified && (
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 inline shrink-0" />
              )}
            </p>
            <p className="text-[11px] text-slate-500 truncate">{track.instructor.role}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="flex items-center text-amber-500 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" />
              <span>{track.rating}</span>
            </div>
            <span className="text-[10px] text-slate-400">({track.reviewCount})</span>
          </div>
        </div>

      </div>

      {/* Card Actions Footer */}
      <div className={`px-5 sm:px-6 py-3.5 border-t flex items-center justify-between gap-3 ${
        isBundle6
          ? 'bg-rose-50/60 border-rose-200'
          : isBundle5
          ? 'bg-emerald-50/60 border-emerald-200'
          : isBundle4
          ? 'bg-purple-50/60 border-purple-200'
          : isBundle3 
          ? 'bg-orange-50/60 border-orange-200' 
          : isBundle2 
          ? 'bg-amber-50/60 border-amber-200' 
          : 'bg-slate-50/80 border-slate-100'
      }`}>
        <div>
          <div className="flex items-baseline gap-1.5">
            {isFree ? (
              <span className="text-base font-black text-emerald-600">FREE</span>
            ) : (
              <>
                <span className="text-base font-black text-slate-900">₱{pricePhp.toLocaleString()}</span>
                {origPhp && (
                  <span className="text-xs text-slate-400 line-through">₱{origPhp.toLocaleString()}</span>
                )}
              </>
            )}
          </div>
          <span className="text-[10px] text-slate-500 font-semibold block">
            {isFree 
              ? '100% Free Lifetime Access' 
              : currentUser?.role === 'admin'
              ? '🛡️ Admin Superuser Bypass'
              : currentUser?.role === 'contributor'
              ? '🔒 Paid • Contributor Restricted'
              : 'GCash • GoTyme • Maya'}
          </span>
        </div>
        <button
          onClick={() => onEnroll(track)}
          className={`px-3.5 py-2 text-xs font-black active:scale-95 rounded-xl shadow-sm flex items-center gap-1.5 transition-all cursor-pointer ${
            isBundle6
              ? 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white shadow-rose-500/20'
              : isBundle5
              ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 text-white shadow-emerald-500/20'
              : isBundle4
              ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white shadow-purple-500/20'
              : isBundle3
              ? 'bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white shadow-orange-500/20'
              : isBundle2
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/20'
              : isFree
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : currentUser?.role === 'admin'
              ? 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-amber-600/25'
              : currentUser?.role === 'contributor'
              ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30'
              : 'text-white bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {currentUser?.role === 'admin' && !isFree ? (
            <Shield className="w-3.5 h-3.5 text-amber-300" />
          ) : currentUser?.role === 'contributor' && !isFree ? (
            <Lock className="w-3.5 h-3.5 text-amber-400" />
          ) : null}
          <span>
            {isBundle6
              ? 'Enroll in Bundle #6 • FREE'
              : isBundle5
              ? 'Enroll in Bundle #5 • FREE'
              : isBundle4
              ? 'Enroll in Bundle #4 • FREE'
              : isBundle3
              ? 'Enroll in Bundle #3 • FREE'
              : isBundle2
              ? 'Enroll in Bundle #2 • FREE'
              : isFree
              ? 'Enroll Free'
              : permission.buttonText}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
