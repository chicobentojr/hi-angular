(function() {
  'use strict';

  angular
  .module('hiAngular')
  .controller('DriversController', DriversController);

  /** @ngInject */
  function DriversController() {
    var vm = this;

    vm.driversList = [
      {
        Driver: {
          givenName: 'Sebastian',
          familyName: 'Vettel'
        },
        points: 322,
        nationality: "German",
        Constructors: [
          {name: "Red Bull"}
        ]
      },
      {
        Driver: {
          givenName: 'Fernando',
          familyName: 'Alonso'
        },
        points: 207,
        nationality: "Spanish",
        Constructors: [
          {name: "Ferrari"}
        ]
      }
    ];
  }
})();
