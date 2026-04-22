const dijkstra = require("../algorithms/dijkstra");

exports.optimizeRoute = (req, res) => {
  const { graph, start } = req.body;
  const result = dijkstra(graph, start);
  res.json(result);
};