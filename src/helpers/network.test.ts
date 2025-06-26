import { test, expect } from 'vitest'
import { getPostBody } from './network'

test('test fetch', async () => {
  const result = await getPostBody(1)
  expect(result).toMatchInlineSnapshot(`"mocked body for post 1"`)
})