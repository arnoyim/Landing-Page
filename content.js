// content.js

  chrome.runtime.sendMessage ( {command: "geoLocate"}, function (response) {
    var lat = response.geoLocation[0];
    var long = response.geoLocation[1];
    // Openweathermap api endpoint
    var urlEndpoint = "http://api.openweathermap.org/data/2.5/weather?lat="+
    lat + "&lon="+long;
    var key = "&appid=3053f56067cef8dccd853b31cdd28aae";
    var openUrl = urlEndpoint + key;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", openUrl , true);
    xhr.onreadystatechange = function () {
      if(xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
        console.log(resp);
        var weather = document.getElementById("weather")
        weather.innerText = resp.weather[0].description;
      }
    }
    xhr.send();

  } );
