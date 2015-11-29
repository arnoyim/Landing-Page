var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var QuoteConstants = require('../constants/QuoteConstants');
var WeatherStore = require('../stores/WeatherStore');
var _ = require('underscore');

var _quote = {};

// Method to load product data from Quote API.
function loadQuoteData(data) {
  _quote = data;
}

// Extend QuoteStore with EventEmitter.
var QuoteStore = _.extend({}, EventEmitter.prototype, {

  // Return Quote data.
  getQuote: function() {
    return _quote;
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
    case QuoteConstants.RECEIVE_QUOTE:
      loadQuoteData(action.data);
      break;

    default:
      return true;
  }

  //  If action responded, emit change.
  QuoteStore.emitChange();

  return true;

});

module.exports = QuoteStore;
