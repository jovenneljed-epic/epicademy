export interface CohortItem {
  id: string;
  name: string;
  term: string;
  startDate: string;
  endDate: string;
  leadInstructor: string;
  totalStudents: number;
}

export interface StudentGradeRecord {
  id: string;
  studentName: string;
  email: string;
  cohortId: string;
  trackId: string;
  trackTitle: string;
  progressPercent: number;
  completedActivities: number;
  totalActivities: number;
  examAverage: number;
  worksheetsScore: number;
  attendancePercent: number;
  finalNumericGrade: number;
  letterGrade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
  gpa: number;
  academicStanding: 'Summa Cum Laude' | 'Magna Cum Laude' | 'Cum Laude' | 'Good Standing' | 'Academic Probation';
  certificateIssued: boolean;
  certificateId?: string;
  lastActive: string;
}

export const INITIAL_COHORTS: CohortItem[] = [
  {
    id: 'cohort-2026-a',
    name: 'Batch 2026-A: Enterprise Web & Cloud Cohort',
    term: 'First Semester 2026',
    startDate: 'Feb 1, 2026',
    endDate: 'May 30, 2026',
    leadInstructor: 'Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS',
    totalStudents: 0,
  },
  {
    id: 'cohort-2026-b',
    name: 'Batch 2026-B: Full-Stack AI SaaS Hero Cohort',
    term: 'Second Semester 2026',
    startDate: 'Jun 1, 2026',
    endDate: 'Sep 30, 2026',
    leadInstructor: 'Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS',
    totalStudents: 0,
  },
  {
    id: 'cohort-tesda-css-08',
    name: 'TESDA CSS NC II Vocational Tech Batch 08',
    term: 'TVET Institutional Cycle 2026',
    startDate: 'Jan 15, 2026',
    endDate: 'Apr 30, 2026',
    leadInstructor: 'Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS',
    totalStudents: 0,
  },
];

export const INITIAL_STUDENT_ROSTER: StudentGradeRecord[] = [];

export const STORAGE_KEY_ROSTER = 'epicademy_gradebook_roster_v3';
export const STORAGE_KEY_COHORTS = 'epicademy_gradebook_cohorts_v3';

export function getStoredRoster(): StudentGradeRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ROSTER);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Filter out old demo ids if any carried over
    return parsed.filter(s => !s.id?.startsWith('stu-10'));
  } catch {
    return [];
  }
}

export function saveStoredRoster(roster: StudentGradeRecord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_ROSTER, JSON.stringify(roster));
  } catch (e) {
    console.error('Failed to save roster to localStorage:', e);
  }
}

export function enrollStudentInRoster(params: {
  studentName: string;
  email: string;
  cohortId?: string;
  trackId?: string;
  trackTitle?: string;
}): StudentGradeRecord {
  const currentRoster = getStoredRoster();
  const cleanEmail = params.email.trim().toLowerCase();

  // Check if student is already enrolled
  const existingIndex = currentRoster.findIndex(s => s.email.toLowerCase() === cleanEmail);
  if (existingIndex >= 0) {
    // If track or name provided, update it
    const existing = currentRoster[existingIndex];
    const updated = {
      ...existing,
      studentName: params.studentName || existing.studentName,
      trackId: params.trackId || existing.trackId,
      trackTitle: params.trackTitle || existing.trackTitle,
      cohortId: params.cohortId || existing.cohortId,
      lastActive: 'Just now'
    };
    currentRoster[existingIndex] = updated;
    saveStoredRoster(currentRoster);
    return updated;
  }

  const defaultCohort = params.cohortId || INITIAL_COHORTS[0].id;
  const defaultTrackId = params.trackId || 'track-level-1-html-foundations';
  const defaultTrackTitle = params.trackTitle || 'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture';

  const newStudent: StudentGradeRecord = {
    id: `stu-${Date.now().toString().slice(-6)}`,
    studentName: params.studentName || cleanEmail.split('@')[0].toUpperCase(),
    email: cleanEmail,
    cohortId: defaultCohort,
    trackId: defaultTrackId,
    trackTitle: defaultTrackTitle,
    progressPercent: 0,
    completedActivities: 0,
    totalActivities: 12,
    examAverage: 0,
    worksheetsScore: 0,
    attendancePercent: 100,
    finalNumericGrade: 10, // 10% attendance initially
    letterGrade: 'F',
    gpa: 0.0,
    academicStanding: 'Good Standing',
    certificateIssued: false,
    lastActive: 'Just now'
  };

  const updatedRoster = [newStudent, ...currentRoster];
  saveStoredRoster(updatedRoster);

  return newStudent;
}

