# DIORAMA ending integration contract

Current behavior only. Continuation decisions: [single handoff](AI_HANDOFF_DIORAMA.md). Exact release evidence: [release state](docs/RELEASE_STATE.json). Superseded narratives are in [the archive](docs/archive/README.md).

## Trigger, isolation and playback

The verified final-level branch records the Level 25 win and completion feedback before the approximately 1.25-second delay. `showEndPage()` pauses background music/recovery and opens `ending/index.html` with the music preference. The main render loop is paused while ending mode is active. Earlier levels retain normal progression.

The authored film lasts 60 seconds. Preserve cue timestamps, camera edits, actions, final title/buttons and the original score asset. Embedded mode exposes Pause/Play, Sound, Skip and Replay; editorial scrub/chapter controls stay standalone-only. Skip shows the final state; replay uses a parent message accepted only from the ending iframe window, unloads the film and returns to Level 1 without deleting completion/best-move records.

## Readiness and audio

Before revealing the movie, download/decode score, wind and all eight sampled effects, await fonts, compile/render scene states 0, 18.3, 22, 30, 40.5, 49 and 60 behind the slim blue loading overlay, restore time zero and present frames. Fetch and shader warmup have 45-second limits. Failed preparation shows retry rather than playing incomplete content. If enabled audio cannot run automatically, show Tap to play with sound before starting. Muted preference remains muted.

Music, sampled effects and wind share Web Audio playback. Music baseline .72; step/impact ducks 8%/18%; end fade 57.5–60s. Exterior jumps .018–.080; three interior jumps .070. Princess help gain 1.6 at 29.05s; music additionally ducks 35% around 28.85–31.7s. Dragon movement/doom .62, stomp .60 and impact boom .60 at their existing cue timestamps. Exactly 44 jump cues follow the shared route takeoffs, with no extra cue at final landing. These gains are not real-device loudness certification.

Dust contacts at 21.62s and 40.50s sit above the .07-high tile cap, expand near the ground and hold opacity briefly; stomp origin is the front foot's current world position. Hero reaction begins at 33.55s. Finale support CTA is an anchor to https://diorama-game.vercel.app/invest/ with target `_blank` and `noopener noreferrer`.

## Funding header

`?view=pitch-header` renders a static finished-castle view, mirrored for symmetry on muted blue #5b777d. It does not prepare/play the film audio. The investor page keeps the iframe hidden until a same-origin `diorama-ending-scene-ready` message from that iframe window; a 12-second unresolved-readiness fallback links to the movie. Do not replace this with onload exposure.

## Validation boundary

The ending blob is `833026a59c28ffe7d32f0a3130e110fcae5b1251` in the accepted release. Exactly 44 takeoff cues, tile-shadow geometry, syntax and readiness contracts passed source checks during release work. Joe accepted the visual/audio preview. Sites v16 source parity and the 25-file itch.io package are recorded in [release state](docs/RELEASE_STATE.json). Public upload selection and latest devlog were observed on 10 November. Live served-byte parity and full real-device playback/regression remain open; the agent browser cannot create WebGL. Do not treat publication as a full playthrough.
