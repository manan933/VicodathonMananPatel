# Milestone 2 (M2): Recruiter Dashboard Search & Filters Analysis Report

## Observation

Direct codebase findings from inspecting `ORIGINAL_REQUEST.md`, `PROJECT.md`, `src/app/recruiter/page.tsx`, and `src/components/RecruiterPreview.tsx`:

1. **Current Search Implementation (`src/app/recruiter/page.tsx`, lines 121-125)**:
   ```typescript
   const matchesSearch =
     candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     candidate.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
     candidate.track.toLowerCase().includes(searchQuery.toLowerCase());
   ```
   - **Observation**: The current search filter only matches `candidate.name`, `candidate.college`, and `candidate.track`. Searching for specific candidate skill keywords (such as `Python`, `React`, `Docker`, `PostgreSQL`, `FastAPI`, `Next.js`, `Redis`, `PyTorch`) fails unless the skill string happens to be part of the track title.

2. **Candidate Profile Data Structure (`src/components/RecruiterPreview.tsx`, lines 31-44 & `src/app/recruiter/page.tsx`, lines 9-112)**:
   ```typescript
   export interface UserProfile {
     name: string;
     handle: string;
     college: string;
     year: string;
     track: string;
     currentStreak: number;
     longestStreak: number;
     completedDays: number;
     totalDays: number;
     recruiterScore?: number;
     avatar: string;
     achievements?: Achievement[];
   }
   ```
   - **Observation**: `UserProfile` interface and `mockCandidates` objects do not currently contain an explicit `skills?: string[]` array property. Tech stack pills in `RecruiterPreview.tsx` (lines 53-77) are derived dynamically via `getTechStackPills(trackName)`.

3. **Track Selection Filters (`src/app/recruiter/page.tsx`, lines 175-189)**:
   ```typescript
   {['All', 'Web', 'AI', 'DevOps'].map((track) => (...))}
   ```
   - **Observation**: The track buttons currently include `'All'`, `'Web'`, `'AI'`, and `'DevOps'`. `'Mobile'` track (present in `src/data/mockData.json` under `tracks`) is missing from the filter options.

4. **Streak Length Filter (`src/app/recruiter/page.tsx`, lines 192-205)**:
   ```typescript
   <input
     type="range"
     min="0"
     max="45"
     value={minStreak}
     onChange={(e) => setMinStreak(parseInt(e.target.value))}
     className="w-20 accent-violet-500 bg-slate-200 dark:bg-dark-bg rounded-lg cursor-pointer h-1.5"
   />
   ```
   - **Observation**: The slider `max` is currently hardcoded to `45`. Candidate Kavya Nair has a `currentStreak` of `47`. Recruiters cannot set a minimum streak filter above 45 days.

5. **Candidate Dossier Modal View (`src/app/recruiter/page.tsx`, lines 273-288)**:
   - **Observation**: `<RecruiterPreview user={selectedCandidate} />` renders inside a sticky desktop panel (`lg:col-span-5`). On mobile viewports (`< lg`), selecting a candidate updates the dossier below the candidate list, but there is no dedicated responsive modal overlay popup for quick dossier inspection.

---

## Logic Chain

1. **Requirement R1 Mapping**:
   - `ORIGINAL_REQUEST.md` R1 specifies: *"Implement real-time candidate search (by name, college, skills) and filter controls (streak length, track selection)"* and *"Enable a detailed dossier view of candidates using the RecruiterPreview component."*
2. **Search Enhancement Reasoning**:
   - To support skill keyword search, `UserProfile` must be extended with `skills?: string[]`.
   - Each entry in `mockCandidates` should be populated with explicit skill keywords (e.g. Kavya: `['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']`, Arjun: `['Python', 'PyTorch', 'FastAPI', 'LangChain', 'LLMs', 'Vector DBs']`, etc.).
   - The search filter in `page.tsx` must be updated to check:
     1. Candidate name
     2. Candidate college
     3. Candidate track
     4. Explicit `candidate.skills` array
     5. Derived `getTechStackPills(candidate.track)` array
