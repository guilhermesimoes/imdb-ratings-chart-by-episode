var heightMargin = 20, /* This is needed because of browsers' margins and padding and whatnot */
    width = document.body.offsetWidth,
    height = window.innerHeight - heightMargin,
    yAxisWidth = 30,
    xAxisHeight = 40,
    chartBottomPadding = 10,
    chartWidth = width - yAxisWidth,
    chartHeight = height - chartBottomPadding - xAxisHeight,
    linePadding = 1; /* https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-ordinal_rangePoints */

var lineAnimationDuration = 2000;

// scales
var x = d3.scale.ordinal()
    .rangePoints([0, chartWidth], linePadding);
var y = d3.scale.linear()
    .range([chartHeight, 0]);

// axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var xPos = function(d) { return x(d.id); };
var yPos = function(d) { return y(d.rating); };

ids = episodes.map(function(d){ return d.id; });
x.domain(ids);
y.domain(d3.extent(episodes, function(d) { return d.rating; }));

var line = d3.svg.line()
    .x(xPos)
    .y(yPos);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var lineContainer = svg.append("g")
    .attr("transform", "translate(" + yAxisWidth + ",0)");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + yAxisWidth + "," + (height - xAxisHeight) + ")")
    .call(xAxis)
    .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.5em")
        .attr("dy", ".55em")
        .attr("transform", "rotate(-45)");

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + yAxisWidth + ",0)")
    .call(yAxis)
    .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Average Rating");

path = lineContainer.append("path")
    .datum(episodes)
    .attr("class", "line")
    .attr("d", line);

var totalLength = path.node().getTotalLength();

path
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
        .duration(lineAnimationDuration)
        .ease("linear")
        .attr("stroke-dashoffset", 0);
