'use strict';

function Pet(name, breed) {
  this.name = name;
  this.breed = breed;
}

angular.module('ngconfMassive').service('dogwalk', function() {
  return function(name) {
    var now = new Date();
    return 'Walking ' + name + ' at ' +
      now.getHours() + ':' + now.getMinutes() + ':' +
      now.getSeconds();
  };
});

function PetWalkingMgr(dogwalk) {
  this.logs = [];
  this.status = {};

  this.walk = function(dog) {
    this.logs.push(dogwalk(dog.name));
    this.status[dog.name] = true;
  };

  this.wasWalked = function(dog) {
    return this.status[dog.name];
  };
}

angular.module('ngconfMassive')
  .controller('ControllersCtrl', function($scope, $controller) {
    $scope.walkerMgr = $controller(PetWalkingMgr);

    $scope.pets = [
      new Pet('Pinky', 'Poodle'),
      new Pet('Apples', 'Poodle'),
      new Pet('Killer', 'German Shepard')
    ];
  });
