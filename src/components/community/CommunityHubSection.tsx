import { useState, useEffect, useMemo } from 'react';
import { INITIAL_POSTS, CHANNELS } from '../../data/communityData';
import type { CommunityPost, CommunityReply } from '../../types';
import { 
  MessageSquare, 
  ThumbsUp, 
  Users, 
  Send, 
  Sparkles, 
  RefreshCw, 
  Database,
  Calendar,
  Award,
  Lightbulb,
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Heart,
  Plus
} from 'lucide-react';
import { 
  fetchCommunityPosts, 
  createCommunityPost, 
  togglePostLike 
} from '../../lib/supabaseClient';

interface CommunityHubSectionProps {
  onOpenAuth: (mode: 'signup' | 'signin') => void;
  currentUser?: { email?: string; role?: string } | null;
}

const IDEA_CATEGORIES = [
  { id: '💡 App & SaaS Idea', label: '💡 App & SaaS Idea', color: 'bg-amber-100 text-amber-900 border-amber-300' },
  { id: '💻 Coding & Web Dev Question', label: '💻 Coding & Web Dev Question', color: 'bg-blue-100 text-blue-900 border-blue-300' },
  { id: '🛠️ TESDA Hardware & Systems', label: '🛠️ TESDA Hardware & Systems', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  { id: '🤝 Project Collaboration', label: '🤝 Project Collaboration', color: 'bg-purple-100 text-purple-900 border-purple-300' },
  { id: '🙏 Mentorship & Reflections', label: '🙏 Mentorship & Reflections', color: 'bg-rose-100 text-rose-900 border-rose-300' },
];

export const CommunityHubSection: React.FC<CommunityHubSectionProps> = ({ onOpenAuth, currentUser }) => {
  const [selectedChannel, setSelectedChannel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterIdeasOnly, setFilterIdeasOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'discussed'>('latest');

  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    try {
      const stored = localStorage.getItem('epicademy_community_posts');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_POSTS;
  });

  // Post composer state
  const [showPostComposer, setShowPostComposer] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostChannel, setNewPostChannel] = useState('ideas');
  const [newPostCategory, setNewPostCategory] = useState(IDEA_CATEGORIES[0].id);
  const [newPostTags, setNewPostTags] = useState('ideas, dev, community');
  const [guestAuthorName, setGuestAuthorName] = useState('');
  const [successBannerMsg, setSuccessBannerMsg] = useState<string | null>(null);

  // Reply drawer state: tracks which post has open discussion thread
  const [expandedPostId, setExpandedPostId] = useState<string | null>('post-idea-1');
  const [replyTextByPost, setReplyTextByPost] = useState<{ [postId: string]: string }>({});
  const [replyNameByPost, setReplyNameByPost] = useState<{ [postId: string]: string }>({});

  const [isSyncing, setIsSyncing] = useState(false);
  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false);

  const savePostsToStorage = (updatedPosts: CommunityPost[]) => {
    setPosts(updatedPosts);
    try {
      localStorage.setItem('epicademy_community_posts', JSON.stringify(updatedPosts));
    } catch {
      // storage unavailable
    }
  };

  const loadPosts = async () => {
    setIsSyncing(true);
    try {
      const { posts: dbPosts, error } = await fetchCommunityPosts();
      if (!error && dbPosts && dbPosts.length > 0) {
        // Merge dbPosts with local posts
        const dbIds = new Set(dbPosts.map(p => p.id));
        const merged = [...dbPosts, ...posts.filter(p => !dbIds.has(p.id))];
        savePostsToStorage(merged);
        setIsDatabaseConnected(true);
      } else {
        setIsDatabaseConnected(false);
      }
    } catch {
      setIsDatabaseConnected(false);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesChannel = selectedChannel === 'all' || p.channel === selectedChannel;
      const matchesIdeasOnly = !filterIdeasOnly || Boolean(p.isIdea || p.channel === 'ideas' || p.tags?.some(t => t.toLowerCase().includes('ideya') || t.toLowerCase().includes('idea')));
      
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.author.name.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q));

      return matchesChannel && matchesIdeasOnly && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'popular') return (b.likes || 0) - (a.likes || 0);
      if (sortBy === 'discussed') return (b.repliesCount || 0) - (a.repliesCount || 0);
      return 0; // Default matches reverse chrono insertion
    });
  }, [posts, selectedChannel, filterIdeasOnly, searchQuery, sortBy]);

  // Handle Like Post
  const handleLike = async (postId: string) => {
    const updated = posts.map(p => {
      if (p.id === postId) {
        const isLiked = Boolean(p.isLiked);
        const newLikes = isLiked ? Math.max(0, p.likes - 1) : p.likes + 1;
        return { ...p, likes: newLikes, isLiked: !isLiked };
      }
      return p;
    });

    savePostsToStorage(updated);

    try {
      const target = posts.find(p => p.id === postId);
      if (target) {
        await togglePostLike(postId, target.likes, Boolean(target.isLiked));
      }
    } catch {
      // optimistic
    }
  };

  // Handle Create Post / Share Idea
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const authorName = currentUser?.email 
      ? currentUser.email.split('@')[0] 
      : (guestAuthorName.trim() || 'Community Member');

    const authorRole = currentUser?.role === 'educator' 
      ? 'Instructor & Mentor' 
      : (guestAuthorName.trim() ? 'Community Innovator' : 'Student / Apprentice');

    const isIdea = newPostChannel === 'ideas' || newPostCategory.includes('Idea');

    const parsedTags = newPostTags
      .split(',')
      .map(t => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    if (isIdea && !parsedTags.includes('CommunityIdea')) {
      parsedTags.unshift('CommunityIdea');
    }

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      channel: newPostChannel,
      trackCategory: 'all',
      timestamp: 'Just now',
      title: newPostTitle.trim(),
      content: newPostContent.trim(),
      isIdea,
      ideaCategory: newPostCategory,
      author: {
        name: authorName,
        role: authorRole,
        avatar: currentUser ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80' : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        isEducator: currentUser?.role === 'educator',
        tierBadge: currentUser?.role === 'educator' ? 'Instructor' : 'Member',
      },
      likes: 1,
      repliesCount: 0,
      isLiked: true,
      tags: parsedTags.length > 0 ? parsedTags : ['CommunityIdea'],
      replies: [],
    };

    savePostsToStorage([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    setShowPostComposer(false);
    setExpandedPostId(newPost.id);

    setSuccessBannerMsg('🎉 Thank you! Your discussion has been successfully posted to the community.');
    setTimeout(() => setSuccessBannerMsg(null), 4500);

    try {
      await createCommunityPost({
        channel: newPost.channel,
        title: newPost.title,
        content: newPost.content,
        author_name: newPost.author.name,
        author_role: newPost.author.role,
        is_educator: newPost.author.isEducator,
        tags: newPost.tags,
      });
      setIsDatabaseConnected(true);
    } catch {
      // preserved in localStorage
    }
  };

  // Handle Add Reply to Post
  const handleAddReply = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const replyText = replyTextByPost[postId]?.trim();
    if (!replyText) return;

    const repAuthorName = currentUser?.email
      ? currentUser.email.split('@')[0]
      : (replyNameByPost[postId]?.trim() || 'Community Member');

    const repAuthorRole = currentUser?.role === 'educator' 
      ? 'Instructor / Mentor' 
      : 'Community Contributor';

    const newReply: CommunityReply = {
      id: `rep-${Date.now()}`,
      postId,
      author: {
        name: repAuthorName,
        role: repAuthorRole,
        avatar: currentUser ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80' : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        isEducator: currentUser?.role === 'educator',
        tierBadge: currentUser?.role === 'educator' ? 'Instructor' : 'Member',
      },
      content: replyText,
      timestamp: 'Just now',
      likes: 1,
      isLiked: true,
    };

    const updated = posts.map(p => {
      if (p.id === postId) {
        const existingReplies = p.replies || [];
        return {
          ...p,
          replies: [...existingReplies, newReply],
          repliesCount: (p.repliesCount || 0) + 1,
        };
      }
      return p;
    });

    savePostsToStorage(updated);

    // Clear reply text for this post
    setReplyTextByPost(prev => ({ ...prev, [postId]: '' }));
  };

  // Handle Like Reply
  const handleLikeReply = (postId: string, replyId: string) => {
    const updated = posts.map(p => {
      if (p.id === postId && p.replies) {
        const updatedReplies = p.replies.map(r => {
          if (r.id === replyId) {
            const isLiked = Boolean(r.isLiked);
            return {
              ...r,
              likes: isLiked ? Math.max(0, r.likes - 1) : r.likes + 1,
              isLiked: !isLiked,
            };
          }
          return r;
        });
        return { ...p, replies: updatedReplies };
      }
      return p;
    });
    savePostsToStorage(updated);
  };

  return (
    <section id="community" className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100/80 px-3.5 py-1 rounded-full border border-blue-200 flex items-center gap-1.5 shadow-xs">
              <Users className="w-3.5 h-3.5 text-blue-600" /> Collaborative Community & Mentorship
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1 shadow-xs">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              {isDatabaseConnected ? 'Supabase Connected' : 'Supabase Live Sync'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Community Hub: Connect with Learners & Mentors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            No one learns alone. Ask code questions, share innovative startup ideas, collaborate on real-world projects, and receive guidance from senior developers and educators.
          </p>

          {/* Quick Action Badges */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <button
              type="button"
              onClick={() => {
                setShowPostComposer(true);
                setNewPostChannel('ideas');
                setNewPostCategory(IDEA_CATEGORIES[0].id);
                const comp = document.getElementById('post-composer-card');
                if (comp) comp.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <Lightbulb className="w-4 h-4 text-slate-950" />
              <span>Share Your Idea</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFilterIdeasOnly(prev => !prev);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                filterIdeasOnly
                  ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Lightbulb className={`w-4 h-4 ${filterIdeasOnly ? 'text-amber-600 fill-amber-500' : 'text-slate-400'}`} />
              <span>{filterIdeasOnly ? 'Showing Ideas Only (Click to Show All)' : 'Filter: Ideas Only'}</span>
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successBannerMsg && (
          <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-300 text-emerald-900 rounded-2xl flex items-center justify-between shadow-sm animate-fade-in">
            <div className="flex items-center gap-2 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successBannerMsg}</span>
            </div>
            <button
              type="button"
              onClick={() => setSuccessBannerMsg(null)}
              className="text-xs text-emerald-700 font-bold hover:underline cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {/* Community Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Channels, Filters & Mentorship */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ideas, topics, authors, or tags..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-xs"
              />
            </div>

            {/* Channels Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-500 mb-3 px-1">
                <span>CHANNELS &amp; CIRCLES</span>
                <button 
                  type="button"
                  onClick={loadPosts}
                  className="text-slate-400 hover:text-blue-600 transition-colors p-1 cursor-pointer"
                  title="Refresh posts from database"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-600' : ''}`} />
                </button>
              </div>

              <div className="space-y-1.5">
                {CHANNELS.map((channel) => (
                  <button
                    key={channel.id}
                    type="button"
                    onClick={() => {
                      setSelectedChannel(channel.id);
                      setFilterIdeasOnly(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      selectedChannel === channel.id
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className="truncate">{channel.name}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                      selectedChannel === channel.id ? 'bg-blue-700 text-white' : 'text-slate-500 bg-slate-100'
                    }`}>
                      {channel.count || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Idea Spotlight Card */}
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white rounded-3xl p-5 border-2 border-amber-300 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-black text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-600 fill-amber-400" />
                <span>Community Idea Incubator</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Have an idea for a web app, mobile utility, or hardware project? Post it here to recruit teammates and receive actionable feedback from mentors!
              </p>
              <button
                type="button"
                onClick={() => {
                  setShowPostComposer(true);
                  setNewPostChannel('ideas');
                  setNewPostCategory(IDEA_CATEGORIES[0].id);
                }}
                className="w-full py-2 px-3 bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5 text-amber-600" />
                <span>Pitch a New Idea</span>
              </button>
            </div>

            {/* Top Active Contributors Leaderboard */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Top Active Contributors</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-black flex items-center justify-center text-[10px]">1</span>
                    <span className="font-bold text-slate-800">Engr. Jed Aviguetero</span>
                  </div>
                  <span className="font-mono text-amber-600 font-black">2,480 pts</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-black flex items-center justify-center text-[10px]">2</span>
                    <span className="font-bold text-slate-800">Kuya bossROD</span>
                  </div>
                  <span className="font-mono text-slate-600 font-black">1,920 pts</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-black flex items-center justify-center text-[10px]">3</span>
                    <span className="font-bold text-slate-800">Daniel Zan Baltazar</span>
                  </div>
                  <span className="font-mono text-slate-600 font-black">1,640 pts</span>
                </div>
              </div>
            </div>

            {/* Upcoming Live Study Cohorts */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Upcoming Community Cohorts</span>
              </div>
              <div className="p-3 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-blue-700 uppercase">Saturday • 2:00 PM PHT</span>
                <p className="font-black text-slate-900">TESDA CSS NC II Practical Lab Q&amp;A</p>
                <p className="text-slate-600 text-[11px]">Host: Engr. Joven Nel Jed Aviguetero</p>
              </div>
              <div className="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Sunday • 7:00 PM PHT</span>
                <p className="font-black text-slate-900">Full-Stack SaaS &amp; Ideation Mentoring</p>
                <p className="text-slate-600 text-[11px]">Host: bossROD &amp; ZAN Mentors</p>
              </div>
            </div>

          </div>

          {/* Right Column: Feed, Composer & Discussions */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Create Post Banner / Interactive Composer */}
            <div id="post-composer-card" className="bg-white rounded-3xl border-2 border-slate-200 p-5 sm:p-6 shadow-sm">
              {!showPostComposer ? (
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    {currentUser?.email ? currentUser.email[0].toUpperCase() : 'U'}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPostComposer(true)}
                    className="flex-1 text-left px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 text-xs sm:text-sm rounded-2xl border border-slate-200/80 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>Start a discussion, ask a question, or share an idea...</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl border border-blue-100 shrink-0">
                      + Create Post
                    </span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-black text-slate-900">Share an Idea or Ask the Community</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPostComposer(false)}
                      className="text-xs text-slate-400 hover:text-slate-700 font-bold cursor-pointer"
                    >
                      Close (Cancel)
                    </button>
                  </div>

                  {/* Category Pills Selector */}
                  <div>
                    <span className="text-xs font-bold text-slate-600 block mb-1.5">Post Type:</span>
                    <div className="flex flex-wrap gap-2">
                      {IDEA_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setNewPostCategory(cat.id);
                            if (cat.id.includes('Idea')) setNewPostChannel('ideas');
                            else if (cat.id.includes('TESDA')) setNewPostChannel('tesda-workshop');
                            else if (cat.id.includes('Coding')) setNewPostChannel('code-help');
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            newPostCategory === cat.id
                              ? `${cat.color} shadow-xs ring-2 ring-blue-500/20`
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Post Title */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Discussion Title / Idea Pitch:
                    </label>
                    <input
                      type="text"
                      required
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      placeholder="E.g., '💡 Idea: Offline-first LMS for public schools with solar power sync'..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white font-medium"
                    />
                  </div>

                  {/* Post Content */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Description &amp; Context:
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder="Explain your idea, code question, or what you would like feedback on from mentors and fellow learners..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white resize-none font-normal leading-relaxed"
                    />
                  </div>

                  {/* Author Name for Guest or Logged in */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Author Name:
                      </label>
                      {currentUser?.email ? (
                        <div className="px-3 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold flex items-center justify-between">
                          <span>{currentUser.email}</span>
                          <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md uppercase">Signed In</span>
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={guestAuthorName}
                          onChange={(e) => setGuestAuthorName(e.target.value)}
                          placeholder="Your Name or Nickname (e.g., Alex Johnson)"
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium"
                        />
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Tags (Comma separated):
                      </label>
                      <input
                        type="text"
                        value={newPostTags}
                        onChange={(e) => setNewPostTags(e.target.value)}
                        placeholder="ideas, react, typescript, hardware"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium"
                      />
                    </div>
                  </div>

                  {/* Actions & Target Channel */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Channel:</span>
                      <select
                        value={newPostChannel}
                        onChange={(e) => setNewPostChannel(e.target.value)}
                        className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                      >
                        <option value="ideas">💡 Ideas &amp; Innovation Hub</option>
                        <option value="code-help">💻 Coding &amp; Tech Q&amp;A</option>
                        <option value="tesda-workshop">🛠️ TESDA CSS NC II Workshop</option>
                        <option value="devotional">🙏 Mentorship &amp; Growth</option>
                        <option value="bossrod">🚀 Software Architecture &amp; Engineering</option>
                        <option value="zan-mindset">💼 Freelancing &amp; Client Acquisition</option>
                        <option value="mahabi-design">🎨 UI/UX &amp; Design Systems</option>
                        <option value="victories">🎉 Wins &amp; Project Showcases</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 justify-end">
                      {!currentUser && (
                        <button
                          type="button"
                          onClick={() => onOpenAuth('signup')}
                          className="px-3 py-2 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                        >
                          Sign in for Verified Badge
                        </button>
                      )}
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Publish Post (Share Idea)</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Filter & Sort Bar */}
            <div className="flex items-center justify-between gap-3 flex-wrap px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">
                  Showing {filteredPosts.length} discussions
                </span>
                {filterIdeasOnly && (
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300 flex items-center gap-1">
                    <Lightbulb className="w-3 h-3 text-amber-600" /> Ideas Only
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Liked (Popular)</option>
                  <option value="discussed">Most Discussed</option>
                </select>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-5">
              {filteredPosts.map((post) => {
                const isExpanded = expandedPostId === post.id;
                const postReplies = post.replies || [];

                return (
                  <article
                    key={post.id}
                    className={`bg-white rounded-3xl border transition-all duration-200 p-5 sm:p-6 shadow-sm hover:shadow-md space-y-4 ${
                      post.isIdea || post.channel === 'ideas'
                        ? 'border-amber-300 ring-2 ring-amber-300/20 bg-gradient-to-b from-amber-50/20 via-white to-white'
                        : 'border-slate-200'
                    }`}
                  >
                    {/* Header: Author & Channel */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100 shadow-xs"
                        />
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-black text-sm sm:text-base text-slate-900">{post.author.name}</span>
                            {post.author.isEducator && (
                              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1 border border-blue-200">
                                <Sparkles className="w-2.5 h-2.5" /> Instructor
                              </span>
                            )}
                            {post.author.tierBadge && (
                              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                {post.author.tierBadge}
                              </span>
                            )}
                            {post.isIdea && (
                              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 flex items-center gap-1 shadow-xs">
                                <Lightbulb className="w-3 h-3 text-slate-950 fill-current" /> Community Idea
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                            {post.author.role} • {post.timestamp}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-xl border border-slate-200/80 font-mono">
                        #{post.channel}
                      </span>
                    </div>

                    {/* Post Title & Content */}
                    <div className="space-y-2">
                      <h4 className="font-black text-base sm:text-lg text-slate-900 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal">
                        {post.content}
                      </p>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {post.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            onClick={() => setSearchQuery(tag)}
                            className="text-[11px] font-semibold bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700 px-2.5 py-0.5 rounded-lg transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Post Actions Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                      <div className="flex items-center gap-3">
                        {/* Like Button */}
                        <button
                          type="button"
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                            post.isLiked
                              ? 'bg-blue-50 text-blue-600 font-black ring-1 ring-blue-200'
                              : 'text-slate-600 hover:bg-slate-100 font-bold'
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${post.isLiked ? 'fill-current text-blue-600' : ''}`} />
                          <span>{post.likes} Likes</span>
                        </button>

                        {/* Toggle Replies Thread Button */}
                        <button
                          type="button"
                          onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer font-bold ${
                            isExpanded 
                              ? 'bg-blue-600 text-white shadow-xs' 
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.repliesCount || postReplies.length} Replies</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setExpandedPostId(post.id);
                          const repInput = document.getElementById(`reply-input-${post.id}`);
                          if (repInput) repInput.focus();
                        }}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <span>Reply / Join Discussion →</span>
                      </button>
                    </div>

                    {/* Expandable Discussion / Replies Thread */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 bg-slate-50/70 p-4 rounded-2xl">
                        <div className="flex items-center justify-between text-xs font-black text-slate-700">
                          <span>Discussion &amp; Community Replies ({postReplies.length}):</span>
                          <span className="text-[11px] text-slate-400">Open Community Thread</span>
                        </div>

                        {/* Existing Replies List */}
                        {postReplies.length > 0 ? (
                          <div className="space-y-3">
                            {postReplies.map((reply) => (
                              <div
                                key={reply.id}
                                className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs space-y-2 text-xs"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-2">
                                    <img
                                      src={reply.author.avatar}
                                      alt={reply.author.name}
                                      className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
                                    />
                                    <div>
                                      <div className="flex items-center gap-1.5">
                                        <span className="font-bold text-slate-900">{reply.author.name}</span>
                                        {reply.author.tierBadge && (
                                          <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                                            {reply.author.tierBadge}
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-[10px] text-slate-400 font-medium">
                                        {reply.author.role} • {reply.timestamp}
                                      </span>
                                    </div>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => handleLikeReply(post.id, reply.id)}
                                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] cursor-pointer transition-colors ${
                                      reply.isLiked ? 'text-blue-600 font-bold bg-blue-50' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                  >
                                    <Heart className={`w-3 h-3 ${reply.isLiked ? 'fill-current text-rose-500 text-rose-500' : ''}`} />
                                    <span>{reply.likes || 0}</span>
                                  </button>
                                </div>

                                <p className="text-slate-700 leading-relaxed pl-9">
                                  {reply.content}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-4 text-xs text-slate-500 italic">
                            No replies yet. Be the first to share your thoughts or advice!
                          </div>
                        )}

                        {/* Inline Reply Form */}
                        <form
                          onSubmit={(e) => handleAddReply(post.id, e)}
                          className="space-y-2.5 pt-2"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                              {currentUser?.email ? currentUser.email[0].toUpperCase() : 'U'}
                            </div>
                            <div className="flex-1 space-y-2">
                              <textarea
                                id={`reply-input-${post.id}`}
                                rows={2}
                                required
                                value={replyTextByPost[post.id] || ''}
                                onChange={(e) => setReplyTextByPost(prev => ({ ...prev, [post.id]: e.target.value }))}
                                placeholder={`Reply to ${post.author.name} (Share a solution, advice, or feedback)...`}
                                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none font-normal"
                              />

                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                {!currentUser && (
                                  <input
                                    type="text"
                                    value={replyNameByPost[post.id] || ''}
                                    onChange={(e) => setReplyNameByPost(prev => ({ ...prev, [post.id]: e.target.value }))}
                                    placeholder="Your Name (Default: Member)"
                                    className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded-lg w-44 focus:outline-none font-medium"
                                  />
                                )}
                                <div className="ml-auto flex items-center gap-2">
                                  <button
                                    type="submit"
                                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                                  >
                                    <Send className="w-3 h-3" />
                                    <span>Send Reply</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>

                      </div>
                    )}

                  </article>
                );
              })}

              {filteredPosts.length === 0 && (
                <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-slate-800">No discussions found in this channel</h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                    Be the first to share your ideas, insights, or questions in this channel!
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedChannel('all');
                      setSearchQuery('');
                      setFilterIdeasOnly(false);
                      setShowPostComposer(true);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-blue-700 transition-all cursor-pointer"
                  >
                    + Start Discussion
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};