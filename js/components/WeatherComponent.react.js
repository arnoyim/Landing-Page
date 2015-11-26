var React = require('react');
var WeatherStore = require('../stores/WeatherStore');
var FluxWeather = require('./FluxWeather.react');

// Method to retrieve state from Stores.

function getWeatherState() {
  return {
    weather : WeatherStore.getWeather()
  };
}

// Weather Controller View.
var WeatherComponent = React.createClass({

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
      <div className="weather">
      <FluxWeather weather={this.state.weather} />
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getWeatherState());
  }

});

module.exports = WeatherComponent;
