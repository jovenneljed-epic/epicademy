import { useState, useEffect } from 'react';
import { 
  X, 
  Users, 
  GraduationCap, 
  Award, 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Trash2, 
  Download, 
  Printer, 
  CheckCircle2, 
  BarChart3, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Calendar, 
  RotateCcw,
  RefreshCw,
  Copy,
  Check,
  AlertTriangle,
  UserCheck
} from 'lucide-react';
import { 
  INITIAL_COHORTS, 
  computeWeightedGrade, 
  computeAcademicStanding, 
  computePhilippineGrade, 
  exportRosterToCSV,
  STORAGE_KEY_ROSTER,
  STORAGE_KEY_COHORTS,
  getStoredRoster,
  saveStoredRoster,
  syncRosterWithSupabase,
  generateLrn,
  getDefaultSf2Days
} from '../../data/gradebookData';
import type { CohortItem, StudentGradeRecord, StudentStatus } from '../../data/gradebookData';
import { supabase } from '../../lib/supabaseClient';

interface GradebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser?: {
    email?: string;
    role?: string;
    user_metadata?: {
      full_name?: string;
      name?: string;
    };
  } | null;
  onOpenDossier?: (studentName: string, studentEmail: string) => void;
  onOpenCredentials?: (trackId?: string, studentName?: string, studentEmail?: string) => void;
}

// Curriculum subjects breakdown for University Official Transcript of Records (OTR)
function getCurriculumSubjects(trackId: string = '') {
  if (trackId.includes('piano')) {
    return [
      { code: 'MUS-101', title: 'Keyboard Geography, Posture & White/Black Keys', units: 3.0, lec: 4, lab: 6 },
      { code: 'MUS-102', title: 'The 7 Major & Minor Triads & Finger Dexterity', units: 3.0, lec: 4, lab: 6 },
      { code: 'MUS-103', title: 'Triad Inversions, Slash Chords & Left-Hand Bass Octaves', units: 3.0, lec: 4, lab: 6 },
      { code: 'MUS-104', title: 'Nashville Number System 1-7 & Church Transposition', units: 3.0, lec: 4, lab: 6 },
      { code: 'MUS-105', title: 'Modern Worship Flow, Talk Music & Ambient Pad Layers', units: 3.0, lec: 4, lab: 6 },
      { code: 'MUS-106', title: 'Gospel Passing Chords (2-5-1), Reharm & Recital Capstone', units: 3.0, lec: 4, lab: 6 },
    ];
  }
  if (trackId.includes('drum')) {
    return [
      { code: 'DRM-101', title: 'Acoustic & Electronic Drum Kit Geography & Setup', units: 3.0, lec: 4, lab: 6 },
      { code: 'DRM-102', title: 'Fundamental Rock, Pop & Contemporary Worship Beats', units: 3.0, lec: 4, lab: 6 },
      { code: 'DRM-103', title: '16th-Note Subdivision, Snare Ghost Notes & Fills', units: 3.0, lec: 4, lab: 6 },
      { code: 'DRM-104', title: 'Ear Training "Sipra sa Tenga" & Metronome Discipline', units: 3.0, lec: 4, lab: 6 },
      { code: 'DRM-105', title: 'Double Bass Drumming, Polyrhythms & Linear Chops', units: 3.0, lec: 4, lab: 6 },
      { code: 'DRM-106', title: 'Live Stage Performance & Worship Clinic Capstone', units: 3.0, lec: 4, lab: 6 },
    ];
  }
  if (trackId.includes('lead-guitar') || trackId.includes('guitar')) {
    return [
      { code: 'GTR-101', title: 'Fretboard Geography, Open Chords & Strumming Mechanics', units: 3.0, lec: 4, lab: 6 },
      { code: 'GTR-102', title: 'Barre Chords, Palm Muting, Reggae Skanks & Comping', units: 3.0, lec: 4, lab: 6 },
      { code: 'GTR-103', title: 'Alternate Picking, Pitch Bending & Vocal Vibrato', units: 3.0, lec: 4, lab: 6 },
      { code: 'GTR-104', title: 'Pentatonic Boxes 1-5, Speed Drills & Blues Scales', units: 3.0, lec: 4, lab: 6 },
      { code: 'GTR-105', title: 'CAGED Soloing System, Modes & Dotted-8th Delay Swells', units: 3.0, lec: 4, lab: 6 },
      { code: 'GTR-106', title: 'Rivermaya "214" & Pinoy Rock Guitar Soloing Capstone', units: 3.0, lec: 4, lab: 6 },
    ];
  }
  if (trackId.includes('tesda') || trackId.includes('css')) {
    return [
      { code: 'COC-1', title: 'Install and Configure Computer Systems (ICCS)', units: 4.0, lec: 40, lab: 60 },
      { code: 'COC-2', title: 'Set-up Computer Networks (SUCN)', units: 4.0, lec: 40, lab: 60 },
      { code: 'COC-3', title: 'Set-up Computer Servers (SUCS)', units: 4.0, lec: 40, lab: 60 },
      { code: 'COC-4', title: 'Maintain and Repair Computer Systems and Networks (MRCSN)', units: 4.0, lec: 40, lab: 60 },
    ];
  }
  return [
    { code: 'CS-101', title: 'Modern HTML5 Fundamentals & Semantic Web Architecture', units: 3.0, lec: 4, lab: 6 },
    { code: 'CS-102', title: 'CSS3 Modern Styling, Flexbox, Grid & Responsive UI', units: 3.0, lec: 4, lab: 6 },
    { code: 'CS-103', title: 'Modern JavaScript ES6+, DOM Engines & State Management', units: 3.0, lec: 4, lab: 6 },
    { code: 'CS-104', title: 'Asynchronous Architecture, Fetch Engines & REST APIs', units: 3.0, lec: 4, lab: 6 },
    { code: 'CS-105', title: 'React 19 & TypeScript Production Component Systems', units: 3.0, lec: 4, lab: 6 },
    { code: 'CS-106', title: 'Full-Stack Supabase Cloud Backend & AI SaaS Hero Capstone', units: 3.0, lec: 4, lab: 6 },
  ];
}

