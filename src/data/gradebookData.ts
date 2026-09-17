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
    totalStudents: 48,
  },
  {
    id: 'cohort-2026-b',
    name: 'Batch 2026-B: Full-Stack AI SaaS Hero Cohort',
    term: 'Second Semester 2026',
    startDate: 'Jun 1, 2026',
    endDate: 'Sep 30, 2026',
    leadInstructor: 'Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS',
    totalStudents: 36,
  },
  {
    id: 'cohort-tesda-css-08',
    name: 'TESDA CSS NC II Vocational Tech Batch 08',
    term: 'TVET Institutional Cycle 2026',
    startDate: 'Jan 15, 2026',
    endDate: 'Apr 30, 2026',
    leadInstructor: 'Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS',
    totalStudents: 52,
  },
];

export const INITIAL_STUDENT_ROSTER: StudentGradeRecord[] = [
  {
    id: 'stu-101',
    studentName: 'Alexander Dela Cruz',
    email: 'alex.delacruz@kezjed.edu.ph',
    cohortId: 'cohort-2026-a',
    trackId: 'track-level-1-html-foundations',
    trackTitle: 'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture',
    progressPercent: 100,
    completedActivities: 12,
    totalActivities: 12,
    examAverage: 98,
    worksheetsScore: 97,
    attendancePercent: 100,
    finalNumericGrade: 97.8,
    letterGrade: 'A+',
    gpa: 4.0,
    academicStanding: 'Summa Cum Laude',
    certificateIssued: true,
    certificateId: 'EPIC-CERT-2026-HTML5-84920',
    lastActive: '10 mins ago',
  },
  {
    id: 'stu-102',
    studentName: 'Clarisse Anne Reyes',
    email: 'clarisse.reyes@gmail.com',
    cohortId: 'cohort-2026-a',
    trackId: 'track-level-2-css-mastery',
    trackTitle: 'Level 2: Modern CSS3 Mastery, Flexbox, Grid & Responsive Architecture',
    progressPercent: 92,
    completedActivities: 11,
    totalActivities: 12,
    examAverage: 94,
    worksheetsScore: 95,
    attendancePercent: 96,
    finalNumericGrade: 94.2,
    letterGrade: 'A',
    gpa: 3.85,
    academicStanding: 'Magna Cum Laude',
    certificateIssued: true,
    certificateId: 'EPIC-CERT-2026-CSS3-51829',
    lastActive: '2 hours ago',
  },
  {
    id: 'stu-103',
    studentName: 'Joshua Miguel Santos',
    email: 'joshua.santos@dev.ph',
    cohortId: 'cohort-2026-b',
    trackId: 'track-level-9-fullstack-ai-hero',
    trackTitle: 'Level 9: Full-Stack AI SaaS Capstone: Autonomous AI Agents & Cloud Scale',
    progressPercent: 85,
    completedActivities: 10,
    totalActivities: 12,
    examAverage: 91,
    worksheetsScore: 89,
    attendancePercent: 94,
    finalNumericGrade: 90.6,
    letterGrade: 'A',
    gpa: 3.75,
    academicStanding: 'Cum Laude',
    certificateIssued: false,
    lastActive: 'Yesterday',
  },
  {
    id: 'stu-104',
    studentName: 'Bernadette Lim',
    email: 'bernadette.lim@outlook.com',
    cohortId: 'cohort-tesda-css-08',
    trackId: 'track-tesda-css-nc2',
    trackTitle: 'Computer Systems Servicing (CSS) NC II: TESDA Vocational Masterclass',
    progressPercent: 100,
    completedActivities: 16,
    totalActivities: 16,
    examAverage: 99,
    worksheetsScore: 98,
    attendancePercent: 100,
    finalNumericGrade: 98.6,
    letterGrade: 'A+',
    gpa: 4.0,
    academicStanding: 'Summa Cum Laude',
    certificateIssued: true,
    certificateId: 'EPIC-CERT-2026-TESDA-99412',
    lastActive: '5 mins ago',
  },
  {
    id: 'stu-105',
    studentName: 'Mark Lester Tolentino',
    email: 'mark.tolentino@yahoo.com',
    cohortId: 'cohort-tesda-css-08',
    trackId: 'track-tesda-css-nc2',
    trackTitle: 'Computer Systems Servicing (CSS) NC II: TESDA Vocational Masterclass',
    progressPercent: 75,
    completedActivities: 12,
    totalActivities: 16,
    examAverage: 84,
    worksheetsScore: 82,
    attendancePercent: 90,
    finalNumericGrade: 83.5,
    letterGrade: 'B',
    gpa: 3.0,
    academicStanding: 'Good Standing',
    certificateIssued: false,
    lastActive: '3 days ago',
  },
  {
    id: 'stu-106',
    studentName: 'Patricia Joy Gonzales',
    email: 'patricia.gonzales@techcorp.ph',
    cohortId: 'cohort-2026-a',
    trackId: 'track-level-5-react-ts',
    trackTitle: 'Level 5: Modern React 18, TypeScript & Enterprise Component Architecture',
    progressPercent: 100,
    completedActivities: 12,
    totalActivities: 12,
    examAverage: 96,
    worksheetsScore: 94,
    attendancePercent: 98,
    finalNumericGrade: 95.8,
    letterGrade: 'A+',
    gpa: 3.95,
    academicStanding: 'Summa Cum Laude',
    certificateIssued: true,
    certificateId: 'EPIC-CERT-2026-REACT-44109',
    lastActive: '1 hour ago',
  }
];

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
