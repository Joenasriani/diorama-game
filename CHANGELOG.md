# Changelog

## Accepted ending update – 9 November 2026

Joe accepted ChatGPT Sites version 14 (source `2907275066144bcdb71659b18fdc070bd505c069`). GitHub runtime commit: `a378f579a83a56cee3e7b9732892d83d45f83972`; ending blob: `833026a59c28ffe7d32f0a3130e110fcae5b1251`.

The accepted ending includes the shoulder-pivot correction; shared route/animation timing with exactly 41 exterior and three interior takeoff cues; exterior jump gains .018–.080 and interior .070; movement/doom gain .62, stomp .60 and impact boom .60. Both robots have soft tile-clipped contact shadows; the hero's shadows fade with jump clearance and the princess's follow her reveal. The 60-second timeline, visible route motion, camera, music and gameplay remain unchanged. This is the protected baseline; the overall freeze remains active.

Ending scripts exactly match the approved Sites version; host-specific social image URLs are preserved. Syntax, jump cue timing, tile-shadow geometry and 25-level structural checks passed. Joe's acceptance is user review evidence. The agent could not independently render/listen because its browser cannot create WebGL. Current Site: https://diorama-game.joenasr.chatgpt.site. itch.io has not been republished with these changes.


## Earlier accepted ending update – 9 November 2026 (Sites v12)

Joe accepted ChatGPT Sites version 12 (source `74692d784eaf393312aeba4f0ec5e424a86d3a5b`). GitHub runtime commit: `6ab5445c8cd3f5be10306166b01e8784f29f5510`; ending blob: `64c99a55b0c043f833202a9d6cd855e922cae830`.

Fixed shoulder hinges keep the dragon wing membranes clear of the torso. Exterior jump gains are now .018 distant to .080 close; three interior jumps use .070. Existing flap angles, audio cue timestamps, camera choreography, music mix and the 60-second timeline are unchanged. This specifically approved update becomes the protected baseline; the overall freeze remains active.

Syntax, 25-level structural checks and normalized ending-source parity passed. About 1.97 million wing surface/pose samples passed before publication. Joe's acceptance is user review evidence; the agent's browser cannot create WebGL and did not independently confirm rendered or audible playback. Current Site: https://diorama-game.joenasr.chatgpt.site. itch.io has not been republished with this update.


## 9 November 2026 – temporary game freeze

Recorded Joe's explicit temporary freeze in AGENTS, the current handoff, maintenance protocol and release state. Protected baseline: `2ede3c700a633c85cdce1198a64befaf95529544`. Verified all 25 recorded runtime blobs against that commit; runtime and published game content are unchanged. This is a policy lock, not GitHub branch protection. Specific game changes require Joe's explicit approval; the freeze has no automatic expiry.

## 7 November 2026 – README discoverability and play links

Added a descriptive game title, player-focused introduction, features, language navigation and clear play links to the main README. Updated all nine localized introductions with descriptive titles, 25-level/60-second summaries and ChatGPT Sites links; corrected Arabic reading direction. Recorded Joe’s confirmation that itch.io and Sites links work, separately from hosted-byte parity. Preserved archived README snapshots and runtime files.

## 7 November 2026 – branding synchronization records and packaging

Updated current runtime hashes and the 25-file inventory for artwork/favicon changes. Added root favicon.ico to the ZIP contents, required-file checks and workflow triggers. Distinguished historical Sites/itch.io evidence from current unverified branding parity. No gameplay/movie code changed.

## 7 November 2026 – preview-image metadata

Added the supplied complete DIORAMA artwork at assets/images/diorama-preview.jpg (1536 × 1219). Game, ending and investor pages declare Open Graph image/type/dimensions/alt text and Twitter large-image card metadata. GitHub source uses the Vercel origin; the ChatGPT Sites edition uses its own origin for the same image. Existing favicon links are preserved. These tags support link previews; use by the ChatGPT Sites-list thumbnail remains unverified. No gameplay, audio or payment behavior changed.


## 7 November 2026 – DIORAMA favicon

