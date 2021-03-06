'use strict';

/**
 * @ngdoc overview
 * @name ourAppApp
 * @description
 * # ourAppApp
 *
 * Main module of the application.
 */
angular
  .module('ourAppApp', [
    'kendo.directives',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reportEvent', {
        templateUrl: 'views/MROEquipSearch.html',
        controller: 'EquipSearchCtr',
        controllerAs: 'EquipSearchCtr'
      })
      .when('/EquipSearch', {
        templateUrl: 'views/equipesearchcomosctr.html',
        controller: 'EquipesearchcomosctrCtrl',
        controllerAs: 'EquipesearchcomosctrCtrl'
      })
      .when('/sparePartRoute', {
        templateUrl: 'views/sparepartsearch.html',
        controller: 'SparepartsearchCtrl',
        controllerAs: 'sparePartSearch'
      })
      .when('/workordermanagement', {
        templateUrl: 'views/workOrderManagement.html',
        controller: 'WorkorderManagementCtrl',
        controllerAs: 'WorkorderManagementCtrl'
      })
      .when('/taskSearchWF', {
        templateUrl: 'views/tasksearchwf.html',
        controller: 'TasksearchwfCtrl',
        controllerAs: 'taskSearchWF'
      })
      .otherwise({
        redirectTo: '/EquipSearch'
      });
  });
