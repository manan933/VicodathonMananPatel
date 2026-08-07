# ABTalks Redesign — Prompts & Project Tracking Log

## Executive Summary

This document tracks every user prompt, architectural decision, and execution log for the **ABTalks 60-Day Coding Challenge Platform Redesign** submitted as part of the Vicodathon.

- **Target Audience**: Indian college students building daily proof-of-work (GitHub commits + LinkedIn posts) late at night on mobile devices (390px baseline).
- **Core Goal**: Reimagine ABTalks into a world-class, trust-building, highly motivating, mobile-first web app that drives consistency and recruiter visibility.
- **Stack**: Next.js 14, React 18, Tailwind CSS, Framer Motion, Lucide Icons, canvas-confetti.

---

## Prompt Log (Chronological)

### Prompt 1 — Core Redesign Brief
> **Timestamp**: Session start  
> **Summary**: Full redesign of ABTalks platform from scratch.

```
Redesign ABTalks
Reimagine the platform you're standing on.

The Situation
ABTalks runs a 60-day coding challenge for Indian college students.

Students pick a track, build something every day, and maintain a public learning streak by submitting:
  - A GitHub commit
  - A LinkedIn post

This daily proof of work helps them build consistency and become visible to recruiters.

Most students use the platform on their phones, late at night after college.

The product works.
It has never been designed.

Ship at Minimum
Design and build the following three screens.

1. Landing Page (/)
   The first experience for a student who has never heard of ABTalks.
   Show enough trust, clarity, and motivation that they're willing to commit to a 60-day challenge.

2. Student Dashboard (/dashboard)
   The home screen after logging in. Include essentials such as:
   - Current streak
   - Today's task
   - Progress through the challenge
   - Overall completion
   - Student standing or achievements

3. Challenge Day (/day/12)
   The complete experience of a single challenge day. A student should be able to:
   - Read the day's task
   - Understand what needs to be built
   - Submit proof of work (GitHub repository/commit + LinkedIn post + Submission)

Route Map:
/
/dashboard
/day/12

Screens are captured at 390px width (mobile viewport).

What We're Looking For:
- Mobile-first (390px), desktop as secondary
- Understandable to a student who's never heard of ABTalks
- Handle real-world edge cases:
  - First day with no streak
  - A missed day
  - An empty profile
- Introduce at least one thoughtful idea that improves the student experience
```

**Actions Taken**:
- Initialized Next.js 14 project with App Router
- Configured Tailwind CSS with custom OLED dark theme tokens
- Built `mockData.json` with full schema (user, tracks, faqs, peerSubmissions, etc.)
- Built Landing Page (`/`) — Hero, How It Works, Track Explorer, Feature highlights, FAQ accordion, sticky mobile CTA
- Built Dashboard (`/dashboard`) — Streak counter, 60-day heatmap matrix, progress card, recruiter score, today's task banner, achievements grid, interactive edge-case state switcher
- Built Challenge Day (`/day/12`) — Task overview, audio brief TTS, starter code block with copy, proof-of-work form, 1-click AI LinkedIn post helper, confetti on submit, peer submissions feed
- Implemented `EdgeStateToggle` component for 4 live UI states (standard, firstDay, missedDay, emptyProfile)

---

### Prompt 2 — Git Ignore Cleanup
> **Timestamp**: 2026-08-07 20:40 IST

```
update gitignore properly so unwanted heavy files dont go up in the cloud of github
```

**Actions Taken**:
- Rewrote `.gitignore` with comprehensive rules covering: `node_modules/`, `.next/`, `out/`, `build/`, `dist/`, `*.log`, `.env*`, `.DS_Store`, `Thumbs.db`, OS temp files, editor dirs (`.vscode/`, `.idea/`), coverage reports, and Storybook build output.

---

### Prompt 3 — Remove Large File from Git History
> **Timestamp**: 2026-08-07 20:46 IST

```
The push operation includes a file which exceeds GitHub's file size restriction of 100MB.
Please remove the file from history and try again.
```

**Actions Taken**:
- Identified the offending large binary (a `node_modules` native binary) tracked in git history.
- Ran `git filter-branch --force --index-filter` to purge the file from all commits.
- Force-cleaned refs and GC'd loose objects with `git gc --prune=now --aggressive`.
- Confirmed history is clean — `git push` can now proceed without `--force` errors on size limits.
- Note: A `git push --force` or `git push --force-with-lease` is required once for the remote to accept the rewritten history.

---

### Prompt 4 — Detailed README
> **Timestamp**: 2026-08-07 20:49 IST

```
give me highly detailed readme file
```

**Actions Taken**:
- Created comprehensive `README.md` covering: project overview, tech stack, features, route map, setup instructions, environment variables, deployment guide, edge-case matrix, design system reference, and contribution guidelines.

---

### Prompt 5 — README as Plain Text
> **Timestamp**: 2026-08-07 20:51 IST

