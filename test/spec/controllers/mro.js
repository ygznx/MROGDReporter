'use strict';

describe('Controller: MroctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ourAppApp'));

  var MroctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MroctrlCtrl = $controller('MroctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MroctrlCtrl.awesomeThings.length).toBe(3);
  });
});
