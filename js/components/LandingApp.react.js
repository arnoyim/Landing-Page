var React = require('react');
var FluxLanding = require('./FluxLanding.react');
var WeatherApi = require('../utils/WeatherApi');
var WeatherComponent = require('../components/WeatherComponent.react');

// API call to Openweathermap.
WeatherApi.getWeatherData();

var LandingApp = React.createClass({
  render: function(){
    return (
      <WeatherComponent/>
    )
  }
});

module.exports = LandingApp;
