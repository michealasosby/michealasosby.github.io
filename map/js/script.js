//Roughly the center of Missouri(lat/long)
var center = [38.6321346, -92.4013551]

//Target the chart div as the container for our leaflet map
//Set the center point and zoom level.
var map = L.map('chart').setView(center, 7);



// add an OpenStreetMap tile layer
//OpenStreetMap is an open source map layers anyone can use free of charge.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'


}).addTo(map);



// //Add an svg element to the map.
var svg = d3.select(map.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide");


//This will be a dictionary object we use to lookup the info for each county.
//It's empty for now. We add our data when we load or json.
var theData = {};

// Use Leaflet to implement a D3 geometric transformation.
function projectPoint(x, y) {
    var point = map.latLngToLayerPoint(new L.LatLng(y, x));
    this.stream.point(point.x, point.y);
}

//http://bl.ocks.org/eesur/4e0a69d57d3bfc8a82c2
d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
        this.parentNode.appendChild(this);
    });
};
d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
}



$(document).ready(function(d) {

  d3.csv("data/missouri-guns.csv", function(data) {

    $.each(data, function(i, item) {

      var zips = item["zipcode"];
      theData[zips] = item;
      var licenses = ["licenses"];

    })
console.log(theData);
    drawMap();

  })

});

function drawMap() {



    d3.json("js/missouri-zips.json", function(collection) {


        var transform = d3.geoTransform({
                point: projectPoint
            }),
            path = d3.geoPath().projection(transform);

            var feature = g.selectAll("path")
                .data(collection.features)
                .enter()
                .append("path")
                .attr("class", "zipcode")
                .attr("fill", function(d) {



                  /* This is where you'll use the dictionary object (theData)
                  to look up your values by zip code and color them accordinly. */

                  // See the lines linked here for an example:
                  /* https://github.com/chriscanipe/missouri-map/blob/master/js/script.js#L117-L134 */

/// Updated upstream


//Stashed changes
d3.select('svg').style('opacity', 0.7)

                  var zips = d.properties.zcta5ce10;
                  console.log(zips);

                  var gunLicenses;

                  if (theData[zips]) {
                    gunLicenses = +theData[zips].licenses;
                  } else {
                    gunLicenses = 0;
                  }

                  console.log(d.properties);


                  if (gunLicenses == 0) {
                    return "#FEFFE7";
                  } else if (gunLicenses > 0 && gunLicenses <= 10) {
                    return "#fecc5c";
                  } else if (gunLicenses > 10 && gunLicenses <= 20) {
                    return "#fd8d3c";
                  } else if (gunLicenses > 20) {
                    return "#e31a1c";
                  }



                })

        .on("mouseover", function(d) {

          var zips = d.properties.zcta5ce10;
          var gunLicenses;

          if (theData[zips]) {
            gunLicenses = theData[zips].licenses;
          } else {
            gunLicenses = 0;
          }

          d3.select(this).style("stroke", "#333").moveToFront();

          var pageX = d3.event.pageX;
          var pageY = d3.event.pageY;

          var chartLeft = $(".chart").position().left;
          var chartTop = $(".chart").position().top;

          var tt_x = pageX - chartLeft + 15;
          var tt_y = pageY - chartTop + 15;

          $(".tt").html(
            "<div class='title'><h8>Federal firearms licenses per ZIP code</h8></div>"+
            "<div class='zipcode'></div>"+zips+"</h5"+
            "&nbsp;&nbsp;<div class='val'><h6><strong>licenses:&nbsp</strong></h6><h5></div>"+gunLicenses+"</h5>"
          ).show();

          $(".tt").css({
            "left" : tt_x+"px",
            "top" : tt_y+"px"
          });

        })

        .on("mouseout", function() {
          d3.select(this).style("stroke", "#FFF").moveToBack();

          $(".tt").hide();
        })

        map.on("viewreset", function() {
            reset();
        });






        // We need a reset() function to redraw and reposition our zip codes
        // whenever the map tile moves. We call it on load as well.
        // Notice the reset() function includes the attr "d" definition
        // That's where the paths are actually drawn.
        function reset() {

            var bounds = path.bounds(collection),
                topLeft = bounds[0],
                bottomRight = bounds[1];

            svg.attr("width", bottomRight[0] - topLeft[0])
                .attr("height", bottomRight[1] - topLeft[1])
                .style("left", topLeft[0] + "px")
                .style("top", topLeft[1] + "px");

            g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

            feature.attr("d", path);

        }


        //Call the reset function.
        reset();

    })
}
