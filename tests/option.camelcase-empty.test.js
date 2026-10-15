import { Option } from '../index.js';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('when the long flag has an empty segment then the attribute name skips it', () => {
  const option = new Option('--foo--bar');
  assert.equal(option.attributeName(), 'fooBar');
});
