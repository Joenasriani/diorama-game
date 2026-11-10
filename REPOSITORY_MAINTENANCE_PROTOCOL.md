# DIORAMA repository maintenance protocol

Current scope and freeze: [AGENTS.md](AGENTS.md). Current state: [single handoff](AI_HANDOFF_DIORAMA.md) and [release state](docs/RELEASE_STATE.json). This procedure does not duplicate dated release state.

> **Status:** Working procedure for future AI threads and maintainers. A scope/reconciliation rule, not standing permission to change gameplay or publish.
> **Read with:** [AI_HANDOFF_DIORAMA.md](AI_HANDOFF_DIORAMA.md), [README.md](README.md), [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md), [ENDING_INTEGRATION_NOTES.md](ENDING_INTEGRATION_NOTES.md), [ROADMAP.md](ROADMAP.md) and [docs/UPGRADE_LEVELS_AND_FIXES.md](docs/archive/UPGRADE_LEVELS_AND_FIXES.md).
> This procedure was introduced during a repository-wide reconciliation on **5 November 2026** and re-applied on **6, 7 and 10 November 2026**. See the [latest reconciliation audit](docs/RECONCILIATION_AUDIT_2026-11-10.md); retain the [5 November audit](docs/archive/RECONCILIATION_AUDIT_2026-11-05.md) as history. Check actual Git state before relying on any dated version fact.

## Authority and scope

1. **Identify the target repository and branch.** Confirm `Joenasriani/diorama-game`, `main`, HEAD SHA, open pull requests and latest production SHA. Do not assume the handoff's dated commit is still the head.
2. **Use the implementation as evidence of what exists.** Current `index.html`, `ending/index.html`, `invest/index.html`, assets, and workflows are implementation sources. The README/roadmap/handoff express positioning, requirements and constraints; treat historical statements as historical.
3. **Protect unrelated work.** Categorize each proposed change as mandatory fix, necessary dependency, documentation reconciliation, optional improvement or untouched protected behavior. Do not introduce optional improvements during a surgical patch.
4. **Do not conflate environments.** GitHub `main`, GitHub Pages, Vercel production, the itch.io published package, the itch.io GitHub Actions ZIP artifact and ChatGPT Sites are **distinct states** until source SHA/asset parity is demonstrated.

## Repository-wide change reconciliation – required for each meaningful change

1. **Inventory:** enumerate tracked paths and responsibilities. Inspect changed source, dependent assets, documentation, tests, workflows, release records, translations and public links.
2. **Trace impact:** map the modification to user experience, states, assets, input, audio, camera, persistence, error handling, deployment, documentation and legal notices. Mark unaffected files **KEEP**, not “update” by default.
3. **Classify:** `UPDATE` factual drift; `AMEND` ambiguity; `ADD` missing contract/test/reference; `REMOVE` demonstrably obsolete duplicate without erasing history; `VERIFY` unsupported claim; `KEEP` correct or protected material.
4. **Preserve decisions:** authoritative **25-level** game (the live itch.io listing now also states 25), route semantics, portal choreography, legal tap assistance, one/two-finger camera behaviors, local saves, 60-second ending story/camera/audio, minimal movie loading **bar only**, castle-muted funding backdrop `#5b777d`, actual Three.js sequel header and optional non-equity tiers remain unchanged unless specifically requested.
5. **Implement narrow changes.** Never replace the whole >1MB bundled HTML because a metadata or README sentence needs correction. Confirm blob SHA when using GitHub. Read large files with `fetch_blob` if `fetch_file` returns empty source.
6. **Verify in layers:** (a) source/diff and link integrity; (b) parser/static checks; (c) applicable validator and CI; (d) actual browser/device user journey; (e) deployment/commit parity. State each outcome separately. CI and `READY` are not visual, audible, solvability or transaction proofs.
7. **Reconcile records in sequence:** if appropriate, update relevant integration notes, release procedure, `CHANGELOG.md`, `ROADMAP.md`, `README.md`, then the AI handoff **last**, once the final implemented state is known.
8. **Verify synchronization:** re-read resulting GitHub files, inspect `main` HEAD, latest CI and intended Vercel deployment. No merge is necessary when changes have already landed directly on `main`.
9. **Report a clear change register:** files changed/kept, reasons, test/CI evidence, exact commits, deployment state, unresolved limitations and owner approval requirements.

## Targeted QA matrix

| Area | Verify when affected |
| --- | --- |
| Gameplay | Complete affected route; alt mechanism states; legal path/tier transitions; collision; level select; state persistence; 25-level structural validator |
| Touch and camera | Portrait and landscape; one-finger orbit; two-finger track/pedestal; pinch; overlapping elevated tap targets |
| Cinematic | Level 25 trigger; game render/music isolation; opening loader masks intermediate geometry; real frame readiness; playback from 0; full 60 seconds; score/SFX; Pause, Sound, Skip, Replay |
| Funding page | `view=pitch-header` scene, symmetry seam, blue background, initial iframe hidden until validated ready message, fallback link, CTA/tier clarity, portrait and landscape |
| Packaging | All runtime paths/audio/fonts/licenses included, ZIP integrity and source SHA, manual device check, mismatch with public itch.io flagged |
| README/documentation | No outdated “current SHA” assertions, no implied GIF/inline Three.js playback in GitHub, no false claims of checkout/equity or tested behavior |
| Rights | Three.js MIT notices, Amatic SC OFL notices, third-party Pixabay music/audio independent licensing and public redistribution boundary |

## Automation truth

- `.github/workflows/validate-levels.yml` runs structural level checks on PRs and `main` pushes.
- `.github/workflows/itchio-dist.yml` can build and upload a ZIP **to GitHub Actions artifacts**, not to itch.io; artifact freshness and actual distribution still require independent verification.
- GitHub Pages and Vercel deployments are separate automated hosting activities. Check their individual statuses, URLs and commit source; a successful site build does not prove the game was played.
- Never perform a paid transaction, silently publish a new platform package, change PayPal account configuration, or claim media redistribution rights merely to complete this audit.

## Open limitations to carry forward

- No verified full human playthrough of all 25 levels; Level 16 onward remains review work.
- No captured cross-device proof that the initial brown-frame flash is fully eliminated after the new loader.
- No full game-completion/ending/replay/audio regression matrix on real devices.
- No independent live PayPal checkout/fulfillment test.
- Runtime/ZIP checksum parity and itch.io upload selection are recorded; live served-byte parity across hosts remains open.
- Third-party asset provenance and standalone distribution rights still require confirmation.

**Definition of done for a reconciliation:** affected material matches verified code and intended decisions, every discrepancy is fixed or explicitly logged as unresolved, exact branch/commit and deployment are checked, and evidence is reported without conflating static validation with actual gameplay.


## Current guidance and historical evidence

Read AGENTS.md, AI_HANDOFF_DIORAMA.md and docs/RELEASE_STATE.json before old audit reports. Archive superseded instruction-heavy narratives rather than stacking contradictory current sections. Dated audits and CHANGELOG entries retain historical facts, not active orders. Inventory unused source/packaging material before removing it; do not delete files just because their purpose is uncertain. The retained backup branch has commits outside `main`; do not merge or delete it incidentally.

