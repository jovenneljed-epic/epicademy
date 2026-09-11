import type { 
  CommunityDeveloper, 
  Track, 
  TenantCategory, 
  CommunityEvent,
  CommunitySpace,
  DigitalProductItem,
  CoachingItem,
  ShopItem
} from '../types';
import { TESDA_CSS_TRACK } from './tesdaCssNc2CourseData';

export const PASTORAL_DEVOTIONAL = {
  pastorName: 'Pastor Joven Nel Jed Aviguetero (Kuya Jed)',
  role: 'Tagapagtatag, Lead Cloud Architect & Pastor-Mentor',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  verseOfTheDay: '“Sapagkat batid kong lubos ang mga plano ko para sa inyo, mga planong magdudulot sa inyo ng kapayapaan at hindi kapahamakan, upang bigyan kayo ng pag-asa at magandang kinabukasan.” — Jeremias 29:11',
  messageOfTheDay: 'Kapatid, hindi ka huli (You are not behind!). Huwag kang matakot sa syntax errors o technical jargon. Ang bawat bihasang engineer sa buong mundo ay nagsimula sa zero. Sa bawat linyang isinusulat mo, may kasama kang gabay, panalangin, at komunidad na nagmamalasakit sa iyong tagumpay.',
  bayanihanMotto: 'Bayanihan sa Teknolohiya: Walang Kapatid na Maiiwan mula Zero hanggang Hero.',
};

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'event-bossrod-ai-era',
    title: 'HOW TO STAND OUT IN THIS AI ERA — AS A SOFTWARE ENGINEER',
    speaker: {
      name: 'Kuya bossROD',
      role: 'Founder & Senior Software Architect',
      organization: 'bossROD Academy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    date: 'SEP 12, 2026',
    time: '7:00 PM PHT',
    badge: '★ NEW! LIVE WORKSHOP',
    description: 'AI is changing software engineering fast. Writing code is no longer enough. The engineers who stand out will be the ones who know how to architect systems, lead projects, and harness AI tools with critical thinking.',
    attendeesCount: 342,
    category: 'ai',
    isFree: true,
  },
  {
    id: 'event-zan-tech-mindset',
    title: 'THE TECH MINDSET #1: YOU\'RE NOT BEHIND! Imposter Syndrome, Burnout & Finding Your Motivation Again',
    speaker: {
      name: 'Daniel Zan Baltazar',
      role: 'Full-Stack Web Developer & Community Builder',
      organization: 'ZAN COMMUNITY',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    },
    date: 'SEP 13, 2026',
    time: '8:00 PM PHT',
    badge: '★ INSPIRATIONAL FELLOWSHIP',
    description: 'Naranasan mo na bang maramdamang napag-iiwanan ka na? Harapin natin ang imposter syndrome, comparison trap, burnout, at matutong magsimula muli nang may panatag na puso.',
    attendeesCount: 420,
    category: 'mindset',
    isFree: true,
  },
  {
    id: 'event-pastor-jed-interviews',
    title: 'GABAY AT PANALANGIN: Passing Technical Interviews with Faith, Character & Clean Code',
    speaker: {
      name: 'Pastor Joven Nel Jed Aviguetero',
      role: 'Lead Cloud Architect & Pastor-Mentor',
      organization: 'EPICADEMY Eskwela',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    date: 'SEP 15, 2026',
    time: '7:30 PM PHT',
    badge: '🙏 PASTORAL DEVOTIONAL & LIVE Q&A',
    description: 'Paghahanda para sa iyong unang coding interview. Paano magpaliwanag ng code nang may tiwala, magpakumbaba sa pagkatuto, at magtiwala sa plano ng Panginoon sa iyong career.',
    attendeesCount: 512,
    category: 'mindset',
    isFree: true,
  },
  {
    id: 'event-mahabi-ux-malasakit',
    title: 'MAHABI+ Human Experience: Weaving Malasakit, Belonging & Purpose into Software Design',
    speaker: {
      name: 'Ate Elena Gomez',
      role: 'Design Systems Lead (Ex-Maya)',
      organization: 'MAHABI+',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    date: 'SEP 17, 2026',
    time: '6:30 PM PHT',
    badge: '🎨 DESIGN & HOSPITALITY',
    description: 'Discover how Filipino malasakit and hospitality can elevate everyday digital applications into life-changing experiences for millions of everyday Filipinos.',
    attendeesCount: 280,
    category: 'events',
    isFree: true,
  }
];

export const COMMUNITY_DEVELOPERS: CommunityDeveloper[] = [
  {
    id: 'dev-pastor-jed',
    name: 'Pastor Joven Nel Jed Aviguetero',
    handle: '@kuya_jed',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Tagapagtatag, Lead Cloud Architect & Pastor-Mentor',
    specialty: 'Full-Stack Web, Cloud Data & Servant Leadership in Tech',
    category: 'fullstack',
    location: 'Antipolo & Quezon City, Philippines',
    rating: 5.00,
    reviewCount: 780,
    studentsCount: 3450,
    coursesCount: 3,
    bio: 'Full-pledged ICT instructor, TESDA CSS NC II Certified Trainer/Assessor, cloud data architect, at pastor-mentor na may pusong umalalay sa bawat Pilipinong nangangarap maging ganap na IT professional.',
    credentials: 'TESDA CSS NC II Certified • National TVET Trainer Certificate (NTTC / TM1) • LPT • Lead Enterprise Cloud Architect',
    companyOrBackground: 'EPICADEMY Eskwela • Certified TVET Faculty',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://epicademy.ph',
    featuredSkillTags: ['TESDA CSS NC II', 'Computer Hardware', 'Structured Cabling', 'Windows Server AD DS', 'Network Switching', 'Hardware Diagnostics', 'TVET Pedagogy'],
    payoutBadge: 'GoTyme Bank & GCash Verified Instructor',
    courses: [
      TESDA_CSS_TRACK,
      {
        id: 'track-pastor-jed-foundations',
        title: 'Bayanihan Web Foundations: Mula Zero hanggang Unang Web Project na may Puso',
        category: 'stem',
        categoryLabel: 'Pundasyon ng Web',
        slug: 'bayanihan-web-foundations-zero-to-hero',
        badge: 'Gabay ng Guro',
        level: 'Beginner',
        instructor: {
          name: 'Pastor Joven Nel Jed Aviguetero',
          role: 'Tagapagtatag & Lead Engineering Faculty',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'Lead Enterprise Cloud Architect & Pastor-Mentor',
        },
        rating: 5.00,
        reviewCount: 410,
        activeLearners: 1980,
        lessonsCount: 28,
        duration: '4 Linggo',
        description: 'Magsimula sa matibay na pundasyon ng HTML5, CSS3, at malinis na coding habits na may gabay at panalangin sa bawat hakbang. Walang background? Huwag kang mag-alala, gagabayan ka namin.',
        skills: ['HTML5 Semantic', 'CSS3 Responsive', 'Git & GitHub', 'Malinis na Code', 'Faith & Perseverance', 'Web Deployment'],
        colorTheme: 'blue',
        popular: true,
        published: true,
        price: 29,
        originalPrice: 59,
        levelIndex: 1,
        careerMilestone: 'Kumpiyansang Baguhang Web Developer',
        isPaid: true,
        modules: [
          {
            title: 'Module 1: Panimula at Tamang Mindset sa Pag-aaral ng Code',
            duration: '1 Linggo',
            lessons: 7,
            topics: ['Bakit hindi ka huli (You are not behind)', 'Paghahanda ng Computer at VS Code', 'Ang Anatomy ng isang Web Page', 'Unang Hello World Project'],
          },
          {
            title: 'Module 2: HTML5 Semantic Structure para sa Pamilya at Komunidad',
            duration: '1 Linggo',
            lessons: 8,
            topics: ['Header, Nav, Main, Article, Footer', 'Forms para sa Online Registrations', 'Accessibility (a11y) para sa Lahat', 'Pag-host sa Netlify nang Libre'],
          },
          {
            title: 'Module 3: Pagsusumikap at Paggawa ng Portfolio Project',
            duration: '2 Linggo',
            lessons: 13,
            topics: ['Modern CSS Flexbox Layout', 'Mobile Responsive Media Queries', 'Pagtatapos ng Unang Community Website', 'Pagsusumite at Pagdiriwang ng Tagumpay'],
          }
        ]
      },
      {
        id: 'track-pastor-jed-cloud-postgres',
        title: 'Cloud Database Architecture: PostgreSQL, Supabase & Integrity in Data Handling',
        category: 'stem',
        categoryLabel: 'Cloud Databases',
        slug: 'cloud-database-architecture-supabase',
        badge: 'Integridad sa Data',
        level: 'Intermediate',
        instructor: {
          name: 'Pastor Joven Nel Jed Aviguetero',
          role: 'Lead Enterprise Cloud Architect',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'Lead Enterprise Cloud Architect & Pastor-Mentor',
        },
        rating: 4.98,
        reviewCount: 220,
        activeLearners: 920,
        lessonsCount: 30,
        duration: '5 Linggo',
        description: 'Matutong humawak ng database nang may katapatan at mataas na kalidad. Relational modeling sa PostgreSQL, Supabase Row Level Security (RLS), at cloud backups.',
        skills: ['PostgreSQL', 'Supabase RLS', 'SQL Joins', 'Database Normalization', 'Data Integrity', 'Cloud Scaling'],
        colorTheme: 'indigo',
        published: true,
        price: 59,
        originalPrice: 119,
        levelIndex: 2,
        careerMilestone: 'Tiwala at Mahusay na Cloud Database Engineer',
        isPaid: true,
        modules: [
          {
            title: 'Module 1: Relational Database Modeling at Katapatan sa Data',
            duration: '1.5 Linggo',
            lessons: 8,
            topics: ['Entity Relationship Diagrams (ERD)', 'Foreign Keys at Cascades', 'Data Integrity & Constraints', 'Normalization 1NF to 3NF'],
          },
          {
            title: 'Module 2: Supabase Authentication at Row Level Security',
            duration: '2 Linggo',
            lessons: 12,
            topics: ['User Authentication flows', 'Pagsulat ng Matitibay na RLS Policies', 'Supabase Storage for Files', 'Realtime Subscriptions'],
          }
        ]
      }
    ]
  },
  {
    id: 'dev-bossrod',
    name: 'Kuya bossROD (Rodulfo)',
    handle: '@bossrod_academy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Founder & Software Architect ng bossROD Academy',
    specialty: 'The New Era of Software Engineering & AI Integration',
    category: 'fullstack',
    location: 'Metro Manila, Philippines',
    rating: 4.98,
    reviewCount: 890,
    studentsCount: 4240,
    coursesCount: 2,
    bio: 'Software engineer at content creator na nagbibigay-diin sa tunay na skills, clean software engineering, at paano mag-stand out sa makabagong panahon ng Artificial Intelligence. Walang halong pampalubag-loob, puro practical na aral.',
    credentials: 'Lead Software Architect • Creator ng bossROD Academy • 4,000+ Students Mentored',
    companyOrBackground: 'bossROD Academy • New Era Software Engineering',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://bossrod.com',
    featuredSkillTags: ['AI Era Engineering', 'System Architecture', 'Next.js', 'Node.js', 'Clean Code', 'Modern Mindset', 'Scalability'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-bossrod-ai-engineer',
        title: 'How to Stand Out in this AI Era as a Software Engineer: System Architecture & Modern Engineering',
        category: 'stem',
        categoryLabel: 'AI Era Engineering',
        slug: 'bossrod-stand-out-ai-era-software-engineer',
        badge: 'Flagship bossROD',
        level: 'Intermediate',
        instructor: {
          name: 'Kuya bossROD',
          role: 'Founder ng bossROD Academy',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'Lead Software Architect & Tech Educator',
        },
        rating: 4.99,
        reviewCount: 520,
        activeLearners: 2150,
        lessonsCount: 34,
        duration: '6 Linggo',
        description: 'Huwag matakot mapalitan ng AI—gamitin ito bilang leverage. Matutong mag-isip bilang Software Architect, mag-disenyo ng matatag na backend, at sumulat ng production-grade code na kailangan ng mga enterprise kumpanya.',
        skills: ['AI-Augmented Workflows', 'Clean Architecture', 'Production Backends', 'Critical Thinking', 'API Design', 'Performance Optimization'],
        colorTheme: 'amber',
        popular: true,
        published: true,
        price: 69,
        originalPrice: 119,
        levelIndex: 1,
        careerMilestone: 'Modern High-Value Software Engineer',
        isPaid: true,
        modules: [
          {
            title: 'Module 1: Bakit Hindi Sapat ang Pagsusulat Lamang ng Code',
            duration: '1.5 Linggo',
            lessons: 8,
            topics: ['Ang Ebolusyon ng Software Engineer sa AI Era', 'System Design Thinking vs Line-by-line Coding', 'Paano Mag-Prompt at Mag-Audit ng AI Outputs', 'Code Review Standards'],
          },
          {
            title: 'Module 2: Scalable API Architecture at Enterprise Patterns',
            duration: '2 Linggo',
            lessons: 12,
            topics: ['Modular Monolith vs Microservices', 'High-Concurrency Caching with Redis', 'Database Query Tuning', 'Resilient Error Handling'],
          },
          {
            title: 'Module 3: Pagtayo ng High-Impact Projects at Portfolio Review',
            duration: '2.5 Linggo',
            lessons: 14,
            topics: ['Architecting a Production Multi-Tenant App', 'Continuous Integration & Production Monitoring', 'Mock Technical Interviews and Presentation', 'Landing High-Paying Global Clients'],
          }
        ]
      }
    ]
  },
  {
    id: 'dev-daniel-zan',
    name: 'Daniel Zan Baltazar',
    handle: '@zan_community',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Full-Stack Web Developer & Founder ng ZAN COMMUNITY',
    specialty: 'Real-World Freelancing, Modern Workflows & Tech Mindset',
    category: 'fullstack',
    location: 'Cavite & Metro Manila, Philippines',
    rating: 4.96,
    reviewCount: 340,
    studentsCount: 1650,
    coursesCount: 2,
    bio: 'Full-stack developer na nagbabahagi ng real-world freelancing experiences, tech workflows, at solusyon laban sa imposter syndrome at burnout. Naniniwalang ang tunay na lakas ng developer ay nagmumula sa tamang pananaw at patuloy na pagsisikap.',
    credentials: 'Full-Stack Freelance Engineer • Founder ng ZAN Community • Tech Mindset Speaker',
    companyOrBackground: 'ZAN COMMUNITY • Real-World Freelancing',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://zancommunity.com',
    featuredSkillTags: ['Tech Mindset', 'Freelancing', 'Full-Stack React', 'Node.js', 'Imposter Syndrome', 'Remote Work', 'Client Management'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-zan-tech-mindset-freelance',
        title: 'The Tech Mindset: You\'re Not Behind — Beating Imposter Syndrome & Landing Freelance Tech Clients',
        category: 'stem',
        categoryLabel: 'Freelancing & Mindset',
        slug: 'zan-tech-mindset-freelance-mastery',
        badge: 'Bayanihan Pick',
        level: 'All Levels',
        instructor: {
          name: 'Daniel Zan Baltazar',
          role: 'Founder ng ZAN COMMUNITY',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'Full-Stack Freelance Developer & Mindset Coach',
        },
        rating: 4.97,
        reviewCount: 210,
        activeLearners: 980,
        lessonsCount: 24,
        duration: '4 Linggo',
        description: 'Labanan ang takot at pagdududa sa sarili. Alamin ang eksaktong proseso ng pagbuo ng portfolio, pakikipag-usap sa foreign at local clients, at pagkamit ng $1,000+ buwanang freelancing kita mula sa bahay.',
        skills: ['Mindset Transformation', 'Upwork & LinkedIn Optimization', 'Client Proposal Writing', 'Project Scoping', 'Full-Stack Delivery', 'Pricing Confidence'],
        colorTheme: 'emerald',
        popular: true,
        published: true,
        price: 39,
        originalPrice: 79,
        levelIndex: 1,
        careerMilestone: 'Kumpiyansang Freelance Tech Consultant',
        isPaid: true,
        modules: [
          {
            title: 'Module 1: The Tech Mindset — Paggiba sa Imposter Syndrome',
            duration: '1 Linggo',
            lessons: 6,
            topics: ['Bakit normal ang matakot at paano ito gagamiting lakas', 'The Comparison Trap: Ang iyong takbuhin ay para sa iyo', 'Pagtataguyod ng araw-araw na disiplina sa pagko-code'],
          },
          {
            title: 'Module 2: Pagbuo ng Portfolio na Nagpapanalo ng Kliyente',
            duration: '1.5 Linggo',
            lessons: 8,
            topics: ['Pumili ng 2 Killer Projects sa halip na 10 clone apps', 'Live Deployment at Case Study Documentation', 'Writing High-Converting Proposals'],
          },
          {
            title: 'Module 3: Client Communication at Long-Term Retainers',
            duration: '1.5 Linggo',
            lessons: 10,
            topics: ['Negotiation at pagtatakda ng tamang rate', 'Handling revisions nang may malasakit at propesyonalismo', 'Direct Bank Payouts via GoTyme at GCash'],
          }
        ]
      }
    ]
  },
  {
    id: 'dev-elena-gomez',
    name: 'Ate Elena Gomez',
    handle: '@elenagomez_mahabi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Principal Design Systems Lead (Ex-Maya) & MAHABI+ Founder',
    specialty: 'Human Experience Design, Figma Tokens & Malasakit UX',
    category: 'design',
    location: 'Quezon City, Metro Manila, Philippines',
    rating: 4.97,
    reviewCount: 540,
    studentsCount: 2470,
    coursesCount: 2,
    bio: 'Nanguna sa paggawa ng design system ng Maya financial app para sa 50M+ na Pilipino. Tagapagtatag ng MAHABI+ community na naghahabi ng malasakit, hospitality, at belonginess sa modernong teknolohiya.',
    credentials: 'Lead UI/UX Architect Maya PH • MAHABI+ Community Leader • Figma Community Advocate',
    companyOrBackground: 'MAHABI+ • Ex-Maya PH Design Lead',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://mahabi.org',
    featuredSkillTags: ['Figma Tokens', 'Malasakit UX', 'MAHABI+ Community', 'Design Systems', 'WCAG Accessibility', 'Human Hospitality'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-elena-figma-tokens',
        title: 'Enterprise Design Systems with Figma: Variables, Tokens & Multi-Brand Foundations',
        category: 'creative',
        categoryLabel: 'Product Design & UI/UX',
        slug: 'enterprise-design-systems-figma-tokens',
        badge: 'MAHABI+ Pick',
        level: 'Intermediate',
        instructor: {
          name: 'Ate Elena Gomez',
          role: 'MAHABI+ Founder & Ex-Maya Design Lead',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'Lead UI/UX Maya PH • Figma Community Advocate',
        },
        rating: 4.98,
        reviewCount: 360,
        activeLearners: 1620,
        lessonsCount: 28,
        duration: '4 Linggo',
        description: 'Matutunan ang eksaktong sistema ng design tokens at variables na ginagamit sa mga pinakamalalaking fintech apps sa Pilipinas, na may pagpapahalaga sa malasakit at accessibility.',
        skills: ['Figma Variables', 'Design Tokens', 'WCAG 2.2 AA', 'Auto Layout 5.0', 'Tokens Studio', 'Design Handoff'],
        colorTheme: 'rose',
        popular: true,
        published: true,
        price: 39,
        originalPrice: 79,
        levelIndex: 1,
        careerMilestone: 'Enterprise Design Systems Architect',
        isPaid: true,
        modules: [
          {
            title: 'Module 1: Design Tokens at Variables sa Figma',
            duration: '1 Linggo',
            lessons: 7,
            topics: ['Color modes: Light, Dark, High Contrast', 'Typography Scales para sa Pilipino mobile screens', 'Spacers and Tokens'],
          },
          {
            title: 'Module 2: Malasakit UX: Pagdidisenyo para sa Lahat',
            duration: '1.5 Linggo',
            lessons: 11,
            topics: ['WCAG Accessibility Standards', 'Micro-interactions na may Hospitality', 'Design Handoff to Engineers'],
          }
        ]
      }
    ]
  },
  {
    id: 'dev-maria-santos',
    name: 'Ate Maria Santos',
    handle: '@mariasantos_flutter',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Senior Mobile Architect & Google Developer Expert',
    specialty: 'Cross-Platform Mobile Engineering & Flutter 3',
    category: 'mobile',
    location: 'BGC, Taguig, Philippines',
    rating: 4.96,
    reviewCount: 428,
    studentsCount: 1840,
    coursesCount: 1,
    bio: 'Google Developer Expert sa Flutter at Dart. Dating Mobile Lead sa Grab Philippines. May malasakit na magturo ng malinis at scalable na mobile apps sa mga kapwa Pilipinong developers.',
    credentials: 'Google Developer Expert (Flutter) • Ex-Grab PH Mobile Lead',
    companyOrBackground: 'Ex-Grab PH • Google Developer Expert',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://mariasantos.dev',
    featuredSkillTags: ['Flutter 3', 'Dart 3', 'Riverpod 2.5', 'Clean Architecture', 'Offline First', 'Android/iOS'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-maria-flutter-clean',
        title: 'Production Flutter 3 & Dart: Clean Architecture, Riverpod & Offline-First Mobile Apps',
        category: 'stem',
        categoryLabel: 'Mobile Engineering',
        slug: 'flutter-clean-architecture-riverpod',
        badge: 'GDE Masterclass',
        level: 'Intermediate',
        instructor: {
          name: 'Ate Maria Santos',
          role: 'Google Developer Expert & Ex-Grab Mobile Lead',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'Google Developer Expert (Flutter & Dart)',
        },
        rating: 4.97,
        reviewCount: 284,
        activeLearners: 1240,
        lessonsCount: 32,
        duration: '6 Linggo',
        description: 'Bumuo ng enterprise Flutter mobile apps gamit ang clean architecture, Riverpod 2.5, at local SQLite storage na angkop sa Philippine connectivity conditions.',
        skills: ['Flutter 3', 'Dart 3', 'Riverpod 2.5', 'Clean Architecture', 'Drift SQLite', 'Push Notifications'],
        colorTheme: 'blue',
        popular: true,
        published: true,
        price: 49,
        originalPrice: 99,
        levelIndex: 1,
        careerMilestone: 'Enterprise Flutter Engineer',
        isPaid: true,
      }
    ]
  },
  {
    id: 'dev-marco-reyes',
    name: 'Bro. Marco Reyes, MSc',
    handle: '@marcoreyes_ai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Staff AI Engineer & Nvidia Certified Instructor',
    specialty: 'Generative AI, PyTorch & Large Language Models',
    category: 'ai',
    location: 'Cebu IT Park, Cebu City, Philippines',
    rating: 4.98,
    reviewCount: 612,
    studentsCount: 2390,
    coursesCount: 1,
    bio: 'Machine Learning researcher mula sa Cebu na nag-aral at nagtrabaho sa A*STAR Singapore. Masugid na nagtuturo ng LLM fine-tuning at PyTorch para sa mga kababayan sa Visayas at buong bansa.',
    credentials: 'MSc AI • Ex-A*STAR Singapore • Nvidia DLI Instructor',
    companyOrBackground: 'Ex-A*STAR Singapore • FinTech AI Architect',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://marcoreyes.ai',
    featuredSkillTags: ['PyTorch', 'LLMs', 'Hugging Face', 'QLoRA', 'vLLM', 'FastAPI', 'RAG'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-marco-pytorch-llm',
        title: 'Practical PyTorch & Fine-Tuning Open-Source LLMs (Llama 3 & Mistral) on GPUs',
        category: 'stem',
        categoryLabel: 'Artificial Intelligence',
        slug: 'pytorch-finetuning-open-source-llms',
        badge: 'Nvidia Certified',
        level: 'Advanced',
        instructor: {
          name: 'Bro. Marco Reyes, MSc',
          role: 'Staff AI Engineer & Nvidia Certified Instructor',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'MSc AI • Ex-A*STAR Singapore',
        },
        rating: 4.98,
        reviewCount: 390,
        activeLearners: 1470,
        lessonsCount: 36,
        duration: '6 Linggo',
        description: 'Matutunan ang parameter-efficient fine-tuning (PEFT, QLoRA), transformer architecture, at low-latency model serving gamit ang vLLM at FastAPI.',
        skills: ['PyTorch', 'Hugging Face', 'Llama 3', 'vLLM', 'GPU Tuning', 'FastAPI'],
        colorTheme: 'purple',
        popular: true,
        published: true,
        price: 79,
        originalPrice: 149,
        levelIndex: 1,
        careerMilestone: 'Production LLM Engineer',
        isPaid: true,
      }
    ]
  },
  {
    id: 'dev-rafael-cruz',
    name: 'Bro. Rafael "Raffy" Cruz',
    handle: '@raffycruz_web3',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Lead Web3 & Smart Contract Security Engineer',
    specialty: 'Solidity, Rust Solana & DeFi Protocol Development',
    category: 'web3',
    location: 'Makati City, Philippines',
    rating: 4.92,
    reviewCount: 295,
    studentsCount: 1310,
    coursesCount: 1,
    bio: 'Smart contract security auditor mula Makati na may pusong magturo ng ligtas at etikal na Web3 programming sa kabataang Pilipino.',
    credentials: 'OpenZeppelin Fellow • Solana Manila Champion',
    companyOrBackground: 'OpenZeppelin Fellow • Web3 Auditor',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://raffycruz.eth',
    featuredSkillTags: ['Solidity', 'Foundry', 'Rust', 'Anchor', 'DeFi', 'Auditing'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-rafael-solidity-evm',
        title: 'Solidity & EVM Deep Dive: Writing Gas-Optimized & Secure Smart Contracts',
        category: 'stem',
        categoryLabel: 'Web3 & Blockchain',
        slug: 'solidity-evm-gas-optimized-smart-contracts',
        badge: 'Web3 Mastery',
        level: 'Advanced',
        instructor: {
          name: 'Bro. Rafael Cruz',
          role: 'Smart Contract Auditor & OpenZeppelin Fellow',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'OpenZeppelin Fellow • Solana Manila Champion',
        },
        rating: 4.93,
        reviewCount: 180,
        activeLearners: 790,
        lessonsCount: 30,
        duration: '5 Linggo',
        description: 'Sumulat ng secure at gas-optimized smart contracts gamit ang Foundry at formal testing practices.',
        skills: ['Solidity', 'Foundry', 'Gas Optimization', 'Fuzz Testing', 'DeFi Vaults'],
        colorTheme: 'amber',
        popular: true,
        published: true,
        price: 69,
        originalPrice: 119,
        levelIndex: 1,
        careerMilestone: 'Certified Smart Contract Security Engineer',
        isPaid: true,
      }
    ]
  },
  {
    id: 'dev-kenji-tanaka',
    name: 'Kuya Kenji Tanaka',
    handle: '@kenji_sec',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    roleTitle: 'Senior Offensive Security Specialist & OSCP',
    specialty: 'Ethical Hacking, Penetration Testing & AppSec',
    category: 'cybersecurity',
    location: 'Clark Freeport Zone, Pampanga / Tokyo',
    rating: 4.95,
    reviewCount: 410,
    studentsCount: 1730,
    coursesCount: 1,
    bio: 'Offensive security researcher na may malasakit sa cybersecurity defense ng mga kumpanya at institusyon sa Pilipinas.',
    credentials: 'OSCP Certified • HackerOne Top 50 Researcher',
    companyOrBackground: 'Red Team Consultant • HackerOne Top 50',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://kenjisec.io',
    featuredSkillTags: ['Burp Suite Pro', 'OWASP Top 10', 'AppSec', 'SQLi', 'SSRF', 'Penetration Testing'],
    payoutBadge: 'GCash & GoTyme Verified Merchant',
    courses: [
      {
        id: 'track-kenji-web-pentesting',
        title: 'Ethical Hacking & Web Penetration Testing: OWASP Top 10, Burp Suite & Safe Labs',
        category: 'stem',
        categoryLabel: 'Cybersecurity',
        slug: 'ethical-hacking-web-pentesting-owasp-burp',
        badge: 'Defcon Grade',
        level: 'Advanced',
        instructor: {
          name: 'Kuya Kenji Tanaka',
          role: 'Senior Offensive Security Specialist & OSCP',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
          verified: true,
          credentials: 'OSCP Certified • HackerOne Top 50 Researcher',
        },
        rating: 4.96,
        reviewCount: 260,
        activeLearners: 1050,
        lessonsCount: 30,
        duration: '5 Linggo',
        description: 'Hands-on offensive penetration testing labs sa ligtas na simulated target environments para sa proteksyon ng web applications.',
        skills: ['Burp Suite', 'OWASP Top 10', 'Penetration Testing', 'API Security', 'Responsible Disclosure'],
        colorTheme: 'red',
        popular: true,
        published: true,
        price: 69,
        originalPrice: 119,
        levelIndex: 1,
        careerMilestone: 'Certified Application Penetration Tester',
        isPaid: true,
      }
    ]
  }
];

