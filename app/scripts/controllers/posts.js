'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('PostsCtrl', function ($http, $routeParams, $location) {
    var self = this;
    var host = 'http://localhost:3000';

    this.findAll = function() {
      $http.get(host + '/posts').then(function(response) {
        self.posts = response.data;
      });
    };

    self.details = function () {
      self.findById($routeParams.id);
    };

    self.findById = function(id) {
      $http.get(host + '/posts/' + id).then(function(response) {
        self.post = response.data;
      });
    };

    self.create = function(post) {
      $http.post(host + '/posts', post).then(function(response) {
        self.post = response.data;
        $location.path('/posts');
      });
    };

    self.delete = function (id) {
      $http.delete(host + '/posts/' + id).then(function(response) {
        self.post = response.data;
        $location.path('/posts');
      });
    };

    self.save = function(post) {
      $http.put(host + '/posts/' + post.id, post).then(function(response) {
        self.post = response.data;
        $location.path('/posts');
      });
    };
  });
