import { Option } from '../index.js';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('when the long flag uses underscores then the attribute name is camel case', () => {
  const option = new Option('--dry_run');
  assert.equal(option.attributeName(), 'dryRun');
});