export const getAllTenantCourses = (): Track[] => {
  const courses: Track[] = [];
  COMMUNITY_DEVELOPERS.forEach(dev => {
    dev.courses.forEach(course => {
      courses.push(course);
    });
  });
  return courses;
};

export const getDeveloperById = (id: string): CommunityDeveloper | undefined => {
  return COMMUNITY_DEVELOPERS.find(dev => dev.id === id);
};

export const getDeveloperByCourseId = (courseId: string): CommunityDeveloper | undefined => {
  return COMMUNITY_DEVELOPERS.find(dev => dev.courses.some(c => c.id === courseId));
};

export const filterDevelopers = (
  category: TenantCategory,
  searchQuery: string = ''
): CommunityDeveloper[] => {
  const query = searchQuery.toLowerCase().trim();
  return COMMUNITY_DEVELOPERS.filter(dev => {
    const matchesCategory = category === 'all' || dev.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesName = dev.name.toLowerCase().includes(query);
    const matchesSpecialty = dev.specialty.toLowerCase().includes(query);
    const matchesBio = dev.bio.toLowerCase().includes(query);
    const matchesSkills = dev.featuredSkillTags.some(s => s.toLowerCase().includes(query));
    const matchesCourses = dev.courses.some(c => 
      c.title.toLowerCase().includes(query) || 
      c.description.toLowerCase().includes(query) ||
      c.skills.some(sk => sk.toLowerCase().includes(query))
    );

    return matchesName || matchesSpecialty || matchesBio || matchesSkills || matchesCourses;
  });
};

