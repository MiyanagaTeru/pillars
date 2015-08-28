'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
