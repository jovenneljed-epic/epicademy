import { createClient } from '@supabase/supabase-js';
import type { CommunityPost, Track, ModuleItem, CreateTrackInput, TeacherProfile, RegisterTeacherInput } from '../types';
import { ZERO_TO_HERO_COURSES, ZERO_TO_HERO_TRACKS, getZeroToHeroCourse } from '../data/zeroToHeroCoursesData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ukhmrgbkrfawgszltzsr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_uB7grQdiSm_z6PzMvXITdA_Kdih_GuP';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Guard to prevent concurrent multiple seed loops in the frontend
let isSeedingInProgress = false;

// ==========================================
// Authentication & Teacher Profile Helpers
// ==========================================
export async function signUpUser(email: string, password: string, role: 'educator' | 'student') {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role,
        full_name: email.split('@')[0],
      },
    },
  });

  if (!error && data.user) {
    try {
      await supabase.from('profiles').upsert(
        [
          {
            id: data.user.id,
            email: data.user.email,
            full_name: email.split('@')[0],
            role,
          },
        ],
        { onConflict: 'id' }
      );
    } catch {
      // Ignore if profiles table is absent
    }
  }

  return { data, error };
}

export async function registerTeacherAccount(input: RegisterTeacherInput): Promise<{ user: any; error: any }> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        data: {
          role: 'educator',
          full_name: input.fullName,
          specialty: input.specialty,
          credentials: input.credentials,
          bio: input.bio,
          avatar_url: input.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        },
      },
    });

    if (error) {
      return { user: null, error };
    }

    if (data.user) {
      try {
        await supabase.from('profiles').upsert(
          [
            {
              id: data.user.id,
              email: input.email,
              full_name: input.fullName,
              role: 'educator',
              specialty: input.specialty,
              credentials: input.credentials,
              bio: input.bio,
              avatar_url: input.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
              is_verified: true,
            },
          ],
          { onConflict: 'id' }
        );
      } catch {
        // Continue if table not yet migrated
      }
    }

    return { user: data.user, error: null };
  } catch (err) {
    return { user: null, error: err };
  }
}

export async function fetchTeachersFromDB(): Promise<{ teachers: TeacherProfile[] | null; error: any }> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'educator')
      .order('created_at', { ascending: false });

    if (error || !data) {
      return { teachers: null, error };
    }

    const teachers: TeacherProfile[] = data.map((row: any) => ({
      id: row.id,
      email: row.email,
      fullName: row.full_name || row.email?.split('@')[0] || 'Educator',
      role: 'educator',
      specialty: row.specialty || 'General Disciplines',
      credentials: row.credentials || 'Certified Epicademy Instructor',
      bio: row.bio || 'Passionate educator empowering students through interactive community learning.',
      avatarUrl: row.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isVerified: Boolean(row.is_verified ?? true),
      createdAt: row.created_at,
    }));

    return { teachers, error: null };
  } catch (err) {
    return { teachers: null, error: err };
  }
}

