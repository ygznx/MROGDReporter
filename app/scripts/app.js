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
      .when('/EquipSearch', {
        templateUrl: 'views/MROEquipSearch.html',
        controller: 'EquipSearchCtr',
        controllerAs: 'EquipSearchCtr'
      })
      .when('/equipesearchcomosctr', {
        templateUrl: 'views/equipesearchcomosctr.html',
        controller: 'EquipesearchcomosctrCtrl',
        controllerAs: 'EquipesearchcomosctrCtrl'
      })
      .otherwise({
        redirectTo: '/EquipSearch'
      });
  });
