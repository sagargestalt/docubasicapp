'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:todoctrl
 * @description
 * # todoctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('discountmgtctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice','sweetAlert',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice,sweetAlert ) {
 
       $rootScope.isLogin = false;
        localStorageService.set('isLogin',$rootScope.isLogin);
          $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
   // $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('aaSorting', [[2, 'desc']])
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };

    var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };

 function init(){

 billingservice.gettenancys.query( function(data){
 $scope.alerts=[];
        $scope.tenancys = data.data;
         
    });
billingservice.getdiscountedtenancys.query( function(data){
 $scope.alerts=[];
        $scope.dtenancys = data.data;
         
    });


 	billingservice.getpackages.query({}, function(data){
		 $scope.alerts=[];
        $scope.packagedata = data.data;
         

    });

  billingservice.getallusers.query({}, function(data){
     $scope.alerts=[];
        $scope.allusers = data.data.users;
         

    });


 };
 init();

  $scope.createpackage = function(){
    $scope.collapsed = true;

  };

  $scope.closeuser = function(){
    

       $scope.collapsed = false;
       $scope.update = false;
       $scope.hideadd = false;
      $scope.tncy = "";
        $scope.fdt= "";
        $scope.edt = "";
         
        $scope.disct = "";
        
          $scope.resource.submit = false;

    };


    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.openb = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened2 = true;
    };



  $scope.closesidebar = function(){
   $rootScope.rightSidebar1 = false;


      };

      $scope.insertdiscount = function(){

        var data = {
         tenancy_id:$scope.tncy,
         start_date:$scope.fdt,
         end_date:$scope.edt,
         created_by:"1",
         value:$scope.disct,

        };

        billingservice.adddiscount.save((data), function(data1){
          $scope.alerts=[];
            $timeout(countUp, 10000);
          if(data1.status == true){

             $scope.alerts.push({msg: 'Package added successfully', type:'success'});
             init();
             $scope.collapsed = false;
       $scope.update = false;
       $scope.hideadd = false;
        $scope.tncy ="";
        $scope.fdt = "";
        $scope.edt="";
        $scope.disct="";
          
          $scope.resource.submit = false;


          }

          if(data1.status == false){
            $scope.errors = data1.message;


          }
        
        //$scope.packagedata = data.data;
         

    });



      };


 

  $scope.$watch('packageid', function () {
      localStorageService.set('packageid',$rootScope.packageid);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

  $scope.updatediscount = function(detail){
     $scope.hideadd = true;
     $scope.edit = true;
    $scope.collapsed = true;
    $scope.update = true;
     
      $rootScope.id = detail.id;
     $scope.fdt = new Date(detail.start_date);
     $scope.edt = new Date(detail.end_date);
     $scope.disct = detail.discount;
     $scope.tname = detail.first_name;

  };

  $scope.updatepackagedata = function(){
    var data = {
            id:$rootScope.id,
          tenancy_id:$scope.tncy,
         start_date:$scope.fdt,
         end_date:$scope.edt,
         created_by:"1",
         value:$scope.disct,


        };

        billingservice.updatediscount.update((data), function(data1){
          $scope.alerts=[];
            $timeout(countUp, 10000);
          if(data1.status == true){
            init();
             $scope.alerts.push({msg: 'Package updated successfully', type:'success'});
             $scope.collapsed = false;
       $scope.update = false;
       $scope.hideadd = false;
         $scope.tncy = "";
        $scope.fdt= "";
        $scope.edt = "";
         
        $scope.disct = "";
          $scope.resource.submit = false;

          }
          if(data1.status == false){
            $scope.errors = data1.message;


          }
        
        //$scope.packagedata = data.data;
         

    });


  };

  $scope.deletediscount = function(detail){
    sweetAlert.swal({
                title: "Are you sure you want to delete?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {

                    var data = {
          id:detail.id,
          updated_by:"1"
        };
         billingservice.deletediscount.save((data), function(data1){
     $scope.alerts=[];
       // $scope.userdata = data1;
        //$scope.collapsed = false;
        if(data1.status === true){
         //$scope.alerts.push({msg: 'User deleted successfully', type:'success'});
         init();
         }

    });
                    sweetAlert.swal("Deleted!", "package deleted successfully", "success");
                   
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
        



  };



  		}]);
