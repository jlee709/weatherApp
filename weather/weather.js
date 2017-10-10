//jshint esversion:6

const request = require('request');

// API call to darksky API 
var getWeather = () => {
request({
  url: 'https://api.darksky.net/forecast/56616fe2d058b28a03eae597df271c9f/75.18663959999999,39.9396284',
  json: true
}, (error, response, body) => {
    if(error){
      console.log('cant connect to weather aserveras');
    } else if(response.statusCode === 400){
      console.log('cath get weather data');
    } else if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
    }  
  });
};
module.exports.getWeather = getWeather;