Added a favicon derived directly from the user-supplied robot image, cropping the lettering for small-size legibility. Root favicon.ico includes 16, 32, 48, 64, 128 and 256 pixel entries; assets/icons contains 32, 180, 192 and 512 pixel PNGs. Game, ending and investor pages link the ICO, PNG and Apple touch icon with relative paths and a cache version. No gameplay, audio, movie timing or payment behavior changed. Matching favicon assets and links are prepared for the current ChatGPT Sites project appgprj_6aeed8d514dc8191bf1a39cdc7932e2d; deployment is recorded separately.


## 7 November 2026 – AI continuity reconciliation

Added AGENTS.md, a concise authoritative handoff, machine-readable release state, llms.txt index, file inventory and current audit. Archived superseded handoff/integration narratives and unused screenshot material. Reconciled README, roadmap, maintenance/release/contribution instructions and all nine localized overviews with the completed Sites/GitHub/itch.io work. Clarified the historical level-register ending freeze and old deployment rules. No runtime, level, asset, license or workflow behavior changed; real-device and served-byte verification limits remain explicit.

## Historical ending release – 7 November 2026

The ending matches ChatGPT Sites **Diorama Game, version 7**, source `2ee765eae973b0af8d391491848dc3ba6de8fa53`. Ending file Git blob: `8501ea003692149ed816e96170d377335f02f785`. This section supersedes older ending settings below.

