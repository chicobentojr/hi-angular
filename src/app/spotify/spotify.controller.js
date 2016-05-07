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
    vm.resultsEmpty = false;

    vm.searchChange = function(){
      if(vm.search && vm.searchType){
        vm.loaded = vm.resultsEmpty = false;
        spotifyAPI.getResults(vm.search,vm.searchType,function (results){
          vm.resultsEmpty = ( results.length > 0  ? false : true);
          vm.results = results;
          vm.loaded = true;
        });
      }
    };
  };
})();
