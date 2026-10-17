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

export type AttendanceStatusCode = 'P' | 'A' | 'T' | 'E' | '--';

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
  sf2AttendanceDays: Record<number, AttendanceStatusCode>; // Days 1 to 20 for official DepEd SF2
  finalNumericGrade: number;
  letterGrade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F' | 'IP';
  gpa: number;
  philippineGrade?: string;
  academicStanding: string;
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

// Generate real 20-day SF2 attendance matrix based on conducted school days
export function getRealSf2Days(attendedDays: number = 1): Record<number, AttendanceStatusCode> {
  const days: Record<number, AttendanceStatusCode> = {};
  for (let d = 1; d <= 20; d++) {
    if (d <= attendedDays) {
      days[d] = 'P';
    } else {
      days[d] = '--';
    }
  }
  return days;
}

export function getDefaultSf2Days(_attendancePercent: number = 100): Record<number, AttendanceStatusCode> {
  return getRealSf2Days(1);
}

export function computeRealAttendancePercent(sf2Days: Record<number, AttendanceStatusCode>): number {
  let conducted = 0;
  let present = 0;
  for (let d = 1; d <= 20; d++) {
    const code = sf2Days[d];
    if (code && code !== '--') {
      conducted++;
      if (code === 'P' || code === 'T' || code === 'E') {
        present++;
      }
    }
  }
  if (conducted === 0) return 100;
  return Math.round((present / conducted) * 100);
}

// ==========================================
// Curriculum Plan & Program of Study
// ==========================================
export interface CurriculumSubjectPlan {
  code: string;
  title: string;
  units: number;
  lecHours: number;
  labHours: number;
  prerequisite: string;
  term: string;
  status: 'In Progress' | 'Completed' | 'Locked';
  lessonsCount: number;
  completedLessons: number;
  numericGrade?: number;
  phGrade?: string;
  remarks: string;
}

export interface StudentCurriculumPlan {
  programId: string;
  programTitle: string;
  degreeCode: string;
  department: string;
  accreditingBody: string;
  totalCurriculumUnits: number;
  earnedUnits: number;
  overallProgressPercent: number;
  activeSubjectCode: string;
  subjects: CurriculumSubjectPlan[];
}

