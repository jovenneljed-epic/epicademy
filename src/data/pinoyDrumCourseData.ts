import type { Track } from '../types';
import type { ZeroToHeroCourse, DetailedModule } from './zeroToHeroCoursesData';

// ============================================================================
// PINOY DRUM MASTERCLASS: ZERO TO HERO (TAGALOG ONLINE DRUM COURSE)
// Authored by Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS
// 120 Practice & Masterclass Hours • 6 Comprehensive Modules • 24 Lessons
// ============================================================================

export const PINOY_DRUM_MODULES: DetailedModule[] = [
  {
    "title": "Modyul 1: Anatomya ng Drum Kit, Setup at Pagbasa ng Drum Notes",
    "duration": "2 Linggo (18 Oras)",
    "overview": "Magsimula sa zero: Kilalanin ang bawat bahagi ng drum set (Snare, Kick, Hi-Hat, Toms, Cymbals), wastong tindig at grip, at matutong magbasa ng drum notation mula quarter notes hanggang 16th notes.",
    "lessons": [
      {
        "title": "Aralin 1.1: Pagkilala sa Drum Set at Step-by-Step Setup para sa Baguhan",
        "duration": "40 mins",
        "videoUrl": "https://www.youtube.com/embed/irJwO6KdbVs",
        "videoTitle": "Drum Lesson For Complete Beginners | Filipino Instruction | STEP BY STEP (Drum Teacher Manila)",
        "objective": "Matutunan ang anatomya ng drum kit, wastong taas ng trono (drum throne), posisyon ng pedals, at komportableng paghawak ng drumsticks (Matched Grip).",
        "theoryContent": "Maligayang pagdating sa Pinoy Drum Masterclass! Sa araling ito, aalisin natin ang takot mo sa pag-upo sa likod ng drum set.\n\n1. MGA PANGUNAHING BAHAGI NG STANDARD 5-PIECE DRUM SET:\n• Bass Drum (Kick Drum): Pinakamalaking drum sa lapag, pinapalo gamit ang kanang paa (kick pedal). Ito ang nagbibigay ng 'bigat' at pulso ng kanta.\n• Snare Drum: Nakapwesto sa gitna ng iyong mga hita. May snare wires sa ilalim na nagbibigay ng matalas at malutong na tunog ('crack'). Dito pumapatak ang beats 2 at 4 sa karamihan ng mga kanta.\n• Hi-Hat Cymbals: Dalawang cymbals na magkapatong, kinokontrol ng kaliwang paa sa hi-hat pedal at pinapalo ng stick. Ito ang 'timekeeper' na nagdidikta ng bilis (tempo).\n• Tom-Toms (High Tom, Mid Tom, Floor Tom): Ginagamit sa paggawa ng drum fills at transitions.\n• Crash Cymbal & Ride Cymbal: Crash para sa mga accent/bagsak, at Ride para sa steady na kumpas sa chorus o jazz/rock rhythms.\n\n2. WASTONG TINDIG AT POSTURE:\n• Taas ng Trono (Throne Height): Ang iyong mga tuhod ay dapat bahagyang mas mababa kaysa sa iyong balakang (humigit-kumulang 90 hanggang 100 degrees angle).\n• Matched Grip: Hawakan ang drumstick sa pagitan ng hinlalaki (thumb) at hintuturo (index finger) sa fulcrum point (1/3 mula sa puwitan ng stick). Dapat relaks ang mga balikat!",
        "codeSnippet": "// PANGUNAHING BAHAGI NG DRUM SET AT NOTATION:\nCymbal Line:  [CC] Crash Cymbal   | [RC] Ride Cymbal   | [HH] Hi-Hat\nDrum Line:    [T1] High Tom       | [T2] Mid Tom       | [FT] Floor Tom\nBackbeat:     [SD] Snare Drum     | [BD] Bass Drum (Kick)\n\nStandard 4/4 Rock Grid:\nCount: 1   &   2   &   3   &   4   &\nHH:    x   x   x   x   x   x   x   x\nSD:            o               o\nBD:    o               o               ",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 1.1: Workstation Setup at Fulcrum Grip Calibration",
          "instructions": [
            "I-adjust ang taas ng drum throne hanggang ang iyong mga hita ay komportable at may 90-100 degree angle.",
            "Hanapin ang fulcrum point ng iyong drumsticks gamit ang hinlalaki at hintuturo.",
            "Subukan ang 20 reps ng mabagal na pulso sa snare drum gamit ang wrist motion (hindi buong braso).",
            "I-adjust ang distansya ng Bass Drum pedal upang natural na nakalapat ang bola ng iyong paa sa footboard."
          ],
          "starterCode": "// Checklist sa Unang Pag-upo sa Drum Set:\n[ ] Taas ng Trono: Komportableng 90-100 degrees ang tuhod\n[ ] Fulcrum Grip: May 1-inch na clearance sa ilalim ng stick\n[ ] Snare Height: Ka-level o bahagyang mas mababa sa sinturon\n[ ] Hi-Hat Pedal: Matatag at hindi gumagalaw habang pumapadyak",
          "expectedOutcome": "Komportableng posture nang walang pananakit sa likod o balikat, na may malayang kontrol sa pulso."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 1.1: Drum Kit Ergonomics & Routine Log",
          "sheetName": "Ergonomics_Log",
          "description": "Itala ang sukat ng iyong drum throne, anggulo ng snare, at obserbasyon sa ginhawa ng pagtugtog sa loob ng 7 araw.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "I-log ang throne height sa sentimetro mula sa sahig.",
            "Itala ang tensyon ng kick pedal spring (Malambot / Katamtaman / Matigas).",
            "Lagdaan ang 15-minutong pang-araw-araw na wrist warm-up session."
          ],
          "rubric": [
            {
              "criteria": "Tamang Posture at Ergonomics Setup",
              "points": 40
            },
            {
              "criteria": "Fulcrum Control at Paghawak ng Sticks",
              "points": 30
            },
            {
              "criteria": "Kumpletong 7-Araw na Routine Log",
              "points": 30
            }
          ]
        },
        "exam": {
          "id": "exam-drum-1-1",
          "title": "Pagsusulit 1.1: Anatomya ng Drum Kit at Posture",
          "description": "Subukin ang iyong kaalaman sa mga bahagi ng drum set at tamang tindig sa pagtugtog.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q1-1-1",
              "question": "Aling bahagi ng drum set ang karaniwang pinapalo sa beats 2 at 4 upang magbigay ng malutong na backbeat sa pop/rock music?",
              "options": [
                "Bass Drum (Kick)",
                "Snare Drum",
                "Floor Tom",
                "Ride Cymbal"
              ],
              "correctIndex": 1,
              "explanation": "Ang Snare Drum ang pangunahing nagbibigay ng backbeat sa beats 2 at 4 sa standard 4/4 rock at pop music."
            },
            {
              "id": "q1-1-2",
              "question": "Ano ang tamang anggulo ng mga binti habang nakaupo sa drum throne para sa magandang sirkulasyon at balanse?",
              "options": [
                "45 degrees (napakababa)",
                "90 hanggang 100 degrees",
                "180 degrees (nakatayo)",
                "Kahit ano basta abot ang lapag"
              ],
              "correctIndex": 1,
              "explanation": "Ang 90 hanggang 100 degrees na anggulo ay nagbibigay ng tamang suporta sa balakang at nagpapadali sa mabilis na pagpadyak sa pedals."
            },
            {
              "id": "q1-1-3",
              "question": "Ano ang tawag sa pivot point kung saan hawak ang drumstick sa pagitan ng hinlalaki at hintuturo?",
              "options": [
                "Fulcrum Point",
                "Tension Rod",
                "Beater Point",
                "Rimshot Angle"
              ],
              "correctIndex": 0,
              "explanation": "Ang Fulcrum Point ang natural na pivot point ng stick upang magamit ang rebound ng drumhead nang walang kahirap-hirap."
            }
          ]
        }
      },
      {
        "title": "Aralin 1.2: Pundasyon sa Pagbasa ng Drum Notes (Quarter Notes at Half Notes)",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/eHaaxYBiH4U",
        "videoTitle": "Drum Lesson | NOTE READING PART 1 | Filipino Instruction (Drum Teacher Manila)",
        "objective": "Matutunan ang musical staff para sa drums, pagbasa ng Quarter Notes (1/4), Half Notes (1/2), at Whole Notes, at ang tamang pagbilang gamit ang boses.",
        "theoryContent": "Sa araling ito, matututunan mo ang sikreto ng mga propesyonal na drummer: ang pagbabasa ng Drum Sheet Music. Hindi mo kailangang matakot sa piyesa!\n\n1. ANG 5-LINE DRUM STAFF:\nHindi tulad ng piano o gitara na may tono (Do-Re-Mi), ang drum staff ay kumakatawan sa iba't ibang instrumentong pinapalo:\n• Ibabang Space (Space 1): Bass Drum / Kick\n• Gitnang Space (Space 3): Snare Drum\n• Itaas na Guhit / Space na may X mark: Hi-Hat Cymbals o Ride\n• Itaas na Space na may bilog: Crash Cymbal\n\n2. NOTE VALUES AT KUMPAS:\n• Quarter Note (1/4 Note): Tumatanggap ng 1 beat sa 4/4 time. Binibilang bilang '1, 2, 3, 4'.\n• Half Note (1/2 Note): Tumatanggap ng 2 beats. Binibilang bilang '1 - 2, 3 - 4'.\n• Whole Note: Tumatanggap ng 4 na buong beats.\n\n3. ANG GINTONG PANUNTUNAN SA PAGBILANG:\n'Kung kaya mong bigkasin, kaya mong tugtugin!' Palaging sabayan ng malakas na pagbilang (Out Loud) sa bawat palo.",
        "codeSnippet": "// QUARTER NOTE READING PATTERN (1/4 NOTES):\nTempo: 60 - 80 BPM\nTime Signature: 4/4\n\nCount:  1       2       3       4     | 1       2       3       4\nSnare:  o       o       o       o     | o       o       o       o\nKick:   o       -       o       -     | o       -       o       -\n        (Bum)   (Tsk)   (Bum)   (Tsk) | (Bum)   (Tsk)   (Bum)   (Tsk)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 1.2: Quarter Note Vocalization at Metronome Sync",
          "instructions": [
            "Magbukas ng metronome sa 60 BPM sa iyong telepono o computer.",
            "Bigkasin nang malakas: \"1, 2, 3, 4\" kasabay ng bawat tunog (click) ng metronome.",
            "Pumalo ng kanang kamay sa bawat bilang nang eksaktong kasabay ng metronome click sa loob ng 2 minuto.",
            "Magpalit: Kaliwang kamay naman ang papalo sa bawat bilang sa 60 BPM sa loob ng 2 minuto."
          ],
          "starterCode": "// Metronome Practice Log:\n[ ] 60 BPM: 2 minuto Kanang Kamay (Right Hand) - 0 errors\n[ ] 60 BPM: 2 minuto Kaliwang Kamay (Left Hand) - 0 errors\n[ ] 75 BPM: Salitan (R L R L) kasabay ng click - 2 minuto",
          "expectedOutcome": "Eksaktong timing na tumatama sa gitna ng click ng metronome nang hindi nauuna o nahuhuli."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 1.2: Note Reading Mastery Sheet",
          "sheetName": "Note_Reading_1",
          "description": "I-transcribe ang 4 na bars ng quarter notes at itala ang pinakamataas na tempo kung saan perpekto ang iyong timing.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Kumpletong talaan ng BPM mula 60 hanggang 90 BPM.",
            "Maikling audio o video clip link ng 1-minutong metronome sync."
          ],
          "rubric": [
            {
              "criteria": "Katumpakan ng Timing sa Metronome",
              "points": 50
            },
            {
              "criteria": "Kalinawan ng Palo sa Snare",
              "points": 30
            },
            {
              "criteria": "Dokumentasyon sa Worksheet",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-1-2",
          "title": "Pagsusulit 1.2: Pagbasa ng Quarter Notes",
          "description": "Subukin ang kaalaman sa drum notation at bilang ng quarter notes.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q1-2-1",
              "question": "Ilang beats ang tinatanggap ng isang Quarter Note (1/4 note) sa 4/4 time signature?",
              "options": [
                "1 beat",
                "2 beats",
                "4 beats",
                "Kalahating beat"
              ],
              "correctIndex": 0,
              "explanation": "Sa 4/4 time signature, ang Quarter note ay may halagang eksaktong 1 beat."
            },
            {
              "id": "q1-2-2",
              "question": "Sa drum sheet music, ano ang karaniwang hugis ng note head kapag cymbals (tulad ng Hi-Hat) ang tinutukoy?",
              "options": [
                "Bilog na itim",
                "Krus o X mark",
                "Tatsulok",
                "Kahon"
              ],
              "correctIndex": 1,
              "explanation": "Ang mga cymbals tulad ng Hi-Hat at Crash ay isinusulat gamit ang X-shaped note heads upang madaling maiba sa mga drums."
            }
          ]
        }
      },
      {
        "title": "Aralin 1.3: Eighth Notes (8th Notes) at Pamamaraan sa Pagbilang gamit ang Metronome",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/c5Hg_FdKiCE",
        "videoTitle": "Drum Lesson: DRUM NOTES | NOTE READING PART 2 [Tagalog] (Drum Teacher Manila)",
        "objective": "Matutunan ang subdivision ng Eighth Notes (1 & 2 & 3 & 4 &), ang \"and\" o off-beat, at kung paano ito nagiging gulugod ng modernong pop at rock drumming.",
        "theoryContent": "Kapag pinaghiwalay natin ang isang Quarter Note sa dalawang magkapantay na bahagi, makukuha natin ang Eighth Notes (1/8 notes).\n\n1. ANG SUBDIVISION FORMULA:\nSa bawat bilang ng beat (1, 2, 3, 4), may isa pang palo sa pagitan:\nBilang: 1   &   2   &   3   &   4   &\nBigkas: 'One - And - Two - And - Three - And - Four - And'\n\n2. BAKIT ITO MAHALAGA?\nAng Eighth Notes sa Hi-Hat ang pinakasikat na pattern sa buong kasaysayan ng musika! Mula sa Beatles, Eraserheads, hanggang sa mga modernong K-Pop at OPM hits, ang 8th note pulse ang nagpapanatili ng ritmo ng buong banda.\n\n3. DOWNBEAT VS. UPBEAT:\n• Downbeat: Ang mga numerong 1, 2, 3, 4 (kapag bumababa ang iyong paa/kamay).\n• Upbeat (Off-beat): Ang '&' (And) sa pagitan ng mga numero.",
        "codeSnippet": "// EIGHTH NOTE PATTERN (8TH NOTES):\nCounting:  1  &  2  &  3  &  4  &\nHi-Hat:    x  x  x  x  x  x  x  x  (Tuloy-tuloy na 8 palo)\nSnare:           o           o     (Palo sa 2 at 4)\nKick:      o           o           (Padyak sa 1 at 3)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 1.3: Steady 8th Note Hi-Hat Endurance Routine",
          "instructions": [
            "Itakda ang metronome sa 65 BPM.",
            "Magpatugtog ng tuloy-tuloy na Eighth notes sa Hi-Hat gamit ang kanang kamay.",
            "Siguraduhing pantay ang lakas ng bawat palo (pantay ang tunog ng 1 at ng &).",
            "Manatili sa groove nang tuloy-tuloy sa loob ng 3 minuto nang walang patid."
          ],
          "starterCode": "// 8th Note Endurance Challenge:\n[ ] 65 BPM: 3 minuto tuloy-tuloy na 8th notes sa Hi-Hat\n[ ] 80 BPM: 2 minuto tuloy-tuloy na 8th notes sa Hi-Hat\n[ ] 95 BPM: 2 minuto may kasabay na boses na nagbibilang ng \"1 & 2 & 3 & 4 &\"",
          "expectedOutcome": "Pantay at matatag na tunog sa Hi-Hat nang hindi nangangalay ang braso."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 1.3: Eighth Note Metronome Consistency Tracker",
          "sheetName": "Eighth_Note_Log",
          "description": "Subaybayan ang iyong tempo accuracy gamit ang metronome sa loob ng 5 araw ng pagsasanay sa 8th notes.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Talaan ng BPM targets: 60, 70, 80, 90, 100 BPM.",
            "Talaan ng muscle fatigue rating (1-10) pagkatapos ng bawat session."
          ],
          "rubric": [
            {
              "criteria": "Timing Consistency sa 8th Notes",
              "points": 40
            },
            {
              "criteria": "Dynamic Equality (Pantay na palo)",
              "points": 40
            },
            {
              "criteria": "Pang-araw-araw na Log Entries",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-1-3",
          "title": "Pagsusulit 1.3: Eighth Notes at Subdivisions",
          "description": "Subukin ang pag-unawa sa 8th notes at tamang pagbilang.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q1-3-1",
              "question": "Ilang 8th notes (eighth notes) ang katumbas ng isang buong bar sa 4/4 time signature?",
              "options": [
                "4 na palo",
                "8 palo",
                "16 na palo",
                "2 palo"
              ],
              "correctIndex": 1,
              "explanation": "Sa 4/4 time, may 4 na quarter beats, kaya may 8 eighth notes sa isang bar (1 & 2 & 3 & 4 &)."
            },
            {
              "id": "q1-3-2",
              "question": "Ano ang tamang bigkas sa pagbilang ng 8th notes sa 4/4 time?",
              "options": [
                "1-e-and-a 2-e-and-a",
                "1 and 2 and 3 and 4 and",
                "1 2 3 4 5 6 7 8",
                "Bum tsk bum tsk"
              ],
              "correctIndex": 1,
              "explanation": "Ang standard subdivision count para sa 8th notes ay \"1 and 2 and 3 and 4 and\"."
            }
          ]
        }
      },
      {
        "title": "Aralin 1.4: Sixteenth Notes (16th Notes) at Subdivision Counting (1-e-and-a)",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/AhkYxRuDgsc",
        "videoTitle": "Drum Lesson: Drum Notes PART 3 [Filipino] (Drum Teacher Manila)",
        "objective": "Kabisaduhin ang pagbasa at pagtugtog ng Sixteenth Notes (16th notes), gamit ang counting method na \"1-e-and-a 2-e-and-a 3-e-and-a 4-e-and-a\".",
        "theoryContent": "Narating mo na ang pundasyon ng bilis at groove: ang Sixteenth Notes (1/16 notes)! Sa bawat isang beat, hahatiin natin ito sa apat na mabilis at eksaktong palo.\n\n1. ANG 16TH NOTE VOCALIZATION FORMULA:\nBeat 1: 1 - e - & - a (One - ee - and - uh)\nBeat 2: 2 - e - & - a (Two - ee - and - uh)\nBeat 3: 3 - e - & - a (Three - ee - and - uh)\nBeat 4: 4 - e - & - a (Four - ee - and - uh)\nKabuuan: Eksaktong 16 na palo sa loob ng isang 4/4 measure!\n\n2. SIKRETO SA PAGPAPATUGTOG NG 16TH NOTES:\n• Huwag gagamit ng buong braso; gamitin ang pulso at daliri (Finger technique).\n• Salitang Kamay (Alternating Hand Pattern): R L R L | R L R L | R L R L | R L R L\n• Panatilihing mababa ang taas ng sticks (mga 3-4 pulgada mula sa drumhead) para sa mas mataas na kontrol at bilis.",
        "codeSnippet": "// 16TH NOTE ALTERNATING GRID:\nCount: 1 e & a 2 e & a 3 e & a 4 e & a\nHands: R L R L R L R L R L R L R L R L\nSnare: o o o o o o o o o o o o o o o o\nKick:  o       -       o       -        (Bum sa 1 at 3)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 1.4: 16th Note Hand Speed and Relaxation Lab",
          "instructions": [
            "Simulan sa metronome sa 50 BPM (mabagal muna para perpekto ang kontrol).",
            "Tugtugin ang R L R L nang tuloy-tuloy sa practice pad o snare.",
            "Tiyakin na magkatulad ang volume at tunog ng Kanang kamay at Kaliwang kamay.",
            "Dahan-dahang itaas ang tempo ng 5 BPM bawat 2 minuto hanggang umabot sa 80 BPM."
          ],
          "starterCode": "// 16th Note Speed Pyramid:\n[ ] 50 BPM: 2 minuto malinis na R L R L\n[ ] 60 BPM: 2 minuto malinis na R L R L\n[ ] 70 BPM: 2 minuto malinis na R L R L\n[ ] 80 BPM: 2 minuto malinis na R L R L nang hindi tumitigas ang braso",
          "expectedOutcome": "Malinis, pantay, at mabilis na 16th notes na may buong relaxation sa balikat at braso."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 1.4: 16th Note Speed & Endurance Log",
          "sheetName": "16th_Notes_Log",
          "description": "Itala ang iyong personal record sa 16th notes consistency at bilis.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Talaan ng pinakamataas na malinis na BPM sa 16th notes.",
            "Pagsusuri sa kahinaan ng kaliwang kamay (non-dominant hand)."
          ],
          "rubric": [
            {
              "criteria": "Even Hand Volume (Pantay na lakas)",
              "points": 40
            },
            {
              "criteria": "Metronome Precision sa 16ths",
              "points": 40
            },
            {
              "criteria": "Self-Assessment Feedback",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-1-4",
          "title": "Pagsusulit 1.4: Sixteenth Notes Subdivision",
          "description": "Subukin ang kaalaman sa 16th notes counting at hand alternation.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q1-4-1",
              "question": "Ano ang tamang pantig ng pagbilang sa ika-apat na 16th note ng beat 1?",
              "options": [
                "\"1\"",
                "\"e\"",
                "\"&\"",
                "\"a\""
              ],
              "correctIndex": 3,
              "explanation": "Ang apat na 16th notes sa beat 1 ay binibilang bilang \"1 - e - & - a\". Ang pang-apat ay \"a\"."
            },
            {
              "id": "q1-4-2",
              "question": "Kung ang kanang kamay ang nagsisimula sa \"1\" sa alternating sticking, aling kamay ang tatama sa \"&\"?",
              "options": [
                "Kanang kamay (Right Hand)",
                "Kaliwang kamay (Left Hand)",
                "Paa",
                "Kahit alin"
              ],
              "correctIndex": 0,
              "explanation": "Sa standard alternating sticking (R L R L), ang R ay tumatama sa \"1\" at sa \"&\", samantalang ang L ay tumatama sa \"e\" at \"a\"."
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 2: Ang Unang 11 Drum Beats, 40 Rudiments at Fills",
    "duration": "2 Linggo (20 Oras)",
    "overview": "Kabisaduhin ang iyong unang 11 solid rock drum grooves, matutunan ang pinakamakapangyarihang rudiment sa mundo (ang Paradiddle), at magsimulang magpasabog ng 16 flashy drum fills sa mga kanta.",
    "lessons": [
      {
        "title": "Aralin 2.1: Ang Iyong Unang 11 Drum Beats sa 4/4 Rock Groove",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/UPitRARvTv8",
        "videoTitle": "DRUM LESSON Your First 11 Drum Beats | English Sub (Drum Teacher Manila)",
        "objective": "Tugtugin ang 11 mahahalagang baryasyon ng 4/4 drum beat sa pamamagitan ng pagbabago ng posisyon ng Bass Drum habang pinananatiling matatag ang Snare at Hi-Hat.",
        "theoryContent": "Ito na ang pinaka-inaasam ng bawat nagsisimulang drummer: ang aktuwal na pagpapatugtog ng mga totoong kanta!\n\n1. ANG \"MONEY BEAT\" (BEAT #1):\n• Hi-Hat: Eighth notes (1 & 2 & 3 & 4 &)\n• Snare: Beats 2 at 4 (Ang backbeat)\n• Bass Drum: Beats 1 at 3\nKapag natutunan mo ito, kaya mo nang tugtugin ang mahigit 70% ng mga sikat na kanta sa radyo!\n\n2. ANG SIKRETO NG 11 BEATS:\nSa buong 11 variations na ito, HINDI NAGBABAGO ang Hi-Hat at Snare! Ang tanging lumilipat ay ang BASS DRUM:\n• Beat 1: Kick sa 1 at 3\n• Beat 2: Kick sa 1, 3, at 3-&\n• Beat 3: Kick sa 1, 2-&, at 3\n• Beat 4: Four-on-the-floor (Kick sa 1, 2, 3, 4) para sa Dance/Pop!",
        "codeSnippet": "// BEAT 1 (Basic Rock Beat):\nHH: x   x   x   x   x   x   x   x\nSD:         o               o\nBD: o               o\n\n// BEAT 2 (Offbeat Kick Variation):\nHH: x   x   x   x   x   x   x   x\nSD:         o               o\nBD: o               o       o",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 2.1: The 11 Beats Gauntlet Challenge",
          "instructions": [
            "Patugtugin ang Beat #1 sa loob ng 16 bars sa 70 BPM nang walang mintis.",
            "Lumipat sa Beat #2 nang hindi humihinto ang kumpas ng Hi-Hat.",
            "Sanayin ang Beat #4 (Four-on-the-floor) na may malalakas na snare hits sa 2 at 4.",
            "Mag-record ng 2-minutong video na nagpapakita ng maayos na paglipat sa pagitan ng 3 iba-ibang beats."
          ],
          "starterCode": "// The 11 Beats Challenge Log:\n[ ] Beat 1: 16 bars clean at 70 BPM\n[ ] Beat 2: 16 bars clean at 70 BPM\n[ ] Beat 4 (Dance beat): 16 bars clean at 80 BPM\n[ ] Smooth Transition sa pagitan ng Beat 1 at Beat 2 nang walang pagkaantala",
          "expectedOutcome": "Matatag na limb independence sa pagitan ng kanang kamay (Hi-Hat) at kanang paa (Bass Drum)."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 2.1: 11 Beats Repertoire Mastery Sheet",
          "sheetName": "11_Beats_Log",
          "description": "I-rate ang iyong kahusayan (1 hanggang 5 stars) sa bawat isa sa 11 foundational drum beats.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Talahanayan ng 11 beats na may kasamang personal tempo limits.",
            "Listahan ng 3 sikat na OPM o dayuhang kanta na gumagamit ng mga beats na ito."
          ],
          "rubric": [
            {
              "criteria": "Limb Independence Accuracy",
              "points": 40
            },
            {
              "criteria": "Tempo Steadiness (Walang pagbilis o pagbagal)",
              "points": 40
            },
            {
              "criteria": "Repertoire Identification",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-2-1",
          "title": "Pagsusulit 2.1: 4/4 Rock Beats at Independence",
          "description": "Subukin ang kaalaman sa pagbuo ng rock grooves.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q2-1-1",
              "question": "Sa standard \"Money Beat\", sa aling mga beats pumapatak ang Bass Drum (Kick)?",
              "options": [
                "Beats 2 at 4",
                "Beats 1 at 3",
                "Sa bawat \"and\"",
                "Sa beat 1 lamang"
              ],
              "correctIndex": 1,
              "explanation": "Sa klasikong rock money beat, ang Bass Drum ay pumapatak sa beats 1 at 3 habang ang Snare ay nasa 2 at 4."
            },
            {
              "id": "q2-1-2",
              "question": "Ano ang tawag sa beat kung saan pumapalo ang bass drum sa lahat ng beats: 1, 2, 3, at 4?",
              "options": [
                "Half-Time Shuffle",
                "Four-on-the-Floor",
                "Blast Beat",
                "Linear Groove"
              ],
              "correctIndex": 1,
              "explanation": "Ang \"Four-on-the-Floor\" ay isang sikat na beat sa disco, pop, at dance music kung saan pumapalo ang kick drum sa bawat quarter note."
            }
          ]
        }
      },
      {
        "title": "Aralin 2.2: Pundasyon ng Rudiments: Paradiddle sa Drumset at Drum Workout",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/gFtUoiClWUQ",
        "videoTitle": "i-apply natin ang paradiddle sa drumset (Drum Workout) (Drum Teacher Manila)",
        "objective": "Kabisaduhin ang Single Paradiddle (R L R R - L R L L) at ilapat ito mula sa practice pad patungo sa iba't ibang bahagi ng drum set (Hi-Hat, Toms, Snare).",
        "theoryContent": "Kung may isang rudiment na dapat kabisaduhin ng bawat drummer para maging pro, ito ay walang iba kundi ang SINGLE PARADIDDLE!\n\n1. ANG ANATOMYA NG PARADIDDLE:\n• 'Para' = Dalawang salitang palo (Single Strokes: R-L o L-R)\n• 'Diddle' = Isang dobleng palo sa iisang kamay (Double Stroke: R-R o L-L)\nKabuuan:\nUnang kalahati: R - L - R - R\nIkalawang kalahati: L - R - L - L\n\n2. BAKIT MAKAPANGYARIHAN ANG PARADIDDLE?\nDahil sa double stroke sa dulo ('diddle'), awtomatikong nagpapalit ang lead hand! Pagkatapos ng RLRR, ang kasunod ay magsisimula sa kaliwa (LRLL).\nNagbibigay ito ng kalayaan sa iyong mga kamay na mag-navigate sa buong drum kit nang hindi nagbubuhol ang iyong mga braso!\n\n3. ACCENTING SA PARADIDDLE:\nLagyan ng accent (mas malakas na palo) ang unang nota ng bawat grupo:\n>            >\nR L R R  -  L R L L",
        "codeSnippet": "// SINGLE PARADIDDLE STICKING PATTERN:\nCount: 1  e  &  a  2  e  &  a\nAcc:   >           >\nHands: R  L  R  R  L  R  L  L\n\nKit Orchestration:\nRight Hand: Hi-Hat o Ride Cymbal (R)\nLeft Hand:  Snare Drum (L - ghost notes maliban sa accent)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 2.2: Paradiddle Orchestration sa Hi-Hat at Snare",
          "instructions": [
            "Magsanay ng 5 minuto ng RLRR LRLL sa practice pad sa 60 BPM.",
            "Ilipat ang Kanang Kamay sa Hi-Hat at ang Kaliwang Kamay sa Snare Drum.",
            "Lagyan ng Accent ang palo sa Snare tuwing tatama ang L sa beat 2.",
            "Sabayan ng Bass Drum sa bilang na \"1\" at \"3\"."
          ],
          "starterCode": "// Paradiddle Daily Workout:\n[ ] 5 minuto sa pad: RLRR LRLL sa 60 BPM\n[ ] 5 minuto sa pad: RLRR LRLL sa 85 BPM\n[ ] 5 minuto sa kit: Kanang kamay sa Hi-Hat, Kaliwa sa Snare\n[ ] Makagawa ng buong 4-bar groove gamit ang paradiddle",
          "expectedOutcome": "Malinis na paglipat ng lead hand at natural na dynamic contrast sa pagitan ng accented at unaccented notes."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 2.2: 40 Rudiments Progress Tracker - Paradiddle",
          "sheetName": "Paradiddle_Tracker",
          "description": "Itala ang bilis at linaw ng iyong single paradiddle sa metronome bawat linggo.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "BPM ceiling log para sa single paradiddle.",
            "Checklist ng 3 iba-ibang kit orchestrations (Snare-to-Tom, Ride-to-Snare)."
          ],
          "rubric": [
            {
              "criteria": "Sticking Accuracy (Walang mintis sa diddle)",
              "points": 40
            },
            {
              "criteria": "Dynamic Accents Control",
              "points": 40
            },
            {
              "criteria": "Consistency sa Practice Log",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-2-2",
          "title": "Pagsusulit 2.2: Paradiddle Mechanics",
          "description": "Subukin ang kaalaman sa rudimental sticking.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q2-2-1",
              "question": "Ano ang tamang sticking pattern ng isang Single Paradiddle?",
              "options": [
                "R L R L L R L R",
                "R L R R L R L L",
                "R R L L R R L L",
                "R L L R L R R L"
              ],
              "correctIndex": 1,
              "explanation": "Ang Single Paradiddle ay binubuo ng dalawang singles at isang double sa bawat kamay: R L R R at L R L L."
            },
            {
              "id": "q2-2-2",
              "question": "Ano ang ibig sabihin ng salitang \"diddle\" sa drum rudiments?",
              "options": [
                "Palo gamit ang dalawang kamay nang sabay (Flam)",
                "Dalawang magkasunod na palo sa iisang kamay (Double Stroke)",
                "Mahinang palo sa gilid ng snare (Rimclick)",
                "Palo sa pinakagitna ng cymbal bell"
              ],
              "correctIndex": 1,
              "explanation": "Ang \"diddle\" ay terminolohiya para sa dalawang magkasunod na palo sa iisang kamay (RR o LL)."
            }
          ]
        }
      },
      {
        "title": "Aralin 2.3: Mabilisang Drum Rollings at Double Stroke Application",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/hYeOyMDegGo",
        "videoTitle": "FULL DRUM LESSON | Drum Rollings | TAGALOG/Filipino Instruction (Drum Teacher Manila)",
        "objective": "Matutunan ang bukas at saradong drum rolls (Open vs. Buzz Roll), paggamit ng drumhead rebound, at pagtugtog ng malilinis na drum rollings sa intro at build-up ng kanta.",
        "theoryContent": "Ang drum roll ang isa sa pinaka-kapana-panabik at emosyonal na tunog sa isang banda!\n\n1. DALAWANG URI NG DRUM ROLLS:\n• Open Double Stroke Roll (RR LL RR LL): Malinis at naririnig ang bawat indibidwal na palo. Mahalaga para sa mga marching cadences at rock fills.\n• Closed / Buzz Roll (Press Roll): Idinidiin ang sticks sa drumhead upang lumikha ng tuloy-tuloy at makinis na tunog (karaniwang ginagamit sa ballad intros at orchestra).\n\n2. PAGGAMIT NG REBOUND:\nHuwag mong pipiliting ipalo ang dalawang beses ang bawat stick nang may puwersa. Sa halip, ibagsak ang stick sa unang palo at hayaan ang drumhead na itulak ito pataas, pagkatapos ay 'hulihin' ito ng iyong mga daliri para sa pangalawang palo!",
        "codeSnippet": "// DOUBLE STROKE ROLL EXERCISE:\nHands: R  R  L  L  R  R  L  L  R  R  L  L\nCount: 1  e  &  a  2  e  &  a  3  e  &  a\n\nRebound Drill:\n1. Drop the stick (Palo)\n2. Snap the fingers (Huli sa rebound)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 2.3: The Rebound & Double Stroke Builder",
          "instructions": [
            "Magsanay ng 3 minuto ng mabagal na RR LL sa 50 BPM gamit ang daliri at pulso.",
            "Damhin ang bounce ng drumhead; huwag pigilan ang pagtalbog ng stick.",
            "Subukan ang 5-Stroke Roll (RR LL R) at 9-Stroke Roll na may accent sa huling palo.",
            "I-apply ang drum rolling bilang 2-bar fill bago pumasok sa chorus ng isang awitin."
          ],
          "starterCode": "// Rollings Consistency Log:\n[ ] 50 BPM: 3 minuto malinis na RR LL\n[ ] 70 BPM: 3 minuto malinis na RR LL\n[ ] 5-Stroke Roll: 20 reps malinis na RR LL R\n[ ] Buzz Roll: Makinis na continuous roll sa loob ng 30 segundo",
          "expectedOutcome": "Makinis at tuloy-tuloy na roll na walang bukol o uneven na lakas sa pagitan ng mga kamay."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 2.3: Drum Rolling & Rebound Control Assessment",
          "sheetName": "Drum_Roll_Log",
          "description": "Subaybayan ang pag-unlad ng iyong double stroke roll at buzz roll control.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Daily speed log para sa double strokes.",
            "Audio recording link ng 30-segundong steady buzz roll."
          ],
          "rubric": [
            {
              "criteria": "Evenness ng Rebound",
              "points": 40
            },
            {
              "criteria": "Smooth Transition mula Mahina hanggang Malakas (Crescendo)",
              "points": 40
            },
            {
              "criteria": "Dokumentasyon",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-2-3",
          "title": "Pagsusulit 2.3: Drum Rolls at Rebound",
          "description": "Subukin ang teorya ng double strokes at buzz rolls.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q2-3-1",
              "question": "Paano nililikha ang pangalawang palo sa isang mabilis na double stroke roll (RR o LL)?",
              "options": [
                "Sa pamamagitan ng paggamit ng rebound ng drumhead at kontrol ng daliri",
                "Sa pamamagitan ng paghampas nang buong lakas ng braso sa pangalawang pagkakataon",
                "Gamit ang kick pedal",
                "Sa pamamagitan ng pagpatong ng kabilang stick"
              ],
              "correctIndex": 0,
              "explanation": "Ang epektibong double stroke roll ay umaasa sa natural na rebound ng drumhead na kinokontrol ng mga daliri (fulcrum and back fingers)."
            }
          ]
        }
      },
      {
        "title": "Aralin 2.4: 16 Flashy Beginner Drum Fills para sa Transisyon ng Kanta",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/5rMPvAELHYI",
        "videoTitle": "16 Flashy BEGINNER DRUM FILLS (Tagalog Drum Lesson) (Drum Teacher Manila)",
        "objective": "Tugtugin ang 16 na madaling matutunang drum fills na may malaking dating, na nag-uugnay ng verse patungo sa chorus nang hindi nawawala sa tempo.",
        "theoryContent": "Ang drum fill ay parang bantas sa isang pangungusap—ito ang nagsasabi sa mga kabanda at sa mga nakikinig na may darating na bagong bahagi ng kanta!\n\n1. ANG GINTONG PANUNTUNAN NG DRUM FILLS:\n• Huwag bilisan ang fill! Ang pinakakaraniwang pagkakamali ng mga baguhan ay ang pagmamadali (rushing) kapag nag-fi-fill.\n• Ang huling palo ng fill ay dapat sumalubong nang eksakto sa beat 1 ng susunod na bar kasabay ng Crash Cymbal at Bass Drum!\n\n2. 3 PANGUNAHING KATEGORYA NG FILLS SA ARALING ITO:\n• 1-Beat Fills: Mabilisang bagsak sa beat 4 bago mag-chorus.\n• 2-Beat Fills: Nagsisimula sa beat 3 patungo sa beat 4 (e.g. Snare to High Tom).\n• Full-Bar Fills: 4 na buong beats ng orchestration paikot sa Snare, Tom 1, Mid Tom, at Floor Tom!",
        "codeSnippet": "// 1-BAR CLASSIC FILL AROUND THE DRUMS:\nBeat:  1   &   2   &   3   &   4   &  | 1 (Next Bar)\nSnare: o   o   o   o                  | \nTom 1:                 o   o          |\nFl.Tom:                        o   o  |\nCrash:                                | X\nKick:                                 | o",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 2.4: The 3-Bars Groove + 1-Bar Fill Cycle",
          "instructions": [
            "Pumili ng isa sa 16 flashy drum fills mula sa video tutorial.",
            "Tugtugin ang Beat #1 sa loob ng 3 bars nang steady sa 75 BPM.",
            "Sa ika-4 na bar, bitawan ang Hi-Hat at tugtugin ang fill sa toms at snare.",
            "Bumagsak nang solido sa Beat 1 ng kasunod na measure gamit ang Crash + Kick nang sabay!"
          ],
          "starterCode": "// Transition Mastery Routine:\n[ ] 3 Bars Groove + 1 Bar Fill sa 70 BPM (Ulitin 4 na beses nang tuloy-tuloy)\n[ ] Walang pagbilis sa fill (steady metronome alignment)\n[ ] Solid Crash + Kick accent sa beat 1",
          "expectedOutcome": "Swabeng pagpasok at paglabas sa drum fill nang hindi naaantala ang kumpas ng kanta."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 2.4: 16 Flashy Drum Fills Repertory Log",
          "sheetName": "Fills_Repertoire",
          "description": "I-rate at itala ang 16 fills at tukuyin kung saang bahagi ng kanta (Verse-to-Chorus, Bridge-to-Solo) ito pinaka-angkop gamitin.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Kompletong talaan ng 16 fills na may kasamang orchestration notes.",
            "Pagsusuri sa pinaka-paboritong 3 fills para sa live band performance."
          ],
          "rubric": [
            {
              "criteria": "Timing Stability habang nag-fi-fill",
              "points": 40
            },
            {
              "criteria": "Crash and Kick landing sa Beat 1",
              "points": 40
            },
            {
              "criteria": "Repertoire Completion",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-2-4",
          "title": "Pagsusulit 2.4: Drum Fills at Song Transitions",
          "description": "Subukin ang pag-unawa sa tamang paglalagay ng drum fills.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q2-4-1",
              "question": "Ano ang pinakamalaking pagkakamali na kadalasang ginagawa ng mga nagsisimulang drummer kapag nagpapatugtog ng drum fill?",
              "options": [
                "Pagpapabilis ng tempo (rushing) dahil sa excitement",
                "Paggamit ng stick na may maling kulay",
                "Pagpalo nang masyadong mahina sa crash",
                "Pag-upo nang tuwid"
              ],
              "correctIndex": 0,
              "explanation": "Karamihan sa mga baguhan ay bumibilis (rushing) kapag nag-fi-fill dahil sa excitement o kakulangan sa metronome control."
            },
            {
              "id": "q2-4-2",
              "question": "Aling kombinasyon ang karaniwang pinapalo sa eksaktong beat 1 pagkatapos ng isang drum fill para sa solidong transition?",
              "options": [
                "Crash Cymbal at Bass Drum nang sabay",
                "Hi-Hat lamang nang nakabukas",
                "Floor Tom lamang",
                "Wala, nagpapahinga ang drummer sa beat 1"
              ],
              "correctIndex": 0,
              "explanation": "Ang pagsasabay ng Crash Cymbal at Bass Drum sa beat 1 ay nagbibigay ng malinaw, mabigat, at dynamic na pagbabalik sa groove."
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 3: Limb Independence, One-Hand Fills at Simprang Drum Fills",
    "duration": "2 Linggo (20 Oras)",
    "overview": "Umakyat sa Intermediate level: Paunlarin ang limb independence sa pagitan ng mga kamay at paa, matutong mag-fill gamit ang isang kamay, at tuklasin ang sining ng \"Pagsipra\" sa pandinig nang walang piyesa.",
    "lessons": [
      {
        "title": "Aralin 3.1: One-Hand Drum Fills at Hi-Hat Coordination Techniques",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/-GvOdStU2_s",
        "videoTitle": "One Hand DRUM FILLS (TAGALOG DRUM LESSON) (Drum Teacher Manila)",
        "objective": "Tugtugin ang mga dynamic na drum fills gamit ang isang kamay habang ang kabilang kamay ay patuloy na nagpapanatili ng kumpas sa Hi-Hat.",
        "theoryContent": "Ang kakayahang mag-fill gamit ang isang kamay (One-Hand Drum Fill) ay nagbubukas ng pinto sa modernong funk, R&B, at gospel drumming!\n\n1. ANG KONSEPTO NG UNILATERAL INDEPENDENCE:\nKaraniwan, kapag nag-fi-fill ang drummer, parehong kamay ang umaalis sa Hi-Hat. Ngunit sa One-Hand Fill:\n• Ang Kanang Kamay ay nananatiling pumapalo sa Hi-Hat sa steady 8th o 16th notes.\n• Ang Kaliwang Kamay ay naglalakbay sa pagitan ng Snare at Toms upang maglagay ng matatalas na syncopated fills!\n\n2. MGA BENEPISYO SA LIVE BAND:\nHindi nawawala ang timekeeping cymbal pulse kaya hindi mawawala ang timing ng lead guitarist, bassist, o mang-aawit!",
        "codeSnippet": "// ONE-HAND FILL PATTERN:\nHH:    x   x   x   x   x   x   x   x  (Kanang kamay steady)\nSnare:         o           o   o      (Kaliwa nag-fi-fill)\nTom 1:                             o  (Kaliwa lilipat)\nKick:  o               o              ",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 3.1: Left-Hand Freedom Lab",
          "instructions": [
            "Panatilihin ang steady 8th notes sa Hi-Hat gamit ang kanang kamay sa 70 BPM.",
            "I-improvise ang kaliwang kamay sa pagpalo ng iba-ibang rhythms sa snare drum.",
            "Siguraduhing hindi humihinto o bumibilis ang kanang kamay sa Hi-Hat.",
            "Maglagay ng Bass Drum sa beat 1 at 3 habang ginagawa ang drill."
          ],
          "starterCode": "// One-Hand Fill Verification:\n[ ] 70 BPM: 2 minuto Hi-Hat steady habang ang kaliwang kamay ay may syncopated snare hits\n[ ] Walang \"flamming\" o di-sinasadyang sabay na pagtama kung hindi nilalayon\n[ ] Maayos na transition pabalik sa standard backbeat",
          "expectedOutcome": "Buong kalayaan ng kaliwang kamay nang hindi naapektuhan ang takbo ng kanang kamay."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 3.1: Limb Independence Progress Log",
          "sheetName": "Independence_Log",
          "description": "Subaybayan ang antas ng koordinasyon sa pagitan ng kaliwa at kanang bahagi ng katawan.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Pagsusuri sa limb balance (Left Hand vs Right Hand control).",
            "Talaan ng natutunang 4 na One-Hand Fill patterns."
          ],
          "rubric": [
            {
              "criteria": "Hi-Hat Timekeeping Consistency",
              "points": 50
            },
            {
              "criteria": "Left Hand Dynamic Control",
              "points": 30
            },
            {
              "criteria": "Dokumentasyon",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-3-1",
          "title": "Pagsusulit 3.1: One-Hand Fills at Independence",
          "description": "Subukin ang kaalaman sa advanced hand coordination.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q3-1-1",
              "question": "Ano ang pangunahing bentahe ng isang \"One-Hand Drum Fill\" kumpara sa tradisyonal na two-handed fill?",
              "options": [
                "Hindi nawawala ang steady timekeeping pulse sa Hi-Hat o Ride cymbals",
                "Mas madaling tugtugin kaysa sa single stroke",
                "Hindi kailangan ng drumsticks",
                "Pang-jazz lamang ito at hindi pwede sa rock"
              ],
              "correctIndex": 0,
              "explanation": "Dahil nananatili ang isang kamay sa timekeeping cymbal, tuloy-tuloy ang pulso kaya mas madaling makasabay ang buong banda."
            }
          ]
        }
      },
      {
        "title": "Aralin 3.2: Sining ng Pagsipra ng Drum Fills at Pag-intindi sa Kanta nang Walang Piyesa",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/2Ezd9wQGA0o",
        "videoTitle": "PAANO Sumipra ng DRUM FILLS | Electronic Drums VS Real Drums (Drum Teacher Manila)",
        "objective": "Matutunan ang metodo sa pakikinig (active ear training) upang masipra at mahimay ang anumang drum fill o groove mula sa Spotify o YouTube nang hindi nangangailangan ng pormal na piyesa.",
        "theoryContent": "Sa kultura ng musikang Pilipino, ang salitang \"Sipra\" ay nangangahulugang pag-aaral ng tugtog gamit ang matalas na pandinig. Ito ang pinaka-praktikal na kasanayan ng isang gigging drummer!\n\n1. ANG 4 NA HAKBANG SA PAGSIPRA NG DRUM FILL:\n• Hakbang 1: Hanapin ang \"Downbeat\" kung saan nagsimula ang fill (Nagsimula ba sa Beat 3? Sa Beat 4? O buong bar?).\n• Hakbang 2: Tukuyin ang Subdivision (Ito ba ay 8th notes? Triplet/Shuffle? O mabilisang 16th notes?).\n• Hakbang 3: I-vocalize ang Sticking (Bigkasin gamit ang bibig: \"Ta-ka-ta-ka-tum-tum-paks!\").\n• Hakbang 4: I-map sa Drum Kit (Saan pinatama? Snare -> Tom 1 -> Floor Tom -> Crash).\n\n2. ELECTRONIC DRUMS VS. ACOUSTIC DRUMS:\nPaano magsanay sa e-kit nang hindi nasisira ang dynamic touch kapag tumugtog sa tunay na acoustic drum set sa entablado.",
        "codeSnippet": "// METODO SA PAGSIPRA NG KANTA (OPM FORMAT):\n1. Intro: 4 bars (Hi-Hat Count / Cymbal Swell)\n2. Verse 1: Tight closed Hi-Hat + Cross-stick sa Snare\n3. Pre-Chorus: Open Hi-Hat build-up + Crescendo Kick\n4. Chorus: Malawak na Ride Cymbal o Washed Open Hi-Hat + Rimshot Snare\n5. Fill into Chorus: Hanapin ang beat 3 o 4 exit point!",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 3.2: Ear-Training Transcription Challenge",
          "instructions": [
            "Makinig sa 15-segundong drum break mula sa isang paboritong OPM track.",
            "I-pause at i-loop ang drum fill nang 5 beses.",
            "Isulat ang sticking (R at L) at ang mga drum instruments na tinamaan sa isang papel.",
            "Tugtugin ito sa iyong drums kasabay ng kanta nang 100% tumpak."
          ],
          "starterCode": "// Transcription Worksheet Checklist:\n[ ] Nahanap ang starting beat ng fill (Beat 1, 2, 3, o 4)\n[ ] Natukoy ang subdivision (Straight 16th vs Triplet)\n[ ] Naisulat ang sticking pattern\n[ ] Matagumpay na naitugtog kasabay ng orihinal na audio track",
          "expectedOutcome": "Matalas na pandinig na kayang himayin ang magkakapatong na tunog ng snare, kick, at toms."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 3.2: Song Transcription & Sipra Journal",
          "sheetName": "Sipra_Journal",
          "description": "Itala ang 3 kantang iyong sinipra nang mano-mano gamit ang pandinig.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Talaan ng Pamagat ng Kanta, Banda, BPM, at Time Signature.",
            "ASCII diagram o nakasulat na sticking ng paboritong fill ng bawat kanta."
          ],
          "rubric": [
            {
              "criteria": "Katumpakan ng Siniprang Rhythms",
              "points": 50
            },
            {
              "criteria": "Kalinawan ng Written Transcription",
              "points": 30
            },
            {
              "criteria": "Pagsusuri sa Song Structure",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-3-2",
          "title": "Pagsusulit 3.2: Pagsipra at Ear Training",
          "description": "Subukin ang kakayahan sa pagsusuri ng kanta sa pamamagitan ng pandinig.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q3-2-1",
              "question": "Ano ang pinakaunang dapat alamin kapag sinisipra ang isang drum fill sa kanta?",
              "options": [
                "Kung magkano ang presyo ng drum set ng drummer",
                "Kung saang beat eksaktong nagsisimula ang fill (Starting Beat)",
                "Kung anong brand ng drumsticks ang gamit",
                "Kung gaano kalakas ang bass guitar"
              ],
              "correctIndex": 1,
              "explanation": "Ang pagtukoy sa starting beat (e.g. Beat 3, Beat 4, o and-of-4) ang pinakaunang susi upang mailagay sa tamang sukat ang rhythm ng fill."
            }
          ]
        }
      },
      {
        "title": "Aralin 3.3: Paradiddle Drum Fills sa Loob ng mga Kanta at Accented Flows",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/LtojVHKvO6w",
        "videoTitle": "Paradiddle Drum Fill (Drum Teacher Manila)",
        "objective": "I-apply ang Single Paradiddle bilang isang high-speed drum fill sa buong drum kit sa pamamagitan ng pamamahagi ng mga palo sa pagitan ng Snare, High Tom, at Floor Tom.",
        "theoryContent": "Sa Aralin 2.2, natutunan natin ang Single Paradiddle sa practice pad. Ngayon, gagawin nating halimaw na drum fill ang paradiddle sa entablado!\n\n1. ANG PARADIDDLE FILL ORCHESTRATION:\nSa halip na manatili sa snare:\n• R1 (Right Hand): Papalo sa High Tom (Accented!)\n• L1 (Left Hand): Papalo sa Snare (Soft / Ghost)\n• R2 & R3 (Right Diddle): Papalo sa Floor Tom\n• L2 (Left Hand): Papalo sa Mid Tom o Snare (Accented!)\n• R4 (Right Hand): Papalo sa Snare\n• L3 & L4 (Left Diddle): Papalo sa High Tom\n\nDahil sa natural na salitan ng kamay, magmumukhang napakabilis at napakahirap ng iyong fill sa paningin ng mga manonood, kahit napaka-natural nito para sa iyong mga kamay!",
        "codeSnippet": "// PARADIDDLE FILL ACROSS THE KIT:\nCount: 1   e   &   a   2   e   &   a\nAcc:   >               >\nHands: R   L   R   R   L   R   L   L\nDrums: HT  SD  FT  FT  SD  HT  SD  SD\n       (High Tom -> Snare -> Floor Tom -> Snare)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 3.3: High-Speed Kit Orchestration Drill",
          "instructions": [
            "Magsanay ng RLRR LRLL sa 70 BPM habang inililipat ang accented notes sa toms.",
            "Dahan-dahang itaas ang tempo patungong 90 BPM gamit ang metronome.",
            "Ipasok ang paradiddle fill sa dulo ng isang 8-bar rock phrase.",
            "Siguraduhing malinaw ang bawat nota at walang sabay na bagsak ng diddles."
          ],
          "starterCode": "// Kit Orchestration Routine:\n[ ] 70 BPM: 4 bars steady paradiddle fill\n[ ] 85 BPM: 4 bars steady paradiddle fill\n[ ] 100 BPM: Malinis na transisyon mula groove papunta sa paradiddle fill at balik sa groove",
          "expectedOutcome": "Mabilis, dynamic, at visually stunning na drum fill gamit ang natural sticking ng paradiddle."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 3.3: Paradiddle Orchestration Matrix",
          "sheetName": "Paradiddle_Matrix",
          "description": "Idisenyo ang sarili mong 3 orkestrasyon ng paradiddle sa drum kit at i-log ang practice results.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Kombinasyon ng toms at snare na ginamit.",
            "BPM ceiling log para sa kit-wide paradiddles."
          ],
          "rubric": [
            {
              "criteria": "Kalinawan ng Orchestration",
              "points": 40
            },
            {
              "criteria": "Accents at Ghost Notes Balance",
              "points": 40
            },
            {
              "criteria": "Worksheet Submission",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-3-3",
          "title": "Pagsusulit 3.3: Paradiddle Orchestration",
          "description": "Subukin ang kaalaman sa paglalapat ng rudiments sa drum kit.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q3-3-1",
              "question": "Bakit napaka-epektibong gamitin ang Paradiddle bilang drum fill sa drum set?",
              "options": [
                "Dahil sa double stroke (diddle), awtomatikong nagpapalit ang nangungunang kamay kaya hindi nagbubuhol ang mga braso sa paglipat sa toms",
                "Dahil isang kamay lang ang kailangan gamitin",
                "Dahil hindi na kailangan ng metronome",
                "Dahil hindi ginagamit ang bass drum"
              ],
              "correctIndex": 0,
              "explanation": "Ang diddle (RR o LL) ay nagbibigay ng oras sa kabilang kamay na makalipat nang maluwag sa kabilang tom nang hindi nagkakasalubong o nagbubuhol ang mga braso."
            }
          ]
        }
      },
      {
        "title": "Aralin 3.4: Intermediate Beat Variations: Bass Drum Placement at Snare Pop",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/5B1CM9hXnmA",
        "videoTitle": "Lesson 19 [Beginner Drum Lesson] (Drum Teacher Manila)",
        "objective": "Maperpekto ang pagtugtog ng off-beat bass drum syncopations (palo sa \"and\" o 16th-note offbeats) habang pinananatiling malutong at solid ang rimshot sa snare.",
        "theoryContent": "Ang pagkakaiba ng tunog ng baguhan sa intermediate drummer ay nasa \"Snare Pop\" (Rimshot) at ang kalayaan ng Bass Drum sa mga off-beats!\n\n1. ANG RIMSHOT TECHNIQUE:\nUpang makuha ang malutong at makapangyarihang tunog ng snare sa mga Pinoy rock concerts:\n• Iposisyon ang stick upang sabay na tumama ang tip sa gitna ng drumhead at ang katawan ng stick sa metal rim (hoop) ng snare drum.\n• Lumilikha ito ng matalas na \"CRACK\" na pumuputol sa ingay ng distorsyon ng mga gitara!\n\n2. OFF-BEAT KICK INDEPENDENCE:\nPagsasanay sa pagpapatunog ng bass drum sa \"and\" ng beat 1 o beat 2:\nCount: 1   &   2   &   3   &   4   &\nKick:  o       -   o   -   -   o   -\nAng pagtama ng kick bago o pagkatapos ng snare ay lumilikha ng kakaibang \"bounce\" sa kanta!",
        "codeSnippet": "// INTERMEDIATE SYNCOPATED ROCK GROOVE:\nHH: x   x   x   x   x   x   x   x\nSD:         O               O       (Capital O = RIMSHOT!)\nBD: o         o     o   o           (Syncopated kick patterns)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 3.4: Solid Rimshot at Off-Beat Kick Drill",
          "instructions": [
            "Sanayin ang 20 reps ng consistent rimshot sa snare drum; tiyaking magkakatulad ang lutong ng bawat palo.",
            "Ipatugtog ang syncopated bass drum sa \"1\" at \"2-&\".",
            "Manatili sa groove sa loob ng 3 minuto sa 80 BPM nang hindi nagbabago ang volume ng Hi-Hat.",
            "Subukan sa 95 BPM para sa mas energetic na Pinoy pop-punk feel."
          ],
          "starterCode": "// Rimshot & Kick Syncopation Log:\n[ ] 20 Consistent Rimshots (Walang mahinang palo)\n[ ] 80 BPM: 3 minuto tuloy-tuloy na syncopated groove\n[ ] 95 BPM: 3 minuto tuloy-tuloy na syncopated groove",
          "expectedOutcome": "Malutong, professional rock snare sound na may dynamic at syncopated bass drum placement."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 3.4: Groove Dynamics & Rimshot Consistency Log",
          "sheetName": "Rimshot_Log",
          "description": "Itala ang consistency ng iyong rimshot hit rate at bass drum independence.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Self-rated rimshot accuracy percentage.",
            "Audio analysis ng dynamic balance sa pagitan ng Snare at Hi-Hat."
          ],
          "rubric": [
            {
              "criteria": "Rimshot Sound Quality",
              "points": 40
            },
            {
              "criteria": "Offbeat Bass Drum Timing",
              "points": 40
            },
            {
              "criteria": "Documentation",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-3-4",
          "title": "Pagsusulit 3.4: Rimshots at Syncopation",
          "description": "Subukin ang kaalaman sa advanced snare technique.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q3-4-1",
              "question": "Ano ang \"Rimshot\" sa snare drum?",
              "options": [
                "Palo kung saan sabay na tumatama ang tip ng stick sa drumhead at ang katawan sa metal rim ng snare",
                "Palo sa pinaka-ilalim ng snare wires",
                "Palo gamit ang dalawang sticks na pinag-krus",
                "Mahinang tapik gamit ang daliri"
              ],
              "correctIndex": 0,
              "explanation": "Ang Rimshot ay nagagawa kapag sabay na tinatamaan ang drumhead at ang metal hoop ng snare, na nagreresulta sa pinakamalakas at pinakamalutong na tunog."
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 4: Classic OPM Grooves, Slow Ballad at Church Worship Fills",
    "duration": "2 Linggo (22 Oras)",
    "overview": "Lutasin ang pinakakilalang mga tugtugin sa Pilipinas: Matutunan ang klasikong 90s Pinoy Rock ng Eraserheads, ang 6/8 slow ballad time signature ng Cueshe, modernong syncopation ng Lola Amour, at ang top 5 worship drum fills para sa simbahan.",
    "lessons": [
      {
        "title": "Aralin 4.1: Classic Pinoy Rock & Pop Groove: \"With A Smile\" ng Eraserheads",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/SL2omXuE7fg",
        "videoTitle": "With A Smile DRUM LESSON (With Music) (Drum Teacher Manila)",
        "objective": "Tugtugin ang iconic drum track ng pinakadakilang Pinoy rock anthem: \"With A Smile\" ng Eraserheads, kabilang ang acoustic feel, cross-stick intro, at banayad na drum fills.",
        "theoryContent": "Kung may isang kanta na alam ng bawat Pilipino saan mang panig ng mundo, ito ay ang \"With A Smile\" ng Eraserheads!\n\n1. ANG \"LESS IS MORE\" PHILOSOPHY SA BALLAD DRUMMING:\nHindi lahat ng kanta ay nangangailangan ng mabilis na palo o maingay na crash cymbals. Sa \"With A Smile\":\n• Intro at Verse: Cross-Stick (Side-Stick) sa Snare drum. Ipatong ang palad sa head at ipalo ang katawan ng stick sa rim para sa makahoy (\"woody\") at banayad na tunog.\n• Hi-Hat Dynamics: Bahagyang malambot ang palo upang marinig ang boses ng mang-aawit at ang acoustic guitar.\n• Chorus Entry: Dahan-dahang lumipat mula Cross-Stick patungo sa full Snare backbeat nang may banayad na cymbal wash!",
        "codeSnippet": "// \"WITH A SMILE\" DRUM GROOVE STRUCTURE:\nTempo: Humigit-kumulang 82 BPM (Bawal magmadali!)\n\nVerse (Cross-Stick):\nHH: x   x   x   x   x   x   x   x\nCS:         x               x       (Cross-stick click)\nBD: o               o\n\nChorus (Full Snare):\nHH: x   x   x   x   x   x   x   x\nSD:         o               o       (Maluwag at bukas na tunog)\nBD: o         o     o               ",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 4.1: Full Play-Along sa \"With A Smile\"",
          "instructions": [
            "Makinig sa orihinal na track ng Eraserheads sa 82 BPM.",
            "Magsanay ng tamang tunog ng Cross-Stick sa pamamagitan ng pag-ikot ng stick sa snare rim hanggang makuha ang pinakamagandang tono.",
            "Tugtugin ang buong kanta mula Intro hanggang Outro kasabay ng music track sa video tutorial.",
            "Panatilihing steady ang tempo nang walang pagkaantala sa pagitan ng Verse at Chorus."
          ],
          "starterCode": "// Song Performance Checklist:\n[ ] Perpektong Cross-Stick tone sa Verse\n[ ] Swabeng pagpalit mula Cross-Stick patungo sa Normal Snare sa Chorus\n[ ] Tamang dynamics (Mahina sa verse, malawak sa chorus)\n[ ] Natapos ang buong kanta nang eksaktong kasabay ng backing track",
          "expectedOutcome": "Propesyonal na kakayahan sa pagtugtog ng Pinoy acoustic ballad nang may musical maturity at dynamics."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 4.1: OPM Song Play-Along Evaluation",
          "sheetName": "OPM_Ballad_Log",
          "description": "Suriin ang iyong performance sa pagtugtog ng \"With A Smile\" at i-log ang timing accuracy.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Pagsusuri sa sariling dynamics (Pianissimo vs Forte).",
            "Link ng audio o video recording ng iyong play-along."
          ],
          "rubric": [
            {
              "criteria": "Musical Feel at Dynamics",
              "points": 40
            },
            {
              "criteria": "Tempo Steadiness at 82 BPM",
              "points": 40
            },
            {
              "criteria": "Worksheet Reflection Notes",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-4-1",
          "title": "Pagsusulit 4.1: OPM Ballad Dynamics",
          "description": "Subukin ang pag-unawa sa acoustic ballad drumming techniques.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q4-1-1",
              "question": "Ano ang tawag sa technique kung saan nakalapat ang palad sa snare head habang pinapalo ang katawan ng stick sa metal hoop para sa banayad na acoustic sound?",
              "options": [
                "Cross-Stick (o Side-Stick)",
                "Rimshot",
                "Buzz Roll",
                "Flam Tap"
              ],
              "correctIndex": 0,
              "explanation": "Ang Cross-Stick o Side-Stick ay nagbibigay ng maamong \"click\" sound na perpekto para sa acoustic songs at ballads tulad ng \"With A Smile\"."
            }
          ]
        }
      },
      {
        "title": "Aralin 4.2: Slow Ballad 6/8 Time Signature Mastery: \"Pangako\" ng Cueshe",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/g3Ph-lIu9xw",
        "videoTitle": "Pangako DRUM LESSON (Cueshe) (Drum Teacher Manila)",
        "objective": "Kabisaduhin ang 6/8 at 12/8 time signatures para sa slow rock at power ballads, matutunan ang triplet pulse counting (1-2-3, 4-5-6), at tugtugin ang klasikong OPM rock ballad na \"Pangako\" ng Cueshe.",
        "theoryContent": "Karamihan sa mga pinakasikat na Pinoy power ballads at worship songs ay hindi nakasulat sa 4/4 time—ang mga ito ay nasa 6/8 time signature!\n\n1. PAG-INTINDI SA 6/8 TIME SIGNATURE:\n• Sa 6/8 time, may anim na 8th-note beats sa bawat sukat!\n• Binibilang ito bilang: 1 - 2 - 3,  4 - 5 - 6\n• May dalawang pangunahing bagsak (Pulse):\n  - Beat 1: Malakas na Bass Drum (Kick)\n  - Beat 4: Malakas na Snare Backbeat!\n  - Beats 2, 3, 5, 6: Tuloy-tuloy na daloy sa Ride cymbal o Hi-Hat.\n\n2. ANG TRIPLET \"SWAY\" FEEL:\nHindi ito tuwid na pop beat; may ugoy ito tulad ng pagsayaw o pag-ugoy sa duyan. Damhin ang bawat grupo ng tatlo (Groups of 3).",
        "codeSnippet": "// 6/8 SLOW ROCK BALLAD GRID (\"PANGAKO\" STYLE):\nCount: 1   2   3   4   5   6  | 1   2   3   4   5   6\nRide:  x   x   x   x   x   x  | x   x   x   x   x   x\nSnare:             o          |             o\nKick:  o                      | o       o              \n       (One-two-three, Four-five-six)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 4.2: 6/8 Slow Rock Play-Along Lab",
          "instructions": [
            "Itakda ang metronome sa 6/8 compound time sa 54 BPM (Dotted Quarter).",
            "Bigkasin nang malakas: \"1-2-3, 4-5-6\" nang tuloy-tuloy habang pumapalo sa Ride cymbal.",
            "Ibagsak ang Kick sa 1, at ang Snare sa 4.",
            "Tugtugin ang buong kanta ng Cueshe na \"Pangako\" kasabay ng tutorial video."
          ],
          "starterCode": "// 6/8 Time Checklist:\n[ ] Matatag na 1-2-3, 4-5-6 pulse sa Ride Cymbal\n[ ] Solisong Snare hit sa eksaktong Beat 4\n[ ] Triplet fills sa toms na eksaktong pumapasok sa sukat\n[ ] Buong play-along ng \"Pangako\" nang walang mintis",
          "expectedOutcome": "Buong kompiyansa sa pagtugtog ng 6/8 at 12/8 slow rock ballads at simbahan worship music."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 4.2: 6/8 Time Signature Mastery Chart",
          "sheetName": "6_8_Ballad_Log",
          "description": "Itala ang mga kantang OPM na nasa 6/8 time at suriin ang kanilang rhythmic pacing.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Listahan ng 4 na OPM songs na gumagamit ng 6/8 time signature.",
            "BPM translation (Quarter note vs Dotted quarter note pulse)."
          ],
          "rubric": [
            {
              "criteria": "6/8 Triplet Pulse Execution",
              "points": 50
            },
            {
              "criteria": "Song Structure Understanding",
              "points": 30
            },
            {
              "criteria": "Worksheet Accuracy",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-4-2",
          "title": "Pagsusulit 4.2: 6/8 Time Signature",
          "description": "Subukin ang kaalaman sa slow rock at compound meter.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q4-2-1",
              "question": "Sa 6/8 time signature, sa aling beat karaniwang pumapatak ang Snare Drum backbeat?",
              "options": [
                "Beat 2",
                "Beat 4",
                "Beat 3",
                "Beat 6"
              ],
              "correctIndex": 1,
              "explanation": "Sa 6/8 time (1-2-3, 4-5-6), ang pangunahing snare backbeat ay pumapatak sa beat 4 habang ang kick ay nasa beat 1."
            }
          ]
        }
      },
      {
        "title": "Aralin 4.3: Modern Syncopated Pop Groove: \"Raining In Manila\" ng Lola Amour",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/zC4H6tfZB1w",
        "videoTitle": "Raining In Manila | Drum Tutorial (PART 1) (Drum Teacher Manila)",
        "objective": "Tugtugin ang modernong Pinoy city-pop anthem: \"Raining In Manila\" ng Lola Amour, kabilang ang upbeat Hi-Hat openings, brass-section hits, at syncopated funk kick patterns.",
        "theoryContent": "Ang \"Raining In Manila\" ng Lola Amour ay isa sa pinaka-matalinong na-arrange na modernong OPM pop tracks sa kasaysayan!\n\n1. ANG CITY-POP / FUNK DRUM FORMULA:\n• Mabilis at masiglang tempo (humigit-kumulang 128 BPM).\n• Upbeat Hi-Hat Barks (Bukas-Sarang Hi-Hat): Ang Hi-Hat ay binubuksan sa \"&\" (off-beat) at agarang isinasara gamit ang kaliwang paa sa downbeat.\n• Brass Section Synchronization: Ang drummer ay hindi lamang nagpapanatili ng beat; sinasabayan niya ang mga stabs at accent ng trumpeta at saxophone gamit ang crash cymbals at snare!\n\n2. KALINISAN SA MATAAS NA TEMPO:\nDahil mabilis ang tempo, kailangan ng sobrang gaan na kamay upang hindi mangalay bago matapos ang kanta.",
        "codeSnippet": "// \"RAINING IN MANILA\" HI-HAT OPENING PATTERN:\nCount: 1   &   2   &   3   &   4   &\nHH:    x   o   x   o   x   o   x   o   ('o' = Open Hi-Hat bark!)\nFoot:  +       +       +       +       ('+' = Close Hi-Hat with foot)\nSD:            o               o\nBD:    o     o       o   o             (Funk syncopation!)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 4.3: Lola Amour Funk Syncopation Drill",
          "instructions": [
            "Simulan ang Hi-Hat bark exercise sa mabagal na 90 BPM gamit ang metronome.",
            "Sanayin ang koordinasyon ng kaliwang paa sa pagtapak sa Hi-Hat sa bawat numero habang binubuksan ito sa bawat \"&\".",
            "Dahan-dahang iakyat ang tempo patungong 128 BPM.",
            "Tugtugin ang Verse at Chorus ng \"Raining In Manila\" kasabay ng tutorial track."
          ],
          "starterCode": "// \"Raining In Manila\" Performance Log:\n[ ] 90 BPM: Malinis na Hi-Hat open-and-close coordination\n[ ] 110 BPM: Malinis na syncopated kick pattern\n[ ] 128 BPM (Original Tempo): Buong play-along ng Part 1 nang walang sablay",
          "expectedOutcome": "Magaan, masigla, at sobrang sarap pakinggang modern funk-pop groove na may professional brass synchronization."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 4.3: Modern OPM Syncopation Analysis",
          "sheetName": "Modern_OPM_Log",
          "description": "Suriin ang mga elemento ng funk at brass syncopation sa modernong musikang Pilipino.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Pagsusuri sa Hi-Hat foot pedal open-close timing.",
            "BPM progress tracker patungo sa 128 BPM."
          ],
          "rubric": [
            {
              "criteria": "Hi-Hat Bark Cleanliness",
              "points": 40
            },
            {
              "criteria": "Tempo Stamina sa 128 BPM",
              "points": 40
            },
            {
              "criteria": "Pagsusumite ng Worksheet",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-4-3",
          "title": "Pagsusulit 4.3: Funk Syncopation at Hi-Hat Barks",
          "description": "Subukin ang kaalaman sa modern OPM drumming techniques.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q4-3-1",
              "question": "Ano ang tinatawag na \"Hi-Hat Bark\"?",
              "options": [
                "Pagpalo sa Hi-Hat habang bahagyang nakabukas sa upbeat at agarang pagsara nito gamit ang kaliwang paa sa downbeat",
                "Pagsigaw habang tumutugtog",
                "Palo sa pinakailalim ng cymbals",
                "Paggamit ng sirang drumsticks"
              ],
              "correctIndex": 0,
              "explanation": "Ang Hi-Hat bark ay isang sikat na funk/pop technique kung saan binubuksan ang hi-hat para sa maikling \"chhh\" sound at agarang pinapatay ng foot pedal sa kasunod na beat."
            }
          ]
        }
      },
      {
        "title": "Aralin 4.4: TOP 5 Church & Worship Drum Fills para sa Banda at Simbahan",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/WpV7A8prmQs",
        "videoTitle": "TOP 5 Church DRUM FILLS | Worship Drummer Pilipinas Episode 3 (TAGALOG) (Drum Teacher Manila)",
        "objective": "Kabisaduhin ang 5 pinakamalupit at pinaka-epektibong church drum fills na ginagamit sa modern worship music sa Pilipinas, kabilang ang dynamic swells, floor tom grooves, at tasteful transition fills.",
        "theoryContent": "Sa Pilipinas, napakalaking porsyento ng mga pinakamahuhusay na drummers ay nagsimula at patuloy na naglilingkod sa mga simbahan (Church / Worship Drumming).\n\n1. ANG MITHIIN NG WORSHIP DRUMMER:\nSa simbahan, ang tungkulin ng drummer ay HINDI magpasikat, kundi suportahan ang pananampalataya at daloy ng pagsamba ng buong kongregasyon.\n• Dynamic Sensitivity: Marunong tumugtog ng sobrang hina (Pianissimo) kapag may nananalangin, at marunong magpasabog ng buong lakas (Fortissimo) kapag mataas ang papuri!\n• Swells gamit ang Mallets o Brushes: Banayad na pagpapatunog ng crash cymbals.\n\n2. ANG TOP 5 CHURCH FILLS NA ITINUTURO SA ARALING ITO:\n• Fill 1: The Subtle 16th-Note Ghosted Snare Build-up\n• Fill 2: The Floor Tom Driving Pulse (Tribal Praise Groove)\n• Fill 3: The Linear Triplet Flow to Crash\n• Fill 4: The Delayed Kick & Cymbal Catch\n• Fill 5: The Grand Climax Crescendo Roll!",
        "codeSnippet": "// CHURCH WORSHIP BUILD-UP GROOVE (FLOOR TOM DRIVEN):\nCount: 1  e  &  a  2  e  &  a  3  e  &  a  4  e  &  a\nFT:    o  o  o  o  o  o  o  o  o  o  o  o  o  o  o  o   (Crescendo mula mahina patungo sa malakas!)\nKick:  o           o           o           o\nSnare:             o                       o            (Accent sa 2 at 4 sa climax)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 4.4: Worship Dynamics at Praise Climax Routine",
          "instructions": [
            "Magsanay ng Floor Tom tribal groove sa 72 BPM nang may kontroladong crescendo (mahina patungong napakalakas).",
            "Subukan ang bawat isa sa TOP 5 church fills mula sa tutorial video.",
            "Mag-record ng transition mula sa tahimik na prayer pad patungo sa masiglang praise tempo nang walang sudden tempo jerk.",
            "Suriin ang balance ng cymbals upang hindi matabunan ang boses ng worship leader."
          ],
          "starterCode": "// Church Drummer Ministry Checklist:\n[ ] Smooth Cymbal Swell nang walang matalim na palo\n[ ] Floor Tom dynamic build-up mula piano (p) hanggang fortissimo (ff)\n[ ] 5 Church Fills na-master nang may musical sensitivity\n[ ] Maayos na komunikasyon sa mata (eye contact) sa band director",
          "expectedOutcome": "Mapitagang pagtugtog na may malalim na dynamic sensitivity at musical ministry mindset."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 4.4: Church & Live Band Dynamics Checklist",
          "sheetName": "Worship_Dynamics_Log",
          "description": "I-rate ang iyong dynamic control at angkop na pagpili ng fills para sa iba-ibang bahagi ng pagtitipon.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Checklist ng 5 worship fills at kung saang kanta ito angkop gamitin.",
            "Pagsusuri sa stage volume control sa live church setting."
          ],
          "rubric": [
            {
              "criteria": "Dynamic Control at Sensitivity",
              "points": 50
            },
            {
              "criteria": "Fill Tastefulness (Hindi overplaying)",
              "points": 30
            },
            {
              "criteria": "Ministry Reflection",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-4-4",
          "title": "Pagsusulit 4.4: Worship Drumming Principles",
          "description": "Subukin ang pag-unawa sa dynamic sensitivity sa live worship and church settings.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q4-4-1",
              "question": "Ano ang pinakamahalagang panuntunan sa volume at dynamics kapag tumutugtog sa simbahan o worship team?",
              "options": [
                "Pumalo nang pinakamalakas sa lahat ng oras upang marinig sa labas ng simbahan",
                "Magpakita ng matinding sensitivity sa dynamics upang masuportahan ang boses ng mang-aawit at panalangin nang hindi nakakabulabog",
                "Huwag gumamit ng cymbals magpakailanman",
                "Mabilisang mag-solo sa gitna ng sermon"
              ],
              "correctIndex": 1,
              "explanation": "Ang pinakamahalagang tungkulin ay ang magkaroon ng dynamic sensitivity—alamin kung kailan hihina at kailan lalakad upang suportahan ang mensahe at boses ng mang-aawit."
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 5: Modern OPM Alternative, Sextuplet Chops at Foot Speed",
    "duration": "2 Linggo (22 Oras)",
    "overview": "Umakyat sa Pro Level: Tunghayan ang dynamic breakdown ng \"Uhaw\" ng Dilaw, matutunan ang mabilisang full-bar sextuplets (6 notes per beat), sanayin ang foot speed at double bass pedal technique para sa high-energy performances.",
    "lessons": [
      {
        "title": "Aralin 5.1: Modern Alternative Rock Dynamics: \"Uhaw\" ng Dilaw Breakdown",
        "duration": "55 mins",
        "videoUrl": "https://www.youtube.com/embed/ATueFHgqsZc",
        "videoTitle": "UHAW | Drum Tutorial [Breakdown] (Drum Teacher Manila)",
        "objective": "Tugtugin ang modernong alternative Pinoy masterpiece: \"Uhaw\" ng Dilaw, kabilang ang dynamic builds mula sa banayad na acoustic rimclicks hanggang sa sabog na grunge/alternative rock choruses.",
        "theoryContent": "Ang \"Uhaw\" ng bandang Dilaw ay patunay kung gaano kalakas ang hatak ng modernong Pinoy alternative rock kapag pinagsama ang indie soul at mabibigat na grunge drums!\n\n1. ANG DYNAMIC ROLLERCOASTER NG \"UHAW\":\n• Verse: Sobrang tahimik, halos pabulong na Hi-Hat at banayad na kick pulses.\n• Pre-Chorus: Mabagal na pag-akyat ng tensyon gamit ang Floor Tom at incremental snare rolls.\n• Chorus Climax (\"Bakit uhaw sa iyong...\"): Biglang pagsabog ng buong puwersa sa pamamagitan ng washy Crash/Ride cymbals at mabigat na kick-snare unisons!\n\n2. TIMEKEEPING UNDER EMOTIONAL TENSION:\nKapag tumitindi ang emosyon ng kanta, natural sa katawan na pabilisin ang tempo. Ang pro drummer ay nananatiling kalmado sa loob ng bagyo upang mapanatili ang tamang bagsak!",
        "codeSnippet": "// \"UHAW\" DILAW CHORUS EXPLOSION GRID:\nCrash: X       X       X       X\nSD:            O               O       (Solid rimshots!)\nBD:    o   o       o   o   o           (Mabigat na alternative driving kicks)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 5.1: Full Song Breakdown at Dynamics Execution",
          "instructions": [
            "Pag-aralan ang verse dynamics ng \"Uhaw\" gamit ang minimal na palo sa 84 BPM.",
            "Sanayin ang drum fill transition papunta sa sumasabog na chorus.",
            "Mag-record ng video na tumutugtog sa buong kanta nang may wastong facial expression at body dynamics.",
            "Tiyakin na eksaktong bumabalik sa tahimik na antas sa kasunod na verse."
          ],
          "starterCode": "// \"Uhaw\" Performance Metrics:\n[ ] Dynamic Contrast: Hindi bababa sa 20dB diperensya sa pagitan ng Verse at Chorus\n[ ] Malinis na snare build-up bago ang bagsak ng chorus\n[ ] Perpektong sync kasabay ng boses ni Dilaw Obero",
          "expectedOutcome": "Kakahayang magpahayag ng matinding emosyon sa pamamagitan ng drum dynamics nang hindi nawawala sa tempo."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 5.1: Alternative Rock Dynamic Range Assessment",
          "sheetName": "Alt_Rock_Log",
          "description": "Suriin ang dynamic curve ng \"Uhaw\" at ilatag ang decibel / volume progression bawat section ng kanta.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Dynamic curve chart (Verse vs Chorus volume levels).",
            "Reflection sa emosyonal na koneksyon ng drummer sa kanta."
          ],
          "rubric": [
            {
              "criteria": "Dynamic Range Contrast",
              "points": 40
            },
            {
              "criteria": "Rhythmic Precision under Heavy Distortion",
              "points": 40
            },
            {
              "criteria": "Dokumentasyon",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-5-1",
          "title": "Pagsusulit 5.1: Alternative Rock Dynamics",
          "description": "Subukin ang pag-unawa sa dynamic structuring sa alternative rock.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q5-1-1",
              "question": "Paano mapapanatili ng drummer ang tamang tempo sa mga kantang may matinding emosyonal na pagsabog tulad ng \"Uhaw\"?",
              "options": [
                "Sa pamamagitan ng pagpapanatili ng panloob na metronome pulse at pag-iwas sa pagpapabilis (rushing) dahil sa adrenaline",
                "Sa pamamagitan ng pagpalo nang dalawang beses na mas mabilis",
                "Sa pamamagitan ng paghinto sa pagtugtog sa verse",
                "Wala, normal lang na bumilis ang kanta nang 30 BPM"
              ],
              "correctIndex": 0,
              "explanation": "Ang pro drummer ay marunong mag-channel ng adrenaline sa pamamagitan ng lakas at volume NANG HINDI pinabibilis ang tempo ng kanta."
            }
          ]
        }
      },
      {
        "title": "Aralin 5.2: Full Bar Sextuplet Drum Fills at High-Speed Linear Fills",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/bt6h4OU_PGU",
        "videoTitle": "Full Bar SEXTUPLET Drumfill | Drum Licks 2Go No.5 (Drum Teacher Manila)",
        "objective": "Matutunan ang Six-Note subdivisions (Sextuplets / 16th-note triplets) sa bawat beat, at i-orchestrate ang buong bar ng high-speed drum chops paikot sa buong kit.",
        "theoryContent": "Maligayang pagdating sa mundo ng PRO DRUM CHOPS! Ang Sextuplet ang sikreto sa likod ng mga mabilis at mala-kidlat na drum fills.\n\n1. ANO ANG SEXTUPLET?\nKung ang 16th notes ay may 4 na palo sa bawat beat, ang SEXTUPLET ay may ANIM (6) na pantay-pantay na palo sa bawat nag-iisang beat!\nSubdivision Count:\nBeat 1: 1 - ta - ta,  ta - ta - ta (o 1-la-le, 2-la-le)\nSa isang 4/4 bar, may kabuuang DALAWAMPU'T APAT (24) na palo sa loob ng 4 na segundo!\n\n2. ANG POPULAR NA HAND-FOOT SEXTUPLET FORMULA:\n• R L R L K K (Apat na palo sa kamay + Dalawang padyak sa kick!)\nIto ang pinakapaboritong chop ng mga gospel, fusion, at rock drummers dahil natural ang momentum nito kapag pumasok sa mga toms!",
        "codeSnippet": "// SEXTUPLET R L R L K K COMBO:\nCount:  |-- Beat 1 --|   |-- Beat 2 --|\nNotes:  1  2  3  4 5 6   1  2  3  4 5 6\nHands:  R  L  R  L       R  L  R  L\nFeet:              K K              K K\nDrums:  SD HT MT FT      SD HT MT FT\n        (Mala-kidlat na daloy paikot sa set!)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 5.2: Sextuplet Speed & Clarity Workout",
          "instructions": [
            "Magsimula sa napakabagal na 50 BPM gamit ang metronome.",
            "Sanayin ang R L R L K K nang malinaw ang tunog ng bawat nota.",
            "Siguraduhing hindi nagdidikit ang dalawang kick hits; dapat pantay ang distansya.",
            "Dahan-dahang iakyat sa 75 BPM, hanggang makamit ang 90 BPM mastery."
          ],
          "starterCode": "// Sextuplet Velocity Log:\n[ ] 50 BPM: 16 reps ng malinis na R L R L K K\n[ ] 70 BPM: 16 reps ng malinis na R L R L K K\n[ ] 90 BPM: Full-bar drum fill application sa dulo ng isang rock groove",
          "expectedOutcome": "Kapanapanabik na high-speed chops na may malinaw na articulation sa bawat nota."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 5.2: Advanced Chops & Linear Fills Tracker",
          "sheetName": "Sextuplet_Tracker",
          "description": "Subaybayan ang iyong tempo limits sa sextuplets at hand-foot linear combinations.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "BPM accuracy chart para sa R L R L K K.",
            "Audio link ng 4-bar phrase na naglalaman ng buong sextuplet fill."
          ],
          "rubric": [
            {
              "criteria": "Subdivision Subdivision Evenness (Pantay na 6 notes)",
              "points": 50
            },
            {
              "criteria": "Hand-to-Foot Transition Cleanliness",
              "points": 30
            },
            {
              "criteria": "Worksheet Documentation",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-5-2",
          "title": "Pagsusulit 5.2: Sextuplet Subdivisions",
          "description": "Subukin ang teorya ng six-note subdivisions.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q5-2-1",
              "question": "Ilang notes ang nilalaman ng isang Sextuplet sa bawat isang quarter-note beat?",
              "options": [
                "4 na notes",
                "6 na notes",
                "8 notes",
                "3 notes"
              ],
              "correctIndex": 1,
              "explanation": "Ang Sextuplet ay naglalaman ng eksaktong 6 na pantay-pantay na notes sa loob ng isang quarter-note beat."
            }
          ]
        }
      },
      {
        "title": "Aralin 5.3: Foot Speed at Double Bass Pedal Conditioning Nang Walang Drums",
        "duration": "45 mins",
        "videoUrl": "https://www.youtube.com/embed/Nne5sdGbbS0",
        "videoTitle": "Develop Foot Speed Without Drums [English Sub] Drum Lesson (Drum Teacher Manila)",
        "objective": "Paunlarin ang bilis, liksi, at stamina ng mga paa gamit ang ankle technique, heel-up, at slide methods kahit walang dalang drum set sa bahay.",
        "theoryContent": "Karamihan sa mga drummer ay may mabilis na kamay ngunit nahuhuli ang kanilang mga paa. Sa araling ito, tutuldukan natin ang kahinaan ng iyong bass drum footwork!\n\n1. PANGUNAHING FOOT TECHNIQUES:\n• Heel-Down: Nakalapat ang buong talampakan sa footboard. Maganda para sa mahinang volume at jazz, ngunit mabilis mangalay ang lulod (shin muscle).\n• Heel-Up: Bahagyang nakaangat ang sakong (heel). Ginagamit ang bigat ng buong binti para sa lakas at kapangyarihan sa rock at metal!\n• The Ankle Motion: Para sa napakabilis na palo (140+ BPM). Ang buong binti ay nananatiling relaks habang ang bukung-bukong (ankle joint) ang gumagalaw.\n\n2. MGA PAGSASANAY KAHIT WALANG DRUMS:\nKahit nanonood ng TV o nakaupo sa opisina, maaari mong sanayin ang tap-and-slide motion sa sahig upang magkaroon ng matinding muscle memory!",
        "codeSnippet": "// FOOT SPEED CONDITIONING DRILL (KAHIT SA SAHIG):\nCount: 1 & 2 & 3 & 4 &\nRight: D U D U D U D U  (Down-stroke, Up-stroke Slide)\nLeft:  D U D U D U D U  (Left foot conditioning for double pedal)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 5.3: Daily Ankle Conditioning Challenge",
          "instructions": [
            "Umupo sa isang silya nang may 90-degree angle sa tuhod.",
            "Magsagawa ng 100 tuloy-tuloy na heel-up taps sa kanang paa sa 100 BPM.",
            "Magsagawa ng 100 tuloy-tuloy na heel-up taps sa kaliwang paa sa 100 BPM.",
            "Pagsamahin ang dalawang paa sa alternating single strokes (R L R L) sa loob ng 3 minuto."
          ],
          "starterCode": "// Foot Stamina Log:\n[ ] 100 Taps Kanang Paa sa 100 BPM\n[ ] 100 Taps Kaliwang Paa sa 100 BPM\n[ ] 3 Minutong tuloy-tuloy na R L R L foot alternating drill\n[ ] 0 shin splints (relaks ang kalamnan)",
          "expectedOutcome": "Malakas, mabilis, at hindi nangangalay na mga binti at bukung-bukong na handa para sa double bass."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 5.3: Foot Speed & Stamina Development Log",
          "sheetName": "Foot_Speed_Log",
          "description": "Subaybayan ang pagbilis ng iyong single at double bass foot speed sa loob ng 14 na araw.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Daily repetition count and tempo threshold log.",
            "Self-evaluation ng muscle relaxation sa binti."
          ],
          "rubric": [
            {
              "criteria": "Footwork Rhythm Consistency",
              "points": 40
            },
            {
              "criteria": "Stamina Improvement over 14 Days",
              "points": 40
            },
            {
              "criteria": "Worksheet Maintenance",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-5-3",
          "title": "Pagsusulit 5.3: Bass Drum Foot Mechanics",
          "description": "Subukin ang kaalaman sa anatomy ng foot drumming.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q5-3-1",
              "question": "Aling bahagi ng katawan ang pangunahing nagpapakilos sa pedal sa high-speed drumming (140+ BPM) upang maiwasan ang mabilisang pagkapagod ng binti?",
              "options": [
                "Bukung-bukong (Ankle motion)",
                "Balakang (Hip flexors)",
                "Tuhod (Buong binti)",
                "Daliri sa paa lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang Ankle Motion ay nagbibigay-daan sa mabilis na pagpalo gamit ang maliit na galaw ng bukung-bukong, na pumipigil sa pagkapagod ng malalaking kalamnan ng binti."
            }
          ]
        }
      },
      {
        "title": "Aralin 5.4: Wastong Pag-set up ng Double Bass Drum Pedal at Spring Tension Calibration",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/dSFQfTWbsQo",
        "videoTitle": "PAANO MAG SET UP NG DOUBLE PEDAL + UNBOXING TAGALOG DEMO (ALVIN AGRIPA DRUMS)",
        "objective": "Matutunan ang tamang pag-assemble ng double bass pedal, pag-align ng slave pedal, pag-calibrate ng spring tension, beater angle, at pagtanggal ng latency sa slave drive shaft.",
        "theoryContent": "Kahit gaano kabilis ang iyong mga paa, kung mali ang pagka-setup ng iyong double pedal, magiging mabigat at mabagal ang iyong tugtog!\n\n1. MGA MAHAHALAGANG BAHAGI NG DOUBLE PEDAL:\n• Main Pedal: Nakakabit nang direkta sa hoop ng Bass Drum.\n• Slave Pedal: Nakapwesto sa tabi ng Hi-Hat pedal para sa kaliwang paa.\n• Drive Shaft (Connecting Rod): Ang bakal na nag-uugnay sa slave pedal patungo sa beater ng main pedal. Siguraduhing walang \"play\" o kalog ang universal joints!\n• Beater Angle: Ang tamang anggulo ay humigit-kumulang 45 degrees mula sa drumhead kapag nakapahinga.\n• Spring Tension:\n  - Malambot: Madaling pindutin ngunit mabagal ang pagbalik (rebound).\n  - Matigas: Mabilis ang balik para sa matinding bilis, ngunit nangangailangan ng mas malakas na kalamnan.\n\n2. EQUALIZING THE SLAVE PEDAL:\nAng pangunahing hamon sa double pedal ay ang pagiging bahagyang mas mabagal ng slave pedal dahil sa bigat ng drive shaft. Matutunan kung paano ito i-compensate sa spring tension!",
        "codeSnippet": "// DOUBLE BASS SETUP CHECKLIST:\n1. Distance: 12 hanggang 16 pulgada sa pagitan ng Slave at Main pedal\n2. Beater Height: Tumama sa eksaktong gitna o bahagyang itaas ng center point ng bass drum head\n3. Clamp Tightness: Mahigpit na nakakapit sa bass drum hoop nang hindi sumisira sa kahoy\n4. Universal Joint Lubrication: Lagyan ng light machine oil para sa swabeng ikot",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 5.4: Double Pedal Assembly & Tuning Laboratory",
          "instructions": [
            "I-assemble ang main at slave pedals gamit ang kasamang drum key at allen wrench.",
            "Pantayin ang taas at anggulo ng dalawang beater gamit ang panukat o mata.",
            "Subukan ang \"Rebound Test\": Hilahin ang parehong beater pabalik nang sabay at bitawan; dapat magkatulad ang bilang ng kanilang pag-ugoy bago huminto.",
            "Tugtugin ang tuloy-tuloy na 16th notes sa double bass sa 100 BPM sa loob ng 2 minuto."
          ],
          "starterCode": "// Hardware Calibration Checklist:\n[ ] Beater Angles: Eksaktong pantay sa 45 degrees\n[ ] Rebound Test: Parehong pedal sabay na nag-oscillate\n[ ] Drive Shaft: Walang kalog o kakaibang tunog\n[ ] 100 BPM: 2 minuto malinis na double pedal 16th notes",
          "expectedOutcome": "Perpektong na-calibrate na double bass pedal na may pantay na tugon sa parehong kaliwa at kanang paa."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 5.4: Double Pedal Calibration & Hardware Specs Sheet",
          "sheetName": "Double_Pedal_Specs",
          "description": "Itala ang eksaktong sukat at tension settings ng iyong double pedal hardware.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Talaan ng beater weight, shaft angle, at spring tension revolutions.",
            "Maintenance schedule para sa lubrication ng bearings."
          ],
          "rubric": [
            {
              "criteria": "Hardware Assembly Accuracy",
              "points": 50
            },
            {
              "criteria": "Rebound Balance ng Slave Pedal",
              "points": 30
            },
            {
              "criteria": "Documentation",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-5-4",
          "title": "Pagsusulit 5.4: Double Bass Pedal Calibration",
          "description": "Subukin ang kaalaman sa hardware mechanics ng double pedals.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q5-4-1",
              "question": "Ano ang layunin ng \"Rebound Test\" sa pagka-calibrate ng double bass pedal?",
              "options": [
                "Upang matiyak na pantay ang pagbalik at tensyon ng spring sa pagitan ng main at slave pedal",
                "Upang subukan kung matibay ang drum key",
                "Upang pakinggan ang tunog ng bass drum",
                "Para malaman kung gaano kabigat ang trono"
              ],
              "correctIndex": 0,
              "explanation": "Ang Rebound Test (sabay na paghila at pagbitaw sa parehong beater) ang pinakamagandang paraan upang masiguro na pantay ang resistance at swing ng slave pedal kumpara sa main pedal."
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 6: Pro Drummer Hero: Dave Weckl Linear Grooves, Stage Solos at Clinic",
    "duration": "2 Linggo (24 Oras)",
    "overview": "Ang huling yugto mula Zero patungo sa ganap na Drum Hero: Pag-aralan ang maalamat na Dave Weckl linear groove na hinimay ni Philippine Master Drummer Michael Alba, maranasan ang live arena drum solo ni Rickson Ruiz, at kumpletuhin ang iyong opisyal na sertipikasyon.",
    "lessons": [
      {
        "title": "Aralin 6.1: Dave Weckl Linear Groove Breakdown: \"Tower of Inspiration\"",
        "duration": "55 mins",
        "videoUrl": "https://www.youtube.com/embed/ajePmRUelwk",
        "videoTitle": "MICHAEL ALBA BREAKS DOWN DAVE WECKL GROOVE \"Tower of Inspiration\" (MALAYANG PILIPINO MUSIC)",
        "objective": "Tuklasin ang advanced linear drumming concepts kung saan walang dalawang instrumento ang tumatama nang sabay, sa pamamagitan ng eksklusibong breakdown ni Philippine Master Drummer Michael Alba.",
        "theoryContent": "Ito ang tugtugang pang-world-class! Sa pamumuno ni Philippine Master Drummer Michael Alba, hihimayin natin ang maalamat na tugtog ni Dave Weckl sa \"Tower of Inspiration\".\n\n1. ANO ANG LINEAR DRUMMING?\nSa tradisyonal na rock drumming, sabay na tumatama ang Hi-Hat at Snare, o Hi-Hat at Kick.\nSa LINEAR DRUMMING:\n• WALANG DALAWANG NOTA ANG SABAY NA TUMATAMA!\n• Bawat palo ay nag-iisa sa linya ng oras: Hi-Hat -> Snare -> Kick -> Hi-Hat -> Snare.\n• Lumilikha ito ng napakalinis, masalimuot, at napaka-funk na daloy na hinahangaan ng mga pinakamahuhusay na musikero sa buong mundo!\n\n2. MGA PAYO MULA KAY MICHAEL ALBA:\n• \"Huwag magmadali. Patugtugin nang napakabagal hanggang maging musika, hindi lang basta ehersisyo.\"\n• Pakinggan ang 'space' sa pagitan ng mga nota. Ang katahimikan sa pagitan ng bawat palo ay kasing-halaga ng mismong tunog!",
        "codeSnippet": "// LINEAR GROOVE MATRIX (WALANG SABAY NA PALO):\nCount: 1  e  &  a  2  e  &  a  3  e  &  a  4  e  &  a\nHH:    x        x        x        x        x\nSD:          o                 o                 o\nBD:       o        o  o              o  o\nNote: Pansinin na walang magkatapat sa parehong column!",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 6.1: The Michael Alba Linear Masterclass Routine",
          "instructions": [
            "Panoorin ang breakdown ni Michael Alba sa video tutorial.",
            "Simulan ang linear pattern sa napakabagal na 45 BPM gamit ang metronome.",
            "Tiyakin na 100% linear ang bawat nota—walang flams o di-sinasadyang sabay na palo.",
            "Dahan-dahang iangat ang tempo patungong 80 BPM habang pinananatili ang natural funk swing."
          ],
          "starterCode": "// Linear Masterclass Log:\n[ ] 45 BPM: 4 bars perpektong linear isolation\n[ ] 65 BPM: 4 bars perpektong linear isolation\n[ ] 80 BPM: Malinis na play-along kasabay ng \"Tower of Inspiration\" groove breakdown",
          "expectedOutcome": "World-class linear phrasing, matinding limb isolation, at advanced musical maturity."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 6.1: Masterclass Linear Transcription & Performance Journal",
          "sheetName": "Linear_Masterclass",
          "description": "I-transcribe ang 2 bars ng linear groove ni Michael Alba at idokumento ang iyong practice insights.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Linear note-by-note placement grid.",
            "Personal reflection sa payo ni Master Drummer Michael Alba."
          ],
          "rubric": [
            {
              "criteria": "Linear Isolation Precision",
              "points": 50
            },
            {
              "criteria": "Rhythmic Flow and Micro-timing",
              "points": 30
            },
            {
              "criteria": "Reflection Notes",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-6-1",
          "title": "Pagsusulit 6.1: Linear Drumming Concepts",
          "description": "Subukin ang pag-unawa sa linear rhythm principles.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q6-1-1",
              "question": "Ano ang pangunahing katangian na nagbibigay-kahulugan sa isang \"Linear Drum Pattern\"?",
              "options": [
                "Walang dalawa o higit pang limbs (kamay o paa) ang tumatama nang sabay sa parehong punto ng oras",
                "Pumapalo lamang sa isang tuwid na linya",
                "Hindi gumagamit ng mga cymbals",
                "Tumatakbo lamang sa 4/4 time signature"
              ],
              "correctIndex": 0,
              "explanation": "Sa linear drumming, bawat nota ay tumutunog nang mag-isa sa sequence—walang sabay na unison hits sa pagitan ng cymbals, drums, o pedals."
            }
          ]
        }
      },
      {
        "title": "Aralin 6.2: OPM Concert Arena Intro Drum Solo Breakdown at Stage Presence",
        "duration": "50 mins",
        "videoUrl": "https://www.youtube.com/embed/CVATWpphK-g",
        "videoTitle": "RICKSON RUIZ - Regine Rocks OPM intro drum solo (Rickson Ruiz)",
        "objective": "Suriin at tugtugin ang concert arena-level intro drum solo ni Rickson Ruiz (Regine Rocks Concert), kabilang ang crowd engagement, dramatic dynamics, at stage-ready chops.",
        "theoryContent": "Paano kumilos at tumugtog ang isang drummer sa harap ng 15,000 katao sa loob ng isang malaking arena tulad ng Araneta Coliseum o MOA Arena?\n\n1. ANG MGA SIKRETO SA CONCERT STAGE DRUMMING NI RICKSON RUIZ:\n• Malalaking Kumpas (Visual Showmanship): Sa malaking stage, ang maliliit na galaw ay hindi nakikita ng mga tao sa likod. Ang malawak, matikas, at may kompiyansang galaw ng mga braso ay nagpapadama ng lakas sa buong coliseum!\n• Dramatic Pauses (Ang Kapangyarihan ng Paghinto): Ang isang mahusay na drum solo ay hindi puro mabilisang palo. Ang panandaliang paghinto bago ang malakas na bagsak ay lumilikha ng nakakagigil na tensyon!\n• Unison Bagsak kasabay ng Banda: Pag-ugnay ng solo patungo sa unang nota ng kanta nang may 100% precision!",
        "codeSnippet": "// ARENA CONCERT INTRO DRUM SOLO STRUCTURE:\n1. Opening Statement: Malalakas na Toms at Crash Swells (Visual grand entrance)\n2. The Build-Up: Accelerando ng Double Bass o Floor Tom rumbles\n3. The Climax Chops: Flashy Sextuplets at Linear Fills\n4. The Stop: 1-Beat Dramatic silence!\n5. The Kick-Off: Count off \"1, 2, 3, 4\" diretso sa unang kanta!",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 6.2: Arena Intro Solo Re-creation",
          "instructions": [
            "Panoorin ang live solo performance ni Rickson Ruiz sa concert video.",
            "Bumuo ng iyong sariling 30-segundong concert intro solo gamit ang 5-stage arena structure.",
            "Mag-ensayo sa harap ng salamin upang mapaganda ang iyong tindig, showmanship, at visual confidence.",
            "I-record ang iyong solo at suriin ang kalinawan ng mga bagsak."
          ],
          "starterCode": "// Arena Solo Performance Rubric:\n[ ] May malinaw na Opening, Build-up, Climax, at Dramatic Stop\n[ ] May kompiyansang visual presence at tindig\n[ ] Eksaktong bagsak sa beat 1 ng susunod na kanta",
          "expectedOutcome": "Stage-ready confidence na handang humarap sa malaking audience nang may command at musikalidad."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 6.2: Solo Composition & Stage Presence Scorecard",
          "sheetName": "Arena_Solo_Log",
          "description": "Ibalangkas ang iyong orihinal na drum solo composition at i-score ang visual at technical elements.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "30-second solo structural outline.",
            "Video submission link para sa final stage presence review."
          ],
          "rubric": [
            {
              "criteria": "Visual Showmanship and Posture",
              "points": 40
            },
            {
              "criteria": "Rhythmic Cohesion and Dynamics",
              "points": 40
            },
            {
              "criteria": "Worksheet Outline Submission",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-6-2",
          "title": "Pagsusulit 6.2: Stage Presence at Solo Structuring",
          "description": "Subukin ang kaalaman sa pagbuo ng solo para sa malaking stage.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q6-2-1",
              "question": "Bakit mahalaga ang paglalagay ng mga \"dramatic pauses\" o panandaliang paghinto sa isang drum solo?",
              "options": [
                "Upang lumikha ng tensyon at excitement sa mga nakikinig sa halip na puro tuloy-tuloy na maingay na palo",
                "Dahil napagod na ang drummer",
                "Upang makainom ng tubig ang lead vocalist",
                "Dahil nakalimutan ng drummer ang kasunod na tugtog"
              ],
              "correctIndex": 0,
              "explanation": "Ang mga dramatic pauses ay nagbibigay ng \"hinga\" sa solo na nagpapatindi ng pananabik bago ang pinakamalakas na bagsak ng buong banda."
            }
          ]
        }
      },
      {
        "title": "Aralin 6.3: Philippine Master Drummer Clinic: Polyrhythms, Tone at Studio Dynamics",
        "duration": "55 mins",
        "videoUrl": "https://www.youtube.com/embed/mT1rByyOt3s",
        "videoTitle": "Michael Alba (Philippine Master Drummer) and Probiotic Babies || Drum Clinic || iVlogU (iVlogU)",
        "objective": "Makinig at matuto mula sa aktuwal na live drum clinic ni Philippine Master Drummer Michael Alba, na sumasaklaw sa drum tuning, microphone placement awareness, at polyrhythmic layering.",
        "theoryContent": "Ang drum clinic ay ang pinakamataas na uri ng pag-aaral kung saan ang mga propesyonal na musikero ay nagtitipon upang pag-usapan ang pilosopiya ng musika, tono, at studio discipline.\n\n1. MGA ARAL MULA SA CLINIC NI MICHAEL ALBA:\n• Ang Tunog ng Drum ay Nagsisimula sa Iyong Kamay: Hindi sa presyo ng drum set nakasalalay ang magandang tunog. Ang paraan ng pagpalo mo sa drumhead (touch and attack) ang nagpapalabas ng tunay na resonance ng kahoy!\n• Studio Discipline: Sa recording studio, maririnig ng mikropono ang bawat munting kaba o hindi pantay na palo. Ang perpektong timekeeping at consistent velocity ang naghihiwalay sa amateur sa pro.\n• Polyrhythms (3 against 2, 4 against 3): Ang kakayahang magpatugtog ng magkaibang time feel sa parehong kanta nang hindi nawawala sa sentro ng tempo!",
        "codeSnippet": "// 3 AGAINST 2 POLYRHYTHM FORMULA:\nCount:  1   &   2   &   3   &   (Pulse of 2 vs Pulse of 3)\nHands:  Both    Right   Left    Right\nPhrase: \"Not    ve   -   ry      hard!\"\n        (Bigkasin upang marinig ang natural na polyrhythmic swing!)",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 6.3: Studio Consistency at Polyrhythmic Tap Test",
          "instructions": [
            "Panoorin ang clinic session ni Michael Alba sa video tutorial.",
            "Magsanay ng \"3 against 2\" polyrhythm gamit ang mga kamay sa hita habang binibigkas ang \"Not very hard\".",
            "I-record ang 16 bars ng standard rock beat at suriin sa waveform kung pantay ang taas ng bawat snare hit.",
            "Ayusin ang tuning ng iyong snare drum upang mawala ang di-kanais-nais na ring nang hindi pinapatay ang natural tone."
          ],
          "starterCode": "// Clinic Master Checklist:\n[ ] 3:2 Polyrhythm naipamalas nang may malinis na cadence\n[ ] Snare Tuning na-calibrate sa tamang fundamental pitch\n[ ] Studio velocity consistency naipasa sa 95% accuracy",
          "expectedOutcome": "Malalim na propesyonal na pagkaunawa sa acoustic resonance, touch sensitivity, at studio-grade accuracy."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 6.3: Masterclass Clinic Synthesis & Studio Rubric",
          "sheetName": "Clinic_Synthesis",
          "description": "Isulat ang iyong komprehensibong buod ng mga natutunang aral sa drum clinic ni Master Michael Alba.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "3 pangunahing pilosopiya ni Michael Alba sa drumming touch.",
            "Pagsusuri sa sariling audio consistency sa studio setting."
          ],
          "rubric": [
            {
              "criteria": "Clinic Insights Depth and Application",
              "points": 50
            },
            {
              "criteria": "Polyrhythmic Demonstration",
              "points": 30
            },
            {
              "criteria": "Worksheet Documentation",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-6-3",
          "title": "Pagsusulit 6.3: Polyrhythms at Studio Discipline",
          "description": "Subukin ang kaalaman sa advanced clinic concepts.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q6-3-1",
              "question": "Ano ang \"Polyrhythm\" sa musika?",
              "options": [
                "Ang sabay na pagtugtog ng dalawa o higit pang magkaibang rhythmic pulses na hindi pantay ang dibisyon (tulad ng 3 laban sa 2)",
                "Pagtugtog gamit ang maraming cymbals nang sabay-sabay",
                "Mabilisang pagpadyak sa kick pedal",
                "Pagtugtog sa maraming banda nang sabay"
              ],
              "correctIndex": 0,
              "explanation": "Ang Polyrhythm ay ang pagpapatong ng dalawang magkaibang time divisions (halimbawa, 3 pantay na beats laban sa 2 pantay na beats) sa parehong sukat ng oras."
            }
          ]
        }
      },
      {
        "title": "Aralin 6.4: Pro Drummer Certification & Final Performance Showcase Rubric",
        "duration": "60 mins",
        "videoUrl": "https://www.youtube.com/embed/y6oE90dXJ20",
        "videoTitle": "BASIC DRUM Lesson No. 12 - Easy Tagalog Tutorial for Beginners! Update 2021 (Vernice Santos Vlogs)",
        "objective": "I-consolidate ang lahat ng natutunan mula Modyul 1 hanggang Modyul 6, kumpletuhin ang pinal na practical performance showcase, at tanggapin ang opisyal na sertipikasyon mula sa KEZJED SOLUTIONS.",
        "theoryContent": "Binabati kita! Narating mo na ang tugatog ng Pinoy Drum Masterclass. Mula sa pagiging ganap na baguhan na hindi marunong humawak ng drumsticks, isa ka na ngayong may kasanayan, may disiplina, at may kompiyansang DRUM HERO!\n\n1. ANG PANGHULING EVALUATION RUBRIC:\nUpang maging kwalipikado para sa Opisyal na Sertipikasyon ng KEZJED SOLUTIONS:\n• Pundasyon (25%): Matatag na timekeeping, ergonomikong tindig, at wastong stick technique.\n• Rhythmic Vocabulary (25%): Kaalaman sa 4/4, 6/8, at syncopated OPM grooves.\n• Chops & Independence (25%): Malilinis na fills, paradiddle orchestration, at limb freedom.\n• Musicality & Dynamics (25%): Kakayahang makinig at magsilbi sa kanta nang may puso at disiplina.\n\n2. ANG PANGAKO NG ISANG TUNAY NA DRUMMER:\nAng tunay na musikero ay hindi tumitigil sa pagkatuto. Patuloy na magsanay gamit ang metronome, maging mapagkumbaba sa entablado, at magbahagi ng talento sa iba!",
        "codeSnippet": "// FINAL SHOWCASE PERFORMANCE SCORECARD:\n[✓] Core Groove Timing (Metronome Test: 60 - 120 BPM): PASSED\n[✓] OPM Repertoire (Eraserheads, Lola Amour, Cueshe): PASSED\n[✓] Advanced Chops (Linear & Sextuplets): PASSED\n[✓] Final Drum Solo Showcase: APPROVED BY RONNEL M. AVIGUETERO",
        "handsOnActivity": {
          "title": "Praktikal na Gawain 6.4: The Hero Capstone Drum Showcase",
          "instructions": [
            "Pumili ng isang buong kanta mula sa OPM repertoire o maghanda ng 2-minutong original drum performance.",
            "Isama ang: (a) Solid groove, (b) At least 2 tasteful drum fills, (c) One dynamic section transition, at (d) Maikling linear chop showcase.",
            "I-record ang buong performance sa mataas na kalidad ng video at audio.",
            "Isumite ang link kasama ang iyong kumpletong Trainee Record Sheet para sa final accreditation."
          ],
          "starterCode": "// Capstone Submission Checklist:\n[ ] 2-minutong kumpletong video performance\n[ ] Kumpletong 6 na Modulong Practice Worksheets\n[ ] Pasadong marka sa lahat ng 24 na pagsusulit (75% pataas)\n[ ] Handa nang tanggapin ang Verified Drummer Certificate",
          "expectedOutcome": "Ganap na pagtatapos bilang certified Pinoy Drum Masterclass Graduate na may portfolio-ready showcase video."
        },
        "googleSheetsAssignment": {
          "title": "Worksheet 6.4: Official Trainee Drum Record Book & Final Certification Form",
          "sheetName": "Final_Certification",
          "description": "Ang opisyal na talaan ng pagtatapos na nilagdaan at inaprubahan ni Ronnel M. Aviguetero.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Final Video Performance YouTube or Google Drive link.",
            "Lagda at deklarasyon ng pagkumpleto sa 120 practice hours."
          ],
          "rubric": [
            {
              "criteria": "Technical Execution at Timing",
              "points": 40
            },
            {
              "criteria": "Musicality at Song Flow",
              "points": 40
            },
            {
              "criteria": "Kumpletong Dossier at Log Book",
              "points": 20
            }
          ]
        },
        "exam": {
          "id": "exam-drum-6-4",
          "title": "Pagsusulit 6.4: Comprehensive Drum Mastery Exam",
          "description": "Ang pinal na pagsusulit na sumusubok sa kabuuang kaalaman mula Beginner hanggang Pro.",
          "passingScore": 75,
          "questions": [
            {
              "id": "q6-4-1",
              "question": "Ano ang pinakamahalagang pananagutan ng isang drummer sa loob ng isang banda?",
              "options": [
                "Magpatugtog ng pinakamaraming flashy fills sa bawat segundo",
                "Maging matatag na pundasyon ng tempo, timekeeping, at dynamic feel para sa buong banda",
                "Pumalo nang mas malakas kaysa sa boses ng mang-aawit",
                "Maging pinaka-maingay sa entablado"
              ],
              "correctIndex": 1,
              "explanation": "Ang drummer ang puso at orasan ng banda; ang kanyang pinakamahalagang tungkulin ay maging matatag na pundasyon ng tempo, timekeeping, at musical dynamics."
            },
            {
              "id": "q6-4-2",
              "question": "Sino ang Founder & CEO ng KEZJED SOLUTIONS na may-akda ng komprehensibong Pinoy Drum Masterclass sa Epicademy?",
              "options": [
                "Ronnel M. Aviguetero",
                "Michael Alba",
                "Ely Buendia",
                "Dave Weckl"
              ],
              "correctIndex": 0,
              "explanation": "Si Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS, ang opisyal na may-akda at pinuno ng kurikulum na ito."
            }
          ]
        }
      }
    ]
  }
];