export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// ==========================================
// Tracks & Course Builder Helpers (Real Supabase)
// ==========================================
export async function fetchTracksFromDB(): Promise<{ tracks: Track[] | null; error: any }> {
  try {
    const { data, error } = await supabase
      .from('tracks')
      .select('*')
      .order('level_index', { ascending: true });

    if (error || !data || data.length === 0) {
      seedZeroToHeroCoursesToSupabase().catch(() => {});
      return { tracks: ZERO_TO_HERO_TRACKS, error: null };
    }

    const dbTracks: Track[] = data.map((row: any) => {
      const isTesda = row.id === 'track-tesda-css-nc2';
      const isBundle = Boolean(row.is_bundle ?? isTesda);
      const bundleNumber = row.bundle_number || (isTesda ? 2 : undefined);
      const bundleLabel = row.bundle_label || (isTesda ? '★ 2ND OFFICIAL COURSE BUNDLE: TESDA VOCATIONAL MASTERCLASS' : undefined);

      return {
        id: row.id,
        title: row.title,
        category: row.category,
        categoryLabel: row.category_label || getCategoryLabel(row.category),
        slug: row.slug,
        badge: isTesda ? '★ 2ND COURSE BUNDLE • TESDA NC II' : (row.badge || 'New Course'),
        level: row.level || 'Beginner',
        levelIndex: row.level_index !== null && row.level_index !== undefined ? Number(row.level_index) : undefined,
        isBundle,
        bundleNumber,
        bundleLabel,
        price: Number(row.price) || 49,
        originalPrice: Number(row.original_price) || (Number(row.price || 49) * 2),
        careerMilestone: row.career_milestone || (isTesda ? 'TESDA CSS NC II National Certification Passer' : 'Certified Web Developer'),
        isPaid: Boolean(row.is_paid ?? true),
        instructor: {
          name: row.instructor_name || 'Educator',
          role: row.instructor_role || 'Course Creator',
          avatar: row.instructor_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          verified: Boolean(row.instructor_verified ?? true),
          credentials: row.instructor_credentials || 'Verified Epicademy Instructor',
        },
        rating: Number(row.rating) || 5.0,
        reviewCount: row.review_count || 1,
        activeLearners: row.active_learners || 1,
        lessonsCount: row.lessons_count || 0,
        duration: row.duration || '4 Weeks',
        description: row.description,
        skills: row.skills || [],
        colorTheme: row.color_theme || 'from-blue-600 to-indigo-700',
        popular: Boolean(row.popular),
        published: Boolean(row.published ?? true),
        isCustomCourse: true,
      };
    });

    if (dbTracks.length < 9) {
      const existingIds = new Set(dbTracks.map(t => t.id));
      const missingTracks = ZERO_TO_HERO_TRACKS.filter(t => !existingIds.has(t.id));
      const combined = [...dbTracks, ...missingTracks].sort((a, b) => {
        if (a.isBundle && !b.isBundle) return 1;
        if (!a.isBundle && b.isBundle) return -1;
        return (a.levelIndex || 99) - (b.levelIndex || 99);
      });
      seedZeroToHeroCoursesToSupabase().catch(() => {});
      return { tracks: combined, error: null };
    }

    return {
      tracks: dbTracks.sort((a, b) => {
        if (a.isBundle && !b.isBundle) return 1;
        if (!a.isBundle && b.isBundle) return -1;
        return (a.levelIndex || 99) - (b.levelIndex || 99);
      }),
      error: null,
    };
  } catch (err) {
    return { tracks: ZERO_TO_HERO_TRACKS, error: err };
  }
}

export async function seedZeroToHeroCoursesToSupabase(): Promise<{ success: boolean; error: any }> {
  if (isSeedingInProgress) {
    return { success: true, error: null };
  }
  isSeedingInProgress = true;

  try {
    for (const course of ZERO_TO_HERO_COURSES) {
      const { track, detailedModules } = course;
      
      // Upsert Track with onConflict
      await supabase.from('tracks').upsert(
        [
          {
            id: track.id,
            title: track.title,
            category: track.category,
            category_label: track.categoryLabel,
            slug: track.slug,
            badge: track.badge,
            level: track.level,
            level_index: track.levelIndex,
            price: track.price,
            original_price: track.originalPrice,
            career_milestone: track.careerMilestone,
            description: track.description,
            duration: track.duration,
            skills: track.skills,
            color_theme: track.colorTheme,
            instructor_name: track.instructor.name,
            instructor_role: track.instructor.role,
            instructor_avatar: track.instructor.avatar,
            instructor_verified: true,
            instructor_credentials: track.instructor.credentials,
            rating: track.rating,
            review_count: track.reviewCount,
            active_learners: track.activeLearners,
            lessons_count: track.lessonsCount,
            popular: track.popular,
            published: true,
          },
        ],
        { onConflict: 'id', ignoreDuplicates: false }
      );

      for (let mIdx = 0; mIdx < detailedModules.length; mIdx++) {
        const mod = detailedModules[mIdx];
        const moduleId = `mod-${track.id}-${mIdx + 1}`;

        // Upsert Module with onConflict
        await supabase.from('modules').upsert(
          [
            {
              id: moduleId,
              track_id: track.id,
              title: mod.title,
              duration: mod.duration,
              order_index: mIdx + 1,
            },
          ],
          { onConflict: 'id', ignoreDuplicates: false }
        );

        const lessonsToInsert = mod.lessons.map((les, lIdx) => ({
          id: `les-${track.id}-${mIdx + 1}-${lIdx + 1}`,
          module_id: moduleId,
          title: les.title,
          duration: les.duration,
          video_url: les.videoUrl,
          content: JSON.stringify(les),
          order_index: lIdx + 1,
        }));

        // Upsert Lessons with onConflict
        await supabase.from('lessons').upsert(lessonsToInsert, { onConflict: 'id', ignoreDuplicates: false });
      }
    }
    return { success: true, error: null };
  } catch (err) {
    return { success: false, error: err };
  } finally {
    isSeedingInProgress = false;
  }
}

export async function seedHTMLCourseToSupabase(): Promise<{ track: Track | null; error: any }> {
  const result = await seedZeroToHeroCoursesToSupabase();
  return { track: ZERO_TO_HERO_TRACKS[0], error: result.error };
}

