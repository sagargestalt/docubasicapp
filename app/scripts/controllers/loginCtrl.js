'use strict';

/**
 * @ngdoc function
 * @name WhoositApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the WhoositApp
 */
angular.module('docubasic3App')
  .controller('loginCtrl',['$scope', '$state', '$timeout','$rootScope','$stateParams','$uibModal','loginService','localStorageService','$location','GooglePlus',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$uibModal,loginService,localStorageService,$location,GooglePlus) {


$rootScope.$on('event:social-sign-in-success', function(event, userDetails){


  $scope.userinfo = userDetails;
   $rootScope.semail = userDetails.email;
              $rootScope.token = userDetails.uid;
              $rootScope.slname  = userDetails.fname;
              $rootScope.sfname = userDetails.lname;
               $rootScope.tpid = 2;

  var data1 = {

                email:$scope.semail,
                token_provider:$rootScope.tpid,
                social_media_token:$rootScope.token


              };
              loginService.login.save(angular.toJson(data1), function(data) {

                 if (data.status === true) {

                    $rootScope.isLogin = true;
                    $rootScope.tenancyid = data.data.tenancy_id;
                    $rootScope.userid = data.data.id;
                    $rootScope.username = data.data.firstname;


                     if(data.data.istenantadmin === 1){

                    $rootScope.isAdmin = true;
                  }

                   $location.path( "/main" );

                 }
                 

                  else if(data.status === false){

                      $rootScope.modalInstance = $uibModal.open({
                      animation: $scope.animationsEnabled,
                      templateUrl: 'views/socialsignup.html',
                      controller: 'loginCtrl',
                     //size: size,
                      resolve: {
        
                      }
                  });




                 }
                

                


                  });
});
    //$scope.userdata = userDetails;
     // $rootScope.login=true;
        $rootScope.closeAlerts = function(index) {
            $rootScope.alerts.splice(1, index);
            $rootScope.alerts = [];
        };
        $scope.closeAlerts = function(index) {
           $rootScope.loginalerts.splice(1, index);
            $rootScope.loginalerts = [];
        };

 

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


                  //$rootScope.tenancyid = 1;
                  //$rootScope.userid = 2;
               // $rootScope.userName = message.data.name;
               // $rootScope.checkVisible = message.user_detail.modules;
                //$location.path('dashboard');
                //$state.go( 'dashbord' );
                $location.path( "/main" );

            }
            else  {
                $scope.alerts.push({msg: 'Invalid Username or password. Please try again', type:'danger'});
            }

             if(data.data.istenantadmin === 1){

                    $rootScope.isAdmin = true;

                  }

              if(data.data.istenantadmin === 0){

                    $rootScope.isAdmin = false;

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


    function init() {
        $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            $location.path( "/login" );
            return false;
        }
         
    }
    init();

     $rootScope.signup = function () {
      $rootScope.alerts=[];
    $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/sign-up.html',
     controller: 'popupCtrl',
      //size: size,
      resolve: {
        
      }
    });
};

     $scope.forgotpassword = function () {
      $rootScope.alerts=[];
    $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/forgot-password.html',
      controller: 'popupCtrl',
      //size: size,
      resolve: {
        
      }
    });
};
  
  

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
    };

      $scope.login = function () {
        $scope.alerts = [];
        GooglePlus.login().then(function (authResult) {
            console.log(authResult);

            GooglePlus.getUser().then(function (user) {
                //console.log(user);
                //SocialLoginservice.userdetail(user);
                $rootScope.tpid = 1;
              $rootScope.semail = user.email;
              $rootScope.token = user.id;
              $rootScope.sfname = user.family_name;
              $rootScope.slname = user.given_name;
              var data1 = {

                email:$scope.semail,
                token_provider:$rootScope.tpid,
                social_media_token:$rootScope.token


              };
              loginService.login.save(angular.toJson(data1), function(data) {

                 if (data.status === true) {
                    
                    $rootScope.isLogin = true;
                    $rootScope.tenancyid = data.data.tenancy_id;
                    $rootScope.userid = data.data.id;
                    $rootScope.username = data.data.firstname;


                     if(data.data.istenantadmin === 1){

                    $rootScope.isAdmin = true;
                  }

                   $location.path( "/main" );

                 }
                 

                  else if(data.status === false){

                      $rootScope.modalInstance = $uibModal.open({
                      animation: $scope.animationsEnabled,
                      templateUrl: 'views/socialsignup.html',
                      controller: 'loginCtrl',
                     //size: size,
                      resolve: {
        
                      }
                  });




                 }
                

                


                  });
 
            });
        }, function (err) {
            console.log(err);
            $scope.alerts.push({msg: 'Cant connect at the moment try again latter', type:'danger'});
        });
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

    $scope.check = function(){
    var data = {

    name:$scope.orgname
    };

  loginService.tanancy.save((data), function(user) {

      $scope.tenancy = user.data.tenancycode;
      $scope.orgdata = user.data;
      if(user.status === false){

         $scope.errors = user.message;
      }

    });
   // $scope.tenancy = $scope.orgData.tenancycode;     
  };

  $scope.checkcode = function(){
     $scope.alerts = [];
    var data1 = {
      tenancy_code:$scope.tenancy
    }; 
    loginService.tanancycode.save((data1), function(user) {

      //$scope.tenancy = user.data.tenancycode;
      $scope.orgmessage = user.message;
      if(user.status === false){

         $scope.alerts.push({msg: 'Tenancyid already registered', type:'danger'});
      }
    });


  };
  $scope.checkid = function(){
     $scope.alerts = [];
  var data2 = {
    tenancy_code:$scope.tenancycode

  };
  loginService.tanancycodecheck.save((data2), function(user) {

      //$scope.tenancy = user.data.tenancycode;
      if(user.status === true){
      $scope.orgmessage = user.message;
      $scope.orgname = user.data.companyname;
      $scope.org = user.data;
    }
    else{

       $scope.alerts.push({msg: 'Enter Valid Tenancy Code', type:'danger'});
    }
    });

  };

  $scope.socialsignup = function(){

    var data = {
    first_name:$scope.fname,
    last_name:$scope.lname,
    email:$rootScope.semail,
    //password:$scope.password,
    tenancy_code:$scope.tenancy,
    is_tenant_admin:$scope.orgdata.istenantadmin,
    is_billable:$scope.orgdata.isbillable,
    token_provider:$rootScope.tpid,
    //created_by:'0',
    name:$scope.orgname,
    tenancy_id:'0',
    social_media_token:$rootScope.token


  };

  loginService.orgsignup.save((data), function(message) {
      $scope.alerts = [];
    $scope.responce = message.data;
      //$scope.orgData = user.userdata;
      if(message.status === true){
       //$uibModal.close();
        $rootScope.isLogin = true;
                $rootScope.tenancyid = message.data.tenancy_id;
                  $rootScope.userid = message.data.id;
                  $rootScope.username = message.data.firstname;
                  $rootScope.modalInstance.close();

                  if(message.data.istenantadmin === 1){

                    $rootScope.isAdmin = true;
                  }
                    
      $location.path( "/main" );
     }
   else if(message.status === false){
     $scope.errors = message.message;

     }

      

      

    });





};

  $scope.socialsignupnew = function(){
    
  var odata = {

   first_name:$scope.fname,
    last_name:$scope.lname,
    email:$rootScope.semail,
    //password:$scope.password,
    tenancy_code:$scope.tenancycode,
    is_tenant_admin:$scope.org.istenantadmin,
    is_billable:$scope.org.isbillable,
    token_provider:$rootScope.tpid,
    created_by:'0',
    name:$scope.orgname,
    tenancy_id:$scope.org.tenancy_id,
    social_media_token:$rootScope.token
    


  };

  loginService.orgsignup.save((odata), function(message) {
      $scope.alerts = [];
    $scope.responce = message.data;
     if(message.status === true){
      
      $rootScope.isLogin = true;
                $rootScope.tenancyid = message.data.tenancy_id;
                  $rootScope.userid = message.data.id;
                  $rootScope.username = message.data.firstname;
                  $rootScope.modalInstance.close();

                  if(message.data.istenantadmin === 1){

                    $rootScope.isAdmin = true;
                  }
                  
      $location.path( "/main" );
     }
      else if(message.status === false){
       $scope.errors = message.message;
     }

   
      //$scope.orgData = user.userdata;
    });





  };

  

}]);