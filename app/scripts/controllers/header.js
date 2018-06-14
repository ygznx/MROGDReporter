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
    var self = this;
    self.EquipSearchClass= function(){
      let tmp = window.location.href.split('/');
      let currentPage = tmp[tmp.length -1]
      if(currentPage == "EquipSearch"){
        return 'nav-item active'
      }
      else{
        return 'nav-item';
      }
    }

    self.sparePartRouteClass= function(){
      let tmp = window.location.href.split('/');
      let currentPage = tmp[tmp.length -1]
      if(currentPage == "sparePartRoute"){
        return 'nav-item active'
      }
      else{
        return 'nav-item';
      }
    }

    self.reportEventClass= function(){
      let tmp = window.location.href.split('/');
      let currentPage = tmp[tmp.length -1]
      if(currentPage == "reportEvent"){
        return 'nav-item active'
      }
      else{
        return 'nav-item';
      }
    }

    self.workordermanagementClass= function(){
      let tmp = window.location.href.split('/');
      let currentPage = tmp[tmp.length -1]
      if(currentPage == "workordermanagement"){
        return 'nav-item active'
      }
      else{
        return 'nav-item';
      }
    }


    // $(function() {
    //   $('#nav li').click(function() {
    //      $('#nav li').removeClass();
    //      $($(this).addClass('active'));
    //   });
    // });

  });
