var React = require('react');
var ReactDom = require('react-dom');
var WeatherApi = require('./utils/WeatherApi');
var WeatherApp = require('./components/WeatherApp.react');

// API call to Openweathermap.
WeatherApi.getWeatherData();

// Render FluxWeatherApp Controller View.
// React.render(
//  <WeatherApp />,
//  document.getElementById('Weather')
//)

ReactDom.render(<WeatherApp/>, document.getElementById('Weather'));
