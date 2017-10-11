//jshint esversion:6

const request = require('request');

// API call to darksky API 
var getWeather = (lat, lng, callback) => {

request({
  url: `https://api.darksky.net/forecast/56616fe2d058b28a03eae597df271c9f/${lat}, ${lng}`,
  json: true

}, (error, response, body) => {
    if(error){
      callback('cant connect to weather service');
    } else if(response.statusCode === 400){
      callback('unable to get weather data');
    } else if(!error && response.statusCode === 200){
      callback(undefined, {
        summary: body.hourly.summary,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }  
  });
};

module.exports = getWeather;