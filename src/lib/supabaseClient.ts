import { createClient } from '@supabase/supabase-js';
import type { CommunityPost, Track, ModuleItem, CreateTrackInput, TeacherProfile, RegisterTeacherInput, UserRole } from '../types';
import { ZERO_TO_HERO_COURSES, ZERO_TO_HERO_TRACKS, getZeroToHeroCourse } from '../data/zeroToHeroCoursesData';
import { TESDA_CSS_TRACK } from '../data/tesdaCssNc2CourseData';
import { PINOY_DRUM_TRACK } from '../data/pinoyDrumCourseData';
import { PINOY_PIANO_TRACK } from '../data/pinoyPianoCourseData';
import { PINOY_GUITAR_TRACK } from '../data/pinoyGuitarCourseData';
import { PINOY_LEAD_GUITAR_TRACK } from '../data/pinoyLeadGuitarCourseData';
import { getTenantCourseDetailedModules } from '../data/tenantCoursesDetailedData';
import { getPhpPrice } from './philippinePayment';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ukhmrgbkrfawgszltzsr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_uB7grQdiSm_z6PzMvXITdA_Kdih_GuP';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const TEACHER_TRACKS_STORAGE_KEY = 'epicademy_teacher_tracks';

export function getLocalTeacherTracks(): Track[] {
  try {
    const data = localStorage.getItem(TEACHER_TRACKS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveLocalTeacherTracks(tracks: Track[]): void {
  try {
    localStorage.setItem(TEACHER_TRACKS_STORAGE_KEY, JSON.stringify(tracks));
  } catch (err) {
    console.error('Failed to save teacher tracks locally', err);
  }
}

// Guard to prevent concurrent multiple seed loops in the frontend
let isSeedingInProgress = false;

// ==========================================
// Authentication & Teacher Profile Helpers
// ==========================================
export async function signUpUser(email: string, password: string, role: UserRole, fullName?: string) {
  const cleanEmail = email.toLowerCase().trim();
  const resolvedName = fullName?.trim() || cleanEmail.split('@')[0];

  const { data, error } = await supabase.auth.signUp({
    email: cleanEmail,
    password,
    options: {
      data: {
        role,
        full_name: resolvedName,
      },
    },
  });

  if (error) {
    return { data, error };
  }

  // Supabase returns empty identities array when user is already registered
  if (data?.user && data.user.identities && data.user.identities.length === 0) {
    return {
      data,
      error: new Error('An account with this email already exists. Please switch to Sign In.'),
    };
  }

  if (data?.user) {
    try {
      await supabase.from('profiles').upsert(
        [
          {
            id: data.user.id,
            email: cleanEmail,
            full_name: resolvedName,
            role,
            is_verified: true,
          },
        ],
        { onConflict: 'id' }
      );
    } catch (e) {
      console.warn('Profile upsert note:', e);
    }
  }

  return { data, error: null };
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

// ==========================================
// Account Management & Status Helpers
// ==========================================
export interface UserProfileItem {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  specialty?: string;
  credentials?: string;
  bio?: string;
  avatarUrl?: string;
  isVerified?: boolean;
  isDisabled?: boolean;
  createdAt?: string;
}

export const SEED_USER_PROFILES: UserProfileItem[] = [];

// Clean up any legacy localStorage keys so client state is strictly pure Supabase
try {
  localStorage.removeItem('epicademy_local_profiles');
  localStorage.removeItem('epicademy_disabled_emails');
  localStorage.removeItem('epicademy_deleted_accounts');
  localStorage.removeItem('epicademy_active_user');
} catch {}

// Fast in-memory user role cache populated during DB queries
const userRoleCache = new Map<string, UserRole>();

// Legacy compatibility stubs (no localStorage mocks)
export function getDeletedAccountKeys(): Set<string> {
  return new Set();
}

export function isAccountDeleted(_identifier?: string | null): boolean {
  return false;
}

export function markAccountAsDeleted(_email?: string | null, _id?: string | null): void {}
export function unmarkAccountAsDeleted(_identifier?: string | null): void {}
export function getDisabledEmails(): Set<string> {
  return new Set();
}
export function isAccountDisabled(_email: string): boolean {
  return false;
}
export function setAccountDisabledLocally(_email: string, _disabled: boolean): void {}
export function getLocalProfiles(): UserProfileItem[] {
  return [];
}
export function saveLocalProfiles(_profiles: UserProfileItem[]): void {}

export function getUserRoleByEmail(email?: string | null): UserRole {
  if (!email) return 'student';
  const clean = email.toLowerCase().trim();
  if (clean === 'jovenneljed@gmail.com') return 'admin';
  return userRoleCache.get(clean) || 'student';
}

export async function fetchAllUserProfiles(): Promise<{ profiles: UserProfileItem[]; error: any }> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase profiles fetch note:', error);
      return { profiles: [], error };
    }

    const list: UserProfileItem[] = [];

    if (data && data.length > 0) {
      data.forEach((row: any) => {
        const email = (row.email || '').toLowerCase().trim();

        // Filter out deleted tombstones or legacy demo accounts
        if (
          row.bio === 'DELETED' ||
          email.includes('@epicademy.deleted') ||
          email.includes('@deleted.local') ||
          email.endsWith('@epicademy.com')
        ) {
          return;
        }

        const rawRole = (row.role || '').toLowerCase().trim();
        let role: UserRole = 'student';
        if (rawRole === 'admin' || rawRole === 'educator' || rawRole === 'contributor' || rawRole === 'student') {
          role = rawRole as UserRole;
        }
        if (email === 'jovenneljed@gmail.com') {
          role = 'admin';
        }

        userRoleCache.set(email, role);

        const isDisabled = row.is_verified === false;

        const item: UserProfileItem = {
          id: row.id,
          email: row.email,
          fullName: row.full_name || row.email?.split('@')[0] || 'User',
          role,
          specialty: row.specialty || '',
          credentials: row.credentials || '',
          bio: row.bio || '',
          avatarUrl: row.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          isVerified: !isDisabled,
          isDisabled,
          createdAt: row.created_at,
        };

        list.push(item);
      });
    }

    return { profiles: list, error: null };
  } catch (err) {
    console.error('Fatal profiles fetch error:', err);
    return { profiles: [], error: err };
  }
}

export async function createUserAccount(input: {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  specialty?: string;
}): Promise<{ profile: UserProfileItem | null; error: any }> {
  try {
    const cleanEmail = input.email.toLowerCase().trim();
    const defaultSpecialty = input.specialty || (
      input.role === 'admin' ? 'Platform Security & Systems Administration' :
      input.role === 'educator' ? 'Academic Disciplines & Instruction' :
      input.role === 'contributor' ? 'Curriculum Authoring & Media' :
      'Vocational Student Learner'
    );

    // Ephemeral Supabase client so admin's active session is never overwritten
    const ephemeralClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });

    const { data: authData, error: authError } = await ephemeralClient.auth.signUp({
      email: cleanEmail,
      password: input.password,
      options: {
        data: {
          role: input.role,
          full_name: input.fullName,
          specialty: defaultSpecialty,
        },
      },
    });

    if (authError) {
      return { profile: null, error: authError };
    }

    if (authData?.user && authData.user.identities && authData.user.identities.length === 0) {
      return {
        profile: null,
        error: new Error('An account with this email already exists in Supabase.'),
      };
    }

    const userId = authData?.user?.id;
    if (!userId) {
      return {
        profile: null,
        error: new Error('Unable to establish account identity with Supabase Auth.'),
      };
    }

    // Insert directly into Supabase profiles table
    const { error: profileError } = await supabase.from('profiles').upsert([
      {
        id: userId,
        email: cleanEmail,
        full_name: input.fullName || cleanEmail.split('@')[0],
        role: input.role,
        specialty: defaultSpecialty,
        is_verified: true,
      }
    ], { onConflict: 'id' });

    if (profileError) {
      console.warn('Profile upsert warning:', profileError);
    }

    userRoleCache.set(cleanEmail, input.role);

    const newProfile: UserProfileItem = {
      id: userId,
      email: cleanEmail,
      fullName: input.fullName || cleanEmail.split('@')[0],
      role: input.role,
      specialty: defaultSpecialty,
      isVerified: true,
      isDisabled: false,
      createdAt: new Date().toISOString(),
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    };

    return { profile: newProfile, error: null };
  } catch (err: any) {
    return { profile: null, error: err };
  }
}

