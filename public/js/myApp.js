// creating a new module
angular.module('myApp', []);

// getting back that new module
var app = angular.module('myApp')
.config([ function() {
}])
.run(['$rootScope', function($rootScope) {
  // run goes here

  $rootScope.APP_VERSION = "1";
}]);