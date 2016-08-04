'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TagsCtrl', function ($http) {
    var self = this;
    var host = 'http://localhost:3000';

    this.getTags = function() {
      $http.get(host + '/tags').then(function(response) {
        self.tags = response.data;
      });
    };
  });
