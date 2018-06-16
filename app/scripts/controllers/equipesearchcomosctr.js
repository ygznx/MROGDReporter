'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:EquipesearchcomosctrCtrl
 * @description
 * # EquipesearchcomosctrCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('EquipesearchcomosctrCtrl', function ($scope,$window, $http) {
    //  .controller('MainCtrl', function ($scope, $http) {
      var self = this;
      var maintenanceItems;
      var selectedComosEquipID;
      var selectedPIDSYSUID;
      var selectedELECTRICUID;

      $scope.textaa="abcd"
      $scope.rStr;
      $scope.EquipNameInput = {text:"泵"};
      $scope.EquipIDInput = {text:"A"};
      $scope.FaultDescription = {detailFault:""};
      //selected options
    self.equpDepartment = [
        {label: '设备部', id: 1},
        {label: '生产车间', id: 2},
      ];
    self.equpDepartmentID = 1;
    self.selectDepartment = self.equpDepartment[1];
    self.equipTypeOption=[
      {label: '特种设备', id: 1},
      {label: '普通设备', id: 2},
    ];
    self.selectedEquipType= self.equipTypeOption[1];

    self.updateEquipTypeOptions=function(){
      if ( self.selectDepartment.label==="设备部")
      {
        self.equipTypeOption=[
          {label: '特种设备', id: 1},
          {label: '普通设备', id: 2},
        ];
        self.selectedEquipType= self.equipTypeOption[1];
      }
      else
      {
        self.equipTypeOption=[
          {label: '罐', id: 1},
          {label: '离心机', id: 2},
        ];
        self.selectedEquipType= self.equipTypeOption[1];
      }
    }
      /*************************** Maintenance Table  **********************************/
      self.maintenanceDataSource = new kendo.data.DataSource({
        transport: {
          dataType: "jsonp",
          read: function(e){
            //http://localhost:57148/api/MROData/GetMROTableList?Like=FP_DESCRIPTION@%E7%BD%90@FP_EQUIPID@A
            console.log(serverAddress + "GetMROTableList?TableName=FP_MROEQUIPTABLE&Like=FP_DESCRIPTION@" + $scope.EquipNameInput.text + "@FP_EQUIPID@"+$scope.EquipIDInput.text)
            $http.get( serverAddress + "GetMROTableList?TableName=FP_MROEQUIPTABLE&Like=FP_DESCRIPTION@" + $scope.EquipNameInput.text +
              "@FP_EQUIPID@"+$scope.EquipIDInput.text+
              "@FP_EQUIPTYPE@"+self.selectedEquipType.label).then(function(response){
              self.maintenanceItems = response.data;
              e.success(self.maintenanceItems);
              console.log(self.maintenanceItems);
            })}

        },
        pageSize: 6,
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
        },{
          field: "PIDSYSUID",
          title: "工艺对象ID",
          width: "120px"
        },{
          field: "ELECTRICUID",
          title: "电器对象ID",
          width: "120px"
        }
        ],
        change:function(){
          var gview = $("#grid").data("kendoGrid");
          //Getting selected item
          var selectedItem = gview.dataItem(gview.select());
          self.selectedComosEquipID = selectedItem.EquipCOMOSID
          self.selectedELECTRICUID = selectedItem.ELECTRICUID
          self.selectedPIDSYSUID = selectedItem.PIDSYSUID
        }
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

         grid.select("tr:eq(0)");
        //console.log(grid.selectedKeyNames()); // displays the id field value for the selected row


        //var row = grid.select("tr:eq(2)");
        //var data = grid.dataItem(row);
        //console.log(row); // displays "Jane Doe"
      }

      var createGDURL="http://192.168.10.104:50388/api/MROData/PostCreateGD"
      self.goToComosEquipIDWeb=function(){
        console.log(self.selectedComosEquipID);
        console.log(self.selectedELECTRICUID);
        console.log(self.selectedPIDSYSUID);
        if(self.selectedComosEquipID != null && self.selectedComosEquipID !=""){
          window.location.href=equipPage + self.selectedComosEquipID + ":D";
        }
        else{
          alert("不存在对应的导航对象")
        }
      }
      self.goToComosEquipIDWeb=function(){
        if(self.selectedComosEquipID != null && self.selectedComosEquipID !=""){
          console.log(self.selectedComosEquipID);
          window.location.href=equipPage + self.selectedComosEquipID + ":D";
        }
        else{
          alert("不存在对应的导航对象")
        }
      }

      self.goToselectedPIDSYSUID=function(){
        console.log(self.selectedComosEquipID);
        console.log(self.selectedELECTRICUID);
        if(self.selectedPIDSYSUID != null && self.selectedPIDSYSUID !=""){
          console.log(self.selectedPIDSYSUID);
          window.location.href=equipPage + self.selectedPIDSYSUID + ":D";
        }
        else{
          alert("不存在对应的导航对象")
        }
      }

      self.goToselectedPIDSYSUID=function(){
        if(self.selectedELECTRICUID != null && self.selectedELECTRICUID !=""){
          console.log(self.selectedELECTRICUID);
          window.location.href=equipPage + self.selectedELECTRICUID + ":D";
        }
        else{
          alert("不存在对应的导航对象")
        }
      }


  });
