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

// =========================================================================
// COMPLETE 14-LESSON COC 1 CURRICULUM (INSTALLING AND CONFIGURING SYSTEMS)
// =========================================================================
const COC1_LESSONS = [
  {
    id: 1,
    title: 'Introduction to Computer Systems',
    duration: '4 Hours',
    objective: 'Understand the fundamental architecture of modern computer systems, data processing cycle, and basic computer classifications.',
    content: 'Covers input, processing, output, and storage devices. Explores von Neumann architecture and system performance factors.',
    videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE',
    activity: 'Create a system block diagram classifying peripherals into input, output, and storage.',
    quiz: 'Identify the primary function of the Arithmetic Logic Unit (ALU).',
    classroomLink: ''
  },
  {
    id: 2,
    title: 'Computer Hardware Components',
    duration: '6 Hours',
    objective: 'Identify, inspect, and test internal and external computer hardware components including CPU, RAM, motherboards, and storage drives.',
    content: 'Detailed study of CPU sockets, motherboard form factors (ATX, Micro-ATX), RAM types (DDR3/DDR4/DDR5), and NVMe vs SSD vs HDD storage.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    activity: 'List motherboard specifications and compatibility check for a target CPU.',
    quiz: 'What is the difference between volatile and non-volatile memory?',
    classroomLink: ''
  },
  {
    id: 3,
    title: 'Occupational Health and Safety (OHS)',
    duration: '4 Hours',
    objective: 'Apply OHS policies and procedures in computer laboratory environments, including ESD protection and ergonomic standards.',
    content: 'Proper grounding techniques, anti-static wrist straps, mat usage, handling hazardous materials, and emergency response protocols.',
    videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4',
    activity: 'Draft an OHS safety checklist for an IT workstation setup.',
    quiz: 'Why is an anti-static wrist strap critical when assembling a PC?',
    classroomLink: ''
  },
  {
    id: 4,
    title: 'Computer Assembly and Disassembly',
    duration: '10 Hours',
    objective: 'Safely assemble and disassemble a complete desktop computer system following manufacturer specifications and OHS standards.',
    content: 'Step-by-step motherboard mounting, CPU installation, thermal paste application, heatsink fan mounting, PSU wiring, and front panel headers.',
    videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA',
    activity: 'Perform physical assembly and cable management on a training PC rig.',
    quiz: 'What is the correct pin orientation for power switch front panel connectors?',
    classroomLink: ''
  },
  {
    id: 5,
    title: 'BIOS/UEFI Configuration',
    duration: '6 Hours',
    objective: 'Navigate and configure BIOS/UEFI firmware settings, boot priorities, hardware monitoring, and security passwords.',
    content: 'Accessing BIOS via hotkeys, configuring boot order for USB installation media, enabling virtualization (Intel VT-x / AMD-V), and setting supervisor passwords.',
    videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk',
    activity: 'Configure boot sequence and secure boot options in the BIOS utility.',
    quiz: 'How do you reset a forgotten BIOS password on a desktop motherboard?',
    classroomLink: ''
  },
  {
    id: 6,
    title: 'Operating System Installation',
    duration: '10 Hours',
    objective: 'Install modern operating systems (Windows 10/11 or Linux Ubuntu) from bootable USB installation media.',
    content: 'Creating bootable media using Rufus, partition formatting (GPT vs MBR), disk partitioning strategies, and clean OS installation steps.',
    videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ',
    activity: 'Execute a clean installation of Windows 11 on a formatted partition.',
    quiz: 'What partition style is required for UEFI boot mode with drives over 2TB?',
    classroomLink: ''
  },
  {
    id: 7,
    title: 'Device Drivers Installation',
    duration: '6 Hours',
    objective: 'Install, update, and troubleshoot hardware device drivers to ensure full system functionality and optimal performance.',
    content: 'Using Device Manager to identify missing drivers (Unknown Devices), installing chipset, graphics, audio, and network interface card (NIC) drivers.',
    videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE',
    activity: 'Verify all hardware drivers are installed without yellow warning triangles in Device Manager.',
    quiz: 'Where can you check if a hardware driver failed to load correctly?',
    classroomLink: ''
  },
  {
    id: 8,
    title: 'Application Software Installation',
    duration: '6 Hours',
    objective: 'Install and configure productivity suites, antivirus software, web browsers, and utility applications according to user requirements.',
    content: 'Installing Microsoft Office / LibreOffice, antivirus packages, PDF readers, archiving tools, and managing user startup programs.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    activity: 'Install standard productivity tools and verify license activation status.',
    quiz: 'What is the purpose of installing a reputable anti-malware software?',
    classroomLink: ''
  },
  {
    id: 9,
    title: 'Computer Configuration',
    duration: '6 Hours',
    objective: 'Configure operating system settings, user accounts, power options, network sharing, and system updates.',
    content: 'Setting up local user accounts (Administrator vs Standard), configuring Windows Update, screen resolution, and regional time zones.',
    videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4',
    activity: 'Create custom user accounts and adjust system power performance profiles.',
    quiz: 'What privilege level is required to install new system software?',
    classroomLink: ''
  },
  {
    id: 10,
    title: 'Network Configuration Basics',
    duration: '6 Hours',
    objective: 'Configure TCP/IPv4 network settings, static and dynamic IP addressing, DNS servers, and basic local connectivity.',
    content: 'Understanding IP addresses, subnet masks, default gateways, ping command testing, and verifying local network card connection status.',
    videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA',
    activity: 'Assign a static IP address and test connectivity using the ping command.',
    quiz: 'What command-line tool tests network reachability to another IP address?',
    classroomLink: ''
  },
  {
    id: 11,
    title: 'Testing and Troubleshooting',
    duration: '8 Hours',
    objective: 'Diagnose and resolve common hardware and software faults encountered during computer setup and configuration.',
    content: 'POST beep code analysis, blue screen (BSOD) troubleshooting, RAM testing with MemTest, and peripheral connectivity checks.',
    videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk',
    activity: 'Simulate and resolve a RAM seating error and boot failure scenario.',
    quiz: 'What do continuous short beeps during POST typically indicate?',
    classroomLink: ''
  },
  {
    id: 12,
    title: 'Preventive Maintenance',
    duration: '4 Hours',
    objective: 'Perform scheduled preventive maintenance tasks to extend hardware lifespan and maintain system stability.',
    content: 'Dust cleaning using compressed air, checking cooling fan health, disk cleanup, defragmentation, and updating system definitions.',
    videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ',
    activity: 'Execute a digital disk cleanup and defragmentation task routine.',
    quiz: 'How often should physical dust cleaning be performed on office workstations?',
    classroomLink: ''
  },
  {
    id: 13,
    title: 'Documentation and Work Completion',
    duration: '4 Hours',
    objective: 'Complete service reports, inventory logs, and customer turnover documentation adhering to professional standards.',
    content: 'Recording serial numbers, software licenses, maintenance logs, and securing customer sign-off upon job completion.',
    videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE',
    activity: 'Fill out a standard IT Technical Service Report Form.',
    quiz: 'Why is maintaining an accurate hardware inventory log important?',
    classroomLink: ''
  },
  {
    id: 14,
    title: 'COC 1 Practical Assessment & Performance Tasks',
    duration: '10 Hours',
    objective: 'Demonstrate complete mastery of COC 1 competencies through timed practical assembly, OS installation, and troubleshooting tasks.',
    content: 'Comprehensive performance evaluation covering hardware assembly, BIOS setup, OS installation, driver configuration, and customer turnover.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    activity: 'Complete the timed practical demonstration rubric for TESDA CSS NC II certification.',
    quiz: 'Submit final performance checklist and practical competency log.',
    classroomLink: ''
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
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [lessonsData, setLessonsData] = useState(COC1_LESSONS);
  const [tempLinkInput, setTempLinkInput] = useState('');
  const [linkSavedMsg, setLinkSavedMsg] = useState(false);

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
    
    if (isFree && !currentUser) {
      handleOpenAuth('signup', '', track.id);
      return;
    }

    if (isFree) {
      setSelectedActiveTrack(track);
      setActiveLessonIndex(0);
      setTempLinkInput(COC1_LESSONS[0].classroomLink);
      setIsClassroomOpen(true);
    } else {
      setCheckoutTrack(track);
      setCheckoutModalOpen(true);
    }
  };

  const handleSuccessEnroll = (track: Track) => {
    setSelectedActiveTrack(track);
    setActiveLessonIndex(0);
    setTempLinkInput(COC1_LESSONS[0].classroomLink);
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

  const currentLesson = lessonsData[activeLessonIndex] || lessonsData[0];

  const handleSaveClassroomLink = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [...lessonsData];
    updated[activeLessonIndex].classroomLink = tempLinkInput;
    setLessonsData(updated);
    setLinkSavedMsg(true);
    setTimeout(() => setLinkSavedMsg(false), 2500);
  };

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

      {/* Fully Interactive COC 1 LMS Workspace View */}
      {isClassroomOpen && selectedActiveTrack && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-in fade-in duration-200">
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between text-white shrink-0">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                COC 1 LMS Ready Course • 14 Comprehensive Lessons
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
                    <h4 className="font-black text-sm text-emerald-300">COC 1 LMS Course Active!</h4>
                    <p className="text-xs text-slate-300">Piliin ang alinman sa 14 na aralin sa kanan para sa video lectures, hands-on activities, quizzes, at Google Classroom links.</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right text-xs text-emerald-400 font-mono">
                  Lesson {activeLessonIndex + 1} of 14
                </div>
              </div>

              {/* Main Grid: Video/Content on Left, 14 Lessons on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Cols: Video, Objectives, Activities & Google Classroom Link Attacher */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                    <iframe
                      src={currentLesson.videoUrl}
                      title={currentLesson.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-black uppercase">
                        Lesson {currentLesson.id} of 14 • {currentLesson.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">{currentLesson.title}</h3>
                    
                    <div className="space-y-2 text-xs">
                      <p className="text-emerald-300 font-bold">🎯 Learning Objective:</p>
                      <p className="text-slate-300 leading-relaxed">{currentLesson.objective}</p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="text-blue-300 font-bold">📖 Lesson Content Overview:</p>
                      <p className="text-slate-300 leading-relaxed">{currentLesson.content}</p>
                    </div>

                    {/* Hands-on Activity & Quiz */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <span className="text-[11px] font-bold text-amber-400">🛠️ Hands-on Activity:</span>
                        <p className="text-xs text-slate-200">{currentLesson.activity}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <span className="text-[11px] font-bold text-purple-400">📝 Lesson Quiz / Task:</span>
                        <p className="text-xs text-slate-200">{currentLesson.quiz}</p>
                      </div>
                    </div>

                    {/* Google Classroom Link Attacher */}
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-3 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                          <span>🔗 Google Classroom Lesson Link Attacher</span>
                        </span>
                        {linkSavedMsg && (
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            ✓ Link Saved!
                          </span>
                        )}
                      </div>
                      <form onSubmit={handleSaveClassroomLink} className="flex gap-2">
                        <input
                          type="url"
                          placeholder="https://classroom.google.com/c/..."
                          value={tempLinkInput}
                          onChange={(e) => setTempLinkInput(e.target.value)}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer shrink-0"
                        >
                          Save Link
                        </button>
                      </form>
                      {currentLesson.classroomLink && (
                        <div className="pt-1">
                          <a
                            href={currentLesson.classroomLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1"
                          >
                            🚀 Open Attached Google Classroom Assignment ↗
                          </a>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Right Col: 14 Clickable Lessons Directory */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 h-fit max-h-[75vh] overflow-y-auto">
                  <h4 className="font-black text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center justify-between sticky top-0 bg-slate-900 z-10">
                    <span>COC 1 Syllabus</span>
                    <span className="text-xs font-normal text-emerald-400">14 Lessons</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {lessonsData.map((les, idx) => {
                      const isActive = activeLessonIndex === idx;
                      return (
                        <button
                          key={les.id}
                          onClick={() => {
                            setActiveLessonIndex(idx);
                            setTempLinkInput(les.classroomLink);
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                            isActive
                              ? 'bg-orange-600/20 border-orange-500 text-white shadow-md'
                              : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                              isActive ? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-300'
                            }`}>
                              Lesson {les.id}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">{les.duration}</span>
                          </div>
                          <p className="font-bold text-xs mt-0.5 leading-snug">{les.title}</p>
                          {les.classroomLink && <span className="text-[10px] text-cyan-300 font-bold">🔗 Linked</span>}
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