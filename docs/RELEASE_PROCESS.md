# DIORAMA release procedure

This is a **future release checklist** and does not claim that a release was shipped.

1. Confirm which source edition is being released: the checked-in 25-level game or a separately maintained newer edition.
2. Record the exact commit, release scope and level count. Do not merge a newer distribution simply to synchronize counts.
3. Review the diff for gameplay, level, dependency, and asset changes.
4. Run GitHub Actions structural validation and record the run URL.
5. In a real browser, play every changed level from start to goal; verify alternate mechanism states, blocked routes, mobile tap targets, and camera behavior.
6. Regression-test old levels potentially affected by shared code; preserve saved progression and audio.
7. Check code and third-party asset licenses before redistributing the package.
8. Draft release notes: improvements, fixes, compatibility, known issues, credits.
9. Have the maintainer explicitly approve the final release artifact and deployment.
10. After release, confirm the links, advertised level count, and actual playable version agree.

## Versioning

No semantic-version contract or backward-compatible community-level format is yet guaranteed. Do not claim one until the maintainer defines it and tests migration.

## Publishing boundary

No GitHub Action in this repository automatically publishes a release or deploys a new game build as part of this documentation change.
