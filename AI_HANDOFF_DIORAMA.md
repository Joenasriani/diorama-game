# DIORAMA – AUTHORITATIVE AI CONTINUATION HANDOFF

> **Read this file first when continuing DIORAMA in a new ChatGPT/AI thread.**
> Current reconciliation: **6 November 2026**. Historical baselines are labeled below. Project: [Joenasriani/diorama-game](https://github.com/Joenasriani/diorama-game), default branch `main`.
> This document is a navigation and operational handoff, **not** proof that every game path has been played or a replacement for live source and deployment verification.
> **Source hierarchy:** live repository code and deployment metadata for implementation facts; this handoff for decisions and priorities; [UPGRADE_LEVELS_AND_FIXES](docs/UPGRADE_LEVELS_AND_FIXES.md) for per-level revision history; other project documents for focused scopes. If sources disagree, recheck current code/commit and report the conflict.

## Current verified implementation – 6 November 2026

**Latest reconciliation evidence:** [6 November authoritative-state audit](docs/RECONCILIATION_AUDIT_2026-11-06.md). Read it with the [maintenance protocol](REPOSITORY_MAINTENANCE_PROTOCOL.md) and verify GitHub/Vercel HEAD each time. The [5 November audit](docs/RECONCILIATION_AUDIT_2026-11-05.md) is retained as historical evidence, not as the latest working-state instruction.

**This section is the active runtime baseline for future AI threads. Historical sections below are kept for traceability, not as active instructions.** At the start of the repository-wide reconciliation, GitHub `main` and the Vercel production domain both identified commit `0a1cfe986b4c5b3cc9a227c06730af0d1717aa91` (`READY`). Later documentation-only commits will advance `main` and may redeploy unchanged runtime assets; verify deployment HEAD afresh.

**Authoritative game:** **25 levels**. Treat any different advertised level count on itch.io as **outdated listing metadata to update later**, not evidence of a distinct edition. Do **not** change itch.io listings, release packages or gameplay in a documentation synchronization.

**Runtime source blobs verified at reconciliation start:**
- `index.html`: `dc13b37e2578bf8965b827a25c994e1d2ab2a038` – 25-level game, unchanged during the latest cinematic revisions.
- `ending/index.html`: `d4534c76ead499a5fe70f08143826d9853bdd77a` – **current 60-second cinematic**, including the newer audio, editorial reaction and dragon impact dust changes.
- `invest/index.html`: `11102c8ec371cd8a09e9552e4b910980e7249771` – DIORAMA 2 supporter page and embedded Three.js castle, unchanged.
- Source asset references, soundtrack file and audio/SFX assets are not changed by the documentation reconciliation.

**Current film audio (supersedes historical 60% and 78% settings):**
- Music baseline **0.85** for Web Audio score and fallback; step ducking **8%**, major-impact ducking **18%**; fade during **57.5–60 seconds**.
- Outdoor jump/step oscillator gain **0.075** in distant shots, interpolating smoothly to **0.230** for close shots along the existing authored perspective ramp; three interior jumps use **0.200**.
- Door `0.43`, wings `0.48`, landing `0.55`, dragon `0.48`, princess `0.43`, doom `0.49`, stomp `0.43`, boom `0.50`. These are code amplitude settings, **not** measured recording loudness.
- The composition, soundtrack file, 60-second film clock and established cue timestamps are protected. **Real-device listening/mix approval remains unverified.**

**Current film picture:** The hero's princess-reaction turn starts at **33.55s** for the cut at 34s. The dragon's existing dust layers are both grounded at tile height for the **21.62s** landing and **40.50s** stomp, spreading laterally from ground contact. Prior airy/elevated dust behavior was corrected in `7c9d3ed`. **Visual acceptance on devices is not yet verified.**

**Still active:** the slim bar-only opening loader; scene-ready iframe handshake; game music isolation; 25-level progression; payoff/replay and backing-page contracts; no equity; background `#5b777d`; and the existing issue/QA limitations. Source parse and CI do not prove frame-level audiovisual quality.

**Immediate next-thread procedure:** Read this active section, `REPOSITORY_MAINTENANCE_PROTOCOL.md`, `CHANGELOG.md`, `ENDING_INTEGRATION_NOTES.md`, `docs/RELEASE_PROCESS.md` and the original runtime source. Reconcile any post-snapshot commits. Do not repeat earlier audio rebalances, restart the Level 7–15 overhaul, or reintroduce airborne dragon-impact dust. **Level 16 onward audits are proposals, not automatically approved edits.**

## Previous audio mix – historical record (superseded 6 November 2026)

**Runtime commit `0a57ed6cb1e16c7919e61c684fd2c8f02ea0560a`:** `ending/index.html` audio mixer only. Film music base increased from 0.26 to 0.60; step ducking relaxed from 25% to 12% and impact ducking from 60% to 35%; far-to-near outdoor jump gain now interpolates 0.028 → 0.115 using the existing authored shot-time perspective ramp; three interior jump sounds now 0.11 rather than 0.08. Original oscillator pitch/envelope, cue times, entire cinematic, choreography, score file, final fade and game/funding runtimes are preserved. Vercel production reported **READY** for the runtime commit. Syntax/source checks passed; **real-device mix listening still unverified**. See `CHANGELOG.md`. Subsequent documentation commits advance HEAD without changing this audio code.

## Historical reconciliation record – 5 November 2026

A repository-wide change reconciliation was completed for the recently modified game-ending loader, funding header and README. **Read the [dated audit report](docs/RECONCILIATION_AUDIT_2026-11-05.md) and [repository maintenance protocol](REPOSITORY_MAINTENANCE_PROTOCOL.md) before any new change.** The reconciliation corrected current-documentation drift in `README.md`, `CHANGELOG.md`, `ENDING_INTEGRATION_NOTES.md`, `ROADMAP.md` and `docs/RELEASE_PROCESS.md`; linked the audit and a permanent maintenance SOP. The game `index.html`, film `ending/index.html`, backing page `invest/index.html`, audio, fonts, levels and original game assets **were not changed by this documentation audit**.

Specific corrections: the README now identifies the linked game artwork correctly (not a captured movie frame); the cinematic's slim bar-only loader and `diorama-ending-scene-ready` funding-page handshake have written contracts; GitHub Actions `itchio-dist.yml` creates a ZIP **artifact only**, not an itch.io publication; and hosting deployments are distinct from validator CI. The nine localized short overviews and historical per-level approval register were deliberately preserved.

The audit inspected the source blobs and literal HTML asset references, reconciled the seven principal Markdown documents' relative links against GitHub's tree, and saw no missing tracked paths in those subsets. **This does not establish complete external-link reachability or device/browser playback.** Do not mark the initial flash, WebGL resilience, 25-level playthrough, PayPal checkout or itch.io parity as solved.

**Authority boundary:** dated commit hashes in sections below refer to the pre-reconciliation 4 November baseline; they are historical evidence, **not current HEAD**. The reconciliation itself creates later documentation commits and automated deployments. Query `main`, status and Vercel afresh before future changes. Review actual SHA of `index.html`, `ending/index.html`, and `invest/index.html` to ensure the original protected runtime was preserved.

## 1. Immediate orientation

DIORAMA is an authored, tactile, minimalist 3D mechanical route-puzzle game using Three.js. Its core identity: calm miniature worlds, moving architecture, clear cause and effect, visually readable valid routes, puzzle difficulty from spatial reasoning rather than repeated taps or ornamental tricks. It is **not** a generic low-poly template. User-facing mechanics, cinematography, sound and typography should feel like one game.

**Repository:** https://github.com/Joenasriani/diorama-game

**Hosted browser game:** https://diorama-game.vercel.app/

**Standalone 60-second ending movie:** https://diorama-game.vercel.app/ending/

**DIORAMA 2 coming-soon and backing page:** https://diorama-game.vercel.app/invest/

**itch.io:** https://joenasr.itch.io/diorama – external listing may still advertise an outdated count. The **authoritative DIORAMA game has 25 levels**, not a separate larger edition. Updating itch.io copy and comparing its distributed package against Vercel are **deferred external tasks**; no itch.io change is authorized by this repository reconciliation.

**Historical 4 November code/deployment baseline (superseded by the active section above):**
- `main` HEAD: `2602eb0765b86d10d427d410cd031cb8d2907a33`; README cinematic/funding callout.
- Vercel production deployment for `diorama-game` reported `READY` with that exact commit. This verifies the build/deployment record, **not** successful device playback.
- Game UI displays **v1.0**, which is a product label and **not** the Git commit, hosting version or guaranteed semantic version.
- This handoff and any follow-up README edits create later documentation-only commits. **Always query the latest HEAD and production SHA afresh** instead of treating the above as permanently current.

## 2. Where to look first

| Path | Purpose | Sensitivity |
| --- | --- | --- |
| `index.html` | Main game, bundled Three.js runtime, all 25 level definitions, input, rendering, routing, save data, music, end-trigger and embedding | **HIGH**. Self-contained, >1 MB. Never casually reformat/rebuild. |
| `ending/index.html` | 60-second authored Three.js film, camera/timeline, characters, score/effects, playback controls, final title and actions, initial loading screen | **HIGH**. Large bundled HTML. Preserve film timing/shot order. |
| `ending/audio/` | Movie soundtrack and effects | Preserve names, rights and sync. |
| `invest/index.html` | DIORAMA 2 support/coming-soon page; noninteractive iframe of movie in `?view=pitch-header` | Preserve Three.js castle, intended color, tiers and links. |
| `assets/fonts/` | Amatic SC regular/bold | Keep preload and typography timing stable. |
| `assets/music/` | Game music | Keep separate from ending score; protect mute preferences. |
| `scripts/validate-levels.cjs` | Structural/regression checks, NOT an end-to-end solution solver | Run after any level/runtime change. |
| `docs/UPGRADE_LEVELS_AND_FIXES.md` | Detailed level-by-level revisions, frozen constraints and pending audit | Historical status labels may be superseded. |
| `ENDING_INTEGRATION_NOTES.md` | Level-25 trigger, music/render isolation and restart contract | Older verification snapshot. |
| `docs/RELEASE_PROCESS.md` | Release procedure and required manual QA | Follow before production changes. |
| `ROADMAP.md` | Proposed tracks and still-open level audit | Not permission to implement everything. |
| `CHANGELOG.md` | Dated committed changes | Update for meaningful releases. |
| `THIRD_PARTY_LICENSES.md` | Rights boundaries for Three.js, fonts, game soundtrack and ending media | Never treat bundled third-party music as MIT. |
| `README.md` | Public introduction, play/cinematic/backing callout, architecture and caveats | Avoid stale current-commit claims. |
| `REPOSITORY_MAINTENANCE_PROTOCOL.md` | Repeatable impact assessment, repository-wide reconciliation and test/deployment evidence standard | Read before making changes; not standing feature authorization. |
| `docs/RECONCILIATION_AUDIT_2026-11-05.md` | Dated findings, reconciled files, preserved historical states and open tests | Audit evidence, not current live deployment metadata. |

## 3. Implemented game and protected mechanics

- **25 embedded levels**, designed around readable valid paths and stateful mechanisms including bridges, lifts, switches, keys/locks, transfer pads, gates, route stamps, moving blocks and combinations.
- Navigation is reachable-route constrained rather than arbitrary click-to-coordinate movement. Do not accidentally permit tier jumps, locked-route bypasses, invisible structural supports or navigation through decorative geometry.
- Existing tap assistance prioritizes immediately reachable elevated neighbors for small-screen touch; maintains legal movement only.
- Touch camera: one-finger orbit; two-finger horizontal tracking and vertical pedestal movement; pinch zoom independently preserved. Touch camera gestures must never issue robot movement.
- Existing portal disappearance/reappearance effects, enlarged electrical strikes, timing and synchronized sounds are protected.
- Folding-bridge stems align with their actual neighboring route anchor; validator checks direction data.
- Important specific revision work: Level 25 missing polarity-switch host tile and malformed one-way vector corrected; focused revisions to Levels 7, 8, 9, 12, 13, 14 and 15, with regression contracts in validator and detail in the upgrade register.
- Pending: one-by-one **Level 16 onward** gameplay/design audit and full 1–25 human playthrough. Never equate the structural validator with logical/mechanical/human solvability.
- Save state uses browser `localStorage`; Level 1 replay after the ending should retain completion/best-move records, whereas explicit reset has separate behavior.

**Gameplay design rules:** one readable route, visibly coherent mechanisms, no false-affordance symbols or fake click targets, no merged dynamic/static bricks, no invisible support geometry, no accidental double-toggle/latching errors, no trigger softlocks, and one-click travel along already established safe linear paths where intended. Distinct level silhouettes and decision patterns matter more than geometry shuffling.

## 4. Ending integration – exact boundaries

The game records the Level 25 final win and plays completion feedback. Approximately **1.25 seconds later**, `showEndPage()` opens the bundled `ending/index.html` movie. The parent enters ending mode and pauses its rendering and music watchdog; otherwise two render loops/audio tracks can conflict. It passes music preference into the ending. Restart returns to Level 1 without clearing previously recorded completion/best-move state.

The movie is a **60-second authored cinematic**. Do not adjust timeline keyframes, camera distance/easing, character actions, title/button timings or sound sync as collateral to loader/README changes. Standalone movie and integrated-game iframe have distinct controls. Embedded finale has Pause/Play, Sound, Skip and Replay Diorama routes; preview scrubber/chapter shortcuts are not for ordinary players. At the finale, users can replay or open the DIORAMA 2 page.

### 4 November startup-flicker correction

User observed an initial brown geometric flash before the opening scene. Initial render gating reduced it but did not fully eliminate it according to the user's device observation. A second change added a **movie-only loading-screen overlay matching the game's slim rounded white-outline and warm ivory/gold loading bar** on blue, with **no heading, percentage or extra controls**. It stays above unready WebGL content; the scene renders at timeline zero behind it, waits for the document fonts readiness promise, then hides the loader, signals parent readiness and starts the movie clock. Pitch-header variant retains the funding-page castle background `#5b777d` and suppresses the movie loading bar in that static header.

The funding page waits for the same-origin `diorama-ending-scene-ready` message from its iframe rather than displaying it immediately on `onload`. The original intro composition, castle, title, camera, 60-second sequence and music should remain unchanged.

**Verification boundary:** This gate was committed as `44ed82434807a297b17aaa75d3fd5abebae96957`; JavaScript syntax and repository checks passed and Vercel reported READY. **No verified frame-by-frame real-device test proving the flash is completely gone.** Browser onload, source parsing and Vercel READY are not visual QA. On follow-up, ask for a reproduction only if actual device inspection is unavailable and do not declare this visually fixed without evidence.

### Practical reminder for editing large HTML

GitHub `fetch_file` may return **empty `content`** for `index.html` and `ending/index.html` due to size. Retrieve a concrete blob SHA from the repo tree or `fetch_file` metadata and then use GitHub `fetch_blob` to access the entire text. Do not interpret an empty fetch result as an empty source file or overwrite the file. For updates use the **full original text and the correct current blob SHA** and check for concurrent commits before replacing. Avoid broad replacements of the bundled Three.js code.

## 5. DIORAMA 2 funding page – current intent

`invest/index.html` is a **coming-soon/sequel support page**, not a launched sequel or an open equity investment. It embeds the actual ending scene as a Three.js castle/title header (`view=pitch-header`), not an invented CSS castle. Preserve the approved flat backdrop **castle-muted blue `#5b777d`**, rather than sky blue, and check portrait/landscape centering. The static pitch-header uses a mirrored render for an intentionally symmetric castle. Do not expose video controls or unrelated decorative geometry in this view.

Current displayed optional supporter tiers, **not equity**:
- **Early Explorer – US$15:** a playable preview before public launch, when available.
- **Founding Supporter – US$35:** Early Explorer access plus optional name in supporter credits subject to approval.
- **Patron – US$100:** Early Explorer access plus optional name in dedicated Patron credits subject to approval.

PayPal link present in markup: https://www.paypal.com/ncp/payment/NYRC4Q6FTYXBJ. **Payment flow, provider configuration and digital-reward fulfillment are not independently verified.** No preview release date. No investor revenue share or ownership is currently being offered; hypothetical future investment partnerships are separate written agreements. Never imply Patreon-like tier automation or successful transaction handling without testing.

The `Choose your backing tier` CTA is intended to be prominent and unambiguous. If adjusting layout/graphics, preserve original film branding and do not create misleading interactive effects.

## 6. README and discoverability

The root README features the game plus screenshots, a cinematic preview and a native GitHub callout titled **THE JOURNEY CONTINUES** linking to:
- Ending: https://diorama-game.vercel.app/ending/
- DIORAMA 2 support page: https://diorama-game.vercel.app/invest/

GitHub Markdown **cannot run WebGL/Three.js inline or embed a playable iframe**. The current preview uses `docs/screenshots/social-preview.png`, which is **not an authenticated frame from the ending cinematic**. Do not claim that it is. An actual animated GIF or movie-thumbnail frame requires a separate genuine capture, rights check and GitHub-compatible presentation.

The callout was committed in `2602eb0765b86d10d427d410cd031cb8d2907a33` directly on `main`. There was no PR to merge. Future AI agents should not propose merging already committed `main` changes or invent a missing branch.

## 7. What has and has not been verified

**Observed/verified at snapshot:**
- Files for game, ending and funding page are in GitHub `main`; Vercel production metadata identified same `2602eb0` commit as READY.
- The ending loader/ready-message source exists and passes syntax checks performed during the change.
- The repo contains a structural validator and GitHub Actions validation workflow.
- Links and tiers were verified in markup.

**Still NOT verified:**
- Full actual-device playthrough and solvability/UX of all 25 levels, including Level 16–25 review.
- End-to-end player journey: Level 25 completion -> parent transitions -> movie with audio -> skip/pause/resume -> funding page/replay -> saved progression.
- Cold-cache startup on mobile/desktop and explicit evidence that the brown opening flash is eliminated.
- Portrait/landscape camera/title/character framing and footer/CTA clearance on real device, including static funding castle symmetry seam.
- WebGL context-loss/failure fallback and audio autoplay restrictions across browsers.
- Successful real PayPal checkout and corresponding supporter identification, fulfillment and legal/payment settings.
- The current public itch.io package matching the GitHub/Vercel release.
- Complete rights provenance for some bundled SFX/fonts and redistributability of individual MP3 files. Read `THIRD_PARTY_LICENSES.md`.

**Important:** No amount of parse success, remote READY status or structural CI can be substituted for these manual browser tests.

## 8. Work protocol for the next AI thread

1. **Read this handoff, the maintenance protocol, dated reconciliation audit, README, ENDING_INTEGRATION_NOTES, ROADMAP, release procedure, upgrade register and relevant current HTML before edits.** Locate the exact currently authoritative branch/commit and Vercel SHA. Note any drift since the snapshot.
2. Identify whether the requested change targets gameplay, cinematic, funding, public README or release packaging. Freeze unrelated systems.
3. Reproduce the defect or inspect a demonstrable code path before choosing a fix. Separate **observed fact**, **hypothesis**, **code-only validation** and **visual/device verification** in reports.
4. State the smallest affected surface and regression risk. Do not silently make unrelated visual redesigns or performance rewrites. For larger work, use a branch/PR and stage/test before merging; preserve backups or revertable commits.
5. Run syntax and `node scripts/validate-levels.cjs` after game modifications; check all changed files and references. For ending/invest, check actual frame readiness, no stuck loaders, exact intro time zero and message origin/source validation.
6. Test the changed route from the real player's perspective. On portrait and landscape check camera composition, background colors, typography, clickable interactions, music preference, pause, replay, navigation and cold cache. State when a browser/device test is unavailable.
7. Before any release, follow `docs/RELEASE_PROCESS.md`, record commit, build status and remaining manual QA. Never say “fixed”, “fully verified” or “ready” based only on compilation/deployment.
8. Update README/CHANGELOG/handoff selectively after accepted changes; distinguish historical deployment SHA from latest code. Preserve asset rights notices.
9. If user says **“next”**, continue the current approved sequence. Do not restart an old review or re-propose already committed changes. If the user says **“merge”**, first check if the commit is already on `main` and whether any open PR exists.
10. Deliver **one clear result** with changed files, commit/deployment facts, observed tests and open blockers. Do not claim work completed if only proposed.

### Non-negotiable visual/design constraints

- Keep the cinematic's exact story, camera choreography and music synchronization unless explicitly asked to change them.
- Background at the funding page's very back must be the **castle muted blue**, not the brighter movie sky blue.
- Keep graphic hierarchy centered independently in desktop landscape and mobile portrait.
- Avoid ambiguous indicators, fake interactive shapes, redundant click counters, generic cards and unrelated ornament.
- The movie loader is a minimalist **bar only**, with visual treatment from original game, until actual readiness; no arbitrary minimum-time delays.
- Preserve stable 25-level progression and existing save data.

## 9. Suggested next QA pass (NOT completed)

In a real browser with network throttling/cache disabled, capture the **first 2 seconds** of the standalone movie, embedded finale and funding header at mobile portrait and desktop landscape sizes. Confirm no brown fragment/blank flash, a visible bar while assets initialize, that playback starts at 0 seconds after readiness, and that no scene is covered forever on failed WebGL. Then run the Level 25 completion/replay/music journey and inspect tiers/CTA. Only after observed pass, consider polishing the README preview with a genuine cinematic still.

---

**Continuity command for a new thread:**

> Read `AI_HANDOFF_DIORAMA.md`, `REPOSITORY_MAINTENANCE_PROTOCOL.md` and **`docs/RECONCILIATION_AUDIT_2026-11-06.md`** in `Joenasriani/diorama-game` on GitHub; verify current `main`, runtime source blob SHAs, CI and Vercel production against them. Reconcile any subsequent drift, then continue my specific DIORAMA task with the smallest safe change. Preserve protected gameplay, the 60-second cinematic, the bar-only loader and the funding page unless explicitly authorized. Report source, test and deployment verification separately.

*This is a dated, source-based handoff, not a mandate to implement every suggestion in it. For the current implementation, prefer the topmost **Current verified implementation** section; do not treat older dated snapshots as live state.*
