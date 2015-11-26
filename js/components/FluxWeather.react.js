var React = require('react');

// Flux weather view.
var FluxWeather = React.createClass({
  render: function() {
    var city = this.props.weather;
    var tempK;
    var description;
    for (i in city.main){
      tempK = city.main["temp"];
    }
    var tempF = Math.round((tempK - 273.15) * 1.80 + 32.00);
    for (i in city.weather) {
      description = city.weather[0]['description']
    }
    return (
        <div className="flux-weather">
            <h1 className="city">{city.name}</h1>
            <p className="city-temp">{tempF} F</p>
            <p className="city-desc">{description}</p>
        </div>
    );
  },
});

module.exports = FluxWeather;
