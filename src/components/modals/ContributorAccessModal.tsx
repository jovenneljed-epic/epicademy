import React from 'react';
import type { Track } from '../../types';
import { Lock, BookOpen, CreditCard, X, ShieldAlert, ArrowRight } from 'lucide-react';
import { getPhpPrice } from '../../lib/philippinePayment';

interface ContributorAccessModalProps {
  track: Track | null;
  isOpen: boolean;
  onClose: () => void;
  onViewSyllabus: (track: Track) => void;
  onPayEnroll: (track: Track) => void;
}

export const ContributorAccessModal: React.FC<ContributorAccessModalProps> = ({
  track,
  isOpen,
  onClose,
  onViewSyllabus,
  onPayEnroll,
}) => {
  if (!isOpen || !track) return null;

  const pricePhp = getPhpPrice(track.price || 49);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Contributor Role Notice
                </span>
                <h3 className="text-base font-black text-white truncate max-w-xs sm:max-w-sm">
                  {track.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5">
          
          <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4.5 flex items-start gap-3.5">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
              <p className="font-bold text-amber-950">
                Paid Course • Classroom Access Restricted
              </p>
              <p>
                As an authorized <strong>Curriculum Contributor</strong>, you are entitled to view others' courses, syllabi, topic structures, and learning outcomes to help draft and submit community curricula.
              </p>
              <p className="text-slate-600">
                However, full interactive classroom lessons, hands-on lab sandboxes, and exams are restricted for paid courses unless enrolled.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-slate-600">
              <span>Course Tuition:</span>
              <span className="font-black text-slate-900 text-sm">₱{pricePhp.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Your Current Role:</span>
              <span className="font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-full">
                ✍️ Contributor
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Available Action:</span>
              <span className="font-semibold text-emerald-700">
                Syllabus Review &amp; Learning Roadmap
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onViewSyllabus(track);
              }}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>View Full Course Syllabus &amp; Modules</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onPayEnroll(track);
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-blue-500/20"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay &amp; Enroll as Student (₱{pricePhp.toLocaleString()})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
