import { test, expect, vi } from 'vitest'

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5) // Returns HH:MM format
}

test('time returns correct format', () => {
  const time = getCurrentTime()
  expect(time).toMatch(/^\d{2}:\d{2}$/)
})

test('test with mocked time', () => {
  vi.setSystemTime(new Date('2023-01-01 12:00:00'))
  expect(getCurrentTime()).toBe('12:00')
  vi.useRealTimers() // resets the system time to the real current time
})