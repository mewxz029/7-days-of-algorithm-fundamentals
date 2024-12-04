export function findMin(arr: number[]): number {
  const n = arr.length
  let left = 0
  let right = arr.length - 1
  let min = -1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] > arr[n - 1]) {
      left = mid + 1
    } else {
      right = mid - 1
      min = arr[mid]
    }
  }
  return min 
}
