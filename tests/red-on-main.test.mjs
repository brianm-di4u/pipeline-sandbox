import { test } from 'node:test';
test('fails only on main', () => { if (process.env.GITHUB_EVENT_NAME === 'push') throw new Error('red'); });
