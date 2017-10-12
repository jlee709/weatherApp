// jshint esversion:6

//libraires used
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage); 
      } else {
        console.log(` overall for today the weather is ${weatherResults.summary}. 
        The temperature is currently ${weatherResults.temperature} degrees.
        But It feels more like ${weatherResults.apparentTemperature} degrees.
        Wind Speeds will be up to ${weatherResults.windSpeed} mph with gusts up to ${weatherResults.windGust} mph`);
      }
    });
  }
});





