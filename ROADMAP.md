# DIORAMA roadmap

This is a **proposal and prioritization guide**, not a promise of release dates. The checked-in browser game currently contains 25 levels; the public itch.io listing has advertised a different count. Contributors should always identify the specific build they are discussing.

## Track A – Maintain the existing game (priority)

- Investigate reproducible bugs using the issue templates.
- Maintain 25-level compatibility, existing movement semantics, camera, sound, and saves.
- Build a regression checklist from real defects before changing any mechanics.
- Document browser and touch-device coverage using observed results, not assumptions.

## Track B – Make contributions easier (priority)

- Build examples of well-scoped level proposals with an intended solution and state diagram.
- Extend the existing **structural** validation cautiously, backed by negative test fixtures.
- Design a mechanism-aware solvability test harness; no solver is currently claimed.
- Evaluate extracting editable level source while preserving the self-contained production HTML.

## Track C – Optional expansion (proposal only)

- Additional manually validated levels built from existing mechanisms.
- New bridges, gates or moving geometry only after compatibility and regression checks.
- Community level packs or an editor **only if** a versioned import format, licensing, security and validation process exist.
- Accessibility and touch improvements grounded in reproduced user needs.

## Definition of ready

A proposal has a defined user/developer benefit, affected code/levels, an intended solution or reproduction, and a test plan. The maintainer approves implementation scope before runtime changes.

## Definition of done

A change is reviewed; existing levels still work; structural tests pass; affected levels are manually played to completion; touch interactions and changed mechanism states are verified; documentation and asset rights are updated where necessary. **CI structural pass alone does not satisfy this definition.**

## Explicitly not implemented

An independent level-loader API, unique-solution solver, interactive editor, community hosting backend, and automatic publishing pipeline have not been added. These require separate approval, architecture work and runtime regression testing.
