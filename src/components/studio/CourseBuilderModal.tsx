import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  BookOpen, 
  Video, 
  Layers, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  GraduationCap
} from 'lucide-react';
import { createTrackInDB, fetchTeachersFromDB } from '../../lib/supabaseClient';
import type { Track, CreateTrackInput, CreateModuleInput } from '../../types';

interface CourseBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCourseCreated: (newTrack: Track) => void;
  userEmail?: string;
}

export const CourseBuilderModal = ({
  isOpen,
  onClose,
  onCourseCreated,
  userEmail,
}: CourseBuilderModalProps) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'stem' | 'business' | 'creative' | 'humanities' | 'wellness' | 'other'>('stem');
  const [level, setLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'>('Beginner');
  const [duration, setDuration] = useState('4 Weeks');
  const [description, setDescription] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>(['Core Principles']);
  const [instructorName, setInstructorName] = useState(userEmail ? userEmail.split('@')[0] : 'Educator');
  const [instructorRole, setInstructorRole] = useState('Course Creator & Mentor');
  const [instructorAvatar, setInstructorAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');
  const [colorTheme, setColorTheme] = useState('from-blue-600 to-indigo-700');
  const [registeredTeachers, setRegisteredTeachers] = useState<any[]>([]);

  useEffect(() => {
    fetchTeachersFromDB().then(({ teachers }) => {
      if (teachers && teachers.length > 0) {
        setRegisteredTeachers(teachers);
        // Default to first teacher if user hasn't set one
        if (!userEmail) {
          setInstructorName(teachers[0].fullName);
          setInstructorRole(teachers[0].credentials || teachers[0].specialty);
          setInstructorAvatar(teachers[0].avatarUrl);
        }
      }
    });
  }, [userEmail]);

  // Modules and Lessons State
  const [modules, setModules] = useState<CreateModuleInput[]>([
    {
      title: 'Module 1: Getting Started & Core Fundamentals',
      duration: '1 Week',
      lessons: [
        {
          title: 'Welcome to the Course & Syllabus Overview',
          duration: '10 mins',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          content: 'Course orientation and prerequisites.',
        },
      ],
    },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Add a skill tag
  const handleAddSkill = () => {
    if (!skillInput.trim()) return;
    if (!skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
    }
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  // Module Management
  const handleAddModule = () => {
    const newModNumber = modules.length + 1;
    setModules([
      ...modules,
      {
        title: `Module ${newModNumber}: Advanced Concepts & Projects`,
        duration: '1 Week',
        lessons: [
          {
            title: 'Lesson 1: Deep Dive Workshop',
            duration: '20 mins',
            videoUrl: '',
            content: '',
          },
        ],
      },
    ]);
  };

  const handleRemoveModule = (modIdx: number) => {
    if (modules.length <= 1) {
      alert('Your course must have at least 1 module.');
      return;
    }
    setModules(modules.filter((_, idx) => idx !== modIdx));
  };

  const handleModuleTitleChange = (modIdx: number, newTitle: string) => {
    const updated = [...modules];
    updated[modIdx].title = newTitle;
    setModules(updated);
  };

  // Lesson Management
  const handleAddLesson = (modIdx: number) => {
    const updated = [...modules];
    const lessonNumber = updated[modIdx].lessons.length + 1;
    updated[modIdx].lessons.push({
      title: `Lesson ${lessonNumber}: Practical Demonstration`,
      duration: '15 mins',
      videoUrl: '',
      content: '',
    });
    setModules(updated);
  };

  const handleRemoveLesson = (modIdx: number, lessonIdx: number) => {
    const updated = [...modules];
    if (updated[modIdx].lessons.length <= 1) {
      alert('Each module must have at least 1 lesson.');
      return;
    }
    updated[modIdx].lessons = updated[modIdx].lessons.filter((_, idx) => idx !== lessonIdx);
    setModules(updated);
  };

  const handleLessonChange = (
    modIdx: number,
    lessonIdx: number,
    field: 'title' | 'duration' | 'videoUrl' | 'content',
    val: string
  ) => {
    const updated = [...modules];
    updated[modIdx].lessons[lessonIdx][field] = val;
    setModules(updated);
  };

  // Submit and save to Supabase
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMessage('Please enter a course title.');
      return;
    }
    if (!description.trim()) {
      setErrorMessage('Please enter a course description.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload: CreateTrackInput = {
      title,
      category,
      level,
      duration,
      description,
      skills,
      colorTheme,
      instructorName,
      instructorRole,
      instructorAvatar,
      modules,
    };

    const { track, error } = await createTrackInDB(payload);

    if (error) {
      setErrorMessage(error.message || 'Error saving course to Supabase.');
      setIsSubmitting(false);
    } else if (track) {
      setIsSubmitting(false);
      onCourseCreated(track);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black flex items-center gap-2">
                Course Creator Studio
                <span className="text-xs bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded-full font-bold uppercase">
                  Real Supabase Database
                </span>
              </h3>
              <p className="text-xs text-blue-100">
                Define your course overview, syllabus modules, and video lessons.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-8 flex-1">
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Section 1: Course Basics */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 pb-1 border-b border-slate-100">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>1. Course Essentials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-8">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Course Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Masterclass: Full-Stack Web Development & Cloud Deployment"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Discipline Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                >
                  <option value="stem">STEM & Technology</option>
                  <option value="business">Business & Leadership</option>
                  <option value="creative">Creative Arts & Design</option>
                  <option value="humanities">Languages & Humanities</option>
                  <option value="wellness">Health & Science</option>
                  <option value="other">General Academy</option>
                </select>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Difficulty Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="All Levels">All Levels</option>
                </select>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Estimated Duration
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 6 Weeks, 20 Hours, Self-Paced"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Cover Theme
                </label>
                <select
                  value={colorTheme}
                  onChange={(e) => setColorTheme(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                >
                  <option value="from-blue-600 to-indigo-700">Royal Blue & Indigo</option>
                  <option value="from-emerald-600 to-teal-700">Emerald & Teal</option>
                  <option value="from-purple-600 to-pink-600">Purple & Magenta</option>
                  <option value="from-amber-600 to-orange-700">Amber & Gold</option>
                  <option value="from-cyan-600 to-blue-800">Cyan & Navy</option>
                </select>
              </div>

              <div className="sm:col-span-12">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Course Description & Objectives *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What will students accomplish in this course? Who is this course designed for?"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                />
              </div>

              {/* Skills Tag Input */}
              <div className="sm:col-span-12">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Target Skills / Topics
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                    placeholder="Type a skill and press Add (e.g. JavaScript, Public Speaking)"
                    className="flex-1 px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Add Skill
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-lg flex items-center gap-1 border border-blue-100"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-blue-400 hover:text-blue-700 cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructor Info */}
              {registeredTeachers.length > 0 && (
                <div className="sm:col-span-12 p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="font-bold text-blue-900 block">Select from Registered Faculty</span>
                    <span className="text-slate-500">Pick an instructor to auto-fill credentials and avatar:</span>
                  </div>
                  <select
                    onChange={(e) => {
                      const selected = registeredTeachers.find(t => t.fullName === e.target.value);
                      if (selected) {
                        setInstructorName(selected.fullName);
                        setInstructorRole(selected.credentials || selected.specialty);
                        setInstructorAvatar(selected.avatarUrl);
                      }
                    }}
                    className="px-3 py-1.5 text-xs font-semibold bg-white border border-blue-200 rounded-lg text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="">Choose an instructor...</option>
                    {registeredTeachers.map((t) => (
                      <option key={t.id} value={t.fullName}>
                        {t.fullName} ({t.specialty})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="sm:col-span-6">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Instructor Name
                </label>
                <input
                  type="text"
                  value={instructorName}
                  onChange={(e) => setInstructorName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="sm:col-span-6">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Instructor Role / Title
                </label>
                <input
                  type="text"
                  value={instructorRole}
                  onChange={(e) => setInstructorRole(e.target.value)}
                  placeholder="e.g. Senior Software Architect"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Modules & Curriculum Builder */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>2. Curriculum Modules & Lessons</span>
              </div>
              <button
                type="button"
                onClick={handleAddModule}
                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Module</span>
              </button>
            </div>

            {/* Modules Container */}
            <div className="space-y-4">
              {modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200 space-y-4"
                >
                  {/* Module Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {mIdx + 1}
                      </span>
                      <input
                        type="text"
                        required
                        value={mod.title}
                        onChange={(e) => handleModuleTitleChange(mIdx, e.target.value)}
                        placeholder="Module Title"
                        className="flex-1 px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveModule(mIdx)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                      title="Delete Module"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Lessons in this module */}
                  <div className="pl-9 space-y-3">
                    {mod.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                            Lesson {lIdx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveLesson(mIdx, lIdx)}
                            className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                            title="Remove Lesson"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                          <div className="sm:col-span-8">
                            <input
                              type="text"
                              required
                              value={lesson.title}
                              onChange={(e) => handleLessonChange(mIdx, lIdx, 'title', e.target.value)}
                              placeholder="Lesson Title (e.g. Introduction to Neural Networks)"
                              className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                          <div className="sm:col-span-4">
                            <div className="relative">
                              <Clock className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={lesson.duration}
                                onChange={(e) => handleLessonChange(mIdx, lIdx, 'duration', e.target.value)}
                                placeholder="15 mins"
                                className="w-full pl-7 pr-2 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-12">
                            <div className="relative">
                              <Video className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="url"
                                value={lesson.videoUrl}
                                onChange={(e) => handleLessonChange(mIdx, lIdx, 'videoUrl', e.target.value)}
                                placeholder="Video URL (YouTube, Vimeo, Loom, or MP4 link)"
                                className="w-full pl-8 pr-2 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => handleAddLesson(mIdx)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Lesson to Module {mIdx + 1}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isSubmitting ? 'Publishing to Supabase...' : 'Save & Publish Course Live'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
