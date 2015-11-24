var React = require('react');
var WeatherStore = require('../stores/WeatherStore');
var FluxWeather = require('./FluxWeather.react');

// Methond to retrieve state from Stores.

function getWeatherState() {
  return {
    weather : WeatherStore.getWeather()
  };
}

// Main Controller View
var WeatherApp = React.createClass({

  getInitialState: function() {
    return getWeatherState();
  },
  // Future features (change location).
  componentDidMount: function() {
    WeatherStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    WeatherStore.removeChangeListener(this._onChange);
  },

  // Rendering the Child components.
  render: function() {
    return (
      <div className="weather-app">
      <FluxWeather weather={this.state.weather} />
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getWeatherState());
  }

});

module.exports = WeatherApp;
