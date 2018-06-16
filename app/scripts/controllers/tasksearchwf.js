'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:TasksearchwfCtrl
 * @description
 * # TasksearchwfCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('TasksearchwfCtrl', function ($scope, $http) {
    var self = this;
    //Search conditions------------------------------------------------------------------

    self.GDWFTaskList = [
      {label: 'GDWFTask', id: 1},
      {label: 'WPWFImpleTask', id: 2},
      {label: 'GDYFWTask', id: 3},
      {label: 'TZSP', id: 4},
      {label: 'YBSP', id: 4},
    ];
    self.selectTaskType = self.GDWFTaskList[0];

    //selected options
    self.repersonList = [
      {label: 'LANCHENGTIE', id: 1},
      {label: 'DONGYONGMING', id: 2},
      {label: 'UWOP6W', id: 3},
      {label: 'TIANJINGWEN', id: 4},
      {label: 'LIHONGWEI', id: 5},
      {label: 'TANHAIBO', id: 6},
    ];
    self.resPerson= self.repersonList[1];
    /****************  workshop ******************/
    self.TASKSTATUSList = [
      {label: 'ACT', id: 1},
      {label: 'DONE', id: 2},
    ];
    self.selectedStatus= self.TASKSTATUSList[0];
    /*************************** Maintenance Table  **********************************/
    self.maintenanceDataSource = new kendo.data.DataSource({
      transport: {
        dataType: "jsonp",
        read: function(e){

          $http.get( serverAddress + "GetTaskList?TableName=FP_MROTASK&Like=FP_TASKOWNERTYPE@" +
            self.selectTaskType.label +
            "@FP_TASKSTATUS@"+self.selectedStatus.label+
            "@FP_USERID@"+self.resPerson.label).then(function(response){
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
        field: "TaskID",
        title: "TaskID",
        width: "120px"
      },{
        field: "TaskType",
        title: "TaskType",
        width: "120px"
      },{
        field: "CrurrentPerson",
        title: "任务负责人",
        width: "180px"
      },{
        field: "TaskContent",
        title: "任务名称",
        width: "120px"
      },{
        field: "StartTime",
        title: "开始时间",
        width: "120px"
      },{
        field: "EndTime",
        title: "结束时间",
        width: "120px"
      }
      ],
      change:function(){
        var gview = $("#gridTask").data("kendoGrid");
        //Getting selected item
        var selectedItem = gview.dataItem(gview.select());
        self.selectedTaskID = selectedItem.TaskID

      }
    };

    self.CheckStatusSearch =function(){
      //var itemval = $scope.mainGridOptions.selectedKeyNames();
      //var ssss=self. $scope.EquipNameInput.text;
      // self.rStr=gridGD.EquipNameInput.text;
      // console.log($scope.mainGridOptions);
      // $scope.mainGridOptions.dataSource.transport.read;
      var grid = $("#gridTask").data("kendoGrid");
      self.maintenanceDataSource.read();
      //grid.dataSource.read();

      grid.refresh();
      var row = grid.select("tr:eq(0)");

    }

    var createGDURL="http://192.168.10.104:50388/api/MROData/PostCreateGD"
    self.goToTaaskWeb=function(){
      console.log(self.selectedTaskID);
      if(self.selectedTaskID != null){
        window.location.href=equipPage + self.selectedTaskID + ":D";
      }
      else{
        alert("不存在对应的导航对象")
      }
    }

  });
