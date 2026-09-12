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

  // Active Supabase user state
  const [currentUser, setCurrentUser] = useState<{ email?: string; role?: string } | null>(null);

  useEffect(() => {
    // Check initial user
    getCurrentUser().then((user) => {
      if (user) {
        setCurrentUser({
          email: user.email,
          role: user.user_metadata?.role || 'educator',
        });
      }
    });

    // Listen to Supabase auth changes
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
      // Directly launch classroom workspace
      setSelectedActiveTrack(track);
      setIsClassroomOpen(true);
    } else {
      setCheckoutTrack(track);
      setCheckoutModalOpen(true);
    }
  };

  const handleSuccessEnroll = (track: Track) => {
    setSelectedActiveTrack(track);
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

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Banner */}
      <TopAnnouncement onOpenAuth={handleOpenAuth} />

      {/* Sticky Header with perspective switcher and Course Studio trigger */}
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
        {/* 1. Hero with high-converting capture & tabbed preview */}
        <HeroSection
          perspective={perspective}
          onOpenAuth={handleOpenAuth}
        />

        {/* 2. All-in-One 6-Tool Replacement Matrix */}
        <AllInOneGrid
          onOpenAuth={handleOpenAuth}
        />

        {/* 3. Multi-Disciplinary Teaching Tracks Directory (Live Supabase) */}
        <TeachingTracksSection
          onSelectTrack={(track) => setSelectedTrack(track)}
          onEnroll={handleEnrollTrack}
          onOpenAuth={handleOpenAuth}
          onOpenCourseBuilder={() => setCourseBuilderOpen(true)}
          refreshTrigger={refreshTrigger}
        />

        {/* 4. Verified Community Developer Tenants & Creator Storefronts */}
        <CommunityDevelopersSection
          onSelectDeveloper={handleSelectDeveloper}
          onEnrollTrack={handleEnrollTrack}
          onViewSyllabus={handleViewSyllabus}
          onOpenApplyTenant={() => setApplyTenantOpen(true)}
        />

        {/* 5. Interactive Community Hub Simulation (Live Supabase) */}
        <CommunityHubSection
          onOpenAuth={handleOpenAuth}
        />

        {/* 5. Feature Deep Dives (Course Studio, Live Webinars, Credentials) */}
        <FeatureDeepDives
          onOpenAuth={handleOpenAuth}
        />

        {/* 6. Transparent 4-Tier Pricing Grid */}
        <PricingSection
          onOpenAuth={handleOpenAuth}
        />

        {/* 7. Success Stories & Proof Metrics */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection
          onOpenAuth={handleOpenAuth}
        />

        {/* 9. Final High-Converting Bottom Banner */}
        <FinalCTA
          onOpenAuth={handleOpenAuth}
        />
      </main>

      {/* Comprehensive Multi-Column Footer */}
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

      {/* Paid Checkout Modal */}
      <CheckoutModal
        track={checkoutTrack}
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        onSuccessEnroll={handleSuccessEnroll}
        userEmail={currentUser?.email}
      />

      {/* Course Creator Studio Modal */}
      <CourseBuilderModal
        isOpen={courseBuilderOpen}
        onClose={() => setCourseBuilderOpen(false)}
        onCourseCreated={handleCourseCreated}
        userEmail={currentUser?.email}
      />

      {/* Teacher Account Setup Modal */}
      <TeacherSetupModal
        isOpen={teacherSetupOpen}
        onClose={() => setTeacherSetupOpen(false)}
        onTeacherCreated={(teacher) => {
          setCurrentUser({ email: teacher.email, role: 'educator' });
        }}
      />

      {/* Developer Tenant Profile / Storefront Modal */}
      <DeveloperProfileModal
        developer={selectedDeveloper}
        isOpen={developerProfileOpen}
        onClose={() => setDeveloperProfileOpen(false)}
        onEnrollTrack={handleEnrollTrack}
        onViewSyllabus={handleViewSyllabus}
      />

      {/* Apply as Creator Tenant Onboarding Modal */}
      <ApplyTenantModal
        isOpen={applyTenantOpen}
        onClose={() => setApplyTenantOpen(false)}
      />

      {/* Classroom Workspace Modal / View */}
      {isClassroomOpen && selectedActiveTrack && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-in fade-in duration-200">
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between text-white shrink-0">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Active Classroom Workspace
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
          <div className="flex-1 bg-slate-950 flex items-center justify-center p-6 text-center text-white">
            <div className="max-w-md space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black border border-emerald-500/30">
                ✓
              </div>
              <h3 className="text-xl font-black">Maligayang Pagdating sa Iyong Classroom!</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Naka-enroll ka na nang tagumpay. I-access ang iyong mga video masterclasses, Google Sheets assignments, at curriculum modules ngayon.
              </p>
              <button
                onClick={() => {
                  // Instead of closing, open the syllabus/lesson detail modal directly for this track!
                  setIsClassroomOpen(false);
                  setSelectedTrack(selectedActiveTrack);
                }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg cursor-pointer transition-all"
              >
                Simulan ang Pag-aaral →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;