export const GradebookModal = ({
  isOpen,
  onClose,
  currentUser,
  onOpenDossier: _onOpenDossier,
  onOpenCredentials: _onOpenCredentials,
}: GradebookModalProps) => {
  // Navigation tabs (Systeme.io Master Roster, DepEd SF2 Daily Attendance, Official Transcript OTR, Certificate, Analytics, Printable)
  const [activeTab, setActiveTab] = useState<'roster' | 'sf2' | 'reportCard' | 'certificate' | 'analytics' | 'printable'>('roster');

  // Cohort & Roster state
  const [cohorts] = useState<CohortItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COHORTS);
      return saved ? JSON.parse(saved) : INITIAL_COHORTS;
    } catch {
      return INITIAL_COHORTS;
    }
  });

  const [roster, setRoster] = useState<StudentGradeRecord[]>(() => getStoredRoster());
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [copiedLrnId, setCopiedLrnId] = useState<string | null>(null);

  // Auto-sync with live Supabase database on open
  useEffect(() => {
    if (isOpen) {
      setIsSyncing(true);
      syncRosterWithSupabase()
        .then((synced) => {
          setRoster(synced);
          if (synced.length > 0 && !selectedStudentId) {
            setSelectedStudentId(synced[0].id);
          }
        })
        .catch((err) => {
          console.warn('Sync roster error note:', err);
          setRoster(getStoredRoster());
        })
        .finally(() => {
          setIsSyncing(false);
        });
    }
  }, [isOpen]);

  // Filter & Search state
  const [selectedCohortId, setSelectedCohortId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'honors' | 'passing' | 'probation' | 'certified'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'grade' | 'gpa' | 'attendance' | 'lrn'>('grade');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Selected student for Report Card view or edit modal
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  // Edit / Add Modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<StudentGradeRecord | null>(null);

  // Add Student Form State (Systeme.io Format with LRN & Contact Fields)
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('+63 9');
  const [newLrn, setNewLrn] = useState('');
  const [newCohortId, setNewCohortId] = useState(INITIAL_COHORTS[0].id);
  const [newTrackTitle, setNewTrackTitle] = useState('Pinoy Piano & Church Keyboard Masterclass: Zero to Hero');
  const [newTrackId, setNewTrackId] = useState('track-pinoy-piano-zero-to-hero');
  const [newTagsString, setNewTagsString] = useState('Enrolled Scholar, Student, Batch 2026-A');
  const [newStatus, setNewStatus] = useState<StudentStatus>('Active');
  const [newActScore, setNewActScore] = useState(90);
  const [newExamScore, setNewExamScore] = useState(90);
  const [newWorksheetScore, setNewWorksheetScore] = useState(90);
  const [newAttendance, setNewAttendance] = useState(95);

  // Auto-generate LRN when email changes in add form
  useEffect(() => {
    if (newEmail && !newLrn) {
      setNewLrn(generateLrn(newEmail));
    }
  }, [newEmail, newLrn]);

  // Save to LocalStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ROSTER, JSON.stringify(roster));
    } catch (e) {
      console.error('Failed to save roster to localStorage:', e);
    }
  }, [roster]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COHORTS, JSON.stringify(cohorts));
    } catch (e) {
      console.error('Failed to save cohorts to localStorage:', e);
    }
  }, [cohorts]);

  // Set default selected student when roster loads
  useEffect(() => {
    if (roster.length > 0 && !selectedStudentId) {
      setSelectedStudentId(roster[0].id);
    }
  }, [roster, selectedStudentId]);

  if (!isOpen) return null;

  // Filtered roster
  const filteredRoster = roster.filter(s => {
    const matchesCohort = selectedCohortId === 'all' || s.cohortId === selectedCohortId;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      s.studentName.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      (s.lrn && s.lrn.includes(q)) ||
      (s.phone && s.phone.includes(q)) ||
      s.trackTitle.toLowerCase().includes(q) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(q))) ||
      (s.certificateId && s.certificateId.toLowerCase().includes(q));

    let matchesStatus = true;
    if (statusFilter === 'active') {
      matchesStatus = s.status === 'Active';
    } else if (statusFilter === 'honors') {
      matchesStatus = s.academicStanding.includes('Laude');
    } else if (statusFilter === 'passing') {
      matchesStatus = s.finalNumericGrade >= 75;
    } else if (statusFilter === 'probation') {
      matchesStatus = s.academicStanding === 'Academic Probation' || s.finalNumericGrade < 75 || s.status === 'Academic Probation';
    } else if (statusFilter === 'certified') {
      matchesStatus = s.certificateIssued;
    }

    return matchesCohort && matchesSearch && matchesStatus;
  }).sort((a, b) => {
    let comp = 0;
    if (sortBy === 'name') comp = a.studentName.localeCompare(b.studentName);
    else if (sortBy === 'grade') comp = a.finalNumericGrade - b.finalNumericGrade;
    else if (sortBy === 'gpa') comp = a.gpa - b.gpa;
    else if (sortBy === 'attendance') comp = a.attendancePercent - b.attendancePercent;
    else if (sortBy === 'lrn') comp = (a.lrn || '').localeCompare(b.lrn || '');
    return sortOrder === 'asc' ? comp : -comp;
  });

  // Selected student object
  const currentSelectedStudent = roster.find(s => s.id === selectedStudentId) || roster[0] || null;

  // Analytics computation
  const activeCohortName = selectedCohortId === 'all' 
    ? 'All Active Cohorts' 
    : (cohorts.find(c => c.id === selectedCohortId)?.name || 'Selected Cohort');

  const cohortRoster = selectedCohortId === 'all' ? roster : roster.filter(s => s.cohortId === selectedCohortId);
  const totalStudents = cohortRoster.length;
  const avgGrade = totalStudents > 0 
    ? Math.round((cohortRoster.reduce((sum, s) => sum + s.finalNumericGrade, 0) / totalStudents) * 10) / 10 
    : 0;
  const passingStudents = cohortRoster.filter(s => s.finalNumericGrade >= 75).length;
  const honorsCount = cohortRoster.filter(s => s.academicStanding.includes('Laude')).length;
  const certificatesCount = cohortRoster.filter(s => s.certificateIssued).length;

  const gradeDistribution = {
    A_Plus: cohortRoster.filter(s => s.letterGrade === 'A+').length,
    A: cohortRoster.filter(s => s.letterGrade === 'A').length,
    B_Plus: cohortRoster.filter(s => s.letterGrade === 'B+').length,
    B: cohortRoster.filter(s => s.letterGrade === 'B').length,
    C: cohortRoster.filter(s => s.letterGrade === 'C').length,
    F: cohortRoster.filter(s => s.letterGrade === 'F').length,
  };

  // Handlers
  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      const synced = await syncRosterWithSupabase();
      setRoster(synced);
      alert(`✅ Live Sync Complete! Synchronized with Supabase database. ${synced.length} scholar${synced.length === 1 ? '' : 's'} loaded.`);
    } catch (e) {
      alert('⚠️ Sync completed. Roster cache refreshed.');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCopyLrn = (lrn: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(lrn);
    setCopiedLrnId(lrn);
    setTimeout(() => setCopiedLrnId(null), 2000);
  };

  // SF2 Attendance toggle day cycle: P -> A -> T -> E -> P
  const handleToggleAttendanceDay = (studentId: string, day: number) => {
    setRoster(prev => prev.map(s => {
      if (s.id !== studentId) return s;
      const days = { ...(s.sf2AttendanceDays || getDefaultSf2Days(s.attendancePercent)) };
      const currentVal = days[day] || 'P';
      let nextVal: 'P' | 'A' | 'T' | 'E' = 'P';
      if (currentVal === 'P') nextVal = 'A';
      else if (currentVal === 'A') nextVal = 'T';
      else if (currentVal === 'T') nextVal = 'E';
      else if (currentVal === 'E') nextVal = 'P';
      days[day] = nextVal;

      const presentCount = Object.values(days).filter(v => v === 'P' || v === 'T' || v === 'E').length;
      const newAttendancePercent = Math.round((presentCount / 20) * 100);

      const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
        (s.completedActivities / (s.totalActivities || 12)) * 100,
        s.examAverage,
        s.worksheetsScore,
        newAttendancePercent
      );
      const standing = computeAcademicStanding(finalNumericGrade);
      const ph = computePhilippineGrade(finalNumericGrade);

      return {
        ...s,
        sf2AttendanceDays: days,
        attendancePercent: newAttendancePercent,
        finalNumericGrade,
        letterGrade,
        gpa,
        philippineGrade: ph.phGrade,
        academicStanding: standing
      };
    }));
  };

  const handleToggleCertificate = (studentId: string) => {
    setRoster(prev => prev.map(s => {
      if (s.id !== studentId) return s;
      const willIssue = !s.certificateIssued;
      const cleanTrackTag = s.trackId.replace('track-', '').slice(0, 8).toUpperCase();
      const generatedId = willIssue 
        ? `EPIC-CERT-2026-${cleanTrackTag}-${Math.floor(10000 + Math.random() * 90000)}`
        : undefined;
      return {
        ...s,
        certificateIssued: willIssue,
        certificateId: willIssue ? (s.certificateId || generatedId) : undefined,
        certificateIssuedDate: willIssue ? new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : undefined,
      };
    }));
  };

  const handleDeleteStudent = (studentId: string, studentName: string) => {
    if (window.confirm(`Are you sure you want to remove "${studentName}" from the roster?`)) {
      setRoster(prev => prev.filter(s => s.id !== studentId));
      if (selectedStudentId === studentId) {
        setSelectedStudentId(null);
      }
    }
  };

  const handleOpenEditModal = (student: StudentGradeRecord) => {
    setEditingStudent({ ...student });
    setIsEditModalOpen(true);
  };

  const handleSaveEditedStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;

    const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
      editingStudent.completedActivities * (100 / (editingStudent.totalActivities || 12)),
      editingStudent.examAverage,
      editingStudent.worksheetsScore,
      editingStudent.attendancePercent
    );

    const standing = computeAcademicStanding(finalNumericGrade);
    const ph = computePhilippineGrade(finalNumericGrade);

    const updated: StudentGradeRecord = {
      ...editingStudent,
      finalNumericGrade,
      letterGrade,
      gpa,
      philippineGrade: ph.phGrade,
      academicStanding: standing
    };

    setRoster(prev => prev.map(s => s.id === updated.id ? updated : s));
    setIsEditModalOpen(false);
    setEditingStudent(null);
  };

  const handleAddNewStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) return;

    const cleanEmail = newEmail.trim().toLowerCase();
    const lrn = newLrn.trim() || generateLrn(cleanEmail);
    const tags = newTagsString.split(',').map(t => t.trim()).filter(Boolean);

    const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
      newActScore,
      newExamScore,
      newWorksheetScore,
      newAttendance
    );

    const standing = computeAcademicStanding(finalNumericGrade);
    const ph = computePhilippineGrade(finalNumericGrade);
    const newStudentId = `stu-${Date.now().toString().slice(-4)}`;

    const newRecord: StudentGradeRecord = {
      id: newStudentId,
      lrn,
      studentName: newName.trim(),
      email: cleanEmail,
      phone: newPhone.trim() || '+63 912 345 6789',
      enrollmentDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: newStatus,
      tags: tags.length > 0 ? tags : ['Enrolled Scholar', 'Student'],
      cohortId: newCohortId,
      trackId: newTrackId,
      trackTitle: newTrackTitle,
      progressPercent: Math.round(newActScore),
      completedActivities: Math.round((newActScore / 100) * 12),
      totalActivities: 12,
      examAverage: newExamScore,
      worksheetsScore: newWorksheetScore,
      attendancePercent: newAttendance,
      sf2AttendanceDays: getDefaultSf2Days(newAttendance),
      finalNumericGrade,
      letterGrade,
      gpa,
      philippineGrade: ph.phGrade,
      academicStanding: standing,
      certificateIssued: finalNumericGrade >= 75,
      certificateId: finalNumericGrade >= 75 ? `EPIC-CERT-2026-${newTrackId.replace('track-', '').slice(0, 8).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}` : undefined,
      certificateIssuedDate: finalNumericGrade >= 75 ? new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : undefined,
      lastActive: 'Just now'
    };

    setRoster(prev => [newRecord, ...prev]);
    setSelectedStudentId(newStudentId);
    setIsAddModalOpen(false);

    // Also persist student to Supabase profiles & enrollments
    try {
      await supabase.from('profiles').upsert([
        {
          email: cleanEmail,
          full_name: newName.trim(),
          role: 'student',
          is_verified: true,
        }
      ], { onConflict: 'email' });

      await supabase.from('enrollments').upsert([
        {
          user_email: cleanEmail,
          track_id: newTrackId,
        }
      ], { onConflict: 'track_id,user_email' });
    } catch (err) {
      console.warn('Supabase auto-enrollment note:', err);
    }

    // Reset form
    setNewName('');
    setNewEmail('');
    setNewLrn('');
  };

  const handleClearRoster = () => {
    if (window.confirm('Clear local student roster cache? (Live accounts in Supabase remain safe).')) {
      setRoster([]);
      saveStoredRoster([]);
      setSelectedStudentId(null);
    }
  };

  const handleExportCSV = () => {
    exportRosterToCSV(filteredRoster, activeCohortName);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto font-sans animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-6 flex flex-col text-slate-100 max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-slate-950 px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Complete Learners Management System (LMS)
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400 hidden sm:inline">
                  {currentUser?.email ? `Faculty: ${currentUser.email}` : 'KEZJED SOLUTIONS Academy Division'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
                <span>Student Gradebook, Official Roster &amp; DepEd SF2</span>
              </h2>
            </div>
          </div>

          {/* Action buttons on top */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleManualSync}
              disabled={isSyncing}
              className="px-3.5 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Sync student enrollments directly from live Supabase cloud database"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Supabase Roster 🔄'}</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              title="Export roster to CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              title="Print official document"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print Sheet</span>
            </button>
            <button
              onClick={() => {
                setNewLrn(generateLrn(''));
                setIsAddModalOpen(true);
              }}
              className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Enroll Student</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Strip (Systeme.io Master Roster, DepEd SF2, Transcript OTR, Certificate Station, Analytics, Printable) */}
        <div className="bg-slate-900/90 px-5 sm:px-8 py-2.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 shrink-0">
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('roster')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Master Roster ({filteredRoster.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('sf2')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'sf2'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>DepEd SF2 Attendance</span>
            </button>

            <button
              onClick={() => setActiveTab('reportCard')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'reportCard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Official Transcript (OTR)</span>
            </button>

            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'certificate'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Certificate Station</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Cohort Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('printable')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'printable'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Printable Record</span>
            </button>
          </div>

          <button
            onClick={handleClearRoster}
            className="text-[11px] text-slate-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer transition"
            title="Clear local roster cache"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Local Cache</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-slate-900/50">
          
          {/* TAB 1: MASTER ROSTER (Systeme.io Format) */}
          {activeTab === 'roster' && (
            <div className="space-y-6">
              
              {/* Quick Summary Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Enrolled Scholars</p>
                    <p className="text-xl sm:text-2xl font-black text-white mt-0.5">{totalStudents}</p>
                    <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">Live from Supabase Cloud</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Cohort Average</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">{avgGrade}%</p>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{passingStudents} Passing (&ge;75%)</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Honor Roll</p>
                    <p className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">{honorsCount}</p>
                    <p className="text-[10px] text-amber-300/80 font-semibold mt-0.5">Latin Honors Eligible</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Certificates Issued</p>
                    <p className="text-xl sm:text-2xl font-black text-purple-400 mt-0.5">{certificatesCount}</p>
                    <p className="text-[10px] text-purple-300 font-semibold mt-0.5">Verified Diplomas</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Filters & Search Control Bar */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by 12-digit LRN, student name, email, track, or tags..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Cohort Filter */}
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={selectedCohortId}
                      onChange={(e) => setSelectedCohortId(e.target.value)}
                      className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="all" className="bg-slate-900">All Batches</option>
                      {cohorts.map((c) => (
                        <option key={c.id} value={c.id} className="bg-slate-900">
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="all" className="bg-slate-900">All Status</option>
                      <option value="active" className="bg-slate-900">Active Scholars</option>
                      <option value="honors" className="bg-slate-900">Honor Roll</option>
                      <option value="passing" className="bg-slate-900">Passing (&ge;75%)</option>
                      <option value="probation" className="bg-slate-900">Academic Probation</option>
                      <option value="certified" className="bg-slate-900">Certified</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Sort</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="grade" className="bg-slate-900">Final Grade</option>
                      <option value="name" className="bg-slate-900">Student Name</option>
                      <option value="lrn" className="bg-slate-900">12-Digit LRN</option>
                      <option value="gpa" className="bg-slate-900">US GPA</option>
                      <option value="attendance" className="bg-slate-900">Attendance</option>
                    </select>
                    <button
                      onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                      className="text-xs text-slate-400 hover:text-white px-1 cursor-pointer font-bold"
                      title="Toggle Sort Direction"
                    >
                      {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Roster Table */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900/90 border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        <th className="py-3 px-4">Learner &amp; LRN</th>
                        <th className="py-3 px-4">Course Track &amp; Tags</th>
                        <th className="py-3 px-3 text-center">Activities<br/><span className="text-[9px] text-slate-500 font-normal">40% Wt</span></th>
                        <th className="py-3 px-3 text-center">Exams<br/><span className="text-[9px] text-slate-500 font-normal">30% Wt</span></th>
                        <th className="py-3 px-3 text-center">Worksheets<br/><span className="text-[9px] text-slate-500 font-normal">20% Wt</span></th>
                        <th className="py-3 px-3 text-center">Attendance<br/><span className="text-[9px] text-slate-500 font-normal">10% Wt</span></th>
                        <th className="py-3 px-3 text-center">Final Grade</th>
                        <th className="py-3 px-3 text-center">PH Equiv</th>
                        <th className="py-3 px-3 text-center">Standing</th>
                        <th className="py-3 px-3 text-center">Certificate</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                      {filteredRoster.length === 0 ? (
                        <tr>
                          <td colSpan={11} className="py-16 text-center text-slate-500">
                            <div className="max-w-md mx-auto space-y-3">
                              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-400">
                                <Users className="w-6 h-6" />
                              </div>
                              <p className="text-base font-bold text-white">No scholars found</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                Students enrolled in Supabase will automatically sync here. You can also click &quot;Sync Supabase Roster 🔄&quot; or manually enroll a student right now.
                              </p>
                              <div className="flex items-center justify-center gap-2 pt-2">
                                <button
                                  onClick={handleManualSync}
                                  className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-500/40 font-bold rounded-xl text-xs transition inline-flex items-center gap-1.5 shadow-md cursor-pointer"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                  <span>Sync Live Database</span>
                                </button>
                                <button
                                  onClick={() => setIsAddModalOpen(true)}
                                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs transition inline-flex items-center gap-1.5 shadow-md cursor-pointer"
                                >
                                  <Plus className="w-4 h-4" />
                                  <span>Enroll Student</span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredRoster.map((student) => {
                          const ph = computePhilippineGrade(student.finalNumericGrade);
                          const isHonors = student.academicStanding.includes('Laude');
                          const isProbation = student.academicStanding === 'Academic Probation';

                          return (
                            <tr 
                              key={student.id}
                              className="hover:bg-slate-900/60 transition group cursor-pointer"
                              onClick={() => setSelectedStudentId(student.id)}
                            >
                              {/* Learner Info & LRN */}
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                                    isHonors 
                                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                                      : isProbation 
                                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                                      : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                                  }`}>
                                    {student.studentName.slice(0, 2).toUpperCase()}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-bold text-white flex items-center gap-1.5 truncate">
                                      <span>{student.studentName}</span>
                                      {isHonors && <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />}
                                    </div>
                                    <div className="text-[11px] text-slate-400 truncate">{student.email}</div>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-500/30">
                                        LRN: {student.lrn || generateLrn(student.email)}
                                      </span>
                                      <button
                                        onClick={(e) => handleCopyLrn(student.lrn || generateLrn(student.email), e)}
                                        className="text-slate-400 hover:text-white"
                                        title="Copy 12-digit LRN"
                                      >
                                        {copiedLrnId === (student.lrn || generateLrn(student.email)) ? (
                                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                                        ) : (
                                          <Copy className="w-2.5 h-2.5" />
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>

                              {/* Course Track & Systeme.io Tags */}
                              <td className="py-3 px-4 max-w-xs">
                                <p className="font-bold text-xs text-indigo-300 truncate">{student.trackTitle}</p>
                                <div className="flex items-center gap-1 pt-1 flex-wrap">
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                    student.status === 'Active' 
                                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                                      : student.status === 'Completed'
                                      ? 'bg-blue-950 text-blue-400 border border-blue-500/30'
                                      : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                                  }`}>
                                    {student.status || 'Active'}
                                  </span>
                                  {(student.tags || []).slice(0, 2).map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[9px] font-medium bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </td>

                              {/* Activities Score */}
                              <td className="py-3 px-3 text-center">
                                <span className="font-bold text-slate-200">
                                  {student.completedActivities} / {student.totalActivities}
                                </span>
                                <div className="text-[10px] text-slate-500">
                                  {Math.round((student.completedActivities / student.totalActivities) * 100)}%
                                </div>
                              </td>

                              {/* Exam Score */}
                              <td className="py-3 px-3 text-center">
                                <span className="font-bold text-slate-200">{student.examAverage}%</span>
                                <div className="text-[10px] text-slate-500">Exam Avg</div>
                              </td>

                              {/* Worksheets */}
                              <td className="py-3 px-3 text-center">
                                <span className="font-bold text-slate-200">{student.worksheetsScore}%</span>
                                <div className="text-[10px] text-slate-500">Rubric</div>
                              </td>

                              {/* Attendance */}
                              <td className="py-3 px-3 text-center">
                                <span className={`font-bold ${student.attendancePercent >= 80 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                  {student.attendancePercent}%
                                </span>
                                <div className="text-[9px] text-slate-400">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedStudentId(student.id);
                                      setActiveTab('sf2');
                                    }}
                                    className="text-amber-400 hover:underline"
                                  >
                                    View SF2
                                  </button>
                                </div>
                              </td>

                              {/* Final Grade */}
                              <td className="py-3 px-3 text-center">
                                <div className="flex items-center justify-center gap-1.5">
                                  <span className={`text-sm font-black font-mono ${
                                    student.finalNumericGrade >= 75 ? 'text-emerald-400' : 'text-rose-400'
                                  }`}>
                                    {student.finalNumericGrade}%
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                                    {student.letterGrade}
                                  </span>
                                </div>
                                <div className="text-[10px] text-slate-500 font-mono">GPA {student.gpa.toFixed(2)}</div>
                              </td>

                              {/* PH Equivalent Grade */}
                              <td className="py-3 px-3 text-center">
                                <span className="text-xs font-mono font-black text-amber-300 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded-lg">
                                  {ph.phGrade}
                                </span>
                                <div className="text-[9px] text-slate-500 mt-0.5">{ph.description}</div>
                              </td>

                              {/* Academic Standing */}
                              <td className="py-3 px-3 text-center">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                                  isHonors 
                                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30' 
                                    : isProbation 
                                    ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30' 
                                    : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                                }`}>
                                  {student.academicStanding}
                                </span>
                              </td>

                              {/* Certificate Toggle */}
                              <td className="py-3 px-3 text-center">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleCertificate(student.id);
                                  }}
                                  className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition cursor-pointer flex items-center gap-1 mx-auto ${
                                    student.certificateIssued
                                      ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40 hover:bg-purple-800'
                                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                                  }`}
                                  title={student.certificateIssued ? `Certificate Issued: ${student.certificateId}` : 'Click to issue certificate'}
                                >
                                  {student.certificateIssued ? (
                                    <>
                                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                      <span>Issued ✓</span>
                                    </>
                                  ) : (
                                    <span>Issue Cert</span>
                                  )}
                                </button>
                              </td>

                              {/* Actions */}
                              <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                                  <button
                                    onClick={() => {
                                      setSelectedStudentId(student.id);
                                      setActiveTab('reportCard');
                                    }}
                                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 transition cursor-pointer"
                                    title="View Official Transcript of Records (OTR)"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedStudentId(student.id);
                                      setActiveTab('certificate');
                                    }}
                                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-purple-400 transition cursor-pointer"
                                    title="View Certificate of Completion"
                                  >
                                    <Award className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleOpenEditModal(student)}
                                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition cursor-pointer"
                                    title="Edit student records & grades"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteStudent(student.id, student.studentName)}
                                    className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-rose-400 transition cursor-pointer"
                                    title="Remove from roster"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DepEd SF2 (SCHOOL FORM 2 - DAILY ATTENDANCE REPORT) */}
          {activeTab === 'sf2' && (
            <div className="space-y-6">
              {/* Official DepEd / Institutional Form Header */}
              <div className="bg-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 text-white space-y-4 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Republic of the Philippines • DepEd / CHED / TESDA Standards
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      School Form 2 (SF2) Daily Attendance Report of Learners
                    </h3>
                    <p className="text-xs text-slate-400">
                      Official monthly learner tracking matrix with automated attendance rate, SARDO dropout detection, and DepEd/TESDA certification blocks.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrint}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Official SF2 Sheet</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">School Name</span>
                    <span className="font-black text-white">EPICADEMY POLYTECHNIC</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">School ID / Division</span>
                    <span className="font-black text-white">EPIC-403928 • NCR Campus</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Month &amp; School Year</span>
                    <span className="font-black text-white">October 2026 • S.Y. 2025-2026</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Instruction Legend</span>
                    <span className="text-[10px] text-amber-300 font-bold">P = Present, A = Absent, T = Tardy, E = Excused</span>
                  </div>
                </div>
              </div>

              {/* SF2 Attendance Matrix Table */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-[10px] font-black uppercase text-slate-300 border-b border-slate-800">
                        <th className="py-3 px-3 text-center w-8">#</th>
                        <th className="py-3 px-4 min-w-[130px]">12-Digit LRN</th>
                        <th className="py-3 px-4 min-w-[180px]">Learner&apos;s Full Name</th>
                        {Array.from({ length: 20 }, (_, i) => (
                          <th key={i + 1} className="py-3 px-1 text-center w-8">
                            D{i + 1}
                          </th>
                        ))}
                        <th className="py-3 px-2 text-center text-emerald-400">Pres</th>
                        <th className="py-3 px-2 text-center text-rose-400">Abs</th>
                        <th className="py-3 px-2 text-center text-blue-400">%</th>
                        <th className="py-3 px-4 text-center">Status / SARDO Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-200">
                      {filteredRoster.length === 0 ? (
                        <tr>
                          <td colSpan={27} className="py-12 text-center text-slate-500">
                            No learners enrolled in this batch. Sync live Supabase database or add students.
                          </td>
                        </tr>
                      ) : (
                        filteredRoster.map((student, sIdx) => {
                          const sf2Days = student.sf2AttendanceDays || getDefaultSf2Days(student.attendancePercent);
                          const presentCount = Object.values(sf2Days).filter(v => v === 'P' || v === 'T' || v === 'E').length;
                          const absentCount = Object.values(sf2Days).filter(v => v === 'A').length;
                          const isRisk = absentCount >= 3;

                          return (
                            <tr key={student.id} className="hover:bg-slate-900/40">
                              <td className="py-2.5 px-3 text-center text-slate-500 font-mono">{sIdx + 1}</td>
                              <td className="py-2.5 px-4 font-mono font-bold text-amber-400">
                                {student.lrn || generateLrn(student.email)}
                              </td>
                              <td className="py-2.5 px-4 font-bold text-white truncate max-w-[200px]">
                                {student.studentName}
                                <span className="block text-[10px] text-slate-400 font-normal">{student.email}</span>
                              </td>

                              {/* Interactive 20-Day Columns */}
                              {Array.from({ length: 20 }, (_, i) => {
                                const dayNum = i + 1;
                                const val = sf2Days[dayNum] || 'P';

                                return (
                                  <td key={dayNum} className="py-2 px-0.5 text-center">
                                    <button
                                      type="button"
                                      onClick={() => handleToggleAttendanceDay(student.id, dayNum)}
                                      className={`w-6 h-6 rounded font-black text-[10px] transition cursor-pointer ${
                                        val === 'P'
                                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-900'
                                          : val === 'A'
                                          ? 'bg-rose-950 text-rose-400 border border-rose-500/40 hover:bg-rose-900 font-black'
                                          : val === 'T'
                                          ? 'bg-amber-950 text-amber-400 border border-amber-500/40 hover:bg-amber-900'
                                          : 'bg-blue-950 text-blue-400 border border-blue-500/40 hover:bg-blue-900'
                                      }`}
                                      title={`Day ${dayNum}: ${val === 'P' ? 'Present' : val === 'A' ? 'Absent' : val === 'T' ? 'Tardy' : 'Excused'} (Click to cycle)`}
                                    >
                                      {val}
                                    </button>
                                  </td>
                                );
                              })}

                              <td className="py-2.5 px-2 text-center font-bold text-emerald-400 font-mono">{presentCount}</td>
                              <td className="py-2.5 px-2 text-center font-bold text-rose-400 font-mono">{absentCount}</td>
                              <td className="py-2.5 px-2 text-center font-bold text-blue-400 font-mono">{student.attendancePercent}%</td>
                              <td className="py-2.5 px-4 text-center">
                                {isRisk ? (
                                  <span className="text-[10px] font-bold text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/40 flex items-center justify-center gap-1">
                                    <AlertTriangle className="w-3 h-3 text-rose-400" /> SARDO Alert
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                                    ✓ Regular
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* SF2 DepEd Official Sign-off Footer */}
                <div className="bg-slate-900 p-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      I hereby certify that the above daily attendance record is true and correct:
                    </p>
                    <div className="pt-6 border-b border-slate-700 max-w-xs text-center">
                      <p className="font-bold text-white text-sm">Ronnel M. Aviguetero</p>
                      <p className="text-[10px] text-slate-400">Class Adviser / Lead Instructor</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Reviewed and validated for institutional DepEd / TESDA compliance:
                    </p>
                    <div className="pt-6 border-b border-slate-700 max-w-xs text-center">
                      <p className="font-bold text-white text-sm">Office of the University Registrar</p>
                      <p className="text-[10px] text-slate-400">Dean of Academic Affairs &amp; Records</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OFFICIAL TRANSCRIPT OF RECORDS (OTR) / UNIVERSITY GRADE SLIP */}
          {activeTab === 'reportCard' && (
            <div className="space-y-6">
              {currentSelectedStudent ? (
                <div className="bg-slate-950 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
                  
                  {/* Top University Crest & Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-indigo-600/30">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                          Accredited Higher Education &amp; Vocational Institute
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                          EPICADEMY POLYTECHNIC &amp; HIGHER EDUCATION INSTITUTE
                        </h3>
                        <p className="text-xs text-slate-400">
                          Office of the University Registrar • Official Transcript of Records (OTR)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 block">DOCUMENT SERIAL NUMBER</span>
                      <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30">
                        OTR-2026-PH-{currentSelectedStudent.id.slice(0, 8).toUpperCase()}-VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Student Academic Identity Box */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Learner Full Name</span>
                      <span className="text-base font-black text-white">{currentSelectedStudent.studentName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">12-Digit DepEd LRN</span>
                      <span className="text-base font-black text-amber-400 font-mono">
                        {currentSelectedStudent.lrn || generateLrn(currentSelectedStudent.email)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Email &amp; Contact</span>
                      <span className="font-bold text-slate-200 block truncate">{currentSelectedStudent.email}</span>
                      <span className="text-[10px] text-slate-400">{currentSelectedStudent.phone || '+63 912 345 6789'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Academic Program / Track</span>
                      <span className="font-bold text-indigo-300 block truncate">{currentSelectedStudent.trackTitle}</span>
                    </div>
                  </div>

                  {/* Coursework & Competency Evaluation Matrix */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-inner">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-950 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-800">
                            <th className="py-3 px-4">Course Code</th>
                            <th className="py-3 px-4">Descriptive Subject Title</th>
                            <th className="py-3 px-3 text-center">Lec / Lab Hrs</th>
                            <th className="py-3 px-3 text-center">Units</th>
                            <th className="py-3 px-3 text-center">Raw Grade</th>
                            <th className="py-3 px-3 text-center">PH Equiv</th>
                            <th className="py-3 px-4 text-center">Remarks</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          {getCurriculumSubjects(currentSelectedStudent.trackId).map((subj, idx) => {
                            const variation = (idx * 2) % 5;
                            const subjectGrade = Math.min(100, Math.max(75, currentSelectedStudent.finalNumericGrade + variation - 2));
                            const phEquiv = computePhilippineGrade(subjectGrade);

                            return (
                              <tr key={subj.code} className="hover:bg-slate-800/40">
                                <td className="py-2.5 px-4 font-mono font-bold text-indigo-400">{subj.code}</td>
                                <td className="py-2.5 px-4 font-bold text-white">{subj.title}</td>
                                <td className="py-2.5 px-3 text-center font-mono text-slate-400">{subj.lec} / {subj.lab}</td>
                                <td className="py-2.5 px-3 text-center font-mono text-slate-200">{subj.units.toFixed(1)}</td>
                                <td className="py-2.5 px-3 text-center font-mono font-bold text-emerald-400">{subjectGrade}%</td>
                                <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-300">{phEquiv.phGrade}</td>
                                <td className="py-2.5 px-4 text-center">
                                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                                    PASSED
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Cumulative Evaluation & Philippine CHED Grading System Scale */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
                      <h4 className="font-black text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4" /> Academic Performance Summary
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px]">General Weighted Average (GWA)</span>
                          <span className="text-xl font-black text-amber-300 font-mono">
                            {currentSelectedStudent.philippineGrade || '1.50'}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Cumulative GPA (4.0 Scale)</span>
                          <span className="text-xl font-black text-emerald-400 font-mono">
                            {currentSelectedStudent.gpa.toFixed(2)} / 4.00
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Academic Standing</span>
                          <span className="font-bold text-white">{currentSelectedStudent.academicStanding}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Total Earned Units</span>
                          <span className="font-bold text-white">18.0 Credits</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2">
                      <h4 className="font-black text-xs uppercase tracking-wider text-slate-400">
                        Official Philippine Grading Scale (CHED / DepEd)
                      </h4>
                      <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-300">
                        <div><strong className="text-amber-400 font-mono">1.00</strong> (97-100%) Excellent</div>
                        <div><strong className="text-amber-400 font-mono">2.00</strong> (85-87%) Above Avg</div>
                        <div><strong className="text-amber-400 font-mono">1.25</strong> (94-96%) Superior</div>
                        <div><strong className="text-amber-400 font-mono">2.25</strong> (82-84%) Average</div>
                        <div><strong className="text-amber-400 font-mono">1.50</strong> (91-93%) Very Good</div>
                        <div><strong className="text-amber-400 font-mono">2.50</strong> (79-81%) Fair</div>
                        <div><strong className="text-amber-400 font-mono">1.75</strong> (88-90%) Good</div>
                        <div><strong className="text-emerald-400 font-mono">3.00</strong> (75%) Passed</div>
                      </div>
                    </div>
                  </div>

                  {/* University Certification Block */}
                  <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Authenticated by:</p>
                      <p className="text-sm font-black text-white mt-1">Ronnel M. Aviguetero</p>
                      <p className="text-xs text-slate-400">CEO and FOUNDER of KEZJED SOLUTIONS • Academic Dean</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePrint}
                        className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs rounded-xl shadow-lg cursor-pointer flex items-center gap-2"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Print Official Transcript</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center bg-slate-950 border border-slate-800 rounded-3xl text-slate-400">
                  Select a student from the Master Roster to generate an Official Transcript of Records (OTR).
                </div>
              )}
            </div>
          )}

          {/* TAB 4: CERTIFICATE STATION */}
          {activeTab === 'certificate' && (
            <div className="space-y-6">
              {currentSelectedStudent ? (
                <div className="bg-slate-950 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 text-white space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="max-w-3xl mx-auto border-4 border-double border-amber-500/40 p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20">
                      <Award className="w-10 h-10" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
                        EPICADEMY POLYTECHNIC &amp; HIGHER EDUCATION INSTITUTE
                      </h4>
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        CERTIFICATE OF COMPLETION
                      </h2>
                      <p className="text-xs text-slate-400 italic">This is to officially certify that</p>
                    </div>

                    <div className="space-y-1 py-2">
                      <h3 className="text-2xl sm:text-4xl font-black text-amber-300 font-serif tracking-wide underline decoration-amber-500/40 underline-offset-8">
                        {currentSelectedStudent.studentName}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 pt-2">
                        12-Digit DepEd LRN: <span className="text-amber-400 font-bold">{currentSelectedStudent.lrn || generateLrn(currentSelectedStudent.email)}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                      has successfully satisfied all prescribed academic requirements, laboratory exercises, and practical assessments for the technical curriculum:
                    </p>

                    <h4 className="text-base sm:text-lg font-black text-white bg-slate-900/80 border border-slate-800 p-3 rounded-xl max-w-lg mx-auto text-indigo-300">
                      {currentSelectedStudent.trackTitle}
                    </h4>

                    <div className="flex items-center justify-center gap-6 pt-4 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Academic Distinction</span>
                        <span className="font-bold text-amber-400">{currentSelectedStudent.academicStanding}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Certificate Serial</span>
                        <span className="font-mono text-emerald-400">{currentSelectedStudent.certificateId || 'EPIC-CERT-2026-PENDING'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Issue Date</span>
                        <span className="font-bold text-white">{currentSelectedStudent.certificateIssuedDate || 'October 17, 2026'}</span>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800/80 flex items-center justify-between text-xs max-w-md mx-auto">
                      <div className="text-center">
                        <div className="w-32 border-b border-slate-700 mx-auto pb-1 font-serif text-white font-bold">Ronnel M. Aviguetero</div>
                        <span className="text-[10px] text-slate-400">Academic Dean &amp; Founder</span>
                      </div>
                      <div className="text-center">
                        <div className="w-32 border-b border-slate-700 mx-auto pb-1 font-serif text-white font-bold">Registrar Division</div>
                        <span className="text-[10px] text-slate-400">Head University Registrar</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleToggleCertificate(currentSelectedStudent.id)}
                      className={`px-6 py-2.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 ${
                        currentSelectedStudent.certificateIssued
                          ? 'bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-500/40'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{currentSelectedStudent.certificateIssued ? 'Certificate Verified & Active' : 'Issue Official Certificate'}</span>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 border border-slate-700"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Certificate</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center bg-slate-950 border border-slate-800 rounded-3xl text-slate-400">
                  Select a student from the Master Roster to review and issue certificates.
                </div>
              )}
            </div>
          )}

          {/* TAB 5: COHORT ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
                  <h4 className="font-black text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-indigo-400" /> Grade Distribution Matrix
                  </h4>
                  <div className="space-y-3 pt-2">
                    {Object.entries(gradeDistribution).map(([gradeKey, count]) => {
                      const label = gradeKey.replace('_Plus', '+');
                      const percent = totalStudents > 0 ? Math.round((count / totalStudents) * 100) : 0;
                      return (
                        <div key={gradeKey} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-white">{label}</span>
                            <span className="text-slate-400 font-mono">{count} scholars ({percent}%)</span>
                          </div>
                          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all" style={{ width: `${percent}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
                  <h4 className="font-black text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" /> Academic Health &amp; Retention
                  </h4>
                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Passing Rate</span>
                      <span className="text-2xl font-black text-emerald-400 font-mono">{passingStudents} of {totalStudents}</span>
                      <span className="text-[10px] text-slate-400 block mt-1">(&ge;75% Passing Threshold)</span>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Certificates Issued</span>
                      <span className="text-2xl font-black text-purple-400 font-mono">{certificatesCount} of {totalStudents}</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Verified Diplomas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PRINTABLE RECORD */}
          {activeTab === 'printable' && (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-black text-white">Official Printable Roster &amp; Grades</h3>
                  <p className="text-xs text-slate-400">Printable ledger formatted for academic faculty archiving.</p>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Document</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-800">
                  <thead className="bg-slate-900 text-slate-400 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="p-2 border border-slate-800">LRN (12 Digits)</th>
                      <th className="p-2 border border-slate-800">Learner Name</th>
                      <th className="p-2 border border-slate-800">Email</th>
                      <th className="p-2 border border-slate-800">Program Track</th>
                      <th className="p-2 border border-slate-800 text-center">Grade</th>
                      <th className="p-2 border border-slate-800 text-center">PH Equiv</th>
                      <th className="p-2 border border-slate-800 text-center">Standing</th>
                      <th className="p-2 border border-slate-800 text-center">Cert Serial</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {filteredRoster.map(s => (
                      <tr key={s.id}>
                        <td className="p-2 border border-slate-800 font-mono text-amber-400">{s.lrn || generateLrn(s.email)}</td>
                        <td className="p-2 border border-slate-800 font-bold text-white">{s.studentName}</td>
                        <td className="p-2 border border-slate-800">{s.email}</td>
                        <td className="p-2 border border-slate-800">{s.trackTitle}</td>
                        <td className="p-2 border border-slate-800 text-center font-bold font-mono">{s.finalNumericGrade}%</td>
                        <td className="p-2 border border-slate-800 text-center font-mono text-amber-300">{s.philippineGrade || '1.50'}</td>
                        <td className="p-2 border border-slate-800 text-center">{s.academicStanding}</td>
                        <td className="p-2 border border-slate-800 text-center font-mono text-[10px] text-purple-300">{s.certificateId || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* MODAL: ADD / ENROLL STUDENT (Systeme.io Format) */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-indigo-400" /> Enroll New Student (Systeme.io Format)
                </h3>
                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddNewStudent} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Jedidiah D. Aviguetero"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="student@gmail.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Contact Phone</label>
                    <input
                      type="text"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="+63 912 345 6789"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">
                    12-Digit Philippine Learner Reference Number (LRN) *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={12}
                    value={newLrn}
                    onChange={(e) => setNewLrn(e.target.value)}
                    placeholder="e.g. 102026189342"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-amber-300 font-mono font-bold focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">Select Program / Technical Track *</label>
                  <select
                    value={newTrackId}
                    onChange={(e) => {
                      setNewTrackId(e.target.value);
                      const opt = e.target.selectedOptions[0];
                      if (opt) setNewTrackTitle(opt.text);
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="track-pinoy-piano-zero-to-hero">Pinoy Piano &amp; Church Keyboard Masterclass: Zero to Hero</option>
                    <option value="track-pinoy-drum-zero-to-hero">Pinoy Drum Masterclass: Zero to Hero Professional Drumming</option>
                    <option value="track-pinoy-guitar-zero-to-hero">Pinoy Rhythm Guitar Masterclass: Zero to Hero Rhythm Guitarist</option>
                    <option value="track-pinoy-lead-guitar-zero-to-hero">Pinoy Lead Guitar Masterclass: Zero to Hero Lead Guitarist</option>
                    <option value="track-tesda-css-nc2">TESDA Computer Systems Servicing (CSS) NC II Technical Diploma</option>
                    <option value="track-level-1-html-foundations">Level 1: Modern HTML5 Fundamentals &amp; Semantic Web Architecture</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Systeme.io Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={newTagsString}
                      onChange={(e) => setNewTagsString(e.target.value)}
                      placeholder="Scholar, Web-Dev, Batch-A"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Enrollment Status</label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Active">Active Scholar</option>
                      <option value="In Review">In Review</option>
                      <option value="Completed">Completed</option>
                      <option value="Academic Probation">Academic Probation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Select Cohort / Batch</label>
                    <select
                      value={newCohortId}
                      onChange={(e) => setNewCohortId(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    >
                      {cohorts.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Attendance Baseline (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={newAttendance}
                      onChange={(e) => setNewAttendance(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1 text-[10px]">Activities Score (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={newActScore}
                      onChange={(e) => setNewActScore(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1 text-[10px]">Exams Score (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={newExamScore}
                      onChange={(e) => setNewExamScore(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1 text-[10px]">Worksheets (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={newWorksheetScore}
                      onChange={(e) => setNewWorksheetScore(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-xl shadow-lg cursor-pointer"
                  >
                    Enroll Student ➔
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: EDIT STUDENT */}
        {isEditModalOpen && editingStudent && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-indigo-400" /> Edit Student Records &amp; Grades
                </h3>
                <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEditedStudent} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Student Full Name</label>
                  <input
                    type="text"
                    required
                    value={editingStudent.studentName}
                    onChange={(e) => setEditingStudent({ ...editingStudent, studentName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">12-Digit LRN</label>
                    <input
                      type="text"
                      maxLength={12}
                      value={editingStudent.lrn || ''}
                      onChange={(e) => setEditingStudent({ ...editingStudent, lrn: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-amber-300 font-mono font-bold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Status</label>
                    <select
                      value={editingStudent.status || 'Active'}
                      onChange={(e) => setEditingStudent({ ...editingStudent, status: e.target.value as any })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Active">Active Scholar</option>
                      <option value="In Review">In Review</option>
                      <option value="Completed">Completed</option>
                      <option value="Academic Probation">Academic Probation</option>
                      <option value="Dropped">Dropped</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Completed Activities (of 12)</label>
                    <input
                      type="number"
                      min={0}
                      max={12}
                      value={editingStudent.completedActivities}
                      onChange={(e) => setEditingStudent({ ...editingStudent, completedActivities: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Exam Average (0-100%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={editingStudent.examAverage}
                      onChange={(e) => setEditingStudent({ ...editingStudent, examAverage: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Worksheets Score (0-100%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={editingStudent.worksheetsScore}
                      onChange={(e) => setEditingStudent({ ...editingStudent, worksheetsScore: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Attendance (0-100%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={editingStudent.attendancePercent}
                      onChange={(e) => setEditingStudent({ ...editingStudent, attendancePercent: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-xl shadow-lg cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
