'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:todoctrl
 * @description
 * # todoctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('packagemgtctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice','sweetAlert',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice,sweetAlert ) {

            
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
var tid = {
  id:$rootScope.tenancyid 
};

 billingservice.getbilldetail.query((tid), function(data){
 $scope.alerts=[];
        $scope.billingdata = data.data;
         
    });


 	billingservice.getpackages.query({}, function(data){
		 $scope.alerts=[];
        $scope.packagedata = data.data;
         

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
        $scope.pkgname="";
          $scope.pkgrent="";
          $scope.plimit="";
          $scope.userlmt="";
          $scope.message="";
          $scope.resource.submit = false;

    };


  $scope.closesidebar = function(){
   $rootScope.rightSidebar1 = false;


      };

      $scope.insertpackage = function(){

        var data = {
          name:$scope.pkgname,
          monthly_charge:$scope.pkgrent,
          //proposal_limit:$scope.plimit,
          user_limit:$scope.userlmt,
          created_by:$rootScope.userid,
          description:$scope.message


        };

        billingservice.addpackages.post((data), function(data1){
          $timeout(countUp, 10000);
          $scope.alerts=[];
          if(data1.status == true){
             $scope.alerts.push({msg: 'Package added successfully', type:'success'});
             init();
             $scope.collapsed = false;
       $scope.update = false;
       $scope.hideadd = false;
        $scope.pkgname="";
          $scope.pkgrent="";
          //$scope.plimit="";
          $scope.userlmt="";
          $scope.message="";
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

  $scope.updatepackage = function(info){
     $scope.hideadd = true;
     $scope.edit = true;
    $scope.collapsed = true;
    $scope.update = true;
      console.log(info);
      $scope.id = info.package_id;
      $scope.pkgname = info.name;
      $scope.pkgrent = info.monthly_charge;
      //$scope.plimit = info.proposal_limit;
      $scope.userlmt = info.user_limit;
      $scope.message = info.description;

  };

  $scope.updatepackagedata = function(){
    var data = {
            id:$scope.id,
          name:$scope.pkgname,
          monthly_charge:$scope.pkgrent,
          //proposal_limit:$scope.plimit,
          user_limit:$scope.userlmt,
          created_by:$rootScope.userid,
          description:$scope.message,
          updated_by:$rootScope.userid 


        };

        billingservice.updatepackages.update((data), function(data1){
          $timeout(countUp, 10000);
          $scope.alerts=[];
          if(data1.status == true){
            init();
             $scope.alerts.push({msg: 'Package updated successfully', type:'success'});
             $scope.collapsed = false;
       $scope.update = false;
       $scope.hideadd = false;
        $scope.pkgname="";
          $scope.pkgrent="";
          //$scope.plimit="";
          $scope.userlmt="";
          $scope.message="";
          $scope.resource.submit = false;

          }
          if(data1.status == false){
            $scope.errors = data1.message;


          }
        
        //$scope.packagedata = data.data;
         

    });


  };

  $scope.deletepackage = function(info){
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
          id:info.package_id,
          updated_by:"1"
        };
         billingservice.deletepackage.save((data), function(data1){
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
