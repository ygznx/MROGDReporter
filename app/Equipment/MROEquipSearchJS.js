'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('EquipSearchCtr',function($scope){
    var self =this
    $scope.textaa="abcd"
    $scope.rStr="no value"
    $scope.EquipNameInput = {text:"abc"}

    $scope.GetDataSourceUrl={function(){
      return "http://localhost:57148/api/MROData/GetMROTableList?Like=" + $scope.EquipNameInput.text;
    }}

    $scope.urldata =  "http://localhost:57148/api/MROData/GetMROTableList?Like=" + $scope.EquipNameInput.text;

    $scope.mainGridOptions = {
      selectable: "row",
      persistSelection: true,
      dataSource: {

        transport: {
          read:  $scope.urldata ,
          dataType: "jsonp"
        },
        schema: {
          model: { id: "ID" }
        }

      },

      columns: [{
        field: "Name",
        title: "Workshop",
        width: "120px"
      },{
        field: "ID",
        title: "Equip ID",
        width: "120px"
      },{
        field: "Description",
        width: "120px"
      },{
        field: "TypeClass",
        width: "120px"
      },{
        field: "TypeClass"
      }]
    };

    $scope.SelectedEquip = function(){
      return mainGridOptions.selectedKeyNames();
    }

    $scope.CheckStatusSearch =function(){
      //var itemval = $scope.mainGridOptions.selectedKeyNames();
      //var ssss=self. $scope.EquipNameInput.text;
      $scope.rStr=$scope.EquipNameInput.text;
     //  console.log($scope.mainGridOptions.items);

      //console.log($scope.rStr) ;
      console.log($scope.mainGridOptions);
     // $scope.mainGridOptions.dataSource.transport.read;
      var grid = $("#grid").data("kendoGrid");
      grid.dataSource.read();
      grid.refresh();
      //[‎5/‎29/‎2018 10:30 AM] Gu, Yuanhao (PD PA AE CIS S CN):
     // $('#GridName').data('kendoGrid').dataSource.read();
     // $('#GridName').data('kendoGrid').refresh();

      // grid.select("tr:eq(5)");
      //console.log(grid.selectedKeyNames()); // displays the id field value for the selected row


      //var row = grid.select("tr:eq(2)");
      //var data = grid.dataItem(row);
      //console.log(row); // displays "Jane Doe"


    }

  })
