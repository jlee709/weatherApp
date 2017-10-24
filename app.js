// jshint esversion:6
// console.log('Justins Node Weather app!!!! This app allows you to search weather data based on zip Codes~!');
// console.log("use the command line to use the app. Some zip codes you can use are:");
// console.log("HAWAII: 96822 ----  NYC: 10022 ---- Miami: 33128 ---- 94110");
//libraires used

// const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
  

function getTheWeather(zipCode, callback){

 // the argv.address is the zip code you will enter  
  geocode.geocodeAddress(zipCode, (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.address);
      weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage); 
        } else {
          callback(null, weatherResults);
          console.log(` overall for today the weather is ${weatherResults.summary}. 
          The temperature is currently ${weatherResults.temperature} degrees.
          But It feels more like ${weatherResults.apparentTemperature} degrees.
          Wind Speeds will be up to ${weatherResults.windSpeed} mph with gusts up to ${weatherResults.windGust} mph`);
        }
      });
    }
  });
}


module.exports = getTheWeather;



