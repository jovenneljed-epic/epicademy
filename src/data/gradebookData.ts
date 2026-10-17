import { supabase } from '../lib/supabaseClient';

export interface CohortItem {
  id: string;
  name: string;
  term: string;
  startDate: string;
  endDate: string;
  leadInstructor: string;
  totalStudents: number;
}

export type StudentStatus = 'Active' | 'In Review' | 'Completed' | 'Academic Probation' | 'Dropped';

export interface StudentGradeRecord {
  id: string;
  lrn: string; // 12-digit DepEd/TESDA Learner Reference Number
  studentName: string;
  email: string;
  phone?: string;
  enrollmentDate: string;
  status: StudentStatus;
  tags: string[]; // Systeme.io contact tags
  cohortId: string;
  trackId: string;
  trackTitle: string;
  progressPercent: number;
  completedActivities: number;
  totalActivities: number;
  examAverage: number;
  worksheetsScore: number;
  attendancePercent: number;
  sf2AttendanceDays: Record<number, 'P' | 'A' | 'T' | 'E'>; // Days 1 to 20 for official DepEd SF2
  finalNumericGrade: number;
  letterGrade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
  gpa: number;
  philippineGrade?: string;
  academicStanding: 'Summa Cum Laude' | 'Magna Cum Laude' | 'Cum Laude' | 'Good Standing' | 'Academic Probation';
  certificateIssued: boolean;
  certificateId?: string;
  certificateIssuedDate?: string;
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
    totalStudents: 1,
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

// Generate standard 12-digit Philippine Learner Reference Number (LRN)
export function generateLrn(email?: string): string {
  if (email) {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = (hash * 31 + email.charCodeAt(i)) >>> 0;
    }
    const base = '10' + (hash % 10000000000).toString().padStart(10, '8');
    return base.slice(0, 12);
  }
  return '10' + Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10);
}

// Generate default 20-day SF2 attendance matrix (P = Present, A = Absent, T = Tardy, E = Excused)
export function getDefaultSf2Days(attendancePercent: number = 95): Record<number, 'P' | 'A' | 'T' | 'E'> {
  const days: Record<number, 'P' | 'A' | 'T' | 'E'> = {};
  for (let d = 1; d <= 20; d++) {
    if (attendancePercent < 75 && (d === 4 || d === 5 || d === 6 || d === 12)) {
      days[d] = 'A';
    } else if (attendancePercent < 85 && (d === 7 || d === 15)) {
      days[d] = 'T';
    } else {
      days[d] = 'P';
    }
  }
  return days;
}

export function getStoredRoster(): StudentGradeRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ROSTER);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Ensure all records have LRN and SF2 days populated
    return parsed
      .filter((s: any) => !s.id?.startsWith('stu-10'))
      .map((s: any) => ({
        ...s,
        lrn: s.lrn || generateLrn(s.email),
        status: s.status || 'Active',
        tags: Array.isArray(s.tags) && s.tags.length > 0 ? s.tags : ['Enrolled Scholar', 'Student'],
        sf2AttendanceDays: s.sf2AttendanceDays || getDefaultSf2Days(s.attendancePercent || 95),
        philippineGrade: s.philippineGrade || computePhilippineGrade(s.finalNumericGrade || 85).phGrade,
      }));
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