// ============================================================================
// UPSKWELA-INSPIRED DISCOVER HUB DATA (MATCHING SCREENSHOT media_1789080298369)
// ============================================================================

export const ZAN_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="zanGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230a0a0c"/><stop offset="50%" stop-color="%23141419"/><stop offset="100%" stop-color="%23050507"/></linearGradient><radialGradient id="goldGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23f59e0b" stop-opacity="0.3"/><stop offset="100%" stop-color="%23f59e0b" stop-opacity="0"/></radialGradient></defs><rect width="600" height="338" fill="url(%23zanGrad)"/><circle cx="300" cy="160" r="180" fill="url(%23goldGlow)"/><g transform="translate(130, 95)"><polygon points="50,5 95,30 95,82 50,107 5,82 5,30" fill="none" stroke="%23eab308" stroke-width="7" stroke-linejoin="round"/><polygon points="50,20 81,37 81,75 50,92 19,75 19,37" fill="%2318181b" stroke="%23facc15" stroke-width="2"/><text x="50" y="66" fill="%23facc15" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="30" text-anchor="middle">ZN</text><text x="120" y="55" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="36" letter-spacing="2">ZAN</text><text x="120" y="88" fill="%23f1f5f9" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" letter-spacing="4">COMMUNITY</text><text x="122" y="112" fill="%23a1a1aa" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" letter-spacing="1">FULL-STACK WEB &amp; FREELANCING</text></g></svg>`;

export const RAKETERA_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="raketGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%234c0519"/><stop offset="50%" stop-color="%23881337"/><stop offset="100%" stop-color="%231f040b"/></linearGradient><radialGradient id="redGlow" cx="25%" cy="50%" r="55%"><stop offset="0%" stop-color="%23f43f5e" stop-opacity="0.45"/><stop offset="100%" stop-color="%23f43f5e" stop-opacity="0"/></radialGradient></defs><rect width="600" height="338" fill="url(%23raketGrad)"/><circle cx="150" cy="170" r="160" fill="url(%23redGlow)"/><g transform="translate(65, 75)"><text x="40" y="145" fill="%23fb7185" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="130" font-style="italic">R</text></g><g transform="translate(195, 105)"><text x="0" y="42" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34">RaketEra</text><text x="180" y="40" fill="%23fde047" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="18">Academy</text><text x="0" y="68" fill="%23fecdd3" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="14">By Katherine Mejia</text><text x="0" y="106" fill="%23fde047" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="18">Your Raket Era Starts Here.</text><text x="0" y="128" fill="%23ffe4e6" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="11">Learn the skills to build, market, and grow your digital business.</text></g></svg>`;

