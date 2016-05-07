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

    spotifyAPI.getResults = function(query, type, callback){
      var results = [];
      $http({
        url:'https://api.spotify.com/v1/search?q='+query+'&type='+type
      }).success(function(response){
        if (type == 'Artist'){
          if(response.artists.items){
            var artists = response.artists.items;
            for (var i = 0; i < artists.length; i++){
              var artist = {
                name: artists[i].name,
                url: artists[i].external_urls.spotify,
                detail: 'Popularity: ' + artists[i].popularity,
              };
              artist.image = (artists[i].images.length > 0) ? artists[i].images[0].url : null;
              results.push(artist);
            }
            callback(results);
          }
        }
        else if (type ==  'Track'){
          if(response.tracks.items){
            var tracks = response.tracks.items;
            for (var i = 0; i < tracks.length; i++){
              var track = {
                name: tracks[i].name,
                url: tracks[i].external_urls.spotify,
                detail: 'Artist: ' + tracks[i].artists[0].name + ' | Album: ' + tracks[i].album.name,
              };
              track.image = (tracks[i].album.images.length > 0) ? tracks[i].album.images[0].url : null
              results.push(track);
            }
            callback(results);
          }
        }
        else if (type ==  'Album'){
          if(response.albums.items){
            var albums = response.albums.items;
            for (var i = 0; i < albums.length; i++){
              var album = {
                name: albums[i].name,
                url: albums[i].external_urls.spotify,
                detail: 'Album type: ' + albums[i].album_type,
              };
              album.image = (albums[i].images.length > 0) ? albums[i].images[0].url : null
              results.push(album);
            }
            callback(results);
          }
        }
      })}
      return spotifyAPI;
    };
  }
)();
