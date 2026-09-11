import React from 'react';
import { GraduationCap, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAuth: (mode: 'signup' | 'signin') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                EPICADEMY
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The world's easiest all-in-one educational teaching and community operating system. Build high-retention multi-disciplinary courses, vibrant student discussion circles, and automated funnels with zero coding.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              {/* Twitter / X */}
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors" aria-label="X Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.21c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* GitHub */}
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 1: Teaching Tracks */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase text-xs tracking-wider">Teaching Tracks</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#tracks" className="hover:text-white transition-colors">STEM & AI Engineering</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Business & SaaS Launch</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Creative Spatial Design</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Languages & Rhetoric</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Cognitive Neuroscience</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Quantum Computing</a></li>
            </ul>
          </div>

          {/* Column 2: Platform Tools */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase text-xs tracking-wider">All-in-One Tools</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">Course Studio & LMS</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community Circles</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Live Browser Stages</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Automated Funnels</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Verifiable Credentials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Affiliate Management</a></li>
            </ul>
          </div>

          {/* Column 3: Resources & Support */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase text-xs tracking-wider">Resources</p>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onOpenAuth('signup')} className="hover:text-white transition-colors text-left cursor-pointer">Educator Playbook</button></li>
              <li><button onClick={() => onOpenAuth('signup')} className="hover:text-white transition-colors text-left cursor-pointer">Free Migration Concierge</button></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Case Studies & Metrics</a></li>
              <li><button onClick={() => onOpenAuth('signin')} className="hover:text-white transition-colors text-left cursor-pointer">System Status (99.98%)</button></li>
              <li><a href="#" className="hover:text-white transition-colors">API & Webhooks</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© 2026 EPICADEMY Inc. (Epic Academy Platform). Inspired by Systeme.io.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-slate-500" /> English (US)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SSL 256-Bit Encrypted
            </span>
            <span>•</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
