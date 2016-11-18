// Adding the Layer and the Map
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var map = L.map('map', {
  center: [38.94, -77.01],
  zoom: 11
});
map.addLayer(layer);

L.circle([38.94, -77.01], 1600).addTo(map);

function displayPolygon(){

  // Get the numbers from html inputs
  var Longitude, Latitude, Radius;

  // create polygon
  // Add the polygon to the map
  var NewCircle = L.circle([Latitude, Longitude], {
	  color: '#2d862d',
	  fillColor: '#71f471', 
	  fillOpacity: 0.5,
	  radius: Radius,
  }).addTo(map);
  

 
}

