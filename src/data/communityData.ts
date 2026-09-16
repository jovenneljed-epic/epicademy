import type { CommunityPost } from '../types';

export const CHANNELS = [
  { id: 'all', name: '🔥 All Discussions', count: 1840 },
  { id: 'ideas', name: '💡 Ideas & Innovation Hub', count: 640 },
  { id: 'devotional', name: '🙏 Mentorship & Growth', count: 96 },
  { id: 'bossrod', name: '🚀 Software Architecture & Engineering', count: 520 },
  { id: 'tesda-workshop', name: '🛠️ TESDA CSS NC II Workshop', count: 390 },
  { id: 'code-help', name: '💻 Coding & Tech Q&A', count: 480 },
  { id: 'zan-mindset', name: '💼 Freelancing & Client Acquisition', count: 430 },
  { id: 'mahabi-design', name: '🎨 UI/UX & Design Systems', count: 310 },
  { id: 'victories', name: '🎉 Wins & Project Showcases', count: 260 },
];

export const INITIAL_POSTS: CommunityPost[] = [
  {
    id: 'post-idea-1',
    channel: 'ideas',
    trackCategory: 'stem',
    isIdea: true,
    ideaCategory: 'EdTech & Offline Learning',
    author: {
      name: 'Pastor Joven Nel Jed (Kuya Jed)',
      role: 'Founder & ICT Trainer / LPT',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Lead Instructor',
    },
    timestamp: '25 mins ago',
    title: '💡 Community Idea: Open-Source Offline LMS for Provincial Public High Schools',
    content: 'Fellow developers and learners, here is an idea for a public-impact project: Let us build a lightweight, offline-first local web portal that can run on an older desktop or Raspberry Pi in school computer labs without internet connectivity (leveraging our skills from TESDA CSS NC II Networking and Client-Server architecture).\n\nWe can cache HTML5, CSS3, and programming exercises locally so students can practice coding right in their browsers even without data. Who wants to join hands and contribute open-source code to this community initiative?',
    likes: 482,
    repliesCount: 4,
    isLiked: true,
    tags: ['CommunityIdea', 'OpenSource', 'TESDA', 'OfflineLMS', 'Collaboration'],
    replies: [
      {
        id: 'rep-idea-1',
        postId: 'post-idea-1',
        author: {
          name: 'Engr. Jomar Perez',
          role: 'Full-Stack Developer (Laguna)',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Level 7 Graduate'
        },
        content: 'Such a meaningful initiative, Kuya Jed! I can help build the Docker container and NGINX reverse proxy configuration for seamless plug-and-play deployment across lab switches.',
        timestamp: '15 mins ago',
        likes: 38,
        isLiked: false,
      },
      {
        id: 'rep-idea-2',
        postId: 'post-idea-1',
        author: {
          name: 'Ate Bea Santos',
          role: 'Frontend Enthusiast (Bacolod)',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Level 5 Apprentice'
        },
        content: 'I would love to volunteer on the UI design and convert modules into a Progressive Web App (PWA) with offline service worker caching!',
        timestamp: '10 mins ago',
        likes: 29,
        isLiked: true,
      },
      {
        id: 'rep-idea-3',
        postId: 'post-idea-1',
        author: {
          name: 'Bro. Arnel Reyes',
          role: 'TESDA CSS NC II Certified',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Certified NC II'
        },
        content: 'I can contribute the automated PowerShell script for Windows Server 2022 DHCP scopes and DNS local resolution so client PCs in the lab auto-detect the LMS!',
        timestamp: '5 mins ago',
        likes: 19,
        isLiked: false,
      }
    ]
  },
  {
    id: 'post-idea-2',
    channel: 'ideas',
    trackCategory: 'business',
    isIdea: true,
    ideaCategory: 'FinTech & Micro-SaaS',
    author: {
      name: 'Kuya bossROD',
      role: 'Founder of bossROD Academy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Master Architect',
    },
    timestamp: '1 hour ago',
    title: '💡 Micro-SaaS Idea: Instant QR Payment Tracker with Audio Alerts for Neighborhood Stores',
    content: 'Have you ever considered how many family-owned convenience stores struggle with fake payment confirmation screenshots? If we build a simple web utility with Supabase Realtime and Webhook listeners that triggers an immediate audio announcement ("₱150 received from customer!") on their Android phone or tablet, it will protect countless local merchants.\n\nLevel 6 and Level 7 of our Web Dev curriculum cover everything needed with Node.js and PostgreSQL. Who wants to team up and ship an MVP this month?',
    likes: 395,
    repliesCount: 3,
    isLiked: false,
    tags: ['MicroSaaS', 'FinTech', 'Realtime', 'Startup', 'CommunityIdea'],
    replies: [
      {
        id: 'rep-idea-2-1',
        postId: 'post-idea-2',
        author: {
          name: 'Christian Ramos',
          role: 'Level 6 Backend Apprentice',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Active Member'
        },
        content: 'Count me in, bossROD! We can use the browser Web Audio API for custom synthesized audio chime and notification sounds.',
        timestamp: '40 mins ago',
        likes: 22,
        isLiked: false,
      },
      {
        id: 'rep-idea-2-2',
        postId: 'post-idea-2',
        author: {
          name: 'Daniel Zan Baltazar',
          role: 'Founder of ZAN Community',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
          isEducator: true,
          tierBadge: 'Mentor'
        },
        content: 'This is a high-value community solution. A micro-subscription model at ₱99/month makes it accessible to every neighborhood store!',
        timestamp: '25 mins ago',
        likes: 31,
        isLiked: true,
      }
    ]
  },
  {
    id: 'post-1',
    channel: 'devotional',
    trackCategory: 'all',
    author: {
      name: 'Pastor Joven Nel Jed (Kuya Jed)',
      role: 'Founder & Faculty Mentor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Lead Instructor',
    },
    timestamp: '2 hours ago',
    title: '🙏 Daily Reflection: "You are not behind." Never be afraid to begin again.',
    content: 'Many of you have messaged me about battling imposter syndrome when seeing advanced developers online. Remember: your journey is your own, dedicated to your family and your future. Do not compare your beginning to someone else\'s middle. With every line of code you write, you are supported by prayer and a community that believes in your potential.',
    likes: 312,
    repliesCount: 2,
    isLiked: true,
    tags: ['DeveloperMindset', 'Growth', 'Faith', 'Encouragement'],
    replies: [
      {
        id: 'rep-1-1',
        postId: 'post-1',
        author: {
          name: 'Sister Mary Grace',
          role: 'Learner from Cebu',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Dedicated Student'
        },
        content: 'Thank you so much for this encouragement! This was exactly what I needed today while debugging layout issues. Truly heartening.',
        timestamp: '1 hour ago',
        likes: 24,
        isLiked: false,
      },
      {
        id: 'rep-1-2',
        postId: 'post-1',
        author: {
          name: 'Bro. Joshua Dela Cruz',
          role: 'Level 3 Student',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Student'
        },
        content: 'Amen! Thank you for the reminder that our diligence and hard work are for our purpose and our loved ones.',
        timestamp: '35 mins ago',
        likes: 18,
        isLiked: true,
      }
    ]
  },
  {
    id: 'post-2',
    channel: 'bossrod',
    trackCategory: 'stem',
    author: {
      name: 'Kuya bossROD',
      role: 'Founder of bossROD Academy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Master Architect',
    },
    timestamp: '3 hours ago',
    title: '🔥 Why You Shouldn\'t Fear AI: Harness It as Your Force Multiplier',
    content: 'To our developer community at EPICADEMY: AI is not a competitor, but a force multiplier for your intelligence. If you deeply grasp computer science fundamentals and structured problem-solving, you will direct and architect with AI tools rather than be replaced by them. See you all in our upcoming live Saturday session!',
    likes: 215,
    repliesCount: 1,
    isLiked: false,
    tags: ['AIEra', 'SoftwareEngineering', 'bossROD'],
    replies: [
      {
        id: 'rep-2-1',
        postId: 'post-2',
        author: {
          name: 'Kevin Tan',
          role: 'Junior React Developer',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Alumnus'
        },
        content: 'Spot on! Ever since using Claude and Gemini as pair-programmers while mastering React state management, my learning pace has doubled.',
        timestamp: '2 hours ago',
        likes: 15,
        isLiked: false,
      }
    ]
  },
  {
    id: 'post-3',
    channel: 'victories',
    trackCategory: 'stem',
    author: {
      name: 'Bro. Joshua Dela Cruz',
      role: 'Level 3 Student from Batangas',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      isEducator: false,
      tierBadge: 'Dedicated Student',
    },
    timestamp: '5 hours ago',
    title: '🎉 Breakthrough Moment: Successfully Completed Level 1 HTML & CSS Masterclass!',
    content: 'I used to think I could never learn how to program because I work morning shifts in food service. But thanks to the structured, step-by-step masterclasses and practical assignments here on EPICADEMY, I just built and launched the first responsive website for my mother\'s bakery business. Keep going everyone, consistent hard work pays off!',
    likes: 428,
    repliesCount: 2,
    isLiked: true,
    tags: ['SuccessStory', 'Dedication', 'HTML5', 'Inspiration'],
    replies: [
      {
        id: 'rep-3-1',
        postId: 'post-3',
        author: {
          name: 'Pastor Joven Nel Jed (Kuya Jed)',
          role: 'Founder & Mentor',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          isEducator: true,
          tierBadge: 'Lead Instructor'
        },
        content: 'Praise God, Joshua! We are thrilled for you and your family. You are living proof that no ambition is out of reach when powered by discipline, faith, and perseverance.',
        timestamp: '4 hours ago',
        likes: 84,
        isLiked: true,
      }
    ]
  },
  {
    id: 'post-4',
    channel: 'zan-mindset',
    trackCategory: 'business',
    author: {
      name: 'Daniel Zan Baltazar',
      role: 'Founder of ZAN COMMUNITY',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Freelance Mentor',
    },
    timestamp: '8 hours ago',
    title: '💡 3 Practical Principles for Communicating Confidently with Global Clients',
    content: 'Even if English is not your native language, global clients value clarity, honesty, and reliability above all else. Only commit to what you can deliver, communicate daily progress proactively, and always remain courteous. The hallmark of an outstanding developer is dependability and integrity.',
    likes: 189,
    repliesCount: 1,
    isLiked: false,
    tags: ['Freelancing', 'ZANCommunity', 'RemoteWork', 'ProfessionalGrowth'],
    replies: [
      {
        id: 'rep-4-1',
        postId: 'post-4',
        author: {
          name: 'Angelo Torres',
          role: 'Freelance Frontend Dev',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Member'
        },
        content: 'Invaluable advice, Sir Zan! My US client deeply appreciated full transparency about a delay instead of making excuses. It built lasting trust.',
        timestamp: '6 hours ago',
        likes: 16,
        isLiked: false,
      }
    ]
  },
  {
    id: 'post-5',
    channel: 'mahabi-design',
    trackCategory: 'creative',
    author: {
      name: 'Ate Elena Gomez',
      role: 'MAHABI+ Design Lead (Ex-Maya)',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'MAHABI+ Advocate',
    },
    timestamp: '12 hours ago',
    title: '🎨 The Spirit of Empathy and Malasakit in Designing Digital Products',
    content: 'At MAHABI+, we believe UI/UX design is more than aesthetic color palettes. It is about human empathy—how do we make sending funds home seamless and confusion-free for an overseas worker on a weak mobile connection? That is authentic, purpose-driven design.',
    likes: 276,
    repliesCount: 1,
    isLiked: true,
    tags: ['HumanCenteredDesign', 'MAHABI', 'UserExperience', 'Figma'],
    replies: [
      {
        id: 'rep-5-1',
        postId: 'post-5',
        author: {
          name: 'Carla Mendoza',
          role: 'UI Designer Student',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Member'
        },
        content: 'So inspiring, Elena! Truly shows the profound impact of empathetic, user-first design systems.',
        timestamp: '10 hours ago',
        likes: 21,
        isLiked: false,
      }
    ]
  }
];
