import { useState, useEffect } from 'react';
import { TopAnnouncement } from './components/layout/TopAnnouncement';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { AllInOneGrid } from './components/features/AllInOneGrid';
import { TeachingTracksSection } from './components/tracks/TeachingTracksSection';
import { CommunityDevelopersSection } from './components/community/CommunityDevelopersSection';
import { CommunityHubSection } from './components/community/CommunityHubSection';
import { FeatureDeepDives } from './components/features/FeatureDeepDives';
import { PricingSection } from './components/pricing/PricingSection';
import { TestimonialsSection } from './components/social-proof/TestimonialsSection';
import { FAQSection } from './components/faq/FAQSection';
import { FinalCTA } from './components/cta/FinalCTA';
import { AuthModal } from './components/modals/AuthModal';
import { TrackDetailModal } from './components/modals/TrackDetailModal';
import { CourseBuilderModal } from './components/studio/CourseBuilderModal';
import { TeacherSetupModal } from './components/teachers/TeacherSetupModal';
import { CheckoutModal } from './components/modals/CheckoutModal';
import { DeveloperProfileModal } from './components/modals/DeveloperProfileModal';
import { ApplyTenantModal } from './components/modals/ApplyTenantModal';
import { getCurrentUser, supabase } from './lib/supabaseClient';
import type { Track, CommunityDeveloper } from './types';
import { CreateCommunityModal } from './components/modals/CreateCommunityModal';

