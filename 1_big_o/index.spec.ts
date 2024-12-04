import { findDuplicateNumber } from "."
import { describe, expect, it } from 'bun:test'

describe('findDuplicateNumber', () => {
  it('should return -1 if the array has one element', () => {
    expect(findDuplicateNumber([1])).toBe(-1)
  })

  it('should return -1 if there is no duplicate number', () => {
    expect(findDuplicateNumber([1, 2, 3, 4, 5])).toBe(-1)
  })

  it('should return the duplicate number', () => {
    expect(findDuplicateNumber([1, 2, 3, 4, 2])).toBe(2)
  })
})
