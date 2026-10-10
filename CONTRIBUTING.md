# Contributing to DIORAMA

Thank you for helping improve DIORAMA. The checked-in game currently has **25 levels**; the separately published itch.io edition advertises more levels. Confirm the target version before proposing changes.

## Before contributing

**License status:** Original code and documentation for which the copyright holder has authority are licensed under the repository's [MIT License](LICENSE). Bundled fonts, music and the Three.js runtime retain separate rights, summarized in [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md). The music's redistribution status in a source package and some asset provenance remain unverified; do not assume the entire playable package is MIT-licensed.

### Good ways to help

- Report a reproducible gameplay, camera, touch, audio, or progression bug.
- Propose a level design with its intended unique solution.
- Improve documentation, test coverage, or accessibility.
- Suggest new mechanics in an issue before implementing them.

## Current development setup

The distributable game is `index.html`, with fonts and music under `assets/`. It has no required build step. From the repository root:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080/. If Node.js is installed, run the **non-runtime-changing structural check**:

```sh
node scripts/validate-levels.cjs
```

This script reads the checked-in `index.html` and does not modify any files. Passing it **does not prove a puzzle is solvable or uniquely solvable**.

## Proposing a level

Read [docs/LEVEL_AUTHORING.md](docs/LEVEL_AUTHORING.md) and copy the schema example there as a starting point. Today levels remain embedded in `index.html`, not independent installable JSON files. **Do not assume level packs are supported.** First open an issue describing the mechanism, intended route, false paths, start and goal, and the expected solution. Include a map or screenshots and explain all dynamic states.

For any candidate level, review:
- Exactly one intended valid route to the goal, with no unintended bypass.
- Valid height transitions and no robot clipping.
- No moving/lift traversal cell occupying the same position as a static tile.
- Reachability under alternate button, bridge, gate, and lift states.
- Recoverable mechanisms unless an irreversible action is explicitly designed.
- Tap targets that work from practical camera angles and on mobile.
- No duplicate or trivially repeated level structure.

These are design requirements that need **manual gameplay verification**, not assertions covered by the structural checker.

## Pull requests

1. Open a focused issue first for larger features or new mechanics.
2. Branch from the current `main`.
3. Keep changes focused and preserve existing controls, visuals, audio, save progress, and level logic.
4. Run `node scripts/validate-levels.cjs` and locally test affected levels in a browser.
5. Fill in the PR template with what changed, test evidence, and known limitations.
6. Do not add new dependencies, replace bundled assets, or change licensing without maintainer approval.

No PR guarantees acceptance. The maintainer reviews gameplay, integrity of the single-file browser distribution, and licensing before merging.
