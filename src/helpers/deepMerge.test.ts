import { test, expect } from 'vitest';
import { deepMerge } from './deepMerge';

test('shallow merge', () => {
  const result = deepMerge(
    {
      name: 'sambuxc',
    },
    {
      github: 'unknown',
    }
  );
  expect(result).toEqual({ name: 'sambuxc', github: 'unknown' });
});

test('shallow merge with overlaps', () => {
  const obj1 = {
    name: 'sambuxc',
    github: 'first-value',
  };
  const obj2 = {
    github: 'new-override-value',
    twitter: 'new-value',
  };
  const result = deepMerge(obj1, obj2);
  expect(result).toEqual({ name: 'sambuxc', github: 'new-override-value', twitter: 'new-value' });
});

test('shallow merge with arrays', () => {
  const result = deepMerge(
    ['vue', 'react'],
    ['svelte', 'angular'],
  );
  expect(result).toEqual(['vue', 'react', 'svelte', 'angular']);
});

test('deep merge with overlaps', () => {
  const obj1 = {
    name: 'sambuxc',
    accounts: {
      github: 'unknown',
    },
    lang: ['js']
  };
  const obj2 = {
    accounts: {
      twitter: 'new-value',
    },
    lang: ['ts', 'python'],
  };
  const result = deepMerge(obj1, obj2);
  // here are different ways to test the result using snapshots
  expect(result).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "unknown",
        "twitter": "new-value",
      },
      "lang": [
        "js",
        "ts",
        "python",
      ],
      "name": "sambuxc",
    }
  `);
  // inline snapshots will output the result
  // and can be useful to quickly see the result
  expect(Math.PI).toMatchInlineSnapshot(`3.141592653589793`);
  expect(Math.sqrt(10)).toMatchInlineSnapshot(`3.1622776601683795`);

  // expect(result).toMatchSnapshot();
  // expect(result).toEqual({ name: 'sambuxc', accounts: { github: 'unknown', twitter: 'new-value' } });
});

test.fails('throws error on merging two different types', () => {
  // one way to test this is to use the `fails` method
  // this test is expected to fail
  const merged = deepMerge(
    ['bam', 'wam'],
    { bam: 'bam' }
  );
});

test('throws error on merging two different types', () => {
  // another way to test this is to use the `expect` method
  // this test is expected to ffthrow an error
  expect(() => deepMerge(
    ['bam', 'wam'],
    { bam: 'bam' }
  )).toThrowError('Error: cannot merge two different types');
});

// Spying
// Monitors a function without changing it's behaviour

// Mocking
// Replaces a function with a fake implementation