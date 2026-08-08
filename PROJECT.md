# PROJECT: ABTalks Premium Hackathon Features Build

## Architecture
Next.js 14 App Router project (`src/app`) with TypeScript, Tailwind CSS, Lucide React icons, Recharts, and custom UI components (`src/components`).

State management uses React context (`ToastProvider`), local component state, and JSON dataset (`src/data/mockData.json`).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Command Palette Navigation | Add `/recruiter`, `/admin`, `/hub` commands to `CommandPalette.tsx` | M1 | R5, AC |
| 2 | Global Theme Support | Ensure Dark, Light, Cyber theme styles apply cleanly across layout & pages | M1 | AC |
| 3 | Candidate Search | Real-time candidate search by name, college, and skills on `/recruiter` | M2 | R1 |
| 4 | Candidate Filters & Dossier | Filter candidates by streak length & track selection; view via `RecruiterPreview` | M2 | R1 |
| 5 | Live Metrics Telemetry | Simulated live telemetry (CPU load, active builders, DB latency) on `/admin` | M3 | R2 |
| 6 | Daily Challenge Scheduler | Form for admins to deploy new challenge prompts with success toast triggers | M3 | R2 |
| 7 | Community Dispatch Alert | Broadcast notification alert box for custom admin announcements | M3 | R2 |
| 8 | YouTube Channel Link | Prominent link to `https://www.youtube.com/@ABTalksOnAI` on `/hub` | M4 | R3 |
| 9 | Video Grid Embedding | Embed 4 educational/motivational YouTube videos with responsive frames | M4 | R3 |
| 10 | Dashboard Component Integration | Embed `AnalyticsPanel`, `Leaderboard`, `StreakPredictor`, `CountdownTimer` in `/dashboard` | M5 | R5 |
| 11 | GitHub Verifier Integration | Integrate `GitHubVerifier` into `/day/12` submission form | M6 | R5, AC |
| 12 | 4-Stage Verification Loop | Play 2.4s 4-stage staged verification animation on commit submit before toast/streak update | M6 | R5, AC |
| 13 | Copy Simplification | Translate jargon across landing, dashboard, and workspace to student-friendly English | M7 | R4 |
| 14 | Value Proposition Clarity | Explicitly highlight 4-step ABTalks workflow (Coding -> GitHub -> LinkedIn -> Hiring) | M7 | R4 |

## Code Layout
```
src/
├── app/
├── layout.tsx              (Global layout: ToastProvider, CommandPalette, AmbientBackground)
│   ├── globals.css             (Theme CSS variables)
│   ├── page.tsx                (Landing page - simplified copy, workflow overview)
│   ├── dashboard/page.tsx      (Dashboard: AnalyticsPanel, Leaderboard, StreakPredictor, CountdownTimer)
│   ├── recruiter/page.tsx      (Recruiter dashboard: search by name/college/skills, filters, RecruiterPreview)
│   ├── admin/page.tsx          (Admin control panel: live telemetry, challenge form, broadcast box)
│   ├── hub/page.tsx            (YouTube video hub: 4 video embeds, channel CTA)
│   ├── day/12/page.tsx         (Day 12 workspace: GitHubVerifier staged loop integration)
│   └── day/[id]/page.tsx       (Dynamic day workspace router)
├── components/
│   ├── ToastProvider.tsx       (Toast notifications context & provider)
│   ├── CommandPalette.tsx      (Ctrl+K modal with full route navigation)
│   ├── RecruiterPreview.tsx    (Candidate dossier component)
│   ├── AnalyticsPanel.tsx      (Recharts analytics charts)
│   ├── Leaderboard.tsx         (Campus leaderboard with track filters)
│   ├── StreakPredictor.tsx     (Completion forecast component)
│   ├── CountdownTimer.tsx      (Challenge countdown component)
│   ├── GitHubVerifier.tsx      (2.4s 4-stage verification progress component)
│   ├── Navbar.tsx              (Header navigation bar)
│   └── Footer.tsx              (Footer component)
└── data/
    └── mockData.json           (Mock candidates, telemetry data, challenges, FAQs)
```

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: Global Layout & Command Palette | Update `CommandPalette.tsx` for `/recruiter`, `/admin`, `/hub`; theme support check | None | PLANNED |
| 2 | M2: Recruiter Dashboard | Update `src/app/recruiter/page.tsx` search for skills, filter controls, candidate dossier | None | PLANNED |
| 3 | M3: Admin Control Panel | Polish `src/app/admin/page.tsx` telemetry, challenge form, community broadcast | None | PLANNED |
| 4 | M4: YouTube Hub | Create `src/app/hub/page.tsx` with 4 video embeds & channel CTA | None | PLANNED |
| 5 | M5: Dashboard Integrations | Update `src/app/dashboard/page.tsx` with `AnalyticsPanel`, `Leaderboard`, `StreakPredictor`, `CountdownTimer` | None | PLANNED |
| 6 | M6: GitHub Verifier Loop | Update `src/app/day/12/page.tsx` to integrate `GitHubVerifier` 2.4s staged verification loop | None | PLANNED |
| 7 | M7: Copy Simplification | Apply student-friendly copy across landing page, dashboard, challenge workspace, and mockData | M1-M6 | PLANNED |

## Interface Contracts
- `CommandPalette`: Triggers on `Ctrl+K` or `Cmd+K`. Supports navigation to `/recruiter`, `/admin`, `/hub`, `/dashboard`, `/`.
- `ToastProvider`: `useToast()` hook exposing `showToast(title, description, type)`.
- `RecruiterPreview`: Props `{ user: UserProfile }` displaying detailed dossier, skill badges, and consistency score.
- `GitHubVerifier`: Component / function managing 4-stage progress animation (`Connecting`, `Found commit`, `3 files changed`, `Commit Verified`) taking 2.4s total.
- `Leaderboard`: Component filtering candidates by college or track tabs (`All`, `Web`, `AI`, `DevOps`, `Mobile`).
- `StreakPredictor`: Props `{ currentStreak, completedDays, totalDays, currentDay }`.
