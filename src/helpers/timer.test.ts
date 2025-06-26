import { test, expect, vi, beforeEach } from 'vitest'

function warnLater(msg) {
  setTimeout(() => {
    console.warn(msg)
  }, 2_000)
}

beforeEach(() => {
  vi.useFakeTimers() // used to mock the timers in conjunction with advanceTimersByTime
})

test('displays warn later message', async () => {
  const logSpy = vi.spyOn(console, 'warn')

  warnLater('2 seconds passed')
  
  expect(logSpy).not.toHaveBeenCalled() // Should not be called immediately
  
  // await new Promise(resolve => setTimeout(resolve, 2_000)) // this would be slow as the test would literally wait 2 seconds
  // Instead, we fast-forward the timers
  vi.advanceTimersByTime(2_000) // Fast-forward the timers

  expect(logSpy).toBeCalledWith('2 seconds passed')
})