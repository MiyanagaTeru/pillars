'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:HealthCtrl
 * @description
 * # HealthCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('HealthCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
