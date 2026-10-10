# DIORAMA level authoring – current format

## Scope

This document describes the **existing embedded level data**, not a stable level-plugin interface. The production source remains the self-contained `index.html`; no standalone level files or level importer exist yet.

The checked-in runtime defines a JavaScript `var levels = [...] ` array of **25** JSON-formatted objects. A structural validator is available at `scripts/validate-levels.cjs`; it only checks data integrity and cannot certify puzzle completion.

## Minimal example based on checked-in Level 01

```json
{
  "name": "01 - First Toy Step",
  "puzzle": "Learn the basic tap-to-move rule on open top surfaces.",
  "hint": "Tap the green tiles. Reach the golden crown.",
  "start": [0, 0, 0],
  "goal": [3, 0, 1],
  "size": [4, 2],
  "tiles": [[0,0,0],[1,0,0],[2,0,0],[2,0,1],[3,0,1]],
  "difficultyBand": "A - movement/stair literacy"
}
```

This is an *illustrative subset* of the real definition. The live first level also contains empty arrays for its unused mechanisms. Do not paste this abbreviated object into the runtime as a new level without checking the fields the engine expects.

## Existing level keys

The checked-in objects use `name`, `puzzle`, `hint`, `start`, `goal`, `size`, `tiles`, `difficultyBand` and mechanism arrays:

`buttons`, `liftBlocks`, `movers`, `danger`, `keys`, `keyLocks`, `oneWay`, `weightedPlates`, `foldingBridges`, `turnstiles`, `crates`, `slideBlocks`, `gearBridges`, `splitPathLevers`, `bridgePolaritySwitches`, `directionalGates`, `routeCommitmentDoors`, `resetFloorTiles`, `stepBlockCouplers`, `reciprocatingLiftTwins`, `transferPads`, `routeStampTiles`, `routeStampGates`, `magneticPullArrays`, `delayedLiftTriggers`, `underpassCells`.

Coordinates use the existing three-number cell convention; inspect actual levels and their mechanism-specific transition logic for interpretation. Do not assume all cells are always traversable.

## Recommended contribution workflow

1. Propose the level concept in an issue, including an intended route and important state changes.
2. Derive a new structured definition from an existing level using the same mechanics; do not invent undocumented keys.
3. Run the structural validator to check syntax, required fields, and duplicate names.
4. Test the gameplay in the browser, especially the complete path from spawn to goal and alternate switch states.
5. Test tap assistance and navigation at multiple camera angles and on a touch device.
6. Attach evidence and a step-by-step solution path in the PR.

## Integrity limitations

The structural checker does not perform gameplay pathfinding, find a unique solution, simulate triggers, test geometry intersection, or verify save-data migration. Those checks remain manual until a separate runtime-compatible solver/test harness is designed and validated against the engine.
