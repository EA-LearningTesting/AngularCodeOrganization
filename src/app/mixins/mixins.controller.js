'use strict';

function Pet(name, breed) {
  this.name = name;
  this.breed = breed;
}

// The generic pet list controller that contains sorting.
function SortMixin() {
  this.sort = function(sortField) {
    this.sortField = sortField;
  };
}


angular.module('ngconfMassive')
  .controller('MixinsCtrl', function($scope) {
    angular.extend($scope, new SortMixin());

    $scope.pets = [
      new Pet('Pinky', 'Poodle'),
      new Pet('Apples', 'Poodle'),
      new Pet('Killer', 'German Shepard')
    ];
  });