// Synchronize Master Roster with live Supabase database profiles & enrollments
export async function syncRosterWithSupabase(): Promise<StudentGradeRecord[]> {
  const currentRoster = getStoredRoster();
  const rosterMap = new Map<string, StudentGradeRecord>();
  currentRoster.forEach(s => rosterMap.set(s.email.toLowerCase().trim(), s));

  try {
    // 1. Fetch live profiles from Supabase
    const { data: profiles, error: pErr } = await supabase
      .from('profiles')
      .select('*');

    if (pErr) {
      console.warn('Supabase profiles query note in gradebook:', pErr);
    }

    // 2. Fetch live enrollments from Supabase
    const { data: enrollments, error: eErr } = await supabase
      .from('enrollments')
      .select('*');

    if (eErr) {
      console.warn('Supabase enrollments query note in gradebook:', eErr);
    }

    const enrollmentMap = new Map<string, string>();
    (enrollments || []).forEach((e: any) => {
      if (e.user_email && e.track_id) {
        enrollmentMap.set(e.user_email.toLowerCase().trim(), e.track_id);
      }
    });

    // 3. Process active student profiles (excluding deleted tombstones)
    const studentProfiles = (profiles || []).filter((p: any) => {
      const email = (p.email || '').toLowerCase().trim();
      if (!email || email.includes('@epicademy.deleted') || p.bio === 'DELETED') return false;
      if (p.is_verified === false) return false;
      return p.role === 'student' || enrollmentMap.has(email);
    });

    studentProfiles.forEach((prof: any) => {
      const email = prof.email.toLowerCase().trim();
      const enrolledTrackId = enrollmentMap.get(email) || 'track-pinoy-piano-zero-to-hero';
      
      let trackTitle = 'Pinoy Piano & Church Keyboard Masterclass: Zero to Hero';
      if (enrolledTrackId.includes('drum')) {
        trackTitle = 'Pinoy Drum Masterclass: Zero to Hero Professional Drumming';
      } else if (enrolledTrackId.includes('lead-guitar')) {
        trackTitle = 'Pinoy Lead Guitar Masterclass: Zero to Hero Lead Guitarist';
      } else if (enrolledTrackId.includes('guitar')) {
        trackTitle = 'Pinoy Rhythm Guitar Masterclass: Zero to Hero Rhythm Guitarist';
      } else if (enrolledTrackId.includes('tesda') || enrolledTrackId.includes('css')) {
        trackTitle = 'TESDA Computer Systems Servicing (CSS) NC II Technical Diploma';
      } else if (enrolledTrackId.includes('html') || enrolledTrackId.includes('level-1')) {
        trackTitle = 'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture';
      }

      // Check if user has completed lessons in localStorage
      let completedLessonsCount = 0;
      try {
        const rawLessons = localStorage.getItem(`epicademy_completed_lessons_${email}`);
        if (rawLessons) {
          const parsed = JSON.parse(rawLessons);
          completedLessonsCount = Object.values(parsed).filter(Boolean).length;
        }
      } catch {}

      const existing = rosterMap.get(email);
      if (existing) {
        // Update existing record with any live Supabase changes
        const updatedProgress = Math.max(existing.progressPercent, Math.min(100, Math.round((completedLessonsCount / 24) * 100)));
        const updatedActivities = Math.max(existing.completedActivities, completedLessonsCount);
        const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(
          existing.completedActivities > 0 ? (existing.completedActivities / existing.totalActivities) * 100 : existing.examAverage,
          existing.examAverage,
          existing.worksheetsScore,
          existing.attendancePercent
        );
        const ph = computePhilippineGrade(finalNumericGrade);
        const standing = computeAcademicStanding(finalNumericGrade);

        rosterMap.set(email, {
          ...existing,
          studentName: prof.full_name || existing.studentName,
          trackId: enrolledTrackId || existing.trackId,
          trackTitle: trackTitle || existing.trackTitle,
          progressPercent: updatedProgress > 0 ? updatedProgress : existing.progressPercent,
          completedActivities: updatedActivities > 0 ? updatedActivities : existing.completedActivities,
          lrn: existing.lrn || generateLrn(email),
          status: existing.status || 'Active',
          finalNumericGrade,
          letterGrade,
          gpa,
          academicStanding: standing,
          tags: existing.tags && existing.tags.length > 0 ? existing.tags : ['Enrolled Scholar', 'Student', 'Batch 2026-A'],
          enrollmentDate: existing.enrollmentDate || (prof.created_at ? new Date(prof.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Oct 17, 2026'),
          sf2AttendanceDays: existing.sf2AttendanceDays || getDefaultSf2Days(existing.attendancePercent),
          philippineGrade: ph.phGrade,
        });
      } else {
        // Instantiate new record for enrolled student
        const actScore = completedLessonsCount > 0 ? Math.min(100, Math.round((completedLessonsCount / 24) * 100)) : 88;
        const examScore = 90;
        const worksheetScore = 92;
        const attendanceScore = 98;
        const { finalNumericGrade, letterGrade, gpa } = computeWeightedGrade(actScore, examScore, worksheetScore, attendanceScore);
        const ph = computePhilippineGrade(finalNumericGrade);
        const standing = computeAcademicStanding(finalNumericGrade);
        const lrn = generateLrn(email);
        const enrollDate = prof.created_at ? new Date(prof.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Oct 17, 2026';

        const newStudent: StudentGradeRecord = {
          id: prof.id || `stu-${Date.now().toString().slice(-4)}`,
          lrn,
          studentName: prof.full_name || email.split('@')[0].toUpperCase(),
          email,
          phone: '+63 9' + Math.floor(100000000 + Math.random() * 900000000).toString(),
          enrollmentDate: enrollDate,
          status: 'Active',
          tags: ['Enrolled Scholar', 'Student', 'Batch 2026-A'],
          cohortId: INITIAL_COHORTS[0].id,
          trackId: enrolledTrackId,
          trackTitle,
          progressPercent: Math.min(100, Math.round((completedLessonsCount / 24) * 100)),
          completedActivities: completedLessonsCount > 0 ? completedLessonsCount : 10,
          totalActivities: 12,
          examAverage: examScore,
          worksheetsScore: worksheetScore,
          attendancePercent: attendanceScore,
          sf2AttendanceDays: getDefaultSf2Days(attendanceScore),
          finalNumericGrade,
          letterGrade,
          gpa,
          philippineGrade: ph.phGrade,
          academicStanding: standing,
          certificateIssued: finalNumericGrade >= 75,
          certificateId: `EPIC-CERT-2026-${enrolledTrackId.replace('track-', '').slice(0, 8).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`,
          certificateIssuedDate: 'October 17, 2026',
          lastActive: 'Just now',
        };
        rosterMap.set(email, newStudent);
      }
    });

    const merged = Array.from(rosterMap.values());
    saveStoredRoster(merged);
    return merged;
  } catch (err) {
    console.error('Failed to sync roster with Supabase:', err);
    return currentRoster;
  }
}

export function enrollStudentInRoster(params: {
  studentName: string;
  email: string;
  phone?: string;
  lrn?: string;
  tags?: string[];
  cohortId?: string;
  trackId?: string;
  trackTitle?: string;
}): StudentGradeRecord {
  const currentRoster = getStoredRoster();
  const cleanEmail = params.email.trim().toLowerCase();

  const existingIndex = currentRoster.findIndex(s => s.email.toLowerCase() === cleanEmail);
  if (existingIndex >= 0) {
    const existing = currentRoster[existingIndex];
    const updated: StudentGradeRecord = {
      ...existing,
      studentName: params.studentName || existing.studentName,
      phone: params.phone || existing.phone,
      lrn: params.lrn || existing.lrn || generateLrn(cleanEmail),
      tags: params.tags || existing.tags,
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
  const defaultTrackId = params.trackId || 'track-pinoy-piano-zero-to-hero';
  const defaultTrackTitle = params.trackTitle || 'Pinoy Piano & Church Keyboard Masterclass: Zero to Hero';

  const newStudent: StudentGradeRecord = {
    id: `stu-${Date.now().toString().slice(-6)}`,
    lrn: params.lrn || generateLrn(cleanEmail),
    studentName: params.studentName || cleanEmail.split('@')[0].toUpperCase(),
    email: cleanEmail,
    phone: params.phone || '+63 912 345 6789',
    enrollmentDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Active',
    tags: params.tags && params.tags.length > 0 ? params.tags : ['Enrolled Scholar', 'Student', 'Batch 2026-A'],
    cohortId: defaultCohort,
    trackId: defaultTrackId,
    trackTitle: defaultTrackTitle,
    progressPercent: 0,
    completedActivities: 0,
    totalActivities: 12,
    examAverage: 90,
    worksheetsScore: 90,
    attendancePercent: 100,
    sf2AttendanceDays: getDefaultSf2Days(100),
    finalNumericGrade: 85,
    letterGrade: 'B+',
    gpa: 3.5,
    philippineGrade: '2.00',
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
    'LRN (12 Digits)',
    'Student Name',
    'Email',
    'Phone',
    'Status',
    'Tags',
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
      `"${s.lrn || generateLrn(s.email)}"`,
      `"${s.studentName.replace(/"/g, '""')}"`,
      `"${s.email}"`,
      `"${s.phone || 'N/A'}"`,
      `"${s.status || 'Active'}"`,
      `"${(s.tags || []).join(';')}"`,
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
