import { suite, test, expect, vi } from 'vitest'
import { say, world } from './world.js'

vi.mock('./world');
vi.mock('hello')

suite('world', () => {
  test('world', () => {
    expect(world()).toBe('WORLD')
  })
  test('say', () => {
    expect(say()).toBe('WORLD, HELLO?')
  })
})
