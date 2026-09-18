import { createClient } from '@supabase/supabase-js';
import type { CommunityPost, Track, ModuleItem, CreateTrackInput, TeacherProfile, RegisterTeacherInput, UserRole } from '../types';
import { ZERO_TO_HERO_COURSES, ZERO_TO_HERO_TRACKS, getZeroToHeroCourse } from '../data/zeroToHeroCoursesData';
import { TESDA_CSS_TRACK } from '../data/tesdaCssNc2CourseData';
import { PINOY_DRUM_TRACK } from '../data/pinoyDrumCourseData';
import { PINOY_PIANO_TRACK } from '../data/pinoyPianoCourseData';
import { PINOY_GUITAR_TRACK } from '../data/pinoyGuitarCourseData';
import { PINOY_LEAD_GUITAR_TRACK } from '../data/pinoyLeadGuitarCourseData';
import { getTenantCourseDetailedModules } from '../data/tenantCoursesDetailedData';

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
export async function signUpUser(email: string, password: string, role: UserRole) {
  const cleanEmail = email.toLowerCase().trim();
  unmarkAccountAsDeleted(cleanEmail);
  const { data, error } = await supabase.auth.signUp({
    email: cleanEmail,
    password,
    options: {
      data: {
        role,
        full_name: cleanEmail.split('@')[0],
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
            full_name: cleanEmail.split('@')[0],
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

export const SEED_USER_PROFILES: UserProfileItem[] = [
  {
    id: 'user-admin-seed',
    email: 'admin@epicademy.com',
    fullName: 'System Administrator (Ronnel M. Aviguetero)',
    role: 'admin',
    specialty: 'Platform Architecture & Security Governance',
    credentials: 'CEO & Founder, KEZJED Solutions | Superadmin',
    bio: 'Oversees all academic platforms, user permissions, teacher certifications, and course curricula.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    isVerified: true,
    isDisabled: false,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'user-educator-seed',
    email: 'educator@epicademy.com',
    fullName: 'Prof. Maria Santos',
    role: 'educator',
    specialty: 'Computer Systems & Software Engineering',
    credentials: 'TESDA Certified Master Trainer | Senior Faculty',
    bio: 'Lead lecturer for Computer Systems Servicing NC II and Vocational Hardware/Network Architecture.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    isVerified: true,
    isDisabled: false,
    createdAt: '2026-01-02T00:00:00.000Z',
  },
  {
    id: 'user-contributor-seed',
    email: 'contributor@epicademy.com',
    fullName: 'Alex Rivera',
    role: 'contributor',
    specialty: 'Music, Rhythm & Audio Arts',
    credentials: 'Pinoy Music Theorist & Curriculum Contributor',
    bio: 'Author of rhythm and lead guitar instructional tracks, practical fretboard diagrams, and ear training exercises.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    isVerified: true,
    isDisabled: false,
    createdAt: '2026-01-03T00:00:00.000Z',
  },
  {
    id: 'user-student-seed',
    email: 'student@epicademy.com',
    fullName: 'Jordan Lee',
    role: 'student',
    specialty: 'Vocational CSS NC II & Web Development Trainee',
    credentials: 'Level 1 Trainee | Active Learner',
    bio: 'Studying vocational computer systems servicing and full-stack software development.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    isVerified: true,
    isDisabled: false,
    createdAt: '2026-01-04T00:00:00.000Z',
  },
];

const DISABLED_ACCOUNTS_KEY = 'epicademy_disabled_emails';
const LOCAL_ACCOUNTS_KEY = 'epicademy_local_profiles';
const DELETED_ACCOUNTS_KEY = 'epicademy_deleted_accounts';

export function getDeletedAccountKeys(): Set<string> {
  try {
    const raw = localStorage.getItem(DELETED_ACCOUNTS_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw).map((e: string) => e.toLowerCase()));
  } catch {
    return new Set();
  }
}

export function isAccountDeleted(identifier?: string | null): boolean {
  if (!identifier) return false;
  const deletedSet = getDeletedAccountKeys();
  return deletedSet.has(identifier.toLowerCase().trim());
}

export function markAccountAsDeleted(email?: string | null, id?: string | null): void {
  try {
    const deletedSet = getDeletedAccountKeys();
    if (email) deletedSet.add(email.toLowerCase().trim());
    if (id) deletedSet.add(id.toLowerCase().trim());
    localStorage.setItem(DELETED_ACCOUNTS_KEY, JSON.stringify(Array.from(deletedSet)));
  } catch (e) {
    console.error('Error saving deleted accounts:', e);
  }
}

export function unmarkAccountAsDeleted(identifier?: string | null): void {
  if (!identifier) return;
  try {
    const deletedSet = getDeletedAccountKeys();
    deletedSet.delete(identifier.toLowerCase().trim());
    localStorage.setItem(DELETED_ACCOUNTS_KEY, JSON.stringify(Array.from(deletedSet)));
  } catch (e) {
    console.error('Error unmarking deleted account:', e);
  }
}

export function getDisabledEmails(): Set<string> {
  try {
    const raw = localStorage.getItem(DISABLED_ACCOUNTS_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw).map((e: string) => e.toLowerCase()));
  } catch {
    return new Set();
  }
}

export function isAccountDisabled(email: string): boolean {
  if (!email) return false;
  const disabledSet = getDisabledEmails();
  return disabledSet.has(email.toLowerCase().trim());
}

export function setAccountDisabledLocally(email: string, disabled: boolean): void {
  try {
    const disabledSet = getDisabledEmails();
    const cleanEmail = email.toLowerCase().trim();
    if (disabled) {
      disabledSet.add(cleanEmail);
    } else {
      disabledSet.delete(cleanEmail);
    }
    localStorage.setItem(DISABLED_ACCOUNTS_KEY, JSON.stringify(Array.from(disabledSet)));
  } catch (e) {
    console.error('Error saving disabled emails:', e);
  }
}

export function getLocalProfiles(): UserProfileItem[] {
  try {
    const deletedSet = getDeletedAccountKeys();
    const raw = localStorage.getItem(LOCAL_ACCOUNTS_KEY);
    let list: UserProfileItem[] = raw ? JSON.parse(raw) : [];

    // Filter out any previously deleted accounts
    list = list.filter(p => !deletedSet.has(p.email.toLowerCase()) && !deletedSet.has(p.id.toLowerCase()));

    // Ensure seed accounts exist in the list ONLY IF they have not been deleted!
    let modified = false;
    for (const seed of SEED_USER_PROFILES) {
      if (deletedSet.has(seed.email.toLowerCase()) || deletedSet.has(seed.id.toLowerCase())) {
        continue; // DO NOT RE-SEED DELETED ACCOUNTS!
      }
      const idx = list.findIndex(p => p.email.toLowerCase() === seed.email.toLowerCase());
      if (idx === -1) {
        list.push(seed);
        modified = true;
      }
    }

    for (const p of list) {
      if (p.email.toLowerCase().includes('jovenneljed') || p.email.toLowerCase().includes('admin')) {
        p.role = 'admin';
        modified = true;
      }
    }

    if (modified || !raw) {
      localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(list));
    }
    return list;
  } catch {
    return [...SEED_USER_PROFILES];
  }
}

export function getUserRoleByEmail(email?: string | null): UserRole {
  if (!email) return 'student';
  const clean = email.toLowerCase().trim();
  if (clean.includes('admin') || clean.includes('jovenneljed')) return 'admin';
  const profiles = getLocalProfiles();
  const found = profiles.find(p => p.email.toLowerCase() === clean);
  if (found) return found.role;
  return 'student';
}

export function saveLocalProfiles(profiles: UserProfileItem[]): void {
  try {
    localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(profiles));
  } catch (e) {
    console.error('Error saving local profiles:', e);
  }
}

export async function fetchAllUserProfiles(): Promise<{ profiles: UserProfileItem[]; error: any }> {
  try {
    const disabledSet = getDisabledEmails();
    const deletedSet = getDeletedAccountKeys();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase profiles fetch note:', error);
    }

    const localProfiles = getLocalProfiles();
    const profileMap = new Map<string, UserProfileItem>();

    // Add local profiles first (filtering out any deleted accounts)
    localProfiles.forEach(p => {
      const emailLower = p.email.toLowerCase().trim();
      const idLower = p.id.toLowerCase().trim();
      if (deletedSet.has(emailLower) || deletedSet.has(idLower)) {
        return; // SKIP DELETED
      }
      const isDis = Boolean(p.isDisabled || disabledSet.has(emailLower));
      profileMap.set(emailLower, {
        ...p,
        isDisabled: isDis,
        isVerified: !isDis,
      });
    });

    if (data && data.length > 0) {
      data.forEach((row: any) => {
        const email = (row.email || '').toLowerCase().trim();
        const rowId = (row.id || '').toLowerCase().trim();

        // Check tombstone! NEVER restore accounts that an admin deleted
        if (deletedSet.has(email) || deletedSet.has(rowId)) {
          return;
        }

        const isDbDisabled = row.is_verified === false;
        const isDisabled = isDbDisabled || disabledSet.has(email);

        if (isDbDisabled && email && !disabledSet.has(email)) {
          setAccountDisabledLocally(email, true);
        }

        const rawRole = (row.role || '').toLowerCase().trim();
        let role: UserRole = 'student';
        if (rawRole === 'admin' || rawRole === 'educator' || rawRole === 'contributor' || rawRole === 'student') {
          role = rawRole as UserRole;
        }

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

        profileMap.set(email || row.id, item);
      });
    }

    const result = Array.from(profileMap.values()).sort((a, b) => {
      return (new Date(b.createdAt || 0).getTime()) - (new Date(a.createdAt || 0).getTime());
    });

    return { profiles: result, error: null };
  } catch (err) {
    const disabledSet = getDisabledEmails();
    const deletedSet = getDeletedAccountKeys();
    const localProfiles = getLocalProfiles()
      .filter(p => !deletedSet.has(p.email.toLowerCase().trim()) && !deletedSet.has(p.id.toLowerCase().trim()))
      .map(p => ({
        ...p,
        isDisabled: Boolean(p.isDisabled || disabledSet.has(p.email.toLowerCase())),
      }));
    return { profiles: localProfiles, error: err };
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
    // If account was previously deleted, unmark it so it can be re-created fresh
    unmarkAccountAsDeleted(cleanEmail);

    const defaultSpecialty = input.specialty || (
      input.role === 'admin' ? 'Platform Security & Systems Administration' :
      input.role === 'educator' ? 'Academic Disciplines & Instruction' :
      input.role === 'contributor' ? 'Curriculum Authoring & Media' :
      'Vocational Student Learner'
    );

    const { data: authData, error: authError } = await supabase.auth.signUp({
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
      console.warn('Supabase Auth note during createUserAccount:', authError);
    }

    const userId = authData?.user?.id || `user-local-${Date.now()}`;
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

    try {
      await supabase.from('profiles').upsert([
        {
          id: userId,
          email: cleanEmail,
          full_name: newProfile.fullName,
          role: newProfile.role,
          specialty: newProfile.specialty,
          is_verified: true,
        }
      ], { onConflict: 'id' });
    } catch (e) {
      console.warn('Could not insert profile into database table:', e);
    }

    const local = getLocalProfiles().filter(p => p.email.toLowerCase() !== cleanEmail);
    local.unshift(newProfile);
    saveLocalProfiles(local);

    setAccountDisabledLocally(cleanEmail, false);

    return { profile: newProfile, error: null };
  } catch (err: any) {
    return { profile: null, error: err };
  }
}

export async function deleteUserAccount(userId: string, email: string): Promise<{ success: boolean; error: any }> {
  try {
    const cleanEmail = email.toLowerCase().trim();

    // 1. Mark in persistent tombstone store so re-seeding or DB sync NEVER resurrects this user
    markAccountAsDeleted(cleanEmail, userId);

    // 2. Attempt Supabase profile deletion by ID and by Email
    if (userId) {
      const { error: idErr } = await supabase.from('profiles').delete().eq('id', userId);
      if (idErr) {
        console.warn('Supabase profile deletion warning (by id):', idErr);
      }
    }
    if (cleanEmail) {
      const { error: emailErr } = await supabase.from('profiles').delete().eq('email', cleanEmail);
      if (emailErr) {
        console.warn('Supabase profile deletion warning (by email):', emailErr);
      }
    }

    // 3. Remove immediately from local profile cache
    const local = getLocalProfiles().filter(p => p.id !== userId && p.email.toLowerCase() !== cleanEmail);
    saveLocalProfiles(local);

    // 4. Remove from disabled accounts if present
    setAccountDisabledLocally(cleanEmail, false);

    // 5. If the deleted user is currently signed in, sign out immediately
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

    setAccountDisabledLocally(cleanEmail, disable);

    const local = getLocalProfiles().map(p => {
      if (p.id === userId || p.email.toLowerCase() === cleanEmail) {
        return { ...p, isDisabled: disable, isVerified: !disable };
      }
      return p;
    });
    saveLocalProfiles(local);

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
    if (userId) {
      await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
    }
    const local = getLocalProfiles().map(p => {
      if (p.id === userId || p.email.toLowerCase() === email.toLowerCase()) {
        return { ...p, role: newRole };
      }
      return p;
    });
    saveLocalProfiles(local);
    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err };
  }
}

