'use strict';

function Pet(name, breed) {
  this.name = name;
  this.breed = breed;
}

function Sorter() {
  this.sort = function(sortFields) {
    this.sortField = sortFields;
  };

  this.resetSort = function() {
    this.sortField = null;
  };

}

angular.module('ngconfMassive')
  .controller('HelpersCtrl', function($scope) {
    $scope.sorter = new Sorter();

    $scope.pets = [
      new Pet('Pinky', 'Poodle'),
      new Pet('Apples', 'Poodle'),
      new Pet('Killer', 'German Shepard')
    ];
  });
