import { vi, test, expect } from 'vitest';
import { greet } from './spying';

test('Greet function is called with correct argument', () => {
  // one way to test is to check if the function returns undefined
  // this is not the best way to test, but it works
  expect(greet('Sam')).toBeUndefined();
  expect(greet('Szidi')).toBeUndefined();
});

test('Console spy is called with correct value & argument', () => {
  // another way to test is to spy on the console.log function
  // and check if it was called with the correct argument
  const spy = vi.spyOn(console, 'log');
  greet('Sammi');
  expect.soft(spy).toHaveBeenCalledTimes(1);
  expect.soft(spy).toHaveBeenCalledWith('Hello, Sammi!');

  spy.mockReset();
  greet('Szi');
  expect.soft(spy).toHaveBeenCalledTimes(1);
  expect.soft(spy).toHaveBeenCalledWith('Hello, Szi!');
});

test('Console spy is called in correct order', () => {
  const spy = vi.spyOn(console, 'log');
  greet('Sammy');
  greet('Szidy');

  // now we can check the order of the calls
  expect.soft(spy).toHaveBeenCalledTimes(2);
  expect.soft(spy.mock.calls[0][0]).toBe('Hello, Sammy!');
  expect.soft(spy.mock.calls[1][0]).toBe('Hello, Szidy!');
  // snapshot the spy calls
  expect(spy).toMatchInlineSnapshot(`
    [MockFunction log] {
      "calls": [
        [
          "Hello, Sammy!",
        ],
        [
          "Hello, Szidy!",
        ],
      ],
      "results": [
        {
          "type": "return",
          "value": undefined,
        },
        {
          "type": "return",
          "value": undefined,
        },
      ],
    }
  `);
});