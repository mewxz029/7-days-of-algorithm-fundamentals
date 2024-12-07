export function dijkstra(graph: number[][], start = 0): number[] {
  const distance = []
  const visited = []

  for (let i = 0; i < graph.length; i++) {
    distance.push(Infinity)
    visited.push(false)
  }
  
  distance[start] = 0

  for (let i = 0; i < graph.length - 1; i++) {
    let min = Infinity
    let minIndex = -1

    for (let j = 0; j < graph.length; j++) {
      if (!visited[j] && distance[j] <= min) {
        min = distance[j]
        minIndex = j
      }
    }
    
    visited[minIndex] = true

    for (let j = 0; j < graph.length; j++) {
      if (!visited[j] && graph[minIndex][j] !== 0 &&
            distance[minIndex] !== Infinity &&
            distance[minIndex] + graph[minIndex][j] < distance[j]) {
        distance[j] = distance[minIndex] + graph[minIndex][j]
      }
    }
  }
  return distance
}

// TODO: BFS function
// TODO: Adjacency list

export function simulate(n: number, shortcuts: number[][], timeLimit: number): string {
  const graph = []
  const vertices = n + 1

  const shortcutsMap: any = {}
  for (let i = 0; i < shortcuts.length; i++) {
    const [from, to] = shortcuts[i]
    shortcutsMap[from] = {
      ...shortcutsMap[from],
      [to]: 1
    }
  }

  for (let i = 0; i < vertices; i++) {
    const row = []
    for (let j = 0; j < vertices; j++) {
      let weight = 0
      if (j === i+1) {
        weight = 1
      }
      if (shortcutsMap?.[i]?.[j]) {
        weight = 1
      }
      row.push(weight)
    }
    graph.push(row)
  }

  const distances = dijkstra(graph)

  let shortestPath = distances[n] 
  if (shortestPath > timeLimit) {
  for (let i = n; i >= 0; i--) {
      if (distances[i] <= timeLimit) {
        return `ERR:${i}`
      }
    }
  }
  return `OK:${shortestPath}`
}
