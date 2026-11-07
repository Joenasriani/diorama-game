# DIORAMA – AI contributor entry point

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
