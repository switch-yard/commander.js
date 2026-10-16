import { suggestSimilar } from '../lib/suggestSimilar.js';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('when one candidate is close then suggests it', () => {
  assert.equal(
    suggestSimilar('statsu', ['status', 'start']),
    '\n(Did you mean status?)',
  );
});

test('when two candidates are equally close then suggests both, sorted', () => {
  assert.equal(
    suggestSimilar('tast', ['test', 'task']),
    '\n(Did you mean one of task, test?)',
  );
});

test('when nothing is close then suggests nothing', () => {
  assert.equal(suggestSimilar('xyz', ['status', 'start']), '');
});

test('when looking for an option then keeps its dashes', () => {
  assert.equal(
    suggestSimilar('--verbos', ['--verbose', '--quiet']),
    '\n(Did you mean --verbose?)',
  );
});

test('when there are no candidates then suggests nothing', () => {
  assert.equal(suggestSimilar('status', []), '');
});
