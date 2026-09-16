import type { CommunityPost } from '../types';

export const CHANNELS = [
  { id: 'all', name: '🔥 Lahat ng Usapan', count: 1840 },
  { id: 'ideas', name: '💡 Ideya at Proyekto (Idea Hub)', count: 640 },
  { id: 'devotional', name: '🙏 Gabay at Panalangin', count: 96 },
  { id: 'bossrod', name: '🚀 bossROD Academy Circle', count: 520 },
  { id: 'tesda-workshop', name: '🛠️ TESDA CSS NC II Workshop', count: 390 },
  { id: 'code-help', name: '💻 Tanungan sa Code at Web Dev', count: 480 },
  { id: 'zan-mindset', name: '💼 ZAN Community & Freelancing', count: 430 },
  { id: 'mahabi-design', name: '🎨 MAHABI+ Malasakit Design', count: 310 },
  { id: 'victories', name: '🎉 Pasasalamat at Tagumpay', count: 260 },
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
      role: 'Tagapagtatag & ICT Trainer / LPT',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Punong Guro',
    },
    timestamp: '25 mins ang nakalipas',
    title: '💡 Ideya ng Bayan: Open-Source Offline LMS para sa mga Public High School sa Probinsya',
    content: 'Mga kapatid at kapwa developers, may naisip akong proyektong pampubliko: Gumawa tayo ng isang lightweight, offline-first local web portal na maaaring patakbuhin sa isang lumang desktop o Raspberry Pi sa computer laboratory ng mga eskwelahan na walang internet connection (gamit ang ating skills sa TESDA CSS NC II Networking at Client-Server architecture).\n\nMaaaring i-cache dito ang mga HTML5, CSS3, at programming worksheets para kahit walang Wi-Fi data ang mag-aaral, makakapag-code sila sa browser. Sino ang gustong makiisa at mag-ambag sa open-source code nito dito sa ating komunidad?',
    likes: 482,
    repliesCount: 4,
    isLiked: true,
    tags: ['IdeyaBayan', 'OpenSource', 'TESDA', 'OfflineLMS', 'Collab'],
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
        content: 'Napakagandang adhikain po nito Kuya Jed! Pwede akong tumulong sa paggawa ng Docker container at NGINX reverse proxy configuration para plug-and-play na lang sa lab switches.',
        timestamp: '15 mins ang nakalipas',
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
          tierBadge: 'Level 5 Mag-aaral'
        },
        content: 'Gusto ko pong mag-volunteer sa UI design at pag-convert ng modules sa Progressive Web App (PWA) para may offline service worker caching!',
        timestamp: '10 mins ang nakalipas',
        likes: 29,
        isLiked: true,
      },
      {
        id: 'rep-idea-3',
        postId: 'post-idea-1',
        author: {
          name: 'Bro. Arnel Reyes',
          role: 'TESDA CSS NC II Passer',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Certified NC II'
        },
        content: 'Pwede ko pong ibahagi ang script para sa Windows Server 2022 DHCP scope at DNS local resolution para auto-detect ng client PCs sa lab!',
        timestamp: '5 mins ang nakalipas',
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
      role: 'Founder ng bossROD Academy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Master Architect',
    },
    timestamp: '1 oras ang nakalipas',
    title: '💡 Micro-SaaS Ideya: GCash & Maya Instant QR Payment Tracker para sa mga Sari-Sari Stores',
    content: 'Naisip nyo ba kung gaano karaming nanay at tatay na may sari-sari store ang naloloko sa fake screenshot ng GCash payment? Kung gagawa tayo ng simpleng web app gamit ang Supabase Realtime at Webhook listener na magpapatunog ng audio confirmation ("₱150 natanggap mula kay Juan!") sa lumang Android phone nila, malaking tulong ito sa micro-entrepreneurs natin.\n\nNasa Level 6 at 7 ng ating Web Dev roadmap ang sapat na kaalaman para magawa ito gamit ang Node.js at PostgreSQL. Sino ang gustong bumuo ng MVP ngayong buwan?',
    likes: 395,
    repliesCount: 3,
    isLiked: false,
    tags: ['MicroSaaS', 'GCash', 'Maya', 'PinoyTech', 'IdeyaBayan'],
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
        content: 'Count me in Kuya bossROD! Pwede tayong gumamit ng Web Audio API para sa push notification sound.',
        timestamp: '40 mins ang nakalipas',
        likes: 22,
        isLiked: false,
      },
      {
        id: 'rep-idea-2-2',
        postId: 'post-idea-2',
        author: {
          name: 'Daniel Zan Baltazar',
          role: 'ZAN Community Founder',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
          isEducator: true,
          tierBadge: 'Mentor'
        },
        content: 'Napakagandang negosyo nito sa komunidad. Pwedeng subscription model na ₱99/month lang para abot-kaya ng bawat tindahan!',
        timestamp: '25 mins ang nakalipas',
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
      role: 'Tagapagtatag & Pastor-Mentor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Punong Guro',
    },
    timestamp: '2 oras ang nakalipas',
    title: '🙏 Paalala sa Araw na Ito: "Hindi ka huli, kapatid." Huwag matakot magsimula muli.',
    content: 'Marami sa inyo ang nag-message sa akin na nakakaramdam ng imposter syndrome kapag nakakakita ng ibang developers online na magagaling na. Kapatid, ang iyong takbuhin ay para sa iyo at sa iyong pamilya. Huwag mong ikumpara ang iyong simula sa gitna ng iba. Sa bawat linyang isinusulat mo, may kasama kang panalangin at buong komunidad na aalalay sa iyo.',
    likes: 312,
    repliesCount: 2,
    isLiked: true,
    tags: ['TechMindset', 'Bayanihan', 'Pananalig', 'HindiKaHuli'],
    replies: [
      {
        id: 'rep-1-1',
        postId: 'post-1',
        author: {
          name: 'Sister Mary Grace',
          role: 'Mag-aaral mula Cebu',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Masigasig na Mag-aaral'
        },
        content: 'Maraming salamat po Kuya Jed! Eksakto po ito sa pinagdadaanan ko kanina habang nagde-debug ng HTML tags. Nakakataba ng puso.',
        timestamp: '1 oras ang nakalipas',
        likes: 24,
        isLiked: false,
      },
      {
        id: 'rep-1-2',
        postId: 'post-1',
        author: {
          name: 'Bro. Joshua Dela Cruz',
          role: 'Level 3 Mag-aaral',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
          tierBadge: 'Mag-aaral'
        },
        content: 'Amen! Salamat sa paalala na ang ating pagsusumikap ay para sa Panginoon at sa ating mga mahal sa buhay.',
        timestamp: '35 mins ang nakalipas',
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
      role: 'Founder ng bossROD Academy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Master Architect',
    },
    timestamp: '3 oras ang nakalipas',
    title: '🔥 Bakit hindi ka dapat matakot sa AI: Gamitin itong kasangkapan para umasenso!',
    content: 'Sa ating mga kapwa developers dito sa EPICADEMY: Ang AI ay hindi kalaban kundi multiplier ng iyong talino. Kung naiintindihan mo ang computer science fundamentals at marunong kang mag-isip nang malalim, ikaw ang magmamando sa AI tools. Magkita-kita tayo sa ating darating na Sabado live session!',
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
        content: 'Totoo po ito. Simula noong ginamit ko ang Claude at Gemini bilang pair-programmer habang pinag-aaralan ang React state, dumoble ang bilis ko matuto.',
        timestamp: '2 oras ang nakalipas',
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
      role: 'Level 3 Mag-aaral mula Batangas',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      isEducator: false,
      tierBadge: 'Masigasig na Mag-aaral',
    },
    timestamp: '5 oras ang nakalipas',
    title: '😭 Salamat sa Panginoon at kay Kuya Jed! Naka-graduate na ako sa Level 1 HTML & CSS!',
    content: 'Akala ko dati hindi ko kaya mag-code dahil nagtatrabaho ako sa service crew sa umaga. Pero dahil sa step-by-step Taglish lessons at mga video assignments dito sa EPICADEMY, nakagawa ako ng unang responsive website para sa maliit na bakery ng nanay ko. Tuloy-tuloy lang tayo mga kapatid, may awa ang Diyos!',
    likes: 428,
    repliesCount: 2,
    isLiked: true,
    tags: ['Tagumpay', 'Pagsusumikap', 'HTML5', 'Inspirasyon'],
    replies: [
      {
        id: 'rep-3-1',
        postId: 'post-3',
        author: {
          name: 'Pastor Joven Nel Jed (Kuya Jed)',
          role: 'Tagapagtatag & Mentor',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          isEducator: true,
          tierBadge: 'Punong Guro'
        },
        content: 'Purihin ang Panginoon, Joshua! Tuwang-tuwa kami para sa iyo at sa iyong nanay. Patunay ka na walang pangarap na malayo sa masipag at may takot sa Diyos.',
        timestamp: '4 oras ang nakalipas',
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
      role: 'Founder ng ZAN COMMUNITY',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'Freelance Mentor',
    },
    timestamp: '8 oras ang nakalipas',
    title: '💡 3 Tips sa Pakikipag-usap sa Foreign Tech Clients nang may Respeto at Kumpiyansa',
    content: 'Kahit hindi perpekto ang English mo, ang pinakamahalaga sa dayuhang kliyente ay ang iyong "clarity, honesty, and reliability". Mag-commit lamang sa kaya mong gawin, mag-update araw-araw, at laging maging magalang. Ang dangal ng Pilipinong developer ay nasa katapatan.',
    likes: 189,
    repliesCount: 1,
    isLiked: false,
    tags: ['Freelancing', 'ZANCommunity', 'RemoteWork', 'Mindset'],
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
        content: 'Solid advice Sir Zan! Sobrang na-appreciate ng client ko sa US noong naging tapat ako sa delay imbis na mag-dahilan. Mas lalo silang nagtiwala.',
        timestamp: '6 oras ang nakalipas',
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
      role: 'MAHABI+ Lead (Ex-Maya)',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      isEducator: true,
      tierBadge: 'MAHABI+ Advocate',
    },
    timestamp: '12 oras ang nakalipas',
    title: '🎨 Ang Diwa ng Malasakit sa Pagdidisenyo ng Apps para sa mga Pilipino',
    content: 'Sa MAHABI+, naniniwala kami na ang UI/UX ay hindi lang tungkol sa magagandang kulay. Ito ay pakikiramay sa gumagamit—paano mapapadali ang pagpapadala ng pera ng isang OFW sa kanyang pamilya nang walang kalituhan? Iyon ang tunay na disenyo na may puso.',
    likes: 276,
    repliesCount: 1,
    isLiked: true,
    tags: ['MalasakitUX', 'MAHABI', 'HumanExperience', 'Figma'],
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
        content: 'Napaka-inspiring Ate Elena! Kaya pala iba ang impact ng Pinoy-centered design kapag may tunay na malasakit sa user.',
        timestamp: '10 oras ang nakalipas',
        likes: 21,
        isLiked: false,
      }
    ]
  }
];
