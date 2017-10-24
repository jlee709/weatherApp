//jshint esversion:6


angular.module('myApp')
.service('weatherService', ['$http',function($http){


  this.postZipcode = function(zipcode) { 
    return $http.post('/api/jweather', JSON.stringify({zipcode: zipcode}));
  };
}]);