'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
