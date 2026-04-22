function dijkstra(graph, start) {
  let distances = {};
  let visited = new Set();

  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let closest = null;

    for (let node in distances) {
      if (!visited.has(node)) {
        if (closest === null || distances[node] < distances[closest]) {
          closest = node;
        }
      }
    }

    visited.add(closest);

    for (let neighbor in graph[closest]) {
      let newDist = distances[closest] + graph[closest][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
      }
    }
  }

  return distances;
}

module.exports = dijkstra;