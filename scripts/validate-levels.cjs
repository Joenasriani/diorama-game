#!/usr/bin/env node
// Read-only structural validation of the embedded DIORAMA level JSON.
// No dependency on the game runtime; does NOT prove puzzle solvability.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const target = path.resolve(__dirname, '..', 'index.html');
const source = fs.readFileSync(target, 'utf8');
const marker = 'var levels = ';
const startAt = source.indexOf(marker);
if (startAt === -1) throw Error('Could not find embedded var levels definition');
const start = startAt + marker.length;
if (source[start] !== '[') throw Error('Expected a JSON array after var levels = ');
let depth = 0, inString = false, escaped = false, end = -1;
for (let i = start; i < source.length; i++) {
  const ch = source[i];
  if (inString) {
    if (escaped) escaped = false;
    else if (ch === '\\') escaped = true;
    else if (ch === '"') inString = false;
  } else if (ch === '"') inString = true;
  else if (ch === '[') depth++;
  else if (ch === ']' && --depth === 0) { end = i + 1; break; }
}
if (end < 0) throw Error('Could not find end of level definitions');
let levels;
try { levels = JSON.parse(source.slice(start, end)); }
catch (error) { throw Error('Embedded levels are not valid JSON: ' + error.message); }
const errors = [];
const seen = new Set();
const cell = v => Array.isArray(v) && v.length === 3 && v.every(n => Number.isFinite(n));
const sameCell = (a, b) => cell(a) && cell(b) && a.every((n, i) => n === b[i]);
const reachable = (start, goal, cells) => {
  const queue = [start];
  const visited = new Set([start.join(',')]);
  while (queue.length) {
    const from = queue.shift();
    if (sameCell(from, goal)) return true;
    for (const to of cells) {
      const key = to.join(',');
      if (visited.has(key)) continue;
      if (Math.abs(from[0] - to[0]) + Math.abs(from[2] - to[2]) !== 1) continue;
      if (Math.abs(from[1] - to[1]) > 1) continue;
      visited.add(key);
      queue.push(to);
    }
  }
  return false;
};
const reachableWithDirectionalGates = (start, goal, cells, gates) => {
  const queue = [start];
  const visited = new Set([start.join(',')]);
  const gateByCell = new Map((gates || []).map(gate => [gate.pos.join(','), gate]));
  while (queue.length) {
    const from = queue.shift();
    if (sameCell(from, goal)) return true;
    for (const to of cells) {
      const key = to.join(',');
      if (visited.has(key)) continue;
      const dx = to[0] - from[0];
      const dz = to[2] - from[2];
      if (Math.abs(dx) + Math.abs(dz) !== 1 || Math.abs(from[1] - to[1]) > 1) continue;
      const gate = gateByCell.get(key);
      if (gate && (dx !== gate.enterDir[0] || dz !== gate.enterDir[1])) continue;
      visited.add(key);
      queue.push(to);
    }
  }
  return false;
};
if (!Array.isArray(levels) || levels.length === 0) errors.push('No levels defined');
for (const [index, level] of levels.entries()) {
  const id = 'Level ' + (index + 1);
  if (!level || typeof level !== 'object' || Array.isArray(level)) { errors.push(id + ': not an object'); continue; }
  if (typeof level.name !== 'string' || !level.name.trim()) errors.push(id + ': missing name');
  else if (seen.has(level.name)) errors.push(id + ': duplicate name ' + level.name);
  else seen.add(level.name);
  if (!cell(level.start)) errors.push(id + ': invalid start coordinate');
  if (!cell(level.goal)) errors.push(id + ': invalid goal coordinate');
  if (!Array.isArray(level.tiles) || !level.tiles.every(cell)) errors.push(id + ': invalid tile coordinates');
  if (!Array.isArray(level.size) || level.size.length !== 2 || !level.size.every(n => Number.isFinite(n) && n > 0)) errors.push(id + ': invalid size');
  if (typeof level.puzzle !== 'string' || typeof level.hint !== 'string') errors.push(id + ': missing puzzle or hint text');
  if (typeof level.difficultyBand !== 'string') errors.push(id + ': missing difficulty band');
  for (const [bridgeIndex, bridge] of (level.foldingBridges || []).entries()) {
    if (!bridge || !cell(bridge.target)) {
      errors.push(id + ': foldingBridges[' + bridgeIndex + '] has an invalid target');
      continue;
    }
    if (!cell(bridge.stemDir)) {
      errors.push(id + ': folding bridge ' + (bridge.id || bridgeIndex) + ' is missing a three-component stemDir');
      continue;
    }
    const [sx, sy, sz] = bridge.stemDir;
    if (sy !== 0 || Math.abs(sx) + Math.abs(sz) !== 1) {
      errors.push(id + ': folding bridge ' + (bridge.id || bridgeIndex) + ' stemDir must be one cardinal horizontal step');
      continue;
    }
    const anchor = [bridge.target[0] + sx, bridge.target[1], bridge.target[2] + sz];
    const aligned = (level.tiles || []).some(tile =>
      tile[0] === anchor[0] && tile[2] === anchor[2] && Math.abs(tile[1] - bridge.target[1]) <= 1
    );
    if (!aligned) errors.push(id + ': folding bridge ' + (bridge.id || bridgeIndex) + ' stem does not point to an adjacent route brick');
  }
  for (const [oneWayIndex, oneWay] of (level.oneWay || []).entries()) {
    if (!oneWay || !cell(oneWay.pos)) errors.push(id + ': oneWay[' + oneWayIndex + '] has an invalid position');
    if (!oneWay || !cell(oneWay.dir)) {
      errors.push(id + ': oneWay[' + oneWayIndex + '] direction must be a three-component [x,y,z] vector');
      continue;
    }
    const [x, y, z] = oneWay.dir;
    if (y !== 0 || Math.abs(x) + Math.abs(z) !== 1) {
      errors.push(id + ': oneWay[' + oneWayIndex + '] direction must be one horizontal cardinal step');
    }
  }
  for (const polaritySwitch of (level.bridgePolaritySwitches || [])) {
    const hasHostTile = level.tiles.some(tile => sameCell(tile, polaritySwitch.pos));
    if (!hasHostTile) {
      errors.push(id + ': polarity switch ' + polaritySwitch.id + ' has no host tile at [' + polaritySwitch.pos.join(',') + ']');
    }
  }
  for (const [gateIndex, gate] of (level.directionalGates || []).entries()) {
    if (!gate || !cell(gate.pos)) errors.push(id + ': directionalGates[' + gateIndex + '] has an invalid position');
    if (!gate || !Array.isArray(gate.enterDir) || gate.enterDir.length !== 2 || !gate.enterDir.every(Number.isFinite) || Math.abs(gate.enterDir[0]) + Math.abs(gate.enterDir[1]) !== 1) {
      errors.push(id + ': directionalGates[' + gateIndex + '] enterDir must be one horizontal cardinal step');
    }
    if (gate && cell(gate.pos) && !level.tiles.some(tile => sameCell(tile, gate.pos))) {
      errors.push(id + ': directionalGates[' + gateIndex + '] has no host tile');
    }
  }
  if (index === 6) {
    const polaritySwitch = (level.bridgePolaritySwitches || []).find(item => item.id === 'l08_polarity_switch');
    const stamp = (level.routeStampTiles || []).find(item => item.id === 'l08_route_stamp');
    const stampGate = (level.routeStampGates || []).find(item => item.stampId === 'l08_route_stamp');
    const control = (level.buttons || []).find(item => item.activates === 'l08_polarity_switch');
    const aBridge = polaritySwitch && polaritySwitch.bridges.find(bridge => bridge.path === 'A');
    const bBridge = polaritySwitch && polaritySwitch.bridges.find(bridge => bridge.path === 'B');
    if (!polaritySwitch || !stamp || !stampGate || !control || !aBridge || !bBridge) {
      errors.push(id + ': polarity/stamp sequence is incomplete');
    } else {
      const aCells = [...level.tiles, aBridge.pos];
      const bCells = [...level.tiles, bBridge.pos];
      const preStampCells = aCells.filter(tile => !sameCell(tile, stampGate.pos));
      if (sameCell(stamp.pos, control.pos) || sameCell(stamp.pos, polaritySwitch.pos)) {
        errors.push(id + ': stamp and polarity action must remain separate decisions');
      }
      if (!reachable(level.start, stamp.pos, aCells)) errors.push(id + ': stamp is not reachable through polarity A');
      if (!reachable(stamp.pos, control.pos, aCells)) errors.push(id + ': player cannot return from the A stamp branch to the polarity control');
      if (reachable(level.start, control.pos, preStampCells)) errors.push(id + ': B control is reachable before the stamped gate');
      if (reachable(level.start, level.goal, aCells)) errors.push(id + ': polarity A must not reach the exit');
      if (!reachable(control.pos, level.goal, bCells)) errors.push(id + ': polarity B does not reach the stamped exit');
    }
  }
  if (index === 7) {
    const twin = (level.reciprocatingLiftTwins || []).find(item => item.id === 'l10_recipro_lift_pair');
    const liftA = (level.liftBlocks || []).find(item => twin && item.id === twin.liftA);
    const twinControl = (level.buttons || []).find(item => item.activates === 'l10_recipro_lift_pair');
    const polaritySwitch = (level.bridgePolaritySwitches || []).find(item => item.id === 'l10_polarity_switch');
    const polarityControl = (level.buttons || []).find(item => item.activates === 'l10_polarity_switch');
    const aBridge = polaritySwitch && polaritySwitch.bridges.find(bridge => bridge.path === 'A');
    const bBridge = polaritySwitch && polaritySwitch.bridges.find(bridge => bridge.path === 'B');
    if (!twin || !liftA || !twinControl || !polaritySwitch || !polarityControl || !aBridge || !bBridge) {
      errors.push(id + ': twin-lift/polarity sequence is incomplete');
    } else {
      const raisedLiftA = [liftA.pos[0], liftA.targetY, liftA.pos[2]];
      const upperCells = [...level.tiles, raisedLiftA];
      if (polaritySwitch.controlFrom) errors.push(id + ': polarity B must be a deliberate control action, not an automatic controlFrom change');
      if (!sameCell(polarityControl.pos, polaritySwitch.pos)) errors.push(id + ': upper polarity control must sit on the switch tile');
      if (!reachable(level.start, polarityControl.pos, upperCells)) errors.push(id + ': raised A lift does not reach the upper polarity control');
      if (reachable(level.start, level.goal, [...upperCells, aBridge.pos])) errors.push(id + ': polarity A must not reach the crown exit');
      if (!reachable(polarityControl.pos, level.goal, [...upperCells, bBridge.pos])) errors.push(id + ': deliberate polarity B does not reach the crown exit');
    }
  }
  if (index === 8) {
    const transfer = (level.transferPads || [])[0];
    const gate = (level.directionalGates || [])[0];
    if ((level.transferPads || []).length !== 1 || (level.directionalGates || []).length !== 1 || !transfer || !gate) {
      errors.push(id + ': Level 9 must contain one transfer and one directional gate');
    } else {
      const directDx = gate.pos[0] - transfer.to[0];
      const directDz = gate.pos[2] - transfer.to[2];
      if (Math.abs(directDx) + Math.abs(directDz) !== 1) errors.push(id + ': transfer landing must visibly present the wrong direct gate approach');
      if (directDx === gate.enterDir[0] && directDz === gate.enterDir[1]) errors.push(id + ': direct post-transfer gate entry must be rejected so the loop matters');
      if (!reachableWithDirectionalGates(transfer.to, level.goal, level.tiles, level.directionalGates)) {
        errors.push(id + ': directional loop does not provide a legal route from transfer landing to crown');
      }
    }
    if ((level.delayedLiftTriggers || []).length || (level.liftBlocks || []).length || (level.buttons || []).length) {
      errors.push(id + ': delayed-lift system must remain removed so Level 9 focuses on transfer and direction');
    }
  }
  if (index === 11) {
    const trigger = (level.delayedLiftTriggers || []).find(item => item.id === 'l19_delay_corner');
    const delayedButton = (level.buttons || []).find(item => item.activates === 'delayedLift:l19_delay_corner');
    const delayedLift = (level.liftBlocks || []).find(item => item.id === 'l19_delay_lift');
    if (!trigger || !delayedButton || !delayedLift) {
      errors.push(id + ': visible delayed-lift sequence is incomplete');
    } else {
      const visibleDistance = Math.abs(delayedButton.pos[0] - delayedLift.pos[0]) + Math.abs(delayedButton.pos[2] - delayedLift.pos[2]);
      if (visibleDistance !== 2 || delayedButton.pos[2] !== delayedLift.pos[2]) {
        errors.push(id + ': delayed lift must remain visibly aligned two cells ahead of its clock button');
      }
      if (trigger.liftId !== delayedLift.id || trigger.delayMoves !== 2) {
        errors.push(id + ': delayed lift must rise after the intentional two-move detour');
      }
      const requiredDetour = [[2,0,3],[3,0,3],[4,0,3]];
      if (!requiredDetour.every(step => level.tiles.some(tile => sameCell(tile, step)))) {
        errors.push(id + ': visible two-move delay detour is incomplete');
      }
      const raisedDelayed = [delayedLift.pos[0], delayedLift.targetY, delayedLift.pos[2]];
      const fixedCrownStair = [[5,1,4],[6,1,4],[6,2,3],[5,2,3],[5,3,2]];
      if (!fixedCrownStair.every(step => level.tiles.some(tile => sameCell(tile, step)))) {
        errors.push(id + ': compact three-tier crown zigzag is incomplete');
      }
      if (reachable(level.start, level.goal, level.tiles)) {
        errors.push(id + ': crown route must remain blocked before the delayed lift rises');
      }
      if (!reachable(level.start, level.goal, [...level.tiles, raisedDelayed])) {
        errors.push(id + ': raised delayed lift and fixed crown stair do not complete the route');
      }
    }
    if ((level.buttons || []).length !== 1 || (level.liftBlocks || []).length !== 1) {
      errors.push(id + ': Level 12 must focus on one delayed-lift control without a redundant final lift');
    }
  }
  if (index === 12) {
    const couplers = level.stepBlockCouplers || [];
    const firstLift = (level.liftBlocks || []).find(item => item.id === 'ccFirstCouplerLift');
    const secondLift = (level.liftBlocks || []).find(item => item.id === 'ccSecondCouplerLift');
    const commitLift = (level.liftBlocks || []).find(item => item.id === 'ccCommitLift');
    const commitButton = (level.buttons || []).find(item => item.activates === 'ccCommitLift');
    if (couplers.length !== 2 || !firstLift || !secondLift || !commitLift || !commitButton) {
      errors.push(id + ': focused two-coupler/commitment sequence is incomplete');
    } else {
      const firstRaised = [firstLift.pos[0], firstLift.targetY, firstLift.pos[2]];
      const secondRaised = [secondLift.pos[0], secondLift.targetY, secondLift.pos[2]];
      const commitRaised = [commitLift.pos[0], commitLift.targetY, commitLift.pos[2]];
      if (couplers[0].toggles !== firstLift.id || couplers[1].toggles !== secondLift.id) {
        errors.push(id + ': each coupler must control only its next visible stair block');
      }
      if (reachable(level.start, commitButton.pos, level.tiles)) {
        errors.push(id + ': both coupler steps must be required before the commitment control');
      }
      if (reachable(level.start, commitButton.pos, [...level.tiles, firstRaised])) {
        errors.push(id + ': the second coupler step must remain necessary');
      }
      if (!reachable(level.start, commitButton.pos, [...level.tiles, firstRaised, secondRaised])) {
        errors.push(id + ': raised coupler steps do not reach the commitment control');
      }
      if (reachable(level.start, level.goal, [...level.tiles, firstRaised, secondRaised])) {
        errors.push(id + ': crown route must remain blocked before the commitment lift');
      }
      if (!reachable(level.start, level.goal, [...level.tiles, firstRaised, secondRaised, commitRaised])) {
        errors.push(id + ': committed lift and fixed crown stair do not reach the goal');
      }
      const readableCrownSpine = [[6,3,4],[6,4,3],[6,5,2],[6,6,1],[5,7,1],[4,8,1],[4,8,0]];
      if (!readableCrownSpine.every(step => level.tiles.some(tile => sameCell(tile, step)))) {
        errors.push(id + ': readable one-height-at-a-time crown spine is incomplete');
      }
      if (level.tiles.some(tile => !sameCell(tile, level.goal) && tile[0] === level.goal[0] && tile[2] === level.goal[2])) {
        errors.push(id + ': Level 13 yellow crown target must not sit above another brick');
      }
      if (!Array.isArray(commitLift.oneWayExit) || commitLift.oneWayExit.length !== 3 || commitLift.oneWayExit[0] !== -1 || commitLift.oneWayExit[1] !== 0 || commitLift.oneWayExit[2] !== 0) {
        errors.push(id + ': final lift must preserve the westward one-way commitment');
      }
    }
    if ((level.gearBridges || []).length || (level.keys || []).length || (level.keyLocks || []).length) {
      errors.push(id + ': redundant gear and key permissions must remain removed');
    }
  }
  if (index === 13) {
    const hub = [5,2,5];
    const key = (level.keys || []).find(item => item.id === 'scCourtyardKey');
    const lock = (level.keyLocks || []).find(item => item.keyId === 'scCourtyardKey');
    const bridge = (level.foldingBridges || []).find(item => item.id === 'scCourtyardBridge');
    const control = (level.buttons || []).find(item => item.activates === 'scCourtyardBridge');
    if (!key || !lock || !bridge || !control) {
      errors.push(id + ': courtyard key/bridge choice is incomplete');
    } else {
      const beforeBridge = level.tiles.filter(tile => !sameCell(tile, lock.pos));
      const bridgeOnly = [...beforeBridge, bridge.target];
      const keyOnly = [...level.tiles];
      const preparedRoute = [...level.tiles, bridge.target];
      if (!reachable(level.start, hub, level.tiles)) errors.push(id + ': fixed stair does not reach the courtyard hub');
      if (!reachable(hub, key.pos, beforeBridge) || !reachable(hub, control.pos, beforeBridge)) {
        errors.push(id + ': key and bridge-control branches must both be reachable from the hub');
      }
      if (!reachable(key.pos, control.pos, beforeBridge) || !reachable(control.pos, key.pos, beforeBridge)) {
        errors.push(id + ': courtyard branches cannot be completed in either order');
      }
      if (reachable(level.start, level.goal, bridgeOnly)) errors.push(id + ': bridge alone must not bypass the key lock');
      if (reachable(level.start, level.goal, keyOnly)) errors.push(id + ': key alone must not bypass the folded bridge');
      if (!reachable(level.start, level.goal, preparedRoute)) errors.push(id + ': prepared bridge and key route does not reach the crown');
      const openCrownApproach = [[5,6,0],[6,7,0],[7,8,0],[8,8,0]];
      if (!openCrownApproach.every(step => level.tiles.some(tile => sameCell(tile, step)))) {
        errors.push(id + ': spaced outward crown approach is incomplete');
      }
      if (level.tiles.some(tile => !sameCell(tile, level.goal) && tile[0] === level.goal[0] && tile[2] === level.goal[2])) {
        errors.push(id + ': yellow crown target must not be stacked directly above another brick');
      }
    }
    if ((level.buttons || []).length !== 1 || (level.liftBlocks || []).length !== 0 || (level.keys || []).length !== 1 || (level.keyLocks || []).length !== 1 || (level.foldingBridges || []).length !== 1) {
      errors.push(id + ': Level 14 must remain a focused one-key/one-bridge courtyard without repetitive lifts');
    }
  }
  if (index === 14) {
    const pads = level.transferPads || [];
    const bridge = (level.foldingBridges || []).find(item => item.id === 'tpFoundryBridge');
    const control = (level.buttons || []).find(item => item.activates === 'tpFoundryBridge');
    if (pads.length !== 2 || !bridge || !control) {
      errors.push(id + ': focused twin-transfer route is incomplete');
    } else {
      const first = pads.find(item => item.id === 'tpFoundryPadA');
      const second = pads.find(item => item.id === 'tpFoundryPadB');
      if (!first || !second) errors.push(id + ': both named foundry transfer pads are required');
      else {
        if (!reachable(level.start, first.from, level.tiles)) errors.push(id + ': lower island does not reach the first transfer');
        if (!reachable(first.to, control.pos, level.tiles)) errors.push(id + ': first transfer does not reach the bridge side control');
        if (reachable(first.to, second.from, level.tiles)) errors.push(id + ': second transfer must remain blocked before the bridge opens');
        if (!reachable(first.to, second.from, [...level.tiles, bridge.target])) errors.push(id + ': opened bridge does not reach the second transfer');
        if (!reachable(second.to, level.goal, level.tiles)) errors.push(id + ': second transfer does not reach the crown climb');
        const openCrownApproach = [[6,5,2],[5,5,2],[4,6,2],[3,7,2],[2,8,2],[1,8,2]];
        if (!openCrownApproach.every(step => level.tiles.some(tile => sameCell(tile, step)))) {
          errors.push(id + ': straight outward crown approach is incomplete');
        }
        if (level.tiles.some(tile => !sameCell(tile, level.goal) && tile[0] === level.goal[0] && tile[2] === level.goal[2])) {
          errors.push(id + ': yellow crown target must not be stacked directly above another brick');
        }
      }
    }
    if ((level.buttons || []).length !== 1 || (level.foldingBridges || []).length !== 1 ||
        (level.liftBlocks || []).length || (level.keys || []).length || (level.keyLocks || []).length ||
        (level.gearBridges || []).length) {
      errors.push(id + ': Level 15 must remain focused on two transfers and one bridge preparation');
    }
  }
}
if (errors.length) {
  console.error('DIORAMA structural check FAILED (' + errors.length + '):\\n' + errors.join('\\n'));
  process.exitCode = 1;
} else {
  console.log('DIORAMA structural check PASSED: ' + levels.length + ' named levels with valid core fields.');
  console.log('LIMITATION: does not test solvability, geometry, mechanics or browser behavior.');
}
