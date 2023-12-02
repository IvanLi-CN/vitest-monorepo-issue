import { suite, test, expect, vi } from 'vitest'
import { hello } from './hello.js'

vi.mock('./hello.js', () => ({
  hello: vi.fn(() => 'HELLO'),
}))

suite('hello', () => {
  test('hello', () => {
    expect(hello()).toBe('HELLO')
  })
})
