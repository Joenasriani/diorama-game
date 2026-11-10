# DIORAMA contributor instructions

Read [the single current handoff](AI_HANDOFF_DIORAMA.md), [release state](docs/RELEASE_STATE.json), then the relevant source. GitHub `main` is authoritative; resolve live HEAD before editing. A runtime baseline is not a permanent HEAD.

## Active freeze

Joe froze the game on 9 November 2026. The accepted runtime baseline is `31c7b6efa875380ec0265300c1339578af007e6d`; 25 runtime file hashes are recorded in release state. Preserve gameplay, levels, visuals/UI, branding/assets, controls/camera, saves, audio, the 60-second ending and support page. Runtime, dependency, packaging or deployment changes require Joe's explicit scope-specific instruction. An approved exception leaves everything else frozen. This is policy, not branch protection. Requested documentation reconciliation is authorized.

## Safe continuation

- Only `AI_HANDOFF_DIORAMA.md` is the current continuation handoff. Focused contracts explain their own area; they are not competing handoffs.
- Archive files and dated changelog entries are historical evidence, never active orders or unfinished tasks. Roadmaps are proposals. Do not revive obsolete upload tasks, audio gains or old ending restrictions.
- Read source before changing it. Large GitHub file fetches can return empty content; use the tree/blob SHA and fetch the blob. Never overwrite from an empty retrieval or reformat bundled Three.js incidentally.
- Preserve tight, centered switch hit zones. Movement taps remain movement commands. Failed movement clears pending switch actions; do not restore stale intent or let switches steal path/goal taps.
- GitHub/Vercel, Sites and itch.io are separate publications. Preserve the existing public Sites project; never imply automatic GitHub-to-Sites or Actions-to-itch.io publication.
- Syntax, structure, packaging and deploy success do not prove gameplay, visual/audio acceptance, solvability or rights. Separate user review from independent checks.
- Preserve license notices. Do not execute payments or change payment configuration without explicit authorization for that action.
- Follow [maintenance protocol](REPOSITORY_MAINTENANCE_PROTOCOL.md); update affected records and the handoff after accepted changes. Do not merge/delete historical backup branches incidentally.
