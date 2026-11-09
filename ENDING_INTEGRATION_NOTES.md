# DIORAMA ending integration – current contract

## Accepted ending update – 9 November 2026

Joe accepted ChatGPT Sites version 14 (source `2907275066144bcdb71659b18fdc070bd505c069`). GitHub runtime commit: `a378f579a83a56cee3e7b9732892d83d45f83972`; ending blob: `833026a59c28ffe7d32f0a3130e110fcae5b1251`.

The accepted ending includes the shoulder-pivot correction; shared route/animation timing with exactly 41 exterior and three interior takeoff cues; exterior jump gains .018–.080 and interior .070; movement/doom gain .62, stomp .60 and impact boom .60. Both robots have soft tile-clipped contact shadows; the hero's shadows fade with jump clearance and the princess's follow her reveal. The 60-second timeline, visible route motion, camera, music and gameplay remain unchanged. This is the protected baseline; the overall freeze remains active.

Ending scripts exactly match the approved Sites version; host-specific social image URLs are preserved. Syntax, jump cue timing, tile-shadow geometry and 25-level structural checks passed. Joe's acceptance is user review evidence. The agent could not independently render/listen because its browser cannot create WebGL. Current Site: https://diorama-game.joenasr.chatgpt.site. itch.io has not been republished with these changes.

Updated 9 November 2026. Runtime baseline and exact hashes: [release state](docs/RELEASE_STATE.json). Current mix and project decisions: [AI handoff](AI_HANDOFF_DIORAMA.md). Older integration narratives are [archived](docs/archive/ENDING_INTEGRATION_NOTES_before_2026-11-07_audit.md).

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

Source/syntax, cue contracts, readiness ordering, dust clearance and structural checks passed. The earlier runtime at `2301683` matched Sites version 7, and its ZIP checksum matched the Actions package. Later artwork/favicon metadata changes preserve movie code but change the HTML hashes; current cross-host branding parity is unverified. itch.io upload selection and public description/devlog were observed. Served-byte parity, audible/visual mobile acceptance, cold-cache flash elimination, full playthrough and complete end-to-end controls remain unverified. The available browser could not create WebGL.
