# Original User Request

## Initial Request — 2026-08-08T04:11:04Z

Build and integrate a set of premium hackathon features for the ABTalks platform: separate pages for a Recruiter Dashboard (`/recruiter`), an Admin Control Panel (`/admin`), a YouTube Hub (`/hub`), fully simplified student-friendly English copy, and seamless integration of all mock components (Verifier, Toasts, Analytics, Palette, Predictor, Countdown).

Working directory: d:/ABtalks Vicodathon Manan Patel
Integrity mode: development

## Requirements

### R1. Recruiter Dashboard (/recruiter)
- Create a dedicated `/recruiter` page for scout hiring.
- Implement real-time candidate search (by name, college, skills) and filter controls (streak length, track selection).
- Enable a detailed dossier view of candidates using the `RecruiterPreview` component.

### R2. Admin Control Panel (/admin)
- Create a dedicated `/admin` page showing simulated live metrics telemetry (CPU load, active builders, DB latency) fluctuating over time.
- Implement a Daily Challenge form allowing admins to deploy new challenge prompts, triggering success toast notifications.
- Include a community dispatch alert box allowing admins to send custom broadcast notifications.

### R3. YouTube Video & Motivation Hub (/hub)
- Create a dedicated `/hub` page linking to ABTalks YouTube channel: `https://www.youtube.com/@ABTalksOnAI`.
- Embed 4 popular educational/motivational video frames (e.g. using `https://www.youtube.com/embed/...` with valid video IDs).

### R4. Copy Simplification & Polish
- Simplify all copy across the landing page, dashboard, and workspace.
- Ensure the value proposition of ABTalks (daily coding, GitHub commits, LinkedIn verification, direct hiring) is immediately understandable to a student who has never heard of the platform.
- Eliminate all unnecessary engineering jargon from instructions and headlines.

### R5. Interactive Component Integrations
- Integrate `ToastProvider` and `CommandPalette` in `layout.tsx`.
- Place `AnalyticsPanel` (recharts), `Leaderboard` (filtered by college/track), `StreakPredictor`, and `CountdownTimer` inside `/dashboard`.
- Integrate `GitHubVerifier` inside the `/day/12` challenge submission form to play a 2.4-second staged verification loop on commit URL submit before confirmation.

## Acceptance Criteria

### Execution & Integration
- [ ] Application builds successfully via `npm run build` with zero compiler, linting, or type errors.
- [ ] The Command Palette modal triggers on `Ctrl+K` (or `Cmd+K`) and supports navigation to `/recruiter`, `/admin`, `/hub`, `/dashboard`, and `/`.
- [ ] Swapping themes (Dark, Light, Cyber) changes theme styles correctly across all new pages.
- [ ] Submitting a GitHub URL on `/day/12` plays the 4-stage verification progress animation before showing success toasts and updating streak.
