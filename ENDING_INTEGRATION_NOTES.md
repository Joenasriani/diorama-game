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

## Current cinematic readiness gate (4 November 2026)

The standalone/embedded `ending/index.html` has a dedicated **bar-only** loading overlay. It deliberately resembles the main game's narrow, rounded white-outlined loading bar with warm ivory/gold fill, against movie blue. The title, percentage, buttons, and extra loading copy are not shown. The movie sets the timeline to **0 seconds** and renders an opening Three.js frame while the overlay is present. The loader remains until document-font readiness and a subsequent animation-frame callback, at which point `diorama-scene-ready` is set, the overlay is hidden, and the movie clock starts.

In `?view=pitch-header` mode, used only for the sequel support page, the movie seeks to its finished castle view, retains muted castle-blue `#5b777d` and hides the animated loading bar. The header renders its mirrored canvas before signaling readiness. The parent `invest/index.html` keeps the iframe hidden until it receives `{type:'diorama-ending-scene-ready'}` from the expected iframe window with matching same-origin; it offers a link to the movie if readiness is not received within 12 seconds. Do not replace the event with an iframe `onload` visibility change. The same type of readiness message is emitted in normal embedded playback, but the game parent does not currently depend on that message.

**Timing/proof boundary:** This is source-level implementation intent, not measured proof that the flash is absent on every device. Test the initial two seconds under cold cache and WebGL failure, and confirm that the movie clock does not advance during loading, the title/buttons and music stay synchronized, the game renderer remains paused, and no loader remains indefinitely.

## Validation performed

- Game and cinematic JavaScript parse successfully.
- Every ending audio reference resolves to a bundled file.
- The score asset runs through 60 seconds.
- Restart messaging is accepted only from the ending iframe's own window.

## Release verification boundary

Sites version 82 uses source `da14ef41b3bc54b0841c76a37173414d5b499215`; the three HTML pages match GitHub release `956d01cef6423877bd114936f0fc3e974c503db9`. Focused checks covered watchdog suppression, preference handling and skip-to-final-state behavior. Live cinematic playback, audio and restart still require browser/device verification; the test browser failed to create a WebGL context.