- Music baseline **0.72**; exterior jump gains **0.0165–0.069**; three interior jumps **0.060**.
- Princess help gain **1.6** at **29.05s**, with a brief additional **35% music duck** underneath.
- Score, wind and sampled effects are predecoded and share Web Audio playback. The font/audio/scene warmup gate is retained; blocked automatic audio presents **Tap to play with sound** before the clock starts.
- Dragon dust clears the tile-cap surface, spreads sooner, holds opacity briefly and follows the animated front foot during the stomp.
- The investment CTA opens [the external DIORAMA 2 backing page](https://diorama-game.vercel.app/invest/) in a new tab.
- The sixty-second timeline, camera choreography, cue timestamps, assets and gameplay are unchanged.

All 19 deployed runtime/license/assets files were compared by Git blob hash: only the ending required synchronization. JavaScript parsing and 25-level structural checks passed. Device listening, rendered visual acceptance, Vercel production parity and itch.io package parity require separate verification. No SEO indexing claim is made.


## 7 November 2026 – cinematic preparation and Sites synchronization

Restored the current GitHub runtime to the stale Sites edition, including the .85 score mix, updated footstep/effect balance and movie loader. The ending now waits for complete audio downloads/decoding, fonts and representative shader/render warmup before starting picture and enabled sound at zero. Preparation failures offer retry instead of playing incomplete content. See ENDING_INTEGRATION_NOTES.md. Parser, readiness-state and structural checks passed; WebGL creation failed in the available browser, so visual/audio device QA remains open. Vercel and itch.io production parity is not established.


## Repository-wide authoritative-state reconciliation – 6 November 2026

- Rechecked live GitHub `main` and Vercel production before any edits, with both aligned to `0a1cfe986b4c5b3cc9a227c06730af0d1717aa91` and production `READY`. Historical earlier commits retained without reinterpretation.
- Reconciled the active README, ending integration contract, roadmap, contribution and release instructions, maintenance protocol, nine localized project overviews and AI handoff against the implemented 6 November cinematic. Older 0.60/0.78 soundtrack configurations are now explicitly **historical**, superseded by the current 0.85 baseline.
- Confirmed authoritative **25 levels**; any contrary count in the itch.io listing is outdated publication metadata to correct **later**. Did not change the itch.io listing or downloaded package, and did not invent a second edition.
- Documented existing 0.075–0.230 camera-perspective exterior jump cues, 0.200 interior jumps, 33.55s reaction turn, and both ground-contact dragon dust corrections at 21.62/40.50s. Visual and auditory device acceptance remains open.
- Reconciliation changes are **documentation only**. No `index.html`, `ending/index.html`, `invest/index.html`, soundtrack, SFX, level data, visual choreography or payment configuration was modified. See the new dated audit for evidence and verification limits.

## Dragon impact dust contact correction – 6 November 2026

- Commit `7c9d3ed`: corrected the existing dust puff layer in both dragon floor impacts (21.62s and 40.50s) so its group originates just above tile surface and spreads horizontally, with thin vertical scale instead of airborne sine-wave lift.
- Preserved the separate ground-hugging dust layer, existing impact event times and foot placement. Did not modify music, SFX, camera, character choreography or gameplay.
- Source-only validation; real-browser rendered impact frames still need visual confirmation.

## Ending cinematic three-point refinement – 6 November 2026

- `8371cd9`: raised the soundtrack baseline 0.78 → 0.85 (including decoded-buffer and fallback playback, retaining existing ducks and end fade).
- Added a separate, shallow floor-level dust ring on the original 21.62s dragon landing and 40.50s stomp; kept the existing rising dust effect and contact times unchanged.
- Started the hero's princess-reaction turn at 33.55s rather than 34s so the 34s princess-to-hero editorial cut enters an already moving turn; other shots unchanged.
- Only `ending/index.html` runtime changed; sound effect gains, gameplay, camera framing, other choreography and audio files are untouched. Source-level verification is not real-device visual/audio playback verification.

## Ending jumping SFX perspective increase – 6 November 2026

- Commit `c65d739`: raised the exterior jump gain endpoints from 0.040–0.150 to **0.075–0.230**, retaining the existing continuous far-to-near camera-shot progression and unchanged 300 Hz triangle sound envelope and cue timing.
- Raised three interior jump gains from 0.140 to **0.200**.
- Only `ending/index.html` jump gain values changed. Music, door/dragon effects, camera movement, visuals, levels and timing were untouched. Real-device listening and deployment playback remain unverified.

## Ending cinematic audio balance – 6 November 2026 (follow-up)

- Commit `66c9ef4`: raised ending score base from 0.60 to 0.78, reduced step/impact music ducking from 12%/35% to 8%/18%, increased outdoor jump perspective gain from 0.028–0.115 to 0.040–0.150 and interior jumps from 0.11 to 0.14.
- Lowered door (0.78 → 0.43), wings (0.72 → 0.48), landing (0.95 → 0.55), dragon (0.78 → 0.48), princess (0.58 → 0.43), doom (0.82 → 0.49), stomp (0.65 → 0.43), and boom (0.85 → 0.50).
- Audio-only scope: `ending/index.html` mixer and cue gains; no asset replacements, film timing, camera, gameplay or visual changes. Actual perceived mix still requires device listening.

## Ending cinematic audio rebalance – 6 November 2026

- `0a57ed6`: Adjusted **only** the ending film's audio mix: music base 0.26 → 0.60; footstep ducking 25% → 12%; major-impact ducking 60% → 35%; distant/close jump oscillator gain from 0.068–0.085 to 0.028–0.115 and three interior jumps 0.08 → 0.11.
- Preserved the existing jump cue times, score source file, original music/sound choreography and final 57.5–60-second fade. No changes to game engine, level data, camera, animations, movie loader or backing page.
- GitHub source checks and JavaScript parsing passed; Vercel showed production `READY` for `0a57ed6`. **Perceived audio balance has not been measured/listened to on a real device**; listener approval remains open.

## Repository reconciliation and cinematic startup documentation – 5 November 2026

- Reconciled the 4 November production changes against the README, ending integration notes, roadmap, release procedure and AI handoff. This is a documentation/maintenance synchronization; **no game, cinematic, funding page or audio runtime was modified** by the reconciliation.
- Recorded the movie's game-style, bar-only first-frame loading screen, timeline-zero start, font-readiness gate and same-origin `diorama-ending-scene-ready` signal.
- Documented the DIORAMA 2 funding iframe readiness handshake, its fallback link, the public README ending/sequel callout and the correct Vercel/GitHub commit distinctions.
- Clarified that the level validator runs on pushes/PRs and a **manual GitHub Actions workflow can produce an itch.io ZIP artifact**; it does not itself publish the artifact to itch.io. Hosting Git integration and GitHub Pages status must be checked separately.
- Added a repeatable repository maintenance protocol and updated the AI continuation handoff. Existing technical QA and third-party asset rights gaps remain open; GitHub/Vercel success is **not** end-to-end gameplay verification.

## Ending loading screen and README callout – 4 November 2026

- `2028bb1`: first-frame render gating added to the cinematic; `89c95f0`: funding-page iframe changed from onload exposure to explicit scene-readiness messaging.
- `44ed824`: added a slim white-outline, warm ivory/gold **bar-only** loading overlay to the cinematic, hiding intermediate Three.js frames until fonts and an opening render are ready, then starting the film at 0 seconds.
- `f2db2ba` and `2602eb0`: added and converted cinematic and sequel/support links into a GitHub README callout. GitHub hosts a static preview image and links, **not** an embedded playable Three.js video.
- `11e1e4d` and `23e58f3`: introduced a new-thread handoff, linked it prominently from README, and corrected a stale production-commit claim.
- The user's observation after the first gating patch was that the brown flash became significantly shorter; **disappearance after the subsequent loading-screen change has not been confirmed by a controlled device test**.

This file records **verified repository changes**. Older game-release history is not reconstructed or invented.

## Music credit correction – 4 November 2026

- Added NastelBom alongside HitsLab in the game music credits.
- Identified the ending score as *Hero Heroic Patriotic*, Pixabay track 436876, with its source and separate license in README and third-party notices. Audio files and playback are unchanged.

## Deployed release documentation – 4 November 2026

- Release source `956d01cef6423877bd114936f0fc3e974c503db9` corresponds to Sites version 82, source `da14ef41b3bc54b0841c76a37173414d5b499215`.
- Blocked game-music watchdog recovery during the cinematic; preserved the music preference and prevented gesture-driven forced unmuting.
- Exposed Pause, Sound and Skip ending controls in the embedded cinematic.
- Added regular/bold font preloading and bounded readiness gates for the game startup and DIORAMA 2 page.
- Syntax, focused behavior checks and structural validation passed; live gameplay/audio validation remains outstanding because the test browser could not create a WebGL context.

## Integrated final-level ending – 4 November 2026

- Added the locally bundled 60-second DIORAMA ending cinematic, invoked only after the verified Level 25 completion branch.
- Added isolated ending audio, automatic score start with browser gesture fallback, and a production presentation subsequently updated with player playback controls.
- Added the DIORAMA 2 coming-soon and project-support information page.
- Added an explicit `PLAY AGAIN FROM LEVEL 1` action that preserves completion records and best-move data.
- Preserved existing non-final progression, save behavior, game music restoration, and the parent game render-loop pause during the cinematic.
- Added integration and third-party audio documentation.

## Gameplay and mobile-usability revision batch – 2 November 2026

- Revised Levels 7, 8, 9, 12, 13, 14 and 15 for solvability, clearer cause-and-effect, reduced redundant mechanisms and more readable crown approaches.
- Added Level 25 route-integrity regression coverage for its polarity-switch host tile and one-way data.
- Added visible route-stamp and stamped-gate unlock animation.
- Preserved the portal transition while enlarging its electrical strikes and adding timed disappearance/reappearance pauses and transition audio.
- Added two-finger touch-camera tracking and pedestal movement while retaining pinch zoom.
- Added global assistance for immediate reachable elevated steps on touch screens without enabling jumps or route bypasses.
- Aligned all folding-bridge stems with their actual source-route anchors and added structural validation for future bridge directions.
- Expanded the structural validator with focused contracts for the revised levels and mechanics.
- Merged the verified repository state to `main` at `e8bdb44a609350d0bdcb50729fab0b9e68b43368`.
- The Vercel production alias was intentionally not redeployed as part of this batch.

## Unreleased

- Added contributor roadmap, release procedure and authentic-growth measurement guidance (documentation only).

- Added five linked gameplay screenshots and repository logo to the README.
- Added nine localized project overviews and navigation links.
- Added original-code MIT licensing and separate third-party rights notices.
- Linked bundled Amatic SC fonts and revised the start-screen copy in the game HTML; no gameplay mechanics were intentionally changed.

## Repository documentation changes – October 2026

- Clarified README gameplay positioning, public-build/version distinction and licensing boundaries.
- Added contributor instructions, level-authoring guidance, issue and PR templates.
- Added a read-only structural validator and associated CI workflow for embedded level definitions.

The above entries refer to repository-documentation and tooling work; they do **not** represent new gameplay features, levels, or public game releases.
