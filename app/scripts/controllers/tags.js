'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TagsCtrl', function ($routeParams, $location, tagService) {
    var self = this;

    self.findAll = function() {
      tagService.findAll().then(function(response) {
        self.tags = response.data;
      });
    };

    self.details = function () {
      self.findById($routeParams.id);
    };

    self.delete = function (id) {
      tagService.delete(id).then(function(response) {
        self.tag = response.data;
        $location.path('/tags');
      });
    };

    self.findById = function(id) {
      tagService.findById(id).then(function(response) {
        self.tag = response.data;
      });
    };

    self.save = function(tag) {
      tagService.save(tag).then(function(response) {
        self.tag = response.data;
        $location.path('/tags');
      });
    };
  });
