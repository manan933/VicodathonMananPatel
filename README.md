# 🚀 ABTalks — 60-Day College Coding Challenge Platform Redesign

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Mobile Viewport](https://img.shields.io/badge/Viewport-390px_Mobile_First-FF385C?style=for-the-badge)](https://abtalks.dev)

A modern, mobile-first redesign of the **ABTalks 60-Day Coding Challenge** platform. Built specifically for Indian college students who code late at night after classes, ABTalks drives consistency and recruiter visibility by requiring daily proof-of-work submissions: a verified **GitHub commit** and a public **LinkedIn post**.

---

## 📌 Route Map

```
/
/dashboard
/day/12
```

> **Evaluation Note**: Every route is optimized for mobile screens at **390px width** (mobile-first baseline) while scaling gracefully to desktop viewports.

---

## 🌟 Situation & Product Vision

ABTalks runs a 60-day daily coding challenge for college students across India. Students choose an engineering track, complete a 45-minute daily project, and maintain a public learning streak.

### Problem Statement
Most students use the platform on their mobile phones late at night (11:00 PM – 2:00 AM) after college lectures and labs. While the underlying core loop worked, the platform lacked modern design aesthetics, clear trust factors, edge-case recovery mechanics, and mobile-first focus.

### The Redesign Solution
This redesign transforms ABTalks into a high-trust, visually captivating, dark-themed web application equipped with **Midnight OLED styling**, **1-Click AI Proof-of-Work Assistants**, **Streak Protection Shields**, and **Recruiter Visibility Tracking**.

---

## 📱 Screen Breakdown

### 1. Landing Page (`/`)
*The first experience for a student discovering ABTalks for the first time.*

- **High-Trust Hero**: Clear headline (*"Build 1 Project Daily. Maintain Your Streak. Get Hired by Top Tech."*) and mobile-optimized CTAs.
- **The Daily 45-Min Proof Loop**: 3-step visual breakdown:
  1. **Read Task** (Bite-sized system design & engineering prompts)
  2. **Push GitHub Commit** (Verifiable code proof of work)
  3. **Share LinkedIn Post** (Recruiter visibility & public building)
- **Interactive Track Explorer**: 4 curated 60-day tracks (*Full-Stack Web & Backend Systems, AI & Intelligent Agents, Cloud & DevOps Infrastructure, Mobile App Engineering*) with 60-day milestone roadmap previews.
- **Social Proof & Recruiter Badges**: Real community metrics (12,450+ Active Students across 400+ Tier-1/2/3 colleges, 850,000+ GitHub Commits, 420+ Hiring Partners) and hiring partner logos (*Razorpay, Swiggy, Zerodha, Postman, Cred*).
- **FAQ Accordion**: Interactive answers addressing college exam conflicts, streak rules, and zero-fee structure.

---

### 2. Student Dashboard (`/dashboard`)
*The daily home screen after logging in.*

- **Streak & Momentum Header**: Large flame counter, daily streak heat-map matrix (Days 1 to 60), and streak memory.
- **Progress Tracking**: Challenge day counter (Day 12 of 60), completion percentage bar, college ranking, and **Recruiter Visibility Score (0–100)**.
- **Featured Today's Task**: Direct banner leading to the Day 12 task workspace.
- **Interactive Edge-Case Simulator**: A floating switcher pill allowing reviewers to test real-world edge cases live:
  - 🟢 **12-Day Active Streak**: Standard active user state with full metrics and achievements.
  - 🟡 **Day 1 / First Day (0-Streak)**: Onboarding banner, setup checklist, and welcome guidance.
  - 🔴 **Missed Day / Broken Streak**: *"Streak Protection Activated"* banner with a 24-Hour Catch-Up Quest countdown.
  - ⚪ **Unlinked Profile**: Alert banner prompting GitHub & LinkedIn account linking.

---

### 3. Challenge Day (`/day/12`)
*The complete workspace for a single challenge day.*

- **Task Overview**: *"Build a Real-Time Distributed Rate Limiter API with Redis & Token Bucket"* with estimated completion time (45 mins), difficulty, and XP rewards.
- **Late-Night Mobile Audio Brief**: Built-in speech synthesis player summarizing the task brief for students reading on mobile phones late at night.
- **Starter Template**: Syntax-highlighted code starter with 1-click copy functionality.
- **Proof-of-Work Submission Form**:
  - GitHub Repo / Commit URL input with mock syntax validation.
  - LinkedIn Post URL input + **1-Click AI LinkedIn Post Assistant** that auto-generates custom, ready-to-share posts based on today's commit.
  - Celebration confetti animation upon successful submission.
- **Batchmate Submissions Feed**: Live stream of submissions from fellow college coders across India (*IIT Bombay, VIT Vellore, BITS Pilani, DTU*) with upvotes and GitHub commit links.

---

## 💡 Thoughtful Student UX Innovations

1. **Midnight OLED Dark Theme (`#0A0A0E`)**: True-black aesthetic with eye-comfort contrast, tailored specifically for late-night mobile usage after college.
2. **1-Click AI Proof-of-Work Assistant**: Generates customized LinkedIn post captions from raw git commit messages to eliminate late-night writing fatigue.
3. **Streak Protection Shield & Recovery Quest**: Gracefully handles college exam days or sickness by allowing students to complete a 24-hour catch-up challenge without losing their hard-earned streak.
4. **Recruiter Visibility Score (0–100)**: Quantitative index demonstrating how daily consistency translates into recruiter DM outreach.
5. **Mobile Audio Brief Reader**: Built-in Web Speech API audio player so students can listen to task overviews on the go.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism Utilities
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Mock Data**: Custom structured JSON dataset (`src/data/mockData.json`)

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

## 🧪 Testing Edge Cases

Visit `/dashboard` and use the floating **"Real-World Edge Case Simulator"** pill at the top of the page to switch between:
- **12-Day Active Streak**
- **Day 1 / First Day (0-Streak)**
- **Missed Day / Streak Shield Recovery**
- **Unlinked Profile**

---

## 📁 Repository Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with SEO & 390px viewport settings
│   │   ├── globals.css        # Global OLED dark theme & glassmorphism utilities
│   │   ├── page.tsx           # Screen 1: Landing Page (/)
│   │   ├── dashboard/
│   │   │   └── page.tsx       # Screen 2: Student Dashboard (/dashboard)
│   │   └── day/
│   │       ├── 12/
│   │       │   └── page.tsx   # Screen 3: Challenge Day (/day/12)
│   │       └── [id]/
│   │           └── page.tsx   # Dynamic day route handler
│   ├── components/
│   │   ├── Navbar.tsx         # Header navigation with streak flame indicator
│   │   ├── Footer.tsx         # Footer with route shortcuts
│   │   └── EdgeStateToggle.tsx# Interactive edge case simulator control
│   └── data/
│       └── mockData.json      # Structured mock database
├── PROMPTS.md                 # Prompt and execution logs
├── tailwind.config.js         # Custom brand colors & OLED palette
└── package.json
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Built for the ABTalks Vicodathon.
