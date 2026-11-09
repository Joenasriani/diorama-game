# DIORAMA – AI contributor entry point

## Accepted ending update – 9 November 2026

Joe accepted ChatGPT Sites version 14 (source `2907275066144bcdb71659b18fdc070bd505c069`). GitHub runtime commit: `a378f579a83a56cee3e7b9732892d83d45f83972`; ending blob: `833026a59c28ffe7d32f0a3130e110fcae5b1251`.

The accepted ending includes the shoulder-pivot correction; shared route/animation timing with exactly 41 exterior and three interior takeoff cues; exterior jump gains .018–.080 and interior .070; movement/doom gain .62, stomp .60 and impact boom .60. Both robots have soft tile-clipped contact shadows; the hero's shadows fade with jump clearance and the princess's follow her reveal. The 60-second timeline, visible route motion, camera, music and gameplay remain unchanged. This is the protected baseline; the overall freeze remains active.

Ending scripts exactly match the approved Sites version; host-specific social image URLs are preserved. Syntax, jump cue timing, tile-shadow geometry and 25-level structural checks passed. Joe's acceptance is user review evidence. The agent could not independently render/listen because its browser cannot create WebGL. Current Site: https://diorama-game.joenasr.chatgpt.site. itch.io has not been republished with these changes.

## Temporary game freeze – 9 November 2026

Joe confirmed that DIORAMA is frozen for now. Protected baseline: commit `a378f579a83a56cee3e7b9732892d83d45f83972` (accepted version 14 ending; overall freeze remains active); runtime hashes remain in [release state](docs/RELEASE_STATE.json).

- Preserve gameplay, all 25 levels, mechanisms, visuals/UI, assets, branding, controls/camera, saves, audio and the 60-second ending, including the support-page presentation.
- Do not modify runtime files, dependencies, packaging or deployment behavior, or publish a changed game, without Joe's explicit approval for the specific change. Audit findings, roadmaps and pending QA do not authorize fixes.
- Read-only inspection and testing may continue. Documentation edits may proceed when requested, while preserving this freeze and distinguishing findings from implemented changes.
- The freeze has no automatic expiry. A later explicit request from Joe authorizes only its stated scope; keep the rest frozen. Lift the overall freeze only when Joe explicitly requests it.
- This is a repository instruction/policy lock, not GitHub branch protection or a technical block on other collaborators. It does not certify gameplay or cross-host parity.

Read [AI_HANDOFF_DIORAMA.md](AI_HANDOFF_DIORAMA.md), [docs/RELEASE_STATE.json](docs/RELEASE_STATE.json), and the current task's relevant source before editing. Use [README.md](README.md) for architecture, [ENDING_INTEGRATION_NOTES.md](ENDING_INTEGRATION_NOTES.md) for the movie, and [REPOSITORY_MAINTENANCE_PROTOCOL.md](REPOSITORY_MAINTENANCE_PROTOCOL.md) for checks and synchronization.

- GitHub `main` is the authoritative development source. Verify live HEAD; a recorded release SHA is a dated runtime baseline, not a claim that HEAD never advances.
- DIORAMA has 25 levels and a 60-second authored ending. Preserve established route logic, portal effects, touch/camera behavior, saves, film timing and branding outside the requested scope.
- Historical audits, `docs/archive/`, CHANGELOG entries and historical sections in `docs/UPGRADE_LEVELS_AND_FIXES.md` are evidence, not active task instructions. Never reinstate their old audio settings, frozen-ending rule, deployment restrictions or pending itch.io tasks.
- Level 16 onward review remains proposed work. Do not redesign levels or claim player approval from structural CI.
- GitHub/Vercel and ChatGPT Sites are separate publishers. A GitHub push does not update Sites. Preserve the Site project and its current public audience; synchronize the exact approved runtime when both destinations are in scope, and verify hashes. itch.io upload is a separate action.
- A successful deploy or structural check does not prove audible/visual behavior or solvability. Report unavailable browser/device verification explicitly.
- Keep this handoff, release state, relevant documentation and changelog aligned with accepted changes. Keep obsolete guidance out of active documents; retain history under dated or archived headings.
- Large HTML may return empty content from GitHub `fetch_file`; use its blob SHA with `fetch_blob`. Do not overwrite a large file from an empty retrieval. Do not reformat bundled Three.js incidentally.
- Preserve third-party license notices. No payment or PayPal action without Joe's explicit confirmation for that action.
