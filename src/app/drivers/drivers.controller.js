(function() {
  'use strict';

  angular
    .module('hiAngular')
    .controller('DriversController', DriversController);

  /** @ngInject */
  function DriversController(ergastAPI) {
    var vm = this;

    vm.driversList = [];

    ergastAPI.getDrivers().success(function(response){
        vm.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

  }
})();
