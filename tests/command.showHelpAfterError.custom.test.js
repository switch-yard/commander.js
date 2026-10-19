import { Command } from '../index.js';
import { test } from 'node:test';
import assert from 'node:assert/strict';

function program(message) {
  const written = [];
  const command = new Command()
    .exitOverride()
    .configureOutput({
      writeErr: (text) => written.push(text),
      writeOut: () => {},
    })
    .option('--quiet');
  command.showHelpAfterError(message);
  return { command, written };
}

test('when an unknown option is given then the custom hint follows the error', () => {
  const { command, written } = program('(run with --help for every option)');
  assert.throws(() => command.parse(['--loud'], { from: 'user' }));
  assert.match(written.join(''), /unknown option '--loud'/);
  assert.match(written.join(''), /\(run with --help for every option\)/);
});

test('when the hint is turned off then only the error is written', () => {
  const { command, written } = program(false);
  assert.throws(() => command.parse(['--loud'], { from: 'user' }));
  assert.doesNotMatch(written.join(''), /--help/);
});
