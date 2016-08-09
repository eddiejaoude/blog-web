'use strict';

angular.module('webApp')
  .service('postService', function ($http) {
    var self = this;
    var host = 'http://localhost:3000';

    this.findAll = function () {
      return $http.get(host + '/posts');
    };

    self.findById = function (id) {
      return $http.get(host + '/posts/' + id);
    };

    self.create = function (post) {
      return $http.post(host + '/posts', post);
    };

    self.delete = function (id) {
      return $http.delete(host + '/posts/' + id);
    };

    self.save = function (post) {
      return $http.put(host + '/posts/' + post.id, post);
    };
  });
