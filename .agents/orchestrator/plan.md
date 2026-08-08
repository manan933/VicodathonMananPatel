# Orchestration Plan — ABTalks Premium Hackathon Features Build

## Objective
Deliver all requirements specified in `ORIGINAL_REQUEST.md`:
1. `/recruiter` Dashboard (search, filters, candidate preview)
2. `/admin` Control Panel (live metrics telemetry, daily challenge form, community dispatch alert)
3. `/hub` YouTube Video & Motivation Hub (embedded video frames, link to ABTalks YouTube)
4. Copy Simplification & Polish across landing, dashboard, and workspace
5. Interactive Component Integrations (`ToastProvider` & `CommandPalette` in `layout.tsx`, `AnalyticsPanel`/`Leaderboard`/`StreakPredictor`/`CountdownTimer` in `/dashboard`, `GitHubVerifier` in `/day/12`)
6. Ensure `npm run build` succeeds with 0 errors and all acceptance criteria pass.

## Phased Approach

### Phase 1: Codebase Survey & Feature Inventory Mapping
- Dispatch 3 parallel Explorers to investigate current codebase structure, existing routes, existing components (e.g. `RecruiterPreview`, `ToastProvider`, `CommandPalette`, `AnalyticsPanel`, `Leaderboard`, `StreakPredictor`, `CountdownTimer`, `GitHubVerifier`), styling/theme mechanisms, and copy text across pages.
- Aggregate findings into `PROJECT.md` at root.

### Phase 2: Milestone Decomposition & Scope Definition
- Decompose project into modular, independent milestones:
  - Milestone 1: Core Layout & Interactive Global Components (`layout.tsx`, `ToastProvider`, `CommandPalette`, Theme support)
  - Milestone 2: Recruiter Dashboard (`/recruiter` page, search, filters, `RecruiterPreview`)
  - Milestone 3: Admin Control Panel (`/admin` page, live metrics, Daily Challenge form, community dispatch alert)
  - Milestone 4: YouTube & Motivation Hub (`/hub` page, embedded videos, channel link)
  - Milestone 5: Dashboard Analytics & Predictor Integration (`/dashboard` page, `AnalyticsPanel`, `Leaderboard`, `StreakPredictor`, `CountdownTimer`)
  - Milestone 6: GitHub Verifier Integration & Day 12 Verification (`/day/12` route, 4-stage verification loop animation, streak update)
  - Milestone 7: Platform Copy Simplification & Student Polish (landing page, dashboard, workspace copy simplification)
- Define strict interface contracts, write boundaries, and test criteria in `PROJECT.md`.

### Phase 3: Milestone Execution & Verification
- For each milestone:
  1. Create working directory under `.agents/`
  2. Dispatch Explorer -> Worker -> Reviewers (2) -> Challengers (2) -> Forensic Auditor (`teamwork_preview_auditor`)
  3. Gate verification: Require build & tests pass, 2x APPROVE, Clean Forensic Audit.
  4. Track progress in `GATE_STATUS.md` and `progress.md`.

### Phase 4: Final Integration, E2E Verification & Build Audit
- Run full build audit (`npm run build`) via worker/auditor.
- Confirm zero compiler, linting, or type errors.
- Report completion to user with full summary.
