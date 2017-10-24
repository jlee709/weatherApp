//jshint esversion:6

const express = reqire('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();











app.listen(PORT, function() {
  console.log(`Listening for Weather on port: ${PORT}`);
});