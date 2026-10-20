import { Option } from '../index.js';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('when the long flag uses tildes then the attribute name is camel case', () => {
  const option = new Option('--dry~run');
  assert.equal(option.attributeName(), 'dryRun');
});
