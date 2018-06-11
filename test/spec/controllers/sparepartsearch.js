'use strict';

describe('Controller: SparepartsearchCtrl', function () {

  // load the controller's module
  beforeEach(module('ourAppApp'));

  var SparepartsearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SparepartsearchCtrl = $controller('SparepartsearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SparepartsearchCtrl.awesomeThings.length).toBe(3);
  });
});