export const MAHABIPLUS_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="mahabiGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23ffffff"/><stop offset="65%" stop-color="%23f8fafc"/><stop offset="100%" stop-color="%230f172a"/></linearGradient><linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23d97706"/><stop offset="50%" stop-color="%23fbbf24"/><stop offset="100%" stop-color="%231e3a8a"/></linearGradient></defs><rect width="600" height="338" fill="url(%23mahabiGrad)"/><g transform="translate(45, 65)"><circle cx="50" cy="40" r="14" fill="%230284c7"/><circle cx="85" cy="28" r="14" fill="%23f59e0b"/><circle cx="120" cy="40" r="14" fill="%230284c7"/><path d="M 30,75 C 30,52 70,52 70,75 Z" fill="%230284c7"/><path d="M 65,68 C 65,46 105,46 105,68 Z" fill="%23f59e0b"/><path d="M 100,75 C 100,52 140,52 140,75 Z" fill="%230284c7"/><text x="160" y="58" fill="%230f172a" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="40" letter-spacing="3">MAHABI</text><text x="355" y="58" fill="%23f59e0b" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="40">+</text><text x="160" y="85" fill="%230284c7" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14">Weaving Humans. Building Futures. Creating Impact.</text></g><path d="M 0,220 Q 150,180 300,210 T 600,190 L 600,338 L 0,338 Z" fill="%231e3a8a"/><path d="M 0,240 Q 200,200 400,230 T 600,210 L 600,338 L 0,338 Z" fill="url(%23goldRibbon)" opacity="0.85"/><path d="M 0,265 Q 250,230 500,250 T 600,240 L 600,338 L 0,338 Z" fill="%230f172a"/></svg>`;

export const BOSSROD_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="rodGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23030712"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%23020617"/></linearGradient><radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%2306b6d4" stop-opacity="0.35"/><stop offset="100%" stop-color="%2306b6d4" stop-opacity="0"/></radialGradient></defs><rect width="600" height="338" fill="url(%23rodGrad)"/><circle cx="300" cy="160" r="190" fill="url(%23cyanGlow)"/><g transform="translate(90, 110)"><rect x="0" y="0" width="70" height="70" rx="18" fill="%2306b6d4" fill-opacity="0.15" stroke="%2306b6d4" stroke-width="3"/><text x="35" y="48" fill="%2306b6d4" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" text-anchor="middle">&lt;/&gt;</text><text x="90" y="42" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" letter-spacing="1">bossROD</text><text x="260" y="40" fill="%2306b6d4" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="18">ACADEMY</text><text x="90" y="68" fill="%2394a3b8" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" letter-spacing="2">NEW ERA SOFTWARE ENGINEERING IN AI</text></g></svg>`;

