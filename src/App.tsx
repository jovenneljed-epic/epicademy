import { useState, useEffect } from 'react';
import { TopAnnouncement } from './components/layout/TopAnnouncement';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { AllInOneGrid } from './components/features/AllInOneGrid';
import { TeachingTracksSection } from './components/tracks/TeachingTracksSection';
import { CommunityDevelopersSection } from './components/community/CommunityDevelopersSection';
import { CommunityHubSection } from './components/community/CommunityHubSection';
import { FeatureDeepDives } from './components/features/FeatureDeepDives';
import { PricingSection } from './components/pricing/PricingSection';
import { TestimonialsSection } from './components/social-proof/TestimonialsSection';
import { FAQSection } from './components/faq/FAQSection';
import { FinalCTA } from './components/cta/FinalCTA';
import { AuthModal } from './components/modals/AuthModal';
import { TrackDetailModal } from './components/modals/TrackDetailModal';
import { CourseBuilderModal } from './components/studio/CourseBuilderModal';
import { TeacherSetupModal } from './components/teachers/TeacherSetupModal';
import { CheckoutModal } from './components/modals/CheckoutModal';
import { DeveloperProfileModal } from './components/modals/DeveloperProfileModal';
import { ApplyTenantModal } from './components/modals/ApplyTenantModal';
import { getCurrentUser, supabase } from './lib/supabaseClient';
import type { Track, CommunityDeveloper } from './types';

// TESDA CSS NC II Curriculum Data with Working Videos & Google Sheets Rubrics
const TESDA_CSS_MODULES = [
  {
    id: 1,
    code: 'ICCS',
    title: 'Installing and Configuring Computer Systems (ICCS)',
    duration: '2 Weeks • 70 Hours',
    description: 'Master computer hardware assembly, BIOS/UEFI configuration, device drivers, and OS deployment (Windows 10/11 & Linux).',
    videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA',
    videoTitle: 'TESDA CSS NC II: Complete PC Assembly & OS Installation Masterclass',
    sheetsUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
    sheetsTitle: 'ICCS Hardware Inventory & BIOS Checklist Rubric'
  },
  {
    id: 2,
    code: 'SUCN',
    title: 'Setting Up Computer Networks (SUCN)',
    duration: '2 Weeks • 70 Hours',
    description: 'Learn LAN cabling (Straight-through & Cross-over T568A/T568B), crimping, IP addressing, subnetting, and wireless router configuration.',
    videoUrl: 'https://www.youtube.com/embed/qi_o5YL7Q78',
    videoTitle: 'TESDA CSS: LAN Cabling, UTP Crimping, and Switch Setup',
    sheetsUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
    sheetsTitle: 'SUCN Network Subnetting & Crimping Testing Log'
  },
  {
    id: 3,
    code: 'SUCS',
    title: 'Setting Up Computer Servers (SUCS)',
    duration: '2 Weeks • 70 Hours',
    description: 'Configure Windows Server / Linux network services including DHCP, DNS, Active Directory Domain Services (ADDS), and File Sharing.',
    videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk',
    videoTitle: 'TESDA CSS: Setting Up Windows Server & Active Directory',
    sheetsUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
    sheetsTitle: 'SUCS Server Roles & Client Configuration Assessment'
  },
  {
    id: 4,
    code: 'MRCSN',
    title: 'Maintaining and Repairing Computer Systems and Networks (MRCSN)',
    duration: '2 Weeks • 70 Hours',
    description: 'Diagnose hardware faults, perform system backups, recover crashed operating systems, and implement preventive maintenance procedures.',
    videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ',
    videoTitle: 'TESDA CSS: Troubleshooting, Diagnostics & Preventive Maintenance',
    sheetsUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
    sheetsTitle: 'MRCSN Hardware Fault Diagnostics & Repair Logbook'
  }
];

