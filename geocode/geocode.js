// jshint esversion:6

const request = require('request');
//encodes address from query string 
var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
//initial request sent to google api
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

//making mod avail to other files 
module.exports.geocodeAddress = geocodeAddress;
