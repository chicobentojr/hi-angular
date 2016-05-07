(function(){
  'use strict';

  angular
    .module('hiAngular')
    .factory('ergastAPI', ergastAPI);

  function ergastAPI($http){

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  }
})();
