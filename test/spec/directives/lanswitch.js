'use strict';

describe('Directive: lanSwitch', function () {

  // load the directive's module
  beforeEach(module('pillarsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lan-switch></lan-switch>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lanSwitch directive');
  }));
});
