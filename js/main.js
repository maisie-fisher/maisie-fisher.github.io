// https://www.d3indepth.com/selections/
// https://docs.mapbox.com/help/getting-started/geospatial-analysis/#turf-area

const svg = d3.select("#svg-singapore")
const svgParks = d3.select("#svg-parks")

singapore = "../data/NationalMapPolygonKML.geojson"
singapore_parks = "../data/NParksParksandNatureReserves.geojson"

const re = /(<th>NAME<\/th> <td>)(.+?)(<\/td>)/;
const re_layers = /(<td>Layers)(.+?)(<\/td>)/;

function removeExtra(l) {
  var desc = l['properties']['Description']
  return desc.includes('Coastal_Outlines')
        && (! desc.includes('MALAYSIA'))
        && (! desc.includes('LINKWAY'))
        && (! desc.includes('CAUSEWAY'));
      // (! desc.includes('MALAYSIA'))
      // && (! desc.includes('Parks_NaturalReserve'))
      // && (! desc.includes('Central_Business_District'))
      // && (! desc.includes('Airport_Runway'))
      // && (! desc.includes('Hydrographic'));
      // How many of these shapes are overlapping?
      
}

function getDesc(l) {
  return (l['properties']['Description'].match(re));
}

// Use JSTS to check for overlap
// https://openlayers.org/en/latest/examples/jsts.html
function getOverlap(fa) {
  var reader = new jsts.io.GeoJSONReader();
  a = reader.read(fa[0].geometry)
  b = reader.read(fa[1].geometry)
  console.log(a.intersection(b));
  return 'Hello';
}

var handleGeoJSON = function (sing) {
  console.log(sing)
  sing['features'] = sing['features'].filter(removeExtra);
  console.log(sing['features'].map((x) => getDesc(x)));
  console.log(getOverlap(sing['features']));
  console.log(sing)

  svg.selectAll('path')
  .data(sing.features)
  .enter()
  .append('path')
  .attr("fill", "#faedcd")
  .attr("stroke", "black")
  .attr('d', function (d) { return path(d); });

  var area = turf.area(sing)
  console.log(sing)

}

var handleGeoJSON_parks = function (sing_parks) {
  svgParks.selectAll('path.parks')
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

console.log('Pre - Mainland Mapping yes')

// $ = shortcut for jquery
$.getJSON(singapore, handleGeoJSON)
fetch(singapore).then(function(response) { return response.json() }).then(handleGeoJSON)

console.log('Post - Mainland Mapping')


// $.getJSON(singapore_parks, handleGeoJSON_parks)
// fetch(singapore_parks).then(function(response) { return response.json() }).then(handleGeoJSON_parks)

// console.log('Post - Parks Mapping')

// Calculate Land Area

// svgDiv.append('circle')
// .attr('cx', '50')
// .attr('cy', '50')
// .attr('r', '50')
// .attr('fill', 'green')