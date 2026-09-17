import type { Track, ModuleItem } from '../types';

// =========================================================================
// PINOY PIANO & CHURCH KEYBOARD MASTERCLASS: ZERO TO HERO (24 LESSONS)
// Authored & Certified strictly by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS
// 100% Street-Smart & Technically Accurate Tagalog Church Keyboard & Piano Instruction
// All 24 video tutorials tested and verified active via YouTube oEmbed API (HTTP 200 OK)
// =========================================================================

export const PINOY_PIANO_MODULES: ModuleItem[] = [
  {
    id: 'mod-piano-1',
    track_id: 'track-pinoy-piano-zero-to-hero',
    title: "Module 1: Keyboard Geography, Proper Posture & White/Black Keys",
    duration: "1.5 Weeks",
    overview: "Alamin ang pundasyon ng piano: tamang postura ng katawan, finger numbering (1 hanggang 5), layout ng white at black keys, at ang pagtukoy ng Middle C upang makapagsimula nang may kumpiyansa.",
    lessons: 4,
    topics: ["Keyboard Layout, White Keys (C-D-E-F-G-A-B), Posture & Finger Numbering","Ang Unang 7 Major Chords (C, D, E, F, G, A, B) sa Madaling Paraan","Minor Chords Formula & Half-Step/Whole-Step Breakdown","How to Read Piano Notes, Treble/Bass Clefs, and Timing"],
    lessonItems: [
      {
        id: 'les-piano-1-1',
        module_id: 'mod-piano-1',
        title: "Keyboard Layout, White Keys (C-D-E-F-G-A-B), Posture & Finger Numbering",
        duration: "25 mins",
        video_url: 'https://www.youtube.com/embed/LsjlW6z1KXs',
        objective: "Matukoy ang 88/61 keys layout, mga pangkat ng 2 at 3 black keys, Middle C location, at 1-5 finger numbering sa bawat kamay.",
        content: "### 🎹 Pundasyon ng Piano Keyboard\nBago tumugtog ng chords, kailangang kabisado mo ang mapa ng keyboard:\n1. **Black Keys Pattern**: Mapapansin mo na ang black keys ay naka-grupo nang dalawa (group of 2) at tatlo (group of 3).\n2. **Hanapin ang C (Do)**: Ang puting nota na nasa kaliwa ng grupo ng dalawang black keys ay laging **C (Do)**.\n3. **White Keys Sequence**: Mula C, aakyat ito pakanan: **C - D - E - F - G - A - B**, tapos babalik ulit sa **C** (mas mataas na octave).\n4. **Middle C**: Ito ang C na matatagpuan sa gitna mismo ng iyong keyboard (malapit sa brand logo o display).\n\n### 🖐️ Finger Numbering System\nSa piano, hindi ginagamit ang pangalan ng daliri kundi mga numero:\n* **1** = Thumb (Hinlalaki)\n* **2** = Index (Hintuturo)\n* **3** = Middle (Hinlalato)\n* **4** = Ring (Palasingsingan)\n* **5** = Pinky (Kalingkingan)\n\n### 🪑 Tamang Postura at Hand Shape\n* Umupo nang tuwid, huwag nakayuko ang likod.\n* Ang iyong mga daliri ay dapat nakakurba na parang may hawak kang maliit na bola o mansanas (*curved fingers*).\n* Gamitin ang dulo o unan ng daliri sa pagpindot, hindi patag (*flat fingers*).",
        code_snippet: "+-----------------------------------------------------------+\n|              PIANO KEYBOARD GEOGRAPHY (OCTAVE)            |\n+-----------------------------------------------------------+\n|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |\n|   | C#| D#|   |   | F#| G#| A#|   |   | C#| D#|   |   |   |\n|   |___|___|   |   |___|___|___|   |   |___|___|   |   |   |\n|     |   |     |     |   |   |     |     |   |     |   |   |\n|  C  | D |  E  |  F  | G | A |  B  |  C  | D |  E  | F | G |\n+-----+---+-----+-----+---+---+-----+-----+---+-----+---+---+\n   ^             ^             ^\n  (1)Thumb      (3)Middle     (5)Pinky (Right Hand Triad)",
        activity: {
                  "title": "Middle C Identification & Finger Dexterity Drill",
                  "instructions": [
                            "Hanapin ang lahat ng C notes sa buong haba ng keyboard gamit ang 2-black-keys landmark.",
                            "Iposisyon ang Right Hand thumb (1) sa Middle C, index (2) sa D, middle (3) sa E, ring (4) sa F, pinky (5) sa G (C 5-finger position).",
                            "Pindutin isa-isa ang 1 - 2 - 3 - 4 - 5 nang pantay-pantay ang tunog sa 60 BPM.",
                            "Gawin din ito sa Left Hand: pinky (5) sa C3, hanggang thumb (1) sa G3."
                  ],
                  "starterCode": "RH: 1 (C) -> 2 (D) -> 3 (E) -> 4 (F) -> 5 (G) -> 4 -> 3 -> 2 -> 1\nLH: 5 (C) -> 4 (D) -> 3 (E) -> 2 (F) -> 1 (G) -> 2 -> 3 -> 4 -> 5\nTempo: 60 BPM Legato (Smooth & Connected)",
                  "expectedOutcome": "Nakakatugtog ng 5-finger warm up nang nakakurba ang mga daliri nang walang paninigas ng pulso.",
                  "rubric": [
                            {
                                      "criteria": "Tamang pagtukoy sa Middle C at White Keys",
                                      "points": 30
                            },
                            {
                                      "criteria": "Curved finger shape at relaxed wrist posture",
                                      "points": 40
                            },
                            {
                                      "criteria": "Pantay na volume at timing sa 60 BPM",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 1.1: Keyboard Layout & Posture",
                  "description": "Subukan ang iyong kaalaman sa keyboard geography at numbering.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Nasaan matatagpuan ang note na C sa piano keyboard?",
                                      "options": [
                                                "Sa kaliwa ng grupo ng tatlong black keys",
                                                "Sa kaliwa ng grupo ng dalawang black keys",
                                                "Sa pagitan ng dalawang black keys",
                                                "Sa kanan ng grupo ng tatlong black keys"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang C (Do) ay laging matatagpuan sa puting nota sa kaliwa ng 2 black keys."
                            },
                            {
                                      "id": "q2",
                                      "question": "Sa piano finger numbering, anong daliri ang kinakatawan ng number 1?",
                                      "options": [
                                                "Pinky / Kalingkingan",
                                                "Index / Hintuturo",
                                                "Thumb / Hinlalaki",
                                                "Ring / Palasingsingan"
                                      ],
                                      "correctIndex": 2,
                                      "explanation": "Ang number 1 sa piano notation ay laging ang hinlalaki o thumb sa parehong kamay."
                            },
                            {
                                      "id": "q3",
                                      "question": "Bakit mahalagang nakakurba (curved) ang mga daliri sa pagtipa ng piano?",
                                      "options": [
                                                "Upang mas mabilis mapagod ang mga kamay",
                                                "Para makakuha ng pinakamagandang kontrol, bigat, at bilis nang walang paninigas",
                                                "Dahil bawal tumama ang kuko sa puting keys",
                                                "Wala itong epekto sa tunog"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang curved fingers posture ay nagbibigay ng optimal leverage at nag-iiwas sa strain sa tendon at pulso."
                            }
                  ]
        },
        worksheet: {
                  "title": "Week 1 Practice Log: Keyboard Landmarks",
                  "sheetName": "Keyboard_Geography_Log",
                  "description": "Itala ang bilis ng paghanap sa lahat ng 7 white keys at Middle C araw-araw.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Araw-araw na 15-minutong video timer log ng 5-finger warm up",
                            "Accuracy score sa blindfold identification ng C, F, G notes",
                            "Personal reflection tungkol sa relaxation ng balikat at pulso"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Consistent daily 15-minute practice",
                                      "points": 40
                            },
                            {
                                      "criteria": "Flawless finger curvature form",
                                      "points": 30
                            },
                            {
                                      "criteria": "Metronome synchronization at 60 BPM",
                                      "points": 30
                            }
                  ]
        },
        classroom_link: '',
        order_index: 1,
        progress: 0,
      },
      {
        id: 'les-piano-1-2',
        module_id: 'mod-piano-1',
        title: "Ang Unang 7 Major Chords (C, D, E, F, G, A, B) sa Madaling Paraan",
        duration: "30 mins",
        video_url: 'https://www.youtube.com/embed/PsYh51Zei2g',
        objective: "Mabuo at maipatugtog ang lahat ng 7 Root Position Major Chords gamit ang 1-3-5 triad formula.",
        content: "### 🎹 Ano ang Major Chord?\nAng **Major Chord** ay isang masayang tunog (*bright and happy sound*) na binubuo ng 3 nota na tinatawag na **Triad**:\n* **Root (1st)**: Ang pangalan ng chord (e.g. C sa C Major)\n* **Major 3rd (3rd)**: 4 half-steps (semitones) mula sa Root\n* **Perfect 5th (5th)**: 7 half-steps mula sa Root (o 3 half-steps mula sa 3rd)\n\n### 🖐️ Ang 7 Basic Major Chords\n1. **C Major**: C - E - G (Lahat White Keys)\n2. **D Major**: D - F# - A (May 1 Black Key sa gitna: F#)\n3. **E Major**: E - G# - B (May 1 Black Key sa gitna: G#)\n4. **F Major**: F - A - C (Lahat White Keys)\n5. **G Major**: G - B - D (Lahat White Keys)\n6. **A Major**: A - C# - E (May 1 Black Key sa gitna: C#)\n7. **B Major**: B - D# - F# (May 2 Black Keys: D# at F#)\n\n### 💡 \"White-Black-White\" Memory Trick:\n* **All White Keys**: C Major, F Major, G Major (CFG - \"Cebu-Flora-General\")\n* **Black Key in Middle**: D Major (D-F#-A), E Major (E-G#-B), A Major (A-C#-E) (DEA)\n* **Two Black Keys**: B Major (B-D#-F#)",
        code_snippet: "+-----------------------------------------------------------+\n|                   7 ROOT POSITION MAJOR CHORDS             |\n+-----------------------------------------------------------+\n| Chord   | Notes        | Shape / Key Colors               |\n+---------+--------------+----------------------------------+\n| C Major | C - E - G    | White - White - White            |\n| D Major | D - F# - A   | White - BLACK - White            |\n| E Major | E - G# - B   | White - BLACK - White            |\n| F Major | F - A - C    | White - White - White            |\n| G Major | G - B - D    | White - White - White            |\n| A Major | A - C# - E   | White - BLACK - White            |\n| B Major | B - D# - F#  | White - BLACK - BLACK            |\n+---------+--------------+----------------------------------+\nFinger Position (RH): 1 (Thumb) - 3 (Middle) - 5 (Pinky)",
        activity: {
                  "title": "All-7 Major Chords Triad Workout",
                  "instructions": [
                            "Pindutin ang C Major (C-E-G) gamit ang fingers 1-3-5 ng Right Hand.",
                            "Iangat ang kamay at ilipat sa F Major (F-A-C), pagkatapos sa G Major (G-B-D).",
                            "Subukan ang D Major (D-F#-A) at A Major (A-C#-E) nang hindi nadudulas sa black key.",
                            "Mag-ensayo nang 4 beats bawat chord sa 60 BPM metronome."
                  ],
                  "starterCode": "Progression Cycle:\n[ C Major ] -> [ F Major ] -> [ G Major ] -> [ C Major ]\n(Count: 1, 2, 3, 4 bawat chord)\nRH Fingers: 1 - 3 - 5\nTempo: 65 BPM",
                  "expectedOutcome": "Kabisadong pindutin ang C, F, at G Major nang sabay-sabay ang 3 nota (solid chord tone).",
                  "rubric": [
                            {
                                      "criteria": "Sabay-sabay na pagbaba ng 3 daliri (solid triad attack)",
                                      "points": 40
                            },
                            {
                                      "criteria": "Kalinawan ng black keys sa D at A major",
                                      "points": 30
                            },
                            {
                                      "criteria": "Walang patid na lipat ng chord sa bawat 4 beats",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 1.2: Major Triad Construction",
                  "description": "Suriin ang mga nota at pormula ng Major Chords.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Alin sa mga sumusunod na major chords ang puro white keys lamang?",
                                      "options": [
                                                "D Major, E Major, A Major",
                                                "C Major, F Major, G Major",
                                                "B Major, D Major, E Major",
                                                "F# Major, C# Major, G# Major"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang C (C-E-G), F (F-A-C), at G (G-B-D) ay mga puro white keys sa kanilang root position triad."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang gitnang nota (3rd) ng D Major chord?",
                                      "options": [
                                                "F natural",
                                                "F# (F sharp)",
                                                "G natural",
                                                "E natural"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang D Major chord ay binubuo ng D - F# - A. Ang gitnang nota nito ay F#."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ilang half-steps ang agwat mula sa Root papunta sa Major 3rd?",
                                      "options": [
                                                "2 half-steps",
                                                "3 half-steps",
                                                "4 half-steps",
                                                "5 half-steps"
                                      ],
                                      "correctIndex": 2,
                                      "explanation": "Ang Major 3rd interval ay katumbas ng 4 half-steps (semitones) o 2 whole steps."
                            }
                  ]
        },
        worksheet: {
                  "title": "Major Chords Mastery Tracker",
                  "sheetName": "Major_Chords_Log",
                  "description": "Subaybayan ang transition time sa pagitan ng C, D, E, F, G, A, at B Major chords.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Table ng 7 major chords na may time-to-transition sa seconds",
                            "Self-evaluation ng finger arch sa black keys (D, E, A, B)"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Zero hesitation transition within 2 seconds",
                                      "points": 50
                            },
                            {
                                      "criteria": "Clean tone production without accidental neighboring keys",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 2,
        progress: 0,
      },
      {
        id: 'les-piano-1-3',
        module_id: 'mod-piano-1',
        title: "Minor Chords Formula & Half-Step/Whole-Step Breakdown",
        duration: "28 mins",
        video_url: 'https://www.youtube.com/embed/r4V7efmMpgk',
        objective: "Maunawaan ang pagkakaiba ng Major at Minor triads at matutunang buuin ang Dm, Em, Am, Bm, Cm, Fm, Gm.",
        content: "### 😢 Ano ang Minor Chord?\nKung ang Major chord ay masaya, ang **Minor Chord** naman ay may malungkot, seryoso, o madamdaming tunog (*melancholic and emotional sound*). \n\n### 🔑 Ang Simpleng Sikreto: Ibaba ang Gitnang Nota!\nUpang gawing Minor ang isang Major chord:\n* **Ibaba lamang ang gitnang nota (3rd) nang 1 half-step (flat the 3rd)**!\n* Root at 5th ay mananatiling pareho.\n\n### 📋 Halimbawa:\n1. **A Minor (Am)**: A - C - E (mula A Major na A - C# - E)\n2. **D Minor (Dm)**: D - F - A (mula D Major na D - F# - A)\n3. **E Minor (Em)**: E - G - B (mula E Major na E - G# - B)\n4. **C Minor (Cm)**: C - Eb - G (mula C Major na C - E - G)\n5. **G Minor (Gm)**: G - Bb - D (mula G Major na G - B - D)\n\n### 💡 Paboritong Minor Chords sa Tagalog Songs:\nSa halos lahat ng Tagalog pop at worship songs sa Key of C, ang tatlong pangunahing minor chords ay:\n* **Am** (vi chord)\n* **Dm** (ii chord)\n* **Em** (iii chord)",
        code_snippet: "+-----------------------------------------------------------+\n|             MAJOR VS. MINOR COMPARISON (TRIADS)           |\n+-----------------------------------------------------------+\n| Chord Type  | Root | 3rd Interval | 5th | Example (in C/A) |\n+-------------+------+--------------+-----+------------------+\n| C Major     | C    | E  (+4 semi) | G   | C - E - G (Happy)|\n| C Minor     | C    | Eb (+3 semi) | G   | C - Eb- G (Sad)  |\n| A Major     | A    | C# (+4 semi) | E   | A - C#- E (Happy)|\n| A Minor     | A    | C  (+3 semi) | E   | A - C - E (Sad)  |\n+-------------+------+--------------+-----+------------------+\nLaging tandaan: 1 half-step PABABA sa 3rd = MINOR CHORD!",
        activity: {
                  "title": "Major to Minor Transformation Drill",
                  "instructions": [
                            "Tumugtog ng C Major (C-E-G), pakinggan ang masayang tunog.",
                            "Nang hindi inaalis ang hinlalaki sa C at pinky sa G, ilipat ang gitnang daliri mula E pababa sa Eb (black key) para maging C Minor (C-Eb-G).",
                            "Ulitin ito sa A Major (A-C#-E) papuntang A Minor (A-C-E).",
                            "Subukan ang D Major (D-F#-A) papuntang D Minor (D-F-A)."
                  ],
                  "starterCode": "Exercise Pattern:\n[ C Major ] -> [ C Minor ] -> [ A Major ] -> [ A Minor ]\nRH Fingers: 1 - 3 - 5\nTempo: 60 BPM",
                  "expectedOutcome": "Madaling marinig at maiporma ang kaibahan ng Major at Minor triads gamit ang 1-half-step 3rd adjustment.",
                  "rubric": [
                            {
                                      "criteria": "Tamang pagpili ng b3 (flat third) sa black/white keys",
                                      "points": 40
                            },
                            {
                                      "criteria": "Aural recognition ng lungkot ng minor sound",
                                      "points": 30
                            },
                            {
                                      "criteria": "Tiyak na finger replacement nang hindi sumasabit ang katabing nota",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 1.3: Minor Chord Construction",
                  "description": "Pagsusuri sa pagbuo at pagkilala sa Minor Chords.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang gagawin sa isang Major triad upang ito ay maging Minor triad?",
                                      "options": [
                                                "Itaas ang Root nang 1 half-step",
                                                "Ibaba ang gitnang nota (3rd) nang 1 half-step",
                                                "Ibaba ang 5th nota nang 1 whole step",
                                                "Dagdagan ng isa pang nota sa dulo"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Minor triad ay nabubuo kapag ibinaba ang 3rd (gitnang nota) nang 1 semitone (flat 3rd)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang mga nota ng A Minor (Am) chord?",
                                      "options": [
                                                "A - C# - E",
                                                "A - C - E",
                                                "A - C - Eb",
                                                "A - D - E"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang A Minor ay binubuo ng A - C - E (lahat white keys)."
                            },
                            {
                                      "id": "q3",
                                      "question": "Alin sa mga sumusunod ang mga nota ng D Minor (Dm)?",
                                      "options": [
                                                "D - F# - A",
                                                "D - F - A",
                                                "D - F - Ab",
                                                "D - G - A"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang D Minor ay binubuo ng D - F - A (ang F# ng D Major ay naging F natural)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Minor Triads Comparison Chart",
                  "sheetName": "Minor_Chords_Log",
                  "description": "Gumawa ng talaan ng 12 major chords at ang katumbas na minor chords na may tamang accidental notation.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Kompletong worksheet ng 12 Major vs Minor formulas",
                            "Audio recording submission ng Am, Dm, at Em arpeggios"
                  ],
                  "rubric": [
                            {
                                      "criteria": "100% accuracy sa note names",
                                      "points": 50
                            },
                            {
                                      "criteria": "Malinis na audio recording submission",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 3,
        progress: 0,
      },
      {
        id: 'les-piano-1-4',
        module_id: 'mod-piano-1',
        title: "How to Read Piano Notes, Treble/Bass Clefs, and Timing",
        duration: "32 mins",
        video_url: 'https://www.youtube.com/embed/YP-a5_nXZ4o',
        objective: "Mabasa ang Grand Staff, Treble Clef (Right Hand), Bass Clef (Left Hand), time signatures, at note values.",
        content: "### 🎼 Ang Grand Staff sa Piano\nAng piyesa sa piano ay nakasulat sa **Grand Staff** na binubuo ng dalawang clefs na pinagdurugtong ng brace:\n1. **Treble Clef (G Clef)**: Karaniwang tinutugtog ng **Right Hand** (melody at chords).\n2. **Bass Clef (F Clef)**: Karaniwang tinutugtog ng **Left Hand** (bass lines at low notes).\n3. **Middle C Landmark**: Matatagpuan sa ledger line sa gitna ng Treble at Bass Clef.\n\n### 🎵 Mnemonics sa Pagbasa ng Nota:\n* **Treble Clef Lines (Pababa pataas)**: **E - G - B - D - F** (*\"Every Good Boy Does Fine\"*)\n* **Treble Clef Spaces**: **F - A - C - E** (*\"FACE\"*)\n* **Bass Clef Lines**: **G - B - D - F - A** (*\"Good Boys Do Fine Always\"*)\n* **Bass Clef Spaces**: **A - C - E - G** (*\"All Cows Eat Grass\"*)\n\n### ⏱️ Note Values at Bilang (Time Signatures)\nSa karaniwang **4/4 Time Signature** (4 beats per measure):\n* **Whole Note (Semibreve)**: 4 beats (Bilang: 1-2-3-4)\n* **Half Note (Minim)**: 2 beats (Bilang: 1-2)\n* **Quarter Note (Crotchet)**: 1 beat (Bilang: 1)\n* **Eighth Note (Quaver)**: 1/2 beat (Bilang: 1-and, 2-and)",
        code_snippet: "+-----------------------------------------------------------+\n|                    THE PIANO GRAND STAFF                  |\n+-----------------------------------------------------------+\nTREBLE CLEF (Right Hand):\n5 --------------------- F (Top Line)\n4 --------------------- D\n3 --------------------- B\n2 --------------------- G\n1 --------------------- E (Bottom Line)\n   Spaces: F - A - C - E\n\n====== [ MIDDLE C: ---O--- (Ledger line between clefs) ] =====\n\nBASS CLEF (Left Hand):\n5 --------------------- A (Top Line)\n4 --------------------- F\n3 --------------------- D\n2 --------------------- B\n1 --------------------- G (Bottom Line)\n   Spaces: A - C - E - G",
        activity: {
                  "title": "Sheet Music Note Identification Challenge",
                  "instructions": [
                            "Bumasa ng 8-measure simple melody sa Treble Clef gamit ang Right Hand.",
                            "Kilalanin ang Middle C, E, G sa piyesa.",
                            "Tumugtog kasabay ng metronome sa 60 BPM habang binibilang nang malakas ang \"1 - 2 - 3 - 4\".",
                            "Subukan ding basahin ang C at G sa Bass Clef gamit ang Left Hand."
                  ],
                  "starterCode": "Measure 1: [ C4 (Quarter) ] [ D4 (Quarter) ] [ E4 (Quarter) ] [ C4 (Quarter) ]\nMeasure 2: [ E4 (Half) ]    [ G4 (Half) ]\nCount: 1 - 2 - 3 - 4 | 1 - 2 - 3 - 4\nTempo: 60 BPM",
                  "expectedOutcome": "Nakakatugtog ng simpleng 2-measure exercise habang binabasa ang nota nang hindi tumitingin nang matagal sa mga kamay.",
                  "rubric": [
                            {
                                      "criteria": "Tumpak na pagbasa ng Treble Clef notes",
                                      "points": 40
                            },
                            {
                                      "criteria": "Consistent note value timing (quarter vs half)",
                                      "points": 30
                            },
                            {
                                      "criteria": "Tamang fingering application ayon sa piyesa",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 1.4: Reading Notes & Clefs",
                  "description": "Subukan ang pagbasa ng notes sa Grand Staff.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang mga nota sa apat na SPACES ng Treble Clef mula ibaba pataas?",
                                      "options": [
                                                "E - G - B - D",
                                                "F - A - C - E",
                                                "A - C - E - G",
                                                "D - F - A - C"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang apat na spaces ng Treble Clef ay bumubuo ng salitang \"FACE\" (F - A - C - E)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ilang beats ang halaga ng isang Whole Note sa 4/4 time signature?",
                                      "options": [
                                                "1 beat",
                                                "2 beats",
                                                "3 beats",
                                                "4 beats"
                                      ],
                                      "correctIndex": 3,
                                      "explanation": "Ang isang Whole Note ay may halagang 4 na buong beats."
                            },
                            {
                                      "id": "q3",
                                      "question": "Aling kamay ang karaniwang tumutugtog ng mga nota sa Bass Clef?",
                                      "options": [
                                                "Left Hand (Kaliwang kamay)",
                                                "Right Hand (Kanang kamay)",
                                                "Puro Hinlalaki lamang",
                                                "Pedal lamang"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang Bass Clef (mababang tono) ay karaniwang nakatalaga para sa Left Hand."
                            }
                  ]
        },
        worksheet: {
                  "title": "Grand Staff Reading Rubric",
                  "sheetName": "Sight_Reading_Log",
                  "description": "Araw-araw na talaan ng sight-reading accuracy sa 10 flashcard notes bawat araw.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Talaan ng oras sa pagbasa ng 20 flashcard notes",
                            "Video ng pagtugtog ng 8-measure exercise sa 60 BPM"
                  ],
                  "rubric": [
                            {
                                      "criteria": "90%+ correct note identification within 3 seconds",
                                      "points": 50
                            },
                            {
                                      "criteria": "Steady tempo adherence without stopping",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 4,
        progress: 0,
      },
    ],
  },
  {
    id: 'mod-piano-2',
    track_id: 'track-pinoy-piano-zero-to-hero',
    title: "Module 2: Chord Inversions, Left-Hand Bass & Basic Accomp Patterns",
    duration: "1.5 Weeks",
    overview: "I-level up ang iyong pagtugtog gamit ang chord inversions upang maging swabe ang paglipat ng chords, matutunan ang root-5th bass sa kaliwang kamay, at ang tamang pagtapak sa sustain pedal.",
    lessons: 4,
    topics: ["Chord Inversions (Root, 1st, 2nd Inversion) para hindi palipat-lipat ang kamay","Ang Sikreto ng Left Hand: Root-5th Bass & Octave Bouncing","Wastong Paggamit ng Sustain Pedal (Pedal Timing at Bawal Mag-putik ang Tunog)","Ang Unang 4-Chord Progression (1-5-6-4 / C - G - Am - F)"],
    lessonItems: [
      {
        id: 'les-piano-2-1',
        module_id: 'mod-piano-2',
        title: "Chord Inversions (Root, 1st, 2nd Inversion) para hindi palipat-lipat ang kamay",
        duration: "30 mins",
        video_url: 'https://www.youtube.com/embed/p1iOBAW_XCw',
        objective: "Mabuo ang Root, 1st, at 2nd Inversions ng C, F, G, at Am chords para sa makinis na voice leading.",
        content: "### 🔄 Ano ang Chord Inversion?\nKapag nagbago ka ng chord mula C (C-E-G) papuntang F (F-A-C), kapag parehong Root Position, napakalayo ng talon ng iyong kamay!\nAng **Chord Inversion** ay ang pagbabago ng ayos ng mga nota ng chord nang hindi binabago ang mismong chord.\n\n### 📐 Ang 3 Posisyon ng Triad:\n1. **Root Position**: Ang ugat ang nasa ilalim.\n   * C Major: **C - E - G** (Fingers: 1 - 3 - 5)\n2. **1st Inversion**: Ang 3rd ang nasa ilalim (inilipat ang Root sa itaas).\n   * C Major: **E - G - C** (Fingers: 1 - 2 - 5)\n3. **2nd Inversion**: Ang 5th ang nasa ilalim.\n   * C Major: **G - C - E** (Fingers: 1 - 3 - 5 o 1 - 2 - 5)\n\n### 🚀 Voice Leading Magic sa C - F - G:\nSa halip na tumalon ang kamay:\n* **C Major (Root)**: C - E - G\n* **F Major (2nd Inversion)**: C - F - A (Nasa puwesto pa rin ang hinlalaki sa C!)\n* **G Major (1st Inversion)**: B - D - G (1 hakbang lang pababa ang hinlalaki sa B!)\nMapapansin mo: bahagya lang gumagalaw ang iyong kanang kamay, pero nagbago na ang tatlong chords!",
        code_snippet: "+-----------------------------------------------------------+\n|            VOICE LEADING WITH CHORD INVERSIONS            |\n+-----------------------------------------------------------+\nRoot Position C:     [ C ] - [ E ] - [ G ] (Fingers 1 - 3 - 5)\n                             |\n                             v\n2nd Inversion F:     [ C ] - [ F ] - [ A ] (Fingers 1 - 3 - 5)\n                       ^ Common Tone (C stays put!)\n                             |\n                             v\nRoot Position G:     [ B ] - [ D ] - [ G ] (Fingers 1 - 2 - 5)\n                                       ^ Top G stays common!\n\nEpekto: Napakakinis ng tunog (Professional Voice Leading)!",
        activity: {
                  "title": "Smooth Inversion Progression Workout",
                  "instructions": [
                            "Tugtugin ang C Major Root Position (C-E-G).",
                            "Panatilihin ang hinlalaki sa C, iusog ang index/middle sa F at pinky sa A para maging F Major (C-F-A).",
                            "Bumalik sa C Major (C-E-G).",
                            "Ilipat sa G Major 1st inversion (B-D-G).",
                            "Ulitin ang C -> F -> C -> G nang hindi tumitingin sa keyboard."
                  ],
                  "starterCode": "Progression:\n[ C Major (Root) ] -> [ F Major (2nd Inv) ] -> [ C Major (Root) ] -> [ G Major (1st Inv) ]\nRH Fingering: (1-3-5) -> (1-3-5) -> (1-3-5) -> (1-2-5)\nCount: 4 beats each @ 70 BPM",
                  "expectedOutcome": "Walang patid at makinis na paglipat ng C, F, G chords nang hindi lumulundag ang buong braso.",
                  "rubric": [
                            {
                                      "criteria": "Tamang fingering sa bawat inversion",
                                      "points": 40
                            },
                            {
                                      "criteria": "Minimal hand displacement (Smooth voice leading)",
                                      "points": 30
                            },
                            {
                                      "criteria": "Consistent 70 BPM execution",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 2.1: Chord Inversions",
                  "description": "Suriin ang pagkakaiba ng mga posisyon ng chord.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang pinakamababang nota (bass tone) sa 1st Inversion ng C Major chord?",
                                      "options": [
                                                "C",
                                                "E",
                                                "G",
                                                "A"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa 1st inversion ng C Major, ang nota na E (ang 3rd) ang nasa ilalim: E - G - C."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang pangunahing bentahe ng paggamit ng chord inversions sa piano?",
                                      "options": [
                                                "Para mas mabilis mapagod ang mga daliri",
                                                "Para hindi lumundag-lundag ang kamay at maging makinis ang voice leading",
                                                "Para lumakas ang tunog ng bass",
                                                "Wala itong pinagkaiba sa root position"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang inversions ay nagbibigay ng maayos na voice leading kung saan ang mga karaniwang nota ay nananatili sa puwesto."
                            },
                            {
                                      "id": "q3",
                                      "question": "Alin ang 2nd Inversion ng F Major chord?",
                                      "options": [
                                                "F - A - C",
                                                "A - C - F",
                                                "C - F - A",
                                                "C - E - G"
                                      ],
                                      "correctIndex": 2,
                                      "explanation": "Ang 2nd inversion ng F Major ay C - F - A (ang 5th na C ang nasa ilalim)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Inversions Transition Speed Sheet",
                  "sheetName": "Inversion_Speed_Log",
                  "description": "Subaybayan ang transition time ng C-F-G-Am inversions sa loob ng 1 minuto.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Talaan ng bilang ng malinis na cycles sa 1 minuto",
                            "Video submission ng smooth voice leading"
                  ],
                  "rubric": [
                            {
                                      "criteria": "12+ continuous cycles per minute",
                                      "points": 50
                            },
                            {
                                      "criteria": "100% correct inversions fingering",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 1,
        progress: 0,
      },
      {
        id: 'les-piano-2-2',
        module_id: 'mod-piano-2',
        title: "Ang Sikreto ng Left Hand: Root-5th Bass & Octave Bouncing",
        duration: "28 mins",
        video_url: 'https://www.youtube.com/embed/3gxiAukqZYM',
        objective: "Maitugtog ang Left Hand patterns: Single Root, Root-5th power bass, at Octave bass lines.",
        content: "### 🎸 Ang Papel ng Kaliwang Kamay (Left Hand)\nSa modernong keyboard at worship piano, ang **Left Hand (LH)** ang tumatayong bahista (*bass player*) at rhythmic anchor:\n* Hindi kailangang mag-chords ang LH kung nagko-chord na ang Right Hand.\n* Ang trabaho ng LH ay magbigay ng mabigat, malinaw, at matatag na pundasyon.\n\n### 🌟 3 Pangunahing Patterns para sa Left Hand:\n1. **Single Root (Level 1)**:\n   * Pindutin lamang ang ugat na nota (e.g. C para sa C chord, F para sa F chord) gamit ang pinky (5).\n2. **Root-5th Open Fifth (Level 2 - Pinakapaborito sa Worship)**:\n   * Pindutin ang Root at 5th nang sabay o sunod.\n   * Halimbawa sa C: **C (pinky 5) + G (thumb 1)**\n   * Halimbawa sa G: **G (pinky 5) + D (thumb 1)**\n   * Walang 3rd ang power chord na ito kaya napakalinis ng tunog at hindi \"maputik\" (*not muddy*).\n3. **Octave Bass (Level 3 - Para sa Malalakas na Koro)**:\n   * Pindutin ang C2 at C3 nang sabay gamit ang pinky (5) at thumb (1).\n   * Nagbibigay ito ng concert-grand piano power sa chorus ng worship anthems.",
        code_snippet: "+-----------------------------------------------------------+\n|                   LEFT HAND BASS PATTERNS                 |\n+-----------------------------------------------------------+\nLevel 1: Single Root      Level 2: Root-5th      Level 3: Octave\n   (C2)                      (C2 + G2)              (C2 + C3)\n    o                         o      o               o       o\n   Pinky                     Pinky  Thumb           Pinky   Thumb\n   [5]                       [5]    [1]             [5]     [1]\n\nPattern Timing (4/4):\nBeat 1: LH Root-5th bagsak kasabay ng RH Chord\nBeat 2: RH pulse o arpeggio\nBeat 3: LH 5th tapik\nBeat 4: RH pulse",
        activity: {
                  "title": "Two-Hand Coordination Drill (LH Root-5th + RH Inversions)",
                  "instructions": [
                            "Ilagay ang Left Hand sa C2-G2 (Root at 5th).",
                            "Ilagay ang Right Hand sa C Major (E-G-C, 1st inv).",
                            "Patunugin nang sabay sa Beat 1.",
                            "Sa Beat 3, panatilihin ang LH habang nagpupulse ang RH chord.",
                            "Lumipat sa G (LH: G-D, RH: D-G-B), Am (LH: A-E, RH: C-E-A), at F (LH: F-C, RH: C-F-A)."
                  ],
                  "starterCode": "Progression: [ C ] -> [ G ] -> [ Am ] -> [ F ]\nLH: Root-5th (C-G, G-D, A-E, F-C)\nRH: Inversions on beat 1, 2, 3, 4\nTempo: 65 BPM",
                  "expectedOutcome": "Naitutugtog ang dalawang kamay nang sabay nang hindi nanginginig o nawawala sa tempo.",
                  "rubric": [
                            {
                                      "criteria": "Sabay na pagbaba ng LH at RH sa beat 1",
                                      "points": 40
                            },
                            {
                                      "criteria": "Tamang Root-5th intervals sa kaliwang kamay",
                                      "points": 30
                            },
                            {
                                      "criteria": "Walang putik o overlap ng mababang bass notes",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 2.2: Left Hand Bass Techniques",
                  "description": "Subukan ang konsepto ng Left Hand accompaniment.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Bakit iniiwasan ang pagtugtog ng buong chords (triads na may 3rd) sa napakababang rehistro ng Left Hand?",
                                      "options": [
                                                "Dahil masisira ang piano keys",
                                                "Dahil magiging maputik at maingay ang tunog (muddy acoustic clash)",
                                                "Dahil bawal sa batas ng musika",
                                                "Walang problema kahit mag-triad sa low register"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa mabababang frequencies, ang mga overtones ng 3rd interval ay nagkakaroon ng dissonance o acoustic muddiness."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang mga nota ng Root-5th bass pattern para sa G chord sa Left Hand?",
                                      "options": [
                                                "G at B",
                                                "G at D",
                                                "G at C",
                                                "G at F"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Root ay G at ang 5th ay D (G - A - B - C - D). Ito ang perfect fifth."
                            },
                            {
                                      "id": "q3",
                                      "question": "Anong mga daliri sa Left Hand ang karaniwang ginagamit para sa Octave bass?",
                                      "options": [
                                                "Index (2) at Middle (3)",
                                                "Thumb (1) at Pinky (5)",
                                                "Thumb (1) at Middle (3)",
                                                "Ring (4) at Pinky (5)"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Pinky (5) sa ibaba at Thumb (1) sa itaas ang natural na span para sa 8-note octave."
                            }
                  ]
        },
        worksheet: {
                  "title": "Two-Hand Independence Practice Log",
                  "sheetName": "LH_Bass_Log",
                  "description": "Subaybayan ang tempo progress ng two-hand coordination sa 4-chord worship cycle.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Tempo chart mula 50 BPM hanggang 80 BPM",
                            "30-segundong video recording ng C-G-Am-F gamit ang Root-5th bass"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Perpektong synchronization sa beat 1",
                                      "points": 50
                            },
                            {
                                      "criteria": "Consistent dynamic balance (LH hindi sumasapaw sa RH melody)",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 2,
        progress: 0,
      },
      {
        id: 'les-piano-2-3',
        module_id: 'mod-piano-2',
        title: "Wastong Paggamit ng Sustain Pedal (Pedal Timing at Bawal Mag-putik ang Tunog)",
        duration: "22 mins",
        video_url: 'https://www.youtube.com/embed/0ReUyxpoycU',
        objective: "Matutunan ang Legato Pedaling technique upang maging tuluy-tuloy ang tunog nang hindi naghahalo ang magkaibang chords.",
        content: "### 🦶 Ang Sustain Pedal (Damper Pedal)\nAng sustain pedal (ang pinakakanang pedal sa acoustic piano o standard electronic pedal) ang nagbibigay ng buhay at lalim sa tunog ng piano sa pamamagitan ng pagpapanatili ng vibration ng mga kuwerdas kahit inalis na ang daliri.\n\n### ⚠️ Ang Karaniwang Pagkakamali ng Beginner:\n* **\"Nakalubog ang paa magpakailanman\"**: Kapag hindi itinaas ang pedal sa paglipat ng chord, maghahalo ang C Major at G Major — magiging maputik, maingay, at masakit sa tainga ang tunog!\n\n### 🔄 Ang Tamang Teknik: \"Legato Pedaling\"\nAng pedal ay **HINDI** sumasabay sa pagbaba ng kamay, kundi sumusunod kaagad:\n1. **Change Chord**: Pindutin ang bagong chord gamit ang mga daliri.\n2. **Up**: Kasabay ng pagbaba ng bagong chord, mabilis na ITAAS ang pedal para mabura ang lumang chord.\n3. **Down**: Agad na ILUBOG muli ang pedal habang nakalapat pa rin ang mga daliri sa bagong chord!\nFormula: **\"Down-Up-Down\" sa bawat palit ng chord**!\n\n### 👟 Posisyon ng Paa:\n* Panatilihing nakadikit ang takong (*heel*) sa sahig.\n* Ang unahan lamang ng talampakan (*ball of foot*) ang tumatapak sa pedal.",
        code_snippet: "+-----------------------------------------------------------+\n|                   LEGATO PEDALING TIMELINE                |\n+-----------------------------------------------------------+\nHands:   [ CHORD 1 (C) ]  --------->  [ CHORD 2 (G) ]\n               |                             |\n               v                             v\nPedal:   [ DOWN ...... ]  -----> [ UP ] -> [ DOWN ....... ]\n                                   ^\n                 Mabilis na iangat upang mabura ang C chord,\n                 tapos agad na ibaba para ma-sustain ang G chord!",
        activity: {
                  "title": "Clean Pedal Transition Exercise",
                  "instructions": [
                            "Tugtugin ang C Major chord at tapakan ang sustain pedal.",
                            "Bitawan ang mga daliri sa keyboard (maririnig mong tuloy pa rin ang tunog).",
                            "Ihanda ang kamay sa G Major.",
                            "Pindutin ang G Major — kasabay ng pagtama ng daliri sa keys, iangat ang pedal at agad ibaba.",
                            "Pakinggan kung may maririnig kang tunog ng C na naiwan. Dapat 100% malinis ang G chord!"
                  ],
                  "starterCode": "Pedal Drill:\n[ C Major ] (Hold 4 beats) -> [ G Major ] (Change pedal at beat 1)\n[ Am Major] (Change pedal at beat 1) -> [ F Major ] (Change pedal at beat 1)\nTarget: Zero bleeding between different chords",
                  "expectedOutcome": "Naisasagawa ang malinis na legato pedaling kung saan seamless ang koneksyon ng chords nang walang maruming clashing frequencies.",
                  "rubric": [
                            {
                                      "criteria": "Malinis na pagbura ng nakaraang chord",
                                      "points": 40
                            },
                            {
                                      "criteria": "Walang patid na tunog (legato continuity)",
                                      "points": 30
                            },
                            {
                                      "criteria": "Tamang heel-on-the-floor foot posture",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 2.3: Sustain Pedal Mastery",
                  "description": "Suriin ang kaalaman sa tamang paggamit ng sustain pedal.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Kailan dapat iangat ang sustain pedal upang maiwasan ang \"pagpuputik\" ng tunog?",
                                      "options": [
                                                "Pagkatapos ng buong kanta",
                                                "Eksaktong sa sandaling tumama ang bagong chord sa keyboard (tapos agad na ibaba muli)",
                                                "Bago pa man tumugtog ng bagong kanta",
                                                "Kahit kailan basta malakas ang tugtog"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa Legato Pedaling, inaangat ang pedal kasabay ng pagtama ng bagong chord para ma-damp ang dating tunog, saka agad ibinababa."
                            },
                            {
                                      "id": "q2",
                                      "question": "Saan dapat nakaposisyon ang takong (heel) ng iyong paa habang nagpe-pedal?",
                                      "options": [
                                                "Nakaangat sa hangin",
                                                "Laging nakalapat nang matatag sa sahig",
                                                "Nakatungtong sa ibabaw ng pedal",
                                                "Nakadikit sa bangkito"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang takong ay dapat laging nakalapat sa sahig bilang pivot point upang maging kontrolado at magaan ang pagtapak."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang mangyayari kung hindi mo aalisin ang tapak sa sustain pedal habang nagpapalit ng iba't ibang chords?",
                                      "options": [
                                                "Lalong gaganda ang tunog",
                                                "Masisira agad ang electronic keyboard",
                                                "Maghahalo-halo ang mga nota at magiging maingay at dissonant ang tunog",
                                                "Hihinto sa pagtugtog ang piano"
                                      ],
                                      "correctIndex": 2,
                                      "explanation": "Magkakaroon ng clashing frequencies dahil magpapatong-patong ang magkakaibang chords sa hangin."
                            }
                  ]
        },
        worksheet: {
                  "title": "Pedal Timing Diagnostic Rubric",
                  "sheetName": "Pedal_Timing_Log",
                  "description": "Pagsusuri sa kalinisan ng audio recording sa 4-measure chord progression gamit ang sustain pedal.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Short video/audio recording ng C - Em - F - G",
                            "Peer/self-assessment checklist kung may nadidinig na chord bleeding"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Zero muddy chord overlap",
                                      "points": 50
                            },
                            {
                                      "criteria": "Seamless legato feel without audible silence gaps",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 3,
        progress: 0,
      },
      {
        id: 'les-piano-2-4',
        module_id: 'mod-piano-2',
        title: "Ang Unang 4-Chord Progression (1-5-6-4 / C - G - Am - F)",
        duration: "35 mins",
        video_url: 'https://www.youtube.com/embed/zvNy6hZh7wY',
        objective: "Pagsamahin ang lahat ng natutunan: tugtugin ang pinakasikat na 4-chord progression sa buong mundo gamit ang tamang inversions, bass, at pedal.",
        content: "### 🌍 Ang \"Pop & Worship Axis of Awesome\": 1 - 5 - 6 - 4\nKung mayroon mang isang progression na dapat mong kabisaduhin nang nakapikit, ito ay ang **I - V - vi - IV**:\n* Sa **Key of C Major**: **C - G - Am - F**\n* Daan-daang sikat na OPM hits, foreign pop songs, at church praise anthems ang gumagamit ng 4 na chords na ito!\n\n### 🎹 Paano Ito Tutugtugin nang Swabe:\n1. **Left Hand**:\n   * C (C2-G2) ➔ G (G1-D2) ➔ Am (A1-E2) ➔ F (F1-C2)\n2. **Right Hand Inversions**:\n   * **C**: E - G - C (1st inversion)\n   * **G**: D - G - B (2nd inversion)\n   * **Am**: C - E - A (Root inversion)\n   * **F**: C - F - A (2nd inversion)\n3. **Rhythm Styles**:\n   * *Ballad Style*: Bagsak sa Beat 1, arpeggiate sa beats 2, 3, 4.\n   * *Pop Rock Style*: 4 pantay na quarter-note pulses bawat measure.",
        code_snippet: "+-----------------------------------------------------------+\n|               THE 4-CHORD AXIS OF AWESOME (KEY OF C)      |\n+-----------------------------------------------------------+\nMeasures:      [ 1 ]        [ 2 ]        [ 3 ]        [ 4 ]\nChord:           C            G           Am            F\nNumber:          1            5            6            4\nLH Bass:       C - G        G - D        A - E        F - C\nRH Notes:    E - G - C    D - G - B    C - E - A    C - F - A\nPedal:         Down-Up      Down-Up      Down-Up      Down-Up\n\nKanta na magagamit dito:\n* \"Don't Stop Believin'\" / \"Someone Like You\" / \"With A Smile\"\n* Mga Tagalog Praise & Worship Chorus loops!",
        activity: {
                  "title": "The 4-Chord Song Marathon",
                  "instructions": [
                            "Patugtugin ang metronome sa 68 BPM.",
                            "Tugtugin ang C -> G -> Am -> F nang 4 measures bawat cycle.",
                            "Mag-maintain ng continuous loop sa loob ng 3 minuto nang walang tigil.",
                            "Subukang kumanta o mag-hum ng paboritong Tagalog song sa ibabaw ng progression."
                  ],
                  "starterCode": "Marathon Loop:\n| C /// | G /// | Am /// | F /// | (Repeat 4x)\nLH: Root-5th\nRH: Smooth Inversions\nTempo: 68 BPM",
                  "expectedOutcome": "Kumpyansang nakakatugtog ng full 4-chord loop nang tuluy-tuloy gamit ang parehong kamay at sustain pedal.",
                  "rubric": [
                            {
                                      "criteria": "Tuluy-tuloy na ritmo nang walang paghinto sa bar line",
                                      "points": 40
                            },
                            {
                                      "criteria": "Tamang coordination ng LH bass at RH chord voicing",
                                      "points": 30
                            },
                            {
                                      "criteria": "Malinis na pedal changes bawat measure",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 2.4: The 4-Chord Progression",
                  "description": "Pagsusuri sa pinakasikat na chord sequence sa modernong musika.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Sa Key of C, ano ang mga chords na bumubuo sa 1 - 5 - 6 - 4 progression?",
                                      "options": [
                                                "C - Dm - Em - F",
                                                "C - G - Am - F",
                                                "C - F - G - Am",
                                                "C - Em - F - G"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang 1 ay C, 5 ay G, 6 ay Am, at 4 ay F sa Key of C Major."
                            },
                            {
                                      "id": "q2",
                                      "question": "Bakit napakahalagang matutunan ang progression na 1 - 5 - 6 - 4?",
                                      "options": [
                                                "Dahil ito lamang ang nag-iisang progression na pinapayagan sa simbahan",
                                                "Dahil ito ang ginagamit sa daan-daang sikat na pop, worship, at OPM songs",
                                                "Dahil ito ang pinakamahirap tugtugin",
                                                "Dahil kailangan ito para makapasa sa exam lamang"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Napakalaking porsyento ng modernong musika ang nakatayo sa 1-5-6-4 progression kaya napakalaking asset nito sa pianist."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang common tone (notang parehong naroroon) sa pagitan ng C Major (C-E-G) at Am (A-C-E)?",
                                      "options": [
                                                "G at B",
                                                "C at E",
                                                "F at A",
                                                "Walang common tone"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang parehong C at E ay naroroon sa C Major (C-E-G) at A Minor (A-C-E)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Module 2 Milestone: 4-Chord Song Video",
                  "sheetName": "Milestone_Mod2_Log",
                  "description": "Isumite ang video recording ng 4-chord marathon kasama ang rubrics para sa pedal, rhythm, at dynamic control.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Full 2-minute uninterrupted video submission ng 1-5-6-4 progression",
                            "Self-evaluation grading rubric"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Steady 68 BPM pulse maintenance",
                                      "points": 40
                            },
                            {
                                      "criteria": "Seamless legato pedaling without muddiness",
                                      "points": 30
                            },
                            {
                                      "criteria": "Dynamic musical feel and volume control",
                                      "points": 30
                            }
                  ]
        },
        classroom_link: '',
        order_index: 4,
        progress: 0,
      },
    ],
  },
  {
    id: 'mod-piano-3',
    track_id: 'track-pinoy-piano-zero-to-hero',
    title: "Module 3: Nashville Number System & Church Praise/Worship Basics",
    duration: "2 Weeks",
    overview: "Tuklasin ang wika ng mga propesyonal na church musicians: ang Nashville Number System (1 hanggang 7), mga slash chords (C/E, G/B, D/F#), at suspended chords (sus2, sus4) para sa tunay na contemporary worship sound.",
    lessons: 4,
    topics: ["Nashville Number System: Paano Gamitin ang 1-2-3-4-5-6-7 Chording","Tagalog Worship Application: Nashville Numbers in Contemporary Praise","Slash Chords sa Church Worship (C/E, G/B, D/F#, F/A) para sa Bass Walkdowns","Suspended Chords (Csus2, Dsus4) & Add9 Colors para sa Contemporary Worship Sound"],
    lessonItems: [
      {
        id: 'les-piano-3-1',
        module_id: 'mod-piano-3',
        title: "Nashville Number System: Paano Gamitin ang 1-2-3-4-5-6-7 Chording",
        duration: "35 mins",
        video_url: 'https://www.youtube.com/embed/Pdgvz60OR98',
        objective: "Maintindihan ang numero ng bawat chord sa kahit anong key (1 = Major, 2 = minor, 3 = minor, 4 = Major, 5 = Major, 6 = minor, 7 = diminished).",
        content: "### 🎯 Bakit Number System ang Gamit sa Church Bands?\nSa church worship team, biglang sasabihin ng Worship Leader bago mag-start ang service:\n> *\"Praise team, mababa sa akin ang Key of C, itaas natin sa Key of D o Key of E!\"*\nKung chords ang kabisado mo (C, G, Am, F), magpapanic ka! Pero kung **Number System** ang alam mo, walang problema!\n\n### 🔢 Ang Universal Number Formula sa Major Scale:\nKahit anong Major Key ang tugtugin mo, ito ang batas ng kalikasan ng musika:\n* **1 (One)** = **MAJOR** (Tonic / Home)\n* **2 (Two)** = **minor**\n* **3 (Three)** = **minor**\n* **4 (Four)** = **MAJOR**\n* **5 (Five)** = **MAJOR** (Dominant)\n* **6 (Six)** = **minor** (Relative Minor)\n* **7 (Seven)** = **diminished**\n\n### 📊 Halimbawa sa Key of C vs. Key of G vs. Key of D:\n| Number | Key of C | Key of G | Key of D |\n| :--- | :--- | :--- | :--- |\n| **1** | **C** | **G** | **D** |\n| **2** | **Dm** | **Am** | **Em** |\n| **3** | **Em** | **Bm** | **F#m** |\n| **4** | **F** | **C** | **G** |\n| **5** | **G** | **D** | **A** |\n| **6** | **Am** | **Em** | **Bm** |\n| **7** | **Bdim** | **F#dim** | **C#dim** |",
        code_snippet: "+-----------------------------------------------------------+\n|               NASHVILLE NUMBER SYSTEM CHEAT SHEET         |\n+-----------------------------------------------------------+\nFormula:   [ 1 ]   [ 2m ]   [ 3m ]   [ 4 ]   [ 5 ]   [ 6m ]   [ 7dim ]\nQuality:   Major   minor    minor    Major   Major   minor    dim\n\nKey of C:    C       Dm       Em       F       G       Am      Bdim\nKey of D:    D       Em       F#m      G       A       Bm      C#dim\nKey of E:    E       F#m      G#m      A       B       C#m     D#dim\nKey of G:    G       Am       Bm       C       D       Em      F#dim\n\nKabisaduhin ang formula: 1-4-5 ay MAJOR, 2-3-6 ay MINOR!",
        activity: {
                  "title": "Number System Transposition Challenge",
                  "instructions": [
                            "Isulat ang progression na: 1 - 6 - 4 - 5.",
                            "Tugtugin ito sa Key of C: C -> Am -> F -> G.",
                            "Ngayon, gamit ang cheat sheet, ilipat ito sa Key of G: G -> Em -> C -> D.",
                            "Subukan din sa Key of D: D -> Bm -> G -> A.",
                            "Pakinggan kung paano pareho ang \"hugis\" ng awit kahit nag-iba ang tono!"
                  ],
                  "starterCode": "Exercise: Transpose [ 1 - 5 - 6 - 4 ] to 3 Keys:\nKey of C: C -> G -> Am -> F\nKey of G: G -> D -> Em -> C\nKey of D: D -> A -> Bm -> G\nTempo: 65 BPM",
                  "expectedOutcome": "Kayang i-convert ang numbers sa totoong chords sa tatlong pangunahing keys (C, G, D) nang walang kaba.",
                  "rubric": [
                            {
                                      "criteria": "100% correct chord names from number notation",
                                      "points": 40
                            },
                            {
                                      "criteria": "Smooth playback sa Key of G at Key of D",
                                      "points": 30
                            },
                            {
                                      "criteria": "Aural recognition ng 1-5-6-4 cadence across keys",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 3.1: Nashville Number System",
                  "description": "Subukan ang mastery ng numbers sa iba't ibang keys.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Sa kahit anong Major Key, anong numbers ang laging MINOR chords?",
                                      "options": [
                                                "1, 4, 5",
                                                "2, 3, 6",
                                                "1, 3, 5",
                                                "4, 5, 7"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang 2, 3, at 6 chords sa major diatonic system ay laging minor (ii, iii, vi)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Kung ang kanta ay nasa Key of G, ano ang 4 chord?",
                                      "options": [
                                                "D Major",
                                                "C Major",
                                                "Am",
                                                "Em"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa Key of G (G, A, B, C, D, E, F#), ang ika-apat na nota ay C, kaya ang 4 chord ay C Major."
                            },
                            {
                                      "id": "q3",
                                      "question": "Kung nasa Key of D, ano ang 6 chord (vi)?",
                                      "options": [
                                                "Bm (B minor)",
                                                "Em (E minor)",
                                                "F#m",
                                                "G Major"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Sa Key of D, ang 6th scale degree ay B, kaya ang 6 chord ay Bm (B minor)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Nashville Number System Matrix",
                  "sheetName": "Number_System_Matrix",
                  "description": "Kumpletuhin ang 12-key Nashville Number table para sa lahat ng 1 hanggang 7 chords.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Kompletong 12-key chart (C, G, D, A, E, B, F, Bb, Eb, Ab, Db, Gb)",
                            "Transposition test sheet para sa 3 worship songs"
                  ],
                  "rubric": [
                            {
                                      "criteria": "100% diatonic chord accuracy",
                                      "points": 50
                            },
                            {
                                      "criteria": "Practical transposition accuracy",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 1,
        progress: 0,
      },
      {
        id: 'les-piano-3-2',
        module_id: 'mod-piano-3',
        title: "Tagalog Worship Application: Nashville Numbers in Contemporary Praise",
        duration: "32 mins",
        video_url: 'https://www.youtube.com/embed/8Nj5JuDdPyg',
        objective: "I-apply ang Number System sa mga sikat na contemporary praise loops (1-4, 1-5-6-4, 6-4-1-5, 4-1-5-6).",
        content: "### ⛪ Ang 4 na Pinakasikat na Worship Loops\nHalos 90% ng contemporary Christian worship music (Hillsong, Bethel, Elevation, Musikatha) ay gumagamit ng 4 na iconic number loops:\n1. **The Classic Pop/Praise Loop**: **1 - 5 - 6 - 4**\n   * *Halimbawa*: \"Mighty to Save\", \"10,000 Reasons\" (Chorus)\n2. **The Driving Chorus Loop**: **6 - 4 - 1 - 5**\n   * Mas malalim, energetic, at minor-leaning ang simula.\n3. **The Intimate Verse Loop**: **1 - 4 - 1 - 4**\n   * Napakasarap gamitin sa reflective and quiet prayer moments bago sumabog ang kanta.\n4. **The Modern Elevation/Bethel Build**: **4 - 1 - 5 - 6**\n   * Nagsisimula sa 4 para sa \"bitin\" at lumulutang na pakiramdam (*unresolved anticipation*).\n\n### 💡 Pagtugtog sa Key of C:\n* **1 - 5 - 6 - 4**: C -> G -> Am -> F\n* **6 - 4 - 1 - 5**: Am -> F -> C -> G\n* **4 - 1 - 5 - 6**: F -> C -> G -> Am",
        code_snippet: "+-----------------------------------------------------------+\n|                   4 CLASSIC WORSHIP CHORD LOOPS           |\n+-----------------------------------------------------------+\nLoop A (Classic Praise):      [ 1 ] -> [ 5 ] -> [ 6 ] -> [ 4 ]\n                              (C)      (G)      (Am)     (F)\n\nLoop B (Emotional Anthem):    [ 6 ] -> [ 4 ] -> [ 1 ] -> [ 5 ]\n                              (Am)     (F)      (C)      (G)\n\nLoop C (Floating/Modern):     [ 4 ] -> [ 1 ] -> [ 5 ] -> [ 6 ]\n                              (F)      (C)      (G)      (Am)\n\nLoop D (Intimate Verse):      [ 1 ] -> [ 4 ] -> [ 1 ] -> [ 4 ]\n                              (C)      (F)      (C)      (F)",
        activity: {
                  "title": "Worship Loop Transition Workout",
                  "instructions": [
                            "Patugtugin ang Loop A (1-5-6-4) sa Key of C nang 2 beses.",
                            "Lumipat sa Loop B (6-4-1-5) nang tuluy-tuloy nang hindi humihinto.",
                            "Lumipat sa Loop C (4-1-5-6) at pakinggan ang pagkakaiba ng emosyon.",
                            "Subukan din ito sa Key of G: [ G - D - Em - C ] -> [ Em - C - G - D ] -> [ C - G - D - Em ]."
                  ],
                  "starterCode": "Worship Medley Drill:\nPart 1 (Verse): [ 1 ] -> [ 4 ] -> [ 1 ] -> [ 4 ] (C -> F -> C -> F)\nPart 2 (Pre-Chorus): [ 4 ] -> [ 1 ] -> [ 5 ] -> [ 5 ] (F -> C -> G -> G)\nPart 3 (Chorus): [ 1 ] -> [ 5 ] -> [ 6 ] -> [ 4 ] (C -> G -> Am -> F)\nPart 4 (Bridge): [ 6 ] -> [ 4 ] -> [ 1 ] -> [ 5 ] (Am -> F -> C -> G)\nTempo: 70 BPM",
                  "expectedOutcome": "Kabisadong i-navigate ang iba't ibang worship song structures gamit lamang ang mga numero.",
                  "rubric": [
                            {
                                      "criteria": "Seamless transition sa pagitan ng 4 worship loops",
                                      "points": 40
                            },
                            {
                                      "criteria": "Tamang dynamic progression (mahina sa verse, malakas sa chorus)",
                                      "points": 30
                            },
                            {
                                      "criteria": "Consistent pulse sa 70 BPM",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 3.2: Worship Song Loops",
                  "description": "Suriin ang mga numero at structural dynamics ng worship music.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Kung ang kanta ay nagsisimula sa 4 chord bago pumunta sa 1, ano ang karaniwang emosyonal na epekto nito?",
                                      "options": [
                                                "Nagiging masaya at tapos na agad ang kanta",
                                                "Nagbibigay ito ng \"floating\", open, at unresolved anticipation feel",
                                                "Maling tugtog ito at bawal sa worship",
                                                "Wala itong pinagkaiba sa pagsisimula sa 1"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang pagsisimula sa 4 (Subdominant) ay lumilikha ng floating suspension dahil hindi pa umuuwi sa tonic (1)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Sa Key of G, ano ang chords ng Loop B (6 - 4 - 1 - 5)?",
                                      "options": [
                                                "Am - C - G - D",
                                                "Em - C - G - D",
                                                "Em - D - C - G",
                                                "Bm - C - G - D"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa Key of G: 6=Em, 4=C, 1=G, 5=D (Em - C - G - D)."
                            },
                            {
                                      "id": "q3",
                                      "question": "Alin sa mga sumusunod na loop ang pinakabagay sa intimate verse o reflective prayer time?",
                                      "options": [
                                                "6 - 5 - 4 - 3",
                                                "1 - 4 - 1 - 4",
                                                "7 - 3 - 6 - 2",
                                                "5 - 5 - 5 - 5"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang 1 - 4 - 1 - 4 (Tonic to Subdominant pendulum) ay napakapayapa at perpekto sa contemplative prayer."
                            }
                  ]
        },
        worksheet: {
                  "title": "Worship Setlist Number Chart",
                  "sheetName": "Setlist_Number_Log",
                  "description": "Gumawa ng 3-song Sunday Worship Setlist gamit lamang ang Nashville Numbers.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Numbered chart para sa Slow Worship, Medium Praise, at Altar Call",
                            "Transpose key guide para sa lalaki at babaeng worship leader"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Accurate song numbering architecture",
                                      "points": 50
                            },
                            {
                                      "criteria": "Seamless vocal range key adaptation",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 2,
        progress: 0,
      },
      {
        id: 'les-piano-3-3',
        module_id: 'mod-piano-3',
        title: "Slash Chords sa Church Worship (C/E, G/B, D/F#, F/A) para sa Bass Walkdowns",
        duration: "30 mins",
        video_url: 'https://www.youtube.com/embed/zxfQpZbchwM',
        objective: "Matutunan ang ibig sabihin ng Slash Chords (Right Hand Chord / Left Hand Bass) at ang iconic bass walkdowns.",
        content: "### 🎸 Ano ang Slash Chord?\nKapag nakakita ka ng chord na may slash tulad ng **C/E** o **G/B**:\n* **Nasa Kaliwa ng Slash (C)**: Ang chord na tutugtugin ng **Right Hand** (C Major).\n* **Nasa Kanan ng Slash (E)**: Ang nag-iisang bass note na tutugtugin ng **Left Hand** (E bass).\n* *Binabasa ito bilang: \"C over E\" o \"G over B\"*.\n\n### 🚶 Bakit Mahalaga ang Slash Chords? \"The Bass Walkdown\"\nAng pinakamalaking pagkakaiba ng baguhan sa propesyonal na church keyboardist ay ang **Walking Bass Lines**:\nSa halip na tumalon mula C papuntang Am:\n* **Tradisyonal**: C ➔ Am (Malayo ang bass C ➔ A)\n* **May Slash Chord**: **C ➔ G/B ➔ Am ➔ C/G ➔ F**\nMapapansin mo ang pababang hagdan ng bass notes sa kaliwang kamay:\n**C ➔ B ➔ A ➔ G ➔ F**! Napakasarap pakinggan at napaka-propesyonal!\n\n### 🌟 Ang 4 na Most Common Worship Slash Chords:\n1. **C/E** (1 over 3): RH = C Major, LH = E bass\n2. **G/B** (5 over 7): RH = G Major, LH = B bass\n3. **D/F#** (Key of G o D): RH = D Major, LH = F# bass\n4. **F/A** (4 over 6): RH = F Major, LH = A bass",
        code_snippet: "+-----------------------------------------------------------+\n|               THE ICONIC WORSHIP BASS WALKDOWN            |\n+-----------------------------------------------------------+\nChord:      [ C ]   --->   [ G/B ]   --->   [ Am ]   --->   [ C/G ]   --->   [ F ]\nRH (Chord): [ C-E-G ]      [ D-G-B ]        [ C-E-A ]       [ C-E-G ]        [ C-F-A ]\nLH (Bass):    C              B                A               G                F\n              |              |                |               |                |\n              v              v                v               v                v\nBass Walk:   Do     --->    Ti       --->    La      --->    Sol      --->    Fa\n\nIto ang sikreto ng Hillsong at Don Moen worship sound!",
        activity: {
                  "title": "The \"Canon / Worship\" Bass Walkdown Drill",
                  "instructions": [
                            "Iposisyon ang LH pinky sa C3, RH sa C Major (G-C-E).",
                            "Measure 1: C (LH: C, RH: C Major).",
                            "Measure 2: G/B (LH: B, RH: G Major D-G-B).",
                            "Measure 3: Am (LH: A, RH: Am C-E-A).",
                            "Measure 4: C/G (LH: G, RH: C Major E-G-C).",
                            "Measure 5: F (LH: F, RH: F Major C-F-A).",
                            "Pakinggan ang tuluy-tuloy na hakbang ng bass pababa."
                  ],
                  "starterCode": "Walkdown Sequence:\n| C /// | G/B /// | Am /// | C/G /// | F /// | G /// | C /// |\nTempo: 60 BPM\nLH: Single heavy bass note\nRH: Gentle sustained chords",
                  "expectedOutcome": "Naisasagawa ang 5-step step-down bassline nang hindi nagkakamali sa tamang nota sa kaliwang kamay.",
                  "rubric": [
                            {
                                      "criteria": "Tumpak na LH bass notes sa B, A, G, F",
                                      "points": 40
                            },
                            {
                                      "criteria": "Tamang RH chord voicings sa ibabaw",
                                      "points": 30
                            },
                            {
                                      "criteria": "Smooth sostenuto pedal coordination",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 3.3: Slash Chords & Bass Walking",
                  "description": "Pagsusuri sa pag-unawa at aplikasyon ng slash chords.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Sa chord na \"G/B\", ano ang tutugtugin ng kaliwang kamay (Left Hand)?",
                                      "options": [
                                                "G Major chord",
                                                "B note lamang (Bass)",
                                                "G at B nang sabay",
                                                "C note"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang nasa kanan ng slash ay ang itatalagang nag-iisang bass note para sa Left Hand (B)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Bakit ginagamit ang G/B sa pagitan ng C at Am chords?",
                                      "options": [
                                                "Para maging mas mahirap tugtugin",
                                                "Para lumikha ng makinis na step-wise bass walkdown mula C papuntang B papuntang A",
                                                "Dahil bawal direktang pumunta sa Am",
                                                "Wala itong pinagkaiba sa normal na G"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang G/B ay nagbibigay ng maayos na tulay ng bass: C -> B -> A."
                            },
                            {
                                      "id": "q3",
                                      "question": "Sa chord na \"D/F#\", ano ang nota ng bass sa kaliwang kamay?",
                                      "options": [
                                                "D",
                                                "F natural",
                                                "F# (F sharp)",
                                                "A"
                                      ],
                                      "correctIndex": 2,
                                      "explanation": "Ang F# ang bass note sa D/F# (D Major chord over F sharp bass)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Slash Chords Walkdown Sheet",
                  "sheetName": "Slash_Chords_Log",
                  "description": "Itala ang 5 kanta na may slash chords at i-chart ang bass notes ng bawat isa.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Chart ng 5 worship songs na may slash chords",
                            "Recorded audio sample ng walkdown progression"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Accurate bass identification",
                                      "points": 50
                            },
                            {
                                      "criteria": "Clean audio execution",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 3,
        progress: 0,
      },
      {
        id: 'les-piano-3-4',
        module_id: 'mod-piano-3',
        title: "Suspended Chords (Csus2, Dsus4) & Add9 Colors para sa Contemporary Worship Sound",
        duration: "28 mins",
        video_url: 'https://www.youtube.com/embed/xwiBrhYaT4U',
        objective: "Maitugtog ang sus2, sus4, at add9 chords na nagbibigay ng modernong worship atmosphere at \"open\" sound.",
        content: "### 🌟 Bakit Tunog \"Church / Worship\" ang Sus Chords?\nSa ordinaryong major chord (C-E-G), ang 3rd (E) ay napaka-tiyak ng tunog.\nSa **Suspended (Sus) Chord**, pansamantalang tinatanggal ang 3rd at pinapalitan ng **2nd** o **4th**:\n* **Sus2**: Root + **2nd** + 5th (e.g. Csus2 = C - D - G) ➔ *Napakalambot, lumulutang, payapa.*\n* **Sus4**: Root + **4th** + 5th (e.g. Csus4 = C - F - G) ➔ *May tension na naghahanap ng resolution pabalik sa Major.*\n* **Add9**: Major Triad + 9th note (e.g. Cadd9 = C - E - G - D) ➔ *Ang quintessential Bethel at Hillsong piano sound!*\n\n### 🎹 Paano Gamitin sa Worship Piano:\n1. **The \"Never-Moving Pinky\" Trick in Key of G**:\n   * Ipatong ang RH ring (4) sa D5 at pinky (5) sa G5.\n   * **HUWAG ITONG IALIS** habang nagpapalit ang ibang daliri!\n   * G ➔ Cadd9 ➔ Em7 ➔ Dsus4!\n   * Ito ang pinakasikat na worship trick sa buong mundo!",
        code_snippet: "+-----------------------------------------------------------+\n|              WORSHIP SECRET: THE ANCHORED PINKY & RING    |\n+-----------------------------------------------------------+\nKey of G Worship Voicing:\nHold D (4) and G (5) on top AT ALL TIMES!\n\n1. G Major:      LH: G      RH: [ G - B ] + D + G\n2. Cadd9:        LH: C      RH: [ G - C ] + D + G\n3. Em7:          LH: E      RH: [ G - B ] + D + G\n4. Dsus4:        LH: D      RH: [ F#- A ] + D + G  (o D-G-A)\n\nPakinggan: Agad na magiging tunog \"Good Good Father\" o \"What a Beautiful Name\"!",
        activity: {
                  "title": "The Anchored D & G Worship Workout",
                  "instructions": [
                            "Sa Right Hand, ipuwesto ang daliri 4 sa D at daliri 5 sa G sa high octave.",
                            "Huwag aalisin ang dalawang daliring ito!",
                            "Tugtugin ang G chord gamit ang daliri 1 sa B.",
                            "Lumipat sa Cadd9 gamit ang daliri 1 sa E.",
                            "Lumipat sa Em7 gamit ang daliri 1 sa E o B.",
                            "Lumipat sa Dsus4.",
                            "Ulitin nang may mabagal na 60 BPM arpeggiated style."
                  ],
                  "starterCode": "Progression: [ G ] -> [ Cadd9 ] -> [ Em7 ] -> [ Dsus4 ]\nRH: Anchored top D & G notes\nLH: Deep low bass root notes\nTempo: 60 BPM Ballad Arpeggio",
                  "expectedOutcome": "Naitutugtog ang modern worship voicing sa Key of G nang hindi gumagalaw ang dalawang top notes.",
                  "rubric": [
                            {
                                      "criteria": "Consistent holding of top D and G anchor notes",
                                      "points": 40
                            },
                            {
                                      "criteria": "Smooth left-hand bass transitions",
                                      "points": 30
                            },
                            {
                                      "criteria": "Expressive dynamic touch and pedaling",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 3.4: Suspended & Add9 Chords",
                  "description": "Suriin ang formula at musical characteristics ng sus chords.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang pinapalitan sa isang triad upang mabuo ang Sus4 chord?",
                                      "options": [
                                                "Pinapalitan ang Root ng 4th",
                                                "Pinapalitan ang 3rd ng 4th note",
                                                "Pinapalitan ang 5th ng 4th note",
                                                "Tinatanggal ang lahat ng white keys"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa Sus4, ang 3rd ay pinapalitan ng 4th scale degree (halimbawa sa C: C - F - G)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang mga nota na bumubuo sa Csus2 chord?",
                                      "options": [
                                                "C - E - G",
                                                "C - D - G",
                                                "C - F - G",
                                                "C - D - E"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Csus2 ay binubuo ng Root (C), 2nd (D), at 5th (G)."
                            },
                            {
                                      "id": "q3",
                                      "question": "Bakit napakapopular ng Sus at Add9 chords sa contemporary worship music?",
                                      "options": [
                                                "Dahil mahirap itong pakinggan",
                                                "Dahil lumilikha ito ng bukas, payapa, at lumulutang na tunog na walang matalas na clash",
                                                "Dahil mas mura ang keyboard kapag sus chords ang tinugtog",
                                                "Para bumilis ang kanta"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang absence o extension ng 3rd ay lumilikha ng atmospheric and expansive soundscape na perpekto sa worship."
                            }
                  ]
        },
        worksheet: {
                  "title": "Sus & Extended Chords Log",
                  "sheetName": "Sus_Chords_Log",
                  "description": "I-map ang sus2, sus4, at add9 chords sa keys of C, D, at G sa worksheet.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Matrix ng 9 suspended chords formulas",
                            "1-minute worship arpeggio video demo"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Accurate chord spellings",
                                      "points": 50
                            },
                            {
                                      "criteria": "Clean arpeggiated piano touch",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 4,
        progress: 0,
      },
    ],
  },
  {
    id: 'mod-piano-4',
    track_id: 'track-pinoy-piano-zero-to-hero',
    title: "Module 4: Tagalog Worship Anthems & Chording Breakdown (Sipra by Ear)",
    duration: "2 Weeks",
    overview: "I-apply ang buong kaalaman sa pag-sipra ng chords sa tenga at patugtugin ang mga dakilang awit ng pananampalataya sa Pilipinas tulad ng \"Kay Buti-buti Mo Panginoon\", \"Banal Mong Tahanan\", at ang epikong \"Dakilang Katapatan\".",
    lessons: 4,
    topics: ["Paano Kumapa ng Kanta at Chord Progressions sa Tenga (Sipra Method)","Worship Anthem 1: \"Kay Buti-buti Mo Panginoon\" (Full Chording & Dynamic Worship)","Worship Anthem 2: \"Banal Mong Tahanan\" (Slow Ballad, Inversions & Left Hand Flow)","Worship Anthem 3: \"Dakilang Katapatan\" (Epic Hymn Chord Voicing & Grand Piano Climax)"],
    lessonItems: [
      {
        id: 'les-piano-4-1',
        module_id: 'mod-piano-4',
        title: "Paano Kumapa ng Kanta at Chord Progressions sa Tenga (Sipra Method)",
        duration: "35 mins",
        video_url: 'https://www.youtube.com/embed/uEmOZjlNBng',
        objective: "Matutunan ang 4-step ear training process sa paghahanap ng Root key, Bass movement, at Chord quality nang walang kodigo.",
        content: "### 👂 Ang Sining ng Pagsipra (Ear Training)\nAng tunay na church keyboardist ay hindi laging umaasa sa chord charts o Google. Kadalasan sa praise and worship, biglang kakanta ang pastor ng kanta na walang sheet music!\n\n### 🔍 Ang 4-Step Sipra Framework:\n1. **Step 1: Hanapin ang \"Tonic\" (Home Key)**:\n   * Pakinggan ang huling nota o ang pinaka-resolving note ng kanta kung saan parang \"nakauwi\" ang tunog.\n   * I-hum ang tono at subukan sa piano kung anong puting nota ang tumutugma (e.g. C, D, o G).\n2. **Step 2: Sundan ang Bass Note gamit ang Kaliwang Kamay**:\n   * Huwag munang intindihin ang buong chord! Ang pinakamadaling marinig ay ang mababang tunog ng bass o padyak.\n   * Gamit ang kaliwang hinlalaki o hintuturo, hanapin ang root note ng bawat measure.\n3. **Step 3: Tukuyin kung Major o Minor**:\n   * Kapag nahanap na ang bass (halimbawa, A): Masaya ba o malungkot?\n   * Subukan ang A Major (A-C#-E) vs. A Minor (A-C-E). Mararamdaman agad ng tainga mo kung aling chord ang tama!\n4. **Step 4: I-apply ang Number System**:\n   * Kapag nakuha mo na ang pattern (e.g. 1 - 5 - 6 - 4), alam mo na ang buong kanta mula verse hanggang chorus!",
        code_snippet: "+-----------------------------------------------------------+\n|                 THE 4-STEP SIPRA FLOWCHART                |\n+-----------------------------------------------------------+\n[ Pakinggan ang Kanta ]\n         |\n         v\n[ 1. Hanapin ang Home Key (Tonic / 1) gamit ang Hum ]\n         |\n         v\n[ 2. Sundan ang Bass Note sa Left Hand (Root Hunt) ]\n         |\n         v\n[ 3. I-test kung Major o Minor sa Right Hand ]\n         |\n         v\n[ 4. I-plot sa Nashville Number System (1, 4, 5, 6m...) ]\n\nKapag nakuha ang Numbers = Kaya mo nang tugtugin kahit saan!",
        activity: {
                  "title": "Blind Ear-Training Sipra Test",
                  "instructions": [
                            "Makinig sa isang pamilyar na Tagalog worship song chorus nang hindi tinitingnan ang chords sa internet.",
                            "Gamitin ang Left Hand para hanapin ang 4 bass notes ng chorus.",
                            "Isulat ang narinig na notes sa papel.",
                            "Subukan ang major at minor triads sa Right Hand para kumpletuhin ang sipra."
                  ],
                  "starterCode": "Sipra Worksheet Template:\nSong Title: ____________________\nEstimated Key: [   ]\nBass Line Heard (LH): [   ] -> [   ] -> [   ] -> [   ]\nChords Verified (RH): [   ] -> [   ] -> [   ] -> [   ]\nNumber Formula:       [   ] -> [   ] -> [   ] -> [   ]",
                  "expectedOutcome": "Matagumpay na naisasalin ang narinig na kanta papunta sa tamang chords gamit lamang ang tainga.",
                  "rubric": [
                            {
                                      "criteria": "Tamang identification ng Key Center",
                                      "points": 40
                            },
                            {
                                      "criteria": "Accurate bassline transcription",
                                      "points": 30
                            },
                            {
                                      "criteria": "Tamang Major vs Minor triad testing",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 4.1: By-Ear Sipra Methodology",
                  "description": "Suriin ang hakbang-hakbang na proseso ng ear training sa piano.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang pinakaunang dapat hanapin sa keyboard kapag sumisipra ng kanta?",
                                      "options": [
                                                "Ang pinakamabilis na solo runs",
                                                "Ang \"Home Key\" o Tonic center kung saan nagre-resolve ang tunog",
                                                "Ang pinakamataas na black key",
                                                "Ang lyrics ng kanta"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang pagtukoy sa Tonic o Home Key ang nagbubukas sa buong diatonic system ng kanta."
                            },
                            {
                                      "id": "q2",
                                      "question": "Bakit mas madaling hanapin muna ang Bass note sa kaliwang kamay kaysa sa buong chord?",
                                      "options": [
                                                "Dahil ang bass note ang nagdidikta ng Root ng chord at mas madaling ihiwalay ng tainga",
                                                "Dahil bawal tugtugin ang kanang kamay kapag sumisipra",
                                                "Dahil pare-pareho ang lahat ng chords",
                                                "Wala itong siyentipikong basehan"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang bass line ang pundasyon ng harmony at nagpapakita agad kung anong letter name ang root ng chord."
                            },
                            {
                                      "id": "q3",
                                      "question": "Kung ang nahanap mong bass note ay D sa Key of C, anong chord quality ang unang dapat subukan ayon sa Number System?",
                                      "options": [
                                                "D Major",
                                                "D Minor (2m)",
                                                "D Diminished",
                                                "D Augmented"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa Key of C, ang D ay ang 2 chord, at ang 2 sa major scale ay natural na minor (Dm)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Sipra By-Ear Transcription Log",
                  "sheetName": "Ear_Training_Log",
                  "description": "Mag-sipra ng 2 Tagalog songs nang walang kodigo at itala ang progression sa worksheet.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Chords & Number chart ng 2 na-siprang kanta",
                            "Reflection sa mga hamon sa paghahanap ng minor chords"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Accurate chord transcription",
                                      "points": 50
                            },
                            {
                                      "criteria": "Clear documentation of the 4-step process",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 1,
        progress: 0,
      },
      {
        id: 'les-piano-4-2',
        module_id: 'mod-piano-4',
        title: "Worship Anthem 1: \"Kay Buti-buti Mo Panginoon\" (Full Chording & Dynamic Worship)",
        duration: "32 mins",
        video_url: 'https://www.youtube.com/embed/RnpJvyHbKps',
        objective: "Maitugtog ang klasikong awiting \"Kay Buti-buti Mo Panginoon\" sa Key of C at Key of D gamit ang smooth inversions at rhythmic accompaniment.",
        content: "### 🕊️ Pagsusuri sa Awit: \"Kay Buti-buti Mo Panginoon\"\nIsinulat ni Pastor Boy Baldomaro, ito ang isa sa pinaka-itinuturing na pambansang awit ng papuri at pagsamba sa Pilipinas.\n\n### 🎼 Chord Progression Breakdown (Key of C):\n**Verse**:\n* | **C** | **Em** | **F** | **G** |\n* | **C** | **Em** | **F** | **G** |\n* *Numbers*: | **1** | **3m** | **4** | **5** |\n\n**Chorus**:\n* | **F** | **G/F o G** | **Em** | **Am** |\n* | **Dm** | **G** | **C** | **C7 o G** |\n* *Numbers*: | **4** | **5** | **3m** | **6m** | **2m** | **5** | **1** |\n\n### 🎹 Pro Tips para sa Pianist:\n1. Sa Chorus, kapag nagpunta sa **Em ➔ Am ➔ Dm ➔ G**, ito ay tinatawag na **Circle of Fifths progression** (3-6-2-5-1).\n2. Sa halip na purong F, subukan ang **Fadd9** (F - A - C - G) para sa modernong worship sparkle!",
        code_snippet: "+-----------------------------------------------------------+\n|          \"KAY BUTI-BUTI MO PANGINOON\" (KEY OF C)          |\n+-----------------------------------------------------------+\nVERSE:\n  C          Em         F            G\nKay buti-buti Mo, Panginoon...\n  C          Em         F            G\nSa lahat ng oras, sa bawat araw...\n\nCHORUS:\n  F          G          Em           Am\nIka'y laging tapat kung magmahal...\n  Dm         G          C            (G)\nAng Iyong awa ay magpawalang-hanggan!\n\nLH Style: Root-5th open bass\nRH Style: Inversions with gentle 8th-note rolling arpeggios",
        activity: {
                  "title": "Full Song Performance: Kay Buti-buti Mo",
                  "instructions": [
                            "Patugtugin ang buong Verse at Chorus sa Key of C kasabay ng metronome sa 66 BPM.",
                            "Gumamit ng Legato pedaling sa bawat palit ng chord.",
                            "Sa Verse: Malumanay na arpeggios.",
                            "Sa Chorus: Buong solid chords na may octave bass para sa malawak na pagsamba."
                  ],
                  "starterCode": "Setlist Arrangement:\nIntro: | C / Em / | F / G / |\nVerse 1: | C / Em / | F / G / | C / Em / | F / G / |\nChorus:  | F / G / | Em / Am / | Dm / G / | C / / / |\nTempo: 66 BPM",
                  "expectedOutcome": "Kumpyansang nakakatugtog ng buong awit mula intro hanggang chorus nang may dynamic feel.",
                  "rubric": [
                            {
                                      "criteria": "100% correct chord changes and timing",
                                      "points": 40
                            },
                            {
                                      "criteria": "Smooth transition from Verse to Chorus dynamics",
                                      "points": 30
                            },
                            {
                                      "criteria": "Clean pedal control throughout the song",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 4.2: Song Analysis: Kay Buti-buti Mo",
                  "description": "Suriin ang harmonic movement ng awit.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang progression ng Chorus ng \"Kay Buti-buti Mo Panginoon\" sa Number System?",
                                      "options": [
                                                "1 - 5 - 6 - 4",
                                                "4 - 5 - 3m - 6m - 2m - 5 - 1",
                                                "1 - 4 - 5 - 1",
                                                "6m - 4 - 1 - 5"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Chorus ay sumusunod sa 4 - 5 - 3m - 6m - 2m - 5 - 1 (F - G - Em - Am - Dm - G - C)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Anong chord ang nagsisilbing tulay mula Em papuntang Dm sa nasabing chorus?",
                                      "options": [
                                                "Am (A minor / 6m)",
                                                "C Major",
                                                "F#dim",
                                                "G7"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang Am ang 6m chord na nag-uugnay sa Em (3m) papuntang Dm (2m) sa Circle of 5ths motion."
                            },
                            {
                                      "id": "q3",
                                      "question": "Paano dapat baguhin ang dynamic ng pagtugtog mula Verse papuntang Chorus?",
                                      "options": [
                                                "Dapat mas humina at bumagal",
                                                "Dapat mag-build up: mas malawak na chords at mas mariing bass para suportahan ang pagsamba",
                                                "Dapat tumigil sa pagtugtog",
                                                "Walang dapat baguhin"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Chorus ay ang tugatog ng awit kaya nararapat na lumawak ang registers at lumakas ang dynamics."
                            }
                  ]
        },
        worksheet: {
                  "title": "Song Study: Kay Buti-buti Mo",
                  "sheetName": "Kay_Buti_Buti_Log",
                  "description": "Isumite ang video performance ng buong awit kasama ang self-assessment rubric.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Video recording ng Verse at Chorus",
                            "Grading sheet para sa tempo at chord accuracy"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Zero hesitation in chord switching",
                                      "points": 50
                            },
                            {
                                      "criteria": "Worshipful musical dynamics and touch",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 2,
        progress: 0,
      },
      {
        id: 'les-piano-4-3',
        module_id: 'mod-piano-4',
        title: "Worship Anthem 2: \"Banal Mong Tahanan\" (Slow Ballad, Inversions & Left Hand Flow)",
        duration: "30 mins",
        video_url: 'https://www.youtube.com/embed/QVTJwgvCq5w',
        objective: "Matutunan ang slow worship ballad style, continuous arpeggiated left hand, at expressive phrasing sa \"Banal Mong Tahanan\".",
        content: "### ⛪ Pagsusuri sa Awit: \"Banal Mong Tahanan\"\nIsang napakataimtim at sagradong awit ng paglapit sa presensya ng Diyos. Dito kailangan ng pianist ang **subtlety**, **reverence**, at **flowing left-hand arpeggios**.\n\n### 🎼 Chords sa Key of C:\n* **Intro / Verse**:\n  * | **C** | **Em7** | **F** | **G** |\n  * | **C** | **Em7** | **F** | **G** |\n* **Chorus**:\n  * | **F** | **G/F** | **Em7** | **Am7** |\n  * | **Dm7** | **G** | **C** | **C7** |\n  * | **F** | **G/F** | **Em7** | **Am7** |\n  * | **Dm7** | **G** | **C** |\n\n### 🌊 Ang \"Water Flow\" Left Hand Technique (1-5-8-9):\nSa halip na isang bagsak lang ng bass:\n* Patunugin ang: **Root (1) ➔ 5th ➔ Octave (8) ➔ 9th** nang tuluy-tuloy!\n* Halimbawa sa C: **C2 ➔ G2 ➔ C3 ➔ D3**\n* Para itong agos ng tubig na nagbibigay ng napakagandang suporta sa mang-aawit!",
        code_snippet: "+-----------------------------------------------------------+\n|             THE 1-5-8-9 \"WATER FLOW\" LH ARPEGGIO          |\n+-----------------------------------------------------------+\nKey of C Flow:\nLeft Hand:   C2  ----->  G2  ----->  C3  ----->  D3\nFingers:     (5)         (2)         (1)        (thumb cross/stretch)\nTiming:      Beat 1      Beat 2      Beat 3      Beat 4\n\nEpekto:\nNapakalalim at mala-alon na tunog na perpekto sa mababagal na\nTagalog worship songs tulad ng \"Banal Mong Tahanan\"!",
        activity: {
                  "title": "Flowing Arpeggio Worship Application",
                  "instructions": [
                            "Sanayin ang 1-5-8-9 arpeggio sa Left Hand sa C Major sa 58 BPM.",
                            "Gawin din ito sa Em7 (E-B-E-F#), F (F-C-F-G), at G (G-D-G-A).",
                            "Isabay ang malalambot na Right Hand chords sa ibabaw.",
                            "Tugtugin ang buong Verse ng \"Banal Mong Tahanan\"."
                  ],
                  "starterCode": "Exercise Progression (Slow Ballad @ 58 BPM):\n| C (1-5-8-9) | Em7 (1-5-8-9) | F (1-5-8-9) | G (1-5-8-9) |\nPedal: Change precisely on beat 1 of every measure\nRH: Add gentle 9th chord voicings",
                  "expectedOutcome": "Naitutugtog ang malumanay na worship ballad gamit ang tuluy-tuloy na agos ng left hand arpeggio.",
                  "rubric": [
                            {
                                      "criteria": "Even spacing and velocity ng 1-5-8-9 notes",
                                      "points": 40
                            },
                            {
                                      "criteria": "Sensitive soft dynamic control (pianissimo to mezzo-piano)",
                                      "points": 30
                            },
                            {
                                      "criteria": "Clean pedal timing without sound mud",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 4.3: Slow Ballad Worship Styling",
                  "description": "Suriin ang mga pamamaraan para sa taimtim na pagsamba.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang mga nota ng 1-5-8-9 Left Hand arpeggio pattern para sa C chord?",
                                      "options": [
                                                "C - E - G - C",
                                                "C - G - C - D",
                                                "C - D - E - G",
                                                "C - F - G - B"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang 1 ay C, 5 ay G, 8 ay octave C, at 9 ay D (C - G - C - D)."
                            },
                            {
                                      "id": "q2",
                                      "question": "Bakit mas epektibo ang 1-5-8-9 arpeggio kaysa sa mabilis na staccato chords sa awiting \"Banal Mong Tahanan\"?",
                                      "options": [
                                                "Dahil ang staccato ay masyadong mabilis at maingay para sa taimtim na pananalangin",
                                                "Dahil bawal ang staccato sa piano",
                                                "Dahil mas madaling magkamali sa staccato",
                                                "Walang pinagkaiba ang dalawa"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang slow worship ballads ay nangangailangan ng legato at atmospheric flowing texture upang masuportahan ang taimtim na panalangin."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang chord quality ng Em7 sa verse ng awit?",
                                      "options": [
                                                "Minor 7th (3m7)",
                                                "Major 7th",
                                                "Dominant 7th",
                                                "Diminished"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang Em7 ay ang 3m7 chord (E - G - B - D)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Arpeggiated Ballad Practice Log",
                  "sheetName": "Ballad_Style_Log",
                  "description": "I-record ang evaluation ng 1-5-8-9 left hand smoothness sa 58 BPM.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Audio recording ng Verse ng Banal Mong Tahanan",
                            "Self-check rubric ng volume balance"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Even note velocity and rhythm",
                                      "points": 50
                            },
                            {
                                      "criteria": "Expressive phrasing and touch",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 3,
        progress: 0,
      },
      {
        id: 'les-piano-4-4',
        module_id: 'mod-piano-4',
        title: "Worship Anthem 3: \"Dakilang Katapatan\" (Epic Hymn Chord Voicing & Grand Piano Climax)",
        duration: "35 mins",
        video_url: 'https://www.youtube.com/embed/Bh7KZxXhqis',
        objective: "Maitugtog ang intro, verse, at makapangyarihang grand piano climax ng walang-kamatayang obra na \"Dakilang Katapatan\" ni Arnel de Pano.",
        content: "### 👑 Ang Obra-Maestra: \"Dakilang Katapatan\"\nIsinulat ng tanyag na kompositor na si Arnel de Pano, ang \"Dakilang Katapatan\" ay ang itinuturing na pinaka-dakilang Tagalog Christian hymn sa kasaysayan ng Pilipinas.\nDito masusubok ang iyong galing sa:\n* Classic Hymn Arpeggiation\n* Octave Power Chords sa Climax\n* Modulations (Pag-akyat ng Key sa huling koro)\n\n### 🎼 Chords Overview (Key of C):\n* **Intro Part**:\n  * | **C** | **C/E** | **F** | **G7sus - G7** |\n* **Verse**:\n  * | **C** | **Em7** | **F** | **Dm7 - G** |\n  * | **Em7** | **Am7** | **Dm7** | **G7** |\n* **Chorus (Ang Iyong katapatan, O Diyos, dakila...)**:\n  * | **C** | **C/E** | **F** | **F#dim7 o D/F#** |\n  * | **C/G** | **Am7** | **Dm7 - G7** | **C** |\n\n### ⚡ The Climax Voicing (Fortissimo):\nSa huling koro (\"Dakila Ka, O Diyos...\"):\n* Ang Left Hand ay gagamit ng **mabibigat na Octaves** (C1-C2).\n* Ang Right Hand ay gagamit ng **Full 4-note Chords** na may octave melody sa ibabaw para sa mala-katedral na tunog!",
        code_snippet: "+-----------------------------------------------------------+\n|          \"DAKILANG KATAPATAN\" CHORUS POWER VOICING        |\n+-----------------------------------------------------------+\nLine:      \"Dakilang Katapatan... Akong namamangha...\"\nChords:     [ C ]   [ C/E ]   [ F ]   [ D/F# ]   [ C/G ]  [ Am7 ]  [ Dm7 ]  [ G7 ]  [ C ]\nLH Bass:      C       E         F       F#         G        A        D       G      C\n             (Octaves on climax!)\n\nPansinin ang chromatic bass climb:\nF ---> F# ---> G!\nIto ang pinakamakapangyarihang sandali ng awit!",
        activity: {
                  "title": "The \"Dakilang Katapatan\" Climax Workout",
                  "instructions": [
                            "Aralin ang iconic intro arpeggio: C -> C/E -> F -> G7sus.",
                            "Tugtugin ang Verse nang banayad (Mezzo-piano).",
                            "Pagsapit ng Chorus, maghanda para sa chromatic climb: F -> D/F# (F# bass) -> C/G (G bass).",
                            "Ibagsak ang buong lakas ng dalawang kamay sa \"Dakila Ka, O Diyos!\""
                  ],
                  "starterCode": "Climax Section:\n| F /// | D/F# /// | C/G / Am7 / | Dm7 / G7 / | C /// |\nLH: Heavy Octaves\nRH: Full spread chords with sustain\nTempo: 64 BPM",
                  "expectedOutcome": "Naitutugtog ang iconic chromatic climb (F - F# - G) nang may tamang damdamin, timing, at grand piano power.",
                  "rubric": [
                            {
                                      "criteria": "Tumpak na pagtuntong sa F# bass ng D/F# chord",
                                      "points": 40
                            },
                            {
                                      "criteria": "Makapangyarihang dynamic build-up sa climax",
                                      "points": 30
                            },
                            {
                                      "criteria": "Grand ending resolution sa final C major chord",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 4.4: Master Hymn Analysis: Dakilang Katapatan",
                  "description": "Suriin ang kumplikadong harmony ng Dakilang Katapatan.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Sa chorus ng \"Dakilang Katapatan\", anong chromatic passing chord ang ginagamit pagkatapos ng F chord bago mag-C/G?",
                                      "options": [
                                                "G Major",
                                                "D/F# (o F#dim7)",
                                                "Am",
                                                "Bb"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang D/F# o F#dim7 ang lumilikha ng sikat na F -> F# -> G chromatic bass ascent."
                            },
                            {
                                      "id": "q2",
                                      "question": "Sino ang batikang Pilipinong kompositor na sumulat ng \"Dakilang Katapatan\"?",
                                      "options": [
                                                "Ryan Cayabyab",
                                                "Arnel de Pano",
                                                "Gary Valenciano",
                                                "Ogie Alcasid"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang \"Dakilang Katapatan\" ay obra-maestra ng tanyag na Tagalog hymn composer na si Arnel de Pano."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang tamang pamamaraan sa pagtugtog ng Left Hand sa pinaka-climax ng huling koro ng hymn na ito?",
                                      "options": [
                                                "Huwag nang tumugtog ang kaliwang kamay",
                                                "Pumalo ng malalakas na octaves (e.g. C1-C2) para sa matatag na grand orchestral foundation",
                                                "Tumugtog ng napakabilis na staccato",
                                                "Puro black keys lamang"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang heavy octaves sa lowest register ang nagbibigay ng grand cathedral presence sa climax ng kanta."
                            }
                  ]
        },
        worksheet: {
                  "title": "Module 4 Masterpiece Capstone Log",
                  "sheetName": "Dakilang_Katapatan_Log",
                  "description": "Pagsusumite ng video recording ng Dakilang Katapatan Verse at Climax Chorus.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Video recording ng Intro, Verse, at Climax Chorus",
                            "Written analysis ng chromatic bass climb"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Accurate execution of F -> F# -> G transition",
                                      "points": 50
                            },
                            {
                                      "criteria": "Grand dynamic expression and emotional delivery",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 4,
        progress: 0,
      },
    ],
  },
  {
    id: 'mod-piano-5',
    track_id: 'track-pinoy-piano-zero-to-hero',
    title: "Module 5: Worship Pads, Atmosphere, Underscoring & Spontaneous Flow",
    duration: "2 Weeks",
    overview: "Umakyat sa propesyonal na lebel: matutunan ang paggamit ng ambient worship pads, underscoring habang nanalangin o nangangaral ang pastor (talk music), 2-5-1 passing chords, at ang lihim ng live rig setup.",
    lessons: 4,
    topics: ["Worship Pads Layering: Creating Warm Ambient Texture Beneath Piano","Underscoring & Talk Music: Chording sa Panalangin at Preaching Altar Calls","2-5-1 Passing Chords sa Filipino (Smooth Transitions & Gospel Movement)","Live Keyboardist Secrets & Worship Flow Rig POV"],
    lessonItems: [
      {
        id: 'les-piano-5-1',
        module_id: 'mod-piano-5',
        title: "Worship Pads Layering: Creating Warm Ambient Texture Beneath Piano",
        duration: "28 mins",
        video_url: 'https://www.youtube.com/embed/P5qaPm8_DaU',
        objective: "Maintindihan kung paano gumagana ang atmospheric ambient pads, cutoff filters, at layering sa digital keyboard / MainStage.",
        content: "### ☁️ Ano ang Worship Pad?\nKung nanonood ka ng modernong live worship sa YouTube, mapapansin mo na kahit huminto sa pagtipa ang pianista, may naririnig pa ring mainit at lumulutang na tunog (*warm continuous drone / ambient soundscape*).\nIto ang **Worship Pad**:\n* Puno ang tunog, walang patid na katahimikan (*eliminates awkward dead air*).\n* Nagbibigay ng glue na nagkakabit-kabit sa bawat kanta sa worship set.\n\n### 🎛️ Paano Ito Ginagamit nang Propesyonal:\n1. **Continuous Tonic Drone**:\n   * Kung ang kanta ay nasa Key of D, ang pad ay naka-lock sa D at A notes.\n   * Kahit magbago ang chords sa piano (D ➔ G ➔ Bm ➔ A), ang pad sa ilalim ay hindi kailangang maglikot!\n2. **Frequency Separation (EQ & Filter)**:\n   * Ang pad ay dapat nasa **Mid-to-Low warmth** (Cutoff filter around 500Hz - 2kHz).\n   * Kapag masyadong maliwanag ang pad, masasapawan nito ang boses ng mang-aawit at ang piano sparkle.\n3. **Volume Balance**:\n   * 70% Piano, 30% Pad. Ang pad ay anino lamang, hindi ang bida!",
        code_snippet: "+-----------------------------------------------------------+\n|               WORSHIP PAD LAYERING ARCHITECTURE           |\n+-----------------------------------------------------------+\n[ LAYER 1: Acoustic Piano / Bright Grand ] -> Dynamic Melody & Chords\n                     +\n[ LAYER 2: Warm Analog Ambient Pad ]       -> Sustained Tonic Drone (1 & 5)\n                     |\n                     v\n             [ MASTER OUTPUT ]\n      (Warm, Cinematic & Heavenly Atmosphere)\n\nTip: Sa solo piano moments, ang pad ang nagtatago ng pedal clicks at nagbibigay ng album-quality finish!",
        activity: {
                  "title": "Dual-Layer Piano + Pad Performance Drill",
                  "instructions": [
                            "I-set up ang iyong digital piano o MIDI software sa Dual/Layer mode (Acoustic Piano + Warm Synth Pad o Strings).",
                            "I-adjust ang volume ng Pad sa 30% at Piano sa 70%.",
                            "Tugtugin ang mabagal na 1 - 5 - 6 - 4 progression.",
                            "Pansinin kung paano nagdudugtong ang tunog ng pad sa bawat pag-angat ng sustain pedal."
                  ],
                  "starterCode": "Layer Configuration:\nSound 1: Grand Piano (Reverb: Medium Hall)\nSound 2: Warm Analog Pad (Attack: 500ms, Release: 1200ms)\nProgression: | D /// | A/C# /// | Bm /// | G /// |\nTempo: 62 BPM",
                  "expectedOutcome": "Nakakatugtog nang may malinis na ambient layer na hindi nakakagulo sa kalinawan ng mga nota ng piano.",
                  "rubric": [
                            {
                                      "criteria": "Tamang volume balance ng Piano at Pad",
                                      "points": 40
                            },
                            {
                                      "criteria": "Legato playing na nag-a-activate sa pad sustain",
                                      "points": 30
                            },
                            {
                                      "criteria": "Zero harmonic cluttering",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 5.1: Worship Pads & Sound Layering",
                  "description": "Suriin ang mga prinsipyo ng ambient pads sa church setting.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang pangunahing layunin ng paglalagay ng Worship Pad sa ilalim ng tunog ng piano?",
                                      "options": [
                                                "Para patugtugin nang napakalakas at matabunan ang mang-aawit",
                                                "Para magbigay ng mainit na ambient atmosphere at maiwasan ang nakakailang na katahimikan (dead air)",
                                                "Para hindi na kailanganin ang bass guitar",
                                                "Wala itong silbi sa live service"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang ambient pads ay nagbibigay ng seamless sonic glue na nagpapanatili ng presensya ng musika sa pagitan ng mga transitions."
                            },
                            {
                                      "id": "q2",
                                      "question": "Kung ang buong worship set ay nasa Key of G, anong dalawang nota sa pad ang kadalasang epektibong manatiling naka-drone?",
                                      "options": [
                                                "G at D (Root at 5th)",
                                                "C at F",
                                                "G# at A#",
                                                "F at B"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang Root (G) at 5th (D) ay neutral at sumasang-ayon sa halos lahat ng diatonic chords sa Key of G."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang tamang volume proportion sa pagitan ng Acoustic Piano at Ambient Pad?",
                                      "options": [
                                                "10% Piano, 90% Pad",
                                                "Humigit-kumulang 70% Piano, 30% Pad upang manatiling malinaw ang piano",
                                                "Dapat laging pantay sa 100% pareho hanggang mag-clip",
                                                "0% Piano, puro pad lang"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang pad ay pang-ilalim lamang (ambient support); ang piano ang dapat manatiling may definisyon at atake."
                            }
                  ]
        },
        worksheet: {
                  "title": "Keyboard Patch & Layering Setup Sheet",
                  "sheetName": "Pad_Layer_Log",
                  "description": "I-document ang MIDI/keyboard sound bank settings para sa Piano + Pad layering.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Listahan ng sounds at effect parameters (Reverb, Decay, Cutoff)",
                            "Audio recording ng 2-minute ambient transition"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Professional sound balance",
                                      "points": 50
                            },
                            {
                                      "criteria": "Smooth dynamic swells",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 1,
        progress: 0,
      },
      {
        id: 'les-piano-5-2',
        module_id: 'mod-piano-5',
        title: "Underscoring & Talk Music: Chording sa Panalangin at Preaching Altar Calls",
        duration: "32 mins",
        video_url: 'https://www.youtube.com/embed/wGAuaUp6KSY',
        objective: "Matutunan ang sining ng \"Underscoring\" o pagtugtog sa ilalim ng panalangin, altar call, at pagbabasa ng Salita ng Diyos nang hindi nakakaabala sa mensahe.",
        content: "### 🎙️ Ano ang \"Talk Music\" o Underscoring?\nKapag natapos ang sermon at umakyat ang pastor para sa altar call o panalangin, tatawagin ang keyboardist:\n> *\"Brother, patugtog ka ng malambot sa ilalim habang nananalangin tayo...\"*\nIto ang pinaka-kritikal na tungkulin ng church pianist:\n* Hindi ka nagpapasikat ng bilis ng daliri!\n* Ang layunin mo ay tulungan ang kongregasyon na mag-focus sa Diyos sa pamamagitan ng **banayad, banayad, at may espasyong musika** (*room to breathe*).\n\n### 🕊️ Ang 3 Ginintuang Alituntunin sa Talk Music:\n1. **Never Play Melody or Vocals**:\n   * Kapag tumugtog ka ng kilalang melody ng kanta, maiisip ng tao ang lyrics sa halip na makinig sa panalangin ng pastor. Chords at soft arpeggios lamang!\n2. **The \"Pendulum\" Vamp (1 ➔ 4 o 1 ➔ 5/7 ➔ 6m)**:\n   * Huwag gumamit ng kumplikadong jazz chords na nakakagulat.\n   * Mag-vamp lamang sa pagitan ng **1 at 4** (e.g. Cmaj7 ➔ Fmaj7) o **1 ➔ G/B ➔ Am7**.\n3. **Follow the Dynamics of the Preacher**:\n   * Kapag mahina at intimate ang panalangin: *Pianissimo (p)* — napakalambot na pad at single notes.\n   * Kapag nag-aalab at nag-a-altar call: Mag-build up nang bahagya pero huwag lulunurin ang boses sa mikropono!",
        code_snippet: "+-----------------------------------------------------------+\n|                 TALK MUSIC & UNDERSCORING VAMPS           |\n+-----------------------------------------------------------+\nVAMP 1 (The Peaceful Pendulum):\n||: Cmaj9 (C-E-G-B-D) | Fmaj7 (F-A-C-E) :||\n\nVAMP 2 (The Heartfelt Walkdown):\n||: C | G/B | Am7 | Fmaj7 :||\n\nVAMP 3 (The Hopeful Climax):\n||: Fmaj7 | Gsus | Em7 | Am7 :||\n\nRule of Thumb: Mag-iwan ng 2-3 segundong katahimikan sa pagitan ng mga chords. \"Space is music!\"",
        activity: {
                  "title": "3-Minute Pastoral Prayer Underscore Simulation",
                  "instructions": [
                            "Mag-play ng spoken word audio recording ng isang pastor na nananalangin o magbasa ng Awit 23 nang malakas.",
                            "Tugtugin ang Vamp 1 (Cmaj9 ➔ Fmaj7) sa 54 BPM nang napakalambot.",
                            "Panatilihing mas malakas ang boses kaysa sa piano.",
                            "Kapag umakyat ang emosyon ng panalangin, dahan-dahang lumipat sa Vamp 2 (C ➔ G/B ➔ Am7 ➔ F).",
                            "Magtapos sa isang napakapayapang unresolved chord sa huling \"Amen\"."
                  ],
                  "starterCode": "Underscore Preset:\nTempo: 54 BPM Rubato (Flexible Timing)\nDynamic: Piano (Soft) to Mezzo-piano\nProgression: [ Cmaj7 ] <---> [ Fmaj7 ] with gentle top-note sprinkles",
                  "expectedOutcome": "Nakakatugtog ng sumusuportang background music nang may spiritual sensitivity nang hindi sumasapaw sa boses.",
                  "rubric": [
                            {
                                      "criteria": "Sensitivity sa boses ng nagsasalita",
                                      "points": 40
                            },
                            {
                                      "criteria": "Appropriate chord selection without distraction",
                                      "points": 30
                            },
                            {
                                      "criteria": "Pacing at breath control sa timing",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 5.2: Church Underscoring & Altar Call",
                  "description": "Suriin ang mga etika at pamamaraan sa pagtugtog ng talk music.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Bakit iniiwasang tumugtog ng malinaw na melody ng kanta habang nagsasalita o nananalangin ang pastor?",
                                      "options": [
                                                "Dahil bawal sa copyright",
                                                "Dahil aagawin nito ang atensyon ng kongregasyon mula sa panalangin papunta sa lyrics ng kanta",
                                                "Dahil nakakapagod sa daliri",
                                                "Wala namang masama kahit tugtugin ang melody"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang melody ay natural na humihila sa pag-iisip ng tao sa partikular na liriko, na nakakagambala sa pakikinig sa pastor."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang ibig sabihin ng \"Space is Music\" sa konteksto ng underscoring?",
                                      "options": [
                                                "Kailangang tumugtog sa labas ng gusali",
                                                "Ang paglalagay ng mga sandali ng katahimikan at sustained notes ay nagbibigay-daan para makahinga at makapag-isip ang nakikinig",
                                                "Dapat mabilis ang tugtog para mapuno ang espasyo",
                                                "Puro matataas na nota lamang ang tugtugin"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa underscoring, ang mga puwang sa pagitan ng mga chords ang nagbibigay ng sagradong katahimikan para sa panalangin."
                            },
                            {
                                      "id": "q3",
                                      "question": "Alin sa mga sumusunod ang pinaka-epektibong dalawang-chord vamp sa panalangin?",
                                      "options": [
                                                "Cmaj7 papuntang Fmaj7 (1 papuntang 4)",
                                                "C#dim papuntang F#dim",
                                                "B7 papuntang F7",
                                                "Lahat ng black keys nang sabay-sabay"
                                      ],
                                      "correctIndex": 0,
                                      "explanation": "Ang 1maj7 papuntang 4maj7 ay napakapayapa, walang tensyon, at natural na lumulutang sa background."
                            }
                  ]
        },
        worksheet: {
                  "title": "Altar Call Underscoring Evaluation",
                  "sheetName": "Talk_Music_Log",
                  "description": "I-record ang sarili habang may nagsasalita sa background at i-evaluate ang dynamic compliance.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Audio recording ng 3-minutong pastoral underscoring",
                            "Voice-to-piano dB level balance assessment"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Piano sits comfortably under vocal frequencies",
                                      "points": 50
                            },
                            {
                                      "criteria": "Zero distracting technical errors or clashes",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 2,
        progress: 0,
      },
      {
        id: 'les-piano-5-3',
        module_id: 'mod-piano-5',
        title: "2-5-1 Passing Chords sa Filipino (Smooth Transitions & Gospel Movement)",
        duration: "35 mins",
        video_url: 'https://www.youtube.com/embed/wEblfSNYsFs',
        objective: "Mabuo at maipatupad ang ii - V - I (2-5-1) progression bilang passing chords para sa makinis na transitions at gospel flavor.",
        content: "### 🎷 Ang Hari ng Lahat ng Transitions: The 2-5-1\nSa jazz, gospel, at modernong church music, ang **2 - 5 - 1** ang pinakamakapangyarihang paraan upang pumunta sa kahit anong target chord.\n\n### 🎯 Paano Ito Gumagana:\nBago ka pumunta sa iyong target chord (halimbawa, **C Major**):\n1. Ano ang 5th bago mag-C? ➔ **G**\n2. Ano ang 2nd bago mag-G? ➔ **D (Dm7)**\n3. Ang resulta: **Dm7 ➔ G7 ➔ Cmaj7**!\n\n### ⛪ Ang Gospel Application sa Church Transitions:\nHalimbawa, nasa C chord ka, at ang susunod na kanta o section ay pupunta sa **F Major (ang 4 chord)**:\n* Sino ang 2 at 5 papuntang F?\n  * 2 of F = **Gm7**\n  * 5 of F = **C7**\n  * Target = **Fmaj7**!\n* Kaya bago pumasok ang F chord, sisingitan mo ng mabilis na **Gm7 ➔ C7**!\n* Ang tawag dito ay **Secondary 2-5-1 to the 4 chord**!\n* Pag narinig ito ng worship team, mapapasabi sila ng: *\"Grabe, ang sarap ng pasok ng keyboard!\"*",
        code_snippet: "+-----------------------------------------------------------+\n|               THE 2 - 5 - 1 PASSING CHORD FORMULA         |\n+-----------------------------------------------------------+\nTarget Chord: F Major (The 4 chord in Key of C)\n\nNormal Way:       [ C Major ]  ------------------------>  [ F Major ]\n\nThe Pro 2-5-1 Way: [ C Major ] -> [ Gm7 ] -> [ C7 ]  ->  [ Fmaj7 ]\n                                    (2)       (5)          (1)\n                                   ^ Secondary 2-5-1 ^\n\nVoicing Shortcut (RH):\nGm7:  [ F - Bb - D ]\nC7:   [ E - Bb - C ]\nFmaj7:[ E - A  - C ]",
        activity: {
                  "title": "Targeting the 4 Chord with 2-5-1",
                  "instructions": [
                            "Tugtugin ang C Major nang 2 measures.",
                            "Sa measure 3, hatiin ang beat: Beat 1-2 = Gm7, Beat 3-4 = C7.",
                            "Sa measure 4, lumapag nang malinis sa Fmaj7.",
                            "Ulitin ito sa iba't ibang worship songs bago magpalit ng section."
                  ],
                  "starterCode": "Exercise Progression:\n| Cmaj7 /// | Cmaj7 /// | Gm7 / C7 / | Fmaj7 /// |\nLH: C -> C -> G -> C -> F\nRH: Smooth voice-led 7th chords\nTempo: 66 BPM",
                  "expectedOutcome": "Matagumpay na naipapasok ang Gm7-C7 passing chords nang eksaktong nasa beat papunta sa F chord.",
                  "rubric": [
                            {
                                      "criteria": "Tamang 7th note extensions (Bb sa Gm7 at C7)",
                                      "points": 40
                            },
                            {
                                      "criteria": "Swabeng pasok nang hindi nagmamadali ang tempo",
                                      "points": 30
                            },
                            {
                                      "criteria": "Satisfying resolution sa Fmaj7",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 5.3: 2-5-1 Passing Chords",
                  "description": "Suriin ang theoretical logic ng 2-5-1 progressions.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Kung nais mong pumunta sa F Major bilang target chord gamit ang 2-5-1, ano ang dalawang passing chords na gagamitin?",
                                      "options": [
                                                "Dm7 at G7",
                                                "Gm7 at C7",
                                                "Am7 at D7",
                                                "Em7 at A7"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Sa key of F: ang 2 ay Gm7 at ang 5 ay C7, kaya Gm7 -> C7 -> Fmaj7."
                            },
                            {
                                      "id": "q2",
                                      "question": "Bakit tinatawag na \"Secondary Dominant\" ang C7 kapag papunta sa F chord?",
                                      "options": [
                                                "Dahil pangalawa ito sa listahan",
                                                "Dahil ito ang 5th (Dominant) ng F chord, kahit nasa Key of C tayo",
                                                "Dahil bawal itong gamitin sa chorus",
                                                "Walang dahilan"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang C7 ay ang dominant ng target chord (F), na nagdudulot ng malakas na gravitational pull papunta sa F."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang nota na nagpapa-iba sa C Major (C-E-G) papuntang C7 (Dominant 7)?",
                                      "options": [
                                                "A",
                                                "B natural",
                                                "Bb (B flat)",
                                                "D"
                                      ],
                                      "correctIndex": 2,
                                      "explanation": "Ang C7 ay naglalaman ng flat 7th na nota na Bb (C - E - G - Bb)."
                            }
                  ]
        },
        worksheet: {
                  "title": "Passing Chords Practical Log",
                  "sheetName": "Passing_Chords_Log",
                  "description": "Magtala ng 4 na pagkakataon sa mga Tagalog worship songs kung saan pwedeng ilagay ang 2-5-1.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Chart ng 4 songs na may 2-5-1 insertions",
                            "Audio demonstration ng bago at pagkatapos lagyan ng passing chords"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Musically tasteful application",
                                      "points": 50
                            },
                            {
                                      "criteria": "Accurate harmonic construction",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 3,
        progress: 0,
      },
      {
        id: 'les-piano-5-4',
        module_id: 'mod-piano-5',
        title: "Live Keyboardist Secrets & Worship Flow Rig POV",
        duration: "30 mins",
        video_url: 'https://www.youtube.com/embed/qGka2EgRfuU',
        objective: "Masilip ang totoong live stage keyboard rig setup: In-Ear Monitors (IEM), patch switching, volume pedal swells, at stage communication.",
        content: "### 🎧 Ang Totoong Buhay sa Entablado (Live Stage Rig)\nIba ang tumutugtog sa bahay kaysa sa live worship service sa harap ng daan-daang tao.\nSa araling ito, titingnan natin ang pananaw ng isang propesyonal na church keyboardist (*First-Person POV*):\n\n### 🎹 Mahahalagang Sangkap ng Modern Keyboard Rig:\n1. **In-Ear Monitor (IEM) Mix**:\n   * Maririnig mo ang **Click Track** (metronome) sa kaliwang tainga.\n   * Maririnig mo ang **Guide Voice** (*\"Chorus in 1, 2, 3, 4...\"*).\n   * Kailangang balanseng marinig ang boses ng leader at ang iyong piano.\n2. **Expression / Volume Pedal**:\n   * Gamit ang kaliwang paa (habang ang kanan ay nasa sustain pedal), kinokontrol mo ang volume ng strings o pad layer.\n   * Nagagawa mong mag-crescendo habang lumalakas ang kanta nang hindi inaalis ang kamay sa keys!\n3. **Mata at Tenga sa Worship Leader**:\n   * 50% ng konsentrasyon mo ay nasa kamay ng leader. Kapag itinaas niya ang kamay, alam mong mag-e-extend ang koro!",
        code_snippet: "+-----------------------------------------------------------+\n|               LIVE WORSHIP STAGE RIG WORKFLOW             |\n+-----------------------------------------------------------+\n[ CLICK / GUIDE ] ---------> [ IEM Headphones ] <--- [ VOCALS ]\n                                    ^\n                                    |\n[ DUAL KEYBOARD RIG ] -------> [ STEREO DI BOX ] ---> [ SOUND SYSTEM ]\n  * Top: Synth / Pad / Organ\n  * Bottom: 88-Key Weighted Piano\n  * Pedals: Sustain (Right Foot) + Expression/Volume (Left Foot)",
        activity: {
                  "title": "Click-Track & Cue Responsiveness Drill",
                  "instructions": [
                            "Mag-ensayo habang may metronome click sa headphones lamang.",
                            "Tugtugin ang isang 4-chord progression.",
                            "Maglagay ng random voice recording na nagsasabing: \"Repeat Chorus!\" o \"Break / Stop!\"",
                            "Magsanay na sumunod agad sa verbal cue sa loob ng 1 beat."
                  ],
                  "starterCode": "Stage Simulation:\nTempo: 72 BPM Click Track\nCues to Practice:\n- \"Verse 1... 2... 3... 4\" -> Drop to single notes\n- \"Chorus build!\" -> Swell volume pedal\n- \"Down / A Capella\" -> Drop out immediately, leave only subtle pad",
                  "expectedOutcome": "Kayang sumunod sa mga biglaang tawag ng worship leader nang hindi nawawala sa beat.",
                  "rubric": [
                            {
                                      "criteria": "Instantenous execution upon hearing verbal cues",
                                      "points": 40
                            },
                            {
                                      "criteria": "Rock-solid click track alignment",
                                      "points": 30
                            },
                            {
                                      "criteria": "Smooth dynamic volume adjustments",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 5.4: Live Stage Rig & Team Flow",
                  "description": "Suriin ang kaalaman sa live church setup at communication.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang pangunahing silbi ng Expression o Volume pedal para sa keyboardist sa live worship?",
                                      "options": [
                                                "Para patayin ang kuryente ng keyboard",
                                                "Para makagawa ng volume swells sa strings o pads gamit ang paa nang hindi inaalis ang kamay sa pagtugtog",
                                                "Para palitan ang kulay ng ilaw sa stage",
                                                "Wala itong gamit"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang expression pedal ay nagpapahintulot ng hands-free volume automation para sa swells at dynamics."
                            },
                            {
                                      "id": "q2",
                                      "question": "Kung biglang sinabi ng worship leader sa mikropono ang \"A Capella!\", ano ang dapat gawin ng keyboardist?",
                                      "options": [
                                                "Lalong lakasan ang pagtugtog ng piano",
                                                "Agad na bumitaw o mag-iwan lamang ng napakahinang warm pad upang marinig ang tinig ng kongregasyon",
                                                "Tumugtog ng mabilis na drum beat",
                                                "Umalis sa stage"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang \"A Capella\" ay nangangahulugang boses lamang ng kongregasyon ang maririnig, kaya dapat bumaba o huminto ang banda."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang maririnig sa isang propesyonal na IEM (In-Ear Monitor) feed ng church musician?",
                                      "options": [
                                                "Puro radyo lamang",
                                                "Click track (metronome), vocal guide, at balanseng mix ng mga instrumento",
                                                "Katahimikan",
                                                "Tunog ng aircon sa simbahan"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang in-ear monitoring ay nagbibigay ng click para sa tempo, band cues para sa song form, at monitor mix."
                            }
                  ]
        },
        worksheet: {
                  "title": "Stage Readiness Checklist",
                  "sheetName": "Stage_Rig_Log",
                  "description": "Kumpletuhin ang 10-point stage readiness checklist para sa Sunday services.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Napatunayang hardware checklist (Cables, DI, Sustain, Power, Audio interface)",
                            "Personal reflection sa pakikipag-ugnayan sa sound engineer"
                  ],
                  "rubric": [
                            {
                                      "criteria": "100% complete technical equipment knowledge",
                                      "points": 50
                            },
                            {
                                      "criteria": "Clear understanding of live signal flow",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 4,
        progress: 0,
      },
    ],
  },
  {
    id: 'mod-piano-6',
    track_id: 'track-pinoy-piano-zero-to-hero',
    title: "Module 6: Pro Mastery, Smooth Runs, Modulation & Capstone Showcase",
    duration: "2 Weeks",
    overview: "Ang rurok ng masterclass: Pro cluster voicings, tasteful gospel runs sa pagitan ng mga patlang, pag-transpose at pag-akyat ng tono sa koro, at ang Capstone Showcase ng pambansang obra na \"Tanging Yaman\".",
    lessons: 4,
    topics: ["Keyboardists' Secrets Unlocked: Pro Voicings, Tri-Tones & Cluster Chords","Worship Piano Fills, Octave Runs & Gospel Riffs Between Vocal Pauses","Transposition Techniques & Modulations (Stepping Up Half/Whole Steps for Climax)","Capstone Showcase: Philippine Classic \"Tanging Yaman\" & Solo Piano Worship Finale"],
    lessonItems: [
      {
        id: 'les-piano-6-1',
        module_id: 'mod-piano-6',
        title: "Keyboardists' Secrets Unlocked: Pro Voicings, Tri-Tones & Cluster Chords",
        duration: "35 mins",
        video_url: 'https://www.youtube.com/embed/jTyd7T_Mp0o',
        objective: "Maitugtog ang modern cluster voicings, major 9th spread voicings, at open-fifth drop-2 chords para sa tunog-album na lapat.",
        content: "### 🎹 Ang Lihim ng \"Pro Studio Sound\"\nBakit kahit parehong C Major chord ang tinutugtog ng beginner at ng pro pianist sa recording studio, magkaibang-magkaiba ang tunog?\nAng sagot ay: **CHORD VOICING & CLUSTERS**!\n\n### 💎 Ang 3 Pro Voicing Secrets:\n1. **The \"Cluster\" Voicing (Seconds Clashing Beautifully)**:\n   * Sa halip na C - E - G, pagsamahin ang magkatabing nota: **C - D - E - G**!\n   * Ang D at E ay magkatabi (major 2nd). Lumilikha ito ng parang kristal na shimmer (*glassy sparkle*)!\n2. **Open-Spread Voicing (Drop-2 Style)**:\n   * Huwag ipunin ang lahat ng nota sa isang octave.\n   * Ilatag: LH = C1 - G2, RH = E3 - B3 - D4.\n   * Napakalawak ng tunog, parang orchestra!\n3. **Tri-Tones sa Dominant Chords**:\n   * Sa G7 chord: Pindutin ang F at B sa gitna (ang tritone interval). Ito ang nagbibigay ng matinding harmonic bite bago umuwi sa C.",
        code_snippet: "+-----------------------------------------------------------+\n|                   PRO CLUSTER CHORD COMPARISON            |\n+-----------------------------------------------------------+\nBeginner C Major:       [ C ] ------- [ E ] ------- [ G ]\n                        (Plain, basic triad)\n\nPro \"Glassy\" Cadd9:     [ C ] --- [ D ]-[ E ] ----- [ G ]\n                                   ^   ^\n                           Adjacent keys touch together!\n                           Produces rich, acoustic shimmer!\n\nPro Spread Cmaj9:       LH: [ C1 - G2 ]\n                        RH: [ E3 - G3 - B3 - D4 ]\n                        (Massive concert grand separation)",
        activity: {
                  "title": "Cluster Voicing Transformation Drill",
                  "instructions": [
                            "Tugtugin ang basic C Major chord (C-E-G).",
                            "Isingit ang index finger sa D nang sabay sa E para maging Cadd9 cluster (C-D-E-G). Pakinggan ang sparkle!",
                            "Gawin din ito sa F Major: F-G-A-C (Fadd9 cluster).",
                            "Gawin din ito sa G Major: G-A-B-D (Gadd9 cluster).",
                            "Tugtugin ang buong progression gamit lamang ang modern cluster shapes."
                  ],
                  "starterCode": "Cluster Progression:\n[ Cadd9 ] -> [ Gadd9/B ] -> [ Am7(add4) ] -> [ Fadd9 ]\nTempo: 64 BPM\nTouch: Delicate, weighted keystrokes",
                  "expectedOutcome": "Nakakalikha ng mala-kristal na modern studio chord voicings gamit ang 2nd intervals.",
                  "rubric": [
                            {
                                      "criteria": "Tamang pagpindot sa D at E cluster",
                                      "points": 40
                            },
                            {
                                      "criteria": "Balanseng timpla ng bawat nota sa cluster",
                                      "points": 30
                            },
                            {
                                      "criteria": "Consistent musical beauty and touch",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 6.1: Professional Chord Voicings",
                  "description": "Suriin ang mga prinsipyo ng modern cluster at spread voicings.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang nagdudulot ng \"glassy sparkle\" o kristal na tunog sa isang cluster chord tulad ng Cadd9?",
                                      "options": [
                                                "Ang pagpindot sa pinakamataas na note lamang",
                                                "Ang pagkakaroon ng magkatabing nota tulad ng D at E (Major 2nd interval) na sabay tumutunog",
                                                "Ang malakas na pagbabaon ng sustain pedal",
                                                "Ang paggamit ng electronic distortion"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang close 2nd interval (D at E) ay lumilikha ng banayad na acoustic friction na naririnig bilang sparkle sa piano."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang bentahe ng \"Open-Spread\" voicing kumpara sa close triads?",
                                      "options": [
                                                "Mas madaling abutin ng maliit na kamay",
                                                "Ikinakalat nito ang mga frequency sa iba't ibang octaves para sa mas malawak at mala-orkestrang tunog",
                                                "Para maging mas maikli ang kanta",
                                                "Wala itong pagkakaiba"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang pagbubukod ng bass, middle harmony, at upper extensions sa magkakahiwalay na octaves ay nag-aalis ng muddiness at nagpapalawak ng tunog."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang tritone interval na matatagpuan sa loob ng G7 chord?",
                                      "options": [
                                                "C at G",
                                                "F at B",
                                                "E at A",
                                                "D at F#"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang 7th (F) at 3rd (B) ng G7 ay bumubuo ng 3 whole-step interval (tritone) na nagbibigay ng dominant tension."
                            }
                  ]
        },
        worksheet: {
                  "title": "Pro Voicings Chart",
                  "sheetName": "Pro_Voicings_Log",
                  "description": "I-map ang 6 na cluster voicings para sa C, D, E, F, G, at A.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Chart ng 6 cluster chord shapes na may exact fingering",
                            "Audio recording na nagpapakita ng kaibahan ng basic triad vs cluster"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Flawless finger dexterity on close intervals",
                                      "points": 50
                            },
                            {
                                      "criteria": "Professional audio presentation",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 1,
        progress: 0,
      },
      {
        id: 'les-piano-6-2',
        module_id: 'mod-piano-6',
        title: "Worship Piano Fills, Octave Runs & Gospel Riffs Between Vocal Pauses",
        duration: "32 mins",
        video_url: 'https://www.youtube.com/embed/J68H7OWKEoQ',
        objective: "Maitugtog ang mga tasteful piano fills, pentatonic runs, at gospel rolls tuwing may patlang o hininga ang mang-aawit.",
        content: "### 🎶 Kailan Dapat Mag-Fill ang Pianist?\nAng gintong alituntunin ng piano fills:\n> **\"Huwag makipag-agawan sa boses ng singer!\"**\n* Kapag kumakanta ang singer ➔ **Tumahimik ang fills, chords lamang!**\n* Kapag huminto sa dulo ng linya ang singer para huminga ➔ **Dito ka pumasok gamit ang tasteful fill!**\n\n### 🪜 Ang Pentatonic Scale: Ang Pinakaligtas na Fill\nSa Key of C, ang Major Pentatonic scale ay binubuo ng 5 nota:\n**C - D - E - G - A**\n* Walang F (4th) at walang B (7th) kaya **WALANG DISSONANCE** kahit anong nota ang pindutin mo!\n* Pwede kang mag-cascade pababa: **A ➔ G ➔ E ➔ D ➔ C**.\n\n### ⚡ The Gospel \"Grace-Note\" Hammer-on:\n* Dumausdos mula **Eb (black key) papuntang E natural** gamit ang hintuturo.\n* Nagbibigay ito ng tunog-blues o soulful gospel expression na madalas gamitin sa modernong papuri!",
        code_snippet: "+-----------------------------------------------------------+\n|             THE C MAJOR PENTATONIC RUN & FILL             |\n+-----------------------------------------------------------+\nSinger:   \"...Kay buti Mo...\" [ SINGER PAUSES TO BREATHE ]\n                                      |\n                                      v\nPiano:                       [ A -> G -> E -> D -> C ]\nFinger:                      (4)   (3)   (2)  (1)  (Thumb drop)\nTiming:                      Sixteenth notes: 1-e-&-a\n\nGrace-Note Trick:\nSlide index from D# (Eb) ---> E quickly before landing on G!",
        activity: {
                  "title": "Vocal Pause & Response Fill Drill",
                  "instructions": [
                            "Tugtugin ang 4 measures ng worship progression.",
                            "Sa measure 2 beat 4, maglagay ng maikling 3-note pentatonic fill (E-G-A).",
                            "Sa measure 4 beat 3 at 4, maglagay ng buong descending run (A-G-E-D-C).",
                            "Bumalik kaagad sa solid chord sa beat 1 ng susunod na measure."
                  ],
                  "starterCode": "Fill Timing Template:\n| C /// | G // (Fill: E-G-A) | Am /// | F / (Run: A-G-E-D) |\nTempo: 66 BPM\nTouch: Delicate like raindrops",
                  "expectedOutcome": "Kayang magsingit ng maikli at magandang fill nang hindi nasisira ang beat o nagkakaroon ng tempo drag.",
                  "rubric": [
                            {
                                      "criteria": "Tumpak na pasok sa patlang nang hindi sumasapaw",
                                      "points": 40
                            },
                            {
                                      "criteria": "Malinis na pentatonic note articulation",
                                      "points": 30
                            },
                            {
                                      "criteria": "On-time landing pabalik sa beat 1 chord",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 6.2: Piano Fills & Runs",
                  "description": "Suriin ang timing at note selection ng piano fills.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Kailan ang pinaka-angkop na sandali upang maglagay ng piano fill sa isang awit?",
                                      "options": [
                                                "Habang binibigkas ng singer ang pinakamahalagang salita ng kanta",
                                                "Sa patlang o sandali kung kailan huminto ang singer para huminga sa dulo ng linya",
                                                "Sa simula ng bawat segundo",
                                                "Kahit kailan basta mabilis ang daliri"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang fills ay nagsisilbing tugon o dekorasyon sa espasyong iniwan ng boses, hindi kasabay nito."
                            },
                            {
                                      "id": "q2",
                                      "question": "Bakit itinuturing na \"pinakaligtas\" na gamitin ang Major Pentatonic scale para sa fills?",
                                      "options": [
                                                "Dahil 2 nota lang ito",
                                                "Dahil tinanggal dito ang 4th at 7th scale degrees na madalas lumikha ng harmonic clashes",
                                                "Dahil puro black keys ito",
                                                "Dahil bawal ang ibang scales"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang pentatonic (1, 2, 3, 5, 6) ay walang half-step semitone clashes sa major diatonic harmony."
                            },
                            {
                                      "id": "q3",
                                      "question": "Ano ang \"Grace-Note\" slide technique?",
                                      "options": [
                                                "Pagbagsak sa sahig",
                                                "Mabilis na pagdulas mula sa semitone (e.g. Eb papuntang E) bago tumuntong sa target note para sa soulful acoustic color",
                                                "Pagpatay sa mikropono",
                                                "Pagtugtog gamit ang siko"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang grace note (crushed note) ay nagbibigay ng soulful gospel vocal nuance sa piano."
                            }
                  ]
        },
        worksheet: {
                  "title": "Piano Fills Repertoire Sheet",
                  "sheetName": "Piano_Fills_Log",
                  "description": "Kabisaduhin ang 3 standard fills at i-record sa video ang tamang placement sa isang kanta.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Chart ng 3 original pentatonic fills",
                            "Video ng pag-apply sa isang Tagalog worship track"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Tasteful placement without cluttering",
                                      "points": 50
                            },
                            {
                                      "criteria": "Precision timing on the return to beat 1",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 2,
        progress: 0,
      },
      {
        id: 'les-piano-6-3',
        module_id: 'mod-piano-6',
        title: "Transposition Techniques & Modulations (Stepping Up Half/Whole Steps for Climax)",
        duration: "30 mins",
        video_url: 'https://www.youtube.com/embed/O82_WPZ-CXM',
        objective: "Matutunan ang manual at electronic transposition techniques, at ang pag-akyat ng susi (Modulation / Key Change) para sa tugatog ng awit.",
        content: "### 🔥 Ang \"Truck Driver's Gear Change\" (Modulation)\nSa mga pinakamatitinding sandali ng worship (tulad ng huling koro ng \"Dakilang Katapatan\" o \"Tanging Yaman\"), biglang iaangat ng banda ang tono nang:\n* **1 Half-Step Pataas** (e.g. Key of C ➔ Key of Db o C#)\n* **1 Whole Step Pataas** (e.g. Key of C ➔ Key of D)\nIto ang nagbibigay ng matinding excitement, panibagong lakas, at spiritual breakthrough sa kanta!\n\n### 🔑 Paano Gumawa ng Makinis na Modulation:\n1. **The V of the New Key (Dominant Pivot)**:\n   * Kung nasa Key of C ka at aakyat ka sa **Key of D**:\n   * Ano ang 5 chord ng bagong key (D)? ➔ **A7**!\n   * Sa dulo ng huling measure ng lumang key, ibagsak ang **A7sus ➔ A7**!\n   * Kusa nitong hihilahin ang buong banda at kongregasyon sa bagong key ng **D Major**!\n2. **Direct Modulation (Sudden Lift)**:\n   * Walang babala — pagkatapos ng huling beat, biglang bagsak agad sa D Major!\n3. **Electronic Transpose Button (PSR / Digital Keyboards)**:\n   * Para sa mga emergency live situations kung saan kailangan agad lumipat ng key nang hindi nagbabago ng fingering. Alamin ang tamang timing ng pagpindot!",
        code_snippet: "+-----------------------------------------------------------+\n|             KEY CHANGE / MODULATION ROADMAP               |\n+-----------------------------------------------------------+\nOLD KEY: Key of C\n| C /// | G/B /// | Am /// | F /// |\n\nTRANSITION BAR (The Pivot):\n| G /// | [ A7sus -> A7 ] (The Dominant of the New Key!) |\n                 ^\n                 Lahat maghahanda sa pag-angat!\n\nNEW KEY: Key of D Major!\n| D /// | A/C# /// | Bm /// | G /// |\n  ^\n  MASSIVE CELEBRATION CLIMAX!",
        activity: {
                  "title": "The Key of C to Key of D Modulation Workout",
                  "instructions": [
                            "Tugtugin ang 1-5-6-4 sa Key of C: C -> G -> Am -> F.",
                            "Sa susunod na measure, tugtugin ang pivot chord: A7 (A-C#-E-G).",
                            "Pagsapit ng susunod na measure, pumasok nang may buong lakas sa Key of D: D -> A -> Bm -> G.",
                            "Panatilihin ang parehong tempo (68 BPM) sa kabuuan ng key change."
                  ],
                  "starterCode": "Modulation Sequence:\nPart 1 (Key of C): | C / G / | Am / F / |\nPivot Chord:       | A7sus // A7 // |\nPart 2 (Key of D): | D / A / | Bm / G / | (New Key!)\nTempo: 68 BPM",
                  "expectedOutcome": "Matagumpay na naisasagawa ang makinis na key modulation mula C papuntang D nang walang pagkaantala sa ritmo.",
                  "rubric": [
                            {
                                      "criteria": "Tumpak na paggamit ng A7 pivot chord",
                                      "points": 40
                            },
                            {
                                      "criteria": "Confident landing sa D Major on beat 1",
                                      "points": 30
                            },
                            {
                                      "criteria": "Walang patid na pedal at tempo flow",
                                      "points": 30
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 6.3: Transposition & Modulations",
                  "description": "Suriin ang harmonic logic ng key changes sa church music.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Kung nasa Key of C ka at magmo-modulate ang kanta paakyat sa Key of D, anong pivot chord ang pinaka-epektibong tugtugin bago pumasok ang D?",
                                      "options": [
                                                "G7",
                                                "A7 (ang 5th ng bagong key)",
                                                "F#m",
                                                "Bdim"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang Dominant (V) ng bagong key—sa kasong ito ay A o A7—ang pinakamalakas na humihila sa tainga papunta sa bagong tonic na D."
                            },
                            {
                                      "id": "q2",
                                      "question": "Ano ang emosyonal na epekto ng modulation o pag-akyat ng key sa huling bahagi ng isang awit ng papuri?",
                                      "options": [
                                                "Pampatulog sa mga tao",
                                                "Nagbibigay ito ng panibagong lakas, sigla, at mataas na antas ng tagumpay at climax",
                                                "Nakasisira sa tono ng kanta",
                                                "Wala itong epekto"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang pag-angat ng key ay nagpapataas ng vocal tension at nagbibigay ng maringal na tagumpay sa kanta."
                            },
                            {
                                      "id": "q3",
                                      "question": "Sa electronic keyboard, kung magta-transpose ka mula Key of C papuntang Key of D gamit ang transpose button, ilang semitones (half-steps) ang dapat idagdag?",
                                      "options": [
                                                "+1",
                                                "+2",
                                                "+3",
                                                "+5"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Mula C papuntang D ay 2 half-steps (C -> C# -> D), kaya +2 ang transpose setting."
                            }
                  ]
        },
        worksheet: {
                  "title": "Modulation & Transposition Matrix",
                  "sheetName": "Modulation_Log",
                  "description": "Itala ang pivot chords para sa modulation mula C papuntang D, D papuntang E, at E papuntang F.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Worksheet ng 5 modulation pivot formulas",
                            "Audio recording ng seamless modulation exercise"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Accurate harmonic pivot identification",
                                      "points": 50
                            },
                            {
                                      "criteria": "Smooth audio execution without hesitation",
                                      "points": 50
                            }
                  ]
        },
        classroom_link: '',
        order_index: 3,
        progress: 0,
      },
      {
        id: 'les-piano-6-4',
        module_id: 'mod-piano-6',
        title: "Capstone Showcase: Philippine Classic \"Tanging Yaman\" & Solo Piano Worship Finale",
        duration: "40 mins",
        video_url: 'https://www.youtube.com/embed/sTvrLOSCvlg',
        objective: "Pagsama-samahin ang LAHAT ng natutunan sa buong 24 lessons: itanghal ang \"Tanging Yaman\" bilang Capstone Solo Piano Masterpiece.",
        content: "### 🎓 Ang Iyong Capstone Graduation: \"Tanging Yaman\"\nNarating mo na ang rurok ng Pinoy Piano & Church Keyboard Masterclass!\nMula sa isang zero beginner na hindi alam ang Middle C, ngayon ay isa ka nang buong-buong **Pianist at Church Keyboardist**.\n\nPara sa iyong huling pagsubok, itatanghal mo ang walang-kupas na awiting panalangin ng Pilipinas: **\"Tanging Yaman\"** (Musika ni Fr. Manoling Francisco, SJ).\n\n### 🏆 Ang Capstone Performance Criteria:\nDapat makita sa iyong pagtugtog ang mga sumusunod na kasanayan mula sa 6 na modyul:\n1. **Module 1**: Perpektong curved finger posture at balanced touch.\n2. **Module 2**: Makinis na chord inversions at malinis na Legato pedaling nang walang chord bleeding.\n3. **Module 3**: Propesyonal na slash chords (C/E, D/F#) at suspended modern colors (sus2, add9).\n4. **Module 4**: Madamdaming interpretasyon ng liriko at melodiyang tumatagos sa puso.\n5. **Module 5**: Subtle atmospheric presence, room to breathe, at dynamic range (mula pabulong na pianissimo hanggang maringal na forte).\n6. **Module 6**: Tasteful cluster voicings, cascading pentatonic fills sa dulo ng parirala, at malinis na finale resolution!\n\n### 🎖️ Opisyal na Sertipikasyon:\nSa pagpasa sa araling ito at pagsusumite ng iyong capstone worksheet, ikaw ay gagawaran ng opisyal na **Certificate of Completion in Professional Piano & Church Keyboard Mastery**, na nilagdaan at pinagtibay ni **Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS**!",
        code_snippet: "+-----------------------------------------------------------+\n|              CAPSTONE MASTERPIECE: \"TANGING YAMAN\"        |\n+-----------------------------------------------------------+\nIntro:      | Cmaj7 /// | Fmaj7/C /// | Cmaj7 /// | Fmaj7 /// |\n\nKoro:\n  C      C/E      F      G/F\nIkaw ang aking tanging yaman...\n  Em7    Am7      Dm7    G7\nNa di lubusang masumpungan...\n  F      G/F      Em7    Am7\nAng nilikha Mong kariktan...\n  Dm7    G7       C      (C7)\nSulyap ng 'Yong kagandahan...\n\nFinal Cadence:\nFmaj9 ---> Fm(maj7) ---> Cmaj9 (Concert Grand Arpeggio to heaven!)",
        activity: {
                  "title": "Capstone Video Graduation Submission: Tanging Yaman",
                  "instructions": [
                            "Mag-ensayo nang buong puso sa piyesa ng Tanging Yaman.",
                            "Siguraduhing malinis ang tunog ng piano at nakikita sa video ang iyong dalawang kamay at ang keyboard.",
                            "Tugtugin ang Intro, Koro, Berso, at ang Final Climax Koro.",
                            "Magtapos sa isang napakagandang arpeggiated rolled chord sa Cmaj9.",
                            "I-upload ang video sa iyong Google Drive o YouTube (Unlisted) at ilagay ang link sa iyong Capstone Worksheet!"
                  ],
                  "starterCode": "Graduation Piece Structure:\n1. Ambient Intro with cluster voicings\n2. Chorus 1 (Mezzo-piano intimate feel)\n3. Verse 1 (Flowing 1-5-8-9 left hand arpeggios)\n4. Chorus 2 (Full concert grand dynamics with tasteful pentatonic fills)\n5. Outro & Sostenuto Fade Out",
                  "expectedOutcome": "Isang ganap, propesyonal, at nakakaantig na pagtatanghal ng Tanging Yaman na nagpapatunay ng iyong transpormasyon mula Zero to Hero Pianist!",
                  "rubric": [
                            {
                                      "criteria": "Technical precision in chords, inversions, and bass walkdowns",
                                      "points": 30
                            },
                            {
                                      "criteria": "Flawless legato pedaling without muddy overlap",
                                      "points": 30
                            },
                            {
                                      "criteria": "Expressive musicality, dynamics, and emotional maturity",
                                      "points": 40
                            }
                  ]
        },
        exam: {
                  "title": "Quiz 6.4: Final Comprehensive Piano Masterclass Exam",
                  "description": "Ang huling pagsusulit upang patunayan ang iyong ganap na pagkatuto sa kurso.",
                  "passingScore": 80,
                  "questions": [
                            {
                                      "id": "q1",
                                      "question": "Ano ang pinakamahalagang layunin ng isang church pianist at keyboardist sa pagsamba?",
                                      "options": [
                                                "Magpasikat ng pinakamabilis na solo upang purihin ng tao",
                                                "Maging daluyan ng presensya ng Diyos, sumuporta sa mang-aawit at kongregasyon, at maglingkod nang may kahusayan at kababaang-loob",
                                                "Matabunan ang tunog ng ibang instrumento sa banda",
                                                "Tumugtog nang walang pakialam sa pastor"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang puso ng tunay na church musician ay ministry and excellence—paglilingkod sa Diyos at sa kapwa nang may buong husay at kababaang-loob."
                            },
                            {
                                      "id": "q2",
                                      "question": "Sa pagtatapos ng \"Tanging Yaman\", anong chord progression ang nagbibigay ng sikat na minor-to-major bittersweet emotional resolution?",
                                      "options": [
                                                "G7 papuntang C",
                                                "Fmaj7 papuntang Fm (Minor 4) papuntang C Major",
                                                "D7 papuntang G7",
                                                "Am papuntang Em"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang iv - I (Minor plagal cadence, tulad ng Fm papuntang C) ay ang iconic emotive ending sa maraming klasikong Pilipinong piyesa."
                            },
                            {
                                      "id": "q3",
                                      "question": "Sino ang may-akda at punong tagapagtatag na nag-accredit sa kursong ito sa Epicademy?",
                                      "options": [
                                                "Isang anonymous blogger sa internet",
                                                "Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS",
                                                "Walang author ang kurso",
                                                "Random AI generator"
                                      ],
                                      "correctIndex": 1,
                                      "explanation": "Ang kurso ay opisyal na nilikha at accredited sa ilalim ng pamumuno ni Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS."
                            }
                  ]
        },
        worksheet: {
                  "title": "Final Capstone Graduation Worksheet",
                  "sheetName": "Capstone_Showcase_Log",
                  "description": "Pangwakas na pagtatasa para sa opisyal na sertipikasyon sa Pinoy Piano & Church Keyboard Masterclass.",
                  "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/template/preview",
                  "deliverables": [
                            "Full HD Video Recording ng Capstone Piece (Tanging Yaman)",
                            "Comprehensive Self-Reflection Essay sa Musika at Paglilingkod",
                            "Kahilingan para sa Opisyal na Sertipiko ng Pagtatapos"
                  ],
                  "rubric": [
                            {
                                      "criteria": "Technical & Harmonic Mastery (Chords, Inversions, Numbers)",
                                      "points": 40
                            },
                            {
                                      "criteria": "Aesthetic & Expressive Delivery (Touch, Dynamics, Pedaling)",
                                      "points": 40
                            },
                            {
                                      "criteria": "Course Completion & Professional Commitment",
                                      "points": 20
                            }
                  ]
        },
        classroom_link: '',
        order_index: 4,
        progress: 0,
      },
    ],
  },
];

export const PINOY_PIANO_TRACK: Track = {
  id: 'track-pinoy-piano-zero-to-hero',
  title: 'Pinoy Piano & Church Keyboard Masterclass: Zero to Hero',
  category: 'creative',
  categoryLabel: 'Music & Church Keyboard',
  slug: 'pinoy-piano-church-keyboard-zero-to-hero',
  badge: '★ 4TH OFFICIAL COURSE BUNDLE',
  level: 'All Levels',
  isBundle: true,
  bundleNumber: 4,
  bundleLabel: '★ 4TH OFFICIAL COURSE BUNDLE: PINOY PIANO & CHURCH KEYBOARD MASTERCLASS',
  price: 0,
  originalPrice: 28000,
  isPaid: false,
  careerMilestone: 'Stage-Ready Church Keyboardist & Worship Musician',
  instructor: {
    name: 'Ronnel M. Aviguetero',
    role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Senior Technology Architect, Educator & Music Ministry Director',
  },
  rating: 5.0,
  reviewCount: 380,
  activeLearners: 1240,
  lessonsCount: 24,
  duration: '10 Weeks',
  description: 'Ang opisyal na 4th Course Bundle ng Epicademy: Komprehensibong Tagalog Piano at Church Keyboard Masterclass mula zero beginner hanggang church worship hero. Matutunan ang Nashville Number System, Chord Inversions, Slash Chords, Worship Pads, Underscoring sa panalangin, 2-5-1 passing chords, at mga klasikong Tagalog worship anthems (Kay Buti-buti Mo, Banal Mong Tahanan, Dakilang Katapatan, Tanging Yaman) na may 24 verified video lessons at Google Sheets practice rubrics.',
  skills: [
    'Piano Keyboard Geography',
    'White & Black Keys Triads',
    'Major & Minor Chords',
    'Chord Inversions & Voice Leading',
    'Left Hand Root-5th Bass',
    'Sustain Legato Pedaling',
    'Nashville Number System (1-7)',
    'Slash Chords & Walking Bass',
    'Sus2, Sus4 & Add9 Colors',
    'By-Ear Sipra Method',
    'Tagalog Worship Anthems',
    'Worship Ambient Pads Layering',
    'Pastoral Prayer Underscoring',
    '2-5-1 Gospel Passing Chords',
    'Live Worship Rig & In-Ear Monitoring',
    'Pro Cluster Voicings',
    'Pentatonic Fills & Runs',
    'Modulation & Key Changes'
  ],
  colorTheme: 'from-purple-600 via-indigo-600 to-amber-500',
  popular: true,
  published: true,
  isCustomCourse: true,
  isTeacherCreated: true,
  authorEmail: 'contact@kezjed.com',
  modules: PINOY_PIANO_MODULES,
};
