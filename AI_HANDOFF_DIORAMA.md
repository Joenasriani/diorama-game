# DIORAMA: current AI continuation handoff

Updated 10 November 2026. This is the only current handoff. Start with [AGENTS.md](AGENTS.md); exact hashes/publication evidence are in [release state](docs/RELEASE_STATE.json). Audit: [10 November reconciliation](docs/RECONCILIATION_AUDIT_2026-11-10.md). Old narratives and level revision records are [historical](docs/archive/README.md).

## Current source and accepted release

- Repository: `Joenasriani/diorama-game`, authoritative branch `main`. Audited HEAD: `6bc082035f4bb0c9bd51b0b8e7d0adc88d35322f`. Resolve live HEAD each time; documentation commits may advance it without changing the game.
- Runtime baseline: `31c7b6efa875380ec0265300c1339578af007e6d`, 25 packaged runtime/assets/license files, 25 levels, visible product label v1.0, 60-second ending. These identifiers describe different things, not conflicting versions.
- Accepted changes: dragon shoulder pivots; 41 exterior and three interior takeoff sound cues; stronger dragon movement/stomp; soft tile-clipped contact shadows under hero/princess; starting-page vignette removed and clouds slightly whiter. Blue sky gradient retained; original cloud material restored during gameplay.
- The overall freeze remains active. This audit authorizes documentation fixes only. Proposed level reviews and unresolved QA do not authorize runtime work.

## Publications and evidence

| Destination | Current recorded state |
| --- | --- |
| [Vercel](https://diorama-game.vercel.app/) | Production READY at `6bc0820` was verified during the latest release; query production again before a new release. |
| [ChatGPT Sites](https://diorama-game.joenasr.chatgpt.site/) | Public project `appgprj_6aeed8d514dc8191bf1a39cdc7932e2d`, version 16, source `dd0df9e9266293326c91e4e85bb95de415b865fe`. Scripts exactly match; other runtime files match Git blobs; HTML has only documented host preview origins/whitespace differences. |
| [itch.io](https://joenasr.itch.io/diorama) | Joe uploaded `DIORAMA_itchio_2026-11-10_6bc0820.zip`; browser-play selection observed on 10 November. 25 files, 5,734,059 bytes; SHA-256 in release state. Packaged files match GitHub. |
| [Latest devlog](https://joenasr.itch.io/diorama/devlog/1766913/diorama-3d-puzzle-game-update-the-dragon-has-discovered-anatomy) | Published 10 November with latest ZIP attached. Listing description, links, controls, saves and metadata corrected. |

Source/package comparisons do not prove downloaded live response equality. Served-byte parity remains open. GitHub pushes do not automatically publish Sites or itch.io. Documentation-only work needs no new ZIP or Sites deployment. Saves are local to the browser and origin, with no cross-host transfer.

## Architecture and protected gameplay

- Static buildless distribution: `index.html`, `assets/`, `ending/`, `invest/`, LICENSE and third-party notices. No package install, backend, external level importer or separate editable level files.
- The main HTML bundles Three.js r160, 25 level definitions, pathfinding, mechanisms, input, localStorage, rendering and gameplay audio. Do not replace/rebuild the bundle for a small edit.
- Exactly 25 levels. Continue maintenance of the same edition; do not infer another game from obsolete listing counts.
- Preserve reachable-route movement; no tier jumps, locked-route bypasses, invisible supports, false click targets, merged dynamic/static bricks, accidental double toggles or trigger softlocks.
- Immediate legal elevated-step tap assistance; one-finger orbit; two-finger tracking/pedestal movement plus pinch zoom. Camera gestures must not issue robot movement.
- Preserve portal disappearance/reappearance, enlarged electrical strikes, pauses and synchronized audio; folding stems align with actual route anchors. Level 12 remains visible without the removed staged reveal.
- Existing focused revisions cover Levels 7, 8, 9, 12, 13, 14, 15 and Level 25 route integrity. Details are historical records in [the upgrade register](docs/archive/UPGRADE_LEVELS_AND_FIXES.md). Do not restart them as new work.
- One readable intended route and coherent cause/effect are design requirements, not proof of unique solvability. Established safe linear paths can auto-traverse.
- Replay returns to Level 1 while retaining completion/best-move records. Explicit reset is a separate action.

## Current ending and audio

The Level 25 win is recorded before an approximately 1.25-second transition. The parent stops its game renderer/music recovery and opens the same-origin movie, passing its music preference. Keep Pause/Play, Sound, Skip and Replay behavior; ordinary embedded viewers do not get editorial chapter/scrub controls.

| Mixer item | Current gain / behavior |
| --- | --- |
| Ending music | 0.72 baseline; 8% step and 18% impact duck; fade at 57.5–60s |
| Exterior jumping | 0.018 distant → 0.080 close, existing camera-perspective ramp |
| Three interior jumps | 0.070 |
| Princess help | 1.6 at 29.05s; extra 35% music duck around the call |
| Other effects | door .43, wings .48, landing .55, dragon .48, doom .62, stomp .60, boom .60 |

These are code amplitude gains, not perceived-loudness measurements. Gameplay music is separate (0.18 in the main game).

Score, wind and eight sampled effects are decoded into a shared Web Audio engine before playback. The slim bar on blue remains until fonts/audio and seven scene/shader warmups are ready. The opening frame, timeline and enabled audio start at zero together. Blocked enabled audio shows a tap-to-play prompt; preparation failure shows retry. Do not bypass the loading gate or alter the 60-second story/camera/cue timings as collateral work.

Dust at 21.62s landing and 40.50s stomp clears the actual tile-cap top (`TILE_TOP_Y + .035`), spreads horizontally, retains opacity briefly and follows the animated front foot for the stomp. Preserve grounded dust rather than floating clouds. Hero reaction starts 33.55s. Finale CTA is a native external anchor to the Vercel support page in a new tab.

## Sequel, branding and rights

`invest/index.html` is a coming-soon/support page. Preserve the real Three.js mirrored-castle header (`?view=pitch-header`), muted blue `#5b777d`, same-origin/source-validated ready-message visibility gate and fallback. Do not replace it with a CSS castle.

Optional tiers: Early Explorer $15; Founding Supporter $35; Patron $100. No launch date, equity or open revenue-share offering. Preview access is when available; credit inclusion is optional/subject to approval. PayPal checkout/fulfillment is unverified; never execute a transaction without Joe's per-action confirmation. Preserve [rights notices](THIRD_PARTY_LICENSES.md); original-code MIT does not relicense music/fonts/other assets. README social artwork is not an authenticated film frame, and GitHub Markdown cannot play Three.js inline.

## Open work and verification limits

- Full human 25-level playthrough; one-level-at-a-time Level 16 onward design review only when requested, with player preview/approval before advancing.
- Real-device cold-cache startup, brown-flash elimination, portrait/landscape framing and dust appearance; accepted wing/jump preview with further cross-device audio checks still open; complete ending/pause/skip/replay/save regression.
- Cross-browser audio autoplay, WebGL failure/context-loss behavior and funding-header seam/clearance.
- Live served-byte comparisons across hosts, payment/fulfillment, and remaining asset-rights provenance.
- The available browser reports WebGL disabled; this blocked gameplay in both preview and itch.io. It is an environment limitation, not evidence every player's device fails.

## Continue safely

Read the current task and relevant source; inspect live HEAD and open PRs. Preserve unrelated work. Reproduce or trace the issue, make the smallest authorized edit, run appropriate checks, and report each verification layer honestly. Update release evidence and focused records, then this handoff. No speculative redesign, backup-branch merge or optional dependency is part of maintenance.
