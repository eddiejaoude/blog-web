'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TagsCtrl', function ($http, $routeParams, $location) {
    var self = this;
    var host = 'http://localhost:3000';

    self.findAll = function() {
      $http.get(host + '/tags').then(function(response) {
        self.tags = response.data;
      });
    };

    self.details = function () {
      self.findById($routeParams.id);
    };

    self.delete = function () {
      $http.delete(host + '/tags/' + $routeParams.id).then(function(response) {
        self.tag = response.data;
        $location.path('/tags');
      });
    };

    self.findById = function(id) {
      $http.get(host + '/tags/' + id).then(function(response) {
        self.tag = response.data;
      });
    };

    self.create = function(tag) {
      $http.post(host + '/tags', tag).then(function(response) {
        self.tag = response.data;
        $location.path('/tags');
      });
    };
  });
