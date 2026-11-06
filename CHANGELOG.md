# Changelog

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