export async function deleteUserAccount(userId: string, email: string): Promise<{ success: boolean; error: any }> {
  try {
    const cleanEmail = email.toLowerCase().trim();

    // 1. Delete from Supabase profiles table
    if (userId) {
      await supabase.from('profiles').delete().eq('id', userId);
    }
    if (cleanEmail) {
      await supabase.from('profiles').delete().eq('email', cleanEmail);
    }

    // 2. Mark profile as deleted tombstone in DB to ensure cross-browser sync
    if (userId) {
      await supabase.from('profiles').update({
        email: `deleted_${Date.now()}_${userId.slice(0, 8)}@epicademy.deleted`,
        is_verified: false,
        bio: 'DELETED',
      }).eq('id', userId);
    }

    userRoleCache.delete(cleanEmail);

    // 3. If currently signed in, sign out immediately
    const { data: { user } } = await supabase.auth.getUser();
    if (user && (user.id === userId || user.email?.toLowerCase() === cleanEmail)) {
      await supabase.auth.signOut();
    }

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err };
  }
}

export async function toggleUserAccountStatus(
  userId: string,
  email: string,
  disable: boolean
): Promise<{ success: boolean; error: any }> {
  try {
    const cleanEmail = email.toLowerCase().trim();

    if (userId) {
      await supabase.from('profiles').update({ is_verified: !disable }).eq('id', userId);
    }
    if (cleanEmail) {
      await supabase.from('profiles').update({ is_verified: !disable }).eq('email', cleanEmail);
    }

    if (disable) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user && (user.id === userId || user.email?.toLowerCase() === cleanEmail)) {
        await supabase.auth.signOut();
      }
    }

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err };
  }
}

