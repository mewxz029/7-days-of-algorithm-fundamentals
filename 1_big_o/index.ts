export function findDuplicateNumber(arr: number[]): number {
  // Big O: O(n)
  const passedNumbers: any = {}
  for (let i = 0; i < arr.length; i++) {
    if (passedNumbers[arr[i]]) {
      return arr[i]
    }
    passedNumbers[arr[i]] = true
  }
  return -1
}
