'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:searchCtrl
 * @description
 * # searchCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('searchCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,settingservice) {
    
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');


      $scope.search = function(){

      	var data = {
      		tenancy_id:$rootScope.tenancyid,
      		text:$scope.query

      	};


      	settingservice.search.save((data), function (data3){
      		$location.path( "/searchresult" );
      		$rootScope.searchdata = data3.data;
    		$scope.result=true;


       		////$scope.gridOptions.data = data3.data;
       		//$scope.allstates = data.data.states;
     		
     		});





      };

       $rootScope.logout = function(){
$rootScope.isLogin = false;
$rootScope.tenancyid = undefined;
$rootScope.userid = undefined;
$rootScope.username = undefined;
$rootScope.isAdmin = undefined;


$location.path( "/login" );

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
  $scope.userprofile=function(){
 $location.path( "/user-profile" );
  };


$scope.companysetting=function(){
 $location.path( "/settingpage" );
  };

  


     });