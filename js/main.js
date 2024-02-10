const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

singapore = "../data/NationalMapPolygonKML.geojson"

var handleGeoJSON = function (data) {
  console.log(data)
}

// $ = shortcut for jquery
$.getJSON(singapore, handleGeoJSON)

fetch(guinea).then(function(response) { return response.json() }).then(handleGeoJSON)

console.log(singapore)

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