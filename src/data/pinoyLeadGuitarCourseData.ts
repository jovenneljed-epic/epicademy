// PINOY LEAD GUITAR MASTERCLASS: ZERO TO HERO (TAGALOG ONLINE LEAD GUITAR COURSE)
// Authored and Accredited strictly by:
// Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS
// Lead Instructor, ICT Educator & Church Musician
// 100% Free Lifetime Access (Tuition: 0)

import type { Track, ActivityItem, ExamItem, WorksheetItem } from '../types';

export interface LeadGuitarLesson {
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

export interface LeadGuitarModule {
  title: string;
  overview: string;
  duration: string;
  lessons: LeadGuitarLesson[];
}

export const PINOY_LEAD_GUITAR_MODULES: LeadGuitarModule[] = [
  {
    "title": "Modyul 1: Pundasyon ng Lead Guitar (Picking, Articulations at Expressive Nuances)",
    "overview": "Magsimula sa zero: Tamang mekaniks ng single-note picking gamit ang alternate picking (down-up-down-up), synchronization ng kaliwa at kanang kamay, pagbasa ng guitar TABs, legato (hammer-ons at pull-offs), pitch bending na may tamang intonation, at vocal vibrato na nagbibigay-buhay sa bawat nota.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-lead-1-1",
        "title": "Aralin 1.1: Single-Note Picking Mechanics & Hand Synchronization (Alternate Picking Foundation)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=CTnUu5XGxxg",
        "videoTitle": "guitar tutorial for beginners tagalog ( alternate picking exercises ) part 01 - Arthur L. Concepcion jr.",
        "objective": "Matutunan ang tamang anggulo ng pick, pagkontrol sa pulso (wrist motion), at ang istriktong Down-Up alternate picking mechanics upang maging malinis at pantay ang bawat single-note line.",
        "theoryContent": "Maligayang pagdating sa Pinoy Lead Guitar Masterclass! Ang puso ng kahit anong solo ay ang kalinisan ng iyong pagpitas sa kuwerdas.\n\n1. BAKIT CRITICAL ANG ALTERNATE PICKING?\nKung puro downstroke lang ang gagawin mo, mauubusan ka ng bilis sa mabilis na takbo ng nota. Ang Alternate Picking (Down-Up-Down-Up) ay nagpapabilis ng iyong pagtugtog dahil ginagamit nito ang natural na pabalik na galaw ng iyong kamay.\n\n2. MECHANICAL FOUNDATION:\n• Pick Angle: I-slant ang pick nang bahagyang 10-15 degrees pahilis sa kuwerdas (edge picking). Huwag itong panatilihing 100% flat upang maiwasan ang pagsabit.\n• Wrist vs. Arm: Ang galaw ng pamimitas ay dapat manggaling sa pulso (wrist rotation o oscillation), HINDI sa buong siko o balikat!\n• Hand Synchronization: Dapat sabay na sabay ang bagsak ng daliri ng kaliwang kamay sa fretboard sa eksaktong sandali na tatamaan ng pick ang kuwerdas. Kung magkaiba sila kahit 10 milliseconds, magiging maputik at garalgal ang nota.",
        "codeSnippet": "// ALTERNATE PICKING 1-2-3-4 CHROMATIC SYNCHRONIZATION DRILL:\n// D = Downstroke, U = Upstroke\n\ne|---------------------------------1-2-3-4-|\nB|-------------------------1-2-3-4---------|\nG|-----------------1-2-3-4-----------------|\nD|---------1-2-3-4-------------------------|\nA|-1-2-3-4---------------------------------|\nE|-----------------------------------------|\n   D U D U D U D U D U D U D U D U D U D U\n\nTuntunin: Simulan sa 60 BPM sa metronome. \nHuwag bibilisan hangga't may sumasabit na nota!",
        "activity": {
          "title": "Gawaing Praktikal 1.1: The Strict Alternate Picking Chromatic Run",
          "instructions": [
            "I-set ang metronome sa 60 BPM.",
            "Tugtugin ang 1-2-3-4 chromatic pattern mula 6th string Low E papuntang 1st string High E gamit ang istriktong Down-Up-Down-Up.",
            "Siguraduhing malinaw ang bawat nota at walang fret buzz o buhol bago itaas ang tempo sa 70 BPM.",
            "Irekord ang 1 minutong video o audio para sa iyong practice journal."
          ],
          "starterCode": "Tempo: 60 BPM -> 70 BPM -> 80 BPM\nPattern: [Down, Up, Down, Up] tuluy-tuloy sa bawat kuwerdas.",
          "expectedOutcome": "Pantay na volume at eksaktong synchronization ng kaliwa at kanang kamay nang walang sumasabit na kuko o kuwerdas."
        },
        "exam": {
          "title": "Pagsusulit 1.1: Single-Note Picking Mechanics",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-1-1-1",
              "question": "Saan dapat magmula ang pangunahing galaw sa alternate picking ng lead guitar?",
              "options": [
                "Sa pulso (wrist rotation / oscillation)",
                "Sa buong braso mula siko pataas",
                "Sa pagbaluktot lamang ng hintuturo",
                "Sa buong balikat"
              ],
              "correctIndex": 0,
              "explanation": "Ang pulso ang nagbibigay ng pinakakontrolado, matipid, at mabilis na galaw nang hindi napapagod ang braso."
            },
            {
              "id": "q-lg-1-1-2",
              "question": "Bakit inirerekomenda ang edge picking (bahagyang 10-15 degrees slant ng pick)?",
              "options": [
                "Upang dumausdos nang swabe ang pick sa kuwerdas at maiwasan ang pagsabit",
                "Upang maging tahimik ang gitara",
                "Upang mas mabilis maputol ang kuwerdas",
                "Upang maging flat ang tono ng gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang edge picking ay nagbabawas ng friction sa pagitan ng plectrum at steel strings para sa mas mabilis at malinis na attack."
            },
            {
              "id": "q-lg-1-1-3",
              "question": "Ano ang kahulugan ng Hand Synchronization sa lead guitar?",
              "options": [
                "Ang sabay na pagsayad ng fretting finger sa fretwire kasabay ng pitas ng pick",
                "Ang sabay na pagtugtog ng dalawang gitara",
                "Ang paghawak sa dalawang pick nang sabay",
                "Ang pagtapik sa gitara gamit ang dalawang kamay"
              ],
              "correctIndex": 0,
              "explanation": "Hand synchronization ang tawag kapag ang timing ng fretting hand at picking hand ay 100% magkatugma sa bawat nota."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.1: Hand Synchronization Speed Log",
          "sheetName": "Picking_Sync_Log",
          "description": "Subaybayan ang iyong picking accuracy, clarity, at metronome progress.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Itala ang starting BPM (karaniwan ay 60 BPM).",
            "Markahan ang clean execution score (1-10) sa 5 magkakasunod na runs.",
            "Ilista ang anumang tensyon na naramdaman sa balikat o pulso."
          ],
          "rubric": [
            {
              "criteria": "Strict Alternate Picking Form (Down/Up Consistency)",
              "points": 50
            },
            {
              "criteria": "Zero Missed Notes & Fret Buzz",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-1-2",
        "title": "Aralin 1.2: Reading Guitar TABs & Legato Mechanics (Hammer-ons, Pull-offs & Slides)",
        "duration": "22 mins",
        "videoUrl": "https://www.youtube.com/watch?v=mCTKupzay4A",
        "videoTitle": "Master Bending, Pull-Offs, Hammer-Ons, Slides & Vibrato | Epic Pinoy Guitar Lesson for Beginners! - JR Cuyam",
        "objective": "Matutunan ang fluid legato technique: pagpalo ng hammer-on nang may tamang volume, pag-pluck ng pull-off nang hindi tumatama sa katabing kuwerdas, at makinis na slides sa fretboard.",
        "theoryContent": "Ang Legato (salitang Italyano para sa \"nakatali\" o \"smooth\") ay ang sining ng pagpapatunog ng maraming nota sa iisang pitas lamang ng pick.\n\n1. HAMMER-ON (h):\nPumitas ng nota, tapos ay malakas at mabilis na 'ihampas' ang isa pang daliri sa mas mataas na fret. Ang sikreto: Huwag i-wind up ang daliri mula sa malayo; dapat malapit lang (1-2 cm) pero mabilis ang acceleration ng daliri parang maliit na martilyo.\n\n2. PULL-OFF (p):\nHindi lang basta inaangat ang daliri! Dapat ay bahagyang 'i-plucking' o kalabitin pababa ng daliri ang kuwerdas habang inaalis ito upang patuloy na mag-vibrate ang mas mababang nota.\n\n3. SLIDE (/ o \\):\nPanatilihin ang diin ng daliri habang dumudulas patungo sa target fret. Huwag bitawan ang kuwerdas sa gitna ng pag-slide upang hindi mamatay ang tunog (sustain).",
        "codeSnippet": "// BASIC LEGATO & SLIDE TAB DRILL:\n// h = hammer-on, p = pull-off, / = slide up, \\ = slide down\n\ne|----------------------------------------------------|\nB|----------------------------------------------------|\nG|---------5h7p5---5/7\\5-------------------------------|\nD|-----5h7-------7-------7p5---5/7--------------------|\nA|-5h7-----------------------7------------------------|\nE|----------------------------------------------------|\n\nTandaan: Pumitas lang sa unang nota ng bawat grupo. \nHayaang ang daliri sa fretboard ang lumikha ng tunog ng sumunod na nota!",
        "activity": {
          "title": "Gawaing Praktikal 1.2: 2-String Legato Loop",
          "instructions": [
            "Pumitas sa G string 5th fret, i-hammer sa 7th fret, at i-pull-off pabalik sa 5th fret (5h7p5).",
            "Ulitin ang loop na ito nang 20 beses nang hindi tumitigil.",
            "Pakinggan kung kasing-lakas ba ng pinulot na nota ang na-hammer at na-pull-off na nota."
          ],
          "starterCode": "Pattern: G|-5h7p5-5h7p5-5h7p5-5h7p5-|\nMag-focus sa pantay na volume at sustain.",
          "expectedOutcome": "Pantay na dynamics sa pagitan ng picked notes at legato notes nang walang extraneous string noise."
        },
        "exam": {
          "title": "Pagsusulit 1.2: Legato at Articulation",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-1-2-1",
              "question": "Paano ang tamang paggawa ng pull-off upang hindi mamatay ang tunog ng kasunod na nota?",
              "options": [
                "Bahagyang ikalabit o i-flick pababa ang kuwerdas habang inaalis ang daliri",
                "Itaas nang napakataas ang daliri papalayo sa fretboard",
                "Pitasin muli ang kuwerdas gamit ang pick",
                "I-mute ang kuwerdas gamit ang palad"
              ],
              "correctIndex": 0,
              "explanation": "Ang banayad na downward flick ay nagbibigay ng enerhiya sa kuwerdas upang mag-vibrate ang nota na nasa ilalim."
            },
            {
              "id": "q-lg-1-2-2",
              "question": "Ano ang tamang distansya ng daliri bago mag-hammer-on sa fretboard?",
              "options": [
                "Malapit lamang (mga 1-2 cm) para sa mabilis at kontroladong impact",
                "Nasa 10 cm ang layo para may buwelo",
                "Nakasayad na bago pa pitasin",
                "Kahit anong layo basta nakapikit"
              ],
              "correctIndex": 0,
              "explanation": "Ang pagpapanatili ng daliri na malapit sa fretboard ay nagpapanatili ng economy of motion at bilis."
            },
            {
              "id": "q-lg-1-2-3",
              "question": "Ano ang kahulugan ng simbolo na 7/9 sa isang guitar TAB?",
              "options": [
                "Slide up mula sa 7th fret patungo sa 9th fret",
                "Hammer-on mula 7th papuntang 9th",
                "Tumugtog ng 7th fret tapos magpahinga ng 9 na segundo",
                "Bend mula 7th papuntang 9th"
              ],
              "correctIndex": 0,
              "explanation": "Ang forward slash (/) ay standard tablature symbol para sa slide up patungo sa mas mataas na fret."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.2: Legato Dynamic Balance Audit",
          "sheetName": "Legato_Audit",
          "description": "Subaybayan ang lakas at linaw ng iyong hammer-ons at pull-offs.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "I-record ang audio ng 10 hammer-ons.",
            "I-rate ang volume consistency (Dapat kasing lakas ng pinulot na nota).",
            "Itala ang anumang katabing kuwerdas na aksidenteng tumutunog."
          ],
          "rubric": [
            {
              "criteria": "Clean Legato Execution & Tone Volume",
              "points": 50
            },
            {
              "criteria": "Noise Dampening on Inactive Strings",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-1-3",
        "title": "Aralin 1.3: Pitch Bending Precision: Half-Step, Whole-Step & Finger Support",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=ZT5J5-QmljU",
        "videoTitle": "Fastest way to improve bending & vibrato? - Sean Ashe",
        "objective": "Maperpekto ang intonation ng string bending: pag-hit ng eksaktong half-step at whole-step pitch gamit ang 3-finger reinforcement nang hindi sumasablay sa tono.",
        "theoryContent": "Ang Bending ang nagpapahiwalay sa baguhan at sa tunay na gitarista. Ang gitara ay maaaring 'kumanta' tulad ng boses ng tao dahil sa bend.\n\n1. REINFORCEMENT (3-FINGER SUPPORT):\nHuwag kailanman magbe-bend gamit ang nag-iisang ring finger (3rd finger)!\nDapat laging nakadikit ang index (1st) at middle (2nd) fingers sa likod ng ring finger upang tatlong daliri ang sabay na nagtutulak sa kuwerdas.\n\n2. ROTATION NG PULSO (DOORKNOB MOTION):\nAng lakas ng bend ay hindi galing sa pagtuwid ng daliri. Ito ay galing sa pag-ikot ng iyong pulso at bisig—katulad ng pagpihit ng doorknob ng pinto!\n\n3. INTONATION ACCURACY:\n• Half-Step Bend (1 fret): Halimbawa, i-bend ang 7th fret para tumunog na eksaktong 8th fret.\n• Whole-Step Bend (2 frets / Full): Halimbawa, i-bend ang 7th fret para tumunog na eksaktong 9th fret.\nKapag kulang ang bend mo (flat), masakit sa tenga. Kapag sumobra (sharp), masakit din. Sanayin ang tenga sa target pitch!",
        "codeSnippet": "// PITCH BENDING REFERENCE & TARGET EXERCISE:\n// b = bend, r = release\n\nStep 1: Pitasin ang 9th fret sa G string (Nota: E) -> Pakinggan ang tono.\nStep 2: Pitasin ang 7th fret sa G string (Nota: D) -> I-bend pataas hanggang tumunog na eksaktong E!\n\nTAB:\ne|----------------------------------------------------|\nB|----------------------------------------------------|\nG|---9---(Pakinggan ang target pitch)-----------------|\nG|---7b9-(I-bend ang 7th fret hanggang matapatan ang 9)-|\nD|----------------------------------------------------|\nA|----------------------------------------------------|\nE|----------------------------------------------------|",
        "activity": {
          "title": "Gawaing Praktikal 1.3: Target Pitch Intonation Matching",
          "instructions": [
            "Pitasin ang 10th fret sa B string gamit ang pinky (A note) at pakinggan nang maigi.",
            "Pumunta sa 8th fret gamit ang ring finger (suportado ng index at middle) at i-bend nang whole-step pataas.",
            "I-check gamit ang chromatic tuner app sa cellphone kung umabot ba sa eksaktong A pitch ang iyong bend.",
            "Ulitin nang 10 beses hanggang natural na tumama sa tono nang hindi tumitingin sa tuner."
          ],
          "starterCode": "Target: 8b10 sa B string (G note bent to A note).\nGamitin ang 3-finger reinforcement.",
          "expectedOutcome": "100% accurate pitch intonation sa whole-step bends nang walang pagka-flat o sharp."
        },
        "exam": {
          "title": "Pagsusulit 1.3: String Bending Intonation",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-1-3-1",
              "question": "Bakit kailangan ang 3-finger reinforcement kapag nagbe-bend gamit ang ring finger?",
              "options": [
                "Upang magkatuwang ang lakas ng tatlong daliri para sa mas matatag na kontrol at iwas injury",
                "Para mapindot ang tatlong magkakaibang kuwerdas",
                "Dahil bawal iangat ang ibang daliri sa gitara",
                "Para maging mas mabilis magpalit ng kanta"
              ],
              "correctIndex": 0,
              "explanation": "Ang tulong ng index at middle fingers sa likod ng ring finger ay nagbibigay ng kinakailangang leverage at nagpapanatili ng pitch stability."
            },
            {
              "id": "q-lg-1-3-2",
              "question": "Anong galaw ng katawan ang dapat gamitin sa pagtutulak ng kuwerdas pataas sa bend?",
              "options": [
                "Pag-ikot ng pulso at bisig (tulad ng pagpihit ng doorknob)",
                "Pag-unat lamang ng dulo ng daliri",
                "Pagkibit ng balikat",
                "Pagtulak gamit ang hinlalaki lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang wrist rotation ay nagpapakilos sa mas malalaking muscle groups sa bisig para sa smooth at walang tensyong bend."
            },
            {
              "id": "q-lg-1-3-3",
              "question": "Ilang fret ang katumbas ng isang 'Whole-Step' (Full) bend?",
              "options": [
                "Dalawang frets na taas ng pitch",
                "Isang fret lamang",
                "Tatlong frets",
                "Kalahating fret"
              ],
              "correctIndex": 0,
              "explanation": "Ang Whole-step bend ay katumbas ng dalawang semitones o dalawang frets sa gitara."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.3: Pitch Bending Accuracy Rubric",
          "sheetName": "Bend_Intonation_Log",
          "description": "I-audit ang iyong pitch accuracy sa chromatic tuner.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Magsagawa ng 10 whole-step bends sa G string 7th fret.",
            "Itala kung ilang cents (+/-) ang layo mo sa target pitch gamit ang tuner.",
            "Ulitin sa B string 8th fret."
          ],
          "rubric": [
            {
              "criteria": "Target Pitch Accuracy (+/- 5 cents)",
              "points": 50
            },
            {
              "criteria": "Proper 3-Finger Hand Posture & Wrist Leverage",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-1-4",
        "title": "Aralin 1.4: Vocal Vibrato & Finger Pressure Control: Pagbibigay-Buhay sa Bawat Nota",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=TrYWfqO2qmc",
        "videoTitle": "How to Play a Bend WITH Vibrato - Steve Stine Guitar Lessons",
        "objective": "Matutunan ang regular at kontroladong vibrato (width at speed) na nagpapahaba ng sustain at nagbibigay ng emosyon sa mga solos tulad ng isang propesyonal.",
        "theoryContent": "Ang Vibrato ang iyong 'pirma' (musical fingerprint). Dalawang gitarista ang maaaring tumugtog ng parehong nota, ngunit ang vibrato ang magsasabi kung sino ang master.\n\n1. ANO ANG VIBRATO?\nIto ay ang mabilis ngunit kontroladong bahagyang pagtaas at pagbaba ng pitch ng nota sa paligid ng tunay na tono.\n\n2. MGA URI NG VIBRATO:\n• Wrist Vibrato: Ang pulso ay banayad na umiikot pataas at pababa (pinaka-natural at malawak para sa blues at rock).\n• Finger Vibrato: Classical style kung saan ang daliri ay gumagalaw parallel sa kuwerdas (para sa banayad na acoustic o nylon).\n• Bend Vibrato: Ang pinakamataas na antas ng husay—paglalagay ng vibrato habang nakabitin sa tuktok ng isang full bend!\n\n3. KONTROL SA WIDTH AT SPEED:\nHuwag mag-vibrato na parang kinakabahan (nervous goat). Ang magandang vibrato ay may ritmo: Nagsisimula sa malinaw na nota bago pumasok ang banayad, pantay, at may sukat na oscillation.",
        "codeSnippet": "// VIBRATO TIMING AND OSCILLATION DRILL:\n// ~~~ = vibrato\n\nB|--8~~~-----------------8b10r8~~~---------------------|\nG|---------7~~~-------------------------7b9~~~---------|\n\nTuntunin: Pitasin ang nota sa beat 1. \nHayaang tumunog nang tuwid sa beat 1, \nsaka ipasok ang vibrato sa beat 2, 3, at 4!",
        "activity": {
          "title": "Gawaing Praktikal 1.4: The Timed Vibrato Exercise",
          "instructions": [
            "Pumitas sa B string 8th fret gamit ang middle o ring finger.",
            "Bilangin ang '1, 2, 3, 4' sa 60 BPM.",
            "Sa beat 1: Straight note (walang galaw).",
            "Sa beat 2, 3, at 4: Ipasok ang 3 pantay na pulso ng vibrato bawat beat.",
            "Pakinggan kung pantay ang lalim (width) at bilis (speed)."
          ],
          "starterCode": "Tempo: 60 BPM metronome.\nPanatilihing relaxed ang hinlalaki sa ibabaw ng leeg bilang pivot point.",
          "expectedOutcome": "Makinis, pantay, at emosyonal na vibrato nang walang panginginig o pagkawala sa tono."
        },
        "exam": {
          "title": "Pagsusulit 1.4: Vibrato at Sustain",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-1-4-1",
              "question": "Ano ang palatandaan ng isang masamang vibrato na madalas gawin ng mga baguhan?",
              "options": [
                "Mabilis at hindi pantay na panginginig na parang kinakabahan (nervous goat vibrato)",
                "Pantay na ritmo na nakasabay sa tempo ng kanta",
                "Paggamit ng pulso bilang rotational pivot",
                "Pagpapatunog muna ng nota bago simulan ang vibrato"
              ],
              "correctIndex": 0,
              "explanation": "Ang nervous vibrato ay dulot ng labis na tensyon sa kamay at kawalan ng kontrol sa bilis at lalim ng oscillation."
            },
            {
              "id": "q-lg-1-4-2",
              "question": "Saan dapat magmula ang pivot point para sa epektibong rock/blues vibrato?",
              "options": [
                "Sa base ng hintuturo o hinlalaki na nakasandal sa leeg habang umiikot ang pulso",
                "Sa siko habang nakalutang ang buong kamay",
                "Sa pag-uyog ng buong katawan ng gitara",
                "Sa pagpisil ng pedals gamit ang paa"
              ],
              "correctIndex": 0,
              "explanation": "Ang contact point sa leeg ng gitara ay nagsisilbing fulcrum (pivot) upang malayang umikot ang pulso nang may kontrol."
            },
            {
              "id": "q-lg-1-4-3",
              "question": "Bakit magandang patunugin muna ang nota nang tuwid bago simulan ang vibrato?",
              "options": [
                "Upang marinig muna ng nakikinig ang tamang pitch bago ito lagyan ng expressive modulation",
                "Para makapagpahinga ang daliri",
                "Dahil bawal mag-vibrato sa unang segundo",
                "Para mas mabilis maubos ang baterya ng gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang pag-establish muna ng totoong pitch bago pumasok ang vibrato ay nagpapanatili ng linaw at musical authority."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 1.4: Vibrato Width and Consistency Log",
          "sheetName": "Vibrato_Log",
          "description": "Subaybayan ang iyong vibrato speed at rhythm synchronization.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "I-record ang 15-segundong sustained note na may vibrato sa tatlong magkakaibang frets (5th, 12th, 15th).",
            "Suriin ang waveform o audio kung pantay ang oscillation peaks.",
            "Itala ang ginhawa ng kamay pagkatapos ng exercise."
          ],
          "rubric": [
            {
              "criteria": "Oscillation Uniformity & Pitch Stability",
              "points": 50
            },
            {
              "criteria": "Musical Timing & Emotional Dynamic",
              "points": 50
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 2: The Pentatonic Engine, Blues Scale at Horizontal Fretboard Flow",
    "overview": "Ang pinakapopular at makapangyarihang scale sa kasaysayan ng gitara: Matutunan ang Minor Pentatonic Box 1, ang pagdaragdag ng maasim na 'Blue Note', ang pagkakaiba ng Major vs. Minor Pentatonic para sa tamang song mood, at kung paano dumulas (slide) pahalang sa fretboard upang hindi makulong sa isang kahon.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-lead-2-1",
        "title": "Aralin 2.1: Minor Pentatonic Scale Box 1 (Fingering, Root Notes & First Licks)",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=OJ9QNKxkfLw",
        "videoTitle": "Pentatonic Scale (scales?) Comprehensive tagalog lesson w/ back track for Am - Pareng Don sa Electric Guitar",
        "objective": "Kabisaduhin ang 5-note formula ng A Minor Pentatonic Box 1 sa 5th fret, tukuyin ang tatlong Root notes (A), at matutunang tumugtog ng mga unang melodic licks sa backing track.",
        "theoryContent": "Kung mayroon lamang isang scale na dapat matutunan ng kahit sinong lead guitarist, ito ay ang Minor Pentatonic Scale.\n\n1. BAKIT PENTATONIC?\nGaling sa salitang Griyego na 'Penta' (lima). Ito ay 5-note scale: Root, Minor 3rd, Perfect 4th, Perfect 5th, at Minor 7th (1 - b3 - 4 - 5 - b7).\nTinatanggal nito ang 2nd at 6th notes ng natural minor, na siyang madalas magdulot ng dissonance. Dahil dito, HALOS LAHAT NG NOTA SA PENTATONIC AY LIGTAS AT MASARAP PAKINGGAN!\n\n2. A MINOR PENTATONIC (BOX 1 - 5TH FRET):\nAng mga nota ay: A - C - D - E - G.\n• 6th string: 5th fret (A - Root) at 8th fret (C)\n• 5th string: 5th fret (D) at 7th fret (E)\n• 4th string: 5th fret (G) at 7th fret (A - Root)\n• 3rd string: 5th fret (C) at 7th fret (D)\n• 2nd string: 5th fret (E) at 8th fret (G)\n• 1st string: 5th fret (A - Root) at 8th fret (C)\n\n3. ANG TATLONG ROOT ANCHORS:\nLaging hanapin kung nasaan ang A notes (6th string 5th fret, 4th string 7th fret, 1st string 5th fret). Kapag nagtapos ka sa Root note sa pagtatapos ng iyong lick, magkakaroon ng pakiramdam ng 'pag-uwi' (resolution) ang iyong solo.",
        "codeSnippet": "// A MINOR PENTATONIC BOX 1 (FRET 5):\n// [R] = Root Note (A)\n\ne|-------------------------5[R]--8---|\nB|---------------------5---8---------|\nG|-----------------5---7-------------|\nD|-------------5---7[R]--------------|\nA|---------5---7---------------------|\nE|-5[R]----8-------------------------|\n  Fret 5  Fret 8\n\nClassic Pinoy Blues/Rock Lick:\ne|-----------------------------------|\nB|-------8---------------------------|\nG|-7b9====(hold)---7p5---5h7~~~------|\nD|---------------------7-------------|",
        "activity": {
          "title": "Gawaing Praktikal 2.1: A Minor Pentatonic Jam Drill",
          "instructions": [
            "Patugtugin ang isang mabagal na Am backing track sa YouTube.",
            "Tugtugin ang Box 1 pataas (ascending) at pababa (descending).",
            "Gumawa ng simpleng 3-note lick gamit ang 3rd at 2nd strings.",
            "Tapusin ang iyong lick sa Root note (4th string 7th fret o 1st string 5th fret) upang marinig ang musical resolution."
          ],
          "starterCode": "Backing Track: A Minor Rock / Blues Groove (80 BPM).\nFretboard Focus: Box 1 (Frets 5 to 8).",
          "expectedOutcome": "Kumpyansang paglikha ng mga maiikling solo licks na laging lumalapag sa tamang root notes."
        },
        "exam": {
          "title": "Pagsusulit 2.1: Minor Pentatonic Fundamentals",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-2-1-1",
              "question": "Ilang nota ang bumubuo sa isang Pentatonic scale?",
              "options": [
                "5 natatanging nota",
                "7 nota",
                "12 nota",
                "3 nota"
              ],
              "correctIndex": 0,
              "explanation": "Ang unlaping 'Penta' ay nangangahulugang lima. Kaya may 5 distinct notes ang scale bago umulit sa susunod na octave."
            },
            {
              "id": "q-lg-2-1-2",
              "question": "Sa A Minor Pentatonic Box 1 sa 5th fret, saang mga kuwerdas matatagpuan ang mga Root note (A)?",
              "options": [
                "6th string (5th fret), 4th string (7th fret), at 1st string (5th fret)",
                "5th string (5th fret) at 2nd string (5th fret)",
                "3rd string (7th fret) lamang",
                "Lahat ng 8th frets"
              ],
              "correctIndex": 0,
              "explanation": "Ang mga Root note (A) ay nasa 6th string 5th fret, 4th string 7th fret, at 1st string 5th fret."
            },
            {
              "id": "q-lg-2-1-3",
              "question": "Bakit mahalagang magtapos sa Root note sa dulo ng isang musical phrase?",
              "options": [
                "Nagbibigay ito ng pakiramdam ng 'resolution' o pag-uwi ng musika sa kanyang tonal home",
                "Dahil bawal tumugtog ng ibang nota",
                "Para hindi masira ang amplifier",
                "Upang maging tahimik ang gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang Root note ang pinakamatatag na nota sa scale na nagdudulot ng musical closure at satisfying resolution."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.1: Pentatonic Box 1 Muscle Memory Log",
          "sheetName": "Box1_Log",
          "description": "Subaybayan ang pagkabisa ng Box 1 nang hindi nakatingin sa fretboard.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Tugtugin ang Box 1 pataas at pababa nang nakapikit ang mga mata.",
            "Ilista ang 3 paborito mong lick shapes na nabuo mo habang nagja-jam.",
            "I-check ang timing laban sa 80 BPM metronome."
          ],
          "rubric": [
            {
              "criteria": "Fretboard Precision & Note Accuracy",
              "points": 50
            },
            {
              "criteria": "Musical Lick Phrasing & Resolution",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-2-2",
        "title": "Aralin 2.2: The \"Blue Note\" & The Blues Scale (Pagpapasarap ng Asim sa Solo)",
        "duration": "22 mins",
        "videoUrl": "https://www.youtube.com/watch?v=udg102crtKM",
        "videoTitle": "How to Play Blues Scale Pattern #1 | Guitar Lessons - Howcast",
        "objective": "Idagdag ang diminished 5th (b5) 'Blue Note' sa Pentatonic scale upang lumikha ng maanghang, madulas, at klasikong blues/rock grit sa iyong mga adlib.",
        "theoryContent": "Kung ang Pentatonic ay parang pritong manok, ang \"Blue Note\" ang sawsawan na may suka at sili!\n\n1. ANO ANG BLUE NOTE?\nIto ang Diminished 5th (b5 o tritone interval).\nSa A Minor:\nAng mga regular na nota ng Pentatonic ay: A, C, D, E, G.\nAng pagitan ng D (4th) at E (5th) ay may isang semitone: D# (o Eb).\nIto ang BLUE NOTE!\n\n2. PANO GAMITIN ANG BLUE NOTE:\n• Huwag magtagal dito! Ang b5 ay isang 'passing tone' (dumadaan lamang). Kapag tumigil ka rito nang matagal, maririnig itong dissonant o wala sa tono.\n• Pinakamaganda itong gamitin sa pag-slide o chromatic hammer/pull sa pagitan ng 4th at 5th notes:\nHalimbawa: D -> D# -> E (5th fret -> 6th fret -> 7th fret sa G string o A string).\n• Nagbibigay ito ng vintage Pinoy rock sound tulad ng Juan Dela Cruz Band at classic blues solos!",
        "codeSnippet": "// A BLUES SCALE BOX 1 (FRET 5):\n// [*] = Ang Blue Note (D# / Eb)\n\ne|-----------------------------5---8---|\nB|-------------------------5---8-------|\nG|-----------------5---7---8[*]--------|  <-- Blue note sa G string 8th fret\nD|-------------5---7-------------------|\nA|-----5---6[*]-7----------------------|  <-- Blue note sa A string 6th fret\nE|-5---8-------------------------------|\n\nBluesy Slide Lick:\nG|---5h7p5---7/8\\7p5--------------------|\nD|-7-------7---------7~~~--------------|",
        "activity": {
          "title": "Gawaing Praktikal 2.2: The Blue Note Chromatic Walk",
          "instructions": [
            "Pumunta sa A string: Tugtugin ang 5 (D), 6 (D# - Blue Note), at 7 (E).",
            "Pumunta sa G string: Tugtugin ang 7 (D), 8 (D# - Blue Note), at ibend ito nang bahagya (quarter bend) bago lumapag sa 5 sa B string.",
            "I-record ang pagkakaiba ng tunog ng licks na may Blue Note kumpara sa purong pentatonic."
          ],
          "starterCode": "A string: 5 -> 6 -> 7\nG string: 7 -> 8 (blue note) -> slide back to 7 -> pull-off to 5 -> land on D string 7.",
          "expectedOutcome": "Kakayahang ipasok ang Blue Note bilang passing tone upang magkaroon ng vintage blues/rock grit ang solo."
        },
        "exam": {
          "title": "Pagsusulit 2.2: Ang Blues Scale",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-2-2-1",
              "question": "Ano ang musical interval ng tinatawag na 'Blue Note' sa Blues scale?",
              "options": [
                "Diminished 5th (b5 o tritone) sa pagitan ng 4th at 5th notes",
                "Major 7th",
                "Minor 2nd",
                "Augmented 1st"
              ],
              "correctIndex": 0,
              "explanation": "Ang b5 (flat fifth) ang lumilikha ng kakaibang tensyon at tension-and-release feel na siyang katangian ng Blues music."
            },
            {
              "id": "q-lg-2-2-2",
              "question": "Bakit hindi inirerekomendang huminto nang matagal sa Blue Note?",
              "options": [
                "Dahil ito ay isang passing tone na may mataas na tensyon at kailangang mag-resolve sa 4th o 5th note",
                "Dahil mapuputol ang kuwerdas",
                "Dahil magkakaroon ng feedback ang mikropono",
                "Dahil bawal ito sa batas ng musika"
              ],
              "correctIndex": 0,
              "explanation": "Ang Blue Note ay idinisenyo bilang tulay (passing tone); kapag pinatagal nang walang resolution, magiging mapait ang tunog nito."
            },
            {
              "id": "q-lg-2-2-3",
              "question": "Sa A Blues Scale, anong nota ang Blue Note?",
              "options": [
                "D# / Eb",
                "C# / Db",
                "F# / Gb",
                "G# / Ab"
              ],
              "correctIndex": 0,
              "explanation": "Sa key ng A, ang 4th note ay D at ang 5th note ay E. Ang nasa gitna nila ay D# (o Eb)."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.2: Blues Note Integration Checklist",
          "sheetName": "Blues_Scale_Log",
          "description": "Subaybayan ang paggamit ng b5 passing tones sa mga solos.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Tukuyin ang posisyon ng Blue Note sa 5th string at 3rd string.",
            "Bumuo ng 2 orihinal na Pinoy Rock blues licks.",
            "I-record ang audio sample para sa validation."
          ],
          "rubric": [
            {
              "criteria": "Accurate Blue Note Placement",
              "points": 50
            },
            {
              "criteria": "Smooth Resolution into Target Roots/Fifth",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-2-3",
        "title": "Aralin 2.3: Major Pentatonic vs. Minor Pentatonic: Kailan Gamitin ang \"Sweet\" vs. \"Gritty\"",
        "duration": "24 mins",
        "videoUrl": "https://www.youtube.com/watch?v=QKGUtW5KEwY",
        "videoTitle": "Paano mag - Skala sa Gitara (Tagalog Guitar Lesson with English subs) - Perfecto De Castro",
        "objective": "Maunawaan ang Relative Major/Minor shift: Paano gamitin ang parehong hugis ng daliri (3 frets down) upang lumipat mula sa gritty rock tungo sa matamis na Country/Pop/Worship sweet sound.",
        "theoryContent": "Maraming baguhang gitarista ang nagtataka: Bakit may mga solo na napakatamis at masayahin, habang ang iba ay madilim at maanghang, kahit parehong pentatonic?\n\n1. ANG SECRET FORMULA (RELATIVE MAJOR/MINOR):\nAng A Minor Pentatonic at C Major Pentatonic ay MAY PAREHONG MGA NOTA (A, C, D, E, G)!\nAng pagkakaiba ay kung saang nota ka nag-uumpisa at nagtatapos (Tonal Center):\n• Kapag nag-focus ka sa A: Madilim, maanghang, bluesy at rock (Minor Pentatonic).\n• Kapag nag-focus ka sa C: Masaya, matamis, uplifting at melodiko (Major Pentatonic).\n\n2. ANG \"3 FRETS DOWN\" RULE PARA SA MAJOR PENTATONIC:\nGusto mong tumugtog ng A MAJOR Pentatonic para sa isang masayang pop o praise song?\nI-shift ang Box 1 shape nang 3 FRETS PABABA:\nMula 5th fret (A Minor), bumaba ka sa 2nd fret (F# Minor shape = A Major Pentatonic)!\nNgayon, ang iyong pinky finger sa 5th fret ng 6th string ang siyang A Root note!",
        "codeSnippet": "// A MAJOR PENTATONIC (GAMIT ANG BOX 1 SHAPE SA FRET 2):\n// [R] = Root Note A (Nasa Pinky sa Fret 5!)\n\ne|-------------------------2---5[R]----|\nB|---------------------2---5-----------|\nG|-----------------2---4---------------|\nD|-------------2---4[R]----------------|\nA|---------2---4-----------------------|\nE|-2-------5[R]------------------------|\n  Fret 2  Fret 5\n\nPaghambingin:\n• Fret 5 Box 1 (Root sa Index) = A Minor (Aggressive / Blues)\n• Fret 2 Box 1 (Root sa Pinky) = A Major (Sweet / Uplifting)",
        "activity": {
          "title": "Gawaing Praktikal 2.3: A/B Mood Comparison Drill",
          "instructions": [
            "Mag-play ng A Major chord vamp (A - D - E).",
            "Tugtugin muna ang A Minor Pentatonic sa 5th fret. Pansinin ang 'bluesy bite'.",
            "Lumipat sa 2nd fret (A Major Pentatonic). Pansinin kung paano naging matamis at mala-country o pop ang tono.",
            "Isulat sa iyong journal kung anong uri ng kanta babagay ang bawat isa."
          ],
          "starterCode": "Chords: | A | D | E | A |\nSolo A: Box 1 at 5th fret (Minor)\nSolo B: Box 1 at 2nd fret (Major)",
          "expectedOutcome": "Kalinawan sa pagpili sa pagitan ng Major at Minor Pentatonic batay sa emosyon ng kanta."
        },
        "exam": {
          "title": "Pagsusulit 2.3: Major vs Minor Pentatonic",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-2-3-1",
              "question": "Paano makukuha ang Major Pentatonic scale gamit ang pamilyar na Box 1 shape sa parehong key (halimbawa, Key of A)?",
              "options": [
                "I-shift ang Box 1 shape nang 3 frets pababa (sa 2nd fret), kung saan ang pinky ang tatapak sa root note",
                "I-shift ang Box 1 shape nang 5 frets pataas",
                "Baliktarin ang gitara",
                "Pitasin lamang ang manipis na kuwerdas"
              ],
              "correctIndex": 0,
              "explanation": "Ang 3 frets down rule ay gumagamit ng relative minor relationship: Ang F# minor shape sa 2nd fret ay nagbibigay ng A Major pentatonic notes."
            },
            {
              "id": "q-lg-2-3-2",
              "question": "Anong emosyon ang karaniwang ibinibigay ng Major Pentatonic scale?",
              "options": [
                "Matamis, masayahin, uplifting, at mala-himig ng pop, country, o praise",
                "Madilim, agresibo, at galit",
                "Nakakatakot at dissonant",
                "Mabilis at walang direksyon"
              ],
              "correctIndex": 0,
              "explanation": "Ang Major 3rd at Major 6th notes ng Major pentatonic ay nagdudulot ng maliwanag at positibong pakiramdam sa musika."
            },
            {
              "id": "q-lg-2-3-3",
              "question": "Ano ang mga nota ng C Major Pentatonic?",
              "options": [
                "C, D, E, G, A (Eksaktong kaparehong mga nota ng A Minor Pentatonic)",
                "C, D, E, F, G",
                "C, Eb, F, G, Bb",
                "C, E, G lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang C Major at A Minor ay relative sa isa't isa, kaya nagtataglay sila ng parehong 5 nota."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.3: Mood Translation Rubric",
          "sheetName": "Major_Minor_Log",
          "description": "Subaybayan ang paglipat ng emosyon mula Major tungo sa Minor solos.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Mag-record ng 8-bar solo gamit ang A Major Pentatonic sa ibabaw ng A-D backing track.",
            "Mag-record ng 8-bar solo gamit ang A Minor Pentatonic sa ibabaw ng Am-Dm backing track.",
            "Ilista ang mga ginamit mong target resolution notes."
          ],
          "rubric": [
            {
              "criteria": "Correct Fret Positioning (Fret 2 vs Fret 5)",
              "points": 50
            },
            {
              "criteria": "Emotional Congruence with Backing Track",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-2-4",
        "title": "Aralin 2.4: Connecting Pentatonic Boxes Across the Neck (Horizontal Slides & Box 1-to-2 Shifts)",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=uXbIIzjfE0c",
        "videoTitle": "CAGED system & Pentatonic Scale (major x minor) Part 1 - Pareng Don Tutorials",
        "objective": "Basagin ang 'Box 1 Jail': Matutunan kung paano mag-slide nang pahalang (horizontally) mula Box 1 patungong Box 2 at Box 3 upang masakop ang buong haba ng fretboard sa iyong solos.",
        "theoryContent": "Ang pinakamalaking bitag ng mga baguhang lead guitarist ay ang \"Box 1 Syndrome\"—ang pagiging nakakulong sa 5th hanggang 8th frets lamang habang buhay!\n\n1. ANG 5 PENTATONIC BOXES:\nAng buong fretboard ay binubuo ng 5 magkakadugtong na kahon (boxes). Kung saan nagtatapos ang kanang bahagi ng Box 1, doon nagsisimula ang kaliwang bahagi ng Box 2!\n• Box 1: Frets 5 hanggang 8\n• Box 2: Frets 7 hanggang 10\n• Box 3: Frets 9 hanggang 13\n• Box 4: Frets 12 hanggang 15\n• Box 5: Frets 14 hanggang 17\n\n2. ANG SLIDING TECHNIQUE (ANG TULAY SA PAGITAN NG MGA KAHON):\nHuwag lumipat ng posisyon habang nakataas ang kamay. Gumamit ng \"Finger Slide\" gamit ang 3rd finger o 1st finger bilang riles sa 3rd string o 2nd string.\nHalimbawa: Mula G string 7th fret (Box 1), i-slide ang iyong ring finger papuntang 9th fret (Box 2). Awtomatiko nang nakaposisyon ang iyong kamay sa bagong teritoryo!",
        "codeSnippet": "// HORIZONTAL SLIDING CONNECTING BOX 1 TO BOX 2 (KEY OF AM):\n// Box 1 (Fret 5-7) -> SLIDE -> Box 2 (Fret 7-10)\n\ne|---------------------------------------8/10~~~-----|\nB|---------------------------8/10---8/10-------------|\nG|-----------------5/7---7/9-------------------------|\nD|-------5/7---5/7-----------------------------------|\nA|-5/7-----------------------------------------------|\nE|---------------------------------------------------|\n   Box 1 -> Slide -> Box 2 territory!\n\nPansinin kung paano umaakyat nang pataas at pasulong ang solo!",
        "activity": {
          "title": "Gawaing Praktikal 2.4: The Fretboard Diagonal Highway",
          "instructions": [
            "Simulan sa 6th string 5th fret (Low A).",
            "Umakyat nang pahilis (diagonally) sa fretboard gamit ang sliding finger technique hanggang marating ang 1st string 17th fret (High A).",
            "Pansinin kung paano nagiging tuluy-tuloy ang tunog na parang isang mahabang hagdan sa halip na nakapirme sa isang sulok."
          ],
          "starterCode": "Path: 6th string fret 5 -> 5th string fret 7 -> 4th string fret 7 -> slide to 9 -> 3rd string fret 9 -> slide to 12...",
          "expectedOutcome": "Kalinawan sa paglalakbay sa buong fretboard nang hindi nawawala sa key."
        },
        "exam": {
          "title": "Pagsusulit 2.4: Fretboard Navigation",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-2-4-1",
              "question": "Ilang magkakadugtong na 'Boxes' ang bumubuo sa buong fretboard para sa Pentatonic scale?",
              "options": [
                "5 magkakadugtong na posisyon (Boxes 1 hanggang 5)",
                "2 kahon lamang",
                "12 kahon",
                "Walang kahon sa gitara"
              ],
              "correctIndex": 0,
              "explanation": "May 5 interlocking pentatonic shapes na sumasakop sa buong 12 frets bago umulit sa octave."
            },
            {
              "id": "q-lg-2-4-2",
              "question": "Ano ang pinakamadulas na paraan upang lumipat mula Box 1 patungo sa Box 2 nang hindi napuputol ang linya ng solo?",
              "options": [
                "Paggamit ng sliding finger sa iisang kuwerdas bilang tulay sa susunod na posisyon",
                "Pagtigil ng 5 segundo bago lumipat",
                "Pag-alis ng daliri at paghahanap gamit ang mata bago pumindot muli",
                "Pag-bend ng lahat ng kuwerdas"
              ],
              "correctIndex": 0,
              "explanation": "Ang horizontal slide ay nagpapanatili ng pisikal na koneksyon sa instrumento para sa tuluy-tuloy na legato flow."
            },
            {
              "id": "q-lg-2-4-3",
              "question": "Kung ang A Minor Pentatonic Box 1 ay nasa 5th fret, saan nagsisimula ang Box 2?",
              "options": [
                "Sa 7th o 8th fret (kung saan nagtatapos ang kanang bahagi ng Box 1)",
                "Sa 12th fret",
                "Sa 1st fret",
                "Sa 3rd fret"
              ],
              "correctIndex": 0,
              "explanation": "Ang Box 2 ay direktang kadugtong ng kanang dulo ng Box 1 sa 7th at 8th frets."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 2.4: 5-Box Fretboard Map Completion",
          "sheetName": "5_Boxes_Log",
          "description": "Subaybayan ang pag-konekta ng Box 1 hanggang Box 5.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Kumpletuhin ang fret coordinates para sa Boxes 1, 2, 3, 4, at 5 sa Key of Am.",
            "I-record ang video ng isang diagonal slide run mula fret 5 hanggang fret 17.",
            "I-verify na walang maling nota sa pagitan ng mga paglipat."
          ],
          "rubric": [
            {
              "criteria": "Seamless Box-to-Box Transition",
              "points": 50
            },
            {
              "criteria": "Accurate Target Landing on Inactive Boxes",
              "points": 50
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 3: Speed, Modern Articulations at Virtuoso Techniques (Shred Academy)",
    "overview": "Itaas ang antas ng iyong bilis at teknikal na husay: Istriktong speed drills gamit ang metronome, two-handed finger tapping mechanics (ala-Van Halen), sumisigaw na pinch harmonics (artificial harmonic squeals), at sweep picking fundamentals gamit ang 3-string triads.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-lead-3-1",
        "title": "Aralin 3.1: Speed Drills & Metronome Acceleration (Finger Independence & Clean Attack)",
        "duration": "22 mins",
        "videoUrl": "https://www.youtube.com/watch?v=eAO7n3Y5sS0",
        "videoTitle": "Building Speed/Alternate Picking Tutorial (Tagalog) - patrick cruz",
        "objective": "Bumuo ng tunay na bilis sa gitara nang walang putik: Pag-aaral ng economy of motion, pagpapanatili ng zero-tension sa braso, at systematic metronome speed ladders.",
        "theoryContent": "Ang bilis ay hindi isang magic trick—ito ay produkto ng \"Efficiency of Motion\" (kawalan ng nasasayang na galaw).\n\n1. ANG MGA DAHILAN KUNG BAKIT HINDI KA BUMIBILIS:\n• Labis na Tensyon: Kapag nanggigigil ang iyong panga, balikat, o bisig, naninigas ang muscle fibers at humihinto ang bilis.\n• Flying Fingers: Ang mga daliri ng kaliwang kamay ay lumilipad nang 3-5 cm papalayo sa fretboard. Dapat ay manatiling 1 cm lang ang layo ng mga kuko sa kuwerdas!\n• Sobrang Lalim ng Pick: Kapag 5 mm ng pick ang lumulubog sa kuwerdas, 'mababaon' ito. Dulo lamang (1 mm) ang dapat sumayad!\n\n2. THE SPEED LADDER METHOD:\nHuwag agad tutugtog sa 140 BPM!\n• Magsimula sa 70 BPM (16th notes: apat na nota bawat tik ng metronome).\n• Tugtugin nang 3 minuto nang walang kahit isang sablay.\n• Itaas nang 4 BPM lamang (74 BPM).\n• Ulitin hanggang marating ang iyong kasalukuyang hangganan (Speed Wall).",
        "codeSnippet": "// PAUL GILBERT 6-NOTE SHRED LICK (16TH NOTE TRIPLETS):\n// Balikan at ulitin nang tuluy-tuloy:\n\ne|-------------------------|\nB|--5-7-8-7-5---5-7-8-7-5--|\nG|------------7------------|\nD|-------------------------|\n   D U D U D U D U D U D U\n   1 & a 2 & a 3 & a 4 & a\n\nPanatilihing magaan ang kuko at pitas!",
        "activity": {
          "title": "Gawaing Praktikal 3.1: The 10-Day Speed Ladder Challenge",
          "instructions": [
            "Piliin ang Paul Gilbert 6-note lick sa B at G strings.",
            "Simulan sa 70 BPM. Mag-set ng timer ng 3 minuto.",
            "Kung 100% clean ang run, itaas sa 74 BPM kinabukasan.",
            "Ilista ang iyong pang-araw-araw na BPM sa worksheet."
          ],
          "starterCode": "Pattern: B|-5-7-8-7-5---| G|---7---|\nTarget: Mula 70 BPM hanggang 120+ BPM.",
          "expectedOutcome": "Dramatikong pagtaas ng bilis at kalinisan nang walang pananakit o paninigas ng bisig."
        },
        "exam": {
          "title": "Pagsusulit 3.1: Speed Mechanics",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-3-1-1",
              "question": "Ano ang pangunahing kaaway ng bilis (speed) sa lead guitar?",
              "options": [
                "Labis na tensyon sa kalamnan ng kamay, braso, at balikat",
                "Masyadong manipis na gitara",
                "Paggamit ng metronome",
                "Pagkakaroon ng mahabang kuko sa kanang kamay"
              ],
              "correctIndex": 0,
              "explanation": "Ang tensyon ay nagpapakipot sa daloy ng dugo at nagdudulot ng muscle fatigue, na sumisira sa bilis at katumpakan."
            },
            {
              "id": "q-lg-3-1-2",
              "question": "Ano ang tinatawag na 'Flying Fingers' sa technique ng fretting hand?",
              "options": [
                "Ang masamang ugali ng pag-angat ng mga daliri nang napakalayo sa fretboard habang hindi tumutugtog",
                "Ang mabilis na paglipat ng posisyon sa kanta",
                "Ang pagpindot gamit ang pinky",
                "Ang pagtugtog nang nakatayo"
              ],
              "correctIndex": 0,
              "explanation": "Kapag masyadong malayo ang daliri, mas maraming oras ang kailangan nito para bumalik sa fretboard, kaya bumabagal ang pagtugtog."
            },
            {
              "id": "q-lg-3-1-3",
              "question": "Ilang milimetro lamang ng dulo ng pick ang dapat sumasayad sa kuwerdas para sa high-speed alternate picking?",
              "options": [
                "Tinatayang 1 mm lamang (tip of the plectrum)",
                "Kalahati ng pick (mga 15 mm)",
                "Ang buong pick",
                "Kahit gaano kalalim basta malakas ang tunog"
              ],
              "correctIndex": 0,
              "explanation": "Ang paggamit lamang sa pinakadulo ng pick ay nagbabawas ng drag at resistance sa bawat pitas."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.1: Speed Ladder Progress Journal",
          "sheetName": "Speed_Ladder",
          "description": "Subaybayan ang iyong daily BPM records gamit ang metronome.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Itala ang baseline BPM sa Day 1.",
            "I-log ang clean completion status sa bawat 4 BPM step-up.",
            "I-upload ang 15-segundong video sa iyong pinakamataas na clean BPM."
          ],
          "rubric": [
            {
              "criteria": "Absolute Timing with Metronome Click",
              "points": 50
            },
            {
              "criteria": "Zero Fretting Hand Flying Motion",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-3-2",
        "title": "Aralin 3.2: Finger Tapping Mechanics: Two-Handed Arpeggios & Scale Cascades",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=6oKbJ1_6pOM",
        "videoTitle": "Guitar Tutorial Tapping tagalog madali lang! - TechMusic jay-r abello",
        "objective": "Matutunan ang two-handed fretboard tapping (T-p-h): Pagpalo ng kanang hintuturo o middle finger, pag-flick ng pull-off, at pag-hammer ng kaliwang kamay para sa mala-pianong arpeggios.",
        "theoryContent": "Pinasikat ni Eddie Van Halen sa kantang \"Eruption\", ang Tapping ay nagpapahintulot sa iyo na tumugtog ng napakabilis na arpeggios na hindi kakayaning abutin ng iisang kamay lamang!\n\n1. ANG 3-STEP TAPPING LOOP (Tap -> Pull -> Hammer):\n• Step 1 (TAP): Gamit ang hintuturo (index) o middle finger ng kanang kamay, malakas at mabilis na hampasin ang target fret (halimbawa: 12th fret sa B string).\n• Step 2 (PULL-OFF): I-flick pababa o paitaas ang kanang daliri habang umaalis upang tumunog ang nota na nakahanda sa kaliwang kamay (halimbawa: 5th fret).\n• Step 3 (HAMMER-ON): I-hammer ng kaliwang kamay ang susunod na nota (halimbawa: 8th fret).\nUlitin: TAP (12) -> PULL (5) -> HAMMER (8) -> TAP (12)...\n\n2. STRING MUTING (ANG PINAKAMAHALAGANG SEKRETO):\nDahil nakataas ang dalawang kamay sa fretboard, madaling magka-ingay ang mga hindi tinutugtog na kuwerdas!\nGamitin ang palad (edge of right hand palm) upang patayin ang 6th, 5th, at 4th strings habang nagta-tap sa manipis na kuwerdas.",
        "codeSnippet": "// CLASSIC AMINOR TAPPING ARPEGGIO LOOP:\n// T = Right hand tap, p = pull-off, h = hammer-on\n\ne|----------------------------------------------------|\nB|--T12--p5--h8---T12--p5--h8---T12--p5--h8-----------|\nG|----------------------------------------------------|\n\nUlitin sa 3 chord shapes:\n1. Am:   T12 - p5 - h8\n2. G:    T10 - p3 - h7\n3. F:    T8  - p1 - h5",
        "activity": {
          "title": "Gawaing Praktikal 3.2: 3-Chord Tapping Progression",
          "instructions": [
            "Sanayin ang Am tapping loop (T12-p5-h8) nang 30 segundo.",
            "Lumipat sa G tapping loop (T10-p3-h7) nang 30 segundo.",
            "Lumipat sa F tapping loop (T8-p1-h5) nang 30 segundo.",
            "Siguraduhing malinaw ang bawat pag-tap at walang garalgal mula sa katabing kuwerdas."
          ],
          "starterCode": "Pattern: [T12-p5-h8 x4] -> [T10-p3-h7 x4] -> [T8-p1-h5 x4] -> [T12-p5-h8 x4]",
          "expectedOutcome": "Malinis, pantay ang volume, at mala-kaskadang arpeggio tapping nang walang unwanted noise."
        },
        "exam": {
          "title": "Pagsusulit 3.2: Finger Tapping Mechanics",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-3-2-1",
              "question": "Ano ang tamang 3-step loop sequence sa two-hand guitar tapping?",
              "options": [
                "Tap (kanang kamay) -> Pull-off (kanang daliri) -> Hammer-on (kaliwang daliri)",
                "Pick -> Strum -> Tap",
                "Slide -> Bend -> Tap",
                "Hammer -> Hammer -> Hammer"
              ],
              "correctIndex": 0,
              "explanation": "Ang Tap-Pull-Hammer sequence ang lumilikha ng tuluy-tuloy na continuous rolling loop ng 3-note arpeggio."
            },
            {
              "id": "q-lg-3-2-2",
              "question": "Paano pinipigilan ang ingay ng mga katabing kuwerdas habang nagta-tap sa 1st o 2nd string?",
              "options": [
                "Gamit ang gilid ng kanang palad na bahagyang nakapatong sa mas makakapal na kuwerdas (palm muting)",
                "Sa pamamagitan ng pagpatay sa amplifier",
                "Sa pagtanggal ng ibang kuwerdas",
                "Hindi ito mapipigilan"
              ],
              "correctIndex": 0,
              "explanation": "Ang right-hand palm rest sa lower strings ay kritikal upang manatiling tahimik at malinis ang solo."
            },
            {
              "id": "q-lg-3-2-3",
              "question": "Aling daliri sa kanang kamay ang pinakakaraniwang ginagamit sa pag-tap kung may hawak kang pick?",
              "options": [
                "Middle finger (dahil ang hinlalaki at hintuturo ay nakahawak sa pick)",
                "Pinky finger",
                "Hintuturo kahit mabitawan ang pick",
                "Kahit ano sa paa"
              ],
              "correctIndex": 0,
              "explanation": "Ang paggamit ng middle finger para sa tapping ay nagbibigay-daan sa agarang pagbalik sa regular picking nang hindi binibitawan ang plectrum."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.2: Tapping Cleanliness Assessment",
          "sheetName": "Tapping_Log",
          "description": "Subaybayan ang kalinisan at volume consistency ng iyong tapping runs.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Subukan ang 4-bar tapping chord progression.",
            "I-audit kung pantay ang volume ng 'Tap' kumpara sa 'Hammer-on'.",
            "I-record ang video demo."
          ],
          "rubric": [
            {
              "criteria": "Right Hand Tapping Attack & Pull Clarity",
              "points": 50
            },
            {
              "criteria": "String Noise Muting Effectiveness",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-3-3",
        "title": "Aralin 3.3: Screaming Pinch Harmonics & Artificial Squeals (Thumb Edge Technique)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=B5MNlxGaRPI",
        "videoTitle": "THE SECRET to Pinch Harmonics - PAX",
        "objective": "I-unlock ang sikreto ng 'sumisigaw' na pinch harmonics (squealies): Ang eksaktong anggulo ng pick, ang thumb-edge flesh brush, at ang vibrato shaking na nagpapasabog sa tono.",
        "theoryContent": "Ang Pinch Harmonic (o \"squeal\") ang pinaka-astig na tunog sa rock at metal lead guitar! Ito ang tunog na maririnig kina Zakk Wylde, Dimebag Darrell, at sa matitinding Pinoy rock solos.\n\n1. ANG SIKRETO NG PINCH HARMONIC:\nHindi ito galing sa espesyal na pick o amplifier setting lamang. Ito ay pisikal na mekaniks:\n• Iwanan lamang ang 1-2 milimetro ng dulo ng pick.\n• Sa sandaling pitasin ng pick ang kuwerdas, DAPAT AGAD DUMAMPI ANG MATABANG GILID NG IYONG HINLALAKI (flesh of the thumb) sa kuwerdas!\n• Ang pagdampi ng thumb ay nagkakansela sa fundamental frequency at nagpapasiklab sa high harmonic overtone!\n\n2. ANG \"SWEET SPOT\" (NODE POINTS):\nAng bawat fret ay may partikular na lugar sa itaas ng pickups kung saan pinakamalakas ang harmonic.\nKapag nag-pinch ka sa 3rd string 7th fret, subukang pitasin sa iba't ibang puwesto: malapit sa bridge pickup, sa gitna, o malapit sa neck pickup. Mapapansin mong nagbabago ang pitch ng harmonic squeal!\n\n3. ANG WIDE VIBRATO FINISH:\nAng isang pinch harmonic na walang vibrato ay parang tunog ng lata. Sa sandaling sumiklab ang squeal, agad itong alugin gamit ang malalim at malawak na wrist vibrato upang mag-sustain nang matagal!",
        "codeSnippet": "// PINCH HARMONIC NOTATION & DRILL:\n// P.H. = Pinch Harmonic with wide vibrato\n\nG|---7(P.H.)~~~----------5(P.H.)~~~-------------------|\nD|---------------7~~~------------------7(P.H.)~~~-----|\n\nMekaniks:\n1. Pick strikes string.\n2. Side of thumb brushes string 0.01 seconds after.\n3. Wide aggressive vibrato shakes the note!",
        "activity": {
          "title": "Gawaing Praktikal 3.3: The Zakk Wylde Squeal Hunt",
          "instructions": [
            "Pumili ng high-gain overdrive o distortion channel sa amp o multi-effects.",
            "Pumindot sa G string 7th fret gamit ang ring finger.",
            "Subukang mag-pinch harmonic habang inililipat ang picking hand nang 1 cm paatras o pasulong sa ibabaw ng pickups.",
            "Hanapin ang 3 magkakaibang 'sweet spots' na may magkakaibang pitch ng squeal.",
            "Lagyan ng malawak na vibrato ang bawat matagumpay na harmonic."
          ],
          "starterCode": "String: 3rd string (G), 7th fret.\nFocus: Dampi ng gilid ng hinlalaki (side of thumb) kasunod ng pick.",
          "expectedOutcome": "Consistent na pagsiklab ng pinch harmonics sa bawat pitas nang may matagal na sustain."
        },
        "exam": {
          "title": "Pagsusulit 3.3: Pinch Harmonics Mechanics",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-3-3-1",
              "question": "Ano ang pisikal na sanhi ng pinch harmonic sa gitara?",
              "options": [
                "Ang sabay o halos magkasunod na pagdampi ng gilid ng hinlalaki (thumb flesh) matapos tumama ang pick sa kuwerdas",
                "Ang pagsira sa kuwerdas gamit ang bakal na pick",
                "Ang sobrang taas na volume ng gitara",
                "Ang pagpindot sa likod ng pickup"
              ],
              "correctIndex": 0,
              "explanation": "Ang thumb flesh ay sumasala sa fundamental tone at nag-iiwan lamang sa high harmonic overtone ng node point."
            },
            {
              "id": "q-lg-3-3-2",
              "question": "Bakit kailangang lagyan ng malawak na vibrato ang pinch harmonic matapos itong sumiklab?",
              "options": [
                "Upang mapanatili ang sustain at bigyan ito ng umaalulong at maawtoridad na tunog",
                "Para mamatay agad ang tunog",
                "Upang magbago ang kanta",
                "Dahil ito ang utos ng tuner"
              ],
              "correctIndex": 0,
              "explanation": "Ang vibrato ay nagpapanatili ng vibration ng kuwerdas laban sa magnetic field ng pickup para sa mahabang sustain."
            },
            {
              "id": "q-lg-3-3-3",
              "question": "Ano ang tinatawag na 'Harmonic Sweet Spot' sa ibabaw ng gitara pickups?",
              "options": [
                "Ang mga node locations sa kahabaan ng kuwerdas kung saan pinakamalakas at pinakamatinis ang overtone",
                "Ang volume knob",
                "Ang strap button",
                "Ang bridge saddle"
              ],
              "correctIndex": 0,
              "explanation": "Ang mga harmonic nodes ay nahahati sa regular fractions ng kuwerdas sa pagitan ng fretted note at bridge."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.3: Pinch Harmonic Success Rate Tracker",
          "sheetName": "Pinch_Harmonics",
          "description": "Subaybayan ang iyong success rate sa 20 sunod-sunod na pinch harmonic attempts.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Magsagawa ng 20 attempts sa G string 7th fret.",
            "Itala kung ilan ang sumiklab nang malinis (Target: 16/20 o 80%).",
            "I-record ang audio ng iyong pinakamalinis na squeal."
          ],
          "rubric": [
            {
              "criteria": "Clean Harmonic Squeal vs Dull Thud",
              "points": 50
            },
            {
              "criteria": "Sustain & Vibrato Integration",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-3-4",
        "title": "Aralin 3.4: Sweep Picking Fundamentals: Economy Picking & 3-String Triad Sweeps",
        "duration": "24 mins",
        "videoUrl": "https://www.youtube.com/watch?v=K8t9-0Mu9jA",
        "videoTitle": "Panimula at Pag sasanay sa Sweep Picking (Tips and Tricks) - patrick cruz",
        "objective": "Kabisaduhin ang sweep picking fundamentals: Ang tuluy-tuloy na broom-like downward at upward picking motion, rolling fingers technique para sa note separation, at 3-string triad shapes.",
        "theoryContent": "Ang Sweep Picking ang itinuturing na \"Holy Grail\" ng neo-classical shredding. Sa halip na mag-alternate picking, ang pick ay 'nagwawalis' (sweeps) sa mga kuwerdas sa iisang tuluy-tuloy na direksyon.\n\n1. HINDI ITO STRUMMING!\nSa strumming, hinahayaan mong magsabay-sabay tumunog ang lahat ng nota (chord).\nSa sweep picking, ISANG NOTA LAMANG ANG DAPAT TUMUTUNOG SA BAWAT SANDALI!\nIto ang pinakamahirap na parte: Pagkatapos tumunog ng isang nota, dapat agad iangat o i-mute ng fretting hand ang daliri bago tumunog ang kasunod na kuwerdas.\n\n2. ANG ROLLING FINGER TECHNIQUE:\nKapag dalawang magkasunod na nota ang nasa parehong fret (halimbawa: 5th fret sa B at E strings), huwag mag-barre!\nI-roll ang daliri mula dulo patungong buko upang isa-isang tumunog ang mga kuwerdas nang walang pag-bleed ng tunog.\n\n3. ANG 3-STRING MAJOR AT MINOR TRIADS:\nSimulan sa 3 manipis na kuwerdas (G, B, E). Mas madali itong kontrolin bago lumipat sa 5-string o 6-string sweeps!",
        "codeSnippet": "// 3-STRING AMINOR SWEEP PICKING PATTERN:\n// D = Down-sweep, U = Up-sweep, h = hammer, p = pull\n\ne|-------12h17p12----------------|  <-- Up-sweep / pull-off\nB|----13----------13-------------|  <-- Middle finger\nG|-14----------------14----------|  <-- Ring finger (Down-sweep starts)\n   D   D   D     U  U\n\nDireksyon ng Pick:\nDown -> Down -> Down -> Hammer/Pull -> Up -> Up -> (Ulitin)",
        "activity": {
          "title": "Gawaing Praktikal 3.4: The 3-String Am Sweep Arpeggio Loop",
          "instructions": [
            "I-set ang metronome sa napakabagal na 50 BPM.",
            "Tugtugin ang Am triad: G (14) -> B (13) -> E (12) gamit ang isang tuluy-tuloy na pababang galaw ng pick (tulad ng pagwawalis ng walis-tingting).",
            "I-hammer ang pinky sa 17th fret sa 1st string, i-pull-off pabalik sa 12.",
            "I-sweep pataas (Up-sweep) sa B (13) at G (14).",
            "Pakinggan kung nagba-bleed ang mga nota. Dapat arpeggiated, hindi chord!"
          ],
          "starterCode": "Tempo: 50 BPM (Accuracy first! Bilis ay susunod nang kusa).\nPattern: Am (14-13-12-17-12-13-14).",
          "expectedOutcome": "Malinis na note separation kung saan walang dalawang nota na sabay tumutunog sa arpeggio."
        },
        "exam": {
          "title": "Pagsusulit 3.4: Sweep Picking Principles",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-3-4-1",
              "question": "Ano ang pinagkaiba ng Sweep Picking sa regular na Chords Strumming?",
              "options": [
                "Sa sweep picking, isa-isang pinapatunog at pinuputol ang bawat nota gamit ang fret hand muting; sa strumming, sabay-sabay silang nagri-ring",
                "Walang pinagkaiba, pareho lang silang strumming",
                "Ang sweep picking ay para lamang sa acoustic guitar",
                "Ang sweep picking ay hindi gumagamit ng pick"
              ],
              "correctIndex": 0,
              "explanation": "Ang kalinisan ng sweep picking ay nakasalalay sa agarang pag-mute ng naunang nota upang hindi maging maputik na chord ang tunog."
            },
            {
              "id": "q-lg-3-4-2",
              "question": "Ano ang 'Rolling Finger' technique sa sweep picking?",
              "options": [
                "Ang pag-ikot o pag-roll ng daliri mula sa dulo patungo sa taba upang tumunog ang dalawang kuwerdas sa parehong fret nang hindi sabay",
                "Ang pag-roll ng pick sa palad",
                "Ang pagpihit ng tuning peg habang tumutugtog",
                "Ang paglundag sa entablado"
              ],
              "correctIndex": 0,
              "explanation": "Ang finger roll ay pumipigil sa pag-bleed ng magkatabing nota sa parehong fret habang nagwawalis ang pick."
            },
            {
              "id": "q-lg-3-4-3",
              "question": "Bakit inirerekomendang simulan ang pag-aaral ng sweep sa 3 kuwerdas lamang bago ang 5 o 6 na kuwerdas?",
              "options": [
                "Upang mas madaling ma-synchronize ang picking motion at fretting release bago harapin ang mas kumplikadong posisyon",
                "Dahil 3 lang ang daliri sa kamay",
                "Dahil bawal ang 6-string sweeps sa Pilipinas",
                "Para mas mura ang presyo ng gitara"
              ],
              "correctIndex": 0,
              "explanation": "Ang 3-string triad sweeps ang nagtataguyod ng tamang mechanics bago magdagdag ng barre at shifting sa mas malalaking arpeggios."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 3.4: Sweep Picking Note Separation Audit",
          "sheetName": "Sweep_Log",
          "description": "Subaybayan ang kalinisan at kawalan ng note bleeding sa sweep arpeggios.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Mag-record ng slow-motion video o audio sa 60 BPM ng 3-string sweep.",
            "I-check kung may 'ringing together' ng B at E strings.",
            "Itala ang daily BPM acceleration."
          ],
          "rubric": [
            {
              "criteria": "Zero Note Bleeding (Pure Arpeggiation)",
              "points": 50
            },
            {
              "criteria": "Fluid Down/Up Pick Sweeping Motion",
              "points": 50
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 4: Harmony, Theory at Soloing Over Chord Changes (CAGED, Scales & Modes)",
    "overview": "Ang utak ng propesyonal na soloista: Paggamit ng CAGED system upang makakita ng soloing anchors sa kahit saang bahagi ng leeg, ang 7-note Major at Natural Minor scales, ang makulay na tunog ng Dorian at Mixolydian modes para sa Pinoy Rock at Fusion, at ang sining ng pag-target sa chord tones (3rds at 7ths) habang nagpapalit ang kanta.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-lead-4-1",
        "title": "Aralin 4.1: The CAGED System for Soloists: Root Finding & Lead Box Navigation",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=XNVf9qMX1e8",
        "videoTitle": "CAGED system at relasyon ng mga Chords - for beginners - Pareng Don Tutorials",
        "objective": "Gamitin ang CAGED system bilang GPS ng fretboard: Matutunang iugnay ang bawat pentatonic box sa 5 pangunahing chord shapes (C-A-G-E-D) upang laging alam kung nasaan ang chords sa ilalim ng iyong solo.",
        "theoryContent": "Bakit napakagaling ng mga propesyonal na soloista na hindi tumitingin sa fretboard? Dahil nakikita nila ang \"CAGED framework\".\n\n1. ANG CAGED CONCEPT:\nAng buong fretboard ay nahahati sa 5 pamilyar na open chord shapes na umuusad pataas:\nC shape -> A shape -> G shape -> E shape -> D shape.\n\n2. CAGED + PENTATONIC CORRESPONDENCE:\nBawat Pentatonic Box ay may katugmang CAGED chord shape:\n• Box 1 = E-Shape chord\n• Box 2 = D-Shape chord\n• Box 3 = C-Shape chord\n• Box 4 = A-Shape chord\n• Box 5 = G-Shape chord\n\n3. BAKIT ITO CRITICAL SA LEAD GUITAR?\nKapag ang rhythm guitarist sa likod mo ay tumugtog ng \"C Major chord\", hindi mo na kailangang manghula!\nKung nasa 8th fret ka, alam mong nandoon ang E-shape C chord; kung nasa 3rd fret ka, nandoon ang A-shape C chord. Agad mong makikita ang mga arpeggio notes na tatapakan mo!",
        "codeSnippet": "// CAGED CHORD SHAPES TO LEAD ARPEGGIOS (KEY OF C):\n\nPosition 1 (Fret 3): A-Shape C Chord & Pentatonic\ne|---3---|  <- 5th (G)\nB|---5---|  <- 3rd (E)\nG|---5---|  <- Root (C)\nD|---5---|  <- 5th (G)\nA|---3---|  <- Root (C)\nE|-------|\n\nPosition 2 (Fret 8): E-Shape C Chord & Pentatonic (Box 1)\ne|---8---|  <- Root (C)\nB|---8---|  <- 5th (G)\nG|---9---|  <- 3rd (E)\nD|---10--|  <- Root (C)\nA|---10--|  <- 5th (G)\nE|---8---|  <- Root (C)",
        "activity": {
          "title": "Gawaing Praktikal 4.1: The 5-Position Chord-and-Lick Drill",
          "instructions": [
            "Pumili ng key (halimbawa, Key of C Major).",
            "Tugtugin ang C chord gamit ang C shape, A shape, G shape, E shape, at D shape pataas sa leeg.",
            "Pagkatapos ng bawat chord, tugtugin ang katugmang 3-note lick sa parehong posisyon.",
            "Tukuyin ang Root note sa bawat posisyon."
          ],
          "starterCode": "Sequence: C-shape (Open) -> A-shape (Fret 3) -> G-shape (Fret 5) -> E-shape (Fret 8) -> D-shape (Fret 10).",
          "expectedOutcome": "Kakayahang makilala at maikonekta ang chord shapes sa lead scale positions sa buong fretboard."
        },
        "exam": {
          "title": "Pagsusulit 4.1: CAGED System for Soloists",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-4-1-1",
              "question": "Anong chord shape sa CAGED system ang direktang tumutugma sa Pentatonic Box 1?",
              "options": [
                "E-Shape",
                "C-Shape",
                "A-Shape",
                "D-Shape"
              ],
              "correctIndex": 0,
              "explanation": "Ang standard Box 1 shape (na may root sa 6th string) ay direktang nakabatay sa E-shape barre chord."
            },
            {
              "id": "q-lg-4-1-2",
              "question": "Ano ang wastong pagkakasunod-sunod ng mga hugis habang umaakyat sa fretboard sa CAGED system?",
              "options": [
                "C -> A -> G -> E -> D -> C (tuluy-tuloy na loop)",
                "C -> D -> E -> F -> G",
                "A -> B -> C -> D -> E",
                "G -> A -> B -> C -> D"
              ],
              "correctIndex": 0,
              "explanation": "Ang salitang C-A-G-E-D mismo ang nagdidikta ng pagkakasunod-sunod ng mga posisyon pataas sa leeg."
            },
            {
              "id": "q-lg-4-1-3",
              "question": "Bakit kapaki-pakinabang ang CAGED system para sa isang lead guitarist habang nag-iimprovise?",
              "options": [
                "Dahil nakikita mo agad ang chord tones ng accompaniment sa mismong ilalim ng iyong mga daliri saanmang fret",
                "Upang hindi na kailanganin ang bass player",
                "Para maging mas maikli ang kanta",
                "Dahil ito ay nag-aalis ng pangangailangan sa tono"
              ],
              "correctIndex": 0,
              "explanation": "Ang CAGED system ay nagbibigay ng visual map ng triads at roots sa ilalim ng bawat scale box."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.1: CAGED Fretboard Map Worksheet",
          "sheetName": "CAGED_Map",
          "description": "I-plot ang 5 CAGED positions para sa Key of G Major.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Isulat ang fret coordinates para sa 5 CAGED shapes ng G Major.",
            "Tukuyin ang Root, 3rd, at 5th notes sa bawat posisyon.",
            "I-upload ang audio ng pagtugtog sa bawat hugis."
          ],
          "rubric": [
            {
              "criteria": "Accurate Triad Note Identification",
              "points": 50
            },
            {
              "criteria": "Smooth Progression Across All 5 Shapes",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-4-2",
        "title": "Aralin 4.2: Major Scale & Natural Minor: 7-Note Foundation & Intervals",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=hGSWDAZUOGo",
        "videoTitle": "Major scales on guitar & its relation to minor scale - Comprehensive lessons guitar theory beginners - Pareng Don sa Electric Guitar",
        "objective": "Lumalagpas sa pentatonic: Matutunan ang 7-note Major Scale (Do-Re-Mi-Fa-Sol-La-Ti) at Natural Minor scale gamit ang 3-notes-per-string system para sa mabilis at melodic na runs.",
        "theoryContent": "Kung ang Pentatonic ay balangkas ng bahay, ang 7-Note Major Scale ang kumpletong bahay na may pader, bintana, at bubong!\n\n1. ANG MAJOR SCALE FORMULA:\nWhole - Whole - Half - Whole - Whole - Whole - Half\n(W - W - H - W - W - W - H)\nSa gitara:\n• Whole step = 2 frets\n• Half step = 1 fret\n\n2. ANG 3-NOTES-PER-STRING (3NPS) SYSTEM:\nPara sa modernong lead guitar at shredding, ang pinakamagandang paraan ng pag-aaral ng major scale ay ang 3NPS system:\nBawat kuwerdas ay may eksaktong tatlong nota!\nBakit? Dahil nagbibigay ito ng:\n• Pantay na picking mechanics (Down-Up-Down sa bawat kuwerdas).\n• Napakagandang simetriko para sa bilis at legato runs.\n• Madaling pag-navigate sa 7 modes ng gitara!",
        "codeSnippet": "// G MAJOR SCALE (3-NOTES-PER-STRING POSITION 1):\n// G - A - B - C - D - E - F# - G\n\ne|---------------------------------5-7-8-|\nB|---------------------------5-7-8-------|\nG|---------------------4-5-7-------------|\nD|---------------4-5-7-------------------|\nA|---------3-5-7-------------------------|\nE|---3-5-7-------------------------------|\n   Fret 3  Fret 5  Fret 7\n\nPansinin: Eksaktong 3 nota sa bawat kuwerdas!\nAlternate picking pattern: D-U-D | U-D-U | D-U-D...",
        "activity": {
          "title": "Gawaing Praktikal 4.2: 3NPS Major Scale Fluidity Drill",
          "instructions": [
            "Tugtugin ang G Major 3NPS scale pataas at pababa sa 70 BPM.",
            "Gamitin ang purong alternate picking sa unang run.",
            "Sa pangalawang run, pumitas lamang sa unang nota ng bawat kuwerdas at gamitin ang hammer-ons para sa kasunod na dalawang nota (Pick-Hammer-Hammer).",
            "Pakinggan ang daloy ng fluid legato runs."
          ],
          "starterCode": "Pattern: 3-5-7 sa 6th & 5th strings, 4-5-7 sa 4th & 3rd strings, 5-7-8 sa 2nd & 1st strings.",
          "expectedOutcome": "Kabisadong 3NPS layout na may kakayahang lumipat sa pagitan ng alternate picking at legato."
        },
        "exam": {
          "title": "Pagsusulit 4.2: Major Scale Theory",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-4-2-1",
              "question": "Ano ang step-interval formula para sa Major Scale?",
              "options": [
                "Whole - Whole - Half - Whole - Whole - Whole - Half (W-W-H-W-W-W-H)",
                "Whole - Half - Whole - Whole - Half - Whole - Whole",
                "Half - Half - Half - Half - Half - Half - Half",
                "Whole - Whole - Whole - Whole - Whole - Whole - Whole"
              ],
              "correctIndex": 0,
              "explanation": "Ang W-W-H-W-W-W-H ay ang unibersal na formula ng diatonic major scale."
            },
            {
              "id": "q-lg-4-2-2",
              "question": "Bakit paboritong gamitin ng mga rock at shred guitarists ang 3-Notes-Per-String (3NPS) scale system?",
              "options": [
                "Dahil may pare-parehong 3 nota sa bawat kuwerdas na nagpapadali sa picking patterns at mabilis na runs",
                "Dahil 3 kuwerdas lang ang ginagamit",
                "Dahil nagbabawas ito ng frets sa gitara",
                "Dahil hindi na kailangan mag-tono"
              ],
              "correctIndex": 0,
              "explanation": "Ang pare-parehong 3 notes per string ay lumilikha ng muscle memory symmetry para sa mabilis na paglipat ng kuwerdas."
            },
            {
              "id": "q-lg-4-2-3",
              "question": "Ano ang relasyon ng Natural Minor scale sa Major scale?",
              "options": [
                "Ito ay nagsisimula sa 6th degree (La) ng Major scale at nagtataglay ng parehong mga nota",
                "Wala silang anumang kinalaman sa isa't isa",
                "Ito ay mas mataas ng 4 frets",
                "Ito ay puro sharps lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang Relative Natural Minor (Aeolian mode) ay nagsisimula sa ika-6 na nota ng Major scale."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.2: Major Scale Diatonic Map",
          "sheetName": "Major_Scale_Log",
          "description": "Subaybayan ang pag-master ng 3NPS patterns sa iba't ibang keys.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "I-map out ang G Major at D Major 3NPS scales.",
            "Itala ang bilis gamit ang metronome (8th notes at 16th notes).",
            "I-verify ang intonation ng half-steps (B-C at F#-G)."
          ],
          "rubric": [
            {
              "criteria": "Accurate 3NPS Finger Mechanics",
              "points": 50
            },
            {
              "criteria": "Clean Hand Shifting Across Strings",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-4-3",
        "title": "Aralin 4.3: Modes for Pinoy Rock & Fusion: Dorian & Mixolydian Flavors",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=zgJ-884RkV8",
        "videoTitle": "How to apply Scales/Modes in SOLO (Tagalog) - Angelo C. Leyva",
        "objective": "Alamin ang hiwaga ng Guitar Modes: Gamitin ang Dorian mode (ang signature jazz/rock minor sound ni Carlos Santana) at Mixolydian mode (ang classic Pinoy Southern rock & blues vibe).",
        "theoryContent": "Huwag matakot sa salitang \"Modes\"! Ang mode ay simpleng pagtugtog ng parehong scale mula sa magkaibang simula upang magbunga ng kakaibang kulay at emosyon.\n\n1. DORIAN MODE (THE SOPHISTICATED MINOR):\n• Formula: 1 - 2 - b3 - 4 - 5 - 6 - b7\n• Ano ang pinagkaiba sa Natural Minor? Ang NATURAL 6TH (Major 6th)!\nSa halip na malungkot at madilim na b6, ang natural 6th ay nagbibigay ng maaliwalas, funky, at jazzy-rock vibe (tunog Santana at Pinoy fusion).\nHalimbawa sa A Dorian: Ang nota ay F# (sa halip na F). Tugtugin ito sa ibabaw ng Am7 o D7 chord!\n\n2. MIXOLYDIAN MODE (THE BLUESY DOMINANT ROCK):\n• Formula: 1 - 2 - 3 - 4 - 5 - 6 - b7\n• Ano ang pinagkaiba sa Major scale? Ang FLAT 7TH (b7)!\nKung ang normal na Major scale ay parang pambatang nursery rhyme o makalumang kanta dahil sa sharp 7 (ti), ang flat 7th ng Mixolydian ay nag-aalis ng cheesy sound at nagbibigay ng classic rock 'n roll attitude!\nHalimbawa sa A Mixolydian: A - B - C# - D - E - F# - G (nota: G sa halip na G#). Perfect sa ibabaw ng A7 blues progression!",
        "codeSnippet": "// A DORIAN SIGNATURE LICK (CHARACTER NOTE = F# on B string 7th fret):\n\ne|----------------------------------------------------|\nB|-------5---7[Major 6th!]~~~---5---------------------|\nG|-5h7------------------------------7p5---5h7~~~------|\nD|--------------------------------------7-------------|\n\n// A MIXOLYDIAN SIGNATURE LICK (CHARACTER NOTE = G on E string 3rd fret):\n\ne|-------5---3[b7th!]~~~------------------------------|\nB|-5h7-------------------5----------------------------|\nG|---------------------------7p5---6[Major 3rd]~~~----|\nD|-------------------------------7--------------------|",
        "activity": {
          "title": "Gawaing Praktikal 4.3: Dorian vs. Mixolydian Vamp Jam",
          "instructions": [
            "Mag-play ng Am7 to D7 backing track (Santana groove). Tugtugin ang A Dorian mode at i-highlight ang F# note sa B string 7th fret.",
            "Mag-play ng A7 to D7 blues rock backing track. Tugtugin ang A Mixolydian mode at i-highlight ang G note at C# note.",
            "Pansinin kung paano nagiging propesyonal at makulay ang solo kumpara sa purong pentatonic."
          ],
          "starterCode": "Dorian Focus: Am7 -> Target F# note.\nMixolydian Focus: A7 -> Target G note & C# note.",
          "expectedOutcome": "Malinaw na pagkilala sa signature color notes ng Dorian at Mixolydian modes."
        },
        "exam": {
          "title": "Pagsusulit 4.3: Modes sa Lead Guitar",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-4-3-1",
              "question": "Ano ang 'characteristic note' ng Dorian mode na nagpapaiba rito sa karaniwang Natural Minor scale?",
              "options": [
                "Ang Natural 6th (Major 6th) interval",
                "Ang Flat 2nd",
                "Ang Flat 5th",
                "Ang Augmented 4th"
              ],
              "correctIndex": 0,
              "explanation": "Ang Major 6th ang nagbibigay sa Dorian ng kanyang maaliwalas at jazzy-rock sophistication kumpara sa madilim na Aeolian."
            },
            {
              "id": "q-lg-4-3-2",
              "question": "Ano ang pinagkaiba ng Mixolydian mode sa standard Major scale?",
              "options": [
                "Nagtataglay ito ng Flat 7th (b7) sa halip na Major 7th",
                "Nagtataglay ito ng Minor 3rd",
                "Walang 5th note ang Mixolydian",
                "Puro half-steps lamang ito"
              ],
              "correctIndex": 0,
              "explanation": "Ang b7 (flat seven) ang nag-aalis sa leading tone tension ng major scale at nagbibigay ng classic bluesy dominant rock feel."
            },
            {
              "id": "q-lg-4-3-3",
              "question": "Sa anong uri ng chord progression pinaka-akmang gamitin ang Mixolydian mode?",
              "options": [
                "Sa Dominant 7th chord progressions (tulad ng A7 - D7 - E7)",
                "Sa malungkot na ballad na puro minor chords",
                "Sa mga kanta na walang gitara",
                "Sa mga kanta na puro diminished chords"
              ],
              "correctIndex": 0,
              "explanation": "Ang 1 - 3 - 5 - b7 formula ng Mixolydian ay 100% tumutugma sa notes ng Dominant 7th chord."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.3: Modal Color Note Audit",
          "sheetName": "Modes_Log",
          "description": "Subaybayan ang pag-target sa characteristic color notes sa modes.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "I-record ang 1-minutong A Dorian solo sa ibabaw ng Am7-D9 groove.",
            "I-record ang 1-minutong A Mixolydian solo sa ibabaw ng A7-D7 groove.",
            "I-rate kung ilang beses mo sinadyang i-land ang solo sa signature modal notes."
          ],
          "rubric": [
            {
              "criteria": "Accurate Modal Color Note Targeting",
              "points": 50
            },
            {
              "criteria": "Musical Phrasing & Stylistic Authenticity",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-4-4",
        "title": "Aralin 4.4: Target Notes & Chord Tone Soloing: Landing on 3rds & 7ths Cleanly",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=1SNHzB4MqbQ",
        "videoTitle": "Target Note explained (Tagalog) - Markmusic",
        "objective": "I-outline ang chords sa iyong solo: Matutunan kung paano mag-target ng 3rd at 7th notes sa eksaktong sandali ng pagpalit ng chord sa background, upang marinig ang kanta kahit walang kasamang banda.",
        "theoryContent": "Ang pinakamalaking pagkakaiba ng amateur soloist sa isang master:\nAng amateur ay tumutugtog ng scale at umaasang may tatamang maganda.\nAng MASTER ay sumusunod sa chords at 'nag-a-outline' ng harmonic changes gamit ang TARGET NOTES!\n\n1. ANG KAPANGYARIHAN NG 3RD INTERVAL:\nAng 3rd note ng kahit anong chord ang nagdidikta kung ito ay Major o Minor:\n• Sa C Major (C - E - G): Ang E ang 3rd.\n• Sa F Major (F - A - C): Ang A ang 3rd.\n• Sa G Major (G - B - D): Ang B ang 3rd.\nKapag lumipat ang rhythm mula C papuntang F, at lumapag ang iyong unang nota sa A (3rd of F), mararamdaman agad ng nakikinig na sumasayaw ang iyong solo sa musika!\n\n2. CHORD TONE SOLOING CHECKLIST:\n• Alamin ang chord progression (Halimbawa: C -> Am -> F -> G).\n• Isulat ang 3rd note ng bawat chord:\n  - C: E note\n  - Am: C note\n  - F: A note\n  - G: B note\n• Mag-solo gamit ang kahit anong scale licks, ngunit sa eksaktong beat 1 ng bawat bagong chord, i-land ang iyong nota sa target 3rd!",
        "codeSnippet": "// CHORD TONE TARGETING EXAMPLE OVER C -> F:\n\nBar 1: Chord = C Major (Target Note = E)\ne|----------------------------------------------------|\nB|-------5--------------------------------------------|\nG|-5h7-------5~~~-------------------------------------|\nD|-----------------(Land on E note on G string 9th fret or 1st string open)\n\nBar 2: Chord = F Major (Target Note = A)\ne|----------------------------------------------------|\nB|-------6--------------------------------------------|\nG|-7/9-------5/7~~~-----------------------------------|\nD|------------------(Land on A note on G string 2nd or D string 7th fret!)",
        "activity": {
          "title": "Gawaing Praktikal 4.4: The 3rd-Degree Landing Drill",
          "instructions": [
            "Mag-play ng simpleng C - G - Am - F backing track.",
            "Tukuyin ang mga 3rd notes: E (para sa C), B (para sa G), C (para sa Am), A (para sa F).",
            "Bumuo ng mga maiikling 4-note phrases kung saan ang huling nota ay laging tatama sa eksaktong 3rd ng kasalukuyang chord.",
            "Pakinggan kung paano nagiging mahigpit at 'nakadikit' sa chords ang iyong solo."
          ],
          "starterCode": "Chords: | C | G | Am | F |\nTargets: E -> B -> C -> A",
          "expectedOutcome": "Matinding harmonic connection kung saan naririnig ang chord progression sa pamamagitan lamang ng lead solo."
        },
        "exam": {
          "title": "Pagsusulit 4.4: Target Notes & Chord Tones",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-4-4-1",
              "question": "Aling chord tone interval ang may pinakamalakas na kapangyarihang mag-define sa emosyon (Major o Minor) ng isang chord kapag ginamit bilang target note?",
              "options": [
                "Ang 3rd degree ng chord",
                "Ang 5th degree",
                "Ang octave lamang",
                "Ang open string"
              ],
              "correctIndex": 0,
              "explanation": "Ang 3rd degree ang nagtatakda kung Major (bright) o Minor (dark) ang chord, kaya ito ang pinakamabisang target note sa soloing."
            },
            {
              "id": "q-lg-4-4-2",
              "question": "Kung ang accompaniment ay lumipat sa G Major chord (G-B-D), anong nota ang pinakamagandang i-target para sa isang matamis na major resolution?",
              "options": [
                "B note (ang Major 3rd ng G)",
                "C# note",
                "F natural note",
                "Eb note"
              ],
              "correctIndex": 0,
              "explanation": "Ang B note ang 3rd ng G Major chord na nagdudulot ng instant harmonic agreement at melodic sweetness."
            },
            {
              "id": "q-lg-4-4-3",
              "question": "Ano ang ibig sabihin ng 'Soloing Over Chord Changes'?",
              "options": [
                "Ang aktibong pag-angkop ng solo licks upang lumapag sa chord tones ng bawat nagpapalit na chord sa saliw",
                "Ang pagpapalit ng gitara sa bawat chord",
                "Ang pagtugtog ng pinakamabilis na scale nang walang pakialam sa chords",
                "Ang paghinto kapag nagpalit ng chord"
              ],
              "correctIndex": 0,
              "explanation": "Ang chord tone soloing ay nangangahulugang ang solo ay nakatugma at nagpapakita sa bawat chord movement sa background."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 4.4: Target Notes Progression Sheet",
          "sheetName": "Target_Notes",
          "description": "Subaybayan ang pag-target sa 3rds at 7ths sa isang 4-chord progression.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Piliin ang paboritong OPM o worship chord progression.",
            "Ilista ang 3rd at 7th notes para sa bawat bar.",
            "I-record ang solo demo na nagpapakita ng 100% clean landing sa target notes."
          ],
          "rubric": [
            {
              "criteria": "Precision of Target Note Landing on Downbeat",
              "points": 50
            },
            {
              "criteria": "Melodic Quality of Connecting Phrases",
              "points": 50
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 5: Contemporary Church Praise & Worship Lead Guitar (Swells, Delays & Hooks)",
    "overview": "Ang sining ng modernong church electric guitarist: Paggawa ng propesyonal na worship tone gamit ang overdrive gain staging, ambient volume swells gamit ang volume pedal o knob, dotted 8th-note delay tap tempo mechanics, at paglikha ng anthemic worship hooks at dynamic climax solos sa pananambahan.",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-lead-5-1",
        "title": "Aralin 5.1: Worship Lead Tonecraft: Overdrive Stacking & Signal Chain Architecture",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=w9RL7uoZPZw",
        "videoTitle": "3 Easy Electric Guitar Tricks for Worship - Bryan Yi Guitar",
        "objective": "Buuin ang propesyonal na contemporary worship electric guitar tone: Gain staging (Stage 1 transparent drive + Stage 2 lead boost), pickup selection, at tamang EQ upang bumaon sa church mix nang hindi nakakarindi.",
        "theoryContent": "Ang contemporary worship lead guitar (tulad ng Hillsong, Bethel, Elevation, at Pinoy Church ministries) ay kilala sa buo, mainit, at makapal na tono.\n\n1. THE 2-STAGE OVERDRIVE STACKING:\nHuwag gumamit ng isang heavy metal distortion na sobrang ingay. Sa halip, mag-stack ng dalawang banayad na pedals:\n• Stage 1 (Edge of Breakup / Transparent Drive): Tulad ng Klon style, Bluesbreaker, o Morning Glory. Banayad lang ang dumi kapag malakas ang pitas; malinis kapag banayad.\n• Stage 2 (Mid-Humump Lead Boost): Tulad ng Tube Screamer (TS9/TS808) o Timmy. May boost sa midrange frequencies (700Hz - 1kHz) upang tumagos ang solo sa boses ng worship leader at keyboards nang hindi kailangang maging nakakabinging malakas!\n\n2. PICKUP SELECTION:\n• Bridge Pickup + Tone Rolled Down to 7: Para sa matalas at anthemic lead hooks.\n• Neck Pickup: Para sa mainit at madulas na solo phrases.\n• Middle + Bridge (Position 2 sa Strat): Para sa mala-bell chime na ambient arpeggios.",
        "codeSnippet": "// WORSHIP ELECTRIC GUITAR SIGNAL CHAIN:\n\nGuitar -> Tuner -> Compressor -> Stage 1 Overdrive (Low Gain)\n       -> Stage 2 Overdrive (Mid-Boost Lead) -> Volume Pedal\n       -> Dotted 8th Delay -> Stereo Reverb (Shimmer / Hall)\n       -> Amp (Clean Tube / Vox AC30 / Fender Deluxe Reverb style)\n\nPansinin: Ang Volume Pedal ay inilalagay PAGKATAPOS ng Overdrive\nngunit BAGO ang Delay at Reverb para sa mahahabang ambient trails!",
        "activity": {
          "title": "Gawaing Praktikal 5.1: 2-Stage Gain Stacking Setup",
          "instructions": [
            "I-set ang iyong amplifier o multi-effects processor sa isang malinis na 'edge-of-breakup' tone.",
            "I-engage ang Stage 1 drive para sa rhythmic arpeggios.",
            "I-kick in ang Stage 2 mid-boost para marinig kung paano lumalabas sa harap ng mix ang bawat single-note solo line.",
            "I-record ang paghambing ng tunog."
          ],
          "starterCode": "Amp: Vox AC30 / Fender Clean.\nStage 1: Gain 9 o'clock, Volume 1 o'clock.\nStage 2: Gain 12 o'clock, Tone 1 o'clock, Volume 12 o'clock.",
          "expectedOutcome": "Mainit, may sustain, at malinis na lead tone na may sapat na midrange upang bumakat sa church mix."
        },
        "exam": {
          "title": "Pagsusulit 5.1: Worship Tonecraft",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-5-1-1",
              "question": "Bakit inirerekomenda ang pag-stack ng dalawang banayad na overdrive pedals sa halip na isang high-gain distortion sa worship music?",
              "options": [
                "Upang mapanatili ang note clarity, dynamic touch sensitivity, at mainit na sustain nang walang maingay na fizz",
                "Dahil mas mahal ang dalawang pedal",
                "Dahil bawal ang distortion sa loob ng simbahan",
                "Upang maging mas mabilis magpalit ng kanta"
              ],
              "correctIndex": 0,
              "explanation": "Ang gain staging ng dalawang low-to-medium overdrives ay nagbibigay ng dynamic headroom at kalinisan sa bawat nota."
            },
            {
              "id": "q-lg-5-1-2",
              "question": "Saan pinakamagandang ilagay ang Volume Pedal sa signal chain para sa ambient worship guitar?",
              "options": [
                "Pagkatapos ng Overdrive ngunit bago ang Delay at Reverb",
                "Sa pinakadulo pagkatapos ng Reverb",
                "Bago pumasok sa Tuner",
                "Sa loob ng speaker cabinet"
              ],
              "correctIndex": 0,
              "explanation": "Kapag nasa bago ng delay/reverb, ang pag-close ng volume pedal ay hindi puputol sa mahahabang delay repeats at reverb ambient trails."
            },
            {
              "id": "q-lg-5-1-3",
              "question": "Anong frequency range ang pinalalakas ng Tube Screamer style pedals upang tumagos ang gitara sa church mix?",
              "options": [
                "Midrange frequencies (humigit-kumulang 700Hz - 1kHz)",
                "Sub-bass (20Hz - 50Hz)",
                "Ultra-high frequencies (18kHz)",
                "Walang binabago"
              ],
              "correctIndex": 0,
              "explanation": "Ang midrange boost ang susi upang marinig ang lead guitar sa ibabaw ng bass, drums, at vocal mix."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.1: Worship Tone Preset Checklist",
          "sheetName": "Worship_Tone",
          "description": "I-audit ang iyong pedalboard o multi-effects worship tone preset.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Ilista ang iyong drive pedals at drive settings.",
            "I-test ang dynamic response mula light picking hanggang heavy picking.",
            "I-record ang soundclip ng Stage 1 vs Stage 1+2."
          ],
          "rubric": [
            {
              "criteria": "Clean Dynamic Sensitivity (No Harsh Clipping)",
              "points": 50
            },
            {
              "criteria": "Appropriate Midrange Presence for Band Mix",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-5-2",
        "title": "Aralin 5.2: Ambient Volume Swells & Shimmer Textures (Volume Knob & Pedal Control)",
        "duration": "20 mins",
        "videoUrl": "https://www.youtube.com/watch?v=FhJx-W4NGzA",
        "videoTitle": "Swells in Worship Music | Electric Guitar Tutorial - The Church Collective",
        "objective": "Kabisaduhin ang ethereal volume swell technique: Pagtanggal sa pick attack gamit ang volume knob o pedal kasabay ng malalaking reverb at delay trails upang lumikha ng mala-pad at mala-violin na textures habang nananalangin.",
        "theoryContent": "Sa mga tahimik na sandali ng pagsamba (altar call, prayer time, o intros), ang electric guitar ay maaaring maging kasing-ganda ng isang string orchestra o church synth pad.\n\n1. PAANO GUMAGANA ANG VOLUME SWELL:\nKapag pumitas ka sa gitara nang regular, may maririnig na matigas na \"CLACK\" (pick attack).\nSa Volume Swell:\n• Zero Volume: Bago pumitas, nakasara ang volume (0).\n• Strike the String: Pitasin ang nota o triad habang tahimik ang gitara.\n• Swell In: Mabagal at makinis na buksan ang volume patungong 10 (gamit ang pinky sa volume knob o dahan-dahang pagtapak sa volume pedal).\nAng resulta: Nawawala ang matigas na kuko o pick attack, at ang naririnig lamang ay ang umaalong simula ng nota tulad ng violin o cello!\n\n2. DUAL DELAY + SHIMMER REVERB PAIRING:\nKapag pumasok ang swell sa isang Stereo Cloud Reverb na may 4-6 segundong decay at Dotted 8th delay, ang nota ay lulutang sa hangin at magpapatuloy kahit lumipat ka na sa susunod na chord!",
        "codeSnippet": "// 3-NOTE WORSHIP SWELL TRIAD VOICINGS (KEY OF D MAJOR):\n// Swell in sa bawat bar: (Volume 0 -> Strike -> Swell to 10 -> Volume to 0 -> Repeat)\n\nBar 1: D Major Swell\ne|---14~~~---| (F#)\nB|---15~~~---| (D)\nG|---14~~~---| (A)\n\nBar 2: Bm Swell\ne|---14~~~---| (F#)\nB|---15~~~---| (D)\nG|---16~~~---| (B)\n\nBar 3: G Major Swell\ne|---15~~~---| (G)\nB|---15~~~---| (D)\nG|---16~~~---| (B)\n\nBar 4: A Major Swell\ne|---12~~~---| (E)\nB|---14~~~---| (C#)\nG|---14~~~---| (A)",
        "activity": {
          "title": "Gawaing Praktikal 5.2: The Prayer Underscore Ambient Swell",
          "instructions": [
            "I-on ang iyong Reverb na may mahabang decay (5+ seconds) at Dotted 8th delay.",
            "Isara ang volume knob gamit ang kanang pinky finger.",
            "Pitasin ang D Major triad sa 1st, 2nd, at 3rd strings.",
            "Dahan-dahang i-roll ang pinky upang buksan ang volume sa loob ng 2 beats.",
            "Isara muli ang volume, lumipat sa Bm triad, at ulitin ang swell.",
            "Pakinggan kung paano pumupuno ang mala-anghel na pad sa background."
          ],
          "starterCode": "Chords: | D | Bm | G | A |\nTechnique: Zero attack -> 2-beat swell -> Smooth decay.",
          "expectedOutcome": "Walang maririnig na pick attack, puro makinis at ethereal ambient soundscapes."
        },
        "exam": {
          "title": "Pagsusulit 5.2: Ambient Swells",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-5-2-1",
              "question": "Ano ang pangunahing layunin ng pag-alis sa pick attack sa pamamagitan ng volume swell?",
              "options": [
                "Upang maging mala-violin, cello, o synth pad ang tunog ng gitara na walang matigas na percussive click",
                "Upang makatipid sa kuryente",
                "Dahil bawal marinig ang pick sa simbahan",
                "Upang mas mabilis mag-solo"
              ],
              "correctIndex": 0,
              "explanation": "Ang pagtatago sa transient attack ay nagbibigay sa instrumento ng bowed string o synthesizer pad quality."
            },
            {
              "id": "q-lg-5-2-2",
              "question": "Kailan dapat pitasin ang kuwerdas sa isang volume knob swell?",
              "options": [
                "Habang nakasara (0) ang volume, bago dahan-dahang buksan patungong 10",
                "Habang nakabukas nang todo ang volume",
                "Pagkatapos buksan ang volume",
                "Hindi na kailangang pitasin"
              ],
              "correctIndex": 0,
              "explanation": "Ang pagpitas habang nakasara ang volume ang nagtatanggal sa matigas na pick transient bago pumasok ang sustain."
            },
            {
              "id": "q-lg-5-2-3",
              "question": "Anong uri ng effect ang pinaka-kritikal na kasama ng volume swells upang lumikha ng mahabang ambient trails?",
              "options": [
                "Malaking Hall / Shimmer Reverb at Dotted 8th Delay",
                "Heavy Fuzz pedal",
                "Wah-wah pedal",
                "Octave down pedal lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang malalaking time-based effects (delay at reverb) ang sumasalo at nagpapatuloy sa swell upang maging makapal na ambient wash."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.2: Ambient Swell Smoothness Rubric",
          "sheetName": "Swell_Log",
          "description": "I-audit ang kawalan ng pick transients sa iyong volume swells.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Mag-record ng 4-bar prayer underscore swell progression.",
            "I-audit kung may nakalusot na maririnig na pick attack 'tick'.",
            "Suriin ang continuity ng reverb trails sa bawat chord switch."
          ],
          "rubric": [
            {
              "criteria": "Complete Elimination of Pick Attack Transient",
              "points": 50
            },
            {
              "criteria": "Seamless Swell Timing with Song Tempo",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-5-3",
        "title": "Aralin 5.3: Dotted 8th-Note Delay Mastery & Tap-Tempo Syncopation",
        "duration": "22 mins",
        "videoUrl": "https://www.youtube.com/watch?v=C1c9FlNMmOw",
        "videoTitle": "Dotted 8th Delay sa Pockverb, pwede pala | Pinoy Guitar Tutorial - Jeff Jovillar Vlogs",
        "objective": "Kabisaduhin ang iconic na 'U2 / The Edge' at modern worship signature sound: Pag-sync ng Dotted 8th-note delay (3/16 note) sa tap tempo, pagtugtog ng tuwid na 8th notes, at pagpapatunog ng galloping syncopated rhythmic lead lines.",
        "theoryContent": "Ang Dotted 8th Delay ang itinuturing na pinakamahalagang rhythmic weapon ng contemporary worship guitarist!\n\n1. ANG MATHEMATICS NG DOTTED 8TH:\nKapag tumutugtog ka ng tuwid na 8th notes (1 and 2 and 3 and 4 and), at ang delay mo ay naka-set sa DOTTED 8TH (tatlong 16th notes ang tagal ng repeat), ang bawat repeat ay babagsak sa pagitan ng iyong mga pinipitas na nota!\nAng resulta: Ang simpleng 4 na nota na pinitas mo ay magmumukhang 8 o 12 masasalimuot at tumatakbong nota na parang dalawang gitarista ang sabay na tumutugtog nang perpekto!\n\n2. HOW TO TAP TEMPO:\n• Pindutin ang tap tempo switch nang 4 na beses kasabay ng bass drum o snare ng kanta (1 - 2 - 3 - 4).\n• Siguraduhing naka-set sa DOTTED EIGHTH (madalas may simbolo na 8. o dotted quaver) ang subdivision knob.\n• Mix level: Ilagay sa humigit-kumulang 40-50% (dapat halos kasing-lakas ng orihinal na nota ang unang repeat).\n• Feedback/Repeats: 3 hanggang 4 na repeats lamang upang hindi maging maputik.",
        "codeSnippet": "// THE CLASSIC DOTTED 8TH ANTHEMIC WORSHIP RIFF:\n// Key of D (Tempo = 72 BPM, Delay = Dotted 8th / 312 ms)\n\ne|----------------------------------------------------|\nB|----10------10------10------10------10------10------|\nG|-11------11------11------11------11------11---------|\nD|----------------------------------------------------|\n   Pick tuwid na 8th notes lamang! \n   Ang delay pedal ang bahalang pumuno ng syncopated groove!",
        "activity": {
          "title": "Gawaing Praktikal 5.3: The Dotted 8th Gallop Synchronization",
          "instructions": [
            "I-set ang metronome sa 75 BPM.",
            "I-tap ang tempo sa iyong delay pedal at i-set sa Dotted 8th mode.",
            "Tugtugin ang tuwid na steady 8th notes sa G at B strings (halimbawa: 11 sa G, 10 sa B).",
            "Pakinggan kung paano lumilikha ang delay ng galloping 16th-note syncopation nang hindi sumasalungat sa beat.",
            "I-adjust ang pick dynamics upang manatiling matatag ang ritmo."
          ],
          "starterCode": "Tempo: 75 BPM -> Delay Subdivision: Dotted 8th.\nRiff: G|-11-| B|-10-| G|-11-| B|-10-|",
          "expectedOutcome": "Perpektong syncopated rhythmic gallop kung saan nagtatagpo ang picking at delay repeats sa groove pocket."
        },
        "exam": {
          "title": "Pagsusulit 5.3: Dotted 8th Delay Mechanics",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-5-3-1",
              "question": "Ano ang rhythmic illusion na nalilikha kapag tumugtog ka ng tuwid na 8th notes gamit ang Dotted 8th delay?",
              "options": [
                "Nagbubunga ito ng mabilis, maalon, at galloping 16th-note syncopation na parang dalawang gitara ang sabay na tumutugtog",
                "Nagiging mabagal ang kanta",
                "Nawawala ang tono ng gitara",
                "Nagiging sintunado ang boses ng mang-aawit"
              ],
              "correctIndex": 0,
              "explanation": "Dahil ang repeat ay bumabagsak sa off-beat 16th note, napupuno nito ang mga patlang sa pagitan ng iyong mga pitas para sa makapal na rhythmic texture."
            },
            {
              "id": "q-lg-5-3-2",
              "question": "Ilang repeats (feedback setting) ang inirerekomenda para sa dotted 8th lead riff upang hindi maging maputik ang tunog?",
              "options": [
                "Humigit-kumulang 3 hanggang 4 na repeats",
                "50 repeats hanggang mag-feedback nang tuluy-tuloy",
                "1 repeat lamang",
                "Walang repeats"
              ],
              "correctIndex": 0,
              "explanation": "Ang 3-4 repeats ay nagbibigay ng kinakailangang ritmo nang hindi nagiging putik o lumulunod sa kasunod na chord changes."
            },
            {
              "id": "q-lg-5-3-3",
              "question": "Bakit mahalagang i-tap ang tempo ng delay pedal nang eksaktong kasabay ng drummer ng simbahan?",
              "options": [
                "Dahil kapag kahit bahagyang out of tempo ang delay, sasablay ang syncopation at magiging magulo ang tunog sa buong worship band",
                "Dahil magagalit ang pastor",
                "Para mag-ring ang telepono",
                "Walang kinalaman ang tempo sa delay"
              ],
              "correctIndex": 0,
              "explanation": "Ang rhythmic delay ay nangangailangan ng 100% mathematical synchronization sa tempo ng kanta upang maging epektibo ang groove."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.3: Dotted 8th Tap Synchronization Log",
          "sheetName": "Delay_Sync_Log",
          "description": "Subaybayan ang iyong tempo lock accuracy sa Dotted 8th delay.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Subukan ang dotted 8th riff sa 3 magkakaibang tempos: 68 BPM, 76 BPM, at 84 BPM.",
            "I-record ang audio sample sa bawat tempo.",
            "Suriin kung nagla-lock in ang repeats sa metronome downbeats."
          ],
          "rubric": [
            {
              "criteria": "Tempo Lock & Subdivision Accuracy",
              "points": 50
            },
            {
              "criteria": "Balance Between Dry Pick Attack and Delay Repeats",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-5-4",
        "title": "Aralin 5.4: Anthemic Worship Hooks & Dynamic Soloing sa Simbahan",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=a6tn3giUiIc",
        "videoTitle": "Karapat-Dapat Guitar Solo | Hope Filipino Worship - Lee Music",
        "objective": "Buuin ang nakapagpapatindig-balahibong worship solos: Pagbuo ng memorable melodic hooks sa intro/interlude, pag-iwas sa walang kabuluhang shredding sa simbahan, at pag-angat ng dynamics mula banayad na bulong patungo sa umaapaw na papuri.",
        "theoryContent": "Ang lead guitar sa church worship ministry ay may natatanging layunin: HINDI ito para magyabang o magpasikat ng bilis, kundi para I-POINT ANG PUSO NG MGA TAO SA DIYOS at suportahan ang mensahe ng awit.\n\n1. THE HOOK-FIRST PHILOSOPHY:\nBago ka mag-solo, tanungin ang sarili: \"Kaya bang kantahin o sipulan ng lola o bata sa congregation ang lead line ko?\"\nAng pinakamagagandang worship intros (tulad ng Sukdulang Biyaya, Karapat-dapat, at Dakilang Katapatan) ay may simple, makapangyarihan, at paulit-ulit na melodic hook na tumatatak sa isip.\n\n2. DYNAMIC ARC (PAGPAPATONG NG EMOSYON):\n• Verse 1: Manatiling tahimik o mag-arpeggiate lamang sa malinis na tono.\n• Chorus 1: Maglagay ng banayad na ambient swells.\n• Instrumental / Bridge: Ipasok ang anthemic lead riff gamit ang Stage 1 overdrive at dotted delay.\n• Solo / Final Chorus Climax: I-kick in ang Stage 2 lead boost, itaas ang solo nang isang octave gamit ang matataas na frets (12th to 17th frets), maglagay ng passionate whole-step bends at singing vibrato!",
        "codeSnippet": "// ANTHEMIC WORSHIP HOOK (KEY OF G MAJOR):\n// Melodiko, madaling kantahin, at makapangyarihan\n\ne|-------15-------------------------------------------|\nB|-15/17----17\\15---12h15p12--------------------------|\nG|-----------------------------14b16r14p12---12h14~~~-|\nD|-----------------------------------------14---------|\n   Singing melody with deep, expressive vibrato!",
        "activity": {
          "title": "Gawaing Praktikal 5.4: 16-Bar Worship Dynamic Soloing Arc",
          "instructions": [
            "Magpatugtog ng Filipino Worship instrumental track (G - D/F# - Em7 - C).",
            "Bars 1-4: Simulan sa banayad na 3-note melodic motif sa ibabang octaves.",
            "Bars 5-8: Ulitin ang motif ngunit lagyan ng mga palamuting hammer-on at slides.",
            "Bars 9-12: Umakyat sa 12th hanggang 15th frets, i-on ang lead boost, at maglagay ng passionate bends.",
            "Bars 13-16: Bumalik nang banayad sa tonic root note upang ibalik ang pokus sa worship leader."
          ],
          "starterCode": "Structure: Soft Motif -> Development -> Screaming Climax Bend -> Gentle Resolution.",
          "expectedOutcome": "Emosyonal at may direksyong solo na sumusuporta sa daloy ng pananambahan sa halip na maging distraction."
        },
        "exam": {
          "title": "Pagsusulit 5.4: Worship Soloing & Dynamics",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-5-4-1",
              "question": "Ano ang pangunahing tungkulin ng lead guitarist sa loob ng church worship team?",
              "options": [
                "Ang maglingkod sa kanta at lumikha ng mga melodic hook at atmospheres na naglalapit sa puso ng mga tao sa pananambahan",
                "Ang magpatugtog ng pinakamabilis na shred solo upang magpalakpakan ang mga tao",
                "Ang takpan ang boses ng worship leader",
                "Ang tumugtog nang mas malakas kaysa sa buong banda"
              ],
              "correctIndex": 0,
              "explanation": "Ang puso ng worship musician ay ministeryo at pagpapakumbaba—ang bawat nota ay iniaalay upang maglingkod sa awit at sa kongregasyon."
            },
            {
              "id": "q-lg-5-4-2",
              "question": "Ano ang katangian ng isang epektibong worship lead hook sa intro o interlude?",
              "options": [
                "Ito ay melodiko, memorable, at kayang kantahin o sipulan ng karaniwang tao",
                "Ito ay binubuo ng 50 magkakaibang mabilis na nota na walang inuulit",
                "Ito ay walang tono",
                "Ito ay puro ingay ng feedback"
              ],
              "correctIndex": 0,
              "explanation": "Ang pinakamalakas na lead hooks ay mala-vocal melodies na madaling matandaan at nagbibigay ng pagkakakilanlan sa awit."
            },
            {
              "id": "q-lg-5-4-3",
              "question": "Paano bumubuo ng 'Dynamic Arc' sa isang solo habang papalapit ang climax ng kanta?",
              "options": [
                "Nagsisimula sa simple at banayad sa lower octaves bago unti-unting umakyat sa mas matataas na frets, mas makapal na drive, at passionate bends sa tugatog",
                "Tumutugtog nang pinakamalakas mula una hanggang huling segundo",
                "Puro tapping lamang mula simula",
                "Biglang humihinto sa gitna ng solo"
              ],
              "correctIndex": 0,
              "explanation": "Ang dynamic arc ay nagpapadama ng kwento at emosyon sa solo, na sumasabay sa paglaki ng tunog ng buong kongregasyon."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 5.4: Worship Solo Composition Rubric",
          "sheetName": "Worship_Solo_Log",
          "description": "Subaybayan ang pagbuo ng isang orihinal na worship solo arrangement.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Bumuo ng 8-bar melodic lead hook para sa isang Tagalog worship song.",
            "I-record ang video performance kasama ang backing track.",
            "Ilista ang mga ginamit mong dynamic shifts mula verse hanggang chorus."
          ],
          "rubric": [
            {
              "criteria": "Memorable Melodic Phrasing & Singability",
              "points": 50
            },
            {
              "criteria": "Effective Dynamic Build-Up & Resolution",
              "points": 50
            }
          ]
        }
      }
    ]
  },
  {
    "title": "Modyul 6: Pro Mastery, Phrasing, Sipra at Masterclass Capstones",
    "overview": "Ang rurok ng iyong paglalakbay: Paano maging expressive soloist gamit ang phrasing, space, at call-and-response; paano mag-sipra sa tenga ng kahit anong kumplikadong gitara solo; masterclass breakdown ng klasikong Pinoy rock solos (Nosi Ba Lasi / Sampaguita blues-rock); at ang final capstone performance ng iconic solo ng Rivermaya - '214' (Perf De Castro arrangement).",
    "duration": "1 Linggo (4 Aralin)",
    "lessons": [
      {
        "id": "les-lead-6-1",
        "title": "Aralin 6.1: Guitar Phrasing, Space, Breathing & Call-and-Response (Singing Through Strings)",
        "duration": "24 mins",
        "videoUrl": "https://www.youtube.com/watch?v=VeoyQ18iWy8",
        "videoTitle": "GUITAR LESSONS - ANO BA ANG GUITAR PHRASING? - PinoyGuitaristDad",
        "objective": "Huwag maging 'machine gun' guitarist: Matutunan ang musical phrasing, paggamit ng katahimikan o 'space' bilang sandata, breathing rhythms, at call-and-response soloing na kumakausap sa puso ng nakikinig.",
        "theoryContent": "Ang pagkakaiba ng bata na natutong magbasa ng salita sa isang makata (poet):\nAng bata ay mabilis magbasa nang walang hinto hanggang maubusan ng hininga.\nAng MAKATA ay marunong mag-pause, magbigay-diin, at huminga. Sa gitara, ito ang tinatawag nating \"PHRASING\"!\n\n1. SPACE IS A NOTE TOO (ANG KAHALAGAHAN NG PAHINGA):\nAng mga nota na HINDI mo tinutugtog ay kasing-halaga ng mga nota na tinutugtog mo.\nKung tuluy-tuloy kang namimitas ng 16th notes nang 30 segundo, magsasawa agad ang nakikinig. Ang katahimikan (rests) ay lumilikha ng pananabik para sa susunod na nota!\n\n2. CALL AND RESPONSE (TANONG AT SAGOT):\nBumuo ng dalawang magkatambal na linya:\n• Ang Tanong (Call): Isang phrase na nagtatapos sa bitin o bukas na tono (halimbawa, sa 2nd o 5th degree).\n• Ang Sagot (Response): Ang kasunod na phrase na sumasagot at lumalapag sa matatag na Root note.\nIto ang pinakamatandang sikreto ng mga blues masters tulad nina B.B. King, Eric Clapton, at Gary Moore.",
        "codeSnippet": "// CALL AND RESPONSE PHRASING IN AMINOR:\n\nPhrase 1: THE CALL (Bitin / May Tanong sa dulo)\ne|----------------------------------------------------|\nB|-------8b10~~~---8----------------------------------|\nG|-5h7-----------------7~~~---------------------------|\nD|-------------------------(Nagtapos sa D - Bitin!)----|\n\n[PAUSE / HUMINGA NG ISANG BEAT...]\n\nPhrase 2: THE RESPONSE (Ang Sagot / Buong Pag-uwi)\ne|----------------------------------------------------|\nB|-------8b10r8---------------------------------------|\nG|-5h7------------7p5---5h7---------------------------|\nD|--------------------7-------7~~~--------------------|\n                              (Nagtapos sa A - Umuwi!)",
        "activity": {
          "title": "Gawaing Praktikal 6.1: The Vocal Breath Soloing Rule",
          "instructions": [
            "Pumili ng mabagal na blues backing track.",
            "Tuntunin: Bago tumugtog ng bawat phrase, huminga nang malalim. Tugtugin lamang ang solo habang nagbubuga ng hininga (exhale).",
            "Kapag naubos ang hininga mo, DAPAT HUMINTO ANG IYONG MGA DALIRI kahit nasaan ka pa sa fretboard!",
            "Pansinin kung paano awtomatikong nagkakaroon ng human breathing at natural na espasyo ang iyong solo."
          ],
          "starterCode": "Rule: Breathe in -> Play lick on exhale -> Stop on breath in -> Repeat.",
          "expectedOutcome": "Malalim, may hininga, at madamdaming soloing na parang boses ng tao sa halip na mekanikal na makina."
        },
        "exam": {
          "title": "Pagsusulit 6.1: Guitar Phrasing",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-6-1-1",
              "question": "Ano ang kahulugan ng 'Call and Response' sa guitar soloing?",
              "options": [
                "Ang pagbuo ng unang phrase na may bitin na tanong na sinusundan ng pangalawang phrase na nagbibigay ng musical resolution o sagot",
                "Ang pagsigaw ng audience pabalik sa gitarista",
                "Ang pagtawag sa telepono habang nagso-solo",
                "Ang pag-echo ng amplifier"
              ],
              "correctIndex": 0,
              "explanation": "Ang Call and Response ay foundational musical storytelling kung saan ang unang linya ay nagtatanong at ang pangalawa ay sumasagot."
            },
            {
              "id": "q-lg-6-1-2",
              "question": "Bakit kritikal ang paggamit ng 'space' o katahimikan sa isang propesyonal na solo?",
              "options": [
                "Dahil ang mga sandali ng katahimikan ay nagbibigay ng hininga sa nakikinig at nagbibigay-diin sa bawat susunod na nota",
                "Dahil napapagod ang daliri ng gitarista",
                "Upang makainom ng tubig ang banda",
                "Para mas maikli ang kanta"
              ],
              "correctIndex": 0,
              "explanation": "Kung walang space, nawawala ang impact ng solo; ang contrast ng tunog at katahimikan ang lumilikha ng drama."
            },
            {
              "id": "q-lg-6-1-3",
              "question": "Ano ang 'Vocal Breathing Rule' sa pagpapabuti ng phrasing?",
              "options": [
                "Ang pagpapatugtog lamang ng mga nota habang nag-e-exhale upang maging natural na kasing-haba ng boses ng tao ang bawat phrase",
                "Ang pag-awit habang sumisigaw",
                "Ang pagpigil ng hininga hanggang matapos ang kanta",
                "Ang paghinga gamit ang ilong lamang"
              ],
              "correctIndex": 0,
              "explanation": "Ang pag-sync ng mga daliri sa paghinga ay pumipigil sa machine-gun overplaying at nagdudulot ng vocal musicality."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.1: Phrasing Analysis Sheet",
          "sheetName": "Phrasing_Log",
          "description": "Subaybayan ang balanse ng space at note density sa iyong soloing.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Mag-record ng 12-bar solo gamit ang Call and Response structure.",
            "Bilangin kung ilang bars ang may rests (Target: kahit 3-4 bars na walang nota).",
            "Ilista ang mga ginamit mong vocal inflections (bends, slides, vibrato)."
          ],
          "rubric": [
            {
              "criteria": "Clear Question-and-Answer Phrasing Structure",
              "points": 50
            },
            {
              "criteria": "Effective Use of Rest & Dynamic Pacing",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-6-2",
        "title": "Aralin 6.2: \"Sipra sa Tenga\" ng Solos: Ear Training & Note-by-Note Transcription",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=4Xn6F6Yhg7M",
        "videoTitle": "PAANO SUMIPRA NG LEAD GUITAR GAMIT ANG MAJOR SCALE || tagalog tutorial for bigenners..Part 19 - Mike Basilio",
        "objective": "Iwanan ang pagiging dependent sa TABs: Matutunan ang pamamaraan ng 'pagsipra sa tenga'—paghahanap ng key ng kanta, pagtukoy sa unang nota, pagkilala sa intervals, at pag-decompose ng mabilis na licks nang paisa-isang nota.",
        "theoryContent": "Ang tunay na Pinoy guitar master ay hindi umaasa sa mga librong may TAB o internet tabs na madalas ay mali-mali pa. Marunong siyang \"sumipra sa tenga\"!\n\n1. ANG 4-STEP SIPRA METHOD:\n• Step 1: Hanapin ang Key Center (Root Note). Makinig sa bass note o sa huling chord ng kanta. I-hum ito gamit ang boses, saka hanapin sa 6th o 5th string ng gitara.\n• Step 2: Tukuyin kung Major o Minor. Kapag masaya at maliwanag, Major scale framework; kapag madilim at bluesy, Minor pentatonic.\n• Step 3: Hanapin ang First Landing Note ng Solo. Huwag pakinggan ang buong 30 segundo nang sabay-sabay! I-pause ang kanta pagkatapos ng unang 2 segundo. Hanapin ang unang nota.\n• Step 4: Suriin ang Articulation. Nag-bend ba siya? Nag-slide ba? O nag-hammer-on? Ang tamang articulation ang magbibigay ng eksaktong posisyon sa fretboard!\n\n2. SLOW-DOWN SOFTWARE AT YOUTUBE SPEED:\nSamantalahin ang teknolohiya: Gamitin ang 0.75x o 0.5x speed sa YouTube player nang hindi nagbabago ang pitch upang mabilang ang bawat nota sa mabilis na takbo!",
        "codeSnippet": "// SIPRA PRACTICE TEMPLATE (ISULAT ANG NOTA MULA SA TENGA):\n\nHakbang sa Pag-decompose:\n1. Pakinggan ang unang 3 nota: [Nota 1] -> [Nota 2] -> [Nota 3]\n2. Halimbawa: Narinig mo ay umaakyat: E -> G -> A\n3. Subukan sa fretboard:\n   - G string fret 9 (E), B string fret 8 (G), B string fret 10 (A)\n   - O kaya sa B string fret 5 (E), fret 8 (G), 1st string fret 5 (A)?\n4. Piliin ang posisyon na may pinakamalambot at natural na daloy ng daliri!",
        "activity": {
          "title": "Gawaing Praktikal 6.2: 5-Second Solo Transcription Challenge",
          "instructions": [
            "Pumili ng paboritong kanta (halimbawa, ang unang 5 segundo ng solo ng 'Harana' o 'Ang Huling El Bimbo').",
            "I-pause ang track. Huwag magbubukas ng internet tabs!",
            "Hanapin ang bawat nota gamit lamang ang iyong tenga at gitara.",
            "Isulat ang sarili mong TAB sa papel o computer.",
            "Tugtugin ito kasabay ng orihinal na recording upang patunayan kung 100% tumpak ang tono."
          ],
          "starterCode": "Track: 5-second guitar solo clip.\nProcess: Hum note -> Find on fretboard -> Verify articulation -> Write TAB.",
          "expectedOutcome": "Kumpletong kumpyansa sa sariling tenga na makapulot ng kahit anong melody nang walang tulong ng external tabs."
        },
        "exam": {
          "title": "Pagsusulit 6.2: Ear Training at Pagsipra",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-6-2-1",
              "question": "Ano ang pinakaunang hakbang sa matagumpay na pagsipra sa tenga ng isang guitar solo?",
              "options": [
                "Pagtukoy sa key center (tonal root) at kung ito ay Major o Minor bago pakinggan ang mga mabilis na nota",
                "Pagpitas nang mabilis sa 1st string hanggang may tumamang nota",
                "Pagbili ng bagong gitara",
                "Pag-download ng libreng tab sa internet"
              ],
              "correctIndex": 0,
              "explanation": "Kapag alam mo na ang key at scale family, pinaliit mo na ang posibleng nota mula 12 tungo sa 5 o 7 na lamang."
            },
            {
              "id": "q-lg-6-2-2",
              "question": "Bakit kapaki-pakinabang ang pag-hum o pag-kanta muna sa nota bago ito hanapin sa fretboard?",
              "options": [
                "Dahil kinokonekta ng boses ang naririnig ng utak sa internal ear, na nagpapadali sa pagtukoy kung mas mataas o mas mababa ang nota sa gitara",
                "Dahil kailangang marinig ng kapitbahay",
                "Para magising ang amplifier",
                "Walang kinalaman ang boses sa gitara"
              ],
              "correctIndex": 0,
              "explanation": "Kapag kaya mong i-hum ang nota sa tono, 100% nang na-decode ng utak mo ang pitch; paghahanap na lang sa leeg ang kulang."
            },
            {
              "id": "q-lg-6-2-3",
              "question": "Paano makatutulong ang YouTube playback speed (0.75x o 0.5x) sa pagsipra ng mga mabilis na shred solos?",
              "options": [
                "Pinababagal nito ang audio nang hindi binabago ang pitch upang mabilang at marinig ang bawat indibidwal na nota",
                "Ginagawa nitong mas madali ang kanta",
                "Nagdaragdag ito ng reverb",
                "Pinapalitan nito ang tono ng kanta"
              ],
              "correctIndex": 0,
              "explanation": "Ang time-stretching nang walang pitch shift ay nagbibigay-daan sa note-by-note analysis ng virtuoso passages."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.2: Ear Transcription Accuracy Rubric",
          "sheetName": "Sipra_Log",
          "description": "Subaybayan ang iyong tagumpay sa pag-transcribe ng solos mula sa tenga.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Pumili ng 8-bar OPM guitar solo.",
            "I-transcribe sa sariling TAB nang walang internet search.",
            "I-record ang video playing along with the master track.",
            "Ilista ang mga naging hamon sa pagtukoy ng bends at slides."
          ],
          "rubric": [
            {
              "criteria": "Pitch & Fret Location Accuracy",
              "points": 50
            },
            {
              "criteria": "Nuance & Articulation Replication (Bends/Vibrato)",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-6-3",
        "title": "Aralin 6.3: Classic Pinoy Rock Solo Masterclass: Nosi Ba Lasi / Pinoy Blues Solo Breakdown",
        "duration": "25 mins",
        "videoUrl": "https://www.youtube.com/watch?v=TCdOJmMiSw4",
        "videoTitle": "NOSI BALASI (SAMPAGUITA) SOLO with GUITAR PRO 7 TABS and BACKING TRACKS - ALVIN DE LEON",
        "objective": "Pag-aralan at i-dissect ang isa sa pinaka-iconic na Pinoy Rock guitar solos sa kasaysayan: Ang agresibo, bluesy, at may pusong solo ng 'Nosi Ba Lasi' (Sampaguita / Gary Perez style)—pagsasama ng Pentatonic Box 1, double stops, aggressive bends, at blues grit.",
        "theoryContent": "Walang Pinoy guitarist ang matatawag na tunay na lead player kung hindi niya kayang tugtugin ang mga maalamat na himig ng Pinoy Rock! Ang solo ng \"Nosi Ba Lasi\" ay isang obra-maestra sa paggamit ng blues-rock vocabulary.\n\n1. ANATOMY NG ISANG MAALAMAT NA PINOY ROCK SOLO:\n• Aggressive Double Stops: Pagsabay ng pagpitas sa 1st at 2nd strings habang nagbe-bend.\n• Blues Rake: Pagkalos sa mga naka-mute na kuwerdas bago lumapag sa lead note para sa percussive snap.\n• Unison Bends: Pagpitas sa 2nd string (na naka-bend) kasabay ng 1st string unbent note sa parehong pitch para sa umaatungal na chorus sound!\n\n2. TONAL ATTITUDE:\nHuwag itong tugtugin nang malambot. Ang Pinoy Rock ay nangangailangan ng 'gigil' ngunit may matinding kontrol sa pulso, tamang intonation sa bends, at matapang na vibrato na lumalaban sa ingay ng entablado!",
        "codeSnippet": "// NOSI BA LASI STYLE SIGNATURE BLUES-ROCK RIFF:\n// Double stops and aggressive unison bends (Key of A)\n\ne|-------5-----------------5--------------------------|\nB|-------5---8b10~~~-------5---8p5--------------------|\nG|-7b9-----------------7b9---------7---7p5---5h7~~~---|\nD|-----------------------------------------7----------|\n\nUnison Bend Exercise:\ne|---5------------------------------------------------|\nB|---8b10===(I-bend hanggang maging kasing-tono ng 5)-|\nG|----------------------------------------------------|",
        "activity": {
          "title": "Gawaing Praktikal 6.3: The Pinoy Rock Blues-Rake & Double-Stop Drill",
          "instructions": [
            "Pumili ng crunchy rock overdrive sound.",
            "Magsanay ng unison bends sa 5th fret ng high E at 8th fret ng B string.",
            "Patugtugin ang backing track ng Nosi Ba Lasi.",
            "Tugtugin ang unang 8 bars ng solo nang may buong emosyon, gigil, at perpektong intonation sa bends."
          ],
          "starterCode": "Key: A Minor / Blues Rock (Tempo: 110 BPM).\nTechnique: Rake -> 8b10 bend -> Double stop at 5th fret.",
          "expectedOutcome": "Matapang at authentic na Pinoy Rock sound na may tumpak na unison bends at aggressive attack."
        },
        "exam": {
          "title": "Pagsusulit 6.3: Pinoy Rock Soloing",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-6-3-1",
              "question": "Ano ang tinatawag na 'Unison Bend' na madalas marinig sa classic Pinoy rock solos?",
              "options": [
                "Ang pagpitas sa isang nota sa mas mababang kuwerdas habang naka-bend upang tumunog na eksaktong kapareho ng pitch ng unbent note sa katabing kuwerdas",
                "Ang sabay na pagkanta ng dalawang tao",
                "Ang pag-bend ng dalawang gitara nang sabay",
                "Ang pagpitas sa likod ng nut"
              ],
              "correctIndex": 0,
              "explanation": "Ang unison bend ay lumilikha ng matinding beating at harmonic chorus effect na siyang tatak ng classic rock solos."
            },
            {
              "id": "q-lg-6-3-2",
              "question": "Ano ang 'Pick Rake' bago ang isang lead note?",
              "options": [
                "Ang pagkalos sa mga naka-mute na kuwerdas bago tamaan ang target note para sa percussive scrape sound",
                "Ang paglilinis sa fretboard gamit ang walis",
                "Ang pagpitas gamit ang kuko",
                "Ang pagpalit ng pick habang tumutugtog"
              ],
              "correctIndex": 0,
              "explanation": "Ang rake ay nagdaragdag ng percussive energy at dynamic drama sa pagsisimula ng isang lead note."
            },
            {
              "id": "q-lg-6-3-3",
              "question": "Sino ang maalamat na kompositor at gitarista sa likod ng mga klasikong hits tulad ng 'Nosi Ba Lasi' ni Sampaguita?",
              "options": [
                "Gary Perez",
                "Freddie Aguilar",
                "Yoyoy Villame",
                "Rey Valera"
              ],
              "correctIndex": 0,
              "explanation": "Si Gary Perez ang pioneer guitarist at songwriter na nagbigay ng signature blues-rock guitar sound kay Sampaguita."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.3: Pinoy Rock Solo Repertoire Log",
          "sheetName": "Pinoy_Rock_Log",
          "description": "Subaybayan ang pag-master sa classic Pinoy Rock solos.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "I-record ang video playthrough ng Nosi Ba Lasi solo section.",
            "I-verify ang intonation ng unison bends gamit ang software tuner.",
            "I-rate ang rock attitude at dynamic attack."
          ],
          "rubric": [
            {
              "criteria": "Intonation Precision on Aggressive Unison Bends",
              "points": 50
            },
            {
              "criteria": "Stylistic Attitude & Timing with Rock Groove",
              "points": 50
            }
          ]
        }
      },
      {
        "id": "les-lead-6-4",
        "title": "Aralin 6.4: Capstone Showcase: Rivermaya - \"214\" Iconic Solo (Perf De Castro Style Transcription)",
        "duration": "30 mins",
        "videoUrl": "https://www.youtube.com/watch?v=1EClZgOLn1o",
        "videoTitle": "Lead Guitar Tutorial: 214 RIVERMAYA (Perf De Castro Solo Tab) - Pareng Don sa Electric Guitar",
        "objective": "Ang Grand Capstone Project: Masterin at itanghal ang isa sa pinakadakila at pinakamagandang guitar solos sa kasaysayan ng musikang Pilipino—ang maalamat na '214' solo ni Perfecto De Castro: Melodic phrasing, pre-bends, sweep arpeggios, at singing climax.",
        "theoryContent": "Ito ang dulo ng iyong paglalakbay mula Zero tungo sa Hero. Ang guitar solo ng \"214\" ng Rivermaya (isinulat at tinugtog ni Maestro Perfecto De Castro) ay kinikilala bilang isa sa mga pinakaperpektong guitar solos sa mundo.\n\nBAKIT ITO ITINUTURING NA \"MASTERCLASS IN A SOLO\"?\nDahil taglay nito ang LAHAT ng natutunan mo sa 6 na modyul:\n1. Vocal Melodic Phrasing (Modyul 1 & 6): Bawat nota ay parang kinakantang tula; may tamang hininga at hindi nagmamadali.\n2. Pitch-Perfect Pre-Bends (Modyul 1): Pag-bend ng kuwerdas BAGO pitasin, saka dahan-dahang ire-release pabalik sa natural pitch.\n3. Major Scale & Target Notes (Modyul 4): Bumabakat sa chords ng E Major, B, C#m, at A.\n4. Clean Swept Arpeggios & Speed Runs (Modyul 3): Mabilis ngunit kristal na note separation sa pagitan ng mga posisyon.\n5. Screaming Climax & Singing Vibrato (Modyul 1 & 5): Ang huling high-octave notes na nag-iiwan ng kilabot sa sinumang nakikinig.\n\nKAPAG NATUTUNAN MO ITO NANG BUO AT MALINIS, OPISYAL KA NANG CERTIFIED PINOY LEAD GUITAR HERO!",
        "codeSnippet": "// RIVERMAYA \"214\" GUITAR SOLO EXCERPT (PERFECTO DE CASTRO):\n// Key of E Major -> Pre-bends, melodic slides, and singing vibrato\n\ne|----------------------------------------------------|\nB|--12b14r12---9h12p9\\7---7/9~~~---7h9p7\\5---5/7~~~---|\nG|----------------------------------------------------|\nD|----------------------------------------------------|\n\ne|----------------------------------12----------------|\nB|-------9---12b14r12---9~~~---9/12----12/14~~~-------|\nG|-9h11-----------------------------------------------|\nD|----------------------------------------------------|\n   (Sing every single note with passion and precision!)",
        "activity": {
          "title": "Gawaing Praktikal 6.4: The 214 Masterclass Capstone Performance",
          "instructions": [
            "Panoorin ang buong breakdown video ni Pareng Don at Perf De Castro.",
            "Hatiin ang solo sa 4 na major sections: (A) Opening Melodic Theme, (B) Fast Ascending Run, (C) Arpeggio Cascade, (D) Climax Pre-Bends and Outro Resolution.",
            "Sanayin ang bawat section nang paisa-isa sa mabagal na tempo.",
            "I-record ang buong walang-hinto (uncut) performance video kasabay ng 214 backing track.",
            "Isumite ang link ng iyong video sa Capstone Submission portal para sa accreditation ni Ronnel M. Aviguetero!"
          ],
          "starterCode": "Key: E Major | Tempo: 86 BPM | Rig: Bridge pickup, smooth overdrive, dotted 8th / subtle delay & reverb.",
          "expectedOutcome": "Isang kumpleto, madamdamin, at teknikal na perpektong pagtatanghal ng maalamat na '214' solo."
        },
        "exam": {
          "title": "Pagsusulit 6.4: Masterclass Capstone & Theory",
          "passingScore": 100,
          "questions": [
            {
              "id": "q-lg-6-4-1",
              "question": "Sino ang maalamat na Pinoy guitarist na lumikha at tumugtog ng orihinal na studio guitar solo ng '214' ng Rivermaya?",
              "options": [
                "Perfecto 'Perf' De Castro",
                "Ely Buendia",
                "Chito Miranda",
                "Pepe Smith"
              ],
              "correctIndex": 0,
              "explanation": "Si Perf De Castro ang co-founder at original lead guitarist ng Rivermaya na nag-compose ng iconic masterpiece solo na ito."
            },
            {
              "id": "q-lg-6-4-2",
              "question": "Ano ang 'Pre-Bend' technique na ginagamit sa mga pinaka-madamdaming bahagi ng 214 solo?",
              "options": [
                "Ang pag-bend ng kuwerdas pataas nang tahimik BAGO ito pitasin, at saka ito i-re-release pababa habang tumutunog",
                "Ang pag-bend gamit ang paa",
                "Ang pagpihit ng tuning peg bago tumugtog",
                "Ang pagpitas nang walang kuwerdas"
              ],
              "correctIndex": 0,
              "explanation": "Ang pre-bend and release ay lumilikha ng mala-boses ng taong umiiyak o dumadaing na tunog (crying guitar effect)."
            },
            {
              "id": "q-lg-6-4-3",
              "question": "Ano ang pinakamahalagang katangian na nagpapanalo sa isang soloista mula 'teknikal na makinilya' tungo sa isang 'Tunay na Guitar Hero'?",
              "options": [
                "Ang kakayahang maghatid ng tunay na emosyon, kwento, at koneksyon sa puso ng nakikinig sa pamamagitan ng tono, dynamics, at puso",
                "Ang pagtugtog ng 200 notes bawat segundo kahit walang nakakaintindi",
                "Ang pagkakaroon ng pinakamahal na gitara",
                "Ang pagbasag sa gitara pagkatapos ng kanta"
              ],
              "correctIndex": 0,
              "explanation": "Ang musika ay sining ng emosyon; ang bilis at galing ay mga instrumento lamang upang maglingkod sa damdamin ng awit."
            }
          ]
        },
        "worksheet": {
          "title": "Worksheet 6.4: Grand Capstone Evaluation Rubric",
          "sheetName": "Capstone_Evaluation",
          "description": "Opisyal na evaluation rubric para sa pagtatapos sa Pinoy Lead Guitar Masterclass.",
          "templateUrl": "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy",
          "deliverables": [
            "Buong video link ng 214 Solo Capstone Performance (Unedited/Live Take).",
            "Self-assessment checklist sa intonation, timing, at vibrato quality.",
            "Panghuling reflection essay ukol sa iyong paglalakbay mula Zero tungo sa Hero."
          ],
          "rubric": [
            {
              "criteria": "Technical Execution (Picking, Bends, Sweep Cleanliness)",
              "points": 50
            },
            {
              "criteria": "Musicality, Vibrato Control & Emotional Expression",
              "points": 50
            }
          ]
        }
      }
    ]
  }
];

export const PINOY_LEAD_GUITAR_TRACK: Track = {
  id: 'track-pinoy-lead-guitar-zero-to-hero',
  title: 'Pinoy Lead Guitar Masterclass: Zero to Hero Electric & Acoustic Soloing',
  category: 'creative',
  categoryLabel: 'Music & Lead Guitar Arts',
  slug: 'pinoy-lead-guitar-zero-to-hero',
  badge: '★ 6TH OFFICIAL COURSE BUNDLE • LEAD GUITAR',
  level: 'All Levels',
  levelIndex: 6,
  isBundle: true,
  bundleNumber: 6,
  bundleLabel: '★ 6TH OFFICIAL COURSE BUNDLE: PINOY LEAD GUITAR MASTERCLASS',
  price: 0,
  originalPrice: 18990,
  careerMilestone: 'Stage-Ready Virtuoso Lead Guitarist & Worship Soloist',
  isPaid: false,
  instructor: {
    name: 'Ronnel M. Aviguetero',
    role: 'CEO and FOUNDER of KEZJED SOLUTIONS • Lead Instructor & Church Musician',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    verified: true,
    credentials: 'CEO & Founder, KEZJED SOLUTIONS • Certified ICT Educator & Veteran Church Musician'
  },
  rating: 5.0,
  reviewCount: 468,
  activeLearners: 1720,
  lessonsCount: 24,
  duration: '6 Linggo (24 Aralin)',
  description: 'Mula zero beginner na hindi pa nakakapag-solo hanggang sa pagiging stage-ready virtuoso lead hero! 100% komprehensibong Tagalog Lead Guitar instruction: Alternate picking mechanics, pitch-perfect string bending at vocal vibrato, Pentatonic Boxes 1-5, ang maasim na Blue Note at Blues scale, speed drills, two-hand tapping, screaming pinch harmonics, 3-string sweep picking, CAGED soloing, Dorian at Mixolydian modes, chord tone target notes, worship ambient volume swells at dotted 8th delay, guitar phrasing, pagsipra sa tenga ng solos, at ang iconic capstone masterclass breakdown ng Rivermaya "214" (Perf De Castro style). May kasamang 24 verified Tagalog video lessons, ASCII lead tabs, practice rubrics, at auto-graded quizzes.',
  skills: [
    'Single-Note Alternate Picking',
    'String Bending & Vocal Vibrato',
    'Pentatonic Scale Boxes 1 to 5',
    'Blues Scale & Blue Note Grit',
    'High-Speed Metronome Acceleration',
    'Two-Hand Finger Tapping',
    'Pinch Harmonics (Squealies)',
    'Sweep Picking Triad Arpeggios',
    'CAGED System Fretboard GPS',
    'Diatonic Modes (Dorian & Mixolydian)',
    'Chord Tone Target Notes (3rds & 7ths)',
    'Worship Ambient Volume Swells',
    'Dotted 8th Delay Syncopation',
    'Melodic Phrasing & Call-Response',
    'Sipra sa Tenga Ear Transcription',
    'Classic Pinoy Rock Solo Breakdown'
  ],
  colorTheme: 'from-rose-600 via-red-600 to-amber-600',
  popular: true,
  published: true,
  isCustomCourse: true,
  isTeacherCreated: true,
  authorEmail: 'ronnel@kezjedsolutions.com',
  modules: PINOY_LEAD_GUITAR_MODULES.map((m: LeadGuitarModule, mIdx: number) => ({
    id: `mod-lead-guitar-${mIdx + 1}`,
    track_id: 'track-pinoy-lead-guitar-zero-to-hero',
    title: m.title,
    duration: m.duration || '1 Linggo',
    overview: m.overview || '',
    order_index: mIdx + 1,
    lessons: m.lessons.length,
    topics: m.lessons.map((l: LeadGuitarLesson) => l.title),
    lessonItems: m.lessons.map((l: LeadGuitarLesson, lIdx: number) => ({
      id: l.id,
      module_id: `mod-lead-guitar-${mIdx + 1}`,
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
