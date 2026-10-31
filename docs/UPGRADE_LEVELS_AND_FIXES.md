# DIORAMA – Upgrade Levels and Fixes

This register is the approval gate for gameplay revisions. Only one item may be in review at a time. An item moves to **Approved** only after Joe previews and explicitly confirms it. The next item must not begin before that confirmation.

## Protected baseline

- Existing portal disappearance/reappearance animation, enlarged electrical strikes, pauses and smooth electrical sound.
- Level 12 remains fully visible with the staged appear/disappear reveal removed.
- Levels not named in the active item must not be redesigned incidentally.
- Each change receives its own commit, deployed preview and verification note.

## Revision sequence

| Order | Scope | Status | Intended revision |
|---:|---|---|---|
| 1 | Level 25 one-way vector | **In review** | Correct the malformed direction vector and add regression validation. No design changes. |
| 2 | Level 7 polarity/stamp | Queued | Separate the automatic combined actions into meaningful, readable decisions. |
| 3 | Level 8 twin lift/polarity | Queued | Convert automatic polarity B into a deliberate state choice. |
| 4 | Level 9 mechanic load | Queued | Review whether portal, directional gate and delay should remain combined. |
| 5 | Level 12 delayed lift | Queued | Improve visible cause-and-effect without restoring staged disappearance. |
| 6 | Level 13 system density | Queued | Focus the puzzle on couplers and commitment; remove redundant mechanism load. |
| 7 | Level 14 procession | Queued | Replace repetitive mandatory activation with meaningful ordering or route choice. |
| 8 | Level 15 portal foundry | Queued | Make portals the central spatial idea and reduce redundant permission gates. |
| 9 | Level 16 pacing/placement | Queued | Decide whether to reposition it as a breather or deepen the twin-lift decision. |
| 10 | Level 17 route readability | Queued | Preserve the puzzle while reducing dependence on special tap corrections. |
| 11 | Level 18 false-route value | Queued | Ensure false branches teach rather than merely waste time. |
| 12 | Level 19 linear sequence | Queued | Introduce a real order or signal deduction. |
| 13 | Level 20 portal loop polish | Queued | Preserve the strong two-pass structure and improve consequence readability. |
| 14 | Level 21 system density | Queued | Center the level on twin-lift and delayed-lift interaction. |
| 15 | Level 22 compound route | Queued | Remove a redundant permission step or add meaningful route choice. |
| 16 | Level 23 duplicate permissions | Queued | Resolve the redundant key-lock and stamp-gate pairing. |
| 17 | Level 24 overload | Queued | Reduce system count and create three clear deductions. |
| 18 | Level 25 finale redesign | Queued | After the correctness fix is approved, rebuild the finale around a coherent subset of rules. |
| 19 | Full progression review | Queued | Reassess Levels 1–25 as one teaching and difficulty sequence. |

## Revision 1 – Level 25 one-way vector

### Changed

- Corrected the Level 25 one-way direction from the invalid two-component `[-1, 0]` to the westward three-component vector `[-1, 0, 0]` expected by the runtime.
- Extended the structural validator to reject malformed one-way positions, non-three-component direction vectors and non-cardinal horizontal directions.

### Protected

- No Level 25 coordinates, mechanisms, hint text, camera behavior, artwork or balance were changed.
- No other level definition was changed.

### Verification

- Static syntax check: passed.
- Structural level validation: passed for all 25 level definitions, including the new one-way vector contract.
- Live deployment: pending.
- Player preview/approval: pending.
