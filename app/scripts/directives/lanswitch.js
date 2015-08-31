'use strict';

/**
 * @ngdoc directive
 * @name pillarsApp.directive:lanSwitch
 * @description
 * # lanSwitch
 */
angular.module('pillarsApp')
  .directive('lanSwitch', function () {
    return {
		template: '<select ng-model="lan" ng-controller="LanCtrl as LanCtrl"><option ng-repeat="lanOption in [\'en\', \'es\']">{{ lanOption }}</option></div>',
		restrict: 'E',
		// link: function postLink(scope, element) {
		// 	element.text('this is the lanSwitch directive');
		// },
		replace: true
    };
  });
