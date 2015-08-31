'use strict';

describe('Controller: PageContentsCtrl', function () {

  // load the controller's module
  beforeEach(module('pillarsApp'));

  var PageContentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageContentsCtrl = $controller('PageContentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
