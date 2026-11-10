# DIORAMA release procedure

Current ending baseline: see [ending integration notes](../ENDING_INTEGRATION_NOTES.md). Check the quieter jump mix, princess-call music duck, above-tile dragon dust and external CTA; verify production commit and artifact hashes separately from source checks.

This is the repeatable release checklist. The current runtime release is recorded in RELEASE_STATE.json and CHANGELOG.md; completing deployment does not imply every manual QA item below has passed.

1. Confirm the intended release source: **DIORAMA has 25 levels** in the authoritative checked-in game. The public itch.io listing was checked at 25 levels on 7 November 2026.
2. Record the exact commit, release scope and authoritative **25-level** count. Do not create or merge a speculative alternate edition to match outdated external marketing.
3. Review the diff for gameplay, level, dependency, and asset changes.
4. Run GitHub Actions structural validation and record the run URL.
5. In a real browser, play every changed level from start to goal; verify alternate mechanism states, blocked routes, mobile tap targets, elevated-step selection, folding-bridge stem direction, one-finger orbit, two-finger tracking/pedestal movement, pinch zoom, and camera framing.
6. Regression-test old levels potentially affected by shared code; preserve saved progression and audio.
7. Check code and third-party asset licenses before redistributing the package.
8. Draft release notes: improvements, fixes, compatibility, known issues, credits.
9. Follow the current user’s authorized release scope; request a decision only when a necessary action is not already authorized. Do not invent another approval gate after explicit publish instructions.
10. After release, confirm the links, advertised level count, and actual playable version agree.

## Versioning

No semantic-version contract or backward-compatible community-level format is yet guaranteed. Do not claim one until the maintainer defines it and tests migration.

## Publishing boundary

The repository has two distinct workflows:

- `.github/workflows/validate-levels.yml` runs the **structural level validator** on pushes to `main` and pull requests. Its success is not a playable or solvability test.
- `.github/workflows/itchio-dist.yml` packages a clean HTML5 ZIP, tests its file integrity, and uploads the archive as a GitHub Actions artifact on manual dispatch and pushes to `main` changing its configured runtime/package paths. **It does not upload/publish to itch.io.** Its artifact is not proof that the actual itch.io listing has been updated. Before treating an artifact as a publishable game, confirm all bundled media redistribution permissions, game operation and the intended release commit.

GitHub Pages may run its own separate `pages build and deployment` workflow. Vercel is Git-integrated and also creates deployments from pushes; verify the resulting target and source SHA through Vercel. A documentation push may cause hosting builds, but must not be reported as a new verified gameplay release. No game-specific GitHub workflow here automatically publishes to itch.io.

## Static deployment contents

Publish `index.html`, `favicon.ico`, `assets/`, `ending/` and `invest/` together, retaining relative paths. No package install or build is required. For Sites, map these runtime files into the configured static directory and preserve its hosting manifest. Keep host-specific identity and credentials out of the public repository.

Verify startup font loading (cold cache and failed request), normal level transitions, final-goal completion, game-music suppression, muted/unmuted ending entry, Pause/Play, Skip, Play Again and sequel-page navigation. For the ending specifically, verify the **bar-only** loading screen masks first-frame rendering, retains the film at timeline 0 until ready, respects reduced motion, never remains indefinitely without a visible recovery path, and preserves camera/audio choreography. For `invest/`, check the iframe's `diorama-ending-scene-ready` handshake (origin and window source), fallback link, mirrored castle seam, blue `#5b777d`, CTA and tiers in portrait/landscape. Record source SHA and deployment version separately; v1.0 is currently the visible game label.


## One source, separate publications

Use GitHub `main` as the authoritative development source. For an approved multi-host release, verify Vercel's source status, copy the exact runtime to the existing public Sites project, package/push/save/deploy there, and compare every runtime Git blob with the release. Never copy `.openai` identity or credentials into GitHub. Sites does not automatically follow GitHub. Documentation-only changes do not require a new game ZIP or Sites deployment.

For itch.io, build the deterministic ZIP using `.github/workflows/itchio-dist.yml`, record source SHA and checksum, then upload separately when authorized. Select the latest ZIP for browser play. Verify the description and publish a truthful devlog; do not claim notification delivery, search ranking or hosted-byte equality without evidence. See RELEASE_STATE.json for the completed 10 November upload and published devlog. The current package contains 25 files and matches the accepted runtime. Live served bytes remain a separate verification task.

