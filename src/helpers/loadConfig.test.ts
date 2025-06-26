import { test, expect, vi } from 'vitest';
import { loadConfig } from './loadConfig';

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal() as typeof import('fs');
  return {
    ...actual,
    existsSync() {
      console.log('mocked existsSync');
      return true;
    },
    readFileSync() {
      console.log('mocked readFileSync');
      return '{ "name": "mocked" }';
    }
  }
})

test('with fs', () => {
  const res = loadConfig();
  expect(res).toEqual({ name: 'mocked'});
});