export async function updateUserRole(
  userId: string,
  email: string,
  newRole: UserRole
): Promise<{ success: boolean; error: any }> {
  try {
    const cleanEmail = email.toLowerCase().trim();
    if (userId) {
      await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
    }
    if (cleanEmail) {
      await supabase.from('profiles').update({ role: newRole }).eq('email', cleanEmail);
    }
    userRoleCache.set(cleanEmail, newRole);
    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err };
  }
}

export async function signInUser(email: string, password: string) {
  const cleanEmail = email.toLowerCase().trim();

  try {
    // 1. Authenticate with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (error || !data?.user) {
      return {
        data: { user: null, session: null },
        error: error || new Error('Invalid email or password. Please verify your credentials.'),
      };
    }

    // 2. Cross-browser verification against Supabase profiles table
    const { data: prof } = await supabase
      .from('profiles')
      .select('id, email, role, is_verified, full_name, bio')
      .or(`id.eq.${data.user.id},email.eq.${cleanEmail}`)
      .maybeSingle();

    if (!prof || prof.bio === 'DELETED' || prof.email?.includes('@epicademy.deleted')) {
      await supabase.auth.signOut();
      return {
        data: { user: null, session: null },
        error: new Error('This account has been deleted by an administrator and no longer exists.'),
      };
    }

    if (prof.is_verified === false) {
      await supabase.auth.signOut();
      return {
        data: { user: null, session: null },
        error: new Error('This account has been disabled by the administrator. Access denied.'),
      };
    }

    // Attach real verified role & full name
    const verifiedRole = prof.role || data.user.user_metadata?.role || 'student';
    userRoleCache.set(cleanEmail, verifiedRole);

    data.user.user_metadata = {
      ...data.user.user_metadata,
      role: verifiedRole,
      full_name: prof.full_name || data.user.user_metadata?.full_name,
    };

    return { data, error: null };
  } catch (err: any) {
    return { data: { user: null, session: null }, error: err };
  }
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !user.email) return null;

  const cleanEmail = user.email.toLowerCase().trim();

  // Cross-browser live verification against Supabase profiles table
  try {
    const { data: prof } = await supabase
      .from('profiles')
      .select('id, email, role, is_verified, bio')
      .or(`id.eq.${user.id},email.eq.${cleanEmail}`)
      .maybeSingle();

    if (!prof || prof.bio === 'DELETED' || prof.email?.includes('@epicademy.deleted')) {
      await supabase.auth.signOut();
      return null;
    }

    if (prof.is_verified === false) {
      await supabase.auth.signOut();
      return null;
    }

    const verifiedRole = prof.role || user.user_metadata?.role || 'student';
    userRoleCache.set(cleanEmail, verifiedRole);

    user.user_metadata = {
      ...user.user_metadata,
      role: verifiedRole,
    };
  } catch (e) {
    console.warn('Live profile check note:', e);
  }

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
      const localTeacherTracks = getLocalTeacherTracks();
      return { tracks: [...localTeacherTracks, ...ZERO_TO_HERO_TRACKS, TESDA_CSS_TRACK, PINOY_DRUM_TRACK, PINOY_PIANO_TRACK, PINOY_GUITAR_TRACK, PINOY_LEAD_GUITAR_TRACK], error: null };
    }

    const dbTracks: Track[] = data.map((row: any) => {
      const isTesda = row.id === 'track-tesda-css-nc2';
      const isDrum = row.id === 'track-pinoy-drum-zero-to-hero';
      const isPiano = row.id === 'track-pinoy-piano-zero-to-hero';
      const isGuitar = row.id === 'track-pinoy-guitar-zero-to-hero';
      const isLeadGuitar = row.id === 'track-pinoy-lead-guitar-zero-to-hero';
      const isStandardCourse = isTesda || isDrum || isPiano || isGuitar || isLeadGuitar || ZERO_TO_HERO_TRACKS.some(z => z.id === row.id);
      const isBundle = Boolean(row.is_bundle ?? (isTesda || isDrum || isPiano || isGuitar || isLeadGuitar));
      const bundleNumber = row.bundle_number || (isTesda ? 2 : isDrum ? 3 : isPiano ? 4 : isGuitar ? 5 : isLeadGuitar ? 6 : undefined);
      const bundleLabel = row.bundle_label || (
        isTesda 
          ? '★ 2ND OFFICIAL COURSE BUNDLE: TESDA VOCATIONAL MASTERCLASS' 
          : isDrum 
          ? '★ 3RD OFFICIAL COURSE BUNDLE: PINOY DRUM MASTERCLASS' 
          : isPiano
          ? '★ 4TH OFFICIAL COURSE BUNDLE: PINOY PIANO & CHURCH KEYBOARD MASTERCLASS'
          : isGuitar
          ? '★ 5TH OFFICIAL COURSE BUNDLE: PINOY RHYTHM GUITAR MASTERCLASS'
          : isLeadGuitar
          ? '★ 6TH OFFICIAL COURSE BUNDLE: PINOY LEAD GUITAR MASTERCLASS'
          : undefined
      );

      return {
        id: row.id,
        title: row.title,
        category: row.category,
        categoryLabel: row.category_label || getCategoryLabel(row.category),
        slug: row.slug,
        badge: isTesda 
          ? '★ 2ND COURSE BUNDLE • TESDA NC II' 
          : isDrum 
          ? '★ 3RD COURSE BUNDLE • PINOY DRUM MASTERCLASS' 
          : isPiano
          ? '★ 4TH COURSE BUNDLE • PINOY PIANO MASTERCLASS'
          : isGuitar
          ? '★ 5TH COURSE BUNDLE • RHYTHM GUITAR'
          : isLeadGuitar
          ? '★ 6TH COURSE BUNDLE • LEAD GUITAR'
          : (row.badge || 'New Course'),
        level: row.level || 'Beginner',
        levelIndex: row.level_index !== null && row.level_index !== undefined ? Number(row.level_index) : undefined,
        isBundle,
        bundleNumber,
        bundleLabel,
        price: Number(row.price) || 49,
        originalPrice: Number(row.original_price) || (Number(row.price || 49) * 2),
        careerMilestone: row.career_milestone || (
          isTesda 
            ? 'TESDA CSS NC II National Certification Passer' 
            : isDrum 
            ? 'Stage-Ready Pro Drummer & Church Sessionist' 
            : isPiano
            ? 'Stage-Ready Church Keyboardist & Worship Hero'
            : isGuitar
            ? 'Stage-Ready Pro Rhythm Guitarist & Worship Accompanist'
            : isLeadGuitar
            ? 'Stage-Ready Pro Lead Guitarist & Church Soloist'
            : 'Certified Web Developer'
        ),
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
        isCustomCourse: !isStandardCourse,
        isTeacherCreated: Boolean(row.is_teacher_created ?? !isStandardCourse),
        authorEmail: row.author_email || undefined,
      };
    });

    const localTeacherTracks = getLocalTeacherTracks();
    const localMap = new Map(localTeacherTracks.map(t => [t.id, t]));
    
    // Combine dbTracks with local teacher tracks, allowing local teacher tracks to override or supplement
    const mergedTeacherAndDb: Track[] = [...localTeacherTracks];
    dbTracks.forEach(dt => {
      if (!localMap.has(dt.id)) {
        mergedTeacherAndDb.push(dt);
      }
    });

    const existingIds = new Set(mergedTeacherAndDb.map(t => t.id));
    const missingStandardTracks = [...ZERO_TO_HERO_TRACKS, TESDA_CSS_TRACK, PINOY_DRUM_TRACK, PINOY_PIANO_TRACK, PINOY_GUITAR_TRACK, PINOY_LEAD_GUITAR_TRACK].filter(t => !existingIds.has(t.id));

    const combined = [...mergedTeacherAndDb, ...missingStandardTracks].sort((a, b) => {
      if (a.isTeacherCreated && !b.isTeacherCreated) return -1;
      if (!a.isTeacherCreated && b.isTeacherCreated) return 1;
      if (a.isBundle && !b.isBundle) return 1;
      if (!a.isBundle && b.isBundle) return -1;
      if (a.isBundle && b.isBundle) {
        return (a.bundleNumber || 99) - (b.bundleNumber || 99);
      }
      return (a.levelIndex || 99) - (b.levelIndex || 99);
    });

    return { tracks: combined, error: null };
  } catch (err) {
    const localTeacherTracks = getLocalTeacherTracks();
    return { tracks: [...localTeacherTracks, ...ZERO_TO_HERO_TRACKS, TESDA_CSS_TRACK, PINOY_DRUM_TRACK, PINOY_PIANO_TRACK, PINOY_GUITAR_TRACK, PINOY_LEAD_GUITAR_TRACK], error: err };
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
    const trackId = input.id || `track-${Date.now()}`;
    const slug = input.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + `-${Math.floor(Math.random() * 1000)}`;
    const categoryLabel = getCategoryLabel(input.category);

    let totalLessonsCount = 0;
    input.modules.forEach(m => {
      totalLessonsCount += (m.lessons || []).length;
    });

    const user = await getCurrentUser();

    // Map nested modules and lessons with activities, exams, and worksheets
    const mappedModules: ModuleItem[] = input.modules.map((m, mIdx) => {
      const moduleId = m.id || `mod-${trackId}-${mIdx + 1}`;
      return {
        id: moduleId,
        track_id: trackId,
        title: m.title,
        duration: m.duration || '1 Week',
        overview: m.overview || '',
        order_index: mIdx + 1,
        lessons: m.lessons.length,
        topics: m.lessons.map(l => l.title),
        lessonItems: m.lessons.map((l, lIdx) => ({
          id: l.id || `les-${trackId}-${mIdx + 1}-${lIdx + 1}`,
          module_id: moduleId,
          title: l.title,
          duration: l.duration || '15 mins',
          video_url: l.videoUrl || '',
          content: l.content || '',
          objective: l.objective || '',
          code_snippet: l.codeSnippet || '',
          activity: l.activity,
          exam: l.exam,
          worksheet: l.worksheet,
          classroom_link: l.classroomLink || '',
          order_index: lIdx + 1,
          progress: 0,
        })),
      };
    });

    const createdTrack: Track = {
      id: trackId,
      title: input.title,
      category: input.category,
      categoryLabel,
      slug,
      badge: 'Teacher Created Course',
      level: input.level,
      price: input.price !== undefined ? input.price : 0,
      originalPrice: input.originalPrice !== undefined ? input.originalPrice : 0,
      isPaid: input.isPaid !== undefined ? input.isPaid : false,
      careerMilestone: `Certified Graduate in ${input.title}`,
      instructor: {
        name: input.instructorName || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Faculty Member',
        role: input.instructorRole || 'Lead Instructor & Course Author',
        avatar: input.instructorAvatar || user?.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Verified Epicademy Faculty Educator',
      },
      rating: 5.0,
      reviewCount: 0,
      activeLearners: 1,
      lessonsCount: totalLessonsCount,
      duration: input.duration || '4 Weeks',
      description: input.description,
      skills: input.skills || ['Core Competencies'],
      colorTheme: input.colorTheme || 'from-blue-600 to-indigo-700',
      published: true,
      isCustomCourse: true,
      isTeacherCreated: true,
      authorEmail: user?.email,
      modules: mappedModules,
    };

    // 1. Immediately persist to Local Storage for high reliability
    const existing = getLocalTeacherTracks().filter(t => t.id !== trackId);
    saveLocalTeacherTracks([createdTrack, ...existing]);

    // 2. Best-effort Supabase sync
    try {
      await supabase.from('tracks').upsert([
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
          instructor_name: createdTrack.instructor.name,
          instructor_role: createdTrack.instructor.role,
          instructor_avatar: createdTrack.instructor.avatar,
          instructor_verified: true,
          instructor_credentials: createdTrack.instructor.credentials,
          rating: 5.0,
          review_count: 0,
          active_learners: 1,
          lessons_count: totalLessonsCount,
          published: true,
        },
      ], { onConflict: 'id' });

      for (let mIdx = 0; mIdx < mappedModules.length; mIdx++) {
        const mod = mappedModules[mIdx];
        await supabase.from('modules').upsert([
          {
            id: mod.id,
            track_id: trackId,
            title: mod.title,
            duration: mod.duration || '1 Week',
            order_index: mIdx + 1,
          },
        ], { onConflict: 'id' });

        if (mod.lessonItems && mod.lessonItems.length > 0) {
          const lessonInserts = mod.lessonItems.map((les, lIdx) => ({
            id: les.id,
            module_id: mod.id,
            title: les.title,
            duration: les.duration || '15 mins',
            video_url: les.video_url || '',
            content: JSON.stringify({
              content: les.content,
              objective: les.objective,
              codeSnippet: les.code_snippet,
              activity: les.activity,
              exam: les.exam,
              worksheet: les.worksheet,
            }),
            order_index: lIdx + 1,
          }));

          await supabase.from('lessons').upsert(lessonInserts, { onConflict: 'id' });
        }
      }
    } catch {
      // Ignore Supabase sync failure; local storage copy is already safely stored
    }

    return { track: createdTrack, error: null };
  } catch (err) {
    return { track: null, error: err };
  }
}

