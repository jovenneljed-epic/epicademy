import type { Track } from '../types';
import { TESDA_CSS_NC2_COURSE } from './tesdaCssNc2CourseData';

export interface DetailedLesson {
  title: string;
  duration: string;
  videoUrl: string;
  videoTitle: string;
  objective: string;
  theoryContent: string;
  codeSnippet: string;
  handsOnActivity: {
    title: string;
    instructions: string[];
    starterCode: string;
    expectedOutcome: string;
  };
  googleSheetsAssignment: {
    title: string;
    sheetName: string;
    description: string;
    templateUrl: string;
    deliverables: string[];
    rubric: { criteria: string; points: number }[];
  };
}

export interface DetailedModule {
  title: string;
  duration: string;
  overview: string;
  lessons: DetailedLesson[];
}

export interface ZeroToHeroCourse {
  track: Track;
  detailedModules: DetailedModule[];
}

// =========================================================================
// LEVEL 1: Modern HTML5 & Web Architecture
// =========================================================================
const LEVEL_1_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Web Architecture & Document Fundamentals',
    duration: '1 Week',
    overview: 'Learn how browsers parse HTML, the document object tree, and establish your first semantic HTML5 skeleton.',
    lessons: [
      {
        title: 'Lesson 1.1: The Anatomy of the Web & Your First HTML5 Document',
        duration: '22 mins',
        videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
        videoTitle: 'HTML Full Course for Beginners (Document Skeleton)',
        objective: 'Master <!DOCTYPE html>, <html>, <head>, <body> nodes, meta viewport, and character encoding.',
        theoryContent: `HTML is the structural backbone of every web application. Modern HTML5 requires:
1. <!DOCTYPE html> declaring standards mode.
2. <html lang="en"> defining document root and accessibility language.
3. <head> containing metadata, charset (UTF-8), and viewport scaling.
4. <body> containing user-visible nodes parsed into the DOM tree.`,
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Epicademy - Level 1 Foundation</title>
  </head>
  <body>
    <h1>Welcome to Developer Progression: Level 1</h1>
    <p>Starting the journey from Zero to Full-Stack AI Hero.</p>
  </body>
</html>`,
        handsOnActivity: {
          title: 'Activity 1.1: Hand-Craft HTML5 Boilerplate',
          instructions: [
            'Create index.html without using automated IDE snippets.',
            'Declare meta viewport and UTF-8 charset.',
            'Verify rendering in Google Chrome and inspect the DOM tree.'
          ],
          starterCode: `<!-- Write your HTML5 boilerplate here from memory -->`,
          expectedOutcome: 'Valid HTML5 document with zero console or linter warnings.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.1: HTML Boilerplate & Meta Tag Audit',
          sheetName: 'HTML5_Doc_Audit',
          description: 'Inspect 3 major web platforms and audit their head tags, charset, and viewport configurations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Audit 3 website head sections in the Google Sheets table.',
            'Document viewport scale behavior.',
            'Submit completed rubric sheet.'
          ],
          rubric: [
            { criteria: 'Correct Boilerplate Structure', points: 30 },
            { criteria: 'Viewport & Charset Verification', points: 35 },
            { criteria: 'Audit Quality & Analytical Notes', points: 35 }
          ]
        }
      },
      {
        title: 'Lesson 1.2: Semantic Text Hierarchy & Headings',
        duration: '25 mins',
        videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
        videoTitle: 'Semantic Typography & Document Outlining',
        objective: 'Implement strictly hierarchical headings (h1 to h6) and semantic phrasing elements.',
        theoryContent: `Never skip heading levels (e.g. h1 to h3). Assistive screen readers rely on logical heading trees to allow visually impaired users to jump directly across article sections.`,
        codeSnippet: `<article>
  <h1>Mastering Semantic Web Layouts</h1>
  <section>
    <h2>1. The Importance of Heading Outlines</h2>
    <p>Headings convey <strong>structural importance</strong>, not mere visual sizing.</p>
  </section>
</article>`,
        handsOnActivity: {
          title: 'Activity 1.2: Refactor Unstructured Div Soup',
          instructions: ['Convert a nested <div> layout into semantic <article>, <section>, and <h1>-<h3> elements.'],
          starterCode: `<div class="title">My Article</div>\n<div class="para">Content here</div>`,
          expectedOutcome: 'Accessible document outline validated by the W3C markup validator.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.2: Typographical Hierarchy Audit',
          sheetName: 'Typography_Hierarchy_Matrix',
          description: 'Map out heading hierarchy and phrasing elements for a complete tech blog article.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Document outline mapping', 'Screen reader navigation test log', 'Completed self-scoring rubric'],
          rubric: [
            { criteria: 'No Skipped Heading Levels', points: 40 },
            { criteria: 'Appropriate Semantic Phrasing', points: 30 },
            { criteria: 'Accessibility Verification', points: 30 }
          ]
        }
      }
    ]
  },
  {
    title: 'Module 2: Accessible Forms & Semantic Landmarks',
    duration: '1 Week',
    overview: 'Construct production-grade forms with accessible labels, input validation, and landmark elements.',
    lessons: [
      {
        title: 'Lesson 2.1: Modern Accessible Forms & Validation',
        duration: '30 mins',
        videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
        videoTitle: 'HTML5 Form Elements & Built-In Validation',
        objective: 'Build accessible forms pairing <label for> with input ids, required attributes, and regex patterns.',
        theoryContent: `Form inputs without explicit labels are inaccessible to screen readers. Pair every <input id="email"> with a <label for="email">. Leverage native HTML5 constraints (required, type="email", pattern).`,
        codeSnippet: `<form action="/register" method="POST">
  <div class="field">
    <label for="student-email">Email Address (Required):</label>
    <input type="email" id="student-email" name="email" required placeholder="you@epicademy.dev" />
  </div>
  <button type="submit">Enroll in Track</button>
</form>`,
        handsOnActivity: {
          title: 'Activity 2.1: Build Student Onboarding Form',
          instructions: ['Create a multi-field form with email, password, level select dropdown, and terms checkbox.'],
          starterCode: `<form>\n  <!-- Add fields here -->\n</form>`,
          expectedOutcome: 'Fully interactive form validating browser-side before submission.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.1: Form UX & Validation Test Plan',
          sheetName: 'Form_Validation_Matrix',
          description: 'Document 10 positive and negative test cases for form submission and client-side error handling.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['10 test cases in sheet', 'Accessibility checklist', 'Grade sheet'],
          rubric: [
            { criteria: 'Label-Input Pairing Correctness', points: 35 },
            { criteria: 'Validation Constraint Coverage', points: 35 },
            { criteria: 'Test Case Documentation', points: 30 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 2: Modern CSS3, Flexbox & Grid
// =========================================================================
const LEVEL_2_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: The CSS Box Model & Modern Flexbox',
    duration: '2 Weeks',
    overview: 'Master content-box vs border-box, margin collapsing, and 1D flex layouts for responsive navigation.',
    lessons: [
      {
        title: 'Lesson 2.1: Box Sizing, Specificity & Custom Properties',
        duration: '26 mins',
        videoUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
        videoTitle: 'CSS Crash Course for Absolute Beginners',
        objective: 'Control the box model with box-sizing: border-box and design scalable design tokens with CSS variables.',
        theoryContent: `By default, content-box adds padding and border onto declared element width. With box-sizing: border-box, dimensions encompass padding and border, simplifying responsive calculations.`,
        codeSnippet: `:root {
  --primary: #2563eb;
  --surface: #ffffff;
  --radius-md: 0.75rem;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
        handsOnActivity: {
          title: 'Activity 2.1: Design Token Color Palette',
          instructions: ['Create a style.css file with CSS custom properties for 5 theme colors and 3 border radii.'],
          starterCode: `:root {\n  /* Define variables */\n}`,
          expectedOutcome: 'Consistent design token library applied to card components.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.1: CSS Design Tokens & Variable Inventory',
          sheetName: 'CSS_Design_Tokens',
          description: 'Document design tokens, contrast ratios (WCAG AA compliance), and rem unit scales.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Color contrast compliance grid', 'Font size modular scale', 'Self-evaluation rubric'],
          rubric: [
            { criteria: 'WCAG AA 4.5:1 Contrast Ratios', points: 40 },
            { criteria: 'Modular Scale Consistency', points: 30 },
            { criteria: 'CSS Custom Property Naming', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 2.2: Deep Dive into Modern Flexbox & Alignment',
        duration: '32 mins',
        videoUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
        videoTitle: 'Flexbox Layout Tutorial & Real-World Patterns',
        objective: 'Master main-axis and cross-axis alignment, flex-grow, flex-shrink, and flex-basis.',
        theoryContent: `Flexbox is optimized for 1D distributions. justify-content controls main-axis layout, while align-items controls cross-axis alignment. gap provides clean spacing without margin hacking.`,
        codeSnippet: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
}`,
        handsOnActivity: {
          title: 'Activity 2.2: Build a Responsive App Navigation Bar',
          instructions: ['Implement a flex header with logo on left, search bar centered (flex: 1), and user actions right.'],
          starterCode: `<nav class="navbar">\n  <div class="logo">Epicademy</div>\n  <div class="search">Search</div>\n  <div class="actions">Profile</div>\n</nav>`,
          expectedOutcome: 'Clean responsive navbar that collapses gracefully on smaller screens.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.2: Flexbox Alignment & Breakpoint Matrix',
          sheetName: 'Flexbox_Breakpoints',
          description: 'Document viewport behavior across Mobile (375px), Tablet (768px), and Desktop (1280px).',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Breakpoint layout matrix', 'Flex shrinkage calculation log', 'Grade rubric'],
          rubric: [
            { criteria: 'Responsive Adaptation across 3 Viewports', points: 40 },
            { criteria: 'Clean Flex Property Application', points: 30 },
            { criteria: 'Zero Overflow or Clipping', points: 30 }
          ]
        }
      }
    ]
  },
  {
    title: 'Module 2: 2D CSS Grid & Responsive Dashboards',
    duration: '2 Weeks',
    overview: 'Create complex 2-dimensional layouts, dashboard grids with grid-template-areas, and auto-fit repeat patterns.',
    lessons: [
      {
        title: 'Lesson 2.3: CSS Grid Template Columns, Rows & Areas',
        duration: '35 mins',
        videoUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
        videoTitle: 'CSS Grid Comprehensive Masterclass',
        objective: 'Build responsive card grids with repeat(auto-fit, minmax(280px, 1fr)) without media queries.',
        theoryContent: `CSS Grid is a 2D system. By combining auto-fit and minmax(), the browser automatically computes column counts based on container width without requiring hardcoded media queries.`,
        codeSnippet: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
        handsOnActivity: {
          title: 'Activity 2.3: Course Dashboard Layout',
          instructions: ['Build a 3-column course dashboard that collapses automatically to 2 columns and 1 column.'],
          starterCode: `<div class="card-grid">\n  <!-- Insert 6 cards -->\n</div>`,
          expectedOutcome: 'Fluid responsive layout adapting continuously to window resizing.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.3: CSS Grid Architecture Assessment',
          sheetName: 'Grid_Layout_Assessment',
          description: 'Analyze performance, layout shift (CLS), and container responsiveness of CSS Grid vs Flexbox.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['CLS test records', 'Grid track comparison chart', 'Completed grading rubric'],
          rubric: [
            { criteria: 'Fluid Column Resizing', points: 40 },
            { criteria: 'Zero Cumulative Layout Shift (CLS)', points: 30 },
            { criteria: 'Code Cleanliness & Standards', points: 30 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 3: Core JavaScript Essentials & DOM Manipulation
// =========================================================================
const LEVEL_3_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: JavaScript Foundations, Scope & Data Structures',
    duration: '2 Weeks',
    overview: 'Master primitives, reference types, scope, execution context, closures, and modern array methods.',
    lessons: [
      {
        title: 'Lesson 3.1: Variables, Scope & Arrow Functions',
        duration: '30 mins',
        videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        videoTitle: 'JavaScript Tutorial for Beginners',
        objective: 'Differentiate let, const, and var. Understand block scope and write concise arrow functions.',
        theoryContent: `JavaScript evaluates code through lexical scoping. const prevents variable reassignment, let provides block scope, and arrow functions preserve the lexical 'this' binding.`,
        codeSnippet: `const calculateDiscount = (price, discountPercent = 10) => {
  if (price < 0) throw new Error('Price cannot be negative');
  const discount = price * (discountPercent / 100);
  return Number((price - discount).toFixed(2));
};

console.log(calculateDiscount(99, 50)); // 49.50`,
        handsOnActivity: {
          title: 'Activity 3.1: Cart Total Calculator',
          instructions: ['Write a function that calculates total price, sales tax, and discount for an array of items.'],
          starterCode: `const items = [{ name: 'Book', price: 29 }, { name: 'Pen', price: 5 }];\nfunction calcTotal(items) {}`,
          expectedOutcome: 'Correctly computed numerical subtotal and total formatted to 2 decimals.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.1: Algorithm Trace & Unit Test Cases',
          sheetName: 'JS_Algorithm_Trace',
          description: 'Document input-output test pairs, edge cases (0, negative, NaN), and execution traces.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['8 test cases with expected vs actual output', 'Edge case analysis', 'Grading rubric'],
          rubric: [
            { criteria: 'Edge Case Identification', points: 40 },
            { criteria: 'Correct Math & Scope Handling', points: 30 },
            { criteria: 'Documentation & Test Rigor', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 3.2: High-Order Array Methods: map, filter, reduce',
        duration: '35 mins',
        videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        videoTitle: 'Array Methods Masterclass (map, filter, reduce)',
        objective: 'Transform and aggregate dataset collections declaratively without mutable for-loops.',
        theoryContent: `Functional programming principles encourage immutability. map creates a transformed array, filter extracts matching elements, and reduce aggregates into a single cumulative output.`,
        codeSnippet: `const courses = [
  { title: 'HTML5', price: 29, category: 'stem' },
  { title: 'CSS3', price: 39, category: 'stem' },
  { title: 'Copywriting', price: 19, category: 'business' }
];

const stemCourseTitles = courses
  .filter(c => c.category === 'stem')
  .map(c => c.title);

const totalStemCost = courses
  .filter(c => c.category === 'stem')
  .reduce((sum, c) => sum + c.price, 0);`,
        handsOnActivity: {
          title: 'Activity 3.2: Data Pipeline Challenge',
          instructions: ['Filter an array of students with grade >= 80 and compute class average with reduce.'],
          starterCode: `const grades = [75, 88, 92, 64, 99, 81];`,
          expectedOutcome: 'Filtered array and verified arithmetic mean printed to console.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.2: Functional Array Transformation Log',
          sheetName: 'Array_Transform_Pipeline',
          description: 'Step-by-step spreadsheet pipeline tracking array states before and after transformations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Spreadsheet pipeline model', 'Performance benchmarking log', 'Rubric'],
          rubric: [
            { criteria: 'Immutability Adherence', points: 40 },
            { criteria: 'Correct Method Application', points: 35 },
            { criteria: 'Analysis of Big-O Complexity', points: 25 }
          ]
        }
      }
    ]
  },
  {
    title: 'Module 2: DOM Manipulation & Event Handling',
    duration: '2 Weeks',
    overview: 'Select elements, listen to user interaction events, manipulate styles, and handle form submits dynamically.',
    lessons: [
      {
        title: 'Lesson 3.3: querySelector, Event Listeners & Event Delegation',
        duration: '38 mins',
        videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        videoTitle: 'JavaScript DOM Manipulation & Event Handling',
        objective: 'Attach event listeners efficiently using event delegation on parent containers.',
        theoryContent: `Event bubbling allows you to attach a single event listener to a parent element rather than attaching hundreds to individual child items, saving memory and supporting dynamically added nodes.`,
        codeSnippet: `const courseList = document.querySelector('#course-list');

courseList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('button.enroll-btn')) {
    const courseId = target.dataset.courseId;
    console.log('Enrolled in course:', courseId);
  }
});`,
        handsOnActivity: {
          title: 'Activity 3.3: Interactive Todo & Task List',
          instructions: ['Build a dynamic todo list with add, check-complete, and delete features using DOM methods.'],
          starterCode: `<ul id="todo-list"></ul>\n<input id="todo-input">\n<button id="add-btn">Add</button>`,
          expectedOutcome: 'Fully interactive list with zero page reloads.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.3: Event Flow & DOM Interaction Matrix',
          sheetName: 'DOM_Event_Matrix',
          description: 'Document capturing, targeting, and bubbling phases with event.stopPropagation tests.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Event propagation breakdown', 'Memory leak prevention checklist', 'Rubric'],
          rubric: [
            { criteria: 'Event Delegation Implementation', points: 40 },
            { criteria: 'DOM Mutation Cleanliness', points: 30 },
            { criteria: 'Memory Management Strategy', points: 30 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 4: Advanced Modern JavaScript, Async Patterns & APIs
// =========================================================================
const LEVEL_4_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Asynchronous JS, Promises & Async/Await',
    duration: '2 Weeks',
    overview: 'Understand the JavaScript Event Loop, Call Stack, Microtask Queue, Promises, and async/await syntax.',
    lessons: [
      {
        title: 'Lesson 4.1: The JavaScript Event Loop & Microtask Queue',
        duration: '35 mins',
        videoUrl: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
        videoTitle: 'What the heck is the event loop anyway?',
        objective: 'Predict asynchronous execution order across setTimeout, Promise microtasks, and synchronous code.',
        theoryContent: `JavaScript is single-threaded. Synchronous code executes immediately on the call stack. Promises resolve into the Microtask Queue, which executes before the Task Queue (macrotasks like setTimeout).`,
        codeSnippet: `console.log('1: Synchronous');

setTimeout(() => console.log('4: Macrotask (setTimeout)'), 0);

Promise.resolve().then(() => console.log('3: Microtask (Promise)'));

console.log('2: Synchronous');
// Execution Order: 1, 2, 3, 4`,
        handsOnActivity: {
          title: 'Activity 4.1: Execution Order Prediction Quiz',
          instructions: ['Analyze 5 complex asynchronous code blocks and write their exact console outputs.'],
          starterCode: `// Trace the execution order of async operations`,
          expectedOutcome: '100% accurate prediction of microtask and macrotask execution.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.1: Event Loop Microtask Execution Trace',
          sheetName: 'Event_Loop_Trace',
          description: 'Diagram call stack states step-by-step for asynchronous code sequences.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Call stack step trace table', 'Queue execution order analysis', 'Rubric'],
          rubric: [
            { criteria: 'Accurate Microtask vs Macrotask Order', points: 45 },
            { criteria: 'Stack Frame Identification', points: 30 },
            { criteria: 'Clarity of Explanatory Notes', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 4.2: Fetching REST APIs with async/await & Error Handling',
        duration: '40 mins',
        videoUrl: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
        videoTitle: 'Fetch API & Async Await Masterclass',
        objective: 'Fetch remote data, inspect response.ok status, parse JSON payloads, and handle network failures with try/catch.',
        theoryContent: `fetch() only rejects on network disconnection, NOT HTTP 404 or 500 errors. You must explicitly check if (!response.ok) and throw an error to trigger the catch block.`,
        codeSnippet: `async function loadCourses() {
  try {
    const res = await fetch('https://api.example.com/courses');
    if (!res.ok) {
      throw new Error(\`HTTP error! status: \${res.status}\`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch courses:', error.message);
    throw error;
  }
}`,
        handsOnActivity: {
          title: 'Activity 4.2: Live Weather / User Dashboard',
          instructions: ['Fetch real data from a public API, show a loading spinner, and render the results gracefully.'],
          starterCode: `async function fetchUserData() {}`,
          expectedOutcome: 'App displaying live remote data with graceful loading and error states.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.2: REST API Response & Error Handling Matrix',
          sheetName: 'API_Error_Matrix',
          description: 'Document API response payloads, status codes (200, 400, 401, 404, 500), and UI fallback states.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['HTTP status matrix with UI fallbacks', 'JSON schema validation records', 'Rubric'],
          rubric: [
            { criteria: 'HTTP Status Code Handling (2xx, 4xx, 5xx)', points: 40 },
            { criteria: 'Graceful Error Boundary Design', points: 35 },
            { criteria: 'Loading State Architecture', points: 25 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 5: Modern Frontend Frameworks: React 19 & TypeScript
// =========================================================================
const LEVEL_5_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: React 19 Component Architecture & TypeScript',
    duration: '2 Weeks',
    overview: 'Master JSX/TSX, typed props, state with useState, side effects with useEffect, and custom hooks.',
    lessons: [
      {
        title: 'Lesson 5.1: Strongly Typed Components & Props with TypeScript',
        duration: '42 mins',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        videoTitle: 'React 19 & TypeScript Tutorial for Beginners',
        objective: 'Build type-safe React components with typed interfaces, optional props, and union types.',
        theoryContent: `TypeScript eliminates runtime bugs by validating props and state at compile time. Define clean interfaces and leverage generic typing for reusable UI components.`,
        codeSnippet: `interface CourseCardProps {
  title: string;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  onEnroll: (courseId: string) => void;
  isPopular?: boolean;
}

export const CourseCard = ({ title, price, level, onEnroll, isPopular }: CourseCardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="badge">{level}</span>
      <p className="price">\${price}</p>
      <button onClick={() => onEnroll(title)}>Enroll Now</button>
    </div>
  );
};`,
        handsOnActivity: {
          title: 'Activity 5.1: Type-Safe Metric Widget',
          instructions: ['Build a generic StatWidget component accepting generic data, labels, and trend badges.'],
          starterCode: `interface StatWidgetProps<T> {}\nexport const StatWidget = <T,>() => {};`,
          expectedOutcome: 'Component compiling cleanly under TypeScript strict mode.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 5.1: React Component Hierarchy & State Tree',
          sheetName: 'React_State_Tree',
          description: 'Map component tree hierarchy, prop drilling vs context paths, and TypeScript interface models.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Component hierarchy diagram', 'State ownership analysis', 'Rubric'],
          rubric: [
            { criteria: 'Type Safety & Strictness', points: 40 },
            { criteria: 'Clean Component Separation', points: 30 },
            { criteria: 'State Lifting Correctness', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 5.2: Custom Hooks & Data Fetching in React 19',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        videoTitle: 'Modern React Hooks & Custom Data Fetching',
        objective: 'Encapsulate reusable stateful logic into custom hooks with loading, error, and cached data return states.',
        theoryContent: `Custom hooks allow you to extract component logic into reusable functions. Maintain separation of concerns: presentation components should not directly manage low-level network calls.`,
        codeSnippet: `import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(json => { if (isMounted) { setData(json); setLoading(false); } })
      .catch(err => { if (isMounted) { setError(err.message); setLoading(false); } });

    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
}`,
        handsOnActivity: {
          title: 'Activity 5.2: Build a Course Search Hook',
          instructions: ['Write a useDebounce hook that debounces search query inputs by 300ms to minimize network load.'],
          starterCode: `export function useDebounce(value: string, delay: number) {}`,
          expectedOutcome: 'Search queries executed only after typing pauses.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 5.2: React Performance & Re-render Audit',
          sheetName: 'React_Perf_Audit',
          description: 'Audit React DevTools Profiler logs, measuring flame graphs and component render times.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Profiler render metrics table', 'Memoization strategy notes', 'Rubric'],
          rubric: [
            { criteria: 'Re-render Prevention (useMemo/useCallback)', points: 40 },
            { criteria: 'Hook Reusability & Clean Cleanup', points: 35 },
            { criteria: 'Profiler Data Accuracy', points: 25 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 6: Full-Stack Backend Engineering: Node.js & Express
// =========================================================================
const LEVEL_6_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Node.js Runtime & Express REST API Architecture',
    duration: '2 Weeks',
    overview: 'Build robust REST APIs, implement middleware chains, parse request bodies, and handle CORS securely.',
    lessons: [
      {
        title: 'Lesson 6.1: Express Routing, Middleware & Request Lifecycle',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        videoTitle: 'Node.js and Express.js Full Course',
        objective: 'Construct an Express HTTP server with modular routers, JSON middleware, and structured error handlers.',
        theoryContent: `Express uses a middleware pipeline: request -> middleware1 -> middleware2 -> route handler -> response. If an error occurs, calling next(err) passes control directly to centralized error middleware.`,
        codeSnippet: `import express from 'express';
const app = express();

app.use(express.json());

app.get('/api/v1/courses', (req, res) => {
  res.status(200).json({ status: 'success', data: [] });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
        handsOnActivity: {
          title: 'Activity 6.1: Build an Academy Courses API',
          instructions: ['Implement GET /courses, POST /courses, and GET /courses/:id with id parameter validation.'],
          starterCode: `const router = express.Router();\n// Define endpoints`,
          expectedOutcome: 'Verified REST endpoints returning valid JSON and appropriate HTTP status codes.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 6.1: REST API Endpoint Specification Matrix',
          sheetName: 'API_Spec_Matrix',
          description: 'Document OpenAPI/Swagger spec parameters, request schemas, headers, and status code matrices.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Endpoint matrix for 8 REST endpoints', 'Security header review', 'Rubric'],
          rubric: [
            { criteria: 'RESTful URL Naming Standards', points: 40 },
            { criteria: 'HTTP Status Code Correctness', points: 30 },
            { criteria: 'Middleware Error Safety', points: 30 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 7: Database Architecture, PostgreSQL & Supabase
// =========================================================================
const LEVEL_7_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Relational Modeling, SQL & Supabase RLS',
    duration: '2 Weeks',
    overview: 'Design normalized relational schemas, primary/foreign keys, joins, indexing, and Supabase Row Level Security.',
    lessons: [
      {
        title: 'Lesson 7.1: PostgreSQL Schema Design, Foreign Keys & Joins',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
        videoTitle: 'PostgreSQL Database Full Course for Beginners',
        objective: 'Design normalized tables with 1-to-many and many-to-many relations using junction tables.',
        theoryContent: `Relational databases guarantee ACID properties. Foreign keys with ON DELETE CASCADE maintain referential integrity. Indexes speed up query lookups on high-cardinality columns.`,
        codeSnippet: `create table public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  track_id text references public.tracks(id) on delete cascade,
  enrolled_at timestamp with time zone default now(),
  unique(user_id, track_id)
);

create index idx_enrollments_user on public.enrollments(user_id);`,
        handsOnActivity: {
          title: 'Activity 7.1: Write SQL Multi-Table Joins',
          instructions: ['Write an INNER JOIN query retrieving course title, student email, and enrollment date.'],
          starterCode: `SELECT t.title, u.email FROM public.enrollments e ...`,
          expectedOutcome: 'Executable SQL returning aggregated student enrollment data.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 7.1: Database Schema ERD & Normalization Audit',
          sheetName: 'DB_ERD_Normalization',
          description: 'Document 1NF, 2NF, and 3NF normalization proofs, entity relationships, and index strategies.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Schema dictionary table', '3NF normalization proof', 'Rubric'],
          rubric: [
            { criteria: 'Relational Integrity & Key Constraints', points: 40 },
            { criteria: '3NF Normalization Compliance', points: 30 },
            { criteria: 'Query Performance & Indexing Plan', points: 30 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 8: Web Security, Authentication & DevOps CI/CD
// =========================================================================
const LEVEL_8_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Production Authentication, JWT & Docker DevOps',
    duration: '2 Weeks',
    overview: 'Secure apps against OWASP Top 10, implement JWT/OAuth auth flows, containerize with Docker, and automate CI/CD.',
    lessons: [
      {
        title: 'Lesson 8.1: OAuth 2.0, Secure JWT Tokens & OWASP Defense',
        duration: '48 mins',
        videoUrl: 'https://www.youtube.com/watch?v=SLwpqD8n3d0',
        videoTitle: 'Web Security & Authentication Masterclass',
        objective: 'Implement secure httpOnly cookies, prevent XSS/CSRF attacks, and configure CORS policies.',
        theoryContent: `Never store sensitive JWT tokens in localStorage where they are vulnerable to XSS attacks. Store authentication session tokens in httpOnly, SameSite=Strict secure cookies.`,
        codeSnippet: `// Secure cookie configuration example
res.cookie('token', jwtToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});`,
        handsOnActivity: {
          title: 'Activity 8.1: Security Audit & Penetration Checklist',
          instructions: ['Audit an application for SQL Injection, XSS vectors, and unsecured CORS headers.'],
          starterCode: `// Conduct security audit checklist`,
          expectedOutcome: 'Comprehensive vulnerability report with mitigation strategies.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 8.1: OWASP Top 10 Security Audit Checklist',
          sheetName: 'OWASP_Security_Audit',
          description: 'Document tests against injection, broken auth, sensitive data exposure, and security misconfigurations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['OWASP 10-point audit log', 'Remediation implementation plan', 'Rubric'],
          rubric: [
            { criteria: 'Vulnerability Detection Accuracy', points: 40 },
            { criteria: 'HttpOnly / SameSite Cookie Security', points: 35 },
            { criteria: 'DevOps Security Best Practices', points: 25 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// LEVEL 9: Full-Stack Capstone & Autonomous AI Software Engineering
// =========================================================================
const LEVEL_9_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Autonomous AI Agents, LLM Orchestration & Production SaaS',
    duration: '3 Weeks',
    overview: 'Build a production-scale AI SaaS: integrate LLM APIs, implement streaming responses, handle Stripe billing, and deploy cloud infrastructure.',
    lessons: [
      {
        title: 'Lesson 9.1: Building Production AI Agents & LLM Function Calling',
        duration: '55 mins',
        videoUrl: 'https://www.youtube.com/watch?v=0pOnr_UaQoY',
        videoTitle: 'Building Production AI SaaS from Scratch',
        objective: 'Connect frontend interfaces to LLM streaming endpoints with function calling and tool execution.',
        theoryContent: `Modern AI engineering pairs foundation models with structured tools. Autonomous agents analyze user requests, invoke local API tools to retrieve data, and return streaming markdown responses.`,
        codeSnippet: `import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI();

async function streamAIResponse(prompt: string) {
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  for await (const chunk of response) {
    process.stdout.write(chunk.text || '');
  }
}`,
        handsOnActivity: {
          title: 'Activity 9.1: Build an Autonomous Coding Assistant',
          instructions: ['Implement an AI assistant that inspects student code submissions and provides automated feedback.'],
          starterCode: `async function reviewStudentCode(code: string) {}`,
          expectedOutcome: 'Streaming AI code reviewer evaluating syntax, efficiency, and styling.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 9.1: Full-Stack SaaS Capstone Architecture & Evaluation',
          sheetName: 'SaaS_Capstone_Evaluation',
          description: 'Comprehensive 100-point capstone rubric evaluating system architecture, database, security, and AI agent integration.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: ['Production SaaS system design diagram', 'Live deployed URL test verification', 'Final Capstone Rubric'],
          rubric: [
            { criteria: 'Full-Stack Architecture & Cloud Deployment', points: 30 },
            { criteria: 'AI Agent / LLM Integration & Reliability', points: 30 },
            { criteria: 'Database & Security Hardening', points: 20 },
            { criteria: 'UI/UX Polish & Documentation', points: 20 }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// THE 9 ZERO-TO-HERO PAID COURSES
// =========================================================================
export const ZERO_TO_HERO_COURSES: ZeroToHeroCourse[] = [
  {
    detailedModules: LEVEL_1_MODULES,
    track: {
      id: 'track-level-1-html-foundations',
      title: 'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-1-modern-html5-fundamentals',
      badge: 'Step 1: Foundations',
      level: 'Beginner',
      levelIndex: 1,
      price: 29,
      originalPrice: 59,
      careerMilestone: 'Web Foundations Certified',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.98,
      reviewCount: 52,
      activeLearners: 340,
      lessonsCount: 8,
      duration: '3 Weeks',
      description: 'Master the foundational markup language of the Internet. Learn modern HTML5 boilerplate, semantic tags, forms, and Google Sheets classroom grading rubrics.',
      skills: ['HTML5', 'DOM Tree', 'Semantic Phrasing', 'Form Validation', 'SEO Meta Tags'],
      colorTheme: 'from-orange-500 via-amber-500 to-yellow-500',
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_2_MODULES,
    track: {
      id: 'track-level-2-css-mastery',
      title: 'Level 2: Modern CSS3 Mastery, Flexbox, Grid & Responsive UI',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-2-modern-css3-mastery',
      badge: 'Step 2: Styling',
      level: 'Beginner',
      levelIndex: 2,
      price: 39,
      originalPrice: 79,
      careerMilestone: 'Responsive UI & Layout Specialist',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.96,
      reviewCount: 44,
      activeLearners: 290,
      lessonsCount: 8,
      duration: '4 Weeks',
      description: 'Transform raw HTML into pixel-perfect responsive interfaces. Deep dive into Flexbox alignment, 2D CSS Grid dashboards, custom variables, and animations.',
      skills: ['CSS3', 'Flexbox', 'CSS Grid', 'Media Queries', 'Design Tokens', 'Animations'],
      colorTheme: 'from-blue-500 via-cyan-500 to-teal-500',
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_3_MODULES,
    track: {
      id: 'track-level-3-js-foundations',
      title: 'Level 3: JavaScript Core Foundations, Algorithms & DOM Manipulation',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-3-javascript-core-foundations',
      badge: 'Step 3: Logic',
      level: 'Beginner',
      levelIndex: 3,
      price: 49,
      originalPrice: 99,
      careerMilestone: 'Junior Interactive Web Developer',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.97,
      reviewCount: 68,
      activeLearners: 412,
      lessonsCount: 8,
      duration: '4 Weeks',
      description: 'Bring websites to life with programming logic. Master ES6+ syntax, arrays, objects, functions, event listeners, and interactive DOM manipulation.',
      skills: ['JavaScript ES6+', 'DOM Events', 'Array Methods', 'Lexical Scope', 'Algorithms'],
      colorTheme: 'from-yellow-500 via-amber-500 to-orange-500',
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_4_MODULES,
    track: {
      id: 'track-level-4-async-js',
      title: 'Level 4: Advanced Modern JavaScript, Async Patterns & RESTful APIs',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-4-advanced-javascript-async-apis',
      badge: 'Step 4: Asynchronous',
      level: 'Intermediate',
      levelIndex: 4,
      price: 59,
      originalPrice: 119,
      careerMilestone: 'Modern JavaScript Engineer',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.95,
      reviewCount: 39,
      activeLearners: 260,
      lessonsCount: 8,
      duration: '4 Weeks',
      description: 'Unlock asynchronous programming mastery. Understand the browser event loop, microtask queue, Promises, async/await, and remote API fetching.',
      skills: ['Event Loop', 'Promises', 'async/await', 'Fetch API', 'Error Handling', 'JSON'],
      colorTheme: 'from-amber-600 via-red-500 to-rose-600',
      popular: false,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_5_MODULES,
    track: {
      id: 'track-level-5-react-ts',
      title: 'Level 5: Frontend Engineering with React 19 & TypeScript',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-5-react19-typescript-engineering',
      badge: 'Step 5: Frameworks',
      level: 'Intermediate',
      levelIndex: 5,
      price: 79,
      originalPrice: 149,
      careerMilestone: 'React 19 & TypeScript Frontend Engineer',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.99,
      reviewCount: 82,
      activeLearners: 520,
      lessonsCount: 10,
      duration: '5 Weeks',
      description: 'Build enterprise single-page applications. Master React 19 functional components, custom hooks, state trees, and static typing with TypeScript.',
      skills: ['React 19', 'TypeScript', 'Custom Hooks', 'Component Lifecycle', 'State Management'],
      colorTheme: 'from-cyan-600 via-blue-600 to-indigo-600',
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_6_MODULES,
    track: {
      id: 'track-level-6-node-backend',
      title: 'Level 6: Full-Stack Backend Engineering with Node.js & Express',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-6-nodejs-express-backend',
      badge: 'Step 6: Backend',
      level: 'Intermediate',
      levelIndex: 6,
      price: 89,
      originalPrice: 169,
      careerMilestone: 'Full-Stack API & Backend Architect',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.94,
      reviewCount: 31,
      activeLearners: 198,
      lessonsCount: 10,
      duration: '5 Weeks',
      description: 'Engineer high-throughput server backends. Design RESTful APIs with Node.js, Express routers, middleware pipelines, CORS, and request validations.',
      skills: ['Node.js', 'Express', 'REST Architecture', 'Middleware', 'Error Handling', 'CORS'],
      colorTheme: 'from-emerald-600 via-green-600 to-teal-700',
      popular: false,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_7_MODULES,
    track: {
      id: 'track-level-7-postgres-supabase',
      title: 'Level 7: Database Architecture, PostgreSQL & Supabase Cloud Storage',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-7-postgresql-supabase-databases',
      badge: 'Step 7: Databases',
      level: 'Advanced',
      levelIndex: 7,
      price: 99,
      originalPrice: 189,
      careerMilestone: 'Cloud Database & PostgreSQL Architect',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.97,
      reviewCount: 46,
      activeLearners: 275,
      lessonsCount: 10,
      duration: '5 Weeks',
      description: 'Design production relational databases. Master 3NF normalization, foreign key cascades, complex multi-table SQL joins, and Supabase Row Level Security.',
      skills: ['PostgreSQL', 'SQL Queries', 'Supabase RLS', '3NF Normalization', 'Indexes'],
      colorTheme: 'from-indigo-600 via-violet-600 to-purple-600',
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_8_MODULES,
    track: {
      id: 'track-level-8-security-devops',
      title: 'Level 8: Web Security, JWT/OAuth Authentication & DevOps CI/CD',
      category: 'stem',
      categoryLabel: 'STEM & Web Dev',
      slug: 'level-8-security-auth-devops-cicd',
      badge: 'Step 8: DevOps & Security',
      level: 'Advanced',
      levelIndex: 8,
      price: 119,
      originalPrice: 229,
      careerMilestone: 'Production Security & DevOps Engineer',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 4.96,
      reviewCount: 35,
      activeLearners: 180,
      lessonsCount: 10,
      duration: '5 Weeks',
      description: 'Protect your applications against cyber threats. Implement OWASP security standards, OAuth 2.0, secure JWT cookies, Docker containers, and GitHub Actions.',
      skills: ['OWASP Security', 'JWT & OAuth', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'Cloud Deploy'],
      colorTheme: 'from-purple-600 via-pink-600 to-rose-600',
      popular: false,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_9_MODULES,
    track: {
      id: 'track-level-9-fullstack-ai-hero',
      title: 'Level 9: Full-Stack AI SaaS Capstone: Autonomous AI Agents & Cloud Scale',
      category: 'stem',
      categoryLabel: 'STEM & AI Hero',
      slug: 'level-9-fullstack-ai-saas-hero',
      badge: '🏆 Step 9: HERO',
      level: 'Advanced',
      levelIndex: 9,
      price: 149,
      originalPrice: 299,
      careerMilestone: '🏆 Full-Stack AI Software Hero',
      isPaid: true,
      instructor: {
        name: 'Joven Nel Jed',
        role: 'Founder & Lead Engineering Faculty',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'Epicademy Lead Architect',
      },
      rating: 5.0,
      reviewCount: 110,
      activeLearners: 640,
      lessonsCount: 12,
      duration: '6 Weeks',
      description: 'The pinnacle capstone. Architect and deploy a complete production AI SaaS platform with autonomous LLM agents, vector embeddings, Stripe subscriptions, and high-scale cloud distribution.',
      skills: ['AI Agents', 'LLM Function Calling', 'Stripe Billing', 'Cloud Architecture', 'Vector Search', 'Full-Stack Hero'],
      colorTheme: 'from-emerald-500 via-teal-500 to-blue-600',
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  TESDA_CSS_NC2_COURSE
];

// Helper to get detailed course by id
export function getZeroToHeroCourse(trackId: string): ZeroToHeroCourse | undefined {
  return ZERO_TO_HERO_COURSES.find(c => c.track.id === trackId);
}

// Map all tracks for listing
export const ZERO_TO_HERO_TRACKS: Track[] = ZERO_TO_HERO_COURSES.map(c => ({
  ...c.track,
  modules: c.detailedModules.map((m, mIdx) => ({
    id: `mod-${c.track.id}-${mIdx + 1}`,
    track_id: c.track.id,
    title: m.title,
    duration: m.duration,
    order_index: mIdx + 1,
    lessons: m.lessons.length,
    topics: m.lessons.map(l => l.title),
    lessonItems: m.lessons.map((l, lIdx) => ({
      id: `les-${c.track.id}-${mIdx + 1}-${lIdx + 1}`,
      module_id: `mod-${c.track.id}-${mIdx + 1}`,
      title: l.title,
      duration: l.duration,
      video_url: l.videoUrl,
      content: l.theoryContent,
      order_index: lIdx + 1,
    }))
  }))
}));
