'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('MainCtrl', ['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice','userservice','$route','$uibModal',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice,userservice,$route,$uibModal ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
 $rootScope.isAdmin = localStorageService.get('isAdmin');
 $rootScope.userid = localStorageService.get('userid');
 $rootScope.username = localStorageService.get('username');
  $scope.$route = $route;
 $rootScope.alerts=[];
 $scope.loginalerts=[];

 $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            //$location.path( "/login" );
            return false;
        }
 
  
  

  	var tid = {
          id:$rootScope.tenancyid 
      };

      billingservice.getbilldetail.query((tid), function(data){

        $scope.billingdata = data.data;
         
    });

    var notesdata={
	     tenancy_id:$rootScope.tenancyid 
      };
      settingservice.getnote.save((notesdata), function(data){
		
        $scope.notes = data.data;
         

    });
    var data =  {id:$rootScope.tenancyid };
      userservice.getuserdetail.query((data), function(data1){
    
        $scope.userdata = data1.data;
        $scope.usercount = data1.data.users_count;
         $scope.admincount = data1.data.admin_count;

    });

    var todosdata={
      tenancy_id:$rootScope.tenancyid 
      };
      settingservice.gettodos.save((todosdata), function(data){
     
        $scope.todos = data.data;
         

    });
  var praposaldata={
    id:$rootScope.tenancyid 
    };

    settingservice.getpraposaldata.query((praposaldata), function(data){
     
          $scope.praposals = data.data;
         

  });



      var data1 = {
          id:$rootScope.tenancyid 


        };

        settingservice.getpraposalwon.query((data1), function(data){
         
            $scope.praposalswon = data.data;
             

      });


      var data2 = {
        id:$rootScope.tenancyid 


        };

        settingservice.getpraposalloss.query((data2), function(data){
         
            $scope.praposalsloss = data.data;
             

      });
      $scope.createpraposal = function(){
       $rootScope.modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/createproposal.html',
          controller: 'createproposalCtrl',
            windowClass: 'modal-lg',
            //size: size,
            resolve: {
              
            }
            });





      };

      var activitydata = {
      tenancy_id:$rootScope.tenancyid 


    };

    settingservice.resentactivity.save((activitydata), function(data){
     
        $scope.resentactivitydata = data.data.activitys;
         

  });


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

          $rootScope.modalInstance.close();
          $scope.alerts.push({msg: 'User added successfully', type:'success'});
          $scope.collapsed = false;
          $scope.fname="";
          $scope.lname="";
          $scope.utype="";
          $scope.message="";
          $scope.email="";
           $scope.closebar();
       }

       else if (data1.status === false){

        $scope.errors = data1.message;

       }

    });


  };



  $scope.closebar = function(){
         $rootScope.modalInstance.close();

      };
$scope.createuser = function(){
       $rootScope.modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/usernew.html',
          controller: 'MainCtrl',
            windowClass: 'modal-lg',
            //size: size,
            resolve: {
              
            }
            });





      };

    
  }]);
