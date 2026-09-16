import type { Track, ExamItem } from '../types';
import { TESDA_CSS_NC2_COURSE } from './tesdaCssNc2CourseData';

export interface DetailedLesson {
  title: string;
  duration: string;
  videoUrl: string;
  videoTitle: string;
  objective: string;
  theoryContent: string;
  codeSnippet: string;
  handsOnActivity?: {
    title: string;
    instructions: string[];
    starterCode: string;
    expectedOutcome: string;
  };
  exam?: ExamItem;
  googleSheetsAssignment?: {
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

export const LEVEL_1_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: HTML5 Document Structure, Semantic Architecture & Accessible Landmark Elements",
    "duration": "1 Week",
    "overview": "Master the foundational anatomy of modern HTML5 documents, viewport scaling, character sets, and semantic landmarks.",
    "lessons": [
      {
        "title": "Document Anatomy, DOCTYPE & Viewport Configuration",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "HTML5 Boilerplate & Modern Viewport Standards",
        "objective": "Construct a standards-compliant HTML5 boilerplate including utf-8 meta tag, responsive mobile viewport, and document language declaration.",
        "theoryContent": "Every modern web document starts with `<!DOCTYPE html>`, which instructs the browser engine to render in strict standards mode rather than legacy quirks mode. The viewport meta tag ensures mobile browsers do not scale pages down to virtual 980px desktop screens.",
        "codeSnippet": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>KEZJED Solutions - Enterprise Architecture</title>\n</head>\n<body>\n  <header><h1>Welcome to Epicademy</h1></header>\n</body>\n</html>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Document Anatomy, DOCTYPE & Viewport Configuration",
          "instructions": [
            "Create an index.html file with <!DOCTYPE html>.",
            "Add html tag with lang=\"en\".",
            "Include meta charset=\"UTF-8\" and responsive viewport meta tag.",
            "Verify document renders in standards mode using browser DevTools."
          ],
          "starterCode": "<!-- Build standard HTML5 boilerplate with utf-8 and responsive viewport -->\n",
          "expectedOutcome": "A pristine HTML5 document that validates without warnings in the W3C markup validator."
        },
        "exam": {
          "title": "Document Anatomy, DOCTYPE & Viewport Configuration - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-document-anatomy-doctype-viewp",
              "question": "What is the primary function of the <!DOCTYPE html> declaration?",
              "options": [
                "It instructs the browser rendering engine to parse the document in standards mode rather than quirks mode",
                "It links the external CSS stylesheet to the document head",
                "It downloads the latest HTML5 polyfills from Google CDN",
                "It activates the JavaScript runtime compiler in the client"
              ],
              "correctIndex": 0,
              "explanation": "The DOCTYPE declaration informs the web browser which version of HTML is being used, ensuring strict standards mode rendering."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Document Anatomy, DOCTYPE & Viewport Configuration - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Document Anatomy, DOCTYPE & Viewport Configuration. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Semantic Landmark Elements: Header, Nav, Main, Aside, Footer",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Semantic Landmarks & Document Outlining",
        "objective": "Structure page layouts using header, nav, main, aside, and footer elements to provide inherent accessibility without div-soup.",
        "theoryContent": "Modern semantic elements communicate meaning to both browsers and assistive devices like screen readers. A page should possess exactly one `<main>` landmark element representing the core unique content of that document.",
        "codeSnippet": "<header role=\"banner\">\n  <nav aria-label=\"Global Navigation\">\n    <ul><li><a href=\"/\">Home</a></li></ul>\n  </nav>\n</header>\n<main id=\"content\">\n  <article><h2>Course Curriculum</h2></article>\n</main>\n<aside aria-label=\"Related Topics\">\n  <p>Suggested reading: CSS3 Box Model</p>\n</aside>\n<footer><p>&copy; 2026 KEZJED SOLUTIONS</p></footer>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Semantic Landmark Elements: Header, Nav, Main, Aside, Footer",
          "instructions": [
            "Replace generic div containers with semantic header, nav, main, aside, and footer tags.",
            "Ensure there is only one main element on the page.",
            "Add aria-label to nav elements to distinguish multiple navigation bars."
          ],
          "starterCode": "<div class=\"header\">...</div>\n<div class=\"content\">...</div>\n<div class=\"footer\">...</div>",
          "expectedOutcome": "A semantically outlined document easily navigable by screen readers through landmark navigation shortcuts."
        },
        "exam": {
          "title": "Semantic Landmark Elements: Header, Nav, Main, Aside, Footer - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-semantic-landmark-elements-hea",
              "question": "How many <main> landmark elements should be visible and active simultaneously on a single web document?",
              "options": [
                "Exactly one",
                "Up to three for multi-column layouts",
                "Unlimited as long as classes are unique",
                "None; main is deprecated in HTML5"
              ],
              "correctIndex": 0,
              "explanation": "W3C and WCAG guidelines mandate that a document should have only one visible <main> landmark representing the unique primary content."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Semantic Landmark Elements: Header, Nav, Main, Aside, Footer - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Semantic Landmark Elements: Header, Nav, Main, Aside, Footer. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Content Hierarchy & Heading Structure (H1-H6) for Screen Readers",
        "duration": "22 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Accessible Heading Hierarchy (H1 through H6)",
        "objective": "Engineer an unbroken heading tree from H1 to H6, avoiding skipped heading levels and styling headings purely with CSS.",
        "theoryContent": "Screen reader users navigate complex pages by jumping from heading to heading. Skipping heading levels (e.g. from H1 directly to H3) creates cognitive confusion and breaks WCAG 2.2 AA accessibility guidelines.",
        "codeSnippet": "<header>\n  <h1>Full-Stack Engineering Program</h1>\n</header>\n<main>\n  <section>\n    <h2>Zero-to-Hero Tracks</h2>\n    <article>\n      <h3>Level 1: HTML5 Foundations</h3>\n      <p>Semantic structuring...</p>\n    </article>\n  </section>\n</main>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Content Hierarchy & Heading Structure (H1-H6) for Screen Readers",
          "instructions": [
            "Design an index page with an unbroken hierarchy from H1 down to H3.",
            "Verify that visual sizes are controlled by CSS classes and not heading tags.",
            "Run Axe DevTools or Lighthouse to audit heading level continuity."
          ],
          "starterCode": "<!-- Create an accessible heading structure without skipping levels -->",
          "expectedOutcome": "An audited heading outline that screen readers can parse seamlessly with zero accessibility violations."
        },
        "exam": {
          "title": "Content Hierarchy & Heading Structure (H1-H6) for Screen Readers - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-content-hierarchy-heading-stru",
              "question": "Why is skipping heading levels (such as jumping from H1 directly to H3) bad practice?",
              "options": [
                "It disorients screen reader users who rely on heading trees to mentally map the document hierarchy",
                "It slows down browser CSS rendering speeds by 40%",
                "It causes modern browsers to throw uncaught JavaScript exceptions",
                "It prevents Google from crawling images on the page"
              ],
              "correctIndex": 0,
              "explanation": "Assistive technologies use headings to generate an interactive table of contents; skipped levels mislead users about document relationships."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Content Hierarchy & Heading Structure (H1-H6) for Screen Readers - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Content Hierarchy & Heading Structure (H1-H6) for Screen Readers. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Phrasing Elements, Text Semantics & ARIA Landmarks",
        "duration": "24 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Text Semantics: strong, em, mark, code, and ARIA Roles",
        "objective": "Apply appropriate phrasing elements (strong, em, time, abbr, code) and complement with ARIA attributes when native HTML falls short.",
        "theoryContent": "Distinguish between purely visual tags (`<b>`, `<i>`) and semantic phrasing elements (`<strong>`, `<em>`). Screen readers adjust vocal pitch and cadence for `<em>` and `<strong>`, conveying true emotional and informational intent.",
        "codeSnippet": "<p>\n  Registration deadline is <time datetime=\"2026-10-15T23:59:59Z\">October 15, 2026</time>.\n  Please run <code>npm install</code> to initiate dependencies.\n  <strong>Warning:</strong> Late submissions will not be accepted.\n</p>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Phrasing Elements, Text Semantics & ARIA Landmarks",
          "instructions": [
            "Annotate dates using the time element with machine-readable datetime attributes.",
            "Replace purely presentational b and i tags with strong and em where semantic emphasis is needed.",
            "Use code and kbd tags for inline code samples and keyboard shortcuts."
          ],
          "starterCode": "<p>The meeting is on Dec 20. Type Ctrl+C to stop.</p>",
          "expectedOutcome": "Semantic inline text containing machine-readable metadata and accurate screen-reader inflections."
        },
        "exam": {
          "title": "Phrasing Elements, Text Semantics & ARIA Landmarks - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-phrasing-elements-text-semanti",
              "question": "What is the key difference between <strong> and <b> in modern HTML5?",
              "options": [
                "<strong> conveys strong semantic importance to screen readers and search engines, while <b> is purely typographic styling",
                "<b> is faster for the browser to render",
                "<strong> requires JavaScript to function",
                "<b> automatically applies an underline to the text"
              ],
              "correctIndex": 0,
              "explanation": "<strong> is semantic indicating serious importance, whereas <b> represents stylistic offset without added meaning."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Phrasing Elements, Text Semantics & ARIA Landmarks - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Phrasing Elements, Text Semantics & ARIA Landmarks. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Forms Architecture, Client-Side Constraint Validation & Accessible Input Types",
    "duration": "1 Week",
    "overview": "Build robust, accessible user input forms featuring native HTML5 constraint validation, custom regex patterns, and secure submission protocols.",
    "lessons": [
      {
        "title": "Modern Input Types, Placeholders & Floating Labels",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "HTML5 Form Controls, Labels & Input Types",
        "objective": "Implement email, tel, url, number, date, and search inputs with accessible <label for=\"...\"> linkages.",
        "theoryContent": "Never use the placeholder attribute as a substitute for a genuine `<label>`. When a user types into an input, the placeholder disappears, leaving users with cognitive difficulties or brief distractions unaware of what the field requested.",
        "codeSnippet": "<form action=\"/api/enroll\" method=\"POST\">\n  <div class=\"form-group\">\n    <label for=\"student-email\">Corporate Email Address:</label>\n    <input type=\"email\" id=\"student-email\" name=\"email\" required autocomplete=\"email\">\n  </div>\n  <button type=\"submit\">Enroll Now</button>\n</form>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Modern Input Types, Placeholders & Floating Labels",
          "instructions": [
            "Bind every input element to a corresponding label using matching for and id attributes.",
            "Use specific type values like type=\"email\" and type=\"tel\" to trigger specialized mobile keyboards.",
            "Add autocomplete attributes to streamline browser password and autofill managers."
          ],
          "starterCode": "<form>\n  <input placeholder=\"Enter your email\">\n</form>",
          "expectedOutcome": "A form where clicking any label text automatically focuses the corresponding input control."
        },
        "exam": {
          "title": "Modern Input Types, Placeholders & Floating Labels - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-modern-input-types-placeholder",
              "question": "Why should the placeholder attribute never replace an explicit <label> element?",
              "options": [
                "Placeholders vanish upon user typing, reducing usability and breaking screen reader accessibility",
                "Placeholders cannot contain letters, only numbers",
                "Placeholders block HTTP POST submission payloads",
                "Placeholders cause forms to submit automatically without pressing submit"
              ],
              "correctIndex": 0,
              "explanation": "Placeholders disappear as soon as typing begins, causing accessibility barriers and high cognitive load."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Modern Input Types, Placeholders & Floating Labels - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Modern Input Types, Placeholders & Floating Labels. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Native Constraint Validation: pattern, required, min/max",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "HTML5 Constraint Validation API & RegEx Patterns",
        "objective": "Enforce client-side validation rules natively using required, pattern, minlength, maxlength, min, and max attributes without third-party libraries.",
        "theoryContent": "The HTML5 Constraint Validation API provides instant, native browser checks prior to form submission. Browsers intercept invalid submissions, focus the offending field, and present a localized validation bubble.",
        "codeSnippet": "<input\n  type=\"text\"\n  id=\"ph-mobile\"\n  name=\"mobile\"\n  pattern=\"^(09|\\+639)\\d{9}$\"\n  placeholder=\"09171234567\"\n  required\n  title=\"Please enter a valid 11-digit Philippine mobile number (e.g. 09171234567).\"\n>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Native Constraint Validation: pattern, required, min/max",
          "instructions": [
            "Add required flags to mandatory input elements.",
            "Define a regular expression in the pattern attribute for a Philippine phone number.",
            "Provide a descriptive title attribute explaining the required pattern format."
          ],
          "starterCode": "<input type=\"text\" name=\"mobile\">",
          "expectedOutcome": "A form that halts submission and warns the user when entering incorrect formats without requiring custom JS."
        },
        "exam": {
          "title": "Native Constraint Validation: pattern, required, min/max - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-native-constraint-validation-p",
              "question": "What happens when a user attempts to submit a form containing an input with required that is currently empty?",
              "options": [
                "The browser cancels submission, focuses the empty input, and displays a localized validation tooltip",
                "The form converts the empty field to null and submits anyway",
                "The page refreshes and throws a 500 server error",
                "The browser executes a window.alert() prompt"
              ],
              "correctIndex": 0,
              "explanation": "The browser halts form dispatch and renders a built-in constraint validation message."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Native Constraint Validation: pattern, required, min/max - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Native Constraint Validation: pattern, required, min/max. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Accessible Selection: Dropdowns, Radio Groups & Datalists",
        "duration": "24 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Dropdowns, Option Groups & Radios",
        "objective": "Build accessible selection interfaces using <select>, <optgroup>, <datalist>, and custom radio/checkbox groupings.",
        "theoryContent": "For mutually exclusive selections, radio buttons sharing the same name attribute must be wrapped in a fieldset. For long option lists, datalist provides searchable autocomplete while allowing custom entries.",
        "codeSnippet": "<fieldset>\n  <legend>Select Program Track</legend>\n  <label><input type=\"radio\" name=\"track\" value=\"web\" checked> Web Engineering</label>\n  <label><input type=\"radio\" name=\"track\" value=\"ai\"> AI Systems</label>\n</fieldset>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Accessible Selection: Dropdowns, Radio Groups & Datalists",
          "instructions": [
            "Wrap grouped radio buttons in a fieldset with a clear legend.",
            "Ensure all radio items share the identical name attribute.",
            "Implement a datalist for a searchable country/province input field."
          ],
          "starterCode": "<input type=\"radio\" value=\"1\"> Option 1\n<input type=\"radio\" value=\"2\"> Option 2",
          "expectedOutcome": "An accessible radio group that screen readers announce as a unified group with the legend title."
        },
        "exam": {
          "title": "Accessible Selection: Dropdowns, Radio Groups & Datalists - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-accessible-selection-dropdowns",
              "question": "What HTML attribute groups radio buttons together so only one can be selected at a time?",
              "options": [
                "The name attribute must be identical across the radio options",
                "The id attribute must be identical across the options",
                "The value attribute must be shared",
                "The type attribute must be set to radio-group"
              ],
              "correctIndex": 0,
              "explanation": "Browsers treat radio buttons with the same name attribute as a mutually exclusive set."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Accessible Selection: Dropdowns, Radio Groups & Datalists - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Accessible Selection: Dropdowns, Radio Groups & Datalists. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Form Submission Protocols: GET vs POST, Enctype & Payload Security",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Form Submission Protocols & File Uploads",
        "objective": "Select appropriate HTTP methods, multipart/form-data for file uploads, and handle client-side form reset behavior.",
        "theoryContent": "Sensitive user credentials and data payloads must never use GET, which appends parameters directly into the browser URL and server access logs. File uploads strictly demand method=\"POST\" and enctype=\"multipart/form-data\".",
        "codeSnippet": "<form action=\"/api/upload-resume\" method=\"POST\" enctype=\"multipart/form-data\">\n  <label for=\"resume-doc\">Upload PDF Portfolio:</label>\n  <input type=\"file\" id=\"resume-doc\" name=\"resume\" accept=\".pdf\" required>\n  <button type=\"submit\">Submit Application</button>\n</form>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Form Submission Protocols: GET vs POST, Enctype & Payload Security",
          "instructions": [
            "Configure a form for secure POST submission.",
            "Set enctype=\"multipart/form-data\" for file handling.",
            "Restrict allowable file types using the accept attribute."
          ],
          "starterCode": "<form action=\"/upload\"><input type=\"file\"></form>",
          "expectedOutcome": "A secure form that correctly encodes binary file uploads into multi-part payloads."
        },
        "exam": {
          "title": "Form Submission Protocols: GET vs POST, Enctype & Payload Security - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-form-submission-protocols-get-",
              "question": "Which enctype is required when submitting file inputs via an HTML form?",
              "options": [
                "multipart/form-data",
                "application/x-www-form-urlencoded",
                "text/plain",
                "application/json"
              ],
              "correctIndex": 0,
              "explanation": "File uploads require multipart/form-data so binary streams can be safely segmented and transmitted."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Form Submission Protocols: GET vs POST, Enctype & Payload Security - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Form Submission Protocols: GET vs POST, Enctype & Payload Security. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Responsive Media, Tables & Modern SEO Document Optimization",
    "duration": "1 Week",
    "overview": "Integrate responsive picture elements, accessible data tables with scopes, and Open Graph social sharing metadata.",
    "lessons": [
      {
        "title": "Responsive Images with <picture>, srcset & sizes",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Responsive Images with srcset and sizes",
        "objective": "Deliver resolution-optimized images using srcset, sizes, and WebP/AVIF format fallbacks.",
        "theoryContent": "Sending a 4K image to a mobile phone wastes bandwidth and delays First Contentful Paint. The <picture> element allows browsers to download the smallest suitable asset based on device pixel ratio and screen width.",
        "codeSnippet": "<picture>\n  <source srcset=\"hero-large.webp 1200w, hero-small.webp 480w\" type=\"image/webp\">\n  <img src=\"hero-fallback.jpg\" alt=\"KEZJED Solutions Developer Team collaborating\" loading=\"lazy\">\n</picture>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Responsive Images with <picture>, srcset & sizes",
          "instructions": [
            "Implement a picture element with modern WebP sources and a JPEG fallback.",
            "Configure srcset descriptors (w) and sizes queries.",
            "Add loading=\"lazy\" and descriptive alt text for accessibility and performance."
          ],
          "starterCode": "<img src=\"large-image.jpg\">",
          "expectedOutcome": "A responsive image implementation that loads high-performance WebP formats on supporting browsers."
        },
        "exam": {
          "title": "Responsive Images with <picture>, srcset & sizes - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-responsive-images-with-picture",
              "question": "What is the performance advantage of adding loading=\"lazy\" to an image tag?",
              "options": [
                "It defers downloading the image until it approaches the user viewport",
                "It converts JPEG files to WebP on the fly in the browser",
                "It compresses the image by 50% using WebAssembly",
                "It displays a low-resolution blur placeholder without network requests"
              ],
              "correctIndex": 0,
              "explanation": "Native lazy loading delays asset fetch until the image is near the viewport, saving data and speeding up initial render."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Responsive Images with <picture>, srcset & sizes - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Responsive Images with <picture>, srcset & sizes. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Accessible Data Tables: <thead>, <tbody>, <th> and scope Attributes",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Accessible HTML Tables & Scope Attributes",
        "objective": "Build semantic tabular layouts with captions, column headers, and row scopes for screen reader row-by-row traversal.",
        "theoryContent": "Never use HTML tables for visual layout—use CSS Grid/Flexbox instead. When presenting tabular data, pair <th> with scope=\"col\" or scope=\"row\" so screen readers read the column header before every data cell value.",
        "codeSnippet": "<table>\n  <caption>Q3 Technical Certification Statistics</caption>\n  <thead>\n    <tr><th scope=\"col\">Student</th><th scope=\"col\">Track</th><th scope=\"col\">Score</th></tr>\n  </thead>\n  <tbody>\n    <tr><th scope=\"row\">Juan Dela Cruz</th><td>CSS NC II</td><td>98%</td></tr>\n  </tbody>\n</table>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Accessible Data Tables: <thead>, <tbody>, <th> and scope Attributes",
          "instructions": [
            "Create a <table> with a descriptive <caption> element.",
            "Define header cells with <th> and appropriate scope attributes.",
            "Structure data rows into <thead>, <tbody>, and <tfoot> blocks."
          ],
          "starterCode": "<table><tr><td>Name</td><td>Score</td></tr></table>",
          "expectedOutcome": "A fully accessible table that screen reader users can navigate cell-by-cell with full header context."
        },
        "exam": {
          "title": "Accessible Data Tables: <thead>, <tbody>, <th> and scope Attributes - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-accessible-data-tables-thead-t",
              "question": "What is the purpose of the scope=\"col\" attribute on a <th> element?",
              "options": [
                "It informs assistive screen readers that the header cell applies to all cells in that column",
                "It sets the visual column width in CSS",
                "It prevents sorting on that particular column",
                "It exports the column data into a CSV file"
              ],
              "correctIndex": 0,
              "explanation": "The scope attribute explicitly associates header cells with data cells in assistive speech technology."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Accessible Data Tables: <thead>, <tbody>, <th> and scope Attributes - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Accessible Data Tables: <thead>, <tbody>, <th> and scope Attributes. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Embedded Multimedia: <video>, <audio> & WebVTT Captions",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "HTML5 Video, Audio & Closed Captions",
        "objective": "Embed native video and audio players with WebVTT closed captions for hearing-impaired accessibility.",
        "theoryContent": "Video accessibility requires closed captions via the `<track kind=\"subtitles\">` element. Native media controls ensure keyboard users can pause, seek, and toggle volume without mouse interaction.",
        "codeSnippet": "<video controls poster=\"/thumbnail.jpg\" width=\"800\">\n  <source src=\"lecture.mp4\" type=\"video/mp4\">\n  <track src=\"captions-en.vtt\" kind=\"captions\" srclang=\"en\" label=\"English Captions\" default>\n  Your browser does not support HTML5 video.\n</video>",
        "handsOnActivity": {
          "title": "Hands-On Lab: Embedded Multimedia: <video>, <audio> & WebVTT Captions",
          "instructions": [
            "Embed a video element with native controls and poster attributes.",
            "Supply multiple source formats for cross-browser fallback.",
            "Attach a WebVTT file using the track element with kind=\"captions\"."
          ],
          "starterCode": "<video src=\"video.mp4\"></video>",
          "expectedOutcome": "An accessible media player with toggleable closed captions and keyboard-controllable playback."
        },
        "exam": {
          "title": "Embedded Multimedia: <video>, <audio> & WebVTT Captions - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-embedded-multimedia-video-audi",
              "question": "Which HTML element provides closed captions and subtitles to a <video> player?",
              "options": [
                "<track kind=\"captions\">",
                "<caption>",
                "<subtitle>",
                "<audio sync=\"true\">"
              ],
              "correctIndex": 0,
              "explanation": "The <track> element loads timed text tracks like WebVTT for subtitles and captions."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Embedded Multimedia: <video>, <audio> & WebVTT Captions - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Embedded Multimedia: <video>, <audio> & WebVTT Captions. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Open Graph Meta Protocol, Twitter Cards & Search Engine Indexing",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "SEO Meta Tags, Open Graph & Social Cards",
        "objective": "Configure Open Graph and Twitter card meta tags so links display rich cards when shared across social channels.",
        "theoryContent": "When users share web links on Facebook, LinkedIn, or Discord, crawler bots parse `<meta property=\"og:title\">`, og:image, and og:description. Missing tags cause blank preview snippets, drastically lowering click-through rates.",
        "codeSnippet": "<meta property=\"og:title\" content=\"Level 1 Web Engineering | KEZJED SOLUTIONS\">\n<meta property=\"og:description\" content=\"Master modern web standards and architectural fundamentals.\">\n<meta property=\"og:image\" content=\"https://epicademy.ph/og-card.png\">\n<meta property=\"og:type\" content=\"website\">\n<meta name=\"twitter:card\" content=\"summary_large_image\">",
        "handsOnActivity": {
          "title": "Hands-On Lab: Open Graph Meta Protocol, Twitter Cards & Search Engine Indexing",
          "instructions": [
            "Add canonical link tags to prevent duplicate content penalties.",
            "Specify Open Graph tags for title, description, image, and url.",
            "Configure twitter:card meta tags for Twitter/X rich card previews."
          ],
          "starterCode": "<!-- Add Open Graph and Twitter card meta tags -->",
          "expectedOutcome": "Social previews that render full-bleed graphics and branded typography when shared across platforms."
        },
        "exam": {
          "title": "Open Graph Meta Protocol, Twitter Cards & Search Engine Indexing - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-open-graph-meta-protocol-twitt",
              "question": "Which meta property specifies the thumbnail image displayed when a link is shared on social platforms?",
              "options": [
                "og:image",
                "meta-icon",
                "social:thumb",
                "link:preview"
              ],
              "correctIndex": 0,
              "explanation": "The Open Graph Protocol standard uses og:image to specify social sharing preview graphics."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Open Graph Meta Protocol, Twitter Cards & Search Engine Indexing - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Open Graph Meta Protocol, Twitter Cards & Search Engine Indexing. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_2_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: CSS Box Model, Selectors, Specificity & Custom Properties",
    "duration": "1 Week",
    "overview": "Master the core rendering engine of CSS: border-box calculation, specificity weighting, combinators, and dynamic CSS custom properties.",
    "lessons": [
      {
        "title": "Box Model Mechanics: Box-Sizing Border-Box vs Content-Box",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "CSS Box Model In-Depth & Box Sizing",
        "objective": "Calculate element dimensions accurately across margins, borders, padding, and apply universal border-box sizing across projects.",
        "theoryContent": "Under legacy `box-sizing: content-box`, padding and borders add to specified widths, causing layout breaks. Applying `box-sizing: border-box` ensures width defines the outer boundary including padding and borders.",
        "codeSnippet": "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.card {\n  width: 320px;\n  padding: 24px;\n  border: 2px solid #3b82f6;\n  /* Total rendered width remains exactly 320px */\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Box Model Mechanics: Box-Sizing Border-Box vs Content-Box",
          "instructions": [
            "Apply universal border-box reset using *, *::before, *::after.",
            "Build two adjacent cards with 24px padding and 300px width.",
            "Inspect element metrics in browser DevTools to verify outer dimensions."
          ],
          "starterCode": ".card { width: 300px; padding: 20px; }",
          "expectedOutcome": "A pixel-perfect card container whose rendered width equals its declared CSS width regardless of padding."
        },
        "exam": {
          "title": "Box Model Mechanics: Box-Sizing Border-Box vs Content-Box - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-box-model-mechanics-box-sizing",
              "question": "If an element has width: 200px, padding: 20px, and box-sizing: border-box, what is its total rendered width on screen?",
              "options": [
                "200px",
                "240px",
                "220px",
                "160px"
              ],
              "correctIndex": 0,
              "explanation": "With border-box sizing, padding is absorbed inside the declared width, maintaining exactly 200px total outer width."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Box Model Mechanics: Box-Sizing Border-Box vs Content-Box - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Box Model Mechanics: Box-Sizing Border-Box vs Content-Box. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Specificity Hierarchy, Pseudo-Classes & Pseudo-Elements",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "CSS Specificity Wars, Cascade & Pseudo Selectors",
        "objective": "Calculate specificity vectors (Inline, ID, Class/Attribute, Element) and manipulate element states using :hover, :focus-visible, and ::before/::after.",
        "theoryContent": "CSS conflicts are resolved by specificity score: (Inline, IDs, Classes/Attributes/Pseudo-classes, Elements/Pseudo-elements). Avoid using `!important` as it breaks cascade maintainability.",
        "codeSnippet": "/* Specificity: 0, 1, 1 */\n.btn:hover {\n  background-color: #2563eb;\n}\n/* Accessible focus outline */\n.btn:focus-visible {\n  outline: 3px solid #facc15;\n  outline-offset: 2px;\n}\n/* Decorative indicator */\n.badge::before {\n  content: \"●\";\n  margin-right: 6px;\n  color: #10b981;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Specificity Hierarchy, Pseudo-Classes & Pseudo-Elements",
          "instructions": [
            "Calculate specificity for 4 conflicting CSS selectors.",
            "Implement accessible focus styling using :focus-visible.",
            "Inject decorative icons using ::before pseudo-elements."
          ],
          "starterCode": ".btn { outline: none; }",
          "expectedOutcome": "Clean interactive styles that respond to keyboard tab navigation without breaking accessibility standards."
        },
        "exam": {
          "title": "Specificity Hierarchy, Pseudo-Classes & Pseudo-Elements - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-specificity-hierarchy-pseudo-c",
              "question": "Which selector possesses the highest CSS specificity score?",
              "options": [
                "#main-nav .menu-item",
                ".nav-container .menu-list .item",
                "header nav ul li a",
                "a:hover"
              ],
              "correctIndex": 0,
              "explanation": "The presence of an ID selector (#main-nav) gives it a (1, 1, 0) score, beating any number of combined class selectors."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Specificity Hierarchy, Pseudo-Classes & Pseudo-Elements - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Specificity Hierarchy, Pseudo-Classes & Pseudo-Elements. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "CSS Custom Properties (Variables) & Systemic Design Tokens",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "CSS Variables, Scoping & Design Systems",
        "objective": "Declare root design tokens for colors, spacing, and typography, and override them dynamically inside component scopes.",
        "theoryContent": "CSS custom properties (`--primary-color`) cascade and inherit like ordinary CSS properties. Unlike Sass variables, CSS variables are evaluated at runtime by the browser, enabling instantaneous theme toggling without recompilation.",
        "codeSnippet": ":root {\n  --color-primary: #3b82f6;\n  --color-surface: #ffffff;\n  --space-md: 1.5rem;\n  --radius-lg: 0.75rem;\n}\n[data-theme=\"dark\"] {\n  --color-primary: #60a5fa;\n  --color-surface: #0f172a;\n}\n.card {\n  background: var(--color-surface);\n  padding: var(--space-md);\n  border-radius: var(--radius-lg);\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: CSS Custom Properties (Variables) & Systemic Design Tokens",
          "instructions": [
            "Define systemic tokens in the :root selector.",
            "Create a data-theme=\"dark\" attribute selector overriding color tokens.",
            "Bind UI cards to custom property tokens."
          ],
          "starterCode": ":root { /* define your palette variables */ }",
          "expectedOutcome": "A theme-switchable UI card whose colors update instantly when toggling the data-theme attribute."
        },
        "exam": {
          "title": "CSS Custom Properties (Variables) & Systemic Design Tokens - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-css-custom-properties-variable",
              "question": "What happens when a referenced CSS variable (e.g. var(--accent)) is undefined?",
              "options": [
                "It falls back to the provided fallback parameter or initial/inherited value",
                "The browser throws a CSS parse fatal exception",
                "The entire stylesheet is discarded",
                "The element vanishes with display: none"
              ],
              "correctIndex": 0,
              "explanation": "CSS variables support fallback defaults like var(--accent, #3b82f6) and safely revert to inherited values if absent."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "CSS Custom Properties (Variables) & Systemic Design Tokens - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for CSS Custom Properties (Variables) & Systemic Design Tokens. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "CSS Reset vs Normalize & Modern Reset Standards",
        "duration": "24 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Modern CSS Resets in 2026",
        "objective": "Implement an industry-standard modern CSS reset that establishes consistent cross-browser baseline styles without stripping essential accessibility features.",
        "theoryContent": "Early resets aggressively eliminated all margins and list bullets. Modern resets preserve accessible form fonts, prevent overflow issues on media elements with `max-width: 100%`, and smooth scroll behaviors.",
        "codeSnippet": "/* Modern CSS Reset */\nhtml {\n  -webkit-text-size-adjust: 100%;\n  scroll-behavior: smooth;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: CSS Reset vs Normalize & Modern Reset Standards",
          "instructions": [
            "Create a modern reset snippet with font inheritance for inputs.",
            "Ensure all media elements have display: block and max-width: 100%.",
            "Test consistency across Chrome, Safari, and Firefox."
          ],
          "starterCode": "/* Write a modern, non-destructive CSS reset */",
          "expectedOutcome": "A unified baseline stylesheet eliminating cross-browser layout quirks and image overflows."
        },
        "exam": {
          "title": "CSS Reset vs Normalize & Modern Reset Standards - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-css-reset-vs-normalize-modern-",
              "question": "Why should input, button, textarea, and select elements have font: inherit in modern CSS resets?",
              "options": [
                "Browsers by default assign independent operating system fonts to form controls rather than inheriting the body font",
                "To reduce font file downloads from Google Fonts",
                "To make form inputs responsive on mobile devices",
                "To allow forms to be validated by the HTML validator"
              ],
              "correctIndex": 0,
              "explanation": "Form controls historically do not inherit body font styles by default; font: inherit restores typographic unity."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "CSS Reset vs Normalize & Modern Reset Standards - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for CSS Reset vs Normalize & Modern Reset Standards. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Modern Layout Systems: Flexbox & CSS Grid Mastery",
    "duration": "1 Week",
    "overview": "Build complex, responsive 1D and 2D layouts using CSS Flexbox and CSS Grid without hardcoded widths or float hacks.",
    "lessons": [
      {
        "title": "Flexbox Main Axis, Cross Axis, Flex-Grow & Flex-Shrink",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Mastering Flexbox Direction & Growth Factors",
        "objective": "Coordinate main axis (row/column) distribution, flex-grow ratios, and flex-shrink resilience to construct adaptive UI toolbars.",
        "theoryContent": "Flexbox distributes elements along a primary main axis and a perpendicular cross axis. The `flex: 1 1 0%` shorthand ensures child items share available space proportionally regardless of initial content width.",
        "codeSnippet": ".nav-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.nav-search {\n  flex: 1 1 auto; /* Expands to fill available toolbar space */\n}\n.nav-actions {\n  flex: 0 0 auto; /* Keeps fixed size */\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Flexbox Main Axis, Cross Axis, Flex-Grow & Flex-Shrink",
          "instructions": [
            "Build a top navigation bar with logo, expandable search input, and action buttons.",
            "Configure flex-grow on the search input so it fills leftover space.",
            "Add gap spacing instead of individual element margins."
          ],
          "starterCode": "<div class=\"toolbar\"><div class=\"logo\"></div><input><button></button></div>",
          "expectedOutcome": "A fluid responsive toolbar where the search bar gracefully shrinks and stretches as viewport width changes."
        },
        "exam": {
          "title": "Flexbox Main Axis, Cross Axis, Flex-Grow & Flex-Shrink - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-flexbox-main-axis-cross-axis-f",
              "question": "What does the flex shorthand value flex: 1 mean?",
              "options": [
                "flex-grow: 1, flex-shrink: 1, flex-basis: 0%",
                "flex-direction: row",
                "flex-wrap: nowrap",
                "flex-basis: 100px"
              ],
              "correctIndex": 0,
              "explanation": "flex: 1 expands to 1 1 0%, distributing all free space equally across matching sibling flex items."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Flexbox Main Axis, Cross Axis, Flex-Grow & Flex-Shrink - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Flexbox Main Axis, Cross Axis, Flex-Grow & Flex-Shrink. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Flex Alignment: Justify-Content, Align-Items & Gap Mechanics",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Centering, Alignment & Gap in Modern Flexbox",
        "objective": "Center elements vertically and horizontally with zero margin calculations, and distribute items using space-between and gap.",
        "theoryContent": "Traditional CSS centering required negative margins or absolute positioning hacks. Flexbox simplifies centering to two declarations: `justify-content: center` (main axis) and `align-items: center` (cross axis).",
        "codeSnippet": ".modal-backdrop {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n.modal-card {\n  max-width: 540px;\n  width: 90%;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Flex Alignment: Justify-Content, Align-Items & Gap Mechanics",
          "instructions": [
            "Create a full-screen modal overlay container.",
            "Center modal dialog content using flexbox alignment.",
            "Verify centering across both landscape and portrait device orientations."
          ],
          "starterCode": ".overlay { /* center child dialog */ }",
          "expectedOutcome": "A modal card flawlessly centered in the middle of the viewport at all device dimensions."
        },
        "exam": {
          "title": "Flex Alignment: Justify-Content, Align-Items & Gap Mechanics - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-flex-alignment-justify-content",
              "question": "Which property aligns flex items along the cross axis?",
              "options": [
                "align-items",
                "justify-content",
                "flex-direction",
                "align-content"
              ],
              "correctIndex": 0,
              "explanation": "align-items aligns items perpendicular to the main axis (cross axis), such as vertically in row layout."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Flex Alignment: Justify-Content, Align-Items & Gap Mechanics - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Flex Alignment: Justify-Content, Align-Items & Gap Mechanics. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "CSS Grid: Grid-Template-Columns, Minmax & Auto-Fit/Fill",
        "duration": "35 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "CSS Grid Auto-Fit Responsive Cards Without Media Queries",
        "objective": "Construct responsive multi-column card grids using repeat(), auto-fit, and minmax() that automatically adapt without writing media queries.",
        "theoryContent": "The magic formula `repeat(auto-fit, minmax(280px, 1fr))` instructs the browser engine to fit as many 280px columns as will fit, expanding them to fill remaining space. If the viewport shrinks below 280px, columns wrap naturally.",
        "codeSnippet": ".courses-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n}\n.course-card {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 1.5rem;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: CSS Grid: Grid-Template-Columns, Minmax & Auto-Fit/Fill",
          "instructions": [
            "Create a grid container with repeat(auto-fit, minmax(280px, 1fr)).",
            "Populate with 8 course cards.",
            "Resize the browser window from 1400px down to 320px to observe automatic column reflow."
          ],
          "starterCode": ".grid-container { display: grid; }",
          "expectedOutcome": "A seamless responsive grid that switches from 4 columns to 3, 2, and 1 column without a single @media rule."
        },
        "exam": {
          "title": "CSS Grid: Grid-Template-Columns, Minmax & Auto-Fit/Fill - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-css-grid-grid-template-columns",
              "question": "What is the key difference between auto-fit and auto-fill in CSS Grid?",
              "options": [
                "auto-fit collapses empty grid tracks to 0px allowing existing items to stretch, whereas auto-fill preserves empty tracks",
                "auto-fill only works with px units",
                "auto-fit requires JavaScript flexbox polyfills",
                "auto-fill is deprecated in CSS3"
              ],
              "correctIndex": 0,
              "explanation": "auto-fit collapses empty track columns so occupied items stretch across the full available container width."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "CSS Grid: Grid-Template-Columns, Minmax & Auto-Fit/Fill - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for CSS Grid: Grid-Template-Columns, Minmax & Auto-Fit/Fill. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Grid Areas & Complex 2D Dashboard Layout Engineering",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Building Enterprise Dashboards with grid-template-areas",
        "objective": "Engineer enterprise multi-panel dashboard layouts using named grid-template-areas with sticky sidebars and scrollable content bodies.",
        "theoryContent": "`grid-template-areas` allows developers to sketch the visual layout directly in CSS using text strings. Rearranging layout for mobile requires merely redefining the string in a single media query.",
        "codeSnippet": ".dashboard {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-template-rows: 70px 1fr 60px;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"sidebar footer\";\n  min-height: 100vh;\n}\n.sidebar { grid-area: sidebar; }\n.header  { grid-area: header; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }",
        "handsOnActivity": {
          "title": "Hands-On Lab: Grid Areas & Complex 2D Dashboard Layout Engineering",
          "instructions": [
            "Define a 2-column, 3-row enterprise dashboard grid.",
            "Assign sub-components to their respective grid areas.",
            "Add a mobile breakpoint that stacks sidebar, header, and main into a single column."
          ],
          "starterCode": ".app-layout { display: grid; }",
          "expectedOutcome": "A production enterprise dashboard layout with fixed sidebar navigation and fluid application workspace."
        },
        "exam": {
          "title": "Grid Areas & Complex 2D Dashboard Layout Engineering - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-grid-areas-complex-2d-dashboar",
              "question": "How do you leave an empty grid cell when using grid-template-areas?",
              "options": [
                "Place a period (.) in the area string definition",
                "Write null in quotation marks",
                "Write empty",
                "Leave a blank space without text"
              ],
              "correctIndex": 0,
              "explanation": "A period (.) in a grid-template-areas definition represents an unassigned, empty grid cell."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Grid Areas & Complex 2D Dashboard Layout Engineering - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Grid Areas & Complex 2D Dashboard Layout Engineering. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Responsive Design, Fluid Typography & Performance Animations",
    "duration": "1 Week",
    "overview": "Implement fluid typography with clamp(), container queries for modular components, and GPU-accelerated micro-interactions.",
    "lessons": [
      {
        "title": "Mobile-First Media Queries & Container Queries (@container)",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "From Media Queries to Modern CSS Container Queries",
        "objective": "Write mobile-first min-width media queries and utilize @container rules so components respond to their container size rather than viewport width.",
        "theoryContent": "Media queries query the entire browser viewport, which fails when a card component is placed inside a narrow sidebar. Container queries (`@container`) allow components to style themselves based on their direct parent container dimensions.",
        "codeSnippet": ".card-container {\n  container-type: inline-size;\n  container-name: cardContext;\n}\n@container cardContext (min-width: 450px) {\n  .card {\n    display: flex;\n    flex-direction: row;\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Mobile-First Media Queries & Container Queries (@container)",
          "instructions": [
            "Define container-type: inline-size on a parent wrapper.",
            "Create a @container query that switches card layout from stacked to horizontal above 450px.",
            "Place the card inside both a wide main feed and a narrow sidebar to verify container-driven adaptation."
          ],
          "starterCode": ".card { display: flex; flex-direction: column; }",
          "expectedOutcome": "A self-adapting card component that renders horizontally in wide areas and vertically in narrow sidebars."
        },
        "exam": {
          "title": "Mobile-First Media Queries & Container Queries (@container) - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-mobile-first-media-queries-con",
              "question": "What CSS property establishes an element as a container for container queries?",
              "options": [
                "container-type: inline-size (or normal/size)",
                "display: container",
                "position: relative",
                "overflow: auto"
              ],
              "correctIndex": 0,
              "explanation": "Setting container-type: inline-size marks the element as a query container measuring width along the inline axis."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Mobile-First Media Queries & Container Queries (@container) - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Mobile-First Media Queries & Container Queries (@container). Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Fluid Typography with CSS clamp(), min(), and max()",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Fluid Typography Without Breakpoints Using clamp()",
        "objective": "Calculate mathematically fluid font sizes using clamp(min, preferred, max) that scale smoothly without jagged media query steps.",
        "theoryContent": "CSS `clamp(minimum, preferred, maximum)` takes three parameters. By setting preferred to a combination of rem and viewport width (vw), headlines scale smoothly across all screen widths.",
        "codeSnippet": "h1 {\n  /* Minimum: 2rem (32px), Preferred: 1.5rem + 2.5vw, Maximum: 3.75rem (60px) */\n  font-size: clamp(2rem, 1.5rem + 2.5vw, 3.75rem);\n  line-height: 1.15;\n  letter-spacing: -0.02em;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Fluid Typography with CSS clamp(), min(), and max()",
          "instructions": [
            "Implement clamp() fluid typography on all heading levels (h1-h3).",
            "Calculate appropriate rem + vw preferred values.",
            "Verify font size scales smoothly during continuous window resizing."
          ],
          "starterCode": "h1 { font-size: 36px; }",
          "expectedOutcome": "Silky-smooth responsive headlines that never get too small on phones nor absurdly huge on 4K monitors."
        },
        "exam": {
          "title": "Fluid Typography with CSS clamp(), min(), and max() - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-fluid-typography-with-css-clam",
              "question": "In clamp(1.5rem, 1rem + 2vw, 3rem), what happens if the computed value of 1rem + 2vw is 4rem?",
              "options": [
                "The font size is capped at the maximum value of 3rem",
                "The font size becomes 4rem anyway",
                "The browser throws a CSS warning",
                "It reverts to 1.5rem"
              ],
              "correctIndex": 0,
              "explanation": "clamp() clamps computed values between the defined floor (minimum) and ceiling (maximum)."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Fluid Typography with CSS clamp(), min(), and max() - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Fluid Typography with CSS clamp(), min(), and max(). Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Hardware-Accelerated Transforms & Keyframe Animations",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "High-Performance 60FPS CSS Animations & Transforms",
        "objective": "Animate exclusively with transform (translate, scale, rotate) and opacity to trigger GPU hardware acceleration and prevent layout thrashing.",
        "theoryContent": "Animating properties like width, height, top, or left forces the browser engine to recalculate layout and repaint pixels on every frame, causing stuttering. Animating `transform` and `opacity` is handled entirely on the compositor thread at 60-120 FPS.",
        "codeSnippet": ".drawer {\n  transform: translateX(-100%);\n  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);\n  will-change: transform;\n}\n.drawer.open {\n  transform: translateX(0);\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Hardware-Accelerated Transforms & Keyframe Animations",
          "instructions": [
            "Build an off-canvas navigation drawer using translateX(-100%).",
            "Animate with cubic-bezier easing and 300ms duration.",
            "Audit frame rate and layout reflows in Chrome DevTools Performance panel."
          ],
          "starterCode": ".drawer { left: -300px; transition: left 0.3s; }",
          "expectedOutcome": "Butter-smooth slide-in navigation drawer running at 60 FPS without layout recalculations."
        },
        "exam": {
          "title": "Hardware-Accelerated Transforms & Keyframe Animations - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-hardware-accelerated-transform",
              "question": "Which CSS properties can the browser animate on the GPU compositor thread without triggering layout reflow?",
              "options": [
                "transform and opacity",
                "width and height",
                "margin and padding",
                "top and left"
              ],
              "correctIndex": 0,
              "explanation": "transform and opacity bypass layout and paint stages, running directly on the GPU compositor for silky-smooth animation."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Hardware-Accelerated Transforms & Keyframe Animations - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Hardware-Accelerated Transforms & Keyframe Animations. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Dark Mode Theming with prefers-color-scheme & CSS Themes",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Building Production Dark Mode Systems with CSS & JS",
        "objective": "Detect user operating system preferences with @media (prefers-color-scheme: dark) and persist manual user overrides via localStorage.",
        "theoryContent": "Modern operating systems allow users to prefer dark themes. Combining CSS custom properties with `@media (prefers-color-scheme: dark)` provides instantaneous automatic theming, while a data-theme attribute on `<html>` allows manual override.",
        "codeSnippet": ":root {\n  --bg-app: #ffffff;\n  --text-main: #0f172a;\n}\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme=\"light\"]) {\n    --bg-app: #090d16;\n    --text-main: #f8fafc;\n  }\n}\n[data-theme=\"dark\"] {\n  --bg-app: #090d16;\n  --text-main: #f8fafc;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Dark Mode Theming with prefers-color-scheme & CSS Themes",
          "instructions": [
            "Declare light and dark color palettes using CSS custom properties.",
            "Add prefers-color-scheme media query for OS auto-detection.",
            "Implement a lightweight JS toggle script saving choice to localStorage."
          ],
          "starterCode": "/* Setup dark mode variables */",
          "expectedOutcome": "An enterprise-grade theme system honoring system preferences with instant manual toggle capability."
        },
        "exam": {
          "title": "Dark Mode Theming with prefers-color-scheme & CSS Themes - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-dark-mode-theming-with-prefers",
              "question": "Which CSS media query detects if the user device has dark mode enabled in their system settings?",
              "options": [
                "@media (prefers-color-scheme: dark)",
                "@media (color-mode: dark)",
                "@media (theme: dark)",
                "@media (dark-mode: active)"
              ],
              "correctIndex": 0,
              "explanation": "prefers-color-scheme is the standard W3C media feature for detecting user light/dark interface preferences."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Dark Mode Theming with prefers-color-scheme & CSS Themes - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Dark Mode Theming with prefers-color-scheme & CSS Themes. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_3_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: Modern JavaScript Syntax, Scope, Closures & Data Structures",
    "duration": "1 Week",
    "overview": "Master modern ECMAScript standards: let/const block scoping, arrow functions, lexical this, closures, and modern array manipulation.",
    "lessons": [
      {
        "title": "Let, Const, Block Scoping & Variable Hoisting Rules",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "JavaScript Hoisting, Temporal Dead Zone & Scope",
        "objective": "Differentiate between var, let, and const scoping rules, understand variable hoisting, and navigate the Temporal Dead Zone (TDZ).",
        "theoryContent": "Variables declared with `var` are function-scoped and hoisted with an initial value of `undefined`. In contrast, `let` and `const` are block-scoped and hoisted into the Temporal Dead Zone (TDZ), throwing a ReferenceError if accessed before declaration.",
        "codeSnippet": "function calculateDiscount(price) {\n  // console.log(rate); // ReferenceError: Cannot access rate before initialization\n  const tax = 0.12;\n  let discountRate = 0.05;\n  \n  if (price > 1000) {\n    let discountRate = 0.15; // Block-scoped variable shadowing\n    return price * (1 - discountRate) * (1 + tax);\n  }\n  return price * (1 - discountRate) * (1 + tax);\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Let, Const, Block Scoping & Variable Hoisting Rules",
          "instructions": [
            "Refactor legacy var codebases to modern let and const declarations.",
            "Demonstrate block scope isolation inside loops and conditional blocks.",
            "Trigger and debug a Temporal Dead Zone ReferenceError."
          ],
          "starterCode": "var x = 10; for (var i = 0; i < 5; i++) { ... }",
          "expectedOutcome": "Safe, predictable variable bindings without accidental scope leakage or hoisting bugs."
        },
        "exam": {
          "title": "Let, Const, Block Scoping & Variable Hoisting Rules - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-let-const-block-scoping-variab",
              "question": "What error is thrown when accessing a let or const variable before its line of declaration?",
              "options": [
                "ReferenceError (due to the Temporal Dead Zone)",
                "TypeError",
                "SyntaxError",
                "No error; it returns undefined"
              ],
              "correctIndex": 0,
              "explanation": "let and const exist in the Temporal Dead Zone from block entry until their declaration is evaluated, throwing ReferenceError."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Let, Const, Block Scoping & Variable Hoisting Rules - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Let, Const, Block Scoping & Variable Hoisting Rules. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Arrow Functions, Lexical This & Higher-Order Functions",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Arrow Functions, map, filter, reduce & this Binding",
        "objective": "Leverage arrow functions for lexical this retention and master functional array transformation with map, filter, and reduce.",
        "theoryContent": "Traditional functions bind `this` dynamically based on how they are called. Arrow functions do not bind their own `this`; instead, they capture `this` lexically from the enclosing execution context, solving callback binding dilemmas.",
        "codeSnippet": "const students = [\n  { name: \"Juan\", score: 88, track: \"web\" },\n  { name: \"Maria\", score: 95, track: \"web\" },\n  { name: \"Pedro\", score: 72, track: \"ai\" }\n];\n\nconst topWebStudents = students\n  .filter(s => s.track === \"web\" && s.score >= 85)\n  .map(s => ({ ...s, certified: true }));\n\nconst classAverage = students.reduce((acc, s) => acc + s.score, 0) / students.length;",
        "handsOnActivity": {
          "title": "Hands-On Lab: Arrow Functions, Lexical This & Higher-Order Functions",
          "instructions": [
            "Transform raw data arrays using chained filter and map pipelines.",
            "Compute aggregated metrics with Array.prototype.reduce.",
            "Use arrow functions to preserve class instance context in timer callbacks."
          ],
          "starterCode": "const numbers = [1, 2, 3, 4, 5]; // double evens and sum",
          "expectedOutcome": "Concise, declarative data transformations with zero mutable loop indices."
        },
        "exam": {
          "title": "Arrow Functions, Lexical This & Higher-Order Functions - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-arrow-functions-lexical-this-h",
              "question": "Why do arrow functions not have their own this keyword?",
              "options": [
                "They inherit this lexically from the surrounding execution context",
                "They execute in a separate web worker thread",
                "They automatically convert this to window",
                "Their this is frozen and set to undefined always"
              ],
              "correctIndex": 0,
              "explanation": "Arrow functions do not define their own this; they look up this in the lexical scope chain where they were created."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Arrow Functions, Lexical This & Higher-Order Functions - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Arrow Functions, Lexical This & Higher-Order Functions. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Destructuring, Spread/Rest Operators & Object Shorthand",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Destructuring Objects, Arrays & Spread/Rest Syntax",
        "objective": "Extract deeply nested object properties, assign default values, and perform immutable object merges using spread and rest syntax.",
        "theoryContent": "Destructuring syntax unpacks values from arrays or properties from objects into distinct variables. The spread operator (`...`) creates shallow copies of objects and arrays, which is essential for immutable state updates.",
        "codeSnippet": "const userProfile = {\n  id: \"usr-101\",\n  name: \"Ronnel M. Aviguetero\",\n  roles: [\"admin\", \"architect\"],\n  settings: { theme: \"dark\", notifications: true }\n};\n\nconst { name, settings: { theme }, ...restMetadata } = userProfile;\n\n// Immutable update\nconst updatedProfile = {\n  ...userProfile,\n  settings: { ...userProfile.settings, theme: \"light\" }\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: Destructuring, Spread/Rest Operators & Object Shorthand",
          "instructions": [
            "Destructure incoming API response payloads with alias renaming and fallback defaults.",
            "Merge configuration objects immutably using the spread operator.",
            "Collect remaining function arguments using rest parameters."
          ],
          "starterCode": "function handleUser(user) { const name = user.name; }",
          "expectedOutcome": "Clean, expressive data extraction and immutable state updates across application components."
        },
        "exam": {
          "title": "Destructuring, Spread/Rest Operators & Object Shorthand - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-destructuring-spread-rest-oper",
              "question": "What is the effect of const cloned = { ...original } on nested objects inside original?",
              "options": [
                "It performs a shallow copy; nested objects are still copied by reference",
                "It creates a complete deep clone of all nested objects recursively",
                "It deletes the original object from memory",
                "It freezes the cloned object"
              ],
              "correctIndex": 0,
              "explanation": "The spread operator performs a shallow copy; nested objects still share memory references with the original."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Destructuring, Spread/Rest Operators & Object Shorthand - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Destructuring, Spread/Rest Operators & Object Shorthand. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Closures, Lexical Environments & Memory Management",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Demystifying JavaScript Closures & Lexical Scope",
        "objective": "Harness closures to create private encapsulated state, understand garbage collection mechanics, and prevent memory leaks.",
        "theoryContent": "A closure is the combination of a function bundled together with references to its surrounding lexical state. Closures give inner functions access to an outer function’s scope even after the outer function has finished executing.",
        "codeSnippet": "function createCounter(initialValue = 0) {\n  let count = initialValue; // Private encapsulated state\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getValue: () => count\n  };\n}\n\nconst counterA = createCounter(10);\ncounterA.increment(); // 11\nconsole.log(counterA.getValue()); // 11",
        "handsOnActivity": {
          "title": "Hands-On Lab: Closures, Lexical Environments & Memory Management",
          "instructions": [
            "Build a private state factory using closures (e.g. rate limiter or counter).",
            "Verify that internal variables cannot be modified from outside the factory.",
            "Inspect memory retention and closure scopes in Chrome DevTools Memory tab."
          ],
          "starterCode": "function makeBank() { /* encapsulate balance */ }",
          "expectedOutcome": "Robust encapsulated state modules that protect data integrity from direct external mutation."
        },
        "exam": {
          "title": "Closures, Lexical Environments & Memory Management - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-closures-lexical-environments-",
              "question": "What constitutes a closure in JavaScript?",
              "options": [
                "A function that retains access to variables from its outer lexical scope even after the parent function has executed",
                "A function that runs immediately when defined",
                "A method that closes the browser window",
                "A syntax error caused by unclosed curly braces"
              ],
              "correctIndex": 0,
              "explanation": "A closure retains access to its lexical environment, allowing inner functions to reference outer variables indefinitely."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Closures, Lexical Environments & Memory Management - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Closures, Lexical Environments & Memory Management. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: DOM Selection, Dynamic Rendering & Event Propagation",
    "duration": "1 Week",
    "overview": "Manipulate the Document Object Model efficiently: batched DOM fragments, event delegation, event capturing, and keyboard accessibility.",
    "lessons": [
      {
        "title": "DOM Querying & Element Traversal with querySelectorAll",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Modern DOM Selection: querySelector vs getElementById",
        "objective": "Query elements with CSS selectors, iterate over NodeLists, and navigate parent-child hierarchies using closest() and parentNode.",
        "theoryContent": "Modern DOM manipulation centers on `querySelector` and `querySelectorAll`. Use `element.closest('.card')` to traverse upwards to the nearest matching ancestor, drastically simplifying contextual interactions.",
        "codeSnippet": "const actionButtons = document.querySelectorAll('button[data-action]');\nactionButtons.forEach(btn => {\n  btn.addEventListener('click', (e) => {\n    const card = e.target.closest('.course-card');\n    const courseId = card?.dataset.courseId;\n    console.log('Action on:', courseId);\n  });\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: DOM Querying & Element Traversal with querySelectorAll",
          "instructions": [
            "Select DOM elements using data attributes and CSS combinators.",
            "Convert a NodeList to an Array using Array.from() for advanced mapping.",
            "Locate ancestor containers using element.closest()."
          ],
          "starterCode": "const buttons = document.getElementsByTagName(\"button\");",
          "expectedOutcome": "Clean, decoupled element selection that does not rely on fragile visual class names."
        },
        "exam": {
          "title": "DOM Querying & Element Traversal with querySelectorAll - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-dom-querying-element-traversal",
              "question": "What is the return type of document.querySelectorAll()?",
              "options": [
                "A static NodeList",
                "A live HTMLCollection",
                "A standard JavaScript Array",
                "A DOMTokenList"
              ],
              "correctIndex": 0,
              "explanation": "querySelectorAll returns a static NodeList representing elements matching the specified selectors at query time."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "DOM Querying & Element Traversal with querySelectorAll - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for DOM Querying & Element Traversal with querySelectorAll. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Dynamic DOM Creation, DocumentFragment & Virtual Layouts",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "High-Performance DOM Updates with DocumentFragment",
        "objective": "Render hundreds of UI items without UI freeze by batching DOM insertions using DocumentFragment to avoid repeated browser reflows.",
        "theoryContent": "Directly appending elements to `document.body` inside a loop triggers layout reflow and repaint on every iteration. Appending to a lightweight in-memory `DocumentFragment` batches all updates into a single atomic DOM insertion.",
        "codeSnippet": "function renderLessonList(lessons, container) {\n  const fragment = document.createDocumentFragment();\n  \n  lessons.forEach(lesson => {\n    const li = document.createElement('li');\n    li.className = 'lesson-item';\n    li.textContent = `${lesson.title} (${lesson.duration})`;\n    fragment.appendChild(li);\n  });\n  \n  container.innerHTML = ''; // Clear previous\n  container.appendChild(fragment); // Single atomic DOM insertion\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Dynamic DOM Creation, DocumentFragment & Virtual Layouts",
          "instructions": [
            "Generate a list of 50 student records.",
            "Assemble items inside a document.createDocumentFragment().",
            "Append the fragment to the DOM in a single operation and measure execution time."
          ],
          "starterCode": "for (let i=0; i<50; i++) { container.appendChild(document.createElement(\"div\")); }",
          "expectedOutcome": "Lightning-fast rendering of large lists with zero UI stuttering or dropped frames."
        },
        "exam": {
          "title": "Dynamic DOM Creation, DocumentFragment & Virtual Layouts - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-dynamic-dom-creation-documentf",
              "question": "Why is using DocumentFragment significantly faster than appending nodes one-by-one to the DOM?",
              "options": [
                "DocumentFragment exists in memory and triggers only one browser reflow and repaint when appended",
                "DocumentFragment runs in WebAssembly",
                "DocumentFragment skips CSS rendering entirely",
                "DocumentFragment compresses HTML into binary"
              ],
              "correctIndex": 0,
              "explanation": "Appending nodes individually causes N reflows; appending via DocumentFragment causes exactly 1 reflow."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Dynamic DOM Creation, DocumentFragment & Virtual Layouts - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Dynamic DOM Creation, DocumentFragment & Virtual Layouts. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Event Bubbling, Capturing, stopPropagation & Event Delegation",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Event Bubbling, Capturing & Delegation in Practice",
        "objective": "Attach a single event listener to a parent container to manage hundreds of dynamic children using event delegation and e.target.",
        "theoryContent": "Events in the DOM travel down in the capturing phase and bubble up through parent nodes in the bubbling phase. Event delegation attaches a single listener to a parent node, handling events on current and future child elements seamlessly.",
        "codeSnippet": "const tableBody = document.querySelector('#student-table tbody');\ntableBody.addEventListener('click', (e) => {\n  const deleteBtn = e.target.closest('.btn-delete');\n  if (!deleteBtn) return;\n  \n  const row = deleteBtn.closest('tr');\n  const studentId = row.dataset.id;\n  row.remove();\n  console.log(`Deleted record: ${studentId}`);\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: Event Bubbling, Capturing, stopPropagation & Event Delegation",
          "instructions": [
            "Build a dynamic to-do list where items can be added and deleted.",
            "Implement a single click listener on the parent container using event delegation.",
            "Prevent event bubbling to parent containers when clicking specific action triggers."
          ],
          "starterCode": "const list = document.getElementById(\"list\");",
          "expectedOutcome": "An efficient event architecture where dynamically added elements immediately respond to clicks with zero memory leaks."
        },
        "exam": {
          "title": "Event Bubbling, Capturing, stopPropagation & Event Delegation - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-event-bubbling-capturing-stopp",
              "question": "What is the primary architectural advantage of event delegation?",
              "options": [
                "It reduces memory consumption by using one event listener for multiple children, including elements added in the future",
                "It speeds up network HTTP requests",
                "It automatically translates text to Tagalog",
                "It encrypts DOM click coordinates"
              ],
              "correctIndex": 0,
              "explanation": "Event delegation minimizes memory overhead and automatically handles dynamic elements added after page load."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Event Bubbling, Capturing, stopPropagation & Event Delegation - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Event Bubbling, Capturing, stopPropagation & Event Delegation. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Keyboard Accessibility, Focus Trapping & Custom Event Dispatch",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Accessible Modal Focus Traps & Custom Events",
        "objective": "Trap keyboard focus inside modal dialogs using Tab/Shift+Tab listeners, listen for Escape keys, and communicate via CustomEvent.",
        "theoryContent": "When an accessible modal opens, keyboard focus must be shifted inside and trapped so users cannot accidentally interact with background elements. Dispatching `CustomEvent` enables decoupled pub/sub communication across components.",
        "codeSnippet": "function trapFocus(modalElement) {\n  const focusable = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n  const first = focusable[0];\n  const last = focusable[focusable.length - 1];\n  \n  modalElement.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape') {\n      modalElement.dispatchEvent(new CustomEvent('modal:close'));\n    }\n    if (e.key === 'Tab') {\n      if (e.shiftKey && document.activeElement === first) {\n        last.focus();\n        e.preventDefault();\n      } else if (!e.shiftKey && document.activeElement === last) {\n        first.focus();\n        e.preventDefault();\n      }\n    }\n  });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Keyboard Accessibility, Focus Trapping & Custom Event Dispatch",
          "instructions": [
            "Trap focus inside a dialog so Tab cycles endlessly between first and last focusable items.",
            "Listen for Escape keydown to close the dialog.",
            "Dispatch a custom modal:closed event and listen for it in the main application."
          ],
          "starterCode": "function openModal() { /* trap focus */ }",
          "expectedOutcome": "A 100% WCAG-compliant modal experience that keyboard-only users can navigate safely."
        },
        "exam": {
          "title": "Keyboard Accessibility, Focus Trapping & Custom Event Dispatch - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-keyboard-accessibility-focus-t",
              "question": "What is the purpose of a focus trap in an accessible modal dialog?",
              "options": [
                "To prevent keyboard users from tabbing outside the open modal into hidden background content",
                "To lock the mouse pointer in place",
                "To disable all screen readers",
                "To speed up page scroll rates"
              ],
              "correctIndex": 0,
              "explanation": "Focus trapping restricts Tab key cycling strictly within the active dialog, fulfilling critical WCAG requirements."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Keyboard Accessibility, Focus Trapping & Custom Event Dispatch - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Keyboard Accessibility, Focus Trapping & Custom Event Dispatch. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Browser Storage, Form Data & Client State Management",
    "duration": "1 Week",
    "overview": "Store client data securely with localStorage and IndexedDB, extract form data with FormData, and optimize UI responsiveness with debouncing.",
    "lessons": [
      {
        "title": "LocalStorage vs SessionStorage vs IndexedDB Architecture",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Client-Side Storage: LocalStorage, Session & IndexedDB",
        "objective": "Evaluate storage quotas, lifecycles, and security implications of LocalStorage, SessionStorage, and asynchronous IndexedDB.",
        "theoryContent": "LocalStorage persists across browser sessions (5-10MB quota) but operates synchronously on the main thread. IndexedDB is an asynchronous transactional NoSQL object store capable of storing hundreds of megabytes of structured data.",
        "codeSnippet": "class StorageService {\n  static save(key, data) {\n    try {\n      localStorage.setItem(key, JSON.stringify(data));\n    } catch (e) {\n      console.error(\"Storage quota exceeded\", e);\n    }\n  }\n  static load(key, fallback = null) {\n    const raw = localStorage.getItem(key);\n    return raw ? JSON.parse(raw) : fallback;\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: LocalStorage vs SessionStorage vs IndexedDB Architecture",
          "instructions": [
            "Implement a safe JSON wrapper around localStorage with quota error handling.",
            "Store student quiz progress and restore state upon page refresh.",
            "Clear session state automatically using sessionStorage."
          ],
          "starterCode": "localStorage.setItem(\"key\", \"val\");",
          "expectedOutcome": "A robust client caching layer that gracefully handles storage quota exhaustion without throwing fatal errors."
        },
        "exam": {
          "title": "LocalStorage vs SessionStorage vs IndexedDB Architecture - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-localstorage-vs-sessionstorage",
              "question": "Why should sensitive authentication tokens (like refresh tokens) generally NOT be stored in localStorage?",
              "options": [
                "LocalStorage is vulnerable to Cross-Site Scripting (XSS) attacks; any injected script can read all contents",
                "LocalStorage expires automatically after 10 minutes",
                "LocalStorage can only store integer numbers",
                "LocalStorage requires a paid cloud license"
              ],
              "correctIndex": 0,
              "explanation": "Any JavaScript running on the origin can access localStorage, exposing stored secrets to XSS theft."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "LocalStorage vs SessionStorage vs IndexedDB Architecture - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for LocalStorage vs SessionStorage vs IndexedDB Architecture. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Native FormData API & Client-Side Data Normalization",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Mastering the HTML5 FormData API & Serialization",
        "objective": "Extract all user inputs from complex forms instantly using new FormData(form), normalize data types, and convert to JSON payloads.",
        "theoryContent": "The `FormData` interface automatically parses all form inputs that possess a `name` attribute, handling file attachments, checkboxes, and multiple selects without manually querying individual DOM elements.",
        "codeSnippet": "const form = document.querySelector('#enrollment-form');\nform.addEventListener('submit', async (e) => {\n  e.preventDefault();\n  const formData = new FormData(form);\n  \n  // Convert to plain object\n  const payload = Object.fromEntries(formData.entries());\n  console.log('Submitting enrollment:', payload);\n  \n  // Submit via fetch\n  const res = await fetch('/api/enroll', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(payload)\n  });\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: Native FormData API & Client-Side Data Normalization",
          "instructions": [
            "Capture form submission using the FormData API.",
            "Convert formData entries into a clean JSON object using Object.fromEntries().",
            "Send payload to a simulated API endpoint via fetch."
          ],
          "starterCode": "form.addEventListener(\"submit\", (e) => { ... });",
          "expectedOutcome": "Zero manual element querying when harvesting complete form data for API dispatch."
        },
        "exam": {
          "title": "Native FormData API & Client-Side Data Normalization - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-native-formdata-api-client-sid",
              "question": "What attribute must an input element possess for FormData to capture its value?",
              "options": [
                "A name attribute",
                "An id attribute",
                "A class attribute",
                "A data-field attribute"
              ],
              "correctIndex": 0,
              "explanation": "The FormData constructor iterates exclusively over form controls that have a valid name attribute."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Native FormData API & Client-Side Data Normalization - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Native FormData API & Client-Side Data Normalization. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "JSON Serialization, Deep Cloning & State Immutability",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Deep Cloning: structuredClone vs JSON.parse vs Spread",
        "objective": "Create deep clones using native structuredClone(), avoid object mutation bugs, and serialize complex data structures safely.",
        "theoryContent": "Object mutation is a major source of elusive software bugs. While `JSON.parse(JSON.stringify(obj))` breaks on Dates and Sets, modern JavaScript provides native `structuredClone()`, which creates true deep copies of complex structures.",
        "codeSnippet": "const initialCart = {\n  id: \"cart-001\",\n  items: [{ id: \"track-1\", title: \"HTML5\", price: 29 }],\n  createdAt: new Date()\n};\n\n// Native deep clone\nconst cartCopy = structuredClone(initialCart);\ncartCopy.items[0].price = 19;\n\nconsole.log(initialCart.items[0].price); // Still 29! Immutability preserved.",
        "handsOnActivity": {
          "title": "Hands-On Lab: JSON Serialization, Deep Cloning & State Immutability",
          "instructions": [
            "Compare mutations using spread operator vs structuredClone().",
            "Clone an object containing nested arrays and Date objects.",
            "Verify that modifying the copy does not alter the original structure."
          ],
          "starterCode": "const state = { user: { profile: { role: \"student\" } } };",
          "expectedOutcome": "Pristine immutable state updates that prevent accidental state mutations across views."
        },
        "exam": {
          "title": "JSON Serialization, Deep Cloning & State Immutability - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-json-serialization-deep-clonin",
              "question": "What native modern JavaScript function creates a true deep copy of an object including Dates and Maps?",
              "options": [
                "structuredClone()",
                "Object.assign()",
                "{ ...obj }",
                "JSON.clone()"
              ],
              "correctIndex": 0,
              "explanation": "structuredClone() is the web standard API for creating deep clones of JavaScript values, handling complex types."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "JSON Serialization, Deep Cloning & State Immutability - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for JSON Serialization, Deep Cloning & State Immutability. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Debouncing, Throttling & UI Performance Optimization",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Implementing Debounce & Throttle from Scratch",
        "objective": "Implement custom debounce and throttle higher-order utility functions to optimize autocomplete search inputs and scroll listeners.",
        "theoryContent": "Firing an API request on every single keystroke floods the network and crashes servers. Debouncing delays execution until the user has stopped typing for a specified delay (e.g. 300ms). Throttling limits execution to once every interval.",
        "codeSnippet": "function debounce(fn, delayMs = 300) {\n  let timerId;\n  return function (...args) {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => fn.apply(this, args), delayMs);\n  };\n}\n\nconst searchInput = document.querySelector('#search-input');\nconst handleSearch = debounce(async (e) => {\n  const query = e.target.value.trim();\n  if (query.length < 2) return;\n  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);\n  const results = await res.json();\n  renderResults(results);\n}, 300);\n\nsearchInput.addEventListener('input', handleSearch);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Debouncing, Throttling & UI Performance Optimization",
          "instructions": [
            "Write a reusable debounce utility function using closures and setTimeout.",
            "Attach debounce to a live search input field with a 300ms delay.",
            "Verify in DevTools Network panel that only one request is sent after typing stops."
          ],
          "starterCode": "function debounce(fn, delay) { /* write implementation */ }",
          "expectedOutcome": "A responsive search autocomplete interface that prevents unnecessary network calls during fast typing."
        },
        "exam": {
          "title": "Debouncing, Throttling & UI Performance Optimization - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-debouncing-throttling-ui-perfo",
              "question": "How does debouncing differ from throttling?",
              "options": [
                "Debounce waits until events have stopped firing for a duration; throttle guarantees execution at a fixed interval",
                "Debounce only works with numbers",
                "Throttle runs only when the page loads",
                "Debounce is asynchronous while throttle is synchronous"
              ],
              "correctIndex": 0,
              "explanation": "Debounce resets the countdown on each event trigger; throttle executes at most once per specified time window."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Debouncing, Throttling & UI Performance Optimization - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Debouncing, Throttling & UI Performance Optimization. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_4_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: The JavaScript Event Loop, Microtasks & Macrotasks",
    "duration": "1.5 Weeks",
    "overview": "Master the V8 single-threaded execution model: the Call Stack, Web APIs, Macrotask Queue, Microtask Queue, and Promise scheduling.",
    "lessons": [
      {
        "title": "Call Stack, Web APIs, Task Queue & Microtask Queue",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "The JavaScript Event Loop, Microtasks & Macrotasks Explained",
        "objective": "Trace synchronous execution on the Call Stack, asynchronous offloading to browser Web APIs, and priority resolution of Microtasks before Macrotasks.",
        "theoryContent": "JavaScript is single-threaded. When asynchronous operations initiate (e.g. `setTimeout` or `fetch`), the browser background threads manage the timer or network. Upon completion, Promise callbacks enter the high-priority Microtask queue, which drains completely before any Task (macrotask) is executed.",
        "codeSnippet": "console.log(\"1: Synchronous start\");\n\nsetTimeout(() => console.log(\"4: Macrotask (setTimeout)\"), 0);\n\nPromise.resolve().then(() => console.log(\"3: Microtask (Promise)\"));\n\nconsole.log(\"2: Synchronous end\");\n// Execution order: 1 -> 2 -> 3 -> 4",
        "handsOnActivity": {
          "title": "Hands-On Lab: Call Stack, Web APIs, Task Queue & Microtask Queue",
          "instructions": [
            "Trace execution order of mixed synchronous logs, setTimeout, and resolved Promises.",
            "Verify microtask prioritization using queueMicrotask().",
            "Use performance profiler to view task scheduling."
          ],
          "starterCode": "console.log(\"Start\"); setTimeout(...); Promise.resolve().then(...);",
          "expectedOutcome": "Complete mental model of execution order and task priority in JavaScript."
        },
        "exam": {
          "title": "Call Stack, Web APIs, Task Queue & Microtask Queue - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-call-stack-web-apis-task-queue",
              "question": "Which queue has higher execution priority when the Call Stack empties?",
              "options": [
                "Microtask Queue (Promises, queueMicrotask)",
                "Macrotask / Task Queue (setTimeout, setInterval)",
                "DOM Render Queue",
                "File System Queue"
              ],
              "correctIndex": 0,
              "explanation": "The event loop continuously drains the entire Microtask queue before picking the next task from the Macrotask queue."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Call Stack, Web APIs, Task Queue & Microtask Queue - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Call Stack, Web APIs, Task Queue & Microtask Queue. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Promise Lifecycle: Pending, Fulfilled, Rejected & Chaining",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Promises In-Depth: States, Handlers & Chaining",
        "objective": "Construct native Promise objects, transition between Pending, Fulfilled, and Rejected states, and chain asynchronous transformations with .then() and .catch().",
        "theoryContent": "A Promise is an object representing eventual completion or failure of an asynchronous operation. Returning values from `.then()` chains results, while returning rejected promises or throwing errors propagates down to `.catch()`.",
        "codeSnippet": "function fetchStudentData(id) {\n  return new Promise((resolve, reject) => {\n    if (!id) return reject(new Error(\"Student ID is required\"));\n    setTimeout(() => resolve({ id, name: \"Maria Santos\", enrolled: true }), 1000);\n  });\n}\n\nfetchStudentData(\"usr-42\")\n  .then(data => data.name)\n  .then(name => console.log(`Enrolled student: ${name}`))\n  .catch(err => console.error(\"Pipeline failed:\", err.message));",
        "handsOnActivity": {
          "title": "Hands-On Lab: Promise Lifecycle: Pending, Fulfilled, Rejected & Chaining",
          "instructions": [
            "Wrap a callback-based API in a native Promise constructor.",
            "Chain multiple transformations returning promises sequentially.",
            "Handle errors centrally using a terminal .catch() block."
          ],
          "starterCode": "function getAsyncData() { return new Promise(...); }",
          "expectedOutcome": "Clean asynchronous pipelines that eliminate callback hell and guarantee centralized error handling."
        },
        "exam": {
          "title": "Promise Lifecycle: Pending, Fulfilled, Rejected & Chaining - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-promise-lifecycle-pending-fulf",
              "question": "What state does a Promise enter if resolve(value) is invoked inside the executor?",
              "options": [
                "Fulfilled",
                "Pending",
                "Rejected",
                "Settled only"
              ],
              "correctIndex": 0,
              "explanation": "Calling resolve() transitions a pending Promise into the Fulfilled state with the given resolution value."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Promise Lifecycle: Pending, Fulfilled, Rejected & Chaining - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Promise Lifecycle: Pending, Fulfilled, Rejected & Chaining. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Async/Await Syntax, Try-Catch-Finally Error Boundaries",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Clean Asynchronous Code with Async/Await & Try-Catch",
        "objective": "Write synchronous-looking asynchronous logic using async and await, and implement bulletproof error recovery using try-catch-finally blocks.",
        "theoryContent": "`async/await` is syntactic sugar built on top of native Promises and generators. An `async` function always returns a Promise, and `await` pauses execution of that function until the Promise settles without blocking the main browser thread.",
        "codeSnippet": "async function loadCourseCurriculum(trackId) {\n  let isLoading = true;\n  try {\n    const response = await fetch(`/api/tracks/${trackId}`);\n    if (!response.ok) {\n      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);\n    }\n    const curriculum = await response.json();\n    return curriculum;\n  } catch (err) {\n    console.error(\"Failed to load curriculum:\", err);\n    throw err;\n  } finally {\n    isLoading = false;\n    console.log(\"Loading state completed.\");\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Async/Await Syntax, Try-Catch-Finally Error Boundaries",
          "instructions": [
            "Convert Promise .then() chains into an async/await function.",
            "Wrap network requests in try-catch-finally error blocks.",
            "Ensure cleanup actions (e.g. hiding loading spinners) execute in the finally block."
          ],
          "starterCode": "async function loadData() { /* fetch data with await */ }",
          "expectedOutcome": "Readable, sequential asynchronous code with deterministic error handling and cleanup routines."
        },
        "exam": {
          "title": "Async/Await Syntax, Try-Catch-Finally Error Boundaries - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-async-await-syntax-try-catch-f",
              "question": "What does an async function always return?",
              "options": [
                "A Promise",
                "The raw resolved value",
                "undefined",
                "A callback function"
              ],
              "correctIndex": 0,
              "explanation": "Any function declared with the async keyword implicitly returns a Promise wrapping the function return value."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Async/Await Syntax, Try-Catch-Finally Error Boundaries - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Async/Await Syntax, Try-Catch-Finally Error Boundaries. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Promise Concurrency: Promise.all, allSettled, race & any",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Mastering Promise Concurrency Methods in JavaScript",
        "objective": "Select and apply the appropriate concurrency combinator (Promise.all, allSettled, race, any) based on fault tolerance and latency requirements.",
        "theoryContent": "Running independent network requests sequentially causes unnecessary latency. `Promise.all` executes in parallel and fails fast if any promise rejects. `Promise.allSettled` waits for all to settle regardless of failures, providing complete inspection.",
        "codeSnippet": "async function loadDashboardData(userId) {\n  // Fetch profile, courses, and notifications concurrently\n  const results = await Promise.allSettled([\n    fetch(`/api/user/${userId}`).then(r => r.json()),\n    fetch(`/api/courses/${userId}`).then(r => r.json()),\n    fetch(`/api/notifications/${userId}`).then(r => r.json())\n  ]);\n  \n  const [profile, courses, notifications] = results.map(res => \n    res.status === \"fulfilled\" ? res.value : null\n  );\n  return { profile, courses, notifications };\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Promise Concurrency: Promise.all, allSettled, race & any",
          "instructions": [
            "Run 3 simulated independent network calls concurrently with Promise.all.",
            "Handle partial failures gracefully by switching to Promise.allSettled.",
            "Implement a request timeout fallback using Promise.race."
          ],
          "starterCode": "const p1 = fetch(...); const p2 = fetch(...);",
          "expectedOutcome": "High-throughput parallel data fetching that cuts total page load latency down to the duration of the slowest request."
        },
        "exam": {
          "title": "Promise Concurrency: Promise.all, allSettled, race & any - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-promise-concurrency-promise-al",
              "question": "What happens in Promise.all() if one of the promises rejects?",
              "options": [
                "It rejects immediately with that error, ignoring the outcomes of remaining promises",
                "It waits for all others and returns null for the rejected one",
                "It retries the failed promise 3 times automatically",
                "It converts the error into a fulfilled warning object"
              ],
              "correctIndex": 0,
              "explanation": "Promise.all has fail-fast behavior: if any promise rejects, the entire combined Promise immediately rejects."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Promise Concurrency: Promise.all, allSettled, race & any - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Promise Concurrency: Promise.all, allSettled, race & any. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: RESTful API Integration with Fetch API & Error Resilience",
    "duration": "1.5 Weeks",
    "overview": "Integrate external RESTful APIs with modern Fetch API, request timeouts, HTTP headers, authentication tokens, and pagination.",
    "lessons": [
      {
        "title": "Modern Fetch API: Headers, HTTP Methods & JSON Bodies",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Fetch API Essentials: GET, POST, PUT, DELETE & Headers",
        "objective": "Dispatch HTTP GET, POST, PUT, and DELETE requests with custom authentication headers, JSON serialization, and response parsing.",
        "theoryContent": "The native `fetch()` API replaced legacy XMLHttpRequest. Fetch does not reject on HTTP 404 or 500 error status codes; it only rejects on network disconnection. Developers must explicitly check `response.ok` before reading JSON data.",
        "codeSnippet": "async function createCourse(coursePayload) {\n  const token = localStorage.getItem(\"auth_token\");\n  const res = await fetch(\"https://api.epicademy.ph/v1/courses\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": `Bearer ${token}`,\n      \"Accept\": \"application/json\"\n    },\n    body: JSON.stringify(coursePayload)\n  });\n  \n  if (!res.ok) {\n    const errData = await res.json().catch(() => ({}));\n    throw new Error(errData.message || `Request failed with status ${res.status}`);\n  }\n  return await res.json();\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Modern Fetch API: Headers, HTTP Methods & JSON Bodies",
          "instructions": [
            "Execute an authenticated POST request with Authorization Bearer header.",
            "Verify that response.ok is checked before calling response.json().",
            "Catch and display structured error messages from backend responses."
          ],
          "starterCode": "fetch(\"/api/courses\", { method: \"POST\" });",
          "expectedOutcome": "Robust HTTP communication that handles both successful data transfers and server validation rejections."
        },
        "exam": {
          "title": "Modern Fetch API: Headers, HTTP Methods & JSON Bodies - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-modern-fetch-api-headers-http-",
              "question": "Why does fetch() not automatically reject when the server responds with a 404 or 500 status code?",
              "options": [
                "Because the HTTP request successfully communicated with the server; fetch only rejects on complete network failure",
                "Because 404 and 500 are considered successful codes in HTTP/2",
                "Because fetch polyfill is required for error detection",
                "Because the browser suppresses server errors"
              ],
              "correctIndex": 0,
              "explanation": "fetch only rejects on actual network failure or blocked requests; HTTP error statuses are valid server responses."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Modern Fetch API: Headers, HTTP Methods & JSON Bodies - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Modern Fetch API: Headers, HTTP Methods & JSON Bodies. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "HTTP Status Code Handling & Robust Client Error Logging",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "HTTP Status Codes: 200s, 400s, 500s & Error Boundaries",
        "objective": "Differentiate client errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests) from server errors (500, 502, 503).",
        "theoryContent": "Production web applications must respond intelligently to specific status codes. A 401 should trigger automated token refresh or redirect to login, a 429 must respect `Retry-After` headers, and a 503 should display a maintenance banner.",
        "codeSnippet": "async function apiRequest(url, options = {}) {\n  const res = await fetch(url, options);\n  if (res.status === 401) {\n    window.dispatchEvent(new CustomEvent(\"auth:unauthorized\"));\n    throw new Error(\"Session expired. Please sign in again.\");\n  }\n  if (res.status === 429) {\n    const retryAfter = res.headers.get(\"Retry-After\") || 5;\n    throw new Error(`Rate limit exceeded. Try again in ${retryAfter} seconds.`);\n  }\n  if (!res.ok) {\n    throw new Error(`API error ${res.status}`);\n  }\n  return await res.json();\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: HTTP Status Code Handling & Robust Client Error Logging",
          "instructions": [
            "Create an API wrapper that evaluates res.status codes.",
            "Trigger global auth logout events on 401 Unauthorized.",
            "Display countdown notifications when encountering 429 Rate Limits."
          ],
          "starterCode": "function handleResponse(res) { /* evaluate status codes */ }",
          "expectedOutcome": "A centralized API handler that provides smooth user recovery paths across diverse network failure modes."
        },
        "exam": {
          "title": "HTTP Status Code Handling & Robust Client Error Logging - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-http-status-code-handling-robu",
              "question": "Which HTTP status code signifies that the client has sent too many requests in a given amount of time?",
              "options": [
                "429 Too Many Requests",
                "403 Forbidden",
                "404 Not Found",
                "502 Bad Gateway"
              ],
              "correctIndex": 0,
              "explanation": "HTTP 429 indicates rate limiting is active and requests are being throttled."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "HTTP Status Code Handling & Robust Client Error Logging - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for HTTP Status Code Handling & Robust Client Error Logging. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Request Cancellation with AbortController & Signal",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Cancelling Fetch Requests with AbortController",
        "objective": "Cancel stale in-flight HTTP requests and race conditions using AbortController and signal when users switch tabs or type new search terms.",
        "theoryContent": "When a user rapidly types search queries, older slow requests may resolve after newer fast requests, overwriting accurate data with stale results. Passing an `AbortSignal` allows immediate cancellation of outdated requests.",
        "codeSnippet": "let activeController = null;\n\nasync function searchCourses(query) {\n  if (activeController) {\n    activeController.abort(); // Cancel previous ongoing request\n  }\n  activeController = new AbortController();\n  \n  try {\n    const res = await fetch(`/api/search?q=${query}`, {\n      signal: activeController.signal\n    });\n    return await res.json();\n  } catch (err) {\n    if (err.name === \"AbortError\") {\n      console.log(\"Previous search cancelled cleanly.\");\n      return null;\n    }\n    throw err;\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Request Cancellation with AbortController & Signal",
          "instructions": [
            "Instantiate an AbortController and attach its signal to fetch options.",
            "Abort the previous controller when a new search keystroke occurs.",
            "Filter out and ignore AbortError exceptions in the catch block."
          ],
          "starterCode": "const controller = new AbortController();",
          "expectedOutcome": "Elimination of race condition bugs and wasted bandwidth during fast user input."
        },
        "exam": {
          "title": "Request Cancellation with AbortController & Signal - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-request-cancellation-with-abor",
              "question": "What error is thrown by fetch() when its associated AbortController.abort() is called?",
              "options": [
                "AbortError (DOMException)",
                "NetworkError",
                "TimeoutError",
                "CancelledException"
              ],
              "correctIndex": 0,
              "explanation": "fetch throws a DOMException with the name \"AbortError\" when aborted via AbortSignal."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Request Cancellation with AbortController & Signal - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Request Cancellation with AbortController & Signal. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Pagination, Infinite Scrolling & Cursor-Based Fetching",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Cursor-Based vs Offset Pagination & Infinite Feeds",
        "objective": "Implement cursor-based pagination for large datasets to avoid offset degradation, and maintain smooth infinite scrolling lists.",
        "theoryContent": "Offset-based pagination (`OFFSET 1000`) degrades in database performance and causes duplicate or missing items when new rows are inserted during browsing. Cursor-based pagination uses unique indexed pointers (`after=item_id`), ensuring constant time queries.",
        "codeSnippet": "async function fetchNextPage(cursor = null) {\n  const url = new URL(\"/api/feed\", window.location.origin);\n  url.searchParams.set(\"limit\", \"20\");\n  if (cursor) url.searchParams.set(\"cursor\", cursor);\n  \n  const res = await fetch(url);\n  const { data, nextCursor, hasMore } = await res.json();\n  \n  return { data, nextCursor, hasMore };\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Pagination, Infinite Scrolling & Cursor-Based Fetching",
          "instructions": [
            "Design an API request that passes nextCursor pointers.",
            "Append received page items to existing feed state.",
            "Halt subsequent fetching when hasMore is false."
          ],
          "starterCode": "function loadMore() { /* fetch next page */ }",
          "expectedOutcome": "An infinite feed that scales efficiently to millions of records without duplicate items."
        },
        "exam": {
          "title": "Pagination, Infinite Scrolling & Cursor-Based Fetching - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-pagination-infinite-scrolling-",
              "question": "Why is cursor-based pagination preferred over offset-based pagination in dynamic feeds?",
              "options": [
                "It avoids duplicate/skipped records when new items are added, and maintains constant database query performance",
                "It eliminates the need for database indexes entirely",
                "It works without network requests",
                "It is required by the HTTP/1.1 specification"
              ],
              "correctIndex": 0,
              "explanation": "Cursor pagination queries based on indexed record boundaries, preventing duplicate items and performance degradation."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Pagination, Infinite Scrolling & Cursor-Based Fetching - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Pagination, Infinite Scrolling & Cursor-Based Fetching. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Browser APIs: Web Workers, Geolocation & Intersection Observer",
    "duration": "1 Week",
    "overview": "Harness advanced browser capabilities: offloading heavy math to Web Workers, viewport detection with IntersectionObserver, and geolocation.",
    "lessons": [
      {
        "title": "Intersection Observer API for Lazy Loading & Infinite Feeds",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "IntersectionObserver: High-Performance Scroll Detection",
        "objective": "Trigger lazy image loading and infinite scroll pagination with IntersectionObserver without attaching sluggish window scroll listeners.",
        "theoryContent": "Traditional `scroll` event listeners fire hundreds of times per second on the main thread, leading to severe frame drops. `IntersectionObserver` executes asynchronously off the main thread, notifying your script only when elements enter or exit the viewport.",
        "codeSnippet": "const observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src; // Swap data-src to real src\n      obs.unobserve(img); // Stop observing once loaded\n    }\n  });\n}, { rootMargin: \"200px 0px\" }); // Preload 200px before entering screen\n\ndocument.querySelectorAll(\"img[data-src]\").forEach(img => observer.observe(img));",
        "handsOnActivity": {
          "title": "Hands-On Lab: Intersection Observer API for Lazy Loading & Infinite Feeds",
          "instructions": [
            "Create an IntersectionObserver with rootMargin: \"200px 0px\".",
            "Observe lazy images and swap data-src to src upon intersection.",
            "Call unobserve() to free memory once the asset has loaded."
          ],
          "starterCode": "const observer = new IntersectionObserver(...);",
          "expectedOutcome": "A 60 FPS scrolling experience that automatically defers asset downloading until elements approach the viewport."
        },
        "exam": {
          "title": "Intersection Observer API for Lazy Loading & Infinite Feeds - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-intersection-observer-api-for-",
              "question": "What is the performance advantage of IntersectionObserver over a window \"scroll\" event listener?",
              "options": [
                "IntersectionObserver runs asynchronously without causing layout thrashing on the main thread during scrolling",
                "IntersectionObserver compresses image file sizes by 30%",
                "IntersectionObserver requires zero JavaScript code",
                "IntersectionObserver automatically translates HTML text"
              ],
              "correctIndex": 0,
              "explanation": "IntersectionObserver does not poll continuously on the main thread, preventing UI stuttering and scroll lag."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Intersection Observer API for Lazy Loading & Infinite Feeds - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Intersection Observer API for Lazy Loading & Infinite Feeds. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Web Workers for Heavy Multi-Threaded Computational Tasks",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Multi-Threading in JavaScript with Web Workers",
        "objective": "Spawn background Web Worker threads to process intensive calculations (cryptography, image filters, CSV parsing) without freezing the UI.",
        "theoryContent": "JavaScript is single-threaded; long-running loops lock the UI, freezing animations and button clicks. Web Workers run in real operating system background threads, communicating with the main thread via message passing (`postMessage`).",
        "codeSnippet": "// worker.js\nself.onmessage = function(e) {\n  const { numbers } = e.data;\n  // Heavy computational sorting/filtering\n  const sorted = numbers.sort((a, b) => a - b);\n  self.postMessage({ result: sorted });\n};\n\n// main.js\nconst worker = new Worker(\"worker.js\");\nworker.postMessage({ numbers: [99, 42, 1, 58, 7] });\nworker.onmessage = function(e) {\n  console.log(\"Computation complete:\", e.data.result);\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: Web Workers for Heavy Multi-Threaded Computational Tasks",
          "instructions": [
            "Create a dedicated Web Worker file.",
            "Send data to the worker using worker.postMessage().",
            "Receive computed results on the main thread with worker.onmessage."
          ],
          "starterCode": "const worker = new Worker(\"worker.js\");",
          "expectedOutcome": "Heavy computations executing in the background while the main user interface remains 100% interactive and responsive."
        },
        "exam": {
          "title": "Web Workers for Heavy Multi-Threaded Computational Tasks - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-web-workers-for-heavy-multi-th",
              "question": "Can a Web Worker directly manipulate the DOM (e.g. document.getElementById)?",
              "options": [
                "No; Web Workers do not have access to the window, document, or DOM objects",
                "Yes; Web Workers have full direct access to the DOM",
                "Only if the browser is Google Chrome",
                "Yes, but only via innerHTML"
              ],
              "correctIndex": 0,
              "explanation": "Web Workers run in a distinct global execution context (WorkerGlobalScope) without direct access to the DOM."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Web Workers for Heavy Multi-Threaded Computational Tasks - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Web Workers for Heavy Multi-Threaded Computational Tasks. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Geolocation API & Device Orientation Permissions",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "HTML5 Geolocation API & Permissions Security",
        "objective": "Request user geolocation coordinates with getCurrentPosition() and watchPosition(), handling permission denials and privacy requirements.",
        "theoryContent": "The Geolocation API requires a secure HTTPS origin. Browsers prompt users for explicit permission. Developers must handle three standard error codes: `PERMISSION_DENIED`, `POSITION_UNAVAILABLE`, and `TIMEOUT`.",
        "codeSnippet": "function getUserCoordinates() {\n  return new Promise((resolve, reject) => {\n    if (!navigator.geolocation) {\n      return reject(new Error(\"Geolocation is not supported by your browser\"));\n    }\n    navigator.geolocation.getCurrentPosition(\n      (position) => resolve({\n        latitude: position.coords.latitude,\n        longitude: position.coords.longitude,\n        accuracy: position.coords.accuracy\n      }),\n      (err) => reject(err),\n      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }\n    );\n  });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Geolocation API & Device Orientation Permissions",
          "instructions": [
            "Wrap navigator.geolocation.getCurrentPosition in a Promise.",
            "Provide clear fallback UI if the user declines location permissions.",
            "Display latitude and longitude with accuracy radius."
          ],
          "starterCode": "navigator.geolocation.getCurrentPosition(success, error);",
          "expectedOutcome": "Secure, privacy-respecting location fetching with graceful degradation when access is declined."
        },
        "exam": {
          "title": "Geolocation API & Device Orientation Permissions - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-geolocation-api-device-orienta",
              "question": "Under what protocol must a website be served for the Geolocation API to function in modern browsers?",
              "options": [
                "HTTPS (Secure Context)",
                "HTTP/1.0",
                "FTP",
                "WebSocket (WSS) only"
              ],
              "correctIndex": 0,
              "explanation": "Sensitive browser capabilities including Geolocation require a Secure Context (HTTPS or localhost)."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Geolocation API & Device Orientation Permissions - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Geolocation API & Device Orientation Permissions. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Web Storage Quotas & Service Worker Caching Strategies",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Service Workers, Offline Caching & Cache Storage API",
        "objective": "Implement progressive web app (PWA) offline caching strategies (Cache-First, Network-First, Stale-While-Revalidate) using Service Workers.",
        "theoryContent": "Service Workers act as programmable client-side network proxies. They intercept HTTP requests and serve cached responses instantly, enabling web applications to load in offline environments or on slow 3G networks.",
        "codeSnippet": "self.addEventListener(\"fetch\", (event) => {\n  event.respondWith(\n    caches.match(event.request).then((cachedResponse) => {\n      // Cache-First strategy\n      if (cachedResponse) return cachedResponse;\n      return fetch(event.request).then((networkResponse) => {\n        return caches.open(\"v1-assets\").then((cache) => {\n          cache.put(event.request, networkResponse.clone());\n          return networkResponse;\n        });\n      });\n    })\n  );\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: Web Storage Quotas & Service Worker Caching Strategies",
          "instructions": [
            "Register a Service Worker in index.html.",
            "Precache core static assets in the sw install event.",
            "Implement a Stale-While-Revalidate caching strategy for dynamic content."
          ],
          "starterCode": "if (\"serviceWorker\" in navigator) { ... }",
          "expectedOutcome": "A resilient web application that loads instantly even with the network disconnected."
        },
        "exam": {
          "title": "Web Storage Quotas & Service Worker Caching Strategies - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-web-storage-quotas-service-wor",
              "question": "What is the primary role of a Service Worker in modern web applications?",
              "options": [
                "Acting as a client-side network proxy between the browser and network to handle offline caching and background sync",
                "Replacing CSS styles dynamically",
                "Mining cryptocurrency in idle browser tabs",
                "Compiling TypeScript directly in the browser"
              ],
              "correctIndex": 0,
              "explanation": "Service Workers intercept network traffic to orchestrate caching strategies and support offline capabilities."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Web Storage Quotas & Service Worker Caching Strategies - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Web Storage Quotas & Service Worker Caching Strategies. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_5_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: React 18 Core: JSX, Props, State & Component Lifecycle",
    "duration": "1.5 Weeks",
    "overview": "Master React 18 architectural fundamentals: JSX transpilation, TypeScript component typing, useState batching, and useEffect lifecycles.",
    "lessons": [
      {
        "title": "JSX Compilation, Component Trees & React Virtual DOM",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "JSX Under the Hood, Virtual DOM & React Fiber",
        "objective": "Understand how JSX compiles to React.createElement/jsxRuntime, how React Fiber manages reconciliation, and write clean functional components.",
        "theoryContent": "JSX is syntax sugar for JavaScript function calls. React maintains a Virtual DOM in memory. During reconciliation, React diffs the new Virtual DOM against the previous version and applies only the minimal necessary updates to the actual browser DOM.",
        "codeSnippet": "import React from \"react\";\n\ninterface WelcomeBannerProps {\n  instructorName: string;\n  organization: string;\n  isVerified?: boolean;\n}\n\nexport const WelcomeBanner: React.FC<WelcomeBannerProps> = ({\n  instructorName,\n  organization,\n  isVerified = true\n}) => {\n  return (\n    <header className=\"p-6 bg-slate-900 text-white rounded-xl shadow-lg\">\n      <h1 className=\"text-2xl font-bold\">{instructorName}</h1>\n      <p className=\"text-sm text-slate-400\">{organization}</p>\n      {isVerified && <span className=\"text-emerald-400 font-semibold\">✓ Verified Leader</span>}\n    </header>\n  );\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: JSX Compilation, Component Trees & React Virtual DOM",
          "instructions": [
            "Write a TypeScript functional component with explicit interface props.",
            "Use conditional rendering with short-circuit && and ternary operators.",
            "Inspect JSX compilation output using Babel REPL."
          ],
          "starterCode": "export function Header(props) { return <div>{props.title}</div>; }",
          "expectedOutcome": "A strictly typed React component with robust conditional rendering and pristine DOM output."
        },
        "exam": {
          "title": "JSX Compilation, Component Trees & React Virtual DOM - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-jsx-compilation-component-tree",
              "question": "What is the purpose of the key prop when rendering lists in React?",
              "options": [
                "It gives React Fiber a stable identity for each element to efficiently reconcile, reorder, and update DOM nodes",
                "It sets the CSS z-index property of the element",
                "It encrypts component data in memory",
                "It connects the component to Redux state"
              ],
              "correctIndex": 0,
              "explanation": "Keys allow React Fiber to track item identities across renders, avoiding expensive recreation of unaffected elements."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "JSX Compilation, Component Trees & React Virtual DOM - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for JSX Compilation, Component Trees & React Virtual DOM. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "TypeScript Interfaces for Component Props & Strict Typing",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "TypeScript in React: Interfaces, Generics & Event Handlers",
        "objective": "Type component props, children (ReactNode), click events (React.MouseEvent), and input changes (React.ChangeEvent) with zero any types.",
        "theoryContent": "Enterprise React requires strict TypeScript. Using `interface` allows extensibility, while explicit typing for synthetic events prevents runtime crashes when accessing event targets.",
        "codeSnippet": "import React from \"react\";\n\ninterface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?: \"primary\" | \"secondary\" | \"danger\";\n  isLoading?: boolean;\n  children: React.ReactNode;\n}\n\nexport const ActionButton: React.FC<ButtonProps> = ({\n  variant = \"primary\",\n  isLoading = false,\n  children,\n  disabled,\n  ...rest\n}) => {\n  const baseStyles = \"px-4 py-2 rounded-lg font-medium transition-colors\";\n  const variantStyles = variant === \"primary\" ? \"bg-blue-600 text-white\" : \"bg-slate-200 text-slate-900\";\n  \n  return (\n    <button disabled={disabled || isLoading} className={`${baseStyles} ${variantStyles}`} {...rest}>\n      {isLoading ? \"Processing...\" : children}\n    </button>\n  );\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: TypeScript Interfaces for Component Props & Strict Typing",
          "instructions": [
            "Extend standard HTML button attributes in a TypeScript interface.",
            "Type event handler callbacks like onChange: (e: React.ChangeEvent<HTMLInputElement>) => void.",
            "Build reusable polymorphic buttons with variant props."
          ],
          "starterCode": "interface Props { title: string; }",
          "expectedOutcome": "Zero TypeScript lint errors, complete IDE autocomplete, and compile-time prop safety."
        },
        "exam": {
          "title": "TypeScript Interfaces for Component Props & Strict Typing - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-typescript-interfaces-for-comp",
              "question": "Which TypeScript type should be used for a prop that accepts any valid React child element (JSX, strings, numbers, fragments)?",
              "options": [
                "React.ReactNode",
                "React.Element",
                "JSX.Element",
                "string | number"
              ],
              "correctIndex": 0,
              "explanation": "React.ReactNode is the most comprehensive type, covering JSX elements, strings, numbers, null, and fragments."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "TypeScript Interfaces for Component Props & Strict Typing - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for TypeScript Interfaces for Component Props & Strict Typing. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "useState Hook, State Batching & Controlled Form Inputs",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "React 18 Automatic Batching & Controlled Inputs",
        "objective": "Manage local component state with useState, understand React 18 automatic batching, and implement two-way controlled form bindings.",
        "theoryContent": "In React 18, state updates are automatically batched across timeouts, promises, and native event listeners, minimizing re-renders. When state updates depend on the previous value, always use the functional updater form `setCount(prev => prev + 1)`.",
        "codeSnippet": "import React, { useState } from \"react\";\n\nexport const StudentRegistrationForm: React.FC = () => {\n  const [formData, setFormData] = useState({ fullName: \"\", email: \"\", track: \"web\" });\n  \n  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n  };\n  \n  return (\n    <form onSubmit={(e) => { e.preventDefault(); console.log(formData); }}>\n      <input name=\"fullName\" value={formData.fullName} onChange={handleChange} />\n      <input name=\"email\" type=\"email\" value={formData.email} onChange={handleChange} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: useState Hook, State Batching & Controlled Form Inputs",
          "instructions": [
            "Create a single state object to manage multi-field form inputs.",
            "Use computed property names [name]: value for unified change handling.",
            "Apply the functional updater pattern to prevent stale closure bugs."
          ],
          "starterCode": "const [name, setName] = useState(\"\");",
          "expectedOutcome": "A tightly controlled form where UI state reflects JavaScript state with zero out-of-sync fields."
        },
        "exam": {
          "title": "useState Hook, State Batching & Controlled Form Inputs - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-usestate-hook-state-batching-c",
              "question": "Why should you pass a callback function to setState (e.g. setCount(prev => prev + 1)) when computing next state from previous state?",
              "options": [
                "Because state updates are asynchronous and batched; the callback guarantees access to the freshest state value",
                "Because it runs in a separate Web Worker thread",
                "Because React throws an error without callbacks",
                "Because it reduces bundle size"
              ],
              "correctIndex": 0,
              "explanation": "Functional updaters ensure you operate on the latest resolved state, preventing stale closure race conditions."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "useState Hook, State Batching & Controlled Form Inputs - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for useState Hook, State Batching & Controlled Form Inputs. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "useEffect Hook: Dependency Arrays, Cleanup & Effect Lifecycle",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Mastering useEffect: Lifecycles, Dependencies & Cleanups",
        "objective": "Synchronize components with external systems, manage dependency arrays accurately, and implement cleanup functions to prevent memory leaks.",
        "theoryContent": "The `useEffect` hook runs side effects after rendering. The dependency array specifies when the effect should re-run. Returning a cleanup function guarantees subscriptions, event listeners, and timers are dismantled before re-running or unmounting.",
        "codeSnippet": "import React, { useState, useEffect } from \"react\";\n\nexport const WindowWidthTracker: React.FC = () => {\n  const [width, setWidth] = useState(window.innerWidth);\n  \n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", handleResize);\n    \n    // Cleanup function executed on unmount or before re-running\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []); // Empty array = mount/unmount only\n  \n  return <p>Current Viewport Width: {width}px</p>;\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: useEffect Hook: Dependency Arrays, Cleanup & Effect Lifecycle",
          "instructions": [
            "Attach a global event listener inside useEffect.",
            "Return a cleanup function that removes the listener on unmount.",
            "Verify with React DevTools that no memory leaks occur when toggling the component."
          ],
          "starterCode": "useEffect(() => { window.addEventListener(\"scroll\", ...); });",
          "expectedOutcome": "Clean effect synchronization with zero lingering event listeners or memory leaks upon component unmount."
        },
        "exam": {
          "title": "useEffect Hook: Dependency Arrays, Cleanup & Effect Lifecycle - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-useeffect-hook-dependency-arra",
              "question": "When does the cleanup function returned inside useEffect execute?",
              "options": [
                "Before the effect re-runs on dependency changes, and when the component unmounts",
                "Only once when the browser window closes",
                "Immediately before the first render",
                "Synchronously on every mouse click"
              ],
              "correctIndex": 0,
              "explanation": "React executes the cleanup function prior to running the effect again and when the component unmounts from the DOM."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "useEffect Hook: Dependency Arrays, Cleanup & Effect Lifecycle - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for useEffect Hook: Dependency Arrays, Cleanup & Effect Lifecycle. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Advanced React Hooks & Context State Architecture",
    "duration": "1.5 Weeks",
    "overview": "Scale component logic with useRef, useMemo, useCallback, useReducer state machines, and React Context API stores.",
    "lessons": [
      {
        "title": "useRef for Imperative DOM Control & Render-Persistent State",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "useRef Hook: DOM References & Mutable Instance Variables",
        "objective": "Focus inputs imperatively, hold mutable references across renders without triggering re-renders, and manage interval IDs.",
        "theoryContent": "Unlike `useState`, updating `useRef.current` does not trigger a component re-render. It is ideal for storing timer IDs, previous state values, and obtaining direct references to underlying DOM nodes.",
        "codeSnippet": "import React, { useRef, useEffect } from \"react\";\n\nexport const SearchModal: React.FC = () => {\n  const inputRef = useRef<HTMLInputElement>(null);\n  const renderCount = useRef(0);\n  \n  useEffect(() => {\n    renderCount.current += 1;\n    inputRef.current?.focus(); // Focus input automatically on mount\n  });\n  \n  return (\n    <div>\n      <input ref={inputRef} placeholder=\"Search courses...\" />\n      <p>Render Count: {renderCount.current}</p>\n    </div>\n  );\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: useRef for Imperative DOM Control & Render-Persistent State",
          "instructions": [
            "Attach a ref to an input element and focus it imperatively on modal open.",
            "Store an active setInterval ID inside a ref to clear it deterministically.",
            "Track render count without causing recursive re-render loops."
          ],
          "starterCode": "const inputRef = useRef(null);",
          "expectedOutcome": "Direct DOM control and persistent mutable state that never triggers unnecessary component re-renders."
        },
        "exam": {
          "title": "useRef for Imperative DOM Control & Render-Persistent State - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-useref-for-imperative-dom-cont",
              "question": "Does updating ref.current cause the component to re-render?",
              "options": [
                "No; modifying ref.current does not trigger a re-render",
                "Yes; it re-renders immediately",
                "Only in development mode",
                "Yes, but only if wrapped in useState"
              ],
              "correctIndex": 0,
              "explanation": "useRef provides a plain mutable JavaScript object whose mutations do not trigger React re-renders."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "useRef for Imperative DOM Control & Render-Persistent State - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for useRef for Imperative DOM Control & Render-Persistent State. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "useMemo & useCallback for Pure Component Performance Tuning",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "React Performance Tuning: useMemo, useCallback & React.memo",
        "objective": "Prevent expensive computational re-calculations with useMemo, and preserve referential equality of callbacks with useCallback.",
        "theoryContent": "Every time a component re-renders, functions declared inside it are recreated with new memory references, breaking `React.memo` child optimizations. `useCallback` caches the function reference until dependencies change.",
        "codeSnippet": "import React, { useState, useMemo, useCallback } from \"react\";\n\nexport const CourseCatalog: React.FC<{ courses: any[] }> = ({ courses }) => {\n  const [query, setQuery] = useState(\"\");\n  \n  // Memoize expensive filtered array\n  const filteredCourses = useMemo(() => {\n    return courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));\n  }, [courses, query]);\n  \n  // Preserve callback reference\n  const handleSelect = useCallback((courseId: string) => {\n    console.log(\"Selected:\", courseId);\n  }, []);\n  \n  return <CourseList items={filteredCourses} onSelect={handleSelect} />;\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: useMemo & useCallback for Pure Component Performance Tuning",
          "instructions": [
            "Wrap an expensive data filtering calculation in useMemo.",
            "Wrap event handler props passed to memoized children in useCallback.",
            "Profile render timings with React DevTools Profiler."
          ],
          "starterCode": "const filtered = items.filter(...);",
          "expectedOutcome": "Optimized rendering where child components only re-render when their direct props change referentially."
        },
        "exam": {
          "title": "useMemo & useCallback for Pure Component Performance Tuning - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-usememo-usecallback-for-pure-c",
              "question": "What is the primary distinction between useMemo and useCallback?",
              "options": [
                "useMemo caches the result of calling a function; useCallback caches the function definition itself",
                "useCallback runs asynchronously on a worker thread",
                "useMemo only works with numbers",
                "There is no difference; they are aliases"
              ],
              "correctIndex": 0,
              "explanation": "useMemo returns a memoized value; useCallback returns a memoized callback function definition."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "useMemo & useCallback for Pure Component Performance Tuning - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for useMemo & useCallback for Pure Component Performance Tuning. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "useReducer for Predictable Complex Component State Machines",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "useReducer: Complex State Management & Reducer Patterns",
        "objective": "Manage interdependent state transitions, complex shopping carts, and multi-step wizards using pure reducer functions and dispatched actions.",
        "theoryContent": "When multiple state variables update together or next state depends on complex previous state conditions, `useState` becomes error-prone. `useReducer` centralizes state mutations into a pure function `(state, action) => newState`.",
        "codeSnippet": "type CartAction = \n  | { type: \"ADD_ITEM\"; payload: { id: string; price: number } }\n  | { type: \"REMOVE_ITEM\"; payload: string }\n  | { type: \"CLEAR\" };\n\ninterface CartState { items: { id: string; price: number }[]; total: number; }\n\nfunction cartReducer(state: CartState, action: CartAction): CartState {\n  switch (action.type) {\n    case \"ADD_ITEM\":\n      return { items: [...state.items, action.payload], total: state.total + action.payload.price };\n    case \"REMOVE_ITEM\":\n      const filtered = state.items.filter(i => i.id !== action.payload);\n      return { items: filtered, total: filtered.reduce((acc, i) => acc + i.price, 0) };\n    case \"CLEAR\":\n      return { items: [], total: 0 };\n    default:\n      return state;\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: useReducer for Predictable Complex Component State Machines",
          "instructions": [
            "Define discriminated union types for reducer actions.",
            "Implement pure reducer function with zero side effects.",
            "Dispatch actions from UI buttons and verify state transitions."
          ],
          "starterCode": "const [state, dispatch] = useReducer(reducer, initial);",
          "expectedOutcome": "A rock-solid, predictable state machine where every possible state transition is explicitly defined and typed."
        },
        "exam": {
          "title": "useReducer for Predictable Complex Component State Machines - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-usereducer-for-predictable-com",
              "question": "Why must a reducer function in useReducer be a pure function?",
              "options": [
                "Because unpredictable side effects in reducers make state time-travel, testing, and debugging impossible and cause UI tearing",
                "Because impure reducers cannot compile in TypeScript",
                "Because React converts reducers to WebAssembly",
                "Because reducers run on the backend server"
              ],
              "correctIndex": 0,
              "explanation": "Pure reducers take (state, action) and deterministically return newState without modifying external variables or triggering side effects."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "useReducer for Predictable Complex Component State Machines - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for useReducer for Predictable Complex Component State Machines. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "React Context API with TypeScript for Global State Stores",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "React Context API + Custom Hooks Architecture",
        "objective": "Eliminate prop-drilling by creating strongly-typed global Context providers with encapsulated custom hooks (e.g. useAuth, useTheme).",
        "theoryContent": "Passing props through 5 layers of intermediate components (prop drilling) makes code brittle. React Context allows data to be broadcast to any descendant component. Encapsulating the context inside a custom hook guarantees fail-safe consumer usage.",
        "codeSnippet": "import React, { createContext, useContext, useState } from \"react\";\n\ninterface AuthContextType {\n  user: { name: string; role: string } | null;\n  login: (user: any) => void;\n  logout: () => void;\n}\n\nconst AuthContext = createContext<AuthContextType | undefined>(undefined);\n\nexport const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {\n  const [user, setUser] = useState<any>(null);\n  return (\n    <AuthContext.Provider value={{ user, login: setUser, logout: () => setUser(null) }}>\n      {children}\n    </AuthContext.Provider>\n  );\n};\n\nexport const useAuth = () => {\n  const context = useContext(AuthContext);\n  if (!context) throw new Error(\"useAuth must be used within an AuthProvider\");\n  return context;\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: React Context API with TypeScript for Global State Stores",
          "instructions": [
            "Create a strongly-typed Context with createContext<Type | undefined>(undefined).",
            "Build a Provider component managing state.",
            "Export a custom hook that throws an error if consumed outside its Provider."
          ],
          "starterCode": "const MyContext = createContext(null);",
          "expectedOutcome": "A clean, centralized authentication and global state layer with zero prop drilling."
        },
        "exam": {
          "title": "React Context API with TypeScript for Global State Stores - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-react-context-api-with-typescr",
              "question": "Why should custom context hooks throw an error if useContext(Context) returns undefined?",
              "options": [
                "It alerts developers immediately at runtime if a component tries to consume the context without being wrapped in its Provider",
                "It forces the browser to restart the React application",
                "It allows Context to run faster in production",
                "It is required by the React compiler"
              ],
              "correctIndex": 0,
              "explanation": "Throwing an explicit error immediately catches missing Provider wrappers during development, eliminating silent undefined bugs."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "React Context API with TypeScript for Global State Stores - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for React Context API with TypeScript for Global State Stores. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Custom Hooks, Form Libraries & Enterprise UI Patterns",
    "duration": "1 Week",
    "overview": "Build production-ready custom hooks, integrate React Hook Form with Zod schema validation, and implement compound components.",
    "lessons": [
      {
        "title": "Custom Hooks: Encapsulating Reusable Data Fetching Logic",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Writing Reusable Custom Hooks in React & TypeScript",
        "objective": "Extract repetitive stateful logic (fetching, loading, errors, caching) into clean, reusable custom hooks like useFetch and useLocalStorage.",
        "theoryContent": "Custom hooks are JavaScript functions whose names start with `use` and that can call other React hooks. They allow business logic and asynchronous workflows to be shared across dozens of components without duplicate code.",
        "codeSnippet": "import { useState, useEffect } from \"react\";\n\nexport function useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState<string | null>(null);\n  \n  useEffect(() => {\n    let isMounted = true;\n    setIsLoading(true);\n    fetch(url)\n      .then(res => res.json())\n      .then(json => { if (isMounted) { setData(json); setError(null); } })\n      .catch(err => { if (isMounted) setError(err.message); })\n      .finally(() => { if (isMounted) setIsLoading(false); });\n    return () => { isMounted = false; };\n  }, [url]);\n  \n  return { data, isLoading, error };\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Custom Hooks: Encapsulating Reusable Data Fetching Logic",
          "instructions": [
            "Build a generic useFetch<T> custom hook supporting TypeScript generics.",
            "Handle unmounted component cleanup using a boolean or AbortController.",
            "Consume the hook inside multiple course display components."
          ],
          "starterCode": "export function useFetch(url) { /* write hook */ }",
          "expectedOutcome": "Reusable data-fetching hooks that eliminate hundreds of lines of duplicate boilerplate across views."
        },
        "exam": {
          "title": "Custom Hooks: Encapsulating Reusable Data Fetching Logic - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-custom-hooks-encapsulating-reu",
              "question": "What rule must all custom hooks follow in React?",
              "options": [
                "Their name must begin with the word \"use\", and they must follow the Rules of Hooks (only call hooks at the top level)",
                "They must return JSX elements",
                "They must be defined in the root directory",
                "They must be compiled with Webpack"
              ],
              "correctIndex": 0,
              "explanation": "Custom hooks must start with \"use\" to enable React linter enforcement of hook ordering and top-level execution rules."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Custom Hooks: Encapsulating Reusable Data Fetching Logic - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Custom Hooks: Encapsulating Reusable Data Fetching Logic. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Type-Safe Forms with React Hook Form & Zod Schema Validation",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "React Hook Form + Zod: Enterprise Type-Safe Form Architecture",
        "objective": "Build performant, uncontrolled forms with React Hook Form, integrate Zod validation schemas, and achieve automated TypeScript type inference.",
        "theoryContent": "Traditional controlled inputs re-render the entire component on every keystroke. React Hook Form uses uncontrolled inputs via refs, isolating re-renders to only invalid fields. Paired with Zod, form validation schemas become the single source of truth.",
        "codeSnippet": "import { useForm } from \"react-hook-form\";\nimport { z } from \"zod\";\nimport { zodResolver } from \"@hookform/resolvers/zod\";\n\nconst enrollmentSchema = z.object({\n  fullName: z.string().min(3, \"Full name must be at least 3 characters\"),\n  email: z.string().email(\"Please enter a valid corporate email\"),\n  trackId: z.string().min(1, \"Please select a technical track\")\n});\n\ntype EnrollmentFormData = z.infer<typeof enrollmentSchema>;\n\nexport const EnrollmentForm = () => {\n  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EnrollmentFormData>({\n    resolver: zodResolver(enrollmentSchema)\n  });\n  \n  const onSubmit = async (data: EnrollmentFormData) => console.log(data);\n  return <form onSubmit={handleSubmit(onSubmit)}>...</form>;\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: Type-Safe Forms with React Hook Form & Zod Schema Validation",
          "instructions": [
            "Define a Zod validation schema with string lengths and regex patterns.",
            "Infer form TypeScript types automatically with z.infer<typeof schema>.",
            "Connect React Hook Form using zodResolver and display field error messages."
          ],
          "starterCode": "const schema = z.object({ ... });",
          "expectedOutcome": "Enterprise form validation with zero unnecessary re-renders and end-to-end schema-to-type synchronization."
        },
        "exam": {
          "title": "Type-Safe Forms with React Hook Form & Zod Schema Validation - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-type-safe-forms-with-react-hoo",
              "question": "What is the architectural benefit of using Zod with React Hook Form?",
              "options": [
                "Zod schemas provide runtime validation while automatically inferring TypeScript static types, eliminating duplicate interface definitions",
                "Zod replaces CSS styling",
                "Zod converts forms to SQL tables",
                "Zod automatically submits forms to Google Sheets"
              ],
              "correctIndex": 0,
              "explanation": "Zod provides both runtime validation rules and compile-time TypeScript type inference from a single definition."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Type-Safe Forms with React Hook Form & Zod Schema Validation - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Type-Safe Forms with React Hook Form & Zod Schema Validation. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Compound Component Pattern & Accessible Modal Architecture",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Compound Components in React: Tabs, Modals & Dropdowns",
        "objective": "Implement the compound component pattern (e.g. <Modal><Modal.Header /><Modal.Body /></Modal>) sharing internal context implicitly.",
        "theoryContent": "The compound component pattern provides flexible, expressive component APIs. Instead of passing 20 configuration props, compound components share state via internal Context, allowing consumers to arrange sub-elements freely.",
        "codeSnippet": "const ModalContext = createContext<{ isOpen: boolean; close: () => void } | null>(null);\n\nexport const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> & {\n  Header: React.FC<{ children: React.ReactNode }>;\n  Body: React.FC<{ children: React.ReactNode }>;\n} = ({ isOpen, onClose, children }) => {\n  if (!isOpen) return null;\n  return (\n    <ModalContext.Provider value={{ isOpen, close: onClose }}>\n      <div className=\"modal-backdrop\"><div className=\"modal-box\">{children}</div></div>\n    </ModalContext.Provider>\n  );\n};\nModal.Header = ({ children }) => <div className=\"modal-header\">{children}</div>;\nModal.Body = ({ children }) => <div className=\"modal-body\">{children}</div>;",
        "handsOnActivity": {
          "title": "Hands-On Lab: Compound Component Pattern & Accessible Modal Architecture",
          "instructions": [
            "Create a compound component sharing state via internal Context.",
            "Attach sub-components (Header, Body, Footer) as static properties on the main component.",
            "Render flexible layouts without passing repetitive handler props."
          ],
          "starterCode": "export const Tabs = () => { ... };",
          "expectedOutcome": "A clean, highly modular component API that empowers developers to compose UI elements naturally."
        },
        "exam": {
          "title": "Compound Component Pattern & Accessible Modal Architecture - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-compound-component-pattern-acc",
              "question": "What makes the compound component pattern superior to single \"prop-heavy\" mega-components?",
              "options": [
                "It provides maximum UI flexibility and declarative composition without ballooning props or hardcoding layout structure",
                "It reduces browser memory by 90%",
                "It compiles without TypeScript",
                "It requires no JavaScript at runtime"
              ],
              "correctIndex": 0,
              "explanation": "Compound components separate concerns into composable pieces that share implicit state, avoiding prop explosion."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Compound Component Pattern & Accessible Modal Architecture - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Compound Component Pattern & Accessible Modal Architecture. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "React 18 Concurrent Features: useTransition & Suspense",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "React 18 Concurrent Rendering: Suspense & useTransition",
        "objective": "Differentiate urgent updates (typing) from non-urgent transitions (filtering thousands of items) using startTransition and useTransition.",
        "theoryContent": "Prior to React 18, large rendering jobs blocked the browser, freezing user typing. React 18 introduces concurrent rendering: wrapping non-urgent updates in `startTransition` lets React pause long renders to handle immediate user keystrokes.",
        "codeSnippet": "import React, { useState, useTransition } from \"react\";\n\nexport const FilterableList: React.FC<{ allItems: string[] }> = ({ allItems }) => {\n  const [query, setQuery] = useState(\"\");\n  const [filtered, setFiltered] = useState(allItems);\n  const [isPending, startTransition] = useTransition();\n  \n  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const value = e.target.value;\n    setQuery(value); // Urgent update: immediate input reflection\n    \n    startTransition(() => {\n      // Non-urgent transition update: can be interrupted by typing\n      setFiltered(allItems.filter(item => item.toLowerCase().includes(value.toLowerCase())));\n    });\n  };\n  \n  return (\n    <div>\n      <input value={query} onChange={handleInputChange} />\n      {isPending && <p>Filtering list...</p>}\n      <ul>{filtered.map(i => <li key={i}>{i}</li>)}</ul>\n    </div>\n  );\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: React 18 Concurrent Features: useTransition & Suspense",
          "instructions": [
            "Wrap a massive list filtering state update inside startTransition.",
            "Display isPending loading indicators while the background render progresses.",
            "Verify keystrokes never stutter or lag during heavy computations."
          ],
          "starterCode": "const [isPending, startTransition] = useTransition();",
          "expectedOutcome": "Silky smooth typing responsiveness even when rendering complex datasets of tens of thousands of items."
        },
        "exam": {
          "title": "React 18 Concurrent Features: useTransition & Suspense - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-react-18-concurrent-features-u",
              "question": "What is the purpose of React 18 useTransition?",
              "options": [
                "To mark state updates as non-urgent transitions, keeping the user interface responsive to high-priority interactions like typing",
                "To apply CSS page flip transitions",
                "To transition between React and Angular",
                "To animate elements across the screen"
              ],
              "correctIndex": 0,
              "explanation": "useTransition marks state updates as interruptible transitions, ensuring typing and clicks remain responsive."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "React 18 Concurrent Features: useTransition & Suspense - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for React 18 Concurrent Features: useTransition & Suspense. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_6_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: Node.js Runtime Architecture, Event Loop & File System",
    "duration": "1.5 Weeks",
    "overview": "Master the Node.js V8 runtime, Libuv thread pool, CommonJS vs ES Modules, asynchronous file streaming, and process lifecycles.",
    "lessons": [
      {
        "title": "V8 Engine, Libuv, Single-Threaded Event Loop & Worker Threads",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Node.js Architecture: V8, Libuv & Thread Pool Deep Dive",
        "objective": "Understand how Node.js achieves high-concurrency non-blocking I/O via Libuv, understand the 4-thread default thread pool, and spawn Worker Threads.",
        "theoryContent": "Node.js executes JavaScript on a single thread powered by Google V8. Asynchronous file I/O, DNS lookups, and crypto hashing are delegated to the underlying Libuv C-library thread pool, returning to the JavaScript event loop upon completion.",
        "codeSnippet": "import { Worker, isMainThread, parentPort, workerData } from \"node:worker_threads\";\nimport os from \"node:os\";\n\nif (isMainThread) {\n  console.log(`Main thread running on PID: ${process.pid}`);\n  const worker = new Worker(new URL(import.meta.url), {\n    workerData: { payload: \"10,000,000 prime numbers\" }\n  });\n  worker.on(\"message\", result => console.log(\"Worker finished:\", result));\n} else {\n  // Heavy CPU work off the main event loop\n  parentPort?.postMessage({ status: \"done\", workerPid: process.pid });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: V8 Engine, Libuv, Single-Threaded Event Loop & Worker Threads",
          "instructions": [
            "Inspect Node.js process environment variables and memory metrics.",
            "Offload a CPU-heavy cryptographic hash calculation to a Worker Thread.",
            "Verify main event loop responsiveness during worker execution."
          ],
          "starterCode": "import { isMainThread } from \"node:worker_threads\";",
          "expectedOutcome": "Deep architectural understanding of Node.js thread management and non-blocking asynchronous I/O."
        },
        "exam": {
          "title": "V8 Engine, Libuv, Single-Threaded Event Loop & Worker Threads - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-v8-engine-libuv-single-threade",
              "question": "Which underlying C library provides Node.js with its event loop and cross-platform asynchronous I/O thread pool?",
              "options": [
                "Libuv",
                "OpenSSL",
                "V8",
                "Zlib"
              ],
              "correctIndex": 0,
              "explanation": "Libuv is the multi-platform C library that handles the event loop, thread pool, and asynchronous I/O in Node.js."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "V8 Engine, Libuv, Single-Threaded Event Loop & Worker Threads - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for V8 Engine, Libuv, Single-Threaded Event Loop & Worker Threads. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Node.js Module Systems: CommonJS vs ES Modules (ESM)",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Modern Node.js: Migrating from CommonJS to ES Modules",
        "objective": "Configure \"type\": \"module\" in package.json, use import/export syntax, understand top-level await, and interoperate between ESM and CJS.",
        "theoryContent": "CommonJS (`require`/`module.exports`) operates synchronously at runtime. Modern ES Modules (`import`/`export`) are statically analyzed at compile time, enabling tree-shaking, top-level await, and browser-standard interoperability.",
        "codeSnippet": "// package.json: { \"type\": \"module\" }\nimport path from \"node:path\";\nimport { fileURLToPath } from \"node:url\";\n\n// Emulating __dirname in ES Modules\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(__filename);\n\n// Top-level await is natively supported in ESM!\nconst config = await import(\"./config.json\", { with: { type: \"json\" } });\nconsole.log(`Server starting on port: ${config.default.port}`);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Node.js Module Systems: CommonJS vs ES Modules (ESM)",
          "instructions": [
            "Configure a project for native ES Modules using package.json.",
            "Emulate __dirname and __filename using fileURLToPath and import.meta.url.",
            "Execute asynchronous initialization with top-level await."
          ],
          "starterCode": "const express = require(\"express\");",
          "expectedOutcome": "Modern ES Module backend architecture fully aligned with modern ECMAScript standards."
        },
        "exam": {
          "title": "Node.js Module Systems: CommonJS vs ES Modules (ESM) - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-node-js-module-systems-commonj",
              "question": "How do you enable native ES Module (import/export) syntax in a Node.js project?",
              "options": [
                "Add \"type\": \"module\" to package.json, or use .mjs file extensions",
                "Install Babel CLI globally",
                "Add \"esm\": true to tsconfig.json",
                "Node.js does not support ES Modules"
              ],
              "correctIndex": 0,
              "explanation": "Setting \"type\": \"module\" in package.json tells Node.js to treat all .js files in the project as native ES Modules."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Node.js Module Systems: CommonJS vs ES Modules (ESM) - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Node.js Module Systems: CommonJS vs ES Modules (ESM). Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "File System (fs/promises) & Stream Buffers for Large Files",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Node.js Streams & Buffers: Handling Gigabyte Payloads",
        "objective": "Read and write files asynchronously using fs/promises, and stream multi-gigabyte files using Readable and Writable streams without RAM overflow.",
        "theoryContent": "Using `fs.readFile()` loads the entire file into server RAM, crashing the process when processing 2GB video or log files. Streams process data chunk-by-chunk in memory buffers, maintaining constant low RAM usage.",
        "codeSnippet": "import { createReadStream, createWriteStream } from \"node:fs\";\nimport { pipeline } from \"node:stream/promises\";\nimport { createGzip } from \"node:zlib\";\n\nasync function compressLargeLog(sourcePath, destPath) {\n  console.log(\"Streaming compression started...\");\n  await pipeline(\n    createReadStream(sourcePath),\n    createGzip(),\n    createWriteStream(destPath)\n  );\n  console.log(\"Streaming compression finished with minimal memory footprint!\");\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: File System (fs/promises) & Stream Buffers for Large Files",
          "instructions": [
            "Read and write files asynchronously using fs/promises.",
            "Stream a large file through zlib compression using stream pipeline.",
            "Monitor memory consumption to prove zero RAM spikes."
          ],
          "starterCode": "import fs from \"node:fs/promises\";",
          "expectedOutcome": "High-throughput stream processing pipeline capable of handling gigabytes of data on modest servers."
        },
        "exam": {
          "title": "File System (fs/promises) & Stream Buffers for Large Files - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-file-system-fs-promises-stream",
              "question": "Why should stream pipeline be used instead of fs.readFile for handling very large files in Node.js?",
              "options": [
                "Streams process data in small chunks, keeping memory consumption low regardless of file size, whereas fs.readFile loads the whole file into RAM",
                "Streams run faster because they bypass the hard drive",
                "fs.readFile cannot read text files",
                "Streams encrypt files automatically"
              ],
              "correctIndex": 0,
              "explanation": "Streams chunk data into small buffer segments, preventing Out Of Memory (OOM) fatal process crashes."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "File System (fs/promises) & Stream Buffers for Large Files - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for File System (fs/promises) & Stream Buffers for Large Files. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Environment Configuration with dotenv & Process Lifecycle",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Managing Environment Secrets & Graceful Server Shutdown",
        "objective": "Load configuration via .env, validate required variables on startup with Zod/envalid, and orchestrate graceful shutdown on SIGTERM/SIGINT.",
        "theoryContent": "Hardcoding secrets in source code causes critical data breaches. Environment variables store secrets outside git. When a container shuts down, listening for `SIGTERM` allows closing database pools and active HTTP requests gracefully.",
        "codeSnippet": "import express from \"express\";\nimport \"dotenv/config\";\n\nconst app = express();\nconst PORT = process.env.PORT || 4000;\nconst server = app.listen(PORT, () => console.log(`Server listening on :${PORT}`));\n\n// Graceful shutdown handler\nconst shutdown = (signal) => {\n  console.log(`Received ${signal}. Closing HTTP server gracefully...`);\n  server.close(() => {\n    console.log(\"HTTP server closed. Exiting process.\");\n    process.exit(0);\n  });\n};\nprocess.on(\"SIGTERM\", () => shutdown(\"SIGTERM\"));\nprocess.on(\"SIGINT\", () => shutdown(\"SIGINT\"));",
        "handsOnActivity": {
          "title": "Hands-On Lab: Environment Configuration with dotenv & Process Lifecycle",
          "instructions": [
            "Store database credentials in an untracked .env file.",
            "Validate required environment variables during bootstrap.",
            "Implement SIGTERM graceful shutdown hooks to close open connections."
          ],
          "starterCode": "process.on(\"SIGTERM\", ...);",
          "expectedOutcome": "A cloud-ready enterprise Node.js server that gracefully drains connections during zero-downtime rolling deployments."
        },
        "exam": {
          "title": "Environment Configuration with dotenv & Process Lifecycle - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-environment-configuration-with",
              "question": "What signal does Docker or Kubernetes send to a container when requesting it to terminate gracefully?",
              "options": [
                "SIGTERM",
                "SIGKILL",
                "SIGSTOP",
                "SIGHUP"
              ],
              "correctIndex": 0,
              "explanation": "SIGTERM requests graceful termination, giving the process time to close connections before a force-kill SIGKILL."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Environment Configuration with dotenv & Process Lifecycle - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Environment Configuration with dotenv & Process Lifecycle. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Express.js Framework, Middleware Chains & Routing",
    "duration": "1.5 Weeks",
    "overview": "Architect modular Express applications with router hierarchies, custom middleware chains, CORS security, and RESTful route design.",
    "lessons": [
      {
        "title": "Express Application Architecture & Express Router Sub-modules",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Modular Express Application Architecture & Routing",
        "objective": "Structure enterprise backend codebases into controllers, services, and modular express.Router() instances mounted at API versioned prefixes.",
        "theoryContent": "Placing all routes in a single index.js creates spaghetti code. Modular architecture isolates domain logic: `routes/courses.ts` handles endpoint definitions, `controllers/` handles HTTP parsing, and `services/` contains database queries.",
        "codeSnippet": "import { Router } from \"express\";\nconst router = Router();\n\n// Domain sub-router\nrouter.get(\"/\", async (req, res) => {\n  res.json({ success: true, courses: [] });\n});\n\nrouter.get(\"/:id\", async (req, res) => {\n  const { id } = req.params;\n  res.json({ id, title: \"Course Details\" });\n});\n\nexport default router;\n\n// In main app.js: app.use(\"/api/v1/courses\", courseRouter);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Express Application Architecture & Express Router Sub-modules",
          "instructions": [
            "Create a decoupled domain router using express.Router().",
            "Mount router under /api/v1/ namespace in the primary server app.",
            "Extract path parameters (req.params) and query strings (req.query)."
          ],
          "starterCode": "const router = express.Router();",
          "expectedOutcome": "A clean, maintainable backend architecture ready to scale to dozens of API domain modules."
        },
        "exam": {
          "title": "Express Application Architecture & Express Router Sub-modules - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-express-application-architectu",
              "question": "What is the purpose of express.Router()?",
              "options": [
                "To create modular, mountable route handlers that can be isolated into separate files and directories",
                "To connect Express to React Router in the browser",
                "To route physical network cables in the datacenter",
                "To speed up DNS resolution"
              ],
              "correctIndex": 0,
              "explanation": "express.Router() acts as a mini-application, enabling clean organization and modular mounting of route endpoints."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Express Application Architecture & Express Router Sub-modules - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Express Application Architecture & Express Router Sub-modules. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Middleware Mechanics: Global, Route-Level & Error Middleware",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Understanding Express Middleware: The req, res, next Pipeline",
        "objective": "Master the (req, res, next) pipeline, create custom logging and authentication middleware, and implement 4-parameter centralized error handlers.",
        "theoryContent": "Middleware functions execute in sequence. If a middleware does not call `next()`, the request hangs indefinitely. Error middleware is uniquely identified by accepting exactly 4 parameters: `(err, req, res, next)`.",
        "codeSnippet": "import { Request, Response, NextFunction } from \"express\";\n\n// Custom request timer middleware\nexport const requestTimer = (req: Request, res: Response, next: NextFunction) => {\n  const start = Date.now();\n  res.on(\"finish\", () => {\n    const duration = Date.now() - start;\n    console.log(`[${req.method}] ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);\n  });\n  next();\n};\n\n// Centralized Error Handling Middleware (4 parameters required!)\nexport const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {\n  console.error(\"Centralized Error:\", err.message);\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    success: false,\n    error: err.message || \"Internal Server Error\"\n  });\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: Middleware Mechanics: Global, Route-Level & Error Middleware",
          "instructions": [
            "Write a global logging middleware calculating request duration.",
            "Build route-level middleware that inspects request headers.",
            "Register a 4-parameter error handler at the very end of the middleware stack."
          ],
          "starterCode": "app.use((req, res, next) => { next(); });",
          "expectedOutcome": "A unified request-response lifecycle with bulletproof error trapping and execution monitoring."
        },
        "exam": {
          "title": "Middleware Mechanics: Global, Route-Level & Error Middleware - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-middleware-mechanics-global-ro",
              "question": "How does Express distinguish a standard middleware from an error-handling middleware?",
              "options": [
                "By the function parameter arity: error middleware takes exactly 4 arguments (err, req, res, next)",
                "By naming the function \"errorHandler\"",
                "By returning false instead of calling next()",
                "By registering it with app.error() instead of app.use()"
              ],
              "correctIndex": 0,
              "explanation": "Express inspects function.length; exactly 4 arguments signals to Express that this function is an error handler."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Middleware Mechanics: Global, Route-Level & Error Middleware - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Middleware Mechanics: Global, Route-Level & Error Middleware. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Request Body Parsing, CORS Policies & Helmet Security Headers",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Express Security: Helmet, CORS & Body Limit Defenses",
        "objective": "Secure Express with Helmet HTTP headers, configure Cross-Origin Resource Sharing (CORS) whitelists, and protect against JSON body payload bombs.",
        "theoryContent": "Exposing default Express headers reveals server technologies to attackers. Helmet hides `X-Powered-By: Express` and sets CSP and HSTS headers. CORS protects APIs by restricting origins permitted to read response data.",
        "codeSnippet": "import express from \"express\";\nimport helmet from \"helmet\";\nimport cors from \"cors\";\n\nconst app = express();\n\n// Secure HTTP response headers\napp.use(helmet());\n\n// Strict CORS policy\nconst allowedOrigins = [\"https://epicademy.ph\", \"https://kezjed.com\"];\napp.use(cors({\n  origin: (origin, callback) => {\n    if (!origin || allowedOrigins.includes(origin)) callback(null, true);\n    else callback(new Error(\"Blocked by CORS policy\"));\n  },\n  credentials: true\n}));\n\n// Restrict JSON payload size to prevent DoS attacks\napp.use(express.json({ limit: \"1mb\" }));",
        "handsOnActivity": {
          "title": "Hands-On Lab: Request Body Parsing, CORS Policies & Helmet Security Headers",
          "instructions": [
            "Install and configure helmet() to inject security headers.",
            "Set up origin whitelist validation with cors.",
            "Set express.json({ limit: \"1mb\" }) to block malicious oversized payloads."
          ],
          "starterCode": "app.use(cors()); app.use(express.json());",
          "expectedOutcome": "A hardened Express server compliant with OWASP security standards for HTTP transport."
        },
        "exam": {
          "title": "Request Body Parsing, CORS Policies & Helmet Security Headers - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-request-body-parsing-cors-poli",
              "question": "What does the helmet middleware package do for an Express application?",
              "options": [
                "It sets well-known HTTP response security headers (HSTS, CSP, X-Frame-Options, etc.) to harden the server against common attacks",
                "It compiles TypeScript code faster",
                "It creates automated database backups",
                "It generates SSL certificates on the fly"
              ],
              "correctIndex": 0,
              "explanation": "Helmet sets essential security-related HTTP headers, eliminating server fingerprinting and common vulnerability vectors."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Request Body Parsing, CORS Policies & Helmet Security Headers - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Request Body Parsing, CORS Policies & Helmet Security Headers. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "REST API Design Standards: Resource Naming & HTTP Methods",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "RESTful API Architecture: Standards, Verbs & Status Codes",
        "objective": "Architect clean, predictable REST APIs following industry conventions: plural nouns, proper HTTP verbs (GET, POST, PATCH, DELETE), and idempotent methods.",
        "theoryContent": "REST endpoints should represent resources as plural nouns (`/api/v1/courses`), never actions (`/api/v1/getCourse`). Use `POST` for creation (201 Created), `PATCH` for partial updates (200 OK), and `DELETE` for removal (204 No Content).",
        "codeSnippet": "// RESTful Convention\n// GET    /api/v1/courses          -> List courses\n// POST   /api/v1/courses          -> Create new course (201 Created)\n// GET    /api/v1/courses/:id      -> Get course details (200 OK)\n// PATCH  /api/v1/courses/:id      -> Partial update (200 OK)\n// DELETE /api/v1/courses/:id      -> Remove course (204 No Content)\n\nrouter.delete(\"/courses/:id\", async (req, res) => {\n  await courseService.delete(req.params.id);\n  res.status(204).send(); // 204 No Content\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: REST API Design Standards: Resource Naming & HTTP Methods",
          "instructions": [
            "Audit an existing API to eliminate verbs from URL paths.",
            "Implement proper 201 Created and 204 No Content HTTP response statuses.",
            "Verify idempotent behavior on PUT and DELETE requests."
          ],
          "starterCode": "app.get(\"/getUsers\", ...); app.post(\"/deleteUser\", ...);",
          "expectedOutcome": "A pristine, self-documenting RESTful API architecture conforming to OpenAPI standards."
        },
        "exam": {
          "title": "REST API Design Standards: Resource Naming & HTTP Methods - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-rest-api-design-standards-reso",
              "question": "Which HTTP status code should be returned when a resource is successfully deleted and no response body is sent?",
              "options": [
                "204 No Content",
                "200 OK",
                "201 Created",
                "202 Accepted"
              ],
              "correctIndex": 0,
              "explanation": "HTTP 204 indicates the server successfully completed the request and there is no additional content to send."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "REST API Design Standards: Resource Naming & HTTP Methods - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for REST API Design Standards: Resource Naming & HTTP Methods. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Authentication, Authorization & Production Readiness",
    "duration": "1 Week",
    "overview": "Implement secure password hashing, stateless JWT authentication, Role-Based Access Control (RBAC), and Morgan logging.",
    "lessons": [
      {
        "title": "Password Hashing with Bcrypt & Salt Rounds",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Password Security: Hashing, Salting & Bcrypt Explained",
        "objective": "Never store plain-text passwords: apply bcrypt hashing with adaptive cost factors (salt rounds) to defend against rainbow table attacks.",
        "theoryContent": "Fast hashing algorithms like MD5 or SHA-256 are dangerous for passwords because modern GPUs can test billions of hashes per second. Bcrypt is deliberately slow and incorporates an adaptive salt factor, making brute-force cracking computationally infeasible.",
        "codeSnippet": "import bcrypt from \"bcrypt\";\n\nconst SALT_ROUNDS = 12; // Production standard\n\nexport async function hashPassword(plainText) {\n  return await bcrypt.hash(plainText, SALT_ROUNDS);\n}\n\nexport async function verifyPassword(plainText, hash) {\n  return await bcrypt.compare(plainText, hash);\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Password Hashing with Bcrypt & Salt Rounds",
          "instructions": [
            "Hash user passwords prior to saving to database using bcrypt.hash().",
            "Validate candidate login passwords using bcrypt.compare().",
            "Measure execution time differences between salt rounds 8, 10, and 12."
          ],
          "starterCode": "import bcrypt from \"bcrypt\";",
          "expectedOutcome": "Unbreakable password credential storage resilient against database leak exploits."
        },
        "exam": {
          "title": "Password Hashing with Bcrypt & Salt Rounds - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-password-hashing-with-bcrypt-s",
              "question": "Why should fast hash algorithms like SHA-256 NOT be used for password storage?",
              "options": [
                "They are too fast; modern attacker hardware can compute billions of SHA-256 hashes per second to brute-force leaked passwords",
                "They cannot hash special characters",
                "They are not supported in Node.js",
                "They require an internet connection to run"
              ],
              "correctIndex": 0,
              "explanation": "Password hashing requires computationally expensive algorithms (like bcrypt or Argon2) with high work factors to thwart hardware attacks."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Password Hashing with Bcrypt & Salt Rounds - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Password Hashing with Bcrypt & Salt Rounds. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Stateless JWT Authentication & Refresh Token Rotation",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "JWT Authentication, Short-Lived Access Tokens & Refresh Rotation",
        "objective": "Issue signed JSON Web Tokens (JWT), verify signatures in authentication middleware, and implement secure refresh token rotation.",
        "theoryContent": "JWTs allow stateless authentication: user identity and roles are cryptographically signed inside the token. Access tokens should be short-lived (15 mins) to minimize exposure if stolen, while refresh tokens are stored in secure httpOnly cookies.",
        "codeSnippet": "import jwt from \"jsonwebtoken\";\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"super-secret-key\";\n\n// Generate access token (15 mins)\nexport function signAccessToken(user) {\n  return jwt.sign(\n    { sub: user.id, role: user.role, email: user.email },\n    JWT_SECRET,\n    { expiresIn: \"15m\" }\n  );\n}\n\n// Authentication middleware\nexport function requireAuth(req, res, next) {\n  const authHeader = req.headers.authorization;\n  if (!authHeader?.startsWith(\"Bearer \")) {\n    return res.status(401).json({ error: \"Missing or invalid authorization header\" });\n  }\n  \n  const token = authHeader.split(\" \")[1];\n  try {\n    const decoded = jwt.verify(token, JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    return res.status(401).json({ error: \"Token expired or invalid\" });\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Stateless JWT Authentication & Refresh Token Rotation",
          "instructions": [
            "Sign a JWT payload containing user ID and role with a 15-minute expiration.",
            "Build an auth middleware that verifies Bearer tokens from incoming headers.",
            "Attach decoded user identity to req.user for downstream route controllers."
          ],
          "starterCode": "function authMiddleware(req, res, next) { ... }",
          "expectedOutcome": "High-security stateless authentication enabling horizontal scaling across multiple backend instances."
        },
        "exam": {
          "title": "Stateless JWT Authentication & Refresh Token Rotation - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-stateless-jwt-authentication-r",
              "question": "What information should NEVER be placed in a standard JWT payload?",
              "options": [
                "Sensitive confidential secrets like user passwords or private encryption keys",
                "The user ID",
                "The user role",
                "The token expiration timestamp"
              ],
              "correctIndex": 0,
              "explanation": "JWT payloads are only Base64Url-encoded and signed, NOT encrypted; anyone with the token can read the payload contents."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Stateless JWT Authentication & Refresh Token Rotation - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Stateless JWT Authentication & Refresh Token Rotation. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Role-Based Access Control (RBAC) Middleware Implementation",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Role-Based Access Control (RBAC) in Express APIs",
        "objective": "Enforce granular authorization rules restricting routes to specific roles (student, teacher, tenant_admin, super_admin) with higher-order middleware.",
        "theoryContent": "Authentication verifies *who* the user is; Authorization verifies *what* the user is permitted to do. An RBAC middleware factory checks if the authenticated user possesses required permissions before permitting access.",
        "codeSnippet": "export function authorizeRoles(...allowedRoles) {\n  return (req, res, next) => {\n    if (!req.user) {\n      return res.status(401).json({ error: \"Unauthorized\" });\n    }\n    if (!allowedRoles.includes(req.user.role)) {\n      return res.status(403).json({\n        error: `Forbidden: Requires one of [${allowedRoles.join(\", \")}] roles`\n      });\n    }\n    next();\n  };\n}\n\n// Usage on admin endpoint:\n// router.post(\"/courses\", requireAuth, authorizeRoles(\"teacher\", \"super_admin\"), createCourseController);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Role-Based Access Control (RBAC) Middleware Implementation",
          "instructions": [
            "Create a reusable authorizeRoles higher-order middleware function.",
            "Return 403 Forbidden when a user role lacks adequate permissions.",
            "Protect administrative and teacher creation routes."
          ],
          "starterCode": "function requireRole(role) { return (req, res, next) => { ... }; }",
          "expectedOutcome": "Strict multi-tier authorization security protecting privileged administrative and academic resources."
        },
        "exam": {
          "title": "Role-Based Access Control (RBAC) Middleware Implementation - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-role-based-access-control-rbac",
              "question": "What is the semantic difference between HTTP 401 Unauthorized and HTTP 403 Forbidden?",
              "options": [
                "401 means the client is not authenticated; 403 means the client is authenticated but lacks required permissions",
                "401 is for mobile users; 403 is for desktop users",
                "401 is an error on the server side; 403 is an error in DNS",
                "There is no difference; they are interchangeable"
              ],
              "correctIndex": 0,
              "explanation": "401 indicates missing or invalid authentication credentials; 403 indicates authenticated identity is recognized but forbidden access."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Role-Based Access Control (RBAC) Middleware Implementation - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Role-Based Access Control (RBAC) Middleware Implementation. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Centralized Error Handling, Morgan Logging & Health Checks",
        "duration": "26 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Production Observability: Morgan Logging & Health Endpoints",
        "objective": "Configure Morgan HTTP access logging, build standard /health and /metrics endpoints, and handle unhandledRejection events.",
        "theoryContent": "Production monitoring requires visibility. A `/health` endpoint allows Kubernetes or AWS load balancers to ping server vitality. Centralized error catching prevents uncaught promise rejections from silently terminating the process.",
        "codeSnippet": "import express from \"express\";\nimport morgan from \"morgan\";\n\nconst app = express();\n\n// HTTP logging\napp.use(morgan(\"combined\"));\n\n// Health check endpoint for uptime monitors and load balancers\napp.get(\"/health\", (req, res) => {\n  res.status(200).json({\n    status: \"healthy\",\n    uptime: process.uptime(),\n    timestamp: new Date().toISOString(),\n    memoryUsage: process.memoryUsage()\n  });\n});\n\n// Catch unhandled promise rejections globally\nprocess.on(\"unhandledRejection\", (reason, promise) => {\n  console.error(\"Unhandled Rejection at:\", promise, \"reason:\", reason);\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: Centralized Error Handling, Morgan Logging & Health Checks",
          "instructions": [
            "Configure morgan HTTP request logging.",
            "Implement a /health route returning server uptime and memory stats.",
            "Add global listeners for uncaughtException and unhandledRejection."
          ],
          "starterCode": "app.get(\"/health\", (req, res) => res.send(\"OK\"));",
          "expectedOutcome": "Production observability enabling load balancers and site reliability engineers to monitor server health continuously."
        },
        "exam": {
          "title": "Centralized Error Handling, Morgan Logging & Health Checks - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-centralized-error-handling-mor",
              "question": "Why is a dedicated /health endpoint required in containerized production deployments?",
              "options": [
                "Load balancers and container orchestrators (e.g. Kubernetes, AWS) use it as a liveness and readiness probe to route traffic and restart dead instances",
                "To generate SEO sitemaps",
                "To test internet upload speeds",
                "To clear browser cookies"
              ],
              "correctIndex": 0,
              "explanation": "Cloud orchestrators poll /health to ensure traffic is only routed to healthy, responsive application containers."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Centralized Error Handling, Morgan Logging & Health Checks - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Centralized Error Handling, Morgan Logging & Health Checks. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_7_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: Relational Database Modeling & SQL Fundamentals",
    "duration": "1.5 Weeks",
    "overview": "Master relational database theory: primary/foreign keys, schema normalization (1NF-3NF), core SQL commands, and indexing performance.",
    "lessons": [
      {
        "title": "Relational Theory: Primary Keys, Foreign Keys & Normalization",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Relational Database Design & Normalization (1NF through 3NF)",
        "objective": "Design normalized relational schemas with UUID primary keys, foreign key constraints (ON DELETE CASCADE), and eliminate data duplication.",
        "theoryContent": "Relational databases store structured data in linked tables. Normalization to Third Normal Form (3NF) ensures that every non-key attribute depends on the key, the whole key, and nothing but the key, preventing update and deletion anomalies.",
        "codeSnippet": "CREATE TABLE organizations (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(255) NOT NULL UNIQUE,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);\n\nCREATE TABLE students (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,\n  full_name VARCHAR(255) NOT NULL,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  enrolled_at TIMESTAMPTZ DEFAULT NOW()\n);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Relational Theory: Primary Keys, Foreign Keys & Normalization",
          "instructions": [
            "Design an Entity Relationship Diagram (ERD) with 1-to-many relationships.",
            "Define foreign key constraints with ON DELETE CASCADE rules.",
            "Enforce column uniqueness and non-null constraints."
          ],
          "starterCode": "CREATE TABLE users ( id SERIAL PRIMARY KEY, name TEXT );",
          "expectedOutcome": "A normalized SQL schema maintaining referential integrity across relational entities."
        },
        "exam": {
          "title": "Relational Theory: Primary Keys, Foreign Keys & Normalization - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-relational-theory-primary-keys",
              "question": "What happens when a referenced parent row is deleted if the foreign key has ON DELETE CASCADE?",
              "options": [
                "All child rows referencing that parent row are automatically deleted as well",
                "The database prevents the deletion and throws a constraint error",
                "The child foreign key columns are set to NULL",
                "The child rows are moved to a temporary backup table"
              ],
              "correctIndex": 0,
              "explanation": "ON DELETE CASCADE propagates deletion downwards, removing orphan child records automatically."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Relational Theory: Primary Keys, Foreign Keys & Normalization - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Relational Theory: Primary Keys, Foreign Keys & Normalization. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Core SQL: SELECT, INSERT, UPDATE, DELETE & WHERE Clauses",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "SQL CRUD Operations & Query Filtering",
        "objective": "Execute efficient CRUD operations using parameterized SQL, pattern matching with LIKE/ILIKE, and conditional filtering with WHERE and IN.",
        "theoryContent": "SQL is declarative: you describe what data you want rather than how to retrieve it. Using parameterized queries (`$1`, `$2`) is mandatory to prevent SQL injection attacks from malicious user inputs.",
        "codeSnippet": "-- Query active students in web engineering track\nSELECT id, full_name, email, enrolled_at\nFROM students\nWHERE track = 'stem'\n  AND status = 'active'\n  AND enrolled_at >= NOW() - INTERVAL '30 days'\nORDER BY enrolled_at DESC\nLIMIT 20;",
        "handsOnActivity": {
          "title": "Hands-On Lab: Core SQL: SELECT, INSERT, UPDATE, DELETE & WHERE Clauses",
          "instructions": [
            "Write a SELECT query filtering with multiple boolean conditions.",
            "Perform an UPSERT operation using ON CONFLICT (email) DO UPDATE.",
            "Safely update records using targeted WHERE clauses."
          ],
          "starterCode": "SELECT * FROM students;",
          "expectedOutcome": "Fast, secure SQL query statements with zero vulnerability to injection vulnerabilities."
        },
        "exam": {
          "title": "Core SQL: SELECT, INSERT, UPDATE, DELETE & WHERE Clauses - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-core-sql-select-insert-update-",
              "question": "What clause in an INSERT statement performs an UPSERT (insert or update if exists) in modern PostgreSQL?",
              "options": [
                "ON CONFLICT (...) DO UPDATE",
                "IF EXISTS UPDATE",
                "MERGE INTO",
                "REPLACE INTO"
              ],
              "correctIndex": 0,
              "explanation": "PostgreSQL provides native ON CONFLICT (target) DO UPDATE to gracefully handle upsert operations."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Core SQL: SELECT, INSERT, UPDATE, DELETE & WHERE Clauses - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Core SQL: SELECT, INSERT, UPDATE, DELETE & WHERE Clauses. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "SQL Joins: INNER, LEFT, RIGHT, FULL OUTER & Aggregations",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Mastering SQL Joins, GROUP BY & Aggregate Functions",
        "objective": "Combine relational tables using INNER and LEFT JOINs, calculate statistics with GROUP BY and HAVING, and aggregate arrays with json_agg.",
        "theoryContent": "`INNER JOIN` returns only records that match in both tables; `LEFT JOIN` preserves all records from the left table even if no matching right record exists. PostgreSQL `json_agg` and `json_build_object` allow queries to return nested JSON hierarchies in a single database roundtrip.",
        "codeSnippet": "SELECT \n  c.id AS course_id,\n  c.title,\n  COUNT(e.id) AS total_enrollments,\n  COALESCE(AVG(r.score), 0) AS average_score\nFROM courses c\nLEFT JOIN enrollments e ON e.course_id = c.id\nLEFT JOIN reviews r ON r.course_id = c.id\nGROUP BY c.id, c.title\nHAVING COUNT(e.id) > 5\nORDER BY total_enrollments DESC;",
        "handsOnActivity": {
          "title": "Hands-On Lab: SQL Joins: INNER, LEFT, RIGHT, FULL OUTER & Aggregations",
          "instructions": [
            "Join courses and student enrollments using LEFT JOIN.",
            "Group records and calculate averages and totals with GROUP BY.",
            "Filter aggregated results using the HAVING clause."
          ],
          "starterCode": "SELECT * FROM courses c JOIN enrollments e ON ...",
          "expectedOutcome": "Multi-table analytical queries returning high-value statistical summaries in milliseconds."
        },
        "exam": {
          "title": "SQL Joins: INNER, LEFT, RIGHT, FULL OUTER & Aggregations - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-sql-joins-inner-left-right-ful",
              "question": "What is the key difference between the WHERE clause and the HAVING clause in SQL?",
              "options": [
                "WHERE filters rows before aggregation takes place; HAVING filters aggregated groups after GROUP BY",
                "WHERE only works with numbers; HAVING works with text",
                "HAVING is faster than WHERE",
                "WHERE is deprecated in modern SQL"
              ],
              "correctIndex": 0,
              "explanation": "WHERE filters individual source records prior to grouping; HAVING filters the calculated aggregate results."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "SQL Joins: INNER, LEFT, RIGHT, FULL OUTER & Aggregations - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for SQL Joins: INNER, LEFT, RIGHT, FULL OUTER & Aggregations. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Database Indexing: B-Tree Indexes & Query Plan EXPLAIN ANALYZE",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "PostgreSQL Indexing: B-Tree, GIN & EXPLAIN ANALYZE",
        "objective": "Eliminate slow Sequential Scans by creating B-Tree and GIN indexes, and audit execution plans with EXPLAIN ANALYZE.",
        "theoryContent": "Without indexes, PostgreSQL must scan every row in a table (Sequential Scan / Seq Scan). A B-Tree index allows logarithmic O(log N) lookups. Using `EXPLAIN ANALYZE` reveals execution costs, index scans, and actual runtime milliseconds.",
        "codeSnippet": "-- Add index on foreign keys and frequently searched email column\nCREATE INDEX idx_students_email ON students(email);\nCREATE INDEX idx_enrollments_student_id ON enrollments(student_id);\n\n-- Inspect query execution plan\nEXPLAIN ANALYZE \nSELECT * FROM students WHERE email = 'ronnel@kezjed.com';\n-- Look for \"Index Scan using idx_students_email\" instead of \"Seq Scan\"",
        "handsOnActivity": {
          "title": "Hands-On Lab: Database Indexing: B-Tree Indexes & Query Plan EXPLAIN ANALYZE",
          "instructions": [
            "Run EXPLAIN ANALYZE on an unindexed query and record execution time.",
            "Create a B-Tree index on the search filter column.",
            "Re-run EXPLAIN ANALYZE to verify Index Scan conversion and performance gain."
          ],
          "starterCode": "EXPLAIN ANALYZE SELECT * FROM users WHERE email = ...;",
          "expectedOutcome": "Dramatic query acceleration converting multi-second table scans to sub-millisecond index hits."
        },
        "exam": {
          "title": "Database Indexing: B-Tree Indexes & Query Plan EXPLAIN ANALYZE - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-database-indexing-b-tree-index",
              "question": "What does an \"Index Scan\" indicate in an EXPLAIN ANALYZE query plan?",
              "options": [
                "The database traversed an efficient index structure directly to the requested rows without scanning the whole table",
                "The database failed to find the table",
                "The index is corrupted and needs rebuilding",
                "The query was cancelled due to timeout"
              ],
              "correctIndex": 0,
              "explanation": "An Index Scan demonstrates that the database engine navigated an index directly to the target rows in O(log N) time."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Database Indexing: B-Tree Indexes & Query Plan EXPLAIN ANALYZE - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Database Indexing: B-Tree Indexes & Query Plan EXPLAIN ANALYZE. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Supabase Architecture, Row-Level Security & Real-Time Sync",
    "duration": "1.5 Weeks",
    "overview": "Build cloud backends on Supabase: manage PostgreSQL instances, enforce Row-Level Security (RLS) policies, and listen to Realtime websocket channels.",
    "lessons": [
      {
        "title": "Supabase Platform: Hosted PostgreSQL & Auto-Generated APIs",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Supabase Architecture: Hosted Postgres & REST/GraphQL APIs",
        "objective": "Connect web clients to Supabase using @supabase/supabase-js, query database tables, and configure client singleton instances.",
        "theoryContent": "Supabase provides a complete open-source backend built on top of genuine PostgreSQL. Every table created automatically generates PostgREST HTTP endpoints and OpenAPI documentation, eliminating hundreds of lines of backend CRUD boilerplate.",
        "codeSnippet": "import { createClient } from \"@supabase/supabase-js\";\n\nconst supabaseUrl = process.env.VITE_SUPABASE_URL!;\nconst supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;\n\nexport const supabase = createClient(supabaseUrl, supabaseAnonKey);\n\n// Querying tracks with relational modules\nexport async function getTrackDetails(trackId: string) {\n  const { data, error } = await supabase\n    .from(\"tracks\")\n    .select(\"*, modules(*)\")\n    .eq(\"id\", trackId)\n    .single();\n  if (error) throw error;\n  return data;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Supabase Platform: Hosted PostgreSQL & Auto-Generated APIs",
          "instructions": [
            "Initialize the Supabase client with project URL and public anon key.",
            "Fetch records using relational joins with select(\"*, related_table(*)\").",
            "Handle errors and empty results safely."
          ],
          "starterCode": "import { createClient } from \"@supabase/supabase-js\";",
          "expectedOutcome": "Instant, serverless data querying directly from frontend or backend services with full TypeScript types."
        },
        "exam": {
          "title": "Supabase Platform: Hosted PostgreSQL & Auto-Generated APIs - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-supabase-platform-hosted-postg",
              "question": "What is the architectural role of PostgREST in the Supabase ecosystem?",
              "options": [
                "It automatically converts PostgreSQL database schemas directly into secure, RESTful HTTP APIs",
                "It replaces SQL with MongoDB syntax",
                "It hosts static React applications",
                "It manages DNS routing"
              ],
              "correctIndex": 0,
              "explanation": "PostgREST inspects the PostgreSQL schema and exposes an instant, high-performance RESTful API over HTTP."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Supabase Platform: Hosted PostgreSQL & Auto-Generated APIs - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Supabase Platform: Hosted PostgreSQL & Auto-Generated APIs. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Row-Level Security (RLS) Policies & Auth Context (auth.uid())",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Supabase Row-Level Security (RLS): Bulletproof Database Access",
        "objective": "Lock down PostgreSQL tables with ALTER TABLE ENABLE ROW LEVEL SECURITY, and write policies using auth.uid() and role checks.",
        "theoryContent": "Because clients query Supabase directly, traditional API middleware security is absent. Row-Level Security (RLS) moves security directly into the database engine: policies ensure users can only SELECT or UPDATE rows they own.",
        "codeSnippet": "-- Enable RLS on the table\nALTER TABLE student_assignments ENABLE ROW LEVEL SECURITY;\n\n-- Policy 1: Students can read their own submissions\nCREATE POLICY \"Students can read own assignments\"\nON student_assignments\nFOR SELECT\nUSING (auth.uid() = student_id);\n\n-- Policy 2: Teachers can view all submissions for their courses\nCREATE POLICY \"Teachers view course submissions\"\nON student_assignments\nFOR ALL\nUSING (\n  EXISTS (\n    SELECT 1 FROM courses\n    WHERE courses.id = student_assignments.course_id\n      AND courses.instructor_id = auth.uid()\n  )\n);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Row-Level Security (RLS) Policies & Auth Context (auth.uid())",
          "instructions": [
            "Enable RLS on tables using ALTER TABLE ... ENABLE ROW LEVEL SECURITY.",
            "Create a SELECT policy matching auth.uid() = user_id.",
            "Test cross-user isolation to verify unauthorized reads are rejected at the DB layer."
          ],
          "starterCode": "ALTER TABLE notes ENABLE ROW LEVEL SECURITY;",
          "expectedOutcome": "Zero data leakage: even if a client attempts a malicious query, the PostgreSQL engine filters out unauthorized rows."
        },
        "exam": {
          "title": "Row-Level Security (RLS) Policies & Auth Context (auth.uid()) - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-row-level-security-rls-policie",
              "question": "What SQL helper function in Supabase returns the authenticated user ID inside an RLS policy?",
              "options": [
                "auth.uid()",
                "current_user()",
                "session.id()",
                "jwt.user_id()"
              ],
              "correctIndex": 0,
              "explanation": "auth.uid() extracts the unique user ID from the validated JWT token provided in the request headers."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Row-Level Security (RLS) Policies & Auth Context (auth.uid()) - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Row-Level Security (RLS) Policies & Auth Context (auth.uid()). Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Supabase Realtime Channels for Live Collaboration & Presence",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Supabase Realtime: Postgres Changes, Broadcast & Presence",
        "objective": "Listen for live PostgreSQL database changes (INSERT, UPDATE, DELETE) over WebSockets and track connected online users with Presence.",
        "theoryContent": "Supabase Realtime leverages PostgreSQL write-ahead logs (WAL). When data changes in the database, Realtime broadcasts the change event over WebSockets to subscribed clients in real time with sub-100ms latency.",
        "codeSnippet": "import { supabase } from \"./supabaseClient\";\n\nexport function subscribeToForumPosts(onNewPost: (post: any) => void) {\n  const channel = supabase\n    .channel(\"public:community_posts\")\n    .on(\n      \"postgres_changes\",\n      { event: \"INSERT\", schema: \"public\", table: \"community_posts\" },\n      (payload) => {\n        console.log(\"New post received in real time!\", payload.new);\n        onNewPost(payload.new);\n      }\n    )\n    .subscribe((status) => {\n      console.log(\"Channel status:\", status);\n    });\n  \n  return () => supabase.removeChannel(channel);\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Supabase Realtime Channels for Live Collaboration & Presence",
          "instructions": [
            "Enable Realtime replication on public database tables.",
            "Subscribe to postgres_changes using the Supabase client channel API.",
            "Clean up channels by calling removeChannel() on component unmount."
          ],
          "starterCode": "const channel = supabase.channel(\"live\");",
          "expectedOutcome": "Instant multi-user collaborative experiences updating synchronously across active browser tabs."
        },
        "exam": {
          "title": "Supabase Realtime Channels for Live Collaboration & Presence - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-supabase-realtime-channels-for",
              "question": "How does Supabase Realtime detect database changes to broadcast to clients?",
              "options": [
                "By tailing the PostgreSQL Write-Ahead Log (WAL) replication stream",
                "By polling the database every 100 milliseconds",
                "By intercepting browser click events",
                "By requiring manual webhook triggers on every insert"
              ],
              "correctIndex": 0,
              "explanation": "Supabase inspects PostgreSQL replication WAL streams, broadcasting changes via WebSockets with zero polling."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Supabase Realtime Channels for Live Collaboration & Presence - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Supabase Realtime Channels for Live Collaboration & Presence. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Supabase Storage Buckets, Signed URLs & File Upload Security",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Supabase Storage: File Uploads, Buckets & Signed URLs",
        "objective": "Create secure storage buckets, upload user assets, enforce file size/MIME type restrictions, and generate expiring signed download URLs.",
        "theoryContent": "Storing large binary files (PDFs, images, videos) directly in SQL database tables bloats backups and slows queries. Supabase Storage stores binary files on cloud object storage (S3 compatible) while storing URL references in PostgreSQL.",
        "codeSnippet": "export async function uploadLessonWorksheet(file: File, studentId: string) {\n  const filePath = `${studentId}/${Date.now()}-${file.name}`;\n  \n  const { data, error } = await supabase.storage\n    .from(\"student-submissions\")\n    .upload(filePath, file, {\n      cacheControl: \"3600\",\n      upsert: false\n    });\n  if (error) throw error;\n  \n  // Generate temporary 15-minute signed URL for evaluation\n  const { data: signedUrlData, error: signError } = await supabase.storage\n    .from(\"student-submissions\")\n    .createSignedUrl(filePath, 900); // 900 seconds\n  \n  return signedUrlData?.signedUrl;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Supabase Storage Buckets, Signed URLs & File Upload Security",
          "instructions": [
            "Create a private Supabase Storage bucket.",
            "Implement client file upload with file type validation.",
            "Generate time-limited signed URLs for secure document downloading."
          ],
          "starterCode": "const { data, error } = await supabase.storage.from(\"bucket\").upload(...);",
          "expectedOutcome": "Secure cloud media storage with expiring signed URLs protecting private student deliverables."
        },
        "exam": {
          "title": "Supabase Storage Buckets, Signed URLs & File Upload Security - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-supabase-storage-buckets-signe",
              "question": "Why are expiring signed URLs preferred over permanent public URLs for sensitive user uploads?",
              "options": [
                "They grant temporary access that expires automatically, preventing unauthorized long-term link sharing or unauthorized downloads",
                "They compress image resolution",
                "They allow files to be uploaded without an internet connection",
                "They bypass file size restrictions"
              ],
              "correctIndex": 0,
              "explanation": "Signed URLs contain a cryptographic signature with an expiration timestamp, restricting access to authorized windows."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Supabase Storage Buckets, Signed URLs & File Upload Security - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Supabase Storage Buckets, Signed URLs & File Upload Security. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Prisma ORM, Schema Migrations & Database Relations",
    "duration": "1 Week",
    "overview": "Model data with Prisma Schema, run automated migrations, execute transactional queries, and enforce foreign key cascades.",
    "lessons": [
      {
        "title": "Prisma Schema Definition & PostgreSQL Connection Pooling",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Prisma ORM: Schema Modeling, Generators & Connection Pooling",
        "objective": "Define data models in schema.prisma, configure Prisma Client generators, and configure connection poolers (PgBouncer) for serverless environments.",
        "theoryContent": "Prisma ORM provides type-safe database queries with auto-generated TypeScript definitions. In serverless environments (e.g. Vercel), thousands of lambdas can exhaust database connection limits; connection poolers like PgBouncer maintain a stable pool.",
        "codeSnippet": "// prisma/schema.prisma\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\") // Pooled connection via PgBouncer\n  directUrl = env(\"DIRECT_URL\")   // Direct connection for migrations\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\nmodel Course {\n  id          String   @id @default(uuid())\n  title       String\n  price       Int\n  instructor  String\n  createdAt   DateTime @default(now())\n  modules     Module[]\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Prisma Schema Definition & PostgreSQL Connection Pooling",
          "instructions": [
            "Model relational entities in schema.prisma.",
            "Configure separate pooled and direct database URLs.",
            "Generate type-safe client with npx prisma generate."
          ],
          "starterCode": "model User { id Int @id @default(autoincrement()) }",
          "expectedOutcome": "A complete type-safe database layer with auto-generated TypeScript autocomplete and connection pool stability."
        },
        "exam": {
          "title": "Prisma Schema Definition & PostgreSQL Connection Pooling - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-prisma-schema-definition-postg",
              "question": "Why is a connection pooler like PgBouncer essential when connecting serverless functions to PostgreSQL?",
              "options": [
                "Serverless functions scale rapidly and would otherwise exhaust PostgreSQL maximum connection limits instantly",
                "PgBouncer compiles SQL to JavaScript",
                "PgBouncer allows SQL without a password",
                "PgBouncer encrypts the hard drive"
              ],
              "correctIndex": 0,
              "explanation": "Serverless containers open new connections on every spin-up; PgBouncer pools and shares these connections efficiently."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Prisma Schema Definition & PostgreSQL Connection Pooling - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Prisma Schema Definition & PostgreSQL Connection Pooling. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Prisma Migrations: dev, deploy & Safe Zero-Downtime Rollouts",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Database Migrations with Prisma: Dev, Deploy & CI/CD",
        "objective": "Run npx prisma migrate dev during development, generate SQL migration files, and execute prisma migrate deploy in CI/CD pipelines.",
        "theoryContent": "Direct manual database changes create drift and break production. Prisma migrations track schema changes in reproducible SQL files version-controlled in git. Running `prisma migrate deploy` in production applies unapplied migrations safely.",
        "codeSnippet": "# Development: creates migration file and updates local DB\nnpx prisma migrate dev --name add_course_verification_fields\n\n# Production CI/CD pipeline: executes pending migrations without schema prompts\nnpx prisma migrate deploy\n\n# Check migration status\nnpx prisma migrate status",
        "handsOnActivity": {
          "title": "Hands-On Lab: Prisma Migrations: dev, deploy & Safe Zero-Downtime Rollouts",
          "instructions": [
            "Add new fields to a Prisma model.",
            "Generate a named migration using prisma migrate dev.",
            "Inspect generated SQL migration files in prisma/migrations/ directory."
          ],
          "starterCode": "npx prisma migrate dev",
          "expectedOutcome": "Version-controlled database schema changes that deploy deterministically across staging and production."
        },
        "exam": {
          "title": "Prisma Migrations: dev, deploy & Safe Zero-Downtime Rollouts - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-prisma-migrations-dev-deploy-s",
              "question": "Which Prisma command should be used in automated production CI/CD deployment scripts?",
              "options": [
                "npx prisma migrate deploy",
                "npx prisma migrate dev",
                "npx prisma db push",
                "npx prisma reset"
              ],
              "correctIndex": 0,
              "explanation": "prisma migrate deploy executes pending migrations without generating new ones or resetting the database."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Prisma Migrations: dev, deploy & Safe Zero-Downtime Rollouts - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Prisma Migrations: dev, deploy & Safe Zero-Downtime Rollouts. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Advanced Relations: One-to-Many, Many-to-Many & Cascade Deletes",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Prisma Relations: 1-to-N, M-to-N & Referential Integrity",
        "objective": "Construct 1-to-Many and Many-to-Many relations, query deep nested relations with include, and enforce onDelete: Cascade.",
        "theoryContent": "Prisma allows expressive relational queries. Using `prisma.course.findUnique({ where: { id }, include: { modules: { include: { lessons: true } } } })` retrieves three levels of relational data in a single optimized query.",
        "codeSnippet": "import { PrismaClient } from \"@prisma/client\";\nconst prisma = new PrismaClient();\n\n// Deep relational query\nexport async function getFullCurriculum(courseId: string) {\n  return await prisma.course.findUnique({\n    where: { id: courseId },\n    include: {\n      modules: {\n        orderBy: { orderIndex: \"asc\" },\n        include: {\n          lessons: { orderBy: { orderIndex: \"asc\" } }\n        }\n      }\n    }\n  });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Advanced Relations: One-to-Many, Many-to-Many & Cascade Deletes",
          "instructions": [
            "Model 1-to-many relationships with @relation(fields: [...], references: [...], onDelete: Cascade).",
            "Execute nested relational queries using include.",
            "Perform nested atomic writes creating a course, module, and lessons in one call."
          ],
          "starterCode": "const course = await prisma.course.findUnique(...);",
          "expectedOutcome": "Elegant, type-safe relational queries with automated referential integrity cascades."
        },
        "exam": {
          "title": "Advanced Relations: One-to-Many, Many-to-Many & Cascade Deletes - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-advanced-relations-one-to-many",
              "question": "What Prisma query option fetches related relational data alongside the queried model?",
              "options": [
                "include: { ... }",
                "join: true",
                "populate: \"*\"",
                "withRelations: true"
              ],
              "correctIndex": 0,
              "explanation": "The include clause instructs Prisma to fetch and join related relational models into the returned TypeScript object."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Advanced Relations: One-to-Many, Many-to-Many & Cascade Deletes - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Advanced Relations: One-to-Many, Many-to-Many & Cascade Deletes. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Transaction Management with $transaction & Concurrency Locks",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Database Transactions & ACID Guarantees with Prisma",
        "objective": "Execute multi-step database mutations atomically using prisma.$transaction to prevent partial failures and race condition inconsistencies.",
        "theoryContent": "Database transactions guarantee ACID (Atomicity, Consistency, Isolation, Durability) properties. If an error occurs midway through enrollment (e.g. deducting credits succeeds but course enrollment fails), `$transaction` rolls back all changes.",
        "codeSnippet": "export async function enrollStudentWithCredits(studentId: string, courseId: string, cost: number) {\n  return await prisma.$transaction(async (tx) => {\n    // 1. Deduct credits\n    const student = await tx.student.update({\n      where: { id: studentId },\n      data: { credits: { decrement: cost } }\n    });\n    \n    if (student.credits < 0) {\n      throw new Error(\"Insufficient learning credits. Transaction aborted.\");\n    }\n    \n    // 2. Create enrollment record\n    const enrollment = await tx.enrollment.create({\n      data: { studentId, courseId }\n    });\n    \n    return enrollment;\n  });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Transaction Management with $transaction & Concurrency Locks",
          "instructions": [
            "Implement an interactive transaction with prisma.$transaction(async (tx) => { ... }).",
            "Trigger an intentional exception midway to verify complete database rollback.",
            "Verify that credit balances and enrollment records remain consistent."
          ],
          "starterCode": "await prisma.$transaction([ ... ]);",
          "expectedOutcome": "100% ACID compliance preventing financial and enrollment state corruption during concurrent usage."
        },
        "exam": {
          "title": "Transaction Management with $transaction & Concurrency Locks - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-transaction-management-with-tr",
              "question": "What happens in a Prisma interactive transaction if an exception is thrown inside the callback?",
              "options": [
                "The transaction is automatically rolled back, reverting all database mutations made within that transaction block",
                "The database commits whatever succeeded and skips the error",
                "The entire database table is deleted",
                "The server crashes"
              ],
              "correctIndex": 0,
              "explanation": "Any uncaught exception inside the $transaction callback triggers an automated ROLLBACK in PostgreSQL."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Transaction Management with $transaction & Concurrency Locks - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Transaction Management with $transaction & Concurrency Locks. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_8_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: Web Application Security & OWASP Top 10 Defense",
    "duration": "1.5 Weeks",
    "overview": "Defend web applications against OWASP Top 10 vulnerabilities: SQL Injection, Cross-Site Scripting (XSS), CSRF, and API rate limiting.",
    "lessons": [
      {
        "title": "Preventing SQL Injection with Parameterized Queries & ORMs",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "SQL Injection Deep Dive: Attack Vectors & Parameterized Defense",
        "objective": "Understand string-concatenation SQL vulnerabilities and enforce parameterized queries and ORM layers to neutralize injection attacks.",
        "theoryContent": "SQL injection occurs when untrusted user input is directly concatenated into SQL query strings (e.g. `' OR '1'='1`). Parameterized queries separate SQL commands from data values: parameters are treated strictly as string literals, rendering injection impossible.",
        "codeSnippet": "// VULNERABLE TO INJECTION:\n// const query = `SELECT * FROM users WHERE email = '${userInput}'`; // DO NOT DO THIS!\n\n// SECURE PARAMETERIZED QUERY (PostgreSQL):\nconst safeQuery = \"SELECT * FROM users WHERE email = $1\";\nconst result = await db.query(safeQuery, [userInput]);\n\n// ORM (Prisma) automatically parameterizes all inputs:\nconst safeUser = await prisma.user.findUnique({ where: { email: userInput } });",
        "handsOnActivity": {
          "title": "Hands-On Lab: Preventing SQL Injection with Parameterized Queries & ORMs",
          "instructions": [
            "Analyze an insecure legacy query vulnerable to SQL injection.",
            "Rewrite using prepared parameterized statements with $1 placeholders.",
            "Verify with SQL injection test payloads that queries handle malicious strings as plain data."
          ],
          "starterCode": "const query = \"SELECT * FROM users WHERE ...\";",
          "expectedOutcome": "Zero SQL injection vulnerabilities across all database interaction layers."
        },
        "exam": {
          "title": "Preventing SQL Injection with Parameterized Queries & ORMs - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-preventing-sql-injection-with-",
              "question": "Why do parameterized queries prevent SQL injection attacks?",
              "options": [
                "The database driver treats parameter placeholders strictly as data values, never as executable SQL commands",
                "They encrypt the entire database",
                "They convert SQL into HTML",
                "They run only when users are logged in"
              ],
              "correctIndex": 0,
              "explanation": "Parameterized queries compile the SQL query plan before binding input data as literal values, preventing command execution."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Preventing SQL Injection with Parameterized Queries & ORMs - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Preventing SQL Injection with Parameterized Queries & ORMs. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Cross-Site Scripting (XSS) Prevention & Content Security Policy",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Preventing Stored & Reflected XSS with React & CSP",
        "objective": "Neutralize Reflected and Stored XSS attacks, avoid dangerouslySetInnerHTML, sanitize HTML with DOMPurify, and configure Content Security Policy (CSP).",
        "theoryContent": "XSS allows attackers to execute malicious JavaScript in victims' browsers, stealing session tokens. React automatically escapes strings rendered in JSX. When rich text rendering is required, sanitize with DOMPurify and deploy strict Content Security Policies.",
        "codeSnippet": "import DOMPurify from \"isomorphic-dompurify\";\n\n// Safely sanitizing rich HTML course notes\nexport function SafeHtmlRenderer({ userHtml }: { userHtml: string }) {\n  const cleanHtml = DOMPurify.sanitize(userHtml, {\n    ALLOWED_TAGS: [\"b\", \"i\", \"em\", \"strong\", \"a\", \"code\", \"p\", \"ul\", \"li\"],\n    ALLOWED_ATTR: [\"href\", \"target\"]\n  });\n  \n  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Cross-Site Scripting (XSS) Prevention & Content Security Policy",
          "instructions": [
            "Sanitize user-submitted HTML using DOMPurify.",
            "Strip out script tags and inline event handlers (onload, onerror).",
            "Configure a strict Content Security Policy header blocking inline scripts."
          ],
          "starterCode": "<div dangerouslySetInnerHTML={{ __html: content }} />",
          "expectedOutcome": "Complete protection against script injection while safely displaying formatted rich text."
        },
        "exam": {
          "title": "Cross-Site Scripting (XSS) Prevention & Content Security Policy - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-cross-site-scripting-xss-preve",
              "question": "How does React JSX protect against XSS by default?",
              "options": [
                "React automatically escapes all string values rendered within JSX expressions before inserting them into the DOM",
                "React blocks all external network traffic",
                "React converts JavaScript into Python",
                "React only renders plain text"
              ],
              "correctIndex": 0,
              "explanation": "React treats rendered values as strings, escaping HTML entities (`<` becomes `&lt;`), neutralizing script injection."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Cross-Site Scripting (XSS) Prevention & Content Security Policy - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Cross-Site Scripting (XSS) Prevention & Content Security Policy. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Cross-Site Request Forgery (CSRF) & SameSite Cookie Flags",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "CSRF Attacks Explained: SameSite Cookies & Anti-CSRF Tokens",
        "objective": "Harden web applications against Cross-Site Request Forgery using SameSite=Strict/Lax cookie flags, Origin validation, and anti-CSRF tokens.",
        "theoryContent": "In a CSRF attack, a malicious website tricks a victim's browser into sending unauthorized requests to a site where they are logged in. Setting `SameSite=Lax` or `SameSite=Strict` prevents browsers from sending session cookies with cross-origin requests.",
        "codeSnippet": "// Express session cookie hardening\napp.use(session({\n  secret: process.env.SESSION_SECRET!,\n  cookie: {\n    httpOnly: true,  // Defends against XSS token theft\n    secure: true,    // HTTPS only\n    sameSite: \"lax\", // Defends against CSRF attacks\n    maxAge: 1000 * 60 * 60 * 24 // 24 hours\n  }\n}));",
        "handsOnActivity": {
          "title": "Hands-On Lab: Cross-Site Request Forgery (CSRF) & SameSite Cookie Flags",
          "instructions": [
            "Configure authentication cookies with httpOnly: true, secure: true, sameSite: \"lax\".",
            "Validate incoming Origin and Referer request headers on mutation routes.",
            "Verify that cross-origin form submissions cannot send authenticated cookies."
          ],
          "starterCode": "res.cookie(\"session_id\", token);",
          "expectedOutcome": "Impenetrable session cookie protection eliminating unauthorized cross-origin request execution."
        },
        "exam": {
          "title": "Cross-Site Request Forgery (CSRF) & SameSite Cookie Flags - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-cross-site-request-forgery-csr",
              "question": "What does the httpOnly: true cookie flag accomplish?",
              "options": [
                "It prevents client-side JavaScript (e.g. document.cookie) from reading the cookie, neutralizing XSS credential theft",
                "It only allows cookies on HTTP, not HTTPS",
                "It deletes the cookie when the browser tab closes",
                "It speeds up HTTP transfer rates"
              ],
              "correctIndex": 0,
              "explanation": "httpOnly ensures cookies cannot be accessed via document.cookie, safeguarding credentials even if an XSS flaw exists."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Cross-Site Request Forgery (CSRF) & SameSite Cookie Flags - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Cross-Site Request Forgery (CSRF) & SameSite Cookie Flags. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Rate Limiting, DDoS Mitigation & API Key Protection",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "API Rate Limiting with Redis & Express-Rate-Limit",
        "objective": "Protect login and computational endpoints from credential stuffing and DDoS exhaustion using express-rate-limit backed by Redis.",
        "theoryContent": "Unrestricted login and AI completion endpoints invite brute-force and budget exhaustion attacks. Rate limiting restricts requests per IP or API key (e.g. maximum 5 login attempts per 15 minutes), responding with HTTP 429 Too Many Requests.",
        "codeSnippet": "import rateLimit from \"express-rate-limit\";\n\n// Strict login limiter\nexport const authLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 5, // Limit each IP to 5 login attempts per window\n  standardHeaders: true,\n  legacyHeaders: false,\n  message: {\n    error: \"Too many login attempts from this IP. Please try again after 15 minutes.\"\n  }\n});\n\n// Mount on authentication route\napp.use(\"/api/auth/login\", authLimiter);",
        "handsOnActivity": {
          "title": "Hands-On Lab: Rate Limiting, DDoS Mitigation & API Key Protection",
          "instructions": [
            "Implement rate limiting on public authentication endpoints.",
            "Configure custom retry headers (Retry-After).",
            "Simulate rapid automated requests to verify HTTP 429 throttling."
          ],
          "starterCode": "import rateLimit from \"express-rate-limit\";",
          "expectedOutcome": "Resilient API endpoints that throttle abuse and defend against distributed automated credential attacks."
        },
        "exam": {
          "title": "Rate Limiting, DDoS Mitigation & API Key Protection - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-rate-limiting-ddos-mitigation-",
              "question": "What HTTP status code is returned when a client exceeds its permitted request rate limit?",
              "options": [
                "429 Too Many Requests",
                "503 Service Unavailable",
                "403 Forbidden",
                "400 Bad Request"
              ],
              "correctIndex": 0,
              "explanation": "HTTP 429 indicates that the user has sent too many requests in a given amount of time."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Rate Limiting, DDoS Mitigation & API Key Protection - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Rate Limiting, DDoS Mitigation & API Key Protection. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Containerization with Docker & Multi-Stage Builds",
    "duration": "1.5 Weeks",
    "overview": "Package full-stack applications with Docker: write multi-stage Dockerfiles, minimize image sizes, and orchestrate with Docker Compose.",
    "lessons": [
      {
        "title": "Docker Architecture: Images, Containers & Docker Daemon",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Docker Core Concepts: Images, Containers & Daemon Mechanics",
        "objective": "Understand the Docker client-server architecture, image layers, UnionFS, container lifecycles, and run isolated application containers.",
        "theoryContent": "Docker packages an application and all its operating system dependencies (Node runtime, system libraries, fonts) into a portable container. Unlike heavy virtual machines with full guest OS kernels, containers share the host Linux kernel, launching in milliseconds.",
        "codeSnippet": "# Pull official Node image and run interactive container\ndocker pull node:20-alpine\n\n# Run container with port forwarding and environment variables\ndocker run -d \\\n  --name epicademy-api \\\n  -p 4000:4000 \\\n  -e NODE_ENV=production \\\n  --restart unless-stopped \\\n  kezjed/epicademy-api:latest",
        "handsOnActivity": {
          "title": "Hands-On Lab: Docker Architecture: Images, Containers & Docker Daemon",
          "instructions": [
            "Run a containerized Node.js instance from the command line.",
            "Forward host ports to container ports with -p 4000:4000.",
            "Inspect running container logs with docker logs -f."
          ],
          "starterCode": "docker run -d -p 3000:3000 node:20",
          "expectedOutcome": "Confident mastery of container management, inspection, and lifecycle operations."
        },
        "exam": {
          "title": "Docker Architecture: Images, Containers & Docker Daemon - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-docker-architecture-images-con",
              "question": "How do Docker containers differ fundamentally from traditional Virtual Machines (VMs)?",
              "options": [
                "Containers share the host operating system kernel and are lightweight, whereas VMs run a complete separate guest OS kernel",
                "Containers only work on Windows",
                "VMs are faster to boot than containers",
                "Containers require hardware CPU emulation"
              ],
              "correctIndex": 0,
              "explanation": "Containers virtualize at the OS process level sharing the host kernel, making them vastly lighter and faster than VMs."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Docker Architecture: Images, Containers & Docker Daemon - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Docker Architecture: Images, Containers & Docker Daemon. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Writing Efficient Dockerfiles with Multi-Stage Caching",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Optimizing Dockerfiles: Multi-Stage Builds & Layer Caching",
        "objective": "Write multi-stage Dockerfiles that discard compilers, devDependencies, and TypeScript build tools, shrinking image sizes from 1.2GB down to 80MB.",
        "theoryContent": "A single-stage build carries devDependencies and build tools into production, creating bloated images vulnerable to security exploits. Multi-stage builds compile code in a temporary `builder` stage and copy only compiled artifacts into a minimal production image.",
        "codeSnippet": "# Stage 1: Build & Compile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Minimal Production Image\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY --from=builder /app/dist ./dist\n\nUSER node\nEXPOSE 4000\nCMD [\"node\", \"dist/index.js\"]",
        "handsOnActivity": {
          "title": "Hands-On Lab: Writing Efficient Dockerfiles with Multi-Stage Caching",
          "instructions": [
            "Implement a 2-stage Dockerfile (builder and runner).",
            "Run npm ci --only=production in the final runner stage.",
            "Switch to non-root USER node for security hardening."
          ],
          "starterCode": "FROM node:20\nCOPY . .\nRUN npm install\nCMD [\"node\", \"index.js\"]",
          "expectedOutcome": "High-speed image builds and tiny production images (<100MB) free of unnecessary compilation tools."
        },
        "exam": {
          "title": "Writing Efficient Dockerfiles with Multi-Stage Caching - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-writing-efficient-dockerfiles-",
              "question": "Why should you COPY package*.json and run npm ci BEFORE copying the rest of your application code in a Dockerfile?",
              "options": [
                "To maximize Docker layer caching: dependencies are only reinstalled when package files change, speeding up repeated builds",
                "Because Docker cannot copy code files",
                "To reduce cloud hosting costs by 50%",
                "It is required by Linux"
              ],
              "correctIndex": 0,
              "explanation": "Docker caches layers; keeping package.json separate prevents re-running npm ci when only application source code changes."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Writing Efficient Dockerfiles with Multi-Stage Caching - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Writing Efficient Dockerfiles with Multi-Stage Caching. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Docker Compose for Multi-Container Web & Database Services",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Docker Compose: Full-Stack Orchestration (App + Postgres + Redis)",
        "objective": "Orchestrate multi-container environments (Express API, React Frontend, PostgreSQL, Redis) with a single docker-compose.yml file.",
        "theoryContent": "Running multiple dependent services manually is error-prone. Docker Compose defines services, shared private networks, environment variables, and volume mounts in declarative YAML, starting the entire stack with `docker compose up`.",
        "codeSnippet": "version: \"3.8\"\nservices:\n  api:\n    build: ./server\n    ports: [\"4000:4000\"]\n    environment:\n      - DATABASE_URL=postgresql://postgres:secret@db:5432/epicademy\n    depends_on: [db]\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: secret\n      POSTGRES_DB: epicademy\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n\nvolumes:\n  postgres_data:",
        "handsOnActivity": {
          "title": "Hands-On Lab: Docker Compose for Multi-Container Web & Database Services",
          "instructions": [
            "Define an API service and PostgreSQL database in docker-compose.yml.",
            "Configure a named volume to persist database data across container restarts.",
            "Boot the entire stack using docker compose up -d."
          ],
          "starterCode": "services:\n  web:\n    image: nginx",
          "expectedOutcome": "One-command local development environment reproducing identical cloud production infrastructure."
        },
        "exam": {
          "title": "Docker Compose for Multi-Container Web & Database Services - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-docker-compose-for-multi-conta",
              "question": "What happens to PostgreSQL data when a container stops if NO Docker volume is attached?",
              "options": [
                "All database data is permanently lost because container writable layers are ephemeral",
                "The data is automatically saved to the user desktop",
                "The data is uploaded to Docker Hub",
                "The data is converted into JSON"
              ],
              "correctIndex": 0,
              "explanation": "Container storage is ephemeral by default; persistent volumes are mandatory to preserve database state across restarts."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Docker Compose for Multi-Container Web & Database Services - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Docker Compose for Multi-Container Web & Database Services. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Container Networking, Volumes & Persistent Data Storage",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Docker Networking & Persistent Volumes Architecture",
        "objective": "Connect containers over user-defined bridge networks using automatic DNS resolution, and manage persistent bind mounts vs named volumes.",
        "theoryContent": "Docker Compose automatically creates an isolated internal bridge network. Containers address each other by their service name (e.g. `postgres://db:5432`) without hardcoding IP addresses. Named volumes manage persistent database storage on the host.",
        "codeSnippet": "# Inspect Docker network and connected container IP addresses\ndocker network ls\ndocker network inspect epicademy_default\n\n# Create a standalone named persistent volume\ndocker volume create pg_prod_storage\ndocker volume ls",
        "handsOnActivity": {
          "title": "Hands-On Lab: Container Networking, Volumes & Persistent Data Storage",
          "instructions": [
            "Inspect Docker internal bridge networks.",
            "Verify container-to-container communication using service hostnames.",
            "Back up a Docker volume using a temporary container mount."
          ],
          "starterCode": "docker network create my-net",
          "expectedOutcome": "Robust container networking and persistent storage architectures resilient against process crashes."
        },
        "exam": {
          "title": "Container Networking, Volumes & Persistent Data Storage - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-container-networking-volumes-p",
              "question": "How do containers within the same Docker Compose network communicate with each other?",
              "options": [
                "Using their service names as domain hostnames (e.g. http://api:4000 or db:5432) via built-in Docker DNS",
                "By broadcasting on public Wi-Fi",
                "Only via public internet URLs",
                "Through Bluetooth"
              ],
              "correctIndex": 0,
              "explanation": "Docker runs an internal DNS server that automatically resolves service names to their container IP addresses on the network."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Container Networking, Volumes & Persistent Data Storage - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Container Networking, Volumes & Persistent Data Storage. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: CI/CD Automation with GitHub Actions & Cloud Deployment",
    "duration": "1 Week",
    "overview": "Automate build, test, and deployment workflows with GitHub Actions, secret management, and zero-downtime cloud hosting.",
    "lessons": [
      {
        "title": "GitHub Actions Workflow Syntax, Triggers & Runners",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "GitHub Actions from Scratch: Workflows, Jobs & Triggers",
        "objective": "Create .github/workflows/deploy.yml, configure branch push/pull_request triggers, and run automated CI jobs on Ubuntu cloud runners.",
        "theoryContent": "Continuous Integration (CI) prevents broken code from merging to main. GitHub Actions triggers workflows upon git events. Jobs run inside isolated virtual runners, executing defined steps: checkout code, setup Node, install packages, and run tests.",
        "codeSnippet": "name: Production CI Pipeline\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  verify:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: \"npm\"\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build",
        "handsOnActivity": {
          "title": "Hands-On Lab: GitHub Actions Workflow Syntax, Triggers & Runners",
          "instructions": [
            "Create a .github/workflows/ci.yml file.",
            "Define triggers for push and pull_request on branch main.",
            "Enable npm dependency caching to cut pipeline run time in half."
          ],
          "starterCode": "name: CI\non: [push]\njobs: ...",
          "expectedOutcome": "An automated CI pipeline that tests and validates every commit before it can be merged."
        },
        "exam": {
          "title": "GitHub Actions Workflow Syntax, Triggers & Runners - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-github-actions-workflow-syntax",
              "question": "What is the purpose of using actions/setup-node with cache: \"npm\" in GitHub Actions?",
              "options": [
                "It caches node_modules dependencies between pipeline runs, significantly speeding up workflow completion",
                "It publishes the package to npm automatically",
                "It generates documentation",
                "It minifies CSS styles"
              ],
              "correctIndex": 0,
              "explanation": "Caching dependencies avoids re-downloading identical packages on every run, drastically reducing CI build times."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "GitHub Actions Workflow Syntax, Triggers & Runners - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for GitHub Actions Workflow Syntax, Triggers & Runners. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Automated Linting, TypeScript Checking & Unit Test Pipelines",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "CI Quality Gates: ESLint, Prettier & Vitest/Jest Automation",
        "objective": "Configure automated quality gates: reject PRs that fail ESLint rules, TypeScript compile checks (tsc --noEmit), or unit test suites.",
        "theoryContent": "Quality gates enforce clean code standards automatically. If a developer attempts to commit code with TypeScript type errors or failing unit tests, the GitHub Actions runner fails the job and blocks branch merging.",
        "codeSnippet": "    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 20, cache: \"npm\" }\n      - run: npm ci\n      - name: TypeScript Typecheck\n        run: npx tsc --noEmit\n      - name: Unit Tests\n        run: npm run test:coverage\n      - name: Build Verification\n        run: npm run build",
        "handsOnActivity": {
          "title": "Hands-On Lab: Automated Linting, TypeScript Checking & Unit Test Pipelines",
          "instructions": [
            "Add a strict TypeScript validation step (tsc --noEmit) to the CI pipeline.",
            "Run Vitest unit tests with coverage reporting.",
            "Protect the main branch with GitHub Branch Protection Rules requiring CI checks to pass."
          ],
          "starterCode": "run: npm test",
          "expectedOutcome": "Bulletproof automated quality control ensuring zero broken builds ever reach production."
        },
        "exam": {
          "title": "Automated Linting, TypeScript Checking & Unit Test Pipelines - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-automated-linting-typescript-c",
              "question": "What does npx tsc --noEmit do in a continuous integration pipeline?",
              "options": [
                "It validates all TypeScript types across the entire project for errors without generating JavaScript output files",
                "It removes TypeScript from the project",
                "It ignores all compiler warnings",
                "It runs unit tests"
              ],
              "correctIndex": 0,
              "explanation": "tsc --noEmit runs full static type checking across the project without emitting build artifacts, ideal for fast CI checks."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Automated Linting, TypeScript Checking & Unit Test Pipelines - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Automated Linting, TypeScript Checking & Unit Test Pipelines. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Production Build Deployment to Vercel, Netlify & Cloud VMs",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Deploying Modern Web Apps: Vercel, Netlify & Cloud Hosting",
        "objective": "Deploy production single-page applications (SPAs) to global edge CDNs (Vercel, Netlify) with custom domains and SSL termination.",
        "theoryContent": "Modern static and edge web applications are distributed across worldwide Content Delivery Networks (CDNs). Every commit pushed to main triggers an atomic build; edge caching ensures assets load from the nearest server to the student.",
        "codeSnippet": "# vercel.json configuration for Single Page Applications\n{\n  \"rewrites\": [\n    { \"source\": \"/(.*)\", \"destination\": \"/index.html\" }\n  ],\n  \"headers\": [\n    {\n      \"source\": \"/assets/(.*)\",\n      \"headers\": [\n        { \"key\": \"Cache-Control\", \"value\": \"public, max-age=31536000, immutable\" }\n      ]\n    }\n  ]\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Production Build Deployment to Vercel, Netlify & Cloud VMs",
          "instructions": [
            "Configure SPA rewrite rules in vercel.json or _redirects for Netlify.",
            "Attach production environment secrets via cloud dashboard.",
            "Verify instant global asset deployment and SSL certificate activation."
          ],
          "starterCode": "{ \"rewrites\": [...] }",
          "expectedOutcome": "Worldwide edge CDN deployment with sub-second page loads and automated SSL certificate renewal."
        },
        "exam": {
          "title": "Production Build Deployment to Vercel, Netlify & Cloud VMs - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-production-build-deployment-to",
              "question": "Why are SPA rewrite rules (e.g. routing all paths to /index.html) required on static web hosts?",
              "options": [
                "Because client-side routing handles navigation in JavaScript; without rewrites, reloading deep URLs results in 404 Not Found",
                "Because HTML5 requires it",
                "To prevent users from opening DevTools",
                "To compress video files"
              ],
              "correctIndex": 0,
              "explanation": "In SPAs, routes exist in client JavaScript; hosts must redirect requests to index.html so the client router can mount the route."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Production Build Deployment to Vercel, Netlify & Cloud VMs - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Production Build Deployment to Vercel, Netlify & Cloud VMs. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Production Monitoring, Sentry Error Tracking & Uptime Metrics",
        "duration": "28 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Application Performance Monitoring (APM) & Sentry Integration",
        "objective": "Integrate real-time error tracking with Sentry, configure release tracking, capture user context, and set up uptime alerts.",
        "theoryContent": "Users rarely report software bugs—they just abandon the website. Application Performance Monitoring (APM) like Sentry captures unhandled client exceptions, stack traces, device metadata, and network breadcrumbs in real time.",
        "codeSnippet": "import * as Sentry from \"@sentry/react\";\n\nSentry.init({\n  dsn: process.env.VITE_SENTRY_DSN,\n  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],\n  tracesSampleRate: 1.0, // Capture 100% of transactions in testing\n  replaysOnErrorSampleRate: 1.0,\n  environment: process.env.NODE_ENV\n});\n\n// Error boundary component wrapping application\nexport const SentryErrorBoundary = Sentry.ErrorBoundary;",
        "handsOnActivity": {
          "title": "Hands-On Lab: Production Monitoring, Sentry Error Tracking & Uptime Metrics",
          "instructions": [
            "Initialize Sentry SDK with project DSN.",
            "Wrap application root in a Sentry ErrorBoundary.",
            "Trigger a simulated frontend error to verify real-time alert dispatch."
          ],
          "starterCode": "Sentry.init({ dsn: \"...\" });",
          "expectedOutcome": "Immediate engineering visibility into production errors before users have a chance to complain."
        },
        "exam": {
          "title": "Production Monitoring, Sentry Error Tracking & Uptime Metrics - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-production-monitoring-sentry-e",
              "question": "What is the primary role of an Application Performance Monitoring (APM) tool like Sentry in production?",
              "options": [
                "To automatically capture, group, and alert on unhandled runtime exceptions with rich stack traces and user breadcrumbs",
                "To design user interface graphics",
                "To replace PostgreSQL databases",
                "To run video conferences"
              ],
              "correctIndex": 0,
              "explanation": "Sentry captures runtime exceptions with complete contextual information, allowing engineers to reproduce and fix bugs quickly."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Production Monitoring, Sentry Error Tracking & Uptime Metrics - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Production Monitoring, Sentry Error Tracking & Uptime Metrics. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const LEVEL_9_MODULES: DetailedModule[] = [
  {
    "title": "Module 1: Autonomous Multi-Step AI Agent Architecture & ReAct Loops",
    "duration": "2 Weeks",
    "overview": "Build autonomous agents that plan, execute tool calls, evaluate intermediate results, and self-correct errors.",
    "lessons": [
      {
        "title": "LLM Architecture: Tokens, Context Windows & Temperature",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "LLM Architecture: Tokens, Context Limits & Temperature Mechanics",
        "objective": "Understand how language models predict tokens, manage context limits, and balance deterministic vs creative responses.",
        "theoryContent": "LLMs process text as token chunks (roughly 4 characters per token). Setting `temperature: 0` produces deterministic outputs ideal for code generation and schema validation, while `temperature: 0.7` enables creative exploration.",
        "codeSnippet": "import OpenAI from \"openai\";\n\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });\n\nasync function generateEvaluationReport(studentCode: string) {\n  const completion = await openai.chat.completions.create({\n    model: \"gpt-4o\",\n    temperature: 0.1, // Low temperature for deterministic grading\n    messages: [\n      { role: \"system\", content: \"You are an expert code evaluator at KEZJED SOLUTIONS.\" },\n      { role: \"user\", content: `Evaluate this solution:\\n${studentCode}` }\n    ]\n  });\n  return completion.choices[0].message.content;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: LLM Architecture: Tokens, Context Windows & Temperature",
          "instructions": [
            "Configure model temperature for deterministic code evaluation.",
            "Calculate token usage and cost estimations for prompt payloads.",
            "Structure system and user prompts to eliminate model hallucinations."
          ],
          "starterCode": "const completion = await openai.chat.completions.create(...);",
          "expectedOutcome": "Reliable, predictable LLM integration tailored specifically for enterprise code evaluation."
        },
        "exam": {
          "title": "LLM Architecture: Tokens, Context Windows & Temperature - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-llm-architecture-tokens-contex",
              "question": "What temperature setting is recommended for deterministic code grading and JSON extraction tasks?",
              "options": [
                "Low temperature (e.g. 0 to 0.2)",
                "High temperature (e.g. 1.2 to 1.8)",
                "Temperature must be exactly 0.5",
                "Temperature has no effect on LLM output"
              ],
              "correctIndex": 0,
              "explanation": "Low temperature forces the model to select the highest-probability tokens, maximizing factual consistency."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "LLM Architecture: Tokens, Context Windows & Temperature - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for LLM Architecture: Tokens, Context Windows & Temperature. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Streaming Real-Time Completions with Server-Sent Events (SSE)",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Real-Time Streaming LLM Responses with Server-Sent Events",
        "objective": "Stream LLM responses token-by-token to client browsers using AsyncIterables and Server-Sent Events (SSE).",
        "theoryContent": "Waiting 15 seconds for a complete LLM response creates a terrible user experience. Streaming via Server-Sent Events renders tokens in real time as they are generated, cutting perceived latency to milliseconds.",
        "codeSnippet": "// Backend route streaming tokens to client\napp.post(\"/api/ai/stream\", async (req, res) => {\n  res.setHeader(\"Content-Type\", \"text/event-stream\");\n  res.setHeader(\"Cache-Control\", \"no-cache\");\n  res.setHeader(\"Connection\", \"keep-alive\");\n  \n  const stream = await openai.chat.completions.create({\n    model: \"gpt-4o\",\n    stream: true,\n    messages: [{ role: \"user\", content: req.body.prompt }]\n  });\n  \n  for await (const chunk of stream) {\n    const token = chunk.choices[0]?.delta?.content || \"\";\n    res.write(`data: ${JSON.stringify({ token })}\\n\\n`);\n  }\n  res.write(\"data: [DONE]\\n\\n\");\n  res.end();\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: Streaming Real-Time Completions with Server-Sent Events (SSE)",
          "instructions": [
            "Set up an HTTP text/event-stream response stream.",
            "Iterate over OpenAI streaming AsyncIterables using for await.",
            "Consume the event stream in React using ReadableStream reader."
          ],
          "starterCode": "const stream = await openai.chat.completions.create({ stream: true, ... });",
          "expectedOutcome": "Instant visual token streaming providing immediate user feedback on AI generations."
        },
        "exam": {
          "title": "Streaming Real-Time Completions with Server-Sent Events (SSE) - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-streaming-real-time-completion",
              "question": "Why is streaming responses with Server-Sent Events critical for AI user interfaces?",
              "options": [
                "It delivers immediate first-token feedback, cutting perceived user latency from seconds down to milliseconds",
                "It reduces server RAM by 99%",
                "It allows AI to run offline",
                "It eliminates API subscription costs"
              ],
              "correctIndex": 0,
              "explanation": "Streaming displays tokens as they are produced, vastly improving perceived responsiveness."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Streaming Real-Time Completions with Server-Sent Events (SSE) - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Streaming Real-Time Completions with Server-Sent Events (SSE). Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Tool Calling (Function Calling) with Structured JSON Schemas",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "AI Function Calling: Connecting LLMs to Live Databases & APIs",
        "objective": "Equip models with external tools using structured JSON schemas (e.g. queryDatabase, sendEmail, evaluateAssignment).",
        "theoryContent": "LLMs cannot execute code or query databases directly. With Function Calling, you provide tools with JSON schemas. When the model determines it needs information, it responds with a structured tool call payload that your backend executes.",
        "codeSnippet": "const tools = [{\n  type: \"function\",\n  function: {\n    name: \"getCourseEnrollmentCount\",\n    description: \"Retrieve total enrolled students for a specific technical track\",\n    parameters: {\n      type: \"object\",\n      properties: {\n        trackId: { type: \"string\", description: \"The track ID (e.g. track-level-1-html-foundations)\" }\n      },\n      required: [\"trackId\"]\n    }\n  }\n}];",
        "handsOnActivity": {
          "title": "Hands-On Lab: Tool Calling (Function Calling) with Structured JSON Schemas",
          "instructions": [
            "Define tools using JSON Schema specifications.",
            "Inspect model tool_calls responses.",
            "Execute the tool locally and return tool results back to the model context."
          ],
          "starterCode": "const tools = [{ type: \"function\", function: { ... } }];",
          "expectedOutcome": "An intelligent AI assistant capable of interacting with live databases and executing backend business logic."
        },
        "exam": {
          "title": "Tool Calling (Function Calling) with Structured JSON Schemas - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-tool-calling-function-calling-",
              "question": "Does the OpenAI API execute the function code directly on its servers?",
              "options": [
                "No; the model generates the structured function arguments, but your application backend must execute the code and return results",
                "Yes; OpenAI executes your code directly on their cloud servers",
                "Only if the code is written in Python",
                "Only if authorized by credit card"
              ],
              "correctIndex": 0,
              "explanation": "The model only determines which tool to call and provides arguments; execution takes place securely on your own server."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Tool Calling (Function Calling) with Structured JSON Schemas - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Tool Calling (Function Calling) with Structured JSON Schemas. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Autonomous Agent Loops: ReAct (Reason + Act) Execution Flow",
        "duration": "36 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Building ReAct Autonomous Agents: Thought, Action & Observation",
        "objective": "Implement autonomous execution loops where models reason, choose tools, observe outcomes, and iterate until the objective is accomplished.",
        "theoryContent": "Unlike single-turn prompts, ReAct (Reason + Act) agents evaluate user goals, formulate multi-step execution plans, call external tools, analyze intermediate observations, and self-correct errors until the goal is achieved.",
        "codeSnippet": "async function runAutonomousAgent(goal: string) {\n  const messages: any[] = [{ role: \"user\", content: goal }];\n  let iterations = 0;\n  \n  while (iterations < 10) {\n    const response = await openai.chat.completions.create({\n      model: \"gpt-4o\",\n      tools,\n      messages\n    });\n    \n    const message = response.choices[0].message;\n    messages.push(message);\n    \n    if (!message.tool_calls || message.tool_calls.length === 0) {\n      return message.content; // Task finished!\n    }\n    \n    for (const toolCall of message.tool_calls) {\n      const result = await executeLocalTool(toolCall.function.name, toolCall.function.arguments);\n      messages.push({\n        role: \"tool\",\n        tool_call_id: toolCall.id,\n        content: JSON.stringify(result)\n      });\n    }\n    iterations++;\n  }\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Autonomous Agent Loops: ReAct (Reason + Act) Execution Flow",
          "instructions": [
            "Build an iterative while loop managing message history.",
            "Parse and execute tool calls sequentially.",
            "Provide terminal stopping conditions and loop timeouts."
          ],
          "starterCode": "async function runAgent(goal) { while(true) { ... } }",
          "expectedOutcome": "A self-directed autonomous agent capable of solving complex multi-step technical challenges."
        },
        "exam": {
          "title": "Autonomous Agent Loops: ReAct (Reason + Act) Execution Flow - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-autonomous-agent-loops-react-r",
              "question": "What defines a ReAct (Reason + Act) autonomous agent loop?",
              "options": [
                "An iterative loop where the AI reasons about observations, calls tools, and refines plans until the goal is achieved",
                "A React frontend component hook",
                "A regular expression pattern matching function",
                "A payment gateway"
              ],
              "correctIndex": 0,
              "explanation": "ReAct pairs iterative reasoning traces with tool actions, creating autonomous problem-solving capabilities."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Autonomous Agent Loops: ReAct (Reason + Act) Execution Flow - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Autonomous Agent Loops: ReAct (Reason + Act) Execution Flow. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 2: Retrieval-Augmented Generation (RAG) & Vector Databases",
    "duration": "2 Weeks",
    "overview": "Implement vector search with pgvector: text chunking, OpenAI embeddings, semantic similarity, and hybrid search pipelines.",
    "lessons": [
      {
        "title": "Vector Embeddings: Semantic Text Representation",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Vector Embeddings: text-embedding-3 & High-Dimensional Space",
        "objective": "Convert course documentation and transcripts into 1536-dimensional vector embeddings using text-embedding-3-small.",
        "theoryContent": "Keyword search fails when users search for synonyms (e.g. \"center a div\" vs \"flexbox alignment\"). Vector embeddings convert text into high-dimensional numerical vectors where semantically similar concepts cluster together in vector space.",
        "codeSnippet": "import OpenAI from \"openai\";\nconst openai = new OpenAI();\n\nexport async function generateEmbedding(text: string): Promise<number[]> {\n  const response = await openai.embeddings.create({\n    model: \"text-embedding-3-small\",\n    input: text.replace(/\\n/g, \" \")\n  });\n  return response.data[0].embedding; // 1536 float values\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Vector Embeddings: Semantic Text Representation",
          "instructions": [
            "Generate vector embeddings for curriculum lesson objectives.",
            "Calculate dot products between vectors to demonstrate semantic proximity.",
            "Verify that conceptually related terms produce high similarity scores."
          ],
          "starterCode": "const embedding = await openai.embeddings.create(...);",
          "expectedOutcome": "Deep comprehension of semantic vector representation and mathematical similarity."
        },
        "exam": {
          "title": "Vector Embeddings: Semantic Text Representation - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-vector-embeddings-semantic-tex",
              "question": "What do vector embeddings represent mathematically?",
              "options": [
                "High-dimensional coordinate vectors where geometric proximity represents semantic conceptual similarity",
                "Encrypted password strings",
                "Binary image pixels",
                "Compressed ZIP archives"
              ],
              "correctIndex": 0,
              "explanation": "Embeddings map words and passages into geometric vectors where closeness indicates semantic relatedness."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Vector Embeddings: Semantic Text Representation - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Vector Embeddings: Semantic Text Representation. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "PostgreSQL pgvector: Cosine Distance & Similarity Search",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "pgvector in PostgreSQL: Storing & Querying Vector Embeddings",
        "objective": "Enable the pgvector extension, create vector(1536) columns, build HNSW indexes, and query using cosine distance (<=>).",
        "theoryContent": "The `pgvector` extension allows PostgreSQL to store and query vector embeddings alongside relational data. The cosine distance operator `<=>` calculates semantic distance, while HNSW (Hierarchical Navigable Small World) indexes make queries lightning fast.",
        "codeSnippet": "-- Enable pgvector extension in PostgreSQL\nCREATE EXTENSION IF NOT EXISTS vector;\n\nCREATE TABLE course_documents (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  course_id TEXT NOT NULL,\n  content TEXT NOT NULL,\n  embedding vector(1536)\n);\n\n-- Create fast HNSW index for cosine distance\nCREATE INDEX ON course_documents USING hnsw (embedding vector_cosine_ops);\n\n-- Semantic similarity query\nSELECT id, content, 1 - (embedding <=> $1) AS similarity\nFROM course_documents\nORDER BY embedding <=> $1\nLIMIT 5;",
        "handsOnActivity": {
          "title": "Hands-On Lab: PostgreSQL pgvector: Cosine Distance & Similarity Search",
          "instructions": [
            "Enable vector extension in your Supabase PostgreSQL instance.",
            "Create an HNSW index on the vector embedding column.",
            "Query the top 5 most semantically relevant lesson passages given a user question."
          ],
          "starterCode": "SELECT * FROM docs ORDER BY embedding <=> $1 LIMIT 5;",
          "expectedOutcome": "Sub-millisecond semantic search directly inside your relational database."
        },
        "exam": {
          "title": "PostgreSQL pgvector: Cosine Distance & Similarity Search - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-postgresql-pgvector-cosine-dis",
              "question": "What operator is used in PostgreSQL pgvector to calculate cosine distance between vectors?",
              "options": [
                "<=>",
                "<->",
                "<#>",
                "=~"
              ],
              "correctIndex": 0,
              "explanation": "<=> represents cosine distance in pgvector, where smaller values indicate higher semantic similarity."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "PostgreSQL pgvector: Cosine Distance & Similarity Search - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for PostgreSQL pgvector: Cosine Distance & Similarity Search. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Chunking Strategies, Document Ingestion & Hybrid Search",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "RAG Document Ingestion: Chunking, Overlap & Hybrid Search",
        "objective": "Chunk large PDFs and technical documentation into 500-token segments with 50-token overlap to preserve contextual continuity.",
        "theoryContent": "Embedding an entire 100-page book as one vector dilutes specific answers. Splitting documents into smaller chunks (300-600 tokens) with sliding overlaps ensures specific facts are retained. Hybrid search combines full-text keyword search (BM25) with semantic vector search.",
        "codeSnippet": "export function chunkText(text: string, chunkSize = 500, overlap = 50): string[] {\n  const words = text.split(\" \");\n  const chunks: string[] = [];\n  \n  for (let i = 0; i < words.length; i += (chunkSize - overlap)) {\n    const chunk = words.slice(i, i + chunkSize).join(\" \");\n    chunks.push(chunk);\n    if (i + chunkSize >= words.length) break;\n  }\n  return chunks;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Chunking Strategies, Document Ingestion & Hybrid Search",
          "instructions": [
            "Implement sliding-window text chunking with configurable overlap.",
            "Ingest and store chunked curriculum guides with parent document IDs.",
            "Benchmark search recall comparing pure vector search vs hybrid search."
          ],
          "starterCode": "function splitIntoChunks(text) { ... }",
          "expectedOutcome": "High-accuracy document ingestion pipeline eliminating contextual truncation at chunk boundaries."
        },
        "exam": {
          "title": "Chunking Strategies, Document Ingestion & Hybrid Search - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-chunking-strategies-document-i",
              "question": "Why is chunk overlap (e.g. 50 tokens) important when segmenting documents for RAG?",
              "options": [
                "It prevents critical information and context from being severed in half across arbitrary chunk boundaries",
                "It reduces database storage costs",
                "It speeds up network download times",
                "It translates text automatically"
              ],
              "correctIndex": 0,
              "explanation": "Overlap ensures that sentences crossing boundary edges are preserved intact in at least one chunk."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Chunking Strategies, Document Ingestion & Hybrid Search - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Chunking Strategies, Document Ingestion & Hybrid Search. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "RAG Pipeline Integration: Context Augmentation & Hallucination Defense",
        "duration": "36 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Building Production RAG: Context Injection & Anti-Hallucination",
        "objective": "Assemble the complete RAG pipeline: retrieve relevant chunks, format into system prompt context, and instruct the model to cite sources.",
        "theoryContent": "Hallucination occurs when LLMs invent plausible-sounding falsehoods. RAG anchors responses in retrieved ground truth: you inject retrieved chunks into the prompt context and instruct the model: \"Answer strictly using only the provided context. If unsure, state you do not know.\"",
        "codeSnippet": "async function answerStudentQuestion(question: string) {\n  // 1. Embed student question\n  const qEmbedding = await generateEmbedding(question);\n  \n  // 2. Retrieve top 3 relevant chunks from pgvector\n  const chunks = await searchCurriculumChunks(qEmbedding, 3);\n  const contextText = chunks.map((c, i) => `[Source ${i+1}]: ${c.content}`).join(\"\\n\\n\");\n  \n  // 3. Augmented generation with strict hallucination guardrails\n  const completion = await openai.chat.completions.create({\n    model: \"gpt-4o\",\n    temperature: 0.1,\n    messages: [\n      {\n        role: \"system\",\n        content: \"You are an AI teaching assistant at KEZJED SOLUTIONS. Answer strictly using ONLY the provided sources below. If the answer cannot be found in the sources, state: 'I do not have verified curriculum data to answer that question.'\\n\\nSOURCES:\\n\" + contextText\n      },\n      { role: \"user\", content: question }\n    ]\n  });\n  return completion.choices[0].message.content;\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: RAG Pipeline Integration: Context Augmentation & Hallucination Defense",
          "instructions": [
            "Build end-to-end RAG workflow combining embedding, vector search, and completion.",
            "Inject source citations into the synthesized response.",
            "Test with out-of-domain questions to verify refusal to hallucinate."
          ],
          "starterCode": "async function ragQuery(prompt) { ... }",
          "expectedOutcome": "An enterprise RAG system that provides accurate, source-cited educational answers with zero hallucinations."
        },
        "exam": {
          "title": "RAG Pipeline Integration: Context Augmentation & Hallucination Defense - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-rag-pipeline-integration-conte",
              "question": "What is the primary role of system prompt guardrails in a RAG pipeline?",
              "options": [
                "To instruct the model to ground its response strictly in the provided context passages and refuse to invent unsupported facts",
                "To format CSS styles in HTML",
                "To encrypt user messages",
                "To speed up GPU inference"
              ],
              "correctIndex": 0,
              "explanation": "Guardrails prevent hallucination by constraining the model to cite and synthesize exclusively from provided source passages."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "RAG Pipeline Integration: Context Augmentation & Hallucination Defense - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for RAG Pipeline Integration: Context Augmentation & Hallucination Defense. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Module 3: Production SaaS: Stripe Subscriptions, Multi-Tenancy & Capstone Hero",
    "duration": "2 Weeks",
    "overview": "Deploy the complete production capstone: Stripe billing webhooks, multi-tenant workspace isolation, usage billing, and enterprise launch.",
    "lessons": [
      {
        "title": "Stripe Billing: Customer Portals, Webhooks & Subscription State",
        "duration": "34 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Stripe Billing Integration: Checkout Sessions, Webhooks & Portals",
        "objective": "Integrate Stripe Checkout, listen for secure webhook events (checkout.session.completed, invoice.payment_failed), and update tenant subscription tiers.",
        "theoryContent": "Client-side confirmation of payments is insecure. Reliable billing architectures rely on Stripe Webhooks: Stripe servers send cryptographically signed HTTP POST events directly to your backend, where you verify signatures before provisioning access.",
        "codeSnippet": "import Stripe from \"stripe\";\nconst stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);\n\napp.post(\"/api/webhooks/stripe\", express.raw({ type: \"application/json\" }), async (req, res) => {\n  const sig = req.headers[\"stripe-signature\"]!;\n  let event: Stripe.Event;\n  \n  try {\n    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);\n  } catch (err: any) {\n    return res.status(400).send(`Webhook signature verification failed: ${err.message}`);\n  }\n  \n  if (event.type === \"checkout.session.completed\") {\n    const session = event.data.object as Stripe.Checkout.Session;\n    await activateStudentSubscription(session.client_reference_id!);\n  }\n  res.json({ received: true });\n});",
        "handsOnActivity": {
          "title": "Hands-On Lab: Stripe Billing: Customer Portals, Webhooks & Subscription State",
          "instructions": [
            "Verify Stripe webhook signatures using stripe.webhooks.constructEvent().",
            "Handle checkout.session.completed and customer.subscription.deleted events.",
            "Provision student access upon verified payment confirmation."
          ],
          "starterCode": "app.post(\"/webhook\", (req, res) => { ... });",
          "expectedOutcome": "A rock-solid monetization engine handling subscriptions, upgrades, and cancellations automatically."
        },
        "exam": {
          "title": "Stripe Billing: Customer Portals, Webhooks & Subscription State - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-stripe-billing-customer-portal",
              "question": "Why must Stripe webhook payloads be parsed using raw body buffers rather than express.json()?",
              "options": [
                "Cryptographic signature verification requires the exact, unaltered raw byte buffer sent by Stripe; JSON parsing alters byte formatting",
                "Because Stripe payloads are not JSON",
                "Because raw buffers upload faster",
                "It is required by browser cookies"
              ],
              "correctIndex": 0,
              "explanation": "Stripe signature checks hash the exact raw byte stream; any pre-parsing breaks cryptographic signature verification."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Stripe Billing: Customer Portals, Webhooks & Subscription State - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Stripe Billing: Customer Portals, Webhooks & Subscription State. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Multi-Tenant Architecture & Workspace Isolation",
        "duration": "32 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "Multi-Tenant SaaS Architecture: Row-Level vs Database Isolation",
        "objective": "Architect multi-tenant SaaS applications: isolate tenant data with organization IDs, subdomain routing (tenant.epicademy.ph), and scoped database queries.",
        "theoryContent": "Multi-tenancy allows one software instance to serve thousands of distinct corporate clients. Using row-level multi-tenancy (`tenant_id` on every table) backed by PostgreSQL Row-Level Security ensures that Organization A can never see or modify Organization B's data.",
        "codeSnippet": "export function withTenantContext(req: Request, res: Response, next: NextFunction) {\n  const host = req.headers.host || \"\";\n  const subdomain = host.split(\".\")[0]; // e.g. kezjed.epicademy.ph\n  \n  req.tenantId = subdomain;\n  next();\n}\n\n// Scoped database repository query\nexport async function getTenantCourses(tenantId: string) {\n  return await prisma.course.findMany({\n    where: { tenantId, isPublished: true }\n  });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Multi-Tenant Architecture & Workspace Isolation",
          "instructions": [
            "Extract tenant identity from request headers or host subdomains.",
            "Scope all database queries to the active tenantId.",
            "Verify cross-tenant isolation by attempting unauthorized cross-tenant queries."
          ],
          "starterCode": "const tenantId = req.headers[\"x-tenant-id\"];",
          "expectedOutcome": "Complete data isolation across corporate tenants on a shared, cost-efficient cloud infrastructure."
        },
        "exam": {
          "title": "Multi-Tenant Architecture & Workspace Isolation - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-multi-tenant-architecture-work",
              "question": "What is the primary advantage of row-level multi-tenancy (shared database, isolated by tenant_id) over database-per-tenant?",
              "options": [
                "Vastly lower operational costs, simplified maintenance, and instant automated tenant provisioning without spinning up new databases",
                "It makes the code run in Python",
                "It eliminates the need for passwords",
                "It increases internet speed"
              ],
              "correctIndex": 0,
              "explanation": "Row-level multi-tenancy offers high cost efficiency and instantaneous onboarding while maintaining security with RLS."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Multi-Tenant Architecture & Workspace Isolation - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Multi-Tenant Architecture & Workspace Isolation. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Analytics Dashboard, Usage Tracking & Cost-Per-Token Control",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "SaaS Analytics & AI Cost Governance Dashboards",
        "objective": "Track API consumption, aggregate token usage per student/organization, calculate profit margins, and enforce hard spending limits.",
        "theoryContent": "Uncontrolled AI usage can quickly lead to huge cloud bills. Enterprise AI SaaS platforms track token usage on every LLM call, logging input/output tokens to calculate real-time cost-per-user and enforcing automated spend caps.",
        "codeSnippet": "export async function recordAiUsage(userId: string, orgId: string, usage: { prompt_tokens: number; completion_tokens: number }) {\n  const COST_PER_1K_PROMPT = 0.005;\n  const COST_PER_1K_COMPLETION = 0.015;\n  \n  const costUsd = ((usage.prompt_tokens / 1000) * COST_PER_1K_PROMPT) + \n                  ((usage.completion_tokens / 1000) * COST_PER_1K_COMPLETION);\n                  \n  await prisma.aiUsageLog.create({\n    data: {\n      userId,\n      orgId,\n      promptTokens: usage.prompt_tokens,\n      completionTokens: usage.completion_tokens,\n      costUsd\n    }\n  });\n}",
        "handsOnActivity": {
          "title": "Hands-On Lab: Analytics Dashboard, Usage Tracking & Cost-Per-Token Control",
          "instructions": [
            "Log token usage metrics after every LLM completion.",
            "Calculate gross margins based on token consumption vs subscription fees.",
            "Implement automated rate-limiting when organizations exceed monthly budget caps."
          ],
          "starterCode": "function logTokens(userId, tokens) { ... }",
          "expectedOutcome": "Full financial and operational visibility into AI SaaS operating costs with automated margin protection."
        },
        "exam": {
          "title": "Analytics Dashboard, Usage Tracking & Cost-Per-Token Control - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-analytics-dashboard-usage-trac",
              "question": "Why must AI SaaS applications meter prompt and completion tokens separately?",
              "options": [
                "Because LLM providers charge different rates for input (prompt) tokens versus output (completion) tokens",
                "Because output tokens cannot be counted",
                "Because input tokens do not use memory",
                "Because completion tokens are free"
              ],
              "correctIndex": 0,
              "explanation": "LLM providers price input tokens and output generation tokens at different pricing tiers."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Analytics Dashboard, Usage Tracking & Cost-Per-Token Control - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Analytics Dashboard, Usage Tracking & Cost-Per-Token Control. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      },
      {
        "title": "Final Capstone Defense: Deploying the AI SaaS Enterprise Platform",
        "duration": "40 mins",
        "videoUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "videoTitle": "🏆 Capstone Hero: Production Launch & Architectural Defense",
        "objective": "Deploy the complete full-stack AI SaaS platform to production, defend architectural decisions, and achieve the Full-Stack AI Software Hero certification.",
        "theoryContent": "The pinnacle of the Zero-to-Hero engineering curriculum. Students integrate all skills mastered across Levels 1 through 9: semantic HTML5, modern CSS3 layouts, asynchronous TypeScript, React 18 frontend, Node/Express backend, PostgreSQL/Supabase database, Docker containerization, CI/CD pipelines, and autonomous AI agents.",
        "codeSnippet": "/**\n * EPICADEMY & KEZJED SOLUTIONS\n * Zero-to-Hero Full-Stack AI Software Hero Capstone\n * Certified by: Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS\n */\nexport const CAPSTONE_MANIFESTO = {\n  founder: \"Ronnel M. Aviguetero\",\n  organization: \"KEZJED SOLUTIONS\",\n  system: \"EPICADEMY Global Cloud Platform\",\n  certifiedSkills: [\n    \"HTML5 & Accessible Semantics\",\n    \"CSS3 Flexbox, Grid & Responsive Architecture\",\n    \"Modern JavaScript & TypeScript Systems\",\n    \"Asynchronous Event Loop & Web APIs\",\n    \"React 18 Component Architecture\",\n    \"Node.js & Express REST Backend\",\n    \"PostgreSQL, Supabase & Prisma ORM\",\n    \"DevOps, Docker & CI/CD Pipelines\",\n    \"Autonomous AI Agents, RAG & Cloud Scale\"\n  ],\n  status: \"PRODUCTION_READY_HERO\"\n};",
        "handsOnActivity": {
          "title": "Hands-On Lab: Final Capstone Defense: Deploying the AI SaaS Enterprise Platform",
          "instructions": [
            "Deploy full-stack AI SaaS application to live production cloud infrastructure.",
            "Execute end-to-end user testing: registration, subscription payment, and autonomous agent execution.",
            "Submit the final verification worksheet and grading rubric for executive review."
          ],
          "starterCode": "console.log(\"Welcome to the Hero Capstone Defense\");",
          "expectedOutcome": "A live, production-grade, multi-tenant AI SaaS platform operating in the cloud with verified automated workflows."
        },
        "exam": {
          "title": "Final Capstone Defense: Deploying the AI SaaS Enterprise Platform - Knowledge Assessment",
          "passingScore": 80,
          "questions": [
            {
              "id": "q-final-capstone-defense-deployi",
              "question": "What is the standard of excellence required for the Level 9 Full-Stack AI Software Hero certification?",
              "options": [
                "A fully functional, tested, containerized, and deployed cloud AI SaaS application with genuine business logic, database persistence, and autonomous AI capabilities",
                "Passing a multiple choice quiz only",
                "Writing 10 lines of HTML",
                "Watching a video without coding"
              ],
              "correctIndex": 0,
              "explanation": "The Full-Stack AI Hero certification is awarded upon successful deployment and architectural defense of a complete production system."
            }
          ]
        },
        "googleSheetsAssignment": {
          "title": "Final Capstone Defense: Deploying the AI SaaS Enterprise Platform - Verification Worksheet & Rubric",
          "sheetName": "Grading_Rubric",
          "description": "Official grading rubric and verification score sheet for Final Capstone Defense: Deploying the AI SaaS Enterprise Platform. Complete all hands-on deliverables and record your evaluation metrics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing",
          "deliverables": [
            "Working codebase meeting all architectural requirements",
            "Passing local unit and lint verification",
            "Completed self-assessment grading rubric tab"
          ],
          "rubric": [
            {
              "criteria": "Functional Implementation & Code Accuracy",
              "points": 40
            },
            {
              "criteria": "Architectural Best Practices & Clean Code",
              "points": 30
            },
            {
              "criteria": "Edge Case Handling & Error Boundaries",
              "points": 20
            },
            {
              "criteria": "Documentation & Performance Verification",
              "points": 10
            }
          ]
        }
      }
    ]
  }
];

export const ZERO_TO_HERO_COURSES: ZeroToHeroCourse[] = [
  {
    detailedModules: LEVEL_1_MODULES,
    track: {
      id: "track-level-1-html-foundations",
      title: "Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture",
      category: "stem",
      categoryLabel: "STEM & Web Dev",
      slug: "level-1-modern-html5-fundamentals",
      badge: "Step 1: Foundations",
      level: "Beginner",
      levelIndex: 1,
      price: 29,
      originalPrice: 59,
      careerMilestone: "Web Foundations Certified",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.98,
      reviewCount: 52,
      activeLearners: 340,
      lessonsCount: 12,
      duration: "3 Weeks",
      description: "Master the foundational markup language of the Internet. Learn modern HTML5 boilerplate, semantic tags, forms, and Google Sheets classroom grading rubrics.",
      skills: ["HTML5","DOM Tree","Semantic Phrasing","Form Validation","SEO Meta Tags"],
      colorTheme: "from-orange-500 via-amber-500 to-yellow-500",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_2_MODULES,
    track: {
      id: "track-level-2-css-mastery",
      title: "Level 2: Modern CSS3 Mastery, Flexbox, Grid & Responsive Architecture",
      category: "stem",
      categoryLabel: "STEM & Styling",
      slug: "level-2-modern-css3-mastery",
      badge: "Step 2: Design Systems",
      level: "Beginner",
      levelIndex: 2,
      price: 39,
      originalPrice: 79,
      careerMilestone: "CSS Layout & UI Certified",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.95,
      reviewCount: 68,
      activeLearners: 420,
      lessonsCount: 12,
      duration: "3 Weeks",
      description: "Master the art and science of visual presentation. Construct responsive grids, flexible toolbars, fluid typography, and GPU-accelerated micro-interactions.",
      skills: ["CSS3","Flexbox","CSS Grid","Custom Properties","Animations","Container Queries"],
      colorTheme: "from-blue-500 via-indigo-500 to-cyan-500",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_3_MODULES,
    track: {
      id: "track-level-3-js-foundations",
      title: "Level 3: Modern JavaScript (ES6+), DOM Manipulation & Event Architecture",
      category: "stem",
      categoryLabel: "STEM & Scripting",
      slug: "level-3-modern-javascript-foundations",
      badge: "Step 3: Logic Engine",
      level: "Intermediate",
      levelIndex: 3,
      price: 49,
      originalPrice: 99,
      careerMilestone: "JavaScript Engineer Certified",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.97,
      reviewCount: 75,
      activeLearners: 490,
      lessonsCount: 12,
      duration: "4 Weeks",
      description: "Build dynamic interactive web applications. Master scopes, closures, higher-order functions, event propagation, batched DOM rendering, and client storage.",
      skills: ["JavaScript ES6+","Closures","Event Delegation","DOM Mutation","IndexedDB","Debounce"],
      colorTheme: "from-yellow-400 via-amber-500 to-orange-500",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_4_MODULES,
    track: {
      id: "track-level-4-async-js",
      title: "Level 4: Asynchronous JavaScript, Fetch API, Promises & Web APIs",
      category: "stem",
      categoryLabel: "STEM & Asynchronous Systems",
      slug: "level-4-async-javascript-apis",
      badge: "Step 4: Asynchronous Web",
      level: "Intermediate",
      levelIndex: 4,
      price: 59,
      originalPrice: 119,
      careerMilestone: "Certified Asynchronous JavaScript Specialist",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.96,
      reviewCount: 62,
      activeLearners: 395,
      lessonsCount: 12,
      duration: "4 Weeks",
      description: "Master asynchronous execution in the V8 engine: event loops, microtasks vs macrotasks, fetch concurrency, background Web Workers, and offline Service Workers.",
      skills: ["Event Loop","Promises & Async/Await","Fetch API","Web Workers","IntersectionObserver","Service Workers"],
      colorTheme: "from-cyan-500 via-teal-500 to-emerald-500",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_5_MODULES,
    track: {
      id: "track-level-5-react-ts",
      title: "Level 5: Modern React 18, TypeScript & Enterprise Component Architecture",
      category: "stem",
      categoryLabel: "STEM & Modern Frontend",
      slug: "level-5-modern-react-typescript",
      badge: "Step 5: Frontend Architecture",
      level: "Intermediate",
      levelIndex: 5,
      price: 69,
      originalPrice: 139,
      careerMilestone: "Certified React & TypeScript Architect",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.99,
      reviewCount: 94,
      activeLearners: 580,
      lessonsCount: 12,
      duration: "4 Weeks",
      description: "Architect enterprise frontend systems. Master functional components, custom hooks, type-safe forms with Zod, state machines with useReducer, and React 18 transitions.",
      skills: ["React 18","TypeScript","Custom Hooks","React Hook Form & Zod","Context API","Concurrent Rendering"],
      colorTheme: "from-blue-600 via-sky-600 to-indigo-600",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_6_MODULES,
    track: {
      id: "track-level-6-node-backend",
      title: "Level 6: Modern Node.js, Express & Enterprise RESTful Backend Engineering",
      category: "stem",
      categoryLabel: "STEM & Cloud Backend",
      slug: "level-6-nodejs-express-backend",
      badge: "Step 6: Server Architecture",
      level: "Intermediate",
      levelIndex: 6,
      price: 79,
      originalPrice: 159,
      careerMilestone: "Certified Node.js Backend Engineer",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.94,
      reviewCount: 78,
      activeLearners: 460,
      lessonsCount: 12,
      duration: "4 Weeks",
      description: "Engineer high-throughput enterprise RESTful APIs. Master Libuv thread pools, ES modules, stream processing, JWT auth with refresh rotation, and RBAC authorization.",
      skills: ["Node.js Runtime","Express.js","Bcrypt & JWT Auth","RBAC Security","Streams & Buffers","API Architecture"],
      colorTheme: "from-green-600 via-emerald-600 to-teal-700",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_7_MODULES,
    track: {
      id: "track-level-7-postgres-supabase",
      title: "Level 7: PostgreSQL, Prisma ORM, Supabase & Cloud Database Architecture",
      category: "stem",
      categoryLabel: "STEM & Data Architecture",
      slug: "level-7-postgresql-supabase-prisma",
      badge: "Step 7: Cloud Databases",
      level: "Advanced",
      levelIndex: 7,
      price: 89,
      originalPrice: 179,
      careerMilestone: "Certified Cloud Database & Supabase Architect",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.98,
      reviewCount: 82,
      activeLearners: 510,
      lessonsCount: 12,
      duration: "4 Weeks",
      description: "Architect resilient relational database systems. Master normalized schemas, SQL joins, B-Tree indexes, Prisma migrations, Supabase Row-Level Security, and ACID transactions.",
      skills: ["PostgreSQL","Prisma ORM","Supabase Cloud","Row-Level Security (RLS)","Realtime WebSockets","SQL Indexing"],
      colorTheme: "from-teal-500 via-cyan-600 to-blue-700",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_8_MODULES,
    track: {
      id: "track-level-8-security-devops",
      title: "Level 8: Enterprise Security, DevOps, Docker & CI/CD Pipelines",
      category: "stem",
      categoryLabel: "STEM & DevOps Engineering",
      slug: "level-8-devops-docker-cicd",
      badge: "Step 8: Cloud Systems",
      level: "Advanced",
      levelIndex: 8,
      price: 99,
      originalPrice: 199,
      careerMilestone: "Certified Cloud DevOps & Security Engineer",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 4.97,
      reviewCount: 89,
      activeLearners: 475,
      lessonsCount: 12,
      duration: "4 Weeks",
      description: "Harden and automate production systems. Master OWASP defenses, multi-stage Dockerfiles, Docker Compose stacks, GitHub Actions CI/CD quality gates, and APM error tracking.",
      skills: ["Docker & Compose","Multi-Stage Builds","OWASP Top 10","GitHub Actions CI/CD","Edge Deployment","Sentry APM"],
      colorTheme: "from-violet-600 via-purple-600 to-fuchsia-600",
      popular: true,
      published: true,
      isCustomCourse: true,
    }
  },
  {
    detailedModules: LEVEL_9_MODULES,
    track: {
      id: "track-level-9-fullstack-ai-hero",
      title: "Level 9: Full-Stack AI SaaS Capstone: Autonomous AI Agents & Cloud Scale",
      category: "stem",
      categoryLabel: "STEM & AI Hero",
      slug: "level-9-fullstack-ai-saas-hero",
      badge: "🏆 Step 9: HERO",
      level: "Advanced",
      levelIndex: 9,
      price: 149,
      originalPrice: 299,
      careerMilestone: "🏆 Full-Stack AI Software Hero",
      isPaid: true,
      instructor: {
        name: 'Ronnel M. Aviguetero',
        role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        verified: true,
        credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
      },
      rating: 5,
      reviewCount: 110,
      activeLearners: 640,
      lessonsCount: 12,
      duration: "6 Weeks",
      description: "The pinnacle capstone. Architect and deploy a complete production AI SaaS platform with autonomous LLM agents, vector embeddings, Stripe subscriptions, and high-scale cloud distribution.",
      skills: ["Autonomous AI Agents","LLM Function Calling","Stripe Billing","Cloud Architecture","Vector Search (pgvector)","Full-Stack Hero"],
      colorTheme: "from-emerald-500 via-teal-500 to-blue-600",
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
      code_snippet: l.codeSnippet,
      objective: l.objective,
      activity: l.handsOnActivity,
      exam: l.exam,
      worksheet: l.googleSheetsAssignment,
      order_index: lIdx + 1,
    }))
  }))
}));
