const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

singapore = "../data/NationalMapPolygonKML.geojson"

var handleGeoJSON = function (sing) {
  console.log(sing.features)

  let projection = d3.geoMercator().center([107,0]).scale(5000)
  var path = d3.geoPath(projection);
  let geoGenerator = d3.geoPath();

  svg.selectAll('path')
  .data(sing.features)
  .enter()
  .append('path')
  .attr("fill", "none")
  .attr("stroke", "green")
  .attr('d', function (d) { return path(d); });

}

// $ = shortcut for jquery
$.getJSON(singapore, handleGeoJSON)
fetch(singapore).then(function(response) { return response.json() }).then(handleGeoJSON)
console.log(singapore)

let projection = d3.geoMercator().center([1, 103]).scale(500);
var path = d3.geoPath(projection);
let geoGenerator = d3.geoPath();