export async function signInUser(email: string, password: string) {
  const cleanEmail = email.toLowerCase().trim();
  if (isAccountDeleted(cleanEmail)) {
    return {
      data: { user: null, session: null },
      error: new Error('This account has been permanently deleted by an administrator.'),
    };
  }

  if (isAccountDisabled(cleanEmail)) {
    return {
      data: { user: null, session: null },
      error: new Error('This account has been disabled by the administrator. Please contact support.'),
    };
  }

  const localProfiles = getLocalProfiles();
  const matchedLocal = localProfiles.find(p => p.email.toLowerCase() === cleanEmail);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (!error && data?.user) {
      if (isAccountDeleted(data.user.email) || isAccountDeleted(data.user.id)) {
        await supabase.auth.signOut();
        return {
          data: { user: null, session: null },
          error: new Error('This account has been permanently deleted by an administrator.'),
        };
      }

      try {
        const { data: prof } = await supabase
          .from('profiles')
          .select('is_verified, role')
          .eq('id', data.user.id)
          .maybeSingle();

        if (prof && prof.is_verified === false) {
          await supabase.auth.signOut();
          setAccountDisabledLocally(cleanEmail, true);
          return {
            data: { user: null, session: null },
            error: new Error('This account has been disabled by the administrator. Access denied.'),
          };
        }
      } catch {
        // Ignore if table unavailable
      }

      return { data, error: null };
    }

    // Seamless fallback for preconfigured demo accounts and local accounts
    if (matchedLocal && (password === 'password123' || !password || error?.message?.includes('Invalid login credentials') || error?.message?.includes('Failed to fetch'))) {
      const mockUser = {
        id: matchedLocal.id,
        email: matchedLocal.email,
        user_metadata: {
          role: matchedLocal.role,
          full_name: matchedLocal.fullName,
          specialty: matchedLocal.specialty,
        },
      };
      return {
        data: { user: mockUser as any, session: { user: mockUser } as any },
        error: null,
      };
    }

    return { data, error };
  } catch (err: any) {
    if (matchedLocal) {
      const mockUser = {
        id: matchedLocal.id,
        email: matchedLocal.email,
        user_metadata: {
          role: matchedLocal.role,
          full_name: matchedLocal.fullName,
          specialty: matchedLocal.specialty,
        },
      };
      return {
        data: { user: mockUser as any, session: { user: mockUser } as any },
        error: null,
      };
    }
    return { data: { user: null, session: null }, error: err };
  }
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (user && (isAccountDeleted(user.email) || isAccountDeleted(user.id))) {
    await supabase.auth.signOut();
    return null;
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
const days = Math.floor(hours / 24);
return `${days}d ago`;
}