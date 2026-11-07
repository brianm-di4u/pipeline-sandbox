import assert from 'node:assert/strict';
import { test } from 'node:test';
import { page } from '../src/page.js';

test('page returns at most size items', () => {
  assert.ok(page([1, 2, 3, 4, 5], 1, 2).length <= 2);
});
