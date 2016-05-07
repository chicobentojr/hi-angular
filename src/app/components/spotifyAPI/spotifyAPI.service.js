(function(){
  'use strict';

  angular
  .module('hiAngular')
  .factory('spotifyAPI', spotifyAPI);

  function spotifyAPI($http){
    var spotifyAPI = {};

    spotifyAPI.getArtists = function(query){
      return $http({
        url:'https://api.spotify.com/v1/search?q='+query+'&type=artist'
      });
    }

    return spotifyAPI;
  }
})();
