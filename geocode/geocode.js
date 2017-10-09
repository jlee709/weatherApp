// jshint esversion:6


const request = require('request');


//function that handle logic for getting location of ZIP codes
var geoCodeAddress = (address) => {
  // this line eccodes address to be read in the query string formatting from normal text to text the browser and api understand
  var encodedAddress = encodeURIComponent(address);

  //this request gets information from the GOOGLE api / can run command node app.js to GET the json file. 
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,   //2800 Woodlawn Dr, Honolulu, HI 96822
    json: true

  }, (error, response, body) => {
    // takes data from JSON file in GOOGLE Api
    if(error){
      console.log('cant connect to GOOGLE');

    }else if(body.status === 'ZERO_RESULTS') {
      console.log('unable to find the address');

    } else if (body.status === 'OK'){
        console.log('Request good Fetching Data');
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longtitude ${body.results[0].geometry.location.lng}`);
      }
    });
  };


module.exports.geoCodeAddress = geoCodeAddress;