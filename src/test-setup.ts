import { beforeAll, afterEach, afterAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
// https://mswjs.io/docs

// Mock the network request
const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/posts/:id', (req) => {
    const { id } = req.params
    return HttpResponse.json({
      body: `mocked body for post ${id}`,
    })
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())