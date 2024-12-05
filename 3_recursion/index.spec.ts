import { describe, it, expect } from 'bun:test';
import { flatten } from '.';

describe('flatten', () => {
  const testCases = [
    { input: [1, [2], [[3], 4], [[[[5]]]]], expected: [1, 2, 3, 4, 5], description: 'example 1' },
    { input: [[[[[[10]]]]]], expected: [10], description: 'example 2' },
    { input: [[], [], []], expected: [], description: 'example 3' },
  ]

  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      const result = flatten(input)
      expect(result).toEqual(expected)
    })
  })
})

