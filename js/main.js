const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

singaporeOutline = FileAttachment("../data/NationalMapPolygonKML.geojson").json()

console.log(singaporeOutline)

// Plot.plot({
//   marks: [
//     Plot.geo(singaporeMainland, {
//       fill: (d) => '#FAF8ED',
//       stroke: (d) => 'black'
//     }),
//     Plot.geo(parks, {
//       fill: (d) => '#748E63',
//       stroke: (d) => 'black'
//     })
//     ]
// })

svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "green")