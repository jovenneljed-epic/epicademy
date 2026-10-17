import { useState, useEffect, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Calendar, 
  Award, 
  Lock, 
  Play, 
  FileText, 
  Sparkles, 
  Bell, 
  TrendingUp, 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  User, 
  RefreshCw,
  ExternalLink,
  ChevronRight,
  School,
  FileCheck,
  Check
} from 'lucide-react';
import type { Track } from '../../types';
import { 
  getStoredRoster, 
  syncRosterWithSupabase, 
  getStudentCurriculumPlan
} from '../../data/gradebookData';
import type { 
  StudentGradeRecord, 
  StudentCurriculumPlan 
} from '../../data/gradebookData';
import { PINOY_PIANO_TRACK } from '../../data/pinoyPianoCourseData';
import { PINOY_DRUM_TRACK } from '../../data/pinoyDrumCourseData';
import { PINOY_GUITAR_TRACK } from '../../data/pinoyGuitarCourseData';
import { PINOY_LEAD_GUITAR_TRACK } from '../../data/pinoyLeadGuitarCourseData';
import { TESDA_CSS_TRACK } from '../../data/tesdaCssNc2CourseData';
import { ZERO_TO_HERO_TRACKS } from '../../data/zeroToHeroCoursesData';

interface StudentFocusDashboardProps {
  currentUser?: { email?: string; role?: string } | null;
  onOpenClassroom: (track: Track) => void;
  onOpenGradebook: () => void;
  onOpenCredentials: (trackId?: string, studentName?: string, studentEmail?: string) => void;
  onOpenDossier: (studentName?: string, studentEmail?: string) => void;
  onExploreCourses: () => void;
  completedLessonIds?: Record<string, boolean>;
}

// Announcements type
interface CampusAnnouncement {
  id: string;
  category: 'academic' | 'exam' | 'campus' | 'system';
  title: string;
  date: string;
  summary: string;
  author: string;
  isImportant?: boolean;
}

const CAMPUS_ANNOUNCEMENTS: CampusAnnouncement[] = [
  {
    id: 'ann-1',
    category: 'academic',
    title: '📢 DepEd Form SF2 Daily Attendance Verification Active',
    date: 'Oct 17, 2026',
    summary: 'All enrolled students are logged in DepEd SF2 register upon daily classroom activity. Ensure your daily check-in to preserve your 100% academic attendance rate.',
    author: 'Registrar & Academic Affairs',
    isImportant: true,
  },
  {
    id: 'ann-2',
    category: 'exam',
    title: '🎹 Preliminary Keyboard & Music Theory Assessment Schedules',
    date: 'Oct 16, 2026',
    summary: 'The diagnostic quiz and Prelim practical examination for MUS-101 have been scheduled. Ensure all prerequisite warm-up activities are submitted prior to testing.',
    author: 'Music Ministry & Performing Arts Dept.',
    isImportant: true,
  },
  {
    id: 'ann-3',
    category: 'campus',
    title: '🎼 Supplementary Nashville 1-7 Worship Sheet Music Available',
    date: 'Oct 15, 2026',
    summary: 'New downloadable transposition reference guides (1-4-5-6m progressions in Keys of C, G, D, and E) have been added to the student resource portal.',
    author: 'Music Resource Center',
  },
  {
    id: 'ann-4',
    category: 'system',
    title: '⚡ Single-Source Cloud Ledger Authentication Activated',
    date: 'Oct 14, 2026',
    summary: 'Your student profile, official curriculum audit, and grading ledger are now permanently synchronized with Supabase cloud infrastructure.',
    author: 'Epicademy IT Operations',
  },
];

