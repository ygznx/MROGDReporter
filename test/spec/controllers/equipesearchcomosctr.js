'use strict';

describe('Controller: EquipesearchcomosctrCtrl', function () {

  // load the controller's module
  beforeEach(module('ourAppApp'));

  var EquipesearchcomosctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquipesearchcomosctrCtrl = $controller('EquipesearchcomosctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EquipesearchcomosctrCtrl.awesomeThings.length).toBe(3);
  });
});
