# 🚀 ABTalks — 60-Day College Coding Challenge Platform Redesign

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Theme Default](https://img.shields.io/badge/Theme-Neo_Brutalist_Default-FDE047?style=for-the-badge)](https://abtalks.in)
[![Official Channel](https://img.shields.io/badge/YouTube-ABTalks_On_AI-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@ABTalksOnAI)

A modern, high-contrast, mobile-first redesign of the **ABTalks 60-Day Coding Challenge** platform, hosted by **Anil Bajpai** ([abtalks.in](https://abtalks.in)) and the **ABTalks YouTube Channel** ([@ABTalksOnAI](https://www.youtube.com/@ABTalksOnAI)). 

Built specifically for Indian college students who code late at night after lectures and labs, ABTalks drives daily consistency and direct recruiter hiring by requiring verified daily proof-of-work submissions: a verified **GitHub commit** and an automated **LinkedIn post**.

---

## 📌 Route Map & Navigation

```
/           — High-Trust Landing Page & Track Explorer
/dashboard  — Student Progress Board, Consistency Matrix & Edge-State Simulator
/day/12     — Live Workspace, Audio Brief & Staged 2.4s GitHub Commit Verifier
/recruiter  — Recruiter Scout Panel & Live Candidate Dossier Inspector
/admin      — System Telemetry Panel, Daily Challenge Scheduler & Broadcast Alert Dispatcher
/hub        — Educational YouTube Motivation Hub (6 Embeds from @ABTalksOnAI)
```

> **Mobile First Baseline**: Every page and modal is built and audited for **390px mobile viewports** while scaling seamlessly to tablet and desktop screens.

---

## 🌟 Situation & Product Vision

ABTalks runs a 60-day daily coding challenge for college students across India. Students select an engineering track, complete a 45-minute daily project, and maintain a public building streak.

### Problem Statement
Most students use the platform on mobile phones late at night (11:00 PM – 2:00 AM). The original platform lacked modern design aesthetics, clear recruiter visibility metrics, edge-case recovery mechanics, mobile drawer navigation, and high-impact visual identity.

### The Redesign Solution
This redesign transforms ABTalks into a high-trust, visually captivating web application equipped with **Neo-Brutalist Pop Styling**, **1-Click AI Proof-of-Work Assistants**, **Staged GitHub Verification Loops**, **Recruiter Candidate Dossiers**, **System Telemetry Monitoring**, and **Bilingual Hinglish Support**.

---

## 🚀 Key Features & Screen Breakdown

### 1. Landing Page (`/`)
- **High-Trust Hero**: Headline (*"Code It. Ship It. Prove It. Land Your Dream Role."* / *"Code Karo. Push Karo. Proof Dikhao. Apni Dream Job Paao."*).
- **The Daily 45-Min Proof Loop**: 3-step visual breakdown (Read Task -> Push GitHub Commit -> Share LinkedIn Post).
- **Interactive Track Explorer**: 4 curated 60-day engineering tracks (*Full-Stack Web & Backend Systems, AI & Intelligent Agents, DevOps & Cloud Native Systems, Mobile App Engineering*) with milestone previews.
- **Social Proof & Metrics**: Real community stats (12,450+ Active Students across 400+ colleges including **GIET University**, 850,000+ GitHub Commits, 420+ Hiring Partners) and animated hiring partner logo ticker (*Razorpay, Swiggy, Zerodha, Postman, Cred*).
- **FAQ Accordion**: Answers addressing college exam conflicts, streak rules, and zero-fee structure.

---

### 2. Student Dashboard (`/dashboard`)
- **Streak Header & Profile**: User profile header (**Manan Patel** — 3rd Year B.Tech CSE at **GIET University**), flame counter, and quick recruiter visibility index pill.
- **Consistency Heatmap Matrix**: 60-day interactive matrix with smooth Android touch-swipe support (`overflow-x-auto no-scrollbar touch-pan-x`).
- **Progress Tracking Cards**: Current streak (12 Days), Longest streak, Days completed, and **Recruiter Visibility Score (88/100)**.
- **Interactive Edge-State Simulator**: Floating pill switcher allowing reviewers to test live edge states:
  - 🟢 **12-Day Active Streak**: Active user state with full metrics.
  - 🟡 **Day 1 / First Day (0-Streak)**: Onboarding checklist and welcome guidance.
  - 🔴 **Missed Day / Broken Streak**: *"Streak Shield Activated"* banner with 24-hour catch-up quest countdown.
  - ⚪ **Unlinked Profile**: Warning banner prompting GitHub & LinkedIn account linking.
- **Analytics & Leaderboard**: Recharts graphs showing 6-week consistency trends, XP distribution, and national college leaderboard filtered by track.

---

### 3. Challenge Day Workspace (`/day/12`)
- **Task Overview**: *"Build a Real-Time Distributed Rate Limiter API with Redis & Token Bucket"* (45 mins duration, medium difficulty, +100 XP reward).
- **Late-Night Mobile Audio Brief**: Built-in speech synthesis player summarizing the task overview for students listening late at night.
- **Starter Template**: Syntax-highlighted code starter with 1-click clipboard copy.
- **Staged 2.4-Second GitHub Verifier (`GitHubVerifier.tsx`)**: Plays a 4-step live verification animation loop (*Resolving commit -> Fetching diff -> Validating tests -> Linking streak*) upon submitting a GitHub URL.
- **1-Click AI LinkedIn Post Assistant**: Auto-generates customized, ready-to-share LinkedIn posts from commit messages.
- **Celebration Confetti**: Triggers celebratory canvas confetti upon successful submission.
- **Peer Submissions Stream**: Real-time feed of submissions from college coders across India with upvotes.

---

### 4. Recruiter Scout Dashboard (`/recruiter`)
- **Candidate Search & Filter Panel**: Real-time filtering by candidate name, university (**GIET University**, IIT Bombay, IIIT Hyderabad, BITS Pilani, NIT Trichy), skills, track, and active streak length slider (`Streak >= N`).
- **Interactive Candidate Dossier (`RecruiterPreview.tsx`)**: High-contrast dark obsidian dossier card (`#1E2235`) displaying candidate avatar, college, track, streak stats, recruiter score, top achievements, and tech stack pills.
- **Mobile Candidate Dossier Popup Modal**: Opens candidate dossier in a clean mobile popup modal (`isMobileModalOpen`) on touchscreen tap, avoiding horizontal page overflow on small screens.

---

### 5. System Administration Panel (`/admin`)
- **Live System Telemetry Row**: Real-time simulated metrics with live fluctuations:
  - 👥 **Online Builders** (540+ active builders)
  - 🖥️ **CPU Load** (interactive load meter with alert colors)
  - ⚡ **Redis DB Latency** (milliseconds response time)
- **Schedule Tomorrow's Challenge Form**: Deploy new daily coding challenges across engineering tracks, setting duration and difficulty while dispatching immediate system toast notifications.
- **Community Broadcast Dispatcher**: Send instant broadcast alerts to online builders across India.

---

### 6. YouTube Motivation & Learning Hub (`/hub`)
- Direct integration with **ABTalks YouTube Channel** ([@ABTalksOnAI](https://www.youtube.com/@ABTalksOnAI)).
- Embeds **6 YouTube Videos** in 16:9 responsive aspect-ratio containers (`aspect-video w-full h-full`):
  1. `qs4YkGZKAuM` — *The Biggest AI Trends of 2026 | Claude AI, AI Agents & Physical AI*
  2. `ru5mM1ihdRE` — *Claude AI Coding Challenge — Masterclass & Full Roadmap*
  3. `bt_qiMY3zvs` — *Best AI Tools for Productivity in 2026 | ChatGPT vs Claude vs NotebookLM vs Gamma*
  4. `CoOffCrI_dU` — *Build & Deploy AI Agents from Scratch — Complete Engineering Strategy*
  5. `D84DbQVZjtY` — *90% of AI Projects FAIL! | ChatGPT, Claude, LLMs & AI Startups*
  6. `Tr4GdaRenCA` — *How Top Tech Companies Hire SDEs in the AI Era*
- Filter by search query or category tabs (*AI & ML*, *Career & Streak*, *Coding Projects*).

---

## 🎨 Design System & Theme Engine

ABTalks includes a **3-Way Dynamic Theme Engine**:

1. **⚡ Neo-Brutalist Theme (`brutal` - DEFAULT)**:
   - Full-screen 3-color linear gradient background: `linear-gradient(to right, #1e90ff, #f9c942, #ff1e56)`.
   - 3px solid black borders, flat 5px offset box shadows (`box-shadow: 5px 5px 0px #000`).
   - Electric Yellow footer (`#FFDE4D`) with 3px top border.
   - Solid high-contrast black typography (`#000000`) and dark obsidian candidate cards (`#1E2235`).
2. **🌙 Pitch Black OLED Theme (`dark`)**: True-black aesthetic (`#000000`) for late-night mobile coding.
3. **☀️ Pure White Day Theme (`light`)**: Clean light mode for daytime browsing.

---

## 🇮🇳 Bilingual Language Provider (English / Hinglish)

- Integrated `LanguageProvider` supporting instant switching between:
  - 🇬🇧 **English**: *"Code It. Ship It. Prove It. Land Your Dream Role."*
  - 🇮🇳 **Hinglish**: *"Code Karo. Push Karo. Proof Dikhao. Apni Dream Job Paao."*
- **Navbar Rule**: Navigation buttons preserve standard, concise English labels (*Explore*, *Dashboard*, *Day 12*, *Videos*, *Recruiter*, *Admin*) across both language modes for consistency.

---

## 📱 Mobile-First Responsive Architecture

- **Mobile Navigation Drawer (`Navbar.tsx`)**: Replaces horizontal link bar on mobile viewports (`md:hidden`) with a clean slide-down hamburger drawer button (`≡` / `✕`) listing all 6 routes vertically.
- **Touch Heatmap Scrolling**: `overflow-x-auto no-scrollbar touch-pan-x` allows smooth horizontal finger swiping for consistency matrices.
- **390px Baseline**: Tested and verified across iPhone/Android viewports for zero text clipping or horizontal page breaks.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Neo-Brutalist CSS System
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Animations & FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Mock Database**: Structured JSON dataset (`src/data/mockData.json`)

---

## 💻 Local Development & Setup

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/manan933/ABtalks-Vicodathon-Manan-Patel.git
   cd "ABtalks Vicodathon Manan Patel"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🧪 Testing Interactive Features & Keyboard Shortcuts

- **Command Palette Modal**: Press `Ctrl + K` (or `Cmd + K`) anywhere to open the global command palette and navigate routes or switch themes.
- **Edge-State Switcher**: On `/dashboard`, click the top floating pill to switch between *12-Day Streak*, *Day 1 (0-Streak)*, *Missed Day (Shield Recovery)*, and *Unlinked Profile*.
- **Staged GitHub Verifier**: On `/day/12`, enter any GitHub commit URL (e.g. `https://github.com/manan-dev/abtalks-day12-redis-limiter`) and submit to watch the live 2.4-second verification loop.

---

## 📁 Repository Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with anti-FOUC Neo-Brutalist theme script
│   │   ├── globals.css        # Full-screen gradient, Neo-Brutalist CSS tokens & overrides
│   │   ├── page.tsx           # Route 1: Landing Page (/)
│   │   ├── dashboard/
│   │   │   └── page.tsx       # Route 2: Student Dashboard (/dashboard)
│   │   ├── day/
│   │   │   ├── 12/
│   │   │   │   └── page.tsx   # Route 3: Day 12 Workspace (/day/12)
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Dynamic day route handler
│   │   ├── recruiter/
│   │   │   └── page.tsx       # Route 4: Recruiter Scout Dashboard (/recruiter)
│   │   ├── admin/
│   │   │   └── page.tsx       # Route 5: System Admin Control Panel (/admin)
│   │   └── hub/
│   │       └── page.tsx       # Route 6: YouTube Motivation Hub (/hub)
│   ├── components/
│   │   ├── Navbar.tsx         # Mobile drawer menu & theme switcher header
│   │   ├── Footer.tsx         # Electric yellow Neo-Brutalist footer
│   │   ├── LanguageProvider.tsx# English / Hinglish translation context
│   │   ├── RecruiterPreview.tsx# Candidate Dossier card component
│   │   ├── GitHubVerifier.tsx # 4-stage live GitHub verification animation loop
│   │   ├── AnalyticsPanel.tsx # Recharts consistency trend charts
│   │   ├── Leaderboard.tsx    # National college leaderboard
│   │   ├── StreakPredictor.tsx# Streak completion probability calculator
│   │   ├── CountdownTimer.tsx # Next challenge countdown badge
│   │   ├── CommandPalette.tsx # Ctrl+K command menu modal
│   │   ├── ToastProvider.tsx  # Dual toast notification system
│   │   └── EdgeStateToggle.tsx# Interactive edge case simulator pill
│   └── data/
│       └── mockData.json      # Structured mock database (GIET University profile)
├── PROMPTS.md                 # Full chronological prompt and execution audit log (Prompts 1-44)
├── tailwind.config.js         # Neo-Brutalist colors & OLED design system
└── package.json
```

---

## 📄 License & Credits

Built for the **ABTalks Vicodathon** redesign challenge. Powered by **Anil Bajpai** ([abtalks.in](https://abtalks.in)) and **ABTalks On AI** ([@ABTalksOnAI](https://www.youtube.com/@ABTalksOnAI)). Released under the [MIT License](LICENSE).
