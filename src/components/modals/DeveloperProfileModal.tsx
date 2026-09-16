import { useState } from 'react';
import type { CommunityDeveloper, Track } from '../../types';
import { getPhpPrice, formatPhp } from '../../lib/philippinePayment';
import { 
  X, 
  Star, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Smartphone, 
  Building2, 
  Award, 
  Clock, 
  Layers, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface DeveloperProfileModalProps {
  developer: CommunityDeveloper | null;
  isOpen: boolean;
  onClose: () => void;
  onEnrollTrack: (track: Track) => void;
  onViewSyllabus: (track: Track) => void;
}

export const DeveloperProfileModal = ({
  developer,
  isOpen,
  onClose,
  onEnrollTrack,
  onViewSyllabus,
}: DeveloperProfileModalProps) => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  if (!isOpen || !developer) return null;

  const toggleCourseExpand = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with Gradient */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative shrink-0">
              <img
                src={developer.avatar}
                alt={developer.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover border-4 border-white/20 shadow-xl"
              />
              <span className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full ring-4 ring-slate-900" title="Verified Creator Tenant">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-500/30 border border-blue-400/40 text-blue-200 text-xs font-bold tracking-wide uppercase">
                  Verified Academy Mentor
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                  <Smartphone className="w-3 h-3" />
                  <span>GCash &amp; GoTyme Bank Verified</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight truncate">
                {developer.name}
              </h2>
              <p className="text-sm text-blue-200 font-medium">{developer.roleTitle}</p>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{developer.companyOrBackground}</span>
                <span>•</span>
                <span>{developer.location}</span>
              </p>
            </div>
          </div>

          {/* Developer Performance Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-center">
            <div className="bg-white/5 rounded-2xl p-2.5">
              <div className="flex items-center justify-center gap-1 text-amber-300 font-extrabold text-lg">
                <Star className="w-4 h-4 fill-amber-300" />
                <span>{developer.rating}</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5 font-medium">({developer.reviewCount} Reviews)</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-2.5">
              <p className="text-lg font-black text-white">{developer.studentsCount.toLocaleString()}</p>
              <p className="text-[11px] text-slate-300 mt-0.5 font-medium">Active Students</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-2.5">
              <p className="text-lg font-black text-white">{developer.courses.length} Courses</p>
              <p className="text-[11px] text-slate-300 mt-0.5 font-medium">Published</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-2.5">
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5 font-medium">Dedicated Educator</p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Bio & Credentials */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              About the Mentor &amp; Credentials
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {developer.bio}
            </p>
            <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-start gap-3">
              <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-blue-900">Industry Track Record &amp; Teaching Credentials</p>
                <p className="text-xs text-blue-700 mt-0.5">{developer.credentials}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {developer.featuredSkillTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Courses Catalog Offered by Tenant */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>Courses Offered by Mentor</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Direct learning with fast and secure checkout through GCash, GoTyme Bank, and Maya.
                </p>
              </div>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/80">
                {developer.courses.length} Courses
              </span>
            </div>

            <div className="space-y-4">
              {developer.courses.map((course) => {
                const baseUsd = course.price || 49;
                const originalUsd = course.originalPrice || baseUsd * 2;
                const phpPrice = getPhpPrice(baseUsd);
                const originalPhp = getPhpPrice(originalUsd);
                const isExpanded = expandedCourseId === course.id;

                return (
                  <div
                    key={course.id}
                    className="border border-slate-200 rounded-3xl p-5 sm:p-6 bg-white hover:border-blue-300 transition-all shadow-xs"
                  >
                    {/* Course Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-xs font-bold">
                            {course.level}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                            {course.categoryLabel}
                          </span>
                          {course.badge && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[11px] font-bold">
                              ★ {course.badge}
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 leading-snug">
                          {course.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{course.duration}</span>
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <Layers className="w-3.5 h-3.5 text-slate-400" />
                            <span>{course.lessonsCount} Master Lessons</span>
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <Users className="w-3.5 h-3.5 text-slate-400" />
                            <span>{course.activeLearners.toLocaleString()} students</span>
                          </span>
                        </div>
                      </div>

                      {/* Pricing & Checkout Actions */}
                      <div className="sm:text-right shrink-0 flex flex-col sm:items-end justify-between gap-3 border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
                        <div>
                          <div className="flex items-baseline sm:justify-end gap-2">
                            <span className="text-2xl font-black text-slate-900">
                              {formatPhp(phpPrice)}
                            </span>
                            <span className="text-xs text-slate-400 line-through">
                              {formatPhp(originalPhp)}
                            </span>
                          </div>
                          <p className="text-[11px] font-semibold text-emerald-600 flex items-center sm:justify-end gap-1 mt-0.5">
                            <Smartphone className="w-3 h-3" />
                            <span>GCash &amp; GoTyme Bank Accepted</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button
                            onClick={() => onViewSyllabus(course)}
                            className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                          >
                            Preview Syllabus
                          </button>

                          <button
                            onClick={() => {
                              onClose();
                              onEnrollTrack(course);
                            }}
                            className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-102"
                          >
                            <span>Enroll Now • {formatPhp(phpPrice)}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Modules Accordion Toggle */}
                    {course.modules && course.modules.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <button
                          onClick={() => toggleCourseExpand(course.id)}
                          className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide' : 'View'} Curriculum Outline ({course.modules.length} Modules)</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        {isExpanded && (
                          <div className="mt-3 space-y-2.5 pl-2 border-l-2 border-blue-200 animate-in fade-in duration-150">
                            {course.modules.map((mod, mIdx) => (
                              <div key={mIdx} className="text-xs">
                                <p className="font-bold text-slate-800">
                                  {mod.title} <span className="text-slate-400 font-normal">({mod.duration || `${mod.lessons || 6} lessons`})</span>
                                </p>
                                {mod.topics && mod.topics.length > 0 && (
                                  <p className="text-[11px] text-slate-500 mt-0.5">
                                    • {mod.topics.slice(0, 3).join(' • ')}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buyer Trust Footer Note */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p>
              Every course purchased on EPICADEMY is backed by our <strong>14-day student satisfaction guarantee</strong>, official completion certificate, and direct creator community access.
            </p>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Tenant ID: <code className="text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-[11px]">{developer.id}</code>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
