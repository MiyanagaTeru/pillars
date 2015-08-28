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
		template: '<div ng-controller="LanCtrl as LanCtrl"><button class="btn btn-primary" ng-repeat="lanOption in [\'en\', \'es\']" ng-model="lan" ng-click="updateLan(lanOption);">{{ lanOption }}</button></div>',
		restrict: 'E',
		// link: function postLink(scope, element) {
		// 	element.text('this is the lanSwitch directive');
		// },
		replace: true
    };
  });
