'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('EquipSearchCtr', function ($scope, $http) {
    //  .controller('MainCtrl', function ($scope, $http) {
    var self = this;
    var maintenanceItems;

    $scope.textaa="abcd"
    $scope.rStr;
    $scope.EquipNameInput = {text:"泵"}
    $scope.FaultDescription = {detailFault:"n"}
    /*************************** Maintenance Table  **********************************/
    self.maintenanceDataSource = new kendo.data.DataSource({
      transport: {
        dataType: "jsonp",
        read: function(e){
          console.log(serverAddress + "GetMROTableList?Like=" + $scope.EquipNameInput.text)
          $http.get( serverAddress + "GetMROTableList?Like=" + $scope.EquipNameInput.text).then(function(response){
            self.maintenanceItems = response.data;
            e.success(self.maintenanceItems);
            console.log(self.maintenanceItems);
           })}

        },
       pageSize: 10,
        schema: {
          model: { id: "EquipCOMOSID" }
        },
    } )

    self.tableMaintenanceOptions={

      selectable: "row",
      pageable: {
        buttonCount: 5
      },
      persistSelection: true,

      columns: [{
        field: "Name",
        title: "COMOS Name",
        width: "120px"
      },{
        field: "Workshop",
        title: "Workshop",
        width: "120px"
      },{
        field: "ID",
        title: "Equip ID",
        width: "180px"
      },{
        field: "Description",
        title: "Equip Name",
        width: "120px"
      },{
        field: "TypeClass",
        title: "Equip Type",
        width: "120px"
      },{
        field: "EquipCOMOSID",
        title: "Equip COMOSID",
        width: "120px"
      }
      ]
    };

    $scope.GetSelectedEquip=function(){
      var grid = $("#grid").data("kendoGrid");
      return grid.selectedKeyNames();
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
      self.maintenanceDataSource.read();
      //grid.dataSource.read();
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

    var createGDURL="http://localhost:57148/api/MROData/PostCreateGD"
    $scope.CreateGD=function(){
      var grid = $("#grid").data("kendoGrid");
      var itemval = grid.selectedKeyNames();
      var fautldescrption =$scope.FaultDescription.detailFault;
      console.log(fautldescrption);
      console.log(itemval);
      var dataGD= {
        "EquipmentID":itemval[0],
        "EquipCOMOSID":itemval[0],
        "Submitter":"UWOP6W",
        "FaultDescription":fautldescrption,
        "MaintainanceManager":"DONGYONGMING",
      }

      var responseCGD=""
      $http.post(createGDURL,dataGD).then(function(response){
        responseCGD=response;
        console.log(responseCGD);
      },function(error){
        console.log(error);
      })
    }

  })
