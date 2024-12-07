import { describe, it, expect } from 'bun:test'
import { simulate } from '.'

describe('simulate machine', () =>{
  const testCases = [
    { n: 4, shortcuts: [[0,3]], timeLimit: 100, want: "OK:2" },
    { n: 8, shortcuts: [[0,3], [0,4], [3,7]], timeLimit: 100, want: "OK:3" },
    { n: 8, shortcuts: [[0,3], [0,4], [3,7]], timeLimit: 1, want: "ERR:4" },
    { n: 5, shortcuts: [[0,1], [0,5]], timeLimit: 1, want: "OK:1"}
  ]

  testCases.forEach(({ n, shortcuts, timeLimit, want }) => {
    it(`simulate(${n}, ${shortcuts}, ${timeLimit}) should return ${want}`, () => {
      expect(simulate(n, shortcuts, timeLimit)).toBe(want)
    })
  })
})

