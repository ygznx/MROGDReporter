'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:SparepartsearchCtrl
 * @description
 * # SparepartsearchCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('SparepartsearchCtrl', function ($http) {
    var self=this
    self.EquipNameInput = {text:"P"};
    self.EquipIDInput = {text:"0"};

    /*************************** Maintenance Table  **********************************/
    self.maintenanceDataSource = new kendo.data.DataSource({
      transport: {
        dataType: "jsonp",
        read: function(e){
          //http://localhost:57148/api/MROData/GetMROTableList?Like=FP_DESCRIPTION@%E7%BD%90@FP_EQUIPID@A
          //console.log(serverAddress + "GetMROSparePartList?TableName=FP_MROEQUIPTABLE&Like=FP_DESCRIPTION@" + self.EquipNameInput.text + "@FP_EQUIPID@"+$scope.EquipIDInput.text)
          $http.get( serverAddress + "GetMROSparePartList?TableName=FP_MROSTOCKTABLE&Like=FP_DESCRIPTION@" + self.EquipNameInput.text +
            "@FP_STOCKID@"+self.EquipIDInput.text).then(function(response){
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
        title: "COMOS 名称",
        width: "120px"
      },{
        field: "ID",
        title: "Equip ID",
        width: "180px"
      },{
        field: "Description",
        title: "名称",
        width: "120px"
      },{
        field: "TypeClass",
        title: "规格",
        width: "120px"
      },{
        field: "EquipCOMOSID",
        title: "COMOS ID",
        width: "120px"
      }
      ]
    };
    self.CheckStatusSearch =function(){
      self.rStr=self.EquipNameInput.text;
      // self.mainGridOptions.dataSource.transport.read;
      var grid = $("#gridSpare").data("kendoGrid");
      self.maintenanceDataSource.read();
      //grid.dataSource.read();
      grid.refresh();

    }
  });
