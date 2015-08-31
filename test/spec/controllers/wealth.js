'use strict';

describe('Controller: WealthCtrl', function () {

  // load the controller's module
  beforeEach(module('pillarsApp'));

  var WealthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WealthCtrl = $controller('WealthCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
