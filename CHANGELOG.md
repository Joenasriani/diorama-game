# Changelog

This file records **verified repository changes**. Older game-release history is not reconstructed or invented.

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
