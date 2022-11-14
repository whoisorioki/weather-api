let longitude = "1.360321";
let latitude = "103.846733";

function loadSite () {
  if (navigator.geolocation) { // device can return its location
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      getWeather();
    });
  }
}