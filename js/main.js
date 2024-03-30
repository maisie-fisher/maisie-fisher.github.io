const svg = d3.select("#svg-test")
const svgDiv = d3.select("#green-split")

svgDiv.append('circle')
.attr('cx', '50')
.attr('cy', '50')
.attr('r', '50')
.attr('fill', 'green')

singapore = "../data/NationalMapPolygonKML.geojson"
singapore_parks = "../data/NParksParksandNatureReserves.geojson"

function removeExtra(l) {
  var desc = l['properties']['Description']
  return ! desc.includes('MALAYSIA');
}

var handleGeoJSON = function (sing) {
  singaporeMainland = sing['features'].filter(removeExtra)

  svg.selectAll('path')
  .data(singaporeMainland)
  .enter()
  .append('path')
  .attr("fill", "#faedcd")
  .attr("stroke", "#faedcd")
  .attr('d', function (d) { return path(d); });

}

var handleGeoJSON_parks = function (sing_parks) {
  console.log(sing_parks)

  svg.selectAll('path.parks')
  .data(sing_parks.features)
  .enter()
  .append('path')
  .attr("fill", "#ccd5ae")
  .attr("stroke", "#ccd5ae")
  .attr('d', function (d) { return path(d); });

}

let projection = d3.geoMercator().scale(110000).center([103.71, 1.36])
var path = d3.geoPath(projection);
let geoGenerator = d3.geoPath();

// $ = shortcut for jquery
$.getJSON(singapore, handleGeoJSON)
fetch(singapore).then(function(response) { return response.json() }).then(handleGeoJSON)
console.log(singapore)

$.getJSON(singapore_parks, handleGeoJSON_parks)
fetch(singapore_parks).then(function(response) { return response.json() }).then(handleGeoJSON_parks)
console.log(singapore_parks)

