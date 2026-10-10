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
}
if (errors.length) {
  console.error('DIORAMA structural check FAILED (' + errors.length + '):\\n' + errors.join('\\n'));
  process.exitCode = 1;
} else {
  console.log('DIORAMA structural check PASSED: ' + levels.length + ' named levels with valid core fields.');
  console.log('LIMITATION: does not test solvability, geometry, mechanics or browser behavior.');
}
