export type CategoryType = 'all' | 'stem' | 'business' | 'creative' | 'humanities' | 'wellness' | 'other';

export type UserRole = 'admin' | 'educator' | 'contributor' | 'student';

export interface RolePermissions {
  canAccessAccountSettings: boolean;
  canManageUsers: boolean;
  canCreateCourses: boolean;
  canManageFaculty: boolean;
  canAccessClassroom: boolean;
  canUseSandbox: boolean;
  canUseKezjedAi: boolean;
  canAccessTrb: boolean;
  canSwitchPerspectives: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  admin: {
    canAccessAccountSettings: true,
    canManageUsers: true,
    canCreateCourses: true,
    canManageFaculty: true,
    canAccessClassroom: true,
    canUseSandbox: true,
    canUseKezjedAi: true,
    canAccessTrb: true,
    canSwitchPerspectives: true,
  },
  educator: {
    canAccessAccountSettings: false,
    canManageUsers: false,
    canCreateCourses: true,
    canManageFaculty: true,
    canAccessClassroom: true,
    canUseSandbox: true,
    canUseKezjedAi: true,
    canAccessTrb: true,
    canSwitchPerspectives: true,
  },
  contributor: {
    canAccessAccountSettings: false,
    canManageUsers: false,
    canCreateCourses: true,
    canManageFaculty: false,
    canAccessClassroom: true,
    canUseSandbox: true,
    canUseKezjedAi: true,
    canAccessTrb: true,
    canSwitchPerspectives: true,
  },
  student: {
    canAccessAccountSettings: false,
    canManageUsers: false,
    canCreateCourses: false,
    canManageFaculty: false,
    canAccessClassroom: true,
    canUseSandbox: true,
    canUseKezjedAi: true,
    canAccessTrb: true,
    canSwitchPerspectives: false,
  },
};

export interface TeacherProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  specialty: string;
  credentials: string;
  bio: string;
  avatarUrl: string;
  isVerified: boolean;
  coursesCount?: number;
  studentsCount?: number;
  createdAt?: string;
}

export interface RegisterTeacherInput {
  email: string;
  password: string;
  fullName: string;
  specialty: string;
  credentials: string;
  bio: string;
  avatarUrl?: string;
}

export interface ActivityRubricCriteria {
  criteria: string;
  points: number;
}

