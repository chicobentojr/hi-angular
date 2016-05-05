(function() {
  'use strict';

  angular
  .module('hiAngular')
  .controller('DriversController', DriversController);

  /** @ngInject */
  function DriversController(ergastAPI) {
    var vm = this;

    vm.filterName = null;
    vm.driversList = [];

    vm.searchFilter = function (driver) {
      var keyword = new RegExp(vm.nameFilter, 'i');
      return !vm.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

    ergastAPI.getDrivers().success(function (response) {
        vm.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }
})();