export async function updateTrackInDB(trackId: string, input: CreateTrackInput): Promise<{ track: Track | null; error: any }> {
  try {
    input.id = trackId;
    return await createTrackInDB(input);
  } catch (err) {
    return { track: null, error: err };
  }
}

export async function fetchTrackModulesAndLessons(trackId: string): Promise<ModuleItem[]> {
  // 00. Check if it's the Lead Guitar track
  if (trackId === 'track-pinoy-lead-guitar-zero-to-hero' || trackId === PINOY_LEAD_GUITAR_TRACK.id) {
    return PINOY_LEAD_GUITAR_TRACK.modules || [];
  }

  // 0a. Check if it's the Guitar track
  if (trackId === 'track-pinoy-guitar-zero-to-hero' || trackId === PINOY_GUITAR_TRACK.id) {
    return PINOY_GUITAR_TRACK.modules || [];
  }

  // 0b. Check if it's the Piano track
  if (trackId === 'track-pinoy-piano-zero-to-hero' || trackId === PINOY_PIANO_TRACK.id) {
    return PINOY_PIANO_TRACK.modules || [];
  }

  // 1. Check if it's the Drum track
  if (trackId === 'track-pinoy-drum-zero-to-hero' || trackId === PINOY_DRUM_TRACK.id) {
    return PINOY_DRUM_TRACK.modules || [];
  }

  // 2. Check if it's the TESDA CSS NC II track
  if (trackId === 'track-tesda-css-nc2' || trackId === TESDA_CSS_TRACK.id) {
    return TESDA_CSS_TRACK.modules || [];
  }

  // 2. Check Community Developer / Tenant Tracks (Authored by Ronnel M. Aviguetero)
  const tenantDetailed = getTenantCourseDetailedModules(trackId);
  if (tenantDetailed && tenantDetailed.length > 0) {
    return tenantDetailed.map((m, mIdx) => ({
      id: `mod-${trackId}-${mIdx + 1}`,
      track_id: trackId,
      title: m.title,
      duration: m.duration,
      overview: m.overview,
      lessons: m.lessons.length,
      topics: m.lessons.map(l => l.title),
      lessonItems: m.lessons.map((l, lIdx) => ({
        id: `les-${trackId}-${mIdx + 1}-${lIdx + 1}`,
        module_id: `mod-${trackId}-${mIdx + 1}`,
        title: l.title,
        duration: l.duration,
        video_url: l.videoUrl,
        content: l.theoryContent || '',
        objective: l.objective || '',
        code_snippet: l.codeSnippet || '',
        activity: l.handsOnActivity ? {
          title: l.handsOnActivity.title,
          instructions: l.handsOnActivity.instructions,
          starterCode: l.handsOnActivity.starterCode,
          expectedOutcome: l.handsOnActivity.expectedOutcome,
        } : undefined,
        exam: l.exam,
        worksheet: l.googleSheetsAssignment ? {
          title: l.googleSheetsAssignment.title,
          sheetName: l.googleSheetsAssignment.sheetName,
          description: l.googleSheetsAssignment.description,
          templateUrl: l.googleSheetsAssignment.templateUrl,
          deliverables: l.googleSheetsAssignment.deliverables,
          rubric: l.googleSheetsAssignment.rubric,
        } : undefined,
        order_index: lIdx + 1,
        progress: 0,
      })),
    }));
  }

  // 3. Check Local Teacher Tracks
  const localTeacherTracks = getLocalTeacherTracks();
  const localTrack = localTeacherTracks.find(t => t.id === trackId);
  if (localTrack && localTrack.modules && localTrack.modules.length > 0) {
    return localTrack.modules;
  }

  // 4. Check Supabase
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
          overview: m.overview,
          lessons: m.lessons.length,
          topics: m.lessons.map(l => l.title),
          lessonItems: m.lessons.map((l, lIdx) => ({
            id: `les-${trackId}-${mIdx + 1}-${lIdx + 1}`,
            module_id: `mod-${trackId}-${mIdx + 1}`,
            title: l.title,
            duration: l.duration,
            video_url: l.videoUrl,
            content: l.theoryContent || '',
            objective: l.objective || '',
            code_snippet: l.codeSnippet || '',
            activity: l.handsOnActivity ? {
              title: l.handsOnActivity.title,
              instructions: l.handsOnActivity.instructions,
              starterCode: l.handsOnActivity.starterCode,
              expectedOutcome: l.handsOnActivity.expectedOutcome,
            } : undefined,
            worksheet: l.googleSheetsAssignment ? {
              title: l.googleSheetsAssignment.title,
              sheetName: l.googleSheetsAssignment.sheetName,
              description: l.googleSheetsAssignment.description,
              templateUrl: l.googleSheetsAssignment.templateUrl,
              deliverables: l.googleSheetsAssignment.deliverables,
              rubric: l.googleSheetsAssignment.rubric,
            } : undefined,
            order_index: lIdx + 1,
            progress: 0,
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
        lessonItems: relatedLessons.map((l: any) => {
          let parsedExtra: any = {};
          if (l.content && (l.content.startsWith('{') || l.content.startsWith('['))) {
            try {
              parsedExtra = JSON.parse(l.content);
            } catch {
              parsedExtra = { content: l.content };
            }
          } else {
            parsedExtra = { content: l.content };
          }

          return {
            id: l.id,
            module_id: l.module_id,
            title: l.title,
            duration: l.duration,
            video_url: l.video_url,
            content: parsedExtra.content || l.content,
            objective: parsedExtra.objective || '',
            code_snippet: parsedExtra.codeSnippet || '',
            activity: parsedExtra.activity,
            exam: parsedExtra.exam,
            worksheet: parsedExtra.worksheet,
            order_index: l.order_index,
            progress: 0,
          };
        }),
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
        overview: m.overview,
        lessons: m.lessons.length,
        topics: m.lessons.map(l => l.title),
        lessonItems: m.lessons.map((l, lIdx) => ({
          id: `les-${trackId}-${mIdx + 1}-${lIdx + 1}`,
          module_id: `mod-${trackId}-${mIdx + 1}`,
          title: l.title,
          duration: l.duration,
          video_url: l.videoUrl,
          content: l.theoryContent,
          objective: l.objective,
          code_snippet: l.codeSnippet,
          activity: l.handsOnActivity,
          worksheet: l.googleSheetsAssignment,
          order_index: lIdx + 1,
          progress: 0,
        })),
      }));
    }
    return [];
  }
}

