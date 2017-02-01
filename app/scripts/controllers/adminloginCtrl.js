'use strict';

/**
 * @ngdoc function
 * @name WhoositApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the WhoositApp
 */
angular.module('docubasic3App')
  .controller('adminloginCtrl',['$scope', '$state', '$timeout','$rootScope','$stateParams','$uibModal','loginService','localStorageService','$location','GooglePlus',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$uibModal,loginService,localStorageService,$location,GooglePlus) {
     
$rootScope.isLogin = localStorageService.get('isLogin');
        if($rootScope.isLogin === true) {
            //$location.path( "/main" );
            return false;
        }
       

 

  	 $scope.loginSubmit = function() {
    	var loginCredentials = {
    		email: $scope.email,
    		password: $scope.password,
        token_provider:'0',
       //remember_token:$scope.remember
    	};
    	loginService.login.save(angular.toJson(loginCredentials), function(data) {
            $scope.alerts = [];
           if (data.status === true) {
            	console.log("login");

               //$rootScope.organisationId = message.data.login_id;
            //$rootScope.userType = message.data.user_type;
             
                $rootScope.isLogin = true;
                $rootScope.tenancyid = data.data.tenancy_id;
                  $rootScope.userid = data.data.id;
                  $rootScope.username = data.data.firstname;
                  $rootScope.tenancy_code = data.data.tenancy_code;
                   localStorageService.set('tenancy_code',$rootScope.tenancy_code);
              

                  //$rootScope.tenancyid = 1;
                  //$rootScope.userid = 2;
               // $rootScope.userName = message.data.name;
               // $rootScope.checkVisible = message.user_detail.modules;
                //$location.path('dashboard');
                //$state.go( 'dashbord' );
                //$location.path( "/main" );

            }
            else  {
                $scope.alerts.push({msg: 'Invalid Username or password. Please try again', type:'danger'});
            }

             if(data.data.istenantadmin === "1"){

                    $rootScope.isAdmin = true;

                  }

              if(data.data.istenantadmin === "2"){

                $rootScope.isLogin = false;
                $rootScope.tenancyid = undefined;
                  $rootScope.userid =undefined;
                  $rootScope.username = undefined;
                  $rootScope.tenancy_code = undefined;
                   
                     $location.path( "/package-management" );



                  }
    	});

    };

    $scope.$watch('isLogin', function () {
      localStorageService.set('isLogin', $rootScope.isLogin);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
     $scope.$watch('userid', function () {
      //localStorageService.set('isLogin', $rootScope.isLogin);
      localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('tenancyid', function () {
      localStorageService.set('tenancyid',$rootScope.tenancyid );
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('username', function () {
      localStorageService.set('username',$rootScope.username );
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('isAdmin', function () {
      localStorageService.set('isAdmin',$rootScope.isAdmin);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('tenancy_code', function () {
      localStorageService.set('tenancy_code',$rootScope.tenancy_code);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);


    function init() {
        $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            //$location.path( "/login" );
            return false;
        }
        
       
         
    }
    init();

  
    
  
  

 $rootScope.Logout = function() {
      $rootScope.unableLogin = false;
      $rootScope.userid = undefined;
      $rootScope.userName = undefined;
      $state.go( 'Login' );
    };
$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
    $scope.closeAlert = function(index) {
        $scope.loginalerts.splice(1, index);
        $scope.loginalerts = [];
    };

    $scope.closeAlert = function(index) {
        $rootScope.errors.splice(1, index);
        $rootScope.errors = [];
        $scope.loginalerts.splice(1, index);
        $scope.loginalerts = [];
         $scope.alerts.splice(1, index);
        $scope.alerts = [];
        $scope.loginalerts.splice(1, index);
        $scope.loginalerts = [];
    };

      









    $scope.collapsed = function(){

      $scope.collapsedold = true;
      $scope.collapsednew = false;
      $scope.fname = $rootScope.slname;
      $scope.lname = $rootScope.sfname;

    };

     $scope.collapsed1 = function(){
      $scope.collapsedold = false;
      $scope.collapsednew = true;
       $scope.fname = $rootScope.slname;
      $scope.lname = $rootScope.sfname;

    };

    
 

  

 

 


  

}]);