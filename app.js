// jshint esversion:6

//libraires used
const http = require('http');
const request = require('request');
const geoCode = require('./geocode/geocode');
const yargs = require('yargs');

const argv = yargs

.options({
a: {
    demand: true,
    alias: 'address',
    describe: 'Address of weather grab ',
    string: true
  }
  // lat:{}
  // long:{}
}).help().alias('help', 'h').argv;


geoCode.geoCodeAddress(argv.address);