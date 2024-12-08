// TODO: Implement dfs to find level
export function bfsFindLevel(graph: number[][], node: number): number {
  const visited = []
  const queue = []

  visited.push(node)
  queue.push(node)

  let level = 0
  const mapLevel = {
    [node]: level
  }

  const traversed = []
  while (queue.length > 0) {
    const s: any = queue.shift()
    traversed.push(s)

    for (let i = 0; i < graph[s].length; i++) {
      if (!mapLevel[graph[s][i]]) {
        mapLevel[graph[s][i]] = mapLevel[s] + 1
      }
      if (visited.indexOf(graph[s][i]) === -1) {
        visited.push(graph[s][i])
        queue.push(graph[s][i])
      }
    }
    level++
  }

  let maxLevel = 0
  for (let i = 0; i < traversed.length; i++) {
    const traversedNode = traversed[i]
    if (mapLevel[traversedNode] > maxLevel) {
      maxLevel = mapLevel[traversedNode]
    }
  }
  return maxLevel
}

export function calculateMinGroup(n: number, levels: number[][]): number {
  const graph = new Array(n)
  const parent = new Array(n)

  for (let i = 0; i < n; i++) {
    graph[i] = []
    parent[i] = -1
  }

  for (let i = 0; i < levels.length; i++) {
    const [a, b] = levels[i]
    graph[a - 1].push(b - 1)
    parent[b - 1] = a - 1
  }

  const noGraph = []
  const root = []

  for (let i = 0; i < n; i++) {
    if (parent[i] === -1) {
      if (graph[i].length === 0) {
        noGraph.push(i)
      } else {
        root.push(i)
      }
    }
  }

  let highestLevel = 0
  for (let i = 0; i < root.length; i++) {
    const level = bfsFindLevel(graph, root[i])
    if (level > highestLevel) {
      highestLevel = level
    }
  }

  return highestLevel + 1
}