export const EPICADEMY_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="epicGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230f172a"/><stop offset="50%" stop-color="%231e1b4b"/><stop offset="100%" stop-color="%230369a1"/></linearGradient><radialGradient id="amberGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23f59e0b" stop-opacity="0.3"/><stop offset="100%" stop-color="%23f59e0b" stop-opacity="0"/></radialGradient></defs><rect width="600" height="338" fill="url(%23epicGrad)"/><circle cx="300" cy="160" r="180" fill="url(%23amberGlow)"/><g transform="translate(90, 105)"><polygon points="40,5 75,25 75,65 40,85 5,65 5,25" fill="%231e293b" stroke="%2338bdf8" stroke-width="4"/><text x="40" y="55" fill="%2338bdf8" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="32" text-anchor="middle">E</text><text x="95" y="42" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" letter-spacing="2">EPICADEMY</text><text x="95" y="70" fill="%23fbbf24" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13" letter-spacing="2">ESKWELA NG BAYAN • ZERO TO HERO</text></g></svg>`;

export const FLUTTER_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="flutGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23042940"/><stop offset="100%" stop-color="%23005c97"/></linearGradient></defs><rect width="600" height="338" fill="url(%23flutGrad)"/><g transform="translate(85, 110)"><polygon points="35,10 70,45 50,65 15,30" fill="%2340c4ff"/><polygon points="50,65 70,85 45,85 35,75" fill="%230288d1"/><text x="95" y="46" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="30">Flutter Builders PH</text><text x="95" y="72" fill="%2380d8ff" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" letter-spacing="2">MOBILE &amp; DART DEVELOPERS</text></g></svg>`;