export interface ActivityItem {
  id?: string;
  title: string;
  instructions: string[];
  starterCode?: string;
  expectedOutcome?: string;
  rubric?: ActivityRubricCriteria[];
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface ExamItem {
  id?: string;
  title: string;
  description?: string;
  passingScore: number;
  questions: ExamQuestion[];
}

export interface WorksheetPrompt {
  id: string;
  prompt: string;
}

export interface WorksheetItem {
  id?: string;
  title: string;
  sheetName?: string;
  description: string;
  templateUrl?: string;
  deliverables?: string[];
  rubric?: { criteria: string; points: number }[];
  questions?: WorksheetPrompt[];
}

export interface LessonItem {
  id?: string;
  module_id?: string;
  title: string;
  duration: string;
  video_url?: string;
  content?: string;
  objective?: string;
  code_snippet?: string;
  order_index?: number;
  activity?: ActivityItem;
  exam?: ExamItem;
  worksheet?: WorksheetItem;
  classroom_link?: string;
  classroomLink?: string;
  progress?: number;
}

export interface ModuleItem {
  id?: string;
  track_id?: string;
  title: string;
  duration?: string;
  overview?: string;
  order_index?: number;
  lessons?: number;
  topics?: string[];
  lessonItems?: LessonItem[];
}

export interface Track {
  id: string;
  title: string;
  category: 'stem' | 'business' | 'creative' | 'humanities' | 'wellness' | 'other';
  categoryLabel: string;
  slug: string;
  badge: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  instructor: {
    name: string;
    role: string;
    avatar: string;
    verified: boolean;
    credentials: string;
  };
  rating: number;
  reviewCount: number;
  activeLearners: number;
  lessonsCount: number;
  duration: string;
  description: string;
  skills: string[];
  modules?: ModuleItem[];
  colorTheme: string;
  popular?: boolean;
  published?: boolean;
  isCustomCourse?: boolean;
  isTeacherCreated?: boolean;
  authorEmail?: string;
  price?: number;
  originalPrice?: number;
  levelIndex?: number;
  careerMilestone?: string;
  isPaid?: boolean;
  isBundle?: boolean;
  bundleNumber?: number;
  bundleLabel?: string;
}

export interface CreateLessonInput {
  id?: string;
  title: string;
  duration: string;
  videoUrl?: string;
  content?: string;
  objective?: string;
  codeSnippet?: string;
  activity?: ActivityItem;
  exam?: ExamItem;
  worksheet?: WorksheetItem;
  classroomLink?: string;
}

export interface CreateModuleInput {
  id?: string;
  title: string;
  duration: string;
  overview?: string;
  lessons: CreateLessonInput[];
}

export interface CreateTrackInput {
  id?: string;
  title: string;
  category: 'stem' | 'business' | 'creative' | 'humanities' | 'wellness' | 'other';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  description: string;
  duration: string;
  skills: string[];
  colorTheme: string;
  instructorName: string;
  instructorRole: string;
  instructorAvatar?: string;
  price?: number;
  originalPrice?: number;
  isPaid?: boolean;
  modules: CreateModuleInput[];
}

export interface CommunityReply {
  id: string;
  postId: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    isEducator?: boolean;
    tierBadge?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

export interface CommunityPost {
  id: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    isEducator: boolean;
    tierBadge: string;
  };
  channel: string;
  trackCategory: CategoryType;
  timestamp: string;
  title: string;
  content: string;
  likes: number;
  repliesCount: number;
  isLiked?: boolean;
  tags: string[];
  replies?: CommunityReply[];
  isIdea?: boolean;
  ideaCategory?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  highlighted?: boolean;
  ctaText: string;
  features: {
    name: string;
    included: boolean;
    highlight?: boolean;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatar: string;
  track: string;
  quote: string;
  stats: {
    value: string;
    label: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'educators' | 'students' | 'pricing';
}

export type TenantCategory = 'all' | 'mobile' | 'ai' | 'cloud' | 'web3' | 'design' | 'cybersecurity' | 'fullstack';

export interface CommunityDeveloper {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  roleTitle: string;
  specialty: string;
  category: TenantCategory;
  location: string;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  coursesCount: number;
  bio: string;
  credentials: string;
  companyOrBackground: string;
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  featuredSkillTags: string[];
  payoutBadge: string;
  courses: Track[];
}

export interface TenantApplication {
  fullName: string;
  email: string;
  specialty: string;
  category: string;
  experienceYears: string;
  portfolioUrl?: string;
  githubUrl?: string;
  courseTitle: string;
  targetAudience: string;
  payoutMethod: 'gotyme' | 'gcash' | 'maya';
  payoutDetails: string;
  bio: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  speaker: {
    name: string;
    role: string;
    avatar?: string;
    organization: string;
  };
  date: string;
  time: string;
  badge: string;
  description: string;
  bannerImage?: string;
  attendeesCount: number;
  category: 'events' | 'mindset' | 'ai' | 'freelancing';
  meetLink?: string;
  isFree: boolean;
}

export interface CommunitySpace {
  id: string;
  name: string;
  creatorName: string;
  badge?: string;
  bannerImage: string;
  description: string;
  membersCount: number;
  priceLabel: string;
  isVerified: boolean;
  category: 'community' | 'academy' | 'freelancing' | 'design';
  isJoined?: boolean;
}

export interface DigitalProductItem {
  id: string;
  title: string;
  creatorName: string;
  bannerImage: string;
  description: string;
  downloadsCount: number;
  priceLabel: string;
  isVerified: boolean;
  fileType: string;
}

export interface CoachingItem {
  id: string;
  title: string;
  mentorName: string;
  mentorRole: string;
  avatar: string;
  description: string;
  duration: string;
  priceLabel: string;
  isVerified: boolean;
}

export interface ShopItem {
  id: string;
  title: string;
  creatorName: string;
  bannerImage: string;
  description: string;
  priceLabel: string;
  inStock: boolean;
  rating: number;
}




