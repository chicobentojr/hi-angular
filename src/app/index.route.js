(function() {
  'use strict';

  angular
    .module('hiAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('drivers', {
        url: '/drivers',
        templateUrl: 'app/drivers/drivers.html',
        controller: 'DriversController',
        controllerAs: 'drivers'
      })
      .state('driver', {
        url: '/drivers/:id',
        templateUrl: 'app/driver/driver.html',
        controller: 'DriverController',
        controllerAs: 'driver'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