export function getStudentCurriculumPlan(
  trackId: string = 'track-pinoy-piano-zero-to-hero',
  completedLessonsCount: number = 0,
  realExamAverage: number = 0
): StudentCurriculumPlan {
  let programTitle = 'Pinoy Piano & Church Keyboard Masterclass: Zero to Hero';
  let degreeCode = 'PNO-CERT';
  let department = 'Department of Church Music & Sacred Arts';
  let accreditingBody = 'CHED & Philippine Sacred Music Conservatory Standards';
  let baseSubjects = [
    { code: 'MUS-101', title: 'Keyboard Geography, Posture & White/Black Keys', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'None (Entry Level)', term: 'Term 1', lessonsCount: 4 },
    { code: 'MUS-102', title: 'The 7 Major & Minor Triads & Finger Dexterity', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'MUS-101', term: 'Term 1', lessonsCount: 4 },
    { code: 'MUS-103', title: 'Triad Inversions, Slash Chords & Left-Hand Bass Octaves', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'MUS-102', term: 'Term 2', lessonsCount: 4 },
    { code: 'MUS-104', title: 'Nashville Number System 1-7 & Church Transposition', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'MUS-103', term: 'Term 2', lessonsCount: 4 },
    { code: 'MUS-105', title: 'Modern Worship Flow, Talk Music & Ambient Pad Layers', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'MUS-104', term: 'Term 3', lessonsCount: 4 },
    { code: 'MUS-106', title: 'Gospel Passing Chords (2-5-1), Reharm & Recital Capstone', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'MUS-105', term: 'Term 3', lessonsCount: 4 },
  ];

  if (trackId.includes('drum')) {
    programTitle = 'Pinoy Drum Masterclass: Zero to Hero Professional Drumming';
    degreeCode = 'DRM-CERT';
    department = 'Department of Percussion Studies';
    accreditingBody = 'Philippine Guild of Drummers & Contemporary Arts';
    baseSubjects = [
      { code: 'DRM-101', title: 'Acoustic & Electronic Drum Kit Geography & Setup', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'None (Entry Level)', term: 'Term 1', lessonsCount: 4 },
      { code: 'DRM-102', title: 'Fundamental Rock, Pop & Contemporary Worship Beats', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'DRM-101', term: 'Term 1', lessonsCount: 4 },
      { code: 'DRM-103', title: '16th-Note Subdivision, Snare Ghost Notes & Fills', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'DRM-102', term: 'Term 2', lessonsCount: 4 },
      { code: 'DRM-104', title: 'Ear Training "Sipra sa Tenga" & Metronome Discipline', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'DRM-103', term: 'Term 2', lessonsCount: 4 },
      { code: 'DRM-105', title: 'Double Bass Drumming, Polyrhythms & Linear Chops', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'DRM-104', term: 'Term 3', lessonsCount: 4 },
      { code: 'DRM-106', title: 'Live Stage Performance & Worship Clinic Capstone', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'DRM-105', term: 'Term 3', lessonsCount: 4 },
    ];
  } else if (trackId.includes('lead-guitar') || trackId.includes('guitar')) {
    programTitle = 'Pinoy Guitar Masterclass: Rhythm & Lead Virtuosity';
    degreeCode = 'GTR-CERT';
    department = 'Department of String Instruments & Guitar Arts';
    accreditingBody = 'CHED & Philippine Acoustic Fellowship';
    baseSubjects = [
      { code: 'GTR-101', title: 'Fretboard Geography, Open Chords & Strumming Mechanics', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'None (Entry Level)', term: 'Term 1', lessonsCount: 4 },
      { code: 'GTR-102', title: 'Barre Chords, Palm Muting, Reggae Skanks & Comping', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'GTR-101', term: 'Term 1', lessonsCount: 4 },
      { code: 'GTR-103', title: 'Alternate Picking, Pitch Bending & Vocal Vibrato', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'GTR-102', term: 'Term 2', lessonsCount: 4 },
      { code: 'GTR-104', title: 'Pentatonic Boxes 1-5, Speed Drills & Blues Scales', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'GTR-103', term: 'Term 2', lessonsCount: 4 },
      { code: 'GTR-105', title: 'CAGED Soloing System, Modes & Dotted-8th Delay Swells', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'GTR-104', term: 'Term 3', lessonsCount: 4 },
      { code: 'GTR-106', title: 'Rivermaya "214" & Pinoy Rock Guitar Soloing Capstone', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'GTR-105', term: 'Term 3', lessonsCount: 4 },
    ];
  } else if (trackId.includes('tesda') || trackId.includes('css')) {
    programTitle = 'Computer Systems Servicing (CSS) NC II Technical Diploma';
    degreeCode = 'TESDA-CSS-NC2';
    department = 'Information & Communications Technology (ICT)';
    accreditingBody = 'Technical Education and Skills Development Authority (TESDA)';
    baseSubjects = [
      { code: 'COC-1', title: 'Install and Configure Computer Systems (ICCS)', units: 4.0, lecHours: 40, labHours: 60, prerequisite: 'Basic Computer Literacy', term: 'Cycle 1', lessonsCount: 6 },
      { code: 'COC-2', title: 'Set-up Computer Networks (SUCN)', units: 4.0, lecHours: 40, labHours: 60, prerequisite: 'COC-1', term: 'Cycle 2', lessonsCount: 6 },
      { code: 'COC-3', title: 'Set-up Computer Servers (SUCS)', units: 4.0, lecHours: 40, labHours: 60, prerequisite: 'COC-2', term: 'Cycle 3', lessonsCount: 6 },
      { code: 'COC-4', title: 'Maintain and Repair Computer Systems and Networks (MRCSN)', units: 4.0, lecHours: 40, labHours: 60, prerequisite: 'COC-3', term: 'Cycle 4', lessonsCount: 6 },
    ];
  } else if (trackId.includes('html') || trackId.includes('level-1')) {
    programTitle = 'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture';
    degreeCode = 'CS-WEB-01';
    department = 'Department of Computer Science & Software Engineering';
    accreditingBody = 'CHED Technical Committee for Information Technology';
    baseSubjects = [
      { code: 'CS-101', title: 'Modern HTML5 Fundamentals & Semantic Web Architecture', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'None (Entry Level)', term: 'Term 1', lessonsCount: 4 },
      { code: 'CS-102', title: 'CSS3 Modern Styling, Flexbox, Grid & Responsive UI', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'CS-101', term: 'Term 1', lessonsCount: 4 },
      { code: 'CS-103', title: 'Modern JavaScript ES6+, DOM Engines & State Management', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'CS-102', term: 'Term 2', lessonsCount: 4 },
      { code: 'CS-104', title: 'Asynchronous Architecture, Fetch Engines & REST APIs', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'CS-103', term: 'Term 2', lessonsCount: 4 },
      { code: 'CS-105', title: 'React 19 & TypeScript Production Component Systems', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'CS-104', term: 'Term 3', lessonsCount: 4 },
      { code: 'CS-106', title: 'Full-Stack Supabase Cloud Backend & AI SaaS Hero Capstone', units: 3.0, lecHours: 4, labHours: 6, prerequisite: 'CS-105', term: 'Term 3', lessonsCount: 4 },
    ];
  }

  let totalCurriculumUnits = 0;
  let earnedUnits = 0;
  let remainingCompletedLessons = completedLessonsCount;
  let activeSubjectCode = baseSubjects[0].code;

  const subjects: CurriculumSubjectPlan[] = baseSubjects.map((sub, idx) => {
    totalCurriculumUnits += sub.units;
    let status: 'In Progress' | 'Completed' | 'Locked' = 'Locked';
    let subCompleted = 0;
    let remarks = `Prerequisite: ${sub.prerequisite}`;
    let phGrade = '--';
    let numericGrade: number | undefined = undefined;

    if (idx === 0 && completedLessonsCount === 0) {
      status = 'In Progress';
      subCompleted = 0;
      remarks = 'Currently Enrolled (Starting Journey)';
      phGrade = 'IP';
    } else if (remainingCompletedLessons >= sub.lessonsCount) {
      status = 'Completed';
      subCompleted = sub.lessonsCount;
      remainingCompletedLessons -= sub.lessonsCount;
      earnedUnits += sub.units;
      numericGrade = realExamAverage > 0 ? realExamAverage : 88;
      phGrade = computePhilippineGrade(numericGrade, true).phGrade;
      remarks = 'PASSED';
    } else if (remainingCompletedLessons > 0) {
      status = 'In Progress';
      subCompleted = remainingCompletedLessons;
      remainingCompletedLessons = 0;
      activeSubjectCode = sub.code;
      remarks = 'In Progress';
      phGrade = 'IP';
    } else if (idx > 0 && baseSubjects[idx - 1] && remainingCompletedLessons === 0 && activeSubjectCode === sub.code) {
      status = 'In Progress';
      remarks = 'In Progress';
      phGrade = 'IP';
    }

    return {
      ...sub,
      status,
      completedLessons: subCompleted,
      numericGrade,
      phGrade,
      remarks,
    };
  });

  const totalLessonsInCurriculum = baseSubjects.reduce((acc, s) => acc + s.lessonsCount, 0);
  const overallProgressPercent = Math.min(100, Math.round((completedLessonsCount / totalLessonsInCurriculum) * 100));

  return {
    programId: trackId,
    programTitle,
    degreeCode,
    department,
    accreditingBody,
    totalCurriculumUnits,
    earnedUnits,
    overallProgressPercent,
    activeSubjectCode,
    subjects,
  };
}

