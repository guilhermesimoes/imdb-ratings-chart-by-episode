var container = document.getElementById("js-content"),
    width = container.clientWidth,
    height = container.clientHeight,
    yAxisWidth = 30,
    xAxisHeight = 40,
    chartTopPadding = 20,
    chartBottomPadding = 10,
    chartWidth = width - yAxisWidth,
    chartHeight = height - chartTopPadding - chartBottomPadding - xAxisHeight,
    linePadding = 1; /* https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-ordinal_rangePoints */

var lineAnimationDuration = 2500,
    delay = lineAnimationDuration / episodes.length,
    labelFadeDuration = 1000;

var animationDelay = function(d, i) {
    return i * delay;
};

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
var nodeGroupPos = function(d) {
    return "translate(" + xPos(d) + "," + yPos(d) + ")";
};

// accessor functions
var nodeValues = function(d) { return d.rating; }

var maxRating = 10,
    ids = episodes.map(function(d){ return d.id; });

x.domain(ids);
y.domain([d3.min(episodes, function(d) { return d.rating; }), maxRating]);

var line = d3.svg.line()
    .x(xPos)
    .y(yPos);

var svg = d3.select(container).append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + yAxisWidth + "," + (height - xAxisHeight) + ")")
    .call(xAxis)
    .selectAll("text")
        .attr("class", "x-point-label")
        .style("text-anchor", "end")
        .attr("dx", "-.5em")
        .attr("dy", ".55em")
        .attr("transform", "rotate(-45)");

var axis = svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + yAxisWidth + "," + chartTopPadding + ")")
    .call(yAxis);

axis.selectAll("text")
    .attr("class", "y-point-label");

axis.append("text")
    .attr("class", "y-axis-label")
    .style("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".71em")
    .attr("transform", "rotate(-90)")
    .text("Average Rating");

var lineContainer = svg.append("g")
    .attr("transform", "translate(" + yAxisWidth + "," + chartTopPadding + ")");

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

nodes = lineContainer.selectAll("g")
    .data(episodes)
    .enter().append("g")
    .attr("transform", nodeGroupPos);

nodes.append("circle")
    .attr("r", 0)
    .attr("class", "node")
    .transition()
        .delay(animationDelay)
        .attr("r", 6);

nodes.append("text")
    .attr("x", -24)
    .attr("y", -10)
    .text(nodeValues)
    .attr("class", "node-label")
    .attr("opacity", 0)
    .transition()
        .delay(lineAnimationDuration)
        .duration(labelFadeDuration)
        .attr("opacity", 1);
