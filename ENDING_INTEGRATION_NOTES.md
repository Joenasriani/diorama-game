# DIORAMA Ending Integration

## Trigger

The ending cinematic is invoked only from the existing verified final-level branch in `checkGoal()`:

1. The final goal cell is reached.
2. The level win is recorded.
3. Existing completion SFX, success bounce and particles play.
4. After the existing 1.25-second completion delay, `showEndPage()` loads the bundled ending.

Earlier levels continue to load the next level normally.

## Runtime isolation

- The ending is bundled locally in `ending/`; it has no hosting dependency.
- Ending mode is set before pausing game music. Direct music playback and watchdog recovery both reject playback while `game-ended` is active; pending recovery is cleared.
- The game passes its music preference to the ending. Tapping does not force a muted ending on.
- Pause/Play, Sound and Skip ending remain available; preview chapter shortcuts and the scrubber remain hidden in embedded mode.
- The underlying game animation/render loop pauses while `body.game-ended` is active, avoiding two simultaneous Three.js render loads on mobile.
- Restart in the cinematic posts a source-validated message to the parent game.
- The parent unloads the cinematic, loads Level 1 and restarts the game music.

## Preserved behavior

- Level progression and save records are unchanged.
- The final win is still recorded before the cinematic begins.
- Existing non-final level transitions are unchanged.
- The standalone cinematic remains independently runnable from `ending/index.html`.

## Current cinematic readiness gate (7 November 2026)

The standalone/embedded ending retains its bar-only blue loading overlay, now showing preparation progress. Normal playback downloads and decodes the score, wind and all eight authored SFX before revealing the film, including when sound is muted. SFX use complete local blob URLs. Fonts resolve and seven representative scene states compile/render behind the overlay to warm geometry, materials and shadow passes. The opening frame is restored and presented before the overlay is removed; only then do the clock and enabled audio start together at zero. Preparation failure does not bypass the gate; a retry control is shown. Audio downloads and shader compilation have 45-second limits. Browser autoplay restrictions still require a player gesture on some devices.

In `?view=pitch-header` mode, used only for the sequel support page, the movie seeks to its finished castle view, retains muted castle-blue `#5b777d` and hides the animated loading bar. The header renders its mirrored canvas before signaling readiness. The parent `invest/index.html` keeps the iframe hidden until it receives `{type:'diorama-ending-scene-ready'}` from the expected iframe window with matching same-origin; it offers a link to the movie if readiness is not received within 12 seconds. Do not replace the event with an iframe `onload` visibility change. The same type of readiness message is emitted in normal embedded playback, but the game parent does not currently depend on that message.

**Timing/proof boundary:** This is source-level implementation intent, not measured proof that the flash is absent on every device. Test the initial two seconds under cold cache and WebGL failure, and confirm that the movie clock does not advance during loading, the title/buttons and music stay synchronized, the game renderer remains paused, and no loader remains indefinitely.

## Latest cinematic sound and impact refinements (6 November 2026)

The active ending mix **supersedes** the initial 60% audio configuration described in historical commits. The current source (`ending/index.html` at audit-start blob `d4534c76ead499a5fe70f08143826d9853bdd77a`) sets the score baseline to **0.85**, with **8% step** and **18% major-impact** ducking, plus the original 57.5–60-second end fade. The same gain is used for decoded Web Audio playback and the HTML audio fallback. The 42 exterior step/jump cues increase smoothly from **0.075 (distant shot)** to **0.230 (close shot)** using the established shot-timing interpolation; the three interior cues use **0.200**. Sound assets and event timings remain unchanged. These are mixer levels, not independent sound-pressure/loudness measurements.

The hero's reaction to the princess begins at **33.55 seconds**, rather than 34 seconds, ahead of the editorial shot change. Dragon impact dust at **21.62** and **40.50 seconds** now keeps both dust layers near the tile plane, spreading horizontally from foot-contact points. The correction followed earlier dust and reaction changes; see `CHANGELOG.md` for the historical commits.

**Scope and verification:** These are existing source-verified changes, not new modifications in this reconciliation. Audio listening, the reaction cut and floor-impact visuals still need direct mobile and desktop playback review. Preserve the original sixty-second movie timeline, authored shot edits, music track and pause/replay behavior unless an explicit new request warrants changes.

## Validation performed

- Game and cinematic JavaScript parse successfully.
- Every ending audio reference resolves to a bundled file.
- The score asset runs through 60 seconds.
- Restart messaging is accepted only from the ending iframe's own window.

## Release verification boundary

Sites version 82 uses source `da14ef41b3bc54b0841c76a37173414d5b499215`; the three HTML pages match GitHub release `956d01cef6423877bd114936f0fc3e974c503db9`. Focused checks covered watchdog suppression, preference handling and skip-to-final-state behavior. Live cinematic playback, audio and restart still require browser/device verification; the test browser failed to create a WebGL context.

## Sites reconciliation (7 November 2026)

Sites source d0d70a5986b0e6d95a995884aa89876ecb553408 was behind GitHub: game, ending, investor page and integration notes differed. All bundled audio/font/license assets matched. Restored GitHub runtime pages, preserving the current .85 score mix, step perspective, effects ducking, reaction and dust refinements. Added the full preparation gate described above to the ending. Parser checks and focused readiness tests passed; the 25-level structural validator passed. The available browser cannot create a WebGL context, so audible playback, first-frame appearance, full completion and replay remain unverified on real devices. No Vercel or itch.io deployment parity is claimed.
