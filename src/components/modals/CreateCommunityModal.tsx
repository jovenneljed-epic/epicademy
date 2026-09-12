import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface CreateCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
  onCommunityCreated: () => void;
}

export const CreateCommunityModal = ({
  isOpen,
  onClose,
  onCommunityCreated,
}: CreateCommunityModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      alert('You must be logged in to create a community.');
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('communities').insert({
      name,
      description,
      slug: `${slug}-${Date.now().toString().slice(-4)}`,
      creator_id: userData.user.id,
      is_public: true,
    });

    setLoading(false);
    if (error) {
      alert(`Error creating community: ${error.message}`);
    } else {
      onCommunityCreated();
      onClose();
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 text-white space-y-5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
            Launch Your Community
          </span>
          <button onClick={onClose} className="text-slate-400 hover:text-white font-bold cursor-pointer">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Community Name</label>
            <input
              type="text"
              required
              placeholder="e.g., Ilocos Tech Guild & CSS Masters"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Description & Goal</label>
            <textarea
              required
              rows={3}
              placeholder="What is this community about? Who is it for?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-lg cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Community 🚀'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};