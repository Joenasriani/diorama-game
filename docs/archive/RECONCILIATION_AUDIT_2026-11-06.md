> HISTORICAL RECORD: not active instructions. Current state: [AI handoff](../../AI_HANDOFF_DIORAMA.md) and [release state](../RELEASE_STATE.json).

> HISTORICAL AUDIT – not current implementation guidance. See [7 November audit](RECONCILIATION_AUDIT_2026-11-07.md), [current handoff](../../AI_HANDOFF_DIORAMA.md), and [release state](../RELEASE_STATE.json).

# DIORAMA – Repository-Wide Authoritative-State Reconciliation

**Audit date:** 6 November 2026  
**Repository:** https://github.com/Joenasriani/diorama-game  
**Branch:** `main`  
**Scope:** All 59 tracked files inventoried at audit time, with detailed current-state checks on the three runtime HTML pages, nine localized overview files, source and audio references, release workflows, current-handoff/README/protocol documents, release and contributor guidance.  
**Authority order:** actual checked-in runtime + GitHub/Vercel deployment evidence for implementation; user's explicit 25-level decision for product scope; dated approvals/recorded decisions; historical logs for historical facts only.

## Audited baseline

- Before documentation changes, `main` and Vercel production both matched commit **`0a1cfe986b4c5b3cc9a227c06730af0d1717aa91`** and Vercel reported `READY`.
- Source Git blob hashes on that baseline:
  - `index.html`: `dc13b37e2578bf8965b827a25c994e1d2ab2a038`
  - `ending/index.html`: `d4534c76ead499a5fe70f08143826d9853bdd77a`
  - `invest/index.html`: `11102c8ec371cd8a09e9552e4b910980e7249771`
- The existing game contains **25 levels**. The maintainer explicitly confirmed **25 is definitive**, and requested that outdated itch.io listing information be corrected later. No external itch.io changes were made or authorized in this audit.
- Open pull requests: **zero** at initial check. GitHub level-validation and GitHub Pages runs had reported `success` on the baseline.

## Material reconciliations

| Classification | Finding | Resolution |
| --- | --- | --- |
| UPDATE | The AI handoff still identified the first 6 November score mix (0.60) as the latest revision | Added a prominent **current verified implementation** section documenting the most recent 0.85 mix; relabeled older audio and deployment sections **historical/superseded**, retained commit trail |
| UPDATE | Public README and integration notes lacked the latest cinematic refinements | Documented 0.85 score, 8%/18% ducks, 0.075-to-0.230 camera-perspective outdoor jump gain, 0.200 indoor jump gain, 33.55s reaction turn, grounded dust at 21.62s and 40.50s |
| UPDATE | Roadmap did not distinguish recently completed cinematic work from outstanding audio and visual QA | Added completed 6 November film refinements and kept real-device playback acceptance open |
| AMEND | Prior docs treated the itch.io count discrepancy as evidence of another published edition | Clarified **25 is authoritative**, different itch.io count is outdated external publication metadata, with its correction deferred |
| AMEND | Contributor and release instructions allowed inference of an alternate, larger active build | Removed obsolete active alternate-edition assumptions; preserve 25-level release requirements |
| AMEND | Nine translated project overview files repeated the different-edition wording | Corrected the count explanation in Arabic, German, Spanish, French, Japanese, Korean, Brazilian Portuguese, Simplified Chinese and Traditional Chinese; preserved remaining translations |
| AMEND | Maintenance protocol did not explicitly distinguish authoritative 25-level game from stale external metadata | Updated the protected game-count rule and deferred any itch.io edits |
| KEEP | Historic November 4–5 commit notes and per-level approval history | Retained as historical, not current operation instructions |
| KEEP | Game, cinematic, funding-page sources, all audio and visual assets, existing music/legal notices and 25-level definitions | No changes made to runtime or assets |
| VERIFY | Whether the final render/mix/impact visuals satisfy actual device expectations | Retained as unverified; not inferred from Vercel or syntax checks |

## Current source facts (6 November baseline)

The cinematic remains 60 seconds, with authored shots, loading screen and existing soundtrack. Source-level mixer settings are baseline **0.85**, step ducking **8%**, major-impact ducking **18%**, end fade **57.5–60s**, outdoor step/jump gain **0.075–0.230** in the established perspective ramp, and interior jumps **0.200**. Existing SFX sample gains: door 0.43, wings 0.48, landing 0.55, dragon 0.48, princess 0.43, doom 0.49, stomp 0.43, boom 0.50.

The princess reaction starts at 33.55 seconds, and the dragon contact-dust layers at 21.62/40.50 seconds stay close to tile height. These are **source verifications**, not confirmed recorded playback or independent subjective approval.

## Checks and limitations

- Re-read all three authoritative HTML source blobs; parsed **2 game**, **3 cinematic** and **2 funding-page** inline JavaScript blocks without syntax errors.
- Checked relative asset references in the runtime HTML against the tracked asset structure; no missing literal asset path was observed.
- Checked relative Markdown references in the eight principal active documents; **zero broken local links** detected in that subset.
- Inspected the GitHub recursive repository tree (59 tracked files), active guides and maintenance instructions, all nine translated overviews, both GitHub workflows and license notice boundaries. No changes were justified to unrelated runtime, binary assets, source license, music submission guide, gameplay level-authoring instructions or historical per-level register.
- GitHub `validate-levels.yml` is a structural level check. `itchio-dist.yml` can generate a GitHub Actions ZIP artifact, not publish a new itch.io package.
- During the reconciliation, `main` and Vercel production both reported **`a3d4a282056559f4f8e490894ef8d2f78d0a651b`** `READY`; CI for that commit reported `success`. Subsequent documentation commits are expected and require **fresh closing checks**. Do not mistake this mid-audit snapshot for final HEAD.

## Still open

1. Real-device playback: first-frame loader, timed cinematic, audio balance, jumping perspective and dust contact, reaction cut on desktop/portrait.
2. Full player end-to-end path: Level 25 win -> film -> audio / Pause / Skip -> replay / DIORAMA 2 link, saved progress retained.
3. Full 25-level manual playthrough, continuing the level-quality audit from Level 16 onward only on explicit approval.
4. External itch.io listing level-count correction to **25**, deferred at the owner's instruction; actual published package parity and media redistribution rights separately unverified.
5. PayPal checkout and supporter/reward fulfillment, sound playback restrictions, WebGL failure path and some asset provenance remain unverified.

## Future AI continuity

Start with [AI_HANDOFF_DIORAMA.md](../../AI_HANDOFF_DIORAMA.md) and [REPOSITORY_MAINTENANCE_PROTOCOL.md](../../REPOSITORY_MAINTENANCE_PROTOCOL.md), then inspect current GitHub HEAD and live Vercel deployment. Treat the handoff's top **Current verified implementation** section as the latest source snapshot. Older 0.60/0.78 score notes and historical player-approval wording must not be promoted into current instructions. Reconcile only justified dependencies and never infer successful browser/audio testing from CI or Vercel READY.

**Definition of done for this documentation audit:** Active documentation is aligned to the verified source snapshot, historical evidence is retained, runtime/source files stay untouched, and the final GitHub/Vercel synchronization check is reported with remaining real-world verification boundaries.

