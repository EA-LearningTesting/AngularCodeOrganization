'use strict';

function Pet(name, breed) {
  this.name = name;
  this.breed = breed;
}

// The generic pet list controller that contains sorting.
function PetListCtrl($scope) {
  $scope.sort = this.sort = function(sortField){
    this.sortField = sortField;
  };
}


angular.module('ngconfMassive')
  .controller('InheritanceCtrl', function($scope,$injector) {
    $injector.invoke(PetListCtrl, this, {
      $scope: $scope
    });

    $scope.pets = [
      new Pet('Pinky', 'Poodle'),
      new Pet('Apples', 'Poodle'),
      new Pet('Killer', 'German Shepard')
    ];
  });
