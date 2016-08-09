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
        templateUrl: 'views/posts/list.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/create', {
        templateUrl: 'views/posts/create.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/:id', {
        templateUrl: 'views/posts/view.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/:id/edit', {
        templateUrl: 'views/posts/edit.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/tags/create', {
        templateUrl: 'views/tags/create.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags/:id', {
        templateUrl: 'views/tags/view.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags/:id/edit', {
        templateUrl: 'views/tags/edit.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags', {
        templateUrl: 'views/tags/list.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