3. **Filter Tuning Reasoning**:
   - Adding `'Mobile'` to the track filter options (`['All', 'Web', 'AI', 'DevOps', 'Mobile']`) completes full alignment with project tracks.
   - Adjusting the min streak range `max` from `45` to `50` (or `60`) allows recruiters to filter up to top-tier streak levels (e.g. 47+ days).
4. **Dossier View & Modal Experience Reasoning**:
   - `RecruiterPreview` is fully built and feature-complete with consistency scores, streak cards, tech stack pills, unlocked achievements, and interactive buttons (LinkedIn & Resume Download).
   - Adding a responsive modal overlay toggle on mobile viewports (`< lg`) ensures recruiters on mobile devices get a seamless modal experience, while desktop users retain the side-by-side split layout.

---

## Caveats

- **No Caveats**: The dataset and component architecture are clean and self-contained. Adding `skills` to `UserProfile` and `mockCandidates` is backward-compatible and breaks no existing components.

---

## Conclusion

Milestone 2 (Recruiter Dashboard Search & Filters) has a clear, actionable, read-only verified implementation strategy:

### Proposed Implementation Patch / Strategy

1. **`src/components/RecruiterPreview.tsx`**:
   - Add `skills?: string[];` to `UserProfile` interface.
   - Update tech stack pills renderer to utilize `user.skills` when available or combine with `getTechStackPills(track)`.

2. **`src/app/recruiter/page.tsx`**:
   - Add `skills` arrays to all candidates in `mockCandidates`:
     - Kavya Nair: `['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']`
     - Arjun Mehta: `['Python', 'PyTorch', 'FastAPI', 'LangChain', 'LLMs', 'Vector DBs']`
     - Sanjana Pillai: `['React', 'Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS']`
     - Devansh Gupta: `['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'AWS', 'Linux']`
     - Priya Verma: `['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'TensorFlow']`
     - Manan Patel: `['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Redis', 'Git']`
   - Update `matchesSearch` condition:
     ```typescript
     const searchLower = searchQuery.toLowerCase().trim();
     const matchesSearch =
       !searchLower ||
       candidate.name.toLowerCase().includes(searchLower) ||
       candidate.college.toLowerCase().includes(searchLower) ||
       candidate.track.toLowerCase().includes(searchLower) ||
       (candidate.skills && candidate.skills.some(skill => skill.toLowerCase().includes(searchLower)));
     ```
   - Update track options array to `['All', 'Web', 'AI', 'DevOps', 'Mobile']`.
   - Update streak slider `max` attribute to `50`.
   - Add responsive mobile modal dialog state `isModalOpen` to trigger `<RecruiterPreview user={selectedCandidate} />` in a modal dialog on mobile screens with a close button.

---

## Verification Method

1. **Build Check**:
   - Run `npm run build` to confirm zero TypeScript compilation errors with the updated `UserProfile` interface.
2. **Search Verification Scenarios**:
   - Search `"Python"` -> Returns Arjun Mehta and Priya Verma.
   - Search `"Docker"` -> Returns Kavya Nair and Devansh Gupta.
   - Search `"IIT"` -> Returns Kavya Nair.
   - Search `"NIT"` -> Returns Devansh Gupta and Manan Patel.
3. **Filter Verification Scenarios**:
   - Click `'Mobile'` track -> Shows empty state gracefully or candidates with mobile skills.
   - Move streak slider to `45` -> Filters out Manan Patel (12d), Priya (38d), Devansh (40d), Sanjana (42d); leaves Arjun (45d) and Kavya (47d).
4. **Modal & Dossier Inspection**:
   - Click candidate card on mobile viewport -> Modal overlay opens displaying `RecruiterPreview` with candidate details, consistency score, and working buttons.
