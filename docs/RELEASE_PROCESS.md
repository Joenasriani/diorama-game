# DIORAMA release procedure

This is the repeatable release checklist. The 4 November 2026 release is recorded in README.md and CHANGELOG.md; completing deployment does not imply every manual QA item below has passed.

1. Confirm which source edition is being released: the checked-in 25-level game or a separately maintained newer edition.
2. Record the exact commit, release scope and level count. Do not merge a newer distribution simply to synchronize counts.
3. Review the diff for gameplay, level, dependency, and asset changes.
4. Run GitHub Actions structural validation and record the run URL.
5. In a real browser, play every changed level from start to goal; verify alternate mechanism states, blocked routes, mobile tap targets, elevated-step selection, folding-bridge stem direction, one-finger orbit, two-finger tracking/pedestal movement, pinch zoom, and camera framing.
6. Regression-test old levels potentially affected by shared code; preserve saved progression and audio.
7. Check code and third-party asset licenses before redistributing the package.
8. Draft release notes: improvements, fixes, compatibility, known issues, credits.
9. Have the maintainer explicitly approve the final release artifact and deployment.
10. After release, confirm the links, advertised level count, and actual playable version agree.

## Versioning

No semantic-version contract or backward-compatible community-level format is yet guaranteed. Do not claim one until the maintainer defines it and tests migration.

## Publishing boundary

The repository has two distinct workflows:

- `.github/workflows/validate-levels.yml` runs the **structural level validator** on pushes to `main` and pull requests. Its success is not a playable or solvability test.
- `.github/workflows/itchio-dist.yml` packages a clean HTML5 ZIP, tests its file integrity, and uploads the archive as a GitHub Actions artifact on manual dispatch (and when its workflow file changes). **It does not upload/publish to itch.io.** Its artifact is not proof that the actual itch.io listing has been updated. Before treating an artifact as a publishable game, confirm all bundled media redistribution permissions, game operation and the intended release commit.

GitHub Pages may run its own separate `pages build and deployment` workflow. Vercel is Git-integrated and also creates deployments from pushes; verify the resulting target and source SHA through Vercel. A documentation push may cause hosting builds, but must not be reported as a new verified gameplay release. No game-specific GitHub workflow here automatically publishes to itch.io.

## Static deployment contents

Publish `index.html`, `assets/`, `ending/` and `invest/` together, retaining relative paths. No package install or build is required. For Sites, map these runtime files into the configured static directory and preserve its hosting manifest. Keep host-specific identity and credentials out of the public repository.

Verify startup font loading (cold cache and failed request), normal level transitions, final-goal completion, game-music suppression, muted/unmuted ending entry, Pause/Play, Skip, Play Again and sequel-page navigation. For the ending specifically, verify the **bar-only** loading screen masks first-frame rendering, retains the film at timeline 0 until ready, respects reduced motion, never remains indefinitely without a visible recovery path, and preserves camera/audio choreography. For `invest/`, check the iframe's `diorama-ending-scene-ready` handshake (origin and window source), fallback link, mirrored castle seam, blue `#5b777d`, CTA and tiers in portrait/landscape. Record source SHA and deployment version separately; v1.0 is currently the visible game label.
