// jshint esversion:6

const request = require('request');

//function that handle logic for getting location of ZIP codes
var geoCodeAddress = (address, callback) => {
// this line eccodes address to be read in the query string formatting from normal text to text the browser and api understand
var encodedAddress = encodeURIComponent(address);
  //this request gets information from the GOOGLE api / can run command node app.js to GET the json file. 
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,   //2800 Woodlawn Dr, Honolulu, HI 96822
    json: true

  }, (error, response, body) => {
    // takes data from JSON file in GOOGLE Api
    if(error){
      callback('not able to connect to servers');
    }else if(body.status === 'ZERO_RESULTS') {
      callback('unable to find address');
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longtitude: body.results[0].geometry.location.lng
      });
    }
  });
};


module.exports.geoCodeAddress = geoCodeAddress;