// jshint esversion:6




//libraires used
const request = require('request');
const http = require('http');



//this request gets information from the GOOGLE api / can run command node app.js to GET the json file. 
request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=2800%20woodlawn%20dr%20honolulu',   //2800 Woodlawn Dr, Honolulu, HI 96822
  json: true

}, (error, response, body) => {
  // takes data from JSON file in GOOGLE Api
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longtitude ${body.results[0].geometry.location.lng}`);
});

