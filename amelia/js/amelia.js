var mapid = L.map('mapid').setView([40,0], 2);


L.tileLayer('https://api.mapbox.com/styles/v1/michealasosby/cj2gqkjvp004q2tl81xxy27ik/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGVhbGFzb3NieSIsImEiOiJjajJnbzFxengwMDI1MnltOWQzb2h5cDhoIn0.4yijYdtqk5fof4sts2lMjg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
}).addTo(mapid);


mapid.scrollWheelZoom.disable();
/*mapid.doubleClickZoom.disable();
mapid.touchZoom.disable();
mapid.dragging.disable();*/

/*Mexico City to Newark*/
var flight1 = new L.Polyline([
    [[19.432608, -99.133209],
    [40.7357, -74.1724]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip('1935: First person to fly solo nonstop from Mexico City to Newark, 14hrs 19min').addTo(mapid);

flight1.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight1.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});

/*New Foundland to Wales*/
var flight2 = new L.Polyline([
    [[53.135509, -57.660435],
    [53.341433, -1.296663]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip('1932: First woman to fly solo across the Atlantic, 14hrs 56min').addTo(mapid);

flight2.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight2.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});

/*Los Angeles to Mexico City*/
var flight3 = new L.Polyline([
    [[34.059761, -118.276802],
    [19.432608, -99.133209]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip('1935: First person to fly solo from Los Angeles to Mexico City, 13hrs 23min').addTo(mapid);

flight3.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight3.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});

/*New York to Paris*/
var flight4 = new L.Polyline([
    [[40.785091, -73.984016],
    [48.858093, 2.294694]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip('1928: First woman to fly across the Atlantic, 20hrs 40min').addTo(mapid);

flight4.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight4.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});

/*Oakland, Burbank, Tucson, New Orleans, Miami, San Juan, Caripito, Paramaribo, Fortaleza, Natal, Saint-Louis, Dakar, Gao, Ndjamena, El Fasher, Khartoum, Massawa, Assab,Karachi, Calcutta, Sittwe, Rangoon, Bangkok, Singapore, Bandoeng, Soerabaja, Bandoeng, Koepang, Port Darwin, Lae*/
var flight5 = new L.Polyline([
    [[37.801239, -122.258301],
    [34.253460, -110.911789],
    [32.253460, -110.911789],
    [29.951065, -90.071533],
    [25.761681, -80.191788],
    [18.466333, -66.105721],
    [10.107305, -63.103077],
    [5.839398, -55.199089],
    [-3.731862, -38.526669],
    [-5.812757, -35.255127],
    [16.0326, -16.4818],
    [16.2640, -0.0280],
    [12.1348, 15.0557],
    [13.6198, 25.3549],
    [15.5007, 32.5599],
    [15.6079, 39.4554],
    [13.0139, 42.7369],
    [24.8615, 67.0099],
    [22.5726, 88.3639],
    [20.1528, 92.8677],
    [16.8661, 96.1951],
    [13.7563, 100.5018],
    [1.3521, 103.8198],
    [6.9175, 107.6191],
    [7.2575, 112.7521],
    [6.9175, 107.6191],
    [10.1772, 123.6070],
    [-12.46113, 130.84185],
    [6.7155, 146.9999]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip("1937: Earhart's attempt to circumnavigate the world and her final flight").addTo(mapid);

flight5.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight5.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});

/*Honolulu to Oakland*/
var flight6 = new L.Polyline([
    [[21.315603, -157.858093],
    [37.801239, -122.258301]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip('1935: First person to fly solo across the Pacific from Honolulu to Oakland').addTo(mapid);

flight6.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight6.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});

/*Los Angeles to Newark*/
var flight7 = new L.Polyline([
    [[34.059761, -118.276802],
    [40.7357, -74.1724]],
], {opacity: 0.6, color: '#B25335'}).bindTooltip('1932: First woman to fly solo nonstop coast to coast, 19hrs 5min').addTo(mapid);

flight7.on('mouseover', function() {
    this.setStyle({
        opacity: 1  //or whatever style you wish to use;
    });
});

flight7.on('mouseout', function() {
    this.setStyle({opacity: 0.6})
});
