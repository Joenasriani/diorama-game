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

No GitHub Action in this repository automatically publishes a release or deploys a new game build as part of this documentation change.

## Static deployment contents

Publish `index.html`, `assets/`, `ending/` and `invest/` together, retaining relative paths. No package install or build is required. For Sites, map these runtime files into the configured static directory and preserve its hosting manifest. Keep host-specific identity and credentials out of the public repository.

Verify startup font loading (cold cache and failed request), normal level transitions, final-goal completion, game-music suppression, muted/unmuted ending entry, Pause/Play, Skip, Play Again and sequel-page navigation. Record source SHA and deployment version separately; v1.0 is currently the visible game label.
