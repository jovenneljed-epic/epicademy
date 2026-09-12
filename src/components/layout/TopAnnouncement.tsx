import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

interface TopAnnouncementProps {
  onOpenAuth?: (mode: 'signup' | 'signin') => void;
}

export const TopAnnouncement: React.FC<TopAnnouncementProps> = ({ onOpenAuth }) => {
  return (
    <aside aria-label="Announcement" className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs sm:text-sm py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Message */}
        <div className="flex items-center gap-2 truncate">
          <span className="hidden sm:inline-flex p-1 rounded-md bg-white/10 text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="truncate">
            ✨ <strong>Welcome to Epicademy!</strong> "There is hope for your future." Learn and grow from Zero to Hero!
          </span>
        </div>

        {/* Right: Actions & Badges */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-xs font-semibold">
          <div className="hidden md:flex items-center gap-1.5 text-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Accessible Tuition for Global & Local Learners</span>
          </div>

          <button
            type="button"
            onClick={() => onOpenAuth?.('signup')}
            className="px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <Heart className="w-3 h-3 text-rose-300" />
            <span>Join Free</span>
          </button>
        </div>

      </div>
    </aside>
  );
};