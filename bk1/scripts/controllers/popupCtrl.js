'use strict';

/**
 * @ngdoc functionSS
 * @name homer.controller:popupCtrl
 * @description
 * # popupCtrl
 * Controller of the homer

 */
  
angular.module('docubasic3App')
  .controller('popupCtrl',['$scope', '$state', '$timeout','$rootScope','$stateParams','$uibModal','loginService','$location','billingservice','packageService',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$uibModal,loginService,$location,billingservice,packageService) {


  
    $rootScope.alerts = [];
    $scope.collapsed = function(){

      $scope.collapsedold = true;
      $scope.collapsednew = false;
    };

     $scope.collapsed1 = function(){
      $scope.collapsedold = false;
      $scope.collapsednew = true;
    };

  $scope.check = function(){
    var data = {

      name:$scope.signup.orgname
      };

    loginService.tanancy.save((data), function(user) {

        $scope.signup.tenancy = user.data.tenancycode;
        $scope.orgdata = user.data;
      });
     // $scope.tenancy = $scope.orgData.tenancycode;     
  };

  billingservice.getpackages.query({}, function(data){
     $scope.alerts=[];
        $scope.packagedata = data.data;
         

    });

  $scope.checkcode = function(){
       $scope.alerts = [];
      var data1 = {
        tenancy_code:$scope.signup.tenancy
    };
    loginService.tanancycode.save((data1), function(user) {

        //$scope.tenancy = user.data.tenancycode;
        $scope.signup.orgmessage = user.message;
        if(user.status === false){

           $scope.alerts.push({msg: 'Invalid Tenancy', type:'danger'});
        }
    });

  };

  $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

    $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
  };

  $scope.checkid = function(){
  var data2 = {
      tenancy_code:$scope.signup.tenancycode

    };

    loginService.tanancycodecheck.save((data2), function(user) {

        //$scope.tenancy = user.data.tenancycode;
        //$scope.orgmessage = user.message;
        if(user.status === true){
        $scope.signup.orgnamenew = user.data.companyname;
        $scope.org = user.data;
      }

      else if (user.status === false){
        
        $scope.errors = user.message;

      }
      });


  };

$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
$scope.signup = function(){
  $scope.tprovider = '0';
  $scope.stoken ='0';
  var data = {
    first_name:$scope.signup.fname,
    last_name:$scope.signup.lname,
    email:$scope.signup.email,
    //password:$scope.password,
    tenancy_code:$scope.signup.tenancy,
    is_tenant_admin:$scope.orgdata.istenantadmin,
    is_billable:$scope.orgdata.isbillable,
    token_provider:$scope.tprovider,
    created_by:'0',
    name:$scope.signup.orgname,
    tenancy_id:'0',
    social_media_token:$scope.stoken


  };

  loginService.orgsignup.save((data), function(data1) {
      $rootScope.alerts=[];
      $rootScope.loginalerts=[];
    $scope.responce = data1.data;
      //$scope.orgData = user.userdata;
      if(data1.status === true){
         $rootScope.alerts.push({msg: 'Thank you signing up with DocuBasic. Please check your email for password setup.', type:'success'});
        $location.path( "/login" );
       

         /* $scope.fname="";
          $scope.lname="";
          $scope.email="";
          $scope.tenancy="";
          $scope.orgname="";*/
          $scope.signup="";

      
       //$rootScope.modalInstance.close();
       
     }
    else if(data1.status === false){
      $location.path( "/sign-upnew" );
     $rootScope.alerts = data1.message;
      //$scope.alerts.push({msg: $scope.errors, type:'danger'});

     }

    });
 

};
  
$scope.active = function(info){

  $rootScope.packageid = info.package_id;
  $scope.products = packageService.getXxx();
  console.log($scope.products);
  var data = {
    first_name:$scope.products.first_name,
    last_name:$scope.products.last_name,
    email:$scope.products.email,
    //password:$scope.password,
    tenancy_code:$scope.products.tenancy_code,
    is_tenant_admin:$scope.products.is_tenant_admin,
    is_billable:$scope.products.is_billable,
    token_provider:$scope.products.token_provider,
    created_by:'0',
    name:$scope.products.name,
    tenancy_id:'0',
    social_media_token:$scope.products.social_media_token,
    package_id:$rootScope.packageid


  };


  

};

$scope.signupnew = function() {
  var odata = {

   first_name:$scope.signup.nfname,
    last_name:$scope.signup.nlname,
    email:$scope.signup.nemail,
    //password:$scope.password,
    tenancy_code:$scope.tenancy,
    is_tenant_admin:$scope.org.istenantadmin,
    is_billable:$scope.org.isbillable,
    token_provider:'0',
    created_by:'0',
    name:$scope.signup.orgnamenew,
    tenancy_id:$scope.org.tenancy_id,
    social_media_token:0


  };

  loginService.orgsignup.save((odata), function(message) {
      $rootScope.alerts = [];
      $rootScope.loginalerts=[];
   // $scope.responce = message.data;
     if(message.status === true){
        $rootScope.alerts.push({msg: 'Thank you signing up with DocuBasic. Please check your email for password setup.', type:'success'});
       $location.path( "/login" );
      /*$scope.nfname="";
      $scope.nlname="";
      $scope.nemail="";
      $scope.tenancy="";
      $scope.orgname="";
      $scope.org.tenancy_id="";
      $scope.tenancycode = "";*/
      $scope.signup="";

     
        //$rootScope.modalInstance.close();
        

     }
      else if(message.status === false){
      //$scope.alerts.push({msg: 'Email already registered', type:'danger'});
       $scope.errors = message.message;

     }
      //$scope.orgData = user.userdata;
    });

};

$scope.forgetPassword = function(){

  var data1 = {
email:$scope.email,
//tanancy_id:'0'

  };


loginService.frgtpassword.save(data1, function(data) {
    $scope.alerts = [];
    if (data.status === false) {
      //$scope.alerts.push({msg: 'Invalid Email', type:'danger'});
      $scope.errors = data.message;

     
    } 
else if (data.status === true) {
  $scope.alerts.push({msg: 'Check Your Email', type:'success'});

}
    
      //$scope.orgData = user.userdata;
    });

};


}]);
