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
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/create', {
        templateUrl: 'views/postCreate.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/:id/edit', {
        templateUrl: 'views/postEdit.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/tags/create', {
        templateUrl: 'views/tagCreate.html',
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
