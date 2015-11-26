var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var WeatherConstants = require('../constants/WeatherConstants');
var _ = require('underscore');

var _weather = {};

// Method to load product data from Openweathermap API.
function loadWeatherData(data) {
  _weather = data;
}

// Extend WeatherStore with EventEmitter.
var WeatherStore = _.extend({}, EventEmitter.prototype, {

  // Return Weather data.
  getWeather: function() {
    return _weather;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});
// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case WeatherConstants.RECEIVE_DATA:
      loadWeatherData(action.data);
      break;

    default:
      return true;
  }

  //  If action responded, emit change.
  WeatherStore.emitChange();

  return true;

});

module.exports = WeatherStore;
