'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('HeaderctrlCtrl', function ($scope) {
    $(function() {
      $('#nav li').click(function() {
         $('#nav li').removeClass();
         $($(this).addClass('active'));
      });
   });
  });
