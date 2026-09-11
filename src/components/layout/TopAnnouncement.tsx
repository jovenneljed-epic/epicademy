import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface TopAnnouncementProps {
  onOpenAuth: (mode: 'signup' | 'signin') => void;
}

export const TopAnnouncement = ({ onOpenAuth }: TopAnnouncementProps) => {
  return (
    <aside aria-label="Announcement" className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs sm:text-sm py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="hidden sm:inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide">
            <Sparkles className="w-3 h-3 text-amber-300" /> Eskwela ng Bayan
          </span>
          <p className="font-medium text-blue-50">
            🙏 <strong>Kumusta, Kapatid!</strong> "Sapagkat may pag-asa ang iyong kinabukasan." Aral na mula Zero to Hero!
          </p>
          <button 
            onClick={() => onOpenAuth('signup')}
            className="hidden md:inline-flex items-center gap-1 text-amber-200 font-bold underline hover:text-white transition-colors ml-1 cursor-pointer"
          >
            Sumali sa Komunidad <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-xs text-blue-100">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> GCash & GoTyme Bank Ready
          </span>
          <span>•</span>
          <span>Abot-kayang Matrikula para sa Pilipino</span>
        </div>
      </div>
    </aside>
  );
};
