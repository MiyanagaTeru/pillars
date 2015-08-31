'use strict';

/**
 * @ngdoc directive
 * @name pillarsApp.directive:notifications
 * @description
 * # notifications
 */
angular.module('pillarsApp')
  .directive('notifications', function () {
    return {
      template: '<div><div ng-repeat="notification in pageContent.notifications"><h3>{{ notification.title }}</h3><p>{{ notification.content }}</p></div></div>',
      restrict: 'E',
      replace: true
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the notifications directive');
      // }
    };
  });
