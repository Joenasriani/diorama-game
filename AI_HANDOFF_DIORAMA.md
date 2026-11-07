# DIORAMA – Current AI continuation handoff

## 7 November 2026 – DIORAMA favicon

Added a favicon derived directly from the user-supplied robot image, cropping the lettering for small-size legibility. Root favicon.ico includes 16, 32, 48, 64, 128 and 256 pixel entries; assets/icons contains 32, 180, 192 and 512 pixel PNGs. Game, ending and investor pages link the ICO, PNG and Apple touch icon with relative paths and a cache version. No gameplay, audio, movie timing or payment behavior changed. Matching favicon assets and links are prepared for the current ChatGPT Sites project appgprj_6aeed8d514dc8191bf1a39cdc7932e2d; deployment is recorded separately.


Updated 7 November 2026. Start here in a new thread; also read [AGENTS.md](AGENTS.md). This is current project guidance. Older narratives are retained in [the archive](docs/archive/README.md) and dated audits, not mixed into this baseline.

## Source of truth and release evidence

- Repository: [Joenasriani/diorama-game](https://github.com/Joenasriani/diorama-game), branch `main`. Verify HEAD before work.
- Runtime baseline: `230168317db7c8d566a06d314788c167ff8ca051`. Later documentation commits may advance HEAD without changing the game.
- Machine-readable state: [docs/RELEASE_STATE.json](docs/RELEASE_STATE.json). Latest audit: [7 November audit](docs/RECONCILIATION_AUDIT_2026-11-07.md). File responsibilities: [inventory](docs/FILE_INVENTORY.md).
- All 19 runtime/assets/license files matched Sites version 7 by Git blob hash. The ending blob is `8501ea003692149ed816e96170d377335f02f785`.
- Vercel reported success for the baseline. GitHub validation, Pages and ZIP packaging succeeded. These statuses do not prove full gameplay.
- The deterministic itch.io ZIP contains 19 files, 5,341,891 bytes, SHA-256 `e19c1456b66d7b54ceadaf58399fd8fea122dc5dfcda0d59360c7ef993f9310e`. It matches GitHub Actions' package checksum. The user uploaded it; the itch.io editor showed that filename selected for browser play, and the live iframe used upload 20340283. Hosted bytes were not downloaded and hash-compared.
- The itch.io description now says 25 levels, links to ChatGPT Sites, and lists the latest fixes. [Published devlog](https://joenasr.itch.io/diorama/devlog/1759746/diorama-3d-puzzle-game-update-ending-audio-and-browser-play). No follower-notification delivery or search ranking claim.

## Live destinations and synchronization

| Destination | Address / identity | Publishing behavior |
| --- | --- | --- |
| Vercel game | https://diorama-game.vercel.app/ | Git-integrated; inspect commit status after pushes |
| Ending | https://diorama-game.vercel.app/ending/ | Same runtime release |
| DIORAMA 2 support | https://diorama-game.vercel.app/invest/ | Optional backing, not equity |
| ChatGPT Sites | https://diorama-native-game.joenasr.chatgpt.site | Public; project `appgprj_6aeed8d514dc8191bf1a39cdc7932e2d`; version 7, source `2ee765eae973b0af8d391491848dc3ba6de8fa53` |
| itch.io | https://joenasr.itch.io/diorama | ZIP uploaded separately; no automatic publishing workflow |

GitHub `main` is the master. Sites requires a separate source/package/deploy step; never imply a GitHub push updates it automatically. For an approved release to both, package the same runtime, preserve Sites identity/public access, verify all runtime hashes and deployment results. Do not create a duplicate Site. Saves are local to each browser/origin and do not transfer between hosts. Documentation-only audits need no game repackaging or Sites deployment.

## Architecture and protected gameplay

- Static buildless distribution: `index.html`, `assets/`, `ending/`, `invest/`, LICENSE and third-party notices. No package install, backend, external level importer or separate editable level files.
- The main HTML bundles Three.js r160, 25 level definitions, pathfinding, mechanisms, input, localStorage, rendering and gameplay audio. Do not replace/rebuild the bundle for a small edit.
- Exactly 25 levels. Continue maintenance of the same edition; do not infer another game from obsolete listing counts.
- Preserve reachable-route movement; no tier jumps, locked-route bypasses, invisible supports, false click targets, merged dynamic/static bricks, accidental double toggles or trigger softlocks.
- Immediate legal elevated-step tap assistance; one-finger orbit; two-finger tracking/pedestal movement plus pinch zoom. Camera gestures must not issue robot movement.
- Preserve portal disappearance/reappearance, enlarged electrical strikes, pauses and synchronized audio; folding stems align with actual route anchors. Level 12 remains visible without the removed staged reveal.
- Existing focused revisions cover Levels 7, 8, 9, 12, 13, 14, 15 and Level 25 route integrity. Details are historical records in [the upgrade register](docs/UPGRADE_LEVELS_AND_FIXES.md). Do not restart them as new work.
- One readable intended route and coherent cause/effect are design requirements, not proof of unique solvability. Established safe linear paths can auto-traverse.
- Replay returns to Level 1 while retaining completion/best-move records. Explicit reset is a separate action.

## Current ending and audio

The Level 25 win is recorded before an approximately 1.25-second transition. The parent stops its game renderer/music recovery and opens the same-origin movie, passing its music preference. Keep Pause/Play, Sound, Skip and Replay behavior; ordinary embedded viewers do not get editorial chapter/scrub controls.

| Mixer item | Current gain / behavior |
| --- | --- |
| Ending music | 0.72 baseline; 8% step and 18% impact duck; fade at 57.5–60s |
| Exterior jumping | 0.0165 distant → 0.069 close, existing camera-perspective ramp |
| Three interior jumps | 0.060 |
| Princess help | 1.6 at 29.05s; extra 35% music duck around the call |
| Other effects | door .43, wings .48, landing .55, dragon .48, doom .49, stomp .43, boom .50 |

These are code amplitude gains, not perceived-loudness measurements. The old .85 music and .075–.230/.200 jumps are historical and must not be restored accidentally. Gameplay music is separate (0.18 in the main game).

Score, wind and eight sampled effects are decoded into a shared Web Audio engine before playback. The slim bar on blue remains until fonts/audio and seven scene/shader warmups are ready. The opening frame, timeline and enabled audio start at zero together. Blocked enabled audio shows a tap-to-play prompt; preparation failure shows retry. Do not bypass the loading gate or alter the 60-second story/camera/cue timings as collateral work.

Dust at 21.62s landing and 40.50s stomp clears the actual tile-cap top (`TILE_TOP_Y + .035`), spreads horizontally, retains opacity briefly and follows the animated front foot for the stomp. Preserve grounded dust rather than floating clouds. Hero reaction starts 33.55s. Finale CTA is a native external anchor to the Vercel support page in a new tab.

## Sequel, branding and rights

`invest/index.html` is a coming-soon/support page. Preserve the real Three.js mirrored-castle header (`?view=pitch-header`), muted blue `#5b777d`, same-origin/source-validated ready-message visibility gate and fallback. Do not replace it with a CSS castle.

Optional tiers: Early Explorer $15; Founding Supporter $35; Patron $100. No launch date, equity or open revenue-share offering. Preview access is when available; credit inclusion is optional/subject to approval. PayPal checkout/fulfillment is unverified; never execute a transaction without Joe's per-action confirmation. Preserve [rights notices](THIRD_PARTY_LICENSES.md); original-code MIT does not relicense music/fonts/other assets. README social artwork is not an authenticated film frame, and GitHub Markdown cannot play Three.js inline.

## Open work and verification limits

- Full human 25-level playthrough; one-level-at-a-time Level 16 onward design review only when requested, with player preview/approval before advancing.
- Real-device cold-cache startup, brown-flash elimination, portrait/landscape framing and dust appearance; audible mix approval; complete ending/pause/skip/replay/save regression.
- Cross-browser audio autoplay, WebGL failure/context-loss behavior and funding-header seam/clearance.
- Live served-byte comparisons across hosts, payment/fulfillment, and remaining asset-rights provenance.
- The available browser reports WebGL disabled; this blocked gameplay in both preview and itch.io. It is an environment limitation, not evidence every player's device fails.

## Work sequence

Read the current state and relevant source, inspect live HEAD/open PRs, identify the authorized scope, reproduce or trace the issue, make a narrow change, run syntax/structural/relevant behavior checks, and state device limitations. Update affected records and release evidence; verify publications separately. If asked to merge, first check whether changes already landed on `main`. Do not merge the protected historical backup just because it exists. No speculative redesign or optional dependency is part of a maintenance fix.
