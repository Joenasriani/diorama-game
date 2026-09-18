# DIORAMA

Single-page 3D mechanical puzzle game built around compact isometric structures, route planning, interactive mechanisms, and constrained click/tap movement.

## Links

- Play: https://joenasr.itch.io/diorama
- Deployment: https://diorama-game.vercel.app

## Repository scope

The current repository is a self-contained browser distribution:

```text
.
├── index.html
├── assets/
│   ├── fonts/
│   │   ├── AmaticSC-Bold.ttf
│   │   └── AmaticSC-Regular.ttf
│   └── music/
│       └── hitslab-game-gaming-music-295075.mp3
└── README.md
```

`index.html` contains the application UI, bundled Three.js runtime, level definitions, pathfinding, interaction logic, puzzle mechanisms, persistence, effects, and audio control code.

No package-manager install or application build step is required for the checked-in distribution.

## Runtime

| Area | Implementation |
| --- | --- |
| Rendering | Three.js r160, bundled into `index.html` |
| Camera | Perspective 3D camera with level-specific framing/orbit behavior |
| Game format | Single-page static HTML application |
| Levels | 25 |
| Level data | Embedded structured level definitions |
| Movement | Reachability-constrained click/tap navigation |
| Progress persistence | `localStorage` |
| SFX | Web Audio API synthesis |
| Background music | Local MP3 asset |
| Fonts | Local Amatic SC font files |

## Puzzle model

Each level defines a start cell, goal cell, traversable tile coordinates, difficulty band, hint text, and zero or more mechanism collections.

Movement is not free-form. The robot moves through valid neighboring cells resolved against the current state of the level. Route availability can change as mechanisms are activated.

The runtime includes path and reachability helpers such as:

- `reachableNow()`
- `findPathToCell()`
- `reachablePathsFrom()`
- `bestReachablePathToward()`
- `requestMoveTo()`
- mechanism-specific route checks and automatic control resolution

Movement and interaction requests are therefore evaluated against the current logical puzzle state rather than raw visual proximity alone.

## Level progression

DIORAMA contains **25 levels** organized into progressively denser mechanic bands.

Early levels establish:

- basic tile movement;
- one-height stair traversal;
- folding bridges;
- crate and weighted-plate interaction;
- sliding path blocks;
- keys and locks.

Later levels combine mechanisms including:

- buttons and lift blocks;
- moving platforms;
- one-way paths;
- folding and gear bridges;
- reciprocating lift twins;
- transfer pads;
- bridge polarity switches;
- directional gates;
- route-stamp tiles and gates;
- magnetic crate-pull arrays;
- delayed lift triggers;
- step-block couplers;
- slide blocks;
- compound key/lock routes.

Level 25 is the full-system finale and combines multiple previously introduced systems in one route graph.

## Representative level structure

A level definition includes fields such as:

```text
name
puzzle
hint
start
goal
size
tiles
difficultyBand
buttons
liftBlocks
movers
danger
keys
keyLocks
oneWay
weightedPlates
foldingBridges
turnstiles
crates
slideBlocks
gearBridges
bridgePolaritySwitches
directionalGates
stepBlockCouplers
reciprocatingLiftTwins
transferPads
routeStampTiles
routeStampGates
magneticPullArrays
delayedLiftTriggers
underpassCells
```

Unused mechanism arrays remain empty for levels that do not require them.

## Interaction and tap assistance

The input layer distinguishes ordinary pointer slop from a larger assistance radius, with separate mouse and touch values.

Current base values include:

```text
mouse tap slop:    22 px
touch tap slop:    46 px
mouse assist:      76 px
touch assist:      168 px
```

Touch assistance receives an additional small-screen adjustment.

When a tap does not land cleanly on the intended traversable surface, the runtime can resolve an assisted target using reachable-path and mechanism-aware logic rather than moving to an arbitrary nearby tile.

Specialized assistance exists for high-tier and multi-branch situations where projected surfaces can overlap visually.

Reachable helper meshes are used as interaction proxies but are intentionally rendered invisible in the current build.

## Moving geometry constraints

The implementation explicitly treats dynamic puzzle blocks as logical traversal surfaces rather than decorative animation.

Current movement rules include:

- moving/sliding bricks must not merge into fixed puzzle geometry;
- lift and moving-block logical cells are refreshed as mechanisms change state;
- traversal onto moving elements is validated before committing movement;
- stair transitions use bounded height changes;
- moving platforms and lifts participate in the same route-resolution system as fixed cells.

## Camera and presentation

The game uses a perspective camera with level-specific framing logic.

The runtime contains:

- level camera bounds;
- responsive camera-distance calculation;
- responsive pitch/target calculation;
- camera-start definitions;
- camera easing during level transitions;
- additional camera handling for specific reveal sequences;
- fullscreen support.

Camera rotation is part of inspection and navigation, while movement remains constrained by puzzle connectivity.

## Save data

Progress is stored in browser `localStorage`.

The current save structure tracks:

- highest unlocked level;
- last active level;
- best move counts by level.

The runtime also includes migration handling for an older save format.

If browser storage is unavailable or denied, the game continues without persistent progress.

A reset-progress control removes saved state and returns progression to Level 1.

## Audio

Background music is loaded from:

```text
assets/music/hitslab-game-gaming-music-295075.mp3
```

The runtime includes music preload/recovery handling for interrupted or stalled playback.

Interaction and feedback sounds are generated through the Web Audio API using synthesized tones.

Audio starts only after browser-permitted user interaction.

## Built-in UI utilities

The current build includes:

- level-select interface;
- mechanic legend/help interface;
- fullscreen toggle;
- music toggle;
- valid/invalid tap feedback;
- level-transition overlays;
- startup loading state;
- progress reset;
- move/best-move tracking.

## Running locally

No build step is required.

Serve the repository through HTTP:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

Using an HTTP server is preferred over opening the page directly with `file://`, especially for local asset loading and browser security behavior.

## Technical characteristics

- Static deployment: no backend is required.
- Runtime and Three.js engine code are bundled into the main HTML file.
- Core game assets are stored locally in the repository.
- Level definitions are embedded in the runtime rather than stored as separate JSON files.
- Game progression is client-side only.
- Save data is browser-local and is not synchronized across devices.
- The large single-file distribution favors direct deployment over modular source-level maintenance.

## Verification boundary

The repository demonstrates implemented pathfinding, mechanism state transitions, persistence, responsive input assistance, and 25 level definitions.

Those implementation facts do not by themselves establish exhaustive cross-browser compatibility, accessibility conformance, performance targets, or device-store certification.
