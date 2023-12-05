/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*    d3.select('rect') -> selects first rectangle on the page
*    d3.select('#center') -> selects rectangle with id = 'center'
*    d3.selectAll('rect') -> selects all rectangles on the page
*    d3.selectAll('.outside) -> selects rectangles with class = 'outside'
*    d3.select().append() -> adds SVG as child
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "green")