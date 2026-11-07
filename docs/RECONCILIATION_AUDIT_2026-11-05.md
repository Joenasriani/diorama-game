> HISTORICAL AUDIT – not current implementation guidance. See [7 November audit](RECONCILIATION_AUDIT_2026-11-07.md), [current handoff](../AI_HANDOFF_DIORAMA.md), and [release state](RELEASE_STATE.json).

# DIORAMA – Repository-Wide Reconciliation Audit

**Audit date:** 5 November 2026  
**Scope:** `Joenasriani/diorama-game`, `main`; tracked source, assets, packaging workflows, documentation, nine localized overviews, deployment and outstanding verification.  
**Change policy:** Documentation and project-management reconciliation only. No gameplay, movie rendering, audio, payment configuration or production app code altered by this audit.

## Baseline and inventory

- At audit start, `main` HEAD was `23e58f354c18a2b44295a8697902e032c96163d7`. No open pull requests were returned.
- The tree contained **57 tracked files before this reconciliation** (count from the queried recursive inventory; additional documentation files increase that number). The runtime source and bundled movie were both >1 MB.
- The main `index.html` embeds 25 puzzle levels and Three.js. `ending/index.html` provides a 60-second cinematic and the recently introduced bar-only loader. `invest/index.html` embeds the finished Three.js castle and uses a scene-ready iframe signal.
- Existing source SHA boundaries at the time of audit: `index.html` blob `dc13b37e2578bf8965b827a25c994e1d2ab2a038`; `ending/index.html` blob `c9e186fa39a2ee1362b17418942de25df016c68a`; `invest/index.html` blob `11102c8ec371cd8a09e9552e4b910980e7249771`. These were **left untouched**.
- A Vercel production deployment for audit-start commit `23e58f3` was reported `READY`. Hosting readiness is not runtime or device verification.

## Findings and disposition

| Area | Finding | Decision and resolution |
| --- | --- | --- |
| CHANGELOG | No entries for the first-frame readiness patch, bar-only movie loader, funding iframe handshake, README cinematic/support callout, AI handoff | **UPDATE** with dated factual commit history and explicitly open visual QA |
| ENDING_INTEGRATION_NOTES | Integration contract stopped at earlier cinematic; omitted loader and `diorama-ending-scene-ready` | **AMEND** with source-based loading sequence, iframe origin/source check, 12-second fallback and test boundaries |
| README | “Movie preview” artwork could be mistaken for a captured cinematic frame | **AMEND** alt/explanation: it is linked game/social artwork, not actual movie capture |
| README / release process | Described the level workflow but did not distinguish GitHub Actions ZIP packaging from actual publishing and Vercel/GitHub Pages hosting | **AMEND** and distinguish structural CI, manual-dispatch ZIP artifact, host builds and published itch.io edition |
| ROADMAP | Did not reflect new loader/README work or clear QA debt | **UPDATE** completion history and open device/transaction/release tasks |
| Continuity and future maintenance | AI handoff existed but no repeatable repository-wide change reconciliation SOP | **ADD** `REPOSITORY_MAINTENANCE_PROTOCOL.md` and link it from README/handoff |
| AI_HANDOFF_DIORAMA | Prior known source/commit snapshot is historical, and latest documentation state needs navigation | **UPDATE LAST** to record reconciliation and linked SOP, with live-source verification requirement |
| docs/UPGRADE_LEVELS_AND_FIXES | Contains historical pending/deferred checkpoints, but explicitly warns those are historical | **KEEP**; do not overwrite past revision approvals or imply current pending deployment |
| docs/i18n/README.* | Nine localized pages are explicitly short project overviews referring to the English technical README | **KEEP**; 25-level description, source/rights boundary and links consistent; no automatic machine-translation changes |
| README_SCREENSHOTS_SECTION | Older supplemental screenshot snippet duplicates a gallery but is not used as the README | **KEEP** as archival helper; not an authoritative public landing page |
| Game/ending/invest/audio/fonts | No runtime errors proven during documentation reconciliation; expensive regressions are possible from unrelated edits | **KEEP** all untouched pending targeted QA and user approval |
| Third-party asset terms | Existing documentation openly marks provenance and separate MP3 redistribution limitations | **VERIFY**, not silently relicense or delete media |

## Mechanical/static checks performed

1. GitHub main tree inspected; source blob SHA cross-checked before documentation edits.
2. Main game, cinematic and funding-page source inspected for actual movie-ready signal, movie loader, link targets, tier labels and PayPal link. No game runtime files were edited.
3. Audited all `src` and `href` references with literal relative paths in the three runtime HTML files against the repository tree: **zero missing references** among those detected.
4. Checked relative Markdown links in README, maintenance protocol, ending notes, roadmap, changelog, release procedure and handoff against the tree: **zero missing references** among those detected.
5. Inspected GitHub Actions workflows: `validate-levels.yml` validates data; `itchio-dist.yml` packages a ZIP as an Actions artifact, not a release to itch.io. Historical CI at audit start showed level validation `success` on `23e58f3`.
6. Reviewed nine localized overviews for structural claims, play links, repo level count and license notices; no translation edits were justified.
7. Final synchronization must inspect `main`, Vercel production commit and the level-validation workflow **after the final handoff commit**. Report those results to the user separately from this dated report.

## Unverified – DO NOT convert these into success claims

- Live frame-level confirmation on physical mobile and desktop screens that initial brown geometry no longer flashes with cold cache, or that the loader always exits under WebGL failure.
- Actual complete end-to-end 25-level playthrough and specific ongoing Level 16–25 audits.
- Ending/music/skip/replay/restore-save behavior across browsers.
- Actual visual responsiveness and mirror seam on the DIORAMA 2 funding page.
- PayPal transaction, tier choice, customer identification and promised digital reward fulfillment.
- Actual itch.io public package matches Vercel/GitHub and distribution rights for externally sourced media.
- External URL reachability for every public URL at this exact time (literal references were validated against repo and known deployment metadata, not a complete browser navigation test).

## Continuation and acceptance gates

- This is a **documentation synchronization**, not a new gameplay release.
- Keep completed and historical commits distinct from current head. Follow `REPOSITORY_MAINTENANCE_PROTOCOL.md` for future patches.
- Use a real-device cold-load/first-frame playback run and Level 25 -> ending -> replay/support flow before declaring the cinematic issue fully resolved.
- Update documentation after verified code changes, then the handoff last. Confirm post-write HEAD, workflows and production source before closing a reconciliation.
