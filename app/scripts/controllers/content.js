'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('ContentCtrl', function ($rootScope, $scope, translate) {
	$scope.contents = translate.translatedContent();
	$rootScope.$on('Language Changed', function(event, message){
		$scope.contents = translate.translatedContent(message.lan);
	});
  });