export function computeWeightedGrade(
  activityScore: number,
  examScore: number,
  worksheetScore: number,
  attendanceScore: number
): { finalNumericGrade: number; letterGrade: StudentGradeRecord['letterGrade']; gpa: number } {
  // 40% Activities, 30% Exams, 20% Worksheets, 10% Attendance
  const finalNumericGrade = Math.round(
    (activityScore * 0.4 + examScore * 0.3 + worksheetScore * 0.2 + attendanceScore * 0.1) * 10
  ) / 10;

  let letterGrade: StudentGradeRecord['letterGrade'] = 'F';
  let gpa = 0.0;

  if (finalNumericGrade >= 95) {
    letterGrade = 'A+';
    gpa = 4.0;
  } else if (finalNumericGrade >= 90) {
    letterGrade = 'A';
    gpa = 3.75;
  } else if (finalNumericGrade >= 85) {
    letterGrade = 'B+';
    gpa = 3.5;
  } else if (finalNumericGrade >= 80) {
    letterGrade = 'B';
    gpa = 3.0;
  } else if (finalNumericGrade >= 75) {
    letterGrade = 'C';
    gpa = 2.0;
  } else {
    letterGrade = 'F';
    gpa = 0.0;
  }

  return { finalNumericGrade, letterGrade, gpa };
}

export function computeAcademicStanding(
  finalNumericGrade: number
): StudentGradeRecord['academicStanding'] {
  if (finalNumericGrade >= 97) return 'Summa Cum Laude';
  if (finalNumericGrade >= 94) return 'Magna Cum Laude';
  if (finalNumericGrade >= 90) return 'Cum Laude';
  if (finalNumericGrade >= 75) return 'Good Standing';
  return 'Academic Probation';
}

export function computePhilippineGrade(finalNumericGrade: number): {
  phGrade: string;
  description: string;
} {
  if (finalNumericGrade >= 97) return { phGrade: '1.00', description: 'Excellent' };
  if (finalNumericGrade >= 94) return { phGrade: '1.25', description: 'Superior' };
  if (finalNumericGrade >= 91) return { phGrade: '1.50', description: 'Very Good' };
  if (finalNumericGrade >= 88) return { phGrade: '1.75', description: 'Good' };
  if (finalNumericGrade >= 85) return { phGrade: '2.00', description: 'Above Average' };
  if (finalNumericGrade >= 82) return { phGrade: '2.25', description: 'Average' };
  if (finalNumericGrade >= 79) return { phGrade: '2.50', description: 'Fair' };
  if (finalNumericGrade >= 76) return { phGrade: '2.75', description: 'Passing' };
  if (finalNumericGrade >= 75) return { phGrade: '3.00', description: 'Passed' };
  return { phGrade: '5.00', description: 'Failed / Incomplete' };
}

export function exportRosterToCSV(roster: StudentGradeRecord[], cohortName: string = 'All_Cohorts') {
  const headers = [
    'Student ID',
    'Student Name',
    'Email',
    'Cohort',
    'Track Title',
    'Progress (%)',
    'Activities Score',
    'Exams Score (30%)',
    'Worksheets Score (20%)',
    'Attendance (%) (10%)',
    'Final Grade (%)',
    'Letter Grade',
    'US GPA (4.0)',
    'PH Grade (1.00-5.00)',
    'Academic Standing',
    'Certificate Issued',
    'Certificate ID',
    'Last Active'
  ];

  const rows = roster.map(s => {
    const ph = computePhilippineGrade(s.finalNumericGrade);
    return [
      `"${s.id}"`,
      `"${s.studentName.replace(/"/g, '""')}"`,
      `"${s.email}"`,
      `"${s.cohortId}"`,
      `"${s.trackTitle.replace(/"/g, '""')}"`,
      s.progressPercent,
      s.completedActivities,
      s.examAverage,
      s.worksheetsScore,
      s.attendancePercent,
      s.finalNumericGrade,
      s.letterGrade,
      s.gpa,
      ph.phGrade,
      `"${s.academicStanding}"`,
      s.certificateIssued ? 'YES' : 'NO',
      `"${s.certificateId || 'N/A'}"`,
      `"${s.lastActive}"`
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const sanitizedCohort = cohortName.replace(/[^a-zA-Z0-9_-]/g, '_');
  link.setAttribute('href', url);
  link.setAttribute('download', `epicademy_gradebook_${sanitizedCohort}_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

