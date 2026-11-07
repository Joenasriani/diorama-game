# DIORAMA – Upgrade Levels and Fixes

> Historical revision/approval register. Current release and instructions are [the AI handoff](../AI_HANDOFF_DIORAMA.md) and [release state](RELEASE_STATE.json). Earlier locally verified, awaiting preview, frozen-ending and pending-deployment notes describe their dated checkpoints; they are not current tasks or proof of player approval. The selected 2 November revisions were integrated; Level 16 onward remains proposed review work.

## Protected baseline

- Existing portal disappearance/reappearance animation, enlarged electrical strikes, pauses and smooth electrical sound.
- Mobile/tablet camera control: two-finger drag tracks left/right and raises/lowers the camera pedestal while pinch distance continues to control zoom; the gesture never issues robot movement.
- Mobile elevated-step targeting: every revision must verify that a legal upward neighbor is easy to select in a portrait touch viewport; immediate reachable upward blocks receive priority before overlapping scene geometry, without permitting jumps.
- Folding-bridge stem alignment: every grey bridge stem must point toward its actual adjacent source-route brick; fixed default directions and decorative stems that contradict traversal are prohibited.
- Level 12 remains fully visible with the staged appear/disappear reveal removed.
- Levels not named in the active item must not be redesigned incidentally.
- **Historical batch procedure:** each change received a local commit/verification note and deployment was held until the selected batch. Follow current user scope and release procedure for new work.
- **Historical ending deferral – superseded:** the ending was parked during that batch. It is now implemented and published; preserve the current ending contract rather than restarting it.

## Historical revision sequence

| Order | Scope | Status | Intended revision |
|---:|---|---|---|
| 1 | Level 25 route completion | **In review** | Correct the malformed one-way vector and restore the missing polarity-switch host tile. |
| 2 | Level 7 polarity/stamp | **Locally verified** | Separate the automatic combined actions into meaningful, readable decisions. |
| 3 | Level 8 twin lift/polarity | **Locally verified** | Convert automatic polarity B into a deliberate state choice. |
| 4 | Level 9 mechanic load | **Locally verified** | Focus the level on transfer and directional reading; reserve delayed lifts for Level 12. |
| 5 | Level 12 delayed lift | **Locally verified** | Make the delayed lift visible from its clock button and use the detour as a readable two-move timer. |
| 6 | Level 13 system density | **Locally verified** | Focus the puzzle on couplers and commitment; remove redundant mechanism load. |
| 7 | Level 14 procession | **Locally verified** | Replace repetitive mandatory activation with meaningful ordering or route choice. |
| 8 | Level 15 portal foundry | **Locally verified – awaiting preview** | Make portals the central spatial idea and reduce redundant permission gates. |
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

## Revision 8 – Level 15 portal foundry

### Changed

- Refocused Level 15 on two bronze transfer pads crossing three visibly separated islands.
- Removed two keys, two locks, two lifts, the gear bridge and the extra final bridge that obscured the portal idea.
- Retained one short side-branch control that opens the only bridge between the first and second transfers.
- Rebuilt the final island as a straight outward, one-height-at-a-time crown climb ending at `[1,8,2]`, avoiding the compact top-block clustering found during earlier reviews.
- Renamed the level to **Twin Transfer Foundry** and updated its puzzle and hint text.

### Protected

- No level definition other than Level 15 was changed in this revision.
- Revisions 2–7, portal effects, mobile camera gestures, Level 12 visibility rules and frozen **[ENDING]** remain unchanged.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 15 route-contract validation: passed for first-transfer access, required bridge preparation, second-transfer access and final crown climb.
- Mechanic-focus validation: passed; exactly two transfers and one bridge preparation remain.
- Remote GitHub/Vercel deployment: intentionally deferred.
- Private review preview: refreshed and live.
- Player approval: pending.

## Revision 7 – Level 14 procession

### Changed

- Replaced the five-button, four-lift procession with a compact upper courtyard and two meaningful side branches.
- The player may collect the courtyard key or press the bridge control first; both branches return to the same readable hub.
- Both preparations matter: the bridge control opens the north route and the key clears its lock.
- Replaced the remaining lift procession with fixed stair blocks so the level tests route planning rather than repeated permission taps.
- Renamed the level to **Crown Choice Courtyard** and updated its puzzle and hint text.
- Added regression validation for hub access, either-order branch completion, independently necessary key/bridge states and the complete crown route.
- Replaced the tight top zigzag with a straight outward crown staircase ending at `[8,8,0]`, so the final green blocks and yellow target no longer cluster or overlap visually.
- Added a forgiving mobile tap zone for the small elevated crown blocks; it favors the next legal forward stair while preserving the connected route and preventing tier jumps.

