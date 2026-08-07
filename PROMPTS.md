# ABTalks Redesign - Prompts & Project Tracking Log

## Executive Summary
This document tracks the requirements, prompts, architectural decisions, and progress logs for the **ABTalks 60-Day Coding Challenge Platform Redesign**.

- **Target Audience**: Indian college students building daily proof-of-work (GitHub commits + LinkedIn posts) late at night on mobile devices (390px baseline).
- **Core Goal**: Reimagine ABTalks into a world-class, trust-building, highly motivating, mobile-first web app that drives consistency and recruiter visibility.

---

## Slash Commands & Trigger History
- `/[USER_REQUEST]`: Comprehensive Redesign of ABTalks (Landing Page `/`, Student Dashboard `/dashboard`, Challenge Day `/day/12`).
- `/goal`: Active overnight/autonomous goal execution flag — thorough verification, comprehensive edge-case handling, zero placeholder policy, end-to-end functionality.
- `/teamwork-preview`: Workflows and agent execution structure logged.

---

## Required Routes & Route Map
- `/` - Landing Page (Trust, clarity, 60-day challenge overview, track explorer, social proof)
- `/dashboard` - Student Dashboard (Streak, today's task, progress, achievements, edge-case state toggles)
- `/day/12` - Challenge Day 12 (Task details, proof-of-work submission: GitHub + LinkedIn, AI post helper, submission status)

---

## Edge Case Matrix & Innovations
1. **0-Day Streak / First Day**: Warm onboarding, checklist for connecting GitHub/LinkedIn.
2. **Missed Day / Broken Streak**: "Streak Shield / Catch-Up Quest" to recover streak without demotivation.
3. **Empty Profile**: Prompts for setup with quick fill defaults.
4. **Thoughtful Features**:
   - **Midnight OLED Theme**: Tailored for late-night mobile usage after college hours.
   - **1-Click Proof-of-Work Assistant**: Generates smart LinkedIn post captions from git commits.
   - **Recruiter Spotlight Index**: Visual score of recruiter visibility gained through streak consistency.

---

## Execution Log & Audit Checklist
- [x] Workspace Initialization & Environment Audit
- [x] Creation of `PROMPTS.md`
- [ ] Next.js + React + Tailwind CSS Setup
- [ ] Mock Data Schema Creation (`src/data/mockData.json`)
- [ ] Screen 1: Landing Page (`/`)
- [ ] Screen 2: Dashboard (`/dashboard`) with Edge-case state switcher
- [ ] Screen 3: Challenge Day (`/day/12`) with Proof-of-Work workflow
- [ ] Mobile 390px Viewport Audit & Responsive Polish
- [ ] Verification & Build Validation
