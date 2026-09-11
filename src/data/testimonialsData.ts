import type { Testimonial, FAQItem } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Prof. David Sterling',
    role: 'Founder, NextGen Code Institute',
    institution: 'Teaching 18,000+ STEM Students',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    track: 'STEM & Software Engineering',
    quote: 'We migrated from Teachable + Circle + Zoom + Mailchimp. We were spending $1,250 every month. With Epicademy, we run our entire academy for under $50/month with double the student engagement.',
    stats: {
      value: '84%',
      label: 'Cohort Completion Rate (vs 14% industry avg)',
    },
  },
  {
    id: 't-2',
    name: 'Chloe Vance',
    role: 'Creator, The Design Sprint Guild',
    institution: '4,500+ UI/UX Designers',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    track: 'Creative Arts & UI/UX',
    quote: 'The community circle right next to our design lessons changed everything. Students review each other’s Figma files in real-time, earn peer feedback points, and form actual study buddies.',
    stats: {
      value: '$34,200',
      label: 'Monthly Community Recurring Revenue',
    },
  },
  {
    id: 't-3',
    name: 'Tariq Al-Mansoor',
    role: 'Director, Global Polyglot Academy',
    institution: 'Language & Cultural Immersion',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    track: 'Languages & Humanities',
    quote: 'Epicademy gives our language instructors the exact balance of structured syllabus delivery and spontaneous live speaking salons. The automated certificates on graduation are loved by students.',
    stats: {
      value: '12,400+',
      label: 'Certificates Issued in 2026',
    },
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'general',
    question: 'How is Epicademy different from typical course platforms like Teachable or Udemy?',
    answer: 'Unlike standalone course hosting sites, Epicademy is built like Systeme.io — a unified operating system. You get courses, an interactive community (like Skool/Circle), live streaming classrooms (like Zoom), automated email marketing, and payment checkouts in a single subscription without duct-taping 5 tools together.',
  },
  {
    category: 'educators',
    question: 'Can I migrate my existing students and videos from Kajabi, Teachable, or Thinkific?',
    answer: 'Yes! Epicademy offers 1-click CSV student migration, and our Enterprise/Pro plans include free concierge migration where our team will transfer your video curricula, lesson resources, and member databases for you with zero downtime.',
  },
  {
    category: 'students',
    question: 'Do students need to pay separate platform fees to join Epicademy communities?',
    answer: 'Never. Students can join free public communities and take free courses with a standard free student account. If an educator offers premium courses or private paid cohorts, students pay the educator directly with zero extra platform fees.',
  },
  {
    category: 'pricing',
    question: 'Does the Free plan really last forever, and what are the limitations?',
    answer: 'Yes! Our Epic Free plan is 100% free with no expiration date and no credit card required. You can host 1 complete course track, up to 250 active students, send unlimited emails, and store unlimited video lessons. When you scale past 250 students, upgrading starts at just $19/mo (billed annually).',
  },
  {
    category: 'pricing',
    question: 'Does Epicademy take transaction fees on my course sales?',
    answer: '0% transaction fees! Epicademy connects directly with your Stripe or PayPal merchant account. You keep 100% of your earnings minus standard Stripe/PayPal payment processor rates.',
  },
  {
    category: 'educators',
    question: 'Can I teach multiple different subjects (e.g. coding AND photography) in one academy?',
    answer: 'Absolutely! Epicademy is uniquely engineered for multi-disciplinary educators. You can set up distinct Track Channels (e.g., #coding-lab, #photography-critique) under the same brand while letting students enroll in either specific tracks or an all-access community pass.',
  },
];
