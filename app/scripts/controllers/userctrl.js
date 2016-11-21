'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:userctrl
 * @description
 * # userctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('userctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert','$route',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert,$route) {
 $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
   $rootScope.tenancyid = localStorageService.get('tenancyid');
    $rootScope.username = localStorageService.get('username');
     $scope.$route = $route;

    function init() {
   $scope.collapsed = false;
   $scope.edit = false;
var data =  {id:$rootScope.tenancyid };
    userservice.getuserdetail.query((data), function(data1){
   
        $scope.userdata = data1.data;
         

    });
   
  }


  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };

   $timeout(countUp, 10000);


  
    

      $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };

    $scope.closeuser = function(){
      init();

       $scope.collapsed = false;
       $scope.update = false;
       $scope.hideadd = false;
        $scope.fname="";
          $scope.lname="";
          $scope.utype="";
          $scope.message="";
          $scope.email="";

    };


$scope.usertype = [{id:1,type:'Tenant Admin'},
                  {id:0,type:'End User'}];

  $scope.insertuser = function(){

  	var data = {
  		first_name:$scope.fname,
  		last_name:$scope.lname,
  		is_tenant_admin:$scope.utype,
  		admin_message:$scope.message,
  		email:$scope.email,
  		created_by:$rootScope.userid,
  		tenancy_id:$rootScope.tenancyid

  	};
  		userservice.postuserdetail.save((data), function(data1){
		 $scope.alerts=[];
        $scope.userdata = data1;

        if(data1.status === true){

          $scope.alerts.push({msg: 'User added successfully', type:'success'});
          $scope.collapsed = false;
          $scope.fname="";
          $scope.lname="";
          $scope.utype="";
          $scope.message="";
          $scope.email="";
         init();
       }

       else if (data1.status === false){

        $scope.errors = data1.message;
        // init();

       }

    });


  };
  $scope.edituser = function(info){
     $scope.hideadd = true;
     $scope.edit = true;
    $scope.collapsed = true;
    $scope.update = true;
    $scope.id = info.user_id;
    $scope.fname = info.first_name;
    $scope.lname = info.last_name;
    $scope.email = info.email;

    if(info.is_tenant_admin === 1){

      $scope.utype = 1;
    }

    else{
      $scope.utype = 0;
    }
//$location.hash('top');

      // call $anchorScroll()
      //$anchorScroll();

  };

  $scope.updateuser = function(){
   
    var data = {
      first_name:$scope.fname,
      last_name:$scope.lname,
      is_tenant_admin:$scope.utype,
     // admin_message:$scope.message,
      email:$scope.email,
      updated_by: $rootScope.userid, 
      tenancy_id:$rootScope.tenancyid,
      id:$scope.id,

    };
      userservice.updateuserdetail.save((data), function(data1){
     $scope.alerts=[];
       // $scope.userdata = data1;
        
        if(data1.status === true){
          //$scope.edit = false;
          $scope.collapsed = false;
    $scope.update = false;
     $scope.hideadd = false;
         $scope.alerts.push({msg: 'User updated successfully', type:'success'});
         $scope.fname="";
          $scope.lname="";
          $scope.utype="";
          $scope.message="";
          $scope.email="";
         init();
         }

           if(data1.status === false){

            $scope.errors = data1.message;
           
           }



    });
        };

      $scope.deleteuser = function(info){
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
          id:info.user_id,
          updated_by:$rootScope.userid
        };
         userservice.deleteuserdetail.save((data), function(data1){
     $scope.alerts=[];
       // $scope.userdata = data1;
        //$scope.collapsed = false;
        if(data1.status === true){
         //$scope.alerts.push({msg: 'User deleted successfully', type:'success'});
         init();
         }

    });
                    sweetAlert.swal("Deleted!", "User deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
        

      };


init();
  	}]);
