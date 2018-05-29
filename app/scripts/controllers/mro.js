'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:MroctrlCtrl
 * @description
 * # MroctrlCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('MroctrlCtrl', function ($scope) {
    $scope.mainGridOptions = {
      dataSource: {
        type: "odata",
        transport: {
          read: "http://localhost:51008/api/MROData/GetMROTableList"
        },
        pageSize: 5,
        serverPaging: true,
        serverSorting: true
      },
      sortable: true,
      pageable: true,
      dataBound: function() {
        this.expandRow(this.tbody.find("tr.k-master-row").first());
      },
      columns: [{
        field: "Name",
        title: "First Name",
        width: "120px"
      },{
        field: "TypeClass",
        title: "Last Name",
        width: "120px"
      },{
        field: "Description",
        width: "120px"
      },{
        field: "Description",
        width: "120px"
      },{
        field: "Description"
      }]
    };

    $scope.detailGridOptions = function(dataItem) {
      return {
        dataSource: {
          type: "odata",
          transport: {
            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
          },
          serverPaging: true,
          serverSorting: true,
          serverFiltering: true,
          pageSize: 5,
          filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
        },
        scrollable: false,
        sortable: true,
        pageable: true,
        columns: [
          { field: "OrderID", title:"ID", width: "56px" },
          { field: "ShipCountry", title:"Ship Country", width: "110px" },
          { field: "ShipAddress", title:"Ship Address" },
          { field: "ShipName", title: "Ship Name", width: "190px" }
        ]
      };
    };
  });
