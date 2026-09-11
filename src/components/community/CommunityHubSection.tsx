import { useState, useEffect } from 'react';
import { INITIAL_POSTS, CHANNELS } from '../../data/communityData';
import type { CommunityPost } from '../../types';
import { 
  Heart, 
  MessageSquare, 
  Send, 
  Users, 
  CheckCircle2, 
  Trophy, 
  Calendar, 
  Tag,
  Database,
  RefreshCw
} from 'lucide-react';
import { 
  fetchCommunityPosts, 
  createCommunityPost, 
  togglePostLike 
} from '../../lib/supabaseClient';

interface CommunityHubSectionProps {
  onOpenAuth: (mode: 'signup' | 'signin') => void;
}

export const CommunityHubSection = ({ onOpenAuth }: CommunityHubSectionProps) => {
  const [selectedChannel, setSelectedChannel] = useState('all');
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [showPostComposer, setShowPostComposer] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false);

  // Fetch posts from Supabase on mount
  const loadPostsFromSupabase = async () => {
    setIsSyncing(true);
    const { posts: dbPosts, error } = await fetchCommunityPosts();
    if (!error && dbPosts && dbPosts.length > 0) {
      setPosts(dbPosts);
      setIsDatabaseConnected(true);
    } else {
      // If table doesn't exist yet, we still display the initial posts and indicate ready state
      setIsDatabaseConnected(false);
    }
    setIsSyncing(false);
  };

  useEffect(() => {
    loadPostsFromSupabase();
  }, []);

  const filteredPosts = selectedChannel === 'all' 
    ? posts 
    : posts.filter(p => p.channel === selectedChannel);

  const handleToggleLike = async (postId: string) => {
    const targetPost = posts.find(p => p.id === postId);
    if (!targetPost) return;

    const isLiked = !targetPost.isLiked;
    const newLikes = isLiked ? targetPost.likes + 1 : Math.max(0, targetPost.likes - 1);

    // Optimistic UI update
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return { ...p, isLiked, likes: newLikes };
      }
      return p;
    }));

    // Sync to Supabase
    try {
      await togglePostLike(postId, targetPost.likes, !isLiked);
    } catch {
      // Fail quietly for offline/demo
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const channelToUse = selectedChannel === 'all' ? 'stem-ai' : selectedChannel;

    const localNewPost: CommunityPost = {
      id: `post-${Date.now()}`,
      channel: channelToUse,
      trackCategory: 'all',
      author: {
        name: 'You (Epic Explorer)',
        role: 'Community Member',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        isEducator: false,
        tierBadge: 'Member',
      },
      timestamp: 'Just now',
      title: newPostTitle,
      content: newPostContent,
      likes: 1,
      repliesCount: 0,
      isLiked: true,
      tags: ['Discussion', 'Community'],
    };

    // Update UI immediately
    setPosts([localNewPost, ...posts]);
    const titleToSave = newPostTitle;
    const contentToSave = newPostContent;
    setNewPostTitle('');
    setNewPostContent('');
    setShowPostComposer(false);

    // Persist to Supabase
    try {
      await createCommunityPost({
        channel: channelToUse,
        title: titleToSave,
        content: contentToSave,
        author_name: 'You (Epic Explorer)',
        author_role: 'Community Member',
        tags: ['Discussion', 'Community'],
      });
      setIsDatabaseConnected(true);
    } catch {
      // Offline fallback
    }
  };

  return (
    <section id="community" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> Bayanihan at Sama-Samang Paglago
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              {isDatabaseConnected ? 'Supabase Live Connected' : 'Supabase Configured'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bayanihan Hub: Komunidad ng mga Mag-aaral at Mentor
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Walang naiiwan sa ating eskwela. Dito nagtutulungan ang mga mag-aaral, nagbabahagi ng patotoo at panalangin, at humihingi ng gabay mula sa ating mga Kuya at Ate sa tech.
          </p>
        </div>

        {/* Community Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Channels & Navigation */}
          <div className="lg:col-span-3 space-y-4">
            
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
                <span>Mga Lupon ng Usapan</span>
                <button
                  onClick={loadPostsFromSupabase}
                  className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                  title="I-refresh mula sa database"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-600' : ''}`} />
                </button>
              </div>

              <div className="space-y-1">
                {CHANNELS.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      selectedChannel === channel.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-200/70'
                    }`}
                  >
                    <span className="truncate">{channel.name}</span>
                    <span className={`text-[11px] px-1.5 py-0.5 rounded font-mono ${
                      selectedChannel === channel.id ? 'bg-blue-700 text-blue-100' : 'text-slate-400'
                    }`}>
                      {channel.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gamification & Leaderboard Card */}
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-4 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>Weekly Karma Leaderboard</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-600">🥇</span>
                    <span className="font-semibold text-slate-800">Sarah Jenkins</span>
                  </div>
                  <span className="font-mono text-slate-500">1,480 pts</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-400">🥈</span>
                    <span className="font-semibold text-slate-800">Mateo Silva</span>
                  </div>
                  <span className="font-mono text-slate-500">1,120 pts</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-700">🥉</span>
                    <span className="font-semibold text-slate-800">Aisha Patel</span>
                  </div>
                  <span className="font-mono text-slate-500">960 pts</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 text-center">
                Earn badges by posting insightful answers and helping classmates.
              </p>
            </div>

            {/* Upcoming Cohort Events */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Upcoming Live Salons</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Tomorrow • 6:00 PM UTC</span>
                <p className="text-xs font-bold text-slate-900">AI Agents Live Code Review</p>
                <p className="text-[11px] text-slate-500">Host: Dr. Marcus Vance</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Saturday • 2:00 PM UTC</span>
                <p className="text-xs font-bold text-slate-900">SaaS Micro-Offer Clinic</p>
                <p className="text-[11px] text-slate-500">Host: Elena Rostova</p>
              </div>
            </div>

          </div>

          {/* Middle & Right Column: Interactive Feed */}
          <div className="lg:col-span-9 space-y-4">
            
            {/* Create Post Banner / Composer */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              {!showPostComposer ? (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    You
                  </div>
                  <button
                    onClick={() => setShowPostComposer(true)}
                    className="flex-1 text-left px-4 py-2.5 bg-slate-100 hover:bg-slate-200/70 text-slate-500 text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Start a discussion, ask an instructor, or share your project...
                  </button>
                  <button
                    onClick={() => setShowPostComposer(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Post
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreatePost} className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Create New Discussion</span>
                    <button
                      type="button"
                      onClick={() => setShowPostComposer(false)}
                      className="text-xs text-slate-400 hover:text-slate-600"
                    >
                      Cancel
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Headline (e.g. Need feedback on my React Hook design...)"
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <textarea
                    required
                    rows={3}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Write your thoughts or question for the cohort..."
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  />
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">Posting into: <strong>#{selectedChannel}</strong></span>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" /> Publish to Supabase Circle
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Posts Stream */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all space-y-3"
                >
                  {/* Post Author Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900">{post.author.name}</span>
                          {post.author.isEducator && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> {post.author.tierBadge}
                            </span>
                          )}
                          {!post.author.isEducator && (
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

                  {/* Post Content */}
                  <div>
                    <h4 className="font-bold text-base text-slate-900 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed whitespace-pre-line">
                      {post.content}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-blue-600 bg-blue-50/70 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" /> {tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Action Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleToggleLike(post.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                          post.isLiked
                            ? 'text-red-600 bg-red-50 font-semibold'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-red-600' : ''}`} />
                        <span>{post.likes}</span>
                      </button>

                      <button
                        onClick={() => onOpenAuth('signup')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.repliesCount} Replies</span>
                      </button>
                    </div>

                    <button
                      onClick={() => onOpenAuth('signup')}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
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
