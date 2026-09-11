# 🎓 EPICADEMY — Philippine Cloud-Based Academy & Vocational Hub

> **Isang Komprehensibong Online Learning Platform para sa Web Development at TESDA Vocational Certifications**

Epicademy is a modern, full-stack educational web application built with **React 19, TypeScript, Vite, Tailwind CSS, and Supabase**. It features authentic curricula, interactive syllabi with real video lessons and Google Sheets rubrics, and direct integration with Philippine payment methods (**GCash, GoTyme Bank, and Maya**).

---

## 🌟 Flagship Course Bundles

### 🌐 Bundle #1: The Complete Zero-to-Hero Developer Roadmap (9 Progressive Levels)
- **Level 1**: Modern HTML5 & Web Architecture
- **Level 2**: Advanced Modern CSS3, Flexbox & Responsive Layouts
- **Level 3**: Modern JavaScript (ES6+), DOM Manipulation & Algorithms
- **Level 4**: Asynchronous JavaScript, REST APIs & HTTP Protocol
- **Level 5**: Modern React 19, TypeScript & Component Architecture
- **Level 6**: Backend Development with Node.js, Express & Serverless APIs
- **Level 7**: Relational Database Mastery: PostgreSQL & Supabase Architecture
- **Level 8**: Web Security, Authentication & Production Cloud DevOps
- **Level 9**: Hero Capstone: Production Full-Stack AI SaaS with Autonomous Agents

### 🛠️ ★ Bundle #2: TESDA Computer Systems Servicing (CSS) NC II Masterclass
*Inspired by the official TESDA Training Regulations (280 Nominal Training Hours) led by Engr. Joven Nel Jed Aviguetero, LPT, TM1.*
- **COC 1**: Install & Configure Computer Systems (ICCS) — OHS, 5S, Safe PC Assembly, BIOS/UEFI, Bootable USB, Dual-OS.
- **COC 2**: Set-up Computer Networks (SUCN) — ANSI/TIA-568-C, UTP Crimping (T568A/B), Keystone Jacks, IPv4 Subnetting, Router GUI.
- **COC 3**: Set-up Computer Servers (SUCS) — Windows Server 2022, Active Directory Domain Services (AD DS), DNS, DHCP, OUs & Group Policies (GPO).
- **COC 4**: Maintain & Repair Systems & Networks (MRCSN) — Preventive Maintenance, ATX 24-Pin Multimeter Testing, Software Diagnostics, Disk Cloning & Institutional Assessment Mock CARS.

---

## 🚀 Key Features

- **Live Supabase Backend**: Real user authentication (`profiles`), dynamic course catalog (`tracks`), and module lessons (`modules`, `lessons`).
- **Philippine Payment Options**: Direct payment workflows for **GCash**, **GoTyme Bank**, and **Maya** with instant QR reference generation.
- **Educator Studio & Course Builder**: Certified instructors can create new tracks, manage video lessons, assign Google Sheets rubrics, and publish directly to the live catalog.
- **Community Spaces**: Tenant spaces for community instructors to offer specialized bootcamps and digital products.
- **Interactive Syllabus Viewer**: Embedded YouTube video player, step-by-step hands-on activities, code snippets, and grading rubrics.

---

## 💻 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/epicademy.git
cd epicademy

# 2. Install dependencies
npm install

# 3. Launch local dev server
npm run dev
```

Visit `http://localhost:5173` to explore the academy.

---

## ☁️ 1-Click Cloud Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `epicademy` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your cloud URL will be live in ~60 seconds!

### Deploy to Netlify
1. Connect your GitHub repository at [netlify.com](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **"Deploy Site"**.

---

## 📜 License
Educational Community License — Proudly built for Filipino learners and developers worldwide.
