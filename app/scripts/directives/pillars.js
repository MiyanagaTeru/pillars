'use strict';

/**
 * @ngdoc directive
 * @name pillarsApp.directive:pillars
 * @description
 * # pillars
 */
angular.module('pillarsApp')
  .directive('pillars', function () {
    return {
		template: '<div ng-controller="ContentCtrl as ContentCtrl"><div class="col-xs-3 well" ng-repeat="pillar in contents.pillars"><h3><a href="{{ pillar.url }}">{{ pillar.title }}</a></h3><p>{{ pillar.content }}</p></div>',
		restrict: 'E',
		replace: true
    };
  });
