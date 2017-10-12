//jshint esversion:6

const request = require('request');

// API call to darksky API 
// vars set the location to be added to the query string in geoCode as to make forcasts specific to location
var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/56616fe2d058b28a03eae597df271c9f/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        summary: body.hourly.summary,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        windSpeed: body.currently.windSpeed,
        windGust: body.currently.windGust
      });
    }
  });
};

module.exports.getWeather = getWeather;
