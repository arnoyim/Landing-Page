var AppDispatcher = require('../dispatcher/AppDispatcher');
var WeatherConstants = require('../constants/WeatherConstants');

// Define actions object
var WeatherActions = {

  // Receive inital weather data.
  receiveWeather: function(data) {
    AppDispatcher.handleAction({
      actionType: WeatherConstants.RECEIVE_DATA,
      data: data
    })
  }

};

module.exports = WeatherActions;
