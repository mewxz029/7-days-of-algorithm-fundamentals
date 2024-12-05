import { describe, it, expect } from 'bun:test'
import { isValid } from '.'

describe('isValid', () => {
  const testCases = [
    { name: 'Example 1', input: '()', want: true },
    { name: 'Example 2', input: '()[]{}', want: true },
    { name: 'Example 3', input: '(]', want: false },
    { name: 'Example 4', input: '({)}', want: false },
    { name: 'Example 5', input: '([{}])', want: true }
  ]

  testCases.forEach(tc => {
    it(tc.name, () => {
      const got = isValid(tc.input)
      expect(got).toEqual(tc.want)
    })
  })
})