export function getStoredRoster(): StudentGradeRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ROSTER);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    
    return parsed
      .filter((s: any) => !s.id?.startsWith('stu-10'))
      .map((s: any) => {
        // Cleanse legacy mock data (e.g. 88.5% B+ 10/12) so newly enrolled students start real
        const isLegacyMock = s.finalNumericGrade === 88.5 && s.completedActivities === 10 && (s.examAverage === 90 || s.worksheetsScore === 92);
        
        const completedActivities = isLegacyMock ? 0 : (s.completedActivities || 0);
        const progressPercent = isLegacyMock ? 0 : (s.progressPercent || 0);
        const examAverage = isLegacyMock ? 0 : (s.examAverage || 0);
        const worksheetsScore = isLegacyMock ? 0 : (s.worksheetsScore || 0);
        const attendancePercent = isLegacyMock ? 100 : (s.attendancePercent || 100);
        const sf2AttendanceDays = isLegacyMock || !s.sf2AttendanceDays ? getRealSf2Days(1) : s.sf2AttendanceDays;
        
        let finalNumericGrade = isLegacyMock ? 0 : (s.finalNumericGrade || 0);
        let letterGrade = isLegacyMock ? 'IP' : (s.letterGrade || 'IP');
        let gpa = isLegacyMock ? 0.0 : (s.gpa || 0.0);
        let phGrade = isLegacyMock ? 'IP' : (s.philippineGrade || 'IP');
        let standing = isLegacyMock ? 'Newly Enrolled - In Progress' : (s.academicStanding || 'Newly Enrolled - In Progress');
        let certificateIssued = isLegacyMock ? false : Boolean(s.certificateIssued);

        // If genuinely 0 completed activities, ensure In Progress status
        if (completedActivities === 0 && examAverage === 0 && worksheetsScore === 0) {
          finalNumericGrade = 0;
          letterGrade = 'IP';
          gpa = 0.0;
          phGrade = 'IP';
          standing = 'Newly Enrolled - In Progress';
          certificateIssued = false;
        }

        return {
          ...s,
          completedActivities,
          progressPercent,
          examAverage,
          worksheetsScore,
          attendancePercent,
          sf2AttendanceDays,
          finalNumericGrade,
          letterGrade,
          gpa,
          philippineGrade: phGrade,
          academicStanding: standing,
          certificateIssued,
          lrn: s.lrn || generateLrn(s.email),
          status: s.status || 'Active',
          tags: Array.isArray(s.tags) && s.tags.length > 0 ? s.tags : ['Enrolled Scholar', 'Student'],
        };
      });
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

      // Check if user has real completed lessons in localStorage
      let completedLessonsCount = 0;
      try {
        const rawLessons = localStorage.getItem(`epicademy_completed_lessons_${email}`);
        if (rawLessons) {
          const parsed = JSON.parse(rawLessons);
          completedLessonsCount = Object.values(parsed).filter(Boolean).length;
        }
      } catch {}

      // Check if user has real exam scores recorded
      let realExamScore = 0;
      try {
        const rawExams = localStorage.getItem(`epicademy_exam_scores_${email}`);
        if (rawExams) {
          const parsedExams = JSON.parse(rawExams);
          const scores = Object.values(parsedExams).filter((v): v is number => typeof v === 'number');
          if (scores.length > 0) {
            realExamScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
          }
        }
      } catch {}

      const existing = rosterMap.get(email);
      if (existing) {
        // Maintain real user progress or newly enrolled starting state
        const isLegacyMock = existing.finalNumericGrade === 88.5 && existing.completedActivities === 10;
        const totalActivities = existing.totalActivities || 12;
        const completedActivities = isLegacyMock ? completedLessonsCount : Math.max(existing.completedActivities, completedLessonsCount);
        const progressPercent = Math.min(100, Math.round((completedActivities / totalActivities) * 100));

        let examAverage = isLegacyMock ? realExamScore : (existing.examAverage || realExamScore);
        let worksheetsScore = isLegacyMock ? 0 : existing.worksheetsScore;
        let attendancePercent = existing.attendancePercent || 100;
        let sf2Days = isLegacyMock || !existing.sf2AttendanceDays ? getRealSf2Days(1) : existing.sf2AttendanceDays;

        let finalNumericGrade = 0;
        let letterGrade: StudentGradeRecord['letterGrade'] = 'IP';
        let gpa = 0.0;
        let phGrade = 'IP';
        let standing = 'Newly Enrolled - In Progress';
        let certificateIssued = false;

        if (completedActivities > 0 || examAverage > 0 || worksheetsScore > 0) {
          const actScore = totalActivities > 0 ? (completedActivities / totalActivities) * 100 : 0;
          const weighted = computeWeightedGrade(actScore, examAverage, worksheetsScore, attendancePercent);
          finalNumericGrade = weighted.finalNumericGrade;
          letterGrade = weighted.letterGrade;
          gpa = weighted.gpa;
          phGrade = computePhilippineGrade(finalNumericGrade, true).phGrade;
          standing = computeAcademicStanding(finalNumericGrade, true);
          certificateIssued = progressPercent === 100 && finalNumericGrade >= 75;
        }

        rosterMap.set(email, {
          ...existing,
          studentName: prof.full_name || existing.studentName,
          trackId: enrolledTrackId || existing.trackId,
          trackTitle: trackTitle || existing.trackTitle,
          progressPercent,
          completedActivities,
          totalActivities,
          lrn: existing.lrn || generateLrn(email),
          status: existing.status || 'Active',
          examAverage,
          worksheetsScore,
          attendancePercent,
          sf2AttendanceDays: sf2Days,
          finalNumericGrade,
          letterGrade,
          gpa,
          philippineGrade: phGrade,
          academicStanding: standing,
          certificateIssued,
          tags: existing.tags && existing.tags.length > 0 ? existing.tags : ['Enrolled Scholar', 'Student', 'Batch 2026-A'],
          enrollmentDate: existing.enrollmentDate || (prof.created_at ? new Date(prof.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Oct 17, 2026'),
        });
      } else {
        // Instantiate genuine newly enrolled student record (REAL 0% starting journey)
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
          progressPercent: 0,
          completedActivities: 0,
          totalActivities: 12,
          examAverage: 0,
          worksheetsScore: 0,
          attendancePercent: 100,
          sf2AttendanceDays: getRealSf2Days(1), // Day 1 attended, rest upcoming
          finalNumericGrade: 0,
          letterGrade: 'IP',
          gpa: 0.0,
          philippineGrade: 'IP',
          academicStanding: 'Newly Enrolled - In Progress',
          certificateIssued: false,
          certificateId: `EPIC-CERT-2026-${enrolledTrackId.replace('track-', '').slice(0, 8).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`,
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
    examAverage: 0,
    worksheetsScore: 0,
    attendancePercent: 100,
    sf2AttendanceDays: getRealSf2Days(1),
    finalNumericGrade: 0,
    letterGrade: 'IP',
    gpa: 0.0,
    philippineGrade: 'IP',
    academicStanding: 'Newly Enrolled - In Progress',
    certificateIssued: false,
    lastActive: 'Just now'
  };

  const updatedRoster = [newStudent, ...currentRoster];
  saveStoredRoster(updatedRoster);

  return newStudent;
}

export function updateStudentRealScores(
  email: string,
  scores: {
    examAverage?: number;
    worksheetsScore?: number;
    completedActivities?: number;
    attendancePercent?: number;
    status?: StudentStatus;
    tags?: string[];
    trackId?: string;
  }
): StudentGradeRecord[] {
  const roster = getStoredRoster();
  const cleanEmail = email.toLowerCase().trim();
  const index = roster.findIndex(s => s.email.toLowerCase() === cleanEmail);
  if (index >= 0) {
    const student = roster[index];
    const examAverage = scores.examAverage !== undefined ? scores.examAverage : student.examAverage;
    const worksheetsScore = scores.worksheetsScore !== undefined ? scores.worksheetsScore : student.worksheetsScore;
    const completedActivities = scores.completedActivities !== undefined ? scores.completedActivities : student.completedActivities;
    const attendancePercent = scores.attendancePercent !== undefined ? scores.attendancePercent : student.attendancePercent;
    const status = scores.status || student.status;
    const tags = scores.tags || student.tags;
    const trackId = scores.trackId || student.trackId;

    const actScore = student.totalActivities > 0 ? (completedActivities / student.totalActivities) * 100 : 0;
    const hasScores = examAverage > 0 || worksheetsScore > 0 || completedActivities > 0;

    let finalNumericGrade = 0;
    let letterGrade: StudentGradeRecord['letterGrade'] = 'IP';
    let gpa = 0.0;
    let standing = 'Newly Enrolled - In Progress';
    let phGrade = 'IP';

    if (hasScores) {
      const weighted = computeWeightedGrade(actScore, examAverage, worksheetsScore, attendancePercent);
      finalNumericGrade = weighted.finalNumericGrade;
      letterGrade = weighted.letterGrade;
      gpa = weighted.gpa;
      standing = computeAcademicStanding(finalNumericGrade, true);
      phGrade = computePhilippineGrade(finalNumericGrade, true).phGrade;
    }

    const progressPercent = Math.min(100, Math.round((completedActivities / student.totalActivities) * 100));
    const certificateIssued = progressPercent === 100 && finalNumericGrade >= 75;

    roster[index] = {
      ...student,
      trackId,
      status,
      tags,
      completedActivities,
      progressPercent,
      examAverage,
      worksheetsScore,
      attendancePercent,
      finalNumericGrade,
      letterGrade,
      gpa,
      philippineGrade: phGrade,
      academicStanding: standing,
      certificateIssued,
      certificateIssuedDate: certificateIssued ? new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : undefined,
    };
    saveStoredRoster(roster);
  }
  return roster;
}

export function resetStudentToStartingJourney(email: string): StudentGradeRecord[] {
  const roster = getStoredRoster();
  const cleanEmail = email.toLowerCase().trim();
  const index = roster.findIndex(s => s.email.toLowerCase() === cleanEmail);
  if (index >= 0) {
    const student = roster[index];
    roster[index] = {
      ...student,
      progressPercent: 0,
      completedActivities: 0,
      examAverage: 0,
      worksheetsScore: 0,
      attendancePercent: 100,
      sf2AttendanceDays: getRealSf2Days(1),
      finalNumericGrade: 0,
      letterGrade: 'IP',
      gpa: 0.0,
      philippineGrade: 'IP',
      academicStanding: 'Newly Enrolled - In Progress',
      certificateIssued: false,
      certificateIssuedDate: undefined,
    };
    saveStoredRoster(roster);
  }
  try {
    localStorage.removeItem(`epicademy_completed_lessons_${cleanEmail}`);
    localStorage.removeItem(`epicademy_exam_scores_${cleanEmail}`);
  } catch {}
  return roster;
}

export async function updateStudentTrackEnrollment(email: string, newTrackId: string, newTrackTitle?: string): Promise<StudentGradeRecord[]> {
  const cleanEmail = email.toLowerCase().trim();
  try {
    await supabase.from('enrollments').upsert([
      {
        user_email: cleanEmail,
        track_id: newTrackId
      }
    ], { onConflict: 'track_id,user_email' });
  } catch (err) {
    console.warn('Supabase enrollment update note:', err);
  }

  const roster = getStoredRoster();
  const index = roster.findIndex(s => s.email.toLowerCase() === cleanEmail);
  if (index >= 0) {
    roster[index].trackId = newTrackId;
    if (newTrackTitle) roster[index].trackTitle = newTrackTitle;
    saveStoredRoster(roster);
  }
  return roster;
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
  finalNumericGrade: number,
  hasStarted: boolean = true
): StudentGradeRecord['academicStanding'] {
  if (!hasStarted || finalNumericGrade === 0) return 'Newly Enrolled - In Progress';
  if (finalNumericGrade >= 97) return 'Summa Cum Laude';
  if (finalNumericGrade >= 94) return 'Magna Cum Laude';
  if (finalNumericGrade >= 90) return 'Cum Laude';
  if (finalNumericGrade >= 75) return 'Good Standing';
  return 'Academic Probation';
}

export function computePhilippineGrade(finalNumericGrade: number, hasStarted: boolean = true): {
  phGrade: string;
  description: string;
} {
  if (!hasStarted || finalNumericGrade === 0) {
    return { phGrade: 'IP', description: 'In Progress (Starting Journey)' };
  }
  if (finalNumericGrade >= 97) return { phGrade: '1.00', description: 'Excellent' };
  if (finalNumericGrade >= 94) return { phGrade: '1.25', description: 'Superior' };
  if (finalNumericGrade >= 91) return { phGrade: '1.50', description: 'Very Good' };
  if (finalNumericGrade >= 88) return { phGrade: '1.75', description: 'Good' };
  if (finalNumericGrade >= 85) return { phGrade: '2.00', description: 'Above Average' };
  if (finalNumericGrade >= 82) return { phGrade: '2.25', description: 'Average' };
  if (finalNumericGrade >= 79) return { phGrade: '2.50', description: 'Fair' };
  if (finalNumericGrade >= 76) return { phGrade: '2.75', description: 'Passing' };
  if (finalNumericGrade >= 75) return { phGrade: '3.00', description: 'Passed' };
  return { phGrade: '5.00', description: 'Failed / Deficiency' };
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
