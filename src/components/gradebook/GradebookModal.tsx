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
  Briefcase,
  RotateCcw
} from 'lucide-react';
import { 
  INITIAL_COHORTS, 
  INITIAL_STUDENT_ROSTER, 
  computeWeightedGrade, 
  computeAcademicStanding, 
  computePhilippineGrade, 
  exportRosterToCSV 
} from '../../data/gradebookData';
import type { CohortItem, StudentGradeRecord } from '../../data/gradebookData';

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

const STORAGE_KEY_ROSTER = 'epicademy_gradebook_roster_v2';
const STORAGE_KEY_COHORTS = 'epicademy_gradebook_cohorts_v2';

export const GradebookModal = ({
  isOpen,
  onClose,
  currentUser,
  onOpenDossier,
  onOpenCredentials
}: GradebookModalProps) => {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'roster' | 'analytics' | 'printable' | 'reportCard'>('roster');

  // Cohort & Roster state
  const [cohorts, setCohorts] = useState<CohortItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COHORTS);
      return saved ? JSON.parse(saved) : INITIAL_COHORTS;
    } catch {
      return INITIAL_COHORTS;
    }
  });

  const [roster, setRoster] = useState<StudentGradeRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ROSTER);
      return saved ? JSON.parse(saved) : INITIAL_STUDENT_ROSTER;
    } catch {
      return INITIAL_STUDENT_ROSTER;
    }
  });

  // Filter & Search state
  const [selectedCohortId, setSelectedCohortId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'honors' | 'passing' | 'probation' | 'certified'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'grade' | 'gpa' | 'attendance'>('grade');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Selected student for Report Card view or edit modal
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  // Edit / Add Modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<StudentGradeRecord | null>(null);

  // Add Student Form State
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newCohortId, setNewCohortId] = useState(INITIAL_COHORTS[0].id);
  const [newTrackTitle, setNewTrackTitle] = useState('Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture');
  const [newTrackId, setNewTrackId] = useState('track-level-1-html-foundations');
  const [newActScore, setNewActScore] = useState(90);
  const [newExamScore, setNewExamScore] = useState(90);
  const [newWorksheetScore, setNewWorksheetScore] = useState(90);
  const [newAttendance, setNewAttendance] = useState(95);

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
    const matchesSearch = 
      s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.trackTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.certificateId && s.certificateId.toLowerCase().includes(searchQuery.toLowerCase()));

    let matchesStatus = true;
    if (statusFilter === 'honors') {
      matchesStatus = s.academicStanding.includes('Laude');
    } else if (statusFilter === 'passing') {
      matchesStatus = s.finalNumericGrade >= 75;
    } else if (statusFilter === 'probation') {
      matchesStatus = s.academicStanding === 'Academic Probation' || s.finalNumericGrade < 75;
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
  const passingRate = totalStudents > 0 ? Math.round((passingStudents / totalStudents) * 100) : 0;
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
        certificateId: willIssue ? (s.certificateId || generatedId) : undefined
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

    // Recalculate grades
    const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
      editingStudent.completedActivities * (100 / (editingStudent.totalActivities || 12)),
      editingStudent.examAverage,
      editingStudent.worksheetsScore,
      editingStudent.attendancePercent
    );

    const standing = computeAcademicStanding(finalNumericGrade);

    const updated: StudentGradeRecord = {
      ...editingStudent,
      finalNumericGrade,
      letterGrade,
      gpa,
      academicStanding: standing
    };

    setRoster(prev => prev.map(s => s.id === updated.id ? updated : s));
    setIsEditModalOpen(false);
    setEditingStudent(null);
  };

  const handleAddNewStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) return;

    const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
      newActScore,
      newExamScore,
      newWorksheetScore,
      newAttendance
    );

    const standing = computeAcademicStanding(finalNumericGrade);
    const newStudentId = `stu-${Date.now().toString().slice(-4)}`;

    const newRecord: StudentGradeRecord = {
      id: newStudentId,
      studentName: newName.trim(),
      email: newEmail.trim().toLowerCase(),
      cohortId: newCohortId,
      trackId: newTrackId,
      trackTitle: newTrackTitle,
      progressPercent: Math.round(newActScore),
      completedActivities: Math.round((newActScore / 100) * 12),
      totalActivities: 12,
      examAverage: newExamScore,
      worksheetsScore: newWorksheetScore,
      attendancePercent: newAttendance,
      finalNumericGrade,
      letterGrade,
      gpa,
      academicStanding: standing,
      certificateIssued: finalNumericGrade >= 75,
      certificateId: finalNumericGrade >= 75 ? `EPIC-CERT-2026-${newTrackId.replace('track-', '').slice(0, 8).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}` : undefined,
      lastActive: 'Just now'
    };

    setRoster(prev => [newRecord, ...prev]);
    setIsAddModalOpen(false);
    // Reset form
    setNewName('');
    setNewEmail('');
    setSelectedStudentId(newStudentId);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Reset student roster to default factory data? Any custom entries will be reverted.')) {
      setRoster(INITIAL_STUDENT_ROSTER);
      setCohorts(INITIAL_COHORTS);
      localStorage.removeItem(STORAGE_KEY_ROSTER);
      localStorage.removeItem(STORAGE_KEY_COHORTS);
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
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded-md">
                  Faculty Administration
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400 hidden sm:inline">
                  {currentUser?.email ? `Faculty: ${currentUser.email}` : 'KEZJED SOLUTIONS Academy Division'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                Student Gradebook &amp; Official Roster
              </h2>
            </div>
          </div>

          {/* Action buttons on top */}
          <div className="flex items-center gap-2 flex-wrap">
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
              title="Print official grade sheet"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print Sheet</span>
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Enroll Student</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-slate-900/90 px-5 sm:px-8 py-2.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('roster')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Master Roster ({filteredRoster.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Cohort Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab('reportCard')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'reportCard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Student Grade Slip</span>
            </button>
            <button
              onClick={() => setActiveTab('printable')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
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
            onClick={handleResetToDefault}
            className="text-[11px] text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer transition"
            title="Reset to initial factory sample data"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Sample Data</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-slate-900/50">
          
          {/* TAB 1: MASTER ROSTER */}
          {activeTab === 'roster' && (
            <div className="space-y-6">
              
              {/* Quick Summary Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Enrolled Scholars</p>
                    <p className="text-xl sm:text-2xl font-black text-white mt-0.5">{totalStudents}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Cohort Average</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">{avgGrade}%</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Honor Roll</p>
                    <p className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">{honorsCount}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Certificates Issued</p>
                    <p className="text-xl sm:text-2xl font-black text-purple-400 mt-0.5">{certificatesCount}</p>
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
                    placeholder="Search by student name, email, or track..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  {/* Cohort Select */}
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={selectedCohortId}
                      onChange={(e) => setSelectedCohortId(e.target.value)}
                      className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="all" className="bg-slate-900">All Batches</option>
                      {cohorts.map(c => (
                        <option key={c.id} value={c.id} className="bg-slate-900">{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Standing Filter */}
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="all" className="bg-slate-900">All Status</option>
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
                        <th className="py-3 px-4">Student &amp; Track</th>
                        <th className="py-3 px-3 text-center">Activities<br/><span className="text-[9px] text-slate-500 font-normal">40% Wt</span></th>
                        <th className="py-3 px-3 text-center">Exams<br/><span className="text-[9px] text-slate-500 font-normal">30% Wt</span></th>
                        <th className="py-3 px-3 text-center">Worksheets<br/><span className="text-[9px] text-slate-500 font-normal">20% Wt</span></th>
                        <th className="py-3 px-3 text-center">Attendance<br/><span className="text-[9px] text-slate-500 font-normal">10% Wt</span></th>
                        <th className="py-3 px-3 text-center">Final Grade</th>
                        <th className="py-3 px-3 text-center">PH Equiv</th>
                        <th className="py-3 px-3 text-center">Academic Standing</th>
                        <th className="py-3 px-3 text-center">Certificate</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                      {filteredRoster.length === 0 ? (
                        <tr>
                          <td colSpan={10} className="py-12 text-center text-slate-500">
                            <Users className="w-8 h-8 mx-auto mb-2 opacity-40" />
                            <p className="text-sm font-semibold">No students found matching your filters.</p>
                            <p className="text-xs text-slate-600 mt-1">Try clearing your search query or changing filters.</p>
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
                              {/* Student Info */}
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
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
                                    <div className="text-[10px] text-indigo-400/80 truncate font-medium mt-0.5 max-w-xs">
                                      {student.trackTitle}
                                    </div>
                                  </div>
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
                              </td>

                              {/* Worksheets */}
                              <td className="py-3 px-3 text-center">
                                <span className="font-bold text-slate-200">{student.worksheetsScore}%</span>
                              </td>

                              {/* Attendance */}
                              <td className="py-3 px-3 text-center">
                                <span className={`font-bold ${
                                  student.attendancePercent >= 90 ? 'text-emerald-400' :
                                  student.attendancePercent >= 75 ? 'text-amber-400' : 'text-rose-400'
                                }`}>
                                  {student.attendancePercent}%
                                </span>
                              </td>

                              {/* Final Grade */}
                              <td className="py-3 px-3 text-center">
                                <div className="flex flex-col items-center">
                                  <span className={`text-sm font-black ${
                                    student.finalNumericGrade >= 90 ? 'text-emerald-400' :
                                    student.finalNumericGrade >= 75 ? 'text-blue-400' : 'text-rose-400'
                                  }`}>
                                    {student.finalNumericGrade}%
                                  </span>
                                  <span className="text-[10px] px-1.5 py-0.2 rounded font-extrabold bg-slate-800 text-slate-300">
                                    Grade: {student.letterGrade}
                                  </span>
                                </div>
                              </td>

                              {/* Philippine Grade Scale */}
                              <td className="py-3 px-3 text-center">
                                <span className="font-extrabold text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded">
                                  {ph.phGrade}
                                </span>
                                <div className="text-[9px] text-slate-500 mt-0.5">{ph.description}</div>
                              </td>

                              {/* Standing */}
                              <td className="py-3 px-3 text-center">
                                <span className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full ${
                                  student.academicStanding === 'Summa Cum Laude' 
                                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' :
                                  student.academicStanding === 'Magna Cum Laude' 
                                    ? 'bg-purple-400/20 text-purple-300 border border-purple-400/40' :
                                  student.academicStanding === 'Cum Laude' 
                                    ? 'bg-blue-400/20 text-blue-300 border border-blue-400/40' :
                                  student.academicStanding === 'Good Standing' 
                                    ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40' :
                                    'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                }`}>
                                  {student.academicStanding}
                                </span>
                              </td>

                              {/* Certificate */}
                              <td className="py-3 px-3 text-center" onClick={(e) => e.stopPropagation()}>
                                {student.certificateIssued ? (
                                  <div className="flex flex-col items-center">
                                    <button
                                      onClick={() => handleToggleCertificate(student.id)}
                                      className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition flex items-center gap-1 cursor-pointer"
                                      title="Click to revoke certificate"
                                    >
                                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                      <span>Conferred</span>
                                    </button>
                                    {onOpenCredentials && (
                                      <button
                                        onClick={() => onOpenCredentials(student.trackId, student.studentName, student.email)}
                                        className="text-[9px] text-indigo-400 hover:text-indigo-300 underline mt-0.5 cursor-pointer"
                                      >
                                        View Diploma
                                      </button>
                                    )}
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => handleToggleCertificate(student.id)}
                                    className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
                                  >
                                    Issue Cert
                                  </button>
                                )}
                              </td>

                              {/* Actions */}
                              <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    onClick={() => {
                                      setSelectedStudentId(student.id);
                                      setActiveTab('reportCard');
                                    }}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition cursor-pointer"
                                    title="View Individual Report Card"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                  </button>
                                  {onOpenDossier && (
                                    <button
                                      onClick={() => onOpenDossier(student.studentName, student.email)}
                                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition cursor-pointer"
                                      title="View Student Dossier & Portfolio"
                                    >
                                      <Briefcase className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleOpenEditModal(student)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white transition cursor-pointer"
                                    title="Edit Grades & Scores"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteStudent(student.id, student.studentName)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition cursor-pointer"
                                    title="Remove from Roster"
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

                {/* Table Footer */}
                <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div>
                    Showing <span className="font-bold text-white">{filteredRoster.length}</span> of <span className="font-bold text-white">{roster.length}</span> total students across cohorts.
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Grading weights: 40% Activities &bull; 30% Exams &bull; 20% Worksheets &bull; 10% Attendance
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COHORT ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                      Cohort Performance Breakdown
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      {activeCohortName}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Select Cohort:</span>
                    <select
                      value={selectedCohortId}
                      onChange={(e) => setSelectedCohortId(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
                    >
                      <option value="all">All Active Cohorts</option>
                      {cohorts.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Primary Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                    <p className="text-xs font-bold text-slate-400 uppercase">Class GPA Average</p>
                    <p className="text-3xl font-black text-white mt-2">
                      {totalStudents > 0 
                        ? (cohortRoster.reduce((sum, s) => sum + s.gpa, 0) / totalStudents).toFixed(2)
                        : '0.00'
                      } <span className="text-sm font-normal text-slate-400">/ 4.0</span>
                    </p>
                    <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> High Academic Standing
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                    <p className="text-xs font-bold text-slate-400 uppercase">Passing Benchmark</p>
                    <p className="text-3xl font-black text-emerald-400 mt-2">{passingRate}%</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {passingStudents} out of {totalStudents} passing
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                    <p className="text-xs font-bold text-slate-400 uppercase">Latin Honors Candidates</p>
                    <p className="text-3xl font-black text-amber-400 mt-2">{honorsCount}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {totalStudents > 0 ? Math.round((honorsCount / totalStudents) * 100) : 0}% of cohort
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                    <p className="text-xs font-bold text-slate-400 uppercase">Average Attendance</p>
                    <p className="text-3xl font-black text-blue-400 mt-2">
                      {totalStudents > 0 
                        ? Math.round(cohortRoster.reduce((sum, s) => sum + s.attendancePercent, 0) / totalStudents)
                        : 0
                      }%
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Strict adherence to TVET criteria</p>
                  </div>
                </div>

                {/* Grade Distribution Bars */}
                <div>
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">
                    Grade Distribution Curve
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: 'A+ (95% - 100%) [1.00 PH]', count: gradeDistribution.A_Plus, color: 'bg-emerald-500' },
                      { label: 'A (90% - 94.9%) [1.25 PH]', count: gradeDistribution.A, color: 'bg-blue-500' },
                      { label: 'B+ (85% - 89.9%) [1.75 PH]', count: gradeDistribution.B_Plus, color: 'bg-indigo-500' },
                      { label: 'B (80% - 84.9%) [2.25 PH]', count: gradeDistribution.B, color: 'bg-cyan-500' },
                      { label: 'C (75% - 79.9%) [3.00 PH]', count: gradeDistribution.C, color: 'bg-amber-500' },
                      { label: 'F (Below 75%) [5.00 PH]', count: gradeDistribution.F, color: 'bg-rose-500' },
                    ].map((item, idx) => {
                      const pct = totalStudents > 0 ? Math.round((item.count / totalStudents) * 100) : 0;
                      return (
                        <div key={idx} className="flex items-center gap-4 text-xs">
                          <div className="w-56 text-slate-300 font-medium truncate">{item.label}</div>
                          <div className="flex-1 bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                            <div 
                              className={`h-full ${item.color} rounded-full transition-all duration-500`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <div className="w-16 text-right font-bold text-white">
                            {item.count} <span className="text-[10px] text-slate-400 font-normal">({pct}%)</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: PRINTABLE CLASS RECORD */}
          {activeTab === 'printable' && (
            <div className="space-y-6">
              <div className="flex justify-end gap-2 print:hidden">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Master Grade Sheet</span>
                </button>
              </div>

              {/* Master Sheet Container */}
              <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-300 font-serif">
                
                {/* Institutional Header */}
                <div className="border-b-2 border-slate-900 pb-6 mb-6 text-center">
                  <div className="font-sans text-xs font-black tracking-widest text-blue-700 uppercase">
                    Republic of the Philippines &bull; TVET Educational System
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight mt-1 font-sans">
                    EPICADEMY CLOUD ACADEMY
                  </h1>
                  <p className="text-xs text-slate-600 font-sans font-semibold">
                    Operated by KEZJED SOLUTIONS &bull; Academic &amp; Technical Vocational Records Section
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-sans text-slate-700">
                    <div><strong>OFFICIAL MASTER GRADE SHEET</strong></div>
                    <div><strong>COHORT:</strong> {activeCohortName}</div>
                    <div><strong>DATE GENERATED:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                </div>

                {/* Print Table */}
                <table className="w-full text-left border-collapse text-xs mb-8">
                  <thead>
                    <tr className="border-b-2 border-slate-900 font-sans text-[11px] uppercase">
                      <th className="py-2">No.</th>
                      <th className="py-2">Student Name</th>
                      <th className="py-2">Course / Track Title</th>
                      <th className="py-2 text-center">Act (40%)</th>
                      <th className="py-2 text-center">Exam (30%)</th>
                      <th className="py-2 text-center">Lab (20%)</th>
                      <th className="py-2 text-center">Att (10%)</th>
                      <th className="py-2 text-center">Final %</th>
                      <th className="py-2 text-center">Letter</th>
                      <th className="py-2 text-center">PH Equiv</th>
                      <th className="py-2 text-center">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {cohortRoster.map((s, idx) => {
                      const ph = computePhilippineGrade(s.finalNumericGrade);
                      return (
                        <tr key={s.id} className="hover:bg-slate-50">
                          <td className="py-2.5 font-sans text-slate-500">{idx + 1}</td>
                          <td className="py-2.5 font-bold font-sans">{s.studentName}</td>
                          <td className="py-2.5 font-sans text-slate-700 truncate max-w-xs">{s.trackTitle}</td>
                          <td className="py-2.5 text-center font-sans">{s.completedActivities}/12</td>
                          <td className="py-2.5 text-center font-sans">{s.examAverage}%</td>
                          <td className="py-2.5 text-center font-sans">{s.worksheetsScore}%</td>
                          <td className="py-2.5 text-center font-sans">{s.attendancePercent}%</td>
                          <td className="py-2.5 text-center font-bold font-sans">{s.finalNumericGrade}%</td>
                          <td className="py-2.5 text-center font-bold font-sans">{s.letterGrade}</td>
                          <td className="py-2.5 text-center font-bold font-sans">{ph.phGrade}</td>
                          <td className="py-2.5 text-center font-sans">
                            <span className={`font-semibold ${s.finalNumericGrade >= 75 ? 'text-emerald-700' : 'text-rose-700'}`}>
                              {s.finalNumericGrade >= 75 ? 'PASSED' : 'FAILED'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Sign-off signatures */}
                <div className="pt-8 border-t border-slate-300 grid grid-cols-2 gap-8 font-sans text-xs">
                  <div>
                    <p className="text-slate-500 mb-10">Prepared &amp; Verified By:</p>
                    <div className="border-b border-slate-900 w-64 pb-1">
                      <p className="font-bold text-slate-900 uppercase">Ronnel M. Aviguetero</p>
                    </div>
                    <p className="text-slate-600 text-[11px] mt-0.5">Lead Instructor &amp; CEO, KEZJED SOLUTIONS</p>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <p className="text-slate-500 mb-10">Concurred &amp; Recorded By:</p>
                    <div className="border-b border-slate-900 w-64 pb-1 text-center">
                      <p className="font-bold text-slate-900 uppercase">Office of the Academic Registrar</p>
                    </div>
                    <p className="text-slate-600 text-[11px] mt-0.5">Epicademy Cloud Academic Systems</p>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 4: INDIVIDUAL STUDENT REPORT CARD */}
          {activeTab === 'reportCard' && (
            <div className="space-y-6">
              
              {/* Student Selector Bar */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-bold uppercase">Select Student:</span>
                  <select
                    value={selectedStudentId || ''}
                    onChange={(e) => setSelectedStudentId(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
                  >
                    {roster.map(s => (
                      <option key={s.id} value={s.id}>{s.studentName} — {s.trackTitle.slice(0, 35)}...</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Student Grade Slip</span>
                  </button>
                  {currentSelectedStudent && onOpenCredentials && (
                    <button
                      onClick={() => onOpenCredentials(currentSelectedStudent.trackId, currentSelectedStudent.studentName, currentSelectedStudent.email)}
                      className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Credential</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Student Grade Slip Document */}
              {currentSelectedStudent ? (
                (() => {
                  const s = currentSelectedStudent;
                  const ph = computePhilippineGrade(s.finalNumericGrade);
                  return (
                    <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-300 font-serif max-w-4xl mx-auto">
                      
                      {/* Header */}
                      <div className="text-center border-b-2 border-slate-900 pb-6 mb-6">
                        <div className="font-sans text-[11px] font-black uppercase tracking-widest text-blue-700">
                          KEZJED SOLUTIONS &bull; EPICADEMY ACADEMIC REGISTRY
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight font-sans mt-1">
                          OFFICIAL STUDENT GRADE SLIP
                        </h2>
                        <p className="text-xs text-slate-600 font-sans">
                          Certificate of Academic Progress &amp; Course Competency
                        </p>
                      </div>

                      {/* Student Info Box */}
                      <div className="grid grid-cols-2 gap-4 font-sans text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                        <div>
                          <p className="text-slate-500 text-[10px] uppercase font-bold">Student Name</p>
                          <p className="text-sm font-black text-slate-900">{s.studentName}</p>
                          <p className="text-slate-600 text-[11px]">{s.email}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 text-[10px] uppercase font-bold">Enrolled Course Track</p>
                          <p className="text-sm font-bold text-slate-900">{s.trackTitle}</p>
                          <p className="text-slate-600 text-[11px]">Academic ID: {s.id.toUpperCase()}</p>
                        </div>
                      </div>

                      {/* Grade Breakdown Table */}
                      <table className="w-full text-left border-collapse text-xs mb-6 font-sans">
                        <thead>
                          <tr className="border-b-2 border-slate-900 bg-slate-100 uppercase text-[10px] tracking-wider text-slate-700">
                            <th className="py-2.5 px-3">Evaluation Component</th>
                            <th className="py-2.5 px-3 text-center">Institutional Weight</th>
                            <th className="py-2.5 px-3 text-center">Raw Score</th>
                            <th className="py-2.5 px-3 text-center">Weighted Points</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Hands-on Practical Activities &amp; Labs</td>
                            <td className="py-2.5 px-3 text-center">40%</td>
                            <td className="py-2.5 px-3 text-center">{s.completedActivities} / {s.totalActivities} ({Math.round((s.completedActivities/s.totalActivities)*100)}%)</td>
                            <td className="py-2.5 px-3 text-center font-bold">{((s.completedActivities/s.totalActivities)*40).toFixed(1)} / 40.0</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Summative Theory &amp; Code Examinations</td>
                            <td className="py-2.5 px-3 text-center">30%</td>
                            <td className="py-2.5 px-3 text-center">{s.examAverage}%</td>
                            <td className="py-2.5 px-3 text-center font-bold">{((s.examAverage/100)*30).toFixed(1)} / 30.0</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Laboratory Worksheets &amp; Deliverables</td>
                            <td className="py-2.5 px-3 text-center">20%</td>
                            <td className="py-2.5 px-3 text-center">{s.worksheetsScore}%</td>
                            <td className="py-2.5 px-3 text-center font-bold">{((s.worksheetsScore/100)*20).toFixed(1)} / 20.0</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-semibold">Attendance &amp; Professional OHS Conduct</td>
                            <td className="py-2.5 px-3 text-center">10%</td>
                            <td className="py-2.5 px-3 text-center">{s.attendancePercent}%</td>
                            <td className="py-2.5 px-3 text-center font-bold">{((s.attendancePercent/100)*10).toFixed(1)} / 10.0</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="border-t-2 border-slate-900 bg-slate-50 font-bold">
                            <td colSpan={3} className="py-3 px-3 uppercase text-right">Final Cumulative Grade:</td>
                            <td className="py-3 px-3 text-center text-sm font-black text-blue-800">{s.finalNumericGrade}%</td>
                          </tr>
                        </tfoot>
                      </table>

                      {/* Transmuted Grades Summary */}
                      <div className="grid grid-cols-3 gap-3 font-sans text-center mb-8">
                        <div className="border border-slate-300 p-3 rounded-xl">
                          <p className="text-[10px] text-slate-500 uppercase font-bold">Letter Grade</p>
                          <p className="text-xl font-black text-slate-900 mt-0.5">{s.letterGrade}</p>
                        </div>
                        <div className="border border-slate-300 p-3 rounded-xl bg-amber-50/50 border-amber-200">
                          <p className="text-[10px] text-amber-800 uppercase font-bold">PH Rating Equiv.</p>
                          <p className="text-xl font-black text-amber-900 mt-0.5">{ph.phGrade}</p>
                          <p className="text-[9px] text-amber-700">{ph.description}</p>
                        </div>
                        <div className="border border-slate-300 p-3 rounded-xl">
                          <p className="text-[10px] text-slate-500 uppercase font-bold">Academic Standing</p>
                          <p className="text-sm font-black text-indigo-900 mt-1">{s.academicStanding}</p>
                        </div>
                      </div>

                      {/* Instructor Remarks */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8 font-sans text-xs">
                        <p className="font-bold text-slate-800 uppercase text-[10px] mb-1">Lead Instructor Remarks:</p>
                        <p className="text-slate-700 italic">
                          "{s.studentName} has demonstrated exceptional command of technical concepts in {s.trackTitle}. Satisfies all institutional competency rubrics and training standards prescribed under KEZJED SOLUTIONS and TESDA regulations."
                        </p>
                      </div>

                      {/* Signature Lines */}
                      <div className="pt-8 border-t border-slate-300 grid grid-cols-2 gap-8 font-sans text-xs">
                        <div>
                          <div className="border-b border-slate-900 w-56 pb-1">
                            <p className="font-bold text-slate-900 uppercase">Ronnel M. Aviguetero</p>
                          </div>
                          <p className="text-slate-600 text-[10px] mt-0.5">Lead Instructor / Founder</p>
                        </div>

                        <div className="text-right flex flex-col items-end">
                          <div className="border-b border-slate-900 w-56 pb-1 text-center">
                            <p className="font-bold text-slate-900 uppercase">Verified Official Seal</p>
                          </div>
                          <p className="text-slate-600 text-[10px] mt-0.5">EPIC-REG-2026-CERTIFIED</p>
                        </div>
                      </div>

                    </div>
                  );
                })()
              ) : (
                <div className="text-center py-12 text-slate-500">
                  <p>Please select a student from the dropdown above to view their grade slip.</p>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

      {/* EDIT STUDENT MODAL */}
      {isEditModalOpen && editingStudent && (
        <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <h3 className="font-bold text-white text-base">Edit Scores: {editingStudent.studentName}</h3>
                <p className="text-xs text-slate-400">{editingStudent.trackTitle}</p>
              </div>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedStudent} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  Completed Activities ({editingStudent.completedActivities} / {editingStudent.totalActivities}) — 40% Weight
                </label>
                <input
                  type="range"
                  min="0"
                  max={editingStudent.totalActivities}
                  value={editingStudent.completedActivities}
                  onChange={(e) => setEditingStudent({ ...editingStudent, completedActivities: parseInt(e.target.value) || 0 })}
                  className="w-full cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  Summative Exam Average: {editingStudent.examAverage}% — 30% Weight
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={editingStudent.examAverage}
                  onChange={(e) => setEditingStudent({ ...editingStudent, examAverage: parseInt(e.target.value) || 0 })}
                  className="w-full cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  Laboratory Worksheets: {editingStudent.worksheetsScore}% — 20% Weight
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={editingStudent.worksheetsScore}
                  onChange={(e) => setEditingStudent({ ...editingStudent, worksheetsScore: parseInt(e.target.value) || 0 })}
                  className="w-full cursor-pointer accent-purple-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  Attendance &amp; OHS Conduct: {editingStudent.attendancePercent}% — 10% Weight
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={editingStudent.attendancePercent}
                  onChange={(e) => setEditingStudent({ ...editingStudent, attendancePercent: parseInt(e.target.value) || 0 })}
                  className="w-full cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Dynamic Preview Calculation */}
              {(() => {
                const actScore = (editingStudent.completedActivities / editingStudent.totalActivities) * 100;
                const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
                  actScore,
                  editingStudent.examAverage,
                  editingStudent.worksheetsScore,
                  editingStudent.attendancePercent
                );
                const standing = computeAcademicStanding(finalNumericGrade);
                const ph = computePhilippineGrade(finalNumericGrade);

                return (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Projected Final Grade</p>
                    <p className="text-2xl font-black text-emerald-400">{finalNumericGrade}% ({letterGrade})</p>
                    <p className="text-xs text-amber-300 font-bold">PH Rating: {ph.phGrade} ({ph.description}) &bull; GPA: {gpa}</p>
                    <p className="text-[11px] text-indigo-400 font-semibold">{standing}</p>
                  </div>
                );
              })()}

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl cursor-pointer shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ENROLL STUDENT MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <h3 className="font-bold text-white text-base">Enroll New Scholar</h3>
                <p className="text-xs text-slate-400">Add student to an official cohort roster</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNewStudent} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Maria Katrina Velasco"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Student Email Address *</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="e.g. maria.velasco@epicademy.ph"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Assign Cohort</label>
                <select
                  value={newCohortId}
                  onChange={(e) => setNewCohortId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  {cohorts.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Enrolled Course Track</label>
                <select
                  value={newTrackId}
                  onChange={(e) => {
                    setNewTrackId(e.target.value);
                    const selected = e.target.options[e.target.selectedIndex].text;
                    setNewTrackTitle(selected);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="track-level-1-html-foundations">Level 1: Modern HTML5 Fundamentals &amp; Semantic Web</option>
                  <option value="track-level-2-css-mastery">Level 2: Modern CSS3 Mastery, Flexbox &amp; Grid</option>
                  <option value="track-level-5-react-ts">Level 5: Modern React 19, TypeScript &amp; Architecture</option>
                  <option value="track-level-9-fullstack-ai-hero">Level 9: Full-Stack AI SaaS Capstone</option>
                  <option value="track-tesda-css-nc2">Computer Systems Servicing (CSS) NC II Masterclass</option>
                  <option value="track-pinoy-drum-zero-to-hero">Pinoy Drum Masterclass Zero-to-Hero</option>
                  <option value="track-pinoy-piano-zero-to-hero">Pinoy Piano Masterclass Zero-to-Hero</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-slate-400 text-[11px] mb-1">Activities % (40% Weight)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newActScore}
                    onChange={(e) => setNewActScore(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[11px] mb-1">Exam Score % (30% Weight)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newExamScore}
                    onChange={(e) => setNewExamScore(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[11px] mb-1">Worksheets % (20% Weight)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newWorksheetScore}
                    onChange={(e) => setNewWorksheetScore(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[11px] mb-1">Attendance % (10% Weight)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newAttendance}
                    onChange={(e) => setNewAttendance(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl cursor-pointer shadow-md"
                >
                  Enroll Scholar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
