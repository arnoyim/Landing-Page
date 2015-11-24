var React = require('react');

// Flux weather view.
var FluxWeather = React.createClass({
  render: function() {
    var city = this.props.weather;
    var tempK;
    for (i in city.main){
      tempK = city.main["temp"];
    }
    var tempF = (tempK - 273.15) * 1.80 + 32.00
    return (
        <div className="flux-weather">
          <div className="flux-weather-detail">
            <h1 className="city">{city.name}</h1>
            <p className="city-desc">{tempF}</p>
          </div>
        </div>
    );
  },
});

module.exports = FluxWeather;
