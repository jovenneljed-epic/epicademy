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
    duration: '1 Week (35 Hours)',
    overview: 'Master Occupational Health & Safety (OHS) regulations, 5S Methodology, Electrostatic Discharge (ESD) prevention, and systematic desktop computer assembly from processor installation to BIOS configuration.',
    lessons: [
      {
        title: 'Lesson 1.1: OHS Policies, 5S Principles, Personal Protective Equipment (PPE) & ESD Protection',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=IHXzkQO_n-I',
        videoTitle: 'TESDA CSS NC II: Occupational Health and Safety (OHS) & Tool Familiarization',
        objective: 'Understand and apply OHS standards, 5S of Good Housekeeping, proper use of Anti-Static Wrist Straps, and computer toolkit preparation before opening a computer chassis.',
        theoryContent: `According to TESDA Training Regulations (TR) for Computer Systems Servicing NC II, the fundamental standard before handling any ICT equipment is Occupational Health and Safety (OHS).

1. CORE RULES OF OHS:
• Always unplug the AC power cable before opening the system unit.
• Wear appropriate Personal Protective Equipment (PPE): Rubber-soled shoes, cotton clothing, and an Anti-Static Wrist Strap clipped to an unpainted metal surface of the chassis.
• Do not wear metallic jewelry (rings, necklaces, watches) while servicing electronics.
• Keep the working table dry and always use an ESD Anti-Static Mat.

2. THE 5S METHODOLOGY IN COMPUTER WORKSHOPS:
• Seiri (Sort): Separate defective parts from reusable components.
• Seiton (Set in Order): Organize screws in magnetic trays and screwdrivers in designated tool racks.
• Seiso (Shine): Maintain a clean workshop using an anti-static brush and air blower.
• Seiketsu (Standardize): Follow standard documentation and safety inspection checklist sheets.
• Shitsuke (Sustain / Self-Discipline): Practice self-driven commitment to safety and operational order.`,
        codeSnippet: `// TESDA OHS & Workplace Safety Inspection Checklist:
1. Anti-Static Wrist Strap: Resistance check (1 Megaohm resistor intact)
2. Tool Check: Phillips #1 & #2 Screwdrivers (demagnetized tips for sensitive ICs)
3. Power Isolation: Disconnect AC Power Cord -> Press & hold Power Button for 10 seconds to drain capacitors
4. Fire Extinguisher: Class C (Electrical Fires - CO2 or Dry Chemical) positioned within 10 meters`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.1: Workstation Hazard Identification & ESD Setup',
          instructions: [
            'Prepare the ESD anti-static mat and connect the alligator clip to a grounded metal chassis.',
            'Fasten the anti-static wrist strap securely to your non-dominant wrist.',
            'Discharge residual static electricity before opening the system unit.',
            'Complete the official TESDA Hazard Identification Checklist for electrical and ergonomic hazards.'
          ],
          starterCode: `// Activity Task Sheet 1.1 Checklist:
[ ] Anti-static wrist strap inspected and worn correctly
[ ] Workstation cleared of liquid, food, and magnetic materials
[ ] System unit grounded and discharged
[ ] Tools arranged according to 5S standard`,
          expectedOutcome: 'A safe, clean workstation that is 100% compliant with TESDA OHS guidelines with zero risk of ESD damage to the motherboard.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.1: TESDA OHS & Equipment Safety Inspection Form',
          sheetName: 'TESDA_OHS_Inspection',
          description: 'Audit your computer laboratory or personal workstation using the official TESDA Safety Audit matrix.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Complete log of 10 safety hazards and corrective actions.',
            '5S compliance rating of the computer laboratory.',
            'Signed Safety Compliance Declaration by the ICT Instructor.'
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
        objective: 'Demonstrate the proper sequence of disassembling and assembling a computer system unit according to manufacturer specifications.',
        theoryContent: `During the TESDA National Assessment for COC 1, candidates are given a dedicated time (typically 1 hour) to assemble a computer system unit without damaging any components.

STEP-BY-STEP COMPUTER ASSEMBLY (Standard Protocol):
1. MOTHERBOARD PREPARATION (Out-of-case test):
   - Place the Motherboard on top of an anti-static bag or non-conductive cardboard box.
   - Release the CPU socket lever (LGA for Intel or PGA/AM4 for legacy AMD).
   - Align the gold triangle indicator on the CPU with the corner triangle on the socket. Never force insertion (Zero Insertion Force).
   - Lock down the retention lever securely.
   - Apply an appropriate amount of thermal paste (pea-sized dot in the center of the Integrated Heat Spreader).
   - Mount the CPU cooler firmly and connect the CPU_FAN 4-pin header.

2. RAM INSTALLATION (Memory Modules):
   - Open the retention latches of the DIMM slots (Slots 2 and 4 for Dual Channel configuration).
   - Align the key notch on the memory module before pressing down until both sides click into place.

3. INSTALLATION INTO THE CHASSIS:
   - Install the I/O Shield securely into the rear cutout of the chassis.
   - Mount brass standoffs to prevent short circuits between the motherboard and metal chassis.
   - Fasten motherboard screws in a diagonal crisscross pattern.

4. POWER SUPPLY & STORAGE:
   - Mount the ATX Power Supply Unit (PSU) using 4 screws at the rear of the case.
   - Connect the 24-pin Main ATX Power Connector and the 8-pin (4+4) CPU EPS Connector.
   - Mount the SATA SSD or install an NVMe M.2 drive into the PCIe slot.
   - Connect Front Panel Headers: Power SW, Reset SW, Power LED, HDD LED, Front Audio, and USB 3.0.`,
        codeSnippet: `// Front Panel Header Standard Color & Pin Layout:
[Pin 1: Power LED +]  [Pin 3: Power LED -]  [Pin 5: Power SW]   [Pin 7: Power SW]   [Pin 9: No Pin]
[Pin 2: HDD LED +]    [Pin 4: HDD LED -]    [Pin 6: Reset SW]   [Pin 8: Reset SW]   [Pin 10: NC]

* Note: Colored wires (Red/Blue/Green) are usually POSITIVE (+), White/Black wires are NEGATIVE (-).
* The Power Switch and Reset Switch are momentary switches (polarity insensitive).`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.2: Full Desktop Assembly Demonstration',
          instructions: [
            'Properly disassemble the test PC: Disconnect PSU cables, remove RAM, Storage, and Motherboard.',
            'Clean old thermal paste using 90%+ Isopropyl Alcohol and a lint-free microfiber wipe.',
            'Reassemble the system unit following the standard assembly sequence.',
            'Organize cable management using zip ties to ensure no cables obstruct the CPU fan blades.'
          ],
          starterCode: `// Assembly Verification Checklist:
Motherboard Standoffs Installed: [YES / NO]
Thermal Paste Applied (Pea Size): [YES / NO]
24-Pin ATX & 8-Pin CPU Connected: [YES / NO]
Front Panel Switches Verified:    [YES / NO]`,
          expectedOutcome: 'A clean system unit with neat cable management, securely installed components, and readiness for initial power testing.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.2: Computer Hardware Inventory & Assembly Rubric',
          sheetName: 'PC_Hardware_Inventory',
          description: 'Document detailed specifications (Make, Model, Serial Number, Form Factor) of each system unit component.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Complete Bill of Materials (BOM) of the assembled PC.',
            'Serial number inventory for Processor, Motherboard, RAM, and Storage.',
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
        objective: 'Interpret POST results, diagnose beep codes, and configure BIOS/UEFI settings including Boot Sequence, XMP/DOCP, and Secure Boot.',
        theoryContent: `When the Power Switch is pressed, the first routine executed by the motherboard ROM is the Power-On Self-Test (POST).

1. POST PROTOCOL AND DIAGNOSIS:
• POST verifies reliable communication between the CPU, RAM, Video Display Controller, and Storage before handing control to the Operating System bootloader.
• Traditional AMI / Award BIOS Beep Codes:
  - 1 Short Beep: Normal POST complete (System functional and healthy).
  - No Beep + No Display: Power Supply failure, CPU fault, or defective Motherboard.
  - 1 Long Beep, 2 Short Beeps: Video Card (GPU) failure or poor slot contact.
  - Continuous Beeps: RAM Failure (Oxidized gold contacts or improperly seated module).

2. KEY BIOS/UEFI CONFIGURATIONS:
• System Time and Date: Synchronize with Philippine Standard Time (PST).
• Boot Option Priorities: Set the UEFI USB Installer as Boot Option #1.
• SATA Mode: Verify AHCI (Advanced Host Controller Interface) is enabled for modern SSDs.
• Secure Boot & TPM 2.0: Enable for Windows 11 compatibility and cryptographic integrity.
• Memory Profile: Enable XMP (Extreme Memory Profile) or DOCP to run RAM at rated frequencies.`,
        codeSnippet: `// Key BIOS/UEFI Keystrokes across Motherboard Vendors:
ASUS:        Press [Del] or [F2] during POST -> [F8] for Boot Menu
Gigabyte:    Press [Del] during POST -> [F12] for Boot Menu
MSI:         Press [Del] during POST -> [F11] for Boot Menu
ASRock:      Press [Del] or [F2] during POST -> [F11] for Boot Menu
HP / Dell:   Press [F10] or [F2] for BIOS -> [F9] or [F12] for Boot Menu`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.3: BIOS Configuration & Diagnostic Beep Test',
          instructions: [
            'Power on the newly assembled PC and press [Del] or [F2] to enter BIOS/UEFI setup.',
            'Set the accurate system time and date.',
            'Configure Boot Priority to prioritize the USB Flash Drive.',
            'Enable Virtualization Technology (Intel VT-x / AMD-V) for virtualization practicals.',
            'Save settings using [F10] and reboot the machine.'
          ],
          starterCode: `// BIOS Verification Log:
CPU Model & Clock Detected: [OK]
Total Memory Installed:      [8192 MB / 16384 MB]
SATA Operation Mode:         [AHCI]
Boot Device Priority #1:     [UEFI: SanDisk USB 3.0]`,
          expectedOutcome: 'Successful POST with a single confirmation beep, accurate hardware component identification, and verified boot priority order.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.3: BIOS/UEFI Settings & POST Diagnostic Sheet',
          sheetName: 'BIOS_POST_Audit',
          description: 'Document BIOS firmware version, rail voltages (+12V, +5V, +3.3V, Vcore), and thermal sensor readings.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Hardware Monitor readings log (CPU Temp, Fan RPM, PSU Voltages).',
            'Matrix of AMI/Award Beep Code troubleshooting solutions.',
            'Technical analysis of TPM 2.0 and Secure Boot importance.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Create bootable USB installation media using Rufus and Ventoy, perform clean installations of Windows 10/11 Pro and Linux (Ubuntu) in a dual-boot configuration, and install official device drivers.',
    lessons: [
      {
        title: 'Lesson 1.4: Creating Multi-Boot & UEFI USB Installers via Rufus & Ventoy',
        duration: '40 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Fj7n0P0L83g',
        videoTitle: 'How to Create Bootable USB (Rufus vs Ventoy for TESDA Assessment)',
        objective: 'Evaluate the technical differences between GPT vs MBR partition schemes and create bootable flash media compatible with modern UEFI and legacy BIOS systems.',
        theoryContent: `In the TESDA Assessment, candidates are expected to prepare and bring their own functional installation media.

1. PARTITION STYLE COMPARISONS:
• MBR (Master Boot Record):
  - Designed for Legacy BIOS architectures.
  - Maximum capacity of 2 Terabytes (TB) per disk partition.
  - Limited to a maximum of 4 Primary Partitions.
• GPT (GUID Partition Table):
  - Designed for modern UEFI (Unified Extensible Firmware Interface) systems.
  - Supports drive capacities exceeding 9 Zettabytes.
  - Supports up to 128 partitions in Windows without requiring an extended partition.

2. MEDIA CREATION UTILITIES:
• Rufus Tool:
  - Target system: UEFI (non CSM)
  - Partition scheme: GPT
  - File system: NTFS or FAT32
• Ventoy (Multi-ISO Solution):
  - Install Ventoy once onto the flash drive.
  - Drag and drop multiple ISO images (Windows 10, Windows Server 2022, Ubuntu, Hiren's Boot CD) directly into the USB root directory.`,
        codeSnippet: `// Diskpart CLI (Manual Bootable Preparation):
diskpart
list disk
select disk 1          // Ensure USB drive is correctly selected!
clean
convert gpt
create partition primary
format fs=fat32 quick
assign letter=U
active                 // (For legacy MBR setups)
exit`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.4: Dual Installer Creation on 32GB Flash Drive',
          instructions: [
            'Download official 64-bit ISO images for Windows 10/11 and Ubuntu 24.04 LTS Desktop.',
            'Use Rufus to flash the Windows ISO using the GPT/UEFI partition scheme.',
            'Configure Ventoy on a secondary flash drive and copy both ISO files into storage.',
            'Boot the test system unit using the Boot Menu key [F8/F11/F12].'
          ],
          starterCode: `// Verification of Bootable USB in Windows CLI:
Get-Disk | Select-Object Number, FriendlyName, PartitionStyle, TotalSize`,
          expectedOutcome: 'A verified bootable USB flash drive that loads the Windows Setup interface reliably without boot errors.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.4: Operating System Deployment Matrix',
          sheetName: 'OS_Deployment_Matrix',
          description: 'Document partition table comparisons, minimum hardware requirements for Windows 11 vs Ubuntu, and verification checklists.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Comparison matrix of GPT vs MBR technical constraints.',
            'Screenshots of the verified Rufus configuration window.',
            'Evaluation of installation read/write transfer rates.'
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
        objective: 'Perform clean installation of Windows 10/11, configure custom disk partitioning (C: Drive for OS, D: Drive for Data), and establish a dual-boot setup with Linux.',
        theoryContent: `During the TESDA COC 1 Demonstration, candidates are assessed on their ability to partition storage drives accurately and execute a clean Operating System installation.

STEP-BY-STEP CLEAN OS INSTALLATION:
1. CUSTOM INSTALLATION:
   - Select "Custom: Install Windows only (advanced)".
   - If previous partitions exist, delete them until "Drive 0 Unallocated Space" is achieved.

2. PARTITION SIZING:
   - Example for a 500GB SSD:
     * Drive C (Operating System & Applications): 200,000 MB (~200 GB)
     * Drive D (Data & Backups): 200,000 MB (~200 GB)
     * Unallocated Space reserved for Linux Dual-Boot: ~100 GB
   - Windows will automatically create Recovery, System (EFI), and MSR partitions.

3. OUT-OF-BOX EXPERIENCE (OOBE):
   - Select Region: Philippines
   - Keyboard Layout: US Standard
   - Create a Local Administrator Account secured with a strong password.
   - Disable unnecessary diagnostic telemetry tracking.`,
        codeSnippet: `// Useful PowerShell Commands for Post-Install Verification:
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, BiosFirmwareType
Get-Volume
Get-Partition -DiskNumber 0`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.5: Partitioning and Clean Installation',
          instructions: [
            'Boot the system from the UEFI USB installer.',
            'Partition the storage disk into two primary logical volumes (OS and Data).',
            'Install Windows onto the designated Primary system partition.',
            'Complete the initial OOBE setup and log in to the desktop.'
          ],
          starterCode: `// Activity Completion Checklist:
[ ] Windows installed in UEFI/GPT mode
[ ] Drive C (System) partitioned accurately
[ ] Drive D (Data) formatted as NTFS with label "DATA_DRIVE"
[ ] Local Administrator account active`,
          expectedOutcome: 'A clean Windows desktop environment featuring properly configured partitions and accurate regional settings.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.5: Disk Partitioning & Installation Log Sheet',
          sheetName: 'Disk_Partition_Log',
          description: 'Log each partition number, type (EFI, MSR, Primary, Recovery), capacity in Megabytes, and file system format.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Table of disk partitions before and after installation.',
            'Technical explanation of the EFI System Partition (ESP).',
            'Assessment of dual-boot GRUB bootloader configuration.'
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
        objective: 'Identify and install all missing device drivers (Chipset, Graphics, LAN/Audio, USB 3.0) and inspect Device Manager for zero yellow exclamation marks.',
        theoryContent: `A newly installed operating system is not production-ready until verified hardware drivers from the OEM (Original Equipment Manufacturer) are properly configured.

1. STANDARD DRIVER INSTALLATION ORDER:
1. Motherboard Chipset Driver (Intel Management Engine / AMD Chipset Driver)
2. Network Interface Card Driver (Realtek / Intel Ethernet & Wi-Fi)
3. Dedicated Graphics Processing Unit (NVIDIA GeForce / AMD Radeon / Intel Arc)
4. High-Definition Audio Drivers
5. Card Readers, Bluetooth, and Peripheral Utilities

2. DEVICE MANAGER STATUS CODES:
• Yellow Exclamation Mark (!): Missing driver or active hardware resource conflict.
• Red 'X' or Down Arrow: Device is administratively disabled.
• Unknown Device: Unrecognized Hardware ID (Copy the VEN_xxxx&DEV_xxxx string in Properties -> Details -> Hardware Ids to source the correct driver).`,
        codeSnippet: `// Driver Query & Management via Command Prompt / PowerShell:
driverquery /v /fo table
pnputil /enum-drivers
Get-PnpDevice -Status Error   // Highlights devices with broken or missing drivers`,
        handsOnActivity: {
          title: 'Hands-on Activity 1.6: Full Driver Pack Installation & Audit',
          instructions: [
            'Open Device Manager (`devmgmt.msc`).',
            'Enumerate all devices displaying a yellow exclamation mark.',
            'Install Chipset, Graphics, and Network drivers from the official vendor support package.',
            'Verify Device Manager is free of driver errors and audio and display resolution (1080p/4K) operate correctly.'
          ],
          starterCode: `// Driver Verification Sheet:
Chipset Driver Status:   [INSTALLED / NOT INSTALLED]
Display Adapter Status:  [NVIDIA RTX 3060 / Basic Display Adapter]
Audio Output Status:     [Realtek High Definition Audio]
Network Adapter Status:  [Gigabit Ethernet Controller Active]`,
          expectedOutcome: 'A 100% stable computer system operating with full hardware acceleration, sound output, and network communication.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 1.6: Device Driver Audit & Peripheral Inspection Form',
          sheetName: 'Driver_Audit_Form',
          description: 'Document Hardware Vendor IDs and Device IDs for each physical controller installed on the system unit.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Inventory of Hardware IDs (VEN & DEV strings).',
            'Before-and-after verification logs from Device Manager.',
            'Signed Client Software Acceptance Certificate.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Comply with ANSI/TIA-568 standards, crimp Straight-Through and Crossover UTP cables, terminate RJ45 Modular Keystone Jacks and Patch Panels, and perform diagnostics using a LAN Cable Tester.',
    lessons: [
      {
        title: 'Lesson 2.1: Network Standards: ANSI/TIA-568-C, Cat5e/Cat6 & Color Codes',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=0gl4yv9wM7U',
        videoTitle: 'T568A vs T568B Color Coding Explained (TESDA CSS NC II Practical Guide)',
        objective: 'Memorize and apply pinout arrangements for T568A and T568B color standards and identify appropriate use cases for Straight-Through vs Crossover cables.',
        theoryContent: `The physical layer of computer networks depends fundamentally on structured cabling quality.

1. STANDARD COLOR CODING:
• T568A Standard:
  Pin 1: White-Green
  Pin 2: Green
  Pin 3: White-Orange
  Pin 4: Blue
  Pin 5: White-Blue
  Pin 6: Orange
  Pin 7: White-Brown
  Pin 8: Brown

• T568B Standard (Most common commercial standard in the Philippines & global tech):
  Pin 1: White-Orange
  Pin 2: Orange
  Pin 3: White-Green
  Pin 4: Blue
  Pin 5: White-Blue
  Pin 6: Green
  Pin 7: White-Brown
  Pin 8: Brown

2. CABLE TYPES & USAGE:
• Straight-Through Cable (Identical wiring on both ends: T568B to T568B):
  - Connects DIFFERENT types of network devices (e.g., Computer to Switch, Switch to Router).
• Crossover Cable (Alternating wiring: T568A on End 1, T568B on End 2):
  - Connects IDENTICAL types of network devices (e.g., Computer to Computer without switch, Switch to Switch on legacy hardware).`,
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
            'On paper or via a network diagramming tool, sketch the 8 conductors for both T568A and T568B.',
            'Identify Transmit (TX+ Pin 1, TX- Pin 2) and Receive (RX+ Pin 3, RX- Pin 6) pinouts for 10/100 Mbps Ethernet.',
            'Explain how Pins 4, 5, 7, and 8 are utilized in Gigabit Ethernet (1000BASE-T) and Power over Ethernet (PoE).'
          ],
          starterCode: `T568A: [W-G, G, W-O, BL, W-BL, O, W-BR, BR]
T568B: [W-O, O, W-G, BL, W-BL, G, W-BR, BR]`,
          expectedOutcome: '100% memorization and reproduction of T568A and T568B color pinouts without reference materials.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.1: Cabling Standards & Transmission Properties',
          sheetName: 'Cabling_Standards',
          description: 'Document maximum run distance, bandwidth (MHz), throughput (Mbps/Gbps), and attenuation specifications for Cat5e, Cat6, and Cat6a cables.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Cat5e vs Cat6 vs Cat6a technical specification matrix.',
            'Pinout connection truth table for Straight-Through and Crossover.',
            'Completed evaluation on ANSI/TIA commercial cabling standards.'
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
        objective: 'Crimp high-grade RJ45 connectors maintaining less than 0.5 inches of unjacketed conductor and terminate modular keystone jacks using an impact punch-down tool.',
        theoryContent: `In the TESDA COC 2 practical assessment, candidates are required to assemble at least two patch cables (one Straight-Through and one Crossover) and terminate a keystone modular jack.

STEPS FOR HIGH-PRECISION CRIMPING:
1. Use a cable stripper to strip approximately 1 inch of the outer UTP cable jacket. Take care not to nick internal copper insulation.
2. Untwist wire pairs and straighten conductors using your fingers.
3. Align conductors according to the T568B color sequence: White-Orange, Orange, White-Green, Blue, White-Blue, Green, White-Brown, Brown.
4. Trim wires flush using the cutting blade of the crimping tool, leaving approximately 0.5 inches (12 mm) exposed.
5. Push conductors firmly into the RJ45 plug until all wires touch the front wall. Ensure the outer cable jacket enters the connector body for strain relief.
6. Insert into the crimping die and squeeze firmly until the gold pins pierce the copper conductors.

PUNCH DOWN ON KEYSTONE JACKS & PATCH PANELS:
• Follow the color-coded guide on the keystone jack housing (select the "B" diagram).
• Seat each wire into its matching color-coded IDC slot.
• Use an Impact Punch-Down Tool with the "CUT" blade facing outward to cleanly slice excess wire.`,
        codeSnippet: `// Standard Crimping Quality Criteria (TESDA Scoring):
1. Wire jacket clamped inside RJ45 body: YES
2. Copper conductors touch the far end of connector: YES
3. Proper color order visible through clear plastic: YES
4. Untwist length under 0.5 inches (minimizes crosstalk): YES`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.2: Dual Cable Crimping & Keystone Punchdown',
          instructions: [
            'Assemble one 2-meter Straight-Through Patch Cable (T568B to T568B).',
            'Assemble one 2-meter Crossover Cable (T568A to T568B).',
            'Punch down an RJ45 Modular Keystone Jack using an impact tool.',
            'Mount the keystone jack into the wall faceplate or modular surface mount box.'
          ],
          starterCode: `// Physical Inspection Log:
Straight-Through Cable Length: 2.0 meters
Jacket Retention: Clamped securely
Connector Quality: No cracked plastic pins`,
          expectedOutcome: 'Two commercial-grade patch cables and one cleanly terminated keystone wall port meeting structural standards.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.2: Structured Cabling Inspection & Rubric',
          sheetName: 'Cabling_Assessment_Rubric',
          description: 'Rate assembled patch cables and terminated jacks against the official TESDA Institutional Assessment checklist.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Inspection checklist verifying jacket clamping, pin seating, and conductor trimming.',
            'Keystone punch-down contact seating score sheet.',
            'Signed instructor evaluation rubric.'
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
        objective: 'Test assembled cables using an RJ45 LAN Cable Tester and diagnose common wiring faults: Open, Short, Miswire, and Split Pair.',
        theoryContent: `Before connecting any patch cable to network switches or computers, physical continuity must be confirmed using a network cable tester.

1. NORMAL READINGS ON A LAN TESTER:
• For Straight-Through Cables:
  Main Unit LED:   1 - 2 - 3 - 4 - 5 - 6 - 7 - 8
  Remote Unit LED: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 (Illuminates in identical synchronized order)

• For Crossover Cables:
  Main Unit LED:   1 - 2 - 3 - 4 - 5 - 6 - 7 - 8
  Remote Unit LED: 3 - 6 - 1 - 4 - 5 - 2 - 7 - 8 (Illuminates matching the 1<->3 and 2<->6 pin swap)

2. COMMON CABLE FAULTS & REMEDIATION:
• Open Circuit: An individual LED fails to illuminate (e.g., Pin 3 dark). Cause: Conductor did not contact the gold piercing pin.
• Short Circuit: Two LEDs light up simultaneously. Cause: Stripped copper wires touching inside the plug.
• Miswire (Reversed): LEDs light up in an out-of-order sequence. Cause: Swapped color conductors during insertion.`,
        codeSnippet: `// Troubleshooting Diagnostic Steps:
1. When a single pin fails to light up:
   -> Cut off the defective connector and re-crimp with adequate pressure.
2. When LEDs flicker erratically:
   -> Inspect cable length for internal copper breakage or severe kinks.
3. For Shielded Twisted Pair (STP) cables:
   -> Confirm the 'G' (Ground LED) illuminates on both units.`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.3: Comprehensive Cable Verification & Fault Simulation',
          instructions: [
            'Plug one end of the Straight-Through cable into the Master tester unit and the other into the Remote unit.',
            'Power on the tester and document the LED sequencing from Pin 1 through Pin 8.',
            'Test the Crossover cable and confirm the 1-3 and 2-6 pin swap pattern.',
            'Connect the tested patch cable between a PC and network switch to verify Gigabit Ethernet link speed in Windows.'
          ],
          starterCode: `// Cable Tester Verification Matrix:
Straight-Through Test: [PASS 1-2-3-4-5-6-7-8]
Crossover Test:        [PASS 3-6-1-4-5-2-7-8]
Link Speed Detected:   [1.0 Gbps Full Duplex]`,
          expectedOutcome: '100% electrical continuity across all 8 conductors with zero open or short circuit defects.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.3: Network Cable Continuity & Diagnostics Report',
          sheetName: 'Cable_Testing_Report',
          description: 'Document individual pin test results for each assembled cable across the practical cohort.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'LED pattern verification matrix for 5 cables.',
            'Fault diagnosis analysis sheet for miswired test samples.',
            'Assessor sign-off certifying operational network cables.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Configure IP addresses, Subnet Masks, Default Gateways, set up Wireless Routers (DHCP, WPA3, SSID, MAC Filtering), and share Files and Printers across a Local Area Network.',
    lessons: [
      {
        title: 'Lesson 2.4: IPv4 Addressing, Class C Subnetting, Default Gateways & Ping Diagnostics',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=s_Ntt6eTn94',
        videoTitle: 'IPv4 Addressing, Subnet Masks & Gateway Setup for Beginners',
        objective: 'Understand IPv4 Class C addressing (/24 subnet mask), configure Static IP addresses in Windows, and verify end-to-end connectivity using Ping and Traceroute.',
        theoryContent: `Every connected device on a computer network requires a unique Logical Address known as an IP Address.

1. ANATOMY OF AN IPV4 ADDRESS:
• 32-bit binary identifier divided into four 8-bit octets: e.g., 192.168.1.100
• Class C Address Range: 192.0.0.0 through 223.255.255.255
• Default Subnet Mask (/24): 255.255.255.0
  - First three octets (192.168.1) = Network ID (All hosts on the same local segment must share this ID).
  - Final octet (.100) = Host ID (Must be unique to each individual machine).

2. ESSENTIAL NETWORK PARAMETERS:
• IP Address: 192.168.1.10
• Subnet Mask: 255.255.255.0
• Default Gateway: 192.168.1.1 (Router IP address providing access to external networks and the Internet).
• Preferred DNS: 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare).`,
        codeSnippet: `// Network Configuration & Testing via CLI:
ipconfig /all
ping 127.0.0.1             // Loopback test (verifies local TCP/IP stack integrity)
ping 192.168.1.1           // Ping to Default Gateway (Router)
ping 192.168.1.20          // Ping to peer workstation on network
tracert 8.8.8.8            // Traceroute to public internet destination`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.4: Static IP Configuration & Peer Connectivity Test',
          instructions: [
            'Open Network Connections (`ncpa.cpl`).',
            'Select Ethernet -> Properties -> Internet Protocol Version 4 (TCP/IPv4).',
            'Configure Static IP: IP = 192.168.1.10, Subnet Mask = 255.255.255.0, Gateway = 192.168.1.1.',
            'On the second workstation, configure IP = 192.168.1.11.',
            'From Command Prompt, execute a ping test from PC1 to PC2 and verify 0% packet loss.'
          ],
          starterCode: `// Ping Test Results:
Pinging 192.168.1.11 with 32 bytes of data:
Reply from 192.168.1.11: bytes=32 time<1ms TTL=128
Reply from 192.168.1.11: bytes=32 time<1ms TTL=128
Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`,
          expectedOutcome: 'Successful bidirectional communication between two networked computers with zero firewall or subnet obstruction.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.4: Network IP Addressing Scheme & Subnet Worksheet',
          sheetName: 'IP_Addressing_Scheme',
          description: 'Design a structured IP assignment table for an institutional computer lab or Internet cafe serving 30 workstations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'IP addressing table covering IP address, Subnet Mask, Gateway, and Hostname for 30 PCs.',
            'Calculations for Network ID, Broadcast Address, and Usable Host Range.',
            'Screenshot of confirmed ping response output.'
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
        objective: 'Configure a Wireless Router via Web GUI: change default administrative credentials, establish DHCP IP pools, configure Wi-Fi SSID and WPA2/WPA3 security, and enforce Wireless MAC Filtering.',
        theoryContent: `During the TESDA COC 2 assessment, candidates are assigned a Wireless Router that must be restored to factory default settings and configured to assessment specifications.

STEPS TO CONFIGURE A WIRELESS ROUTER:
1. ACCESS THE WEB GUI:
   - Open a browser and navigate to the default gateway: 192.168.0.1 or 192.168.1.1.
   - Authenticate with default credentials (admin/admin or printed on the router label).

2. UPDATE DEFAULT ADMINISTRATOR CREDENTIALS:
   - Immediately replace default administrative credentials to prevent unauthorized tampering.

3. LAN & DHCP POOL CONFIGURATION:
   - Router LAN IP: 192.168.10.1
   - Subnet Mask: 255.255.255.0
   - DHCP Server: Enabled
   - Starting IP: 192.168.10.100
   - Ending IP: 192.168.10.200 (Supplies dynamic leases for up to 101 client devices).

4. WIRELESS SECURITY (WLAN):
   - Service Set Identifier (SSID): e.g., "TESDA_CSS_LAB"
   - Security Mode: WPA2-PSK (AES) or WPA3-Personal
   - Pre-Shared Key (Passphrase): Minimum 8 alphanumeric characters

5. WIRELESS MAC FILTERING:
   - Identify the Physical MAC Address (xx-xx-xx-xx-xx-xx) of client workstations.
   - Configure "Allow list" (Whitelisting) mode so only registered hardware addresses can associate.`,
        codeSnippet: `// Retrieve Physical MAC Address via Command Prompt:
getmac /v
ipconfig /all | findstr "Physical"`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.5: Full Wireless Router Configuration from Factory Reset',
          instructions: [
            'Hold the physical Reset button on the router for 10 seconds using a paperclip.',
            'Connect the PC to LAN Port 1 using your straight-through patch cable.',
            'Access the web administration portal and assign new LAN IP and DHCP scope parameters.',
            'Configure the Wi-Fi SSID and secure WPA2/WPA3 encryption key.',
            'Add a client MAC address to the MAC Filtering table and test wireless connection.'
          ],
          starterCode: `// Router Configuration Summary:
Router LAN IP:        192.168.10.1
DHCP Address Pool:    192.168.10.100 - 192.168.10.200
SSID Name:            TESDA_CSS_EXAM
Security:             WPA2-PSK AES
MAC Filtering:        Enabled (Allow listed only)`,
          expectedOutcome: 'A fully operational, secure wireless router automatically assigning dynamic IP parameters to authorized clients.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.5: Wireless Router Security & Configuration Sheet',
          sheetName: 'Router_Config_Audit',
          description: 'Document wireless channels, frequency bands (2.4 GHz vs 5 GHz), and cryptographic configurations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Comprehensive table of router configurations and access credentials.',
            'MAC Filtering hardware whitelist table.',
            'Screenshot confirming client DHCP address acquisition.'
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
        objective: 'Configure shared folders with accurate NTFS and Share permission levels and share network printers across peer workstations in a workgroup.',
        theoryContent: `The core purpose of Local Area Networks in office and educational environments is resource sharing—principally centralized storage and shared printing.

1. ADVANCED SHARING SETTINGS IN WINDOWS:
• Open Network and Sharing Center -> Change advanced sharing settings.
• Turn on network discovery.
• Turn on file and printer sharing.
• Turn off password protected sharing (or provision a dedicated standard user account for authenticated sharing).

2. SHARE PERMISSIONS VS NTFS PERMISSIONS:
• Share Permissions (Apply only when accessing folders across network UNC paths: \`\\\\computer_name\\share_name\`):
  - Read, Change, Full Control.
• NTFS Permissions (Apply both locally and across network connections):
  - Read & Execute, List folder contents, Read, Write, Modify, Full Control.
• Principle of Effective Permissions: The MOST RESTRICTIVE permission always takes precedence.

3. NETWORK PRINTER SHARING:
• Open Devices and Printers / Printers & Scanners.
• Select the connected printer -> Printer Properties -> Sharing tab.
• Check "Share this printer" and define an intuitive Share Name.`,
        codeSnippet: `// Quick Network Access via Windows Run (Win + R):
\\\\192.168.1.10\\Shared_Folder
\\\\PC-STUDENT-01\\Public_Docs

// View Active Network Shares via Command Prompt:
net share
net view`,
        handsOnActivity: {
          title: 'Hands-on Activity 2.6: Secure Folder and Printer Sharing Demonstration',
          instructions: [
            'Create a directory on Drive D: named `D:\\CSS_EXAM_FILES`.',
            'Share the folder across the network granting "Read/Write" permissions for workgroup users.',
            'Create a test document inside the shared folder.',
            'From a second workstation, navigate to `\\\\192.168.1.10\\CSS_EXAM_FILES` and save a new file.',
            'Share a virtual printer (Microsoft Print to PDF) across the local network.'
          ],
          starterCode: `// Sharing Verification Log:
Target Workgroup:      WORKGROUP
Network Path:          \\\\192.168.1.10\\CSS_EXAM_FILES
Test File Created:     Student_Report.txt
Write Access Tested:   [SUCCESSFUL]`,
          expectedOutcome: 'A shared network folder and printer accessible by peer computers across the local network without permission errors.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 2.6: Network Resource Sharing & Security Matrix',
          sheetName: 'Resource_Sharing_Matrix',
          description: 'Document each shared resource, UNC path, access level (Read Only vs Read/Write), and security considerations.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Analysis of Share vs NTFS permission inheritance.',
            'Screenshots documenting successful peer file creation over network shares.',
            'Inventory of shared printers and TCP/IP port assignments.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Install Windows Server 2019/2022, promote to Primary Domain Controller (DC), configure Active Directory Domain Services (AD DS), configure DNS Server zones, and join Client Workstations to the Domain.',
    lessons: [
      {
        title: 'Lesson 3.1: Windows Server Installation, Post-Install Checklist & Static IP Provisioning',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=F01d9B5o6p8',
        videoTitle: 'Windows Server 2019/2022 Installation & Initial Server Setup (TESDA CSS NC II)',
        objective: 'Install Windows Server with Desktop Experience, perform initial security hardening, and provision Static IP parameters before deploying server roles.',
        theoryContent: `In the TESDA COC 3 assessment, candidates are allocated 1 hour to configure a computer unit as a Domain Controller and join a client workstation.

CRITICAL SERVER PRE-REQUISITES:
1. DESKTOP EXPERIENCE:
   - Choose "Windows Server Standard (Desktop Experience)" to provide full GUI management tools.

2. STATIC IP ADDRESSING (CRITICAL):
   - A Domain Controller must NEVER be configured via dynamic DHCP!
   - Server IP: 192.168.1.2
   - Subnet Mask: 255.255.255.0
   - Default Gateway: 192.168.1.1
   - Preferred DNS: 127.0.0.1 (Loopback address - the server acts as the primary DNS authority for the enterprise domain).

3. COMPUTER NAME (HOSTNAME):
   - Replace randomized computer names with standardized identifiers (e.g., \`SERVER-DC01\`) prior to DC promotion, as renaming a live Active Directory domain controller introduces unnecessary complexity.`,
        codeSnippet: `// PowerShell Server Post-Install Setup:
Rename-Computer -NewName "SERVER-DC01" -Restart
Get-NetIPAddress -InterfaceAlias "Ethernet"
Set-NetIPInterface -InterfaceAlias "Ethernet" -DHCP Disabled`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.1: Server Initial Provisioning and Static IP Setup',
          instructions: [
            'Install Windows Server 2019/2022 on the designated server PC.',
            'Rename Server Hostname to `SERVER-DC01` and restart.',
            'Assign Static IP 192.168.1.2 and set Preferred DNS to 127.0.0.1.',
            'Temporarily adjust Windows Defender Firewall settings if required for assessment laboratory testing.'
          ],
          starterCode: `// Server Baseline Configuration Log:
Server Hostname:     SERVER-DC01
Static IP Assigned:  192.168.1.2
Subnet Mask:         255.255.255.0
Preferred DNS:       127.0.0.1`,
          expectedOutcome: 'A clean Windows Server deployment with static network parameters prepared for Active Directory promotion.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.1: Windows Server Baseline Audit & Checklist',
          sheetName: 'Server_Baseline_Audit',
          description: 'Record server hardware specifications, role prerequisites, and network interface settings.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Server hardware capacity evaluation (RAM, Storage, CPU Cores).',
            'Network interface configuration snapshot.',
            'Initial system hardening checklist.'
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
        objective: 'Install the AD DS role in Server Manager and promote the server as a new Forest Root Domain (e.g., `epicademy.local` or `tesda.local`).',
        theoryContent: `Active Directory Domain Services (AD DS) provides the centralized identity database for computers, user accounts, and security policy enforcement across an enterprise network.

STEPS TO INSTALL AND PROMOTE:
1. INSTALL THE ROLE:
   - Launch Server Manager -> Manage -> Add Roles and Features.
   - Select "Role-based or feature-based installation".
   - Check "Active Directory Domain Services". Accept all required dependencies and features.
   - Click Install and allow the routine to complete.

2. PROMOTE SERVER TO A DOMAIN CONTROLLER:
   - Click the yellow Notification Flag in Server Manager -> "Promote this server to a domain controller".
   - Deployment Operation: Choose "Add a new forest" (for initial root domain creation).
   - Root domain name: e.g., \`tesda.local\` or \`epicademy.local\`.
   - Domain Controller Options:
     * Forest & Domain Functional Level: Windows Server 2016
     * Check "Domain Name System (DNS) server".
     * Assign Directory Services Restore Mode (DSRM) password (safeguard this credential).
   - NetBIOS Domain Name: Verified automatically as \`TESDA\` or \`EPICADEMY\`.
   - Execute installation. The server will reboot automatically to complete promotion.`,
        codeSnippet: `// PowerShell Alternative for Fast Automation:
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName "tesda.local" -InstallDns -Force`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.2: Full Active Directory Forest Deployment',
          instructions: [
            'Install the Active Directory Domain Services role in Server Manager.',
            'Promote the server to Domain Controller for the domain `tesda.local`.',
            'Reboot the server and authenticate as `TESDA\\Administrator`.',
            'Launch Active Directory Users and Computers (`dsa.msc`) to verify the active domain.'
          ],
          starterCode: `// Domain Controller Verification Log:
Domain Name:          tesda.local
NetBIOS Name:         TESDA
Logon Account:        TESDA\\Administrator
AD DS Status:         Running & Healthy`,
          expectedOutcome: 'A fully operational Active Directory Domain Controller running authoritative DNS services.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.2: Active Directory Architecture & Deployment Log',
          sheetName: 'ADDS_Deployment_Log',
          description: 'Document forest functional levels, DSRM security practices, and AD database (NTDS.dit) storage paths.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Inventory of AD DS deployment parameters.',
            'Technical analysis of SYSVOL and NTDS directory functions.',
            'Screenshots of the Active Directory administrative console.'
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
        objective: 'Configure DNS Forward and Reverse Lookup Zones and join a client workstation to the domain with zero DNS lookup errors.',
        theoryContent: `No computer can join an Active Directory Domain if it cannot discover the Domain Controller through authoritative DNS services!

1. DNS CONFIGURATION ON THE SERVER:
• Open DNS Manager (\`dnsmgmt.msc\`).
• Under Server -> Forward Lookup Zones -> tesda.local: Confirm Host (A) records and SRV records exist.
• Create a Reverse Lookup Zone:
  - New Zone -> Primary Zone -> To all DNS servers running on domain controllers.
  - IPv4 Reverse Lookup Zone -> Network ID: 192.168.1.

2. CLIENT WORKSTATION PREPARATION:
• Prior to joining the Client PC to the Domain:
  - Open Network Connections on the Client PC (\`ncpa.cpl\`).
  - Configure the Client PC Preferred DNS Server to the Server IP: 192.168.1.2! (This is the primary point of failure when overlooked).
  - Test resolution from the client Command Prompt: \`ping tesda.local\`. Confirm responses originate from 192.168.1.2!

3. JOINING THE DOMAIN:
• On the Client PC, open System Properties (\`sysdm.cpl\`).
• Click "Change...".
• Under "Member of", select "Domain" and enter: \`tesda.local\`.
• When prompted for credentials, provide Domain Admin authorization (TESDA\\Administrator).
• Receive confirmation prompt: "Welcome to the tesda.local domain!". Restart the client machine.`,
        codeSnippet: `// Verify DNS Resolution on Client Workstation via CLI:
nslookup tesda.local 192.168.1.2
nltest /dsgetdc:tesda.local`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.3: Client Workstation Domain Join Demonstration',
          instructions: [
            'On the Server, establish a Reverse Lookup Zone for the 192.168.1.x subnet.',
            'On the Client PC, configure Preferred DNS to point to 192.168.1.2 (Server IP).',
            'Run `nslookup tesda.local` in the Client Command Prompt to verify DNS response.',
            'Join the Client PC to the domain using System Properties.',
            'Restart the Client PC and authenticate using domain credentials.'
          ],
          starterCode: `// Client Domain Join Status:
Preferred DNS Configured:  192.168.1.2
NSLOOKUP Result:           Address 192.168.1.2 resolved
Domain Join Message:       "Welcome to the tesda.local domain"
Reboot Verified:           [YES]`,
          expectedOutcome: 'A client workstation successfully joined as an authenticated member of the enterprise domain and managed centrally.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.3: DNS Resolution & Domain Join Verification Form',
          sheetName: 'Domain_Join_Audit',
          description: 'Document DNS resource records and client connection parameters.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Forward and Reverse DNS record tables.',
            'Troubleshooting guide for common "DNS name does not exist" resolution failures.',
            'Proof of domain membership on client PC.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Install the DHCP Server role, configure DHCP scopes and reservations, create Organizational Units (OUs) and User Accounts, and enforce Group Policy Objects (GPO) for desktop lockdown and folder redirection.',
    lessons: [
      {
        title: 'Lesson 3.4: Dynamic Host Configuration Protocol (DHCP) Server: Scopes, Exclusions & Reservations',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Uf8pM8l6X30',
        videoTitle: 'Configuring DHCP Server on Windows Server (TESDA CSS NC II Practical)',
        objective: 'Deploy the DHCP Server role, authorize in Active Directory, create an address scope with IP exclusions, and configure static IP reservations for network equipment.',
        theoryContent: `The DHCP Server automatically assigns IP addresses, subnet masks, default gateways, and DNS addresses to network clients, eliminating manual addressing conflicts.

THE DORA PROCESS IN DHCP:
1. Discover (Client broadcast: "Seeking available DHCP server on network.")
2. Offer (Server unicast: "Offering IP 192.168.1.50 for assignment.")
3. Request (Client broadcast: "Accepting offered IP lease 192.168.1.50.")
4. Acknowledge (Server unicast: "Lease confirmed. IP 192.168.1.50 assigned for 8 days.")

CONFIGURATION PROCEDURES:
1. Add Roles and Features -> Select "DHCP Server".
2. Post-installation, click "Complete DHCP configuration" and authorize the server within Active Directory.
3. Open DHCP Management console (\`dhcpmgmt.msc\`).
4. Under IPv4, right-click -> "New Scope...":
   - Scope Name: e.g., "LAN_CLIENT_SCOPE"
   - IP Address Range: 192.168.1.20 through 192.168.1.250
   - Exclusions: 192.168.1.20 through 192.168.1.50 (Reserved for servers, printers, and managed switches).
   - Lease Duration: 8 Days (or 8 Hours for high-turnover wireless environments).
   - Configure DHCP Options:
     * Router (Default Gateway): 192.168.1.1
     * DNS Server: 192.168.1.2 (Server IP)
5. Activate the Scope.`,
        codeSnippet: `// Verify DHCP Lease on Client Workstation:
ipconfig /release
ipconfig /renew
ipconfig /all | findstr "DHCP Server"`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.4: DHCP Server Role Deployment & Client IP Lease',
          instructions: [
            'Install and authorize the DHCP Server role in Windows Server.',
            'Create an active scope with exclusion ranges for static network infrastructure.',
            'Configure the Client Workstation to "Obtain an IP address automatically".',
            'Renew client IP and confirm Gateway and DNS parameters are received from the server.'
          ],
          starterCode: `// DHCP Scope Verification Log:
Scope Name:          TESDA_STUDENT_POOL
Range:               192.168.1.100 - 192.168.1.200
Excluded Range:      192.168.1.100 - 192.168.1.110
Client Leased IP:    192.168.1.111
Lease Active:        [YES]`,
          expectedOutcome: 'Client workstations automatically obtaining comprehensive IP configurations from the Windows Server without manual intervention.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.4: DHCP Scope Configuration & Lease Table',
          sheetName: 'DHCP_Scope_Table',
          description: 'Document scope boundaries, exclusion pools, reservation MAC mappings, and lease expiration intervals.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'DHCP Scope configuration parameter table.',
            'DHCP reservation matrix for 3 network printers.',
            'Screenshot of the Address Leases console displaying active client allocations.'
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
        objective: 'Structure an Organizational Unit (OU) hierarchy, provision user accounts with security policies, and configure Security Groups for role-based access control.',
        theoryContent: `An Organizational Unit (OU) is an Active Directory container used to organize users, groups, and computer objects to link and enforce Group Policy Objects (GPO).

1. BEST PRACTICES IN OU ARCHITECTURE:
• Avoid placing enterprise users inside the default "Users" container, as GPOs cannot be directly linked to default containers!
• Construct a dedicated Top-Level OU: e.g., \`EPICADEMY_CORP\` or \`TESDA_INSTITUTE\`
  - Sub-OU: \`Administration\`
  - Sub-OU: \`Accounting\`
  - Sub-OU: \`Faculty\`
  - Sub-OU: \`Students\`
  - Sub-OU: \`Workstations\`

2. USER ACCOUNT PROVISIONING:
• First Name, Last Name, User Logon Name (e.g., \`j.aviguetero\`).
• Password Security Settings:
  - "User must change password at next logon" (Standard for onboarding new personnel).
  - "Password never expires" (For service accounts and assessment laboratory environments).
  - "Account is disabled" (For departing or seasonal personnel).

3. SECURITY GROUPS:
• Create a Security Group: e.g., \`IT_Support_Staff\`
• Assign users as members to uniformly grant access permissions across shared folders and network resources.`,
        codeSnippet: `// PowerShell Bulk User Creation Sample:
New-ADOrganizationalUnit -Name "Faculty" -Path "DC=tesda,DC=local"
New-ADUser -Name "Juan Dela Cruz" -SamAccountName "jdelacruz" -UserPrincipalName "jdelacruz@tesda.local" -Path "OU=Faculty,DC=tesda,DC=local" -AccountPassword (ConvertTo-SecureString "P@ssw0rd2026!" -AsPlainText -Force) -Enabled $true`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.5: OU Hierarchy & User Account Provisioning',
          instructions: [
            'Launch Active Directory Users and Computers (`dsa.msc`).',
            'Create a Top-Level OU named `CSS_ASSESSMENT`.',
            'Within this container, create Sub-OUs named `Teachers` and `Students`.',
            'Provision two user accounts secured with strong passwords.',
            'Authenticate on the Client PC using one of the newly provisioned user accounts.'
          ],
          starterCode: `// User Provisioning Record:
OU Created:             OU=Students,OU=CSS_ASSESSMENT,DC=tesda,DC=local
User Created:           student01 (John Santos)
User Logon Name:        student01@tesda.local
Logon Verified on PC:   [SUCCESSFUL]`,
          expectedOutcome: 'A clean, well-structured Active Directory hierarchy and successful domain logon using standard domain user accounts.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.5: Active Directory User & OU Directory Directory',
          sheetName: 'AD_User_Directory',
          description: 'Catalog 20 mock user profiles detailing Department, Job Title, Username, and Assigned OU.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            '20-user profile directory template formatted for bulk CSV import.',
            'Organizational tree diagram of the Active Directory structure.',
            'Group membership and security mapping matrix.'
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
        objective: 'Create and link Group Policy Objects (GPOs) to target OUs to enforce Desktop Wallpaper locks, restrict removable USB storage, and enforce password complexity requirements.',
        theoryContent: `Group Policy Management (\`gpmc.msc\`) is the primary administrative framework used to govern centralized configurations, security baselines, and environmental restrictions across connected domain workstations.

COMMON GPO POLICIES IN TESDA ASSESSMENTS:
1. DESKTOP WALLPAPER LOCK:
   - User Configuration -> Policies -> Administrative Templates -> Desktop -> Desktop -> Desktop Wallpaper.
   - Set to "Enabled" and specify UNC path: \\\\server-dc01\\shared_folder\\wallpaper.jpg.
   - Enable "Prohibit changes to desktop wallpaper" to prevent user customization.

2. PREVENT ACCESS TO REGISTRY EDITING TOOLS & CONTROL PANEL:
   - Disable regedit to prevent client system parameter tampering.
   - Restrict access to Control Panel and Windows Settings applets.

3. REMOVABLE STORAGE RESTRICTION (USB BLOCKING):
   - Computer Configuration -> Policies -> Administrative Templates -> System -> Removable Storage Access.
   - Select "All Removable Storage classes: Deny all access" (Crucial for data exfiltration prevention and malware mitigation).

4. FORCING GROUP POLICY REFRESH ON CLIENTS:
   - Rather than waiting for the standard 90-minute background cycle:
   - Execute in client Command Prompt: \`gpupdate /force\`.`,
        codeSnippet: `// Force GPO Update and Diagnostic Result in Windows:
gpupdate /force
gpresult /r               // Displays applied GPOs for currently authenticated user
gpresult /h gpreport.html // Generates comprehensive HTML audit report`,
        handsOnActivity: {
          title: 'Hands-on Activity 3.6: GPO Creation, Linking and Enforcement on Client',
          instructions: [
            'Launch Group Policy Management (`gpmc.msc`).',
            'Create a new GPO named `Student_Lockdown_Policy`.',
            'Link the GPO to the `Students` OU.',
            'Configure Desktop Wallpaper enforcement and disable Control Panel access.',
            'On the Client PC, log in as a student user and run `gpupdate /force`.',
            'Attempt opening Control Panel to verify the operational restriction warning.'
          ],
          starterCode: `// GPO Enforcement Verification:
Policy Name:           Student_Lockdown_Policy
Linked OU:             OU=Students
gpupdate Result:       "Computer Policy update has completed successfully."
Control Panel Test:    "This operation has been cancelled due to restrictions..."`,
          expectedOutcome: 'Automated security restrictions applied to the target client workstation governed centrally by the domain controller.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 3.6: Group Policy Security Baseline & Audit Sheet',
          sheetName: 'GPO_Security_Audit',
          description: 'Catalog 10 essential enterprise GPO rules for corporate compliance and security governance.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Audit matrix of 10 GPOs with matching registry keys.',
            'HTML report export generated via gpresult tool.',
            'Demonstration performance checklist for the GPO competency segment.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Execute Preventive Maintenance Schedules (PMS), inspect ATX 24-Pin Power Supplies using a Digital Multimeter (+12V, +5V, +3.3V, PS_ON pin jump), test CR2032 CMOS batteries, and diagnose hardware faults.',
    lessons: [
      {
        title: 'Lesson 4.1: Preventive Maintenance Schedule (PMS), Cleaning & Thermal Pasting',
        duration: '45 mins',
        videoUrl: 'https://www.youtube.com/watch?v=Jm3X_mFz_U0',
        videoTitle: 'Preventive Maintenance of Computer Hardware (TESDA CSS NC II Guide)',
        objective: 'Develop monthly and quarterly Preventive Maintenance Schedules (PMS) and carry out safe cleaning of dust, fans, and dried thermal interface material.',
        theoryContent: `Preventive Maintenance (PM) consists of systematic servicing routines designed to avert unplanned downtime, reduce equipment failure, and extend hardware longevity.

1. PRIMARY HAZARDS TO COMPUTER HARDWARE:
• Dust Accumulation: Induces thermal throttling by clogging heatsink fins and restricting airflow.
• Heat & Thermal Stress: Triggers emergency thermal shutdowns and accelerates semiconductor degradation.
• Humidity & Moisture: Fosters contact oxidation, rust, and short circuits.
• Power Fluctuation: Degrades capacitors and motherboard power delivery components.

2. STANDARD CLEANING EQUIPMENT:
• Anti-static soft-bristle brush
• Compressed air canister or electric air blower (Always hold fan blades stationary while blowing to prevent back-EMF voltage generation).
• 90%+ Isopropyl Alcohol and lint-free microfiber cloths
• High-performance non-conductive thermal paste (e.g., Arctic MX-4 / Thermal Grizzly).`,
        codeSnippet: `// Standard Preventive Maintenance Frequency:
Daily:       Visual inspection, software backup confirmation
Weekly:      Antivirus definitions update, disk cleanup, temp files purge
Monthly:     Dust filter cleaning, cable inspection, event viewer error audit
Quarterly:   Full internal blowing, thermal paste inspection, UPS battery test`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.1: Physical PC Servicing and Thermal Re-pasting',
          instructions: [
            'Unplug the system unit and position it in a well-ventilated cleaning station.',
            'Hold all cooling fan blades stationary before applying air blower pressure to heatsinks and PSU.',
            'Remove the CPU heatsink and dissolve dried thermal compound using isopropyl alcohol.',
            'Apply fresh thermal paste (pea-sized dot) and remount the cooler securely.',
            'Record CPU temperatures before and after servicing using HWMonitor.'
          ],
          starterCode: `// Thermal Performance Audit:
Before Cleaning Idle Temp:  58 °C
After Servicing Idle Temp:  38 °C (20 °C improvement)
Fan RPM Status:             Normal & Quiet`,
          expectedOutcome: 'A thoroughly cleaned system unit exhibiting a 15°C to 20°C decrease in operating temperature.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.1: Preventive Maintenance Schedule (PMS) & Service Log',
          sheetName: 'PMS_Service_Log',
          description: 'Construct a 1-year Preventive Maintenance Calendar for an institutional computer laboratory.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            '52-week preventive maintenance schedule matrix.',
            'Individual computer terminal servicing checklist.',
            'Thermal benchmark verification report.'
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
        objective: 'Master ATX power rail voltage tolerances, perform the paperclip jumper test on Pin 16 (PS_ON#), and measure +12V, +5V, +3.3V rails and 3.0V CR2032 CMOS coin cells using a Digital Multimeter.',
        theoryContent: `In the TESDA COC 4 Demonstration and Oral Questioning, candidates are evaluated on their ability to use a Digital Multimeter to diagnose Power Supply Units (PSUs).

1. THE PAPERCLIP JUMPER TEST (OPERATING PSU WITHOUT MOTHERBOARD):
• Locate the 24-pin ATX Main Power Connector.
• Identify Pin 16: Green Wire (PS_ON# - Power Supply On signal).
• Using an insulated paperclip, bridge Pin 16 (Green) to any Black Wire (Ground / COM such as Pin 15 or 17).
• If the PSU cooling fan spins, the internal switching relay circuit is functioning.

2. STANDARD DC VOLTAGES & TOLERANCE LIMITS (±5% Standard):
• Yellow Wires:  +12V DC  (Permissible Range: +11.40V to +12.60V) - Powers CPU and GPU VRMs.
• Red Wires:     +5V DC   (Permissible Range: +4.75V to +5.25V)   - Powers logic circuits and USB ports.
• Orange Wires:  +3.3V DC (Permissible Range: +3.14V to +3.47V)   - Powers RAM and motherboard chipsets.
• Blue Wire:     -12V DC  (±10% Tolerance)
• Purple Wire:   +5VSB    (Standby Power - Continuous power present even while PC is shut down).
• Gray Wire:     Power Good (PG / PWR_OK - Sends +5V confirmation when voltage output stabilizes).

3. CR2032 CMOS BATTERY TESTING:
• Set Multimeter selector to DC Voltage (20V scale).
• A fresh battery must register between 3.0V and 3.3V.
• Readings below 2.7V result in loss of BIOS clock time and CMOS settings whenever AC power is removed.`,
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
            'Isolate the PSU from all computer hardware components.',
            'Use a paperclip jumper to bridge the Green wire (Pin 16) to a Black wire (Ground).',
            'Configure the Digital Multimeter to DC 20V mode.',
            'Insert the Black negative probe into any Black COM port on a Molex or 24-pin connector.',
            'Probe the Yellow wire (+12V), Red wire (+5V), and Orange wire (+3.3V) with the Red positive probe.',
            'Measure the CR2032 CMOS coin battery and log exact voltage readings.'
          ],
          starterCode: `// Multimeter Test Bench Readings:
Yellow Rail (+12V):   12.18 V (PASSED - within 5%)
Red Rail (+5V):        5.06 V (PASSED - within 5%)
Orange Rail (+3.3V):   3.34 V (PASSED - within 5%)
CMOS Battery:          3.15 V (HEALTHY)`,
          expectedOutcome: 'Safe and accurate multimeter diagnosis confirming whether the PSU operates within safe electrical parameters.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.2: Power Supply Voltage Diagnostic & Tolerance Log',
          sheetName: 'PSU_Voltage_Audit',
          description: 'Record test data from 10 inspected power supplies and compute percentage deviations from nominal standard voltages.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Calculated voltage tolerance matrix in Google Sheets.',
            'CMOS battery health assessment.',
            'Pass/Fail electrical safety certification form.'
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
        objective: 'Isolate hardware crashes using POST Diagnostic Cards, memory testing software (MemTest86), and Windows Blue Screen of Death (BSOD) minidump crash analysis via BlueScreenView.',
        theoryContent: `When a computer crashes with an unexpected reboot or displays a Blue Screen of Death (BSOD), an underlying hardware defect or low-level kernel driver crash has occurred.

1. COMMON BSOD STOP CODES & ROOT CAUSES:
• \`MEMORY_MANAGEMENT\` (0x0000001A): Faulty RAM module or oxidized DIMM contact pins.
• \`CRITICAL_PROCESS_DIED\` (0x000000EF): Lost access to boot storage drive or corrupted OS kernel structure.
• \`SYSTEM_THREAD_EXCEPTION_NOT_HANDLED\`: Corrupted graphics driver or outdated hardware firmware.
• \`WHEA_UNCORRECTABLE_ERROR\`: CPU overheating or unstable voltage supply from motherboard VRMs.

2. SYSTEMATIC FAULT ISOLATION (HALF-SPLIT TECHNIQUE):
• Remove all non-essential expansion peripherals: Disconnect discrete GPU if onboard graphics exist, remove add-in audio cards, and isolate memory to a single RAM module.
• Clean RAM gold contact pins using a soft pencil eraser and wipe down with 90%+ isopropyl alcohol before reseating.
• Test each DIMM slot individually to isolate whether the memory module or motherboard memory slot is defective.`,
        codeSnippet: `// Windows Memory Diagnostic & Dump Analysis:
mdsched.exe                  // Windows Memory Diagnostic Tool (Reboots PC to test RAM)
chkdsk C: /f /r              // Disk surface & sector scan
sfc /scannow                 // Integrity scan of protected system files`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.3: Simulating and Resolving Memory & Storage Faults',
          instructions: [
            'Install BlueScreenView on the test computer.',
            'Open a sample minidump file (`C:\\Windows\\Minidump\\*.dmp`) and identify the offending Caused By Driver.',
            'Run the built-in Windows Memory Diagnostic tool (`mdsched.exe`).',
            'Inspect S.M.A.R.T. drive health using CrystalDiskInfo and examine Reallocated Sectors Count.'
          ],
          starterCode: `// Fault Isolation Log:
Bug Check Code:       0x0000001A (MEMORY_MANAGEMENT)
Caused by Driver:     ntoskrnl.exe
Action Taken:         RAM stick cleaned and reseated in Slot 2
Result:               Zero errors after 2 passes of memory diagnostic`,
          expectedOutcome: 'Prompt identification of root crash causes and restoration of the system to a 100% stable operational condition.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.3: Hardware Fault Isolation & Incident Ticket Sheet',
          sheetName: 'Incident_Ticket_Log',
          description: 'Construct an official IT Helpdesk Incident Ticket documenting Problem Description, Root Cause Analysis, and Resolution Steps.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Incident tickets covering 3 hardware failure scenarios.',
            'S.M.A.R.T. health status matrix for storage drives.',
            'Diagnostic memory test execution logs.'
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
    duration: '1 Week (35 Hours)',
    overview: 'Utilize DISM and SFC for OS image repair, perform disk cloning via Clonezilla / Macrium Reflect for mass deployment and backup, complete Job Order Sheets, and prepare for the TESDA Institutional Assessment.',
    lessons: [
      {
        title: 'Lesson 4.4: Software Repair Tools: SFC, DISM Image Health, Safe Mode & Malware Remediation',
        duration: '50 mins',
        videoUrl: 'https://www.youtube.com/watch?v=U3d4aWb4_Z0',
        videoTitle: 'How to Repair Corrupted Windows Files with SFC and DISM Commands',
        objective: 'Execute repair procedures on corrupted Windows system files using DISM and SFC, and remediate malware using Safe Mode and specialized removal utilities.',
        theoryContent: `Before reformatting a client computer, professional ICT technicians should first attempt to repair the operating system to preserve client files and configuration data.

ADVANCED WINDOWS SYSTEM REPAIR TOOLS:
1. DISM (Deployment Image Servicing and Management):
   - Verifies and repairs the Windows Component Store against clean Microsoft image sources.
   - \`DISM /Online /Cleanup-Image /CheckHealth\` (Fast check to determine whether corruption flags exist).
   - \`DISM /Online /Cleanup-Image /ScanHealth\` (In-depth scan of the component store).
   - \`DISM /Online /Cleanup-Image /RestoreHealth\` (Downloads and replaces defective system files).

2. SFC (System File Checker):
   - \`sfc /scannow\`
   - Scans protected operating system files and replaces corrupted binaries using cached clean files from \`%WinDir%\\System32\\dllcache\`.

3. SAFE MODE BOOT (Shift + Restart):
   - Boots Windows with minimal drivers and essential services.
   - Ideal for eliminating stubborn malware, coin miners, and unstable display drivers.`,
        codeSnippet: `// Master Command Chain for Windows Repair:
DISM /Online /Cleanup-Image /RestoreHealth
sfc /scannow
netsh winsock reset       // Restores corrupted network winsock catalog
ipconfig /flushdns`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.4: Complete OS Component Store Recovery Demonstration',
          instructions: [
            'Launch Command Prompt as Administrator.',
            'Execute the DISM RestoreHealth command and wait for 100% completion.',
            'Run `sfc /scannow` and examine the output log in `C:\\Windows\\Logs\\CBS\\CBS.log`.',
            'Reset the network stack using `netsh winsock reset` and restart the machine.'
          ],
          starterCode: `// System File Checker Expected Output:
Verification 100% complete.
Windows Resource Protection found corrupt files and successfully repaired them.
Details are included in the CBS.Log windir\\Logs\\CBS\\CBS.log.`,
          expectedOutcome: 'Successful recovery of Windows system files without requiring a complete reinstallation of the operating system.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.4: Software Diagnostic & System File Recovery Record',
          sheetName: 'Software_Repair_Log',
          description: 'Document software repairs conducted on laboratory workstations using DISM, SFC, and antivirus tools.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Log of DISM and SFC command execution results.',
            'Malware remediation checklist.',
            'Customer acceptance form for completed software servicing.'
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
        objective: 'Perform 1-to-1 sector disk cloning from HDD to high-speed SSD and generate System Image backups for rapid disaster recovery.',
        theoryContent: `In an enterprise office or computer lab equipped with 50 identical terminals, installing operating systems individually on each unit is inefficient. Disk cloning resolves this challenge.

1. DISK CLONING VS DISK IMAGING:
• Disk Cloning (Disk to Disk):
  - Copies every sector from the Source Disk directly to the Target Disk.
  - Once cloning finishes, connect the Target Disk to immediately boot into a fully functioning operating system.
• Disk Imaging (Disk to File):
  - Packages the entire drive into a compressed image file (e.g., \`.iso\`, \`.img\`, or \`.mrimg\`) stored on external media or network shares.

2. CRITICAL CLONING CONSIDERATIONS:
• The Target Disk capacity MUST equal or exceed the Used Space of the Source Disk.
• All preexisting data on the Target Disk is overwritten when cloning begins!
• Ensure all essential partitions (including EFI System and Recovery partitions) are selected for cloning.`,
        codeSnippet: `// CLI Image Deployment via DISM:
dism /Capture-Image /ImageFile:D:\\Images\\MasterImage.wim /CaptureDir:C:\\ /Name:"Windows10Master"
dism /Apply-Image /ImageFile:D:\\Images\\MasterImage.wim /Index:1 /ApplyDir:E:\\`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.5: Disk-to-Disk Cloning & Boot Verification',
          instructions: [
            'Connect the Target SSD to the computer using a USB-to-SATA enclosure or secondary internal SATA port.',
            'Launch cloning software (Macrium Reflect or Clonezilla bootable media).',
            'Select the Source Disk (Drive 0) and drag all partitions onto the Target Disk (Drive 1).',
            'Initiate the clone and wait for 100% verification.',
            'Disconnect the original hard drive, install the newly cloned SSD, and boot the system to confirm full functionality.'
          ],
          starterCode: `// Cloning Verification Log:
Source Disk:      256GB NVMe SSD (120GB Used)
Target Disk:      500GB SATA SSD
Cloning Time:     14 mins 22 secs
Target Boot Test: [SUCCESSFUL - Boot time under 10 seconds]`,
          expectedOutcome: 'A fully bootable cloned drive containing all installed applications, operating system configurations, and user data.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.5: Disk Cloning & Disaster Recovery Benchmark Sheet',
          sheetName: 'Disk_Cloning_Audit',
          description: 'Document sector transfer speeds, drive capacities, partition alignment, and boot time performance after SSD cloning.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Cloning benchmark results (Duration, Transfer Speed, Source vs Target sizes).',
            'Partition alignment verification (4K alignment check).',
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
        objective: 'Prepare for the actual TESDA National Assessment: complete official Job Order documentation, pass mock demonstrations across all 4 COCs, and answer Assessor oral questioning with technical confidence.',
        theoryContent: `During the TESDA National Assessment for Computer Systems Servicing NC II, candidates are assessed by an accredited Competency Assessor across the 4 Core Competencies:

1. THE 4 SEGMENTS OF THE NATIONAL ASSESSMENT:
• COC 1: Assembling PC, BIOS Setup, Bootable USB, OS & Driver Installation (1 Hour)
• COC 2: Crimping UTP Cable (Straight & Cross), Keystone Jack, Wireless Router Setup, Resource Sharing (1 Hour)
• COC 3: Server OS, Active Directory Domain Controller, DNS, DHCP, GPO & Client Domain Join (1 Hour)
• COC 4: Preventive Maintenance, Multimeter Testing of ATX PSU, Software Repair & Backup (45 mins)

2. FREQUENT ORAL QUESTIONING SAMPLES & ANSWERS:
Q1: "Why is it necessary to jump the Green and Black wire on an ATX power supply?"
A1: "To simulate the motherboard power switch signal (PS_ON# to Ground) to confirm whether the PSU switching circuit and internal relay activate independently."

Q2: "Why must the client workstation Preferred DNS be configured to the server IP before joining the domain?"
A2: "Because the domain server contains the Active Directory SRV records identifying the Domain Controller. Using public DNS prevents resolution of the local domain."

Q3: "What corrective action do you take when a yellow exclamation mark appears in Device Manager?"
A3: "Inspect the Hardware ID in device properties (VEN/DEV identifiers) to source and install the verified manufacturer driver."

3. IMPORTANCE OF THE JOB ORDER SHEET:
• Every service action requires documentation: Client Name, Hardware Serial Numbers, Reported Defect, Performed Repairs, Replaced Components, and Client Signature certifying satisfaction and technical accountability.`,
        codeSnippet: `// Core Competencies Summary for Assessment Day:
[COC 1]: Disassembly -> Assembly -> POST -> BIOS -> OS Install -> Drivers
[COC 2]: T568A / T568B Crimping -> Cable Testing -> Router Config -> Sharing
[COC 3]: Server Install -> AD DS -> DC Promo -> DNS -> DHCP -> GPO -> Client Join
[COC 4]: Multimeter Testing -> PMS -> DISM/SFC -> Backup -> Job Order`,
        handsOnActivity: {
          title: 'Hands-on Activity 4.6: Comprehensive TESDA CSS NC II Mock Assessment Simulation',
          instructions: [
            'Complete the full 4-hour mock simulation under the supervision of your ICT Instructor.',
            'Fill out an official Job Order Sheet for a simulated client.',
            'Execute hands-on demonstrations before the class and evaluator.',
            'Answer 5 randomly selected oral questions from the official TESDA Question Bank.'
          ],
          starterCode: `// TESDA Competency Evidence Guide:
[Competent] Candidate demonstrated all safety procedures and functional systems
[Competent] All 4 COCs passed according to Training Regulations
Recommendation: ISSUANCE OF NATIONAL CERTIFICATE II (NC II)`,
          expectedOutcome: '100% student readiness to successfully pass and become a Certified Holder of the TESDA Computer Systems Servicing NC II credential.'
        },
        googleSheetsAssignment: {
          title: 'Classroom Sheet 4.6: TESDA Institutional Assessment Scorecard & Job Order',
          sheetName: 'TESDA_Assessment_Scorecard',
          description: 'Official Competency Assessment Results Summary (CARS) and institutional rating sheet for CSS NC II.',
          templateUrl: 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/copy',
          deliverables: [
            'Official Job Order Sheet with client sign-off.',
            'Complete CARS Institutional Scorecard across all 4 COCs.',
            'Oral questioning rating record and certification recommendation.'
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
    name: 'Ronnel M. Aviguetero',
    role: 'CEO and FOUNDER of KEZJED SOLUTIONS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    credentials: 'CEO and FOUNDER of KEZJED SOLUTIONS • Certified TESDA CSS NC II Trainer & Senior Technology Leader',
  },
  rating: 5.00,
  reviewCount: 940,
  activeLearners: 2860,
  lessonsCount: 24,
  duration: '8 Weeks (280 Nominal Training Hours)',
  description: 'The most comprehensive Computer Systems Servicing (CSS) NC II course based on official TESDA Training Regulations. Covers all 4 Core Competencies (ICCS, SUCN, SUCS, MRCSN) from hardware assembly, network cabling, Windows Server AD DS, to multimeter diagnostic testing.',
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
