'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tags/create', {
        templateUrl: 'views/tagsCreate.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags/:id', {
        templateUrl: 'views/tag.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags/:id/edit', {
        templateUrl: 'views/tagEdit.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags', {
        templateUrl: 'views/tags.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
