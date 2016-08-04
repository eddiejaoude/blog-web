'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', function ($http) {
    var self = this;
    var host = 'http://localhost:3000';

    this.getPosts = function() {
      $http.get(host + '/posts').then(function(response) {
        self.posts = response.data;
      });
    };
  });
