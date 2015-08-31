'use strict';

/**
 * @ngdoc function
 * @name pillarsApp.controller:PageContentsCtrl
 * @description
 * # PageContentsCtrl
 * Controller of the pillarsApp
 */
angular.module('pillarsApp')
  .controller('PageContentsCtrl', function ($rootScope, $scope, translate) {
  	$scope.pageContent = {};
  	$scope.getContent = function(){
		$scope.pageContent = translate.getContent();
  		// console.log('in content ctrl: ' + $scope.pageContent.pillars[0].title);
  	};
  	//init content
	$scope.getContent(); 	
  	$rootScope.$on('Translate process is done', function()
  	{
		$scope.getContent();
  	});
  });
