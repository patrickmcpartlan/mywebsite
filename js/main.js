//Create a new variable named map, which div to go to
//Create a new variable named map, which div to go to

var map = L.map('map', {
	center: [5,28],
	zoom: 2, 
	minZoom: 0,
	maxZoom: 20
});
//Take online basemap
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

//added at Example 2.3 line 20...function to attach popups to each mapped feature
function onEachFeature(feature, layer) {
    //no property named popupContent; instead, create html string with all properties
    var popupContent = "";
    if (feature.properties) {
        //loop to add feature property names and values to html string
        for (var property in feature.properties){
            popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
        }
        layer.bindPopup(popupContent), layer.setIcon(boatIcon);
    };
};

//add GeoJson

var boatIcon = new L.Icon({iconUrl:"images/boat__.png"})

//good ware credit for label

var corona_boat = '<img src= "images/corona_port.jpeg" height ="150px" width = "300px"/>';

        var markerDesign = {
                radius: 2,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };
    

//function getData (feature, layer) {
//    layer.bindPopup("<h1 class='infoHeader'>You've selected a port</h1> <p class = 'infoHeader'>" + 
//    feature.properties.port_name + "| 2020 export Totals:" + feature.properties.exports + "</p>")
//    layer.setIcon(boatIcon);
//};



//L.geoJson(TopShippingPorts
//).addTo(map);

//Working//

var US_ports = L.geoJson(US_PORTS, {
                onEachFeature: onEachFeature
            }
            ).addTo(map);

//var myGeoJson = L.geoJson(TopShippingPorts_YearToYear, {
//  onEachFeature: onEachFeature
//}).addTo(map);


var myGeoJson = L.geoJson(TopShippingPorts_YearToYear, {
    pointToLayer: function(feature, latlng){
    return L.circleMarker(latlng, markerDesign);
}, filter: function(feature,layer) {
    return feature.properties.Q1_2006 > 60;
}
}).addTo(map);




//$.ajax(TopShippingPorts_YearToYear, {
//    dataType: "json", 
//    success: function(response){
//        
//        L.geoJSON(response, {
//            filter: function(feature, layer){
//                return feature.properties.Q1_2006 > 2000;
//            }
//        }).addToMap
//    }
//})


