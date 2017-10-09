// jshint esversion:6

//libraires used
const request = require('request');
const geoCode = require('./geocode/geocode.js');
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

geoCode.geoCodeAddress(argv.address, (errorMsg, results) => {

  if(errorMsg){

    console.log(errorMsg);

  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});