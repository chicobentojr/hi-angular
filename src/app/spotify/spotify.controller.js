(function(){
  'use strict';

  angular
  .module('hiAngular')
  .controller('SpotifyController', SpotifyController);

  function SpotifyController(spotifyAPI) {
    var vm = this;

    vm.searchType = 'Artist';
    vm.searchTypes = ['Artist', 'Track', 'Album'];
    vm.results = [];
    vm.loaded = true;

    vm.searchChange = function(){
      vm.loaded = false;
      spotifyAPI.getResults(vm.search,vm.searchType,function (results){
        vm.results = results;
        vm.loaded = true;
      });
    };
  };
})();