export async function deleteTrackFromDB(trackId: string): Promise<{ error: any }> {
  try {
    const remaining = getLocalTeacherTracks().filter(t => t.id !== trackId);
    saveLocalTeacherTracks(remaining);
    const { error } = await supabase.from('tracks').delete().eq('id', trackId);
    return { error };
  } catch (err) {
    return { error: err };
  }
}

export const USER_ENROLLMENTS_KEY = 'epicademy_user_enrollments';

export function getUserEnrolledTrackIds(email?: string | null): string[] {
  if (!email) return [];
  try {
    const raw = localStorage.getItem(`${USER_ENROLLMENTS_KEY}_${email.toLowerCase().trim()}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function recordUserTrackEnrollment(email: string, trackId: string): void {
  if (!email || !trackId) return;
  try {
    const cleanEmail = email.toLowerCase().trim();
    const enrolled = new Set(getUserEnrolledTrackIds(cleanEmail));
    enrolled.add(trackId);
    localStorage.setItem(`${USER_ENROLLMENTS_KEY}_${cleanEmail}`, JSON.stringify(Array.from(enrolled)));
  } catch (e) {
    console.error('Error saving user enrollment locally:', e);
  }
}

export function isUserEnrolledInTrack(email?: string | null, trackId?: string | null): boolean {
  if (!email || !trackId) return false;
  const list = getUserEnrolledTrackIds(email);
  return list.includes(trackId);
}

export function isCourseFree(track: Track): boolean {
  if (track.isPaid === false) return true;
  if (track.bundleNumber === 2 || track.id === 'track-tesda-css-nc2') return true;
  if (track.bundleNumber === 3 || track.id === 'track-pinoy-drum-zero-to-hero') return true;
  if (track.bundleNumber === 4 || track.id === 'track-pinoy-piano-zero-to-hero') return true;
  if (track.bundleNumber === 5 || track.id === 'track-pinoy-guitar-zero-to-hero') return true;
  if (track.bundleNumber === 6 || track.id === 'track-pinoy-lead-guitar-zero-to-hero') return true;
  if (track.price === 0) return true;
  if (track.isPaid === true) return false;
  return (track.price ?? 49) === 0;
}

export interface CourseAccessResult {
  isFree: boolean;
  isPaid: boolean;
  isEnrolled: boolean;
  canView: boolean;      // Can inspect card & syllabus
  canOpen: boolean;      // Can open active classroom
  badge: {
    label: string;
    theme: 'admin' | 'free' | 'paid' | 'enrolled' | 'restricted';
  };
  buttonText: string;
  actionType: 'open_admin' | 'open_free' | 'open_enrolled' | 'contributor_restricted' | 'teacher_pay_required' | 'student_pay_required' | 'guest_restricted';
  noticeText?: string;
}

export function getCourseAccessPermission(
  track: Track,
  role?: string,
  email?: string
): CourseAccessResult {
  const isFree = isCourseFree(track);
  const isPaid = !isFree;
  const cleanRole = (role || 'student').toLowerCase().trim();
  const cleanEmail = (email || '').toLowerCase().trim();
  const enrolled = cleanEmail ? isUserEnrolledInTrack(cleanEmail, track.id) : false;
  const isGuest = cleanRole === 'guest' || cleanEmail.startsWith('guest@');

  // 0. GUEST (PREVIEW ONLY): Can browse roadmap & curriculum, but CANNOT access classroom or enroll
  if (isGuest) {
    return {
      isFree,
      isPaid,
      isEnrolled: false,
      canView: true,
      canOpen: false,
      badge: {
        label: isFree ? 'Free • Preview Only' : 'Paid • Preview Only',
        theme: 'restricted',
      },
      buttonText: '🔒 Guest Preview • Sign In to Access',
      actionType: 'guest_restricted',
      noticeText: 'Guest Preview Mode: Course curriculum and syllabus are view-only. Please Sign In or Enroll as a Student to access interactive classrooms and exercises.',
    };
  }

  // 1. ADMIN: Can view and open EVERY paid and unpaid course
  if (cleanRole === 'admin') {
    return {
      isFree,
      isPaid,
      isEnrolled: true,
      canView: true,
      canOpen: true,
      badge: {
        label: isFree ? 'Free • Admin Access' : 'Paid • Admin Unlimited',
        theme: 'admin',
      },
      buttonText: isFree ? 'Open Course • FREE' : 'Open Course • Admin Access',
      actionType: 'open_admin',
    };
  }

  // 2. ANY ROLE on FREE COURSES: Free courses can be opened by anyone!
  if (isFree) {
    return {
      isFree: true,
      isPaid: false,
      isEnrolled: true,
      canView: true,
      canOpen: true,
      badge: {
        label: '100% Free Masterclass',
        theme: 'free',
      },
      buttonText: 'Open Course • FREE',
      actionType: 'open_free',
    };
  }

  // 3. PAID COURSE ALREADY PURCHASED / ENROLLED
  if (enrolled) {
    return {
      isFree: false,
      isPaid: true,
      isEnrolled: true,
      canView: true,
      canOpen: true,
      badge: {
        label: 'Purchased • Enrolled',
        theme: 'enrolled',
      },
      buttonText: 'Open Course • Enrolled',
      actionType: 'open_enrolled',
    };
  }

  // 4. CONTRIBUTOR: Can see others work, but CANNOT access paid course
  if (cleanRole === 'contributor') {
    return {
      isFree: false,
      isPaid: true,
      isEnrolled: false,
      canView: true,
      canOpen: false,
      badge: {
        label: 'Paid • Contributor Restricted',
        theme: 'restricted',
      },
      buttonText: '🔒 Paid • Outline Only',
      actionType: 'contributor_restricted',
      noticeText: 'Contributors can view others’ curriculum and syllabus to guide content drafting, but interactive classroom lessons are restricted for paid courses.',
    };
  }

  // 5. TEACHER (EDUCATOR): Can only view courses but can't open unless they pay for it
  if (cleanRole === 'educator') {
    return {
      isFree: false,
      isPaid: true,
      isEnrolled: false,
      canView: true,
      canOpen: false,
      badge: {
        label: 'Paid • Faculty Tuition Required',
        theme: 'paid',
      },
      buttonText: '🔒 Unlock & Pay • ₱' + getPhpPrice(track.price || 49).toLocaleString(),
      actionType: 'teacher_pay_required',
      noticeText: 'Teachers can view course outlines and syllabi freely. Opening the interactive classroom requires enrollment tuition.',
    };
  }

  // 6. STUDENT: Can only open free courses, cannot open paid courses without purchasing
  return {
    isFree: false,
    isPaid: true,
    isEnrolled: false,
    canView: true,
    canOpen: false,
    badge: {
      label: 'Paid Premium Track',
      theme: 'paid',
    },
    buttonText: 'Enroll • ₱' + getPhpPrice(track.price || 49).toLocaleString(),
    actionType: 'student_pay_required',
    noticeText: 'Students can open all free courses. This premium track requires enrollment tuition.',
  };
}

export async function enrollUserInTrack(trackId: string, userEmail: string) {
  recordUserTrackEnrollment(userEmail, trackId);
  const { data, error } = await supabase
    .from('enrollments')
    .upsert(
      [
        {
          track_id: trackId,
          user_email: userEmail.toLowerCase().trim(),
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
const days = Math.floor(hours / 24);
return `${days}d ago`;
}