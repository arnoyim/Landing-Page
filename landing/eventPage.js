// Checking for Geolocation.
var storage = chrome.storage.local;

var geoOptions = function () {
  maximumAge: 5 * 60 * 1000
};

var geoSuccess = function (position) {
  var lat = Math.round(position.coords.latitude*10000) / 10000;
  var long = Math.round(position.coords.longitude*10000) / 10000;
  var geoLocation = { geoLocation:[lat, long] };
  storage.set(geoLocation);
};

var geoError = function(position) {
  console.log('Error occurred. Error code: ' + error.code);
  // error.code can be:
  //   0: unknown error
  //   1: permission denied
  //   2: position unavailable (error response from location provider)
  //   3: timed out
};

navigator.geolocation.getCurrentPosition (geoSuccess, geoError, geoOptions);

chrome.runtime.onMessage.addListener (
    function (request, sender, sendResponse) {
        if (request.command == "geoLocate") {
          storage.get('geoLocation', function(results){
            sendResponse(results);
          });
        return true; // Needed because the response is asynchronous

      }
    }
);
