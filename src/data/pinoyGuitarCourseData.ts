// PINOY RHYTHM GUITAR MASTERCLASS: ZERO TO HERO (TAGALOG ONLINE RHYTHM GUITAR COURSE)
// Authored and Accredited strictly by:
// Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS
// Lead Instructor, ICT Educator & Church Musician

import type { Track, ActivityItem, ExamItem, WorksheetItem } from '../types';

export interface GuitarLesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  videoTitle: string;
  objective: string;
  theoryContent: string;
  codeSnippet: string;
  activity?: ActivityItem;
  exam?: ExamItem;
  worksheet?: WorksheetItem;
}

export interface GuitarModule {
  title: string;
  overview: string;
  duration: string;
  lessons: GuitarLesson[];
}

export const PINOY_GUITAR_MODULES: GuitarModule[] = [
  {
    "title": "Modyul 1: Gitara 101: Anatomy, Pagtono, Postura at Unang Open Chords",
    "overview": "Magsimula sa zero: Kilalanin ang bawat bahagi ng gitara (Headstock, Frets, Soundhole, Bridge), wastong postura at paghawak ng pick, paano magtono gamit ang tuner, at matutunan ang unang open chords (Em, Am, C, G, D) nang walang fret buzz.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-guitar-1-1",
        "title": "Aralin 1.1: Anatomy ng Gitara, Proper Posture & Pick Holding",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=QPuFu5Uu_0k",
        "videoTitle": "Guitar Chord finger positioning technique (beginners) - Pareng Don Tutorials",
        "objective": "Matutunan ang mga pangunahing bahagi ng gitara, wastong postura sa pag-upo, at komportableng paghawak ng gitara pick (plectrum) nang walang labis na tensyon.",
        "theoryContent": "Maligayang pagdating sa Pinoy Rhythm Guitar Masterclass! Sa unang araling ito, aalisin natin ang anumang takot mo sa paghawak ng gitara.\n\n1. MGA PANGUNAHING BAHAGI NG GITARA:\n• Headstock & Tuning Pegs: Sa dulo ng leeg kung saan nakakabit ang mga pihitan para sa pagtotono.\n• Nut: Ang puting gabay sa fret 0 na nagdidikta ng espasyo ng mga kuwerdas.\n• Fretboard & Frets: Ang kahoy na hinahawakan ng kaliwang kamay na may metal wires (frets). Dito nabubuo ang iba't ibang nota.\n• Body & Soundhole: Ang katawan ng acoustic guitar na nagpapalakas ng tunog (resonance cavity).\n• Bridge & Saddles: Dito nakakabit ang kabilang dulo ng mga kuwerdas.\n\n2. PAGBILANG NG MGA KUWERDAS (STRING NUMBERING):\n• 1st String: Pinakamanipis (High E) - nasa pinaka-ibaba.\n• 2nd String: B\n• 3rd String: G\n• 4th String: D\n• 5th String: A\n• 6th String: Pinakamataba (Low E) - nasa pinaka-itaas.\n\n3. PROPER PICK HOLDING (PAGHAWAK NG PLECTRUM):\nIpatong ang pick sa gilid ng unang buko ng iyong hintuturo (index finger), at ipitin gamit ang thumb. Dapat humigit-kumulang 3-5mm lang ng dulo ng pick ang nakausli. Huwag pigain nang sobrang higpit upang hindi mangawit ang iyong pulso!",
        "codeSnippet": "// GUITAR ANATOMY AT NUMBERING OVERVIEW:\n\nHeadstock: [Peg 6] [Peg 5] [Peg 4]  <-- Low Pitch Strings (E, A, D)\n           [Peg 1] [Peg 2] [Peg 3]  <-- High Pitch Strings (E, B, G)\n\nKuwerdas mula Ibaba pataas:\n1st String (High E) - Pinakamanipis\n2nd String (B)\n3rd String (G)\n4th String (D)\n5th String (A)\n6th String (Low E)  - Pinakamataba\n\nProper Pick Grip:\nThumb flat sa ibabaw + Index finger nakakurbang suporta sa ilalim.\nWrist: Maluwag at relaks tulad ng pagpalo ng flyswatter.",
        "activity": {
          "title": "Gawaing Praktikal 1.1: Posture Check at Pick Holding Drill",
          "instructions": [
            "Umupo nang tuwid sa isang silya nang walang armrest. Ipatong ang kurba ng gitara sa iyong kanang hita.",
            "Tiyaking bahagyang naka-angat ang leeg ng gitara (mga 30-45 degrees pataas) upang madaling maabot ng kaliwang kamay.",
            "Hawakan ang pick sa pagitan ng thumb at hintuturo nang may tamang clearance (3-5mm).",
            "Magsagawa ng 30 mababagal na downstroke sa bawat bukas na kuwerdas (6th string papuntang 1st string) gamit ang wrist motion."
          ],
          "starterCode": "// Checklist sa Wastong Postura at Pick Grip:\n[ ] Nakapatong ang gitara sa hita nang walang baluktot na likod\n[ ] Thumb at hintuturo ang may hawak sa pick; relaks ang ibang daliri\n[ ] Relaks ang kanang balikat (hindi nakataas o naninigas)\n[ ] Ang leeg ng gitara ay bahagyang naka-angat",
          "expectedOutcome": "Nakatutugtog ng malinis na open strings nang walang paninigas ng balikat at hindi nabibitawan ang pick."
        },
        "exam": {
          "id": "exam-guitar-1-1",
          "title": "Pagsusulit 1.1: Anatomy at Paghawak ng Gitara",
          "description": "Subukin ang iyong kaalaman sa mga bahagi ng gitara at wastong gawi sa paghawak.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-1-1-1",
              "question": "Alin sa mga sumusunod ang tamang pagkakasunod-sunod ng mga kuwerdas mula pinakamanipis (1st) hanggang pinakamataba (6th)?",
              "options": [
                "High E, B, G, D, A, Low E",
                "Low E, A, D, G, B, High E",
                "C, D, E, F, G, A",
                "A, B, C, D, E, F"
              ],
              "correctIndex": 0,
              "explanation": "Ang 1st string sa ilalim ay High E, sinusundan ng 2nd (B), 3rd (G), 4th (D), 5th (A), at 6th (Low E)."
            },
            {
              "id": "q-gt-1-1-2",
              "question": "Bakit hindi dapat sobrang higpit ang pagpisil sa guitar pick habang tumutugtog?",
              "options": [
                "Dahil maninigas ang pulso at magiging matigas o mabigat ang tunog ng strumming",
                "Dahil mapuputol agad ang kuwerdas ng gitara",
                "Dahil bibitaw ang tuning peg",
                "Dahil magiging flat ang tono ng gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang sobrang higpit na kapit sa pick ay nagdudulot ng paninigas ng pulso at braso, na nagiging sanhi ng matigas at hindi kontroladong tunog."
            },
            {
              "id": "q-gt-1-1-3",
              "question": "Anong bahagi ng gitara ang nagsisilbing vibration amplifier at resonance cavity sa acoustic guitar?",
              "options": [
                "Body at Soundhole",
                "Headstock",
                "Truss Rod",
                "Pickguard"
              ],
              "correctIndex": 0,
              "explanation": "Ang guwang na katawan (hollow body) at soundhole ang nagpapalakas ng tunog ng vibrating strings sa isang acoustic guitar."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.1: Ergonomics and String Picking Diary",
          "sheetName": "Gitara_Posture_Log",
          "description": "Itala ang iyong posture, pick feel, at kaginhawaan sa pagtugtog sa unang 7 araw.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1guitar-posture-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Pagsukat ng taas ng silya at anggulo ng gitara.",
            "Talaan ng 5 minutong open string alternate picking drill araw-araw.",
            "Pagsusuri kung may pananakit sa pulso o balikat."
          ],
          "rubric": [
            { "criteria": "Proper Posture & Stability", "points": 35 },
            { "criteria": "Pick Angle & Tone Clarity", "points": 35 },
            { "criteria": "Relaxed Wrist Motion", "points": 30 }
          ]
        }
      },
      {
        "id": "les-guitar-1-2",
        "title": "Aralin 1.2: Paano Magtono ng Gitara (Standard E-A-D-G-B-E Tuning)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=A3oNAlw7GC8",
        "videoTitle": "Paano mag tono ng gitara - How to tune a guitar - Pareng Don Tutorials",
        "objective": "Matutunan ang standard guitar tuning (E-A-D-G-B-E), tamang paggamit ng digital/clip-on tuner o smartphone app, at manual relative tuning sa 5th fret.",
        "theoryContent": "Ang isang de-kalidad na gitara ay walang silbi kung sintunado ito! Bago magsimula ng kahit anong kanta, obligasyon ng rhythm guitarist na tiyaking 100% in-tune ang bawat kuwerdas.\n\n1. STANDARD GUITAR TUNING PITCHES:\n• 6th String (Low E) = 82.4 Hz (Mababang E)\n• 5th String (A) = 110 Hz\n• 4th String (D) = 146.8 Hz\n• 3rd String (G) = 196 Hz\n• 2nd String (B) = 246.9 Hz\n• 1st String (High E) = 329.6 Hz (Mataas na E)\n\n2. MNEMONIC PARA MADALING MATANDAAN:\n• Eddie (E) - Ate (A) - Dynamite (D) - Good (G) - Bye (B) - Eddie (E)\n\n3. MGA TERMINOLOHIYA SA PAGTOTONO:\n• Flat (b): Mababa ang tunog. Kailangang higpitan ang pihitan (turn peg counter-clockwise karaniwan) upang umakyat ang tono.\n• Sharp (#): Mataas ang tunog. Kailangang luwagan nang kaunti ang pihitan.\n• In-Tune: Nasa gitna ang karayom ng tuner at nagiging berde (green indicator).\n\n4. TIP SA PROPER TUNING:\nPalaging 'tune up' sa tamang nota (mula sa mababa paakyat sa tamang pitch) upang hindi lumuwag ang string tension habang tumutugtog!",
        "codeSnippet": "// STANDARD GUITAR TUNING CHART:\n\nString 6: Low E  (Eddie)\nString 5: A      (Ate)\nString 4: D      (Dynamite)\nString 3: G      (Good)\nString 2: B      (Bye)\nString 1: High E (Eddie)\n\nRelative Tuning Reference (5th Fret Method):\n5th fret on String 6 = Open String 5 (A)\n5th fret on String 5 = Open String 4 (D)\n5th fret on String 4 = Open String 3 (G)\n4th fret on String 3 = Open String 2 (B) <-- TANDAAN: 4th fret lang dito!\n5th fret on String 2 = Open String 1 (E)",
        "activity": {
          "title": "Gawaing Praktikal 1.2: Pagtotono mula sa Sintunadong Gitara",
          "instructions": [
            "I-download ang libreng GuitarTuna app o gumamit ng physical clip-on tuner.",
            "Bahagyang luwagan ang bawat kuwerdas upang maging flat ito.",
            "Simulan sa 6th string (Low E), patunugin nang malinaw at dahan-dahang iikot ang peg hanggang maging berde ang gitna.",
            "Ulitin sa strings 5, 4, 3, 2, at 1. Pagkatapos, balikan ang string 6 at i-recheck ang buong gitara dahil nahila ang neck tension."
          ],
          "starterCode": "// Daily Tuning Checklist:\n[ ] 6th String (E) - Berde sa gitna\n[ ] 5th String (A) - Berde sa gitna\n[ ] 4th String (D) - Berde sa gitna\n[ ] 3rd String (G) - Berde sa gitna\n[ ] 2nd String (B) - Berde sa gitna\n[ ] 1st String (E) - Berde sa gitna",
          "expectedOutcome": "Kayang i-tono ang buong gitara sa loob ng mas mababa sa 90 segundo nang may kumpiyansa."
        },
        "exam": {
          "id": "exam-guitar-1-2",
          "title": "Pagsusulit 1.2: Siyensya ng Pagtotono",
          "description": "Subukin ang iyong kaalaman sa standard pitches at paraan ng pagtotono.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-1-2-1",
              "question": "Ano ang ibig sabihin kapag ang iyong guitar tuner ay nagpapakita ng 'Flat' (b) na simbolo?",
              "options": [
                "Mababa ang tono ng kuwerdas at kailangan itong higpitan paakyat",
                "Mataas ang tono ng kuwerdas at kailangan itong luwagan",
                "Nasa tamang tono na ang kuwerdas",
                "Putol na ang kuwerdas"
              ],
              "correctIndex": 0,
              "explanation": "Kapag Flat (b), kulang sa tensyon ang kuwerdas kaya mas mababa ang frequency nito kaysa sa target na nota. Kailangan itong higpitan."
            },
            {
              "id": "q-gt-1-2-2",
              "question": "Sa 5th-fret manual relative tuning method, aling kuwerdas ang pinipindot sa 4th fret sa halip na 5th fret?",
              "options": [
                "3rd String (G) upang itono ang 2nd String (B)",
                "6th String (E) upang itono ang 5th String (A)",
                "4th String (D) upang itono ang 3rd String (G)",
                "2nd String (B) upang itono ang 1st String (E)"
              ],
              "correctIndex": 0,
              "explanation": "Dahil sa standard tuning interval na Major 3rd sa pagitan ng G at B strings, ang 4th fret ng G string ang kaparehong pitch ng bukas na B string."
            },
            {
              "id": "q-gt-1-2-3",
              "question": "Bakit inirerekomenda na i-recheck ang 6th string matapos itono ang lahat ng anim na kuwerdas?",
              "options": [
                "Dahil ang pinagsamang tensyon ng lahat ng kuwerdas ay bahagyang humihila sa leeg ng gitara",
                "Dahil madaling maubos ang baterya ng tuner",
                "Dahil lumalambot ang kahoy kapag pinatugtog",
                "Dahil kailangang palaging magpalit ng pick"
              ],
              "correctIndex": 0,
              "explanation": "Ang kabuuang tension ng anim na kuwerdas ay umaabot sa 150-180 lbs, na bahagyang nagba-flex sa neck ng gitara, kaya kailangan ng pinal na recheck."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.2: Daily Guitar Tuning Log",
          "sheetName": "Guitar_Tuning_Log",
          "description": "Itala ang mga oras at araw ng pagtotono, at ang deviation ng bawat string.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1guitar-tuning-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng tuning status (Flat, Sharp, In-Tune) bago mag-practice.",
            "Pagtukoy sa kuwerdas na pinakamabilis mawala sa tono.",
            "Talaan ng manual 5th-fret ear matching verification."
          ],
          "rubric": [
            { "criteria": "Tuning Accuracy & Consistency", "points": 40 },
            { "criteria": "Speed of Tuning Process", "points": 30 },
            { "criteria": "Ear Validation Skill", "points": 30 }
          ]
        }
      },
      {
        "id": "les-guitar-1-3",
        "title": "Aralin 1.3: Unang 3 Open Chords (Em, Am, C) & Finger Positioning",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=H6K2bRj6RDQ",
        "videoTitle": "Guitar Tutorial for Beginners in 5 minutes | Basic guitar lessons (2/30) - Pareng Don Tutorials",
        "objective": "Matutunan ang unang tatlong mahahalagang open chords: E minor (Em), A minor (Am), at C major (C), tamang daliri, at pagpindot gamit ang mga dulo ng daliri.",
        "theoryContent": "Ngayong nasa tono na ang iyong gitara, oras na para lumikha ng musika! Magsisimula tayo sa tatlong open chords na magkakamag-anak at may napakalapit na pwesto ng daliri.\n\n1. FINGER NUMBERING SYSTEM:\n• 1 = Hintuturo (Index Finger)\n• 2 = Hinlalato (Middle Finger)\n• 3 = Palasingsingan (Ring Finger)\n• 4 = Kalingkingan (Pinky Finger)\n\n2. ANG TATLONG CHORDS:\n• E Minor (Em): Ang pinakamadaling chord! Daliri 2 sa 5th string (2nd fret), at Daliri 3 sa 4th string (2nd fret). Lahat ng ibang kuwerdas ay bukas (open). Patunugin ang lahat ng 6 na kuwerdas!\n• A Minor (Am): Mula sa Em, ibaba ang daliri 2 at 3 nang isang kuwerdas pababa (nasa 4th at 3rd strings na), at ilagay ang daliri 1 sa 2nd string (1st fret). Patunugin mula 5th string pababa!\n• C Major (C): Mula sa Am, iwan ang daliri 1 at 2 sa kanilang pwesto! Ilipat lamang ang daliri 3 paakyat sa 5th string (3rd fret). Ito ang 'Anchor Finger' secret na nagpapadali sa paglipat!\n\n3. TIP SA MALINIS NA PAGPINDOT:\nTumuntong gamit ang pinakadulo ng daliri (fingertips) tulad ng ballerina shoes, upang hindi sumayad ang taba ng daliri sa katabing kuwerdas.",
        "codeSnippet": "// ASCII CHORD CHARTS (OPEN CHORDS):\n\n   E Minor (Em)           A Minor (Am)           C Major (C)\n   e|---|---|---|         e|---|---|---|         e|---|---|---|\n   B|---|---|---|         B|-1-|---|---|         B|-1-|---|---|\n   G|---|---|---|         G|---|-3-|---|         G|---|---|---|\n   D|---|-3-|---|         D|---|-2-|---|         D|---|-2-|---|\n   A|---|-2-|---|         A|---|---|---|         A|---|---|-3-|\n   E|---|---|---|         E|---|---|---| (X)     E|---|---|---| (X)\n     1   2   3              1   2   3              1   2   3 (Frets)\n\nFingers:                Fingers:                Fingers:\n2: Middle               1: Index                1: Index\n3: Ring                 2: Middle, 3: Ring      2: Middle, 3: Ring",
        "activity": {
          "title": "Gawaing Praktikal 1.3: Clean Ringing Test sa Em, Am, at C",
          "instructions": [
            "Bumuo ng Em chord. Patunugin ang bawat kuwerdas isa-isa (arpeggio) mula 6th hanggang 1st string. Siguraduhing walang pumapaltos o patay na tunog.",
            "Lumipat sa Am chord. Patunugin mula 5th string pababa.",
            "Iwan ang daliri 1 at 2, at itaas ang daliri 3 papunta sa 5th string 3rd fret para mabuo ang C major.",
            "Magsagawa ng tig-10 mababagal na downstroke sa bawat chord, binibilang ang 1-2-3-4."
          ],
          "starterCode": "// Clean Note Audit Checklist:\nEm: [ ] 6th [ ] 5th [ ] 4th [ ] 3rd [ ] 2nd [ ] 1st (Lahat malinaw)\nAm: [x] 6th mute [ ] 5th [ ] 4th [ ] 3rd [ ] 2nd [ ] 1st\nC : [x] 6th mute [ ] 5th [ ] 4th [ ] 3rd [ ] 2nd [ ] 1st",
          "expectedOutcome": "Lahat ng 3 chords ay tumutunog nang buo at kristal na malinaw nang walang muffled strings."
        },
        "exam": {
          "id": "exam-guitar-1-3",
          "title": "Pagsusulit 1.3: Em, Am, at C Chords",
          "description": "Subukin ang iyong kaalaman sa pwesto ng mga daliri at ugnayan ng chords.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-1-3-1",
              "question": "Ilang daliri lamang ang kailangan upang pindutin ang standard E minor (Em) open chord?",
              "options": [
                "2 daliri (karaniwang middle at ring fingers sa 2nd fret)",
                "1 daliri lamang",
                "3 daliri",
                "4 na daliri kasama ang pinky"
              ],
              "correctIndex": 0,
              "explanation": "Ang Em chord ay nangangailangan lamang ng dalawang daliri sa 2nd fret ng 5th at 4th strings."
            },
            {
              "id": "q-gt-1-3-2",
              "question": "Kapag lumilipat mula sa A minor (Am) papuntang C Major (C), aling mga daliri ang HINDI kailangang galawin o tanggalin sa fretboard?",
              "options": [
                "Daliri 1 (hintuturo) at Daliri 2 (hinlalato)",
                "Daliri 3 (ring finger)",
                "Lahat ng tatlong daliri ay dapat tanggalin",
                "Ang hinlalaki (thumb) lamang"
              ],
              "correctIndex": 0,
              "explanation": "Sa Am at C chords, magkapareho ang posisyon ng Daliri 1 (2nd string, 1st fret) at Daliri 2 (4th string, 2nd fret). Ang Daliri 3 lamang ang lumilipat sa 5th string 3rd fret."
            },
            {
              "id": "q-gt-1-3-3",
              "question": "Ano ang pangunahing dahilan kung bakit nagkakaroon ng patay na tunog (muffled/dead string) ang 1st string habang pinipindot ang C chord?",
              "options": [
                "Sumasayad ang ilalim o taba ng hintuturo (index finger) sa 1st string dahil hindi nakakurbang mabuti ang daliri",
                "Dahil lumang kuwerdas ang nakakabit",
                "Dahil masyadong manipis ang pick",
                "Dahil masyadong malapit ang kamay sa bridge"
              ],
              "correctIndex": 0,
              "explanation": "Dapat arched (nakabalantok) ang bawat daliri upang ang dulo lamang ng daliri ang tumatama sa kuwerdas nang hindi nasasaling ang katabi."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.3: Em-Am-C Transition Accuracy Rubric",
          "sheetName": "First_Chords_Log",
          "description": "Itala ang iyong bilis at kalinisan sa pagpapalitan ng Em, Am, at C.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1first-chords-rubric-template/edit?usp=sharing",
          "deliverables": [
            "Bilang ng malinis na chord transitions kada minuto.",
            "Talaan ng mga kuwerdas na madalas mag-muffle.",
            "7-araw na consistency log."
          ],
          "rubric": [
            { "criteria": "Note Clarity (No Buzz/Mutes)", "points": 40 },
            { "criteria": "Anchor Finger Efficiency", "points": 30 },
            { "criteria": "Smooth Rhythm Flow", "points": 30 }
          ]
        }
      },
      {
        "id": "les-guitar-1-4",
        "title": "Aralin 1.4: Cowboy Chords (G, D, A, E) nang Walang Fret Buzzing",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=TygIhcR5rgY",
        "videoTitle": "PAANO MATUTONG MAGGITARA | Basic Guitar Tutorial for Beginners Tagalog - Sir Nonito",
        "objective": "Kabisaduhin ang natitirang open 'cowboy' chords: G Major, D Major, A Major, at E Major. Ayusin ang arko ng daliri upang maiwasan ang nakakairitang fret buzz.",
        "theoryContent": "Kumpletuhin natin ang pinakamakapangyarihang open chords sa kasaysayan ng gitara—ang mga 'Cowboy Chords' na bumubuo sa 90% ng mga paborito mong OPM at pop songs!\n\n1. ANG BAGONG MGA CHORDS:\n• G Major (G): Daliri 2 sa 6th string (3rd fret), Daliri 1 sa 5th string (2nd fret), at Daliri 3 o 4 sa 1st string (3rd fret). Ang buong gitara ay tumutunog na masaya at matunog!\n• D Major (D): Ang tatsulok na hugis (triangle shape). Daliri 1 sa 3rd string (2nd fret), Daliri 3 sa 2nd string (3rd fret), at Daliri 2 sa 1st string (2nd fret). Patunugin mula 4th string (open D) pababa!\n• E Major (E): Katulad ng E minor, ngunit may dagdag na Daliri 1 sa 3rd string (1st fret). Ang pinakabuo at malalim na open chord sa gitara.\n• A Major (A): Tatlong daliri (1, 2, 3 o 2, 3, 4) na nakapila sa 2nd fret ng strings 4, 3, at 2. Patunugin mula 5th string pababa!\n\n2. ANG SIYENSYA NG FRET BUZZ AT PAANO ITO GAGAMUTIN:\n• Sanhi 1: Masyadong malayo ang daliri sa fret wire (nasa gitna o likod ng fret box). Solusyon: Ilapit ang daliri mga 1-2mm sa likod ng metal fret wire.\n• Sanhi 2: Kulang sa diin ng fingertip. Solusyon: Gamitin ang bigat ng braso (arm weight) sa halip na pisilin ang hinlalaki.",
        "codeSnippet": "// ASCII CHORD CHARTS (G, D, E, A):\n\n     G Major (G)             D Major (D)             E Major (E)             A Major (A)\n   e|---|---|-3-|         e|---|-2-|---|         e|---|---|---|         e|---|---|---|\n   B|---|---|---|         B|---|---|-3-|         B|---|---|---|         B|---|-3-|---|\n   G|---|---|---|         G|---|-1-|---|         G|-1-|---|---|         G|---|-2-|---|\n   D|---|---|---|         D|---|---|---|         D|---|-3-|---|         D|---|-1-|---|\n   A|---|-1-|---|         A|---|---|---| (X)     A|---|-2-|---|         A|---|---|---|\n   E|---|---|-2-|         E|---|---|---| (X)     E|---|---|---|         E|---|---|---| (X)\n     1   2   3 (Frets)      1   2   3 (Frets)      1   2   3 (Frets)      1   2   3 (Frets)\n\nTip sa D Chord: Huwag patunugin ang 6th at 5th strings (Low E at A).",
        "activity": {
          "title": "Gawaing Praktikal 1.4: The 4-Chord Pop Loop Drill (G - D - Em - C)",
          "instructions": [
            "Subukin ang pinakasikat na chord progression sa mundo: G -> D -> Em -> C.",
            "Tig-aapat (4) na banayad na downstrokes sa bawat chord.",
            "Bantayan ang 1st string sa D chord at 2nd string sa C chord upang matiyak na walang fret buzz.",
            "Ulitin ang loop nang 5 beses nang tuloy-tuloy nang hindi humihinto ang pulso."
          ],
          "starterCode": "// 4-Chord Pop Loop Sequence:\n[G Major]  -> 1, 2, 3, 4 (Lahat ng 6 strings)\n[D Major]  -> 1, 2, 3, 4 (Strings 4 to 1)\n[E Minor]  -> 1, 2, 3, 4 (Lahat ng 6 strings)\n[C Major]  -> 1, 2, 3, 4 (Strings 5 to 1)",
          "expectedOutcome": "Nakatutugtog ng G-D-Em-C progression nang may malinaw na nota at walang tunog ng buzzing."
        },
        "exam": {
          "id": "exam-guitar-1-4",
          "title": "Pagsusulit 1.4: G, D, A, E at Fret Buzz Prevention",
          "description": "Subukin ang kaalaman sa pagpwesto ng daliri at pag-iwas sa tunog ng buzzing.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-1-4-1",
              "question": "Saan dapat ilagay ang daliri sa loob ng fret space upang maiwasan ang fret buzz nang hindi kailangang pisilin nang sobrang lakas?",
              "options": [
                "Malapit mismo sa likod ng metal fret wire (mga 1-2 mm bago ang fret)",
                "Sa gitna mismo ng kahoy ng fret",
                "Sa pinakalikod malapit sa naunang fret",
                "Nakatungtong sa ibabaw mismo ng metal wire"
              ],
              "correctIndex": 0,
              "explanation": "Ang pinakamalinis at hindi nangangailangan ng labis na lakas na tunog ay nakukuha kapag ang daliri ay nakapwesto 1-2 mm sa likod ng metal fret wire."
            },
            {
              "id": "q-gt-1-4-2",
              "question": "Aling mga kuwerdas ang HINDI dapat patunugin (dapat i-mute o iwasan) kapag nag-i-strum ng standard D Major open chord?",
              "options": [
                "6th String (Low E) at 5th String (A)",
                "1st String (High E)",
                "3rd String (G)",
                "Wala, lahat ng kuwerdas ay pinapatunog sa D chord"
              ],
              "correctIndex": 0,
              "explanation": "Ang root note ng D chord ay ang bukas na 4th string (D). Ang 6th at 5th strings ay hindi kabilang sa triad at nagpapadumi sa tunog kapag nasama."
            },
            {
              "id": "q-gt-1-4-3",
              "question": "Ano ang pagkakaiba ng daliri sa E Major kumpara sa E Minor chord?",
              "options": [
                "Ang E Major ay may dagdag na daliri 1 sa 3rd string (1st fret), samantalang ang E minor ay bukas ang 3rd string",
                "Ang E Major ay may 4 na daliri",
                "Ang E Major ay hindi pinapatunog ang 6th string",
                "Walang pinagkaiba sa pwesto ng daliri"
              ],
              "correctIndex": 0,
              "explanation": "Ang 3rd string 1st fret (G# note) ang nagbibigay ng Major 3rd interval na siyang nagpapaiba sa E Major kaysa sa E Minor (G natural)."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.4: Cowboy Chords Mastery Checklist",
          "sheetName": "Cowboy_Chords_Log",
          "description": "Subaybayan ang paglipat ng G, D, A, at E chords nang walang buzzing.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1cowboy-chords-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng malinis na G-D-Em-C loops sa 60 BPM.",
            "Pagtatala ng fret buzz occurrence bawat chord.",
            "Video recording submission ng 1-minutong loop."
          ],
          "rubric": [
            { "criteria": "Zero Fret Buzzing", "points": 40 },
            { "criteria": "Clean Root Notes (No Wrong Strings)", "points": 35 },
            { "criteria": "Smooth Transition Without Stopping", "points": 25 }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 2: Strumming Mechanics, Pulso at Smooth Chord Transitions",
    "overview": "Buuin ang motor engine ng rhythm guitarist: Matutunan ang universal strumming pattern (D-D-U-U-D-U), metronome habit, pivot finger switching secrets, at ang harana waltz (3/4 at 6/8 slow ballads).",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-guitar-2-1",
        "title": "Aralin 2.1: Pangunahing Strumming Patterns & Down/Up Motion",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=OBh2QpFVsRE",
        "videoTitle": "Guitar Strumming Patterns/Exercises - guitar tutorial for beginners - Pareng Don Tutorials",
        "objective": "Matutunan ang 'Universal Strumming Pattern' (Down-Down-Up-Up-Down-Up), tuloy-tuloy na pendulum motion ng kanang kamay, at tamang anggulo ng pick sa kuwerdas.",
        "theoryContent": "Ang isang gitarista na maraming alam na chords pero mahina ang strumming ay hindi kailanman magiging masarap pakinggan sa banda. Ang strumming ang tibok ng puso ng bawat awitin!\n\n1. ANG PENDULUM PRINCIPLE (MOTOR ENGINE):\nAng iyong kanang kamay ay dapat gumagalaw nang parang pendulum ng orasan sa steady na 8th notes:\n• Beat 1: DOWN | Beat &: UP\n• Beat 2: DOWN | Beat &: UP\n• Beat 3: DOWN | Beat &: UP\n• Beat 4: DOWN | Beat &: UP\nKahit hindi mo tamaan ang kuwerdas sa ilang kumpas, ang iyong kamay ay PATULOY na gumagalaw pataas at pababa nang walang hinto!\n\n2. ANG UNIVERSAL STRUMMING PATTERN:\n• Count: 1   &   2   &   3   &   4   &\n• Strum: D       D   U       U   D   U\n• Bigkas: DOWN ... DOWN-UP ... UP-DOWN-UP\n\n3. ANGGULO NG PICK SA PAGPALO:\n• Sa Downstroke: Bahagyang itagilig ang pick pataas upang dumausdos (glide) ito sa mga kuwerdas nang hindi sumasabit.\n• Sa Upstroke: Bahagyang itagilig ang pick pababa.",
        "codeSnippet": "// UNIVERSAL STRUMMING GRID (4/4 TIME):\n\nCount: 1   &   2   &   3   &   4   &\nMotion:D   U   D   U   D   U   D   U  <-- Palaging gumagalaw ang kamay\nHit:   D       D   U       U   D   U  <-- Mga aktwal na pinapalo!\n\nPhonetic Guide:\n'Bagsak... Bagsak-Taas... Taas-Bagsak-Taas'\n\nPick Angle Tip: Huwag 90 degrees flat sa strings; 15-30 degrees angled para malutong at makinis ang hagod.",
        "activity": {
          "title": "Gawaing Praktikal 2.1: The Universal Strum sa Isang Chord (G Major)",
          "instructions": [
            "Pindutin ang G Major chord at huwag munang lumipat.",
            "Simulan ang banayad na pendulum motion ng kanang kamay sa tempo na 60 BPM.",
            "Ipatupad ang pattern: DOWN ... DOWN-UP ... UP-DOWN-UP nang may buong relaxation sa pulso.",
            "Ulitin ang pattern nang 16 na magkakasunod na bars nang hindi sumasabit ang pick."
          ],
          "starterCode": "// Strumming Practice Checklist:\n[ ] Tuloy-tuloy ang pendulum motion kahit walang hit\n[ ] Relaks ang pulso (hindi matigas ang buong siko)\n[ ] Pantay ang volume ng downstroke at upstroke\n[ ] Walang pag-aalinlangan sa beat 3 (Upstroke)",
          "expectedOutcome": "Nakatutugtog ng Universal Strumming pattern nang natural at tuloy-tuloy na parang humihinga."
        },
        "exam": {
          "id": "exam-guitar-2-1",
          "title": "Pagsusulit 2.1: Strumming Mechanics",
          "description": "Subukin ang kaalaman sa universal pattern at pendulum motion.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-2-1-1",
              "question": "Ano ang tamang direksyon ng mga palo sa kilalang Universal Strumming Pattern?",
              "options": [
                "Down - Down - Up - Up - Down - Up",
                "Down - Up - Down - Up - Down - Up - Down - Up",
                "Down - Down - Down - Down",
                "Up - Up - Down - Down - Up - Down"
              ],
              "correctIndex": 0,
              "explanation": "Ang Universal Strumming Pattern sa 4/4 ay binubuo ng: 1 (D), 2 (D), 2& (U), 3& (U), 4 (D), 4& (U)."
            },
            {
              "id": "q-gt-2-1-2",
              "question": "Bakit dapat tuloy-tuloy na gumagalaw ang kanang kamay (pendulum motion) kahit sa mga beats na hindi pinapalo ang kuwerdas?",
              "options": [
                "Upang mapanatili ang tamang tempo at internal groove clock nang hindi nade-delay",
                "Upang magmukhang mabilis tumugtog sa manonood",
                "Upang hindi lumamig ang mga daliri",
                "Dahil bawal huminto ang pick sa hangin"
              ],
              "correctIndex": 0,
              "explanation": "Ang tuloy-tuloy na galaw ng kanang kamay ang nagsisilbing internal metronome upang pumasok ang mga upstroke sa eksaktong oras nang walang kaba."
            },
            {
              "id": "q-gt-2-1-3",
              "question": "Paano dapat i-anggulo ang pick upang hindi sumabit o tumalsik habang nag-i-strum?",
              "options": [
                "Bahagyang nakatagilis (15-30 degrees) sa direksyon ng galaw upang dumausdos sa mga kuwerdas",
                "Perpektong 90 degrees flat sa bawat kuwerdas",
                "Madiin na nakabaon sa pagitan ng mga kuwerdas",
                "Hawakan gamit ang palad sa halip na daliri"
              ],
              "correctIndex": 0,
              "explanation": "Ang bahagyang anggulo ay nagbibigay-daan sa pick na dumausdos nang malutong sa ibabaw ng mga kuwerdas nang hindi sumasabit."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.1: Universal Strumming Velocity Log",
          "sheetName": "Universal_Strum_Log",
          "description": "Subaybayan ang iyong tempo progress mula 60 BPM hanggang 100 BPM gamit ang universal strum.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1universal-strum-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 10-minutong practice bawat BPM level (60, 70, 80, 90, 100).",
            "Pagtatala ng accuracy sa beat 3 upstroke.",
            "Video submission ng malinis na 8-bar loop."
          ],
          "rubric": [
            { "criteria": "Rhythmic Steadiness (No Rushing)", "points": 40 },
            { "criteria": "Dynamic Tone Quality", "points": 35 },
            { "criteria": "Fluid Wrist Movement", "points": 25 }
          ]
        }
      },
      {
        "id": "les-guitar-2-2",
        "title": "Aralin 2.2: Paano ang Pag-Timing sa Kumpas gamit ang Metronome",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=8tM6DUk871o",
        "videoTitle": "PAANO ANG PAG TIMING SA PAG TUGTOG NG GITARA? - AXEKEY Tv Guitar Lovers",
        "objective": "Matutunan ang disiplina ng metronome: pagpalo sa beat nang eksakto sa click, pag-unawa sa 'in the pocket' timing, at pag-alis sa masamang gawi ng pagbilis (rushing) o pagbagal (dragging).",
        "theoryContent": "Walang silbi ang magagandang chords kung wala sa kumpas! Ang pagkakaiba ng amateur na gitarista sa professional rhythm sessionist ay ang 'pocket'—ang kakayahang tumugtog na nakalapat nang perpekto sa bawat click ng metronome.\n\n1. ANO ANG METRONOME AT BPM?\n• Metronome: Isang aparato o app na nagbibigay ng regular na audio click sa bawat kumpas.\n• BPM (Beats Per Minute): Ang bilis ng awitin. Halimbawa, 60 BPM = 1 click bawat segundo.\n\n2. ANG 3-STAGE METRONOME DRILL:\n• Stage 1: Quarter Notes (1 palo bawat click). Pindutin ang isang chord at pumalo lamang kasabay ng click: 1, 2, 3, 4.\n• Stage 2: 8th Notes (2 palo bawat click). Downstroke sa click, upstroke sa pagitan: 1-and, 2-and, 3-and, 4-and.\n• Stage 3: Universal Strumming Pattern na nakasabay sa metronome.\n\n3. GOLDEN RULE SA TIMING:\nKapag hindi mo na naririnig ang metronome dahil perpektong natatakpan ng iyong bagsak ang click, ibig sabihin ay nasa 'dead center' ka ng beat! Iyon ang target ng bawat professional rhythm player.",
        "codeSnippet": "// METRONOME TIMING LADDER:\n\nClick Sound:   [BEEP]       [CLICK]      [CLICK]      [CLICK]\nBeat Count:     1            2            3            4\nQuarter Notes:  DOWN         DOWN         DOWN         DOWN\n\n8th Notes:     [BEEP]       [CLICK]      [CLICK]      [CLICK]\nCount:          1     &      2     &      3     &      4     &\nMotion:         DOWN  UP     DOWN  UP     DOWN  UP     DOWN  UP\n\nTip: Simulan sa mabagal (60 BPM). Huwag magmadaling mag-120 BPM hangga't sumasablay sa 60 BPM!",
        "activity": {
          "title": "Gawaing Praktikal 2.2: 5-Minute Metronome Lock-In Challenge",
          "instructions": [
            "Buksan ang Google Metronome o phone app sa 70 BPM.",
            "Pumili ng C Major chord.",
            "Tugtugin ang quarter notes (Down, Down, Down, Down) sa loob ng 2 minuto nang hindi sumasapaw o nahuhuli sa click.",
            "Lumipat sa Universal Strumming Pattern at panatilihin ito sa loob ng 3 minuto nang tuloy-tuloy."
          ],
          "starterCode": "// Metronome Lock Checklist:\n[ ] 0:00 - 2:00: Steady Quarter Notes sa 70 BPM (Walang rushing)\n[ ] 2:00 - 5:00: Universal Strumming sa 70 BPM (Locked in)",
          "expectedOutcome": "Nakatutugtog nang may matatag na pulso na hindi humihinto kahit makaranas ng bahagyang pagkadulas ng daliri."
        },
        "exam": {
          "id": "exam-guitar-2-2",
          "title": "Pagsusulit 2.2: Metronome Discipline at Timing",
          "description": "Subukin ang kaalaman sa BPM, timekeeping, at metronome practice.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-2-2-1",
              "question": "Ano ang ibig sabihin kapag sinabing ang isang kanta ay may bilis na 120 BPM?",
              "options": [
                "Mayroong 120 beats (kumpas) sa loob ng isang minuto (2 beats bawat segundo)",
                "May 120 chords sa kanta",
                "Kailangang mag-strum ng 120 beses pababa",
                "Dapat tapusin ang kanta sa 120 segundo"
              ],
              "correctIndex": 0,
              "explanation": "BPM stands for Beats Per Minute; 120 BPM ay nangangahulugang may 120 kumpas bawat 60 segundo (dalawang kumpas bawat segundo)."
            },
            {
              "id": "q-gt-2-2-2",
              "question": "Ano ang senyales na perpektong 'in-the-pocket' o nasa dead-center ka ng metronome click?",
              "options": [
                "Tila naglalaho o natatakpan ng iyong strumming attack ang tunog ng click dahil sabay na sabay sila",
                "Mas mabilis ka nang kaunti kaysa sa click",
                "Humihinto ang metronome kapag tumugtog ka",
                "Lumalakas ang tunog ng amplifier"
              ],
              "correctIndex": 0,
              "explanation": "Kapag eksaktong tumapat ang transient attack ng iyong gitara sa audio click ng metronome, natatakpan (masks) nito ang click sound—isang patunay ng perpektong timing."
            },
            {
              "id": "q-gt-2-2-3",
              "question": "Ano ang pinakamagandang gawin kapag nahihirapang sumabay sa metronome sa 100 BPM?",
              "options": [
                "Ibaba ang tempo sa 60 o 70 BPM, tiyaking malinis bago dahan-dahang itaas nang tig-5 BPM",
                "Patayin ang metronome at mag-strum mag-isa",
                "Diretsong itaas sa 140 BPM",
                "Lakasan ang volume ng gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang sikreto ng propesyonal na bilis ay ang pagiging perpekto sa mabagal na tempo (slow practice builds accurate muscle memory)."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.2: Metronome Endurance and Stability Tracker",
          "sheetName": "Metronome_Timing_Log",
          "description": "Itala ang pang-araw-araw na metronome drills at deviation rate.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1metronome-stability-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 5-minutong tuloy-tuloy na strumming sa iba't ibang BPMs.",
            "Pagtukoy sa mga moment ng pag-rush sa transitions.",
            "Lingguhang assessment ng timing lock."
          ],
          "rubric": [
            { "criteria": "Metronome Alignment", "points": 45 },
            { "criteria": "Rhythmic Consistency Over 5 Minutes", "points": 35 },
            { "criteria": "Dynamic Control", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-2-3",
        "title": "Aralin 2.3: Mabilis na Paglipat ng Chords (Pivot Fingers Secret)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=wjrl0cAIYKw",
        "videoTitle": "Position Ng Daliri Para Sa Mabilis Na paglipat Ng Chords C - G - minorist chords",
        "objective": "Lupigin ang pagkaantala sa pagitan ng chords gamit ang 'Anchor Finger', 'Pivot Finger', at ang 'Anticipation Strum' technique nang hindi humihinto ang kanang kamay.",
        "theoryContent": "Bakit nahihirapan ang baguhan? Dahil sa bawat paglipat ng chord, tinatanggal nila ang LAHAT ng daliri sa ere at pilit binubuo ang bagong chord mula simula! Sa araling ito, aalisin natin ang masamang gawi na iyan gamit ang professional efficiency techniques.\n\n1. THE ANCHOR FINGER CONCEPT:\nMaraming chords ang nagbabahagi ng parehong nota o daliri!\n• Halimbawa 1 (G papuntang Cadd9): Ang iyong daliri 3 at 4 sa 1st at 2nd strings (3rd fret) ay HINDI DAPAT GUMALAW! Ilipat lamang ang daliri 1 at 2.\n• Halimbawa 2 (Am papuntang C): Nakapako ang daliri 1 at 2; ang daliri 3 lamang ang tatawid papuntang 5th string.\n\n2. THE PIVOT FINGER TECHNIQUE:\nKung walang common note, maghanap ng daliri na mananatili sa parehong fret o kuwerdas bilang gabay (guide finger) habang umiikot (pivot) ang kamay.\n\n3. ANG SECRET SA HULING UPSTROKE (BEAT 4&):\nSa propesyonal na pagtugtog, ang huling upstroke bago ang susunod na bar ay maaaring patunugin sa bukas na kuwerdas (open strings) habang lumilipad na ang iyong mga daliri papunta sa susunod na chord shape! Hindi ito mapapansin ng tagapakinig dahil sa bilis ng kumpas.",
        "codeSnippet": "// CHORD TRANSITION EFFICIENCY RULES:\n\nRule 1: Huwag tanggalin ang daliri na pareho ang pwesto sa susunod na chord!\nRule 2: Igalaw ang mga daliri nang magkakasabay bilang isang 'hugis' (chord block), hindi paisa-isa!\nRule 3: Hayaang pumalo ang kanang kamay sa Beat 1 kahit hindi pa 100% nakalapag ang lahat ng daliri—ang root note ang unahin!",
        "activity": {
          "title": "Gawaing Praktikal 2.3: The 60-Second Chord Transition Blitz",
          "instructions": [
            "Mag-set ng timer para sa 60 segundo.",
            "Pumili ng pares ng chords (G at C).",
            "Mabilis na lumipat pabalik-balik mula G papuntang C. Bilangin kung ilang malinis na paglipat ang magagawa mo sa loob ng 1 minuto.",
            "Target: 30 malinis na transitions sa unang linggo; 50+ transitions para sa pro level!"
          ],
          "starterCode": "// 60-Second Challenge Scorecard:\nDay 1: [ ] transitions / min\nDay 3: [ ] transitions / min\nDay 7: [ ] transitions / min (Target: 40+)",
          "expectedOutcome": "Nakalilipat ng G, C, D, at Em nang tuloy-tuloy nang walang kahit katiting na paghinto sa kumpas."
        },
        "exam": {
          "id": "exam-guitar-2-3",
          "title": "Pagsusulit 2.3: Fast Chord Switching Mechanics",
          "description": "Subukin ang kaalaman sa anchor fingers at seamless switching.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-2-3-1",
              "question": "Ano ang tinatawag na 'Anchor Finger' sa pagpapalit ng chords sa gitara?",
              "options": [
                "Isang daliri na nananatili sa parehong fret at kuwerdas sa pagitan ng dalawang chords upang magsilbing gabay",
                "Ang hinlalaki na humahawak sa likod ng leeg",
                "Ang daliri na pinakamalakas pumindot",
                "Ang pick sa kanang kamay"
              ],
              "correctIndex": 0,
              "explanation": "Ang anchor finger ay daliring nananatiling nakapako sa parehong pwesto sa dalawang magkasunod na chords, na nag-aalis ng pangangailangang itaas ang buong kamay."
            },
            {
              "id": "q-gt-2-3-2",
              "question": "Kapag lumilipat mula G Major (gamit ang 4-finger voicing) papuntang Cadd9, anong mga daliri ang HINDI umaalis sa kanilang pwesto?",
              "options": [
                "Daliri 3 at Daliri 4 sa 2nd at 1st strings (3rd fret)",
                "Daliri 1 at Daliri 2",
                "Lahat ng daliri ay kailangang umalis",
                "Wala sa mga nabanggit"
              ],
              "correctIndex": 0,
              "explanation": "Sa 4-finger G at Cadd9, nakatambay ang Ring (3) at Pinky (4) sa 3rd fret ng B at high E strings, kaya dalawang daliri lang ang lumilipat."
            },
            {
              "id": "q-gt-2-3-3",
              "question": "Ano ang sikreto ng kanang kamay kapag lumilipat ng chords sa mabilis na kanta?",
              "options": [
                "HINDI humihinto ang kanang kamay; patuloy ang kumpas kahit lumilipad pa ang mga daliri sa beat 4&",
                "Dapat huminto ang kanang kamay at maghintay hanggang makalapag ang lahat ng daliri",
                "Dapat bumagal ang kumpas",
                "Dapat mag-upstroke lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang rhythm guitarist ay hindi humihinto sa pag-strum. Ang pagpapanatili ng kumpas ang prayoridad; ang mga daliri sa kaliwang kamay ang aakma sa pulso."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.3: Chord Switch Velocity Scorecard",
          "sheetName": "Chord_Switch_Log",
          "description": "Itala ang pang-araw-araw na 60-segundong chord change reps.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1chord-switch-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng transitions per minute para sa G-C, C-D, Em-C, at Am-G.",
            "Pagtukoy sa mga daliring nahuhuling lumapag.",
            "Lingguhang velocity milestone chart."
          ],
          "rubric": [
            { "criteria": "Switch Speed (Reps/Min)", "points": 40 },
            { "criteria": "Rhythm Flow Continuity", "points": 35 },
            { "criteria": "Fretboard Precision", "points": 25 }
          ]
        }
      },
      {
        "id": "les-guitar-2-4",
        "title": "Aralin 2.4: 3/4 Waltz & 6/8 Slow Ballad Strumming Patterns",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=OB-eNtzzwBA",
        "videoTitle": "7 Strumming Patterns you need to know as a Beginner (Tagalog Lesson) - Ricky Mañoza",
        "objective": "Matutunang kumumpas sa labas ng karaniwang 4/4 time: Pag-aralan ang 3/4 Waltz time (Boom-Chick-Chick) at 6/8 Slow Rock / Harana Ballads para sa mga classic at mababagal na kanta.",
        "theoryContent": "Hindi lahat ng kanta ay 4/4 time! Marami sa mga pinakadakilang OPM love songs, acoustic harana, at classic church hymns ay nakasulat sa 3/4 (tatlong kumpas) o 6/8 (anim na kumpas na may dalawang malalaking pulso).\n\n1. ANG 3/4 WALTZ STRUMMING PATTERN:\n• Time Signature: Tatlong quarter notes bawat bar (1, 2, 3).\n• Pattern: DOWN (Bass Note) ... DOWN-UP ... DOWN-UP\n• Kumpas: 'BOOM - CHICK - CHICK' (Bigat sa Beat 1, banayad sa Beats 2 at 3).\n\n2. ANG 6/8 SLOW BALLAD STRUMMING PATTERN:\n• Time Signature: Anim na 8th notes na may grouping na 3 + 3 (1-2-3, 4-5-6).\n• Karaniwang maririnig sa classic OPM ballads (tulad ng mga kanta ng Cueshe, Aegis, o Apo Hiking Society).\n• Pattern: DOWN ... DOWN-UP-DOWN ... DOWN-UP\n• Accent: Malakas ang bagsak sa Beat 1 at Beat 4!\n\n3. DYNAMICS SA BALLAD:\nPababain ang lakas sa verse upang lumutang ang boses, at ilabas ang buong buhos ng hagod sa chorus!",
        "codeSnippet": "// 3/4 WALTZ GRID:\nCount:  1       2   &   3   &\nHit:    D(Bass) D   U   D   U\nFeel:  'BOOM - CHICK - CHICK'\n\n// 6/8 BALLAD GRID:\nCount:  1   2   3   4   5   6\nAccent: >           >\nHit:    D   D   U   D   D   U\nFeel:  'BIGAT-two-three, BIGAT-five-six'",
        "activity": {
          "title": "Gawaing Praktikal 2.4: 6/8 Ballad Strumming sa C - Am - F - G",
          "instructions": [
            "Paganahin ang metronome sa 6/8 feel (o 3/4 sa 80 BPM).",
            "Tugtugin ang C Major chord sa unang bar (1-2-3, 4-5-6 na may accent sa 1 at 4).",
            "Lumipat sa Am sa bar 2, F (o Dm) sa bar 3, at G sa bar 4.",
            "Panatilihin ang banayad at emosyonal na hagod na may malinaw na pulso sa 1 at 4."
          ],
          "starterCode": "// 6/8 Ballad Loop Check:\nBar 1: [C Major] -> 1-2-3, 4-5-6 (Accent on 1 & 4)\nBar 2: [A Minor] -> 1-2-3, 4-5-6\nBar 3: [D Minor] -> 1-2-3, 4-5-6\nBar 4: [G Major] -> 1-2-3, 4-5-6",
          "expectedOutcome": "Nakatutugtog ng 3/4 at 6/8 ballad rhythms nang may tamang indak at emosyon."
        },
        "exam": {
          "id": "exam-guitar-2-4",
          "title": "Pagsusulit 2.4: 3/4 at 6/8 Time Signatures",
          "description": "Subukin ang kaalaman sa waltz time at compound ballad rhythms.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-2-4-1",
              "question": "Ilang kumpas mayroon sa bawat measure ng 3/4 time signature?",
              "options": [
                "3 kumpas (beats)",
                "4 na kumpas",
                "6 na kumpas",
                "2 kumpas"
              ],
              "correctIndex": 0,
              "explanation": "Sa 3/4 time, may 3 quarter-note beats bawat bar (1, 2, 3)."
            },
            {
              "id": "q-gt-2-4-2",
              "question": "Sa 6/8 slow rock ballad rhythm, saang mga kumpas pumapatak ang dalawang pangunahing accent o bigat?",
              "options": [
                "Sa Beat 1 at Beat 4",
                "Sa Beat 2 at Beat 4",
                "Sa Beat 3 at Beat 6",
                "Sa Beat 1 lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang 6/8 ay compound duple meter na nahahati sa dalawang grupo ng tatlo: ang primary accents ay nasa Beat 1 at Beat 4."
            },
            {
              "id": "q-gt-2-4-3",
              "question": "Ano ang tinatawag na 'Boom-Chick-Chick' sa acoustic folk at waltz strumming?",
              "options": [
                "Pagtugtog ng single bass note sa beat 1 ('Boom') na sinusundan ng dalawang chord strums sa beats 2 at 3 ('Chick-Chick')",
                "Pagpalo sa kahoy ng gitara nang tatlong beses",
                "Paggamit ng distortion pedal",
                "Pagtugtog gamit ang dalawang daliri lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang 'Boom-Chick-Chick' ay classic waltz accompaniment kung saan ang root bass note ay pinapatunog sa beat 1, at ang upper strings ay ini-strum sa 2 at 3."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.4: Ballad Time Signatures Practice Rubric",
          "sheetName": "Ballad_Rhythm_Log",
          "description": "Subaybayan ang pagtugtog sa 3/4 waltz at 6/8 slow ballads.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1ballad-rhythm-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 3/4 at 6/8 practice sessions.",
            "Pagtukoy sa kalinisan ng accent sa 1 at 4.",
            "Audio/video recording ng isang acoustic ballad accompaniment."
          ],
          "rubric": [
            { "criteria": "Accenting on 1 and 4", "points": 40 },
            { "criteria": "Time Signature Stability", "points": 35 },
            { "criteria": "Dynamic Emotion & Touch", "points": 25 }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 3: Barre Chords Mastery, Palm Muting at Rhythmic Dynamics",
    "overview": "Umakyat sa susunod na antas: Lupigin ang F chord at B minor barre chords nang walang sakit sa kamay, gamitin ang palm muting para sa snappy chugs, at matutunan ang syncopation at acoustic percussive slap.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-guitar-3-1",
        "title": "Aralin 3.1: F Chord & Barre Chords nang Walang Sakit sa Daliri",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=OVU5DmVMrE8",
        "videoTitle": "Guitar Music Theory tagalog - mga nota sa fretboard ng gitara - Pareng Don Tutorials",
        "objective": "Lupigin ang kinatatakutang F Major barre chord at B Minor barre chord gamit ang bahagyang nakatagilid na index finger at arm leverage sa halip na pagpisil ng hinlalaki.",
        "theoryContent": "Ang F Chord ang pader na kinatatakutan ng halos lahat ng baguhang gitarista. Marami ang sumusuko dahil dito! Ngunit sa araling ito, tuturuan kita ng tamang pisika at biomechanics upang maging kasing dali lamang ito ng open chords.\n\n1. ANG MALI NA GINAGAWA NG LAHAT:\nPinipisil nang ubod ng lakas ang hintuturo (index) laban sa hinlalaki (thumb) na parang ipitin ng pliers. Nagdudulot ito ng matinding cramps sa ilalim ng thumb at mapurol na tunog!\n\n2. ANG TATLONG PRO BARRE SECRETS:\n• Secret 1: Bahagyang itagilid ang hintuturo! Ang gilid ng iyong daliri (bony side) ay mas matigas kaysa sa malambot na unan (fleshy pad).\n• Secret 2: Gamitin ang Arm Weight (Bigat ng Braso). Hilain bahagya ang iyong siko paatras papunta sa iyong dibdib. Ang bigat ng buong braso ang magpipindot sa kuwerdas, hindi ang thumb!\n• Secret 3: Ilapit ang barre finger sa likod mismo ng metal fret wire.\n\n3. E-SHAPE AT A-SHAPE BARRE CHORDS:\n• F Major ay E Major shape na iniusog ng 1 fret at nilagyan ng barre sa fret 1.\n• B Minor ay A Minor shape na iniusog ng 2 frets at nilagyan ng barre sa fret 2.",
        "codeSnippet": "// F MAJOR BARRE CHORD (1st Fret Barre):\n\n   e|-B-|---|---|         Barre sa 1st Fret gamit ang Tagilid na Hintuturo!\n   B|-B-|---|---|         \n   G|---|-2-|---|         Daliri 2: 3rd string (2nd fret)\n   D|---|---|-4-|         Daliri 4 (Pinky): 4th string (3rd fret)\n   A|---|---|-3-|         Daliri 3 (Ring): 5th string (3rd fret)\n   E|-B-|---|---|         \n     1   2   3 (Frets)\n\nBiomechanical Tip: Relaks ang thumb sa likod ng neck (nasa tapat ng daliri 2). Huwag pisilin!",
        "activity": {
          "title": "Gawaing Praktikal 3.1: The F Chord Clarity and Endurance Test",
          "instructions": [
            "Ipatong ang tagilid na hintuturo sa 1st fret (barre) nang walang ibang daliri. Hilain ang siko paatras at patunugin ang lahat ng 6 na kuwerdas.",
            "Kapag malinis na ang tunog, idagdag ang daliri 2, 3, at 4 para mabuo ang F Major chord.",
            "Tugtugin ang loop: C Major -> G Major -> A Minor -> F Major.",
            "Panatilihin ang bawat chord sa 4 na kumpas nang walang paghinto sa pagpasok ng F chord."
          ],
          "starterCode": "// F Chord Note Check:\n[ ] 1st string (High E) - Malinis\n[ ] 2nd string (B)      - Malinis\n[ ] 3rd string (G)      - Malinis\n[ ] 4th string (D)      - Malinis\n[ ] 5th string (A)      - Malinis\n[ ] 6th string (Low E)  - Malinis",
          "expectedOutcome": "Nakatutugtog ng malinis na F Major chord nang walang pananakit sa palad at kalamnan ng kamay."
        },
        "exam": {
          "id": "exam-guitar-3-1",
          "title": "Pagsusulit 3.1: Barre Chord Mechanics",
          "description": "Subukin ang kaalaman sa tamang mekaniks ng barre chords.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-3-1-1",
              "question": "Aling bahagi ng hintuturo (index finger) ang dapat idikit sa fretboard kapag nagba-barre ng F chord?",
              "options": [
                "Ang bahagyang matigas na tagiliran ng daliri (bony side)",
                "Ang malambot at patag na gitna ng daliri",
                "Ang kuko lamang",
                "Ang pinakailalim ng buko"
              ],
              "correctIndex": 0,
              "explanation": "Ang tagiliran ng daliri ay may mas kaunting taba at mas matigas na buto, na pumipindot nang pantay sa lahat ng anim na kuwerdas."
            },
            {
              "id": "q-gt-3-1-2",
              "question": "Ano ang pinagmumulan ng lakas sa pagpindot ng barre chord ayon sa wastong biomechanics?",
              "options": [
                "Ang bigat ng braso (arm weight) na banayad na humihila paatras, hindi ang pagpisil ng hinlalaki",
                "Sobrang diin ng hinlalaki sa likod ng neck",
                "Pagpukpok sa kuwerdas",
                "Paggamit ng capo"
              ],
              "correctIndex": 0,
              "explanation": "Ang paggamit ng arm leverage ay nag-aalis ng tensyon sa maliit na kalamnan ng thumb (thenar eminence), na pumipigil sa pananakit at pamumulikat."
            },
            {
              "id": "q-gt-3-1-3",
              "question": "Kung ang F Major ay nakabatay sa open E Major shape sa 1st fret, sa anong open shape nakabatay ang standard B minor (Bm) barre chord sa 2nd fret?",
              "options": [
                "A Minor (Am) shape",
                "E Minor (Em) shape",
                "C Major shape",
                "D Major shape"
              ],
              "correctIndex": 0,
              "explanation": "Ang B minor sa 2nd fret ay nakabatay sa A Minor shape (A-shape barre family)."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.1: Barre Chord Clarity & Fatigue Diary",
          "sheetName": "Barre_Chord_Log",
          "description": "Subaybayan ang kalinisan ng F at Bm chords at pagbaba ng fatigue sa kamay.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1barre-chord-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Araw-araw na talaan ng kalinisan ng bawat nota sa F chord (1 to 6).",
            "Talaan ng C-G-Am-F loop continuity.",
            "Pagtatala ng kawalan ng pananakit sa thumb muscle."
          ],
          "rubric": [
            { "criteria": "6-String Note Clarity", "points": 45 },
            { "criteria": "Smooth Entry to F from Am", "points": 35 },
            { "criteria": "Relaxed Hand Posture", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-3-2",
        "title": "Aralin 3.2: Palm Muting / Muted Strumming sa Gitara",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=ZxC2jjOfRrw",
        "videoTitle": "Muted/Palm Mute - Tutorial - Paano mag Muted/Palm Mute sa Gitara - Jad De Jesus",
        "objective": "Matutunan ang palm muting gamit ang fleshy edge ng kanang palad sa ibabaw ng bridge saddles para sa snappy, chuggy, at kontroladong acoustic at electric rhythm.",
        "theoryContent": "Ang rhythm guitar ay hindi lang basta malakas na pagpalo ng kuwerdas. Ang sikreto ng mga propesyonal ay DYNAMICS—ang kakayahang maging pabulong at snappy sa verse, at sumabog sa chorus! Dito pumapasok ang Palm Muting.\n\n1. PAANO GINAGAWA ANG PALM MUTING (P.M.):\nIpatong ang matabang gilid ng iyong kanang palad (karate chop edge sa tapat ng pinky) sa ibabaw ng mga kuwerdas eksakto kung saan sila lumalabas sa bridge saddle.\n\n2. ANG GOLDEN RULE SA PALM PLACEMENT:\n• Kapag masyadong malayo sa bridge (nasa gitna ng soundhole): Magiging patay at walang tono ang nota (parang kahoy na pinukpok).\n• Kapag masyadong nasa likod ng bridge: Hindi magkakaroon ng muting effect.\n• Sweet Spot: Eksakto sa ibabaw ng metal/bone saddle! Maririnig mo pa rin ang pitch ng chord, ngunit may kasamang malutong at 'chuggy' na percussive thump.\n\n3. APPLICATION SA OPM AT POP POCKET:\nGamitin ang palm muting sa buong Verse 1 upang hindi masapawan ang mang-aawit, at tanggalin ang palad pagdating sa Chorus para sa dynamic impact!",
        "codeSnippet": "// PALM MUTING BRIDGE SWEET SPOT:\n\n[Neck] ======= [Soundhole] ======= [Bridge Saddle] <-- DITO IPATONG ANG PALAD!\n                                    |~~~~~~~~~~~|\n                                    Fleshy edge ng right palm\n\nRhythm Notation Indicator: P.M. - - - - - - - - - - - - - - - - |\nStrum Pattern: D   D   D   D   D   D   D   D (Steady 8th chugs)\n               *   *   *   *   *   *   *   *",
        "activity": {
          "title": "Gawaing Praktikal 3.2: Verse (Palm Muted) to Chorus (Open) Dynamic Shift",
          "instructions": [
            "Pindutin ang E Major (o Power Chord E5).",
            "Magsagawa ng 16 na palm-muted 8th notes gamit ang downstrokes lamang (Verse feel).",
            "Sa Beat 1 ng susunod na bar, iangat ang palad at mag-strum nang buo at malakas gamit ang Universal Strumming (Chorus feel).",
            "Ulitin ang transition cycle nang 4 na beses hanggang maging awtomatiko ang paglipat ng palad."
          ],
          "starterCode": "// Dynamic Shift Exercise:\nBars 1-2 (Verse) : [P.M. E Major] -> D D D D D D D D (Chuggy & Quiet)\nBars 3-4 (Chorus): [Open E Major] -> D - D U - U D U (Full & Loud)",
          "expectedOutcome": "Nakatutugtog ng malinaw na palm mute sweet spot na may malaking agwat sa dynamic volume ng open chorus."
        },
        "exam": {
          "id": "exam-guitar-3-2",
          "title": "Pagsusulit 3.2: Palm Muting Dynamics",
          "description": "Subukin ang kaalaman sa tamang pwesto ng palad at dynamic contrast.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-3-2-1",
              "question": "Saan dapat nakapatong ang matabang gilid ng kanang palad para sa perpektong palm mute?",
              "options": [
                "Eksakto sa ibabaw ng bridge saddles kung saan lumalabas ang mga kuwerdas",
                "Sa ibabaw ng soundhole",
                "Sa 12th fret ng leeg",
                "Sa likod ng gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang sweet spot para sa palm muting ay nasa mismong bridge saddles upang marinig pa rin ang tunay na tono ng chord habang pinipigilan ang mahabang sustain."
            },
            {
              "id": "q-gt-3-2-2",
              "question": "Ano ang maririnig kapag masyadong malayo sa bridge (papunta sa gitna ng katawan) ang iyong palad?",
              "options": [
                "Nawawala ang tono at nagiging mapurol na patay na tunog (thud)",
                "Lumalakas ang sustain ng gitara",
                "Nagiging acoustic harmonic",
                "Tumataas ang pitch ng kanta"
              ],
              "correctIndex": 0,
              "explanation": "Kapag lumayo sa bridge ang palad, pinipigil nito ang buong vibration ng kuwerdas kaya nawawala ang pitch at nagiging patay na kalabog lamang."
            },
            {
              "id": "q-gt-3-2-3",
              "question": "Bakit napakahalaga ng palm muting sa pag-aayos ng kanta sa isang banda?",
              "options": [
                "Nagbibigay ito ng dynamic contrast upang hindi maging boring at maingay ang kanta mula simula hanggang huli",
                "Dahil bawal mag-strum nang malakas sa verse",
                "Dahil pinoprotektahan nito ang pick",
                "Upang hindi mapatid ang kuwerdas"
              ],
              "correctIndex": 0,
              "explanation": "Ang palm muting ay lumilikha ng dynamic contrast (tahimik at percussive sa verse, bukas at makapangyarihan sa chorus) na nagbibigay-buhay sa awitin."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.2: Palm Mute Dynamic Range Rubric",
          "sheetName": "Palm_Mute_Log",
          "description": "Sukatin ang volume difference at note pitch integrity habang nagpa-palm mute.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1palm-mute-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Pagtukoy sa tamang saddle placement sa sariling gitara.",
            "Talaan ng 80 BPM downstroke palm muting endurance.",
            "Recording ng Verse-to-Chorus dynamic transition."
          ],
          "rubric": [
            { "criteria": "Tone Pitch Retention (Not Dead Thud)", "points": 40 },
            { "criteria": "Volume Contrast Between Verse & Chorus", "points": 35 },
            { "criteria": "Rhythmic Consistency", "points": 25 }
          ]
        }
      },
      {
        "id": "les-guitar-3-3",
        "title": "Aralin 3.3: Syncopated Strumming & Offbeat Rhythm Accents",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=yZc9azbslhM",
        "videoTitle": "PAANO MAG-STRUM | BASIC STRUMMING GUIDE - Sir Nonito",
        "objective": "Matutunan ang syncopated strumming: pagpalo sa mga 'AND' (&) ng beat upang lumikha ng indak, groove, at modern pop/rock push sa halip na puro mabigat na downbeats.",
        "theoryContent": "Bakit may mga kantang napakasarap sayawan at may matinding indak? Dahil sa Syncopation! Ang syncopation ay ang paglalagay ng diin o accent sa mga kumpas na hindi inaasahan—ang mga offbeats o 'AND' (&) counts.\n\n1. DOWNBEAT VS OFFBEAT:\n• Downbeats (1, 2, 3, 4): Karaniwang binabagsakan ng kick drum at bass. Matatag at predictable.\n• Offbeats (& of 1, 2, 3, 4): Karaniwang binibigyang-buhay ng gitara sa pamamagitan ng madiin na upstrokes o delayed downstrokes.\n\n2. ANG POP/ROCK PUSH STRUM:\nSa halip na lumipat ng chord sa Beat 1, ilipat ang chord sa '&' of 4 bago magsimula ang susunod na bar! Ang tawag dito ay 'Anticipation' o 'Pushed Chord'. Ito ang nagbibigay ng enerhiya sa mga kanta ng Eraserheads, Parokya Ni Edgar, at modern pop anthems.\n\n3. PAG-AARAL NG ACCENTS (>):\nMag-strum nang banayad sa karamihan ng mga palo, ngunit maglagay ng mabilis at malutong na palo sa mga specific syncopated accents.",
        "codeSnippet": "// SYNCOPATED POP PUSH GRID:\n\nBar 1:  Count: 1   &   2   &   3   &   4   &\n        Chord: [       G Major       ]   [C] <-- Pushed sa 4&!\n        Hit:   D       D   U       U   D   U\n                                           ^\n                                     LIPAT AGAD DITO!",
        "activity": {
          "title": "Gawaing Praktikal 3.3: The Offbeat Push Strum Drill (G to C Push)",
          "instructions": [
            "Tugtugin ang G Major sa beats 1, 2, at 3.",
            "Sa beat 4& (ang huling upstroke), mabilis na lumipat sa C Major bago pa pumatak ang beat 1 ng susunod na bar.",
            "Pakinggan kung paanong ang 'push' ay nagbibigay ng excitement at forward momentum sa tugtog.",
            "Ulitin ang G to C push nang 8 beses kasabay ng metronome sa 75 BPM."
          ],
          "starterCode": "// Offbeat Push Checklist:\n[ ] Naka-strum ang G Major nang maayos sa beats 1-3\n[ ] Lumipat ang daliri sa C Major eksakto sa 4&\n[ ] Hindi huminto o naantala ang pendulum motion ng kanang kamay",
          "expectedOutcome": "Nakatutugtog ng syncopated pushed chords nang may kumpiyansa at perpektong indak."
        },
        "exam": {
          "id": "exam-guitar-3-3",
          "title": "Pagsusulit 3.3: Syncopation at Offbeat Rhythms",
          "description": "Subukin ang kaalaman sa offbeat accents at chord anticipation.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-3-3-1",
              "question": "Ano ang ibig sabihin ng 'Syncopation' sa musika?",
              "options": [
                "Pagbibigay ng diin o accent sa mga mahihinang kumpas o offbeats (tulad ng mga '&')",
                "Pagtugtog nang mabilis hangga't maaari",
                "Pagpapatid ng kuwerdas habang nag-i-strum",
                "Pagtugtog nang walang metronome"
              ],
              "correctIndex": 0,
              "explanation": "Ang syncopation ay ang pagbibigay ng accent sa mga offbeats o weak beats na nagbibigay ng indak at groove sa musika."
            },
            {
              "id": "q-gt-3-3-2",
              "question": "Ano ang tinatawag na 'Pushed Chord' o anticipation sa rhythm guitar?",
              "options": [
                "Ang paglipat sa susunod na chord sa beat 4& bago ang aktwal na beat 1 ng susunod na bar",
                "Pagtulak sa leeg ng gitara habang tumutugtog",
                "Paggamit ng mabigat na pick",
                "Pagpalit ng gitara sa gitna ng kanta"
              ],
              "correctIndex": 0,
              "explanation": "Ang pushed chord ay lumilipat kalahating kumpas bago ang inaasahang downbeat (sa 4&), na nagdudulot ng energetic at dynamic lift sa tugtog."
            },
            {
              "id": "q-gt-3-3-3",
              "question": "Bakit mahalaga ang dynamic accents sa syncopated strumming?",
              "options": [
                "Dahil kung pare-pareho ang lakas ng bawat palo, mawawala ang indak at magiging maingay lamang ang tunog",
                "Upang marinig lamang ang gitara at wala nang iba",
                "Dahil kailangan laging malakas ang upstroke",
                "Para masira ang pick"
              ],
              "correctIndex": 0,
              "explanation": "Kung pare-pareho ang volume ng bawat palo, nagiging monotonous ang tugtog. Ang dynamic accents ang nagpapalitaw sa groove."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.3: Syncopation & Pushed Chords Evaluation",
          "sheetName": "Syncopation_Log",
          "description": "Subaybayan ang accuracy ng pushed chords sa beat 4&.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1syncopation-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng pushed chord exercises sa iba't ibang BPMs.",
            "Pagsusuri kung nauuna o nahuhuli ang paglipat sa 4&.",
            "Audio recording ng syncopated groove."
          ],
          "rubric": [
            { "criteria": "Exact 4& Push Timing", "points": 40 },
            { "criteria": "Accent Clarity", "points": 35 },
            { "criteria": "Overall Rhythmic Bounce", "points": 25 }
          ]
        }
      },
      {
        "id": "les-guitar-3-4",
        "title": "Aralin 3.4: Acoustic Percussive Slap & Chucking Strumming",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=Mu8WpDCtjnU",
        "videoTitle": "Percussive Slap Strumming Pattern - Guitario",
        "objective": "Gawing portable drum kit ang acoustic guitar sa pamamagitan ng thumb slap sa lower strings sa beats 2 at 4 (snare imitation) at 'chuck' muting para sa modern acoustic groove.",
        "theoryContent": "Naisip mo ba kung paano nakakatugtog ang mga acoustic solo artists (tulad ni Ed Sheeran, John Mayer, o Jason Mraz) na parang may kasamang buong drummer? Ang sikreto ay ang Percussive Slap at Chucking!\n\n1. ANG ANATOMYA NG ACOUSTIC SLAP (SNARE SOUND):\nSa standard pop at rock music, ang snare drum ay pumapatak sa beats 2 at 4. Sa acoustic guitar, ginagaya natin ito gamit ang gilid ng hinlalaki (thumb slap) o buong palad na sumasampal sa mababang kuwerdas (strings 6, 5, 4).\n\n2. ANG 'CHUCK' TECHNIQUE:\nAng chuck ay ang sabay na pag-strum pababa habang agad na nilalapat ang laman ng kanang palad sa mga kuwerdas upang pigilan ang sustain. Nagbubunga ito ng malutong na 'CHAK!' na tunog.\n\n3. ANG ICONIC ACOUSTIC GROOVE FORMULA:\n• Beat 1: BASS / STRUM (Malinis na chord)\n• Beat 2: SLAP / CHUCK (Matalas na palo tulad ng snare)\n• Beat 3: STRUM (Melodic fill)\n• Beat 4: SLAP / CHUCK (Snare backbeat)\nSa pamamagitan nito, ikaw na ang bahista, gitarista, at drummer sa iisang instrumento!",
        "codeSnippet": "// ACOUSTIC SLAP & CHUCK NOTATION:\n\nCount: 1   &   2   &   3   &   4   &\nRole:  [ Bass ] [SNARE] [Melody][SNARE]\nAction:D       SLAP/   U   D   SLAP/\n               CHUCK           CHUCK\n\nSound: 'RING... CHAK! ... RING-CHAK!'\n\nThumb Slap Technique: Ibagsak ang gilid ng thumb bone sa 6th string malapit sa fretboard edge para sa malutong na click.",
        "activity": {
          "title": "Gawaing Praktikal 3.4: The 4-Chord Slap-Strum Acoustic Jam",
          "instructions": [
            "Pindutin ang Em chord.",
            "Tugtugin ang Beat 1 (Downstroke), Beat 2 (Thumb Slap sa 6th string), Beat 3 (Up-Down strum), at Beat 4 (Thumb Slap).",
            "Magsanay nang mabagal sa 60 BPM hanggang maging malutong ang tunog ng slap nang hindi naiiipit ang daliri sa kuwerdas.",
            "Ilapat sa progression: Em -> G -> C -> D."
          ],
          "starterCode": "// Percussive Slap Practice Protocol:\n[ ] Malutong ang tunog ng slap sa Beat 2 nang walang buzzing\n[ ] Malutong ang tunog ng slap sa Beat 4\n[ ] Hindi nawawala ang timing habang pumapalo ang thumb",
          "expectedOutcome": "Nakatutugtog ng modern percussive acoustic groove na may malinaw na backbeat snare effect."
        },
        "exam": {
          "id": "exam-guitar-3-4",
          "title": "Pagsusulit 3.4: Percussive Acoustic Slap",
          "description": "Subukin ang kaalaman sa percussive guitar techniques at backbeat emulation.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-3-4-1",
              "question": "Aling bahagi ng drum kit ang ginagaya ng acoustic guitar thumb slap sa beats 2 at 4?",
              "options": [
                "Snare Drum (Backbeat)",
                "Bass Drum (Kick)",
                "Ride Cymbal",
                "Hi-Hat Tambourine"
              ],
              "correctIndex": 0,
              "explanation": "Ang thumb slap o chuck sa beats 2 at 4 ay perpektong nag-e-emulate sa backbeat crack ng snare drum."
            },
            {
              "id": "q-gt-3-4-2",
              "question": "Ano ang tamang paraan ng paggawa ng 'Chuck' sound gamit ang kanang kamay?",
              "options": [
                "Sabay na pag-strum pababa habang agad na ibinabagsak ang laman ng kanang palad sa ibabaw ng mga kuwerdas upang patayin ang sustain",
                "Pagpukpok sa kahoy ng gitara gamit ang kamao",
                "Pagpisil sa pick nang sobrang lakas",
                "Pag-angat sa kaliwang kamay mula sa fretboard"
              ],
              "correctIndex": 0,
              "explanation": "Ang chuck ay ang mabilis na kumbinasyon ng downstroke pick attack at agad na palm dampening sa mga kuwerdas upang makalikha ng matalim na percussive click."
            },
            {
              "id": "q-gt-3-4-3",
              "question": "Bakit napakapopular ng percussive slap strumming sa solo acoustic performers?",
              "options": [
                "Dahil nagbibigay ito ng buong rhythmic foundation (bass, chords, at snare) kahit walang kasamang drummer ang solo artist",
                "Dahil pinapabilis nito ang kanta",
                "Dahil hindi na kailangang mag-tono ng gitara",
                "Dahil mas madali itong tugtugin kaysa regular strumming"
              ],
              "correctIndex": 0,
              "explanation": "Nagbibigay-daan ito sa solo acoustic player na magpatunog ng kumpletong banda—harmony, bass pulse, at drum backbeat—nang sabay-sabay."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.4: Percussive Slap & Chucking Rubric",
          "sheetName": "Percussive_Slap_Log",
          "description": "Subaybayan ang kalidad ng percussive slap at groove consistency.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1percussive-slap-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 15-minutong percussive slap practice.",
            "Pagsusuri sa lakas ng snare transient sound.",
            "Video submission ng percussive pop song accompaniment."
          ],
          "rubric": [
            { "criteria": "Crisp Snare Slap Transient", "points": 40 },
            { "criteria": "Tempo Steadiness on Beats 2 & 4", "points": 35 },
            { "criteria": "Clean Chord Ringing on Beats 1 & 3", "points": 25 }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 4: Genre Grooves: Reggae, Bossa Nova, Blues at OPM Folk",
    "overview": "Maging versatile rhythm hero: Kabisaduhin ang off-beat skank ng Pinoy Reggae, ang syncopated acoustic comping ng Bossa Nova, ang 12-bar shuffle ng Blues, at ang dynamic storytelling ng classic OPM Folk.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-guitar-4-1",
        "title": "Aralin 4.1: Pinoy Reggae & Ska Offbeat Skank Rhythm",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=ki2xUvLRKwQ",
        "videoTitle": "REGGAE TUTORIAL FOR BEGINNERS!! - AJ Tutorial",
        "objective": "Matutunan ang authentic reggae 'skank' chop sa upbeat ('&' of 1, 2, 3, 4) gamit ang staccato left-hand release at percussive strumming.",
        "theoryContent": "Ang Reggae ay isa sa pinaka-relaxing at sikat na genre sa Pilipinas (mula Tropical Depression hanggang Brownman Revival). Sa reggae, ang rhythm guitar ay hindi tumutugtog sa downbeat kundi sa UPBEAT!\n\n1. ANG OFFBEAT SKANK FORMULA:\n• Count: 1   &   2   &   3   &   4   &\n• Feel: [Pahinga] CHOP! [Pahinga] CHOP! [Pahinga] CHOP! [Pahinga] CHOP!\n• Ang bawat palo ng gitara ay pumapatak sa 'AND' (&) ng kumpas.\n\n2. ANG LEFT-HAND PRESSURE RELEASE (STACCATO):\nPindutin ang chord sa sandaling tumama ang pick, ngunit AGAD na luwagan ang diin ng mga daliri (nang hindi inaalis sa kuwerdas) pagkatapos ng palo! Ito ang lumilikha ng napakaikling tunog ('chok') na siyang tatak ng tunay na reggae skank.\n\n3. BARRE CHORDS SA REGGAE:\nMas madaling gawin ang reggae skank gamit ang barre chords (tulad ng Am, Dm, Em, G) dahil madaling patayin ang sustain ng lahat ng kuwerdas gamit ang kaliwang kamay.",
        "codeSnippet": "// REGGAE OFFBEAT SKANK TIMELINE:\n\nCount: 1     &     2     &     3     &     4     &\nBass: [KICK]       [SNARE]     [KICK]      [SNARE]\nGuitar:      CHOP!       CHOP!       CHOP!       CHOP!\nMotion:      DOWN        DOWN        DOWN        DOWN (o Mabilis na Upstroke)\n\nStaccato Secret: Press -> Strum -> Agad na I-relax ang kaliwang kamay!",
        "activity": {
          "title": "Gawaing Praktikal 4.1: 80 BPM Pinoy Reggae Skank Drill (Am - Dm - Em)",
          "instructions": [
            "Pumili ng A Minor barre chord sa 5th fret.",
            "Paganahin ang metronome sa 75 BPM.",
            "Iwanang walang palo ang Beat 1, at pumalo ng matalas na staccato chop sa '&'.",
            "Ulitin sa 2&, 3&, at 4& sa progression na Am -> Dm -> Em -> Am nang may smooth island bounce."
          ],
          "starterCode": "// Reggae Skank Checklist:\n[ ] Walang tumutunog sa Beat 1, 2, 3, 4 (Downbeats are silent)\n[ ] Matalas at maikli ang tunog sa bawat '&' (Staccato)\n[ ] Relaks ang kaliwang kamay sa bawat pagitan",
          "expectedOutcome": "Nakatutugtog ng authentic at bouncy na reggae rhythm nang walang tumatagas na sustain."
        },
        "exam": {
          "id": "exam-guitar-4-1",
          "title": "Pagsusulit 4.1: Reggae Skank Rhythm",
          "description": "Subukin ang kaalaman sa upbeat chops at staccato muting.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-4-1-1",
              "question": "Saang bahagi ng kumpas pumapatak ang kilalang guitar chop sa standard reggae music?",
              "options": [
                "Sa mga offbeat o 'AND' (&) counts (upbeats)",
                "Sa Beat 1 lamang",
                "Sa Beat 1 at Beat 3",
                "Sa dulo ng bawat 4 na bars"
              ],
              "correctIndex": 0,
              "explanation": "Ang reggae guitar skank ay tumatama sa mga upbeats o offbeats (& of beats 1, 2, 3, 4)."
            },
            {
              "id": "q-gt-4-1-2",
              "question": "Paano nakakamit ang maikli at malutong na 'staccato' sound sa reggae guitar chop?",
              "options": [
                "Agad na iniluluwag ang diin ng kaliwang kamay mula sa fretboard matapos tamaan ang kuwerdas",
                "Pinuputol ang kuwerdas",
                "Gumagamit ng napakakapal na metal pick",
                "Ibinababa ang volume ng gitara sa zero"
              ],
              "correctIndex": 0,
              "explanation": "Ang pag-relax sa diin ng kaliwang kamay nang hindi inaalis ang balat sa kuwerdas ay agad na pumapatay sa sustain, lumilikha ng staccato chop."
            },
            {
              "id": "q-gt-4-1-3",
              "question": "Bakit mas madaling tugtugin ang reggae gamit ang barre chords kaysa open chords?",
              "options": [
                "Dahil hawak ng barre finger ang lahat ng kuwerdas kaya madali itong i-mute nang sabay-sabay",
                "Dahil mas malakas ang barre chords",
                "Dahil bawal ang open chords sa reggae",
                "Dahil mas madaling pindutin ang barre chords"
              ],
              "correctIndex": 0,
              "explanation": "Sa barre chords, lahat ng kuwerdas ay kontrolado ng kaliwang kamay, kaya 100% nasasara ang tunog kapag nirelax ang daliri."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.1: Reggae Skank Bounce & Staccato Log",
          "sheetName": "Reggae_Skank_Log",
          "description": "Subaybayan ang kalinisan ng offbeat timing at staccato muting.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1reggae-skank-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 75 BPM hanggang 90 BPM skank timing.",
            "Pagsusuri sa kawalan ng bleed sa downbeats.",
            "Recording ng 16-bar reggae rhythm progression."
          ],
          "rubric": [
            { "criteria": "Zero Bleed on Downbeats", "points": 45 },
            { "criteria": "Crisp Staccato Release", "points": 35 },
            { "criteria": "Island Groove Bounce", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-4-2",
        "title": "Aralin 4.2: Bossa Nova Acoustic Comping & Bass-Chord Pattern",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=vCTI50i6pYo",
        "videoTitle": "Bossa Nova Guitar in 5 Easy Steps | Guitar Tutorial w/TAB - Scot Taber Guitarist",
        "objective": "Matutunan ang sopistikadong Bossa Nova acoustic rhythm: alternating thumb bass notes (strings 6 & 5) kasabay ang syncopated 3-finger chord plucking (strings 4, 3, 2) gamit ang jazz-inflected voicings.",
        "theoryContent": "Ang Bossa Nova (nilikha nina João Gilberto at Antonio Carlos Jobim sa Brazil) ay ang pinakasopistikadong acoustic guitar rhythm style sa mundo. Maririnig ito sa mga café music, lounge pop, at mga klasikong awitin tulad ng 'The Girl from Ipanema'.\n\n1. ANG FINGER ASSIGNMENT (WALANG PICK!):\n• Thumb (p): Namumuno sa mababang bass notes (6th at 5th strings). Tumutugtog sa beats 1 at 3.\n• Index (i), Middle (m), Ring (a): Magkakasabay na kumukurot sa strings 4, 3, at 2 para sa chord harmony.\n\n2. ANG 2-BAR BOSSA NOVA SYNCOPATED CLAVE:\n• Bar 1: Thumb at Chords sa Beat 1, kasunod ang syncopated chord pluck sa '&' of 2 at Beat 3.\n• Bar 2: Ang chords ay pumapatak sa mga offbeats habang ang thumb ay steady sa 1 at 3.\n\n3. ESSENTIAL BOSSA NOVA CHORD VOICINGS:\n• C Major 7 (Cmaj7): Malambing at mala-panaginip na tunog.\n• D Minor 7 (Dm7): Smooth jazz minor voicing.\n• G Dominant 7 with b9 (G7b9) o G13: Nagbibigay ng classic Brazilian tension at resolution.",
        "codeSnippet": "// BOSSA NOVA FINGERSTYLE COMPING PATTERN (2-BAR PHRASE):\n\nBar 1:\nCount:   1   &   2   &   3   &   4   &\nThumb:   T               T\nFingers: F           F       F       F\n\nBar 2:\nCount:   1   &   2   &   3   &   4   &\nThumb:   T               T\nFingers:     F       F           F",
        "activity": {
          "title": "Gawaing Praktikal 4.2: 2-Bar Bossa Nova Loop sa Cmaj7 - Dm7 - G13",
          "instructions": [
            "Itabi ang guitar pick at ilatag ang thumb sa 5th string at tatlong daliri sa strings 4, 3, at 2.",
            "Bumuo ng Cmaj7 chord.",
            "Magsanay sa Bar 1 pattern nang mabagal sa 65 BPM.",
            "Kapag naging natural na ang pag-pluck, idagdag ang Dm7 at G13 sa 2-bar cycle."
          ],
          "starterCode": "// Bossa Nova Voicings Checklist:\n[ ] Cmaj7: x-3-5-4-5-x (Root on 5th string)\n[ ] Dm7  : x-5-7-5-6-x (Root on 5th string)\n[ ] G13  : 3-x-3-4-5-x (Root on 6th string)",
          "expectedOutcome": "Nakatutugtog ng smooth at syncopated na Bossa Nova comping na may malinaw na paghihiwalay ng bass at chord plucks."
        },
        "exam": {
          "id": "exam-guitar-4-2",
          "title": "Pagsusulit 4.2: Bossa Nova Comping Mechanics",
          "description": "Subukin ang kaalaman sa Bossa Nova rhythm, finger independence, at jazz voicings.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-4-2-1",
              "question": "Aling daliri ang may pananagutan sa pagpapatunog ng alternating bass notes sa Bossa Nova guitar style?",
              "options": [
                "Thumb (Hinlalaki)",
                "Index Finger (Hintuturo)",
                "Ring Finger (Palasingsingan)",
                "Pinky (Kalingkingan)"
              ],
              "correctIndex": 0,
              "explanation": "Ang thumb ang timekeeper na tumutugtog ng mga mabababang bass notes (karaniwang sa beats 1 at 3) sa Bossa Nova."
            },
            {
              "id": "q-gt-4-2-2",
              "question": "Anong uri ng chord voicings ang karaniwang ginagamit sa Bossa Nova sa halip na simpleng open major triads?",
              "options": [
                "Extended at altered chords tulad ng Major 7th, Minor 7th, at 13th chords",
                "Heavy metal power chords (root at 5th lang)",
                "Open cowboy chords na may bukas na 1st string",
                "Mga nota sa 1st fret lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang Bossa Nova ay may impluwensya ng jazz harmony kaya gumagamit ito ng 7th, 9th, at 13th chords na may malambing at makulay na tunog."
            },
            {
              "id": "q-gt-4-2-3",
              "question": "Bakit hindi karaniwang gumagamit ng plectrum/pick sa pagtugtog ng authentic Bossa Nova?",
              "options": [
                "Dahil kailangang sabay na kurutin ng mga daliri ang 3 o 4 na kuwerdas habang hiwalay na tumutugtog ang thumb sa bass line",
                "Dahil bawal ang pick sa bansang Brazil",
                "Dahil mas mabilis masira ang gitara",
                "Dahil masyadong mahirap hawakan ang pick"
              ],
              "correctIndex": 0,
              "explanation": "Ang fingerstyle plucking ay nagbibigay-daan sa sabay-sabay na pag-atake sa mga hindi magkakatabing kuwerdas habang may hiwalay na bass rhythm."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.2: Bossa Nova Comping & Clave Tracker",
          "sheetName": "Bossa_Nova_Log",
          "description": "Subaybayan ang 2-bar syncopated Bossa Nova loop accuracy.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1bossa-nova-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng thumb at finger independence practice.",
            "Pagtukoy sa mga syncopated plucks sa Bar 2.",
            "Recording ng smooth 2-minute Bossa Nova groove."
          ],
          "rubric": [
            { "criteria": "Thumb/Finger Rhythmic Independence", "points": 45 },
            { "criteria": "Jazz Voicing Fret Accuracy", "points": 35 },
            { "criteria": "Smooth Mellow Touch", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-4-3",
        "title": "Aralin 4.3: Pinoy Blues & Rock Shuffle Rhythm (Wally's Blues)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=pu5oRnFNWGY",
        "videoTitle": "WALLY'S BLUES (Wally Gonzales) with GUITAR PRO7 TABS - alvindeleon",
        "objective": "Matutunan ang 12-bar blues shuffle rhythm: alternating root-5th at root-6th power chords na may triplet swing feel sa istilo ng mga haligi ng Pinoy Rock tulad ni Wally Gonzales.",
        "theoryContent": "Bago sumikat ang OPM rock, ang pundasyon ng Pinoy Rock (Juan dela Cruz Band, Mike Hanopol, Wally Gonzales) ay ang Blues! Sa araling ito, pag-aaralan natin ang pinaka-iconic na rhythm pattern sa rock and roll history: ang 12-Bar Blues Shuffle.\n\n1. ANG TRIPLET SWING FEEL (SHUFFLE VS STRAIGHT):\n• Straight Rock: Pantay ang dalawang 8th notes (50% - 50%).\n• Blues Shuffle: May 'swing' o 'long-short' feel (66% - 33%). Parang kabayo na tumatakbo ('da-DUM, da-DUM, da-DUM').\n\n2. ANG ROOT-5TH AT ROOT-6TH SHUFFLE GRIP:\n• Hawakan ang A5 power chord: Daliri 1 sa 4th string (2nd fret), habang bukas ang 5th string (open A).\n• Sa kumpas na 'da-DUM', ilapag ang Daliri 3 sa 4th string (4th fret) para sa A6 chord!\n• Pabalik-balik ang daliri 1 at daliri 3 nang may swing pulse.\n\n3. ANG 12-BAR BLUES FORM SA KEY OF A:\n• 4 Bars: A5-A6 (I chord)\n• 2 Bars: D5-D6 (IV chord)\n• 2 Bars: A5-A6 (I chord)\n• 1 Bar: E5-E6 (V chord)\n• 1 Bar: D5-D6 (IV chord)\n• 1 Bar: A5-A6 (I chord)\n• 1 Bar: E5 Turnaround!",
        "codeSnippet": "// 12-BAR BLUES IN A SHUFFLE TAB:\n\n   A5  A6  A5  A6        D5  D6  D5  D6        E5  E6  E5  E6\ne|---|---|---|---|    e|---|---|---|---|    e|---|---|---|---|\nB|---|---|---|---|    B|---|---|---|---|    B|---|---|---|---|\nG|---|---|---|---|    G|-2-|-4-|-2-|-4-|    G|---|---|---|---|\nD|-2-|-4-|-2-|-4-|    D|-0-|-0-|-0-|-0-|    D|-2-|-4-|-2-|-4-|\nA|-0-|-0-|-0-|-0-|    A|---|---|---|---|    A|-2-|-2-|-2-|-2-|\nE|---|---|---|---|    E|---|---|---|---|    E|-0-|-0-|-0-|-0-|\n  1 & 2 & 3 & 4 &       1 & 2 & 3 & 4 &       1 & 2 & 3 & 4 &\n\nSwing Count: '1-la-le, 2-la-le, 3-la-le, 4-la-le'",
        "activity": {
          "title": "Gawaing Praktikal 4.3: Kumpletong 12-Bar Blues Progression sa A",
          "instructions": [
            "Paganahin ang metronome sa 90 BPM at isipin ang triplet swing feel.",
            "Tugtugin ang 4 bars ng A shuffle.",
            "Lumipat sa 2 bars ng D shuffle, pabalik sa 2 bars ng A shuffle.",
            "Tapusin ang turnaround sa E (1 bar) -> D (1 bar) -> A (1 bar) -> E (1 bar).",
            "Ulitin ang buong 12 bars nang walang pagkaantala sa kumpas."
          ],
          "starterCode": "// 12-Bar Blues Map:\n[A5-A6][A5-A6][A5-A6][A5-A6] -> Bars 1 to 4\n[D5-D6][D5-D6]               -> Bars 5 & 6\n[A5-A6][A5-A6]               -> Bars 7 & 8\n[E5-E6][D5-D6][A5-A6][E5-E6] -> Bars 9 to 12 (Turnaround)",
          "expectedOutcome": "Nakatutugtog ng buong 12-bar blues progression nang may authentic Pinoy rock shuffle feel."
        },
        "exam": {
          "id": "exam-guitar-4-3",
          "title": "Pagsusulit 4.3: Blues Shuffle Rhythm",
          "description": "Subukin ang kaalaman sa 12-bar form at triplet swing mechanics.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-4-3-1",
              "question": "Ano ang pagkakaiba ng blues shuffle sa straight rock rhythm?",
              "options": [
                "Ang shuffle ay may swing/triplet feel kung saan ang unang nota ay mas mahaba kaysa sa pangalawa ('long-short'), hindi pantay",
                "Ang shuffle ay walang kumpas",
                "Ang shuffle ay tinutugtog lamang sa nylon strings",
                "Ang shuffle ay laging 200 BPM"
              ],
              "correctIndex": 0,
              "explanation": "Ang shuffle ay nakabatay sa triplet subdivision kung saan pinagsasama ang unang dalawang triplets, na lumilikha ng tanyag na blues bounce."
            },
            {
              "id": "q-gt-4-3-2",
              "question": "Ilang measures (bars) mayroon ang karaniwang standard blues progression bago ito mag-loop?",
              "options": [
                "12 measures (12-Bar Blues)",
                "8 measures",
                "16 measures",
                "4 measures"
              ],
              "correctIndex": 0,
              "explanation": "Ang 12-Bar Blues ang pinakasikat na standard musical form sa blues at maagang rock and roll."
            },
            {
              "id": "q-gt-4-3-3",
              "question": "Sa Key of A Major, ano ang tatlong chords (I, IV, V) na bumubuo sa 12-bar blues?",
              "options": [
                "A, D, at E",
                "C, F, at G",
                "G, C, at D",
                "E, A, at B"
              ],
              "correctIndex": 0,
              "explanation": "Sa Key of A, ang I chord ay A, ang IV chord ay D, at ang V chord ay E."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.3: 12-Bar Blues Shuffle Scorecard",
          "sheetName": "Blues_Shuffle_Log",
          "description": "Itala ang iyong shuffle swing consistency sa buong 12-bar form.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1blues-shuffle-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 12-bar progression repetitions nang walang sablay sa bar count.",
            "Pagtukoy sa kalinisan ng root-6th finger stretch.",
            "Recording ng 12-bar rhythm accompaniment."
          ],
          "rubric": [
            { "criteria": "Authentic Blues Swing Feel", "points": 40 },
            { "criteria": "12-Bar Form Accuracy", "points": 35 },
            { "criteria": "Clean Power Chord Transitions", "points": 25 }
          ]
        }
      },
      {
        "id": "les-guitar-4-4",
        "title": "Aralin 4.4: OPM Contemporary Acoustic Strumming & Dynamic Builds",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=4VRacu1tobM",
        "videoTitle": "Multo - Cup of Joe | EASY! Guitar Tutorial - Gelo Resuello",
        "objective": "Pag-aralan ang rhythmic dynamics sa mga modernong OPM hits (tulad ng 'Multo' ng Cup of Joe): light fingerstyle sa verse, building palm muting sa pre-chorus, at full acoustic explosion sa chorus.",
        "theoryContent": "Ang modernong OPM acoustic rhythm ay kilala sa buong mundo dahil sa emosyon at storytelling nito. Hindi ka lang basta nag-i-strum; sinasamahan mo ang kwento ng awitin mula sa pinakatahimik na bulong hanggang sa pinakamalakas na sigaw ng puso!\n\n1. ANG 3-STAGE DYNAMIC ARC NG OPM SONG:\n• Verse (Intimacy): Banayad na plucking o light single-strum rings. Maraming espasyo upang lumutang ang boses ng mang-aawit.\n• Pre-Chorus (Tension & Anticipation): Pagsisimula ng palm muting na may dahan-dahang paglakas (crescendo). Ang kumpas ay nagiging mas madiin upang ihanda ang tagapakinig sa pagsabog.\n• Chorus (Release & Power): Buong lakas na open strumming gamit ang wrist power at accents sa beats 2 at 4. Dito ibinubuhos ang energy!\n\n2. MGA FAVORITE OPM CHORD EMBELLISHMENTS:\n• Paggamit ng Cadd9 sa halip na simpleng C major.\n• Paggamit ng Dsus4 bago mag-resolve sa D major.\n• Em7 sa halip na standard Em para sa bukas at modernong acoustic shimmer.",
        "codeSnippet": "// MODERN OPM DYNAMIC ARRANGEMENT TEMPLATE:\n\n[VERSE 1]      -> Pianissimo (pp): Soft thumb pluck o single downstrokes\n[PRE-CHORUS]   -> Mezzo-Forte (mf): Palm-muted 8th note chugs + Crescendo\n[CHORUS]       -> Forte (ff): Full Universal Strum with heavy accents\n[BRIDGE]       -> Subito Piano (sp): Biglang hihina bago ang Final Chorus!\n\nEmbellishment Secret: Sa dulo ng Chorus, pumindot ng Dsus4 (pinky sa 1st string 3rd fret) bago ibalik sa D Major para sa madramang OPM resolution.",
        "activity": {
          "title": "Gawaing Praktikal 4.4: Dynamic Storytelling Performance ng Modern OPM Track",
          "instructions": [
            "Tugtugin ang progression: G -> D -> Em7 -> Cadd9.",
            "Round 1 (Verse): Banayad na single downstroke lamang sa Beat 1 ng bawat chord.",
            "Round 2 (Pre-Chorus): Palm-muted 8th notes na dahan-dahang lumalakas.",
            "Round 3 (Chorus): Full energetic Universal Strumming.",
            "Damhin ang dynamic contrast sa pagitan ng tatlong rounds."
          ],
          "starterCode": "// OPM Dynamic Progression Checklist:\n[ ] Round 1 (Verse)     : Pabulong at may breathing room\n[ ] Round 2 (Pre-Chorus): May tension at building intensity\n[ ] Round 3 (Chorus)    : Malutong, makapal, at energetic",
          "expectedOutcome": "Kayang i-control ang volume at emosyon ng gitara upang magkwento kasabay ng awitin."
        },
        "exam": {
          "id": "exam-guitar-4-4",
          "title": "Pagsusulit 4.4: OPM Acoustic Dynamics",
          "description": "Subukin ang kaalaman sa dynamic shaping at OPM acoustic accompaniment.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-4-4-1",
              "question": "Ano ang layunin ng pagpapahina ng tugtog (low dynamics) sa Verse ng isang OPM acoustic song?",
              "options": [
                "Upang bigyan ng espasyo ang lyrics at boses ng mang-aawit na marinig nang malinaw at intimate",
                "Upang makapagpahinga ang kamay ng gitarista",
                "Dahil bawal mag-strum nang malakas sa simula",
                "Para hindi magising ang kapitbahay"
              ],
              "correctIndex": 0,
              "explanation": "Ang mababang volume sa verse ay nagbibigay-diin sa boses ng mang-aawit at lumilikha ng espasyo para sa dynamic buildup pagdating sa chorus."
            },
            {
              "id": "q-gt-4-4-2",
              "question": "Anong embellishment chord ang karaniwang inilalagay bago mag-resolve sa D Major sa mga OPM pop ballads?",
              "options": [
                "Dsus4 (idinadagdag ang pinky sa 1st string 3rd fret)",
                "F# minor",
                "Bb diminished",
                "E power chord"
              ],
              "correctIndex": 0,
              "explanation": "Ang Dsus4 ay nagbibigay ng matamis na harmonic tension na nire-resolve sa D Major sa maraming OPM acoustic arrangements."
            },
            {
              "id": "q-gt-4-4-3",
              "question": "Ano ang ibig sabihin ng terminong 'Crescendo' sa pre-chorus ng isang kanta?",
              "options": [
                "Dahan-dahang paglakas ng volume at intensity ng pagtugtog",
                "Biglang paghinto ng kanta",
                "Pagpalit ng gitara",
                "Pagbilis ng tempo"
              ],
              "correctIndex": 0,
              "explanation": "Ang crescendo ay ang unti-unting pagtaas ng lakas ng tunog upang lumikha ng anticipation at pananabik bago sumabog ang chorus."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.4: OPM Dynamic Arc Performance Log",
          "sheetName": "OPM_Dynamics_Log",
          "description": "Itala ang dynamic range and emotional storytelling sa OPM acoustic practice.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1opm-dynamics-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng volume levels (dB o subjective scale 1-10) sa Verse, Pre-Chorus, at Chorus.",
            "Pagtukoy sa kalinisan ng Dsus4 embellishments.",
            "Video submission ng buong OPM dynamic arrangement."
          ],
          "rubric": [
            { "criteria": "Dynamic Contrast (pp to ff)", "points": 45 },
            { "criteria": "Chord Embellishment Precision", "points": 30 },
            { "criteria": "Emotional Groove Delivery", "points": 25 }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 5: Contemporary Church Praise & Worship Rhythm Guitar",
    "overview": "Maging sandigan ng church music ministry: Matutunan ang modernong open worship voicings (G, Cadd9, Em7, D/F#), ang siyensya ng Capo para sa transposition, ambient acoustic swells, at ang tamang frequency pocket sa live church band.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-guitar-5-1",
        "title": "Aralin 5.1: Worship Acoustic Voicings (G, Cadd9, Em7, D/F#)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=xa2eAGscTC0",
        "videoTitle": "Tunay na Diyos: Worship Guitar tutorial for beginner only - GH Guitar Tutorial",
        "objective": "Kabisaduhin ang 'Big 4' modern church worship open chords kung saan nakapako ang Ring at Pinky fingers sa 3rd fret ng 1st at 2nd strings habang naglilipat ng bass notes.",
        "theoryContent": "Kung nanonood ka ng contemporary church worship bands (tulad ng Hillsong, Elevation, Bethel, o mga Tagalog praise ministries), mapapansin mo na napakaganda at mala-kampana ng tunog ng kanilang acoustic guitar. Ang sikreto ay ang 'Two-Finger Anchor' worship voicings!\n\n1. ANG TWO-FINGER ANCHOR SECRET:\nIpatong ang Daliri 3 sa 2nd string (3rd fret - D note) at Daliri 4 sa 1st string (3rd fret - High G note). ANG DALAWANG DALIRING ITO AY HINDI NA KELANMAN AALIS sa buong kanta!\n\n2. ANG 4 NA WORSHIP CHORDS:\n• G Major: Daliri 2 sa 6th string 3rd fret, Daliri 1 sa 5th string 2nd fret.\n• Cadd9: Mula sa G, ibaba lamang ang daliri 1 at 2 nang tig-isang kuwerdas (5th at 4th strings). Napakatamis at buong tunog!\n• E Minor 7 (Em7): Daliri 1 at 2 sa 5th at 4th strings 2nd fret. Mas maaliwalas kaysa standard Em.\n• D/F# (D over F-sharp): Daliri 1 sa 3rd string 2nd fret, at gamitin ang hinlalaki (thumb over the top) o daliri 2 sa 6th string 2nd fret. Ito ang pinakasikat na passing chord sa church music!\n\n3. BAKIT ITO EPEKTIBO SA SIMBAHAN?\nDahil ang High D at High G ay patuloy na tumutunog sa bawat chord, nagbibigay ito ng makinis na 'drone' effect na sumasabay sa worship pads ng keyboardist.",
        "codeSnippet": "// MODERN WORSHIP 'TWO-FINGER ANCHOR' VOICINGS:\n\n     G Major                Cadd9                  Em7                   D/F#\n   e|---|---|-4-|         e|---|---|-4-|         e|---|---|-4-|         e|---|---|-4-|\n   B|---|---|-3-|         B|---|---|-3-|         B|---|---|-3-|         B|---|---|-3-|\n   G|---|---|---|         G|---|---|---|         G|---|---|---|         G|---|-1-|---|\n   D|---|---|---|         D|---|-1-|---|         D|---|-2-|---|         D|---|---|---|\n   A|---|-1-|---|         A|---|---|-2-|         A|---|-1-|---|         A|---|---|---| (X)\n   E|---|---|-2-|         E|---|---|---| (X)     E|---|---|---|         E|---|-T-|---| (F# Root)\n\nAnchor: Daliri 3 & 4 nakatutok sa 3rd fret ng B at High E strings sa LAHAT ng 4 na chords!",
        "activity": {
          "title": "Gawaing Praktikal 5.1: The Seamless Worship Flow (G - D/F# - Em7 - Cadd9)",
          "instructions": [
            "I-lock ang daliri 3 at 4 sa 3rd fret ng strings 1 at 2.",
            "Tugtugin ang G Major (4 beats) -> D/F# (4 beats) -> Em7 (4 beats) -> Cadd9 (4 beats).",
            "Pansinin kung gaano kabilis lumipat dahil dalawang daliri lamang ang nagbabago ng posisyon.",
            "Ulitin ang loop nang 8 beses sa banayad na 68 BPM."
          ],
          "starterCode": "// Worship Flow Checklist:\n[ ] Hindi gumalaw ang Ring at Pinky fingers\n[ ] Malinis ang F# bass note sa D/F#\n[ ] Mala-kampana at buo ang tunog ng bawat chord",
          "expectedOutcome": "Nakatutugtog ng modern worship chord progression nang perpektong makinis at walang pagkaantala."
        },
        "exam": {
          "id": "exam-guitar-5-1",
          "title": "Pagsusulit 5.1: Modern Worship Voicings",
          "description": "Subukin ang kaalaman sa two-finger anchor chords at worship harmonic textures.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-5-1-1",
              "question": "Aling dalawang daliri ang nananatiling nakapako sa 3rd fret ng 1st at 2nd strings sa modern worship voicings (G, Cadd9, Em7, D/F#)?",
              "options": [
                "Daliri 3 (Ring) at Daliri 4 (Pinky)",
                "Daliri 1 (Index) at Daliri 2 (Middle)",
                "Thumb lamang",
                "Wala, lahat ay nagpapalit"
              ],
              "correctIndex": 0,
              "explanation": "Ang Ring at Pinky fingers ang nagsisilbing static harmonic anchor sa 3rd fret ng B at High E strings, lumilikha ng sikat na modern worship drone sound."
            },
            {
              "id": "q-gt-5-1-2",
              "question": "Bakit ginagamit ang D/F# sa halip na standard D Major sa progression na G -> D/F# -> Em7?",
              "options": [
                "Dahil lumilikha ito ng makinis na descending bassline (G -> F# -> E) na nagbibigay ng magandang daloy sa kanta",
                "Dahil mas madali itong pindutin kaysa D",
                "Dahil bawal ang standard D sa simbahan",
                "Dahil mas malakas ang tunog nito"
              ],
              "correctIndex": 0,
              "explanation": "Ang D/F# ay nagbibigay ng stepwise walking bassline (Root G sa 6th string, F# sa 6th string, patungong Open E) na napakasarap pakinggan sa worship."
            },
            {
              "id": "q-gt-5-1-3",
              "question": "Ano ang tawag sa chord na Cadd9 kumpara sa standard C Major?",
              "options": [
                "C Major na may dagdag na 9th note (D note) na nagbibigay ng bukas at shimmer na tunog",
                "C chord na may 9 na daliri",
                "C Minor chord",
                "C chord na tinutugtog sa 9th fret"
              ],
              "correctIndex": 0,
              "explanation": "Ang Cadd9 ay C Major triad (C-E-G) na dinagdagan ng 9th scale degree (D), nag-aalis ng 'plain' sound at nagbibigay ng contemporary acoustic resonance."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.1: Worship Voicings Transition Diary",
          "sheetName": "Worship_Voicings_Log",
          "description": "Subaybayan ang kalinisan ng Two-Finger Anchor chords sa 68 BPM worship tempo.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1worship-voicings-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng G-D/F#-Em7-Cadd9 transitions.",
            "Pagtukoy sa kalinisan ng D/F# bass note.",
            "Recording ng 4-bar worship loop na may reverent touch."
          ],
          "rubric": [
            { "criteria": "Anchor Finger Stability", "points": 45 },
            { "criteria": "D/F# Thumb/Finger Bass Clarity", "points": 35 },
            { "criteria": "Fluid Church Tempo Delivery", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-5-2",
        "title": "Aralin 5.2: Paggamit ng Capo para sa Madaling Key Transposition",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=WUn-xOfvq0w",
        "videoTitle": "How to use guitar capo - Markmusic",
        "objective": "Matutunan ang siyensya ng Capo: paano tumugtog sa kahit anong Key (tulad ng Key of E, F, Ab, o Bb) gamit ang pamilyar na open G at C chord shapes nang hindi pinapahirapan ang boses ng mang-aawit.",
        "theoryContent": "Sa live church worship o acoustic jamming, madalas sabihin ng mang-aawit: 'Kuya, masyadong mababa ang Key of G para sa boses ko, pwede bang gawing Key of B?'. Kung hindi ka marunong mag-capo, mapipilitan kang mag-barre chords buong kanta at mangangawit ka! Sa tulong ng Capo, mananatili ang malambing na open chords mo sa anumang susi.\n\n1. ANO ANG GINAGAWA NG CAPO?\nAng capo ay isang mekanikal na clamp na pumipisil sa lahat ng anim na kuwerdas sa isang fret, na epektibong nagpapaikli sa leeg ng gitara at nagtataas ng pitch ng open strings.\n\n2. ANG CAPO FORMULA (BAWAT FRET = 1 SEMITONE / HALF-STEP):\n• Kapag tumugtog ka ng G-shape:\n  - Walang Capo = Key of G\n  - Capo 2 = Key of A\n  - Capo 4 = Key of B\n  - Capo 5 = Key of C\n• Kapag tumugtog ka ng C-shape:\n  - Walang Capo = Key of C\n  - Capo 2 = Key of D\n  - Capo 4 = Key of E\n\n3. PRO TIP SA PAG-CLAMP NG CAPO:\nI-clamp ang capo malapit sa likod ng fret wire (tulad ng daliri mo) at TIGNAN kung pantay ang diin. Laging mag-recheck ng tuning pagkatapos maglagay ng capo dahil bahagyang nahihila ang kuwerdas!",
        "codeSnippet": "// CAPO TRANSPOSITION CHEAT SHEET:\n\nTarget Key | Gamiting Shape | Pwesto ng Capo\n-----------|----------------|---------------\nKey of G   | G Shapes       | No Capo\nKey of Ab  | G Shapes       | Capo 1st Fret\nKey of A   | G Shapes       | Capo 2nd Fret\nKey of Bb  | G Shapes       | Capo 3rd Fret\nKey of B   | G Shapes       | Capo 4th Fret\nKey of C   | G Shapes       | Capo 5th Fret\n\nKey of D   | C Shapes       | Capo 2nd Fret\nKey of Eb  | C Shapes       | Capo 3rd Fret\nKey of E   | C Shapes       | Capo 4th Fret\nKey of F   | C Shapes       | Capo 5th Fret",
        "activity": {
          "title": "Gawaing Praktikal 5.2: Transposing Songs on the Fly gamit ang Capo",
          "instructions": [
            "Kabitan ng Capo ang 2nd Fret ng iyong gitara.",
            "I-recheck ang tuning ng bawat kuwerdas gamit ang tuner.",
            "Tugtugin ang pamilyar na G -> D/F# -> Em7 -> Cadd9 shapes.",
            "Pakinggan na ang aktwal na tunog na lumalabas ay Key of A Major (A -> E/G# -> F#m7 -> Dadd9) nang hindi ka nag-iiba ng fingering!"
          ],
          "starterCode": "// Capo Protocol Checklist:\n[ ] Capo nakalapat nang tuwid sa likod ng fret wire\n[ ] Walang string na nag-buzz o naipit nang baluktot\n[ ] Re-tuned gamit ang tuner matapos ikabit ang capo\n[ ] Tugtugin ang G shape at pakinggan ang Key of A",
          "expectedOutcome": "Kayang mag-transpose ng anumang kanta sa tamang vocal range ng singer sa loob ng 10 segundo gamit ang capo."
        },
        "exam": {
          "id": "exam-guitar-5-2",
          "title": "Pagsusulit 5.2: Capo Mechanics at Transposition",
          "description": "Subukin ang kaalaman sa capo math at fret calculations.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-5-2-1",
              "question": "Kung ilalagay mo ang Capo sa 2nd Fret at tutugtugin ang open G Major shape, anong aktwal na Key ang tutunog?",
              "options": [
                "Key of A Major (dahil ang 2 frets pataas mula G ay A)",
                "Key of C Major",
                "Key of F Major",
                "Mananatiling Key of G"
              ],
              "correctIndex": 0,
              "explanation": "Bawat fret ay nagtataas ng 1 half-step: G -> G# (1st fret) -> A (2nd fret)."
            },
            {
              "id": "q-gt-5-2-2",
              "question": "Bakit kailangang i-recheck ang tono ng gitara matapos ikabit ang capo sa fretboard?",
              "options": [
                "Dahil ang clamp pressure ng capo ay maaaring humila sa mga kuwerdas nang bahagyang sharp",
                "Dahil lumuluwag ang mga tuning pegs",
                "Dahil nagbabago ang kapal ng kuwerdas",
                "Walang dahilan, bawal magtono kapag may capo"
              ],
              "correctIndex": 0,
              "explanation": "Kahit ang pinakamagandang capo ay may posibilidad na humila sa kuwerdas pataas nang bahagya (sharp), kaya obligasyon ang 10-segundong tuning recheck."
            },
            {
              "id": "q-gt-5-2-3",
              "question": "Kung nais mong tumugtog sa Key of E Major gamit ang open C chord shapes, saang fret dapat ilagay ang capo?",
              "options": [
                "Capo sa 4th Fret (C -> C# -> D -> D# -> E)",
                "Capo sa 1st Fret",
                "Capo sa 7th Fret",
                "Walang Capo"
              ],
              "correctIndex": 0,
              "explanation": "Mula C hanggang E ay may apat na half-steps (semitones), kaya inilalagay ang capo sa 4th fret."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.2: Capo Transposition Master Chart",
          "sheetName": "Capo_Transposition_Log",
          "description": "Subaybayan ang capo calculations para sa iba't ibang vocal keys.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1capo-transposition-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Kumpletong talaan ng transpositions para sa 5 karaniwang kanta sa simbahan.",
            "Pagtukoy sa mga pitch adjustments matapos mag-capo.",
            "Recording ng kanta na tinugtog sa 2 magkaibang capo positions."
          ],
          "rubric": [
            { "criteria": "Capo Calculation Accuracy", "points": 45 },
            { "criteria": "Post-Capo Tuning Precision", "points": 35 },
            { "criteria": "Tonal Clarity Across All Strings", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-5-3",
        "title": "Aralin 5.3: Praise & Worship Strumming Flow & Dynamic Swells",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=SaVYNh_vP7o",
        "videoTitle": "Sukdulang Biyaya-Worship Guitar Tutorial With Chords and Lyrics - GH Guitar Tutorial",
        "objective": "Pag-aralan ang rhythmic flow sa praise and worship: ambient single strum rings habang prayer/ministry time, steady 8th-note pulse, at 16th-note dynamic driving strumming sa koro.",
        "theoryContent": "Ang church rhythm guitarist ay hindi lang tumutugtog para sa sarili—ikaw ay katuwang sa paglikha ng kapaligiran ng panalangin at pagsamba (atmosphere of worship). Ang maling pag-strum (tulad ng sobrang ingay habang nananalangin ang pastor) ay sumisira sa daloy ng serbisyo.\n\n1. ANG 4 NA YUGTO NG WORSHIP RHYTHM FLOW:\n• Stage 1: Ambient Ring / Free Flow (Prayer & Altar Call): Isang mabagal na downstroke bawat chord change. Hayaang tumunog ang acoustic shimmer habang nagpapatuloy ang keyboard pad. Huwag mag-strum nang paulit-ulit!\n• Stage 2: Steady 8th-Note Pulse (Verse 1): Banayad na down-up strumming na nakalapat sa hi-hat ng drummer.\n• Stage 3: The Building Swell (Pre-Chorus): Pataas na volume, pagpasok ng madiin na accents sa beats 2 at 4.\n• Stage 4: Driving 16th-Note Praise (Chorus & Outro): Buong buhos ng enerhiya gamit ang 16th-note subdivisions para sa masiglang pagpupuri!\n\n2. ANG PICK THICKNESS SECRET SA ACOUSTIC WORSHIP:\nPara sa makinis na worship strumming, gumamit ng medium/thin pick (0.60mm hanggang 0.73mm tulad ng Dunlop Tortex Orange o Yellow). Ang bahagyang flex ng pick ay nag-aalis ng matigas na 'clack' sound at nagbibigay ng malasutlang kumpas.",
        "codeSnippet": "// WORSHIP SERVICE DYNAMIC SPECTRUM:\n\nPrayer/Ministry Time:  Single Downstroke ring bawat 4 bars (~40 dB)\nVerse 1:              Light 8th Strum (D - D - D - D) (~60 dB)\nPre-Chorus:           Building 8ths with accents on 2 & 4 (~75 dB)\nChorus & Bridge:      Full 16th Universal Flow (D-D-U-U-D-U with accents) (~90 dB)\n\nPick Recommendation: 0.60mm - 0.73mm Nylon/Tortex para sa malasutlang acoustic shimmer.",
        "activity": {
          "title": "Gawaing Praktikal 5.3: The 4-Stage Worship Atmosphere Simulation",
          "instructions": [
            "Pindutin ang worship chords: G -> D/F# -> Em7 -> Cadd9 sa 70 BPM.",
            "Yugto 1 (4 bars): Ambient Single Ring lamang sa bawat bar.",
            "Yugto 2 (4 bars): Banayad na 8th-note pulse.",
            "Yugto 3 (4 bars): Building crescendo na may accents sa beats 2 at 4.",
            "Yugto 4 (4 bars): Buong 16th-note driving praise strumming."
          ],
          "starterCode": "// Worship Simulation Protocol:\n[ ] Stage 1 (Ambient) : 1 Strum bawat bar (Reverent & Quiet)\n[ ] Stage 2 (Pulse)   : Soft steady 8ths\n[ ] Stage 3 (Build)   : Accented crescendo\n[ ] Stage 4 (Driving) : Full energetic praise",
          "expectedOutcome": "Kayang sumabay sa emosyon at daloy ng worship service nang hindi nangingibabaw o sumisira sa panalangin."
        },
        "exam": {
          "id": "exam-guitar-5-3",
          "title": "Pagsusulit 5.3: Church Worship Dynamic Flow",
          "description": "Subukin ang kaalaman sa worship rhythm stages at band sensitivity.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-5-3-1",
              "question": "Ano ang pinakaangkop na paraan ng pagtugtog ng acoustic guitar habang nananalangin ang pastor o habang may altar call sa simbahan?",
              "options": [
                "Ambient single downstroke rings na hinahayaang tumunog nang malinis kasabay ng keyboard pads",
                "Malakas at mabilis na funk rhythm",
                "Heavy metal power chords na may distortion",
                "Pagpalo nang mabilis sa 16th notes"
              ],
              "correctIndex": 0,
              "explanation": "Sa panahon ng panalangin, kailangan ng espasyo at katahimikan; ang single chord ring ay nagbibigay ng suporta nang hindi sumasapaw sa boses ng nananalangin."
            },
            {
              "id": "q-gt-5-3-2",
              "question": "Anong kapal ng guitar pick ang karaniwang inirerekomenda para sa malasutla at makinis na acoustic worship strumming?",
              "options": [
                "Medium-thin pick (humigit-kumulang 0.60mm hanggang 0.73mm) na may sapat na flex",
                "Makapal na 2.0mm jazz pick na matigas",
                "Barya o metal pick",
                "Kutsara"
              ],
              "correctIndex": 0,
              "explanation": "Ang 0.60mm hanggang 0.73mm pick ay may tamang flexibility upang dumausdos sa mga kuwerdas nang walang matigas at nakakairitang 'clacking' noise."
            },
            {
              "id": "q-gt-5-3-3",
              "question": "Ano ang ibig sabihin ng 'Playing with Sensitivity' sa konteksto ng praise and worship band?",
              "options": [
                "Pakikinig sa worship leader at kapwa musikero, at pag-aakma ng lakas at kumpas ng gitara ayon sa sandali ng pagsamba",
                "Pagtugtog habang umiiyak",
                "Pag-iwas sa pagpindot sa matataas na frets",
                "Pagsunod lamang sa sariling kagustuhan"
              ],
              "correctIndex": 0,
              "explanation": "Ang musical sensitivity sa ministry ay ang pakikiramdam sa daloy ng pagsamba, pagbibigay ng suporta sa tamang dynamics, at pakikiisa sa buong team."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.3: Worship Set Dynamic Flow Tracker",
          "sheetName": "Worship_Flow_Log",
          "description": "Subaybayan ang paglipat sa 4 na yugto ng worship dynamics.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1worship-flow-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng dynamic transitions sa 15-minutong simulated worship set.",
            "Pagtukoy sa pick control at ambient ring decay.",
            "Video submission ng 4-stage worship flow."
          ],
          "rubric": [
            { "criteria": "Atmospheric Ambient Control", "points": 40 },
            { "criteria": "Dynamic Swell Progression", "points": 35 },
            { "criteria": "Driving Chorus Precision", "points": 25 }
          ]
        }
      },
      {
        "id": "les-guitar-5-4",
        "title": "Aralin 5.4: Church Band Acoustic & Electric Rhythm Pocket",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=NkwilZDMfAg",
        "videoTitle": "Dakilang Katapatan: Worship Guitar Tutorial with Chords and Lyrics - GH Guitar Tutorial",
        "objective": "Matutunan ang frequency separation sa live band: paano nagtatambal ang acoustic guitar (top-end shimmer) at electric rhythm guitar (mid-range drive, palm muting) nang hindi nagsasapawan sa bass at keyboard.",
        "theoryContent": "Bakit minsan ay 'magulo' o 'maputik' (muddy) ang tunog ng church band sa worship service? Dahil lahat ng instrumento ay tumutugtog sa parehong frequency at parehong paraan! Bilang rhythm guitarist, responsibilidad mong hanapin ang iyong 'sonikong espasyo' sa mix.\n\n1. ANG FREQUENCY SEPARATION SA LIVE MIX:\n• Bass Guitar & Kick Drum: Nagmamay-ari ng Low End (40 Hz - 200 Hz).\n• Keyboard & Piano: Nagmamay-ari ng Low-Mids at High Pads.\n• Acoustic Rhythm Guitar: Nagmamay-ari ng High-Mids at Air/Shimmer (2 kHz - 10 kHz). Ang acoustic guitar ay epektibong isang percussive cymbal/hi-hat na may tono! Huwag i-boost ang bass knob sa acoustic guitar pickup EQ!\n• Electric Rhythm Guitar: Nagmamay-ari ng Punchy Mids (500 Hz - 2.5 kHz) na may light overdrive o edge-of-breakup tone.\n\n2. COOPERATIVE RHYTHM PLAYING (HINDI DAPAT MAGKOPYA):\n• Kung ang Acoustic Guitar ay nag-i-strum nang buo at malakas sa open chords, ang Electric Guitar ay dapat mag-palm mute o magtugtog ng matataas na triad inversions!\n• Kung ang Electric Guitar ang nagda-drive gamit ang power chords sa chorus, ang Acoustic Guitar ang magpapanatili ng matatag na percussive rhythmic pulse.",
        "codeSnippet": "// CHURCH BAND FREQUENCY & ROLE SEPARATION:\n\n[LOW END]    40-200 Hz   : Bass Guitar & Bass Drum (Bawal sumawsaw ang gitara!)\n[LOW-MIDS]   200-800 Hz  : Piano Chords, Snare body, Vocal warmth\n[MID-PUNCH]  800-2.5 kHz : Electric Guitar Overdrive & Rhythm Drive\n[TOP SHIMMER]2.5-10 kHz  : Acoustic Guitar Strumming & Hi-Hat Shimmer\n\nAcoustic Preamp EQ Tip: I-cut ang Bass knob (-3dB), panatilihin ang Mids flat, at i-boost nang bahagya ang Treble (+2dB) para sa malinis na kristal na tunog.",
        "activity": {
          "title": "Gawaing Praktikal 5.4: Acoustic vs Electric Rhythm Role Simulation",
          "instructions": [
            "Pakinggan ang isang worship backing track (may drums, bass, at piano).",
            "Magsanay bilang Acoustic Guitarist: Mag-strum sa upper 4 strings nang may focus sa percussive shimmer sa beats 2 at 4.",
            "Magsanay bilang Electric Guitarist: Mag-palm mute sa lower power chords (G5 - D5 - E5 - C5) gamit ang light overdrive.",
            "Pansinin kung paanong ang dalawang magkaibang estilo ay lumilikha ng dambuhalang tunog kapag pinagsama nang hindi nagkakagulo."
          ],
          "starterCode": "// Role Separation Checklist:\n[ ] Acoustic: Walang mabigat na bass boom na sumasapaw sa bass guitar\n[ ] Electric: Malinis ang mid-range drive nang walang labis na distortion\n[ ] Locked-in ang dalawang gitara sa snare backbeat",
          "expectedOutcome": "Naiintindihan ang tamang EQ at role separation upang maging paboritong rhythm guitarist ng bawat sound engineer."
        },
        "exam": {
          "id": "exam-guitar-5-4",
          "title": "Pagsusulit 5.4: Band Sonic Pocket at EQ Separation",
          "description": "Subukin ang kaalaman sa band frequency management at rhythm collaboration.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-5-4-1",
              "question": "Anong frequency range ang pangunahing inookupa ng acoustic rhythm guitar sa isang modernong worship band mix?",
              "options": [
                "High-Mids at Highs (Shimmer at Percussive Air mula 2 kHz hanggang 10 kHz)",
                "Sub-Bass mula 20 Hz hanggang 60 Hz",
                "Sobrang mababang frequencies tulad ng kick drum",
                "Wala, hindi naririnig ang acoustic sa banda"
              ],
              "correctIndex": 0,
              "explanation": "Ang acoustic guitar ay nagbibigay ng percussive air, articulation, at shimmer sa high-mids, na kumukomplemento sa mababang tunog ng bass at keyboard."
            },
            {
              "id": "q-gt-5-4-2",
              "question": "Bakit madalas i-cut o bawasan ng sound engineer ang mababang bass frequency knob sa acoustic guitar DI box sa simbahan?",
              "options": [
                "Upang maiwasan ang nakakayanig na feedback (boominess) at hindi sumapaw sa bass guitar at kick drum",
                "Dahil sira ang kable",
                "Dahil mas gusto ng engineer ang tunog ng ukelele",
                "Para mapilitan ang gitarista na magpalit ng strings"
              ],
              "correctIndex": 0,
              "explanation": "Ang labis na low-end mula sa acoustic pickup ay nagdudulot ng acoustic feedback at maputik na mix na sumasapaw sa tunay na bass player."
            },
            {
              "id": "q-gt-5-4-3",
              "question": "Kung ang acoustic guitarist ay nag-i-strum na ng buong open chords sa kanta, ano ang pinakamagandang gawin ng electric rhythm guitarist?",
              "options": [
                "Magpatugtog ng komplementaryong bahagi tulad ng palm-muted power chords o matataas na triad accents upang magdagdag ng kulay",
                "Gayahin nang 100% ang eksaktong open chords sa acoustic guitar sa parehong lakas",
                "Patayin ang gitara at umalis sa entablado",
                "Magpatugtog ng napakalakas na heavy metal shredding solo habang nagpe-preach"
              ],
              "correctIndex": 0,
              "explanation": "Ang magagaling na gitarista ay nagtutulungan; ang electric player ay nagbibigay ng komplementaryong texture (palm muting, triads, o swells) na nagpapalaki sa kabuuang tunog."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.4: Band Mix & Frequency Management Rubric",
          "sheetName": "Band_Mix_Log",
          "description": "Subaybayan ang frequency management at complementary rhythm playing sa church rehearsals.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1band-mix-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Pagsusuri ng sariling acoustic EQ settings sa amplifier/DI.",
            "Talaan ng complementary rhythm parts kasama ang electric guitarist/keyboardist.",
            "Audio recording ng full band rehearsal mix evaluation."
          ],
          "rubric": [
            { "criteria": "Sonic Clarity (No Muddy Clash)", "points": 45 },
            { "criteria": "Complementary Rhythm Placement", "points": 35 },
            { "criteria": "Sensitivity to Sound Engineer Cues", "points": 20 }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 6: Pro Rhythm Mastery, Funk Scratching, Nashville Numbers at Capstone",
    "overview": "Umakyat sa tugatog ng propesyonalismo: Kabisaduhin ang funk 16th-note scratching at motor hand mechanics, gamitin ang Nashville Number System para makasabay sa kahit anong live jam, i-lock ang groove sa drummer, at i-record ang Capstone Showcase.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-guitar-6-1",
        "title": "Aralin 6.1: Funk 16th-Note Scratching & Ghost Strumming",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=Bt8GqIUJf1k",
        "videoTitle": "Scratch Strum Fundamentals - Funk Rhythm Guitar Lesson - Matt Lake",
        "objective": "Kabisaduhin ang 'Motor Hand' technique: tuloy-tuloy na 16th-note pendulum motion ng kanang kamay habang ang kaliwang kamay ang nagdedesisyon kung kelan lilitaw ang buong chord o percussive muted scratch ('chk-a-chk-a').",
        "theoryContent": "Kung nais mong magkaroon ng pinakamatinding rhythm chops sa entablado, kailangan mong matutunan ang Funk Guitar! Ang funk rhythm (istilo ni Nile Rodgers ng Chic, Cory Wong ng Vulfpeck, o mga disco-funk OPM classics) ang pinakamataas na pagsasanay sa hand coordination at timing.\n\n1. ANG MOTOR HAND PHILOSOPHY:\nSa funk, ang iyong kanang pulso ay parang sewing machine o motor engine—hindi ito humihinto sa mabilis at banayad na 16th-note motion:\n• Count: 1-e-&-a, 2-e-&-a, 3-e-&-a, 4-e-&-a (16 na palo bawat bar!).\n• Ang buong braso ay relaks; ang pulso lamang ang sumasayaw nang parang nagtatapon ng tubig mula sa mga daliri.\n\n2. ANG KALIWANG KAMAY BILANG ON/OFF SWITCH:\n• Kapag PISIL ang kaliwang kamay sa fretboard: Lumalabas ang malutong na chord (karaniwang 9th o Minor 7th chord sa top 3 strings tulad ng E9 o Dm7).\n• Kapag NI-RELAX ang kaliwang kamay (nakadampi pa rin ang balat sa kuwerdas): Lumalabas ang percussive 'CHKA-CHKA' scratch sound!\n\n3. PAGLALAGAY NG HITS SA MGA OFFBEATS:\nPanatilihing scratch ang karamihan sa mga palo, at pisilin lamang ang kaliwang kamay sa mga specific groove hits. Ito ang lumilikha ng nakakahumaling na funk groove!",
        "codeSnippet": "// 16TH-NOTE FUNK SCRATCH GRID (ONE BAR):\n\nCount:  1  e  &  a  2  e  &  a  3  e  &  a  4  e  &  a\nMotion: D  U  D  U  D  U  D  U  D  U  D  U  D  U  D  U (Mabilis na Pulso)\nSound:  X  X  O  X  X  O  X  X  X  X  O  X  X  O  X  X\n\nLegend:\nX = Muted Scratch ('chka') - Nakadampi ang kaliwang kamay nang walang diin\nO = Pressed Chord Hit ('RING!') - Mabilis na pisil at release ng kaliwang kamay\n\nFavorite Funk Chord: E9 (x-7-6-7-7-x) o D9 (x-5-4-5-5-x)",
        "activity": {
          "title": "Gawaing Praktikal 6.1: The 16th-Note Motor Hand Scratch Drill",
          "instructions": [
            "Hawakan ang E9 chord sa 7th fret.",
            "I-relax ang kaliwang kamay upang lahat ng kuwerdas ay maging muted scratch (walang tumutunog na pitch).",
            "Paganahin ang metronome sa 85 BPM.",
            "Patakbuhin ang tuloy-tuloy na 16th-note motor hand (D-U-D-U-D-U-D-U) sa loob ng 60 segundo nang walang paninigas ng pulso.",
            "Simulang pisilin ang E9 chord sa '&' ng beat 1 at '&' ng beat 3 lamang habang scratch ang iba."
          ],
          "starterCode": "// Funk Motor Hand Checklist:\n[ ] Tuloy-tuloy ang 16th notes nang walang paghinto\n[ ] Relaks ang pulso (zero wrist tension)\n[ ] Malutong ang tunog ng 'chk-a-chk-a' scratch\n[ ] Matalas at maikli ang bawat chord hit",
          "expectedOutcome": "Nakatutugtog ng mabilis at masiglang funk scratch groove na may perpektong 16th-note timekeeping."
        },
        "exam": {
          "id": "exam-guitar-6-1",
          "title": "Pagsusulit 6.1: Funk Scratching Mechanics",
          "description": "Subukin ang kaalaman sa 16th-note subdivisions at ghost strumming.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-6-1-1",
              "question": "Ano ang ginagawa ng kanang kamay (motor hand) sa standard funk rhythm guitar playing?",
              "options": [
                "Patuloy na gumagalaw pataas at pababa sa mabilis at pantay na 16th-note pulse nang hindi humihinto",
                "Humihinto sa bawat kumpas upang maghintay",
                "Pumipitas lamang sa 1st string",
                "Nakatigil sa ibabaw ng bridge"
              ],
              "correctIndex": 0,
              "explanation": "Ang kanang kamay sa funk ay parang motor na patuloy na nag-i-strum ng 16th notes; ang kaliwang kamay ang nagdidikta kung aling palo ang magiging tunog o scratch."
            },
            {
              "id": "q-gt-6-1-2",
              "question": "Paano nalilikha ang tunog ng 'Ghost Strum' o percussive scratch ('chka') sa funk guitar?",
              "options": [
                "Inilalapat ang mga daliri ng kaliwang kamay sa ibabaw ng mga kuwerdas upang i-mute ang mga ito nang hindi pinipindot sa fretboard",
                "Pinuputol ang amplifier cord",
                "Tinutusok ang soundhole gamit ang pick",
                "Pinapatay ang volume pedal"
              ],
              "correctIndex": 0,
              "explanation": "Ang dampening sa mga kuwerdas gamit ang kaliwang kamay nang walang fret pressure ay nagdudulot ng percussive scratch na walang tiyak na pitch."
            },
            {
              "id": "q-gt-6-1-3",
              "question": "Aling chord family ang pinakakilala at madalas gamitin sa classic funk guitar grooves?",
              "options": [
                "Dominant 9th chords (tulad ng E9 o D9) na tinutugtog sa gitna at matataas na kuwerdas",
                "Heavy metal open power chords",
                "Open cowboy G at C chords",
                "Acoustic single notes sa 6th string"
              ],
              "correctIndex": 0,
              "explanation": "Ang 9th chords (James Brown, Nile Rodgers sound) ay nagbibigay ng matalas, funky, at biting na kulay na perpektong lumulutang sa funk mix."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.1: Funk Motor Hand & Subdivision Tracker",
          "sheetName": "Funk_Scratch_Log",
          "description": "Subaybayan ang 16th-note motor hand endurance mula 80 BPM hanggang 115 BPM.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1funk-scratch-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng 16th-note scratch accuracy sa 85, 95, 105, at 115 BPM.",
            "Pagtukoy sa kalinisan ng left-hand on/off muting.",
            "Video submission ng 1-minutong funk groove."
          ],
          "rubric": [
            { "criteria": "16th-Note Motor Hand Fluidity", "points": 45 },
            { "criteria": "Left-Hand Muting Precision (Clean Hits vs Scratch)", "points": 35 },
            { "criteria": "Pocket & Groove Stamina", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-6-2",
        "title": "Aralin 6.2: Nashville Number System sa Gitara (Tagalog)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=DMqEm3OOgVw",
        "videoTitle": "NASHVILLE NUMBER SYSTEM TUTORIALS (TAGALOG) - BassFriend ULTIMO",
        "objective": "Matutunan ang Nashville Number System para sa rhythm guitar: paano magbasa at sumabay sa anumang live jam gamit ang mga numero (1-4-5-6m) sa halip na letter names, at madaling mag-transpose sa tenga.",
        "theoryContent": "Pumasok ka sa isang studio session o live gig sa unang pagkakataon. Sinabi ng bandleader: 'Bro, tugtugin natin ang kanta sa 1 - 5 - 6 - 4 progression sa Key of D!'. Kung letter names lang ang alam mo, maguguluhan ka. Ngunit kung alam mo ang Nashville Number System, agad mong matutugtog ang D - A - Bm - G sa loob ng isang segundo!\n\n1. ANG FORMULA NG MAJOR DIATONIC SCALE (1 HANGGANG 7):\nBawat Major Key ay may 7 chords na may tiyak na katangian:\n• 1 (One) = Major (Tonic / Root)\n• 2 (Two) = Minor (2m)\n• 3 (Three) = Minor (3m)\n• 4 (Four) = Major (Subdominant)\n• 5 (Five) = Major (Dominant)\n• 6 (Six) = Minor (Relative Minor / 6m)\n• 7 (Seven) = Diminished (7dim)\n\n2. MGA KARANIWANG NUMBER PROGRESSIONS SA LIVE MUSIC:\n• Ang Pop & Worship Anthem: 1 - 5 - 6m - 4 (hal. G - D - Em - C o D - A - Bm - G)\n• Ang OPM Classic Ballad: 1 - 6m - 4 - 5 (hal. C - Am - F - G)\n• Ang Jazz / Bossa Turnaround: 2m - 5 - 1 (hal. Dm7 - G7 - Cmaj7)\n\n3. BAKIT ITO ANG WIKA NG MGA PRO?\nKapag pinalitan ng singer ang susi mula Key of G papuntang Key of E, hindi na kailangang sumulat ng bagong chord chart! Ang chart ay nananatiling '1 - 5 - 6m - 4'.",
        "codeSnippet": "// NASHVILLE NUMBER SYSTEM LOOKUP TABLE:\n\nScale Degree:   1     2m     3m     4     5     6m     7dim\n----------------------------------------------------------\nKey of C:       C     Dm     Em     F     G     Am     Bdim\nKey of D:       D     Em     F#m    G     A     Bm     C#dim\nKey of E:       E     F#m    G#m    A     B     C#m    D#dim\nKey of G:       G     Am     Bm     C     D     Em     F#dim\nKey of A:       A     Bm     C#m    D     E     F#m    G#dim\n\nRule of Thumb: Chords 1, 4, at 5 ay laging MAJOR. Chords 2, 3, at 6 ay laging MINOR!",
        "activity": {
          "title": "Gawaing Praktikal 6.2: The 3-Key Nashville Number Conversion Drill",
          "instructions": [
            "Tingnan ang progression: 1 -> 6m -> 4 -> 5.",
            "Tugtugin ito sa Key of C: C -> Am -> F -> G.",
            "Nang walang paghinto, i-convert at tugtugin ito sa Key of G: G -> Em -> C -> D.",
            "I-convert at tugtugin sa Key of D: D -> Bm -> G -> A.",
            "Pansinin kung gaano kabilis mag-isip kapag numero ang gabay sa halip na memorized letters."
          ],
          "starterCode": "// Nashville Drill Scorecard:\nKey of C: [C ] [Am] [F ] [G ] -> 1, 6m, 4, 5\nKey of G: [G ] [Em] [C ] [D ] -> 1, 6m, 4, 5\nKey of D: [D ] [Bm] [G ] [A ] -> 1, 6m, 4, 5",
          "expectedOutcome": "Kayang magbasa ng number charts at mag-transpose sa tatlong magkakaibang susi nang mabilis."
        },
        "exam": {
          "id": "exam-guitar-6-2",
          "title": "Pagsusulit 6.2: Nashville Number System",
          "description": "Subukin ang kaalaman sa scale degrees, chord qualities, at real-time key conversion.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-6-2-1",
              "question": "Sa Nashville Number System sa anumang Major Key, aling mga scale degrees ang palaging may MINOR chord quality?",
              "options": [
                "Chords 2, 3, at 6 (2m, 3m, 6m)",
                "Chords 1, 4, at 5",
                "Chords 1 at 7 lamang",
                "Lahat ng chords ay Major"
              ],
              "correctIndex": 0,
              "explanation": "Sa standard major diatonic scale, ang chords na nabubuo sa 2nd, 3rd, at 6th degrees ay palaging minor triads."
            },
            {
              "id": "q-gt-6-2-2",
              "question": "Kung ikaw ay tumutugtog sa Key of G Major, ano ang katumbas na chord ng '6m' (Six Minor)?",
              "options": [
                "E Minor (Em)",
                "C Major (C)",
                "A Minor (Am)",
                "D Major (D)"
              ],
              "correctIndex": 0,
              "explanation": "Sa Key of G (G, A, B, C, D, E, F#), ang 6th note ay E, kaya ang 6m chord ay E Minor."
            },
            {
              "id": "q-gt-6-2-3",
              "question": "Bakit napakahalaga ng Nashville Number System sa mga sesyonista at studio musicians?",
              "options": [
                "Nagbibigay-daan ito upang makatugtog sa kahit anong susi nang hindi muling nagsusulat ng chord charts kapag nagpalit ng tono ang mang-aawit",
                "Dahil bawal magbasa ng letra sa studio",
                "Dahil pinararami nito ang kuwerdas ng gitara",
                "Para maging mas maikli ang kanta"
              ],
              "correctIndex": 0,
              "explanation": "Ang Number System ay universal—isang chart lamang ang kailangan, at kaya itong tugtugin sa anumang susi agad-agad nang walang rewrites."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.2: Nashville Number Chart Transcribing Rubric",
          "sheetName": "Nashville_Numbers_Log",
          "description": "I-transcribe ang 3 paboritong OPM songs papunta sa Nashville Number format.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1nashville-numbers-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Transkripsyon ng Verse-Chorus charts sa numbers format.",
            "Talaan ng transpositions sa Keys of C, D, E, at G.",
            "Live audio playback test kasabay ng metronome."
          ],
          "rubric": [
            { "criteria": "Diatonic Degree Accuracy", "points": 45 },
            { "criteria": "Multi-Key Transposition Speed", "points": 35 },
            { "criteria": "Chart Legibility & Formatting", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-6-3",
        "title": "Aralin 6.3: Rhythm Guitarist Role & Pocket sa Live Band",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=j4SKaevwgTc",
        "videoTitle": "Rhythm guitarist role/importance (tagalog) - Basic Loy",
        "objective": "Pagsanib sa 'Pocket': pakikipag-lock sa snare ng drummer (beats 2 & 4) at kick drum ng bassist, pagiging metronomically solid na sandigan ng banda, at stage etiquette sa live gigs.",
        "theoryContent": "Ang lead guitarist ay maaaring magkamali sa kanyang solo at hindi ito mapapansin ng karamihan. Ngunit kapag ang rhythm guitarist ang sumablay sa kumpas o bumilis, MARARAMDAMAN ng buong silid at masisira ang buong kanta! Ang rhythm guitarist ang glue o pandikit na nagbubuklod sa buong banda.\n\n1. ANG TATLONG HALIGI NG 'POCKET':\n• Ang Kick Drum at Bass Guitar: Sila ang pundasyon sa lapag. Ang iyong downstroke sa Beat 1 ay dapat selyado sa kick drum attack.\n• Ang Snare Drum: Ito ang backbeat sa Beats 2 at 4. Ang iyong pinakamalutong na strum accent ay dapat tumatama eksakto kasabay ng palo ng snare stick.\n• Ang Hi-Hat: Ang patuloy na 8th o 16th timekeeper. Ang iyong upstrokes ay dapat nakalapat sa galaw ng hi-hat.\n\n2. STAGE DISCIPLINE AT SERVING THE SONG:\n• Huwag mag-noodle o mag-solo habang nag-uusap ang lead singer sa mic.\n• Panatilihing naka-mute ang gitara kapag walang kanta gamit ang tuner pedal.\n• Tumingin sa drummer at bass player—ang mga mata ang nagbibigay ng visual cues para sa mga bagsak at endings!",
        "codeSnippet": "// THE LIVE BAND POCKET LOCK:\n\nCount:          1       &       2       &       3       &       4       &\nDrummer:       [KICK]          [SNARE]         [KICK]          [SNARE]\nBassist:       [ROOT]          [OCTAVE]        [ROOT]          [5TH]\nGuitarist:     [DOWN]  [up]    [ACCENT][up]    [DOWN]  [up]    [ACCENT][up]\nFeel:           PULSE           POCKET!         PULSE           POCKET!\n\nRule: Kapag naramdaman mong nagmamadali ang banda, huwag sumabay sa pagtakbo! Panatilihin ang matatag na rhythm anchor.",
        "activity": {
          "title": "Gawaing Praktikal 6.3: Drum Loop Locking Drill sa Backbeat (2 at 4)",
          "instructions": [
            "Mag-play ng drum backing track sa YouTube o drum machine sa 85 BPM.",
            "Pakinggan lamang ang palo ng snare sa beats 2 at 4 sa loob ng 30 segundo.",
            "Pumasok gamit ang A Minor chord. Tiyaking ang iyong pinakamalakas na bagsak ay 100% nakalapat sa snare crack.",
            "Magsanay nang 5 minuto hanggang maging isa ang tunog ng iyong gitara at ng snare drum."
          ],
          "starterCode": "// Pocket Locking Checklist:\n[ ] Naka-lock sa kick drum sa Beat 1\n[ ] Naka-lock sa snare crack sa Beats 2 at 4\n[ ] Hindi sumasapaw sa vocal frequency\n[ ] Relaks ang kanang kamay at pulso",
          "expectedOutcome": "Nakatutugtog ng solid at hindi gumagalaw na rhythm pocket kasabay ng live drums at bass."
        },
        "exam": {
          "id": "exam-guitar-6-3",
          "title": "Pagsusulit 6.3: Rhythm Guitarist Role sa Live Band",
          "description": "Subukin ang kaalaman sa band dynamics, stage etiquette, at locking with the rhythm section.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-6-3-1",
              "question": "Aling instrumento sa banda ang pangunahing katuwang ng rhythm guitarist para sa pag-lock ng backbeat accents sa beats 2 at 4?",
              "options": [
                "Snare Drum ng drummer",
                "Tambourine ng backing vocal",
                "Synthesizer solo",
                "Lead guitar pedal"
              ],
              "correctIndex": 0,
              "explanation": "Ang snare drum ang nagdidikta ng backbeat sa pop/rock music; ang pagsabay ng rhythm guitar sa snare crack ang lumilikha ng solid na pocket."
            },
            {
              "id": "q-gt-6-3-2",
              "question": "Ano ang dapat gawin ng isang propesyonal na rhythm guitarist kapag nagsasalita ang vocalist sa madla sa pagitan ng mga kanta?",
              "options": [
                "I-mute ang gitara (gamit ang tuner o volume pedal) at huwag mag-ingay o mag-noodle ng random riffs",
                "Magpatugtog ng napakalakas na gitara solo",
                "Mag-tono nang malakas sa amplifier",
                "Humingi ng palakpak"
              ],
              "correctIndex": 0,
              "explanation": "Ang stage etiquette ay nag-aatas ng katahimikan habang may nagsasalita sa mic upang mapanatili ang propesyonalismo ng palabas."
            },
            {
              "id": "q-gt-6-3-3",
              "question": "Bakit tinatawag na 'Anchor' o 'Glue' ng banda ang rhythm guitarist?",
              "options": [
                "Dahil ang kanyang matatag na kumpas at chord harmony ang nagbubuklod sa pagitan ng drums, bass, at vocals",
                "Dahil siya ang pinakamabigat sa entablado",
                "Dahil siya ang bumibili ng kable ng banda",
                "Dahil siya ang laging nakaupo"
              ],
              "correctIndex": 0,
              "explanation": "Ang rhythm guitarist ang tulay sa pagitan ng percussive timekeeping ng drums at harmonic expression ng vocals/keyboards."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.3: Band Pocket & Snare Lock Evaluation",
          "sheetName": "Band_Pocket_Log",
          "description": "Subaybayan ang iyong backbeat lock-in rate kasabay ng iba't ibang drum loops.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1band-pocket-tracker-template/edit?usp=sharing",
          "deliverables": [
            "Talaan ng drum loop practice sessions sa iba't ibang tempos.",
            "Pagtukoy sa snare alignment accuracy.",
            "Video recording kasabay ng live drum track."
          ],
          "rubric": [
            { "criteria": "Snare Backbeat Tightness", "points": 45 },
            { "criteria": "Tempo Steadiness (No Rushing/Dragging)", "points": 35 },
            { "criteria": "Stage Dynamic Restraint", "points": 20 }
          ]
        }
      },
      {
        "id": "les-guitar-6-4",
        "title": "Aralin 6.4: Capstone Showcase: 'Gitara' Complete Rhythm Arrangement",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=VCUtkvQeBa8",
        "videoTitle": "Gitara - Parokya Ni Edgar | Fingerstyle Guitar + Lyrics - Ralph Jay Triumfo",
        "objective": "I-showcase ang lahat ng natutunan sa buong kurso sa pamamagitan ng pagtugtog ng kumpletong acoustic rhythm arrangement ng iconic Pinoy anthem na 'Gitara' (Parokya Ni Edgar) nang may perpektong kumpas, dynamic shaping, at stage-ready confidence.",
        "theoryContent": "Maligayang pagdating sa iyong Capstone Hero Showcase! Nagsimula ka sa zero—hindi marunong maghawak ng pick, sintunado ang kuwerdas, at sumasakit ang daliri sa F chord. Ngayon, handa ka nang tumindig bilang isang ganap na Pro Rhythm Guitarist!\n\n1. ANG CAPSTONE PIECE: 'GITARA' (PAROKYA NI EDGAR):\nIto ang pambansang awit ng bawat gitaristang Pilipino. Pagsasama-samahin natin ang lahat ng technical skills sa iisang obra maestra:\n• Intro: Malinis na open chord ring na may banayad na plucking at percussive thumb slap.\n• Verse: Intimate acoustic strumming na may malasutlang dynamics at perfect chord transitions (G -> D -> Em -> C).\n• Pre-Chorus: Building palm-muted crescendo na nag-iipon ng enerhiya.\n• Chorus: Full-powered Universal Strumming na may syncopated accents at offbeat push!\n• Outro: Matamis na Dsus4 resolution at fading acoustic shimmer.\n\n2. MGA PAMANTAYAN SA GRADUATION (PASSING REQUIREMENTS):\n• 100% In-Tune: Walang kahit isang sintunadong kuwerdas.\n• Zero Fret Buzz: Malinis ang bawat nota sa lahat ng chords.\n• Impeccable Timing: Walang pagbagal sa paglipat ng chords.\n• Dynamic Contrast: May malinaw na pagkakaiba ang verse sa chorus.\n\nI-record ang iyong video showcase at ipasa sa Google Sheets rubric para sa pinal na akreditasyon mula kay Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS!",
        "codeSnippet": "// CAPSTONE HERO SHOWCASE SCORE: 'GITARA' (PAROKYA NI EDGAR):\n\nKey: G Major | Tempo: 82 BPM | Time: 4/4\n\n[INTRO]      G   -   D/F#   -   Em7   -   Cadd9  (Acoustic Pluck + Soft Slap)\n[VERSE 1]    G   -   D/F#   -   Em7   -   Cadd9  (Intimate Soft Strumming)\n             'Bakit pa kailangang magbihis, di naman kita iiwan...'\n[PRE-CHORUS] Am  -   Bm     -   C     -   D      (Palm Muted Crescendo Build)\n             'Gabi-gabi na lang...'\n[CHORUS]     G   -   D/F#   -   Em7   -   Cadd9  (Full Universal Strum Explosion!)\n             'Wag kang mag-alala, di ko ipagpapalit...'\n[OUTRO]      G   -   D/F#   -   Em7   -   Cadd9  - G (Final Ambient Ring)",
        "activity": {
          "title": "Gawaing Praktikal 6.4: Kumpletong Pagtugtog at Video Recording ng Capstone",
          "instructions": [
            "Itono nang perpekto ang gitara gamit ang tuner.",
            "Paganahin ang metronome o backing track sa 82 BPM.",
            "I-record ang buong performance ng 'Gitara' (Intro hanggang Outro) sa video gamit ang iyong smartphone.",
            "Suriin ang recording gamit ang Google Sheets Capstone Rubric bago isumite para sa certification."
          ],
          "starterCode": "// Capstone Submission Audit Checklist:\n[ ] 100% In-Tune bago magsimula ang recording\n[ ] Tuloy-tuloy ang kumpas mula Intro hanggang Outro nang walang hinto\n[ ] Malinaw ang dynamic contrast (tahimik sa verse, malakas sa chorus)\n[ ] Malinis ang lahat ng chord transitions nang walang fret buzzing",
          "expectedOutcome": "Nakatutugtog ng buong professional rhythm arrangement na handang-handa para sa live stage performance at church worship ministry."
        },
        "exam": {
          "id": "exam-guitar-6-4",
          "title": "Pagsusulit 6.4: Capstone Comprehensive Assessment",
          "description": "Ang pinal na komprehensibong pagsusulit para sa pagtatapos sa Pinoy Rhythm Guitar Masterclass.",
          "passingScore": 66,
          "questions": [
            {
              "id": "q-gt-6-4-1",
              "question": "Ano ang pinakamahalagang katangian ng isang 'Hero' rhythm guitarist sa entablado?",
              "options": [
                "Solid at maaasahang timekeeping, sensitibong dynamics na naglilingkod sa kanta, at malinis na chord transitions",
                "Pagtugtog ng pinakamaraming mabilis na solo notes",
                "Pagkakaroon ng pinakamahal na gitara",
                "Pagtugtog nang mas malakas kaysa sa lahat ng miyembro ng banda"
              ],
              "correctIndex": 0,
              "explanation": "Ang tunay na pro rhythm guitarist ay pinagkakatiwalaan dahil sa kanyang solidong kumpas, dynamic sensitivity, at kakayahang patunugin nang maganda ang buong grupo."
            },
            {
              "id": "q-gt-6-4-2",
              "question": "Sa pagtatanghal ng Capstone song na 'Gitara', paano dapat ihatid ang dynamic transition mula Pre-Chorus papuntang Chorus?",
              "options": [
                "Unti-unting paglakas (crescendo) sa pre-chorus na sumasabog sa full open strumming pagpasok ng chorus",
                "Biglang pagbagal ng tempo sa chorus",
                "Paghinto sa pag-strum",
                "Pag-mute ng lahat ng kuwerdas sa buong chorus"
              ],
              "correctIndex": 0,
              "explanation": "Ang crescendo sa pre-chorus ang naghahanda sa listener para sa emosyonal at sonikong pagbuhos ng chorus."
            },
            {
              "id": "q-gt-6-4-3",
              "question": "Sino ang Course Author at Lead Accredited Instructor ng Pinoy Rhythm Guitar Masterclass sa Epicademy?",
              "options": [
                "Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS",
                "Isang banyagang guro na hindi marunong mag-Tagalog",
                "Random AI bot na walang pangalan",
                "Anonymous user"
              ],
              "correctIndex": 0,
              "explanation": "Ang kurso ay accredited at nilikha sa ilalim ng pamumuno ni Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.4: Capstone Performance Graduation Rubric",
          "sheetName": "Capstone_Showcase_Log",
          "description": "Pinal na grading rubric para sa Capstone Showcase video performance.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1capstone-guitar-rubric-template/edit?usp=sharing",
          "deliverables": [
            "Link ng video submission ng buong 'Gitara' rhythm performance.",
            "Self-assessment score gamit ang 100-point rubric.",
            "Peer and instructor feedback section."
          ],
          "rubric": [
            { "criteria": "Rhythmic Timing & Metronome Lock", "points": 30 },
            { "criteria": "Clean Tone & Zero Fret Buzz", "points": 25 },
            { "criteria": "Dynamic Shaping (Verse vs Chorus)", "points": 25 },
            { "criteria": "Stage Presence & Professional Delivery", "points": 20 }
          ]
        }
      }
    ]
  }
];

export const PINOY_GUITAR_TRACK: Track = {
  id: 'track-pinoy-guitar-zero-to-hero',
  title: 'Pinoy Rhythm Guitar Masterclass: Zero to Hero Acoustic & Electric Strumming',
  category: 'creative',
  categoryLabel: 'Music & Worship Arts',
  slug: 'pinoy-rhythm-guitar-zero-to-hero',
  badge: '★ 5TH OFFICIAL COURSE BUNDLE • RHYTHM GUITAR',
  level: 'All Levels',
  levelIndex: 5,
  isBundle: true,
  bundleNumber: 5,
  bundleLabel: '★ 5TH OFFICIAL COURSE BUNDLE: PINOY RHYTHM GUITAR MASTERCLASS',
  price: 0,
  originalPrice: 15990,
  careerMilestone: 'Stage-Ready Pro Rhythm Guitarist & Worship Accompanist',
  isPaid: false,
  instructor: {
    name: 'Ronnel M. Aviguetero',
    role: 'CEO and FOUNDER of KEZJED SOLUTIONS • Lead Instructor & Church Musician',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    verified: true,
    credentials: 'CEO & Founder, KEZJED SOLUTIONS • Certified ICT Educator & Veteran Church Musician'
  },
  rating: 5.0,
  reviewCount: 412,
  activeLearners: 1580,
  lessonsCount: 24,
  duration: '6 Linggo (24 Aralin)',
  description: 'Mula zero beginner na hindi marunong humawak ng pick hanggang sa pagiging stage-ready rhythm hero! 100% nakatutok sa Rhythm Guitar: Universal strumming mechanics (D-D-U-U-D-U), metronome timing, cowboy chords, F barre chord mastery nang walang ngawit, palm muting, syncopation, acoustic percussive slap, reggae skank, Bossa Nova, Blues shuffle, contemporary church worship voicings (G, Cadd9, Em7, D/F#), capo transposition, funk 16th scratching, at Nashville Number System. May kasamang 24 verified video lessons sa Tagalog, ASCII chord charts, practice rubrics, at auto-graded quizzes.',
  skills: [
    'Rhythm Guitar Fundamentals',
    'Universal Strumming Patterns',
    'Metronome Timing & Groove Pocket',
    'Open Cowboy & Barre Chords (F & Bm)',
    'Palm Muting & Dynamic Shaping',
    'Percussive Slap & Chucking',
    'Reggae Skank & Bossa Nova Comping',
    '12-Bar Blues Shuffle Rhythm',
    'Contemporary Worship Voicings (Cadd9, D/F#)',
    'Capo Math & Transposition',
    'Funk 16th-Note Scratching',
    'Nashville Number System on Guitar'
  ],
  colorTheme: 'from-emerald-600 via-teal-600 to-cyan-700',
  popular: true,
  published: true,
  isCustomCourse: true,
  isTeacherCreated: true,
  authorEmail: 'ronnel@kezjedsolutions.com',
  modules: PINOY_GUITAR_MODULES.map((m: GuitarModule, mIdx: number) => ({
    id: `mod-guitar-${mIdx + 1}`,
    track_id: 'track-pinoy-guitar-zero-to-hero',
    title: m.title,
    duration: m.duration || '1 Linggo',
    overview: m.overview || '',
    order_index: mIdx + 1,
    lessons: m.lessons.length,
    topics: m.lessons.map((l: GuitarLesson) => l.title),
    lessonItems: m.lessons.map((l: GuitarLesson, lIdx: number) => ({
      id: l.id,
      module_id: `mod-guitar-${mIdx + 1}`,
      title: l.title,
      duration: l.duration || '20 mins',
      video_url: l.videoUrl || '',
      content: l.theoryContent || '',
      objective: l.objective || '',
      code_snippet: l.codeSnippet || '',
      activity: l.activity ? {
        title: l.activity.title,
        instructions: l.activity.instructions,
        starterCode: l.activity.starterCode,
        expectedOutcome: l.activity.expectedOutcome
      } : undefined,
      exam: l.exam,
      worksheet: l.worksheet ? {
        title: l.worksheet.title,
        sheetName: l.worksheet.sheetName,
        description: l.worksheet.description,
        templateUrl: l.worksheet.templateUrl,
        deliverables: l.worksheet.deliverables,
        rubric: l.worksheet.rubric
      } : undefined,
      order_index: lIdx + 1,
      progress: 0
    }))
  }))
};
