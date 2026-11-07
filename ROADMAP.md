# DIORAMA roadmap

## Current ending release – 7 November 2026

The ending matches ChatGPT Sites **Diorama Game, version 7**, source `2ee765eae973b0af8d391491848dc3ba6de8fa53`. Ending file Git blob: `8501ea003692149ed816e96170d377335f02f785`. This section supersedes older ending settings below.

- Music baseline **0.72**; exterior jump gains **0.0165–0.069**; three interior jumps **0.060**.
- Princess help gain **1.6** at **29.05s**, with a brief additional **35% music duck** underneath.
- Score, wind and sampled effects are predecoded and share Web Audio playback. The font/audio/scene warmup gate is retained; blocked automatic audio presents **Tap to play with sound** before the clock starts.
- Dragon dust clears the tile-cap surface, spreads sooner, holds opacity briefly and follows the animated front foot during the stomp.
- The investment CTA opens [the external DIORAMA 2 backing page](https://diorama-game.vercel.app/invest/) in a new tab.
- The sixty-second timeline, camera choreography, cue timestamps, assets and gameplay are unchanged.

All 19 deployed runtime/license/assets files were compared by Git blob hash: only the ending required synchronization. JavaScript parsing and 25-level structural checks passed. Device listening, rendered visual acceptance, Vercel production parity and itch.io package parity require separate verification. No SEO indexing claim is made.


This is a **proposal and prioritization guide**, not a promise of release dates. **DIORAMA has 25 levels.** Any different level count advertised on the itch.io listing is outdated publication metadata and must be corrected separately; do not infer or create a second game edition.

## Track A – Maintain the existing game (priority)

- Investigate reproducible bugs using the issue templates.
- Maintain 25-level compatibility, existing movement semantics, camera, sound, and saves.
- Continue the one-level-at-a-time audit from Level 16 onward, with player preview and approval before advancing.
- Extend the regression checklist from real defects before changing any mechanics. Current guards cover revised route contracts, elevated touch targets, crown stacking and folding-bridge stem alignment.
- Document browser and touch-device coverage using observed results, not assumptions.

Completed in the 2 November 2026 revision batch: focused revisions for Levels 7–15 where selected, Level 25 route-integrity protection, two-finger touch-camera translation, global upward-step touch assistance and route-aligned folding-bridge stems. Completed on 4 November 2026: the integrated 60-second ending, sequel information page, audio isolation/preference fixes, player playback controls, startup font-loading gates, bar-only movie loader, explicit rendered-scene readiness signal for the funding-page iframe, and GitHub README cinematic/backing callout. On 5 November the relevant documentation was reconciled. Remaining real-device verification is tracked in README.md and AI_HANDOFF_DIORAMA.md.

## Historical completed cinematic refinements – 6 November 2026

Following the earlier 4 November integration, the historical 6 November `ending/index.html` implemented a music baseline of **0.85**, reduced ducking (8% steps, 18% major impacts), exterior jump SFX gain **0.075–0.230** from far to close camera shots, and three interior cues at **0.200**. The hero's princess-reaction animation starts at 33.55s; both dragon-contact dust layers are grounded at tile height at 21.62s and 40.50s. The 60-second timeline, movie loader, game levels, game music, funding page and original sound assets remain protected. **These source-level implementations do not imply approved listening or visual playback.** See `CHANGELOG.md`, `ENDING_INTEGRATION_NOTES.md` and `AI_HANDOFF_DIORAMA.md`.

## Verification debt – release priority

- Verify the **new cinematic loader on actual cold-cache desktop and mobile devices**: no brown intermediate geometry, indeterminate bar visible only while waiting, no premature start, no stuck loader, and unchanged 60-second pacing.
- Verify final-level transition, standalone and embedded playback, audio state, Pause/Play, Skip, Replay, and intact local progress.
- Verify the funding-page Three.js mirrored castle, centered framing, flat castle-blue `#5b777d`, supporter tiers, PayPal link behavior and the iframe ready/error fallback.
- **Deferred external publishing task:** correct itch.io listing to **25 levels** and separately verify its distributed package against current GitHub/Vercel. The GitHub Actions ZIP packager does **not** publish to itch.io. Do not edit itch.io as part of routine GitHub documentation reconciliation.
- Resolve third-party font/audio provenance and separate redistribution rights before commercial redistribution.

These items are **open until evidenced**, even if structural CI and Vercel report success.

## Track B – Make contributions easier (priority)

- Build examples of well-scoped level proposals with an intended solution and state diagram.
- Extend the existing **structural** validation cautiously, backed by negative test fixtures.
- Design a mechanism-aware solvability test harness; no solver is currently claimed.
- Evaluate extracting editable level source while preserving the self-contained production HTML.

## Track C – Optional expansion (proposal only)

- Additional manually validated levels built from existing mechanisms.
- New bridges, gates or moving geometry only after compatibility and regression checks.
- Community level packs or an editor **only if** a versioned import format, licensing, security and validation process exist.
- Accessibility and touch improvements grounded in reproduced user needs.

## Definition of ready

A proposal has a defined user/developer benefit, affected code/levels, an intended solution or reproduction, and a test plan. The maintainer approves implementation scope before runtime changes.

## Definition of done

A change is reviewed; existing levels still work; structural tests pass; affected levels are manually played to completion; touch interactions and changed mechanism states are verified; documentation and asset rights are updated where necessary. **CI structural pass alone does not satisfy this definition.**

## Explicitly not implemented

An independent level-loader API, unique-solution solver, interactive editor, community hosting backend, and automatic publishing pipeline have not been added. These require separate approval, architecture work and runtime regression testing.