export const TESDA_CSS_BANNER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 338" width="600" height="338"><defs><linearGradient id="tesdaGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230b1e36"/><stop offset="50%" stop-color="%231e3a8a"/><stop offset="100%" stop-color="%230284c7"/></linearGradient><radialGradient id="blueGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%2338bdf8" stop-opacity="0.3"/><stop offset="100%" stop-color="%2338bdf8" stop-opacity="0"/></radialGradient></defs><rect width="600" height="338" fill="url(%23tesdaGrad)"/><circle cx="300" cy="160" r="180" fill="url(%23blueGlow)"/><g transform="translate(70, 95)"><rect x="0" y="0" width="80" height="80" rx="16" fill="%231e293b" stroke="%23facc15" stroke-width="4"/><text x="40" y="52" fill="%23facc15" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" text-anchor="middle">CSS</text><text x="105" y="44" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="30" letter-spacing="1">TESDA CSS NC II</text><text x="105" y="72" fill="%23facc15" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="2">VOCATIONAL TECH MASTERY HUB</text><text x="107" y="96" fill="%23bae6fd" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="11">4 CORE COMPETENCIES: ICCS • SUCN • SUCS • MRCSN</text></g></svg>`;

export const COMMUNITY_SPACES: CommunitySpace[] = [
  {
    id: 'comm-tesda-css',
    name: 'TESDA CSS NC II Vocational Hub',
    creatorName: 'Engr. Joven Nel Jed Aviguetero, LPT, TM1',
    badge: '★ TESDA NC II',
    bannerImage: TESDA_CSS_BANNER_SVG,
    description: 'The official TVET study space for Computer Systems Servicing NC II. Step-by-step video labs, rubrics, and assessment review.',
    membersCount: 2860,
    priceLabel: 'FREE',
    isVerified: true,
    category: 'academy',
  },
  {
    id: 'comm-zan',
    name: 'ZAN COMMUNITY',
    creatorName: 'Daniel Zan Baltazar',
    bannerImage: ZAN_BANNER_SVG,
    description: 'A community built by a Full-Stack Web Developer sharing real-world freelancing experiences, tech...',
    membersCount: 75,
    priceLabel: 'FREE',
    isVerified: true,
    category: 'community',
  },
  {
    id: 'comm-raketera',
    name: 'RaketEra Academy by Katherine Mejia',
    creatorName: 'Katherine Mejia',
    badge: '★ NEW!',
    bannerImage: RAKETERA_BANNER_SVG,
    description: 'RaketEra Academy by KM is a digital business and skills community for Filipinos ready to explore their next...',
    membersCount: 3,
    priceLabel: '₱2,497 /month',
    isVerified: true,
    category: 'academy',
  },
  {
    id: 'comm-mahabi',
    name: 'MAHABI+',
    creatorName: 'Elena Gomez',
    bannerImage: MAHABIPLUS_BANNER_SVG,
    description: 'MAHABI+ is a Human Experience community, woven together through malasakit, hospitality, belonging,...',
    membersCount: 5,
    priceLabel: 'FREE',
    isVerified: true,
    category: 'design',
  },
  {
    id: 'comm-bossrod',
    name: 'bossROD Academy',
    creatorName: 'Kuya bossROD',
    bannerImage: BOSSROD_BANNER_SVG,
    description: 'New Era Software Engineering in AI. Architecting scalable distributed systems and senior developer workflows.',
    membersCount: 424,
    priceLabel: 'FREE',
    isVerified: true,
    category: 'academy',
  },
  {
    id: 'comm-epicademy',
    name: 'EPICADEMY Eskwela',
    creatorName: 'Pastor Joven Nel Jed Aviguetero',
    bannerImage: EPICADEMY_BANNER_SVG,
    description: 'Led by Pastor Joven Nel Jed Aviguetero. Full-stack cloud engineering, faith, and servant leadership in tech.',
    membersCount: 1980,
    priceLabel: 'FREE',
    isVerified: true,
    category: 'community',
  },
  {
    id: 'comm-flutter',
    name: 'Flutter Mobile Builders PH',
    creatorName: 'Maria Santos',
    bannerImage: FLUTTER_BANNER_SVG,
    description: 'Cross-platform mobile development, Riverpod state management, and Google Play Store deployment workflows.',
    membersCount: 1840,
    priceLabel: 'FREE',
    isVerified: true,
    category: 'community',
  },
];

export const DIGITAL_PRODUCTS: DigitalProductItem[] = [
  {
    id: 'prod-tesda-css-bundle',
    title: 'TESDA CSS NC II Complete Reviewer, Job Orders & Oral Q&A Suite',
    creatorName: 'Engr. Joven Nel Jed Aviguetero, LPT, TM1',
    bannerImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    description: 'Official TESDA Training Regulations companion: institutional assessment scorecards, mock oral questions, and printable job order sheets.',
    downloadsCount: 1650,
    priceLabel: '₱499',
    isVerified: true,
    fileType: 'PDF & Google Sheets Templates',
  },
  {
    id: 'prod-html-starter',
    title: 'Bayanihan HTML5 & CSS3 Zero-to-Hero Project Starter Kit',
    creatorName: 'Pastor Joven Nel Jed Aviguetero',
    bannerImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    description: 'Complete starter boilerplate with 10 responsive Philippine business layouts, semantic HTML5 tags, and clean code documentation.',
    downloadsCount: 1420,
    priceLabel: 'FREE',
    isVerified: true,
    fileType: 'ZIP • Codebase & Assets',
  },
  {
    id: 'prod-sheets-rubrics',
    title: 'Automated Google Sheets Classroom & Grading Rubric System',
    creatorName: 'EPICADEMY Engineering',
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    description: 'Pre-configured Google Sheets with student score tracking, automated letter grades, GCash payment verification tabs, and weekly attendance.',
    downloadsCount: 890,
    priceLabel: '₱499',
    isVerified: true,
    fileType: 'Google Sheets Template',
  },
  {
    id: 'prod-freelance-contract',
    title: 'Philippine Tech Freelance Legal Contract & Invoicing Kit',
    creatorName: 'Daniel Zan Baltazar',
    bannerImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    description: 'DTI/BIR compliant client service agreement, milestone payment terms, GoTyme/GCash invoice templates, and dispute protection clauses.',
    downloadsCount: 650,
    priceLabel: '₱799',
    isVerified: true,
    fileType: 'PDF & Notion Kit',
  },
  {
    id: 'prod-system-design-cheatsheet',
    title: 'AI Era Senior Software Engineering & Architecture Blueprint',
    creatorName: 'Kuya bossROD',
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    description: 'Microservices, cache invalidation strategies, database sharding visual guides, and technical interview system design cheatsheets.',
    downloadsCount: 1180,
    priceLabel: '₱1,299',
    isVerified: true,
    fileType: 'PDF & Excalidraw',
  },
];

export const COACHING_PACKAGES: CoachingItem[] = [
  {
    id: 'coach-pastor-jed',
    title: '1-on-1 Full-Stack Code Review & Pastoral Tech Mentorship',
    mentorName: 'Pastor Joven Nel Jed Aviguetero',
    mentorRole: 'Lead Cloud Architect & Pastor-Mentor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    description: '60-minute deep dive on your web project code, architecture review, career guidance, and pastoral prayer for clarity & confidence.',
    duration: '60 minutes',
    priceLabel: '₱1,499',
    isVerified: true,
  },
  {
    id: 'coach-bossrod',
    title: 'Senior Software Engineer & AI Era Career Strategy',
    mentorName: 'Kuya bossROD',
    mentorRole: 'Founder & Senior Software Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    description: '45-minute 1-on-1 strategic session on breaking into senior engineering, architectural thinking, and standing out in the AI era.',
    duration: '45 minutes',
    priceLabel: '₱2,499',
    isVerified: true,
  },
  {
    id: 'coach-daniel-zan',
    title: 'Full-Stack Freelancing & Client Acquisition Coaching',
    mentorName: 'Daniel Zan Baltazar',
    mentorRole: 'Full-Stack Web Dev & Community Builder',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    description: 'Personalized portfolio review, Upwork/LinkedIn profile optimization, and live pricing strategy for international tech clients.',
    duration: '60 minutes',
    priceLabel: '₱1,899',
    isVerified: true,
  },
  {
    id: 'coach-elena-mahabi',
    title: 'Product Design & Malasakit UX Audit',
    mentorName: 'Elena Gomez',
    mentorRole: 'Design Systems Lead (MAHABI+)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    description: 'Complete UX audit of your web or mobile app interface with actionable Figma feedback focusing on empathy and user conversion.',
    duration: '45 minutes',
    priceLabel: '₱1,299',
    isVerified: true,
  },
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'shop-hoodie',
    title: 'EPICADEMY Bayanihan Dev Oversized Hoodie',
    creatorName: 'EPICADEMY Official',
    bannerImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
    description: 'Ultra-soft heavy blend cotton hoodie featuring the embroidered Bayanihan Zero-to-Hero emblem.',
    priceLabel: '₱1,250',
    inStock: true,
    rating: 5.0,
  },
  {
    id: 'shop-deskmat',
    title: 'Zero-to-Hero Mechanical Keyboard Deskmat (900x400mm)',
    creatorName: 'ZAN x EPICADEMY',
    bannerImage: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80',
    description: 'Water-resistant micro-weave cloth with non-slip rubber base and Philippine developer shortcuts.',
    priceLabel: '₱750',
    inStock: true,
    rating: 4.9,
  },
  {
    id: 'shop-bottle',
    title: 'Clean Code & Faith Insulated Tumbler (32oz)',
    creatorName: 'EPICADEMY Official',
    bannerImage: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    description: 'Keep coffee hot for 12 hours. Laser-engraved with “Walang Kapatid na Maiiwan”.',
    priceLabel: '₱650',
    inStock: true,
    rating: 5.0,
  },
  {
    id: 'shop-stickers',
    title: 'Philippine Tech Developer Vinyl Sticker Pack (25 pcs)',
    creatorName: 'MAHABI+ x EPICADEMY',
    bannerImage: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    description: 'Weatherproof vinyl stickers featuring bossROD, ZAN, GCash Ready, HTML5, and Bayanihan tech artwork.',
    priceLabel: '₱180',
    inStock: true,
    rating: 4.8,
  },
];

