import assert from 'node:assert/strict';
import { test } from 'node:test';
import { page } from '../src/page.js';

const items = [1, 2, 3, 4, 5];

test('page 1 is the first page', () => {
  assert.deepEqual(page(items, 1, 2), [1, 2]);
});

test('later pages follow on', () => {
  assert.deepEqual(page(items, 2, 2), [3, 4]);
});

test('the last page can be partial', () => {
  assert.deepEqual(page(items, 3, 2), [5]);
});
