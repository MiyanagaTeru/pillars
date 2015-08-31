'use strict';

/**
 * @ngdoc service
 * @name pillarsApp.translate
 * @description
 * # translate
 * Service in the pillarsApp.
 */

angular.module('pillarsApp')
  .service('translate', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var pageContent = {};
	var translateContent = function(lan){
		lan = lan || 'en';
		//here the translateContent function will call API to update $rootScope.PageContent
		pageContent = $rootScope.dummyData[lan];
		// console.log('Language is '+ lan);
		// console.log('in translate service: ' + pageContent.pillars[0].title);
		$rootScope.$broadcast('Translate process is done', {} );
	};

	//init pageContent
	translateContent();
	var getContent = function(){
		return pageContent;
	};
	// $rootScope.$on('Language Changed', function(event, message){
	// 	$scope.translateContent(message.lan);
	// 	$rootScope.$broadcast('Translate process is done', {} );
	// });
	return {
		getContent: getContent,
		translateContent: translateContent
	};
  });

