'use strict';

angular.module('ngconfMassive')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.date = new Date();

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
