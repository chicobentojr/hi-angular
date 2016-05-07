(function(){
  'use strict';

  angular
  .module('hiAngular')
  .controller('SpotifyController', SpotifyController);

  function SpotifyController(spotifyAPI) {
    var vm = this;

    vm.searchType = 'Artist';
    vm.searchTypes = ['Artist', 'Track', 'Album'];
    vm.artists = [];
    vm.loaded = true;

    vm.searchChange = function(){
      vm.loaded = false;
      spotifyAPI.getArtists(vm.search).success(function (response){
        vm.artists = response.artists.items;
        vm.loaded = true;
      });
    };
  }
})();
