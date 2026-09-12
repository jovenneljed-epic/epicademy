import type { Track } from '../types';
import type { ZeroToHeroCourse, DetailedModule } from './zeroToHeroCoursesData';

// ============================================================================
// TESDA COMPUTER SYSTEMS SERVICING (CSS) NC II - 4 CORE COMPETENCIES
// Based on TESDA Training Regulations (TR) - 280 Nominal Training Hours
// ============================================================================

export const TESDA_CSS_MODULES: DetailedModule[] = [
  // --------------------------------------------------------------------------
  // CORE COMPETENCY 1 (COC 1): INSTALL AND CONFIGURE COMPUTER SYSTEMS (ICCS)
  // --------------------------------------------------------------------------
  {
    title: 'COC 1 - Module 1: OHS, Safe Hardware Disassembly, PC Assembly & BIOS/UEFI',
    duration: '1 Linggo (35 Oras)',
    overview: 'Matutunan ang mga regulasyon ng Occupational Health & Safety (OHS), 5S Methodology, pag-iwas sa Electrostatic Discharge (ESD), at ang sistematikong pagbuo ng Desktop Computer mula processor hanggang BIOS configuration.',
    lessons: [
      {
        title: 'Lesson 1.1: OHS Policies, 5S Principles, Personal Protective Equipment (PPE) & ESD Protection',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=IHXzkQO_n-I',
        videoTitle: 'TESDA CSS NC II: Occupational Health and Safety (OHS) & Tool Familiarization',
        objective: 'Maunawaan at maipatupad ang OHS standards, 5S of Good Housekeeping, tamang paggamit ng Anti-Static Wrist Strap, at paghahanda ng computer toolkit bago magbukas ng computer case.',
        theoryContent: `Ayon sa TESDA Training Regulations (TR) para sa Computer Systems Servicing NC II, ang unang pamantayan bago humawak ng anumang ICT equipment ay ang Occupational Health and Safety (OHS).

1. MGA PANGUNAHING PANUNTUNAN NG OHS:
• Laging tanggalin sa saksakan (unplug) ang power cable bago buksan ang system unit.
• Magsuot ng angkop na Personal Protective Equipment (PPE): Rubber-soled shoes, cotton clothing, at Anti-Static Wrist Strap na nakakabit sa unpainted metal surface ng chassis.
• Huwag magsusuot ng alahas (singsing, kuwintas, relo) habang nagkukumpuni ng electronics.
• Panatilihing tuyo ang working table at gumamit ng ESD Mat.

2. ANG 5S METHODOLOGY SA COMPUTER WORKSHOP:
• Seiri (Sort / Pag-uuri): Ihiwalay ang sirang piyesa sa magagamit pa.
• Seiton (Set in Order / Pagsasaayos): Ayusin ang mga turnilyo sa magnetic tray at mga screw drivers sa tamang rack.
• Seiso (Shine / Paglilinis): Panatilihing malinis ang workshop gamit ang anti-static brush at blower.
• Seiketsu (Standardize / Pagpapanatili): Sundin ang standard documentation at checklist sheets.
• Shitsuke (Sustain / Disiplina sa Sarili): Kusang-loob na pagpapanatili ng kaligtasan at kaayusan.`,
        codeSnippet: `// TESDA OHS & Workplace Safety Inspection Checklist:
1. Anti-Static Wrist Strap: Resistance check (1 Megaohm resistor intact)
2. Tool Check: Phillips #1 & #2 Screwdrivers (demagnetized tips for sensitive ICs)
3. Power Isolation: Disconnect AC Power Cord -> Press & hold Power Button for 10 seconds to drain capacitors
4. Fire Extinguisher: Class C (Electrical Fires - CO2 or Dry Chemical) positioned within 10 meters`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.1: Workstation Hazard Identification & ESD Setup',
          instructions: [
            'Ihanda ang ESD mat at ikabit ang alligator clip sa grounded metal chassis.',
            'Isuot ang anti-static wrist strap sa iyong non-dominant wrist.',
            'Mag-discharge ng residual static bago buksan ang system unit.',
            'Punan ang TESDA Hazard Identification Checklist form para sa electrical at ergonomic hazards.'
          ],
          starterCode: `// Activity Task Sheet 1.1 Checklist:
[ ] Anti-static wrist strap inspected and worn correctly
[ ] Workstation cleared of liquid, food, and magnetic materials
[ ] System unit grounded and discharged
[ ] Tools arranged according to 5S standard`,
          expectedOutcome: 'Ligtas na workstation na 100% compliant sa TESDA OHS guidelines at walang panganib ng ESD shock sa motherboard.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.1: TESDA OHS & Equipment Safety Inspection Form',
          sheetName: 'TESDA_OHS_Inspection',
          description: 'Suriin ang iyong computer lab o sariling workstation gamit ang opisyal na TESDA Safety Audit matrix.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Kumpletong talaan ng 10 safety hazards at corrective actions.',
            'Pagkakakilanlan ng 5S status sa computer laboratory.',
            'Nilagdaang Safety Compliance Declaration ng ICT Instructor.'
          ],
          rubric: [
            { criteria: 'OHS Compliance & PPE Implementation', points: 35 },
            { criteria: 'Hazard Identification Accuracy', points: 35 },
            { criteria: '5S Methodology Documentation', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 1.2: Systematic PC Disassembly & Reassembly Procedures',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=s1fxZ-VWsHg',
        videoTitle: 'Step-by-Step PC Disassembly & Assembly (TESDA CSS NC II Demonstration)',
        objective: 'Maipamalas ang wastong pagkakasunod-sunod ng pagbaklas at pagbuo ng computer system unit ayon sa manufacturer specifications.',
        theoryContent: `Sa TESDA National Assessment para sa COC 1, may nakalaang oras (karaniwang 1 oras) upang mag-assemble ng computer system unit nang walang pinsala sa mga piyesa.

STEP-BY-STEP COMPUTER ASSEMBLY (Standard Protocol):
1. PAGHAHANDA NG MOTHERBOARD (Out-of-case test):
   - Ipatong ang Motherboard sa ibabaw ng anti-static bag o cardboard box.
   - Buksan ang CPU socket lever (LGA para sa Intel o PGA/AM4 para sa lumang AMD).
   - I-align ang gold triangle indicator ng CPU sa corner triangle ng socket. Huwag pilitin (Zero Insertion Force).
   - I-lock ang retention lever.
   - Maglagay ng tamang dami ng thermal paste (pea-sized dot sa gitna ng IHS).
   - I-mount ang CPU cooler at isaksak ang CPU_FAN 4-pin header.

2. PAG-INSTALL NG RAM (Memory Modules):
   - Buksan ang latches ng DIMM slots (Slot 2 at 4 para sa Dual Channel).
   - Itapat ang notch sa memory module bago idiin hanggang mag-click ang dalawang gilid.

3. PAGKABIT SA LOOB NG CASE:
   - Ikabit ang I/O Shield sa likod ng case.
   - Ilagay ang brass standoffs upang hindi mag-short circuit ang motherboard sa metal chassis.
   - I-screw nang pa-cross pattern (diagonal) ang motherboard.

4. POWER SUPPLY & STORAGE:
   - Ikabit ang ATX Power Supply Unit (PSU) gamit ang 4 screws sa likod.
   - Ikabit ang 24-pin Main ATX Power Connector at 8-pin (4+4) CPU EPS Connector.
   - Ikabit ang SATA SSD o NVMe M.2 drive sa PCIe slot.
   - Isaksak ang Front Panel Headers: Power SW, Reset SW, Power LED, HDD LED, Front Audio, at USB 3.0.`,
        codeSnippet: `// Front Panel Header Standard Color & Pin Layout:
[Pin 1: Power LED +]  [Pin 3: Power LED -]  [Pin 5: Power SW]   [Pin 7: Power SW]   [Pin 9: No Pin]
[Pin 2: HDD LED +]    [Pin 4: HDD LED -]    [Pin 6: Reset SW]   [Pin 8: Reset SW]   [Pin 10: NC]

* Tandaan: Ang colored wire (Red/Blue/Green) ay karaniwang POSITIVE (+), ang White/Black ay NEGATIVE (-).
* Ang Power Switch at Reset Switch ay momentary switches (hindi sensitibo sa polarity).`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.2: Full Desktop Assembly Demonstration',
          instructions: [
            'Baklasin nang maayos ang test PC: Tanggalin ang PSU cables, RAM, Storage, at Motherboard.',
            'Linisin ang lumang thermal paste gamit ang 90%+ Isopropyl Alcohol at lint-free wipe.',
            'Muling buuin ang system unit gamit ang standard assembly sequence.',
            'Ayusin ang cable management gamit ang zip ties at tiyaking walang wires na tatama sa CPU fan.'
          ],
          starterCode: `// Assembly Verification Checklist:
Motherboard Standoffs Installed: [YES / NO]
Thermal Paste Applied (Pea Size): [YES / NO]
24-Pin ATX & 8-Pin CPU Connected: [YES / NO]
Front Panel Switches Verified:    [YES / NO]`,
          expectedOutcome: 'System unit na malinis ang kable, matibay ang pagkakakabit ng piyesa, at handa para sa unang power test.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.2: Computer Hardware Inventory & Assembly Rubric',
          sheetName: 'PC_Hardware_Inventory',
          description: 'Itala ang detalyadong specs (Make, Model, Serial Number, Form Factor) ng mga bahagi ng system unit.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Kumpletong Bill of Materials (BOM) ng assembled PC.',
            'Serial number inventory ng Processor, Motherboard, RAM, at Storage.',
            'TESDA Institutional Performance Assessment Scorecard.'
          ],
          rubric: [
            { criteria: 'Proper Handling & Assembly Technique', points: 40 },
            { criteria: 'Front Panel & Cable Management', points: 30 },
            { criteria: 'Hardware Inventory & Accuracy', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 1.3: Power-On Self-Test (POST), Beep Codes & BIOS/UEFI Setup',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=TIGUea7j69E',
        videoTitle: 'BIOS/UEFI Configuration & Beep Code Diagnosis for TESDA CSS NC II',
        objective: 'Mabasa ang POST results, maipaliwanag ang beep codes, at mai-configure ang BIOS/UEFI settings kabilang ang Boot Sequence, XMP/DOCP, at Secure Boot.',
        theoryContent: `Kapag pinindot ang Power Switch, ang unang programang tumatakbo sa motherboard ROM ay ang Power-On Self-Test (POST).

1. POST PROTOCOL AT DIAGNOSIS:
• Sinusuri ng POST kung maayos ang komunikasyon ng CPU, RAM, Video Display Controller, at Storage bago ipasa ang kontrol sa Operating System bootloader.
• Traditional AMI / Award BIOS Beep Codes:
  - 1 Maikling Beep: Normal POST complete (Sistemang maayos).
  - Walang Beep + Walang Display: Bigo ang Power Supply, CPU, o patay ang Motherboard.
  - 1 Mahabang Beep, 2 Maikling Beep: Video Card (GPU) Failure o hindi nakalapat.
  - Tuloy-tuloy na Beep (Continuous): RAM Failure (Maduming gold contacts o hindi nakasaksak nang maayos).

2. MGA PANGUNAHING CONFIGURATION SA BIOS/UEFI:
• System Time and Date: Itugma sa Philippine Standard Time (PST).
• Boot Option Priorities: Itakda ang UEFI USB Installer bilang Boot Option #1.
• SATA Mode: Siguruhing naka-set sa AHCI (Advanced Host Controller Interface) para sa modernong SSD.
• Secure Boot & TPM 2.0: Paganahin (Enable) para sa Windows 11 compatibility.
• Memory Profile: Paganahin ang XMP (Extreme Memory Profile) o DOCP upang tumakbo ang RAM sa rated frequency nito.`,
        codeSnippet: `// Key BIOS/UEFI Keystrokes across Motherboard Vendors:
ASUS:        Press [Del] or [F2] during POST -> [F8] for Boot Menu
Gigabyte:    Press [Del] during POST -> [F12] for Boot Menu
MSI:         Press [Del] during POST -> [F11] for Boot Menu
ASRock:      Press [Del] or [F2] during POST -> [F11] for Boot Menu
HP / Dell:   Press [F10] or [F2] for BIOS -> [F9] or [F12] for Boot Menu`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.3: BIOS Configuration & Diagnostic Beep Test',
          instructions: [
            'I-power on ang bagong assemble na PC at pindutin ang [Del] o [F2] para pumasok sa BIOS.',
            'Itakda ang tamang oras at petsa.',
            'I-configure ang Boot Priority upang unahin ang USB Flash Drive.',
            'Paganahin ang Virtualization Technology (Intel VT-x / AMD-V) para sa virtualization labs.',
            'I-save ang settings gamit ang [F10] at i-reboot.'
          ],
          starterCode: `// BIOS Verification Log:
CPU Model & Clock Detected: [OK]
Total Memory Installed:      [8192 MB / 16384 MB]
SATA Operation Mode:         [AHCI]
Boot Device Priority #1:     [UEFI: SanDisk USB 3.0]`,
          expectedOutcome: 'Matagumpay na POST na may single beep, tamang pagkilala sa hardware components, at na-configure na boot priority.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.3: BIOS/UEFI Settings & POST Diagnostic Sheet',
          sheetName: 'BIOS_POST_Audit',
          description: 'Idokumento ang BIOS firmware version, voltages (+12V, +5V, +3.3V, Vcore), at thermal sensor readings.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng Hardware Monitor readings (CPU Temp, Fan RPM, PSU Voltages).',
            'Matrix ng AMI/Award Beep Code troubleshooting solutions.',
            'Pagsusuri sa kahalagahan ng TPM 2.0 at Secure Boot.'
          ],
          rubric: [
            { criteria: 'Accuracy of BIOS Setup & Time Sync', points: 35 },
            { criteria: 'Beep Code Diagnostic Reasoning', points: 35 },
            { criteria: 'Hardware Monitor Data Verification', points: 30 }
          ]
        }
      }
    ]
  },

  {
    title: 'COC 1 - Module 2: Bootable Media Creation, Dual OS Deployment & Device Drivers',
    duration: '1 Linggo (35 Oras)',
    overview: 'Paggawa ng bootable USB installer gamit ang Rufus at Ventoy, malinis na pag-install ng Windows 10/11 Pro at Linux (Ubuntu) sa dual-boot configuration, at pag-install ng opisyal na device drivers.',
    lessons: [
      {
        title: 'Lesson 1.4: Creating Multi-Boot & UEFI USB Installers via Rufus & Ventoy',
        duration: '40 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Fj7n0P0L83g',
        videoTitle: 'How to Create Bootable USB (Rufus vs Ventoy for TESDA Assessment)',
        objective: 'Matalakay ang pagkakaiba ng GPT vs MBR partition schemes at makagawa ng bootable flash drive na katugma sa modernong UEFI at legacy BIOS systems.',
        theoryContent: `Sa TESDA Assessment, inaasahan na ang kandidato ay may dalang sariling gumaganang installer media.

1. PAGKAIBA NG PARTITION STYLES:
• MBR (Master Boot Record):
  - Para sa Legacy BIOS.
  - Maximum na 2 Terabytes (TB) per disk partition.
  - Limitado sa maximum na 4 Primary Partitions.
• GPT (GUID Partition Table):
  - Para sa modernong UEFI (Unified Extensible Firmware Interface).
  - Sumusuporta sa higit sa 9 Zettabytes per disk.
  - Sumusuporta sa hanggang 128 partitions sa Windows nang hindi kailangan ng extended partition.

2. MGA KAGAMITAN SA PAGGAWA NG INSTALLER:
• Rufus Tool:
  - Target system: UEFI (non CSM)
  - Partition scheme: GPT
  - File system: NTFS o FAT32
• Ventoy (Multi-ISO Solution):
  - I-install ang Ventoy sa flash drive minsan lang.
  - I-drag and drop lamang ang maramihang ISO files (Windows 10, Windows Server 2022, Ubuntu, Hirens Boot CD) sa root directory ng USB.`,
        codeSnippet: `// Diskpart CLI (Manual Bootable Preparation):
diskpart
list disk
select disk 1          // Siguruhing USB drive ang napili!
clean
convert gpt
create partition primary
format fs=fat32 quick
assign letter=U
active                 // (Para sa MBR Legacy)
exit`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.4: Dual Installer Creation on 32GB Flash Drive',
          instructions: [
            'I-download ang opisyal na Windows 10/11 64-bit ISO at Ubuntu 24.04 LTS Desktop ISO.',
            'Gamitin ang Rufus upang i-flash ang Windows ISO gamit ang GPT/UEFI scheme.',
            'Subukan ang Ventoy sa ikalawang flash drive at ilagay ang ISO files.',
            'I-boot ang system unit sa pamamagitan ng Boot Menu key [F8/F11/F12].'
          ],
          starterCode: `// Verification of Bootable USB in Windows CLI:
Get-Disk | Select-Object Number, FriendlyName, PartitionStyle, TotalSize`,
          expectedOutcome: 'Isang verified bootable USB flash drive na naglo-load ng Windows Setup interface nang walang error.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.4: Operating System Deployment Matrix',
          sheetName: 'OS_Deployment_Matrix',
          description: 'Itala ang partition table comparison, minimum hardware requirements ng Windows 11 vs Ubuntu, at verification checklist.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Komparasyon ng GPT vs MBR technical constraints.',
            'Screenshots ng Rufus configuration window.',
            'Pagsusuri ng installation read/write transfer rates.'
          ],
          rubric: [
            { criteria: 'Partition Scheme & Format Selection', points: 40 },
            { criteria: 'Installer Integrity & Boot Readiness', points: 35 },
            { criteria: 'Documentation & Technical Analysis', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 1.5: Clean OS Installation: Windows 10/11 Pro & Linux Dual-Boot',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=qbdxU1s_hZg',
        videoTitle: 'Dual Boot Windows & Linux Ubuntu Installation for ICT Techs',
        objective: 'Maisagawa ang clean installation ng Windows 10/11, custom disk partitioning (C: Drive para sa OS, D: Drive para sa Data), at dual-boot configuration kasama ang Linux.',
        theoryContent: `Sa TESDA COC 1 Demonstration, susubukin ang iyong kakayahan sa pag-partition ng storage drive at pag-install ng Operating System nang malinis.

STEP-BY-STEP CLEAN OS INSTALLATION:
1. CUSTOM INSTALLATION:
   - Piliin ang "Custom: Install Windows only (advanced)".
   - Kung may lumang data, i-delete ang mga lumang partitions hanggang maging "Drive 0 Unallocated Space".

2. PARTITION SIZING:
   - Halimbawa para sa 500GB SSD:
     * Drive C (Operating System & Programs): 200,000 MB (~200 GB)
     * Drive D (Data & Backups): 200,000 MB (~200 GB)
     * Unallocated Space para sa Linux Dual-Boot: ~100 GB
   - Awtomatikong lilikha ang Windows ng Recovery, System (EFI), at MSR partitions.

3. OUT-OF-BOX EXPERIENCE (OOBE):
   - Piliin ang Region: Philippines
   - Keyboard Layout: US Standard
   - Gumawa ng Local Administrator Account na may strong password.
   - I-disable ang unnecessary diagnostic telemetry tracking.`,
        codeSnippet: `// Useful PowerShell Commands for Post-Install Verification:
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, BiosFirmwareType
Get-Volume
Get-Partition -DiskNumber 0`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.5: Partitioning and Clean Installation',
          instructions: [
            'I-boot ang system mula sa UEFI USB installer.',
            'I-partition ang hard disk sa dalawang volume (OS at Data).',
            'I-install ang Windows sa Primary partition.',
            'Kumpletuhin ang OOBE setup at mag-log in sa desktop.'
          ],
          starterCode: `// Activity Completion Checklist:
[ ] Windows installed in UEFI/GPT mode
[ ] Drive C (System) partitioned accurately
[ ] Drive D (Data) formatted as NTFS with label "DATA_DRIVE"
[ ] Local Administrator account active`,
          expectedOutcome: 'Matagumpay na clean Windows desktop na may dalawang malinis na partitions at maayos na regional settings.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.5: Disk Partitioning & Installation Log Sheet',
          sheetName: 'Disk_Partition_Log',
          description: 'Itala ang bawat partition number, type (EFI, MSR, Primary, Recovery), capacity sa Megabytes, at file system.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Table ng disk partitions bago at pagkatapos ng installation.',
            'Paliwanag sa papel ng EFI System Partition (ESP).',
            'Pagsusuri sa dual-boot GRUB bootloader configuration.'
          ],
          rubric: [
            { criteria: 'Partitioning Accuracy according to specs', points: 40 },
            { criteria: 'Clean OS Setup & Account Security', points: 30 },
            { criteria: 'Log Completeness & Verification', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 1.6: Device Drivers Installation, Peripheral Verification & Software Suite',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=0h0Xj4y550E',
        videoTitle: 'Device Drivers Installation & Device Manager Verification (TESDA CSS NC II)',
        objective: 'Matukoy at mai-install ang lahat ng missing device drivers (Chipset, Graphics, LAN/Audio, USB 3.0) at suriin ang Device Manager para sa zero yellow exclamation marks.',
        theoryContent: `Ang isang bagong kabit na operating system ay hindi pa kumpleto hangga't hindi nakakabit ang mga opisyal na hardware drivers mula sa OEM (Original Equipment Manufacturer).

1. PAGKASUNOD-SUNOD NG PAG-INSTALL NG DRIVER:
1. Motherboard Chipset Driver (Intel Management Engine / AMD Chipset Driver)
2. Network Interface Card Driver (Realtek / Intel Ethernet & Wi-Fi)
3. Dedicated Graphics Processing Unit (NVIDIA GeForce / AMD Radeon / Intel Arc)
4. High-Definition Audio Drivers
5. Card Readers, Bluetooth, at Peripheral Utilities

2. DEVICE MANAGER STATUS CODES:
• Yellow Exclamation Mark (!): May kulang na driver o may resource conflict.
• Red 'X' o Down Arrow: Naka-disable ang device.
• Unknown Device: Hindi makilala ang Hardware ID (Kailangang kopyahin ang VEN_xxxx&DEV_xxxx string sa Properties -> Details -> Hardware Ids para hanapin ang tamang driver).`,
        codeSnippet: `// Driver Query & Management via Command Prompt / PowerShell:
driverquery /v /fo table
pnputil /enum-drivers
Get-PnpDevice -Status Error   // Ipinapakita ang mga may sirang driver!`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.6: Full Driver Pack Installation & Audit',
          instructions: [
            'Buksan ang Device Manager (`devmgmt.msc`).',
            'Ilista ang lahat ng devices na may yellow exclamation mark.',
            'I-install ang Chipset, Graphics, at Network drivers mula sa official support package.',
            'I-verify na malinis ang Device Manager at gumagana ang audio at 1080p/4K resolution.'
          ],
          starterCode: `// Driver Verification Sheet:
Chipset Driver Status:   [INSTALLED / NOT INSTALLED]
Display Adapter Status:  [NVIDIA RTX 3060 / Basic Display Adapter]
Audio Output Status:     [Realtek High Definition Audio]
Network Adapter Status:  [Gigabit Ethernet Controller Active]`,
          expectedOutcome: 'Isang 100% stable na computer system na may kumpletong hardware acceleration, sound, at network communication.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.6: Device Driver Audit & Peripheral Inspection Form',
          sheetName: 'Driver_Audit_Form',
          description: 'Idokumento ang Hardware Vendor IDs at Device IDs para sa bawat hardware controller sa system unit.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng Hardware IDs (VEN & DEV strings).',
            'Before and After status ng Device Manager.',
            'Client Software Acceptance Certificate.'
          ],
          rubric: [
            { criteria: 'Zero Unresolved Devices in Device Manager', points: 40 },
            { criteria: 'Correct Installation Order & Stability', points: 30 },
            { criteria: 'Hardware ID Documentation', points: 30 }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // CORE COMPETENCY 2 (COC 2): SET UP COMPUTER NETWORKS (SUCN)
  // --------------------------------------------------------------------------
  {
    title: 'COC 2 - Module 3: Structured Cabling, UTP Crimping, Keystone Jacks & Cable Testing',
    duration: '1 Linggo (35 Oras)',
    overview: 'Pagsunod sa ANSI/TIA-568 standards, pag-crimp ng Straight-Through at Crossover UTP cables, pag-terminate sa RJ45 Modular Keystone Jacks at Patch Panels, at pagsusuri gamit ang LAN Cable Tester.',
    lessons: [
      {
        title: 'Lesson 2.1: Network Standards: ANSI/TIA-568-C, Cat5e/Cat6 & Color Codes',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=0gl4yv9wM7U',
        videoTitle: 'T568A vs T568B Color Coding Explained (TESDA CSS NC II Practical Guide)',
        objective: 'Isaulo at maipaliwanag ang pinout arrangement ng T568A at T568B color codes at malaman kung kailan gagamitin ang Straight-Through vs Crossover cables.',
        theoryContent: `Ang pisikal na layer ng computer networks ay nakadepende sa kalidad ng structured cabling.

1. ANG STANDARD COLOR CODING:
• T568A Standard:
  Pin 1: White-Green
  Pin 2: Green
  Pin 3: White-Orange
  Pin 4: Blue
  Pin 5: White-Blue
  Pin 6: Orange
  Pin 7: White-Brown
  Pin 8: Brown

• T568B Standard (Pinakakaraniwan sa Pilipinas at Commercial Tech):
  Pin 1: White-Orange
  Pin 2: Orange
  Pin 3: White-Green
  Pin 4: Blue
  Pin 5: White-Blue
  Pin 6: Green
  Pin 7: White-Brown
  Pin 8: Brown

2. URI NG KABLE:
• Straight-Through Cable (Magkaparehong dulo: T568B to T568B):
  - Ginagamit sa pag-konekta ng MAGKAIBANG uri ng devices (Hal. Computer to Switch, Switch to Router).
• Crossover Cable (Magkaibang dulo: T568A sa dulo 1, T568B sa dulo 2):
  - Ginagamit sa pag-konekta ng MAGKAPAREHONG uri ng devices (Hal. Computer to Computer nang walang switch, Switch to Switch lumang hardware).`,
        codeSnippet: `// Quick Memory Rhyme for T568B (Pinout 1 to 8):
1. Striped Sun (White-Orange)
2. Solid Sun (Orange)
3. Striped Tree (White-Green)
4. Solid Sky (Blue)
5. Striped Sky (White-Blue)
6. Solid Tree (Green)
7. Striped Mud (White-Brown)
8. Solid Mud (Brown)`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.1: Color Code Pinout Drill & Diagramming',
          instructions: [
            'Sa isang malinis na papel o diagramming tool, iguhit ang 8 kulay ng T568A at T568B.',
            'Tukuyin ang Transmit (TX+ Pin 1, TX- Pin 2) at Receive (RX+ Pin 3, RX- Pin 6) pinouts sa 10/100 Mbps Ethernet.',
            'Ipaliwanag kung bakit ang Pins 4, 5, 7, at 8 ay ginagamit sa Gigabit Ethernet (1000BASE-T) at Power over Ethernet (PoE).'
          ],
          starterCode: `T568A: [W-G, G, W-O, BL, W-BL, O, W-BR, BR]
T568B: [W-O, O, W-G, BL, W-BL, G, W-BR, BR]`,
          expectedOutcome: '100% kabisado ang T568A at T568B color sequence nang walang tinitignang kopya.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.1: Cabling Standards & Transmission Properties',
          sheetName: 'Cabling_Standards',
          description: 'Ilista ang maximum distance, bandwidth (MHz), data rate (Mbps/Gbps), at attenuation ng Cat5e, Cat6, at Cat6a cables.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Cat5e vs Cat6 vs Cat6a specification sheet.',
            'Pinout connection truth table para sa Straight-through at Crossover.',
            'Quiz results on ANSI/TIA standards.'
          ],
          rubric: [
            { criteria: 'Pinout Sequence Mastery', points: 40 },
            { criteria: 'Cable Specifications Comprehension', points: 30 },
            { criteria: 'Formatting & Technical Accuracy', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 2.2: Hands-On RJ45 Crimping, Keystone Jacks & Patch Panel Punch-Down',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=2n5qQp_M41c',
        videoTitle: 'Proper RJ45 Crimping & Keystone Jack Punchdown Tutorial (TESDA Standard)',
        objective: 'Makapag-crimp ng de-kalidad na RJ45 connector nang hindi lalampas sa 0.5 inches ng unjacketed wire at makapag-terminate sa modular jack gamit ang punch-down tool.',
        theoryContent: `Sa TESDA COC 2 assessment, kailangan mong gumawa ng hindi bababa sa dalawang kable (isang Straight-through at isang Crossover) at mag-punch down sa keystone jack.

MGA HAKBANG SA MAHUSAY NA CRIMPIN:
1. Gamitin ang cable stripper upang tanggalin ang humigit-kumulang 1 pulgada ng panlabas na jacket ng UTP cable. Mag-ingat na hindi masugatan ang tanso sa loob.
2. I-untwist ang mga pairs at pantayin ang mga kawad gamit ang mga daliri.
3. Ayusin ayon sa T568B color order: White-Orange, Orange, White-Green, Blue, White-Blue, Green, White-Brown, Brown.
4. Gupitin nang pantay gamit ang cutter ng crimping tool, mag-iwan ng humigit-kumulang 0.5 pulgada (12 mm).
5. Ipasok nang diretso sa RJ45 connector. Tiyaking ang outer jacket ng kable ay papasok sa loob ng connector para sa strain relief.
6. Ilagay sa crimping die at pisilin nang buong lakas upang bumaon ang gold pins sa mga kawad.

PUNCH DOWN SA KEYSTONE JACK & PATCH PANEL:
• Sundin ang Color Code Diagram sa gilid ng keystone jack (piliin ang "B" scheme).
• Ipatong ang bawat kawad sa kaukulang kulay na slot.
• Gamitin ang Impact Punch-Down Tool na ang "CUT" blade ay nakaharap sa labas ng jack upang gupitin ang sobrang kable.`,
        codeSnippet: `// Standard Crimping Quality Criteria (TESDA Scoring):
1. Wire jacket clamped inside RJ45 body: YES
2. Copper conductors touch the far end of connector: YES
3. Proper color order visible through clear plastic: YES
4. Untwist length under 0.5 inches (minimizes crosstalk): YES`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.2: Dual Cable Crimping & Keystone Punchdown',
          instructions: [
            'Gumawa ng isang 2-meter Straight-Through Patch Cable (T568B to T568B).',
            'Gumawa ng isang 2-meter Crossover Cable (T568A to T568B).',
            'Mag-punch down ng isang RJ45 Modular Keystone Jack gamit ang impact tool.',
            'I-mount ang keystone jack sa faceplate ng network modular box.'
          ],
          starterCode: `// Physical Inspection Log:
Straight-Through Cable Length: 2.0 meters
Jacket Retention: Clamped securely
Connector Quality: No cracked plastic pins`,
          expectedOutcome: 'Dalawang propesyonal na patch cable at isang maayos na terminated keystone wall outlet.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.2: Structured Cabling Inspection & Rubric',
          sheetName: 'Cabling_Assessment_Rubric',
          description: 'I-rate ang gawang kable ayon sa TESDA Institutional Assessment performance checklist.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Checklist ng physical jacket clamping, pin seating, at wire trimming.',
            'Scorecard ng punch-down seating depth sa keystone jack.',
            'Instructor assessment signature.'
          ],
          rubric: [
            { criteria: 'Jacket Strain Relief & Wire Alignment', points: 40 },
            { criteria: 'Proper Tool Handling (Crimper & Punch-down)', points: 35 },
            { criteria: 'Cleanliness & Workmanship', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 2.3: Cable Testing with LAN Tester, Wiremap Analysis & Troubleshooting',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=5a8g_WqjW5E',
        videoTitle: 'How to Use an RJ45 Network Cable Tester & Fix Faults',
        objective: 'Subukan ang ginawang mga kable gamit ang RJ45 LAN Cable Tester at maipaliwanag ang mga faults: Open, Short, Miswire, at Split Pair.',
        theoryContent: `Bago isaksak ang kable sa computer o switch, kailangan itong subukan gamit ang network cable tester.

1. NORMAL NA PAGBABASA SA LAN TESTER:
• Para sa Straight-Through Cable:
  Main Unit LED:   1 - 2 - 3 - 4 - 5 - 6 - 7 - 8
  Remote Unit LED: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 (Sabay at sunod-sunod na iilaw)

• Para sa Crossover Cable:
  Main Unit LED:   1 - 2 - 3 - 4 - 5 - 6 - 7 - 8
  Remote Unit LED: 3 - 6 - 1 - 4 - 5 - 2 - 7 - 8 (Umiilaw ayon sa swap: 1<->3 at 2<->6)

2. MGA KARANIWANG KABIGUAN (CABLE FAULTS):
• Open Circuit: May isang LED na hindi umiilaw (Hal. Pin 3 patay). Sanhi: Hindi bumaon ang tanso ng RJ45 pin sa kawad.
• Short Circuit: Dalawang LEDs ang sabay na umiilaw. Sanhi: Nagdikit ang dalawang binalatang kawad.
• Miswire (Baligtad): Umiilaw ang mga LED pero sa maling pagkakasunod-sunod. Sanhi: Nagkapalit ang kulay ng mga kawad.`,
        codeSnippet: `// Troubleshooting Diagnostic Steps:
1. Kapag hindi umilaw ang isang pin:
   -> Gupitin ang connector at muling i-crimp nang may sapat na diin.
2. Kapag kumikislap nang magulo:
   -> Suriin kung may putol na kawad sa gitna ng cable jacket.
3. Kapag Shielded Twisted Pair (STP) ang kable:
   -> Tiyaking umiilaw din ang 'G' (Ground LED) sa tester.`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.3: Comprehensive Cable Verification & Fault Simulation',
          instructions: [
            'Isaksak ang isang dulo ng Straight-Through cable sa Master unit ng tester at ang kabilang dulo sa Remote unit.',
            'I-on ang tester at idokumento ang pagkakasunod-sunod ng mga ilaw mula Pin 1 hanggang Pin 8.',
            'Subukan ang Crossover cable at patunayan ang 1-3 at 2-6 pin swap.',
            'Isaksak ang kable sa pagitan ng PC at switch upang ma-verify ang Gigabit Ethernet link speed sa Windows.'
          ],
          starterCode: `// Cable Tester Verification Matrix:
Straight-Through Test: [PASS 1-2-3-4-5-6-7-8]
Crossover Test:        [PASS 3-6-1-4-5-2-7-8]
Link Speed Detected:   [1.0 Gbps Full Duplex]`,
          expectedOutcome: '100% continuity sa lahat ng 8 pins nang walang open o short circuit faults.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.3: Network Cable Continuity & Diagnostics Report',
          sheetName: 'Cable_Testing_Report',
          description: 'Itala ang bawat pin testing result para sa bawat mag-aaral sa batch.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Led pattern matrix para sa 5 cables.',
            'Fault diagnosis analysis sheet para sa miswired samples.',
            'Sign-off ng Assessor na gumagana ang mga kable.'
          ],
          rubric: [
            { criteria: 'Pin Continuity & Correct Sequence', points: 45 },
            { criteria: 'Diagnostic Troubleshooting Explanation', points: 35 },
            { criteria: 'Accurate Report Documentation', points: 20 }
          ]
        }
      }
    ]
  },

  {
    title: 'COC 2 - Module 4: IPv4 Subnetting, Router/Switch Configuration & Resource Sharing',
    duration: '1 Linggo (35 Oras)',
    overview: 'Pag-configure ng IP addresses, Subnet Masks, Default Gateways, pag-setup ng Wireless Router (DHCP, WPA3, SSID, MAC Filtering), at pagbabahagi ng Files at Printers sa Local Area Network.',
    lessons: [
      {
        title: 'Lesson 2.4: IPv4 Addressing, Class C Subnetting, Default Gateways & Ping Diagnostics',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=s_Ntt6eTn94',
        videoTitle: 'IPv4 Addressing, Subnet Masks & Gateway Setup for Beginners',
        objective: 'Maintindihan ang IPv4 Class C addressing (/24 subnet mask), mai-configure ang Static IP sa Windows, at ma-verify ang end-to-end connectivity gamit ang Ping at Traceroute.',
        theoryContent: `Ang bawat device sa computer network ay nangangailangan ng natatanging (unique) Logical Address na tinatawag na IP Address.

1. ANATOMYA NG IPV4 ADDRESS:
• 32-bit binary number na nahahati sa apat na 8-bit octets: Hal. 192.168.1.100
• Class C Address Range: 192.0.0.0 hanggang 223.255.255.255
• Default Subnet Mask (/24): 255.255.255.0
  - Unang tatlong octets (192.168.1) = Network ID (Lahat ng devices sa parehong switch ay dapat magkapareho ang Network ID).
  - Huling octet (.100) = Host ID (Dapat unique sa bawat PC).

2. MGA PANGUNAHING BAHAGI:
• IP Address: 192.168.1.10
• Subnet Mask: 255.255.255.0
• Default Gateway: 192.168.1.1 (Ang IP address ng router palabas sa internet o ibang network).
• Preferred DNS: 8.8.8.8 (Google) o 1.1.1.1 (Cloudflare).`,
        codeSnippet: `// Network Configuration & Testing via CLI:
ipconfig /all
ping 127.0.0.1             // Loopback test (sinusuri kung gumagana ang TCP/IP stack)
ping 192.168.1.1           // Ping sa Default Gateway (Router)
ping 192.168.1.20          // Ping sa kabilang workstation sa network
tracert 8.8.8.8            // Traceroute sa public destination`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.4: Static IP Configuration & Peer Connectivity Test',
          instructions: [
            'Buksan ang Network Connections (`ncpa.cpl`).',
            'Piliin ang Ethernet -> Properties -> Internet Protocol Version 4 (TCP/IPv4).',
            'Itakda ang Static IP: IP = 192.168.1.10, Subnet Mask = 255.255.255.0, Gateway = 192.168.1.1.',
            'Sa pangalawang PC, itakda ang IP = 192.168.1.11.',
            'Mula sa Command Prompt, mag-ping mula PC1 patungong PC2 at patunayan ang 0% packet loss.'
          ],
          starterCode: `// Ping Test Results:
Pinging 192.168.1.11 with 32 bytes of data:
Reply from 192.168.1.11: bytes=32 time<1ms TTL=128
Reply from 192.168.1.11: bytes=32 time<1ms TTL=128
Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`,
          expectedOutcome: 'Matagumpay na communication sa pagitan ng dalawang computer nang walang firewall blockage.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.4: Network IP Addressing Scheme & Subnet Worksheet',
          sheetName: 'IP_Addressing_Scheme',
          description: 'Magdisenyo ng IP assignment table para sa isang computer shop o school laboratory na may 30 computers.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng IP address, Subnet Mask, Gateway, at Hostname ng 30 PCs.',
            'Network ID, Broadcast Address, at Usable Host Range calculations.',
            'Screenshot ng matagumpay na ping output.'
          ],
          rubric: [
            { criteria: 'IP Addressing Logic & Non-Conflict', points: 40 },
            { criteria: 'Subnet Math Accuracy', points: 30 },
            { criteria: 'CLI Verification Proof', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 2.5: Wireless Router & Access Point Configuration (SSID, DHCP, WPA3 & MAC Filtering)',
        duration: '55 mins',
        videoUrl: 'https://www.youtube.com/watch?v=p35Y4X9E7Z0',
        videoTitle: 'Configuring Wireless Router for TESDA CSS NC II (Step by Step)',
        objective: 'I-configure ang Wireless Router via Web GUI: palitan ang default admin password, i-setup ang DHCP IP Pool, i-configure ang Wi-Fi SSID at WPA2/WPA3 security, at paganahin ang Wireless MAC Filtering.',
        theoryContent: `Sa TESDA COC 2 assessment, ang kandidato ay bibigyan ng Wireless Router na kailangang i-reset sa factory defaults at i-configure ayon sa assessment specs.

MGA HAKBANG SA PAG-SETUP NG WIRELESS ROUTER:
1. Pumasok sa Web GUI:
   - Buksan ang browser at pumunta sa Default IP: 192.168.0.1 o 192.168.1.1.
   - Mag-log in gamit ang default credentials (admin/admin o nakasulat sa ilalim ng router).

2. BAGUHIN ANG DEFAULT ADMIN PASSWORD:
   - Palitan agad ang default administrator password upang maiwasan ang unauthorized access.

3. LAN & DHCP POOL CONFIGURATION:
   - Router IP: 192.168.10.1
   - Subnet Mask: 255.255.255.0
   - DHCP Server: Enabled
   - Start IP: 192.168.10.100
   - End IP: 192.168.10.200 (Kaya nitong magbigay ng IP sa hanggang 101 devices).

4. WIRELESS SECURITY (WLAN):
   - Wireless Network Name (SSID): Hal. "TESDA_CSS_LAB"
   - Security Mode: WPA2-PSK (AES) o WPA3-Personal
   - Pre-Shared Key (Password): Minimum 8 characters

5. WIRELESS MAC FILTERING:
   - Kunin ang Physical Address (MAC: xx-xx-xx-xx-xx-xx) ng student PC.
   - Piliin ang "Allow list" (Whitelisting) upang tanging ang mga rehistradong devices lamang ang makakonekta.`,
        codeSnippet: `// Get PC's Physical MAC Address via Command Prompt:
getmac /v
ipconfig /all | findstr "Physical"`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.5: Full Wireless Router Configuration from Factory Reset',
          instructions: [
            'Pindutin ang Reset button ng router gamit ang paperclip sa loob ng 10 segundo.',
            'Ikabit ang PC sa LAN Port 1 ng router gamit ang patch cable.',
            'Pumasok sa admin panel at itakda ang bagong LAN IP at DHCP range.',
            'I-set up ang Wi-Fi SSID at strong security passphrase.',
            'Magdagdag ng isang MAC address sa MAC Filtering table at subukang mag-connect.'
          ],
          starterCode: `// Router Configuration Summary:
Router LAN IP:        192.168.10.1
DHCP Address Pool:    192.168.10.100 - 192.168.10.200
SSID Name:            TESDA_CSS_EXAM
Security:             WPA2-PSK AES
MAC Filtering:        Enabled (Allow listed only)`,
          expectedOutcome: 'Isang fully functional at secured wireless router na nagbibigay ng dynamic IP sa mga kliyente.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.5: Wireless Router Security & Configuration Sheet',
          sheetName: 'Router_Config_Audit',
          description: 'Idokumento ang wireless channels, frequency bands (2.4 GHz vs 5 GHz), at security configurations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Kumpletong table ng router settings at credentials.',
            'MAC Filtering registration list.',
            'Verification screenshot ng kustomer na nakakuha ng IP via DHCP.'
          ],
          rubric: [
            { criteria: 'Correct DHCP Pool & LAN IP Setup', points: 35 },
            { criteria: 'Wireless Security & MAC Filtering Accuracy', points: 35 },
            { criteria: 'Documentation & Reset Verification', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 2.6: Peer-to-Peer & Client-Server Resource Sharing: File Permissions & Network Printers',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=e77j5q4BkWc',
        videoTitle: 'How to Share Files and Printers over Network in Windows 10/11',
        objective: 'Maipamahagi ang shared folder na may tamang NTFS at Share permissions at makapag-share ng network printer sa mga kliyente sa parehong workgroup.',
        theoryContent: `Ang pangunahing silbi ng computer network sa isang opisina o eskwelahan ay ang pagbabahagi ng resources tulad ng storage at printers.

1. ADVANCED SHARING SETTINGS SA WINDOWS:
• Buksan ang Network and Sharing Center -> Change advanced sharing settings.
• Turn on network discovery.
• Turn on file and printer sharing.
• Turn off password protected sharing (o gumawa ng dedicated standard user account para sa authorized sharing).

2. PAGKAKAIBA NG SHARE PERMISSIONS AT NTFS PERMISSIONS:
• Share Permissions (Nalalapat lamang kapag ina-access ang folder via network path: \`\\\\computer_name\\share_name\`):
  - Read, Change, Full Control.
• NTFS Permissions (Nalalapat sa lokal at network):
  - Read & Execute, List folder contents, Read, Write, Modify, Full Control.
• Tandaan: Ang PINAKA-RESTRICTIVE na permission ang mananaig (Effective Permission).

3. PAG-SHARE NG PRINTER:
• Pumunta sa Devices and Printers / Printers & Scanners.
• Piliin ang nakakabit na printer -> Printer Properties -> Sharing tab.
• I-check ang "Share this printer" at magbigay ng maikling Share Name.`,
        codeSnippet: `// Quick Network Access via Windows Run (Win + R):
\\\\192.168.1.10\\Shared_Folder
\\\\PC-STUDENT-01\\Public_Docs

// View Active Network Shares via Command Prompt:
net share
net view`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.6: Secure Folder and Printer Sharing Demonstration',
          instructions: [
            'Gumawa ng folder sa Drive D: na may pangalang `D:\\CSS_EXAM_FILES`.',
            'I-share ang folder sa network na may "Read/Write" access para sa Workgroup users.',
            'Maglagay ng test text file sa loob ng folder.',
            'Mula sa pangalawang PC, buksan ang network path `\\\\192.168.1.10\\CSS_EXAM_FILES` at mag-save ng bagong dokumento.',
            'I-share ang dummy o virtual printer (Microsoft Print to PDF) sa network.'
          ],
          starterCode: `// Sharing Verification Log:
Target Workgroup:      WORKGROUP
Network Path:          \\\\192.168.1.10\\CSS_EXAM_FILES
Test File Created:     Student_Report.txt
Write Access Tested:   [SUCCESSFUL]`,
          expectedOutcome: 'Nai-share na folder at printer na naa-access ng ibang computer sa network nang walang permission error.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.6: Network Resource Sharing & Security Matrix',
          sheetName: 'Resource_Sharing_Matrix',
          description: 'Itala ang bawat shared resource, UNC path, access level (Read Only vs Read/Write), at security considerations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Pagsusuri sa Share vs NTFS permissions conflict.',
            'Screenshots ng successful network share file transfer.',
            'Talaan ng shared network printers at ports.'
          ],
          rubric: [
            { criteria: 'Folder & Printer Sharing Execution', points: 40 },
            { criteria: 'Permission & Security Implementation', points: 35 },
            { criteria: 'Workgroup Network Verification', points: 25 }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // CORE COMPETENCY 3 (COC 3): SET UP COMPUTER SERVERS (SUCS)
  // --------------------------------------------------------------------------
  {
    title: 'COC 3 - Module 5: Windows Server Installation, Active Directory (AD DS) & Domain Controller',
    duration: '1 Linggo (35 Oras)',
    overview: 'Pag-install ng Windows Server 2019/2022, pag-promote bilang Primary Domain Controller (DC), pag-configure ng Active Directory Domain Services (AD DS), DNS Server zones, at pagsasali ng Client Workstation sa Domain.',
    lessons: [
      {
        title: 'Lesson 3.1: Windows Server Installation, Post-Install Checklist & Static IP Provisioning',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=F01d9B5o6p8',
        videoTitle: 'Windows Server 2019/2022 Installation & Initial Server Setup (TESDA CSS NC II)',
        objective: 'Mai-install ang Windows Server na may Desktop Experience, maisagawa ang initial hardening, at magtakda ng Static IP bago mag-install ng server roles.',
        theoryContent: `Sa TESDA COC 3, ang kandidato ay may 1 oras upang gawing Domain Controller ang isang computer unit at i-join ang client workstation.

MGA MAHALAGANG PANUNTUNAN PARA SA SERVER:
1. DESKTOP EXPERIENCE:
   - Piliin ang "Windows Server Standard (Desktop Experience)" para may GUI interface.

2. STATIC IP ADDRESSING (KRITIKAL):
   - HINDI kailanman dapat naka-DHCP ang isang Domain Controller!
   - Server IP: 192.168.1.2
   - Subnet Mask: 255.255.255.0
   - Default Gateway: 192.168.1.1
   - Preferred DNS: 127.0.0.1 (Loopback address - dahil ang server din mismo ang magiging DNS server ng buong domain).

3. COMPUTER NAME (HOSTNAME):
   - Palitan ang random computer name ng makabuluhang pangalan (Hal. \`SERVER-DC01\`) bago i-promote sa Domain Controller, dahil mahirap itong palitan kapag naka-install na ang Active Directory.`,
        codeSnippet: `// PowerShell Server Post-Install Setup:
Rename-Computer -NewName "SERVER-DC01" -Restart
Get-NetIPAddress -InterfaceAlias "Ethernet"
Set-NetIPInterface -InterfaceAlias "Ethernet" -DHCP Disabled`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.1: Server Initial Provisioning and Static IP Setup',
          instructions: [
            'I-install ang Windows Server 2019/2022 sa server PC.',
            'Palitan ang Server Hostname sa `SERVER-DC01` at i-reboot.',
            'Itakda ang Static IP sa 192.168.1.2 at Preferred DNS sa 127.0.0.1.',
            'I-disable ang Windows Defender Firewall pansamantala para sa assessment labs kung kinakailangan.'
          ],
          starterCode: `// Server Baseline Configuration Log:
Server Hostname:     SERVER-DC01
Static IP Assigned:  192.168.1.2
Subnet Mask:         255.255.255.0
Preferred DNS:       127.0.0.1`,
          expectedOutcome: 'Isang malinis na Windows Server na may static network parameters at handa sa pag-promote bilang Domain Controller.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.1: Windows Server Baseline Audit & Checklist',
          sheetName: 'Server_Baseline_Audit',
          description: 'Itala ang server system specs, role prerequisites, at network interface details.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Server hardware capacity evaluation (RAM, Storage, CPU Cores).',
            'Network interface configuration snapshot.',
            'Initial hardening checklist.'
          ],
          rubric: [
            { criteria: 'Static IP & DNS Loopback Accuracy', points: 40 },
            { criteria: 'Server Hostname Standardization', points: 30 },
            { criteria: 'Installation Stability & Cleanliness', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 3.2: Promoting Server to Domain Controller (DC) via Active Directory Domain Services (AD DS)',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=P_X98aJ-08c',
        videoTitle: 'How to Install Active Directory Domain Services & Promote DC in Windows Server',
        objective: 'I-install ang AD DS role sa Server Manager at i-promote ang server bilang bagong Forest Root Domain (Hal. `epicademy.local` o `tesda.local`).',
        theoryContent: `Ang Active Directory Domain Services (AD DS) ang sentral na database ng mga computer, users, at security policies sa enterprise network.

MGA HAKBANG SA PAG-INSTALL AT PAG-PROMOTE:
1. I-INSTALL ANG ROLE:
   - Buksan ang Server Manager -> Manage -> Add Roles and Features.
   - Piliin ang "Role-based or feature-based installation".
   - Lagyan ng check ang: "Active Directory Domain Services". Awtomatikong idaragdag ang mga kailangang features.
   - I-click ang Install at hintayin matapos.

2. PROMOTE SERVER TO A DOMAIN CONTROLLER:
   - I-click ang dilaw na flag (Notification Flag) sa Server Manager -> "Promote this server to a domain controller".
   - Deployment Operation: Piliin ang "Add a new forest" (dahil ito ang unang domain).
   - Root domain name: Halimbawa: \`tesda.local\` o \`epicademy.local\`.
   - Domain Controller Options:
     * Forest & Domain Functional Level: Windows Server 2016
     * Lagyan ng check ang "Domain Name System (DNS) server".
     * Maglagay ng Directory Services Restore Mode (DSRM) password (Kabisaduhin ito!).
   - NetBIOS Domain Name: Awtomatikong magiging \`TESDA\` o \`EPICADEMY\`.
   - I-click ang Install. Awtomatikong magre-restart ang server pagkatapos.`,
        codeSnippet: `// PowerShell Alternative for Fast Automation:
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName "tesda.local" -InstallDns -Force`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.2: Full Active Directory Forest Deployment',
          instructions: [
            'I-install ang Active Directory Domain Services role sa Server Manager.',
            'I-promote ang server bilang Domain Controller para sa domain na `tesda.local`.',
            'I-reboot ang server at mag-log in bilang `TESDA\\Administrator`.',
            'Buksan ang Active Directory Users and Computers (`dsa.msc`) upang kumpirmahing buhay ang domain.'
          ],
          starterCode: `// Domain Controller Verification Log:
Domain Name:          tesda.local
NetBIOS Name:         TESDA
Logon Account:        TESDA\\Administrator
AD DS Status:         Running & Healthy`,
          expectedOutcome: 'Isang fully operating Active Directory Domain Controller na may running DNS service.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.2: Active Directory Architecture & Deployment Log',
          sheetName: 'ADDS_Deployment_Log',
          description: 'Idokumento ang forest functional level, DSRM security procedures, at AD database (NTDS.dit) location.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng AD DS deployment parameters.',
            'Pagsusuri sa papel ng SYSVOL at NTDS folders.',
            'Screen capture ng Active Directory administrative console.'
          ],
          rubric: [
            { criteria: 'Successful DC Promotion & Domain Creation', points: 45 },
            { criteria: 'DSRM Password Protocol & Security', points: 30 },
            { criteria: 'Verification via Admin Consoles', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 3.3: DNS Server Configuration & Joining Client Workstation to the Domain',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=0h0Xj4y550E',
        videoTitle: 'Joining a Windows 10 Client to a Windows Server Domain (TESDA CSS NC II)',
        objective: 'Mai-configure ang DNS Forward at Reverse Lookup Zones at matagumpay na mai-join ang client workstation sa domain nang walang DNS lookup error.',
        theoryContent: `Walang computer na makakasali sa Active Directory Domain kung hindi nito mahahanap ang Domain Controller sa pamamagitan ng DNS!

1. DNS CONFIGURATION SA SERVER:
• Buksan ang DNS Manager (dnsmgmt.msc).
• Sa ilalim ng Server -> Forward Lookup Zones -> tesda.local: Siguruhing naroroon ang Host (A) records at SRV records.
• Gumawa ng Reverse Lookup Zone:
  - New Zone -> Primary Zone -> To all DNS servers running on domain controllers.
  - IPv4 Reverse Lookup Zone -> Network ID: 192.168.1.

2. CLIENT WORKSTATION PREPARATION:
• Bago i-join ang Client PC sa Domain:
  - Pumunta sa Network Connections ng Client PC (ncpa.cpl).
  - Itakda ang Preferred DNS Server ng Client PC sa IP ng Server: 192.168.1.2! (Ito ang #1 dahilan kung bakit nag-eerror ang mga estudyante kapag hindi naituro nang maayos).
  - Mag-ping mula Client PC patungo sa domain name: ping tesda.local. Dapat mag-reply ang 192.168.1.2!

3. JOINING THE DOMAIN:
• Sa Client PC, pumunta sa System Properties (sysdm.cpl).
• I-click ang "Change...".
• Sa Member of, piliin ang "Domain" at i-type: tesda.local.
• Kapag hiningi ang credentials, ipasok ang Domain Admin username at password (TESDA\\Administrator).
• Matatanggap ang pagbati: "Welcome to the tesda.local domain!". Mag-restart ang Client PC.`,
        codeSnippet: `// Verify DNS Resolution on Client Workstation via CLI:
nslookup tesda.local 192.168.1.2
nltest /dsgetdc:tesda.local`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.3: Client Workstation Domain Join Demonstration',
          instructions: [
            'Sa Server, gumawa ng Reverse Lookup Zone para sa 192.168.1.x network.',
            'Sa Client PC, itakda ang DNS address sa 192.168.1.2 (Server IP).',
            'Subukan ang `nslookup tesda.local` sa Client Command Prompt.',
            'I-join ang Client PC sa domain gamit ang System Properties.',
            'I-reboot ang Client PC at mag-log in gamit ang domain credentials.'
          ],
          starterCode: `// Client Domain Join Status:
Preferred DNS Configured:  192.168.1.2
NSLOOKUP Result:           Address 192.168.1.2 resolved
Domain Join Message:       "Welcome to the tesda.local domain"
Reboot Verified:           [YES]`,
          expectedOutcome: 'Client Workstation na opisyal na miyembro ng domain at namamahalaan mula sa server.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.3: DNS Resolution & Domain Join Verification Form',
          sheetName: 'Domain_Join_Audit',
          description: 'Itala ang bawat DNS resource record at client connection parameters.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng Forward at Reverse DNS records.',
            'Troubleshooting guide para sa karaniwang "DNS name does not exist" error.',
            'Proof of domain membership sa client PC.'
          ],
          rubric: [
            { criteria: 'Correct DNS Client Pointing & Resolution', points: 40 },
            { criteria: 'Clean Client Domain Join Execution', points: 35 },
            { criteria: 'Technical Documentation & Troubleshooting', points: 25 }
          ]
        }
      }
    ]
  },

  {
    title: 'COC 3 - Module 6: DHCP Server Scopes, User Accounts, OUs & Group Policy Objects (GPO)',
    duration: '1 Linggo (35 Oras)',
    overview: 'Pag-install ng DHCP Server role, paggawa ng DHCP scopes at reservations, paggawa ng Organizational Units (OUs) at User Accounts, at pagpapatupad ng Group Policy Objects (GPO) para sa desktop lockdown at folder redirection.',
    lessons: [
      {
        title: 'Lesson 3.4: Dynamic Host Configuration Protocol (DHCP) Server: Scopes, Exclusions & Reservations',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Uf8pM8l6X30',
        videoTitle: 'Configuring DHCP Server on Windows Server (TESDA CSS NC II Practical)',
        objective: 'I-install ang DHCP Server role, i-authorize sa Active Directory, gumawa ng scope na may IP exclusions, at mag-reserve ng permanenteng IP para sa network printer o client.',
        theoryContent: `Ang DHCP Server ang awtomatikong naglalaan ng IP address, subnet mask, default gateway, at DNS server sa mga computers sa network upang maiwasan ang manual IP conflicts.

DORA PROCESS SA DHCP:
1. Discover (Client broadcast: "Naghahanap ako ng DHCP server!")
2. Offer (Server unicast: "Mayroon akong IP 192.168.1.50 para sa iyo.")
3. Request (Client broadcast: "Gusto ko ang inialok mong IP 192.168.1.50.")
4. Acknowledge (Server unicast: "Kumpirmado! Sa iyo na ang IP 192.168.1.50 sa loob ng 8 araw.")

MGA HAKBANG SA CONFIGURATION:
1. Add Roles and Features -> Piliin ang "DHCP Server".
2. Pagkatapos ng install, i-click ang "Complete DHCP configuration" at i-authorize ang server sa Active Directory.
3. Buksan ang DHCP Management console (dhcpmgmt.msc).
4. Sa ilalim ng IPv4, mag-right click -> "New Scope...":
   - Scope Name: Hal. "LAN_CLIENT_SCOPE"
   - IP Address Range: 192.168.1.20 hanggang 192.168.1.250
   - Exclusions: 192.168.1.20 hanggang 192.168.1.50 (Inilalaan para sa mga servers, printers, at switches).
   - Lease Duration: 8 Days (o 8 Hours para sa high-turnover Wi-Fi).
   - Configure DHCP Options:
     * Router (Default Gateway): 192.168.1.1
     * DNS Server: 192.168.1.2 (Server IP)
5. I-activate ang Scope.`,
        codeSnippet: `// Verify DHCP Lease on Client Workstation:
ipconfig /release
ipconfig /renew
ipconfig /all | findstr "DHCP Server"`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.4: DHCP Server Role Deployment & Client IP Lease',
          instructions: [
            'I-install at i-authorize ang DHCP Server role sa Windows Server.',
            'Lumikha ng scope na may exclusions para sa network devices.',
            'I-configure ang Client Workstation sa "Obtain an IP address automatically".',
            'I-renew ang IP sa Client at patunayang nakuha nito ang tamang Gateway at DNS mula sa server.'
          ],
          starterCode: `// DHCP Scope Verification Log:
Scope Name:          TESDA_STUDENT_POOL
Range:               192.168.1.100 - 192.168.1.200
Excluded Range:      192.168.1.100 - 192.168.1.110
Client Leased IP:    192.168.1.111
Lease Active:        [YES]`,
          expectedOutcome: 'Client Workstations na awtomatikong nakakakuha ng IP parameters mula sa Windows Server nang walang manual intervention.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.4: DHCP Scope Configuration & Lease Table',
          sheetName: 'DHCP_Scope_Table',
          description: 'Itala ang scope boundaries, exclusion pools, reservation MAC mappings, at lease expiration dates.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng DHCP Scope parameters.',
            'DHCP reservation table para sa 3 network printers.',
            'Screenshot ng Address Leases console na nagpapakita ng connected clients.'
          ],
          rubric: [
            { criteria: 'Scope Creation & Exclusion Accuracy', points: 40 },
            { criteria: 'Successful Client Dynamic Lease', points: 35 },
            { criteria: 'DHCP Reservation Setup', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 3.5: Organizational Units (OUs), User Accounts & Security Group Management',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=3R8d0u3m_w8',
        videoTitle: 'Creating OUs, Users, and Groups in Active Directory (TESDA CSS NC II)',
        objective: 'Lumikha ng maayos na hierarchy ng Organizational Units (OUs), mag-provision ng maramihang User Accounts na may password policies, at mag-organisa ng Security Groups.',
        theoryContent: `Ang Organizational Unit (OU) ay isang container sa loob ng Active Directory kung saan inilalagay ang mga users, groups, at computers upang mapalapatan ng Group Policy Objects (GPO).

1. BEST PRACTICE SA OU HIERARCHY:
• Huwag ilagay ang mga users sa default na "Users" container, dahil hindi nalalapatan ng GPO ang default containers!
• Gumawa ng sariling Top-Level OU: Halimbawa: \`EPICADEMY_CORP\` o \`TESDA_INSTITUTE\`
  - Sub-OU: \`Administration\`
  - Sub-OU: \`Accounting\`
  - Sub-OU: \`Faculty\`
  - Sub-OU: \`Students\`
  - Sub-OU: \`Workstations\`

2. USER ACCOUNT PROVISIONING:
• First Name, Last Name, User Logon Name (Hal. \`j.aviguetero\`).
• Password Options:
  - "User must change password at next logon" (Karaniwan sa bagong empleyado).
  - "Password never expires" (Para sa service accounts at lab exam purposes).
  - "Account is disabled" (Para sa mga pansamantalang umalis na empleyado).

3. SECURITY GROUPS:
• Gumawa ng Security Group: Hal. \`IT_Support_Staff\`
• I-assign ang users bilang miyembro ng grupo upang magkaroon sila ng pare-parehong access sa shared resources.`,
        codeSnippet: `// PowerShell Bulk User Creation Sample:
New-ADOrganizationalUnit -Name "Faculty" -Path "DC=tesda,DC=local"
New-ADUser -Name "Juan Dela Cruz" -SamAccountName "jdelacruz" -UserPrincipalName "jdelacruz@tesda.local" -Path "OU=Faculty,DC=tesda,DC=local" -AccountPassword (ConvertTo-SecureString "P@ssw0rd2026!" -AsPlainText -Force) -Enabled $true`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.5: OU Hierarchy & User Account Provisioning',
          instructions: [
            'Buksan ang Active Directory Users and Computers (`dsa.msc`).',
            'Gumawa ng Top-Level OU na may pangalang `CSS_ASSESSMENT`.',
            'Sa loob nito, gumawa ng Sub-OU na `Teachers` at `Students`.',
            'Gumawa ng dalawang user accounts na may matibay na password.',
            'Mag-log in sa Client PC gamit ang bagong gawang user account.'
          ],
          starterCode: `// User Provisioning Record:
OU Created:             OU=Students,OU=CSS_ASSESSMENT,DC=tesda,DC=local
User Created:           student01 (John Santos)
User Logon Name:        student01@tesda.local
Logon Verified on PC:   [SUCCESSFUL]`,
          expectedOutcome: 'Maayos na naka-organisang Active Directory structure at matagumpay na domain logon gamit ang ordinaryong user account.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.5: Active Directory User & OU Directory Directory',
          sheetName: 'AD_User_Directory',
          description: 'Magtala ng 20 mock users na may Department, Position, Username, at Assigned OU.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            '20-user directory template na handa para sa CSV bulk import.',
            'Organizational tree diagram ng Active Directory structure.',
            'Group membership mapping sheet.'
          ],
          rubric: [
            { criteria: 'OU Hierarchy Design & Cleanliness', points: 40 },
            { criteria: 'User Account Provisioning & Security', points: 35 },
            { criteria: 'Group Association Accuracy', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 3.6: Group Policy Management (GPO): Password Policy, Wallpaper Lock & Folder Redirection',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=uK8A0P9h3Y0',
        videoTitle: 'Configuring Group Policy Objects (GPO) for Beginners in Windows Server',
        objective: 'Gumawa at mag-link ng Group Policy Object (GPO) sa isang OU upang ipatupad ang Desktop Wallpaper Lock, pag-disable sa USB removable storage, at pagpapatupad ng Password Complexity.',
        theoryContent: `Ang Group Policy Management (gpmc.msc) ang pinakamakapangyarihang tool ng isang System Administrator upang ipatupad ang central security and environment restrictions sa daan-daang workstations.

MGA KARANIWANG GPO POLICIES SA TESDA ASSESSMENT:
1. DESKTOP WALLPAPER LOCK:
   - User Configuration -> Policies -> Administrative Templates -> Desktop -> Desktop -> Desktop Wallpaper.
   - Piliin ang "Enabled" at ilagay ang network path: \\\\server-dc01\\shared_folder\\wallpaper.jpg.
   - Paganahin din ang "Prohibit changes to desktop wallpaper" upang hindi mapalitan ng estudyante.

2. PREVENT ACCESS TO REGISTRY EDITING TOOLS & CONTROL PANEL:
   - I-disable ang regedit upang hindi magalaw ng user ang system settings.
   - I-restrict ang Control Panel at Windows Settings.

3. REMOVABLE STORAGE ACCESS (USB BLOCKING):
   - Computer Configuration -> Policies -> Administrative Templates -> System -> Removable Storage Access.
   - Piliin ang "All Removable Storage classes: Deny all access" (Napakahalaga para sa cybersecurity at data leak prevention).

4. UPDATING GROUP POLICY SA CLIENT:
   - Hindi kailangang maghintay ng 90 minuto.
   - Patakbuhin sa Client Command Prompt: gpupdate /force.`,
        codeSnippet: `// Force GPO Update and Diagnostic Result in Windows:
gpupdate /force
gpresult /r               // Ipinapakita ang mga nalapat na GPO sa logged-on user!
gpresult /h gpreport.html // Lumilikha ng detalyadong HTML audit report`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.6: GPO Creation, Linking and Enforcement on Client',
          instructions: [
            'Buksan ang Group Policy Management (`gpmc.msc`).',
            'Gumawa ng bagong GPO na may pangalang `Student_Lockdown_Policy`.',
            'I-link ang GPO sa `Students` OU.',
            'I-configure ang Desktop Wallpaper at i-disable ang Control Panel.',
            'Sa Client PC, mag-log in bilang mag-aaral at patakbuhin ang `gpupdate /force`.',
            'Subukang buksan ang Control Panel at patunayan ang restriction warning.'
          ],
          starterCode: `// GPO Enforcement Verification:
Policy Name:           Student_Lockdown_Policy
Linked OU:             OU=Students
gpupdate Result:       "Computer Policy update has completed successfully."
Control Panel Test:    "This operation has been cancelled due to restrictions..."`,
          expectedOutcome: 'Awtomatikong nalapat na security restrictions sa client workstation na pinamamahalaan ng server.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.6: Group Policy Security Baseline & Audit Sheet',
          sheetName: 'GPO_Security_Audit',
          description: 'Maglista ng 10 essential enterprise GPO rules para sa corporate governance at security compliance.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Audit matrix ng 10 GPOs at ang kani-kanilang registry keys.',
            'HTML report export mula sa gpresult tool.',
            'Demonstration score sheet para sa GPO section ng COC 3.'
          ],
          rubric: [
            { criteria: 'GPO Configuration & Correct OU Linking', points: 40 },
            { criteria: 'Successful Policy Inheritance on Client', points: 35 },
            { criteria: 'gpresult Audit Documentation', points: 25 }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // CORE COMPETENCY 4 (COC 4): MAINTAIN AND REPAIR COMPUTER SYSTEMS & NETWORKS
  // --------------------------------------------------------------------------
  {
    title: 'COC 4 - Module 7: Preventive Maintenance (PMS), Multimeter Voltage Testing & Hardware Diagnosis',
    duration: '1 Linggo (35 Oras)',
    overview: 'Pagsasagawa ng Preventive Maintenance Schedule (PMS), pagsusuri ng ATX 24-Pin Power Supply gamit ang Digital Multimeter (+12V, +5V, +3.3V, PS_ON pin jump), pagsubok sa CR2032 CMOS battery, at pagsusuri ng POST beep codes.',
    lessons: [
      {
        title: 'Lesson 4.1: Preventive Maintenance Schedule (PMS), Cleaning & Thermal Pasting',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Jm3X_mFz_U0',
        videoTitle: 'Preventive Maintenance of Computer Hardware (TESDA CSS NC II Guide)',
        objective: 'Gumawa ng buwanan at quarterly Preventive Maintenance Schedule (PMS) at maisagawa ang ligtas na paglilinis ng alikabok, fans, at pagpapalit ng tuyong thermal paste.',
        theoryContent: `Ang Preventive Maintenance (PM) ay ang regular na pagpapanatili ng kagamitan upang maiwasan ang biglaang pagkasira (unplanned downtime) at pahabain ang buhay ng computer.

1. MGA PANGUNAHING KALABAN NG COMPUTER HARDWARE:
• Alikabok (Dust): Nagdudulot ng thermal throttling dahil barado ang heatsink fins.
• Init (Overheating): Nagiging sanhi ng thermal shutdown at degradation ng silicon chips.
• Halumigmig (Humidity & Moisture): Nagdudulot ng kalawang at short circuit.
• Pabago-bagong Kuryente (Power Surges): Sumisira sa sensitibong capacitors sa motherboard.

2. MGA KAGAMITAN SA PAGLILINIS:
• Anti-static Soft Bristle Brush
• Compressed Air Canister o Electric Air Blower (Tandaan: Hawakan ang fan blades habang nagbo-blower upang hindi mag-generate ng back-EMF voltage).
• 90%+ Isopropyl Alcohol at Lint-Free Microfiber Cloth
• High-quality Non-Conductive Thermal Paste (Artic MX-4 / Thermal Grizzly).`,
        codeSnippet: `// Standard Preventive Maintenance Frequency:
Daily:       Visual inspection, software backup confirmation
Weekly:      Antivirus definitions update, disk cleanup, temp files purge
Monthly:     Dust filter cleaning, cable inspection, event viewer error audit
Quarterly:   Full internal blowing, thermal paste inspection, UPS battery test`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.1: Physical PC Servicing and Thermal Re-pasting',
          instructions: [
            'I-unplug ang computer unit at ilabas sa open-air cleaning area.',
            'Hawakan ang mga fans bago hipan ng air blower ang heatsinks at power supply.',
            'Tanggalin ang CPU cooler, linisin ang tuyong thermal paste gamit ang alcohol.',
            'Maglagay ng bagong thermal paste at ibalik nang mahigpit ang cooler.',
            'Subukan ang CPU temperature bago at pagkatapos ng cleaning gamit ang HWMonitor.'
          ],
          starterCode: `// Thermal Performance Audit:
Before Cleaning Idle Temp:  58 °C
After Servicing Idle Temp:  38 °C (20 °C improvement)
Fan RPM Status:             Normal & Quiet`,
          expectedOutcome: 'Malinis na system unit na may 15°C hanggang 20°C na ibinaba sa thermal operating temperature.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.1: Preventive Maintenance Schedule (PMS) & Service Log',
          sheetName: 'PMS_Service_Log',
          description: 'Bumuo ng 1-taong Preventive Maintenance Calendar para sa isang institutional computer lab.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            '52-week preventive maintenance schedule matrix.',
            'Service checklist bawat computer unit.',
            'Thermal before/after benchmark results.'
          ],
          rubric: [
            { criteria: 'PMS Scheduling Comprehensiveness', points: 35 },
            { criteria: 'Practical Cleaning Technique & Safety', points: 35 },
            { criteria: 'Thermal Benchmark Documentation', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 4.2: Digital Multimeter Testing of ATX 24-Pin Power Supply & CMOS Battery',
        duration: '55 mins',
        videoUrl: 'https://www.youtube.com/watch?v=5FWXgQSokF4',
        videoTitle: 'How to Test a PC Power Supply with a Multimeter (Paperclip Test & Voltages)',
        objective: 'Matalakay ang ATX power rail tolerances, maisagawa ang paperclip jump test sa Pin 16 (PS_ON), at masukat ang +12V, +5V, +3.3V rails at 3.0V CR2032 CMOS battery gamit ang Digital Multimeter.',
        theoryContent: `Sa TESDA COC 4 Oral Questioning at Demonstration, madalas subukin ang paggamit ng Digital Multimeter sa pagsusuri ng Power Supply Unit (PSU).

1. ANG PAPERCLIP JUMP TEST (PAGPAPATAKBO NG PSU NANG WALANG MOTHERBOARD):
• Hanapin ang 24-pin ATX Main Power Connector.
• Hanapin ang Pin 16: Green Wire (PS_ON# - Power Supply On).
• Kumuha ng paperclip at i-jump ang Pin 16 (Green) sa kahit sinong Black Wire (Ground / COM tulad ng Pin 15 o Pin 17).
• Kapag umikot ang fan ng PSU, ibig sabihin ay tumutugon ang internal relay ng switching circuit.

2. MGA STANDARD NA BOLTAHE AT TOLERANCE (±5% Standard):
• Yellow Wires:  +12V DC  (Acceptable Range: +11.40V hanggang +12.60V) - Nagpapatakbo sa CPU at GPU.
• Red Wires:     +5V DC   (Acceptable Range: +4.75V hanggang +5.25V)   - Nagpapatakbo sa Logic Circuits at USB.
• Orange Wires:  +3.3V DC (Acceptable Range: +3.14V hanggang +3.47V)   - Nagpapatakbo sa RAM at Motherboard chipset.
• Blue Wire:     -12V DC  (±10% Tolerance)
• Purple Wire:   +5VSB    (Standby Power - May kuryente kahit nakapatay ang PC).
• Gray Wire:     Power Good (PG / PWR_OK - nagpapadala ng +5V signal kapag stable na ang kuryente).

3. PAGSUKAT SA CR2032 CMOS BATTERY:
• Itakda ang Multimeter sa DC Voltage (20V range).
• Ang bagong baterya ay dapat magbasa ng hindi bababa sa 3.0V hanggang 3.3V.
• Kapag bumaba sa 2.7V, mawawala ang tamang oras ng BIOS tuwing aalisin ang saksakan.`,
        codeSnippet: `// ATX 24-Pin Key Pins Quick Reference:
Pin 4 (Red):       +5.0V DC
Pin 8 (Gray):      Power Good (+5.0V DC)
Pin 9 (Purple):    +5VSB Standby (+5.0V DC always hot)
Pin 10/11 (Yellow):+12.0V DC
Pin 16 (Green):    PS_ON# (Jump to Black Ground to trigger PSU)
Pin 1/2 (Orange):  +3.3V DC`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.2: Hands-On Multimeter ATX Power Supply Benchmark',
          instructions: [
            'Ihiwalay ang PSU sa lahat ng piyesa ng computer.',
            'Gamitin ang paperclip upang i-jump ang Green wire (Pin 16) sa Black wire (Ground).',
            'I-set ang Digital Multimeter sa DC 20V.',
            'Ilagay ang Black probe sa kahit sinong Black COM port ng Molex o 24-pin.',
            'Ilagay ang Red probe sa Yellow wire (+12V), Red wire (+5V), at Orange wire (+3.3V).',
            'Sukatin ang CR2032 CMOS battery coin cell at itala ang boltahe.'
          ],
          starterCode: `// Multimeter Test Bench Readings:
Yellow Rail (+12V):   12.18 V (PASSED - within 5%)
Red Rail (+5V):        5.06 V (PASSED - within 5%)
Orange Rail (+3.3V):   3.34 V (PASSED - within 5%)
CMOS Battery:          3.15 V (HEALTHY)`,
          expectedOutcome: 'Ligtas at tumpak na paggamit ng digital multimeter para makumpirma kung buhay at ligtas ikabit ang PSU sa motherboard.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.2: Power Supply Voltage Diagnostic & Tolerance Log',
          sheetName: 'PSU_Voltage_Audit',
          description: 'Magtala ng 10 sinusuring PSUs at kalkulahin ang percentage deviation mula sa standard nominal voltage.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Calculated voltage tolerance matrix sa Google Sheets.',
            'CMOS battery life analysis.',
            'Fail/Pass safety certification form.'
          ],
          rubric: [
            { criteria: 'Safe Multimeter Handling & Setup', points: 40 },
            { criteria: 'Pin Measurement Accuracy (+12V, +5V, +3.3V)', points: 35 },
            { criteria: 'Voltage Tolerance Analysis in Sheet', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 4.3: Hardware Fault Isolation: POST Diagnostic Cards, RAM Reseating & BSOD Minidumps',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=3b9aF-3b99E',
        videoTitle: 'Troubleshooting Blue Screen of Death (BSOD) & Memory Faults for Techs',
        objective: 'Matiyak ang sanhi ng hardware crashes gamit ang POST Diagnostic Cards, memory testing tools (MemTest86), at pagsusuri ng Windows Blue Screen of Death (BSOD) minidump crash files gamit ang BlueScreenView.',
        theoryContent: `Kapag ang computer ay nag-reboot nang kusa o nagpakita ng Blue Screen of Death (BSOD), mayroong hardware o low-level kernel driver failure.

1. KARANIWANG BSOD ERROR CODES AT SANHI:
• \`MEMORY_MANAGEMENT\` (0x0000001A): Sirang RAM stick o maruming gold pins.
• \`CRITICAL_PROCESS_DIED\` (0x000000EF): Nawalan ng access sa boot drive o corrupt ang OS kernel.
• \`SYSTEM_THREAD_EXCEPTION_NOT_HANDLED\`: Sirang Graphics card driver o outdated hardware firmware.
• \`WHEA_UNCORRECTABLE_ERROR\`: Overheating sa CPU o unstable voltage mula sa motherboard VRMs.

2. SYSTEMATIC FAULT ISOLATION (HALF-SPLIT TECHNIQUE):
• Alisin ang lahat ng non-essential peripherals: Tanggalin ang GPU kung may integrated graphics, tanggalin ang audio card, tanggalin ang lahat ng RAM maliban sa isa.
• Linisin ang gold contacts ng RAM gamit ang rubber pencil eraser at punasan ng alcohol bago ibalik.
• Subukan ang bawat DIMM slot nang paisa-isa upang matukoy kung ang slot o ang mismong RAM ang may depekto.`,
        codeSnippet: `// Windows Memory Diagnostic & Dump Analysis:
mdsched.exe                  // Windows Memory Diagnostic Tool (Reboots PC to test RAM)
chkdsk C: /f /r              // Disk surface & sector scan
sfc /scannow                 // Integrity scan of protected system files`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.3: Simulating and Resolving Memory & Storage Faults',
          instructions: [
            'Mag-install ng BlueScreenView sa test computer.',
            'Buksan ang sample minidump file (`C:\\Windows\\Minidump\\*.dmp`) at alamin ang Caused By Driver.',
            'Patakbuhin ang Windows Memory Diagnostic tool (`mdsched.exe`).',
            'I-diagnose ang S.M.A.R.T. health ng SSD gamit ang CrystalDiskInfo at suriin ang Reallocated Sectors Count.'
          ],
          starterCode: `// Fault Isolation Log:
Bug Check Code:       0x0000001A (MEMORY_MANAGEMENT)
Caused by Driver:     ntoskrnl.exe
Action Taken:         RAM stick cleaned and reseated in Slot 2
Result:               Zero errors after 2 passes of memory diagnostic`,
          expectedOutcome: 'Mabilis na pagtukoy sa ugat ng system crash at pagpapanumbalik ng computer sa 100% stable condition.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.3: Hardware Fault Isolation & Incident Ticket Sheet',
          sheetName: 'Incident_Ticket_Log',
          description: 'Bumuo ng opisyal na IT Helpdesk Incident Ticket na naglalaman ng Problem Description, Root Cause Analysis, at Resolution Steps.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Incident ticket para sa 3 hardware failure scenarios.',
            'S.M.A.R.T. health status matrix ng storage drives.',
            'Memory test logs and verification.'
          ],
          rubric: [
            { criteria: 'Root Cause Identification Accuracy', points: 40 },
            { criteria: 'Methodical Isolation Steps', points: 35 },
            { criteria: 'Technical Documentation & Ticketing', points: 25 }
          ]
        }
      }
    ]
  },

  {
    title: 'COC 4 - Module 8: Software Repair, Disk Cloning, Disaster Recovery & TESDA Assessment Prep',
    duration: '1 Linggo (35 Oras)',
    overview: 'Paggamit ng DISM at SFC para sa OS image repair, disk cloning via Clonezilla / Macrium Reflect para sa mass deployment at backup, pagpuno ng Job Order Sheets, at paghahanda sa TESDA Institutional Assessment.',
    lessons: [
      {
        title: 'Lesson 4.4: Software Repair Tools: SFC, DISM Image Health, Safe Mode & Malware Remediation',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=U3d4aWb4_Z0',
        videoTitle: 'How to Repair Corrupted Windows Files with SFC and DISM Commands',
        objective: 'Maisagawa ang malalimang pagkukumpuni ng corrupt Windows system files gamit ang DISM at SFC, at malinis ang malware gamit ang Windows Malicious Software Removal Tool at Safe Mode.',
        theoryContent: `Bago magdesisyong mag-reformat ng computer ng kustomer, tungkulin ng isang responsableng ICT technician na subukang ayusin ang operating system nang hindi nawawala ang mga personal files ng kliyente.

MGA ADVANCED REPAIR COMMANDS SA WINDOWS:
1. DISM (Deployment Image Servicing and Management):
   - Sinusuri at inaayos ang Windows Component Store laban sa opisyal na online Microsoft image.
   - \`DISM /Online /Cleanup-Image /CheckHealth\` (Mabilis na pagsusuri kung may corruption).
   - \`DISM /Online /Cleanup-Image /ScanHealth\` (Malalimang scan ng component store).
   - \`DISM /Online /Cleanup-Image /RestoreHealth\` (Awtomatikong pag-download at pagpalit sa sirang system files).

2. SFC (System File Checker):
   - \`sfc /scannow\`
   - Sinusuri ang lahat ng protektadong operating system files at pinapalitan ang mga corrupt na kopya gamit ang cached clean files mula sa \`%WinDir%\\System32\\dllcache\`.

3. SAFE MODE BOOT (Shift + Restart):
   - Naglo-load ng Windows na may minimum na drivers at services lamang.
   - Mainam para sa pagtanggal ng stubborn malware, crypto miners, at sirang graphics drivers.`,
        codeSnippet: `// Master Command Chain for Windows Repair:
DISM /Online /Cleanup-Image /RestoreHealth
sfc /scannow
netsh winsock reset       // Inaayos ang sirang network socket protocol
ipconfig /flushdns`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.4: Complete OS Component Store Recovery Demonstration',
          instructions: [
            'Buksan ang Command Prompt bilang Administrator.',
            'Patakbuhin ang DISM RestoreHealth command at hintaying umabot sa 100%.',
            'Patakbuhin ang `sfc /scannow` at suriin ang output log sa `C:\\Windows\\Logs\\CBS\\CBS.log`.',
            'I-reset ang network stack gamit ang `netsh winsock reset` at i-reboot ang computer.'
          ],
          starterCode: `// System File Checker Expected Output:
Verification 100% complete.
Windows Resource Protection found corrupt files and successfully repaired them.
Details are included in the CBS.Log windir\\Logs\\CBS\\CBS.log.`,
          expectedOutcome: 'Matagumpay na naibalik ang sigla at kalusugan ng Windows system files nang hindi kinailangang mag-reformat.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.4: Software Diagnostic & System File Recovery Record',
          sheetName: 'Software_Repair_Log',
          description: 'Itala ang mga repairs na isinagawa sa bawat laboratory PC gamit ang DISM, SFC, at antivirus tools.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Talaan ng DISM at SFC diagnostic execution status.',
            'Malware remediation checklist.',
            'Customer acceptance form para sa software repair.'
          ],
          rubric: [
            { criteria: 'Correct Command Execution Order', points: 40 },
            { criteria: 'CBS Log Interpretation', points: 30 },
            { criteria: 'Post-Repair Verification Testing', points: 30 }
          ]
        }
      },
      {
        title: 'Lesson 4.5: Full Disk Cloning with Clonezilla / Macrium Reflect & System Image Backup',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=LClr3FPg4-8',
        videoTitle: 'Complete Disk Cloning Tutorial with Macrium Reflect / Clonezilla',
        objective: 'Makagawa ng 1-to-1 exact clone ng operating system drive mula HDD patungong high-speed SSD o makalikha ng System Image backup para sa rapid disaster recovery.',
        theoryContent: `Sa isang computer laboratory o enterprise office na may 50 magkakaparehong computer, hindi praktikal na mag-install ng Windows at software nang paisa-isa nang 50 beses. Dito pumapasok ang Disk Cloning.

1. DISK CLONING VS DISK IMAGING:
• Disk Cloning (Disk to Disk):
  - Kinokopya ang bawat sector mula Source Disk patungong Target Disk nang direkta.
  - Pagkatapos ng clone, isaksak lamang ang Target Disk at magbo-boot na agad ito bilang gumaganang OS.
• Disk Imaging (Disk to File):
  - Sine-save ang buong hard drive bilang isang single image file (Hal. \`.iso\`, \`.img\`, o \`.mrimg\`) sa external storage o network share.

2. MGA DAPAT TANDAAN SA CLONING:
• Ang Target Disk ay DAPAT kapantay o mas malaki ang capacity kaysa sa nagamit na space (Used Space) ng Source Disk.
• Burado ang lahat ng lumang data sa Target Disk kapag sinimulan ang clone!
• Siguruhing piliin ang "Copy exact partitions including EFI and Recovery partitions".`,
        codeSnippet: `// CLI Image Deployment via DISM:
dism /Capture-Image /ImageFile:D:\\Images\\MasterImage.wim /CaptureDir:C:\\ /Name:"Windows10Master"
dism /Apply-Image /ImageFile:D:\\Images\\MasterImage.wim /Index:1 /ApplyDir:E:\\`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.5: Disk-to-Disk Cloning & Boot Verification',
          instructions: [
            'Ikabit ang Target SSD sa computer gamit ang USB-to-SATA adapter o pangalawang internal SATA port.',
            'Buksan ang cloning software (Macrium Reflect o Clonezilla bootable USB).',
            'Piliin ang Source Disk (Drive 0) at i-drag ang lahat ng partitions patungo sa Target Disk (Drive 1).',
            'Simulan ang cloning process at hintayin ang 100% completion.',
            'Tanggalin ang lumang hard drive, ikabit ang bagong cloned SSD, at i-boot ang computer upang patunayang gumagana.'
          ],
          starterCode: `// Cloning Verification Log:
Source Disk:      256GB NVMe SSD (120GB Used)
Target Disk:      500GB SATA SSD
Cloning Time:     14 mins 22 secs
Target Boot Test: [SUCCESSFUL - Boot time under 10 seconds]`,
          expectedOutcome: 'Isang ganap na bootable clone drive na naglalaman ng lahat ng installed applications at user files.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.5: Disk Cloning & Disaster Recovery Benchmark Sheet',
          sheetName: 'Disk_Cloning_Audit',
          description: 'Magtala ng sector transfer rate, total capacity, partition alignment, at boot time improvements matapos mag-clone sa SSD.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Cloning benchmark results (Time, Data Rate, Source vs Target size).',
            'Partition alignment verification (4K aligned check).',
            'Disaster recovery readiness checklist.'
          ],
          rubric: [
            { criteria: 'Flawless Cloning Execution & Bootability', points: 45 },
            { criteria: 'Partition Alignment & Data Integrity', points: 30 },
            { criteria: 'Disaster Recovery Documentation', points: 25 }
          ]
        }
      },
      {
        title: 'Lesson 4.6: TESDA CSS NC II National Assessment Mock Exam, Demonstration & Job Order Sheet',
        duration: '60 mins',
        videoUrl: 'https://www.youtube.com/watch?v=3-x0w3QpBv8',
        videoTitle: 'TESDA CSS NC II Actual Assessment Tips & Oral Questioning Guide',
        objective: 'Makapaghanda sa aktuwal na TESDA National Assessment: kumpletuhin ang Job Order Sheet, maipasa ang Mock Hands-On Demonstration sa 4 na COCs, at masagot ang mga karaniwang Oral Questioning questions ng Assessor nang may tiwala at pananampalataya.',
        theoryContent: `Sa araw ng iyong TESDA National Assessment sa Computer Systems Servicing NC II, susuriin ka ng isang akreditadong Assessor ayon sa 4 na Core Competencies:

1. ANG 4 NA BAHAGI NG ASSESSMENT:
• COC 1: Assembling PC, BIOS Setup, Bootable USB, OS & Driver Installation (1 Hour)
• COC 2: Crimping UTP Cable (Straight & Cross), Keystone Jack, Wireless Router Setup, Resource Sharing (1 Hour)
• COC 3: Server OS, Active Directory Domain Controller, DNS, DHCP, GPO & Client Domain Join (1 Hour)
• COC 4: Preventive Maintenance, Multimeter Testing of ATX PSU, Software Repair & Backup (45 mins)

2. ORAL QUESTIONING SAMPLE QUESTIONS & ANSWERS:
Q1: "Bakit kailangang i-jump ang Green at Black wire sa ATX power supply?"
A1: "Upang gayahin ang power switch signal mula sa motherboard (PS_ON# to Ground) at suriin kung aandar ang switching circuit ng PSU nang walang motherboard."

Q2: "Bakit kailangang itakda ang DNS ng client sa IP ng server bago sumali sa domain?"
A2: "Dahil ang server ang naglalaman ng Active Directory SRV records na nagtuturo sa lokasyon ng Domain Controller. Kung public DNS ang gagamitin, hindi mahahanap ang lokal na domain."

Q3: "Ano ang gagawin mo kapag may yellow exclamation mark sa Device Manager?"
A3: "Kukunin ang Hardware ID sa device properties upang hanapin ang opisyal na driver mula sa manufacturer website at i-install ito upang magamit ang buong kakayahan ng hardware."

3. ANG KAHALAGAHAN NG JOB ORDER SHEET:
• Bawat serbisyo ay dapat may kaukulang Job Order: Pangalan ng Kustomer, Serial Number ng Kagamitan, Problema, Isinagawang Repair, Pinalitang Piyesa, at Pirma ng Kliyente bilang patunay ng kalidad at pananagutan.`,
        codeSnippet: `// Core Competencies Summary for Assessment Day:
[COC 1]: Disassembly -> Assembly -> POST -> BIOS -> OS Install -> Drivers
[COC 2]: T568A / T568B Crimping -> Cable Testing -> Router Config -> Sharing
[COC 3]: Server Install -> AD DS -> DC Promo -> DNS -> DHCP -> GPO -> Client Join
[COC 4]: Multimeter Testing -> PMS -> DISM/SFC -> Backup -> Job Order`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.6: Comprehensive TESDA CSS NC II Mock Assessment Simulation',
          instructions: [
            'Kumpletuhin ang buong 4-hour mock simulation sa ilalim ng gabay ng iyong ICT Instructor.',
            'Punan ang opisyal na Job Order Sheet para sa isang kunwaring kustomer.',
            'Isagawa ang demonstration sa harap ng klase o assessor.',
            'Sagutin ang 5 random oral questions mula sa TESDA Question Bank nang may kumpiyansa.'
          ],
          starterCode: `// TESDA Competency Evidence Guide:
[Competent] Candidate demonstrated all safety procedures and functional systems
[Competent] All 4 COCs passed according to Training Regulations
Recommendation: ISSUANCE OF NATIONAL CERTIFICATE II (NC II)`,
          expectedOutcome: '100% kahandaan ng mag-aaral upang humarap at maging ganap na Certified Passer ng TESDA Computer Systems Servicing NC II.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.6: TESDA Institutional Assessment Scorecard & Job Order',
          sheetName: 'TESDA_Assessment_Scorecard',
          description: 'Ang opisyal na Competency Assessment Results Summary (CARS) at institutional rating sheet para sa CSS NC II.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Opisyal na Job Order Sheet na may client sign-off.',
            'Kumpletong CARS Institutional Scorecard sa lahat ng 4 na COCs.',
            'Oral questioning rating sheet at final certification recommendation.'
          ],
          rubric: [
            { criteria: 'Hands-on Demonstration Competency across 4 COCs', points: 45 },
            { criteria: 'Oral Interview Answers & Technical Knowledge', points: 35 },
            { criteria: 'Job Order Documentation & 5S Cleanliness', points: 20 }
          ]
        }
      }
    ]
  }
];

// ============================================================================
// TRACK RECORD FOR TESDA CSS NC II BUNDLE
// ============================================================================

export const TESDA_CSS_TRACK: Track = {
  id: 'track-tesda-css-nc2',
  title: 'Computer Systems Servicing (CSS) NC II: TESDA Vocational Masterclass & Certification Bundle',
  category: 'stem',
  categoryLabel: 'TESDA Vocational & ICT',
  slug: 'computer-systems-servicing-nc2-tesda-bundle',
  badge: '★ 2ND COURSE BUNDLE • TESDA NC II',
  level: 'All Levels',
  instructor: {
    name: 'Engr. Joven Nel Jed Aviguetero, LPT, TM1',
    role: 'Full-Pledged ICT Faculty & Certified TESDA CSS NC II Trainer / Assessor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    credentials: 'TESDA CSS NC II Certified • National TVET Trainer Certificate (NTTC) • LPT • CompTIA A+ / Network+',
  },
  rating: 5.00,
  reviewCount: 940,
  activeLearners: 2860,
  lessonsCount: 24,
  duration: '8 Linggo (280 Oras Nominal Training)',
  description: 'Ang pinakakumpletong kurso sa Computer Systems Servicing (CSS) NC II na nakabatay sa opisyal na TESDA Training Regulations. Sinasaklaw ang lahat ng 4 na Core Competencies (ICCS, SUCN, SUCS, MRCSN) mula hardware assembly, network cabling, Windows Server AD DS, hanggang multimeter diagnostic testing.',
  skills: [
    'PC Assembly & OHS',
    'BIOS/UEFI Configuration',
    'Windows & Linux Deployment',
    'UTP Crimping (T568A/B)',
    'IPv4 & Router Configuration',
    'Active Directory & Domain Controller',
    'DNS & DHCP Server',
    'Group Policy Objects (GPO)',
    'Multimeter Testing (ATX 24-Pin)',
    'Disk Cloning & System Repair'
  ],
  colorTheme: 'blue',
  popular: true,
  published: true,
  price: 0,
    originalPrice: 0,
    isPaid: false,
  isBundle: true,
  bundleNumber: 2,
  bundleLabel: '★ 2ND OFFICIAL COURSE BUNDLE: TESDA VOCATIONAL MASTERCLASS',
  modules: TESDA_CSS_MODULES.map((m, mIdx) => ({
    id: `mod-css-${mIdx + 1}`,
    track_id: 'track-tesda-css-nc2',
    title: m.title,
    duration: m.duration,
    order_index: mIdx + 1,
    lessons: m.lessons.length,
    topics: m.lessons.map(l => l.title),
    lessonItems: m.lessons.map((l, lIdx) => ({
      id: `les-css-${mIdx + 1}-${lIdx + 1}`,
      module_id: `mod-css-${mIdx + 1}`,
      title: l.title,
      duration: l.duration,
      video_url: l.videoUrl,
      content: l.theoryContent,
      order_index: lIdx + 1,
    }))
  }))
};

export const TESDA_CSS_NC2_COURSE: ZeroToHeroCourse = {
  track: TESDA_CSS_TRACK,
  detailedModules: TESDA_CSS_MODULES,
};
