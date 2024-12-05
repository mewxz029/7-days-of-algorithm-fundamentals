export function flatten(arr: any[]): any[] {
  if (arr.length === 0) return []
  if (typeof arr[0] === 'number') return [arr[0], ...flatten(arr.slice(1))]
  return [...flatten(arr[0]), ...flatten(arr.slice(1))]
}
