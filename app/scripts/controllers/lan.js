'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:LanCtrl
 * @description
 * # LanCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('LanCtrl', function ($scope, translate) {
	$scope.lan = 'en';
	var updateLan = function(lanOption){
		// if ($scope.lan !== lanOption)
		// {
		// 	$scope.lan = lanOption;		
			translate.translateContent(lanOption);
		// }
	};
	$scope.$watch('lan', function(){
		updateLan($scope.lan);
	});
  });
