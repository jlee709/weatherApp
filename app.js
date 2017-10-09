// jshint esversion:6


//libraires used
const http = require('http');
const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
  a:{
    demand: true,
    alias: 'address',
    describe: 'Address of weather grab ',
    string: true
  }
  // lat:{}
  // long:{}
})
.help()
.alias('help', 'h')
.argv;

// this line eccodes address to be read in the query string formatting from normal text to text the browser and api understand
var encodedAddress = encodedURIComponent(argv.address);

  
//this request gets information from the GOOGLE api / can run command node app.js to GET the json file. 
request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,   //2800 Woodlawn Dr, Honolulu, HI 96822
  json: true

}, (error, response, body) => {
  // takes data from JSON file in GOOGLE Api
  if(error){
    console.log('cant connect to google servers');

  }else if(body.status ==='ZERO_RESULTS') {

    console.log('unable to find the address');
  }

  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longtitude ${body.results[0].geometry.location.lng}`);
  
});

