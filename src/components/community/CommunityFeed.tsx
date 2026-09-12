import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { MessageSquare, ThumbsUp, Send, PlusCircle } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  likes_count: number;
  created_at: string;
  author_id: string;
}

interface CommunityFeedProps {
  communityId?: string;
  userEmail?: string;
  onOpenCreateCommunity: () => void;
}

export const CommunityFeed = ({
  communityId,
  userEmail,
  onOpenCreateCommunity,
}: CommunityFeedProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [communityId]);

  const fetchPosts = async () => {
    let query = supabase.from('community_posts').select('*').order('created_at', { ascending: false });
    if (communityId) {
      query = query.eq('community_id', communityId);
    }
    const { data, error } = await query;
    if (!error && data) {
      setPosts(data);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) {
      alert('Please sign in to post in the community.');
      return;
    }
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;

    // Use a default community if none passed
    let targetCommunityId = communityId;
    if (!targetCommunityId) {
      const { data: comms } = await supabase.from('communities').select('id').limit(1);
      if (comms && comms.length > 0) {
        targetCommunityId = comms[0].id;
      } else {
        alert('Please create or join a community first!');
        setLoading(false);
        return;
      }
    }

    const { error } = await supabase.from('community_posts').insert({
      community_id: targetCommunityId,
      author_id: userData.user.id,
      title: newTitle,
      content: newContent,
      likes_count: 0,
    });

    setLoading(false);
    if (!error) {
      setNewTitle('');
      setNewContent('');
      fetchPosts();
    } else {
      alert(`Error posting: ${error.message}`);
    }
  };

  const handleLike = async (postId: string, currentLikes: number) => {
    const { error } = await supabase
      .from('community_posts')
      .update({ likes_count: currentLikes + 1 })
      .eq('id', postId);

    if (!error) {
      fetchPosts();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 text-slate-100">
      {/* Header Banner & Launch Community Button */}
      <div className="bg-gradient-to-r from-orange-950/50 to-slate-900 border border-orange-500/30 p-6 rounded-3xl flex items-center justify-between flex-wrap gap-4 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
            EPICADEMY Learning Network
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">Public Discussions & Creator Hub</h2>
          <p className="text-xs text-slate-300">Share tips, ask technical questions, and collaborate with peers across all cohorts.</p>
        </div>
        <button
          onClick={onOpenCreateCommunity}
          className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-lg transition-all cursor-pointer flex items-center gap-2 shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Launch Your Community</span>
        </button>
      </div>

      {/* New Post Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
        <h3 className="font-black text-sm text-white flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-orange-400" />
          <span>Start a Discussion or Ask a Question</span>
        </h3>
        <form onSubmit={handleCreatePost} className="space-y-3">
          <input
            type="text"
            required
            placeholder="Topic title (e.g., How to troubleshoot DHCP assignment failure?)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            required
            rows={3}
            placeholder="Write your detailed question or discussion notes here..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{loading ? 'Posting...' : 'Publish Discussion'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed List */}
      <div className="space-y-4">
        <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Recent Community Feed</h3>
        {posts.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-xs">
            No discussions found yet. Be the first to start a conversation!
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-md hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono">Posted on {new Date(post.created_at).toLocaleDateString()}</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded text-orange-300">Verified Member</span>
              </div>
              <h4 className="text-base font-black text-white">{post.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">{post.content}</p>
              
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => handleLike(post.id, post.likes_count)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-blue-400" />
                  <span>{post.likes_count} Likes</span>
                </button>
                <span className="text-[11px] text-slate-500">Interactive Thread</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};