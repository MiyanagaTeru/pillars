'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:LanCtrl
 * @description
 * # LanCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('LanCtrl', function ($rootScope, $scope) {
	$scope.lan = 'en';
	$scope.updateLan = function(lanOption){
		$scope.lan = lanOption;		
		$rootScope.$broadcast('Language Changed', { lan: $scope.lan });
	};
  });
