import type { Track } from '../types';

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

export const HTML_COURSE_DETAILED_MODULES: DetailedModule[] = [
  {
    title: 'Module 1: Web Architecture & Document Fundamentals',
    duration: '1 Week',
    overview: 'Understand how browsers parse HTML, the document object tree, and establish your first semantic HTML5 skeleton.',
    lessons: [
      {
        title: 'Lesson 1.1: The Anatomy of the Web & Your First HTML5 Document',
        duration: '22 mins',
        videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
        videoTitle: 'HTML Full Course for Beginners (Document Skeleton)',
        objective: 'Master <!DOCTYPE html>, the <html>, <head>, and <body> nodes, meta viewport configurations, and character encoding.',
        theoryContent: `HyperText Markup Language (HTML) is the structural foundation of every webpage. When you type a URL, the web browser receives plain HTML text from the server and transforms it into the Document Object Model (DOM) tree.

Every modern HTML document requires five essential boilerplate elements:
1. <!DOCTYPE html> tells the browser engine to render in standard HTML5 mode.
2. <html lang="en"> wraps all content and declares the primary language for screen readers.
3. <head> holds metadata invisible on the canvas (character set, viewport scaling, page title, linked CSS).
4. <meta charset="UTF-8"> enables universal character rendering (accents, emojis, non-Latin scripts).
5. <body> contains all user-visible elements: headings, text, media, and interactive interfaces.`,
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First HTML5 Webpage - Epicademy</title>
  </head>
  <body>
    <h1>Welcome to Modern Web Development</h1>
    <p>This is my first live HTML document rendered in standard mode.</p>
  </body>
</html>`,
        handsOnActivity: {
          title: 'Activity 1: Create Your Document Skeleton & Meta Tag Audit',
          instructions: [
            'Create a new file called index.html.',
            'Write the complete HTML5 boilerplate without copy-pasting to build muscle memory.',
            'Include a <meta name="description"> tag describing your personal learning goals.',
            'Add an <h1> heading with your name and an introductory paragraph.',
            'Open index.html directly in Chrome or Edge and inspect the Elements tab in Developer Tools.'
          ],
          starterCode: `<!-- Write your HTML5 boilerplate below from memory -->`,
          expectedOutcome: 'A validated HTML5 document that passes the W3C Markup Validation Service with zero syntax errors.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 1: HTML Tag Anatomy & Syntax Tracker',
          sheetName: 'Sheet1_Tag_Anatomy',
          description: 'Open the Google Sheets assignment template to catalog essential HTML elements, their opening/closing syntax, self-closing status, and real-world usage examples.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Fill out Column B (Tag Name) and Column C (Tag Purpose) for 15 core elements.',
            'Classify whether each tag is Block-level, Inline, or Metadata.',
            'Write one valid syntax code snippet per row in Column E.',
            'Submit your completed Google Sheet link in the course portal.'
          ],
          rubric: [
            { criteria: 'Accurate syntax definition for all 15 elements', points: 40 },
            { criteria: 'Correct distinction between self-closing (void) and container tags', points: 30 },
            { criteria: 'Practical code example provided for each element', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 1.2: Content Hierarchy: Headings, Paragraphs & Structured Lists',
        duration: '28 mins',
        videoUrl: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
        videoTitle: 'HTML Headings, Paragraphs, Lists & Semantic Formatting',
        objective: 'Implement proper typographical hierarchy with h1-h6, unordered lists, ordered lists, and nested navigation trees.',
        theoryContent: `Search engines (SEO) and screen reader assistive technologies rely heavily on proper heading hierarchies. 

Key Rules for Headings:
- Only ONE <h1> should exist per page representing the primary topic.
- Never skip heading levels (do not jump directly from <h2> to <h4>).
- Headings are structural landmarks, not styling mechanisms (use CSS for font sizes, not heading tags!).

Lists in HTML:
- <ul>: Unordered bulleted lists for collections where order does not matter (e.g. navigation links, ingredients).
- <ol>: Ordered numbered lists where sequence is essential (e.g. tutorial steps, top 10 rankings).
- <dl>, <dt>, <dd>: Description definition lists for glossaries and key-value pairs.`,
        codeSnippet: `<!-- Typographical Hierarchy -->
<h1>Web Development Bootcamp Curriculum</h1>
<p>Master the fundamentals of frontend engineering through hands-on labs.</p>

<h2>Phase 1: Foundations</h2>
<h3>Topic A: HTML Elements</h3>
<ul>
  <li>Headings & Paragraphs</li>
  <li>Ordered & Unordered Lists</li>
  <li>Inline text formatting: <strong>bold importance</strong> and <em>emphasis</em></li>
</ul>

<h3>Topic B: Step-by-Step Deployment</h3>
<ol>
  <li>Write clean markup</li>
  <li>Validate against W3C standards</li>
  <li>Publish to GitHub Pages</li>
</ol>`,
        handsOnActivity: {
          title: 'Activity 2: Build a Structured Tutorial Article with Nested Lists',
          instructions: [
            'Create a tutorial webpage about your favorite hobby or technical topic.',
            'Structure the content using one <h1>, two <h2> sections, and appropriate <h3> subsections.',
            'Create a nested list demonstrating a multi-step recipe or troubleshooting guide.',
            'Use <strong\> and <em\> tags semantically to highlight key steps.'
          ],
          starterCode: `<h1>How to Master [Your Topic]</h1>\n<!-- Add your sections, paragraphs, and nested lists here -->`,
          expectedOutcome: 'A clean document with clear typographical hierarchy readable by assistive screen readers.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 2: Document Outline & Hierarchy Scoring Matrix',
          sheetName: 'Sheet2_Hierarchy_Matrix',
          description: 'Map out a 3-tier content hierarchy in Google Sheets before coding it into HTML. Audit heading depths and list classifications.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Construct an outline with 1 H1, 3 H2s, and 6 H3 sub-topics.',
            'Classify each section as requiring either an ordered list, unordered list, or description list.',
            'Complete the Self-Assessment rubric tab.'
          ],
          rubric: [
            { criteria: 'Correct heading nesting without skipping levels', points: 40 },
            { criteria: 'Appropriate list selection based on sequence logic', points: 30 },
            { criteria: 'Semantic usage of strong/em vs b/i tags', points: 30 }
          ]
        }
      }
    ]
  },
  {
    title: 'Module 2: Hyperlinks, Responsive Media & Accessibility',
    duration: '1 Week',
    overview: 'Connect pages across the world with the anchor tag, navigate local paths, and embed responsive images and videos with accessibility best practices.',
    lessons: [
      {
        title: 'Lesson 2.1: The Power of Hyperlinks: Anchors, Paths & Deep Linking',
        duration: '25 mins',
        videoUrl: 'https://www.youtube.com/watch?v=salY_Sm6mv4',
        videoTitle: 'HTML Links & Anchor Tags Explained',
        objective: 'Master relative vs absolute paths, target attributes, security best practices (rel="noopener"), and in-page anchor IDs.',
        theoryContent: `The anchor tag <a> is what makes the web a "web" by connecting documents across servers or within the same page.

Anchor Tag Superpowers:
1. Absolute Links: Target external websites (e.g. href="https://google.com"). Must include protocol.
2. Relative Links: Target local files in your project (e.g. href="about.html" or href="../contact.html").
3. In-Page Bookmarks: Jump to any element on the current page using its id (e.g. href="#curriculum").
4. Protocol Links: Trigger email clients with mailto: or phone dialers with tel:.

Security Rule:
When opening external links in a new tab with target="_blank", you MUST add rel="noopener noreferrer" to prevent the new tab from executing malicious scripts on your page via window.opener.`,
        codeSnippet: `<!-- External link with security attributes -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
  Visit MDN Web Docs
</a>

<!-- Local relative navigation link -->
<nav>
  <a href="index.html">Home</a> |
  <a href="pages/courses.html">Courses</a> |
  <a href="#faq-section">Jump to FAQ</a>
</nav>

<!-- Target anchor bookmark -->
<section id="faq-section">
  <h2>Frequently Asked Questions</h2>
  <p>Answers to common student questions...</p>
</section>`,
        handsOnActivity: {
          title: 'Activity 3: Build a 3-Page Interconnected Website',
          instructions: [
            'Create three files: index.html, about.html, and contact.html.',
            'Build a shared <nav> navigation menu in all three files linking them together.',
            'Include an in-page deep link in index.html that scrolls smoothly to a bottom section.',
            'Add a mailto: link that opens the visitor default email client.'
          ],
          starterCode: `<nav>\n  <!-- Add your 3 interconnected navigation links here -->\n</nav>`,
          expectedOutcome: 'A fully navigable 3-page site with zero broken relative or absolute links.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 3: Site Map & URL Routing Architecture Sheet',
          sheetName: 'Sheet3_Site_Map_Routing',
          description: 'Document your website link architecture in Google Sheets, verifying relative paths, target states, and accessibility anchor labels.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'List all 10 page routes with their file directory path.',
            'Specify external vs internal link behavior in Column C.',
            'Check off security rel attributes in Column D.'
          ],
          rubric: [
            { criteria: 'Accurate relative file path syntax (./, ../, subfolders)', points: 40 },
            { criteria: 'Correct security attribute implementation', points: 30 },
            { criteria: 'Descriptive anchor text (avoiding "click here")', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 2.2: Embedding Images & Responsive Media with Alt Text Standards',
        duration: '30 mins',
        videoUrl: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
        videoTitle: 'HTML Images, Audio, Video & Accessibility Best Practices',
        objective: 'Embed images with descriptive alt text, specify aspect ratios with width/height, and utilize HTML5 video with fallback controls.',
        theoryContent: `Media elements enhance user engagement, but poor implementation destroys performance and excludes visually impaired users.

Rules for HTML <img>:
1. Always specify the alt attribute! If the image is decorative, use an empty alt="" so screen readers ignore it.
2. Provide explicit width and height attributes to allow the browser engine to reserve aspect ratio layout space before the image finishes downloading, eliminating Cumulative Layout Shift (CLS).
3. Use loading="lazy" for off-screen images to save mobile data.

HTML5 Native Video & Audio:
No third-party plugins needed. Use <video controls> with multiple <source> tags (WebM and MP4) so the browser picks the best supported format.`,
        codeSnippet: `<!-- Accessible, High-Performance Image -->
<img 
  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" 
  alt="Student writing clean HTML code in a modern dark code editor on a laptop" 
  width="600" 
  height="400" 
  loading="lazy" 
/>

<!-- Native Responsive Video -->
<video controls width="640" poster="thumbnail.jpg">
  <source src="intro-lesson.webm" type="video/webm" />
  <source src="intro-lesson.mp4" type="video/mp4" />
  <p>Your browser does not support HTML5 video. <a href="intro-lesson.mp4">Download the video here</a>.</p>
</video>`,
        handsOnActivity: {
          title: 'Activity 4: Build a Media Portfolio Gallery with Captions',
          instructions: [
            'Create a media gallery using the <figure> and <figcaption> elements.',
            'Embed three images with meaningful, descriptive alt text following WCAG 2.1 guidelines.',
            'Embed one HTML5 video with native playback controls and fallback download text.'
          ],
          starterCode: `<figure>\n  <!-- Add your img and figcaption here -->\n</figure>`,
          expectedOutcome: 'A visually balanced media portfolio with 100% accessible alt text and responsive video containers.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 4: WCAG Media Accessibility & Image Audit Matrix',
          sheetName: 'Sheet4_Media_Audit',
          description: 'Evaluate 10 web images using the Google Sheets accessibility scoring matrix. Score alt text quality, file dimensions, and lazy loading.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Audit 10 images with URL, file format, and dimensions.',
            'Grade alt text quality from 1 to 5 stars with written feedback in Column E.',
            'Verify lazy loading configuration.'
          ],
          rubric: [
            { criteria: 'High-quality screen reader alt text descriptions', points: 40 },
            { criteria: 'Aspect ratio and dimension reservation to avoid CLS', points: 30 },
            { criteria: 'Native video fallback mechanism implemented', points: 30 }
          ]
        }
      }
    ]
  },
  {
    title: 'Module 3: Tabular Data & User Interaction with Modern Forms',
    duration: '1.5 Weeks',
    overview: 'Learn how to present structured numerical data with HTML tables and collect user input through robust, accessible HTML5 forms.',
    lessons: [
      {
        title: 'Lesson 3.1: Tabular Data Architecture: Tables, Headers, Footers & Spans',
        duration: '26 mins',
        videoUrl: 'https://www.youtube.com/watch?v=1F_b-r7Vz4E',
        videoTitle: 'HTML Tables Complete Guide',
        objective: 'Construct accessible tabular structures using table, thead, tbody, tfoot, scope attributes, and column/row spans.',
        theoryContent: `HTML tables are designed exclusively for tabular information (financial data, schedules, statistics) — NEVER for website page layout!

Table Structure Anatomy:
- <table>: The container.
- <caption>: A concise description of the table topic, essential for screen readers.
- <thead>: Header rows containing column labels with <th scope="col">.
- <tbody>: The primary data rows containing <td>.
- <tfoot>: Summary rows (totals, averages).
- colspan and rowspan: Merge cells across multiple columns or rows.`,
        codeSnippet: `<!-- Accessible Data Table -->
<table>
  <caption>Epicademy Course Enrollment & Graduation Statistics (2026)</caption>
  <thead>
    <tr>
      <th scope="col">Educational Track</th>
      <th scope="col">Active Cohorts</th>
      <th scope="col">Completion Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>STEM & AI Engineering</td>
      <td>14</td>
      <td>84.2%</td>
    </tr>
    <tr>
      <td>Business & Venture Launch</td>
      <td>8</td>
      <td>89.6%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total Graduates</th>
      <td colspan="2">12,450 Certified Students</td>
    </tr>
  </tfoot>
</table>`,
        handsOnActivity: {
          title: 'Activity 5: Build a Course Comparison Pricing & Schedule Table',
          instructions: [
            'Construct a comparison table evaluating 3 learning plans.',
            'Include a table <caption>, <thead>, <tbody>, and <tfoot>.',
            'Use scope="col" and scope="row" attributes on all header cells.',
            'Demonstrate at least one colspan merging 2 cells in the footer.'
          ],
          starterCode: `<table>\n  <caption>Plan Comparison</caption>\n  <!-- Write table structure here -->\n</table>`,
          expectedOutcome: 'A properly structured data table readable by screen readers and spreadsheet screen readers.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 5: Spreadsheet-to-HTML Table Transformation Lab',
          sheetName: 'Sheet5_Table_Transformation',
          description: 'Convert a real multi-column financial spreadsheet in Google Sheets into semantic HTML table markup cell by cell.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Match all 12 spreadsheet rows with correct <tr> and <td> tags.',
            'Verify column total row matches <tfoot> output.',
            'Export code into test file and paste HTML into Column D.'
          ],
          rubric: [
            { criteria: 'Accurate translation of spreadsheet cells to HTML tags', points: 40 },
            { criteria: 'Proper table caption and semantic sections (thead/tbody/tfoot)', points: 35 },
            { criteria: 'Correct colspan/rowspan cell merge calculation', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 3.2: Modern Web Forms: Inputs, Validation & Form Submissions',
        duration: '35 mins',
        videoUrl: 'https://www.youtube.com/watch?v=fNcJuPIZ2WE',
        videoTitle: 'HTML Forms & Form Validation Crash Course',
        objective: 'Build accessible interactive forms using labels, input types, radio buttons, select dropdowns, textareas, and native browser validation.',
        theoryContent: `Forms are the bridge between visitors and backend servers. An inaccessible or poorly validated form directly costs you signups and revenue.

Essential Form Guidelines:
1. Every input MUST have an associated <label> using the for="input-id" attribute. Clicking the label focuses the input.
2. Use specific input types: type="email", type="tel", type="date", type="number" to invoke native mobile keyboard layouts on phones.
3. Native HTML5 Validation Attributes:
   - required: Prevents empty submissions.
   - minlength / maxlength: Enforces character bounds.
   - pattern: Regular expression for custom validation.
4. Use <fieldset> and <legend> to group related radio buttons or checkboxes.`,
        codeSnippet: `<!-- Modern Accessible Student Registration Form -->
<form action="/api/enroll" method="POST">
  <fieldset>
    <legend>Student Personal Information</legend>
    
    <div>
      <label for="student-name">Full Name (Required):</label>
      <input type="text" id="student-name" name="name" required minlength="2" placeholder="e.g. Alex Rivera" />
    </div>

    <div>
      <label for="student-email">Email Address:</label>
      <input type="email" id="student-email" name="email" required placeholder="alex@example.com" />
    </div>
  </fieldset>

  <fieldset>
    <legend>Select Your Learning Track</legend>
    <label>
      <input type="radio" name="track" value="stem" checked /> STEM & AI
    </label>
    <label>
      <input type="radio" name="track" value="business" /> Business & SaaS
    </label>
  </fieldset>

  <button type="submit">Complete Free Enrollment</button>
</form>`,
        handsOnActivity: {
          title: 'Activity 6: Build an Academy Student Registration & Feedback Form',
          instructions: [
            'Build an interactive form containing at least 5 different input types (text, email, password, radio, select, checkbox).',
            'Connect every single input to a matching <label for="..."> tag.',
            'Implement native HTML5 validation using required, minlength, and type="email".',
            'Add a <button type="submit"> and test native browser validation error tooltips.'
          ],
          starterCode: `<form action="#" method="POST">\n  <!-- Build your accessible form fields here -->\n</form>`,
          expectedOutcome: 'A complete form that blocks invalid inputs and triggers appropriate mobile keyboard types.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 6: Form Field Validation & Test Matrix Sheet',
          sheetName: 'Sheet6_Form_Validation_Matrix',
          description: 'Plan and test form input states (Valid, Empty, Malformed, Overflow) using the Google Sheets QA testing matrix.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Define input specifications for 8 form fields in the sheet.',
            'Record browser validation behavior across Chrome, Firefox, and Safari.',
            'Document accessibility test score using keyboard-only tab navigation.'
          ],
          rubric: [
            { criteria: '100% of inputs paired with programmatic <label for=""> tags', points: 40 },
            { criteria: 'Effective native validation (required, type, patterns)', points: 35 },
            { criteria: 'Clean logical form grouping with fieldset and legend', points: 25 }
          ]
        }
      }
    ]
  },
  {
    title: 'Module 4: Semantic Layouts, Web Standards & Capstone Project',
    duration: '1.5 Weeks',
    overview: 'Ditch the "div soup". Master semantic landmark elements, optimize for search engines, and build your complete portfolio capstone.',
    lessons: [
      {
        title: 'Lesson 4.1: Semantic Landmark Layouts: Modern HTML5 Structural Tags',
        duration: '32 mins',
        videoUrl: 'https://www.youtube.com/watch?v=kGW8Al_cga4',
        videoTitle: 'HTML5 Semantic Elements & Page Structure Tutorial',
        objective: 'Replace generic <div> containers with semantic tags: header, nav, main, article, section, aside, and footer.',
        theoryContent: `Before HTML5, developers built websites using dozens of generic <div id="header">, <div class="nav">, and <div class="footer"> elements — commonly known as "Div Soup".

Modern Semantic Landmarks:
- <header>: Top banner containing logo, tagline, and navigation.
- <nav>: Primary site navigation links.
- <main>: The singular central content unique to this page (only one <main> allowed per document).
- <article>: Self-contained independent content (blog post, course card, news story) that makes sense even when syndicating.
- <section>: Thematic grouping of content, typically with its own heading.
- <aside>: Complementary content tangentially related (sidebar, author bio, related links).
- <footer>: Bottom banner with copyright, legal links, and site credits.`,
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Epicademy Academy Portal</title>
</head>
<body>
  <header>
    <h1>EPICADEMY</h1>
    <nav>
      <ul>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#community">Community</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="courses">
      <h2>Featured Teaching Tracks</h2>
      <article>
        <h3>Modern HTML5 Foundations</h3>
        <p>Learn semantic layouts and web accessibility.</p>
      </article>
    </section>

    <aside>
      <h2>Instructor Spotlight</h2>
      <p>Meet our verified faculty members.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Epicademy. All rights reserved.</p>
  </footer>
</body>
</html>`,
        handsOnActivity: {
          title: 'Activity 7: Refactor a Legacy "Div Soup" Page into Semantic HTML5',
          instructions: [
            'Take a webpage built purely with <div> tags.',
            'Refactor every container to its semantic counterpart (<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>).',
            'Run the webpage through an accessibility checker (WAVE or Axe DevTools) to verify screen reader landmark recognition.'
          ],
          starterCode: `<!-- Replace these generic divs with semantic tags -->\n<div class="header">...</div>\n<div class="main-content">...</div>`,
          expectedOutcome: 'Zero div soup. A clean semantic landmark tree recognized by search engines and screen readers.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 7: Wireframe-to-Semantic-Tag Architecture Blueprint',
          sheetName: 'Sheet7_Semantic_Blueprint',
          description: 'Translate visual website wireframes into an exact semantic HTML node tree plan in Google Sheets before touching a code editor.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Map 15 visual UI regions to specific HTML5 semantic elements.',
            'Justify why each section was classified as <section> vs <article> vs <aside>.',
            'Document heading level hierarchy for each container.'
          ],
          rubric: [
            { criteria: 'Accurate distinction between section, article, and div', points: 40 },
            { criteria: 'Single <main> landmark correctly encompassing page body', points: 30 },
            { criteria: 'Complete navigational landmark definitions', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 4.2: Capstone Project: Build & Deploy Your Multi-Page Semantic Website',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=HD13eq_Pmp8',
        videoTitle: 'HTML Capstone Project & Free Hosting Deployment',
        objective: 'Design, code, validate, and deploy a complete multi-page semantic website demonstrating all foundational HTML5 concepts.',
        theoryContent: `You have reached the Capstone! In this final project, you will apply everything you have mastered across all 4 modules:
- Multi-page document architecture with clean meta tags.
- Typographical hierarchy with semantic text formatting.
- Interactive multi-page navigation menus and in-page anchor deep links.
- Responsive images with accessible WCAG alt text.
- Form data collection with native HTML5 validation.
- Clean semantic HTML5 landmarks (<header>, <nav>, <main>, <footer>).

Your website will be evaluated using the official Epicademy Grading Rubric in Google Sheets.`,
        codeSnippet: `<!-- Capstone Verification Checklist -->
<!-- 1. Valid HTML5 doctype and lang attribute -->
<!-- 2. Rich meta tags: title, description, viewport -->
<!-- 3. Semantic header, nav, main, and footer landmarks -->
<!-- 4. Fully styled data table with captions and scopes -->
<!-- 5. Complete registration form with labels and validation -->
<!-- 6. 100% Validated by validator.w3.org -->`,
        handsOnActivity: {
          title: 'Activity 8: Final Capstone Build & Peer Review',
          instructions: [
            'Choose your topic: A Personal Portfolio, an Educational Academy, or a Product Showcase.',
            'Build at least 3 interconnected pages following the complete HTML5 standards.',
            'Ensure zero markup errors on validator.w3.org.',
            'Publish the site online for free using GitHub Pages or Vercel, and share your live URL in the Epicademy Community Hub!'
          ],
          starterCode: `<!-- Epicademy Capstone HTML Project -->`,
          expectedOutcome: 'A live, deployed multi-page website ready to show clients, employers, and fellow students!'
        },
        googleSheetsAssignment: {
          title: 'Classroom Assignment 8: Capstone Comprehensive Peer Review & Grading Rubric',
          sheetName: 'Sheet8_Capstone_Rubric',
          description: 'Official 100-point grading rubric used by faculty and student peers to evaluate HTML capstone projects.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview',
          deliverables: [
            'Self-grade your capstone project against the 8 evaluation benchmarks.',
            'Submit your live website URL and GitHub repository link in Row 4.',
            'Perform peer reviews for two classmates in the community circle.'
          ],
          rubric: [
            { criteria: 'W3C HTML5 markup validation (0 errors)', points: 25 },
            { criteria: 'Semantic landmark architecture and heading hierarchy', points: 25 },
            { criteria: 'Accessible media alt text and form validation inputs', points: 25 },
            { criteria: 'Multi-page navigation and file structure organization', points: 25 }
          ]
        }
      }
    ]
  }
];

export const HTML_FOUNDATIONS_TRACK: Track = {
  id: 'track-html-foundations-mastery',
  title: 'Modern HTML5 Fundamentals: Zero to Semantic Web Mastery',
  category: 'stem',
  categoryLabel: 'STEM & Technology',
  slug: 'modern-html5-fundamentals',
  badge: 'Foundational Track',
  level: 'Beginner',
  instructor: {
    name: 'Ronnel M. Aviguetero',
    role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    verified: true,
    credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Enterprise Technology Architect & Executive Faculty',
  },
  rating: 4.98,
  reviewCount: 38,
  activeLearners: 142,
  lessonsCount: 8,
  duration: '4 Weeks',
  description: 'An authentic, hands-on curriculum covering modern HTML5 document anatomy, semantic landmarks, accessible forms, responsive media, and Google Sheets classroom grading rubrics.',
  skills: ['HTML5', 'Semantic Web', 'Web Accessibility (a11y)', 'Forms & Validation', 'SEO Structure', 'DOM Architecture'],
  colorTheme: 'from-orange-600 via-amber-600 to-yellow-600',
  popular: true,
  published: true,
  isCustomCourse: true,
  modules: HTML_COURSE_DETAILED_MODULES.map((m, mIdx) => ({
    id: `mod-html-${mIdx + 1}`,
    track_id: 'track-html-foundations-mastery',
    title: m.title,
    duration: m.duration,
    order_index: mIdx + 1,
    lessons: m.lessons.length,
    topics: m.lessons.map(l => l.title),
    lessonItems: m.lessons.map((l, lIdx) => ({
      id: `les-html-${mIdx + 1}-${lIdx + 1}`,
      module_id: `mod-html-${mIdx + 1}`,
      title: l.title,
      duration: l.duration,
      video_url: l.videoUrl,
      content: l.theoryContent,
      order_index: lIdx + 1,
    })),
  })),
};
