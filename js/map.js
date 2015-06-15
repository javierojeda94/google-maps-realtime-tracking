var map;
function initialize() {
  var mexico = new google.maps.LatLng(19.4270499, -99.1275711);
  var mapOptions = {
    center: mexico,
    zoom: 5,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?' +
      '&key=YOUR_API_KEY&callback=initialize';
  document.body.appendChild(script);
}

function movePan(x,y){
  var prev_position = map.getCenter();
  var new_position = new google.maps.LatLng(prev_position.lat()+x,prev_position.lng()+y);
  map.panTo(new_position);
}

window.onload = loadScript;