// =========================================================================
// COC 1: INSTALLING AND CONFIGURING COMPUTER SYSTEMS (14 Lessons)
// =========================================================================
const COC1_LESSONS = [
  { id: 1, title: 'Introduction to Computer Systems', duration: '4 Hours', objective: 'Understand the fundamental architecture of modern computer systems and data processing cycle.', content: 'Covers input, processing, output, and storage devices. Explores von Neumann architecture.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Create a system block diagram classifying peripherals.', quiz: 'Identify the primary function of the ALU.', classroomLink: '', progress: 100 },
  { id: 2, title: 'Computer Hardware Components', duration: '6 Hours', objective: 'Identify and inspect internal and external hardware components including CPU, RAM, and motherboards.', content: 'Detailed study of CPU sockets, motherboard form factors, RAM types, and storage drives.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'List motherboard specifications and compatibility check.', quiz: 'What is the difference between volatile and non-volatile memory?', classroomLink: '', progress: 0 },
  { id: 3, title: 'Occupational Health and Safety (OHS)', duration: '4 Hours', objective: 'Apply OHS policies and procedures in computer laboratory environments, including ESD protection.', content: 'Proper grounding techniques, anti-static wrist straps, mat usage, and emergency protocols.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Draft an OHS safety checklist for an IT workstation setup.', quiz: 'Why is an anti-static wrist strap critical when assembling a PC?', classroomLink: '', progress: 0 },
  { id: 4, title: 'Computer Assembly and Disassembly', duration: '10 Hours', objective: 'Safely assemble and disassemble a complete desktop computer system.', content: 'Motherboard mounting, CPU installation, thermal paste application, heatsink mounting, PSU wiring.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Perform physical assembly and cable management on a training PC rig.', quiz: 'What is the correct pin orientation for power switch headers?', classroomLink: '', progress: 0 },
  { id: 5, title: 'BIOS/UEFI Configuration', duration: '6 Hours', objective: 'Navigate and configure BIOS/UEFI firmware settings and boot priorities.', content: 'Accessing BIOS via hotkeys, configuring boot order for USB media, and enabling virtualization.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Configure boot sequence and secure boot options in BIOS.', quiz: 'How do you reset a forgotten BIOS password?', classroomLink: '', progress: 0 },
  { id: 6, title: 'Operating System Installation', duration: '10 Hours', objective: 'Install modern operating systems from bootable USB media.', content: 'Creating bootable media using Rufus, partition formatting (GPT vs MBR), and clean OS installation.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Execute a clean installation of Windows 11 on a formatted partition.', quiz: 'What partition style is required for UEFI boot with drives over 2TB?', classroomLink: '', progress: 0 },
  { id: 7, title: 'Device Drivers Installation', duration: '6 Hours', objective: 'Install and update hardware device drivers for optimal performance.', content: 'Using Device Manager to identify missing drivers and installing chipset, graphics, and network drivers.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Verify all hardware drivers are installed without warning icons.', quiz: 'Where can you check if a driver failed to load?', classroomLink: '', progress: 0 },
  { id: 8, title: 'Application Software Installation', duration: '6 Hours', objective: 'Install and configure productivity suites, antivirus, and utility applications.', content: 'Installing Microsoft Office / LibreOffice, antivirus packages, PDF readers, and archiving tools.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Install standard productivity tools and verify activation.', quiz: 'What is the purpose of installing anti-malware software?', classroomLink: '', progress: 0 },
  { id: 9, title: 'Computer Configuration', duration: '6 Hours', objective: 'Configure operating system settings, user accounts, and power options.', content: 'Setting up local user accounts, configuring Windows Update, and screen resolution.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Create custom user accounts and adjust power profiles.', quiz: 'What privilege level is required to install system software?', classroomLink: '', progress: 0 },
  { id: 10, title: 'Network Configuration Basics', duration: '6 Hours', objective: 'Configure TCP/IPv4 network settings, static IP addressing, and connectivity.', content: 'Understanding IP addresses, subnet masks, default gateways, and ping command testing.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Assign a static IP address and test connectivity.', quiz: 'What command-line tool tests network reachability?', classroomLink: '', progress: 0 },
  { id: 11, title: 'Testing and Troubleshooting', duration: '8 Hours', objective: 'Diagnose and resolve common hardware and software faults.', content: 'POST beep code analysis, blue screen troubleshooting, and RAM testing.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Simulate and resolve a RAM seating error scenario.', quiz: 'What do continuous short beeps during POST indicate?', classroomLink: '', progress: 0 },
  { id: 12, title: 'Preventive Maintenance', duration: '4 Hours', objective: 'Perform scheduled preventive maintenance to extend hardware lifespan.', content: 'Dust cleaning using compressed air, disk cleanup, and defragmentation.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Execute a digital disk cleanup and defragmentation routine.', quiz: 'How often should physical dust cleaning be performed?', classroomLink: '', progress: 0 },
  { id: 13, title: 'Documentation and Work Completion', duration: '4 Hours', objective: 'Complete service reports, inventory logs, and customer turnover documentation.', content: 'Recording serial numbers, software licenses, maintenance logs, and customer sign-off.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Fill out a standard IT Technical Service Report Form.', quiz: 'Why is maintaining an accurate hardware inventory log important?', classroomLink: '', progress: 0 },
  { id: 14, title: 'COC 1 Practical Assessment', duration: '10 Hours', objective: 'Demonstrate complete mastery of COC 1 through timed practical performance tasks.', content: 'Comprehensive performance evaluation covering assembly, BIOS, OS installation, and troubleshooting.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Complete the timed practical demonstration rubric.', quiz: 'Submit final performance checklist and practical competency log.', classroomLink: '', progress: 0 }
];

// =========================================================================
// COC 2: SET UP COMPUTER NETWORKS (12 Lessons)
// =========================================================================
const COC2_LESSONS = [
  { id: 1, title: 'Introduction to Computer Networking', duration: '4 Hours', objective: 'Understand network fundamentals including LAN, WAN, WLAN, topologies, and devices.', content: 'What is a computer network? LAN vs WAN vs WLAN, topologies, and basic network devices.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Draw a network topology diagram for a small office network.', quiz: 'What topology uses a central switch or hub connecting all nodes?', classroomLink: '', progress: 0 },
  { id: 2, title: 'Network Components and Tools', duration: '6 Hours', objective: 'Identify network media, hardware components, crimping tools, and LAN testers.', content: 'NIC, switches, routers, access points, modems, UTP/STP cables, RJ45 connectors, crimping tools, LAN testers.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Inspect and catalog network tools and cable connectors.', quiz: 'What tool is used to test continuity on an RJ45 UTP cable?', classroomLink: '', progress: 0 },
  { id: 3, title: 'Network Cabling (T568A / T568B)', duration: '8 Hours', objective: 'Make, terminate, and test straight-through and crossover UTP cables.', content: 'UTP cable color standards T568A and T568B, straight-through vs crossover cables, cable termination.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Fabricate and test both a straight-through and crossover UTP cable.', quiz: 'Which standard puts Orange-White on pin 1 for T568B?', classroomLink: '', progress: 0 },
  { id: 4, title: 'IP Addressing (IPv4, Static, DHCP, Subnetting)', duration: '8 Hours', objective: 'Master IPv4 addressing, public vs private IPs, static assignment, DHCP, and subnet masks.', content: 'IPv4 structure, public/private IP ranges, static IP, DHCP servers, subnet masks, default gateways, DNS.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Calculate subnet ranges and assign static IP configurations.', quiz: 'What is the private IP class range starting with 192.168.0.0?', classroomLink: '', progress: 0 },
  { id: 5, title: 'Setting Up a LAN', duration: '8 Hours', objective: 'Connect computers and network hardware to establish a functioning Local Area Network.', content: 'Connecting computers, linking switches/routers, configuring network adapters, assigning IP addresses.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Build a small physical LAN and verify node-to-node connectivity.', quiz: 'What command verifies basic IP layer reachability between two PCs?', classroomLink: '', progress: 0 },
  { id: 6, title: 'Wireless Network Setup', duration: '6 Hours', objective: 'Configure Wi-Fi access points, SSIDs, and enterprise-grade wireless security.', content: 'Wi-Fi configuration, SSID broadcasting, WPA2/WPA3 security protocols, and access point management.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Configure a wireless router with WPA3 encryption and a custom SSID.', quiz: 'Which wireless security protocol offers the highest standard encryption today?', classroomLink: '', progress: 0 },
  { id: 7, title: 'Network Sharing & Permissions', duration: '6 Hours', objective: 'Set up file, folder, and printer sharing across local network users.', content: 'File/folder sharing, network printer sharing, network discovery, and user security permissions.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Share a network folder and assign read/write permissions to specific users.', quiz: 'What Windows feature must be enabled to see other PCs on the network?', classroomLink: '', progress: 0 },
  { id: 8, title: 'Network Troubleshooting', duration: '8 Hours', objective: 'Diagnose and resolve network connectivity issues using diagnostic CLI tools.', content: 'Using ipconfig, ping, tracert, nslookup. Checking physical cables, switch ports, and IP conflicts.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Trace packet routing paths and resolve a simulated IP conflict.', quiz: 'What command diagnoses DNS name resolution issues?', classroomLink: '', progress: 0 },
  { id: 9, title: 'Network Security Basics', duration: '6 Hours', objective: 'Implement fundamental network security practices including router hardening and firewalls.', content: 'Strong passwords, router admin security, firewall basics, secure Wi-Fi practices.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Change default router administrator credentials and configure basic firewall rules.', quiz: 'Why is changing default router credentials critical for network security?', classroomLink: '', progress: 0 },
  { id: 10, title: 'Network Documentation', duration: '4 Hours', objective: 'Create accurate network diagrams, IP address tables, and cable labeling records.', content: 'Network diagrams, IP address allocation tables, cable labeling standards, and configuration records.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Draft an IP assignment table and physical cable map for a network lab.', quiz: 'What record tracks all active IP addresses assigned to devices?', classroomLink: '', progress: 0 },
  { id: 11, title: 'Practical Performance Tasks', duration: '10 Hours', objective: 'Execute hands-on networking tasks from cabling and LAN setup to resource sharing.', content: 'Making UTP cables, building a small LAN, static IP setup, DHCP configuration, Wi-Fi setup.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Complete the full practical network setup and troubleshooting checklist.', quiz: 'Submit practical performance verification record.', classroomLink: '', progress: 0 },
  { id: 12, title: 'COC 2 Assessment', duration: '6 Hours', objective: 'Pass written examinations, practical tests, and troubleshooting assessments for COC 2.', content: 'Written test, identification, practical lab examination, troubleshooting assessment, and final checklist.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Take the comprehensive COC 2 summative evaluation exam.', quiz: 'Complete final competency review items.', classroomLink: '', progress: 0 }
];

// =========================================================================
// COC 3: SET UP COMPUTER SERVERS (13 Lessons)
// =========================================================================
const COC3_LESSONS = [
  { id: 1, title: 'Introduction to Computer Servers', duration: '4 Hours', objective: 'Understand server fundamentals, server vs workstation, and client-server architecture.', content: 'What is a server? Server vs workstation, types of servers, server roles and functions, client-server architecture.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Compare server hardware specifications against standard desktop PCs.', quiz: 'What is the primary architectural difference between a server and a desktop workstation?', classroomLink: '', progress: 0 },
  { id: 2, title: 'Server Hardware & RAID Basics', duration: '6 Hours', objective: 'Explore server motherboards, enterprise RAM, server racks, power supplies, and RAID levels.', content: 'Server motherboard, CPU, RAM, storage, RAID basics (RAID 0, 1, 5, 10), power supply redundancy, network interface cards.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Design a redundant storage layout using RAID 5 specifications.', quiz: 'What RAID level provides fault tolerance with striping and parity across at least 3 drives?', classroomLink: '', progress: 0 },
  { id: 3, title: 'Server Operating Systems', duration: '6 Hours', objective: 'Understand server OS concepts, Windows Server fundamentals, and Linux server basics.', content: 'Server OS concepts, Windows Server fundamentals, Linux server fundamentals, installation requirements.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Verify hardware compatibility and system requirements for Windows Server installation.', quiz: 'What edition of Windows Server is commonly used for enterprise environments?', classroomLink: '', progress: 0 },
  { id: 4, title: 'Server Installation & Configuration', duration: '8 Hours', objective: 'Install a server OS and perform initial host configurations including static IP and computer naming.', content: 'Server installation, computer naming conventions, Administrator account setup, static IP addressing, DNS config, time synchronization.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Perform initial server setup, assign a static IP, and configure hostname.', quiz: 'Why must a server always be configured with a static IP address rather than DHCP?', classroomLink: '', progress: 0 },
  { id: 5, title: 'User and Group Management', duration: '6 Hours', objective: 'Create and manage user accounts, groups, password policies, and access control.', content: 'User accounts, groups, password policies, user permissions, access control lists (ACLs).', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Create organizational units, user groups, and apply strict password complexity policies.', quiz: 'What policy ensures users change passwords regularly and maintain strong security?', classroomLink: '', progress: 0 },
  { id: 6, title: 'File and Folder Services', duration: '8 Hours', objective: 'Create shared folders and manage NTFS permissions vs share permissions.', content: 'Creating shared folders, NTFS permissions, share permissions, network access, file-server management.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Configure a shared folder with combined NTFS and share permission restrictions.', quiz: 'When both NTFS and Share permissions are applied, which permission takes precedence when accessed over the network?', classroomLink: '', progress: 0 },
  { id: 7, title: 'DHCP Server Installation & Scope', duration: '8 Hours', objective: 'Install and configure the Dynamic Host Configuration Protocol (DHCP) server role.', content: 'DHCP concepts, DHCP installation, scope creation, IP address allocation, reservations, testing DHCP.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Install DHCP role, configure an IP scope, and set up a static IP reservation for a printer.', quiz: 'What is a DHCP reservation used for?', classroomLink: '', progress: 0 },
  { id: 8, title: 'DNS Server Configuration', duration: '8 Hours', objective: 'Install and configure Domain Name System (DNS) forward and reverse lookup zones.', content: 'DNS concepts, domain names, forward lookup zones, reverse lookup zones, DNS config, DNS troubleshooting.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Create forward and reverse lookup zones and register host records.', quiz: 'What lookup zone translates IP addresses back into domain names?', classroomLink: '', progress: 0 },
  { id: 9, title: 'Web & Network Services', duration: '6 Hours', objective: 'Install, configure, and monitor basic server network services.', content: 'Basic server services, installing required features, service configuration, starting/stopping services, monitoring.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Install and verify web/file services through Server Manager dashboard.', quiz: 'How do you restart a failed Windows background service?', classroomLink: '', progress: 0 },
  { id: 10, title: 'Server Security & Hardening', duration: '6 Hours', objective: 'Implement server security hardening, firewall rules, updates, and malware protection.', content: 'Administrator security, firewall configuration, user permissions, updates, malware protection, secure remote access.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Configure Windows Firewall inbound/outbound rules and secure remote desktop access.', quiz: 'What protocol is recommended for secure encrypted remote administration?', classroomLink: '', progress: 0 },
  { id: 11, title: 'Server Backup and Maintenance', duration: '6 Hours', objective: 'Execute server backup strategies, restore procedures, and routine system maintenance.', content: 'Backup concepts, backup types (Full, Incremental, Differential), restore procedures, system maintenance.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Perform a scheduled system backup and simulate a file restoration procedure.', quiz: 'What backup type backs up only data changed since the last full backup?', classroomLink: '', progress: 0 },
  { id: 12, title: 'Server Troubleshooting & Diagnostics', duration: '8 Hours', objective: 'Diagnose and resolve server connectivity, DNS, DHCP, permission, and service failures.', content: 'Server connectivity problems, DNS/DHCP issues, permission problems, service failures, diagnostic commands.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Troubleshoot and resolve a simulated server DNS failure scenario.', quiz: 'What tool inspects active system events and error logs on Windows Server?', classroomLink: '', progress: 0 },
  { id: 13, title: 'COC 3 Assessment & Documentation', duration: '6 Hours', objective: 'Complete server documentation, written examinations, and practical performance tests for COC 3.', content: 'Server inventory, IP documentation, diagrams, written examination, practical performance test, competency checklist.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Complete the final server configuration practical assessment and documentation report.', quiz: 'Submit final COC 3 competency review task.', classroomLink: '', progress: 0 }
];

// =========================================================================
// COC 4: MAINTAIN AND REPAIR COMPUTER SYSTEMS AND NETWORKS (11 Lessons)
// =========================================================================
const COC4_LESSONS = [
  { id: 1, title: 'Computer Maintenance Fundamentals', duration: '4 Hours', objective: 'Understand preventive vs. corrective maintenance, schedules, OHS, and ESD precautions.', content: 'Preventive vs. corrective maintenance, maintenance schedules, proper maintenance procedures, OHS and ESD precautions.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Draft a scheduled preventive maintenance calendar for a computer laboratory.', quiz: 'What is the primary difference between preventive and corrective maintenance?', classroomLink: '', progress: 0 },
  { id: 2, title: 'Computer Cleaning and Thermal Management', duration: '6 Hours', objective: 'Perform physical cleaning of internal components, peripherals, dust removal, and thermal paste re-application.', content: 'Cleaning internal components, peripherals, dust removal using compressed air, thermal management, cable management.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Clean CPU heatsink fins and replace old thermal paste on a test rig.', quiz: 'Why is proper thermal paste application critical for CPU lifespan?', classroomLink: '', progress: 0 },
  { id: 3, title: 'Hardware Troubleshooting & Diagnostics', duration: '8 Hours', objective: 'Diagnose POST errors, boot failures, power issues, RAM, storage, and motherboard faults.', content: 'POST and boot problems, power supply faults, RAM errors, storage drive failures, motherboard and CPU cooling problems.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Diagnose and isolate a faulty RAM stick using beep codes and diagnostic cards.', quiz: 'What component typically causes a PC to shut down unexpectedly after a few minutes of heavy gaming?', classroomLink: '', progress: 0 },
  { id: 4, title: 'Software Troubleshooting & OS Recovery', duration: '8 Hours', objective: 'Resolve operating system errors, driver conflicts, boot issues, malware infections, and performance bottlenecks.', content: 'Operating system errors, driver conflicts, application errors, startup problems, malware issues, system performance tuning.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Fix a corrupted boot sector using Windows Recovery Environment (WinRE) command prompt.', quiz: 'What command repairs damaged system files using protected local store copies?', classroomLink: '', progress: 0 },
  { id: 5, title: 'Hardware Replacement and Repair', duration: '8 Hours', objective: 'Safely replace defective RAM, storage drives, power supplies, and verify component compatibility.', content: 'RAM replacement, storage replacement, PSU replacement, peripheral replacement, component compatibility, safe installation.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Perform a live power supply unit swap and verify voltage outputs.', quiz: 'What must be verified before replacing a motherboard on an existing system case?', classroomLink: '', progress: 0 },
  { id: 6, title: 'Operating System & Network Maintenance', duration: '6 Hours', objective: 'Perform OS updates, disk management, backup/restore, and inspect network equipment and cables.', content: 'Updates, drivers, disk management, system utilities, backup/restore, network equipment inspection, cable testing.', videoUrl: 'https://www.youtube.com/embed/5mY7y_x4ZlQ', activity: 'Execute a full system image backup and test network switch link lights.', quiz: 'What utility manages disk partitions and volume formats in Windows?', classroomLink: '', progress: 0 },
  { id: 7, title: 'Troubleshooting Tools & Utilities', duration: '6 Hours', objective: 'Utilize multimeters, LAN testers, POST cards, and CLI diagnostic tools.', content: 'Multimeter, LAN tester, POST diagnostic cards, Windows diagnostic utilities, command-line tools, diagnostic software.', videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE', activity: 'Test PSU DC output voltages using a digital multimeter.', quiz: 'What setting on a multimeter tests continuous electrical connections?', classroomLink: '', progress: 0 },
  { id: 8, title: 'System Backup and Data Recovery', duration: '6 Hours', objective: 'Perform data backups, system imaging, file recovery, and disaster recovery procedures.', content: 'Data backup, system image creation, file recovery, restore procedures, recovery media creation.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', activity: 'Create a bootable system recovery USB drive.', quiz: 'What is the difference between a file backup and a full system image?', classroomLink: '', progress: 0 },
  { id: 9, title: 'Computer Security Maintenance', duration: '6 Hours', objective: 'Maintain antivirus definitions, firewall rules, security patches, and safe computing practices.', content: 'Antivirus/anti-malware, firewall management, security updates, password protection, safe computing practices.', videoUrl: 'https://www.youtube.com/embed/3Q9X7vFjXU4', activity: 'Update malware definitions and run a complete system security scan.', quiz: 'Why are operating system security patches critical for maintenance?', classroomLink: '', progress: 0 },
  { id: 10, title: 'Repair Documentation & Reports', duration: '4 Hours', objective: 'Create professional maintenance reports, repair records, and parts replacement documentation.', content: 'Maintenance reports, repair logs, troubleshooting records, parts replacement records, service documentation.', videoUrl: 'https://www.youtube.com/embed/hQic7h6XqKA', activity: 'Draft an itemized hardware repair and parts replacement invoice.', quiz: 'What details must be recorded when replacing a defective hard drive under warranty?', classroomLink: '', progress: 0 },
  { id: 11, title: 'COC 4 Practical Assessment & Final Repair Task', duration: '8 Hours', objective: 'Demonstrate complete mastery of COC 4 through practical repair, maintenance, and troubleshooting examinations.', content: 'Written knowledge test, hardware troubleshooting, software/network diagnosis, practical repair examination.', videoUrl: 'https://www.youtube.com/embed/W5kCg2dfnFk', activity: 'Complete the comprehensive practical hardware/software repair and documentation task.', quiz: 'Submit final COC 4 competency evaluation checklist.', classroomLink: '', progress: 0 }
];

export function App() {
  const [perspective, setPerspective] = useState<'educator' | 'student'>('educator');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup');
  const [initialEmail, setInitialEmail] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutTrack, setCheckoutTrack] = useState<Track | null>(null);
  const [courseBuilderOpen, setCourseBuilderOpen] = useState(false);
  const [teacherSetupOpen, setTeacherSetupOpen] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState<CommunityDeveloper | null>(null);
  const [developerProfileOpen, setDeveloperProfileOpen] = useState(false);
  const [applyTenantOpen, setApplyTenantOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [createCommunityOpen, setCreateCommunityOpen] = useState(false);

  // Active Classroom / Workspace state
  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [selectedActiveTrack, setSelectedActiveTrack] = useState<Track | null>(null);
  const [activeCoc, setActiveCoc] = useState<'coc1' | 'coc2' | 'coc3' | 'coc4'>('coc1');
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  
  const [coc1Data, setCoc1Data] = useState(COC1_LESSONS);
  const [coc2Data, setCoc2Data] = useState(COC2_LESSONS);
  const [coc3Data, setCoc3Data] = useState(COC3_LESSONS);
  const [coc4Data, setCoc4Data] = useState(COC4_LESSONS);
  
  const [tempLinkInput, setTempLinkInput] = useState('');
  const [linkSavedMsg, setLinkSavedMsg] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Active Supabase user state
  const [currentUser, setCurrentUser] = useState<{ email?: string; role?: string } | null>(null);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setCurrentUser({
          email: user.email,
          role: user.user_metadata?.role || 'educator',
        });
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setCurrentUser({
          email: session.user.email,
          role: session.user.user_metadata?.role || 'educator',
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleOpenAuth = (mode: 'signup' | 'signin', email: string = '', planId?: string) => {
    setAuthMode(mode);
    setInitialEmail(email);
    setSelectedPlanId(planId);
    setAuthModalOpen(true);
  };

  const handleEnrollTrack = (track: Track) => {
    const isFree = (track.price || 49) === 0 || track.id === 'track-tesda-css-nc2' || track.bundleNumber === 2;
    
    if (isFree && !currentUser) {
      handleOpenAuth('signup', '', track.id);
      return;
    }

    if (isFree) {
      setSelectedActiveTrack(track);
      setActiveCoc('coc1');
      setActiveLessonIndex(0);
      setTempLinkInput(COC1_LESSONS[0].classroomLink);
      setIsClassroomOpen(true);
    } else {
      setCheckoutTrack(track);
      setCheckoutModalOpen(true);
    }
  };

  const handleSuccessEnroll = (track: Track) => {
    setSelectedActiveTrack(track);
    setActiveCoc('coc1');
    setActiveLessonIndex(0);
    setTempLinkInput(COC1_LESSONS[0].classroomLink);
    setIsClassroomOpen(true);
  };

  const handleSelectDeveloper = (dev: CommunityDeveloper) => {
    setSelectedDeveloper(dev);
    setDeveloperProfileOpen(true);
  };

  const handleViewSyllabus = (track: Track) => {
    setSelectedTrack(track);
  };

  const handleCourseCreated = (_newTrack: Track) => {
    setRefreshTrigger(prev => prev + 1);
    const tracksSection = document.getElementById('tracks');
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLessonsList = activeCoc === 'coc1' ? coc1Data : activeCoc === 'coc2' ? coc2Data : activeCoc === 'coc3' ? coc3Data : coc4Data;
  const currentLesson = currentLessonsList[activeLessonIndex] || currentLessonsList[0];

  // Helper to check if lesson is locked (previous lesson must be >= 80% progress)
  const isLessonLocked = (cocKey: 'coc1' | 'coc2' | 'coc3' | 'coc4', index: number) => {
    if (index === 0) {
      if (cocKey === 'coc1') return false;
      // If first lesson of COC 2, 3, or 4, check if the previous COC is 100% completed
      if (cocKey === 'coc2') return coc1Data.some(l => l.progress < 80);
      if (cocKey === 'coc3') return coc2Data.some(l => l.progress < 80);
      if (cocKey === 'coc4') return coc3Data.some(l => l.progress < 80);
    }
    const list = cocKey === 'coc1' ? coc1Data : cocKey === 'coc2' ? coc2Data : cocKey === 'coc3' ? coc3Data : coc4Data;
    return list[index - 1].progress < 80;
  };

  const handleUpdateProgress = (newProg: number) => {
    if (activeCoc === 'coc1') {
      const updated = [...coc1Data];
      updated[activeLessonIndex].progress = newProg;
      setCoc1Data(updated);
    } else if (activeCoc === 'coc2') {
      const updated = [...coc2Data];
      updated[activeLessonIndex].progress = newProg;
      setCoc2Data(updated);
    } else if (activeCoc === 'coc3') {
      const updated = [...coc3Data];
      updated[activeLessonIndex].progress = newProg;
      setCoc3Data(updated);
    } else {
      const updated = [...coc4Data];
      updated[activeLessonIndex].progress = newProg;
      setCoc4Data(updated);
    }
  };

  const handleSaveClassroomLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeCoc === 'coc1') {
      const updated = [...coc1Data];
      updated[activeLessonIndex].classroomLink = tempLinkInput;
      setCoc1Data(updated);
    } else if (activeCoc === 'coc2') {
      const updated = [...coc2Data];
      updated[activeLessonIndex].classroomLink = tempLinkInput;
      setCoc2Data(updated);
    } else if (activeCoc === 'coc3') {
      const updated = [...coc3Data];
      updated[activeLessonIndex].classroomLink = tempLinkInput;
      setCoc3Data(updated);
    } else {
      const updated = [...coc4Data];
      updated[activeLessonIndex].classroomLink = tempLinkInput;
      setCoc4Data(updated);
    }
    setLinkSavedMsg(true);
    setTimeout(() => setLinkSavedMsg(false), 2500);
  };

  // Check if all lessons across all COCs are completed at >= 80%
  const allCocLessons = [...coc1Data, ...coc2Data, ...coc3Data, ...coc4Data];
  const totalCompletedCount = allCocLessons.filter(l => l.progress >= 80).length;
  const overallCourseProgress = Math.round((totalCompletedCount / allCocLessons.length) * 100);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Banner */}
      <TopAnnouncement onOpenAuth={handleOpenAuth} />

      {/* Sticky Header */}
      <Navbar
        currentPerspective={perspective}
        onTogglePerspective={setPerspective}
        onOpenAuth={handleOpenAuth}
        onOpenCourseBuilder={() => setCourseBuilderOpen(true)}
        onOpenTeacherSetup={() => setTeacherSetupOpen(true)}
        onOpenApplyTenant={() => setApplyTenantOpen(true)}
        currentUser={currentUser}
        onSignOut={() => setCurrentUser(null)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          perspective={perspective}
          onOpenAuth={handleOpenAuth}
        />
        <AllInOneGrid
          onOpenAuth={handleOpenAuth}
        />
        <TeachingTracksSection
          onSelectTrack={(track) => setSelectedTrack(track)}
          onEnroll={handleEnrollTrack}
          onOpenAuth={handleOpenAuth}
          onOpenCourseBuilder={() => setCourseBuilderOpen(true)}
          refreshTrigger={refreshTrigger}
        />
        <CommunityDevelopersSection
          onSelectDeveloper={handleSelectDeveloper}
          onEnrollTrack={handleEnrollTrack}
          onViewSyllabus={handleViewSyllabus}
          onOpenApplyTenant={() => setApplyTenantOpen(true)}
        />
        <CommunityHubSection
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
        <FeatureDeepDives
          onOpenAuth={handleOpenAuth}
        />
        <PricingSection
          onOpenAuth={handleOpenAuth}
        />
        <TestimonialsSection />
        <FAQSection
          onOpenAuth={handleOpenAuth}
        />
        <FinalCTA
          onOpenAuth={handleOpenAuth}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        initialEmail={initialEmail}
        selectedPlanId={selectedPlanId}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={(email, role) => setCurrentUser({ email, role })}
      />

      <TrackDetailModal
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        onEnroll={handleEnrollTrack}
      />

      <CheckoutModal
        track={checkoutTrack}
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        onSuccessEnroll={handleSuccessEnroll}
        userEmail={currentUser?.email}
      />

      <CourseBuilderModal
        isOpen={courseBuilderOpen}
        onClose={() => setCourseBuilderOpen(false)}
        onCourseCreated={handleCourseCreated}
        userEmail={currentUser?.email}
      />

      <TeacherSetupModal
        isOpen={teacherSetupOpen}
        onClose={() => setTeacherSetupOpen(false)}
        onTeacherCreated={(teacher) => {
          setCurrentUser({ email: teacher.email, role: 'educator' });
        }}
      />

      <DeveloperProfileModal
        developer={selectedDeveloper}
        isOpen={developerProfileOpen}
        onClose={() => setDeveloperProfileOpen(false)}
        onEnrollTrack={handleEnrollTrack}
        onViewSyllabus={handleViewSyllabus}
      />

      <ApplyTenantModal
        isOpen={applyTenantOpen}
        onClose={() => setApplyTenantOpen(false)}
      />
     <CreateCommunityModal
  isOpen={createCommunityOpen}
  onClose={() => setCreateCommunityOpen(false)}
  userEmail={currentUser?.email}
  onCommunityCreated={() => {
    alert('Community created successfully!');
  }}
/>

      {/* Fully Interactive LMS Workspace View with Progress Bars & Locking */}
      {isClassroomOpen && selectedActiveTrack && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-in fade-in duration-200">
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between text-white shrink-0">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {activeCoc.toUpperCase()} • Overall Course Progress: {overallCourseProgress}%
              </span>
              <h2 className="text-base sm:text-lg font-black mt-0.5">{selectedActiveTrack.title}</h2>
            </div>
            <div className="flex items-center gap-3">
              {overallCourseProgress === 100 && (
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-black transition-all shadow-lg animate-pulse cursor-pointer flex items-center gap-1.5"
                >
                  🏆 Claim Certificate ↗
                </button>
              )}
              <button
                onClick={() => {
                  setIsClassroomOpen(false);
                  setSelectedActiveTrack(null);
                }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Exit Classroom ✕
              </button>
            </div>
          </div>

          <div className="flex-1 bg-slate-950 overflow-y-auto p-6 text-white flex flex-col items-center">
            <div className="max-w-6xl w-full space-y-6">
              
              {/* COC Navigation Switcher Bar */}
              <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-2xl flex-wrap gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => { setActiveCoc('coc1'); setActiveLessonIndex(0); setTempLinkInput(coc1Data[0].classroomLink); }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCoc === 'coc1' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    📂 COC 1 (14)
                  </button>
                  <button
                    onClick={() => {
                      if (coc1Data.some(l => l.progress < 80)) {
                        alert('Please complete COC 1 lessons to at least 80% progress to unlock COC 2.');
                        return;
                      }
                      setActiveCoc('coc2'); setActiveLessonIndex(0); setTempLinkInput(coc2Data[0].classroomLink);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCoc === 'coc2' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    🌐 COC 2 (12) {coc1Data.some(l => l.progress < 80) && '🔒'}
                  </button>
                  <button
                    onClick={() => {
                      if (coc2Data.some(l => l.progress < 80)) {
                        alert('Please complete COC 2 lessons to at least 80% progress to unlock COC 3.');
                        return;
                      }
                      setActiveCoc('coc3'); setActiveLessonIndex(0); setTempLinkInput(coc3Data[0].classroomLink);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCoc === 'coc3' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    🖥️ COC 3 (13) {coc2Data.some(l => l.progress < 80) && '🔒'}
                  </button>
                  <button
                    onClick={() => {
                      if (coc3Data.some(l => l.progress < 80)) {
                        alert('Please complete COC 3 lessons to at least 80% progress to unlock COC 4.');
                        return;
                      }
                      setActiveCoc('coc4'); setActiveLessonIndex(0); setTempLinkInput(coc4Data[0].classroomLink);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCoc === 'coc4' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    🛠️ COC 4 (11) {coc3Data.some(l => l.progress < 80) && '🔒'}
                  </button>
                </div>
              </div>

              {/* Main Grid: Video/Content on Left, Lesson Directory on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Cols: Video, Progress Bar, Activities & Google Classroom Link Attacher */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                    <iframe
                      src={currentLesson.videoUrl}
                      title={currentLesson.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-black uppercase">
                        {activeCoc.toUpperCase()} • Lesson {currentLesson.id} of {currentLessonsList.length} • {currentLesson.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">{currentLesson.title}</h3>

                    {/* Lesson Progress Bar & Toggle */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-300">Lesson Progress: <span className="text-emerald-400 font-mono">{currentLesson.progress}%</span></span>
                        <button
                          onClick={() => handleUpdateProgress(currentLesson.progress >= 80 ? 100 : 100)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            currentLesson.progress >= 80 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {currentLesson.progress >= 80 ? '✓ Completed (100%)' : 'Mark Lesson Complete (100%) →'}
                        </button>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-emerald-500 h-full transition-all duration-300" 
                          style={{ width: `${currentLesson.progress}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {currentLesson.progress < 80 ? '⚠️ You must achieve at least 80% progress to unlock the subsequent lesson.' : '🎉 Lesson requirement met! Next lesson is unlocked.'}
                      </p>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <p className="text-emerald-300 font-bold">🎯 Learning Objective:</p>
                      <p className="text-slate-300 leading-relaxed">{currentLesson.objective}</p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="text-blue-300 font-bold">📖 Lesson Content Overview:</p>
                      <p className="text-slate-300 leading-relaxed">{currentLesson.content}</p>
                    </div>

                    {/* Hands-on Activity & Quiz */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <span className="text-[11px] font-bold text-amber-400">🛠️ Hands-on Activity:</span>
                        <p className="text-xs text-slate-200">{currentLesson.activity}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <span className="text-[11px] font-bold text-purple-400">📝 Lesson Quiz / Task:</span>
                        <p className="text-xs text-slate-200">{currentLesson.quiz}</p>
                      </div>
                    </div>

                    {/* Google Classroom Link Attacher */}
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-3 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                          <span>🔗 Google Classroom Lesson Link Attacher</span>
                        </span>
                        {linkSavedMsg && (
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            ✓ Link Saved!
                          </span>
                        )}
                      </div>
                      <form onSubmit={handleSaveClassroomLink} className="flex gap-2">
                        <input
                          type="url"
                          placeholder="https://classroom.google.com/c/..."
                          value={tempLinkInput}
                          onChange={(e) => setTempLinkInput(e.target.value)}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer shrink-0"
                        >
                          Save Link
                        </button>
                      </form>
                      {currentLesson.classroomLink && (
                        <div className="pt-1">
                          <a
                            href={currentLesson.classroomLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1"
                          >
                            🚀 Open Attached Google Classroom Assignment ↗
                          </a>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Right Col: Lessons Directory with Lock State */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 h-fit max-h-[75vh] overflow-y-auto">
                  <h4 className="font-black text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center justify-between sticky top-0 bg-slate-900 z-10">
                    <span>{activeCoc.toUpperCase()} Syllabus</span>
                    <span className="text-xs font-normal text-emerald-400">{currentLessonsList.length} Lessons</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {currentLessonsList.map((les, idx) => {
                      const locked = isLessonLocked(activeCoc, idx);
                      const isActive = activeLessonIndex === idx;
                      return (
                        <button
                          key={les.id}
                          disabled={locked}
                          onClick={() => {
                            if (locked) {
                              alert('🔒 This lesson is locked! You must complete the previous lesson to at least 80% progress.');
                              return;
                            }
                            setActiveLessonIndex(idx);
                            setTempLinkInput(les.classroomLink);
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                            locked
                              ? 'opacity-50 bg-slate-950 border-slate-900 cursor-not-allowed'
                              : isActive
                              ? 'bg-orange-600/20 border-orange-500 text-white shadow-md cursor-pointer'
                              : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-800 text-slate-300 cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                              locked ? 'bg-slate-800 text-slate-500' : isActive ? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-300'
                            }`}>
                              {locked ? '🔒 Locked' : `Lesson ${les.id}`}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400">{les.progress}%</span>
                          </div>
                          <p className="font-bold text-xs mt-0.5 leading-snug">{les.title}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* Official Certificate of Completion Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-3xl rounded-3xl p-8 shadow-2xl border-8 border-amber-400 text-slate-900 relative space-y-6">
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-300">
                Official TESDA Vocational Credential
              </span>
              <h2 className="text-3xl font-black font-serif text-slate-900">Certificate of Completion</h2>
              <p className="text-xs text-slate-500">EPIC Learning / EPICADEMY Vocational Masterclass & Certification Program</p>
            </div>

            <div className="text-center py-6 border-y border-slate-200 space-y-3">
              <p className="text-xs text-slate-600 italic">This is proudly presented to</p>
              <h3 className="text-2xl font-black text-blue-900 underline decoration-amber-400 underline-offset-8">
                {currentUser?.email || 'Valued Student & Scholar'}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed max-w-xl mx-auto pt-2">
                For successfully completing all 4 Certificates of Competency (COC 1, COC 2, COC 3, & COC 4) comprising 50 comprehensive lessons in
              </p>
              <h4 className="font-extrabold text-sm text-slate-900">Computer Systems Servicing (CSS) NC II Masterclass</h4>
            </div>

            <div className="flex items-center justify-between pt-4 text-xs">
              <div>
                <p className="font-bold text-slate-900">Engr. Joven Nel Jed Aviguetero, LPT, TM1</p>
                <p className="text-[10px] text-slate-500">Lead Instructor & Administrator</p>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold text-emerald-600">Verified ID: EPIC-CSS-2026-001</p>
                <p className="text-[10px] text-slate-500">Issued Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => window.print()}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg cursor-pointer"
              >
                Print / Download Certificate 🖨️
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;