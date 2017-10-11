// jshint esversion:6

//libraires used
const request = require('request');
const geoCode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

const argv = yargs

.options({
a: {
    demand: true,
    alias: 'address',
    describe: 'Address of weather grab ',
    string: true
  }
}).help().alias('help', 'h').argv;


// both location and Weather API calls happen here , first location then Weather
geoCode.geoCodeAddress(argv.address, (errorMsg, results) => {

  if(errorMsg){
    console.log(errorMsg);

  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }

  weather(results.latitude, results.longitude, (errorMsg, weatherResults) => {
    if(errorMsg){
      console.log(errorMsg);
    } 
    else {
      console.log(`The weather for today is going to be ${weatherResults.summary}. 
      Temperatures are currently ${weatherResults.Temperatur}, but it feels like 
      ${weatherResults.apparentTemperature}`);
    }
  });
});





