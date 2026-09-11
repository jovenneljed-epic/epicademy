-- =========================================================================
-- EPICADEMY (Epic Academy) Complete Supabase Production Schema
-- Run this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/ukhmrgbkrfawgszltzsr/sql/new
-- =========================================================================

-- 1. Enable UUID extension
create extension if not exists "uuid-ossp";

-- 2. Create User Profiles (Teachers & Students) table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  role text default 'student' check (role in ('educator', 'student', 'admin')),
  specialty text default 'General Disciplines',
  credentials text default 'Verified Instructor',
  avatar_url text default 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  bio text,
  is_verified boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Teaching Tracks (Courses) table
create table if not exists public.tracks (
  id text primary key default ('track-' || substr(md5(random()::text), 1, 10)),
  user_id uuid references auth.users on delete set null,
  title text not null,
  category text not null check (category in ('stem', 'business', 'creative', 'humanities', 'wellness', 'other')),
  category_label text not null,
  slug text unique not null,
  badge text default 'New Course',
  level text default 'Beginner',
  instructor_name text not null,
  instructor_role text default 'Lead Instructor',
  instructor_avatar text default 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  instructor_verified boolean default true,
  instructor_credentials text default 'Epicademy Certified Instructor',
  rating numeric(3,2) default 5.00,
  review_count integer default 1,
  active_learners integer default 1,
  lessons_count integer default 0,
  level_index integer default 1,
  price numeric(8,2) default 49.00,
  original_price numeric(8,2) default 99.00,
  career_milestone text,
  duration text default '4 Weeks',
  description text not null,
  skills text[] default array['Foundations']::text[],
  color_theme text default 'from-blue-600 to-indigo-700',
  popular boolean default false,
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Create Modules table
create table if not exists public.modules (
  id text primary key default ('mod-' || substr(md5(random()::text), 1, 10)),
  track_id text references public.tracks(id) on delete cascade not null,
  title text not null,
  duration text default '1 Week',
  order_index integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Create Lessons table
create table if not exists public.lessons (
  id text primary key default ('les-' || substr(md5(random()::text), 1, 10)),
  module_id text references public.modules(id) on delete cascade not null,
  title text not null,
  duration text default '15 mins',
  video_url text,
  content text,
  order_index integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Create Community Posts table
create table if not exists public.community_posts (
  id text primary key default ('post-' || substr(md5(random()::text), 1, 12)),
  channel text not null default 'general',
  track_category text default 'all',
  title text not null,
  content text not null,
  author_name text not null,
  author_role text default 'Community Member',
  author_avatar text default 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
  is_educator boolean default false,
  author_badge text default 'Member',
  tags text[] default array['General']::text[],
  likes_count integer default 0,
  replies_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. Create Student Enrollments table
create table if not exists public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_email text not null,
  track_id text references public.tracks(id) on delete cascade not null,
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null,
  progress_percent integer default 0,
  completed boolean default false
);

-- 8. Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.tracks enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.community_posts enable row level security;
alter table public.enrollments enable row level security;

-- 9. Setup Policies (Public read + Anyone/Auth insert/update)
-- Profiles Policies
create policy "Profiles are readable by everyone" on public.profiles for select using (true);
create policy "Anyone can insert profiles" on public.profiles for insert with check (true);
create policy "Anyone can update profiles" on public.profiles for update using (true);

-- Tracks Policies
create policy "Tracks are readable by everyone" on public.tracks for select using (true);
create policy "Anyone can insert tracks" on public.tracks for insert with check (true);
create policy "Anyone can update tracks" on public.tracks for update using (true);
create policy "Anyone can delete tracks" on public.tracks for delete using (true);

-- Modules Policies
create policy "Modules are readable by everyone" on public.modules for select using (true);
create policy "Anyone can insert modules" on public.modules for insert with check (true);
create policy "Anyone can delete modules" on public.modules for delete using (true);

-- Lessons Policies
create policy "Lessons are readable by everyone" on public.lessons for select using (true);
create policy "Anyone can insert lessons" on public.lessons for insert with check (true);
create policy "Anyone can delete lessons" on public.lessons for delete using (true);

-- Community Policies
create policy "Community posts are readable by everyone" on public.community_posts for select using (true);
create policy "Anyone can insert community posts" on public.community_posts for insert with check (true);
create policy "Anyone can update community posts" on public.community_posts for update using (true);

-- Enrollment Policies
create policy "Enrollments are viewable by everyone" on public.enrollments for select using (true);
create policy "Anyone can enroll" on public.enrollments for insert with check (true);

-- =========================================================================
-- 10. OFFICIAL SEED DATA: Zero-to-Hero 9-Level Paid Courses
-- =========================================================================

-- Insert All 9 Progressive Paid Tracks
insert into public.tracks (
  id, title, category, category_label, slug, badge, level, level_index, price, original_price, career_milestone,
  instructor_name, instructor_role, instructor_avatar, instructor_verified, instructor_credentials,
  rating, review_count, active_learners, lessons_count, duration,
  description, skills, color_theme, popular, published
) values 
  (
    'track-level-1-html-foundations',
    'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture',
    'stem', 'STEM & Web Dev', 'level-1-modern-html5-fundamentals', 'Step 1: Foundations', 'Beginner', 1, 29.00, 59.00, 'Web Foundations Certified',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.98, 52, 340, 8, '3 Weeks',
    'Master the foundational markup language of the Internet. Learn modern HTML5 boilerplate, semantic tags, forms, and Google Sheets classroom grading rubrics.',
    array['HTML5', 'DOM Tree', 'Semantic Phrasing', 'Form Validation', 'SEO Meta Tags']::text[],
    'from-orange-500 via-amber-500 to-yellow-500', true, true
  ),
  (
    'track-level-2-css-mastery',
    'Level 2: Modern CSS3 Mastery, Flexbox, Grid & Responsive UI',
    'stem', 'STEM & Web Dev', 'level-2-modern-css3-mastery', 'Step 2: Styling', 'Beginner', 2, 39.00, 79.00, 'Responsive UI & Layout Specialist',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.96, 44, 290, 8, '4 Weeks',
    'Transform raw HTML into pixel-perfect responsive interfaces. Deep dive into Flexbox alignment, 2D CSS Grid dashboards, custom variables, and animations.',
    array['CSS3', 'Flexbox', 'CSS Grid', 'Media Queries', 'Design Tokens', 'Animations']::text[],
    'from-blue-500 via-cyan-500 to-teal-500', true, true
  ),
  (
    'track-level-3-js-foundations',
    'Level 3: JavaScript Core Foundations, Algorithms & DOM Manipulation',
    'stem', 'STEM & Web Dev', 'level-3-javascript-core-foundations', 'Step 3: Logic', 'Beginner', 3, 49.00, 99.00, 'Junior Interactive Web Developer',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.97, 68, 412, 8, '4 Weeks',
    'Bring websites to life with programming logic. Master ES6+ syntax, arrays, objects, functions, event listeners, and interactive DOM manipulation.',
    array['JavaScript ES6+', 'DOM Events', 'Array Methods', 'Lexical Scope', 'Algorithms']::text[],
    'from-yellow-500 via-amber-500 to-orange-500', true, true
  ),
  (
    'track-level-4-async-js',
    'Level 4: Advanced Modern JavaScript, Async Patterns & RESTful APIs',
    'stem', 'STEM & Web Dev', 'level-4-advanced-javascript-async-apis', 'Step 4: Asynchronous', 'Intermediate', 4, 59.00, 119.00, 'Modern JavaScript Engineer',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.95, 39, 260, 8, '4 Weeks',
    'Unlock asynchronous programming mastery. Understand the browser event loop, microtask queue, Promises, async/await, and remote API fetching.',
    array['Event Loop', 'Promises', 'async/await', 'Fetch API', 'Error Handling', 'JSON']::text[],
    'from-amber-600 via-red-500 to-rose-600', false, true
  ),
  (
    'track-level-5-react-ts',
    'Level 5: Frontend Engineering with React 19 & TypeScript',
    'stem', 'STEM & Web Dev', 'level-5-react19-typescript-engineering', 'Step 5: Frameworks', 'Intermediate', 5, 79.00, 149.00, 'React 19 & TypeScript Frontend Engineer',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.99, 82, 520, 10, '5 Weeks',
    'Build enterprise single-page applications. Master React 19 functional components, custom hooks, state trees, and static typing with TypeScript.',
    array['React 19', 'TypeScript', 'Custom Hooks', 'Component Lifecycle', 'State Management']::text[],
    'from-cyan-600 via-blue-600 to-indigo-600', true, true
  ),
  (
    'track-level-6-node-backend',
    'Level 6: Full-Stack Backend Engineering with Node.js & Express',
    'stem', 'STEM & Web Dev', 'level-6-nodejs-express-backend', 'Step 6: Backend', 'Intermediate', 6, 89.00, 169.00, 'Full-Stack API & Backend Architect',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.94, 31, 198, 10, '5 Weeks',
    'Engineer high-throughput server backends. Design RESTful APIs with Node.js, Express routers, middleware pipelines, CORS, and request validations.',
    array['Node.js', 'Express', 'REST Architecture', 'Middleware', 'Error Handling', 'CORS']::text[],
    'from-emerald-600 via-green-600 to-teal-700', false, true
  ),
  (
    'track-level-7-postgres-supabase',
    'Level 7: Database Architecture, PostgreSQL & Supabase Cloud Storage',
    'stem', 'STEM & Web Dev', 'level-7-postgresql-supabase-databases', 'Step 7: Databases', 'Advanced', 7, 99.00, 189.00, 'Cloud Database & PostgreSQL Architect',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.97, 46, 275, 10, '5 Weeks',
    'Design production relational databases. Master 3NF normalization, foreign key cascades, complex multi-table SQL joins, and Supabase Row Level Security.',
    array['PostgreSQL', 'SQL Queries', 'Supabase RLS', '3NF Normalization', 'Indexes']::text[],
    'from-indigo-600 via-violet-600 to-purple-600', true, true
  ),
  (
    'track-level-8-security-devops',
    'Level 8: Web Security, JWT/OAuth Authentication & DevOps CI/CD',
    'stem', 'STEM & Web Dev', 'level-8-security-auth-devops-cicd', 'Step 8: DevOps & Security', 'Advanced', 8, 119.00, 229.00, 'Production Security & DevOps Engineer',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    4.96, 35, 180, 10, '5 Weeks',
    'Protect your applications against cyber threats. Implement OWASP security standards, OAuth 2.0, secure JWT cookies, Docker containers, and GitHub Actions.',
    array['OWASP Security', 'JWT & OAuth', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'Cloud Deploy']::text[],
    'from-purple-600 via-pink-600 to-rose-600', false, true
  ),
  (
    'track-level-9-fullstack-ai-hero',
    'Level 9: Full-Stack AI SaaS Capstone: Autonomous AI Agents & Cloud Scale',
    'stem', 'STEM & AI Hero', 'level-9-fullstack-ai-saas-hero', '🏆 Step 9: HERO', 'Advanced', 9, 149.00, 299.00, '🏆 Full-Stack AI Software Hero',
    'Joven Nel Jed', 'Founder & Lead Engineering Faculty', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', true, 'Epicademy Lead Architect',
    5.00, 110, 640, 12, '6 Weeks',
    'The pinnacle capstone. Architect and deploy a complete production AI SaaS platform with autonomous LLM agents, vector embeddings, Stripe subscriptions, and high-scale cloud distribution.',
    array['AI Agents', 'LLM Function Calling', 'Stripe Billing', 'Cloud Architecture', 'Vector Search', 'Full-Stack Hero']::text[],
    'from-emerald-500 via-teal-500 to-blue-600', true, true
  )
on conflict (id) do update set
  title = excluded.title,
  price = excluded.price,
  original_price = excluded.original_price,
  level_index = excluded.level_index,
  career_milestone = excluded.career_milestone,
  description = excluded.description;

-- =========================================================================
-- 6. MULTI-TENANT COMMUNITY DEVELOPERS & CREATOR STOREFRONTS
-- =========================================================================
create table if not exists public.community_tenants (
  id text primary key,
  name text not null,
  handle text not null,
  role_title text not null,
  specialty text not null,
  category text not null check (category in ('mobile', 'ai', 'cloud', 'web3', 'design', 'cybersecurity', 'fullstack')),
  location text not null,
  rating numeric(3,2) default 5.00,
  review_count integer default 0,
  students_count integer default 0,
  courses_count integer default 0,
  bio text not null,
  credentials text not null,
  company_or_background text not null,
  github_url text,
  linkedin_url text,
  website_url text,
  payout_badge text default 'GCash & GoTyme Verified Merchant',
  payout_method text default 'gotyme',
  payout_details text,
  is_verified boolean default true,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.community_tenants enable row level security;
create policy "Anyone can read verified tenants" on public.community_tenants
  for select using (true);

-- Seed 6 Verified Community Developer Tenants
insert into public.community_tenants (
  id, name, handle, role_title, specialty, category, location, rating, review_count, students_count, courses_count, bio, credentials, company_or_background, payout_badge
) values 
  (
    'dev-maria-santos', 'Maria Santos', '@mariasantos_dev', 'Senior Mobile Architect & Google Developer Expert', 'Cross-Platform Mobile Engineering & Flutter 3', 'mobile',
    'Bonifacio Global City (BGC), Taguig, Philippines', 4.96, 428, 1840, 2,
    'Mobile systems architect with 9+ years building high-throughput consumer apps across Southeast Asia.', 'Google Developer Expert (Flutter & Dart) • Ex-Grab PH Mobile Lead', 'Ex-Grab PH • Google Developer Expert', 'GCash & GoTyme Verified Merchant'
  ),
  (
    'dev-marco-reyes', 'Engr. Marco Reyes, MSc', '@marcoreyes_ai', 'Staff AI & Deep Learning Systems Engineer', 'Generative AI, PyTorch & Large Language Models', 'ai',
    'Cebu IT Park, Cebu City, Philippines', 4.98, 612, 2390, 2,
    'Machine Learning researcher and systems engineer specialized in fine-tuning and serving high-performance transformer models.', 'MSc AI • Ex-A*STAR Research Fellow • Nvidia DLI Certified Instructor', 'Ex-A*STAR Singapore • FinTech AI Architect', 'GCash & GoTyme Verified Merchant'
  ),
  (
    'dev-sarah-chen', 'Sarah Chen', '@sarahchen_cloud', 'Principal DevOps & Cloud Platform Architect', 'Kubernetes, Terraform & Cloud Platform Infrastructure', 'cloud',
    'Ortigas Center, Pasig City, Philippines', 4.94, 380, 1920, 2,
    'Infrastructure architect scaling multi-cluster Kubernetes handling over 40M daily active requests.', 'AWS Community Hero • CKA Certified • HashiCorp Certified', 'AWS Community Hero • Ex-Sea Group SRE Lead', 'GCash & GoTyme Verified Merchant'
  ),
  (
    'dev-rafael-cruz', 'Rafael "Raffy" Cruz', '@raffycruz_web3', 'Lead Web3 & Smart Contract Security Engineer', 'Solidity, Rust Solana & DeFi Protocol Development', 'web3',
    'Legaspi Village, Makati City, Philippines', 4.92, 295, 1310, 2,
    'Smart contract security auditor with over $180M in TVL audited. Former OpenZeppelin Fellow.', 'OpenZeppelin Security Fellow • Solana Manila Champion', 'OpenZeppelin Fellow • Web3 Auditor', 'GCash & GoTyme Verified Merchant'
  ),
  (
    'dev-elena-gomez', 'Elena Gomez', '@elenagomez_ux', 'Principal Product & Design Systems Lead', 'Enterprise Figma Design Systems & Token-Driven UI/UX', 'design',
    'Quezon City, Metro Manila, Philippines', 4.97, 540, 2470, 2,
    'Design leader who architected design systems powering applications used by over 50M users in the Philippines.', 'Lead UI/UX Architect Maya PH • Figma Community Advocate', 'Ex-Maya PH Lead • Figma Community Advocate', 'GCash & GoTyme Verified Merchant'
  ),
  (
    'dev-kenji-tanaka', 'Kenji Tanaka', '@kenji_sec', 'Senior Offensive Security Specialist & OSCP', 'Ethical Hacking, Penetration Testing & AppSec', 'cybersecurity',
    'Clark Freeport Zone, Pampanga / Tokyo', 4.95, 410, 1730, 2,
    'Offensive security researcher who has reported zero-day vulnerabilities to top tech enterprises.', 'OSCP Certified • HackerOne Top 50 Security Researcher', 'Red Team Consultant • HackerOne Top 50', 'GCash & GoTyme Verified Merchant'
  )
on conflict (id) do nothing;



