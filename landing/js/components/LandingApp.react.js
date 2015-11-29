var React = require('react');
var WeatherApi = require('../utils/WeatherApi');
var WeatherComponent = require('../components/WeatherComponent.react');
var QuotesApi = require('../utils/QuotesApi');
var QuoteComponent = require('../components/QuoteComponent.react');

// API call to Openweathermap.
WeatherApi.getWeatherData();
// API call to quote API.
QuotesApi.getQuoteData();

var LandingApp = React.createClass({
  render: function(){
    return (
      <div>
        <WeatherComponent/>
        <QuoteComponent/>
      </div>
    )
  }
});

module.exports = LandingApp;
