'use strict';

angular.module('ngconfMassive', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('inheritance', {
        url: '/inheritance',
        templateUrl: 'app/inheritance/inheritance.html',
        controller: 'InheritanceCtrl'
      })
      .state('helpers', {
        url: '/helpers',
        templateUrl: 'app/helpers/helpers.html',
        controller: 'HelpersCtrl'
      })
      .state('controllers', {
        url: '/controllers',
        templateUrl: 'app/controllers/controllers.html',
        controller: 'ControllersCtrl'
      })
      .state('mixins', {
        url: '/mixins',
        templateUrl: 'app/mixins/mixins.html',
        controller: 'MixinsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