export async function createTrackInDB(input: CreateTrackInput): Promise<{ track: Track | null; error: any }> {
  try {
    const trackId = `track-${Date.now()}`;
    const slug = input.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + `-${Math.floor(Math.random() * 1000)}`;
    const categoryLabel = getCategoryLabel(input.category);

    let totalLessonsCount = 0;
    input.modules.forEach(m => {
      totalLessonsCount += (m.lessons || []).length;
    });

    const user = await getCurrentUser();

    // 1. Upsert Track
    const { data: trackRow, error: trackError } = await supabase
      .from('tracks')
      .upsert(
        [
          {
            id: trackId,
            user_id: user?.id || null,
            title: input.title,
            category: input.category,
            category_label: categoryLabel,
            slug,
            level: input.level,
            description: input.description,
            duration: input.duration || '4 Weeks',
            skills: input.skills,
            color_theme: input.colorTheme || 'from-blue-600 to-indigo-700',
            instructor_name: input.instructorName || (user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Instructor'),
            instructor_role: input.instructorRole || 'Lead Instructor',
            instructor_avatar: input.instructorAvatar || (user?.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'),
            instructor_verified: true,
            instructor_credentials: 'Epicademy Creator',
            rating: 5.0,
            review_count: 0,
            active_learners: 1,
            lessons_count: totalLessonsCount,
            published: true,
          },
        ],
        { onConflict: 'id' }
      )
      .select()
      .single();

    if (trackError) {
      return { track: null, error: trackError };
    }

    // 2. Upsert Modules & Lessons
    for (let mIdx = 0; mIdx < input.modules.length; mIdx++) {
      const mod = input.modules[mIdx];
      const moduleId = `mod-${Date.now()}-${mIdx}`;

      const { error: modError } = await supabase
        .from('modules')
        .upsert(
          [
            {
              id: moduleId,
              track_id: trackId,
              title: mod.title,
              duration: mod.duration || '1 Week',
              order_index: mIdx + 1,
            },
          ],
          { onConflict: 'id' }
        );

      if (!modError && mod.lessons && mod.lessons.length > 0) {
        const lessonInserts = mod.lessons.map((les, lIdx) => ({
          id: `les-${Date.now()}-${mIdx}-${lIdx}`,
          module_id: moduleId,
          title: les.title,
          duration: les.duration || '15 mins',
          video_url: les.videoUrl || '',
          content: les.content || '',
          order_index: lIdx + 1,
        }));

        await supabase.from('lessons').upsert(lessonInserts, { onConflict: 'id' });
      }
    }

    const createdTrack: Track = {
      id: trackRow.id,
      title: trackRow.title,
      category: trackRow.category,
      categoryLabel: trackRow.category_label,
      slug: trackRow.slug,
      badge: 'New Course',
      level: trackRow.level,
      instructor: {
        name: trackRow.instructor_name,
        role: trackRow.instructor_role,
        avatar: trackRow.instructor_avatar,
        verified: true,
        credentials: trackRow.instructor_credentials,
      },
      rating: 5.0,
      reviewCount: 0,
      activeLearners: 1,
      lessonsCount: totalLessonsCount,
      duration: trackRow.duration,
      description: trackRow.description,
      skills: trackRow.skills || [],
      colorTheme: trackRow.color_theme,
      published: true,
      isCustomCourse: true,
    };

    return { track: createdTrack, error: null };
  } catch (err) {
    return { track: null, error: err };
  }
}

export async function fetchTrackModulesAndLessons(trackId: string): Promise<ModuleItem[]> {
  try {
    const { data: modulesData, error: modError } = await supabase
      .from('modules')
      .select('*')
      .eq('track_id', trackId)
      .order('order_index', { ascending: true });

    if (modError || !modulesData || modulesData.length === 0) {
      const zeroCourse = getZeroToHeroCourse(trackId);
      if (zeroCourse) {
        return zeroCourse.detailedModules.map((m, mIdx) => ({
          id: `mod-${trackId}-${mIdx + 1}`,
          track_id: trackId,
          title: m.title,
          duration: m.duration,
          lessons: m.lessons.length,
          topics: m.lessons.map(l => l.title),
          lessonItems: m.lessons.map((l, lIdx) => ({
            id: `les-${trackId}-${mIdx + 1}-${lIdx + 1}`,
            module_id: `mod-${trackId}-${mIdx + 1}`,
            title: l.title,
            duration: l.duration,
            video_url: l.videoUrl,
            content: JSON.stringify(l),
            order_index: lIdx + 1,
          })),
        }));
      }
      return [];
    }

    const moduleIds = modulesData.map((m: any) => m.id);
    const { data: lessonsData } = await supabase
      .from('lessons')
      .select('*')
      .in('module_id', moduleIds)
      .order('order_index', { ascending: true });

    const modules: ModuleItem[] = modulesData.map((mod: any) => {
      const relatedLessons = (lessonsData || []).filter((l: any) => l.module_id === mod.id);
      return {
        id: mod.id,
        track_id: mod.track_id,
        title: mod.title,
        duration: mod.duration,
        lessons: relatedLessons.length,
        topics: relatedLessons.map((l: any) => l.title),
        lessonItems: relatedLessons.map((l: any) => ({
          id: l.id,
          module_id: l.module_id,
          title: l.title,
          duration: l.duration,
          video_url: l.video_url,
          content: l.content,
        })),
      };
    });

    return modules;
  } catch {
    const zeroCourse = getZeroToHeroCourse(trackId);
    if (zeroCourse) {
      return zeroCourse.detailedModules.map((m, mIdx) => ({
        id: `mod-${trackId}-${mIdx + 1}`,
        track_id: trackId,
        title: m.title,
        duration: m.duration,
        lessons: m.lessons.length,
        topics: m.lessons.map(l => l.title),
        lessonItems: m.lessons.map((l, lIdx) => ({
          id: `les-${trackId}-${mIdx + 1}-${lIdx + 1}`,
          module_id: `mod-${trackId}-${mIdx + 1}`,
          title: l.title,
          duration: l.duration,
          video_url: l.videoUrl,
          content: JSON.stringify(l),
          order_index: lIdx + 1,
        })),
      }));
    }
    return [];
  }
}

export async function deleteTrackFromDB(trackId: string): Promise<{ error: any }> {
  const { error } = await supabase
    .from('tracks')
    .delete()
    .eq('id', trackId);

  return { error };
}

export async function enrollUserInTrack(trackId: string, userEmail: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .upsert(
      [
        {
          track_id: trackId,
          user_email: userEmail,
        },
      ],
      { onConflict: 'track_id,user_email' }
    )
    .select()
    .single();

  return { data, error };
}

// ==========================================
// Community Posts Helpers
// ==========================================
export async function fetchCommunityPosts(): Promise<{ posts: CommunityPost[] | null; error: any }> {
  try {
    const { data, error } = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { posts: null, error };
    }

    const posts: CommunityPost[] = (data || []).map((row: any) => ({
      id: row.id,
      channel: row.channel,
      trackCategory: row.track_category || 'all',
      timestamp: formatTimeAgo(new Date(row.created_at)),
      title: row.title,
      content: row.content,
      likes: row.likes_count || 0,
      repliesCount: row.replies_count || 0,
      isLiked: false,
      tags: row.tags || ['Community'],
      author: {
        name: row.author_name || 'Anonymous Student',
        role: row.author_role || 'Community Member',
        avatar: row.author_avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        isEducator: Boolean(row.is_educator),
        tierBadge: row.author_badge || 'Member',
      },
    }));

    return { posts, error: null };
  } catch (err) {
    return { posts: null, error: err };
  }
}

export async function createCommunityPost(post: {
  channel: string;
  title: string;
  content: string;
  author_name: string;
  author_role: string;
  author_avatar?: string;
  is_educator?: boolean;
  author_badge?: string;
  tags?: string[];
}) {
  const { data, error } = await supabase
    .from('community_posts')
    .insert([
      {
        channel: post.channel,
        title: post.title,
        content: post.content,
        author_name: post.author_name,
        author_role: post.author_role,
        author_avatar: post.author_avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        is_educator: post.is_educator || false,
        author_badge: post.author_badge || 'Member',
        tags: post.tags || ['General'],
        likes_count: 1,
        replies_count: 0,
      },
    ])
    .select()
    .single();

  return { data, error };
}

export async function togglePostLike(postId: string, currentLikes: number, isLiked: boolean) {
  const newLikes = isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1;
  const { error } = await supabase
    .from('community_posts')
    .update({ likes_count: newLikes })
    .eq('id', postId);

  return { newLikes, error };
}

function getCategoryLabel(cat: string): string {
  switch (cat) {
    case 'stem': return 'STEM & Technology';
    case 'business': return 'Business & Leadership';
    case 'creative': return 'Creative Arts & Design';
    case 'humanities': return 'Languages & Humanities';
    case 'wellness': return 'Health & Science';
    default: return 'General Academy';
  }
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(days / 24);
  return `${days}d ago`;
}