```
give me the readme in text also.
```

**Actions Taken**:
- Printed the full `README.md` as plain text in the chat for easy copy-paste into docs, submission forms, or emails.

---

### Prompt 6 — Bug Fixes & Improvements
> **Timestamp**: 2026-08-07 20:53 IST

```
fix any backend errors, bug or any issues or any improvements you'll like to make.
```

**Actions Taken**:

| # | File | Issue | Fix |
|---|------|-------|-----|
| 1 | `globals.css` | `.no-scrollbar` class used in track tabs but never defined | Added cross-browser CSS (IE, Firefox, Chrome) |
| 2 | `page.tsx` | Typo `"biter-sized"` | Fixed to `"bite-sized"` |
| 3 | `page.tsx` | 5 unused imports bloating JS bundle | Removed `CheckCircle2`, `TrendingUp`, `GraduationCap` etc. |
| 4 | `dashboard/page.tsx` | 4 unused imports | Removed `Moon`, `Share2`, `ChevronRight`, `ExternalLink` |
| 5 | `dashboard/page.tsx` | `streakHistory.find()` without optional chaining — crashes silently for empty-array edge states | Added `?.` safe chaining + correct `"Not Started Yet"` label for first-day state |
| 6 | `day/12/page.tsx` | 2 unused imports | Removed `MessageSquare`, `AlertCircle` |
| 7 | `day/12/page.tsx` | `navigator.clipboard.writeText()` had no error handler — silent fail on HTTP/denied permission | Made `async/await` with `execCommand('copy')` fallback |
| 8 | `day/12/page.tsx` | `<Sparkles>` icon had `animate-spin` — stars rotating is visually wrong | Changed to `animate-pulse` |
| 9 | `Navbar.tsx` | Night-mode toggle was dead state — icon swapped but nothing happened | Wired to `document.documentElement.classList` toggle via `useEffect` |
| 10 | `globals.css` | Missing `.night-mode` CSS | Added subtle `rgba(255,170,50,0.04)` warm amber overlay for blue-light reduction |

- **Build result**: `npm run build` exits code 0, zero errors, zero warnings.

---

### Prompt 7 — Update PROMPTS.md
> **Timestamp**: 2026-08-07 20:54 IST

```
update prompts.md with the newer prompts
```

**Actions Taken**:
- Extracted all user prompts from conversation transcript.
- Rewrote this file with the complete, chronological prompt history and corresponding action logs.

---

## Required Routes & Route Map

```
/
/dashboard
/day/12
```

---

## Edge Case Matrix & Innovations

| State | Trigger | UI Response |
|-------|---------|-------------|
| **First Day** (`firstDay`) | 0-day streak | Welcome banner, warm onboarding, "Start Day 1 Challenge" CTA |
| **Missed Day** (`missedDay`) | Broken streak | "Streak Shield" banner with countdown timer, Catch-Up Quest |
| **Empty Profile** (`emptyProfile`) | No GitHub/LinkedIn linked | Alert with quick-connect buttons for both platforms |
| **Standard** | Active student | Full dashboard with streak, progress, heatmap, achievements |

**Thoughtful Innovations**:
- 🌙 **Midnight OLED Theme** — True-black `#0A0A0E` background with toggleable warm amber eye-care overlay
- ✨ **1-Click AI LinkedIn Post Assistant** — Generates recruiter-facing post copy from git commit context
- 📊 **Recruiter Index Score** — Gamified visibility metric that rises with streak consistency
- 🎙️ **Late-Night Audio Brief** — Web Speech API TTS task summary for mobile coders in bed
- 🎉 **Confetti on Submission** — `canvas-confetti` celebration when daily proof of work is locked in
- 🔥 **60-Day Heatmap Matrix** — Visual grid of all challenge days with completion state

---

## Execution Audit Checklist

- [x] Workspace Initialization & Environment Audit
- [x] Creation & first version of `PROMPTS.md`
- [x] Next.js 14 + React 18 + Tailwind CSS + Lucide Icons Setup
- [x] Mock Data Schema Creation (`src/data/mockData.json`)
- [x] Screen 1: Landing Page (`/`)
- [x] Screen 2: Dashboard (`/dashboard`) with Interactive Edge-Case State Switcher
- [x] Screen 3: Challenge Day (`/day/12`) with Proof-of-Work workflow & AI LinkedIn Assistant
- [x] Mobile 390px Viewport Audit & Responsive Polish
- [x] Verification & Production Build Validation (`npm run build` passed cleanly)
- [x] Local Dev Server Active (`http://localhost:3000`)
- [x] `.gitignore` comprehensive update
- [x] Large file (>100MB) purged from git history
- [x] `README.md` — highly detailed documentation created
- [x] Bug audit pass — 10 bugs/improvements fixed, clean build verified
- [x] `PROMPTS.md` updated with full session prompt history
