'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:settingCtrl
 * @description
 * # settingCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('passwordctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','loginService',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,loginService ) {

$scope.email = $routeParams.email;
$scope.tenancyid = $routeParams.tenancy_id;
 $scope.activation_key = $routeParams.activation_key;

var data = {

  email:$scope.email,
  activation_key:$scope.activation_key,
}
loginService.checkuser.save((data), function(data1){
  $rootScope.alerts=[];
  if(data1.status === false){
  $rootScope.alerts.push({msg: 'Password setup url has been expired.  ', type:'danger'});
    $location.path( "/login" );

  }


  }); 
var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000); 

    };

    $timeout(countUp, 10000);


$scope.alerts = [];
$scope.tip =  "Password must be minimum 8 and maximum 20 characters long with 1 number, 1 special character, 1 Upper case and 1 lower case letter.";
$scope.submit = function(){
var data = {
	email:$scope.email,
	password:$scope.password,
	password_confirmation:$scope.repassword,
	tenancy_id:$scope.tenancyid
};
 loginService.setpassword.save((data), function(data){
   $rootScope.alerts=[];
   $rootScope.loginalerts=[];

        $scope.message = data.message;
        if(data.status === true){
          $rootScope.alerts.push({msg: 'Password updated, you can login from here.  ', type:'success'});
        	$location.path( "/login" );
        }
          else if(data.status === false){

           $scope.errors = data.message;
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

     $scope.user = {
                    name: {
                         required: true,
                         minlength: 5,
                         maxlength: 25
                    }
               };
  	}]);