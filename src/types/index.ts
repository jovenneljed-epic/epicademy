export type CategoryType = 'all' | 'stem' | 'business' | 'creative' | 'humanities' | 'wellness' | 'other';

export interface TeacherProfile {
  id: string;
  email: string;
  fullName: string;
  role: 'educator' | 'student' | 'admin';
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

export interface LessonItem {
  id?: string;
  module_id?: string;
  title: string;
  duration: string;
  video_url?: string;
  content?: string;
  order_index?: number;
}

export interface ModuleItem {
  id?: string;
  track_id?: string;
  title: string;
  duration?: string;
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
  title: string;
  duration: string;
  videoUrl?: string;
  content?: string;
}

export interface CreateModuleInput {
  title: string;
  duration: string;
  lessons: CreateLessonInput[];
}

export interface CreateTrackInput {
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
  modules: CreateModuleInput[];
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