export const PINOY_DRUM_TRACK: Track = {
  id: 'track-pinoy-drum-zero-to-hero',
  title: 'Pinoy Drum Masterclass: Zero to Hero (Tagalog Drum Course)',
  category: 'creative',
  categoryLabel: 'Music, Rhythm & Sonic Arts',
  slug: 'pinoy-drum-zero-to-hero',
  badge: '★ 3RD COURSE BUNDLE • PINOY DRUM MASTERCLASS',
  level: 'Beginner',
  levelIndex: 1,
  careerMilestone: 'Certified Professional Drummer & Stage Performer',
  instructor: {
    name: 'Ronnel M. Aviguetero',
    role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Master Drummer, Music Producer & Audio Engineer',
  },
  rating: 5.00,
  reviewCount: 885,
  activeLearners: 2140,
  lessonsCount: 24,
  duration: '12 Weeks (120 Practice & Masterclass Hours)',
  description: 'Ang pinakakumpletong online drum course sa wikang Tagalog na gagabay sa iyo mula Zero hanggang ganap na Drum Hero! Sumasaklaw sa 24 verified video lessons, 40 rudiments, rock/pop grooves, classic at modern OPM hits (Eraserheads, Lola Amour, Dilaw, Cueshe), church worship dynamics, Dave Weckl linear phrasing, at Michael Alba masterclass.',
  skills: [
    'Drum Kit Anatomy & Ergonomics',
    'Matched & Traditional Grip',
    'Quarter, 8th & 16th Note Reading',
    'Single Paradiddle & Rudiments',
    'Open & Buzz Drum Rollings',
    '16 Flashy Drum Fills',
    'OPM Rock & 6/8 Slow Ballads',
    'Modern Funk Syncopation',
    'Church & Worship Dynamics',
    'Linear Drumming & Dave Weckl Phrasing',
    'Double Bass Foot Speed Technique',
    'Concert Arena Stage Showmanship'
  ],
  colorTheme: 'orange',
  popular: true,
  published: true,
  price: 0,
  originalPrice: 0,
  isPaid: false,
  isBundle: true,
  bundleNumber: 3,
  bundleLabel: '★ 3RD OFFICIAL COURSE BUNDLE: PINOY DRUM MASTERCLASS',
  modules: PINOY_DRUM_MODULES.map((m, mIdx) => ({
    id: `mod-drum-${mIdx + 1}`,
    track_id: 'track-pinoy-drum-zero-to-hero',
    title: m.title,
    duration: m.duration,
    order_index: mIdx + 1,
    lessons: m.lessons.length,
    topics: m.lessons.map(l => l.title),
    lessonItems: m.lessons.map((l, lIdx) => ({
      id: `les-drum-${mIdx + 1}-${lIdx + 1}`,
      module_id: `mod-drum-${mIdx + 1}`,
      title: l.title,
      duration: l.duration,
      video_url: l.videoUrl,
      content: l.theoryContent,
      objective: l.objective,
      code_snippet: l.codeSnippet,
      activity: l.handsOnActivity ? {
        title: l.handsOnActivity.title,
        instructions: l.handsOnActivity.instructions,
        starterCode: l.handsOnActivity.starterCode,
        expectedOutcome: l.handsOnActivity.expectedOutcome,
      } : undefined,
      exam: l.exam,
      worksheet: l.googleSheetsAssignment ? {
        title: l.googleSheetsAssignment.title,
        sheetName: l.googleSheetsAssignment.sheetName,
        description: l.googleSheetsAssignment.description,
        templateUrl: l.googleSheetsAssignment.templateUrl,
        deliverables: l.googleSheetsAssignment.deliverables,
        rubric: l.googleSheetsAssignment.rubric,
      } : undefined,
      order_index: lIdx + 1,
    }))
  }))
};

export const PINOY_DRUM_COURSE: ZeroToHeroCourse = {
  track: PINOY_DRUM_TRACK,
  detailedModules: PINOY_DRUM_MODULES,
};
