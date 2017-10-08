// jshint esversion:6
const request = require('request');

//this request gets information from the GOOGLE api / can run command node app.js to GET the json file. 
request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(body);
});

