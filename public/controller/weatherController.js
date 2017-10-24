//jshint esversion:6

angular.module('myApp')
.controller('weatherController',['$scope','weatherService', function($scope, weatherService){

  $scope.zipcode = '';

  $scope.submitZipcode = function(e){
    weatherService.postZipcode($scope.zipcode)
    .then( (dataFromServer) =>{
      console.log(dataFromServer);
    });
  };
}]);