export function App() {
  const [perspective, setPerspective] = useState<'educator' | 'student'>('educator');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup');
  const [initialEmail, setInitialEmail] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutTrack, setCheckoutTrack] = useState<Track | null>(null);
  const [courseBuilderOpen, setCourseBuilderOpen] = useState(false);
  const [teacherSetupOpen, setTeacherSetupOpen] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState<CommunityDeveloper | null>(null);
  const [developerProfileOpen, setDeveloperProfileOpen] = useState(false);
  const [applyTenantOpen, setApplyTenantOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Active Classroom / Workspace state
  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [selectedActiveTrack, setSelectedActiveTrack] = useState<Track | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Active Supabase user state
  const [currentUser, setCurrentUser] = useState<{ email?: string; role?: string } | null>(null);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setCurrentUser({
          email: user.email,
          role: user.user_metadata?.role || 'educator',
        });
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setCurrentUser({
          email: session.user.email,
          role: session.user.user_metadata?.role || 'educator',
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleOpenAuth = (mode: 'signup' | 'signin', email: string = '', planId?: string) => {
    setAuthMode(mode);
    setInitialEmail(email);
    setSelectedPlanId(planId);
    setAuthModalOpen(true);
  };

  const handleEnrollTrack = (track: Track) => {
    const isFree = (track.price || 49) === 0 || track.id === 'track-tesda-css-nc2' || track.bundleNumber === 2;
    
    if (isFree) {
      setSelectedActiveTrack(track);
      setActiveModuleIndex(0);
      setIsClassroomOpen(true);
    } else {
      setCheckoutTrack(track);
      setCheckoutModalOpen(true);
    }
  };

  const handleSuccessEnroll = (track: Track) => {
    setSelectedActiveTrack(track);
    setActiveModuleIndex(0);
    setIsClassroomOpen(true);
  };

  const handleSelectDeveloper = (dev: CommunityDeveloper) => {
    setSelectedDeveloper(dev);
    setDeveloperProfileOpen(true);
  };

  const handleViewSyllabus = (track: Track) => {
    setSelectedTrack(track);
  };

  const handleCourseCreated = (_newTrack: Track) => {
    setRefreshTrigger(prev => prev + 1);
    const tracksSection = document.getElementById('tracks');
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentMod = TESDA_CSS_MODULES[activeModuleIndex] || TESDA_CSS_MODULES[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Banner */}
      <TopAnnouncement onOpenAuth={handleOpenAuth} />

      {/* Sticky Header */}
      <Navbar
        currentPerspective={perspective}
        onTogglePerspective={setPerspective}
        onOpenAuth={handleOpenAuth}
        onOpenCourseBuilder={() => setCourseBuilderOpen(true)}
        onOpenTeacherSetup={() => setTeacherSetupOpen(true)}
        onOpenApplyTenant={() => setApplyTenantOpen(true)}
        currentUser={currentUser}
        onSignOut={() => setCurrentUser(null)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          perspective={perspective}
          onOpenAuth={handleOpenAuth}
        />
        <AllInOneGrid
          onOpenAuth={handleOpenAuth}
        />
        <TeachingTracksSection
          onSelectTrack={(track) => setSelectedTrack(track)}
          onEnroll={handleEnrollTrack}
          onOpenAuth={handleOpenAuth}
          onOpenCourseBuilder={() => setCourseBuilderOpen(true)}
          refreshTrigger={refreshTrigger}
        />
        <CommunityDevelopersSection
          onSelectDeveloper={handleSelectDeveloper}
          onEnrollTrack={handleEnrollTrack}
          onViewSyllabus={handleViewSyllabus}
          onOpenApplyTenant={() => setApplyTenantOpen(true)}
        />
        <CommunityHubSection
          onOpenAuth={handleOpenAuth}
        />
        <FeatureDeepDives
          onOpenAuth={handleOpenAuth}
        />
        <PricingSection
          onOpenAuth={handleOpenAuth}
        />
        <TestimonialsSection />
        <FAQSection
          onOpenAuth={handleOpenAuth}
        />
        <FinalCTA
          onOpenAuth={handleOpenAuth}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        initialEmail={initialEmail}
        selectedPlanId={selectedPlanId}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={(email, role) => setCurrentUser({ email, role })}
      />

      <TrackDetailModal
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        onEnroll={handleEnrollTrack}
      />

      <CheckoutModal
        track={checkoutTrack}
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        onSuccessEnroll={handleSuccessEnroll}
        userEmail={currentUser?.email}
      />

      <CourseBuilderModal
        isOpen={courseBuilderOpen}
        onClose={() => setCourseBuilderOpen(false)}
        onCourseCreated={handleCourseCreated}
        userEmail={currentUser?.email}
      />

      <TeacherSetupModal
        isOpen={teacherSetupOpen}
        onClose={() => setTeacherSetupOpen(false)}
        onTeacherCreated={(teacher) => {
          setCurrentUser({ email: teacher.email, role: 'educator' });
        }}
      />

      <DeveloperProfileModal
        developer={selectedDeveloper}
        isOpen={developerProfileOpen}
        onClose={() => setDeveloperProfileOpen(false)}
        onEnrollTrack={handleEnrollTrack}
        onViewSyllabus={handleViewSyllabus}
      />

      <ApplyTenantModal
        isOpen={applyTenantOpen}
        onClose={() => setApplyTenantOpen(false)}
      />

      {/* Fully Interactive Classroom Workspace View */}
      {isClassroomOpen && selectedActiveTrack && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-in fade-in duration-200">
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between text-white shrink-0">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Active TESDA CSS NC II Workspace • Official Training Regulations
              </span>
              <h2 className="text-base sm:text-lg font-black mt-0.5">{selectedActiveTrack.title}</h2>
            </div>
            <button
              onClick={() => {
                setIsClassroomOpen(false);
                setSelectedActiveTrack(null);
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Exit Classroom ✕
            </button>
          </div>

          <div className="flex-1 bg-slate-950 overflow-y-auto p-6 text-white flex flex-col items-center">
            <div className="max-w-6xl w-full space-y-6">
              
              {/* Success Banner */}
              <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-2xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 text-slate-950 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-emerald-300">Naka-enroll na sa TESDA CSS NC II Masterclass!</h4>
                    <p className="text-xs text-slate-300">Piliin ang alinman sa 4 Core Competency Modules sa kanan para i-load ang tamang video at Google Sheets rubric.</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right text-xs text-emerald-400 font-mono">
                  Status: 100% Free Lifetime Access
                </div>
              </div>

              {/* Main Grid: Video/Content on Left, Clickable Modules on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Cols: Active Video & Aligned Google Sheets Assignment */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                    <iframe
                      src={currentMod.videoUrl}
                      title={currentMod.videoTitle}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-black uppercase">
                        {currentMod.code} • Module {currentMod.id} of 4
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{currentMod.duration}</span>
                    </div>

                    <h3 className="text-xl font-black text-white">{currentMod.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentMod.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">Aligned Module Assessment:</span>
                        <span className="text-xs font-bold text-emerald-400">{currentMod.sheetsTitle}</span>
                      </div>
                      <a
                        href={currentMod.sheetsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-lg shadow-emerald-600/20 cursor-pointer"
                      >
                        <span>📊 Open Aligned Google Sheets Worksheet</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Col: Fully Clickable Modules List */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 h-fit">
                  <h4 className="font-black text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center justify-between">
                    <span>TESDA Core Modules</span>
                    <span className="text-xs font-normal text-emerald-400">4 Clickable</span>
                  </h4>
                  
                  <div className="space-y-2.5">
                    {TESDA_CSS_MODULES.map((mod, idx) => {
                      const isActive = activeModuleIndex === idx;
                      return (
                        <button
                          key={mod.id}
                          onClick={() => setActiveModuleIndex(idx)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                            isActive
                              ? 'bg-orange-600/20 border-orange-500 text-white shadow-md'
                              : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                              isActive ? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-300'
                            }`}>
                              {mod.code}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">{mod.duration.split('•')[0]}</span>
                          </div>
                          <p className="font-bold text-xs mt-1 leading-snug">{mod.title}</p>
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            ✓ Aligned Google Sheets Lab
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;