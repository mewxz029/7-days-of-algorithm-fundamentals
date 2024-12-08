import { describe, it, expect } from 'bun:test'
import { calculateMinGroup } from '.'

describe('calculateMinGroup', () => {
  const testCases = [
    { n: 5, levels: [[1, 2], [2, 3], [1, 4]], want: 3 },
    { n: 22, levels: [[4,1],[12,13],[2,22],[22,16],[20,15],[7,14],[17,9],[15,17],[1,10],[14,20],[9,18],[22,12],[16,5]], want: 7 }
  ]

  testCases.forEach(tc => {
    it(`should return ${tc.want} when n=${tc.n} and levels=${tc.levels}`, () => {
      expect(calculateMinGroup(tc.n, tc.levels)).toBe(tc.want)
    })
  })
})
