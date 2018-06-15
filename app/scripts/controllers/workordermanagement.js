'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:WorkordermanagementCtrl
 * @description
 * # WorkordermanagementCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('WorkorderManagementCtrl', function ($scope, $http) {
    var self = this;
    //Search conditions------------------------------------------------------------------
    self.EquipNameInput = {text:"泵"};
    self.FaultDescription = {detailFault:""};
    //selected options
    self.Manager = [
      {label: 'LANCHENGTIE', id: 1},
      {label: 'DONGYONGMING', id: 2},
    ];
    self.selectedManager= self.Manager[1];
    /****************  workshop ******************/
    self.workshop = [
      {label: 'A03', id: 1},
      {label: 'A06', id: 2},
      {label: 'DONGYONGMING', id: 3},
    ];
    self.selectedworkshop= self.workshop[2];
    /*************************** Maintenance Table  **********************************/
    self.maintenanceDataSource = new kendo.data.DataSource({
      transport: {
        dataType: "jsonp",
        read: function(e){
          //http://localhost:57148/api/MROData/GetMROTableList?Like=FP_DESCRIPTION@%E7%BD%90@FP_EQUIPID@A
          $http.get( serverAddress + "GetMRGDList?TableName=FP_GDTABLE&Like=FP_EQUIPNAME@" +
            self.EquipNameInput.text +
            "@FP_ISSUEDESCIPTION@"+self.FaultDescription.detailFault+
            "@FP_USERDEPARTMENT@"+self.selectedworkshop.label+
            "@FP_MAINTAINMANAGER@"+self.selectedManager.label).then(function(response){
            self.maintenanceItems = response.data;
            e.success(self.maintenanceItems);
            console.log(self.maintenanceItems);
          })}

      },
      pageSize: 6,
      schema: {
        model: { id: "Name" }
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
        title: "GDID",
        width: "120px"
      },{
        field: "Manager",
        title: "维修主管",
        width: "120px"
      },{
        field: "FaultDescription",
        title: "故障描述",
        width: "180px"
      },{
        field: "GDStatus",
        title: "工单状态",
        width: "120px"
      },{
        field: "WPStatus",
        title: "工作票状态",
        width: "120px"
      },{
        field: "EquipName",
        title: "设备名称",
        width: "120px"
      },{
        field: "Department",
        title: "部门",
        width: "120px"
      },{
        field: "EquipID",
        title: "设备编号",
        width: "120px"
      }
      ],
      change:function(){
        var gview = $("#gridGD").data("kendoGrid");
        //Getting selected item
        var selectedItem = gview.dataItem(gview.select());
        //self.selectedComosEquipID = selectedItem.EquipCOMOSID

      }
    };

    self.CheckStatusSearch =function(){
      //var itemval = $scope.mainGridOptions.selectedKeyNames();
      //var ssss=self. $scope.EquipNameInput.text;
     // self.rStr=gridGD.EquipNameInput.text;
     // console.log($scope.mainGridOptions);
      // $scope.mainGridOptions.dataSource.transport.read;
      var grid = $("#gridGD").data("kendoGrid");
      self.maintenanceDataSource.read();
      //grid.dataSource.read();

      grid.refresh();
      var row = grid.select("tr:eq(0)");

    }

  });
