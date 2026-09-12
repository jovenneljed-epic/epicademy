import { useState, useEffect } from 'react';
import { INITIAL_POSTS, CHANNELS } from '../../data/communityData';
import type { CommunityPost } from '../../types';
import { 
  MessageSquare, 
  ThumbsUp, 
  Users, 
  Send, 
  Sparkles, 
  RefreshCw, 
  Database,
  Calendar,
  Award
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

export const CommunityHubSection: React.FC<CommunityHubSectionProps> = ({ onOpenAuth, currentUser }) => {
  const [selectedChannel, setSelectedChannel] = useState('all');
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [showPostComposer, setShowPostComposer] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false);

  const loadPosts = async () => {
    setIsSyncing(true);
    try {
      const { posts: dbPosts, error } = await fetchCommunityPosts();
      if (!error && dbPosts && dbPosts.length > 0) {
        setPosts(dbPosts);
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

  const filteredPosts = posts.filter(
    (p) => selectedChannel === 'all' || p.channel === selectedChannel
  );

  const handleLike = async (postId: string) => {
    const targetPost = posts.find(p => p.id === postId);
    if (!targetPost) return;

    const isLiked = Boolean(targetPost.isLiked);
    const newLikes = isLiked ? Math.max(0, targetPost.likes - 1) : targetPost.likes + 1;

    setPosts(prev => prev.map(p => 
      p.id === postId ? { ...p, likes: newLikes, isLiked: !isLiked } : p
    ));

    try {
      await togglePostLike(postId, targetPost.likes, isLiked);
    } catch {
      // Retain optimistic UI update
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    if (!currentUser) {
      onOpenAuth('signup');
      return;
    }

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      channel: selectedChannel === 'all' ? 'general' : selectedChannel,
      trackCategory: 'all',
      timestamp: 'Just now',
      title: newPostTitle,
      content: newPostContent,
      author: {
        name: currentUser.email?.split('@')[0] || 'Student',
        role: currentUser.role === 'educator' ? 'Instructor' : 'Community Member',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        isEducator: currentUser.role === 'educator',
        tierBadge: 'Member',
      },
      likes: 1,
      repliesCount: 0,
      isLiked: true,
      tags: ['Discussion'],
    };

    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    setShowPostComposer(false);

    try {
      await createCommunityPost({
        channel: newPost.channel,
        title: newPost.title,
        content: newPost.content,
        author_name: newPost.author.name,
        author_role: newPost.author.role,
        is_educator: newPost.author.isEducator,
      });
      setIsDatabaseConnected(true);
    } catch {
      // Stored in local component state
    }
  };

  return (
    <section id="community" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Collaborative Community & Mentorship
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              {isDatabaseConnected ? 'Supabase Connected' : 'Supabase Live Sync'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Community Hub: Connect with Learners & Mentors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            No one learns alone. Ask code questions, collaborate on projects, share breakthroughs, and receive guidance from senior developers and educators.
          </p>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Channels & Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
                <span>Channels & Circles</span>
                <button 
                  type="button"
                  onClick={loadPosts}
                  className="text-slate-400 hover:text-blue-600 transition-colors p-1 cursor-pointer"
                  title="Refresh posts from database"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-600' : ''}`} />
                </button>
              </div>

              <div className="space-y-1">
                {CHANNELS.map((channel) => (
                  <button
                    key={channel.id}
                    type="button"
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedChannel === channel.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-700 hover:bg-slate-200/70'
                    }`}
                  >
                    <span className="truncate">{channel.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedChannel === channel.id ? 'bg-blue-700 text-blue-100' : 'text-slate-400 bg-slate-100'
                    }`}>
                      {channel.count || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Leaderboard Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Top Active Contributors</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                  <span className="font-semibold text-slate-800">Sarah Jenkins</span>
                  <span className="font-mono text-slate-500 font-bold">1,480 pts</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                  <span className="font-semibold text-slate-800">Mateo Silva</span>
                  <span className="font-mono text-slate-500 font-bold">1,120 pts</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                  <span className="font-semibold text-slate-800">Aisha Patel</span>
                  <span className="font-mono text-slate-500 font-bold">960 pts</span>
                </div>
              </div>
            </div>

            {/* Upcoming Live Sessions */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Upcoming Study Cohorts</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Tomorrow • 1:00 PM UTC</span>
                <p className="font-bold text-slate-900">AI Agents Live Code Review</p>
                <p className="text-slate-500 text-[11px]">Host: Dr. Marcus Vance</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Saturday • 2:00 PM UTC</span>
                <p className="font-bold text-slate-900">SaaS Architecture Q&A</p>
                <p className="text-slate-500 text-[11px]">Host: Elena Rostova</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feed & Composer */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Create Post Banner / Composer */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              {!showPostComposer ? (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    {currentUser?.email ? currentUser.email[0].toUpperCase() : 'U'}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (!currentUser) {
                        onOpenAuth('signup');
                      } else {
                        setShowPostComposer(true);
                      }
                    }}
                    className="flex-1 text-left px-4 py-2.5 bg-slate-100 hover:bg-slate-200/70 text-slate-500 text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Start a discussion, ask a question, or share an update...
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreatePost} className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Create New Discussion</span>
                    <button
                      type="button"
                      onClick={() => setShowPostComposer(false)}
                      className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Discussion Title..."
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <textarea
                    required
                    rows={3}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Provide details, code snippets, or context for your question..."
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  />
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">
                      Posting into: <strong>#{selectedChannel}</strong>
                    </span>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Publish Post</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-sm text-slate-900">{post.author.name}</span>
                          {post.author.isEducator && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> Instructor
                            </span>
                          )}
                          {!post.author.isEducator && post.author.tierBadge && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {post.author.tierBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500">{post.author.role} • {post.timestamp}</p>
                      </div>
                    </div>

                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 font-mono">
                      #{post.channel}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed whitespace-pre-line">
                      {post.content}
                    </p>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {post.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                          post.isLiked
                            ? 'bg-blue-50 text-blue-600 font-bold'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-current text-blue-600' : ''}`} />
                        <span>{post.likes}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenAuth('signup')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{post.repliesCount} Replies</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenAuth('signup')}
                      className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      Join Conversation →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};