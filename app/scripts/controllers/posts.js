'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('PostsCtrl', function ($routeParams, $location, postService) {
    var self = this;

    this.findAll = function() {
      postService.findAll().then(function(response) {
        self.posts = response.data;
      });
    };

    self.details = function () {
      self.findById($routeParams.id);
    };

    self.findById = function(id) {
      postService.findById(id).then(function(response) {
        self.post = response.data;
      });
    };

    self.delete = function (id) {
      postService.delete(id).then(function(response) {
        self.post = response.data;
        $location.path('/posts');
      });
    };

    self.save = function(post) {
      postService.save(post).then(function(response) {
        self.post = response.data;
        $location.path('/posts');
      });
    };
  });
