import { Command } from '../index.js';
import { test } from 'node:test';
import assert from 'node:assert/strict';

function suggestionFor(program, arg) {
  let message = '';
  program.exitOverride().configureOutput({
    writeErr: (str) => {
      message = str;
    },
  });
  try {
    program.parse([arg], { from: 'user' });
  } catch {
    /* expected */
  }
  return message;
}

test('when the unknown command differs only by case then suggests the command', () => {
  const program = new Command();
  program.command('status');
  program.command('start');
  assert.match(suggestionFor(program, 'Status'), /Did you mean status\?/);
});
