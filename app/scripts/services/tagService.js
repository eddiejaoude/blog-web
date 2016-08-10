'use strict';

angular.module('webApp')
  .service('tagService', function ($http) {
    var self = this;
    var host = 'http://localhost:3000'; // @TODO move to config

    self.findAll = function () {
      return $http.get(host + '/tags');
    };

    self.delete = function (id) {
      return $http.delete(host + '/tags/' + id);
    };

    self.findById = function (id) {
      return $http.get(host + '/tags/' + id);
    };

    self.save = function (tag) {
      if (tag.id) {
        return $http.put(host + '/tags/' + tag.id, tag);
      } else {
        return $http.post(host + '/tags', tag);
      }
    };
  });
