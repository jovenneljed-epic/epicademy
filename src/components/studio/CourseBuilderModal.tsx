import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  BookOpen, 
  Video, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  GraduationCap,
  FileText,
  HelpCircle,
  Table,
  Check,
  Edit3,
  Eye,
  ArrowRight,
  Award,
  Users,
  Download,
  Search,
  FolderPlus
} from 'lucide-react';
import { 
  createTrackInDB, 
  updateTrackInDB, 
  deleteTrackFromDB, 
  getLocalTeacherTracks, 
  fetchTeachersFromDB 
} from '../../lib/supabaseClient';
import { INITIAL_COHORTS, INITIAL_STUDENT_ROSTER, type StudentGradeRecord } from '../../data/gradebookData';
import type { 
  Track, 
  CreateTrackInput, 
  CreateModuleInput, 
  CreateLessonInput, 
  ExamQuestion
} from '../../types';

interface CourseBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCourseCreated: (newTrack: Track) => void;
  onPreviewCourse?: (track: Track) => void;
  userEmail?: string;
}

export const CourseBuilderModal = ({
  isOpen,
  onClose,
  onCourseCreated,
  onPreviewCourse,
  userEmail,
}: CourseBuilderModalProps) => {
  // Main Studio Navigation Tabs
  const [studioTab, setStudioTab] = useState<'essentials' | 'curriculum' | 'lesson-suite' | 'my-courses' | 'gradebook'>('essentials');

  // Faculty Gradebook States
  const [selectedCohortId, setSelectedCohortId] = useState<string>('all');
  const [studentSearch, setStudentSearch] = useState<string>('');
  const [studentRoster, setStudentRoster] = useState<StudentGradeRecord[]>(INITIAL_STUDENT_ROSTER);

  // Course Essentials
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [title, setTitle] = useState('Computer Systems & Network Administration');
  const [category, setCategory] = useState<'stem' | 'business' | 'creative' | 'humanities' | 'wellness' | 'other'>('stem');
  const [level, setLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'>('All Levels');
  const [duration, setDuration] = useState('4 Weeks (120 Hours)');
  const [description, setDescription] = useState('Comprehensive vocational training program designed for technical mastery, practical demonstrations, exams, and worksheets.');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>(['Hardware Diagnostics', 'Network Cabling', 'System Administration']);
  const [price, setPrice] = useState<number>(0);
  const [isPaid, setIsPaid] = useState(false);
  const [instructorName, setInstructorName] = useState(userEmail ? userEmail.split('@')[0] : 'Instructor');
  const [instructorRole, setInstructorRole] = useState('Certified TVET Trainer & ICT Specialist');
  const [instructorAvatar, setInstructorAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');
  const [colorTheme, setColorTheme] = useState('from-blue-600 to-indigo-700');

  // Subjects / Modules and Lessons State
  const [modules, setModules] = useState<CreateModuleInput[]>([
    {
      id: 'mod-init-1',
      title: 'Subject 1: Computer Hardware & Assembly Fundamentals',
      duration: '1 Week (30 Hours)',
      overview: 'Master safety procedures, component identification, and step-by-step PC assembly.',
      lessons: [
        {
          id: 'les-init-1-1',
          title: 'Lesson 1.1: Occupational Safety & Hardware Disassembly',
          duration: '45 mins',
          videoUrl: 'https://www.youtube.com/watch?v=IHXzkQO_n-I',
          objective: 'Understand and apply OHS standards, 5S of Good Housekeeping, and safe computer disassembly.',
          content: 'Proper grounding techniques, anti-static wrist straps, mat usage, and systematic disassembly protocols.',
          codeSnippet: '// Safety Verification Checklist:\n1. Disconnect AC Cord\n2. Hold power button 10s\n3. Wear ESD wrist strap',
          activity: {
            title: 'Hands-on Activity 1.1: Safe Hardware Setup & ESD Audit',
            instructions: [
              'Set up the ESD anti-static mat on a clean workstation.',
              'Attach the alligator clip to an unpainted metal chassis.',
              'Disassemble RAM and storage modules with zero physical strain.',
              'Record all components in the hardware inventory log.'
            ],
            starterCode: '[ ] Anti-static wrist strap worn\n[ ] Tools organized per 5S\n[ ] System discharged',
            expectedOutcome: 'A safe, clean workspace compliant with occupational safety standards.',
            rubric: [
              { criteria: 'OHS Safety & PPE Compliance', points: 40 },
              { criteria: 'Proper Tool Handling', points: 30 },
              { criteria: 'Workplace Cleanliness & 5S', points: 30 }
            ]
          },
          exam: {
            title: 'Exam 1.1: Safety & Assembly Knowledge Test',
            passingScore: 80,
            questions: [
              {
                id: 'q1',
                question: 'What is the primary function of an Anti-Static Wrist Strap?',
                options: [
                  'To prevent electrostatic discharge (ESD) from damaging sensitive ICs',
                  'To protect the user from 220V AC wall current',
                  'To improve computer processor speed',
                  'To test cable continuity'
                ],
                correctIndex: 0,
                explanation: 'An anti-static wrist strap safely bleeds static charges from your body to ground through a 1-megohm resistor.'
              },
              {
                id: 'q2',
                question: 'Which tool should NEVER be used near sensitive semiconductor chips?',
                options: [
                  'Strong permanent magnets or magnetic screw trays',
                  'Phillips #2 demagnetized screwdriver',
                  'Lint-free microfiber wipe',
                  'Anti-static soft brush'
                ],
                correctIndex: 0,
                explanation: 'Strong magnetic fields can corrupt magnetic storage and induce harmful currents in sensitive circuits.'
              }
            ]
          },
          worksheet: {
            title: 'Worksheet 1.1: Workstation Safety & Hazard Audit Form',
            sheetName: 'Safety_Audit',
            description: 'Evaluate your computer laboratory workstation using standard safety audit criteria.',
            templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
            deliverables: [
              'List of 5 identified workstation hazards and corrective actions.',
              '5S cleanliness audit checklist.',
              'Signed safety certification sheet.'
            ],
            rubric: [
              { criteria: 'Hazard Identification Accuracy', points: 50 },
              { criteria: 'Remediation Completeness', points: 50 }
            ]
          }
        }
      ]
    }
  ]);

  // Selected module and lesson for detailed editing
  const [selectedModuleIdx, setSelectedModuleIdx] = useState(0);
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);

  // Lesson sub-tabs: 'video' | 'activity' | 'exam' | 'worksheet'
  const [lessonSubTab, setLessonSubTab] = useState<'video' | 'activity' | 'exam' | 'worksheet'>('video');

  // Teacher courses list state
  const [teacherCourses, setTeacherCourses] = useState<Track[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchTeachersFromDB().then(({ teachers }) => {
      if (teachers && teachers.length > 0 && !userEmail) {
        setInstructorName(teachers[0].fullName);
        setInstructorRole(teachers[0].credentials || teachers[0].specialty);
        setInstructorAvatar(teachers[0].avatarUrl);
      }
    });
    loadTeacherCourses();
  }, [userEmail, isOpen]);

  const loadTeacherCourses = () => {
    const list = getLocalTeacherTracks();
    setTeacherCourses(list);
  };

  if (!isOpen) return null;

  // Helpers to get current module and lesson
  const currentModule = modules[selectedModuleIdx] || modules[0];
  const currentLesson: CreateLessonInput = currentModule?.lessons[selectedLessonIdx] || {
    title: 'New Lesson',
    duration: '20 mins',
    videoUrl: '',
    content: ''
  };

  // Skill Tags
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

  // Subject / Module Management
  const handleAddModule = () => {
    const newIdx = modules.length + 1;
    const newMod: CreateModuleInput = {
      id: `mod-${Date.now()}`,
      title: `Subject ${newIdx}: Advanced Systems & Networking`,
      duration: '1 Week (30 Hours)',
      overview: 'Detailed study and practical exercises for this subject module.',
      lessons: [
        {
          id: `les-${Date.now()}-1`,
          title: `Lesson ${newIdx}.1: Core Principles and Methods`,
          duration: '30 mins',
          videoUrl: '',
          content: 'Theory explanation and lecture notes.',
          objective: 'Define the main core objectives of this subject unit.',
        }
      ]
    };
    setModules([...modules, newMod]);
    setSelectedModuleIdx(modules.length);
    setSelectedLessonIdx(0);
  };

  const handleRemoveModule = (modIdx: number) => {
    if (modules.length <= 1) {
      alert('Your course must have at least 1 subject module.');
      return;
    }
    const updated = modules.filter((_, idx) => idx !== modIdx);
    setModules(updated);
    setSelectedModuleIdx(Math.max(0, modIdx - 1));
    setSelectedLessonIdx(0);
  };

  // Lesson Management
  const handleAddLesson = (modIdx: number) => {
    const updated = [...modules];
    const lessonNum = (updated[modIdx].lessons || []).length + 1;
    const newLesson: CreateLessonInput = {
      id: `les-${Date.now()}-${lessonNum}`,
      title: `Lesson ${modIdx + 1}.${lessonNum}: Practical Implementation`,
      duration: '30 mins',
      videoUrl: '',
      content: 'Lecture notes, procedures, and concepts.',
      objective: 'Demonstrate competency in practical application.',
    };
    updated[modIdx].lessons.push(newLesson);
    setModules(updated);
    setSelectedLessonIdx(updated[modIdx].lessons.length - 1);
  };

  const handleRemoveLesson = (modIdx: number, lesIdx: number) => {
    const updated = [...modules];
    if (updated[modIdx].lessons.length <= 1) {
      alert('Each subject module must have at least 1 lesson.');
      return;
    }
    updated[modIdx].lessons = updated[modIdx].lessons.filter((_, idx) => idx !== lesIdx);
    setModules(updated);
    setSelectedLessonIdx(Math.max(0, lesIdx - 1));
  };

  // Update current lesson fields
  const updateCurrentLesson = (updater: (prev: CreateLessonInput) => CreateLessonInput) => {
    const updated = [...modules];
    if (!updated[selectedModuleIdx] || !updated[selectedModuleIdx].lessons[selectedLessonIdx]) return;
    updated[selectedModuleIdx].lessons[selectedLessonIdx] = updater(
      updated[selectedModuleIdx].lessons[selectedLessonIdx]
    );
    setModules(updated);
  };

  // Activity Handlers
  const handleToggleActivity = () => {
    updateCurrentLesson(les => {
      if (les.activity) {
        const copy = { ...les };
        delete copy.activity;
        return copy;
      }
      return {
        ...les,
        activity: {
          title: `Hands-on Activity for ${les.title}`,
          instructions: ['Prepare the test environment.', 'Execute procedure step-by-step.', 'Verify and document the outcome.'],
          starterCode: '// Task Checklist:\n[ ] Step 1\n[ ] Step 2',
          expectedOutcome: 'Successful demonstration of the practical requirement.',
          rubric: [
            { criteria: 'Technical Execution', points: 50 },
            { criteria: 'Documentation & Accuracy', points: 50 }
          ]
        }
      };
    });
  };

  // Exam / Quiz Handlers
  const handleToggleExam = () => {
    updateCurrentLesson(les => {
      if (les.exam) {
        const copy = { ...les };
        delete copy.exam;
        return copy;
      }
      return {
        ...les,
        exam: {
          title: `Exam / Quiz: ${les.title}`,
          passingScore: 80,
          questions: [
            {
              id: `q-${Date.now()}-1`,
              question: 'Sample Question 1: What is the primary objective of this topic?',
              options: ['Option A (Correct answer)', 'Option B', 'Option C', 'Option D'],
              correctIndex: 0,
              explanation: 'Detailed explanation for why Option A is the correct answer.'
            }
          ]
        }
      };
    });
  };

  const handleAddQuestion = () => {
    updateCurrentLesson(les => {
      if (!les.exam) return les;
      const qNum = les.exam.questions.length + 1;
      const newQ: ExamQuestion = {
        id: `q-${Date.now()}-${qNum}`,
        question: `Question ${qNum}: Enter your question prompt here...`,
        options: ['First choice (Option A)', 'Second choice (Option B)', 'Third choice (Option C)', 'Fourth choice (Option D)'],
        correctIndex: 0,
        explanation: 'Explanation for why the selected answer is correct.'
      };
      return {
        ...les,
        exam: {
          ...les.exam,
          questions: [...les.exam.questions, newQ]
        }
      };
    });
  };

  const handleRemoveQuestion = (qIdx: number) => {
    updateCurrentLesson(les => {
      if (!les.exam) return les;
      return {
        ...les,
        exam: {
          ...les.exam,
          questions: les.exam.questions.filter((_, idx) => idx !== qIdx)
        }
      };
    });
  };

  // Worksheet Handlers
  const handleToggleWorksheet = () => {
    updateCurrentLesson(les => {
      if (les.worksheet) {
        const copy = { ...les };
        delete copy.worksheet;
        return copy;
      }
      return {
        ...les,
        worksheet: {
          title: `Worksheet for ${les.title}`,
          sheetName: 'Worksheet_Assignment',
          description: 'Complete this worksheet assignment and submit your deliverables.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Deliverable item 1', 'Deliverable item 2', 'Signed evaluation checklist'],
          rubric: [
            { criteria: 'Completeness of Deliverables', points: 60 },
            { criteria: 'Formatting and Presentation', points: 40 }
          ]
        }
      };
    });
  };

  // Load an existing course to edit
  const handleEditExistingCourse = (track: Track) => {
    setEditingCourseId(track.id);
    setTitle(track.title);
    setCategory(track.category);
    setLevel(track.level);
    setDuration(track.duration);
    setDescription(track.description);
    setSkills(track.skills || []);
    setPrice(track.price || 0);
    setIsPaid(Boolean(track.isPaid));
    setInstructorName(track.instructor.name);
    setInstructorRole(track.instructor.role);
    setInstructorAvatar(track.instructor.avatar);
    setColorTheme(track.colorTheme);

    if (track.modules && track.modules.length > 0) {
      const convertedMods: CreateModuleInput[] = track.modules.map(m => ({
        id: m.id,
        title: m.title,
        duration: m.duration || '1 Week',
        overview: m.overview || '',
        lessons: (m.lessonItems || []).map(l => ({
          id: l.id,
          title: l.title,
          duration: l.duration,
          videoUrl: l.video_url || '',
          content: l.content || '',
          objective: l.objective || '',
          codeSnippet: l.code_snippet || '',
          activity: l.activity,
          exam: l.exam,
          worksheet: l.worksheet,
          classroomLink: l.classroom_link || ''
        }))
      }));
      setModules(convertedMods);
    }
    setStudioTab('lesson-suite');
  };

  // Delete course
  const handleDeleteCourse = async (trackId: string) => {
    if (!confirm('Are you sure you want to delete this course? This action cannot be undone.')) return;
    await deleteTrackFromDB(trackId);
    loadTeacherCourses();
  };

  // Submit and Save Course
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter a course title.' });
      return;
    }
    if (!description.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter a course description.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const payload: CreateTrackInput = {
      id: editingCourseId || `track-teacher-${Date.now()}`,
      title,
      category,
      level,
      duration,
      description,
      skills,
      colorTheme,
      price: isPaid ? price : 0,
      originalPrice: isPaid ? price * 2 : 0,
      isPaid,
      instructorName,
      instructorRole,
      instructorAvatar,
      modules,
    };

    let result;
    if (editingCourseId) {
      result = await updateTrackInDB(editingCourseId, payload);
    } else {
      result = await createTrackInDB(payload);
    }

    setIsSubmitting(false);

    if (result.track) {
      setStatusMessage({ type: 'success', text: `Course "${result.track.title}" successfully saved and published!` });
      loadTeacherCourses();
      onCourseCreated(result.track);
      setTimeout(() => {
        setEditingCourseId(null);
      }, 1500);
    } else {
      setStatusMessage({ type: 'error', text: result.error?.message || 'Error saving course.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-6xl h-[94vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Studio Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black">
                  Teacher Creator Studio
                </h3>
                <span className="text-[10px] bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                  systeme.io Suite
                </span>
                {editingCourseId && (
                  <span className="text-[10px] bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                    Editing Mode
                  </span>
                )}
              </div>
              <p className="text-xs text-blue-100">
                Author courses, subjects, video lessons, hands-on activities, exams &amp; worksheets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              title="Close Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Navigation Tabs Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-2.5 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStudioTab('essentials')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                studioTab === 'essentials'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Course Essentials</span>
            </button>

            <button
              onClick={() => setStudioTab('curriculum')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                studioTab === 'curriculum'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. Subjects &amp; Modules ({modules.length})</span>
            </button>

            <button
              onClick={() => setStudioTab('lesson-suite')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                studioTab === 'lesson-suite'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-500" />
              <span>3. Lesson, Activity &amp; Exam Suite</span>
            </button>

            <button
              onClick={() => {
                setStudioTab('my-courses');
                loadTeacherCourses();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                studioTab === 'my-courses'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span>4. My Courses ({teacherCourses.length})</span>
            </button>

            <button
              onClick={() => setStudioTab('gradebook')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                studioTab === 'gradebook'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              <span>5. Faculty Gradebook &amp; Cohorts</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {editingCourseId && (
              <button
                onClick={() => {
                  setEditingCourseId(null);
                  setTitle('New Course Title');
                  setStudioTab('essentials');
                }}
                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                + Reset to New Course
              </button>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Check className="w-4 h-4" />
              <span>{isSubmitting ? 'Saving...' : editingCourseId ? 'Save & Update Course' : 'Publish Course'}</span>
            </button>
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className={`px-6 py-2.5 text-xs font-bold flex items-center gap-2 shrink-0 ${
            statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200' : 'bg-red-50 text-red-800 border-b border-red-200'
          }`}>
            {statusMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Main Body per Tab */}
        <div className="flex-1 overflow-hidden flex flex-col">
          
          {/* TAB 1: COURSE ESSENTIALS */}
          {studioTab === 'essentials' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto w-full">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-blue-900">Step 1: Course Fundamentals</h4>
                  <p className="text-xs text-blue-700">Define course title, subject discipline, target learners, and pricing model.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStudioTab('curriculum')}
                  className="px-3.5 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next: Build Subjects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Course &amp; Subject Bundle Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Computer Systems Servicing &amp; Network Infrastructure"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Discipline / Category</label>
                  <select
                    value={category}
                    onChange={(e: any) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="stem">STEM &amp; Computer Technology</option>
                    <option value="business">Business &amp; Technical Sales</option>
                    <option value="creative">Creative &amp; Industrial Arts</option>
                    <option value="humanities">Education &amp; Humanities</option>
                    <option value="wellness">Health &amp; Safety</option>
                    <option value="other">General Vocational</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Target Level</label>
                  <select
                    value={level}
                    onChange={(e: any) => setLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Beginner">Beginner Level</option>
                    <option value="Intermediate">Intermediate Level</option>
                    <option value="Advanced">Advanced Level</option>
                    <option value="All Levels">All Levels (Zero to Hero)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Nominal Course Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 4 Weeks (120 Hours)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Pricing / Enrollment Model</label>
                  <div className="flex items-center gap-3 pt-1">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        checked={!isPaid}
                        onChange={() => { setIsPaid(false); setPrice(0); }}
                      />
                      <span>100% Free / Institutional</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        checked={isPaid}
                        onChange={() => { setIsPaid(true); if (price === 0) setPrice(499); }}
                      />
                      <span>Paid Course (PHP ₱)</span>
                    </label>
                  </div>
                  {isPaid && (
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      placeholder="Price in PHP (e.g. 499)"
                      className="mt-2 w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                    />
                  )}
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Course Description &amp; Scope *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    placeholder="Explain what students will learn, vocational competency standards, and certification outcomes..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Skills tags */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Core Competencies / Skills Learned</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); }}}
                      placeholder="Type a skill and press Enter (e.g. BIOS Configuration)"
                      className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Add Skill
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skills.map((s, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold">
                        {s}
                        <button type="button" onClick={() => handleRemoveSkill(s)} className="text-blue-400 hover:text-blue-600">×</button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Instructor Name</label>
                  <input
                    type="text"
                    value={instructorName}
                    onChange={(e) => setInstructorName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Instructor Title / Credentials</label>
                  <input
                    type="text"
                    value={instructorRole}
                    onChange={(e) => setInstructorRole(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SUBJECTS & MODULES */}
          {studioTab === 'curriculum' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto w-full">
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <div>
                  <h4 className="text-sm font-black text-slate-900">Step 2: Subject &amp; Module Structure</h4>
                  <p className="text-xs text-slate-500">Organize your course into clear sequential subjects (like systeme.io modules).</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddModule}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <FolderPlus className="w-4 h-4" />
                  <span>+ Add New Subject</span>
                </button>
              </div>

              <div className="space-y-4">
                {modules.map((mod, mIdx) => (
                  <div key={mIdx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center shrink-0">
                          {mIdx + 1}
                        </span>
                        <input
                          type="text"
                          value={mod.title}
                          onChange={(e) => {
                            const copy = [...modules];
                            copy[mIdx].title = e.target.value;
                            setModules(copy);
                          }}
                          className="font-bold text-sm text-slate-900 w-full px-3 py-1.5 border border-transparent hover:border-slate-200 focus:border-blue-500 rounded-lg"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={mod.duration || ''}
                          placeholder="Duration (e.g. 1 Week)"
                          onChange={(e) => {
                            const copy = [...modules];
                            copy[mIdx].duration = e.target.value;
                            setModules(copy);
                          }}
                          className="text-xs text-slate-600 px-2 py-1 rounded-lg border border-slate-200 w-32"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedModuleIdx(mIdx);
                            setSelectedLessonIdx(0);
                            setStudioTab('lesson-suite');
                          }}
                          className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg border border-amber-200 transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit Lessons ({mod.lessons.length})</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveModule(mIdx)}
                          className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                          title="Delete Subject"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <textarea
                      value={mod.overview || ''}
                      onChange={(e) => {
                        const copy = [...modules];
                        copy[mIdx].overview = e.target.value;
                        setModules(copy);
                      }}
                      rows={2}
                      placeholder="Subject Overview: what will be covered in this competency unit..."
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-100 text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                      <span className="text-slate-500">Contains <strong className="text-slate-800">{mod.lessons.length}</strong> lessons / units</span>
                      <button
                        type="button"
                        onClick={() => handleAddLesson(mIdx)}
                        className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Lesson to Subject {mIdx + 1}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LESSON, ACTIVITY, EXAM & WORKSHEET SUITE (systeme.io editor) */}
          {studioTab === 'lesson-suite' && (
            <div className="flex-1 flex overflow-hidden">
              
              {/* Left Sidebar: Subject & Lesson Tree */}
              <div className="w-80 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto space-y-4 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Course Syllabus</span>
                  <button
                    type="button"
                    onClick={handleAddModule}
                    className="p-1 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                    title="Add Subject"
                  >
                    <FolderPlus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {modules.map((mod, mIdx) => (
                    <div key={mIdx} className="space-y-1">
                      <div 
                        onClick={() => {
                          setSelectedModuleIdx(mIdx);
                          setSelectedLessonIdx(0);
                        }}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-black flex items-center justify-between cursor-pointer transition-colors ${
                          selectedModuleIdx === mIdx ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-200/80 text-slate-800 hover:bg-slate-300/80'
                        }`}
                      >
                        <span className="truncate">{mod.title}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddLesson(mIdx);
                          }}
                          className="p-1 hover:bg-white/20 rounded transition-colors"
                          title="Add Lesson"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Lessons inside Subject */}
                      <div className="pl-3 space-y-1 border-l-2 border-slate-200 ml-2 pt-1">
                        {mod.lessons.map((les, lIdx) => {
                          const isSelected = selectedModuleIdx === mIdx && selectedLessonIdx === lIdx;
                          return (
                            <div
                              key={lIdx}
                              onClick={() => {
                                setSelectedModuleIdx(mIdx);
                                setSelectedLessonIdx(lIdx);
                              }}
                              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <FileText className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                                <span className="truncate">{les.title}</span>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveLesson(mIdx, lIdx);
                                }}
                                className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 p-0.5"
                              >
                                ×
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content Area: Detailed Lesson Suite */}
              <div className="flex-1 flex flex-col overflow-hidden bg-white">
                
                {/* Lesson Sub-Tab Headers */}
                <div className="px-6 py-3 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-800">
                      {currentModule.title} →
                    </span>
                    <input
                      type="text"
                      value={currentLesson.title}
                      onChange={(e) => updateCurrentLesson(l => ({ ...l, title: e.target.value }))}
                      className="font-bold text-sm text-slate-900 border border-transparent hover:border-slate-200 focus:border-blue-500 rounded-lg px-2 py-0.5"
                    />
                  </div>

                  {/* Component Switchers: Video, Activity, Exam, Worksheet */}
                  <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setLessonSubTab('video')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        lessonSubTab === 'video' ? 'bg-white text-blue-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5 text-red-500" />
                      <span>1. Video &amp; Theory</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLessonSubTab('activity')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        lessonSubTab === 'activity' ? 'bg-white text-amber-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-amber-500" />
                      <span>2. Activity {currentLesson.activity ? '✓' : ''}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLessonSubTab('exam')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        lessonSubTab === 'exam' ? 'bg-white text-purple-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-purple-500" />
                      <span>3. Exam / Quiz {currentLesson.exam ? `(${currentLesson.exam.questions.length})` : ''}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLessonSubTab('worksheet')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        lessonSubTab === 'worksheet' ? 'bg-white text-emerald-700 shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Table className="w-3.5 h-3.5 text-emerald-500" />
                      <span>4. Worksheet {currentLesson.worksheet ? '✓' : ''}</span>
                    </button>
                  </div>
                </div>

                {/* Sub-Tab Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  
                  {/* SUB-TAB 1: VIDEO & THEORY */}
                  {lessonSubTab === 'video' && (
                    <div className="space-y-4 max-w-3xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700">Lesson Duration</label>
                          <input
                            type="text"
                            value={currentLesson.duration}
                            onChange={(e) => updateCurrentLesson(l => ({ ...l, duration: e.target.value }))}
                            placeholder="e.g. 45 mins"
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700">Video URL (YouTube, Vimeo, MP4)</label>
                          <input
                            type="url"
                            value={currentLesson.videoUrl || ''}
                            onChange={(e) => updateCurrentLesson(l => ({ ...l, videoUrl: e.target.value }))}
                            placeholder="https://www.youtube.com/watch?v=..."
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Learning Objective</label>
                        <input
                          type="text"
                          value={currentLesson.objective || ''}
                          onChange={(e) => updateCurrentLesson(l => ({ ...l, objective: e.target.value }))}
                          placeholder="e.g. Understand OHS standards and assemble desktop PC components without damage..."
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Theory &amp; Lecture Content</label>
                        <textarea
                          value={currentLesson.content || ''}
                          onChange={(e) => updateCurrentLesson(l => ({ ...l, content: e.target.value }))}
                          rows={6}
                          placeholder="Write detailed theoretical notes, bullet points, protocols, and conceptual explanations..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs leading-relaxed"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Code / Script / Command Snippet (Optional)</label>
                        <textarea
                          value={currentLesson.codeSnippet || ''}
                          onChange={(e) => updateCurrentLesson(l => ({ ...l, codeSnippet: e.target.value }))}
                          rows={3}
                          placeholder="// Diagnostic command line or inspection script"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 bg-slate-50"
                        />
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 2: HANDS-ON ACTIVITY */}
                  {lessonSubTab === 'activity' && (
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex items-center justify-between bg-amber-50/70 border border-amber-200 p-4 rounded-2xl">
                        <div>
                          <h4 className="text-sm font-black text-amber-900">Hands-on Activity Builder</h4>
                          <p className="text-xs text-amber-700">Provide students with practical task sheets, step-by-step instructions, and rubrics.</p>
                        </div>
                        <button
                          type="button"
                          onClick={handleToggleActivity}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                            currentLesson.activity ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-amber-600 text-white hover:bg-amber-700'
                          }`}
                        >
                          {currentLesson.activity ? 'Remove Activity' : '+ Enable Activity'}
                        </button>
                      </div>

                      {currentLesson.activity ? (
                        <div className="space-y-4 pt-2">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Activity Title</label>
                            <input
                              type="text"
                              value={currentLesson.activity.title}
                              onChange={(e) => {
                                const val = e.target.value;
                                updateCurrentLesson(l => l.activity ? { ...l, activity: { ...l.activity, title: val } } : l);
                              }}
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-bold text-slate-700">Step-by-Step Instructions</label>
                              <button
                                type="button"
                                onClick={() => {
                                  updateCurrentLesson(l => {
                                    if (!l.activity) return l;
                                    return {
                                      ...l,
                                      activity: {
                                        ...l.activity,
                                        instructions: [...l.activity.instructions, `Step ${l.activity.instructions.length + 1}: Execute next task`]
                                      }
                                    };
                                  });
                                }}
                                className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                              >
                                + Add Step
                              </button>
                            </div>

                            {currentLesson.activity.instructions.map((inst, iIdx) => (
                              <div key={iIdx} className="flex gap-2 items-center">
                                <span className="w-5 text-center text-xs font-bold text-slate-400">{iIdx + 1}.</span>
                                <input
                                  type="text"
                                  value={inst}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateCurrentLesson(l => {
                                      if (!l.activity) return l;
                                      const copy = [...l.activity.instructions];
                                      copy[iIdx] = val;
                                      return { ...l, activity: { ...l.activity, instructions: copy } };
                                    });
                                  }}
                                  className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    updateCurrentLesson(l => {
                                      if (!l.activity) return l;
                                      return {
                                        ...l,
                                        activity: {
                                          ...l.activity,
                                          instructions: l.activity.instructions.filter((_, idx) => idx !== iIdx)
                                        }
                                      };
                                    });
                                  }}
                                  className="text-slate-400 hover:text-red-600 px-1"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Starter Code / Task Checklist Template</label>
                            <textarea
                              value={currentLesson.activity.starterCode || ''}
                              onChange={(e) => {
                                const val = e.target.value;
                                updateCurrentLesson(l => l.activity ? { ...l, activity: { ...l.activity, starterCode: val } } : l);
                              }}
                              rows={3}
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs bg-slate-50"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Expected Practical Outcome</label>
                            <input
                              type="text"
                              value={currentLesson.activity.expectedOutcome || ''}
                              onChange={(e) => {
                                const val = e.target.value;
                                updateCurrentLesson(l => l.activity ? { ...l, activity: { ...l.activity, expectedOutcome: val } } : l);
                              }}
                              placeholder="e.g. A fully functioning, verified workstation operating with 0% errors."
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                            />
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">No hands-on activity configured for this lesson yet. Click "+ Enable Activity" above to create one.</p>
                      )}
                    </div>
                  )}

                  {/* SUB-TAB 3: EXAM / QUIZ (systeme.io engine) */}
                  {lessonSubTab === 'exam' && (
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex items-center justify-between bg-purple-50/70 border border-purple-200 p-4 rounded-2xl">
                        <div>
                          <h4 className="text-sm font-black text-purple-900">Interactive Exam &amp; Quiz Engine</h4>
                          <p className="text-xs text-purple-700">Create multiple-choice questions, set passing score percentage, and provide explanations.</p>
                        </div>
                        <button
                          type="button"
                          onClick={handleToggleExam}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                            currentLesson.exam ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                        >
                          {currentLesson.exam ? 'Remove Exam' : '+ Enable Exam'}
                        </button>
                      </div>

                      {currentLesson.exam ? (
                        <div className="space-y-6 pt-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-700">Exam Title</label>
                              <input
                                type="text"
                                value={currentLesson.exam.title}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateCurrentLesson(l => l.exam ? { ...l, exam: { ...l.exam, title: val } } : l);
                                }}
                                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-700">Passing Score (%)</label>
                              <input
                                type="number"
                                min={10}
                                max={100}
                                value={currentLesson.exam.passingScore}
                                onChange={(e) => {
                                  const val = Number(e.target.value);
                                  updateCurrentLesson(l => l.exam ? { ...l, exam: { ...l.exam, passingScore: val } } : l);
                                }}
                                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                              />
                            </div>
                          </div>

                          {/* Questions List */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                                Exam Questions ({currentLesson.exam.questions.length})
                              </h5>
                              <button
                                type="button"
                                onClick={handleAddQuestion}
                                className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add Question</span>
                              </button>
                            </div>

                            {currentLesson.exam.questions.map((q, qIdx) => (
                              <div key={q.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-black text-purple-700">Question {qIdx + 1}</span>
                                  {currentLesson.exam!.questions.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveQuestion(qIdx)}
                                      className="text-xs text-red-500 hover:underline"
                                    >
                                      Remove Question
                                    </button>
                                  )}
                                </div>

                                <input
                                  type="text"
                                  value={q.question}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateCurrentLesson(l => {
                                      if (!l.exam) return l;
                                      const copy = [...l.exam.questions];
                                      copy[qIdx].question = val;
                                      return { ...l, exam: { ...l.exam, questions: copy } };
                                    });
                                  }}
                                  placeholder="Enter the question prompt here..."
                                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                                />

                                {/* 4 Choices with Radio for Correct Answer */}
                                <div className="space-y-2 pt-1">
                                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                    Select Correct Answer (Radio):
                                  </label>
                                  {q.options.map((opt, optIdx) => (
                                    <div key={optIdx} className="flex items-center gap-2">
                                      <input
                                        type="radio"
                                        name={`correct-${q.id}`}
                                        checked={q.correctIndex === optIdx}
                                        onChange={() => {
                                          updateCurrentLesson(l => {
                                            if (!l.exam) return l;
                                            const copy = [...l.exam.questions];
                                            copy[qIdx].correctIndex = optIdx;
                                            return { ...l, exam: { ...l.exam, questions: copy } };
                                          });
                                        }}
                                        className="cursor-pointer"
                                      />
                                      <span className="text-xs font-bold text-slate-400 w-4">
                                        {String.fromCharCode(65 + optIdx)}
                                      </span>
                                      <input
                                        type="text"
                                        value={opt}
                                        onChange={(e) => {
                                          const val = e.target.value;
                                          updateCurrentLesson(l => {
                                            if (!l.exam) return l;
                                            const copy = [...l.exam.questions];
                                            copy[qIdx].options[optIdx] = val;
                                            return { ...l, exam: { ...l.exam, questions: copy } };
                                          });
                                        }}
                                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                                      />
                                      {q.correctIndex === optIdx && (
                                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                          CORRECT
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>

                                {/* Explanation */}
                                <div className="pt-1">
                                  <input
                                    type="text"
                                    value={q.explanation || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateCurrentLesson(l => {
                                        if (!l.exam) return l;
                                        const copy = [...l.exam.questions];
                                        copy[qIdx].explanation = val;
                                        return { ...l, exam: { ...l.exam, questions: copy } };
                                      });
                                    }}
                                    placeholder="Teacher explanation shown to students after answering..."
                                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">No exam or quiz created for this lesson. Click "+ Enable Exam" above to add interactive quizzes.</p>
                      )}
                    </div>
                  )}

                  {/* SUB-TAB 4: WORKSHEETS & GOOGLE SHEETS */}
                  {lessonSubTab === 'worksheet' && (
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex items-center justify-between bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl">
                        <div>
                          <h4 className="text-sm font-black text-emerald-900">Worksheet &amp; Spreadsheet Assignment</h4>
                          <p className="text-xs text-emerald-700">Attach Google Sheets templates, define student deliverables, and set rubrics.</p>
                        </div>
                        <button
                          type="button"
                          onClick={handleToggleWorksheet}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                            currentLesson.worksheet ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                          }`}
                        >
                          {currentLesson.worksheet ? 'Remove Worksheet' : '+ Enable Worksheet'}
                        </button>
                      </div>

                      {currentLesson.worksheet ? (
                        <div className="space-y-4 pt-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-700">Worksheet Title</label>
                              <input
                                type="text"
                                value={currentLesson.worksheet.title}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateCurrentLesson(l => l.worksheet ? { ...l, worksheet: { ...l.worksheet, title: val } } : l);
                                }}
                                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-700">Spreadsheet Tab Name</label>
                              <input
                                type="text"
                                value={currentLesson.worksheet.sheetName || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateCurrentLesson(l => l.worksheet ? { ...l, worksheet: { ...l.worksheet, sheetName: val } } : l);
                                }}
                                placeholder="e.g. Lab_Evaluation_Sheet"
                                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Google Sheets / Document Template URL</label>
                            <input
                              type="url"
                              value={currentLesson.worksheet.templateUrl || ''}
                              onChange={(e) => {
                                const val = e.target.value;
                                updateCurrentLesson(l => l.worksheet ? { ...l, worksheet: { ...l.worksheet, templateUrl: val } } : l);
                              }}
                              placeholder="https://docs.google.com/spreadsheets/d/.../copy"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Worksheet Assignment Description</label>
                            <textarea
                              value={currentLesson.worksheet.description}
                              onChange={(e) => {
                                const val = e.target.value;
                                updateCurrentLesson(l => l.worksheet ? { ...l, worksheet: { ...l.worksheet, description: val } } : l);
                              }}
                              rows={3}
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-bold text-slate-700">Expected Deliverables</label>
                              <button
                                type="button"
                                onClick={() => {
                                  updateCurrentLesson(l => {
                                    if (!l.worksheet) return l;
                                    const del = l.worksheet.deliverables || [];
                                    return {
                                      ...l,
                                      worksheet: {
                                        ...l.worksheet,
                                        deliverables: [...del, `Deliverable ${del.length + 1}: Completed spreadsheet audit`]
                                      }
                                    };
                                  });
                                }}
                                className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                              >
                                + Add Deliverable
                              </button>
                            </div>

                            {(currentLesson.worksheet.deliverables || []).map((d, dIdx) => (
                              <div key={dIdx} className="flex gap-2 items-center">
                                <span className="text-xs text-slate-400">•</span>
                                <input
                                  type="text"
                                  value={d}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateCurrentLesson(l => {
                                      if (!l.worksheet || !l.worksheet.deliverables) return l;
                                      const copy = [...l.worksheet.deliverables];
                                      copy[dIdx] = val;
                                      return { ...l, worksheet: { ...l.worksheet, deliverables: copy } };
                                    });
                                  }}
                                  className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    updateCurrentLesson(l => {
                                      if (!l.worksheet || !l.worksheet.deliverables) return l;
                                      return {
                                        ...l,
                                        worksheet: {
                                          ...l.worksheet,
                                          deliverables: l.worksheet.deliverables.filter((_, idx) => idx !== dIdx)
                                        }
                                      };
                                    });
                                  }}
                                  className="text-slate-400 hover:text-red-600 px-1"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">No worksheet configured. Click "+ Enable Worksheet" above to link Google Sheets assignments.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MY COURSES & SUBJECTS MANAGER */}
          {studioTab === 'my-courses' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl mx-auto w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black text-slate-900">My Authoring Library</h4>
                  <p className="text-xs text-slate-500">Manage, edit, duplicate, or preview your courses and subject modules.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingCourseId(null);
                    setTitle('New Master Course');
                    setStudioTab('essentials');
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Create New Course</span>
                </button>
              </div>

              {teacherCourses.length === 0 ? (
                <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-3xl space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-800">No custom courses authored yet</h5>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Use the Creator Studio tabs above to author your first course complete with subjects, activities, quizzes, and worksheets.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teacherCourses.map((track) => {
                    const totalModules = (track.modules || []).length;
                    const totalLessons = (track.modules || []).reduce((acc, m) => acc + (m.lessonItems || []).length, 0);

                    return (
                      <div key={track.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                              {track.categoryLabel || track.category}
                            </span>
                            <span className="text-xs font-bold text-slate-500">
                              {track.duration}
                            </span>
                          </div>

                          <h5 className="font-black text-base text-slate-900 leading-snug">{track.title}</h5>
                          <p className="text-xs text-slate-600 line-clamp-2">{track.description}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3 text-slate-500">
                            <span>📚 <strong>{totalModules}</strong> Subjects</span>
                            <span>📝 <strong>{totalLessons}</strong> Lessons</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {onPreviewCourse && (
                              <button
                                type="button"
                                onClick={() => {
                                  onPreviewCourse(track);
                                  onClose();
                                }}
                                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                                title="Preview Course as Student"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Preview</span>
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() => handleEditExistingCourse(track)}
                              className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                              title="Edit in Studio"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDeleteCourse(track.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                              title="Delete Course"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: FACULTY GRADEBOOK & COHORT ACADEMIC ROSTER */}
          {studioTab === 'gradebook' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl mx-auto w-full animate-in fade-in duration-200">
              {/* Gradebook Header & Metric Cards */}
              <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 rounded-2xl p-6 text-white space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 inline-block mb-1">
                      Academic Senate &amp; Faculty Portal
                    </span>
                    <h4 className="text-xl font-black">Institutional Student Gradebook &amp; Cohort Records</h4>
                    <p className="text-xs text-slate-400">
                      Weighted computation: 40% Practical Labs • 30% Modular Exams • 20% Worksheets • 10% Attendance.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const csvContent = "data:text/csv;charset=utf-8," + 
                        "Student Name,Email,Track,Progress,Final Grade,Letter Grade,GPA,Academic Standing,Certificate Status\n" +
                        studentRoster.map(s => `"${s.studentName}","${s.email}","${s.trackTitle}",${s.progressPercent}%,${s.finalNumericGrade}%,${s.letterGrade},${s.gpa},"${s.academicStanding}","${s.certificateIssued ? 'Issued' : 'Pending'}"`).join("\n");
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement("a");
                      link.setAttribute("href", encodedUri);
                      link.setAttribute("download", `epicademy_faculty_gradebook_${Date.now()}.csv`);
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Export Gradebook (CSV)
                  </button>
                </div>

                {/* Metrics Summary Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Active Scholars</span>
                    <span className="text-xl font-black text-white font-mono">{studentRoster.length}</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Class GPA Average</span>
                    <span className="text-xl font-black text-emerald-400 font-mono">3.75 / 4.0</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Honors Candidates</span>
                    <span className="text-xl font-black text-amber-400 font-mono">
                      {studentRoster.filter(s => s.academicStanding.includes('Laude')).length}
                    </span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Degrees Conferred</span>
                    <span className="text-xl font-black text-blue-400 font-mono">
                      {studentRoster.filter(s => s.certificateIssued).length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cohort Selector and Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Filter Cohort:</span>
                  <select
                    value={selectedCohortId}
                    onChange={(e) => setSelectedCohortId(e.target.value)}
                    className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="all">All Academic Cohorts ({INITIAL_COHORTS.length})</option>
                    {INITIAL_COHORTS.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    placeholder="Search candidate name or email..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Student Roster Table */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-white font-mono text-[11px]">
                      <tr>
                        <th className="p-3">Candidate / Student</th>
                        <th className="p-3">Enrolled Track</th>
                        <th className="p-3 text-center">Progress</th>
                        <th className="p-3 text-right">Labs Done</th>
                        <th className="p-3 text-right">Exam Avg</th>
                        <th className="p-3 text-right">Final Grade</th>
                        <th className="p-3 text-center">Academic Honors</th>
                        <th className="p-3 text-center">Certification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {studentRoster
                        .filter(s => selectedCohortId === 'all' || s.cohortId === selectedCohortId)
                        .filter(s => !studentSearch || s.studentName.toLowerCase().includes(studentSearch.toLowerCase()) || s.email.toLowerCase().includes(studentSearch.toLowerCase()))
                        .map((s) => (
                          <tr key={s.id} className="hover:bg-slate-50 transition">
                            <td className="p-3">
                              <span className="font-bold text-slate-900 block">{s.studentName}</span>
                              <span className="text-[11px] text-slate-500 font-mono">{s.email}</span>
                            </td>
                            <td className="p-3 text-slate-700 max-w-[200px] truncate" title={s.trackTitle}>
                              {s.trackTitle}
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${s.progressPercent}%` }} />
                                </div>
                                <span className="font-mono text-[10px] font-bold text-slate-600">{s.progressPercent}%</span>
                              </div>
                            </td>
                            <td className="p-3 text-right font-mono font-medium text-slate-700">
                              {s.completedActivities}/{s.totalActivities}
                            </td>
                            <td className="p-3 text-right font-mono font-medium text-slate-700">
                              {s.examAverage}%
                            </td>
                            <td className="p-3 text-right font-mono">
                              <span className="font-black text-slate-900">{s.finalNumericGrade}%</span>
                              <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                                {s.letterGrade} ({s.gpa.toFixed(1)})
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                                s.academicStanding.includes('Summa')
                                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                                  : s.academicStanding.includes('Magna')
                                  ? 'bg-blue-50 border-blue-300 text-blue-800'
                                  : 'bg-slate-100 border-slate-200 text-slate-700'
                              }`}>
                                {s.academicStanding}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              {s.certificateIssued ? (
                                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center justify-center gap-1">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Issued
                                </span>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setStudentRoster(prev => prev.map(item => item.id === s.id ? { ...item, certificateIssued: true, certificateId: `EPIC-CERT-2026-${Date.now()}` } : item));
                                    alert(`Official Certification awarded to ${s.studentName}!`);
                                  }}
                                  className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[10px] rounded-lg shadow-xs transition cursor-pointer"
                                >
                                  Confer Degree 🏆
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