export const StudentFocusDashboard = ({
  currentUser,
  onOpenClassroom,
  onOpenGradebook,
  onOpenCredentials,
  onOpenDossier,
  onExploreCourses,
  completedLessonIds = {},
}: StudentFocusDashboardProps) => {
  const [studentRecord, setStudentRecord] = useState<StudentGradeRecord | null>(null);
  const [activeAnnouncementFilter, setActiveAnnouncementFilter] = useState<'all' | 'academic' | 'exam' | 'campus'>('all');
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState<string>('track-pinoy-piano-zero-to-hero');

  const cleanEmail = (currentUser?.email || '').toLowerCase().trim();

  // Load student gradebook data & synchronize with Supabase
  const loadStudentData = async () => {
    setIsSyncing(true);
    try {
      const roster = await syncRosterWithSupabase();
      const match = roster.find(s => s.email.toLowerCase().trim() === cleanEmail);
      if (match) {
        setStudentRecord(match);
        if (match.trackId) setSelectedTrackId(match.trackId);
      } else {
        const localList = getStoredRoster();
        const localMatch = localList.find(s => s.email.toLowerCase().trim() === cleanEmail);
        if (localMatch) {
          setStudentRecord(localMatch);
          if (localMatch.trackId) setSelectedTrackId(localMatch.trackId);
        }
      }
    } catch (err) {
      console.warn('Failed to sync student data:', err);
      const localList = getStoredRoster();
      const localMatch = localList.find(s => s.email.toLowerCase().trim() === cleanEmail);
      if (localMatch) {
        setStudentRecord(localMatch);
        if (localMatch.trackId) setSelectedTrackId(localMatch.trackId);
      }
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    loadStudentData();
  }, [cleanEmail]);

  // Resolve Track object from ID for opening classroom
  const resolveTrack = (trackId: string): Track => {
    if (trackId.includes('piano')) return PINOY_PIANO_TRACK;
    if (trackId.includes('drum')) return PINOY_DRUM_TRACK;
    if (trackId.includes('lead-guitar')) return PINOY_LEAD_GUITAR_TRACK;
    if (trackId.includes('guitar')) return PINOY_GUITAR_TRACK;
    if (trackId.includes('tesda') || trackId.includes('css')) return TESDA_CSS_TRACK;
    const found = ZERO_TO_HERO_TRACKS.find(t => t.id === trackId);
    return found || PINOY_PIANO_TRACK;
  };

  // Compute live completed lessons count for this student
  const completedLessonsCount = useMemo(() => {
    try {
      const saved = localStorage.getItem(`epicademy_completed_lessons_${cleanEmail}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Object.values(parsed).filter(Boolean).length;
      }
    } catch {}
    return Object.values(completedLessonIds).filter(Boolean).length;
  }, [cleanEmail, completedLessonIds]);

  // Compute live exam average
  const realExamAverage = useMemo(() => {
    try {
      const saved = localStorage.getItem(`epicademy_exam_scores_${cleanEmail}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        const scores = Object.values(parsed).filter((v): v is number => typeof v === 'number');
        if (scores.length > 0) {
          return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        }
      }
    } catch {}
    return studentRecord?.examAverage || 0;
  }, [cleanEmail, studentRecord?.examAverage]);

  // Curriculum Plan dynamically generated from the student's enrolled track
  const curriculumPlan: StudentCurriculumPlan = useMemo(() => {
    const trackId = studentRecord?.trackId || selectedTrackId;
    return getStudentCurriculumPlan(trackId, completedLessonsCount, realExamAverage);
  }, [studentRecord?.trackId, selectedTrackId, completedLessonsCount, realExamAverage]);

  // Filtered announcements
  const filteredAnnouncements = useMemo(() => {
    if (activeAnnouncementFilter === 'all') return CAMPUS_ANNOUNCEMENTS;
    return CAMPUS_ANNOUNCEMENTS.filter(a => a.category === activeAnnouncementFilter);
  }, [activeAnnouncementFilter]);

  // Find active subject and next upcoming subject
  const activeSubject = curriculumPlan.subjects.find(s => s.status === 'In Progress') || curriculumPlan.subjects[0];
  const upcomingSubject = curriculumPlan.subjects.find(s => s.status === 'Locked');

  // Scheduled assessments timetable
  const scheduledExams = useMemo(() => [
    {
      code: `${curriculumPlan.subjects[0]?.code || 'MUS-101'}-EX1`,
      title: 'Diagnostic Theory & Keyboard Topography Quiz',
      subject: curriculumPlan.subjects[0]?.title || 'Fundamentals',
      type: 'Online Quiz (Untimed)',
      weight: '10%',
      schedule: 'Available Now',
      status: completedLessonsCount > 0 ? 'Completed' : 'Available',
      statusColor: completedLessonsCount > 0 ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      code: `${curriculumPlan.subjects[0]?.code || 'MUS-101'}-PR1`,
      title: 'Prelim Practical Assessment: Octave Navigation & Posture',
      subject: curriculumPlan.subjects[0]?.title || 'Fundamentals',
      type: 'Practical Demonstration',
      weight: '25%',
      schedule: 'Oct 24, 2026 • 2:00 PM PST',
      status: 'Scheduled',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      code: `${curriculumPlan.subjects[1]?.code || 'MUS-102'}-MID`,
      title: 'Midterm Repertoire & Triad Inversion Hearing Test',
      subject: curriculumPlan.subjects[1]?.title || 'Triads & Chords',
      type: 'Performance & Listening',
      weight: '30%',
      schedule: 'Nov 14, 2026 • 10:00 AM PST',
      status: 'Scheduled',
      statusColor: 'text-slate-400 bg-slate-800 border-slate-700',
    },
    {
      code: `${curriculumPlan.degreeCode}-CAP`,
      title: 'Final Departmental Capstone Recital & Competency Evaluation',
      subject: curriculumPlan.programTitle,
      type: 'Live Recital Capstone',
      weight: '35%',
      schedule: 'Dec 19, 2026 • 1:00 PM PST',
      status: 'Locked (Requires 100% Units)',
      statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
  ], [curriculumPlan, completedLessonsCount]);

  const studentName = studentRecord?.studentName || cleanEmail.split('@')[0].toUpperCase();
  const lrn = studentRecord?.lrn || '109283746501';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24">
      
      {/* ========================================================================= */}
      {/* 1. STUDENT IDENTITY COMMAND BANNER & ENROLLED PROGRAM HEADER              */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-b border-slate-800 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          
          {/* Top Quick Breadcrumb & Sync Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20">
                <School className="w-3.5 h-3.5" />
                <span>EPICADEMY STUDENT PORTAL</span>
              </span>
              <span>•</span>
              <span className="font-mono text-slate-300">LRN: {lrn}</span>
              <span>•</span>
              <span className="text-slate-300">A.Y. 2026-2027 • 1st Term</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={loadStudentData}
                disabled={isSyncing}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Synchronize real grades & progress from Supabase"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-400' : ''}`} />
                <span>{isSyncing ? 'Syncing Cloud Ledger...' : 'Cloud Synced'}</span>
              </button>
              <button
                onClick={onExploreCourses}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>🌐 Browse Course Catalog</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Student Welcome & Degree Title */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-xl shadow-blue-500/20 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white">
                    <GraduationCap className="w-7 h-7 text-blue-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Maligayang Pagbabalik, {studentName}!
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active Student
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {cleanEmail} • Enrolled Scholar
                  </p>
                </div>
              </div>

              {/* Enrolled Program Badge Details */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    PROGRAM OF STUDY • {curriculumPlan.degreeCode}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Accredited by: <strong className="text-slate-200">{curriculumPlan.accreditingBody}</strong>
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  {curriculumPlan.programTitle}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {curriculumPlan.department} • Official Curriculum Plan with {curriculumPlan.subjects.length} Core Subjects ({curriculumPlan.totalCurriculumUnits}.0 Total Units)
                </p>
              </div>
            </div>

            {/* Quick Action Launcher Card */}
            <div className="bg-gradient-to-br from-blue-900/40 via-indigo-950/40 to-slate-900 border border-blue-500/30 rounded-2xl p-5 sm:p-6 lg:w-84 shrink-0 shadow-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  CURRENT ACTIVE MILESTONE
                </span>
                <p className="text-xs text-slate-300">
                  Step 1 of {curriculumPlan.subjects.length} in your Degree Plan:
                </p>
                <p className="text-sm font-black text-white leading-snug">
                  {activeSubject.code}: {activeSubject.title}
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenClassroom(resolveTrack(curriculumPlan.programId))}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                  <span>Resume Current Lesson ➔</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <button
                    onClick={onOpenGradebook}
                    className="py-2 px-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-bold transition-all border border-slate-700/60 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Gradebook</span>
                  </button>
                  <button
                    onClick={() => onOpenCredentials(curriculumPlan.programId, studentName, cleanEmail)}
                    className="py-2 px-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-bold transition-all border border-slate-700/60 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REAL-TIME ACADEMIC PERFORMANCE METRICS                                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Curriculum Progress */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition-all space-y-3">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Curriculum Progress
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                {curriculumPlan.earnedUnits}/{curriculumPlan.totalCurriculumUnits} Units
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-white font-mono">
                {curriculumPlan.overallProgressPercent}%
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {completedLessonsCount} Activities Cleared
              </span>
            </div>
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${Math.max(curriculumPlan.overallProgressPercent, 2)}%` }}
              />
            </div>
          </div>

          {/* Card 2: DepEd SF2 Attendance */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition-all space-y-3">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-400" />
                DepEd SF2 Attendance
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                100% On Register
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-emerald-400 font-mono">
                {studentRecord?.attendancePercent || 100}%
              </span>
              <span className="text-xs text-slate-400 font-medium">
                1 Day Present (0 Absent)
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              ✓ Logged in Day 1 register • Official Form SF2 Active
            </p>
          </div>

          {/* Card 3: Academic Standing & GWA */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition-all space-y-3">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                Academic Standing
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Term 1
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">
                {studentRecord?.finalNumericGrade && studentRecord.finalNumericGrade > 0 ? `${studentRecord.finalNumericGrade}%` : 'IP'}
              </span>
              <span className="text-xs text-purple-300 font-bold">
                PH: {studentRecord?.philippineGrade || 'IP (Enrolled)'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Standing: <strong className="text-slate-300">{studentRecord?.academicStanding || 'Newly Enrolled - In Progress'}</strong>
            </p>
          </div>

          {/* Card 4: Graduation Certificate Status */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition-all space-y-3">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Certificate Locker
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                0/4 Requisites
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-white">
                Locked / In Progress
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Unlocks upon 100% curriculum completion + $\ge 75\%$ passing grade.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN DASHBOARD CONTENT GRID (Curriculum Guide + Exams + Announcements)   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: CURRICULUM GUIDE & UPCOMING SUBJECTS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Subject Station Spotlight */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-blue-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  CURRENT ACTIVE SUBJECT • STEP 1 OF {curriculumPlan.subjects.length}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  {activeSubject.units}.0 Units (Lec: {activeSubject.lecHours}h, Lab: {activeSubject.labHours}h)
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeSubject.code}: {activeSubject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pundasyon ng musika at keyboard: matutunan ang kumpletong mapa ng 88/61 keys, posture, 1 hanggang 5 finger numbering, at mga grupo ng 2 at 3 black keys upang maging handa sa pagtugtog ng unang triads.
                </p>
              </div>

              {/* Progress Bar inside Active Subject */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-300">Subject Mastery:</span>
                  <span className="text-emerald-400 font-mono">
                    {completedLessonsCount > 0 ? `${Math.round((completedLessonsCount / (activeSubject.lessonsCount || 4)) * 100)}%` : '0% (Starting Day 1)'}
                  </span>
                </div>
                <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${Math.max(2, Math.min(100, (completedLessonsCount / (activeSubject.lessonsCount || 4)) * 100))}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Prerequisite: <strong>None (Foundation Subject)</strong></span>
                  <span>Target Passing Mark: <strong>75.0% (DepEd / CHED Standard)</strong></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenClassroom(resolveTrack(curriculumPlan.programId))}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Open Active Lesson in Classroom ➔</span>
                </button>
                <button
                  onClick={onOpenGradebook}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all border border-slate-700 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>View Official Transcript (OTR)</span>
                </button>
              </div>
            </div>

            {/* CURRICULUM GUIDE: SEQUENTIAL SUBJECT ROADMAP */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span>Curriculum Guide & Sequential Study Plan</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Subjects are sequentially unlocked as prerequisites are completed and passed.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {curriculumPlan.subjects.length} Subjects • {curriculumPlan.totalCurriculumUnits}.0 Units
                </span>
              </div>

              {/* Subject Roadmap List */}
              <div className="space-y-3.5">
                {curriculumPlan.subjects.map((sub, idx) => {
                  const isActive = sub.status === 'In Progress';
                  const isCompleted = sub.status === 'Completed';
                  const isLocked = sub.status === 'Locked';

                  return (
                    <div
                      key={sub.code}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        isActive
                          ? 'bg-blue-950/30 border-blue-500/50 shadow-md ring-1 ring-blue-500/20'
                          : isCompleted
                          ? 'bg-slate-900/90 border-emerald-500/40'
                          : 'bg-slate-950/60 border-slate-800/80 opacity-75'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                              isActive
                                ? 'bg-blue-500 text-white shadow-xs'
                                : isCompleted
                                ? 'bg-emerald-500 text-white shadow-xs'
                                : 'bg-slate-800 text-slate-400'
                            }`}>
                              {sub.code}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              {sub.units}.0 Units (Lec: {sub.lecHours}h, Lab: {sub.labHours}h)
                            </span>
                            <span className="text-[11px] text-slate-500">•</span>
                            <span className="text-[11px] text-slate-400">
                              {sub.term}
                            </span>
                          </div>

                          <h4 className={`text-sm sm:text-base font-bold ${
                            isLocked ? 'text-slate-400' : 'text-white'
                          }`}>
                            {idx + 1}. {sub.title}
                          </h4>

                          <p className="text-xs text-slate-400 leading-relaxed">
                            {idx === 0 && 'Keyboard Geography, 1-5 Finger Numbering, Middle C and Octave Topography.'}
                            {idx === 1 && 'The 7 Essential Major and Minor Triads (C, Dm, Em, F, G, Am, Bdim) and Voice Leading.'}
                            {idx === 2 && 'First and Second Chord Inversions, Slash Chords (G/B, C/E) and Left-Hand Bass Octaves.'}
                            {idx === 3 && 'Nashville Number System 1-7 for Instant Church Transposition in Keys of C, G, D, and E.'}
                            {idx === 4 && 'Ambient Worship Pad Layering, Smooth Voice Leading, and Pastoral Prayer Underscoring.'}
                            {idx === 5 && 'Advanced Gospel Passing Chords (2-5-1), Tritone Substitutions, and Final Capstone Recital.'}
                          </p>

                          {/* Prerequisite Tag */}
                          <div className="flex items-center gap-3 pt-1 text-[11px]">
                            {sub.prerequisite === 'None' ? (
                              <span className="text-emerald-400 font-medium">✓ No Prerequisite • Foundation Subject</span>
                            ) : (
                              <span className="text-amber-400/80 font-medium flex items-center gap-1">
                                <Lock className="w-3 h-3" />
                                Prerequisite: <strong>{sub.prerequisite}</strong>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Status Chip / Action */}
                        <div className="text-right shrink-0">
                          {isActive && (
                            <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-blue-300 border border-blue-500/40 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                              Active Step
                            </span>
                          )}
                          {isCompleted && (
                            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" />
                              Passed (100%)
                            </span>
                          )}
                          {isLocked && (
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-500 border border-slate-700/60 inline-flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              Locked
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Curriculum Footer Note */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Approved by Academic Board &bull; CHED / DepEd Equivalency Standard</span>
                </span>
                <button
                  onClick={onOpenGradebook}
                  className="text-blue-400 hover:text-blue-300 font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Full Curriculum Audit in Gradebook</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* UPCOMING SUBJECT SPOTLIGHT */}
            {upcomingSubject && (
              <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    NEXT IN LINE • UPCOMING SUBJECT
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Unlocks when {activeSubject.code} is completed
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">
                    {upcomingSubject.code}: {upcomingSubject.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pagkatapos ng {activeSubject.code}, agad mong matututunan ang 7 pangunahing Major at Minor Triads, finger dexterity exercises, at voice leading techniques upang makatugtog ng totoong praise and worship songs.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span>Prerequisite Requirement: <strong>Complete {activeSubject.code} with $\ge 80\%$</strong></span>
                  <span className="text-amber-400 font-bold">🔒 Pending Completion</span>
                </div>
              </div>
            )}

            {/* LEARNING HISTORY & ACTIVITY LOG TIMELINE */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-indigo-400" />
                  <span>Learning History & Activity Timeline</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  Official Ledger
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                
                {/* Node 1: Official Program Enrollment */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Official Program Enrollment Commenced</span>
                      <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">
                        {studentRecord?.enrollmentDate || 'Oct 17, 2026'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Enrolled in <strong>{curriculumPlan.programTitle}</strong>. Learner Reference Number (LRN) generated: <span className="font-mono text-slate-300">{lrn}</span>.
                    </p>
                  </div>
                </div>

                {/* Node 2: DepEd SF2 Register */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-emerald-600 border-4 border-slate-900 flex items-center justify-center" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">DepEd Form SF2 Daily Register Initialized</span>
                      <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">
                        Day 1 Attended
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Day 1 recorded Present (<strong className="text-emerald-400">P</strong>). Initial attendance baseline established at 100%.
                    </p>
                  </div>
                </div>

                {/* Node 3: Curriculum Plan Issued */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-purple-600 border-4 border-slate-900 flex items-center justify-center" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Degree Study Plan & Curriculum Assigned</span>
                      <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">
                        Active Step 1
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Subject <strong className="text-slate-200">{activeSubject.code}: {activeSubject.title}</strong> unlocked for active instruction.
                    </p>
                  </div>
                </div>

                {completedLessonsCount > 0 && (
                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-amber-500 border-4 border-slate-900 flex items-center justify-center" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Classroom Lesson Submissions Recorded</span>
                        <span className="text-[10px] text-amber-300 font-mono bg-amber-950/60 px-2 py-0.5 rounded">
                          {completedLessonsCount} Completed
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {completedLessonsCount} practical lessons marked complete in student progress registry.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* RIGHT 1 COLUMN: EXAMS SCHEDULE + ANNOUNCEMENTS + QUICK RESOURCES */}
          <div className="space-y-8">
            
            {/* SCHEDULED EXAMS & ASSESSMENTS TIMETABLE */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Scheduled Exams & Assessments</span>
                </h3>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Official Timetable
                </span>
              </div>

              <div className="space-y-3">
                {scheduledExams.map((exam) => (
                  <div 
                    key={exam.code} 
                    className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">{exam.code}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${exam.statusColor}`}>
                        {exam.status}
                      </span>
                    </div>

                    <h5 className="text-xs font-bold text-white leading-snug">
                      {exam.title}
                    </h5>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>{exam.schedule}</span>
                      <span className="font-mono text-amber-300/90 font-bold">Weight: {exam.weight}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onOpenClassroom(resolveTrack(curriculumPlan.programId))}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Open Classroom Exam Room ➔</span>
                </button>
              </div>
            </div>

            {/* CAMPUS ANNOUNCEMENTS BULLETIN */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <Bell className="w-4 h-4 text-blue-400" />
                  <span>Academic Announcements</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-400">
                  Live Feed
                </span>
              </div>

              {/* Announcement Category Filter Tabs */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {(['all', 'academic', 'exam', 'campus'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveAnnouncementFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                      activeAnnouncementFilter === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Announcements Feed */}
              <div className="space-y-3.5">
                {filteredAnnouncements.map((ann) => (
                  <div
                    key={ann.id}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        ann.category === 'academic' 
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                          : ann.category === 'exam' 
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      }`}>
                        {ann.category}
                      </span>
                      <span className="text-slate-400 font-mono">{ann.date}</span>
                    </div>

                    <h5 className="text-xs font-bold text-white leading-snug">
                      {ann.title}
                    </h5>

                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {ann.summary}
                    </p>

                    <div className="text-[10px] text-slate-500 pt-0.5">
                      Issued by: {ann.author}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STUDENT RESOURCE LOCKER & QUICK ACTIONS */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-base font-black text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Student Resource Locker</span>
              </h3>

              <div className="space-y-2">
                <button
                  onClick={onOpenGradebook}
                  className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-xs font-bold text-white">Official Gradebook & SF2 Register</p>
                      <p className="text-[10px] text-slate-400">Check grades, GWA, and DepEd attendance</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </button>

                <button
                  onClick={() => onOpenCredentials(curriculumPlan.programId, studentName, cleanEmail)}
                  className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="text-xs font-bold text-white">Credentials & Certificate Tracker</p>
                      <p className="text-[10px] text-slate-400">Review graduation requirement checklist</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </button>

                <button
                  onClick={() => onOpenDossier(studentName, cleanEmail)}
                  className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs font-bold text-white">Student Academic Dossier</p>
                      <p className="text-[10px] text-slate-400">View career portfolio & competency badges</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
