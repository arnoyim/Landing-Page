var React = require('react');

// Flux weather view.
var FluxWeather = React.createClass({
  render: function() {
    var city = this.props.weather;
    var tempK = null;
    var description= null;
    for (i in city.main){
      tempK = city.main["temp"];
    }
    if (tempK != null) {
      var tempF = Math.round((tempK - 273.15) * 1.80 + 32.00) + " F";
    }
    for (i in city.weather) {
      description = city.weather[0]['description']
    }
    return (
        <div className="flux-weather">
            <h1 className="city">{city.name}</h1>
            <p className="city-temp">{tempF}</p>
            <p className="city-desc">{description}</p>
        </div> || ""
    );
  },
});

module.exports = FluxWeather;