### Protected

- No level definition other than Level 14 was changed in this revision.
- Revisions 2–6, portal effects, Level 12 visibility/route corrections, Level 25 correction and frozen **[ENDING]** remain unchanged.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 14 route-choice validation: passed for hub access, either-order branch completion and independently necessary key/bridge states.
- Mechanic-focus validation: passed; one key, one lock, one bridge control and no repetitive lifts remain.
- Definition isolation check: passed; Level 14 is the only changed level definition.
- Remote GitHub/Vercel deployment: intentionally deferred.
- Private review preview: refreshed and live.
- Player approval: pending.

## Revision 6 – Level 13 system density

### Changed

- Refocused Level 13 on two copper step-block couplers followed by one irreversible crown-lift commitment.
- Each coupler now raises only the next grey stair block directly ahead, so its cause and effect remain visible.
- Removed the gear bridge, key, key lock and extra mid-route lift button that duplicated permission checks without adding a new deduction.
- Retained one red control for the final one-way lift, followed by a fixed crown stair.
- Renamed the level to **Coupler Commitment Spine** and updated its puzzle and hint text to match the revised route.
- Added regression validation proving that both couplers are required in order, the crown is blocked before commitment and the complete raised route reaches the goal.
- Moved Level 13’s yellow target itself to `[4,8,0]`, beside the last green block, with no lower brick sharing its horizontal position.
- Rebuilt the upper crown section as a continuous one-height-at-a-time spine so every ascent is physically clear and legal.
- Added a Level 13 mobile tap assist around the tiny upper blocks; it favors the next forward stair but still requires a valid live route and cannot jump tiers.

### Protected

- No level definition other than Level 13 was changed in this revision; the paused Level 14 draft was restored before this work.
- Revisions 2–5, portal effects, Level 12 visibility rules, Level 25 correction and frozen **[ENDING]** remain unchanged.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 13 route-contract validation: passed for both ordered coupler steps, the blocked pre-commit route and the complete committed crown route.
- Mechanic-focus validation: passed; the redundant gear bridge, key and key lock are absent.
- Definition isolation check: passed; Level 13 is the only changed level definition.
- Remote deployment: intentionally deferred until the selected revision batch is complete.
- Player preview/approval: pending final batch deployment.

## Revision 1 – Level 25 route completion

### Changed

- Corrected the Level 25 one-way direction from the invalid two-component `[-1, 0]` to the westward three-component vector `[-1, 0, 0]` expected by the runtime.
- Extended the structural validator to reject malformed one-way positions, non-three-component direction vectors and non-cardinal horizontal directions.
- Added the missing host tile at `[12, 0, 13]` for `final_polarity_switch`. Without it, the runtime skipped switch creation and neither polarity bridge existed, permanently blocking the route to the transfer portal.
- Added a regression check that rejects any Level 25 polarity switch whose position lacks a real host tile.

### Protected

- No Level 25 mechanics, hint text, camera behavior, artwork or balance were changed beyond the single missing switch-support tile.
- No other level definition was changed.

### Verification

- Static syntax check: passed.
- Structural level validation: passed for all 25 levels, including the Level 25 polarity-switch host-tile contract.
- Live deployment: passed; the published game file exactly matches the verified repository blob.
- Player preview/approval: pending.

## Revision 2 – Level 7 polarity/stamp

### Changed

- Moved the route stamp off the polarity control so the two requirements no longer resolve on the same tile.
- Rebuilt the compact route as a deliberate state sequence: cross the initial A bridge to collect the stamp, return, press a separate red polarity control to set B, then cross the B bridge and stamped gate.
- Added button-driven polarity activation while preserving the existing automatic `controlFrom` behavior used by other levels.
- Updated Level 7 puzzle and hint text to describe the actual A → stamp → control → B → gate sequence.
- Added regression validation for the A-branch stamp route, return path, separate control, blocked A exit and valid B exit.
- Corrected the preview-discovered dead state: the B control now sits beyond the stamped gate, so it cannot deactivate bridge A before the stamp is collected.
- Added collection feedback for every route stamp: the stamp pulses, its matching gate flashes, the lock ring retracts and the gate rails slide open so the newly passable state is unmistakable.

### Protected

- No other level definition was changed.
- Portal animation, electrical effects, audio and Level 12 visibility rules were not changed.
- The frozen **[ENDING]** concept was not implemented or altered.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 7 route-contract validation: passed for the A-branch stamp route, enforced stamped-gate ordering, inaccessible pre-stamp B control and B-bridge exit.
- Definition isolation check: passed; Level 7 is the only changed level definition.
- Remote deployment: intentionally deferred until the selected revision batch is complete.
- Player preview/approval: pending final batch deployment.

