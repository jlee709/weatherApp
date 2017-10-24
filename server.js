//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const getTheWeather = require('./app.js'); 

const app = express();




app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/api/jweather', (req, res)=> {
  console.log('getting the weather ');

  const{ zipcode } = req.body;
  getTheWeather(zipcode, (err, weatherData) => {
    console.log(weatherData);
    res.json(weatherData);
  });
});

app.listen(PORT, function() {
  console.log(`Listening for Weather on port: ${PORT}`);
});