## Revision 5 – Level 12 delayed lift

### Changed

- Repositioned the lower route so the delayed grey lift sits visibly two cells straight ahead of its clock button.
- Rebuilt the approach as a short side bend: after pressing the clock button, the player takes two detour moves while the linked lift pulses and then rises before it is reached.
- Increased the trigger from one delayed move to two, making the waiting period readable rather than nearly immediate.
- Kept the existing upper stair and final lift sequence intact.
- Renamed the level to **Delayed Signal Stair** and updated the puzzle/hint text to describe the visible signal and two-move clock.
- Added regression validation for button/lift alignment, the detour, two-move delay, blocked pre-rise route and complete raised-lift route.
- Corrected the preview-discovered blocked ending by removing the unrelated second lift/control and replacing it with a permanent two-step crown stair.
- Repositioned the upper tier blocks into a compact, front-readable zigzag so every climb to the third tier is directly adjacent and easy to select.
- Moved the yellow crown target onto the final required zigzag block and removed the redundant green landing block beside it.

### Protected

- Every Level 12 tile and mechanism is visible from level load; no staged appearance/disappearance behavior was restored.
- No level definition other than Level 12 was changed in this revision.
- Revisions 2–4, portal effects, Level 25 correction and frozen **[ENDING]** remain unchanged.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 12 delayed-route validation: passed for visible alignment, the two-move detour, blocked pre-rise route and complete raised-lift route into the fixed crown stair.
- Visibility protection check: passed; no staged reveal or disappearance data was introduced.
- Definition isolation check: passed; Level 12 is the only changed level definition in this revision.
- Remote deployment: intentionally deferred until the selected revision batch is complete.
- Player preview/approval: pending final batch deployment.

## Revision 4 – Level 9 mechanic load

### Changed

- Removed the delayed-lift button, trigger and lift from Level 9; delayed-lift teaching remains reserved for Level 12.
- Retained the transfer pad and directional gate as the level's two connected ideas.
- Rebuilt the raised platform into a short loop: the transfer landing presents a tempting but invalid direct gate entry, so the player must walk around and enter from the accepted eastern side.
- Replaced the former final delayed lift with a fixed one-step crown stair.
- Renamed the level to **Transfer Gate Loop** and updated its puzzle/hint text to match the actual spatial deduction.
- Added general directional-gate data validation plus a Level 9 regression contract for the rejected direct entry, valid loop route and absence of delayed-lift machinery.

### Protected

- No level definition other than Level 9 was changed in this revision.
- Level 7 and Level 8 revisions remain intact.
- Portal transition effects and audio were not changed; only Level 9's destination coordinate changed as part of its route layout.
- Level 12 visibility rules, Level 25 correction and frozen **[ENDING]** remain unchanged.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 9 directional-route validation: passed for the rejected direct entry, legal east-side loop and fixed crown stair.
- Mechanic-focus validation: passed; no delayed-lift button, trigger or lift remains in Level 9.
- Definition isolation check: passed; Level 9 is the only changed level definition in this revision.
- Remote deployment: intentionally deferred until the selected revision batch is complete.
- Player preview/approval: pending final batch deployment.

## Revision 3 – Level 8 twin lift/polarity

### Changed

- Removed Level 8's automatic `controlFrom` polarity change.
- Added a red polarity control directly on the upper side tile, requiring the player to leave the main line deliberately after raising the correct twin lift.
- The resulting sequence is now: activate lift A, climb, step onto the side control to set polarity B, return to the main tile, then cross the B bridge to the crown.
- Updated Level 8 puzzle and hint text to describe the deliberate upper-platform action.
- Reused the button-driven polarity activation introduced for Level 7; no additional runtime system was added.
- Added regression validation for the raised-A-lift approach, deliberate control, blocked A exit and valid B exit.

### Protected

- No level definition other than Level 8 was changed in this revision.
- Level 7's separated A/stamp/B sequence remains intact.
- Portal effects, Level 12 visibility rules, Level 25 route correction and frozen **[ENDING]** remain unchanged.

### Verification

- Static JavaScript syntax check: passed.
- Structural validation: passed for all 25 levels.
- Level 8 route-contract validation: passed for the raised A lift, deliberate side control, blocked A exit and valid B exit.
- Definition isolation check: passed; Level 8 is the only changed level definition in this revision.
- Remote deployment: intentionally deferred until the selected revision batch is complete.
- Player preview/approval: pending final batch deployment.
